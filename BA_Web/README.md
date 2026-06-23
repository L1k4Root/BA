# BA Web

Sitio web estático de Bright Alliance | BA Chile.

## Stack

- Astro, salida estática.
- CSS global con tokens del Brand System.
- Assets oficiales copiados desde `BA Chile — Design System (1).zip`, `img/`, fotos de oficina provistas por BA y recursos públicos actuales de `bachile.cl`.

Astro es la opción base porque el sitio actual es principalmente corporativo, SEO y contenido estático. Next.js queda reservado si aparecen necesidades reales de autenticación, dashboard, backend integrado o interactividad de aplicación.

## Estado backend

No hay backend en este proyecto. La web se genera como HTML/CSS/JS estático con Astro.

Si luego se agrega backend, debe separarse explícitamente de este front:

- `BA_Web/`: front estático, componentes, estilos, assets y rutas.
- `BA_API/` o servicio externo: formularios, CRM, email, analítica server-side o autenticación.
- Contratos compartidos: DTOs, payloads de formularios, validaciones y variables de entorno documentadas antes de integrar.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura

```text
BA_Web/
  src/
    components/
      ClientTrustMarquee.astro
      CTA.astro
      Footer.astro
      FounderQuote.astro
      Header.astro
      Hero.astro
      HomeIntro.astro
      HomeServices.astro
      NewsPreview.astro
      SectionHeader.astro
      ServiceAccordion.astro
      ServiceCard.astro
      dev/
        NewsDraftWorkbench.astro
    content/
      site.ts
    lib/
      newsDraftContract.ts
    layouts/
      BaseLayout.astro
    pages/
      index.astro
      [slug].astro
      nosotros.astro
      servicios.astro
      contacto.astro
      dev/
        noticias.astro
    styles/
      global.css
  public/
    assets/
      brand-source/
      clients/
      flyers/
      hero/
      services/
      office/
      website/
```

## Fuente visual

- `public/assets/brand-source/`: logos del Design System.
- `public/assets/flyers/`: flyers usados como referencia visual.
- `public/assets/hero/`: imágenes del hero de inicio con foco país/Chile.
- `public/assets/services/`: fotos representativas para áreas de servicio.
- `public/assets/news/`: fotos representativas para noticias jurídicas.
- `public/assets/office/`: fotos de oficina optimizadas a WebP con Squoosh CLI.
- `public/assets/clients/`: logos de clientes extraídos del sitio actual.
- `src/styles/global.css`: tokens de color, tipografía, spacing, header responsive y componentes base.
- `src/content/site.ts`: estructura de páginas, navegación, servicios y posts.
- `contact.agendaHref` en `src/content/site.ts`: placeholder configurable para el botón Agenda.

## Modularidad frontend

La regla base es que cada componente tenga una responsabilidad principal:

- `Hero.astro`: primer viewport, carrusel de imágenes de Chile y CTAs principales.
- `HomeIntro.astro`: presentación breve de la firma y foto de oficina como apoyo.
- `HomeServices.astro`: entrada de especialidades del home y `/servicios/` con tres tarjetas enlazadas a cada página de servicio.
- `ServiceAccordion.astro`: acordeón modular de servicios con apertura animada, CTA, imagen por especialidad, imagen base sin selección y estado inicial configurable por página.
- `ClientTrustMarquee.astro`: carrusel continuo de logos y señales de confianza.
- `NewsPreview.astro`: vista resumida de actualidad jurídica externa con enlaces a fuente.
- `FounderQuote.astro`: bloque editorial del socio fundador.
- `ServiceCard.astro`: tarjeta reusable para áreas de servicio.
- `Header.astro` / `Footer.astro`: navegación global y cierre institucional.
- `CTA.astro`: llamado final reutilizable.
- `SectionHeader.astro`: encabezados consistentes.
- `components/dev/NewsDraftWorkbench.astro`: herramienta local para drafts de noticias.

Las páginas deben componer componentes, no concentrar todo el markup y CSS. El contenido editable debe vivir en `src/content/site.ts` salvo que sea copy estrictamente estructural de un componente.

### Servicios sin acordeón en home

La home y `/servicios/` usan tarjetas directas por servicio. Cada tarjeta toma datos desde `src/content/site.ts`:

- `navLabel`
- `summary`
- `intro`
- `slug`
- `icon`

El detalle vive en cada página de servicio generada por `src/pages/[slug].astro`.

El footer incluye crédito externo a `https://automize.cl/`.

### Header responsive

Los tamaños del header y logo viven en `src/styles/global.css`:

- `--ba-header-expanded`
- `--ba-header-compact`
- `--ba-header-logo-expanded`
- `--ba-header-logo-compact`
- `--ba-header-nav-size`

`Header.astro` consume esos tokens. Si se ajusta la escala para desktop, notebook o mobile, hacerlo en los tokens y no con números locales dispersos.

### Agregador MVP de noticias

Ruta escondida de desarrollo:

```text
/dev/noticias/
```

Solo debe usarse corriendo:

```bash
npm run dev
```

Responsabilidades:

- `src/pages/dev/noticias.astro`: habilita la pantalla solo en entorno dev.
- `src/components/dev/NewsDraftWorkbench.astro`: formulario, preview local, exportación JSON y escape de HTML.
- `src/lib/newsDraftContract.ts`: contrato de draft y ejemplo de transformación a `ArticlePage`.

Estado actual: persistencia local con `localStorage`.

Opción persistente futura: reemplazar el bloque comentado en `NewsDraftWorkbench.astro` por `POST /api/news-drafts` o una integración CMS/DB, validando DTOs antes de escribir.

### Actualidad externa y blog interno

`src/content/site.ts` separa:

- `externalNews`: contingencia jurídica/empresarial externa. Cada item debe incluir `source.href` y `externalUrl`.
- `internalPosts`: noticias propias de BA Chile. Campos mínimos: `title`, `slug`, `category`, `summary`, `body`, `image` y `source` opcional.
- `articles`: combinación usada por las rutas dinámicas existentes.

No automatizar Diario Financiero, LinkedIn ni otras fuentes sin credenciales/API y contrato de datos.

### Agenda y LinkedIn

- Cambiar el link de Agenda en `contact.agendaHref`.
- Cambiar LinkedIn en `contact.linkedin`.
- La integración automática con LinkedIn queda pendiente: requiere credenciales, permisos de página/cuenta y decisión de flujo web→LinkedIn o LinkedIn→web.

### Logos de clientes

Para agregar logos:

1. Agregar el archivo optimizado en `public/assets/clients/`.
2. Actualizar `clientLogos` en `src/content/site.ts` si se deja de usar la secuencia `client-1.png` a `client-25.png`.
3. Verificar el carrusel en desktop y mobile.

## Páginas públicas principales

- `/`
- `/nosotros/`
- `/servicios/`
- `/contacto/`
- `/derecho-de-la-empresa/`
- `/ingenieria-y-derecho/`
- `/comercio-y-negocios-internacionales/`
- `/noticias-blog/`

Las rutas de servicios en español se generan desde `src/pages/[slug].astro` y `src/content/site.ts`.

## Assets y optimización

Las fotos de oficina se generaron desde el zip provisto por BA y se optimizaron con Squoosh CLI:

```bash
PATH=$HOME/.nvm/versions/node/v20.19.0/bin:$PATH \
NODE_OPTIONS=--no-experimental-fetch \
npx @squoosh/cli --webp '{"quality":80}' /tmp/ba-office-selected/*.jpg -d BA_Web/public/assets/office
```

Nota: `NODE_OPTIONS=--no-experimental-fetch` evita el fallo de carga WASM de `@squoosh/cli` en runtimes Node donde `fetch()` nativo intenta resolver archivos locales como URL remota.

Las fotos nuevas de servicios se intentaron optimizar con `@squoosh/cli`, pero la CLI falló en este entorno con `ERR_INVALID_URL` al cargar WASM desde `@squoosh/lib`. Se usó `cwebp -q 80` como fallback local equivalente para producir WebP optimizado sin agregar dependencias al proyecto.

## Verificación mínima

Antes de cerrar cambios:

```bash
npm run build
```

Para QA visual local:

```bash
npm run dev -- --host 127.0.0.1
```

Revisar al menos:

- Home desktop y mobile.
- Header transparente y estado con scroll.
- Dropdown de servicios vertical y link de header a `/servicios/`.
- Hero sin overflow horizontal.
- Acordeón de servicios e imagen activa por especialidad.
- `/nosotros/`, especialmente valores y CTA.
- `/dev/noticias/` en dev: crear draft, exportar JSON y limpiar drafts.

Para E2E automatizada en Codex se usa el runtime de navegador incluido por el entorno, sin agregar dependencias al proyecto. Si se decide institucionalizar E2E en CI, agregar Playwright como `devDependency` en una tarea separada y documentar browsers, screenshots y umbrales visuales.
- Las tres páginas de servicio.
- Footer azul con logo blanco e iconos sociales.
