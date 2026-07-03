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

REMOTE="${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_REMOTE_PATH%/}/"

log "Uploading $LOCAL_DIR/ to $REMOTE"
rsync -az --delete -e "ssh -p $DEPLOY_PORT" "$LOCAL_DIR/" "$REMOTE"

log "Deploy complete"
log "Branch: $CURRENT_BRANCH"
log "Uploaded: $LOCAL_DIR/"
log "Remote: $REMOTE"
