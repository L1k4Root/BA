# Bright Alliance

Repositorio unificado para los proyectos de Bright Alliance.

## Estructura

```text
Bright-Alliance/
  website/          Sitio web Astro. Build estatico en website/dist.
  email-marketing/  Plantillas React Email y piezas de mailing.
  assets/           Fuentes visuales, flyers, muestras y material de marca.
  docs/             Documentacion operativa del repo.
  scripts/          Automatizaciones locales, incluido deploy.
```

## Comandos principales

Web:

```sh
cd website
npm install
npm run dev
npm run build
npm run preview
```

Mailing:

```sh
cd email-marketing
npm install
npm run build
npm run export -- --pretty
```

Deploy web:

```sh
cp .env.deploy.example .env.deploy
# completar credenciales SSH del hosting
cd website
npm run deploy:prod
```

El deploy solo sube `website/dist/`. No despliega `email-marketing/` ni `assets/`.

## Flujo Git

La separacion entre web y mailing vive en carpetas, no en ramas permanentes.

- `main`: version completa y estable del repo.
- `develop`: integracion opcional antes de pasar a `main`.
- `feature/*`: cambios temporales de web, mailing, docs o scripts.

Ver [docs/dev-workflow.md](docs/dev-workflow.md) para el flujo completo de ramas, merge y deploy.
