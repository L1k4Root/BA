# BA Web

Primera versión estática de la web de Bright Alliance | BA Chile.

## Stack

- Astro, salida estática.
- CSS global con tokens del Brand System.
- Assets oficiales copiados desde `BA Chile — Design System (1).zip`, `img/` y recursos públicos actuales de `bachile.cl`.

Astro es la opción base porque el sitio actual es principalmente corporativo, SEO y contenido estático. Next.js queda reservado si aparecen necesidades reales de autenticación, dashboard, backend integrado o interactividad de aplicación.

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
    content/
    layouts/
    pages/
    styles/
  public/
    assets/
      brand-source/
      flyers/
      website/
```

## Fuente visual

- `public/assets/brand-source/`: logos del Design System.
- `public/assets/flyers/`: flyers usados como referencia visual.
- `src/styles/global.css`: tokens de color, tipografía, spacing y componentes base.
- `src/content/site.ts`: estructura de páginas, navegación, servicios y posts.
