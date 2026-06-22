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
    content/
      site.ts
    layouts/
      BaseLayout.astro
    pages/
      index.astro
      [slug].astro
      nosotros.astro
      servicios.astro
      contacto.astro
    styles/
      global.css
  public/
    assets/
      brand-source/
      clients/
      flyers/
      hero/
      office/
      website/
```

## Fuente visual

- `public/assets/brand-source/`: logos del Design System.
- `public/assets/flyers/`: flyers usados como referencia visual.
- `public/assets/hero/`: imágenes del hero de inicio con foco país/Chile.
- `public/assets/news/`: fotos representativas para noticias jurídicas.
- `public/assets/office/`: fotos de oficina optimizadas a WebP con Squoosh CLI.
- `public/assets/clients/`: logos de clientes extraídos del sitio actual.
- `src/styles/global.css`: tokens de color, tipografía, spacing y componentes base.
- `src/content/site.ts`: estructura de páginas, navegación, servicios y posts.

## Modularidad frontend

La regla base es que cada componente tenga una responsabilidad principal:

- `Hero.astro`: primer viewport, carrusel de imágenes de Chile y CTAs principales.
- `HomeIntro.astro`: presentación breve de la firma y foto de oficina como apoyo.
- `HomeServices.astro`: entrada de especialidades del home, compuesta con el acordeón reusable.
- `ServiceAccordion.astro`: acordeón modular de servicios con apertura animada, CTA, imagen por especialidad, imagen base sin selección y estado inicial configurable por página.
- `ClientTrustMarquee.astro`: muro institucional de logos y señales de confianza.
- `NewsPreview.astro`: vista resumida de noticias.
- `FounderQuote.astro`: bloque editorial del socio fundador.
- `ServiceCard.astro`: tarjeta reusable para áreas de servicio.
- `Header.astro` / `Footer.astro`: navegación global y cierre institucional.
- `CTA.astro`: llamado final reutilizable.
- `SectionHeader.astro`: encabezados consistentes.

Las páginas deben componer componentes, no concentrar todo el markup y CSS. El contenido editable debe vivir en `src/content/site.ts` salvo que sea copy estrictamente estructural de un componente.

### Contrato de `ServiceAccordion`

`ServiceAccordion.astro` recibe `services` y `defaultOpenIndex`.

- Home usa `defaultOpenIndex={0}` para mostrar contexto inicial.
- `/servicios/` usa `defaultOpenIndex={null}` para partir cerrado.
- El usuario puede cerrar el item abierto; el componente no fuerza reapertura.
- Cuando no hay selección activa, muestra una imagen base institucional.

Esto mantiene responsabilidad única: el componente controla interacción visual; cada página decide su estado inicial.

El footer incluye crédito externo a `https://automize.cl/`.

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

Para E2E automatizada en Codex se usa el runtime de navegador incluido por el entorno, sin agregar dependencias al proyecto. Si se decide institucionalizar E2E en CI, agregar Playwright como `devDependency` en una tarea separada y documentar browsers, screenshots y umbrales visuales.
- Las tres páginas de servicio.
- Footer azul con logo blanco e iconos sociales.
