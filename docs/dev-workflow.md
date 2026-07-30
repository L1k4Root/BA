# Flujo de desarrollo y deploy

## Contrato del repo

Este repo contiene dos proyectos independientes dentro de una misma base Git:

- `website/`: sitio Astro de Bright Alliance.
- `email-marketing/`: plantillas React Email y exports de mailing.

Las ramas no deben representar areas permanentes como "web" o "email". Las areas se separan por carpeta; las ramas se usan para trabajo temporal.

## Ramas

- `main`: estable, deployable, contiene el repo completo.
- `develop`: integracion opcional cuando se quieran acumular cambios antes de publicar.
- `feature/<descripcion>`: cambios temporales.
- `fix/<descripcion>`: correcciones puntuales.

Ejemplos:

```sh
git switch main
git pull --ff-only
git switch -c feature/web-home-polish
```

```sh
git switch main
git pull --ff-only
git switch -c feature/mailing-ingenieria-copy
```

## Cambios de web

Trabajar dentro de `website/`:

```sh
cd website
npm install
npm run dev
npm run build
```

Antes de mergear:

```sh
git status --short
cd website
npm run build
```

## Cambios de mailing

Trabajar dentro de `email-marketing/`:

```sh
cd email-marketing
npm install
npm run dev
npm run build
npm run export -- --pretty
```

Los exports de mailing no forman parte del deploy web.

## Merge

Flujo recomendado:

```sh
git status --short
git switch main
git pull --ff-only
git merge --no-ff feature/<descripcion>
```

Si se usa `develop`, integrar primero ahi y luego pasar a `main` cuando el build este verificado.

## Deploy web a Hostinger por SSH

El deploy productivo usa `scripts/deploy.sh` con `rsync` sobre SSH.

Preparacion local:

```sh
cp .env.deploy.example .env.deploy
```

Completar:

```sh
DEPLOY_HOST=
DEPLOY_USER=
DEPLOY_PORT=22
DEPLOY_REMOTE_PATH=
DEPLOY_LOCAL_DIR=dist
```

Ejecutar:

```sh
cd website
npm run deploy:prod
```

El script:

- verifica que no haya cambios sin commit;
- advierte o pide confirmacion si no estas en `main`;
- ejecuta `npm run build` en `website/`;
- verifica que exista `website/dist/`;
- verifica que exista `/home/<DEPLOY_USER>/.config/ba-contact.php` en Hostinger;
- sincroniza `website/server/` a `.local/share/ba-contact` fuera de `public_html`;
- instala la version bloqueada de PHPMailer con Composer remoto;
- sube solo el contenido de `website/dist/` al path remoto;
- usa `rsync --delete` para que el remoto refleje exactamente el build local.

`--delete` es intencional: elimina en el servidor archivos que ya no existen en `website/dist/`. No apunta al home del usuario ni a una carpeta compartida; `DEPLOY_REMOTE_PATH` debe ser la carpeta publica final del sitio.

No guardar credenciales reales en Git. `.env.deploy` queda ignorado; solo se versiona `.env.deploy.example`.

### Configuracion privada del formulario

Antes del primer deploy:

1. Crear una contraseña de aplicación para `contacto@bachile.cl` en Google Workspace.
2. Copiar `website/server/config.example.php` a `/home/<DEPLOY_USER>/.config/ba-contact.php`.
3. Reemplazar `REPLACE_WITH_GOOGLE_APP_PASSWORD` en el servidor.
4. Aplicar permisos `600` al archivo y `700` al directorio `.config`.

El deploy se detiene antes de modificar `public_html` si falta esta configuración. No copiar la contraseña de aplicación a `.env.deploy`, al repositorio ni al frontend.
