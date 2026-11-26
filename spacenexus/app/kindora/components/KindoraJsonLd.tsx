import {
  createKindoraOrganizationSchema,
  kindoraCanonicalUrl,
  kindoraOrganizationId,
} from "./kindora-entity";

export default function KindoraJsonLd() {
  const organizationSchema = createKindoraOrganizationSchema();

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${kindoraCanonicalUrl}/#website`,
    name: "Kindora",
    alternateName: "Kindora NGO OS",
    url: kindoraCanonicalUrl,
    publisher: { "@id": kindoraOrganizationId },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${kindoraCanonicalUrl}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${kindoraCanonicalUrl}/#software`,
    name: "Kindora",
    alternateName: "Kindora NGO OS",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Nonprofit Management",
    operatingSystem: "Web Browser",
    url: kindoraCanonicalUrl,
    provider: { "@id": kindoraOrganizationId },
    publisher: { "@id": kindoraOrganizationId },
    description:
      "All-in-one nonprofit operating system with donor management, grant tracking, program delivery, financial reporting, and volunteer coordination.",
    offers: { "@type": "Offer", url: `${kindoraCanonicalUrl}/pricing`, description: "See the pricing page for current Starter, Professional, and Enterprise plan terms." },
    featureList: [
      "Donor & Donation Management",
      "Grant Lifecycle Management",
      "Client & Case Management",
      "Financial Management & Reporting",
      "Fundraising Campaign Management",
      "Volunteer Management",
      "Communications Hub",
      "Dashboard & Analytics",
      "Expense Tracking",
      "File Management",
    ],
    keywords: "nonprofit management software, NGO platform, donor CRM, grant management, nonprofit operating system",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}
