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
import {
  BaButton,
  BaSectionHeading,
  baEmailResponsiveCss,
  baEmailStyles,
} from "../design-system/ba-email";

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

const solutionPillars = [
  {
    number: "01",
    title: "Diagnóstico jurídico",
    text: "Lectura precisa del contexto corporativo, contractual y operacional antes de definir el curso de acción.",
  },
  {
    number: "02",
    title: "Criterio estratégico",
    text: "Recomendaciones conectadas con gobierno corporativo, gestión de riesgos y objetivos de crecimiento.",
  },
  {
    number: "03",
    title: "Ejecución aplicable",
    text: "Soluciones diseñadas para ser implementadas por equipos directivos, legales y de negocio.",
  },
];

const benefits = [
  {
    title: "Decisiones más sólidas",
    text: "Mejor base jurídica para estructurar, negociar y resolver asuntos empresariales relevantes.",
  },
  {
    title: "Riesgo bajo control",
    text: "Anticipación de contingencias legales, contractuales y organizacionales antes de que escalen.",
  },
  {
    title: "Crecimiento sostenible",
    text: "Asesoría orientada a proteger la operación y acompañar oportunidades en Chile y el extranjero.",
  },
];

export default function BaGeneralEmail() {
  return (
    <Html lang="es" dir="ltr">
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <style>{baEmailResponsiveCss}</style>
      </Head>
      <Preview>
        Asesoría legal premium para decisiones empresariales críticas.
      </Preview>

      <Body style={baEmailStyles.body}>
        <Container
          className="email-container light-surface"
          style={baEmailStyles.container}
        >
          <Section style={baEmailStyles.brandHeader}>
            <Img
              src={logoUrl}
              width="82"
              height="84"
              alt="Bright Alliance | BA Chile"
              style={baEmailStyles.headerLogo}
            />
          </Section>

          <Section style={baEmailStyles.hero}>
            <Row>
              <Column
                className="mobile-block mobile-padding"
                style={baEmailStyles.heroCopy}
              >
                <Text className="gold-text" style={baEmailStyles.heroEyebrow}>
                  BRIGHT ALLIANCE | BA CHILE
                </Text>
                <Heading as="h1" style={baEmailStyles.heroTitle}>
                  Decisiones
                  <br />
                  legales con
                  <br />
                  visión de negocio
                </Heading>
                <Text style={baEmailStyles.heroLead}>
                  Bright Alliance integra Derecho, Estrategia y Empresa para
                  acompañar a compañías que necesitan claridad jurídica, control
                  de riesgos y ejecución alineada con sus objetivos.
                </Text>
                <BaButton href={contactPageUrl} variant="navy">
                  Solicitar una reunión
                </BaButton>
              </Column>
              <Column
                className="mobile-block"
                style={baEmailStyles.heroImageColumn}
              >
                <Img
                  className="hero-image"
                  src={officeImageUrl}
                  width="262"
                  height="326"
                  alt="Oficinas de Bright Alliance en Santiago"
                  style={baEmailStyles.heroImage}
                />
              </Column>
            </Row>
          </Section>

          <Section
            className="light-surface mobile-padding"
            style={baEmailStyles.contentSection}
          >
            <BaSectionHeading
              eyebrow="PROBLEMA"
              title="El riesgo legal rara vez vive aislado del negocio"
            />
            <Section
              className="card-surface"
              style={baEmailStyles.insightPanel}
            >
              <Text className="dark-text" style={baEmailStyles.insightText}>
                Contratos, gobierno corporativo, proyectos complejos y expansión
                internacional exigen una mirada que conecte lo jurídico con la
                operación real de la empresa.
              </Text>
              <Text className="muted-text" style={baEmailStyles.proofText}>
                Cuando la asesoría se limita al expediente, las decisiones
                pueden llegar tarde, perder contexto comercial o trasladar
                riesgos a otras áreas de la organización.
              </Text>
            </Section>
          </Section>

          <Section style={baEmailStyles.approachSection}>
            <BaSectionHeading
              eyebrow="SOLUCIÓN"
              title="Asesoría jurídica diseñada para dirección empresarial"
              inverted
            />
            <Row>
              {solutionPillars.map((item) => (
                <Column
                  className="mobile-block"
                  key={item.title}
                  style={baEmailStyles.solutionColumn}
                >
                  <Text style={baEmailStyles.solutionNumber}>
                    {item.number}
                  </Text>
                  <Heading as="h3" style={baEmailStyles.approachTitle}>
                    {item.title}
                  </Heading>
                  <Text style={baEmailStyles.approachText}>{item.text}</Text>
                </Column>
              ))}
            </Row>
          </Section>

          <Section
            className="soft-surface mobile-padding"
            style={baEmailStyles.practicesSection}
          >
            <BaSectionHeading
              eyebrow="BENEFICIOS"
              title="Un estándar legal más útil para la empresa"
            />
            <Row>
              {benefits.map((item) => (
                <Column
                  className="mobile-block card-column"
                  key={item.title}
                  style={baEmailStyles.benefitColumn}
                >
                  <Section
                    className="card-surface"
                    style={baEmailStyles.benefitCard}
                  >
                    <Heading
                      className="dark-text"
                      as="h3"
                      style={baEmailStyles.benefitTitle}
                    >
                      {item.title}
                    </Heading>
                    <Text
                      className="muted-text"
                      style={baEmailStyles.benefitText}
                    >
                      {item.text}
                    </Text>
                  </Section>
                </Column>
              ))}
            </Row>
          </Section>

          <Section
            className="light-surface mobile-padding"
            style={baEmailStyles.ctaSection}
          >
            <BaSectionHeading
              eyebrow="BRIGHT ALLIANCE"
              title="Conversemos sobre su próximo desafío jurídico"
              align="center"
            />
            <Text className="muted-text" style={baEmailStyles.ctaText}>
              Nuestro equipo acompaña necesidades permanentes, asuntos
              específicos y decisiones estratégicas que requieren una mirada
              jurídica y empresarial integrada.
            </Text>
            <BaButton href={contactPageUrl} variant="navy">
              Solicitar una reunión
            </BaButton>
          </Section>

          <Section style={baEmailStyles.footer}>
            <Row>
              <Column
                className="mobile-block"
                style={baEmailStyles.footerLogoColumn}
              >
                <Img
                  className="footer-logo"
                  src={logoUrl}
                  width="70"
                  height="72"
                  alt="Bright Alliance | BA Chile"
                  style={baEmailStyles.footerLogo}
                />
              </Column>
              <Column
                className="mobile-block footer-contact"
                style={baEmailStyles.footerContactColumn}
              >
                <Text style={baEmailStyles.footerTitle}>
                  Bright Alliance | BA Chile
                </Text>
                <Text style={baEmailStyles.footerText}>
                  <Link href={contactPageUrl} style={baEmailStyles.footerLink}>
                    Apoquindo N° 3076, oficina N° 702
                  </Link>
                  <br />
                  Barrio El Golf, Las Condes, Santiago, Chile
                </Text>
                <Text style={baEmailStyles.footerText}>
                  <Link href={contactHref} style={baEmailStyles.footerLink}>
                    {contactEmail}
                  </Link>
                  <br />
                  <Link href={phoneHref} style={baEmailStyles.footerLink}>
                    {phoneDisplay}
                  </Link>
                  <br />
                  <Link href={siteUrl} style={baEmailStyles.footerLink}>
                    www.bachile.cl
                  </Link>
                </Text>
              </Column>
            </Row>
            <Hr style={baEmailStyles.footerRule} />
            <Text style={baEmailStyles.legalText}>
              Este correo presenta información general sobre los servicios de
              Bright Alliance y no constituye asesoría legal para un caso
              específico.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
