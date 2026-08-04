export type Language = 'es' | 'en';

export type TitlePresentation = 'natural' | 'uppercase';

export type ServiceArea =
  | string
  | {
      title: string;
      text: string;
      items?: string[];
      titlePresentation?: TitlePresentation;
    };

export type ServiceSubsection = {
  title: string;
  text: string;
  titlePresentation?: TitlePresentation;
};

export type ServicePillar = {
  title: string;
  text: string;
  titlePresentation?: TitlePresentation;
};

export type ServicePage = {
  lang: Language;
  slug: string;
  title: string;
  navLabel: string;
  icon?: string;
  summary: string;
  intro: string;
  body: string[];
  areas: ServiceArea[];
  models?: string[];
  heroImage?: string;
  supportImage?: string;
  pillars?: ServicePillar[];
  pillarTitleMinLines?: 1 | 2 | 3 | 4;
  sections?: Array<{
    title: string;
    text: string;
    href?: string;
    paragraphs?: string[];
    items?: string[];
    subsectionsLabel?: string;
    subsections?: ServiceSubsection[];
    result?: string;
  }>;
  cta: string;
  ctaText?: string;
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
  agendaHref: 'https://calendar.app.google/PN9tqKa5apW7GGNGA'
};

export const nav = {
  es: [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios/' },
    { label: 'Nosotros', href: '/nosotros/' },
    { label: 'Noticias', href: '/noticias/' },
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
    approach: 'Aportamos soluciones legales de alto nivel diseñadas para fortalecer el gobierno corporativo, mitigar riesgos, diseñar y mejorar los modelos de negocio de interés y apoyar el crecimiento sostenible de nuestros clientes en Chile y en el extranjero.',
    approachFollowup: 'Nuestro enfoque combina experiencia legal, visión de negocio e inteligencia organizacional, para que cada decisión empresarial sea sólida, eficiente y alineada con los objetivos estratégicos de la compañía.',
    servicesHeading: 'Áreas de especialidad',
    servicesSubheading: 'Asesoría empresarial organizada en frentes claros, con foco en gestión, proyectos y expansión.',
    founderHeading: 'Palabras del Socio Fundador',
    founderQuote: 'Para asesorar adecuadamente a una organización empresarial, esta debe comprenderse como un sistema integrado, compuesto por unidades que interactúan de manera sinérgica e interdependiente. En este contexto, una disfunción en cualquiera de sus componentes impacta inevitablemente a los demás, afectando el desempeño del sistema en su conjunto.',
    founderText: 'Una asesoría legal verdaderamente efectiva requiere, por lo tanto, comprender esta lógica sistémica y la capacidad de acompañar estratégicamente a la organización desde su interior, en conexión directa con sus operaciones y procesos de toma de decisiones.'
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
    intro: '',
    heroImage: '/assets/office/office-private-room.webp',
    supportImage: '/assets/office/office-boardroom-wide.webp',
    body: [
      'En Bright Alliance BA Chile entendemos el Derecho de la Empresa como un soporte jurídico integral que permite a las organizaciones operar con solidez, eficiencia y visión de futuro.',
      'No se trata solo de cumplir la ley, sino de alinear las decisiones legales con la estrategia corporativa y el desarrollo sostenible del negocio.',
      'Este servicio se estructura sobre múltiples áreas de práctica —Derecho Corporativo, Derecho Laboral, Derecho Tributario, Contratos Civiles y Comerciales, Propiedad Intelectual, Libre Competencia, Compliance, Derecho del Consumidor, Derecho Penal Económico, entre otras—, las cuales se adaptan a las necesidades específicas de cada cliente.'
    ],
    models: ['Asesoría Caso a Caso', 'Asesoría por Proyecto', 'Departamento jurídico externo'],
    pillars: [
      {
        title: 'Asesoría Caso a Caso',
        text: 'Intervención puntual en materias jurídicas específicas, tales como contratos, consultas, litigios o informes legales, entregando soluciones precisas y ágiles.'
      },
      {
        title: 'Asesoría por Proyecto',
        text: 'Acompañamiento integral en procesos con objetivos definidos, como reestructuraciones societarias, expansiones, fusiones y adquisiciones, implementación de programas de cumplimiento, auditorías legales o proyectos internacionales.'
      },
      {
        title: 'Departamento jurídico externo',
        text: 'Servicio permanente que integra a nuestro equipo como una unidad legal funcional dentro de la empresa, brindando apoyo continuo en todas las áreas de su entorno jurídico, y actuando como un aliado estratégico en la gestión, prevención y toma de decisiones, aportando eficiencia, ahorro, continuidad y valor al negocio.'
      }
    ],
    areas: [
      {
        title: 'Asesoría jurídico-corporativa',
        text: 'Asesoramos integralmente a empresas en todas las etapas de su vida societaria, desde su constitución hasta su reorganización o eventual disolución, incluyendo su funcionamiento legal en el día a día, con foco en cumplimiento, eficiencia y resguardo patrimonial.',
        items: ['Constitución, transformación, división, modificación y mantención de sociedades.', 'Redacción de estatutos, reformas y aumentos o disminuciones de capital.', 'Pactos de accionistas y acuerdos de socios.', 'Contratos de suscripción o cesión de acciones y participaciones.', 'Diseño de estructuras estratégicas de gobierno corporativo.', 'Asesoría permanente en administración, juntas de accionistas, directorios y operaciones habituales de la sociedad.']
      },
      {
        title: 'Diseño estratégico de negocios y grupos empresariales',
        text: 'Consultoría jurídica para diseño de modelos de negocio y creación/optimización de estructuras de grupo: holdings y subholdings, filiales y SPV, acuerdos entre relacionadas, protocolos de gobierno, matrices de control y reporte, y alineamiento jurídico-tributario-operativo para el crecimiento sostenible.'
      },
      {
        title: 'Fusiones y Adquisiciones (M&A)',
        text: 'Estructuración, due diligence legal, negociación y ejecución de transacciones (SPA/APA, JV, reorganizaciones); coordinación regulatoria y plan de integración postadquisición (PMI).'
      },
      {
        title: 'Derecho laboral empresarial',
        text: 'Acompañamos a empresas en la gestión integral de sus relaciones laborales y en la administración estratégica de sus equipos de trabajo, combinando asesoría jurídica, cumplimiento normativo y apoyo en la toma de decisiones clave sobre el recurso humano. Nuestro enfoque es preventivo, orientado a reducir contingencias y fortalecer la estabilidad organizacional.',
        items: ['Contratación, redacción de anexos y pactos especiales de condiciones laborales.', 'Aplicación de medidas disciplinarias y desvinculaciones conforme a ley.', 'Diagnóstico y cumplimiento en materias laborales, previsionales y de seguridad social.', 'Diseño e implementación de políticas internas, reglamentos y protocolos laborales.', 'Asesoría continua en relaciones laborales estratégicas, clima laboral y manejo de equipos.', 'Representación en fiscalizaciones, procedimientos administrativos y litigios judiciales.', 'Acompañamiento en negociaciones colectivas y relaciones sindicales.']
      },
      {
        title: 'Contratos civiles y comerciales',
        text: 'Revisión, redacción y negociación de contratos; elaboración de contratos a la medida; estructuración contractual conforme a las particularidades del negocio.'
      },
      {
        title: 'Negociaciones complejas',
        text: 'Asistencia legal estratégica en negociaciones de alto impacto, nacionales e internacionales, integrando análisis jurídico, planificación comercial y gestión de riesgos.'
      },
      {
        title: 'Litigación y defensa corporativa',
        text: 'Representación ante tribunales ordinarios y especiales, organismos públicos y árbitros; defensa en controversias civiles, comerciales, laborales o administrativas.'
      },
      {
        title: 'Compliance corporativo',
        text: 'Diseño e implementación de programas integrales de cumplimiento normativo ajustados a las principales exigencias legales vigentes. Los programas contemplan la elaboración e implementación de políticas internas, canales de denuncia, mapas de riesgo, auditorías periódicas, capacitaciones, monitoreo y actualización normativa continua, asegurando una cultura organizacional de cumplimiento y ética empresarial.',
        items: ['Ley N° 20.393 sobre responsabilidad penal de las personas jurídicas.', 'Ley N° 21.595 sobre delitos económicos y medioambientales.', 'Ley N° 21.459 sobre delitos informáticos.', 'Ley N° 21.719 sobre protección de datos personales.', 'Normativas anticorrupción, laborales, de libre competencia y de gobierno corporativo.']
      },
      {
        title: 'Derecho tributario',
        text: 'Planificación y cumplimiento tributario, estructuración fiscal eficiente y defensa ante fiscalizaciones. Incluye asesoría en planificación del retiro y planificación hereditaria, orientada a resguardar el patrimonio y optimizar la carga fiscal en procesos de sucesión y reorganización empresarial.'
      },
      {
        title: 'Derecho penal empresarial',
        text: 'Prevención y litigación penal en materias corporativas (delitos económicos, ambientales, laborales o tributarios).'
      },
      {
        title: 'Derecho Público, Licitaciones y Litigación Administrativa',
        text: 'Asesoramos a empresas en su relación con el Estado, tanto en procesos de contratación pública como en el ejercicio de sus derechos ante actos de la Administración, organismos fiscalizadores y tribunales especializados. Nuestro enfoque combina estrategia jurídica, conocimiento regulatorio y experiencia práctica en litigios administrativos y de contratación pública.',
        items: ['Asesoría integral en licitaciones públicas y privadas (bases, propuestas, impugnaciones).', 'Constitución, regulación y operación de Uniones Temporales de Proveedores (UTP), consorcios y asociaciones transitorias.', 'Representación en procedimientos ante la Contraloría General de la República y otros entes públicos.', 'Litigación ante el Tribunal de Contratación Pública y recursos contencioso-administrativos.', 'Defensa y representación en fiscalizaciones de organismos públicos.', 'Diagnóstico de riesgos normativos y cumplimiento en relaciones con el Estado.']
      },
      {
        title: 'Propiedad intelectual e identidad comercial',
        text: 'Registro, renovación, cesión y licenciamiento de marcas, patentes, derechos de autor y dominios. Reconocimiento, establecimiento y protección integral de la identidad comercial y de los activos intangibles.'
      },
      {
        title: 'Derecho del consumidor',
        text: 'Cumplimiento de la Ley N° 19.496, revisión de contratos y comunicaciones comerciales, implementación de programas de cumplimiento y defensa ante fiscalizaciones (SERNAC) o reclamos, consultoría y asesoría estratégica.'
      },
      {
        title: 'Derecho de la libre competencia',
        text: 'Cumplimiento preventivo del DL N° 211, asesoría estratégica en denuncias y procesos ante la FNE, y desarrollo de programas internos de cumplimiento y cultura competitiva.'
      },
      {
        title: 'Planificación del retiro y organización futura',
        text: 'Acompañamiento jurídico y estratégico en procesos de sucesión y continuidad empresarial, resguardando la gobernanza, el legado del/los fundador/es y la proyección de la organización.'
      },
      {
        title: 'Reorganización y Procedimientos Concursales',
        text: 'Asesoramos a empresas en situaciones de crisis financiera, estructurando estrategias de reorganización, protección patrimonial o liquidación ordenada, bajo los marcos legales vigentes. Acompañamos todo el proceso con una visión preventiva, de continuidad operativa o cierre eficiente.',
        items: ['Evaluación preliminar de viabilidad y riesgos (due diligence legal y financiera).', 'Asesoría en procesos de reorganización judicial o liquidación voluntaria (Ley N° 20.720).', 'Presentación de solicitudes ante la Superintendencia de Insolvencia y Reemprendimiento (SIIR).', 'Representación de acreedores en juntas, verificaciones de crédito y oposiciones.', 'Asesoría a socios, directores o representantes legales con exposición personal.', 'Coordinación con liquidadores, veedores y tribunales durante todas las etapas.', 'Protección de activos esenciales, continuidad de giros o preparación para cierre.']
      }
    ],
    cta: 'Solicitar asesoría en Derecho de la Empresa'
  },
  {
    lang: 'es',
    slug: 'ingenieria-y-derecho',
    title: '/ Ingeniería y Derecho',
    navLabel: 'Ingeniería y Derecho',
    icon: 'engineering',
    summary: 'Asesoría jurídico-estratégica especializada para empresas de ingeniería, construcción, minería, energía e infraestructura — combinando conocimiento legal, visión de negocio y comprensión técnica.',
    intro: '',
    heroImage: '/assets/services/engineering-law.webp',
    supportImage: '/assets/office/office-meeting-lounge.webp',
    body: [],
    pillarTitleMinLines: 3,
    pillars: [
      {
        title: 'Ciclo de vida completo de proyectos públicos o privados',
        text: 'Acompañamiento desde etapa preliminar hasta cierre, con gestión estratégica del contrato, evidencia, hitos y riesgos.'
      },
      {
        title: 'Departamento jurídico externo',
        text: 'Servicio para empresas que requieren soporte legal continuo, especializado y alineado con su operación real, sin necesidad de internalizar una estructura jurídica completa.'
      },
      {
        title: 'Protección patrimonial',
        text: 'Ordenamiento de exposición patrimonial de socios, directores, gerentes y representantes legales frente a contingencias.'
      }
    ],
    sections: [
      {
        title: '1. Ciclo de vida completo de proyectos público o privados',
        text: 'Acompañamiento jurídico y técnico integral durante todas las etapas del proyecto. Estructuración, licitación, génesis del contrato, ejecución y el cierre contractual. Identificamos y gestionamos riesgos, apoyamos negociaciones críticas y prevenimos, y aportamos a la resolución de controversias.',
        subsectionsLabel: 'ÁMBITOS DE ASESORÍA',
        subsections: [
          {
            title: 'Procesos de licitación',
            text: 'Revisión de bases, identificación de riesgos y preparación de consultas, ofertas y antecedentes legales.'
          },
          {
            title: 'Revisión y negociación de contratos',
            text: 'Análisis y negociación de cláusulas para equilibrar riesgos, obligaciones, garantías y responsabilidades.'
          },
          {
            title: 'Gestión estratégica de riesgos',
            text: 'Identificación, evaluación y mitigación temprana de contingencias técnicas, legales y comerciales.'
          },
          {
            title: 'Soporte técnico-legal en ejecución',
            text: 'Asesoría permanente frente a cambios, instrucciones, interferencias, atrasos y decisiones críticas del proyecto.'
          },
          {
            title: 'Capacitación, control operativo y respaldo documental',
            text: 'Formación y acompañamiento de los equipos para controlar y documentar adecuadamente la ejecución, gestionar las comunicaciones y el relacionamiento con la contraparte, y asegurar un cierre contractual que permita el reconocimiento y recuperación de los costos y gastos incurridos en beneficio del mandante, evitando impactos financieros para la empresa.'
          },
          {
            title: 'Cumplimiento contractual',
            text: 'Seguimiento de obligaciones, hitos, plazos y procedimientos para resguardar los derechos de la empresa.'
          },
          {
            title: 'Ingeniería forense',
            text: 'Análisis técnico y documental de las causas e impactos asociados a atrasos, sobrecostos e incumplimientos.'
          },
          {
            title: 'Reclamos, incumplimientos y multas',
            text: 'Preparación, fundamentación y negociación de reclamos, descargos y respuestas contractuales.'
          },
          {
            title: 'Litigación y resolución de disputas',
            text: 'Representación en negociaciones, mediaciones, arbitrajes y procedimientos judiciales.'
          },
          {
            title: 'Cierre contractual',
            text: 'Verificación de obligaciones pendientes, recepción de obras, liquidación de contratos y liberación de garantías.'
          }
        ]
      },
      {
        title: '2. Departamento jurídico externo',
        text: 'Ofrecemos un servicio de Departamento Jurídico Externo que actúa como un verdadero socio estratégico para su organización empresarial. Este pilar proporciona soporte legal continuo, asegurando que todas las operaciones y estrategias empresariales estén alineadas con la legislación vigente y optimizadas para prevenir riesgos legales.',
        href: '/derecho-de-la-empresa/',
        items: ['Asesoría Legal Continua: Soporte integral en áreas de interés, tales como: gobiernos corporativos, contratos comerciales, cumplimiento normativo, derecho laboral, propiedad intelectual, y representación en litigios, entre otros (Remítase e intégrese con el área jurídica corporativa).', 'Soluciones Flexibles: Disponible como un plan anual para un soporte constante, o servicios personalizados por proyecto o caso específico, ajustándonos a las necesidades puntuales de la empresa.']
      },
      {
        title: '3. Protección patrimonial',
        text: 'Diagnóstico y diseño de estructuras jurídicas preventivas destinadas a resguardar el patrimonio personal, familiar y empresarial de socios, directores y representantes legales. Revisamos la organización societaria, titularidad de los activos, garantías, contratos y mecanismos de administración, procurando una adecuada separación patrimonial, la reducción lícita de riesgos y la continuidad del patrimonio frente a deudas, contingencias contractuales, laborales o societarias.'
      }
    ],
    areas: [],
    cta: 'Conversemos sobre su próximo proyecto'
  },
  {
    lang: 'es',
    slug: 'comercio-y-negocios-internacionales',
    title: '/ Comercio y Negocios Internacionales',
    navLabel: 'Comercio y Negocios Internacionales',
    icon: 'international',
    summary: 'Asesoría jurídica y estratégica para conectar empresas, mercados y oportunidades.',
    intro: '',
    heroImage: '/assets/services/international-trade.webp',
    supportImage: '/assets/office/office-lounge-wide.webp',
    body: [
      'El comercio internacional requiere estructuras jurídicas sólidas, visión estratégica y conocimiento de las normas que regulan las operaciones entre distintos países.',
      'En Bright Alliance | BA Chile, acompañamos a empresas chilenas y extranjeras en sus procesos de expansión, representación o inversión, integrando Derecho, Estrategia y Empresa para facilitar decisiones seguras, sostenibles y alineadas con los objetivos de negocio.',
      'Nuestra práctica combina una sólida base jurídica local con alianzas profesionales en Europa (Italia), América (Perú, México y Estados Unidos) y Oceanía (Australia), lo que permite ofrecer soluciones integradas en proyectos transfronterizos, tanto en su fase de estructuración como en su ejecución contractual y tributaria.'
    ],
    areas: [
      {
        title: 'Constitución y representación de empresas extranjeras en Chile',
        text: 'Asistencia en la instalación de agencias, filiales, sucursales o joint ventures; obtención de RUT, designación de representantes legales y cumplimiento normativo integral.'
      },
      {
        title: 'Inversión extranjera y repatriación de capitales',
        text: 'Asesoría en ingreso y salida de inversiones, convenios de doble tributación, planificación fiscal internacional y mecanismos de protección de inversiones.'
      },
      {
        title: 'Fusiones, adquisiciones y joint ventures internacionales',
        text: 'Estructuración de transacciones internacionales, due diligence, redacción de contratos de asociación o transferencia tecnológica y coordinación multinacional de procesos.'
      },
      {
        title: 'Contratos internacionales de comercio',
        text: 'Negociación y redacción de contratos de compraventa, agencia, distribución, franquicia, licencias, suministro y prestación de servicios con componentes internacionales.'
      },
      {
        title: 'Agenciamiento y representación comercial',
        text: 'Asesoría en la estructuración jurídica de relaciones de agencia, distribución, intermediación o representación entre empresas nacionales y extranjeras; diseño de contratos con equilibrio comercial y protección de derechos.'
      },
      {
        title: 'Arquitectura societaria y tributaria internacional',
        text: 'Diseño de estructuras corporativas y fiscales eficientes, incluyendo holdings, subholdings y vehículos de inversión (SPV); coordinación de planificación tributaria internacional y cumplimiento regulatorio entre jurisdicciones.'
      },
      {
        title: 'Propiedad intelectual y transferencia tecnológica',
        text: 'Protección, licenciamiento y registro de marcas y patentes en distintas jurisdicciones; acuerdos internacionales de transferencia de tecnología o know-how.'
      },
      {
        title: 'Compliance y regulaciones internacionales',
        text: 'Implementación de políticas anticorrupción, prevención de lavado de activos, cumplimiento aduanero y control de exportaciones.'
      },
      {
        title: 'Resolución de controversias internacionales',
        text: 'Representación y coordinación en arbitrajes, mediaciones o litigios transfronterizos; cooperación con estudios aliados en Europa, América y Oceanía.'
      }
    ],
    cta: 'Evaluar acompañamiento en proceso de expansión internacional',
    ctaText: ''
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
    image: '/assets/website/ley-fintec.png',
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
    // Foto de dominio público: Corte Suprema de Justicia de Chile, Palacio de los Tribunales. Fuente: Wikimedia Commons, File:CorteSupremaChile.JPG.
    image: '/assets/news/corte-suprema-chile.jpg',
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
    image: '/assets/website/ley-datos-personales.png',
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
  '/noticias/',
  '/blog-oficina/',
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
