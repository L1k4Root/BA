# BA Project Agent Instructions

## Current Operating Model

This repository is the intended unified working tree for Bright Alliance local work.

Permanent separation is by directory, not by permanent Git branches:

- `website/`: Astro static website for Bright Alliance / BA Chile.
- `email-marketing/`: React Email templates, mailing exports, and WhatsApp artboard exports.
- `assets/`: shared source assets and brand material.
- `docs/`: operating notes, audits, and workflow documentation.
- `scripts/`: local automation, including SSH deploy.

Branches are temporary change vehicles. Do not use long-lived branches as the boundary between web and mailing work.

## Before Making Changes

1. Run `git status --short --branch`.
2. Confirm the current branch and whether it has an upstream.
3. Read the relevant project docs:
   - Root `README.md`
   - `docs/dev-workflow.md`
   - `website/README.md` for web changes
   - `email-marketing/readme.md`, `email-marketing/DECISIONS.md`, and `email-marketing/LOG.md` for mailing changes
4. Inspect the target files before editing.
5. Keep changes scoped to one product area unless the task explicitly crosses areas.

## Git Rules

- `main` should be the stable, deployable branch for the complete repo.
- Use `feature/<description>` or `fix/<description>` for temporary work.
- Avoid permanent branches named only by product area such as `codex/ba-web` or `codex/ba-mailing` for future workflow.
- Do not commit generated or local runtime files:
  - `node_modules/`
  - `dist/`
  - `.astro/`
  - `.react-email/`
  - `out/`
  - `.env*`, except approved examples such as `.env.deploy.example`
- Do not run Git operations from the parent `MetricLogic` repo when the intent is to change this BA repo. Work from this directory.

## Web Contract

Work from `website/`.

Commands:

```sh
npm install
npm run dev
npm run build
npm run preview
```

Deployment:

```sh
cp .env.deploy.example .env.deploy
cd website
npm run deploy:prod
```

Deploy uses `scripts/deploy.sh`, builds `website/`, and uploads only `website/dist/` over SSH with `rsync --delete`.

Do not deploy from a dirty working tree. Do not deploy from a non-`main` branch unless it is an intentional manual exception using `DEPLOY_ALLOW_NON_MAIN=1`.

## Mailing Contract

Work from `email-marketing/`.

Commands:

```sh
npm install
npm run dev
npm run build
npm run export -- --pretty
npm run export:whatsapp-ads
```

Rules:

- Use absolute HTTPS image URLs for production emails.
- Treat `ba-wa-*` templates as fixed artboards for image export, not sendable email HTML.
- Record relevant mailing decisions in `email-marketing/DECISIONS.md`.
- Use `email-marketing/LOG.md` for meaningful work sessions when the logging scripts are applicable.

## Verification Before Handoff

For web-only changes:

```sh
cd website
npm run build
```

For mailing-only changes:

```sh
cd email-marketing
npm run build
npm run export -- --pretty
```

For cross-area changes, run both verification paths.

If verification was not run, state that explicitly in the final handoff.

## Operational Risks

- The sibling `BA/` checkout is still a separate worktree for the older mailing branch. Do not treat it as the current source of truth for the unified workflow without checking Git state.
- The parent `MetricLogic` repo may show this directory as untracked or nested. That is parent-repo topology noise, not proof that this repo is unmanaged.
- The current checkout may be on a feature branch without an upstream. Confirm before assuming commits are published.
- Hostinger deploy depends on local SSH and `.env.deploy`; never commit real deploy credentials.

## Google Ads Guardrails

- Use the project-scoped `ba_google_ads` MCP only for read-only inspection of the Bright Alliance account.
- Before any GAQL query, run `list_accessible_customers`. Continue only when it returns exactly the documented BA Customer ID; stop on zero, multiple, or mismatched accounts.
- Never mutate campaigns, ad groups, ads, keywords, audiences, bids, budgets, users, account links, goals, or conversion actions.
- Never query another customer or route BA through a shared MCC. Do not set `GOOGLE_ADS_LOGIN_CUSTOMER_ID` for this direct-access contract.
- Use explicit finite date ranges for metrics. Report the account, date range, timezone, currency, and queried fields.
- Keep `metrics.conversions` and `metrics.all_conversions` distinct. Do not present one as the other.
- Do not submit a real contact form, create a test lead, push, deploy, or alter Google Ads configuration without separate explicit authorization.
- Do not put credentials, service-account JSON, PII, lead content, access tokens, or secret values in Git, docs, logs, prompts, or screenshots.
- If a request requires write access, stop and propose a separate reviewed workflow with explicit authorization. Do not bypass these rules through another API, CLI, browser session, or MCP server.
- Follow `docs/google-ads-operations.md` and the repo skill `inspect-ba-google-ads` for allowed queries, authentication, rotation, revocation, and stop conditions.
