#!/usr/bin/env node

import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, relative, resolve, sep } from 'node:path';

const SITE_ORIGIN = 'https://bachile.cl';
const DIST_DIR = resolve(process.cwd(), 'dist');
const GOOGLE_ADS_TAG_ID = 'AW-18330419853';
const GOOGLE_ADS_TAG_LOADER = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_TAG_ID}`;
const GOOGLE_ADS_TAG_CONFIG = `gtag('config', '${GOOGLE_ADS_TAG_ID}')`;
const GOOGLE_ADS_LEAD_CONVERSION = `${GOOGLE_ADS_TAG_ID}/m6AfCJWn8t0cEI2F0KRE`;
const CONTACT_ROUTES = new Set(['/contacto/', '/en/contact/']);

const translatedRoutePairs = [
  { name: 'home', es: '/', en: '/en/' },
  { name: 'about', es: '/nosotros/', en: '/en/about-us/' },
  { name: 'services hub', es: '/servicios/', en: '/en/services/' },
  { name: 'corporate law service', es: '/derecho-de-la-empresa/', en: '/en/corporate-business-law/' },
  { name: 'engineering and law service', es: '/ingenieria-y-derecho/', en: '/en/engineering-and-law/' },
  {
    name: 'international business service',
    es: '/comercio-y-negocios-internacionales/',
    en: '/en/international-trade-business/'
  },
  { name: 'news hub', es: '/noticias-blog/', en: '/en/news-blog/' },
  { name: 'news list', es: '/noticias/', en: '/en/news/' },
  { name: 'office blog', es: '/blog-oficina/', en: '/en/office-blog/' },
  { name: 'contact', es: '/contacto/', en: '/en/contact/' },
  {
    name: 'open finance article',
    es: '/cmf-modifica-normativa-sistema-finanzas-abiertas/',
    en: '/en/cmf-amends-open-finance-system-regulations/'
  },
  {
    name: 'securities intermediaries article',
    es: '/cmf-consulta-envio-informacion-intermediarios-valores/',
    en: '/en/cmf-consults-information-submission-rules-securities-intermediaries/'
  },
  {
    name: 'employment relationship article',
    es: '/corte-suprema-confirma-relacion-laboral-honorarios/',
    en: '/en/supreme-court-upholds-employment-relationship-fee-contracting/'
  },
  {
    name: 'personal data article',
    es: '/ley-21719-proteccion-datos-personales-chile/',
    en: '/en/law-21719-personal-data-protection-processing/'
  }
];

const expectedRoutes = translatedRoutePairs.flatMap((pair) => [
  { name: pair.name, lang: 'es', route: pair.es, pair },
  { name: pair.name, lang: 'en', route: pair.en, pair }
]);

const englishLeaks = [
  ['Abrir menú', /Abrir\s+men(?:ú|&uacute;)/iu],
  ['aria-label="Principal"', /aria-label\s*=\s*["']\s*Principal\s*["']/iu],
  ['Contacto', />\s*Contacto\s*</iu],
  ['Servicios', />\s*Servicios\s*</iu],
  ['Ver fuente', /\bVer\s+fuente(?:\s+original)?\b/iu]
];

const spanishLeaks = [
  ['Open menu', /\bOpen\s+menu\b/iu],
  ['aria-label="Main"', /aria-label\s*=\s*["']\s*Main\s*["']/iu],
  ['Home', />\s*Home\s*</iu],
  ['About Us', />\s*About\s+Us\s*</iu],
  ['Services', />\s*Services\s*</iu],
  ['News', />\s*News(?:\s*(?:&|&amp;)\s*Blog)?\s*</iu],
  ['Contact', />\s*Contact\s*</iu],
  ['View source', /\bView\s+source(?:\s+original)?\b/iu]
];

let checks = 0;
let passed = 0;
let internalLinksChecked = 0;
const failures = [];

function check(condition, message) {
  checks += 1;
  if (condition) {
    passed += 1;
    return true;
  }

  failures.push(message);
  return false;
}

function decodeHtml(value) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&quot;/gi, '"')
    .replace(/&apos;|&#39;/gi, "'")
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>');
}

function countOccurrences(value, needle) {
  if (!needle) return 0;
  return value.split(needle).length - 1;
}

function parseAttributes(tag) {
  const attributes = {};
  const body = tag.replace(/^<[^\s>]+\s*/u, '').replace(/\/?\s*>$/u, '');
  const attributePattern = /([^\s"'<>\/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/gu;

  for (const match of body.matchAll(attributePattern)) {
    attributes[match[1].toLowerCase()] = decodeHtml(match[2] ?? match[3] ?? match[4] ?? '');
  }

  return attributes;
}

function tags(html, name) {
  return html.match(new RegExp(`<${name}\\b[^>]*>`, 'giu')) ?? [];
}

function stripNonRenderedText(html) {
  return html
    .replace(/<!--[\s\S]*?-->/gu, '')
    .replace(/<(script|style|template)\b[^>]*>[\s\S]*?<\/\1\s*>/giu, '');
}

function absoluteUrl(route) {
  return new URL(route, SITE_ORIGIN).href;
}

function routeCandidates(route) {
  const pathname = new URL(route, SITE_ORIGIN).pathname;
  let decodedPath;

  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    return [];
  }

  const relativePath = decodedPath.replace(/^\/+/, '');
  if (!relativePath) return [resolve(DIST_DIR, 'index.html')];

  if (decodedPath.endsWith('/')) {
    return [resolve(DIST_DIR, relativePath, 'index.html')];
  }

  if (extname(relativePath)) {
    return [resolve(DIST_DIR, relativePath)];
  }

  return [
    resolve(DIST_DIR, relativePath),
    resolve(DIST_DIR, `${relativePath}.html`),
    resolve(DIST_DIR, relativePath, 'index.html')
  ];
}

async function isFile(path) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

async function findRouteFile(route) {
  for (const candidate of routeCandidates(route)) {
    if (await isFile(candidate)) return candidate;
  }

  return null;
}

async function walkFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walkFiles(path)));
    if (entry.isFile()) files.push(path);
  }

  return files;
}

function displayPath(path) {
  return relative(DIST_DIR, path).split(sep).join('/');
}

function routeForHtmlFile(path) {
  const relativePath = displayPath(path);
  if (relativePath === 'index.html') return '/';
  if (relativePath.endsWith('/index.html')) return `/${relativePath.slice(0, -'index.html'.length)}`;
  return `/${relativePath}`;
}

function metadataLinks(html) {
  return tags(html, 'link').map(parseAttributes);
}

function normalizedAbsoluteHref(href) {
  try {
    const url = new URL(href);
    if (url.origin !== SITE_ORIGIN) return null;
    return url.href;
  } catch {
    return null;
  }
}

function isRedirectPage(html) {
  return tags(html, 'meta').some((tag) => (parseAttributes(tag)['http-equiv'] ?? '').toLowerCase() === 'refresh');
}

function checkGoogleAdsInstrumentation(route, html) {
  const tagLoaderCount = countOccurrences(html, GOOGLE_ADS_TAG_LOADER);
  check(tagLoaderCount === 1, `${route}: expected one Google tag loader for ${GOOGLE_ADS_TAG_ID}, found ${tagLoaderCount}`);

  const tagConfigCount = countOccurrences(html, GOOGLE_ADS_TAG_CONFIG);
  check(tagConfigCount === 1, `${route}: expected one Google tag config for ${GOOGLE_ADS_TAG_ID}, found ${tagConfigCount}`);

  const conversionDestinationCount = countOccurrences(html, GOOGLE_ADS_LEAD_CONVERSION);
  const expectedConversionDestinationCount = CONTACT_ROUTES.has(route) ? 1 : 0;
  check(
    conversionDestinationCount === expectedConversionDestinationCount,
    `${route}: expected ${expectedConversionDestinationCount} Google Ads lead destination(s), found ${conversionDestinationCount}`
  );
}

function checkExpectedRoute({ name, lang, route, pair }, html) {
  const routeLabel = `${route} (${name}, ${lang})`;
  const renderedHtml = stripNonRenderedText(html);

  const htmlTags = tags(renderedHtml, 'html');
  const actualLang = htmlTags.length === 1 ? parseAttributes(htmlTags[0]).lang : undefined;
  check(htmlTags.length === 1 && actualLang === lang, `${routeLabel}: expected <html lang="${lang}">, found ${actualLang ? `lang="${actualLang}"` : 'no usable html lang'}`);

  const h1Count = tags(renderedHtml, 'h1').length;
  check(h1Count === 1, `${routeLabel}: expected exactly one <h1>, found ${h1Count}`);

  const links = metadataLinks(html);
  const canonicals = links.filter((attributes) => (attributes.rel ?? '').toLowerCase().split(/\s+/u).includes('canonical'));
  if (check(canonicals.length === 1, `${routeLabel}: expected exactly one canonical link, found ${canonicals.length}`)) {
    const expectedCanonical = absoluteUrl(route);
    const actualCanonical = normalizedAbsoluteHref(canonicals[0].href);
    check(actualCanonical === expectedCanonical, `${routeLabel}: canonical must be ${expectedCanonical}, found ${canonicals[0].href ?? 'no href'}`);
  }

  const alternates = links.filter((attributes) => (attributes.rel ?? '').toLowerCase().split(/\s+/u).includes('alternate'));
  const expectedAlternates = { es: absoluteUrl(pair.es), en: absoluteUrl(pair.en), 'x-default': absoluteUrl(pair.es) };

  for (const [hreflang, expectedHref] of Object.entries(expectedAlternates)) {
    const matches = alternates.filter((attributes) => (attributes.hreflang ?? '').toLowerCase() === hreflang);
    if (check(matches.length === 1, `${routeLabel}: expected exactly one hreflang="${hreflang}", found ${matches.length}`)) {
      const actualHref = normalizedAbsoluteHref(matches[0].href);
      check(actualHref === expectedHref, `${routeLabel}: hreflang="${hreflang}" must point to ${expectedHref}, found ${matches[0].href ?? 'no href'}`);
    }
  }

  const leakPatterns = lang === 'en' ? englishLeaks : spanishLeaks;
  const leaks = leakPatterns.filter(([, pattern]) => pattern.test(renderedHtml)).map(([label]) => label);
  check(leaks.length === 0, `${routeLabel}: leaked ${lang === 'en' ? 'Spanish' : 'English'} UI label(s): ${leaks.join(', ')}`);
}

function shouldIgnoreRootLink(href) {
  return (
    !href.startsWith('/') ||
    href.startsWith('//') ||
    href.startsWith('/assets/') ||
    href === '/assets' ||
    href.startsWith('/_astro/') ||
    href === '/_astro' ||
    href.startsWith('/api/') ||
    href === '/api'
  );
}

async function checkInternalLinks(htmlFiles) {
  for (const file of htmlFiles) {
    const html = stripNonRenderedText(await readFile(file, 'utf8'));
    const sourceRoute = routeForHtmlFile(file);
    const uniqueHrefs = new Set(
      tags(html, 'a')
        .map((tag) => parseAttributes(tag).href)
        .filter((href) => href && !shouldIgnoreRootLink(href))
    );

    for (const href of uniqueHrefs) {
      internalLinksChecked += 1;
      let pathname;

      try {
        pathname = new URL(href, SITE_ORIGIN).pathname;
      } catch {
        check(false, `${sourceRoute}: invalid internal href ${JSON.stringify(href)}`);
        continue;
      }

      const targetFile = await findRouteFile(pathname);
      check(Boolean(targetFile), `${sourceRoute}: internal link ${JSON.stringify(href)} does not resolve inside dist/`);
    }
  }
}

async function main() {
  if (!(await isFile(resolve(DIST_DIR, 'index.html')))) {
    check(false, 'dist/index.html is missing; run `npm run build` before `npm run check:site`');
    return;
  }

  const allFiles = await walkFiles(DIST_DIR);
  const htmlFiles = allFiles.filter((file) => file.endsWith('.html'));

  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    if (!isRedirectPage(html)) checkGoogleAdsInstrumentation(routeForHtmlFile(file), html);
  }

  for (const expected of expectedRoutes) {
    const file = await findRouteFile(expected.route);
    if (!check(Boolean(file), `${expected.route} (${expected.name}, ${expected.lang}): expected generated HTML is missing`)) continue;
    checkExpectedRoute(expected, await readFile(file, 'utf8'));
  }

  // Link resolution intentionally includes generated redirect and /dev pages.
  // Those pages are not in expectedRoutes, so they are excluded from h1 and hreflang checks.
  await checkInternalLinks(htmlFiles);
}

try {
  await main();
} catch (error) {
  check(false, `checker error: ${error instanceof Error ? error.message : String(error)}`);
}

if (failures.length > 0) {
  console.error(`[check:site] FAIL — ${passed}/${checks} checks passed; ${expectedRoutes.length} expected routes; ${internalLinksChecked} internal links checked.`);
  const visibleFailures = failures.slice(0, 50);
  for (const failure of visibleFailures) console.error(`- ${failure}`);
  if (failures.length > visibleFailures.length) console.error(`- ...and ${failures.length - visibleFailures.length} more failure(s)`);
  process.exitCode = 1;
} else {
  console.log(`[check:site] PASS — ${passed}/${checks} checks passed; ${expectedRoutes.length} routes; ${internalLinksChecked} internal links.`);
}
