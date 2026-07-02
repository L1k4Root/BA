import { Button, Heading, Link, Section, Text } from "@react-email/components";
import type { CSSProperties, ReactNode } from "react";

export const baEmailTokens = {
  color: {
    navy: "#12334f",
    navyDark: "#08283f",
    gold: "#c9a45d",
    goldDark: "#7a5824",
    sand: "#f4efe6",
    white: "#ffffff",
    ink: "#12334f",
    muted: "#586773",
    border: "#d5b879",
    canvas: "#e9ecef",
    footerRule: "#486278",
  },
  font: {
    family: "Arial, Helvetica, sans-serif",
    title: "Arial, Helvetica, sans-serif",
  },
  width: {
    email: "600px",
  },
  radius: {
    button: "0px",
  },
} as const;

export const baEmailResponsiveCss = `
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
      padding-left: 24px !important;
      padding-right: 24px !important;
    }
    .hero-image {
      width: 100% !important;
      height: auto !important;
      max-height: 300px !important;
    }
    .card-column {
      padding: 0 0 12px !important;
    }
    .approach-column {
      padding: 0 0 18px !important;
      border-right: 0 !important;
      border-bottom: 1px solid #d5b879 !important;
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
  }

  @media (prefers-color-scheme: dark) {
    .light-surface {
      background-color: #12334f !important;
    }
    .soft-surface {
      background-color: #173b58 !important;
    }
    .card-surface {
      background-color: #1c425f !important;
      border-color: #667d90 !important;
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
  }

  [data-ogsc] .light-surface {
    background-color: #12334f !important;
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

type BaSectionHeadingProps = {
  eyebrow?: string;
  title: string;
  inverted?: boolean;
  align?: "left" | "center";
};

export function BaSectionHeading({
  eyebrow,
  title,
  inverted = false,
  align = "left",
}: BaSectionHeadingProps) {
  return (
    <>
      {eyebrow ? (
        <Text
          className="gold-text"
          style={{
            ...baEmailStyles.eyebrow,
            color: inverted
              ? baEmailTokens.color.gold
              : baEmailTokens.color.goldDark,
            textAlign: align,
          }}
        >
          {eyebrow}
        </Text>
      ) : null}
      <Heading
        className={inverted ? undefined : "dark-text"}
        as="h2"
        style={{
          ...baEmailStyles.sectionTitle,
          color: inverted ? baEmailTokens.color.white : baEmailTokens.color.ink,
          textAlign: align,
        }}
      >
        {title}
      </Heading>
    </>
  );
}

type BaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "navy";
};

export function BaButton({ href, children, variant = "gold" }: BaButtonProps) {
  return (
    <Button
      className="cta-button"
      href={href}
      style={
        variant === "gold" ? baEmailStyles.buttonGold : baEmailStyles.buttonNavy
      }
    >
      {children}
    </Button>
  );
}

type BaPracticeCardProps = {
  number: string;
  title: string;
  text: string;
  href: string;
  compact?: boolean;
};

export function BaPracticeCard({
  number,
  title,
  text,
  href,
  compact = false,
}: BaPracticeCardProps) {
  return (
    <Section
      className="card-surface"
      style={{
        ...baEmailStyles.practiceCard,
        minHeight: compact ? "174px" : "214px",
      }}
    >
      <Text className="gold-text" style={baEmailStyles.practiceNumber}>
        {number}
      </Text>
      <Heading
        className="dark-text"
        as="h3"
        style={baEmailStyles.practiceTitle}
      >
        {title}
      </Heading>
      <Text className="muted-text" style={baEmailStyles.practiceText}>
        {text}
      </Text>
      <Link href={href} style={baEmailStyles.practiceLink}>
        Conocer más
      </Link>
    </Section>
  );
}

export const baEmailStyles = {
  body: {
    margin: "0",
    padding: "0",
    backgroundColor: baEmailTokens.color.canvas,
    fontFamily: baEmailTokens.font.family,
  },
  container: {
    width: baEmailTokens.width.email,
    maxWidth: baEmailTokens.width.email,
    margin: "0 auto",
    backgroundColor: baEmailTokens.color.white,
  },
  brandHeader: {
    padding: "20px 28px 22px",
    backgroundColor: baEmailTokens.color.navy,
    textAlign: "left",
  },
  headerLogo: {
    display: "block",
    width: "82px",
    height: "84px",
  },
  hero: {
    backgroundColor: baEmailTokens.color.navyDark,
  },
  heroCopy: {
    width: "338px",
    padding: "34px 28px 36px",
    verticalAlign: "middle",
    backgroundColor: baEmailTokens.color.white,
  },
  heroImageColumn: {
    width: "262px",
    verticalAlign: "middle",
  },
  heroImage: {
    display: "block",
    width: "262px",
    height: "326px",
    objectFit: "cover",
  },
  heroEyebrow: {
    margin: "0 0 12px",
    color: baEmailTokens.color.goldDark,
    fontSize: "10px",
    lineHeight: "15px",
    fontWeight: "700",
    letterSpacing: "1.15px",
  },
  heroTitle: {
    margin: "0 0 16px",
    color: baEmailTokens.color.ink,
    fontSize: "32px",
    lineHeight: "35px",
    fontWeight: "700",
    letterSpacing: "-0.4px",
  },
  heroLead: {
    margin: "0 0 22px",
    color: baEmailTokens.color.muted,
    fontSize: "14px",
    lineHeight: "21px",
  },
  contentSection: {
    padding: "36px 32px 38px",
    backgroundColor: baEmailTokens.color.white,
  },
  practicesSection: {
    padding: "34px 26px 28px",
    backgroundColor: baEmailTokens.color.white,
    borderTop: `1px solid ${baEmailTokens.color.sand}`,
    borderBottom: `1px solid ${baEmailTokens.color.sand}`,
  },
  approachSection: {
    padding: "34px 28px 32px",
    backgroundColor: baEmailTokens.color.navy,
  },
  ctaSection: {
    padding: "38px 34px 42px",
    backgroundColor: baEmailTokens.color.white,
    textAlign: "center",
  },
  footer: {
    padding: "28px 30px 22px",
    backgroundColor: baEmailTokens.color.navyDark,
  },
  eyebrow: {
    margin: "0 0 8px",
    fontSize: "10px",
    lineHeight: "15px",
    fontWeight: "700",
    letterSpacing: "1.15px",
  },
  sectionTitle: {
    margin: "0 0 14px",
    fontSize: "24px",
    lineHeight: "29px",
    fontWeight: "700",
    letterSpacing: "-0.2px",
  },
  bodyText: {
    margin: "0",
    color: baEmailTokens.color.muted,
    fontSize: "14px",
    lineHeight: "22px",
  },
  buttonGold: {
    backgroundColor: baEmailTokens.color.gold,
    color: baEmailTokens.color.navyDark,
    fontSize: "11px",
    lineHeight: "15px",
    fontWeight: "700",
    textDecoration: "none",
    padding: "13px 18px",
    borderRadius: baEmailTokens.radius.button,
  },
  buttonNavy: {
    backgroundColor: baEmailTokens.color.navy,
    color: baEmailTokens.color.white,
    fontSize: "11px",
    lineHeight: "15px",
    fontWeight: "700",
    textDecoration: "none",
    padding: "13px 22px",
    borderRadius: baEmailTokens.radius.button,
  },
  practiceColumn: {
    width: "50%",
    padding: "0 6px 12px",
    verticalAlign: "top",
  },
  practiceColumnFull: {
    width: "100%",
    padding: "0 6px 12px",
    verticalAlign: "top",
  },
  practiceCard: {
    padding: "20px",
    backgroundColor: "#fbfaf7",
    border: `1px solid ${baEmailTokens.color.border}`,
  },
  practiceNumber: {
    margin: "0 0 11px",
    color: baEmailTokens.color.goldDark,
    fontSize: "10px",
    lineHeight: "14px",
    fontWeight: "700",
  },
  practiceTitle: {
    margin: "0 0 10px",
    color: baEmailTokens.color.ink,
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "700",
  },
  practiceText: {
    margin: "0 0 14px",
    color: baEmailTokens.color.muted,
    fontSize: "12px",
    lineHeight: "18px",
  },
  practiceLink: {
    color: baEmailTokens.color.goldDark,
    fontSize: "11px",
    lineHeight: "16px",
    fontWeight: "700",
    textDecoration: "underline",
  },
  insightPanel: {
    padding: "20px 22px",
    backgroundColor: "#fbfaf7",
    borderLeft: `4px solid ${baEmailTokens.color.gold}`,
  },
  insightText: {
    margin: "0",
    color: baEmailTokens.color.ink,
    fontSize: "15px",
    lineHeight: "23px",
    fontWeight: "700",
  },
  proofText: {
    margin: "14px 0 0",
    color: baEmailTokens.color.muted,
    fontSize: "12px",
    lineHeight: "19px",
  },
  solutionColumn: {
    width: "33.333%",
    padding: "0 12px",
    verticalAlign: "top",
  },
  solutionNumber: {
    margin: "0 0 9px",
    color: baEmailTokens.color.gold,
    fontSize: "10px",
    lineHeight: "14px",
    fontWeight: "700",
  },
  benefitColumn: {
    width: "33.333%",
    padding: "0 8px 12px",
    verticalAlign: "top",
  },
  benefitCard: {
    minHeight: "152px",
    padding: "18px 16px",
    backgroundColor: "#fbfaf7",
    borderTop: `3px solid ${baEmailTokens.color.gold}`,
  },
  benefitTitle: {
    margin: "0 0 9px",
    color: baEmailTokens.color.ink,
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "700",
  },
  benefitText: {
    margin: "0",
    color: baEmailTokens.color.muted,
    fontSize: "12px",
    lineHeight: "18px",
  },
  approachColumn: {
    width: "33.333%",
    padding: "0 13px",
    verticalAlign: "top",
    borderRight: `1px solid ${baEmailTokens.color.border}`,
  },
  approachTitle: {
    margin: "0 0 7px",
    color: baEmailTokens.color.white,
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "700",
  },
  approachText: {
    margin: "0",
    color: "#dce6ed",
    fontSize: "11px",
    lineHeight: "17px",
  },
  ctaText: {
    maxWidth: "470px",
    margin: "0 auto 22px",
    color: baEmailTokens.color.muted,
    fontSize: "13px",
    lineHeight: "21px",
  },
  footerLogoColumn: {
    width: "105px",
    verticalAlign: "top",
  },
  footerLogo: {
    display: "block",
    width: "70px",
    height: "72px",
  },
  footerContactColumn: {
    paddingLeft: "10px",
    verticalAlign: "top",
  },
  footerTitle: {
    margin: "0 0 7px",
    color: baEmailTokens.color.white,
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
    color: baEmailTokens.color.white,
    textDecoration: "underline",
  },
  footerRule: {
    margin: "18px 0 13px",
    borderColor: baEmailTokens.color.footerRule,
  },
  legalText: {
    margin: "0",
    color: "#aebdc8",
    fontSize: "9px",
    lineHeight: "14px",
  },
} satisfies Record<string, CSSProperties>;
