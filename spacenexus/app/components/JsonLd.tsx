import { kindoraCanonicalUrl } from "../kindora/components/kindora-entity";

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://spacenexus.net/#organization",
    name: "SpaceNexus",
    legalName: "SpaceNexus Inc.",
    alternateName: "Space Nexus",
    url: "https://spacenexus.net",
    logo: {
      "@type": "ImageObject",
      url: "https://spacenexus.net/logo.png",
      width: 512,
      height: 512,
    },
    image: "https://spacenexus.net/og-image.png",
    description:
      "SpaceNexus is the enterprise-grade Virtual Data Room for M&A due diligence, capital raising, and secure document sharing for legal teams.",
    foundingDate: "2022",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
    knowsAbout: [
      "Virtual Data Rooms",
      "M&A Due Diligence",
      "Secure Document Sharing",
      "Investment Banking Technology",
      "Legal Technology",
      "SOC 2 Compliance",
      "ISO 27001",
    ],
    sameAs: [
      "https://x.com/spacenexus111",
      "https://www.linkedin.com/company/space-nexus",
      "https://www.youtube.com/@spacenexus-b5p",
      "https://www.instagram.com/spacenexus618/",
      "https://www.provenexpert.com/space-nexus/",
      "https://www.saashub.com/u/spacenexus",
      "https://startupxplore.com/en/person/space-nexus",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-646-421-5740",
        email: "contact@spacenexus.net",
        contactType: "sales",
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "Australia" },
        ],
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: "https://spacenexus.net/demo",
        availableLanguage: ["English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "2500 Marconi Ave, Ste 101",
      addressLocality: "Sacramento",
      addressRegion: "CA",
      postalCode: "95821",
      addressCountry: "US",
    },
    slogan: "The Secure Virtual Data Room for M&A & Legal Teams",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SpaceNexus Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "SpaceNexus VDR",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web Browser",
            url: "https://spacenexus.net",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@id": `${kindoraCanonicalUrl}/#software` },
        },
      ],
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SpaceNexus Virtual Data Room",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Virtual Data Room",
    operatingSystem: "Web Browser",
    url: "https://spacenexus.net",
    description:
      "Enterprise Virtual Data Room for secure M&A due diligence, capital raising, and document management. Built on Zero Trust architecture with AES-256 encryption and SOC 2 Type II compliance.",
    offers: {
      "@type": "Offer",
      price: "Contact for pricing",
      priceCurrency: "USD",
      description: "Transparent, published pricing — Enterprise plans available",
    },
    author: {
      "@type": "Organization",
      name: "SpaceNexus",
      url: "https://spacenexus.net",
    },
    featureList: [
      "Zero Trust architecture",
      "AES-256 encryption at rest and in transit",
      "SOC 2 Type II certified",
      "ISO 27001 aligned",
      "SEC and FINRA compliance ready",
      "FCA and UK GDPR compliance ready",
      "CCPA and GDPR data privacy compliant",
      "AI-powered document processing and redaction",
      "Real-time buyer activity analytics",
      "Granular role-based permissions",
      "Q&A due diligence workflow management",
      "Dynamic watermarking and print restrictions",
      "Full-text search across 100+ file types",
      "24/7 enterprise support",
    ],
    keywords: "virtual data room, VDR, M&A due diligence, secure data room, investment banking data room, private equity data room",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SpaceNexus",
    alternateName: "Space Nexus",
    url: "https://spacenexus.net",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://spacenexus.net/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
