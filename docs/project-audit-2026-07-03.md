# BA / BA Web Project Audit - 2026-07-03

## Scope

Audit of the local Bright Alliance project layout under:

```text
/Users/cfs-andres/Workspace/MetricLogic/ventures/automize/clients
```

Focus:

- How `BA` and `BA-web` are currently managed.
- Whether the split between website and email marketing is operationally clear.
- What model should be used before running website deploys.

## Evidence Checked

Commands used:

```sh
git rev-parse --show-toplevel
git remote -v
git status --short --branch
git worktree list
git branch -a -vv
git submodule status --recursive
find BA BA-web -maxdepth 4 ...
```

Relevant direct observations:

- Parent Git root is `/Users/cfs-andres/Workspace/MetricLogic`.
- Parent repo is on `main` and is behind `origin/main` by 1 commit.
- Parent repo sees:
  - `M ventures/automize/clients/BA`
  - `?? ventures/automize/clients/BA-web/`
- Parent submodule status shows `ventures/automize/clients/BA` as a submodule checked out at `a0aa3e2` on `heads/codex/ba-mailing`.
- `BA` and `BA-web` are part of the same BA Git repository (`git@github.com:L1k4Root/BA.git`) through Git worktree mechanics.
- `BA` is on `codex/ba-mailing` tracking `origin/codex/ba-mailing`.
- `BA-web` is on `feature/ba-web-visual-parity` with no upstream configured.
- BA repo history includes `feature/ba-unified-workflow` (`90ac8d3`) merging the earlier web and mailing lines into one directory-based repo.

## Current State

There are two competing mental models present:

1. Older model: long-lived branch/worktree split.
   - `BA/` = mailing branch.
   - `BA-web/` = web branch/worktree.
   - This model separates products by branch.

2. Newer model: unified repo split by folder.
   - `BA-web/website/` = Astro website.
   - `BA-web/email-marketing/` = React Email mailing.
   - `BA-web/scripts/deploy.sh` = website deploy automation.
   - `BA-web/docs/dev-workflow.md` explicitly says branches should not represent permanent product areas.

The newer model is the cleaner operational model, but the local machine still carries leftovers from the older model.

## Main Finding

The project is not currently confusing because the code is missing. It is confusing because two project-management models are coexisting:

- Git worktrees/branches still suggest "mailing lives in one checkout and web lives in another."
- The newer `BA-web` repo contents document "web and mailing live in one repo, separated by folders."
- The parent `MetricLogic` repo adds another layer of confusion because `BA` is a submodule and `BA-web` appears untracked from the parent view.

This means deploy and commit decisions should not be made from the parent `MetricLogic` repo. They should be made from the BA repo root that owns the intended workflow.

## Recommended Source of Truth

Use:

```text
/Users/cfs-andres/Workspace/MetricLogic/ventures/automize/clients/BA-web
```

as the active BA repo for future work, because it contains:

- `website/`
- `email-marketing/`
- root `README.md`
- `docs/dev-workflow.md`
- `scripts/deploy.sh`
- `.env.deploy.example`

Treat `BA/` as the older mailing worktree until intentionally retired or archived.

## Recommended Workflow

Use folder boundaries:

- Web work: `BA-web/website/`
- Mailing work: `BA-web/email-marketing/`

Use temporary branches:

```sh
git switch main
git pull --ff-only
git switch -c feature/web-home-polish
```

or:

```sh
git switch main
git pull --ff-only
git switch -c feature/mailing-campaign-copy
```

Do not create new permanent branches just to represent "web" or "mailing."

## Deploy Readiness

The deploy path exists:

```sh
cd /Users/cfs-andres/Workspace/MetricLogic/ventures/automize/clients/BA-web/website
npm run deploy:prod
```

But deploy is not ready to run blindly until:

1. `BA-web` is moved or merged to a stable `main` branch.
2. `git status --short --branch` is clean.
3. `.env.deploy` exists locally with Hostinger SSH values.
4. `npm run build` passes inside `website/`.
5. The target remote path is confirmed, because deploy uses `rsync --delete`.

Current verification:

- `npm run build` was executed from `BA-web/website` on 2026-07-03.
- Result: passed.
- Astro generated 24 static pages into `website/dist/`.
- Deploy itself was not executed.

## Immediate Risks

- `BA-web` is on `feature/ba-web-visual-parity`, not `main`.
- `BA-web` has no upstream configured, so local commits may not be pushed anywhere yet.
- Parent `MetricLogic` sees `BA-web` as untracked; do not accidentally `git add` it from the parent repo.
- `rsync --delete` is appropriate for a website deploy only if `DEPLOY_REMOTE_PATH` points exactly to the public website directory.
- Keeping `BA/` and `BA-web/` side by side without naming rules will continue to cause wrong-directory mistakes.

## Smallest Safe Cleanup Plan

1. Treat `BA-web` as the current unified repo.
2. Push or merge `feature/ba-web-visual-parity` intentionally after build verification.
3. Decide whether `main` in the BA repo should become the unified repo branch.
4. Once `main` is correct, deploy only from `BA-web/website`.
5. Rename or archive the old `BA/` worktree after confirming no unique mailing work remains only there.

Do not delete `BA/` yet. It is still the registered worktree for `codex/ba-mailing` and may contain mailing history or assets that need final reconciliation.
