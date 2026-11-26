import {
  kindoraCanonicalUrl,
  kindoraOrganizationId,
} from "./kindora-entity";
export { kindoraOrganizationId } from "./kindora-entity";

const siteUrl = "https://spacenexus.net";
const pricingUrl = `${kindoraCanonicalUrl}/pricing`;

type ServiceSchemaInput = {
  name: string;
  description: string;
  category: string;
  url: string;
};

export function createKindoraServiceSchema({ name, description, category, url }: ServiceSchemaInput) {
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    provider: { "@id": kindoraOrganizationId },
    url,
    serviceType: category,
    category,
    audience: { "@type": "Audience", audienceType: "Nonprofit organizations" },
    offers: {
      "@type": "Offer",
      url: pricingUrl,
      seller: { "@id": kindoraOrganizationId },
      description: "See Kindora pricing for current Starter, Professional, and Enterprise plan terms.",
    },
    mainEntityOfPage: { "@id": url },
  };
}

export function createKindoraProductSchema() {
  const offers = [
    {
      "@type": "Offer",
      name: "Starter",
      price: "0",
      priceCurrency: "USD",
      description: "Forever free; for small nonprofits getting started with digital management. Up to 5 team members.",
      url: "https://kindora.pmspace.ai/login?redirectTo=%2F",
      seller: { "@id": kindoraOrganizationId },
    },
    {
      "@type": "Offer",
      name: "Professional",
      description: "Custom-quoted Professional plan; supports up to 25 team members. No time-limited trial is advertised; request a demo and confirm onboarding scope with sales.",
      url: `${siteUrl}/kindora/contact`,
      seller: { "@id": kindoraOrganizationId },
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      description: "Custom-quoted Enterprise plan; unlimited team members. Includes migration assistance, training, dedicated support, and SLA; confirm scope and terms with sales.",
      url: `${siteUrl}/kindora/contact`,
      seller: { "@id": kindoraOrganizationId },
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "Product"],
    "@id": `${kindoraCanonicalUrl}/#software`,
    name: "Kindora",
    alternateName: "Kindora NGO OS",
    description: "Kindora is nonprofit management software for donor and donation management, client and service tracking, grants, campaigns, finances, and reporting.",
    url: kindoraCanonicalUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    category: "Nonprofit management software",
    audience: { "@type": "Audience", audienceType: "Nonprofit organizations" },
    brand: { "@id": kindoraOrganizationId },
    manufacturer: { "@id": kindoraOrganizationId },
    offers,
  };
}
