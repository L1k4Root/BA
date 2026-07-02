import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import type { CSSProperties } from "react";
import { baEmailTokens } from "./ba-email";

const flyer = {
  width: 1120,
  height: 840,
  splitTop: 545,
  splitBottom: 451,
  gold: "#cda757",
  navyDark: "#06243b",
  leftText: "#0c2d49",
  body: "#5a5a5a",
  white: "#f8f8f6",
  sectionBar: "rgba(255,255,255,0.075)",
  paleDot: "#cfd5d9",
  darkDot: "rgba(255,255,255,0.22)",
} as const;

type BaFlyerData = {
  preview: string;
  leftTitle: string[];
  leftLead: string;
  rightNumber: string;
  rightTitle: string[];
  rightLead: string;
  advisoryItems: string[];
};

type BaWhatsappServiceData = {
  preview: string;
  serviceName: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  lead: string;
  items: string[];
  proofLine: string;
};

const engineeringAndLaw: BaFlyerData = {
  preview: "Bright Alliance: soluciones especializadas en ingeniería y derecho.",
  leftTitle: ["SOLUCIONES", "ESPECIALIZADAS", "EN INGENIERÍA", "Y DERECHO"],
  leftLead:
    "Asesoría jurídico-estratégica especializada para empresas de ingeniería, construcción, minería, energía e infraestructura, integrando conocimiento legal, visión de negocio y comprensión técnica.",
  rightNumber: "1.",
  rightTitle: ["CICLO DE VIDA", "COMPLETO DE PROYECTOS"],
  rightLead:
    "Acompañamiento integral desde la etapa preliminar hasta el cierre contractual: estructuración, gestión de riesgos, soporte técnico-legal y resguardo de la posición contractual en proyectos públicos y privados.",
  advisoryItems: [
    "Procesos de licitación",
    "Revisión y negociación de contratos",
    "Gestión estratégica de riesgos",
    "Soporte técnico-legal en ejecución",
    "Cumplimiento contractual",
    "Ingeniería forense",
    "Reclamos, incumplimientos y multas",
    "Litigación y resolución de disputas",
    "Cierre contractual",
  ],
};

const companyLaw: BaFlyerData = {
  preview: "Bright Alliance: soluciones estratégicas en derecho de la empresa.",
  leftTitle: ["SOLUCIONES", "ESTRATÉGICAS", "EN DERECHO", "DE LA EMPRESA"],
  leftLead:
    "Asesoría jurídica estratégica para la gestión, estructura y crecimiento empresarial, con foco en continuidad operativa, prevención de contingencias y alineación legal con los objetivos del negocio.",
  rightNumber: "1.",
  rightTitle: ["SOPORTE JURÍDICO INTEGRAL", "PARA LA EMPRESA"],
  rightLead:
    "Acompañamiento permanente para empresas que requieren respaldo jurídico en su operación diaria, organización societaria, contratos, cumplimiento y toma de decisiones.",
  advisoryItems: [
    "Asesoría jurídico-corporativa",
    "Constitución, modificación y mantención de sociedades",
    "Contratos civiles y comerciales",
    "Materias laborales, regulatorias y de cumplimiento",
    "Diseño estratégico de estructuras societarias",
    "Negociaciones complejas",
    "Litigación y resolución de controversias",
    "Compliance corporativo",
  ],
};

const engineeringAndLawWhatsapp: BaWhatsappServiceData = {
  preview: "Ingeniería y Derecho: servicios especializados para proyectos complejos.",
  serviceName: "Ingeniería y Derecho",
  eyebrow: "BRIGHT ALLIANCE | BA CHILE",
  title: "Visión legal, comprensión operativa y enfoque preventivo.",
  subtitle: "Soluciones jurídico-estratégicas para empresas y proyectos complejos.",
  lead:
    "Área especializada para empresas que desarrollan proyectos de alta complejidad técnica, contractual y patrimonial.",
  items: [
    "Departamento Jurídico Externo permanente",
    "Asesoría por proyecto",
    "Intervención en etapas críticas o controversias",
    "Diagnóstico estratégico de contratos en ejecución",
    "Protección patrimonial de socios y directivos",
  ],
  proofLine: "Mayor control · Mejor posición negociadora · Estructura jurídica sólida",
};

const companyLawWhatsapp: BaWhatsappServiceData = {
  preview:
    "Derecho de la Empresa: soporte jurídico para gestión, estructura y crecimiento empresarial.",
  serviceName: "Derecho de la Empresa",
  eyebrow: "BRIGHT ALLIANCE | BA CHILE",
  title: "Crecer con estructura, seguridad y criterio jurídico.",
  subtitle:
    "Soporte integral para operar con solidez, ordenar riesgos y alinear decisiones legales con la estrategia corporativa.",
  lead:
    "Acompañamiento jurídico flexible para asuntos puntuales, proyectos definidos o departamento jurídico externo.",
  items: [
    "Asesoría jurídico-corporativa",
    "Contratos civiles y comerciales",
    "Compliance corporativo",
    "Laboral, tributario y defensa corporativa",
    "Prevención de contingencias legales y regulatorias",
  ],
  proofLine: "Continuidad · Prevención · Valor jurídico para el negocio",
};

export const baFlyerVariants = {
  engineeringAndLaw,
  companyLaw,
  engineeringAndLawWhatsapp,
  companyLawWhatsapp,
} as const;
export function BaWhatsappServiceImage({ data }: { data: BaWhatsappServiceData }) {
  return (
    <Html lang="es" dir="ltr">
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <style>{baWhatsappCss}</style>
      </Head>
      <Preview>{data.preview}</Preview>
      <Body style={whatsappStyles.body}>
        <Container className="whatsapp-shell" style={whatsappStyles.shell}>
          <div className="wa-artboard" style={whatsappStyles.card}>
            <div style={whatsappStyles.arcLarge} />
            <div style={whatsappStyles.arcSmall} />
            <div style={whatsappStyles.topGlow} />

            <Img
              src="/static/ba-logo.png"
              width="178"
              height="211"
              alt="Bright Alliance"
              style={whatsappStyles.heroLogo}
            />

            <div style={whatsappStyles.heroContent}>
              <Text style={whatsappStyles.eyebrow}>{data.eyebrow}</Text>
              <Text style={whatsappStyles.serviceName}>{data.serviceName}</Text>
              <div style={whatsappStyles.goldRule} />
              <Text style={whatsappStyles.title}>{data.title}</Text>
              <Text style={whatsappStyles.subtitle}>{data.subtitle}</Text>
            </div>

            <div style={whatsappStyles.leadPanel}>
              <div style={whatsappStyles.leadRule} />
              <Text style={whatsappStyles.lead}>{data.lead}</Text>
            </div>

            <div style={whatsappStyles.servicePanel}>
              <Text style={whatsappStyles.sectionTitle}>Servicios clave</Text>
              <WhatsappList items={data.items} />
            </div>

            <div style={whatsappStyles.proofBand}>
              <Text style={whatsappStyles.proofText}>{data.proofLine}</Text>
            </div>

            <div style={whatsappStyles.footer}>
              <Img
                src="/static/ba-logo.png"
                width="116"
                height="137"
                alt="Bright Alliance"
                style={whatsappStyles.footerLogo}
              />
              <div style={whatsappStyles.footerDivider} />
              <div style={whatsappStyles.footerContact}>
                <Text style={whatsappStyles.footerText}>
                  Apoquindo N° 3076, of. 702, Barrio El Golf, Las Condes
                </Text>
                <Text style={whatsappStyles.footerText}>contacto@bachile.cl</Text>
                <Text style={whatsappStyles.footerText}>+56 9 3100 7417</Text>
                <Text style={whatsappStyles.footerWebsite}>www.bachile.cl</Text>
              </div>
              <div style={whatsappStyles.qrWrap}>
                <Img
                  src="/static/qr-code-BA.png"
                  width="132"
                  height="132"
                  alt="Código QR BA Chile"
                  style={whatsappStyles.qr}
                />
                <Text style={whatsappStyles.qrLabel}>ESCANEE AQUÍ</Text>
              </div>
            </div>
          </div>
        </Container>
      </Body>
    </Html>
  );
}

type BaFlyerEmailProps = {
  data: BaFlyerData;
};

export function BaFlyerEmail({ data }: BaFlyerEmailProps) {
  return (
    <Html lang="es" dir="ltr">
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <style>{baFlyerCss}</style>
      </Head>
      <Preview>{data.preview}</Preview>
      <Body style={styles.body}>
        <Container className="flyer-shell" style={styles.shell}>
          <div className="ba-flyer-art" style={styles.artboard}>
            <div style={styles.navyBackdrop} />
            <div style={styles.leftPanel}>
              <Img
                src="/static/logo-BaChile-azul.svg"
                width="238"
                height="282"
                alt="Bright Alliance"
                style={styles.logo}
              />
              <div style={styles.leftTitleBlock}>
                {data.leftTitle.map((line) => (
                  <Text key={line} style={styles.leftTitleLine}>
                    {line}
                  </Text>
                ))}
              </div>
              <div style={styles.leftGoldRule} />
              <Text style={styles.leftLead}>{data.leftLead}</Text>
              <DotGrid
                style={styles.leftDots}
                color={flyer.paleDot}
                opacity={0.8}
              />
            </div>
            <div style={styles.goldSlant} />
            <div style={styles.rightContent}>
              <Text style={styles.rightNumber}>{data.rightNumber}</Text>
              <div style={styles.rightTitleBlock}>
                {data.rightTitle.map((line) => (
                  <Text key={line} style={styles.rightTitleLine}>
                    {line}
                  </Text>
                ))}
              </div>
              <Text style={styles.rightLead}>{data.rightLead}</Text>
              <div style={styles.sectionLabel}>
                <div style={styles.sectionLabelRule} />
                <Text style={styles.sectionLabelText}>ÁMBITOS DE ASESORÍA</Text>
              </div>
              <AdvisoryList items={data.advisoryItems} />
            </div>
            <DotGrid
              style={styles.rightDots}
              color={flyer.darkDot}
              opacity={1}
              rows={5}
              columns={5}
            />
          </div>
        </Container>
      </Body>
    </Html>
  );
}

function DotGrid({
  style,
  color,
  opacity,
  rows = 4,
  columns = 8,
}: {
  style: CSSProperties;
  color: string;
  opacity: number;
  rows?: number;
  columns?: number;
}) {
  return (
    <div style={style} aria-hidden="true">
      {Array.from({ length: rows }).map((_, row) => (
        <div key={row} style={{ height: 17 }}>
          {Array.from({ length: columns }).map((__, column) => (
            <span
              key={`${row}-${column}`}
              style={{
                display: "inline-block",
                width: 7,
                height: 7,
                marginRight: 14,
                borderRadius: 7,
                backgroundColor: color,
                opacity,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function AdvisoryList({ items }: { items: string[] }) {
  return (
    <div style={styles.list}>
      {items.map((item) => (
        <div key={item} style={styles.listRow}>
          <span style={styles.diamond} aria-hidden="true" />
          <Text style={styles.listText}>{item}</Text>
        </div>
      ))}
    </div>
  );
}

function WhatsappList({ items }: { items: string[] }) {
  return (
    <div style={whatsappStyles.list}>
      {items.map((item) => (
        <div key={item} style={whatsappStyles.listRow}>
          <span style={whatsappStyles.checkBox} aria-hidden="true">
            ✓
          </span>
          <Text style={whatsappStyles.listText}>{item}</Text>
        </div>
      ))}
    </div>
  );
}

const baFlyerCss = `
  .flyer-shell {
    width: ${flyer.width}px !important;
    max-width: ${flyer.width}px !important;
  }

  @media only screen and (max-width: ${flyer.width}px) {
    .flyer-shell {
      width: ${flyer.width}px !important;
      max-width: ${flyer.width}px !important;
    }
  }
`;

const baWhatsappCss = `
  html,
  body {
    width: 1080px !important;
    height: 1350px !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
  }

  .whatsapp-shell {
    width: 1080px !important;
    max-width: 1080px !important;
    height: 1350px !important;
  }

  @media only screen and (max-width: 1080px) {
    .whatsapp-shell {
      width: 1080px !important;
      max-width: 1080px !important;
      height: 1350px !important;
    }
  }

  .wa-artboard,
  .wa-artboard * {
    box-sizing: border-box;
  }
`;
const whatsappStyles = {
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: flyer.navyDark,
    fontFamily:
      "Montserrat, Avenir Next, Segoe UI, Arial, Helvetica, sans-serif",
  },
  shell: {
    width: "1080px",
    height: "1350px",
    maxWidth: "1080px",
    margin: "0 auto",
    backgroundColor: flyer.navyDark,
  },
  card: {
    position: "relative",
    width: "1080px",
    height: "1350px",
    overflow: "hidden",
    backgroundColor: flyer.navyDark,
    background:
      "radial-gradient(circle at 50% 12%, rgba(26,74,108,0.78) 0, rgba(6,36,59,0.98) 44%, #04192b 100%)",
    fontFamily:
      "Montserrat, Avenir Next, Segoe UI, Arial, Helvetica, sans-serif",
  },
  arcLarge: {
    position: "absolute",
    top: -164,
    right: -176,
    width: 448,
    height: 448,
    border: `2px solid ${flyer.gold}`,
    borderRadius: 448,
    opacity: 0.88,
  },
  arcSmall: {
    position: "absolute",
    top: -90,
    right: -88,
    width: 292,
    height: 292,
    border: `2px solid ${flyer.gold}`,
    borderRadius: 292,
    opacity: 0.72,
  },
  topGlow: {
    position: "absolute",
    left: 82,
    top: 82,
    width: 900,
    height: 280,
    background:
      "radial-gradient(circle at 50% 0, rgba(255,255,255,0.08) 0, rgba(255,255,255,0) 66%)",
  },
  heroLogo: {
    position: "absolute",
    left: 458,
    top: 28,
    width: 164,
    height: 195,
    objectFit: "contain",
  },
  eyebrow: {
    margin: "0 0 12px",
    color: flyer.gold,
    fontSize: 20,
    lineHeight: "26px",
    fontWeight: 800,
    letterSpacing: 2.2,
    textAlign: "center",
  },
  heroContent: {
    position: "absolute",
    left: 76,
    top: 241,
    width: 928,
    textAlign: "center",
  },
  serviceName: {
    margin: "0",
    color: flyer.white,
    fontFamily: "Georgia, Times New Roman, serif",
    fontSize: 76,
    lineHeight: "82px",
    fontWeight: 400,
    letterSpacing: 0,
    textAlign: "center",
  },
  title: {
    width: 830,
    margin: "0 auto 14px",
    color: flyer.white,
    fontSize: 32,
    lineHeight: "38px",
    fontWeight: 800,
    letterSpacing: 0,
    textAlign: "center",
  },
  goldRule: {
    width: 72,
    height: 4,
    margin: "22px auto 22px",
    backgroundColor: flyer.gold,
  },
  subtitle: {
    width: 840,
    margin: "0 auto",
    color: "rgba(248,248,246,0.92)",
    fontSize: 21,
    lineHeight: "29px",
    fontWeight: 500,
    textAlign: "center",
  },
  leadPanel: {
    position: "absolute",
    left: 76,
    top: 579,
    width: 928,
    padding: "0 0 0 40px",
  },
  leadRule: {
    position: "absolute",
    left: 0,
    top: 4,
    width: 4,
    height: 88,
    backgroundColor: flyer.gold,
  },
  lead: {
    margin: "0",
    color: flyer.white,
    fontFamily: "Georgia, Times New Roman, serif",
    fontSize: 27,
    lineHeight: "38px",
    fontStyle: "italic",
    fontWeight: 400,
  },
  servicePanel: {
    position: "absolute",
    left: 76,
    top: 701,
    width: 928,
    padding: "24px 34px 18px",
    backgroundColor: "rgba(3,19,33,0.28)",
    borderTop: `1px solid rgba(205,167,87,0.42)`,
    borderBottom: `1px solid rgba(205,167,87,0.42)`,
  },
  sectionTitle: {
    margin: "0 0 16px",
    color: flyer.gold,
    fontSize: 19,
    lineHeight: "25px",
    fontWeight: 900,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  list: {
    margin: "0",
  },
  listRow: {
    position: "relative",
    minHeight: 48,
    paddingLeft: 68,
    marginBottom: 8,
  },
  checkBox: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 40,
    height: 40,
    border: `2px solid ${flyer.gold}`,
    borderRadius: 8,
    color: flyer.gold,
    fontSize: 27,
    lineHeight: "36px",
    fontWeight: 900,
    textAlign: "center",
  },
  listText: {
    margin: "0",
    color: flyer.white,
    fontSize: 25,
    lineHeight: "32px",
    fontWeight: 600,
  },
  proofBand: {
    position: "absolute",
    left: 198,
    top: 1102,
    width: 684,
    padding: "0 18px",
    borderTop: `1px solid rgba(205,167,87,0.86)`,
    borderBottom: `1px solid rgba(205,167,87,0.86)`,
  },
  proofText: {
    margin: "9px 0",
    color: flyer.gold,
    fontSize: 14,
    lineHeight: "20px",
    fontWeight: 900,
    letterSpacing: 1.8,
    textAlign: "center",
    textTransform: "uppercase",
  },
  footer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: 1080,
    height: 146,
    padding: "18px 52px 16px",
    backgroundColor: "rgba(2,15,27,0.76)",
    borderTop: `2px solid ${flyer.gold}`,
  },
  footerLogo: {
    position: "absolute",
    left: 70,
    top: 17,
    width: 108,
    height: 128,
    objectFit: "contain",
  },
  footerDivider: {
    position: "absolute",
    left: 221,
    top: 22,
    width: 2,
    height: 102,
    backgroundColor: flyer.gold,
  },
  footerContact: {
    position: "absolute",
    left: 264,
    top: 24,
    width: 526,
  },
  footerText: {
    margin: "0 0 9px",
    color: "rgba(248,248,246,0.94)",
    fontSize: 18,
    lineHeight: "22px",
    fontWeight: 500,
  },
  footerWebsite: {
    margin: "0",
    color: flyer.gold,
    fontSize: 19,
    lineHeight: "23px",
    fontWeight: 900,
  },
  qrWrap: {
    position: "absolute",
    right: 62,
    top: 8,
    width: 132,
    textAlign: "center",
  },
  qr: {
    width: 112,
    height: 112,
    borderRadius: 6,
    backgroundColor: "#ffffff",
    border: "6px solid #ffffff",
  },
  qrLabel: {
    margin: "3px 0 0",
    color: flyer.gold,
    fontSize: 11,
    lineHeight: "14px",
    fontWeight: 900,
    letterSpacing: 2,
    textAlign: "center",
  },
} satisfies Record<string, CSSProperties>;

const styles = {
  body: {
    margin: "0",
    padding: "0",
    backgroundColor: baEmailTokens.color.canvas,
    fontFamily:
      "Montserrat, Avenir Next, Segoe UI, Arial, Helvetica, sans-serif",
  },
  shell: {
    width: `${flyer.width}px`,
    maxWidth: `${flyer.width}px`,
    margin: "0 auto",
    backgroundColor: flyer.white,
  },
  artboard: {
    position: "relative",
    width: `${flyer.width}px`,
    height: `${flyer.height}px`,
    overflow: "hidden",
    backgroundColor: flyer.navyDark,
  },
  navyBackdrop: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 78% 12%, rgba(19,68,101,0.72) 0, rgba(10,45,72,0.82) 34%, #06243b 100%)",
  },
  leftPanel: {
    position: "absolute",
    inset: 0,
    width: `${flyer.splitTop}px`,
    height: `${flyer.height}px`,
    backgroundColor: flyer.white,
    clipPath: `polygon(0 0, ${flyer.splitTop}px 0, ${flyer.splitBottom}px 100%, 0 100%)`,
  },
  logo: {
    position: "absolute",
    left: 46,
    top: 19,
    width: 238,
    height: 282,
    objectFit: "contain",
  },
  leftTitleBlock: {
    position: "absolute",
    left: 64,
    top: 323,
    width: 360,
  },
  leftTitleLine: {
    margin: "0",
    color: flyer.leftText,
    fontSize: 36,
    lineHeight: "44px",
    fontWeight: 900,
    letterSpacing: 1.4,
  },
  leftGoldRule: {
    position: "absolute",
    left: 65,
    top: 515,
    width: 70,
    height: 8,
    backgroundColor: flyer.gold,
  },
  leftLead: {
    position: "absolute",
    left: 65,
    top: 548,
    width: 350,
    margin: "0",
    color: flyer.body,
    fontSize: 21,
    lineHeight: "28px",
    fontWeight: 400,
    letterSpacing: 0.1,
  },
  leftDots: {
    position: "absolute",
    left: 53,
    bottom: 15,
    width: 180,
    height: 78,
  },
  goldSlant: {
    position: "absolute",
    left: 545,
    top: -46,
    width: 10,
    height: 940,
    backgroundColor: flyer.gold,
    transform: "rotate(6.4deg)",
    transformOrigin: "top center",
  },
  rightContent: {
    position: "absolute",
    left: 607,
    top: 62,
    width: 480,
    color: flyer.white,
  },
  rightNumber: {
    margin: "0 0 15px",
    color: flyer.gold,
    fontSize: 55,
    lineHeight: "54px",
    fontWeight: 900,
  },
  rightTitleBlock: {
    margin: "0 0 22px",
  },
  rightTitleLine: {
    margin: "0",
    color: flyer.gold,
    fontSize: 27,
    lineHeight: "34px",
    fontWeight: 900,
    letterSpacing: 0.8,
  },
  rightLead: {
    width: 430,
    margin: "0 0 28px",
    color: flyer.white,
    fontSize: 20,
    lineHeight: "27px",
    fontWeight: 400,
    letterSpacing: 0,
  },
  sectionLabel: {
    position: "relative",
    width: 446,
    height: 43,
    marginBottom: 27,
    backgroundColor: flyer.sectionBar,
  },
  sectionLabelRule: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 5,
    height: 43,
    backgroundColor: flyer.gold,
  },
  sectionLabelText: {
    margin: "0",
    padding: "10px 0 0 26px",
    color: flyer.gold,
    fontSize: 17,
    lineHeight: "22px",
    fontWeight: 900,
    letterSpacing: 1.2,
  },
  list: {
    width: 510,
  },
  listRow: {
    position: "relative",
    minHeight: 36,
    paddingLeft: 28,
  },
  diamond: {
    position: "absolute",
    left: 1,
    top: 7,
    width: 11,
    height: 11,
    backgroundColor: flyer.gold,
    transform: "rotate(45deg)",
    boxShadow: "0 0 4px rgba(255,255,255,0.18)",
  },
  listText: {
    margin: "0",
    color: flyer.white,
    fontSize: 19,
    lineHeight: "25px",
    fontWeight: 400,
    letterSpacing: 0,
  },
  rightDots: {
    position: "absolute",
    right: 40,
    top: 48,
    width: 110,
    height: 95,
  },
} satisfies Record<string, CSSProperties>;

export type { BaFlyerData, BaWhatsappServiceData };
