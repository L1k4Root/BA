# BA Mailing Agent Notes

- Git is the source of truth. Work from a `feature/*`, `chore/*`, or `codex/*` branch.
- Read `README.md`, `DECISIONS.md`, and `LOG.md` before changing the mailing.
- Use https://bachile.cl as the source for brand and legal-service copy; do not invent claims.
- Keep email HTML table-based, dependency-light, and compatible with major email clients.
- Use absolute HTTPS URLs for production images. Prefer PNG/JPEG over SVG.
- Run `npm run build` and `npm run export -- --pretty` before completion.
- Record relevant implementation decisions in `DECISIONS.md`.
- Do not store credentials, recipient data, or sending-platform secrets in this project.

