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
  heroImage?: string;
  pillars?: Array<{
    title: string;
    text: string;
  }>;
  sections?: Array<{
    title: string;
    text: string;
    items?: string[];
    result?: string;
  }>;
  cta: string;
};

export type ArticlePage = {
  lang: Language;
  slug: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  publishedAt?: string;
  readTime?: string;
  keyPoints?: string[];
  sections?: Array<{
    title: string;
    paragraphs: string[];
    items?: string[];
  }>;
  source?: {
    label: string;
    href: string;
  };
  body: string[];
};

export const contact = {
  address: 'Apoquindo N° 3076, oficina N° 702, Barrio El Golf, Las Condes, Santiago, Chile.',
  email: 'contacto@bachile.cl',
  phone: '+56 9 3100 7417',
  linkedin: 'https://www.linkedin.com/company/brightalliance/',
  youtube: 'https://www.youtube.com/'
};

export const nav = {
  es: [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios/' },
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
    subtitle: 'Un lenguaje clave para visiones que trascienden.',
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
    subtitle: 'A key language for visions that transcend.',
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
    values: ['Compromiso', 'Excelencia', 'Liderazgo', 'Innovación', 'Adaptabilidad', 'Integridad'],
    valueDetails: [
      {
        title: 'Compromiso',
        text: 'Nos involucramos activamente en los objetivos de cada cliente, construyendo relaciones basadas en confianza, transparencia y responsabilidad compartida.'
      },
      {
        title: 'Excelencia',
        text: 'Buscamos rigor en cada detalle, con asesoría jurídica oportuna, precisa y de alto estándar profesional.'
      },
      {
        title: 'Liderazgo',
        text: 'Anticipamos desafíos, orientamos decisiones estratégicas y transformamos riesgos en oportunidades de crecimiento.'
      },
      {
        title: 'Innovación',
        text: 'Incorporamos pensamiento creativo, herramientas tecnológicas y modelos de gestión modernos para resolver problemas empresariales actuales.'
      },
      {
        title: 'Adaptabilidad',
        text: 'Ajustamos nuestro trabajo a la naturaleza, escala, ritmo y entorno competitivo de cada organización.'
      },
      {
        title: 'Integridad',
        text: 'Actuamos con rectitud, coherencia y respeto por los principios que sostienen la práctica jurídica y la confianza.'
      }
    ]
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
    values: ['Commitment', 'Excellence', 'Leadership', 'Innovation', 'Adaptability', 'Integrity'],
    valueDetails: [
      { title: 'Commitment', text: 'We actively engage with each client objective through trust, transparency, and shared responsibility.' },
      { title: 'Excellence', text: 'We pursue rigor in every detail through timely, precise, and high-standard legal counsel.' },
      { title: 'Leadership', text: 'We anticipate challenges, guide strategic decisions, and transform risk into growth opportunities.' },
      { title: 'Innovation', text: 'We integrate creative thinking, modern management models, and practical technology criteria.' },
      { title: 'Adaptability', text: 'We adapt to the nature, scale, pace, and competitive context of each organization.' },
      { title: 'Integrity', text: 'We act with consistency, rectitude, and respect for the principles that sustain legal trust.' }
    ]
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
    heroImage: '/assets/services/corporate-law.webp',
    body: [
      'No se trata solo de cumplir la ley, sino de alinear las decisiones legales con la estrategia corporativa y el desarrollo sostenible del negocio.',
      'El Derecho de la Empresa se estructura sobre múltiples áreas de práctica, adaptadas a las necesidades específicas de cada cliente.'
    ],
    models: ['Asesoría caso a caso', 'Asesoría por proyecto', 'Departamento jurídico externo'],
    pillars: [
      {
        title: 'Gestión corporativa',
        text: 'Acompañamiento en estructura societaria, gobierno corporativo, administración, juntas, directorios y operaciones habituales.'
      },
      {
        title: 'Contratos y negociación',
        text: 'Redacción, revisión y negociación de contratos civiles, comerciales y estructuras contractuales alineadas al negocio.'
      },
      {
        title: 'Prevención y cumplimiento',
        text: 'Diseño de controles legales, laborales, tributarios, de compliance y defensa corporativa ante contingencias.'
      }
    ],
    sections: [
      {
        title: 'Modalidades de asesoría',
        text: 'Tres modalidades complementarias permiten ajustar profundidad y continuidad del servicio jurídico a la realidad de cada empresa.',
        items: ['Intervención puntual caso a caso en contratos, consultas, litigios o informes legales.', 'Acompañamiento integral por proyecto en reestructuraciones, expansiones, M&A, auditorías o procesos internacionales.', 'Departamento jurídico externo permanente, integrado como unidad funcional para gestión, prevención y toma de decisiones.']
      },
      {
        title: 'Áreas de práctica',
        text: 'La asesoría cubre materias jurídicas que sostienen la operación, estructura y crecimiento empresarial.',
        items: ['Asesoría jurídico-corporativa y diseño estratégico de grupos empresariales.', 'Fusiones y adquisiciones, contratos, negociaciones complejas y litigación corporativa.', 'Derecho laboral, tributario, penal empresarial, consumidor, libre competencia, propiedad intelectual y compliance.']
      },
      {
        title: 'Riesgo, continuidad y gobierno',
        text: 'La práctica conecta decisiones jurídicas con continuidad operacional, reputación, patrimonio y calidad de gobierno corporativo.',
        items: ['Programas de cumplimiento y prevención de delitos económicos.', 'Relación con organismos públicos, licitaciones, UTP y litigación administrativa.', 'Planificación del retiro, reorganización y procedimientos concursales.']
      }
    ],
    areas: ['Asesoría jurídico-corporativa', 'Diseño de grupos empresariales', 'Fusiones y adquisiciones', 'Derecho laboral empresarial', 'Contratos civiles y comerciales', 'Negociaciones complejas', 'Litigación y defensa corporativa', 'Compliance corporativo', 'Derecho tributario', 'Derecho penal empresarial', 'Licitaciones y UTP', 'Propiedad intelectual', 'Consumidor y libre competencia', 'Reorganización y continuidad'],
    cta: 'Solicitar asesoría corporativa'
  },
  {
    lang: 'es',
    slug: 'ingenieria-y-derecho',
    title: '/ Ingeniería y Derecho',
    navLabel: 'Ingeniería y Derecho',
    summary: 'Soluciones jurídico-estratégicas para empresas, proyectos y estructuras patrimoniales complejas.',
    intro: 'Área especializada para empresas que desarrollan proyectos de alta complejidad técnica, contractual y patrimonial.',
    heroImage: '/assets/services/engineering-law.webp',
    body: [
      'Integramos visión legal, comprensión operativa y enfoque preventivo para proteger la posición contractual, acompañar decisiones críticas y resguardar el patrimonio empresarial.',
      'La asesoría transforma el contrato en una herramienta activa de gestión, control de riesgos, protección patrimonial y defensa del resultado económico del negocio.'
    ],
    models: ['Departamento jurídico externo permanente', 'Asesoría por proyecto', 'Intervención en etapas críticas', 'Diagnóstico estratégico de contratos en ejecución'],
    pillars: [
      {
        title: 'Departamento jurídico externo',
        text: 'Soporte legal continuo, especializado y alineado con la operación real, sin necesidad de internalizar una estructura jurídica completa.'
      },
      {
        title: 'Ciclo de vida del proyecto',
        text: 'Acompañamiento desde etapa preliminar hasta cierre, con gestión estratégica del contrato, evidencia, hitos y riesgos.'
      },
      {
        title: 'Protección patrimonial',
        text: 'Ordenamiento de exposición patrimonial de socios, directores, gerentes y representantes legales frente a contingencias.'
      }
    ],
    sections: [
      {
        title: 'Inicio y estructuración contractual',
        text: 'Intervenimos antes de la firma o adjudicación, cuando se define buena parte del riesgo futuro del proyecto.',
        items: ['Revisión estratégica de bases, ofertas y condiciones comerciales.', 'Apoyo en licitaciones públicas y privadas.', 'Identificación temprana de riesgos críticos en plazos, alcance, pagos, garantías y responsabilidades.'],
        result: 'Contratos más sólidos, mejor posición negociadora y menor exposición durante la ejecución.'
      },
      {
        title: 'Ejecución y administración contractual',
        text: 'Una vez iniciado el proyecto, el foco pasa a administrar estratégicamente derechos, obligaciones, hitos, cambios y evidencia.',
        items: ['Plan estratégico de gestión contractual del proyecto.', 'Protocolos de gestión de cambios, variaciones y administración documental.', 'Gobernanza contractual, trazabilidad y monitoreo de cumplimiento.'],
        result: 'El contrato pasa de factor pasivo de riesgo a herramienta de control, dirección y defensa.'
      },
      {
        title: 'Riesgos, claims y cierre',
        text: 'En proyectos complejos, muchos conflictos nacen de acumulaciones progresivas de brechas, omisiones o registros deficientes.',
        items: ['Priorización de riesgos contractuales críticos y estrategias de mitigación.', 'Estructuración técnica y jurídica de claims y controversias.', 'Preparación estratégica de cierre contractual, liberación de garantías y resolución de reclamos.'],
        result: 'Mayor recuperación económica, reducción del costo de controversias y cierre ordenado.'
      },
      {
        title: 'Protección patrimonial',
        text: 'Complementamos la gestión jurídica de la empresa con revisión de exposición patrimonial y estructuras de resguardo.',
        items: ['Revisión de exposición de socios y controladores.', 'Separación y ordenamiento de activos personales y empresariales.', 'Prevención de contingencias por garantías, responsabilidad de administradores o insolvencia.']
      }
    ],
    areas: ['Departamento jurídico externo', 'Contratos de ingeniería y construcción', 'Licitaciones públicas y privadas', 'Gestión contractual', 'Control de riesgos', 'Diagnóstico de contratos en curso', 'Claims y controversias', 'Análisis forense contractual', 'Cierre contractual', 'Protección patrimonial'],
    cta: 'Conversemos sobre su próximo proyecto'
  },
  {
    lang: 'es',
    slug: 'comercio-y-negocios-internacionales',
    title: '/ Comercio y Negocios Internacionales',
    navLabel: 'Comercio y Negocios Internacionales',
    summary: 'Asesoría jurídica y estratégica para conectar empresas, mercados y oportunidades.',
    intro: 'El comercio internacional requiere estructuras jurídicas sólidas, visión estratégica y conocimiento de las normas que regulan las operaciones entre distintos países.',
    heroImage: '/assets/services/international-trade.webp',
    body: [
      'Acompañamos a empresas chilenas y extranjeras en procesos de expansión, representación o inversión, integrando Derecho, Estrategia y Empresa.',
      'Nuestra práctica combina una base jurídica local con alianzas profesionales en Europa, América y Oceanía.'
    ],
    models: ['Expansión internacional', 'Representación comercial', 'Estructuración contractual y tributaria'],
    pillars: [
      {
        title: 'Expansión e inversión',
        text: 'Estructuras legales para instalación de empresas, representación, inversión extranjera y repatriación de capitales.'
      },
      {
        title: 'Operaciones transfronterizas',
        text: 'Contratos internacionales, agencias, distribución, franquicias, licencias, suministro y prestación de servicios.'
      },
      {
        title: 'Red profesional internacional',
        text: 'Coordinación con alianzas en Europa, América y Oceanía para proyectos multijurisdiccionales.'
      }
    ],
    sections: [
      {
        title: 'Acompañamos tu proceso de expansión',
        text: 'Facilitamos decisiones seguras, sostenibles y alineadas con objetivos de negocio para empresas chilenas y extranjeras.',
        items: ['Constitución y representación de empresas extranjeras en Chile.', 'Instalación de agencias, filiales, sucursales o joint ventures.', 'Obtención de RUT, representantes legales y cumplimiento normativo integral.']
      },
      {
        title: 'Estructuración internacional',
        text: 'Diseñamos estructuras corporativas, fiscales y contractuales eficientes para inversión, crecimiento y operación entre jurisdicciones.',
        items: ['Inversión extranjera y repatriación de capitales.', 'Fusiones, adquisiciones y joint ventures internacionales.', 'Holdings, subholdings, SPV y planificación tributaria internacional.']
      },
      {
        title: 'Comercio, representación y controversias',
        text: 'Acompañamos relaciones comerciales internacionales desde contrato hasta resolución de controversias.',
        items: ['Compraventa, agencia, distribución, franquicia, licencias, suministro y servicios internacionales.', 'Propiedad intelectual, transferencia tecnológica y compliance internacional.', 'Arbitrajes, mediaciones o litigios transfronterizos con estudios aliados.']
      }
    ],
    areas: ['Constitución y representación de empresas extranjeras', 'Inversión extranjera y repatriación de capitales', 'M&A y joint ventures internacionales', 'Contratos internacionales de comercio', 'Agenciamiento y representación comercial', 'Arquitectura societaria y tributaria internacional', 'Propiedad intelectual y transferencia tecnológica', 'Compliance y regulaciones internacionales', 'Controversias internacionales'],
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
    image: '/assets/news/data-privacy-server.jpg',
    category: 'Regulación',
    publishedAt: '2026',
    readTime: '5 min',
    keyPoints: ['Gobernanza de datos', 'Contratos y encargados', 'Seguridad y trazabilidad', 'Riesgo reputacional'],
    source: {
      label: 'Biblioteca del Congreso Nacional de Chile',
      href: 'https://www.bcn.cl/leychile/'
    },
    body: [
      'La protección de datos personales dejó de ser un asunto aislado del área tecnológica. Para las empresas, hoy exige gobierno interno, contratos claros, trazabilidad de procesos y una lectura estratégica del riesgo.',
      'El desafío no consiste únicamente en actualizar documentos. Requiere entender qué datos se tratan, para qué se usan, quién accede a ellos, cómo se resguardan y qué controles permiten demostrar una gestión responsable.'
    ],
    sections: [
      {
        title: 'Qué cambia para la empresa',
        paragraphs: [
          'La regulación empuja a las organizaciones a ordenar la forma en que capturan, almacenan, comparten y eliminan información personal. Esto impacta procesos comerciales, recursos humanos, proveedores, sistemas internos y canales digitales.',
          'Una empresa que no conoce su flujo de datos opera con exposición legal y reputacional. La primera decisión estratégica es mapear tratamientos, responsables, finalidades, riesgos y brechas de control.'
        ],
        items: ['Inventario de datos personales tratados por la organización.', 'Revisión de bases legales, finalidades y consentimiento cuando corresponda.', 'Evaluación de proveedores que acceden o procesan datos por cuenta de la empresa.']
      },
      {
        title: 'Contratos, proveedores y responsabilidad',
        paragraphs: [
          'La gestión de datos no termina dentro de la empresa. Muchos riesgos se originan en proveedores tecnológicos, plataformas comerciales, servicios de marketing, payroll, software de gestión o almacenamiento externo.',
          'Por eso, los contratos deben definir roles, obligaciones de seguridad, confidencialidad, subcontratación, respuesta ante incidentes y condiciones de término del servicio.'
        ],
        items: ['Cláusulas de tratamiento de datos y confidencialidad.', 'Estándares mínimos de seguridad y reporte de incidentes.', 'Derechos de auditoría o mecanismos de verificación razonables.']
      },
      {
        title: 'Prepararse con criterio ejecutivo',
        paragraphs: [
          'Un plan de cumplimiento efectivo debe priorizar riesgos reales. No todas las empresas tienen la misma exposición ni requieren el mismo nivel de intervención inicial.',
          'El enfoque recomendable es avanzar por etapas: diagnóstico, priorización, contratos críticos, políticas internas, capacitación y seguimiento periódico.'
        ],
        items: ['Diagnóstico inicial de brechas.', 'Plan de implementación por criticidad.', 'Evidencia documental para demostrar cumplimiento progresivo.']
      }
    ]
  },
  {
    lang: 'es',
    slug: 'ley-fintec-chile-2025-como-impacta-a-las-empresas-y-por-que-es-clave-prepararse-ahora',
    title: 'Ley Fintec Chile 2025: cómo impacta a las empresas y por qué es clave prepararse ahora',
    summary: 'La regulación Fintech transforma obligaciones en una oportunidad de ordenar operación y escalar con mayor solidez.',
    image: '/assets/news/fintech-payment.jpg',
    category: 'Fintech',
    publishedAt: '2026',
    readTime: '5 min',
    keyPoints: ['Modelo de negocio', 'Riesgo operacional', 'Gobierno corporativo', 'Relación con reguladores'],
    source: {
      label: 'Comisión para el Mercado Financiero',
      href: 'https://www.cmfchile.cl/'
    },
    body: [
      'La regulación Fintech obliga a mirar el negocio financiero digital con una perspectiva integral: jurídica, operacional, tecnológica y comercial.',
      'Para las empresas, el cumplimiento no debe abordarse como una carga documental separada del negocio. Bien implementado, puede ordenar procesos, mejorar la confianza de usuarios e inversionistas y fortalecer la escalabilidad.'
    ],
    sections: [
      {
        title: 'Una regulación conectada al modelo de negocio',
        paragraphs: [
          'Las compañías vinculadas a servicios financieros tecnológicos deben revisar cómo se estructura su propuesta de valor, qué actividades realizan, qué riesgos asumen y qué obligaciones regulatorias pueden activar.',
          'El punto crítico es evitar lecturas genéricas. Dos empresas que parecen similares desde la interfaz pueden tener estructuras jurídicas, flujos de dinero, terceros involucrados y riesgos completamente distintos.'
        ],
        items: ['Identificación de actividades reguladas o sensibles.', 'Análisis de flujos operacionales y participantes.', 'Revisión de contratos con usuarios, comercios, proveedores y partners.']
      },
      {
        title: 'Cumplimiento como ventaja de confianza',
        paragraphs: [
          'En mercados financieros digitales, la confianza es parte del producto. Los controles legales, tecnológicos y operacionales deben sostener la promesa comercial.',
          'Una estructura robusta puede facilitar conversaciones con inversionistas, alianzas comerciales, entidades financieras y potenciales procesos de expansión.'
        ],
        items: ['Gobierno interno y roles de control.', 'Gestión de riesgos operacionales y tecnológicos.', 'Trazabilidad documental para auditorías o revisiones regulatorias.']
      },
      {
        title: 'Preparación práctica',
        paragraphs: [
          'La recomendación inicial es trabajar desde un diagnóstico ejecutivo. Antes de implementar documentos aislados, conviene entender el mapa del negocio y sus puntos de exposición.',
          'Desde ahí, la empresa puede priorizar contratos, procesos internos, reportabilidad, continuidad operacional y relación con autoridades o contrapartes relevantes.'
        ],
        items: ['Diagnóstico jurídico-operacional.', 'Hoja de ruta regulatoria por prioridad.', 'Acompañamiento en implementación y actualización periódica.']
      }
    ]
  },
  {
    lang: 'en',
    slug: 'personal-data-in-chile',
    title: 'Personal Data in Chile',
    summary: 'What changes, how it affects companies, and why preparation matters.',
    image: '/assets/news/data-privacy-server.jpg',
    category: 'Regulation',
    publishedAt: '2026',
    readTime: '5 min',
    keyPoints: ['Data governance', 'Contracts and processors', 'Security controls', 'Reputational risk'],
    source: {
      label: 'Library of Congress of Chile',
      href: 'https://www.bcn.cl/leychile/'
    },
    body: ['Personal data regulation requires companies to review internal processes, contracts, security, and governance.', 'Preparation should connect legal obligations with operational controls.'],
    sections: [
      {
        title: 'What changes for companies',
        paragraphs: ['Personal data management now requires a practical understanding of what data is processed, why it is processed, who has access to it, and which controls support responsible use.', 'The first step is to map treatments, roles, purposes, providers, and internal control gaps.'],
        items: ['Data inventory.', 'Review of legal basis and purposes.', 'Assessment of vendors that process company data.']
      },
      {
        title: 'Contracts and vendors',
        paragraphs: ['Many risks arise from technology vendors, software platforms, marketing services, payroll providers, and external storage.', 'Contracts should define data roles, confidentiality, security duties, incident response, subcontracting, and termination rules.'],
        items: ['Data processing clauses.', 'Security and incident reporting standards.', 'Reasonable audit or verification mechanisms.']
      }
    ]
  },
  {
    lang: 'en',
    slug: 'fintec-ley-how-is-in-chile',
    title: '“Fintec Ley” ¿How is in Chile?',
    summary: 'How Chilean Fintech regulation affects companies and why preparation matters.',
    image: '/assets/news/fintech-payment.jpg',
    category: 'Fintech',
    publishedAt: '2026',
    readTime: '5 min',
    keyPoints: ['Business model', 'Operational risk', 'Governance', 'Regulatory relationship'],
    source: {
      label: 'Financial Market Commission',
      href: 'https://www.cmfchile.cl/'
    },
    body: ['The Chilean Fintech framework creates technical obligations, but also an opportunity to organize operations and strengthen trust.', 'Bright Alliance approaches compliance as a legal, strategic, and operational process.'],
    sections: [
      {
        title: 'Regulation and business model',
        paragraphs: ['Companies connected to financial technology services should review their value proposition, activities, money flows, providers, and risk exposure.', 'A useful assessment must be specific to the company, not generic to the interface or product category.'],
        items: ['Identification of regulated or sensitive activities.', 'Operational flow review.', 'Contracts with users, merchants, vendors, and partners.']
      },
      {
        title: 'Compliance as trust infrastructure',
        paragraphs: ['In digital financial markets, trust is part of the product. Legal, operational, and technology controls should support the commercial promise.', 'A robust structure can improve investor conversations, partnerships, and expansion readiness.'],
        items: ['Internal governance.', 'Operational and technology risk management.', 'Documentary traceability for audits or regulatory review.']
      }
    ]
  }
];

export const visibleRoutes = [
  '/',
  '/nosotros/',
  '/servicios/',
  '/derecho-de-la-empresa/',
  '/ingenieria-y-derecho/',
  '/comercio-y-negocios-internacionales/',
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
