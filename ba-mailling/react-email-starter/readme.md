# BA Chile Mailing

React Email workspace for Bright Alliance | BA Chile mailings.

## Cómo correr el proyecto

Ubícate en `ba-mailling/react-email-starter` y luego ejecuta:

```sh
npm install
npm run dev
```

La preview local queda disponible en [http://localhost:3000](http://localhost:3000).

Dentro del selector de templates, abre `ba-general`.

## Comandos útiles

```sh
npm run build
npm run export -- --pretty
```

- `npm run build` valida y compila los emails.
- `npm run export -- --pretty` genera el HTML exportable en `out/`.

La carpeta `.react-email/` se usa para la build local y `out/` para los archivos exportados. Ambas están ignoradas por Git.

## Notas de implementación

- Las imágenes de producción deben usar URLs HTTPS absolutas.
- Los archivos en `emails/static/` sirven para la preview local y para el export de React Email.
- Si cambias copy, imágenes o CTAs, vuelve a correr `npm run build` antes de exportar.

## Agent Log

```sh
npm run agent:log:start -- "BA Mailing V1 Cycle 1"
npm run agent:log:end -- "BA Mailing V1 Cycle 1"
```

El logger agrega entradas con fecha ISO en `LOG.md` y evita duplicados consecutivos.
