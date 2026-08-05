import type { Language } from '../content/site';

export const SITE_ORIGIN = 'https://bachile.cl';

type LocalizedRoutePair = Readonly<Record<Language, `/${string}`>>;

export const routePairs = {
  home: { es: '/', en: '/en/' },
  about: { es: '/nosotros/', en: '/en/about-us/' },
  services: { es: '/servicios/', en: '/en/services/' },
  corporateBusinessLaw: {
    es: '/derecho-de-la-empresa/',
    en: '/en/corporate-business-law/'
  },
  engineeringAndLaw: {
    es: '/ingenieria-y-derecho/',
    en: '/en/engineering-and-law/'
  },
  internationalTradeBusiness: {
    es: '/comercio-y-negocios-internacionales/',
    en: '/en/international-trade-business/'
  },
  newsHub: { es: '/noticias-blog/', en: '/en/news-blog/' },
  news: { es: '/noticias/', en: '/en/news/' },
  officeBlog: { es: '/blog-oficina/', en: '/en/office-blog/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
  openFinanceRegulation: {
    es: '/cmf-modifica-normativa-sistema-finanzas-abiertas/',
    en: '/en/cmf-amends-open-finance-system-regulations/'
  },
  securitiesIntermediariesReporting: {
    es: '/cmf-consulta-envio-informacion-intermediarios-valores/',
    en: '/en/cmf-consults-information-submission-rules-securities-intermediaries/'
  },
  employmentRelationshipFeeContracting: {
    es: '/corte-suprema-confirma-relacion-laboral-honorarios/',
    en: '/en/supreme-court-upholds-employment-relationship-fee-contracting/'
  },
  personalDataProtectionLaw: {
    es: '/ley-21719-proteccion-datos-personales-chile/',
    en: '/en/law-21719-personal-data-protection-processing/'
  }
} as const satisfies Record<string, LocalizedRoutePair>;

export type TranslationKey = keyof typeof routePairs;
export type AlternateLanguage = Language | 'x-default';

export type AlternateLink = {
  lang: AlternateLanguage;
  href: string;
};

const routeEntries = Object.entries(routePairs) as Array<[
  TranslationKey,
  (typeof routePairs)[TranslationKey]
]>;

export function normalizeRoutePath(pathname: string): `/${string}` {
  const path = pathname.split(/[?#]/, 1)[0] || '/';
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;

  if (withLeadingSlash === '/') {
    return '/';
  }

  return `${withLeadingSlash.replace(/\/+$/, '')}/` as `/${string}`;
}

export function getTranslationKey(pathname: string): TranslationKey | undefined {
  const normalizedPath = normalizeRoutePath(pathname);
  return routeEntries.find(([, pair]) => pair.es === normalizedPath || pair.en === normalizedPath)?.[0];
}

export function getRoutePair(pathname: string): LocalizedRoutePair | undefined {
  const key = getTranslationKey(pathname);
  return key ? routePairs[key] : undefined;
}

export function getCounterpartPath(pathname: string, currentLang?: Language): `/${string}` | undefined {
  const normalizedPath = normalizeRoutePath(pathname);
  const pair = getRoutePair(normalizedPath);

  if (!pair) {
    return undefined;
  }

  const sourceLang = currentLang ?? (pair.en === normalizedPath ? 'en' : 'es');
  return sourceLang === 'es' ? pair.en : pair.es;
}

export function getCanonicalUrl(pathname: string, site: string | URL = SITE_ORIGIN): string {
  return new URL(normalizeRoutePath(pathname), site).href;
}

export function getAlternateLinks(
  pathname: string,
  site: string | URL = SITE_ORIGIN
): AlternateLink[] {
  const pair = getRoutePair(pathname);

  if (!pair) {
    return [];
  }

  return [
    { lang: 'es', href: getCanonicalUrl(pair.es, site) },
    { lang: 'en', href: getCanonicalUrl(pair.en, site) },
    { lang: 'x-default', href: getCanonicalUrl(pair.es, site) }
  ];
}
