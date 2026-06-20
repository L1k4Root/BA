export type Language = 'es' | 'en';

export type ServicePage = {
  lang: Language;
  slug: string;
  title: string;
  navLabel: string;
  summary: string;
  intro: string;
  body: string[];
  areas: string[];
  models?: string[];
  cta: string;
};

export type ArticlePage = {
  lang: Language;
  slug: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  body: string[];
};

export const contact = {
  address: 'Apoquindo N° 3076, oficina N° 702, Barrio El Golf, Las Condes, Santiago, Chile.',
  email: 'contacto@bachile.cl',
  phone: '+56 9 3100 7417',
  linkedin: 'https://www.linkedin.com/company/bright-alliance-ba-chile/',
  youtube: 'https://www.youtube.com/'
};

export const nav = {
  es: [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Nosotros', href: '/nosotros/' },
    { label: 'Noticias', href: '/noticias-blog/' },
    { label: 'Contacto', href: '/contacto/' }
  ],
  en: [
    { label: 'Home', href: '/en/' },
    { label: 'Services', href: '/en/#services' },
    { label: 'About Us', href: '/en/about-us/' },
    { label: 'News', href: '/en/news-blog/' },
    { label: 'Contact', href: '/en/contact/' }
  ]
};

export const home = {
  es: {
    title: 'Derecho, Empresa y Estrategia',
    subtitle: 'Asesoría legal empresarial para decisiones relevantes, estructuras sólidas y crecimiento sostenible.',
    lead: 'Acompañamos a empresas, inversionistas y grupos empresariales con criterio jurídico, visión de negocio y una lectura estratégica de sus riesgos y oportunidades.',
    approach: 'Nuestro enfoque combina experiencia legal, visión de negocio e inteligencia organizacional, para que cada decisión empresarial sea sólida, eficiente y alineada con los objetivos estratégicos de la compañía.',
    servicesHeading: 'Áreas de especialidad',
    servicesSubheading: 'Asesoría empresarial organizada en frentes claros, con foco en gestión, proyectos y expansión.',
    founderHeading: 'Palabras del socio fundador',
    founderQuote: 'Para asesorar adecuadamente a una organización empresarial, esta debe comprenderse como un sistema integrado, compuesto por unidades que interactúan de manera sinérgica e interdependiente.',
    founderText: 'Una asesoría legal verdaderamente efectiva requiere comprender esta lógica sistémica y la capacidad de acompañar estratégicamente a la organización desde su interior, en conexión directa con sus operaciones y procesos de toma de decisiones.'
  },
  en: {
    title: 'Law, Business, and Strategy',
    subtitle: 'Business legal advisory for relevant decisions, solid structures, and sustainable growth.',
    lead: 'We advise companies, investors, and business groups with legal criteria, business vision, and a strategic reading of risks and opportunities.',
    approach: 'Our approach combines legal expertise, business insight, and organizational intelligence, ensuring that every business decision is sound, efficient, and aligned with strategic objectives.',
    servicesHeading: 'Practice Areas',
    servicesSubheading: 'Business advisory organized around clear fronts: management, projects, and expansion.',
    founderHeading: 'Words from the Founding Partner',
    founderQuote: 'To properly advise a business organization, it must be understood as an integrated system, composed of units that interact in a synergistic and interdependent manner.',
    founderText: 'Truly effective legal counsel requires understanding this systemic logic and supporting the organization strategically from within, in direct connection with operations and decision-making processes.'
  }
};

export const about = {
  es: {
    slug: 'nosotros',
    title: '/ Nosotros',
    lead: 'Bright Alliance | BA Chile es una firma jurídica estratégica que integra Derecho, Estrategia y Empresa para ofrecer soluciones jurídicas de alto nivel, diseñadas para fortalecer la gestión corporativa, prevenir riesgos y acompañar el desarrollo sostenible de nuestros clientes, tanto en Chile como en el extranjero.',
    proposal: [
      'Nuestra propuesta se basa en una comprensión profunda del negocio y en la convicción de que el Derecho debe ser una herramienta para crear valor, facilitar decisiones y potenciar la competitividad.',
      'A través de una alianza inteligente entre conocimiento legal, visión empresarial y experiencia técnica, convertimos la complejidad jurídica en decisiones estratégicas claras, seguras y sostenibles.'
    ],
    mission: 'Acompañar a empresas nacionales e internacionales con asesoría jurídica, integrando Derecho, Estrategia y Empresa para construir estructuras sólidas, decisiones eficaces y modelos de negocio sostenibles.',
    vision: 'Consolidar a Bright Alliance | BA Chile como una firma de referencia en asesoría jurídico-estratégica, reconocida por integrar el Derecho con la Estrategia y la gestión empresarial.',
    values: ['Compromiso', 'Excelencia', 'Liderazgo', 'Innovación', 'Adaptabilidad', 'Integridad']
  },
  en: {
    slug: 'about-us',
    title: '/ About Us',
    lead: 'Bright Alliance | BA Chile is a strategic legal firm that integrates Law, Strategy, and Business to offer high-level solutions designed to strengthen corporate management and support sustainable development.',
    proposal: [
      'Our proposal is based on a deep understanding of business and on the conviction that law must create value, facilitate decisions, and strengthen competitiveness.',
      'Through an intelligent alliance between legal knowledge, business vision, and technical experience, we turn legal complexity into clear, secure, and sustainable strategic decisions.'
    ],
    mission: 'To support national and international companies through legal advice that builds solid structures, effective decisions, and sustainable business models.',
    vision: 'To be a benchmark firm in strategic-legal advisory, recognized for generating solutions that transcend the legal sphere and promote innovative business development.',
    values: ['Commitment', 'Excellence', 'Leadership', 'Innovation', 'Adaptability', 'Integrity']
  }
};

export const services: ServicePage[] = [
  {
    lang: 'es',
    slug: 'derecho-de-la-empresa',
    title: '/ Derecho de la Empresa',
    navLabel: 'Derecho de la Empresa',
    summary: 'Asesoría jurídica estratégica para la gestión, estructura y crecimiento empresarial.',
    intro: 'En Bright Alliance | BA Chile entendemos el Derecho de la Empresa como un soporte jurídico integral que permite a las organizaciones operar con solidez, eficiencia y visión de futuro.',
    body: [
      'No se trata solo de cumplir la ley, sino de alinear las decisiones legales con la estrategia corporativa y el desarrollo sostenible del negocio.',
      'El Derecho de la Empresa se estructura sobre múltiples áreas de práctica, adaptadas a las necesidades específicas de cada cliente.'
    ],
    models: ['Asesoría caso a caso', 'Asesoría por proyecto', 'Departamento jurídico externo'],
    areas: ['Asesoría jurídico-corporativa', 'Contratos civiles y comerciales', 'Derecho laboral y tributario', 'Compliance y prevención de riesgos', 'Propiedad intelectual', 'Libre competencia y consumidor'],
    cta: 'Solicitar asesoría corporativa'
  },
  {
    lang: 'es',
    slug: 'ingenieria-y-derecho',
    title: '/ Ingeniería y Derecho',
    navLabel: 'Ingeniería y Derecho',
    summary: 'Soluciones jurídico-estratégicas para empresas, proyectos y estructuras patrimoniales complejas.',
    intro: 'Acompañamos el ciclo completo de proyectos, desde la preparación contractual hasta la ejecución, gestión de riesgos, controversias y cierre.',
    body: [
      'La asesoría combina criterio legal, visión de negocio y comprensión técnica para empresas de ingeniería, construcción, minería, energía e infraestructura.',
      'El foco está en anticipar contingencias, ordenar contratos y sostener decisiones ejecutables en entornos operativos complejos.'
    ],
    models: ['Preparación contractual', 'Ejecución y control de riesgos', 'Controversias y cierre'],
    areas: ['Contratos de ingeniería y construcción', 'Gestión contractual', 'Prevención de riesgos', 'Cumplimiento contractual', 'Ingeniería forense', 'Resolución de controversias', 'Protección patrimonial', 'Acompañamiento permanente'],
    cta: 'Conversemos sobre su próximo proyecto'
  },
  {
    lang: 'es',
    slug: 'comercio-y-negocios-internacionales',
    title: '/ Comercio y Negocios Internacionales',
    navLabel: 'Comercio y Negocios Internacionales',
    summary: 'Asesoría jurídica y estratégica para conectar empresas, mercados y oportunidades.',
    intro: 'El comercio internacional requiere estructuras jurídicas sólidas, visión estratégica y conocimiento de las normas que regulan las operaciones entre distintos países.',
    body: [
      'Acompañamos a empresas chilenas y extranjeras en procesos de expansión, representación o inversión, integrando Derecho, Estrategia y Empresa.',
      'Nuestra práctica combina una base jurídica local con alianzas profesionales en Europa, América y Oceanía.'
    ],
    models: ['Expansión internacional', 'Representación comercial', 'Estructuración contractual y tributaria'],
    areas: ['Constitución y representación de empresas extranjeras', 'Inversión extranjera y repatriación de capitales', 'Fusiones, adquisiciones y joint ventures', 'Contratos de comercio internacional', 'Agencia y representación comercial', 'Estructuración corporativa y tributaria internacional'],
    cta: 'Evaluar expansión internacional'
  },
  {
    lang: 'es',
    slug: 'compliance',
    title: '/ Compliance',
    navLabel: 'Compliance',
    summary: 'Diseño, revisión e implementación de modelos de cumplimiento alineados con el negocio.',
    intro: 'El cumplimiento debe operar como un sistema preventivo y gestionable, no como documentación aislada.',
    body: [
      'Apoyamos a empresas en diagnóstico, brechas, diseño de controles, protocolos internos y seguimiento.',
      'La mirada combina exigencia normativa, operación interna y criterios de gobernanza.'
    ],
    areas: ['Diagnóstico normativo', 'Mapeo de riesgos', 'Modelos de prevención', 'Protocolos y controles', 'Capacitación y seguimiento'],
    cta: 'Diagnosticar brechas de cumplimiento'
  },
  {
    lang: 'es',
    slug: 'landing-ingenieria-derecho',
    title: 'Soluciones especializadas en ingeniería y derecho',
    navLabel: 'Landing Ingeniería y Derecho',
    summary: 'Asesoría jurídico-estratégica especializada para empresas de ingeniería, construcción, minería, energía e infraestructura.',
    intro: 'Integramos conocimiento legal, visión de negocio y comprensión técnica para acompañar proyectos desde su preparación contractual hasta su cierre.',
    body: ['Esta ruta replica la landing vigente como punto de entrada comercial para campañas específicas.'],
    areas: ['Preparación contractual', 'Licitaciones y propuestas', 'Ejecución de proyectos', 'Gestión de riesgos', 'Reclamos y controversias', 'Cierre contractual'],
    cta: 'Solicitar asesoría'
  },
  {
    lang: 'es',
    slug: 'landing-derecho-empresa',
    title: 'Derecho de la Empresa',
    navLabel: 'Landing Derecho de la Empresa',
    summary: 'Soporte legal para operación diaria, decisiones críticas y procesos de crecimiento.',
    intro: 'Entendemos el Derecho de la Empresa como una función estratégica del negocio.',
    body: ['Esta ruta mantiene una entrada comercial enfocada en empresas que requieren soporte permanente, acompañamiento por proyecto o una unidad jurídica externa.'],
    areas: ['Soporte legal permanente', 'Acompañamiento en proyectos específicos', 'Unidad jurídica externa', 'Gestión corporativa', 'Contratos y riesgos'],
    cta: 'Descubre cómo'
  },
  {
    lang: 'en',
    slug: 'corporate-business-law',
    title: '/ Corporate & Business Law',
    navLabel: 'Corporate & Business Law',
    summary: 'Strategic legal counsel for business management, corporate structuring, and growth.',
    intro: 'At Bright Alliance | BA Chile, Corporate Law is a comprehensive legal framework that enables organizations to operate with strength, efficiency, and a forward-looking vision.',
    body: ['It is not only about legal compliance, but about aligning legal decisions with corporate strategy and sustainable business development.'],
    models: ['Case-by-case advisory', 'Project-based advisory', 'External legal department'],
    areas: ['Corporate legal advisory', 'Civil and commercial contracts', 'Labor and tax law', 'Compliance', 'Intellectual property', 'Competition and consumer protection'],
    cta: 'Request corporate counsel'
  },
  {
    lang: 'en',
    slug: 'engineering-and-law',
    title: '/ Engineering and Law',
    navLabel: 'Engineering and Law',
    summary: 'Strategic legal solutions for companies, projects, and complex asset structures.',
    intro: 'We support the full project lifecycle, from contractual preparation to execution, risk management, disputes, and closure.',
    body: ['The advisory integrates legal criteria, business vision, and technical understanding for engineering, construction, mining, energy, and infrastructure companies.'],
    areas: ['Engineering and construction contracts', 'Contract management', 'Risk prevention', 'Contract compliance', 'Forensic engineering', 'Dispute resolution', 'Asset protection'],
    cta: 'Discuss your next project'
  },
  {
    lang: 'en',
    slug: 'international-trade-business',
    title: '/ International Trade & Business',
    navLabel: 'International Trade & Business',
    summary: 'Legal and strategic advisory services to connect companies, markets, and opportunities.',
    intro: 'International trade requires solid legal structures, strategic vision, and a deep understanding of cross-border regulations.',
    body: ['We support Chilean and international companies in expansion, representation, and investment processes.'],
    areas: ['Foreign company incorporation in Chile', 'Foreign investment and capital repatriation', 'International M&A and joint ventures', 'International trade contracts', 'Commercial agency and representation', 'International corporate and tax structuring'],
    cta: 'Evaluate international expansion'
  },
];

export const clientLogos = Array.from({ length: 25 }, (_, index) => ({
  src: `/assets/clients/client-${index + 1}.png`,
  alt: `Cliente BA Chile ${index + 1}`
}));

export const articles: ArticlePage[] = [
  {
    lang: 'es',
    slug: 'ley-de-datos-personales-en-chile-que-cambia-como-afecta-a-las-empresas-y-por-que-prepararse-ahora',
    title: 'Ley de Datos Personales en Chile: qué cambia, cómo afecta a las empresas y por qué prepararse ahora',
    summary: 'La nueva regulación obliga a revisar datos, procesos, contratos y controles internos.',
    image: '/assets/website/ley-datos-personales.png',
    category: 'Regulación',
    body: ['La protección de datos personales exige una revisión práctica de procesos internos, contratos, sistemas y responsabilidades.', 'Para las empresas, el desafío no es solo formal. Requiere adaptar gobernanza, gestión documental, seguridad y relación con clientes o usuarios.']
  },
  {
    lang: 'es',
    slug: 'ley-fintec-chile-2025-como-impacta-a-las-empresas-y-por-que-es-clave-prepararse-ahora',
    title: 'Ley Fintec Chile 2025: cómo impacta a las empresas y por qué es clave prepararse ahora',
    summary: 'La regulación Fintech transforma obligaciones en una oportunidad de ordenar operación y escalar con mayor solidez.',
    image: '/assets/website/ley-fintec.png',
    category: 'Fintech',
    body: ['La complejidad técnica de la Ley Fintec Chile 2025 exige un análisis integral: legal, estratégico y operacional.', 'El cumplimiento normativo puede convertirse en una ventaja competitiva cuando se integra al modelo de negocio.']
  },
  {
    lang: 'en',
    slug: 'personal-data-in-chile',
    title: 'Personal Data in Chile',
    summary: 'What changes, how it affects companies, and why preparation matters.',
    image: '/assets/website/ley-datos-personales.png',
    category: 'Regulation',
    body: ['Personal data regulation requires companies to review internal processes, contracts, security, and governance.', 'Preparation should connect legal obligations with operational controls.']
  },
  {
    lang: 'en',
    slug: 'fintec-ley-how-is-in-chile',
    title: '“Fintec Ley” ¿How is in Chile?',
    summary: 'How Chilean Fintech regulation affects companies and why preparation matters.',
    image: '/assets/website/ley-fintec.png',
    category: 'Fintech',
    body: ['The Chilean Fintech framework creates technical obligations, but also an opportunity to organize operations and strengthen trust.', 'Bright Alliance approaches compliance as a legal, strategic, and operational process.']
  }
];

export const visibleRoutes = [
  '/',
  '/nosotros/',
  '/derecho-de-la-empresa/',
  '/ingenieria-y-derecho/',
  '/comercio-y-negocios-internacionales/',
  '/compliance/',
  '/landing-ingenieria-derecho/',
  '/landing-derecho-empresa/',
  '/noticias-blog/',
  '/contacto/',
  '/en/',
  '/en/about-us/',
  '/en/corporate-business-law/',
  '/en/engineering-and-law/',
  '/en/international-trade-business/',
  '/en/news-blog/',
  '/en/contact/'
];

export function servicesByLang(lang: Language) {
  return services.filter((service) => service.lang === lang);
}

export function articlesByLang(lang: Language) {
  return articles.filter((article) => article.lang === lang);
}
