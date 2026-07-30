#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WEBSITE_DIR="$ROOT_DIR/website"
ENV_FILE="$ROOT_DIR/.env.deploy"

log() {
  printf '[deploy] %s\n' "$1"
}

fail() {
  printf '[deploy] ERROR: %s\n' "$1" >&2
  exit 1
}

require_command() {
  command -v "$1" >/dev/null 2>&1 || fail "Required command not found: $1"
}

if [[ ! -f "$ENV_FILE" ]]; then
  fail "Missing $ENV_FILE. Copy .env.deploy.example to .env.deploy and fill the SSH values."
fi

set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
set +a

: "${DEPLOY_HOST:?DEPLOY_HOST is required}"
: "${DEPLOY_USER:?DEPLOY_USER is required}"
: "${DEPLOY_PORT:=22}"
: "${DEPLOY_REMOTE_PATH:?DEPLOY_REMOTE_PATH is required}"
: "${DEPLOY_LOCAL_DIR:=dist}"

require_command git
require_command npm
require_command rsync
require_command ssh

cd "$ROOT_DIR"

CURRENT_BRANCH="$(git branch --show-current)"
if [[ "$CURRENT_BRANCH" != "main" ]]; then
  if [[ "${DEPLOY_ALLOW_NON_MAIN:-}" == "1" ]]; then
    log "Deploying from non-main branch because DEPLOY_ALLOW_NON_MAIN=1: $CURRENT_BRANCH"
  elif [[ -t 0 ]]; then
    printf '[deploy] Current branch is "%s", not "main". Continue? [y/N] ' "$CURRENT_BRANCH"
    read -r answer
    [[ "$answer" == "y" || "$answer" == "Y" ]] || fail "Cancelled by user."
  else
    fail "Current branch is $CURRENT_BRANCH, not main. Set DEPLOY_ALLOW_NON_MAIN=1 only for an intentional manual deploy."
  fi
fi

if [[ -n "$(git status --porcelain)" ]]; then
  git status --short
  fail "Working tree has uncommitted changes. Commit or stash before deploying."
fi

cd "$WEBSITE_DIR"
log "Building website from $WEBSITE_DIR"
npm run build

LOCAL_DIR="$WEBSITE_DIR/$DEPLOY_LOCAL_DIR"
[[ -d "$LOCAL_DIR" ]] || fail "Build output not found: $LOCAL_DIR"

SERVER_DIR="$WEBSITE_DIR/server"
[[ -f "$SERVER_DIR/composer.json" ]] || fail "Contact runtime manifest not found: $SERVER_DIR/composer.json"
[[ -f "$SERVER_DIR/composer.lock" ]] || fail "Contact runtime lockfile not found: $SERVER_DIR/composer.lock"

SSH_TARGET="${DEPLOY_USER}@${DEPLOY_HOST}"
REMOTE_HOME="$(ssh -p "$DEPLOY_PORT" "$SSH_TARGET" 'printf "%s" "$HOME"')"
[[ -n "$REMOTE_HOME" && "$REMOTE_HOME" != "/" ]] || fail "Could not resolve a safe remote home directory."
case "$REMOTE_HOME" in
  /home/*) ;;
  *) fail "Unexpected remote home directory: $REMOTE_HOME" ;;
esac

CONTACT_ROOT="$REMOTE_HOME/.local/share/ba-contact"
CONTACT_RELEASE_ID="$(date -u +%Y%m%d%H%M%S)-$(git rev-parse --short=12 HEAD)"
CONTACT_RELEASE="$CONTACT_ROOT/releases/$CONTACT_RELEASE_ID"
CONTACT_CONFIG="$REMOTE_HOME/.config/ba-contact.php"
[[ "$CONTACT_ROOT" == "$REMOTE_HOME/.local/share/ba-contact" ]] \
  || fail "Refusing unsafe contact runtime path: $CONTACT_ROOT"
[[ "$CONTACT_RELEASE" == "$CONTACT_ROOT/releases/$CONTACT_RELEASE_ID" ]] \
  || fail "Refusing unsafe contact release path: $CONTACT_RELEASE"

log "Checking private contact runtime configuration"
ssh -p "$DEPLOY_PORT" "$SSH_TARGET" bash -s -- "$CONTACT_ROOT" "$CONTACT_RELEASE" "$CONTACT_CONFIG" <<'REMOTE_SETUP'
set -euo pipefail
runtime_root="$1"
release_path="$2"
config_path="$3"

if [[ ! -f "$config_path" ]]; then
  printf '[deploy] ERROR: Missing private contact configuration: %s\n' "$config_path" >&2
  exit 1
fi

if [[ ! -O "$config_path" ]]; then
  printf '[deploy] ERROR: Contact configuration is not owned by the deploy user: %s\n' "$config_path" >&2
  exit 1
fi

config_mode="$(stat -c '%a' "$config_path")"
if [[ "$config_mode" != "600" ]]; then
  printf '[deploy] ERROR: Contact configuration must have mode 600, found %s: %s\n' "$config_mode" "$config_path" >&2
  exit 1
fi

command -v php >/dev/null 2>&1 || {
  printf '[deploy] ERROR: PHP is not available on the remote host.\n' >&2
  exit 1
}
command -v composer >/dev/null 2>&1 || {
  printf '[deploy] ERROR: Composer is not available on the remote host.\n' >&2
  exit 1
}

php -l "$config_path" >/dev/null
php -r '
$config = require $argv[1];
$smtp = is_array($config) && isset($config["smtp"]) && is_array($config["smtp"])
    ? $config["smtp"]
    : [];
$valid = isset($smtp["host"], $smtp["port"], $smtp["username"], $smtp["app_password"])
    && is_string($smtp["host"])
    && trim($smtp["host"]) !== ""
    && is_int($smtp["port"])
    && $smtp["port"] > 0
    && is_string($smtp["username"])
    && filter_var($smtp["username"], FILTER_VALIDATE_EMAIL) !== false
    && is_string($smtp["app_password"])
    && trim(str_replace(" ", "", $smtp["app_password"])) !== ""
    && $smtp["app_password"] !== "REPLACE_WITH_GOOGLE_APP_PASSWORD"
    && isset($config["mail_to"], $config["allowed_origins"])
    && is_string($config["mail_to"])
    && filter_var($config["mail_to"], FILTER_VALIDATE_EMAIL) !== false
    && is_array($config["allowed_origins"])
    && $config["allowed_origins"] !== []
    && count(array_filter($config["allowed_origins"], "is_string")) === count($config["allowed_origins"]);
exit($valid ? 0 : 1);
' "$config_path" || {
  printf '[deploy] ERROR: Contact configuration is incomplete: %s\n' "$config_path" >&2
  exit 1
}

mkdir -p "$runtime_root/releases" "$release_path"
chmod 700 "$runtime_root" "$runtime_root/releases" "$release_path"
REMOTE_SETUP

log "Uploading private contact runtime release $CONTACT_RELEASE_ID"
rsync -az --delete \
  --exclude 'tests/' \
  --exclude 'vendor/' \
  -e "ssh -p $DEPLOY_PORT" \
  "$SERVER_DIR/" \
  "$SSH_TARGET:$CONTACT_RELEASE/"

log "Installing locked contact runtime dependencies"
ssh -p "$DEPLOY_PORT" "$SSH_TARGET" bash -s -- "$CONTACT_RELEASE" <<'REMOTE_COMPOSER'
set -euo pipefail
release_path="$1"
cd "$release_path"
composer install --no-dev --prefer-dist --no-interaction --classmap-authoritative
REMOTE_COMPOSER

log "Activating private contact runtime release"
ssh -p "$DEPLOY_PORT" "$SSH_TARGET" bash -s -- "$CONTACT_ROOT" "$CONTACT_RELEASE" <<'REMOTE_ACTIVATE'
set -euo pipefail
runtime_root="$1"
release_path="$2"
next_link="$runtime_root/.current-next"
current_link="$runtime_root/current"

[[ -d "$release_path/vendor" ]] || {
  printf '[deploy] ERROR: Contact release is missing installed dependencies: %s\n' "$release_path" >&2
  exit 1
}

rm -f "$next_link"
ln -s "$release_path" "$next_link"
mv -Tf "$next_link" "$current_link"
REMOTE_ACTIVATE

REMOTE="$SSH_TARGET:${DEPLOY_REMOTE_PATH%/}/"

log "Uploading $LOCAL_DIR/ to $REMOTE"
rsync -az --delete -e "ssh -p $DEPLOY_PORT" "$LOCAL_DIR/" "$REMOTE"

log "Deploy complete"
log "Branch: $CURRENT_BRANCH"
log "Uploaded: $LOCAL_DIR/"
log "Remote: $REMOTE"
