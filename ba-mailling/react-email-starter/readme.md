# BA Chile Mailing

React Email workspace for Bright Alliance | BA Chile mailings.

## Getting Started

Install dependencies:

```sh
npm install
```

Run the local preview:

```sh
npm run dev
```

Open [localhost:3000](http://localhost:3000) and select `ba-propuesta-valor`.

## Verification

```sh
npm run build
npm run export -- --pretty
```

The build generates `.react-email/`. The export generates `out/`. Both are ignored.

Production email images must use absolute HTTPS URLs. Files under `emails/static/`
are available only to React Email's local preview and exported asset folder.

## Agent Log

```sh
npm run agent:log:start -- "BA Mailing V1 Cycle 1"
npm run agent:log:end -- "BA Mailing V1 Cycle 1"
```

The logger appends ISO-dated entries to `LOG.md` and skips identical consecutive
entries.

## License

MIT License
