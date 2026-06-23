export type Language = 'es' | 'en';

export type ServicePage = {
  lang: Language;
  slug: string;
  title: string;
  navLabel: string;
  icon?: string;
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
  kind?: 'external' | 'internal';
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
  externalUrl?: string;
  body: string[];
};

export const contact = {
  address: 'Apoquindo N° 3076, oficina N° 702, Barrio El Golf, Las Condes, Santiago, Chile.',
  email: 'contacto@bachile.cl',
  phone: '+56 9 3100 7417',
  linkedin: 'https://www.linkedin.com/company/brightalliance/',
  agendaHref: '/contacto/?agenda=pendiente'
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
    founderQuote: 'Para asesorar adecuadamente a una organización empresarial, esta debe comprenderse como un sistema integrado, compuesto por unidades que interactúan de manera sinérgica e interdependiente. En este contexto, una disfunción en cualquiera de sus componentes impacta inevitablemente en los demás, afectando el desempeño del sistema en su conjunto.',
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
      'A través de una alianza inteligente entre conocimiento legal, visión empresarial y experiencia técnica, convertimos la complejidad jurídica en decisiones estratégicas claras, seguras y sostenibles.',
      'El equipo que respalda esta propuesta está conformado por profesionales de alto nivel —abogados, contadores, ingenieros y consultores especializados— que comparten una misma visión: ejercer el Derecho con excelencia, enfoque estratégico y compromiso con el desarrollo empresarial.',
      'Bajo un estilo minimalista y sin protagonismos individuales, su trabajo se refleja en cada proyecto que lleva la firma Bright Alliance | BA Chile.'
    ],
    mission: 'Acompañar a empresas nacionales e internacionales con asesoría jurídica, integrando Derecho, Estrategia y Empresa para construir estructuras sólidas, decisiones eficaces y modelos de negocio sostenibles, impulsando el crecimiento y la consolidación de las organizaciones que confían en nosotros.',
    vision: 'Consolidar a Bright Alliance | BA Chile como una firma de referencia en asesoría jurídico-estratégica, reconocida por integrar el Derecho con la Estrategia y la gestión Empresarial para generar soluciones que trascienden lo legal, fortalecen la gestión corporativa y promueven un desarrollo empresarial sostenible, innovador, tanto en el plano nacional como internacional.',
    goldenCircle: [
      {
        title: 'Por qué',
        subtitle: 'Propósito',
        text: 'Creemos que el Derecho, bien aplicado, es una herramienta de transformación. Cada decisión jurídica debe contribuir a construir empresas más sólidas, sostenibles y visionarias, capaces de adaptarse y trascender en entornos dinámicos y competitivos.'
      },
      {
        title: 'Cómo',
        subtitle: 'Método',
        text: 'Integramos Derecho, Estrategia y Empresa en un modelo de asesoría interdisciplinario, flexible y cercano, diseñado para alinearse con la realidad de cada cliente. Trabajamos bajo tres modalidades —caso a caso, por proyecto y departamento jurídico externo— para ofrecer soluciones personalizadas que combinan técnica jurídica, gestión corporativa y visión estratégica.'
      },
      {
        title: 'Qué',
        subtitle: 'Propuesta concreta',
        text: 'Prestamos asesoría legal estratégica a empresas, inversionistas y grupos empresariales a través de tres áreas de negocio: Derecho de la Empresa, Ingeniería y Derecho, y Comercio y Negocios Internacionales.'
      }
    ],
    values: ['Compromiso', 'Excelencia', 'Liderazgo', 'Innovación', 'Adaptabilidad', 'Integridad'],
    valueDetails: [
      {
        title: 'Compromiso',
        text: 'Nos involucramos activamente en los objetivos de cada cliente, construyendo relaciones basadas en la confianza, la transparencia y la responsabilidad compartida.'
      },
      {
        title: 'Excelencia',
        text: 'Buscamos la perfección en cada detalle, entregando asesoría jurídica rigurosa, oportuna y de la más alta calidad profesional.'
      },
      {
        title: 'Liderazgo',
        text: 'Ejercemos un liderazgo proactivo y ético, anticipando desafíos, orientando decisiones estratégicas y transformando riesgos en oportunidades de crecimiento.'
      },
      {
        title: 'Innovación',
        text: 'Incorporamos pensamiento creativo, herramientas tecnológicas y modelos de gestión modernos para ofrecer soluciones jurídicas eficientes y adaptadas a la realidad empresarial actual.'
      },
      {
        title: 'Adaptabilidad',
        text: 'Ajustamos nuestro trabajo a la naturaleza y escala de cada organización, adaptándonos a sus cambios, ritmo y entorno competitivo, sin perder rigor ni visión estratégica.'
      },
      {
        title: 'Integridad',
        text: 'Actuamos con rectitud, coherencia y respeto por los principios que sustentan la práctica jurídica. La integridad es el eje que conecta nuestra labor técnica con la confianza de nuestros clientes y la sostenibilidad de sus proyectos.'
      }
    ],
    founder: {
      name: 'José Francisco Mazzei Alliende',
      role: 'Abogado – MBA – LLM en Derecho de los Negocios. Socio Fundador | Bright Alliance | BA Chile',
      paragraphs: [
        'En Bright Alliance, José Francisco Mazzei Alliende lidera con una visión que trasciende la práctica jurídica tradicional, integrando estrategia, innovación y pensamiento empresarial en el ámbito del Derecho de los Negocios, tanto en el contexto nacional como internacional.',
        'Su sólida experiencia en asesoría corporativa, estructuración de grupos empresariales y diseño estratégico de negocios, junto con su formación de posgrado (MBA y LLM en Derecho de los Negocios), le permite identificar oportunidades, anticipar riesgos y generar soluciones que vinculan lo jurídico con lo económico y lo organizacional.',
        'Su compromiso con la excelencia profesional se refleja no solo en su práctica, sino también en su labor docente universitaria, donde comparte su enfoque interdisciplinario con futuras generaciones de abogados y emprendedores.'
      ]
    }
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
    icon: 'corporate',
    summary: 'Asesoría jurídica estratégica para la gestión, estructura y crecimiento empresarial.',
    intro: 'En Bright Alliance BA Chile entendemos el Derecho de la Empresa como un soporte jurídico integral que permite a las organizaciones operar con solidez, eficiencia y visión de futuro.',
    heroImage: '/assets/services/corporate-law.webp',
    body: [
      'No se trata solo de cumplir la ley, sino de alinear las decisiones legales con la estrategia corporativa y el desarrollo sostenible del negocio.',
      'El Derecho de la Empresa en Bright Alliance se estructura sobre múltiples áreas de práctica —Derecho Corporativo, Derecho Laboral, Derecho Tributario, Contratos Civiles y Comerciales, Propiedad Intelectual, Libre Competencia, Compliance, Derecho del Consumidor, Derecho Penal Económico, entre otras—, las cuales se adaptan a las necesidades específicas de cada cliente.'
    ],
    models: ['Asesoría Caso a Caso', 'Asesoría por Proyecto', 'Departamento jurídico externo'],
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
        items: ['Asesoría Caso a Caso: intervención puntual en materias jurídicas específicas, tales como contratos, consultas, litigios o informes legales, entregando soluciones precisas y ágiles.', 'Asesoría por Proyecto: acompañamiento integral en procesos con objetivos definidos, como reestructuraciones societarias, expansiones, fusiones y adquisiciones, implementación de programas de cumplimiento, auditorías legales o proyectos internacionales.', 'Departamento jurídico externo: servicio permanente que integra al equipo como unidad legal funcional dentro de la empresa, brindando apoyo continuo y actuando como aliado estratégico en gestión, prevención y toma de decisiones.']
      },
      {
        title: 'Áreas de práctica',
        text: 'La asesoría cubre materias jurídicas que sostienen la operación, estructura y crecimiento empresarial.',
        items: ['Asesoría jurídico-corporativa, diseño estratégico de negocios y grupos empresariales, fusiones y adquisiciones.', 'Derecho laboral empresarial, contratos civiles y comerciales, negociaciones complejas, litigación y defensa corporativa.', 'Compliance corporativo, derecho tributario, derecho penal empresarial, licitaciones y UTP, propiedad intelectual, consumidor, libre competencia, reorganización y continuidad.']
      },
      {
        title: 'Riesgo, continuidad y gobierno',
        text: 'La práctica conecta decisiones jurídicas con continuidad operacional, reputación, patrimonio y calidad de gobierno corporativo.',
        items: ['Programas integrales de cumplimiento normativo, incluyendo Ley N° 20.393, Ley N° 21.595, Ley N° 21.459 y Ley N° 21.719.', 'Relación con organismos públicos, licitaciones, UTP, consorcios y litigación administrativa.', 'Planificación del retiro, reorganización, procedimientos concursales y protección de continuidad empresarial.']
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
    icon: 'engineering',
    summary: 'Soluciones jurídico-estratégicas para empresas y proyectos complejos.',
    intro: 'En Bright Alliance contamos con un área especializada en Ingeniería y Derecho, enfocada en empresas que desarrollan proyectos de alta complejidad técnica, contractual y patrimonial.',
    heroImage: '/assets/services/engineering-law.webp',
    body: [
      'Integramos visión legal, comprensión operativa y enfoque preventivo para proteger la posición contractual, acompañar decisiones críticas y resguardar el patrimonio empresarial, mediante soporte permanente, gestión estratégica y estructuras de protección.',
      'En proyectos de cierta complejidad, el contrato no es solo un documento legal, sino una herramienta estratégica de gestión, control de riesgos, protección patrimonial y resguardo del resultado económico del negocio.'
    ],
    models: ['Departamento jurídico externo permanente', 'Asesoría por proyecto', 'Intervención en etapas críticas', 'Diagnóstico estratégico de contratos en ejecución'],
    pillars: [
      {
        title: 'Departamento jurídico externo',
        text: 'Servicio para empresas que requieren soporte legal continuo, especializado y alineado con su operación real, sin necesidad de internalizar una estructura jurídica completa.'
      },
      {
        title: 'Ciclo de vida completo',
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
        items: ['Revisión estratégica de bases, ofertas, condiciones comerciales y riesgos previos a la adjudicación.', 'Apoyo en licitaciones públicas y privadas.', 'Definición de estrategia de negociación contractual e identificación temprana de riesgos críticos en plazo, alcance, pagos, penalidades, garantías y responsabilidades.'],
        result: 'Contratos más sólidos, mejor posición negociadora y menor exposición durante la ejecución.'
      },
      {
        title: 'Ejecución y administración contractual',
        text: 'Una vez iniciado el proyecto, el foco pasa a administrar estratégicamente derechos, obligaciones, hitos, cambios y evidencia.',
        items: ['Diseño del Plan Estratégico de Gestión Contractual del Proyecto.', 'Protocolos de gestión de cambios, variaciones, administración documental y resguardo de evidencia contractual.', 'Gobernanza contractual, trazabilidad de decisiones, monitoreo de cumplimiento y alertas tempranas de riesgo.'],
        result: 'El contrato pasa de factor pasivo de riesgo a herramienta de control, dirección y defensa.'
      },
      {
        title: 'Riesgos, claims y contratos en curso',
        text: 'En proyectos complejos, muchos conflictos relevantes nacen de acumulaciones progresivas de brechas, omisiones, cambios mal administrados o registros deficientes.',
        items: ['Identificación y priorización de riesgos contractuales críticos y estrategias de mitigación.', 'Diagnóstico y recuperación de contratos en curso con señales de desorden, pérdida de control o baja trazabilidad.', 'Estructuración técnica y jurídica de claims, controversias, negociación o defensa.'],
        result: 'Mayor recuperación económica, reducción del costo de controversias y recuperación de control.'
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
    icon: 'international',
    summary: 'Asesoría jurídica y estratégica para conectar empresas, mercados y oportunidades.',
    intro: 'El comercio internacional requiere estructuras jurídicas sólidas, visión estratégica y conocimiento de las normas que regulan las operaciones entre distintos países.',
    heroImage: '/assets/services/international-trade.webp',
    body: [
      'En Bright Alliance | BA Chile, acompañamos a empresas chilenas y extranjeras en sus procesos de expansión, representación o inversión, integrando Derecho, Estrategia y Empresa para facilitar decisiones seguras, sostenibles y alineadas con los objetivos de negocio.',
      'Nuestra práctica combina una sólida base jurídica local con alianzas profesionales en Europa (Italia), América (Perú, México y Estados Unidos) y Oceanía (Australia), lo que permite ofrecer soluciones integradas en proyectos transfronterizos, tanto en su fase de estructuración como en su ejecución contractual y tributaria.'
    ],
    models: ['Asesoría Caso a Caso', 'Asesoría por Proyecto', 'Departamento jurídico externo'],
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
        items: ['Inversión extranjera, repatriación de capitales y mecanismos de protección de inversiones.', 'Fusiones, adquisiciones, joint ventures internacionales y coordinación multinacional de procesos.', 'Holdings, subholdings, SPV, planificación tributaria internacional y cumplimiento regulatorio entre jurisdicciones.']
      },
      {
        title: 'Comercio, representación y controversias',
        text: 'Acompañamos relaciones comerciales internacionales desde contrato hasta resolución de controversias.',
        items: ['Negociación y redacción de contratos de compraventa, agencia, distribución, franquicia, licencias, suministro y servicios internacionales.', 'Propiedad intelectual, transferencia tecnológica, compliance, regulaciones internacionales, anticorrupción, lavado de activos, aduanas y control de exportaciones.', 'Arbitrajes, mediaciones o litigios transfronterizos con estudios aliados en Europa, América y Oceanía.']
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

export const externalNews: ArticlePage[] = [
  {
    lang: 'es',
    kind: 'external',
    slug: 'cmf-modifica-normativa-sistema-finanzas-abiertas',
    title: 'CMF modifica normativa del Sistema de Finanzas Abiertas',
    summary: 'La CMF publicó una modificación a la NCG N°514 e incorporó especificaciones técnicas para la implementación del Sistema de Finanzas Abiertas.',
    image: '/assets/news/fintech-payment.jpg',
    category: 'Regulación financiera',
    publishedAt: '01/06/2026',
    readTime: 'Fuente externa',
    keyPoints: ['Ley Fintec', 'Sistema de Finanzas Abiertas', 'Anexo técnico', 'Gradualidad regulatoria'],
    source: {
      label: 'Comisión para el Mercado Financiero',
      href: 'https://www.cmfchile.cl/portal/prensa/625/w4-article-110881.html'
    },
    externalUrl: 'https://www.cmfchile.cl/portal/prensa/625/w4-article-110881.html',
    body: ['Ficha de actualidad externa basada en la publicación oficial de la Comisión para el Mercado Financiero.'],
    sections: [{ title: 'Relevancia empresarial', paragraphs: ['La noticia es relevante para entidades financieras, fintechs y empresas que deban planificar desarrollos técnicos, cumplimiento y adaptación operativa frente al calendario regulatorio.'] }]
  },
  {
    lang: 'es',
    kind: 'external',
    slug: 'cmf-consulta-envio-informacion-intermediarios-valores',
    title: 'CMF consulta normas de envío de información para intermediarios',
    summary: 'La propuesta define forma, periodicidad y medios para remitir información de fiscalización aplicable a intermediarios de valores y corredores de bolsa de productos.',
    image: '/assets/news/fintech-payment.jpg',
    category: 'Mercado de valores',
    publishedAt: '01/06/2026',
    readTime: 'Fuente externa',
    keyPoints: ['Fiscalización', 'Intermediarios de valores', 'Corredores de bolsa de productos', 'Información regulatoria'],
    source: {
      label: 'Comisión para el Mercado Financiero',
      href: 'https://www.cmfchile.cl/portal/prensa/625/w4-article-110871.html'
    },
    externalUrl: 'https://www.cmfchile.cl/portal/prensa/625/w4-article-110871.html',
    body: ['Ficha de actualidad externa basada en la publicación oficial de la Comisión para el Mercado Financiero.'],
    sections: [{ title: 'Relevancia empresarial', paragraphs: ['La noticia puede impactar planificación de cumplimiento, gobierno de datos regulatorios y procesos internos de reporte en entidades sujetas a supervisión.'] }]
  },
  {
    lang: 'es',
    kind: 'external',
    slug: 'corte-suprema-confirma-relacion-laboral-honorarios',
    title: 'Corte Suprema confirma fallo sobre relación laboral en contratación a honorarios',
    summary: 'El Poder Judicial informó una decisión que declaró la existencia de relación laboral y ordenó prestaciones asociadas.',
    image: '/assets/news/data-privacy-server.jpg',
    category: 'Laboral',
    publishedAt: '01/06/2026',
    readTime: 'Fuente externa',
    keyPoints: ['Primacía de la realidad', 'Relación laboral', 'Honorarios', 'Corte Suprema'],
    source: {
      label: 'Poder Judicial',
      href: 'https://www.pjud.cl/prensa-y-comunicaciones/noticias-del-poder-judicial/145575'
    },
    externalUrl: 'https://www.pjud.cl/prensa-y-comunicaciones/noticias-del-poder-judicial/145575',
    body: ['Ficha de actualidad externa basada en la comunicación del Poder Judicial.'],
    sections: [{ title: 'Relevancia empresarial', paragraphs: ['La noticia es relevante para revisar contratos, formas de prestación de servicios y criterios de subordinación o dependencia en organizaciones públicas y privadas.'] }]
  },
  {
    lang: 'es',
    kind: 'external',
    slug: 'ley-21719-proteccion-datos-personales-chile',
    title: 'Ley N° 21.719 regula la protección y tratamiento de datos personales',
    summary: 'La Biblioteca del Congreso Nacional mantiene disponible el texto de la Ley N° 21.719, que regula el tratamiento de datos personales y crea nueva institucionalidad de protección.',
    image: '/assets/news/data-privacy-server.jpg',
    category: 'Datos personales',
    publishedAt: 'Vigencia 01/12/2026',
    readTime: 'Fuente externa',
    keyPoints: ['Ley N° 21.719', 'Datos personales', 'Agencia de Protección de Datos', 'Cumplimiento empresarial'],
    source: {
      label: 'Biblioteca del Congreso Nacional de Chile',
      href: 'https://www.bcn.cl/leychile/navegar?idNorma=1209272'
    },
    externalUrl: 'https://www.bcn.cl/leychile/navegar?idNorma=1209272',
    body: ['Ficha de actualidad externa basada en el texto oficial disponible en Ley Chile de la Biblioteca del Congreso Nacional.'],
    sections: [{ title: 'Relevancia empresarial', paragraphs: ['La noticia es relevante para empresas que tratan datos de clientes, trabajadores, proveedores o usuarios, y que deben preparar procesos, contratos y controles antes de la plena exigibilidad del nuevo marco.'] }]
  }
];

export const internalPosts: ArticlePage[] = [
  {
    lang: 'es',
    kind: 'internal',
    slug: 'estructura-blog-institucional-ba-chile',
    title: 'Blog institucional BA Chile',
    summary: 'Espacio preparado para novedades internas, hitos de la oficina, publicaciones institucionales y noticias propias.',
    image: '/assets/office/office-boardroom-wide.webp',
    category: 'Institucional',
    publishedAt: 'Pendiente',
    readTime: 'Estructura preparada',
    keyPoints: ['Título', 'Slug', 'Categoría', 'Resumen', 'Contenido', 'Foto principal', 'Fuente externa opcional'],
    body: ['Esta entrada funciona como estructura editorial inicial para el blog interno de BA Chile.', 'Cuando exista una noticia real, se debe reemplazar por contenido institucional aprobado: apertura de sucursal, nuevo corresponsal, hito de la oficina o publicación propia.'],
    sections: [{ title: 'Campos mínimos', paragraphs: ['Cada publicación interna debe definir título, slug, categoría, resumen, contenido, foto principal y fuente o URL externa opcional.'] }]
  }
];

export const articles: ArticlePage[] = [
  ...externalNews,
  ...internalPosts,
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
  '/estructura-blog-institucional-ba-chile/',
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
