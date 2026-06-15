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

const logoUrl =
  "https://bachile.cl/wp-content/uploads/2025/11/logo-BaChile-00001.png";
const officeImageUrl =
  "https://bachile.cl/wp-content/uploads/2025/12/bachile-oficina-.jpg";

const services = [
  "Derecho de la empresa",
  "Gobierno corporativo",
  "Contratos y negociación",
  "Ingeniería y derecho",
];

const pillars = [
  {
    number: "01",
    title: "Diagnóstico con contexto",
    text: "Levantamos el escenario jurídico, contractual y operacional antes de recomendar un curso de acción.",
  },
  {
    number: "02",
    title: "Criterio estratégico",
    text: "Conectamos la decisión legal con riesgos, gobierno corporativo, continuidad operacional y objetivos comerciales.",
  },
  {
    number: "03",
    title: "Ejecución aterrizada",
    text: "Entregamos soluciones comprensibles, aplicables y útiles para equipos directivos, legales y de negocio.",
  },
];

const outcomes = [
  "Mejor base para negociar, estructurar y resolver asuntos relevantes.",
  "Anticipación de contingencias legales antes de que escalen.",
  "Acompañamiento jurídico sobrio para decisiones empresariales críticas.",
];

export default function BaGeneralEmail() {
  return (
    <Html lang="es" dir="ltr">
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <style>{responsiveCss}</style>
      </Head>

      <Preview>
        Asesoría jurídica estratégica para decisiones empresariales relevantes.
      </Preview>

      <Body style={styles.body}>
        <Container className="container" style={styles.container}>
          <Section style={styles.topBar}>
            <Row>
              <Column className="mobile-center" style={styles.logoColumn}>
                <Img
                  src={logoUrl}
                  width="118"
                  alt="Bright Alliance | BA Chile"
                  style={styles.logo}
                />
              </Column>
              <Column className="mobile-center mobile-top-space" style={styles.headerMetaColumn}>
                <Text style={styles.headerMeta}>Derecho · Estrategia · Empresa</Text>
              </Column>
            </Row>
          </Section>

          <Section style={styles.goldRule} />

          <Section style={styles.hero}>
            <Row>
              <Column className="mobile-block" style={styles.heroTextColumn}>
                <Text style={styles.eyebrow}>BRIGHT ALLIANCE | BA CHILE</Text>
                <Heading as="h1" style={styles.heroTitle}>
                  Asesoría legal para decisiones empresariales críticas
                </Heading>
                <Text style={styles.heroLead}>
                  Integramos derecho, estrategia y comprensión del negocio para
                  ayudar a empresas a ordenar riesgos, negociar mejor y ejecutar
                  decisiones con mayor claridad.
                </Text>

                <Section style={styles.heroActions}>
                  <Link href={contactPageUrl} style={styles.primaryButton}>
                    Solicitar una reunión
                  </Link>
                </Section>
              </Column>

              <Column className="mobile-block mobile-image-wrap" style={styles.heroImageColumn}>
                <Img
                  src={officeImageUrl}
                  width="228"
                  height="288"
                  alt="Oficinas de Bright Alliance en Santiago"
                  style={styles.heroImage}
                />
              </Column>
            </Row>
          </Section>

          <Section style={styles.problemSection}>
            <Text style={styles.sectionEyebrow}>EL PUNTO DE FONDO</Text>
            <Heading as="h2" style={styles.sectionTitle}>
              El riesgo legal rara vez vive separado de la operación
            </Heading>
            <Text style={styles.sectionText}>
              Contratos, proyectos complejos, gobierno corporativo y expansión
              internacional requieren una lectura que conecte lo jurídico con la
              realidad comercial de la empresa. Cuando esa conexión falla, las
              decisiones llegan tarde, pierden contexto o trasladan riesgos a
              otras áreas.
            </Text>
          </Section>

          <Section style={styles.servicesBand}>
            <Text style={styles.bandLabel}>Ámbitos de trabajo</Text>
            <Row>
              {services.map((service) => (
                <Column className="service-pill" key={service} style={styles.serviceColumn}>
                  <Text style={styles.servicePill}>{service}</Text>
                </Column>
              ))}
            </Row>
          </Section>

          <Section style={styles.approachSection}>
            <Text style={styles.sectionEyebrowDark}>NUESTRA FORMA DE TRABAJO</Text>
            <Heading as="h2" style={styles.sectionTitleDark}>
              Criterio jurídico con utilidad ejecutiva
            </Heading>

            {pillars.map((item) => (
              <Section key={item.title} style={styles.pillarCard}>
                <Row>
                  <Column style={styles.pillarNumberColumn}>
                    <Text style={styles.pillarNumber}>{item.number}</Text>
                  </Column>
                  <Column style={styles.pillarTextColumn}>
                    <Heading as="h3" style={styles.pillarTitle}>
                      {item.title}
                    </Heading>
                    <Text style={styles.pillarText}>{item.text}</Text>
                  </Column>
                </Row>
              </Section>
            ))}
          </Section>

          <Section style={styles.outcomeSection}>
            <Row>
              <Column className="mobile-block" style={styles.outcomeIntroColumn}>
                <Text style={styles.sectionEyebrow}>RESULTADO ESPERADO</Text>
                <Heading as="h2" style={styles.sectionTitle}>
                  Más claridad para decidir, negociar y avanzar
                </Heading>
              </Column>
              <Column className="mobile-block" style={styles.outcomeListColumn}>
                {outcomes.map((outcome) => (
                  <Text key={outcome} style={styles.outcomeItem}>
                    <span style={styles.check}>—</span> {outcome}
                  </Text>
                ))}
              </Column>
            </Row>
          </Section>

          <Section style={styles.ctaSection}>
            <Text style={styles.ctaEyebrow}>BRIGHT ALLIANCE | BA CHILE</Text>
            <Heading as="h2" style={styles.ctaTitle}>
              Conversemos sobre su próximo desafío jurídico
            </Heading>
            <Text style={styles.ctaText}>
              Podemos acompañar necesidades permanentes, asuntos específicos o
              decisiones estratégicas que requieran una mirada jurídica y
              empresarial integrada.
            </Text>
            <Link href={contactPageUrl} style={styles.secondaryButton}>
              Agendar conversación
            </Link>
          </Section>

          <Section style={styles.footer}>
            <Row>
              <Column className="mobile-block mobile-center" style={styles.footerLogoColumn}>
                <Img
                  src={logoUrl}
                  width="86"
                  alt="Bright Alliance | BA Chile"
                  style={styles.footerLogo}
                />
              </Column>
              <Column className="mobile-block mobile-center" style={styles.footerInfoColumn}>
                <Text style={styles.footerTitle}>Bright Alliance | BA Chile</Text>
                <Text style={styles.footerText}>
                  Apoquindo N° 3076, oficina N° 702<br />
                  Barrio El Golf, Las Condes, Santiago, Chile
                </Text>
                <Text style={styles.footerText}>
                  <Link href={contactHref} style={styles.footerLink}>{contactEmail}</Link>
                  <br />
                  <Link href={phoneHref} style={styles.footerLink}>{phoneDisplay}</Link>
                  <br />
                  <Link href={siteUrl} style={styles.footerLink}>www.bachile.cl</Link>
                </Text>
              </Column>
            </Row>

            <Hr style={styles.footerRule} />
            <Text style={styles.legalText}>
              Este correo contiene información general sobre los servicios de
              Bright Alliance y no constituye asesoría legal para un caso
              específico.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const responsiveCss = `
  @media only screen and (max-width: 620px) {
    .container { width: 100% !important; }
    .mobile-block { display: block !important; width: 100% !important; }
    .mobile-center { text-align: center !important; }
    .mobile-top-space { padding-top: 12px !important; }
    .mobile-image-wrap { padding-top: 26px !important; text-align: center !important; }
    .service-pill { display: block !important; width: 100% !important; padding: 0 0 8px 0 !important; }
    h1 { font-size: 34px !important; line-height: 39px !important; }
    h2 { font-size: 25px !important; line-height: 31px !important; }
  }
`;

const colors = {
  navy: "#061a2f",
  navy2: "#0b2744",
  gold: "#b99a5b",
  goldSoft: "#eadfcb",
  ink: "#172033",
  muted: "#667085",
  paper: "#f5f1ea",
  white: "#ffffff",
  line: "#e7dccb",
};

const fontFamily =
  "Arial, 'Helvetica Neue', Helvetica, sans-serif";

const styles: Record<string, CSSProperties> = {
  body: {
    margin: 0,
    padding: "28px 0",
    backgroundColor: colors.paper,
    fontFamily,
  },
  container: {
    width: "640px",
    margin: "0 auto",
    backgroundColor: colors.white,
    borderRadius: "0",
    overflow: "hidden",
    border: `1px solid ${colors.line}`,
  },
  topBar: {
    padding: "22px 36px 18px",
    backgroundColor: colors.white,
  },
  logoColumn: {
    width: "50%",
    verticalAlign: "middle",
  },
  logo: {
    display: "block",
    height: "auto",
  },
  headerMetaColumn: {
    width: "50%",
    textAlign: "right",
    verticalAlign: "middle",
  },
  headerMeta: {
    margin: 0,
    color: colors.navy,
    fontSize: "12px",
    letterSpacing: "1.6px",
    textTransform: "uppercase",
  },
  goldRule: {
    height: "4px",
    backgroundColor: colors.gold,
  },
  hero: {
    padding: "44px 38px 42px",
    backgroundColor: colors.navy,
  },
  heroTextColumn: {
    width: "58%",
    paddingRight: "24px",
    verticalAlign: "middle",
  },
  eyebrow: {
    margin: "0 0 14px",
    color: colors.goldSoft,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: 700,
  },
  heroTitle: {
    margin: "0 0 18px",
    color: colors.white,
    fontSize: "39px",
    lineHeight: "44px",
    fontWeight: 700,
    letterSpacing: "-0.8px",
  },
  heroLead: {
    margin: "0",
    color: "#d8e1ea",
    fontSize: "16px",
    lineHeight: "25px",
  },
  heroActions: {
    paddingTop: "28px",
  },
  primaryButton: {
    display: "inline-block",
    padding: "14px 22px",
    backgroundColor: colors.gold,
    color: colors.navy,
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 700,
    borderRadius: "2px",
  },
  heroImageColumn: {
    width: "42%",
    verticalAlign: "middle",
    textAlign: "right",
  },
  heroImage: {
    display: "block",
    width: "228px",
    maxWidth: "100%",
    height: "288px",
    objectFit: "cover",
    border: `1px solid ${colors.gold}`,
  },
  problemSection: {
    padding: "42px 46px 34px",
    backgroundColor: colors.white,
  },
  sectionEyebrow: {
    margin: "0 0 10px",
    color: colors.gold,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "1.8px",
    textTransform: "uppercase",
    fontWeight: 700,
  },
  sectionTitle: {
    margin: "0 0 15px",
    color: colors.ink,
    fontSize: "28px",
    lineHeight: "34px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
  },
  sectionText: {
    margin: 0,
    color: colors.muted,
    fontSize: "15px",
    lineHeight: "24px",
  },
  servicesBand: {
    padding: "24px 34px 18px",
    backgroundColor: "#fbf8f2",
    borderTop: `1px solid ${colors.line}`,
    borderBottom: `1px solid ${colors.line}`,
  },
  bandLabel: {
    margin: "0 0 14px",
    color: colors.navy,
    fontSize: "12px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    fontWeight: 700,
  },
  serviceColumn: {
    width: "25%",
    paddingRight: "8px",
  },
  servicePill: {
    margin: 0,
    padding: "11px 10px",
    color: colors.navy,
    backgroundColor: colors.white,
    border: `1px solid ${colors.line}`,
    fontSize: "12px",
    lineHeight: "16px",
    textAlign: "center",
  },
  approachSection: {
    padding: "42px 38px 34px",
    backgroundColor: colors.navy2,
  },
  sectionEyebrowDark: {
    margin: "0 0 10px",
    color: colors.goldSoft,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "1.8px",
    textTransform: "uppercase",
    fontWeight: 700,
  },
  sectionTitleDark: {
    margin: "0 0 24px",
    color: colors.white,
    fontSize: "28px",
    lineHeight: "34px",
    fontWeight: 700,
    letterSpacing: "-0.3px",
  },
  pillarCard: {
    marginBottom: "12px",
    padding: "18px 18px 16px",
    backgroundColor: "#102f4e",
    border: "1px solid rgba(234, 223, 203, 0.25)",
  },
  pillarNumberColumn: {
    width: "54px",
    verticalAlign: "top",
  },
  pillarNumber: {
    margin: 0,
    color: colors.goldSoft,
    fontSize: "13px",
    lineHeight: "20px",
    fontWeight: 700,
    letterSpacing: "1px",
  },
  pillarTextColumn: {
    verticalAlign: "top",
  },
  pillarTitle: {
    margin: "0 0 6px",
    color: colors.white,
    fontSize: "18px",
    lineHeight: "23px",
    fontWeight: 700,
  },
  pillarText: {
    margin: 0,
    color: "#d8e1ea",
    fontSize: "14px",
    lineHeight: "22px",
  },
  outcomeSection: {
    padding: "40px 42px",
    backgroundColor: colors.white,
  },
  outcomeIntroColumn: {
    width: "44%",
    paddingRight: "22px",
    verticalAlign: "top",
  },
  outcomeListColumn: {
    width: "56%",
    verticalAlign: "top",
  },
  outcomeItem: {
    margin: "0 0 13px",
    color: colors.ink,
    fontSize: "15px",
    lineHeight: "23px",
  },
  check: {
    color: colors.gold,
    fontWeight: 700,
  },
  ctaSection: {
    padding: "42px 48px 46px",
    backgroundColor: "#fbf8f2",
    textAlign: "center",
    borderTop: `1px solid ${colors.line}`,
  },
  ctaEyebrow: {
    margin: "0 0 10px",
    color: colors.gold,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "1.8px",
    textTransform: "uppercase",
    fontWeight: 700,
  },
  ctaTitle: {
    margin: "0 0 14px",
    color: colors.ink,
    fontSize: "28px",
    lineHeight: "34px",
    fontWeight: 700,
  },
  ctaText: {
    margin: "0 auto 24px",
    color: colors.muted,
    fontSize: "15px",
    lineHeight: "24px",
    maxWidth: "460px",
  },
  secondaryButton: {
    display: "inline-block",
    padding: "14px 22px",
    backgroundColor: colors.navy,
    color: colors.white,
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 700,
    borderRadius: "2px",
  },
  footer: {
    padding: "30px 38px 28px",
    backgroundColor: colors.navy,
  },
  footerLogoColumn: {
    width: "28%",
    verticalAlign: "top",
  },
  footerLogo: {
    display: "block",
    height: "auto",
  },
  footerInfoColumn: {
    width: "72%",
    verticalAlign: "top",
  },
  footerTitle: {
    margin: "0 0 8px",
    color: colors.white,
    fontSize: "15px",
    fontWeight: 700,
  },
  footerText: {
    margin: "0 0 12px",
    color: "#cfd9e2",
    fontSize: "13px",
    lineHeight: "20px",
  },
  footerLink: {
    color: "#cfd9e2",
    textDecoration: "none",
  },
  footerRule: {
    margin: "16px 0 14px",
    borderColor: "rgba(234, 223, 203, 0.22)",
  },
  legalText: {
    margin: 0,
    color: "#98a7b5",
    fontSize: "11px",
    lineHeight: "17px",
  },
};
