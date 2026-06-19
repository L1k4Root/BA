# BA Chile Mailing

React Email workspace for Bright Alliance | BA Chile mailings.

## Cómo correr el proyecto

Ubícate en `ba-mailling/react-email-starter` y luego ejecuta:

```sh
npm install
npm run dev
```

La preview local queda disponible en [http://localhost:3000](http://localhost:3000).

Dentro del selector de templates, abre el mailing que quieras revisar:

- `ba-mailing-ingenieria-derecho`
- `mailing-derecho-empresa`

Para los artes de WhatsApp, abre:

- `ba-wa-ingenieria-derecho`
- `ba-wa-derecho-empresa`

Importante: los templates `ba-wa-*` son artboards fijos para generar imagen, no
HTML de correo para enviar con el botón `Send`. Si se envían como email HTML,
algunos clientes pueden ignorar fondos, gradientes y posicionamiento absoluto.
Para usarlos correctamente, exporta el JPG con `npm run export:whatsapp-ads` y
envía la imagen resultante.

## Design system de BA

El sistema visual compartido está definido en `design-system/ba-email.tsx` y documentado en `BA_EMAIL_DESIGN_SYSTEM.md`.

Los nuevos mailings deben reutilizar sus tokens, botones, encabezados y tarjetas para mantener consistencia visual y compatibilidad entre clientes de correo.

Los flyers usan `design-system/ba-flyer.tsx`: son piezas 4:3 de ancho fijo para mantener fidelidad visual y poder editar titulares, bajadas y listas desde React.

## Comandos útiles

```sh
npm run build
npm run export -- --pretty
npm run export:whatsapp-ads
```

- `npm run build` valida y compila los emails.
- `npm run export -- --pretty` genera el HTML exportable en `out/` para los
  mailings.
- `npm run export:whatsapp-ads` genera los HTML, levanta un servidor temporal y exporta los JPG de `ba-wa` en `out/whatsapp-ads/`.

La carpeta `.react-email/` se usa para la build local y `out/` para los archivos exportados. Ambas están ignoradas por Git.

## Notas de implementación

- Las imágenes de producción deben usar URLs HTTPS absolutas.
- Evita SVG y rutas locales (`/static/...`) en mailings que se van a enviar:
  pueden verse en preview local, pero no son confiables en correos reales.
- Los archivos en `emails/static/` sirven para la preview local y para el export
  de React Email; si el correo saldrá a usuarios, reemplaza esas rutas por URLs
  públicas HTTPS.
- Si cambias copy, imágenes o CTAs, vuelve a correr `npm run build` antes de exportar.

## Agent Log

```sh
npm run agent:log:start -- "BA Mailing V1 Cycle 1"
npm run agent:log:end -- "BA Mailing V1 Cycle 1"
```

El logger agrega entradas con fecha ISO en `LOG.md` y evita duplicados consecutivos.
