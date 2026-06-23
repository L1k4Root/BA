# BA Web Architecture

## Objetivo

BA Web es una web corporativa estática para Bright Alliance | BA Chile. La prioridad técnica es rendimiento, SEO, claridad visual y mantenimiento simple.

## Decisión de stack

Se usa Astro con salida estática porque:

- El sitio es principalmente institucional y de contenido.
- No hay autenticación, dashboard, sesión de usuario ni backend integrado.
- Las rutas públicas se pueden generar en build time.
- El costo operativo y la superficie de fallo son menores que en una app full-stack.

Next.js no se justifica hoy. Sería razonable evaluarlo si aparecen dashboard, auth, personalización server-side, integraciones backend fuertes o rutas dinámicas complejas.

## Capas

### Content

Archivo principal: `src/content/site.ts`.

Responsabilidades:

- Navegación.
- Contacto.
- Link configurable de agenda.
- Copy de home.
- Servicios.
- Actualidad externa y blog interno.
- Logos de clientes.
- Contenido de nosotros y valores.

No debe contener lógica visual compleja.

### Layout

Archivo principal: `src/layouts/BaseLayout.astro`.

Responsabilidades:

- HTML base.
- Metadata común.
- Header/Footer.
- Import global de estilos.
- Detección básica de home para header overlay.

### Components

Cada componente debe tener una responsabilidad visible concreta.

- `Header.astro`: navegación principal, idioma, responsive menu y transición de scroll.
- `Hero.astro`: hero del home y carrusel de imágenes de Chile.
- `HomeIntro.astro`: presentación institucional inicial.
- `HomeServices.astro`: entrada de especialidades del home.
- `ServiceAccordion.astro`: componente heredado disponible, pero no usado en home ni `/servicios/`.
- `ClientTrustMarquee.astro`: carrusel continuo de logos de clientes.
- `NewsPreview.astro`: actualidad jurídica externa resumida con fuente original.
- `ArticleDetail.astro`: detalle editorial de noticias.
- `FounderQuote.astro`: bloque editorial del fundador.
- `ServiceCard.astro`: tarjeta de servicio reusable.
- `CTA.astro`: llamada a contacto.
- `Footer.astro`: cierre institucional, links, contacto y redes.
- `SectionHeader.astro`: patrón común de eyebrow, título y lead.
- `components/dev/NewsDraftWorkbench.astro`: agregador local de drafts de noticias.

### Pages

Las páginas deben componer componentes y evitar acumular estilos largos.

- `src/pages/index.astro`: composición del home.
- `src/pages/servicios.astro`: índice de servicios con el acordeón reusable.
- `src/pages/[slug].astro`: template para servicios y artículos en español.
- `src/pages/nosotros.astro`: página institucional y valores.
- `src/pages/contacto.astro`: contacto.
- `src/pages/dev/noticias.astro`: herramienta escondida para drafts de noticias en desarrollo.
- `src/pages/en/*`: rutas en inglés existentes.

## Contratos de componentes

### Servicios

Responsabilidad: presentar las tres áreas principales con acceso directo a su página de detalle.

Reglas:

- Home y `/servicios/` no usan acordeones.
- Cada tarjeta usa `navLabel`, `summary`, `intro`, `slug` e `icon` desde `src/content/site.ts`.
- El detalle de modalidad, áreas y alcance vive en las rutas de servicio generadas por `src/pages/[slug].astro`.
- No duplicar detalle extenso en la home.

### Noticias

`src/content/site.ts` separa:

- `externalNews`: actualidad externa con `source.href` y `externalUrl`.
- `internalPosts`: noticias institucionales propias con campos mínimos editoriales.
- `articles`: lista combinada para conservar las rutas dinámicas.

La automatización futura debe definir fuente, credenciales, frecuencia, deduplicación y revisión editorial antes de escribir en el sitio.

### Header

Responsabilidad: navegación global, menú móvil, selector de idioma y transición de scroll.

Reglas:

- La escala responsive vive en tokens globales, no en valores fijos locales.
- Tokens principales: `--ba-header-expanded`, `--ba-header-compact`, `--ba-header-logo-expanded`, `--ba-header-logo-compact`, `--ba-header-nav-size`.
- En home puede partir overlay/transparente; al hacer scroll pasa a estado compacto.
- En rutas internas parte compacto para no tapar contenido.

### NewsDraftWorkbench

Responsabilidad: capturar drafts de noticias mientras corre `npm run dev`.

Entradas:

- No recibe datos de negocio por props.
- Usa el contrato `src/lib/newsDraftContract.ts`.

Reglas:

- Persistencia actual: `localStorage`.
- Exporta JSON para copiar manualmente a `src/content/site.ts`.
- Escapa HTML antes de renderizar entradas del usuario.
- No reemplaza un backend real.
- La opción persistente queda indicada como contrato futuro: `POST /api/news-drafts` con DTO, validación y ownership de almacenamiento.

## Backend

No existe backend en este proyecto.

Regla para futuras integraciones:

- No mezclar lógica server-side dentro de componentes visuales.
- Crear un servicio separado si se requiere email, CRM, base de datos, autenticación o analítica server-side.
- Documentar contratos antes de integrar: payloads, DTOs, validación, errores, variables de entorno y ownership.

Ejemplo futuro:

```text
BA_Web/
  Astro static frontend

BA_API/
  News draft endpoint
  Contact endpoint
  Email provider adapter
  CRM adapter
  DTO validation
```

## Assets

- `public/assets/brand-source/`: logos BA.
- `public/assets/hero/`: imágenes de Chile para el hero del home.
- `public/assets/services/`: fotos WebP por especialidad.
- `public/assets/office/`: fotos de oficina optimizadas a WebP.
- `public/assets/clients/`: logos de clientes.
- `public/assets/website/`: imágenes heredadas del sitio actual.

Las imágenes nuevas deben optimizarse antes de entrar al repo. Para las fotos de oficina se usó Squoosh CLI con WebP quality 80. Para las fotos nuevas de servicios, `@squoosh/cli` falló por `ERR_INVALID_URL` al cargar WASM, por lo que se usó `cwebp -q 80` como fallback local.

## Estilos

Archivo base: `src/styles/global.css`.

Responsabilidades:

- Tokens de color.
- Tipografías.
- Spacing.
- Grillas base.
- Botones base.
- Animaciones globales seguras.

Los estilos específicos de una sección deben vivir en el componente de esa sección, no en `global.css`, salvo que sean utilidades reutilizables.

## Principios de mantenimiento

- Preferir componentes pequeños y explícitos.
- Mantener copy editable en `site.ts`.
- No agregar dependencias para interacciones simples.
- Cambiar Agenda solo en `contact.agendaHref`.
- Cambiar LinkedIn solo en `contact.linkedin`.
- Respetar `prefers-reduced-motion`.
- Evitar duplicar secciones completas entre páginas.
- Antes de agregar backend, definir contrato y ownership.

## Checklist de cambios

Antes de cerrar una iteración:

1. Ejecutar `npm run build`.
2. Revisar home desktop.
3. Revisar mobile.
4. Revisar `/nosotros/`.
5. Revisar las tres páginas de servicio.
6. Confirmar que no hay assets muertos o imágenes sin optimizar.
7. Confirmar que el footer y CTA no comparten estilos conflictivos.
