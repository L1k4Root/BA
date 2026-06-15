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

export const baFlyerVariants = {
  engineeringAndLaw,
  companyLaw,
} as const;

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

export type { BaFlyerData };
