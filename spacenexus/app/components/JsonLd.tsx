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
    knowsAbout: [
      "Virtual Data Rooms",
      "M&A Due Diligence",
      "Secure Document Sharing",
      "Investment Banking Technology",
      "Legal Technology",
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
            "@id": "https://spacenexus.net/#software",
            name: "SpaceNexus VDR",
            applicationCategory: "BusinessApplication",
            url: "https://spacenexus.net",
            publisher: { "@id": "https://spacenexus.net/#organization" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "Kindora NGO OS",
            applicationCategory: "BusinessApplication",
            url: "https://spacenexus.net/kindora",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://spacenexus.net/#website",
    name: "SpaceNexus",
    alternateName: "Space Nexus",
    url: "https://spacenexus.net",
    publisher: { "@id": "https://spacenexus.net/#organization" },
    inLanguage: "en-US",
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
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
