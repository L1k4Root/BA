# Design QA

- Source visual truth, Ingenieria y Derecho: `C:/Users/Andres/AppData/Local/Temp/codex-clipboard-478fa428-6421-47a0-9f33-e05205bd2d2a.png`
- Source visual truth, Derecho de la Empresa: `C:/Users/Andres/AppData/Local/Temp/codex-clipboard-a570e791-c121-464a-bb6b-2d870ce0d0f5.png`
- Implementation screenshots:
  - `out/ba-flyer-ingenieria-derecho.png`
  - `out/ba-flyer-derecho-empresa.png`
- Full-view comparison evidence:
  - `out/qa-comparison-ingenieria-derecho.png`
  - `out/qa-comparison-derecho-empresa.png`
- Viewport: `1120x840`
- State: default light render, fixed 4:3 flyer canvas

## Findings

- No P0/P1/P2 findings remain.
- The implementation preserves the source layout: white left editorial panel, diagonal gold divider, navy right panel, dotted motifs, numbered section, gold heading, advisory bar, and diamond bullet list.
- Copy/content matches the supplied target flyers, with editable React text for headings, leads, and advisory items.
- Typography uses the closest practical email-safe stack: `Montserrat, Avenir Next, Segoe UI, Arial, Helvetica, sans-serif`. Exact source font matching remains dependent on installed/client-supported fonts.
- The exported HTML embeds the BA logo SVG as a data URI for local QA. The React source keeps the reusable `/static/logo-BaChile-azul.svg` asset reference.

## Patches Made

- Added `design-system/ba-flyer.tsx` with shared fixed 4:3 flyer layout and the two data variants.
- Added `emails/ba-flyer-ingenieria-derecho.tsx`.
- Added `emails/ba-flyer-derecho-empresa.tsx`.
- Tuned diagonal divider, right content vertical rhythm, list density, dot placement, and logo sizing after screenshot comparison.

## Verification

- TSX import/render smoke test: passed for both flyer templates.
- React Email render to HTML through `@react-email/render`: passed.
- Chrome headless screenshots at `1120x840`: passed.
- Official `email build`: blocked because the local environment has Node but no `npm`; React Email CLI fails when trying to run `npm install` inside `.react-email`.

final result: passed
