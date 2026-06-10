import {
  Body,
  Button,
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

const siteUrl = "https://bachile.cl";
const contactEmail = "contacto@bachile.cl";
const phoneDisplay = "+56 9 3100 7417";
const phoneHref = "+56931007417";
const logoUrl =
  "https://bachile.cl/wp-content/uploads/2025/11/logo-BaChile-00001.png";
const officeImageUrl =
  "https://bachile.cl/wp-content/uploads/2025/12/bachile-oficina-.jpg";

const practices = [
  {
    number: "01",
    title: "Derecho de la Empresa",
    text: "Asesoría jurídica orientada a fortalecer el gobierno corporativo, prevenir riesgos y acompañar decisiones empresariales.",
    href: `${siteUrl}/derecho-de-la-empresa/`,
  },
  {
    number: "02",
    title: "Ingeniería y Derecho",
    text: "Experiencia legal y técnica para contratos, proyectos, controversias y riesgos propios de industrias complejas.",
    href: `${siteUrl}/ingenieria-y-derecho/`,
  },
  {
    number: "03",
    title: "Comercio y Negocios Internacionales",
    text: "Asesoría legal y estratégica para conectar empresas, mercados y oportunidades globales.",
    href: `${siteUrl}/comercio-y-negocios-internacionales/`,
  },
  {
    number: "04",
    title: "Fintech, Innovación y Nuevas Tecnologías",
    text: "Asesoría legal para la transformación financiera y digital en un entorno global en constante evolución.",
    href: `${siteUrl}/fintech-innovacion-y-nuevas-tecnologias-2026/`,
  },
];

const approach = [
  {
    title: "Experiencia legal",
    text: "Criterio jurídico para estructurar, prevenir y resolver.",
  },
  {
    title: "Visión de negocio",
    text: "Decisiones alineadas con los objetivos de la compañía.",
  },
  {
    title: "Inteligencia organizacional",
    text: "Soluciones aplicables a la operación y su contexto.",
  },
];

const responsiveCss = `
  :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }

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
      padding-left: 22px !important;
      padding-right: 22px !important;
    }
    .hero-image {
      width: 100% !important;
      height: auto !important;
      max-height: 270px !important;
    }
    .practice-column {
      padding: 0 0 12px !important;
    }
    .approach-column {
      padding: 0 0 18px !important;
      border-right: 0 !important;
      border-bottom: 1px solid #d8c49f !important;
    }
    .cta-button {
      display: block !important;
      width: 100% !important;
      box-sizing: border-box !important;
      text-align: center !important;
    }
    .footer-logo {
      margin: 0 0 18px !important;
    }
    .footer-contact {
      padding-left: 0 !important;
    }
    .mobile-center {
      text-align: left !important;
    }
  }

  @media (prefers-color-scheme: dark) {
    .light-surface {
      background-color: #102f4a !important;
    }
    .soft-surface {
      background-color: #173b58 !important;
    }
    .card-surface {
      background-color: #1c425f !important;
      border-color: #49657a !important;
    }
    .dark-text {
      color: #ffffff !important;
    }
    .muted-text {
      color: #d7e0e7 !important;
    }
    .gold-text {
      color: #e2bc72 !important;
    }
    .light-border {
      border-color: #49657a !important;
    }
  }

  [data-ogsc] .light-surface {
    background-color: #102f4a !important;
  }
  [data-ogsc] .soft-surface {
    background-color: #173b58 !important;
  }
  [data-ogsc] .card-surface {
    background-color: #1c425f !important;
  }
  [data-ogsc] .dark-text {
    color: #ffffff !important;
  }
  [data-ogsc] .muted-text {
    color: #d7e0e7 !important;
  }
`;

export default function BaPropuestaValorEmail() {
  return (
    <Html lang="es" dir="ltr">
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <style>{responsiveCss}</style>
      </Head>
      <Preview>
        Derecho, Estrategia y Empresa para decisiones sólidas y crecimiento sostenible.
      </Preview>

      <Body style={main}>
        <Container className="email-container light-surface" style={container}>
          <Section style={brandHeader}>
            <Img
              src={logoUrl}
              width="92"
              height="94"
              alt="Bright Alliance | BA Chile"
              style={headerLogo}
            />
          </Section>

          <Section style={heroSection}>
            <Row>
              <Column className="mobile-block mobile-padding" style={heroCopyColumn}>
                <Text className="gold-text" style={eyebrow}>
                  BRIGHT ALLIANCE | BA CHILE
                </Text>
                <Heading as="h1" style={heroTitle}>
                  Derecho, Estrategia y Empresa
                </Heading>
                <Text style={heroLead}>
                  Soluciones legales diseñadas para fortalecer el gobierno corporativo,
                  mitigar riesgos y apoyar el crecimiento sostenible de nuestros clientes
                  en Chile y en el extranjero.
                </Text>
                <Button
                  className="cta-button"
                  href={`mailto:${contactEmail}`}
                  style={primaryButton}
                >
                  Conversar con nuestro equipo
                </Button>
              </Column>
              <Column className="mobile-block" style={heroImageColumn}>
                <Img
                  className="hero-image"
                  src={officeImageUrl}
                  width="260"
                  height="320"
                  alt="Oficinas de Bright Alliance en Santiago"
                  style={heroImage}
                />
              </Column>
            </Row>
          </Section>

          <Section className="light-surface mobile-padding" style={introSection}>
            <Heading className="dark-text" as="h2" style={sectionTitleLeft}>
              Asesoría para decisiones empresariales
            </Heading>
            <Text className="muted-text" style={introText}>
              Combinamos experiencia legal, visión de negocio e
              inteligencia organizacional para entregar soluciones eficientes,
              aplicables y alineadas con los objetivos estratégicos de cada compañía.
            </Text>
          </Section>

          <Section className="soft-surface mobile-padding" style={practicesSection}>
            <Text className="gold-text" style={sectionEyebrow}>
              ÁREAS DE PRÁCTICA
            </Text>
            <Heading className="dark-text" as="h2" style={sectionTitleLeft}>
              Una mirada jurídica conectada con la empresa
            </Heading>
            <Row>
              {practices.slice(0, 2).map((practice) => (
                <Column
                  className="mobile-block practice-column"
                  key={practice.title}
                  style={practiceColumn}
                >
                  <Section className="card-surface light-border" style={practiceCard}>
                    <Text className="gold-text" style={practiceNumber}>
                      {practice.number}
                    </Text>
                    <Heading className="dark-text" as="h3" style={practiceTitle}>
                      {practice.title}
                    </Heading>
                    <Text className="muted-text" style={practiceText}>
                      {practice.text}
                    </Text>
                    <Link className="gold-text" href={practice.href} style={practiceLink}>
                      Conocer más
                    </Link>
                  </Section>
                </Column>
              ))}
            </Row>
            <Row>
              {practices.slice(2).map((practice) => (
                <Column
                  className="mobile-block practice-column"
                  key={practice.title}
                  style={practiceColumn}
                >
                  <Section className="card-surface light-border" style={practiceCard}>
                    <Text className="gold-text" style={practiceNumber}>
                      {practice.number}
                    </Text>
                    <Heading className="dark-text" as="h3" style={practiceTitle}>
                      {practice.title}
                    </Heading>
                    <Text className="muted-text" style={practiceText}>
                      {practice.text}
                    </Text>
                    <Link className="gold-text" href={practice.href} style={practiceLink}>
                      Conocer más
                    </Link>
                  </Section>
                </Column>
              ))}
            </Row>
          </Section>

          <Section style={approachSection}>
            <Text className="gold-text" style={sectionEyebrowOnDark}>
              NUESTRO ENFOQUE
            </Text>
            <Heading as="h2" style={sectionTitleOnDark}>
              Derecho al servicio de la estrategia
            </Heading>
            <Row>
              {approach.map((item) => (
                <Column
                  className="mobile-block approach-column"
                  key={item.title}
                  style={approachColumn}
                >
                  <Heading as="h3" style={approachTitle}>
                    {item.title}
                  </Heading>
                  <Text style={approachText}>{item.text}</Text>
                </Column>
              ))}
            </Row>
          </Section>

          <Section className="light-surface mobile-padding" style={ctaSection}>
            <Heading className="dark-text" as="h2" style={ctaTitle}>
              Conversemos sobre los desafíos de su empresa
            </Heading>
            <Text className="muted-text" style={ctaText}>
              Nuestro equipo puede acompañarle en necesidades permanentes, asuntos
              específicos y decisiones estratégicas que requieren una mirada jurídica y
              empresarial integrada.
            </Text>
            <Button
              className="cta-button"
              href={`mailto:${contactEmail}`}
              style={primaryButtonDark}
            >
              Solicitar una reunión
            </Button>
          </Section>

          <Section style={footerSection}>
            <Row>
              <Column className="mobile-block" style={footerLogoColumn}>
                <Img
                  className="footer-logo"
                  src={logoUrl}
                  width="76"
                  height="78"
                  alt="Bright Alliance | BA Chile"
                  style={footerLogo}
                />
              </Column>
              <Column className="mobile-block footer-contact" style={footerContactColumn}>
                <Text style={footerTitle}>Bright Alliance | BA Chile</Text>
                <Text style={footerText}>
                  Apoquindo N° 3076, oficina N° 702<br />
                  Barrio El Golf, Las Condes, Santiago, Chile
                </Text>
                <Text style={footerText}>
                  <Link href={`mailto:${contactEmail}`} style={footerLink}>
                    {contactEmail}
                  </Link>
                  <br />
                  <Link href={`tel:${phoneHref}`} style={footerLink}>
                    {phoneDisplay}
                  </Link>
                  <br />
                  <Link href={siteUrl} style={footerLink}>
                    www.bachile.cl
                  </Link>
                </Text>
              </Column>
            </Row>
            <Hr style={footerHr} />
            <Text style={legalText}>
              Este correo presenta información general sobre los servicios de Bright
              Alliance y no constituye asesoría legal para un caso específico.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const navy = "#102f4a";
const navyDark = "#0a2236";
const gold = "#c7a15a";
const beige = "#f4f0e8";
const white = "#ffffff";
const ink = "#102f4a";
const muted = "#53616c";
const border = "#d8c49f";

const main = {
  margin: "0",
  padding: "0",
  backgroundColor: "#e9ecef",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const container = {
  width: "600px",
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: white,
};

const brandHeader = {
  padding: "18px 26px",
  backgroundColor: navy,
  textAlign: "left" as const,
};

const headerLogo = {
  display: "block",
  width: "92px",
  height: "94px",
};

const heroSection = {
  backgroundColor: navyDark,
};

const heroCopyColumn = {
  width: "340px",
  padding: "38px 30px 36px",
  verticalAlign: "middle",
};

const heroImageColumn = {
  width: "260px",
  verticalAlign: "middle",
};

const eyebrow = {
  margin: "0 0 12px",
  color: gold,
  fontSize: "11px",
  lineHeight: "16px",
  fontWeight: "700",
  letterSpacing: "1.2px",
};

const heroTitle = {
  margin: "0 0 16px",
  color: white,
  fontSize: "31px",
  lineHeight: "37px",
  fontWeight: "700",
};

const heroLead = {
  margin: "0 0 24px",
  color: "#e8edf1",
  fontSize: "15px",
  lineHeight: "23px",
};

const heroImage = {
  display: "block",
  width: "260px",
  height: "320px",
  objectFit: "cover" as const,
};

const primaryButton = {
  backgroundColor: gold,
  color: navyDark,
  fontSize: "12px",
  lineHeight: "16px",
  fontWeight: "700",
  textDecoration: "none",
  padding: "14px 18px",
  borderRadius: "2px",
};

const introSection = {
  padding: "34px 34px 36px",
  backgroundColor: white,
};

const sectionTitleLeft = {
  margin: "0 0 12px",
  color: ink,
  fontSize: "24px",
  lineHeight: "30px",
  fontWeight: "700",
};

const introText = {
  margin: "0",
  color: muted,
  fontSize: "15px",
  lineHeight: "23px",
};

const practicesSection = {
  padding: "32px 28px 24px",
  backgroundColor: beige,
};

const sectionEyebrow = {
  margin: "0 0 8px",
  color: "#8a672e",
  fontSize: "11px",
  lineHeight: "16px",
  fontWeight: "700",
  letterSpacing: "1.2px",
};

const practiceColumn = {
  width: "50%",
  padding: "0 6px 12px",
  verticalAlign: "top",
};

const practiceCard = {
  minHeight: "220px",
  padding: "20px",
  backgroundColor: white,
  border: `1px solid ${border}`,
};

const practiceNumber = {
  margin: "0 0 12px",
  color: "#8a672e",
  fontSize: "12px",
  lineHeight: "16px",
  fontWeight: "700",
};

const practiceTitle = {
  margin: "0 0 10px",
  color: ink,
  fontSize: "17px",
  lineHeight: "22px",
  fontWeight: "700",
};

const practiceText = {
  margin: "0 0 14px",
  color: muted,
  fontSize: "13px",
  lineHeight: "20px",
};

const practiceLink = {
  color: "#76541e",
  fontSize: "12px",
  lineHeight: "18px",
  fontWeight: "700",
  textDecoration: "underline",
};

const approachSection = {
  padding: "34px 28px 30px",
  backgroundColor: navy,
};

const sectionEyebrowOnDark = {
  margin: "0 0 8px",
  color: gold,
  fontSize: "11px",
  lineHeight: "16px",
  fontWeight: "700",
  letterSpacing: "1.2px",
};

const sectionTitleOnDark = {
  margin: "0 0 24px",
  color: white,
  fontSize: "24px",
  lineHeight: "30px",
  fontWeight: "700",
};

const approachColumn = {
  width: "33.333%",
  padding: "0 14px",
  verticalAlign: "top",
  borderRight: `1px solid ${border}`,
};

const approachTitle = {
  margin: "0 0 8px",
  color: white,
  fontSize: "15px",
  lineHeight: "20px",
  fontWeight: "700",
};

const approachText = {
  margin: "0",
  color: "#dbe4ea",
  fontSize: "12px",
  lineHeight: "19px",
};

const ctaSection = {
  padding: "38px 34px 40px",
  backgroundColor: white,
  textAlign: "center" as const,
};

const ctaTitle = {
  margin: "0 0 12px",
  color: ink,
  fontSize: "24px",
  lineHeight: "30px",
  fontWeight: "700",
};

const ctaText = {
  maxWidth: "480px",
  margin: "0 auto 22px",
  color: muted,
  fontSize: "14px",
  lineHeight: "22px",
};

const primaryButtonDark = {
  backgroundColor: navy,
  color: white,
  fontSize: "12px",
  lineHeight: "16px",
  fontWeight: "700",
  textDecoration: "none",
  padding: "14px 24px",
  borderRadius: "2px",
};

const footerSection = {
  padding: "28px 30px 22px",
  backgroundColor: navyDark,
};

const footerLogoColumn = {
  width: "110px",
  verticalAlign: "top",
};

const footerLogo = {
  display: "block",
  width: "76px",
  height: "78px",
};

const footerContactColumn = {
  paddingLeft: "12px",
  verticalAlign: "top",
};

const footerTitle = {
  margin: "0 0 8px",
  color: white,
  fontSize: "14px",
  lineHeight: "20px",
  fontWeight: "700",
};

const footerText = {
  margin: "0 0 10px",
  color: "#dbe4ea",
  fontSize: "12px",
  lineHeight: "18px",
};

const footerLink = {
  color: white,
  textDecoration: "underline",
};

const footerHr = {
  margin: "18px 0 14px",
  borderColor: "#3d566a",
};

const legalText = {
  margin: "0",
  color: "#aebdc8",
  fontSize: "10px",
  lineHeight: "16px",
};
