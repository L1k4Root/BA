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
  translationKey?: string;
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
  translationKey?: string;
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
  addressEn: 'Apoquindo No. 3076, Office No. 702, El Golf District, Las Condes, Santiago, Chile.',
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
    { label: 'Services', href: '/en/services/' },
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
    lead: 'We support companies, investors, and business groups with legal judgment, business vision, and a strategic understanding of their risks and opportunities.',
    approach: 'We provide high-level legal solutions designed to strengthen corporate governance, mitigate risks, design and improve the relevant business models, and support the sustainable growth of our clients in Chile and abroad.',
    approachFollowup: 'Our approach combines legal expertise, business vision, and organizational intelligence so that every business decision is sound, efficient, and aligned with the company\'s strategic objectives.',
    servicesHeading: 'Practice Areas',
    servicesSubheading: 'Business advisory organized around clear fronts: management, projects, and expansion.',
    founderHeading: 'Words from the Founding Partner',
    founderQuote: 'To properly advise a business organization, it must be understood as an integrated system composed of units that interact synergistically and interdependently. In this context, a dysfunction in any of its components inevitably impacts the others, affecting the performance of the system as a whole.',
    founderText: 'Truly effective legal counsel therefore requires understanding this systemic logic and the ability to support the organization strategically from within, in direct connection with its operations and decision-making processes.'
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
    lead: 'Bright Alliance | BA Chile is a strategic law firm that integrates Law, Strategy, and Business to offer high-level legal solutions designed to strengthen corporate management, prevent risks, and support the sustainable development of our clients, both in Chile and abroad.',
    proposal: [
      'Our proposal is based on a deep understanding of business and on the conviction that Law should be a tool to create value, facilitate decisions, and enhance competitiveness.',
      'Through an intelligent alliance between legal knowledge, business vision, and technical expertise, we turn legal complexity into clear, secure, and sustainable strategic decisions.',
      'The team supporting this proposal is made up of high-level professionals—lawyers, accountants, engineers, and specialized consultants—who share the same vision: to practice Law with excellence, strategic focus, and commitment to business development.',
      'With a minimalist style and without individual prominence, their work is reflected in every project undertaken by Bright Alliance | BA Chile.'
    ],
    mission: 'To support national and international companies with legal counsel, integrating Law, Strategy, and Business to build solid structures, effective decisions, and sustainable business models, driving the growth and consolidation of the organizations that place their trust in us.',
    vision: 'To consolidate Bright Alliance | BA Chile as a benchmark firm in legal-strategic advisory, recognized for integrating Law with Strategy and Business management to generate solutions that transcend legal matters, strengthen corporate management, and promote sustainable and innovative business development, both nationally and internationally.',
    values: ['Commitment', 'Excellence', 'Leadership', 'Innovation', 'Adaptability', 'Integrity'],
    valueDetails: [
      {
        title: 'Commitment',
        text: 'We actively engage with each client\'s objectives, building relationships based on trust, transparency, and shared responsibility.'
      },
      {
        title: 'Excellence',
        text: 'We pursue perfection in every detail, providing rigorous, timely legal counsel of the highest professional quality.'
      },
      {
        title: 'Leadership',
        text: 'We exercise proactive and ethical leadership, anticipating challenges, guiding strategic decisions, and transforming risks into growth opportunities.'
      },
      {
        title: 'Innovation',
        text: 'We incorporate creative thinking, technological tools, and modern management models to offer efficient legal solutions adapted to today\'s business reality.'
      },
      {
        title: 'Adaptability',
        text: 'We adapt our work to the nature and scale of each organization, adjusting to its changes, pace, and competitive environment without losing rigor or strategic vision.'
      },
      {
        title: 'Integrity',
        text: 'We act with rectitude, consistency, and respect for the principles that underpin legal practice. Integrity is the axis that connects our technical work with our clients\' trust and the sustainability of their projects.'
      }
    ],
    founder: {
      name: 'José Francisco Mazzei Alliende',
      role: 'Lawyer – MBA – LLM in Business Law. Founding Partner | Bright Alliance | BA Chile',
      paragraphs: [
        'At Bright Alliance, José Francisco Mazzei Alliende leads with a vision that transcends traditional legal practice, integrating strategy, innovation, and business thinking into the field of Business Law, both nationally and internationally.',
        'His solid experience in corporate advisory, business group structuring, and strategic business design, together with his postgraduate education (MBA and LLM in Business Law), enables him to identify opportunities, anticipate risks, and generate solutions that connect legal, economic, and organizational dimensions.',
        'His commitment to professional excellence is reflected not only in his practice, but also in his university teaching, where he shares his interdisciplinary approach with future generations of lawyers and entrepreneurs.'
      ]
    }
  }
};

export const services: ServicePage[] = [
  {
    lang: 'es',
    translationKey: 'service-corporate-business-law',
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
    translationKey: 'service-engineering-and-law',
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
    translationKey: 'service-international-trade-business',
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
    translationKey: 'service-corporate-business-law',
    slug: 'corporate-business-law',
    title: '/ Corporate & Business Law',
    navLabel: 'Corporate & Business Law',
    icon: 'corporate',
    summary: 'Strategic legal counsel for business management, corporate structuring, and growth.',
    intro: '',
    heroImage: '/assets/office/office-private-room.webp',
    supportImage: '/assets/office/office-boardroom-wide.webp',
    body: [
      'At Bright Alliance BA Chile, we understand Corporate and Business Law as comprehensive legal support that enables organizations to operate with strength, efficiency, and a forward-looking vision.',
      'It is not only a matter of complying with the law, but of aligning legal decisions with corporate strategy and the sustainable development of the business.',
      'This service is structured around multiple practice areas—Corporate Law, Labor Law, Tax Law, Civil and Commercial Contracts, Intellectual Property, Competition Law, Compliance, Consumer Law, Corporate Criminal Law, among others—which are adapted to the specific needs of each client.'
    ],
    models: ['Case-by-case advisory', 'Project-based advisory', 'External legal department'],
    pillars: [
      {
        title: 'Case-by-case advisory',
        text: 'Targeted intervention in specific legal matters, such as contracts, consultations, litigation, or legal opinions, providing precise and agile solutions.'
      },
      {
        title: 'Project-based advisory',
        text: 'Comprehensive support in processes with defined objectives, such as corporate restructurings, expansions, mergers and acquisitions, implementation of compliance programs, legal audits, or international projects.'
      },
      {
        title: 'External legal department',
        text: 'An ongoing service that integrates our team as a functional legal unit within the company, providing continuous support in every area of its legal environment and acting as a strategic partner in management, prevention, and decision-making, bringing efficiency, savings, continuity, and value to the business.'
      }
    ],
    areas: [
      {
        title: 'Corporate legal advisory',
        text: 'We provide comprehensive advice to companies throughout every stage of their corporate life, from incorporation to reorganization or eventual dissolution, including their day-to-day legal operation, with a focus on compliance, efficiency, and asset protection.',
        items: ['Incorporation, conversion, division, amendment, and maintenance of companies.', 'Drafting of bylaws, amendments, and capital increases or decreases.', 'Shareholders’ agreements and partners’ agreements.', 'Share or equity interest subscription and transfer agreements.', 'Design of strategic corporate governance structures.', 'Ongoing advice on management, shareholders’ meetings, boards of directors, and the company’s ordinary operations.']
      },
      {
        title: 'Strategic design of businesses and business groups',
        text: 'Legal consulting for business model design and the creation or optimization of group structures: holdings and subholdings, subsidiaries and SPVs, related-party agreements, governance protocols, control and reporting matrices, and legal, tax, and operational alignment for sustainable growth.'
      },
      {
        title: 'Mergers and Acquisitions (M&A)',
        text: 'Structuring, legal due diligence, negotiation, and execution of transactions (SPA/APA, JV, reorganizations); regulatory coordination and post-merger integration planning (PMI).'
      },
      {
        title: 'Business labor law',
        text: 'We support companies in the comprehensive management of their labor relations and the strategic administration of their work teams, combining legal counsel, regulatory compliance, and support for key human resources decisions. Our approach is preventive and aimed at reducing contingencies and strengthening organizational stability.',
        items: ['Hiring, drafting of addenda, and special agreements on employment conditions.', 'Application of disciplinary measures and terminations in accordance with the law.', 'Assessment and compliance in labor, pension, and social security matters.', 'Design and implementation of internal policies, regulations, and labor protocols.', 'Ongoing advice on strategic labor relations, workplace climate, and team management.', 'Representation in inspections, administrative proceedings, and judicial litigation.', 'Support in collective bargaining and union relations.']
      },
      {
        title: 'Civil and commercial contracts',
        text: 'Review, drafting, and negotiation of contracts; preparation of tailored contracts; contractual structuring in accordance with the particular features of the business.'
      },
      {
        title: 'Complex negotiations',
        text: 'Strategic legal assistance in high-impact domestic and international negotiations, integrating legal analysis, commercial planning, and risk management.'
      },
      {
        title: 'Litigation and corporate defense',
        text: 'Representation before ordinary and special courts, public agencies, and arbitrators; defense in civil, commercial, labor, or administrative disputes.'
      },
      {
        title: 'Corporate compliance',
        text: 'Design and implementation of comprehensive regulatory compliance programs tailored to the principal legal requirements in force. The programs include the development and implementation of internal policies, reporting channels, risk maps, periodic audits, training, monitoring, and ongoing regulatory updates, ensuring an organizational culture of compliance and business ethics.',
        items: ['Law No. 20,393 on the criminal liability of legal entities.', 'Law No. 21,595 on economic and environmental crimes.', 'Law No. 21,459 on cybercrime.', 'Law No. 21,719 on personal data protection.', 'Anti-corruption, labor, competition, and corporate governance regulations.']
      },
      {
        title: 'Tax law',
        text: 'Tax planning and compliance, efficient tax structuring, and defense during audits. This includes advice on retirement planning and estate planning, aimed at safeguarding assets and optimizing the tax burden in succession and business reorganization processes.'
      },
      {
        title: 'Corporate criminal law',
        text: 'Criminal prevention and litigation in corporate matters involving economic, environmental, labor, or tax offenses.'
      },
      {
        title: 'Public Law, Procurement, and Administrative Litigation',
        text: 'We advise companies in their dealings with the State, both in public procurement processes and in exercising their rights in relation to acts of the Administration, supervisory agencies, and specialized courts. Our approach combines legal strategy, regulatory knowledge, and practical experience in administrative and public procurement litigation.',
        items: ['Comprehensive advice on public and private procurement processes, including terms, bids, and challenges.', 'Incorporation, regulation, and operation of Temporary Supplier Associations (UTP), consortia, and temporary associations.', 'Representation in proceedings before the Office of the Comptroller General of the Republic and other public bodies.', 'Litigation before the Public Procurement Court and administrative judicial remedies.', 'Defense and representation during inspections by public agencies.', 'Assessment of regulatory risks and compliance in dealings with the State.']
      },
      {
        title: 'Intellectual property and commercial identity',
        text: 'Registration, renewal, assignment, and licensing of trademarks, patents, copyrights, and domain names. Recognition, establishment, and comprehensive protection of commercial identity and intangible assets.'
      },
      {
        title: 'Consumer law',
        text: 'Compliance with Law No. 19,496, review of contracts and commercial communications, implementation of compliance programs, and defense during inspections by SERNAC or claims, together with consulting and strategic advice.'
      },
      {
        title: 'Competition law',
        text: 'Preventive compliance with Decree Law No. 211, strategic advice on complaints and proceedings before the FNE, and development of internal compliance programs and a competitive culture.'
      },
      {
        title: 'Retirement planning and future organization',
        text: 'Legal and strategic support in succession and business continuity processes, safeguarding governance, the legacy of the founder or founders, and the future of the organization.'
      },
      {
        title: 'Reorganization and Insolvency Proceedings',
        text: 'We advise companies facing financial distress, structuring strategies for reorganization, asset protection, or orderly liquidation under the applicable legal frameworks. We support the entire process with a preventive view focused on operational continuity or an efficient closure.',
        items: ['Preliminary assessment of viability and risks through legal and financial due diligence.', 'Advice on judicial reorganization or voluntary liquidation proceedings under Law No. 20,720.', 'Filing of applications before the Superintendency of Insolvency and Re-Entrepreneurship (SIIR).', 'Representation of creditors at meetings, in claim verification, and in objections.', 'Advice to partners, directors, or legal representatives with personal exposure.', 'Coordination with liquidators, overseers, and courts throughout every stage.', 'Protection of essential assets, continuity of business activities, or preparation for closure.']
      }
    ],
    cta: 'Request advice on Corporate and Business Law'
  },
  {
    lang: 'en',
    translationKey: 'service-engineering-and-law',
    slug: 'engineering-and-law',
    title: '/ Engineering and Law',
    navLabel: 'Engineering and Law',
    icon: 'engineering',
    summary: 'Specialized legal-strategic advice for engineering, construction, mining, energy, and infrastructure companies—combining legal knowledge, business vision, and technical understanding.',
    intro: '',
    heroImage: '/assets/services/engineering-law.webp',
    supportImage: '/assets/office/office-meeting-lounge.webp',
    body: [],
    pillarTitleMinLines: 3,
    pillars: [
      {
        title: 'Full life cycle of public or private projects',
        text: 'Support from the preliminary stage through closeout, with strategic management of the contract, evidence, milestones, and risks.'
      },
      {
        title: 'External legal department',
        text: 'A service for companies that require ongoing, specialized legal support aligned with their actual operations, without needing to internalize a complete legal structure.'
      },
      {
        title: 'Asset protection',
        text: 'Organization of the asset exposure of partners, directors, managers, and legal representatives in the face of contingencies.'
      }
    ],
    sections: [
      {
        title: '1. Full life cycle of public or private projects',
        text: 'Comprehensive legal and technical support throughout every stage of the project: structuring, bidding, contract formation, performance, and contractual closeout. We identify and manage risks, support critical negotiations, prevent disputes, and contribute to their resolution.',
        subsectionsLabel: 'AREAS OF ADVISORY',
        subsections: [
          {
            title: 'Tender processes',
            text: 'Review of tender terms, identification of risks, and preparation of questions, bids, and legal documentation.'
          },
          {
            title: 'Contract review and negotiation',
            text: 'Analysis and negotiation of clauses to balance risks, obligations, guarantees, and liabilities.'
          },
          {
            title: 'Strategic risk management',
            text: 'Early identification, assessment, and mitigation of technical, legal, and commercial contingencies.'
          },
          {
            title: 'Technical and legal support during performance',
            text: 'Ongoing advice regarding changes, instructions, interferences, delays, and critical project decisions.'
          },
          {
            title: 'Training, operational control, and documentary support',
            text: 'Training and support for teams to properly control and document performance, manage communications and the relationship with the counterparty, and ensure contractual closeout that enables the recognition and recovery of costs and expenses incurred for the benefit of the principal, preventing financial impacts on the company.'
          },
          {
            title: 'Contractual compliance',
            text: 'Monitoring obligations, milestones, deadlines, and procedures to safeguard the company’s rights.'
          },
          {
            title: 'Forensic engineering',
            text: 'Technical and documentary analysis of the causes and impacts associated with delays, cost overruns, and breaches.'
          },
          {
            title: 'Claims, breaches, and penalties',
            text: 'Preparation, substantiation, and negotiation of claims, defenses, and contractual responses.'
          },
          {
            title: 'Litigation and dispute resolution',
            text: 'Representation in negotiations, mediations, arbitrations, and judicial proceedings.'
          },
          {
            title: 'Contractual closeout',
            text: 'Verification of outstanding obligations, acceptance of works, settlement of contracts, and release of guarantees.'
          }
        ]
      },
      {
        title: '2. External legal department',
        text: 'We offer an External Legal Department service that acts as a true strategic partner for your business organization. This pillar provides ongoing legal support, ensuring that all business operations and strategies are aligned with current legislation and optimized to prevent legal risks.',
        href: '/en/corporate-business-law/',
        items: ['Ongoing Legal Counsel: Comprehensive support in areas of interest such as corporate governance, commercial contracts, regulatory compliance, labor law, intellectual property, and representation in litigation, among others (refer to and integrate with the corporate legal area).', 'Flexible Solutions: Available as an annual plan for continuous support or as customized services for a project or specific case, adapting to the company’s particular needs.']
      },
      {
        title: '3. Asset protection',
        text: 'Assessment and design of preventive legal structures intended to safeguard the personal, family, and business assets of partners, directors, and legal representatives. We review the corporate organization, ownership of assets, guarantees, contracts, and management mechanisms, seeking appropriate asset separation, the lawful reduction of risks, and the continuity of assets in the face of debts or contractual, labor, or corporate contingencies.'
      }
    ],
    areas: [],
    cta: 'Let us discuss your next project'
  },
  {
    lang: 'en',
    translationKey: 'service-international-trade-business',
    slug: 'international-trade-business',
    title: '/ International Trade & Business',
    navLabel: 'International Trade & Business',
    icon: 'international',
    summary: 'Legal and strategic advisory services to connect companies, markets, and opportunities.',
    intro: '',
    heroImage: '/assets/services/international-trade.webp',
    supportImage: '/assets/office/office-lounge-wide.webp',
    body: [
      'International trade requires solid legal structures, strategic vision, and knowledge of the rules governing operations between different countries.',
      'At Bright Alliance | BA Chile, we support Chilean and foreign companies in their expansion, representation, or investment processes, integrating Law, Strategy, and Business to facilitate secure and sustainable decisions aligned with business objectives.',
      'Our practice combines a solid local legal foundation with professional alliances in Europe (Italy), the Americas (Peru, Mexico, and the United States), and Oceania (Australia), enabling us to offer integrated solutions for cross-border projects, both in their structuring phase and in their contractual and tax implementation.'
    ],
    areas: [
      {
        title: 'Incorporation and representation of foreign companies in Chile',
        text: 'Assistance with establishing agencies, subsidiaries, branches, or joint ventures; obtaining a Chilean tax identification number (RUT), appointing legal representatives, and achieving comprehensive regulatory compliance.'
      },
      {
        title: 'Foreign investment and capital repatriation',
        text: 'Advice on inbound and outbound investments, double taxation treaties, international tax planning, and investment protection mechanisms.'
      },
      {
        title: 'International mergers, acquisitions, and joint ventures',
        text: 'Structuring of international transactions, due diligence, drafting of partnership or technology transfer agreements, and multinational coordination of processes.'
      },
      {
        title: 'International trade contracts',
        text: 'Negotiation and drafting of sale, agency, distribution, franchise, licensing, supply, and service agreements with international components.'
      },
      {
        title: 'Commercial agency and representation',
        text: 'Advice on the legal structuring of agency, distribution, intermediation, or representation relationships between domestic and foreign companies; design of contracts with commercial balance and protection of rights.'
      },
      {
        title: 'International corporate and tax architecture',
        text: 'Design of efficient corporate and tax structures, including holdings, subholdings, and investment vehicles (SPVs); coordination of international tax planning and regulatory compliance across jurisdictions.'
      },
      {
        title: 'Intellectual property and technology transfer',
        text: 'Protection, licensing, and registration of trademarks and patents in different jurisdictions; international technology or know-how transfer agreements.'
      },
      {
        title: 'Compliance and international regulations',
        text: 'Implementation of anti-corruption policies, anti-money laundering measures, customs compliance, and export controls.'
      },
      {
        title: 'Resolution of international disputes',
        text: 'Representation and coordination in cross-border arbitration, mediation, or litigation; cooperation with partner firms in Europe, the Americas, and Oceania.'
      }
    ],
    cta: 'Evaluate support for an international expansion process',
    ctaText: ''
  },
];

export const clientLogos = Array.from({ length: 25 }, (_, index) => ({
  src: `/assets/clients/client-${index + 1}.png`,
  alt: `Cliente BA Chile ${index + 1}`
}));

export const externalNews: ArticlePage[] = [
  {
    lang: 'es',
    translationKey: 'news-cmf-open-finance-system-regulations',
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
    translationKey: 'news-cmf-securities-intermediaries-information',
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
    translationKey: 'news-supreme-court-fee-contracting-employment',
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
    translationKey: 'news-law-21719-personal-data',
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
  },
  {
    lang: 'en',
    translationKey: 'news-cmf-open-finance-system-regulations',
    kind: 'external',
    slug: 'cmf-amends-open-finance-system-regulations',
    title: 'CMF Amends Open Finance System Regulations',
    summary: 'The CMF published an amendment to General Rule No. 514 and incorporated technical specifications for the implementation of the Open Finance System.',
    image: '/assets/website/ley-fintec.png',
    category: 'Financial regulation',
    publishedAt: '01/06/2026',
    readTime: 'External source',
    keyPoints: ['Fintech Law', 'Open Finance System', 'Technical annex', 'Regulatory graduality'],
    source: {
      label: 'Financial Market Commission',
      href: 'https://www.cmfchile.cl/portal/prensa/625/w4-article-110881.html'
    },
    externalUrl: 'https://www.cmfchile.cl/portal/prensa/625/w4-article-110881.html',
    body: ['External current-affairs brief based on the official publication of the Financial Market Commission.'],
    sections: [{ title: 'Business relevance', paragraphs: ['The news is relevant to financial institutions, fintech companies, and businesses that must plan technical developments, compliance, and operational adaptation in response to the regulatory timetable.'] }]
  },
  {
    lang: 'en',
    translationKey: 'news-cmf-securities-intermediaries-information',
    kind: 'external',
    slug: 'cmf-consults-information-submission-rules-securities-intermediaries',
    title: 'CMF Consults on Information Submission Rules for Securities Intermediaries',
    summary: 'The proposal defines the form, frequency, and means for submitting supervisory information applicable to securities intermediaries and commodities exchange brokers.',
    image: '/assets/news/fintech-payment.jpg',
    category: 'Securities market',
    publishedAt: '01/06/2026',
    readTime: 'External source',
    keyPoints: ['Supervision', 'Securities intermediaries', 'Commodities exchange brokers', 'Regulatory information'],
    source: {
      label: 'Financial Market Commission',
      href: 'https://www.cmfchile.cl/portal/prensa/625/w4-article-110871.html'
    },
    externalUrl: 'https://www.cmfchile.cl/portal/prensa/625/w4-article-110871.html',
    body: ['External current-affairs brief based on the official publication of the Financial Market Commission.'],
    sections: [{ title: 'Business relevance', paragraphs: ['The news may affect compliance planning, regulatory data governance, and internal reporting processes at supervised entities.'] }]
  },
  {
    lang: 'en',
    translationKey: 'news-supreme-court-fee-contracting-employment',
    kind: 'external',
    slug: 'supreme-court-upholds-employment-relationship-fee-contracting',
    title: 'Supreme Court Upholds Ruling on Employment Relationship in Fee-Based Contracting',
    summary: 'The Judiciary reported a decision that declared the existence of an employment relationship and ordered the associated benefits.',
    // Public-domain photo: Supreme Court of Justice of Chile, Palace of the Courts of Justice. Source: Wikimedia Commons, File:CorteSupremaChile.JPG.
    image: '/assets/news/corte-suprema-chile.jpg',
    category: 'Labor',
    publishedAt: '01/06/2026',
    readTime: 'External source',
    keyPoints: ['Primacy of reality', 'Employment relationship', 'Fee-based contracting', 'Supreme Court'],
    source: {
      label: 'Judiciary',
      href: 'https://www.pjud.cl/prensa-y-comunicaciones/noticias-del-poder-judicial/145575'
    },
    externalUrl: 'https://www.pjud.cl/prensa-y-comunicaciones/noticias-del-poder-judicial/145575',
    body: ['External current-affairs brief based on the Judiciary communication.'],
    sections: [{ title: 'Business relevance', paragraphs: ['The news is relevant to reviewing contracts, service delivery arrangements, and the criteria for subordination or dependence in public and private organizations.'] }]
  },
  {
    lang: 'en',
    translationKey: 'news-law-21719-personal-data',
    kind: 'external',
    slug: 'law-21719-personal-data-protection-processing',
    title: 'Law No. 21,719 Regulates Personal Data Protection and Processing',
    summary: 'The Library of Congress of Chile makes available the text of Law No. 21,719, which regulates personal data processing and creates a new data protection institution.',
    image: '/assets/website/ley-datos-personales.png',
    category: 'Personal data',
    publishedAt: 'Effective 01/12/2026',
    readTime: 'External source',
    keyPoints: ['Law No. 21,719', 'Personal data', 'Data Protection Agency', 'Business compliance'],
    source: {
      label: 'Library of Congress of Chile',
      href: 'https://www.bcn.cl/leychile/navegar?idNorma=1209272'
    },
    externalUrl: 'https://www.bcn.cl/leychile/navegar?idNorma=1209272',
    body: ['External current-affairs brief based on the official text available through Ley Chile from the Library of Congress of Chile.'],
    sections: [{ title: 'Business relevance', paragraphs: ['The news is relevant to companies that process data belonging to clients, workers, suppliers, or users and that must prepare processes, contracts, and controls before the new framework becomes fully enforceable.'] }]
  }
];

export const internalPosts: ArticlePage[] = [];

export const articles: ArticlePage[] = [...externalNews, ...internalPosts];

export const visibleRoutes = [
  '/',
  '/nosotros/',
  '/servicios/',
  '/derecho-de-la-empresa/',
  '/ingenieria-y-derecho/',
  '/comercio-y-negocios-internacionales/',
  '/noticias/',
  '/cmf-modifica-normativa-sistema-finanzas-abiertas/',
  '/cmf-consulta-envio-informacion-intermediarios-valores/',
  '/corte-suprema-confirma-relacion-laboral-honorarios/',
  '/ley-21719-proteccion-datos-personales-chile/',
  '/blog-oficina/',
  '/noticias-blog/',
  '/contacto/',
  '/en/',
  '/en/about-us/',
  '/en/services/',
  '/en/corporate-business-law/',
  '/en/engineering-and-law/',
  '/en/international-trade-business/',
  '/en/news/',
  '/en/cmf-amends-open-finance-system-regulations/',
  '/en/cmf-consults-information-submission-rules-securities-intermediaries/',
  '/en/supreme-court-upholds-employment-relationship-fee-contracting/',
  '/en/law-21719-personal-data-protection-processing/',
  '/en/office-blog/',
  '/en/news-blog/',
  '/en/contact/'
];

export function servicesByLang(lang: Language) {
  return services.filter((service) => service.lang === lang);
}

export function articlesByLang(lang: Language) {
  return articles.filter((article) => article.lang === lang);
}
