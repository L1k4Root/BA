import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import type { CSSProperties } from "react";

const siteUrl = "https://bachile.cl";
const contactPageUrl = `${siteUrl}/contacto/`;
const contactEmail = "contacto@bachile.cl";
const contactHref = `mailto:${contactEmail}`;
const phoneDisplay = "+56 9 3100 7417";
const phoneHref = "tel:+56931007417";

const logoUrl = "https://bachile.cl/wp-content/uploads/2025/11/logo-BaChile-00001.png";
const officeImageUrl =
  "https://bachile.cl/wp-content/uploads/2025/12/bachile-oficina-.jpg";

const colors = {
  navy: "#12334f",
  navyDark: "#08283f",
  gold: "#c9a45d",
  goldSoft: "#d8b15e",
  white: "#ffffff",
  soft: "#f7f4ee",
  ink: "#12334f",
  muted: "#566676",
  line: "#e7ddc9",
};

const pillars = [
  {
    number: "01",
    title: "Departamento Jurídico Externo",
    text: "Soporte legal continuo, especializado y alineado con la operación real de la empresa, sin necesidad de internalizar una estructura jurídica completa.",
  },
  {
    number: "02",
    title: "Ciclo de vida completo de proyectos",
    text: "Acompañamiento desde la etapa preliminar hasta el cierre, entendiendo el contrato como herramienta de gestión, control de riesgos y protección económica.",
  },
  {
    number: "03",
    title: "Protección patrimonial",
    text: "Resguardo de socios, directores, gerentes y representantes legales frente a contingencias derivadas de la operación, crecimiento o proyectos de alto riesgo.",
  },
];

const serviceModalities = [
  "Departamento Jurídico Externo permanente",
  "Asesoría por proyecto",
  "Intervención en etapas críticas o controversias específicas",
  "Diagnóstico estratégico de contratos en ejecución",
  "Diseño de estructuras de protección patrimonial",
];

export default function BaMailingIngenieriaDerecho() {
  return (
    <Html lang="es" dir="ltr">
      <Head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
        <style>{responsiveCss}</style>
      </Head>
      <Preview>Ingeniería y Derecho para empresas y proyectos complejos.</Preview>

      <Body style={styles.body}>
        <Container className="email-container" style={styles.container}>
          <Section style={styles.header}>
            <Img
              src={logoUrl}
              width="92"
              alt="Bright Alliance | BA Chile"
              style={styles.headerLogo}
            />
          </Section>

          <Section style={styles.hero}>
            <Row>
              <Column className="mobile-block mobile-padding" style={styles.heroCopy}>
                <Text style={styles.eyebrow}>INGENIERÍA Y DERECHO | BA CHILE</Text>
                <Heading as="h1" style={styles.heroTitle}>
                  Visión legal.
                  <br />
                  Comprensión operativa.
                  <br />
                  Enfoque preventivo.
                </Heading>
                <Section style={styles.goldRule} />
                <Text style={styles.heroLead}>
                  En Bright Alliance contamos con un área especializada en Ingeniería
                  y Derecho, enfocada en empresas que desarrollan proyectos de alta
                  complejidad técnica, contractual y patrimonial.
                </Text>
                <Link href={contactPageUrl} style={styles.primaryButton}>
                  Solicitar asesoría
                </Link>
              </Column>

              <Column className="mobile-block" style={styles.heroImageColumn}>
                <Img
                  className="hero-image"
                  src={officeImageUrl}
                  width="262"
                  height="326"
                  alt="Oficinas de Bright Alliance en Santiago"
                  style={styles.heroImage}
                />
              </Column>
            </Row>
          </Section>

          <Section style={styles.positioningSection}>
            <Text style={styles.sectionEyebrow}>INGENIERÍA Y DERECHO</Text>
            <Heading as="h2" style={styles.sectionTitleDark}>
              Soluciones jurídico-estratégicas para empresas y proyectos complejos
            </Heading>
            <Section style={styles.highlightPanel}>
              <Text style={styles.highlightText}>
                En Bright Alliance contamos con un área especializada en Ingeniería
                y Derecho, enfocada en empresas que desarrollan proyectos de alta
                complejidad técnica, contractual y patrimonial.
              </Text>
              <Text style={styles.highlightTextLast}>
                Integramos visión legal, comprensión operativa y enfoque
                preventivo para proteger la posición contractual, acompañar
                decisiones críticas y resguardar el patrimonio empresarial.
              </Text>
            </Section>
          </Section>

          <Section style={styles.navySection}>
            <Text style={styles.sectionEyebrowGold}>SOLUCIÓN</Text>
            <Heading as="h2" style={styles.sectionTitleLight}>
              Nuestros pilares de Ingeniería y Derecho
            </Heading>
            <Row>
              {pillars.map((item) => (
                <Column className="mobile-block pillar-column" key={item.title} style={styles.pillarColumn}>
                  <Text style={styles.pillarNumber}>{item.number}</Text>
                  <Heading as="h3" style={styles.pillarTitle}>
                    {item.title}
                  </Heading>
                  <Text style={styles.pillarText}>{item.text}</Text>
                </Column>
              ))}
            </Row>
          </Section>

          <Section style={styles.modalitiesSection}>
            <Text style={styles.sectionEyebrowGold}>MODALIDADES DE SERVICIO</Text>
            <Heading as="h2" style={styles.sectionTitleLight}>
              Modalidades de servicio
            </Heading>
            <Text style={styles.modalitiesIntro}>
              Ofrecemos esta línea bajo distintas modalidades, según la estructura
              y necesidad de cada cliente:
            </Text>

            <Section style={styles.modalitiesPanel}>
              {serviceModalities.map((item) => (
                <Text key={item} style={styles.modalityItem}>
                  — {item}
                </Text>
              ))}
            </Section>

            <Text style={styles.modalitiesTextStrong}>
              Ingeniería y Derecho es una línea pensada para empresas que no solo
              necesitan asesoría legal, sino una intervención estratégica capaz de
              dialogar con la operación, el contrato, el riesgo y el patrimonio.
            </Text>
            <Text style={styles.modalitiesText}>
              Acompañamos a nuestros clientes para que sus proyectos se desarrollen
              con mayor control, mejor posición negociadora y una estructura jurídica
              más sólida en todas sus etapas.
            </Text>
          </Section>

          <Section style={styles.ctaSection}>
            <Text style={styles.sectionEyebrow}>BRIGHT ALLIANCE</Text>
            <Heading as="h2" style={styles.ctaTitle}>
              Conversemos sobre su próximo desafío jurídico
            </Heading>
            <Text style={styles.ctaText}>
              Nuestro equipo acompaña empresas que requieren soporte legal externo,
              asesoría durante el ciclo completo de sus proyectos y protección
              patrimonial para socios, directores y representantes legales.
            </Text>
            <Link href={contactPageUrl} style={styles.goldButton}>
              Solicitar una reunión
            </Link>
          </Section>

          <Section style={styles.footer}>
            <Row>
              <Column className="mobile-block" style={styles.footerLogoColumn}>
                <Img
                  src={logoUrl}
                  width="70"
                  alt="Bright Alliance | BA Chile"
                  style={styles.footerLogo}
                />
              </Column>
              <Column className="mobile-block footer-contact" style={styles.footerContactColumn}>
                <Text style={styles.footerTitle}>Bright Alliance | BA Chile</Text>
                <Text style={styles.footerText}>
                  <Link href={contactPageUrl} style={styles.footerLink}>
                    Apoquindo N° 3076, oficina N° 702
                  </Link>
                  <br />
                  Barrio El Golf, Las Condes, Santiago, Chile
                </Text>
                <Text style={styles.footerText}>
                  <Link href={contactHref} style={styles.footerLink}>
                    {contactEmail}
                  </Link>
                  <br />
                  <Link href={phoneHref} style={styles.footerLink}>
                    {phoneDisplay}
                  </Link>
                  <br />
                  <Link href={siteUrl} style={styles.footerLink}>
                    www.bachile.cl
                  </Link>
                </Text>
              </Column>
            </Row>
            <Hr style={styles.footerRule} />
            <Text style={styles.legalText}>
              Este correo presenta información general sobre el área de Ingeniería
              y Derecho de Bright Alliance y no constituye asesoría legal para un
              caso específico.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const responsiveCss = `
  @media only screen and (max-width: 600px) {
    .email-container {
      width: 100% !important;
      max-width: 100% !important;
    }
    .mobile-block {
      display: block !important;
      width: 100% !important;
      max-width: 100% !important;
      box-sizing: border-box !important;
    }
    .mobile-padding {
      padding-left: 24px !important;
      padding-right: 24px !important;
    }
    .hero-image {
      width: 100% !important;
      height: auto !important;
      max-height: 300px !important;
    }
    .pillar-column {
      padding: 0 0 24px !important;
    }
    .footer-contact {
      padding-left: 0 !important;
    }
  }
`;

const styles = {
  body: {
    margin: "0",
    padding: "0",
    backgroundColor: "#e9ecef",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  container: {
    width: "600px",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: colors.white,
  },
  header: {
    padding: "22px 30px",
    backgroundColor: colors.navy,
  },
  headerLogo: {
    display: "block",
    width: "92px",
    height: "auto",
  },
  hero: {
    backgroundColor: colors.navyDark,
  },
  heroCopy: {
    width: "338px",
    padding: "34px 28px 36px",
    verticalAlign: "middle",
    backgroundColor: colors.white,
  },
  heroImageColumn: {
    width: "262px",
    verticalAlign: "middle",
    backgroundColor: colors.navyDark,
  },
  heroImage: {
    display: "block",
    width: "262px",
    height: "326px",
    objectFit: "cover",
  },
  eyebrow: {
    margin: "0 0 12px",
    color: colors.gold,
    fontSize: "10px",
    lineHeight: "15px",
    fontWeight: "700",
    letterSpacing: "1.15px",
    textTransform: "uppercase",
  },
  heroTitle: {
    margin: "0 0 0",
    color: colors.ink,
    fontSize: "32px",
    lineHeight: "35px",
    fontWeight: "700",
    letterSpacing: "-0.4px",
  },
  goldRule: {
    width: "88px",
    height: "4px",
    backgroundColor: colors.goldSoft,
    margin: "24px 0 24px",
  },
  heroLead: {
    margin: "0 0 22px",
    color: colors.muted,
    fontSize: "14px",
    lineHeight: "21px",
  },
  primaryButton: {
    display: "inline-block",
    backgroundColor: colors.navy,
    color: colors.white,
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "700",
    textDecoration: "none",
    padding: "13px 22px",
  },
  positioningSection: {
    padding: "38px 32px 40px",
    backgroundColor: colors.white,
  },
  sectionEyebrow: {
    margin: "0 0 9px",
    color: "#7a5824",
    fontSize: "10px",
    lineHeight: "15px",
    fontWeight: "700",
    letterSpacing: "1.3px",
    textTransform: "uppercase",
  },
  sectionEyebrowGold: {
    margin: "0 0 9px",
    color: colors.goldSoft,
    fontSize: "10px",
    lineHeight: "15px",
    fontWeight: "700",
    letterSpacing: "1.3px",
    textTransform: "uppercase",
  },
  sectionTitleDark: {
    margin: "0 0 18px",
    color: colors.ink,
    fontSize: "25px",
    lineHeight: "31px",
    fontWeight: "700",
    letterSpacing: "-0.2px",
  },
  sectionTitleLight: {
    margin: "0 0 24px",
    color: colors.white,
    fontSize: "25px",
    lineHeight: "31px",
    fontWeight: "700",
    letterSpacing: "-0.2px",
  },
  highlightPanel: {
    padding: "22px 24px",
    backgroundColor: "#fbfaf7",
    borderLeft: `4px solid ${colors.gold}`,
  },
  highlightText: {
    margin: "0 0 14px",
    color: colors.ink,
    fontSize: "15px",
    lineHeight: "23px",
    fontWeight: "700",
  },
  highlightTextLast: {
    margin: "0",
    color: colors.ink,
    fontSize: "15px",
    lineHeight: "23px",
    fontWeight: "700",
  },
  navySection: {
    padding: "38px 32px 44px",
    backgroundColor: colors.navy,
  },
  pillarColumn: {
    width: "33.333%",
    padding: "0 11px",
    verticalAlign: "top",
  },
  pillarNumber: {
    margin: "0 0 10px",
    color: colors.goldSoft,
    fontSize: "10px",
    lineHeight: "14px",
    fontWeight: "700",
  },
  pillarTitle: {
    margin: "0 0 10px",
    color: colors.white,
    fontSize: "15px",
    lineHeight: "20px",
    fontWeight: "700",
  },
  pillarText: {
    margin: "0",
    color: "#e5edf4",
    fontSize: "12px",
    lineHeight: "19px",
  },
  modalitiesSection: {
    padding: "38px 32px 42px",
    backgroundColor: colors.navy,
    borderTop: `1px solid rgba(255,255,255,0.35)`,
  },
  modalitiesIntro: {
    margin: "0 0 24px",
    color: "#e5edf4",
    fontSize: "14px",
    lineHeight: "22px",
  },
  modalitiesPanel: {
    padding: "22px 24px",
    backgroundColor: "#1c4a6b",
    borderLeft: `4px solid ${colors.gold}`,
  },
  modalityItem: {
    margin: "0 0 12px",
    color: colors.white,
    fontSize: "15px",
    lineHeight: "21px",
    fontWeight: "700",
  },
  modalitiesTextStrong: {
    margin: "28px 0 0",
    color: colors.white,
    fontSize: "15px",
    lineHeight: "23px",
    fontWeight: "700",
  },
  modalitiesText: {
    margin: "14px 0 0",
    color: "#e5edf4",
    fontSize: "13px",
    lineHeight: "21px",
  },
  ctaSection: {
    padding: "40px 34px 44px",
    backgroundColor: colors.white,
    textAlign: "center",
  },
  ctaTitle: {
    margin: "0 0 14px",
    color: colors.ink,
    fontSize: "25px",
    lineHeight: "31px",
    fontWeight: "700",
  },
  ctaText: {
    maxWidth: "470px",
    margin: "0 auto 24px",
    color: colors.muted,
    fontSize: "13px",
    lineHeight: "21px",
  },
  goldButton: {
    display: "inline-block",
    backgroundColor: colors.gold,
    color: colors.navyDark,
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "700",
    textDecoration: "none",
    padding: "13px 22px",
  },
  footer: {
    padding: "28px 30px 22px",
    backgroundColor: colors.navyDark,
  },
  footerLogoColumn: {
    width: "105px",
    verticalAlign: "top",
  },
  footerLogo: {
    display: "block",
    width: "70px",
    height: "auto",
  },
  footerContactColumn: {
    paddingLeft: "10px",
    verticalAlign: "top",
  },
  footerTitle: {
    margin: "0 0 7px",
    color: colors.white,
    fontSize: "13px",
    lineHeight: "18px",
    fontWeight: "700",
  },
  footerText: {
    margin: "0 0 9px",
    color: "#dce6ed",
    fontSize: "11px",
    lineHeight: "17px",
  },
  footerLink: {
    color: colors.white,
    textDecoration: "underline",
  },
  footerRule: {
    margin: "18px 0 13px",
    borderColor: "#486278",
  },
  legalText: {
    margin: "0",
    color: "#aebdc8",
    fontSize: "9px",
    lineHeight: "14px",
  },
} satisfies Record<string, CSSProperties>;
