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
- Copy de home.
- Servicios.
- Noticias.
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
- `ServiceAccordion.astro`: acordeón reusable de servicios con imagen activa por especialidad, imagen base sin selección y estado inicial parametrizable.
- `ClientTrustMarquee.astro`: muro institucional de logos de clientes.
- `NewsPreview.astro`: noticias resumidas.
- `FounderQuote.astro`: bloque editorial del fundador.
- `ServiceCard.astro`: tarjeta de servicio reusable.
- `CTA.astro`: llamada a contacto.
- `Footer.astro`: cierre institucional, links, contacto y redes.
- `SectionHeader.astro`: patrón común de eyebrow, título y lead.

### Pages

Las páginas deben componer componentes y evitar acumular estilos largos.

- `src/pages/index.astro`: composición del home.
- `src/pages/servicios.astro`: índice de servicios con el acordeón reusable.
- `src/pages/[slug].astro`: template para servicios y artículos en español.
- `src/pages/nosotros.astro`: página institucional y valores.
- `src/pages/contacto.astro`: contacto.
- `src/pages/en/*`: rutas en inglés existentes.

## Contratos de componentes

### ServiceAccordion

Responsabilidad: presentar servicios, abrir/cerrar contenido y sincronizar imagen activa.

Entradas:

- `services`: lista de servicios desde `src/content/site.ts`.
- `defaultOpenIndex`: índice inicial abierto o `null` para partir cerrado.

Reglas:

- No decide copy, rutas ni orden de servicios; eso pertenece a `site.ts`.
- No decide el estado inicial de negocio; cada página lo pasa explícitamente.
- Permite cerrar el item activo para no bloquear la interacción del usuario.
- Si no hay servicio activo, muestra una imagen base institucional.

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
  Contact endpoint
  Email provider adapter
  CRM adapter
  DTO validation
```

## Assets

- `public/assets/brand-source/`: logos BA.
- `public/assets/hero/`: imágenes de Chile para el hero del home.
- `public/assets/office/`: fotos de oficina optimizadas a WebP.
- `public/assets/clients/`: logos de clientes.
- `public/assets/website/`: imágenes heredadas del sitio actual.

Las imágenes nuevas deben optimizarse antes de entrar al repo. Para las fotos de oficina se usó Squoosh CLI con WebP quality 80.

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
