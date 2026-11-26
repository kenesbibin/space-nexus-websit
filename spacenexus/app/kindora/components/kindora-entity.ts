export const kindoraCanonicalUrl = "https://spacenexus.net/kindora";
export const kindoraOrganizationId = `${kindoraCanonicalUrl}/#organization`;
export const kindoraLogoUrl = "https://spacenexus.net/icononly_transparent_nobuffer.png";
export const kindoraContactUrl = `${kindoraCanonicalUrl}/contact`;
export const kindoraContactEmail = "contact@spacenexus.net";

// The social URLs formerly attached to Kindora were not independently verified
// as official profiles. Keep sameAs omitted until the social account owners
// confirm control and the profile identity.
export const kindoraVerifiedSameAs: string[] = [];

export function createKindoraOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": kindoraOrganizationId,
    name: "Kindora",
    alternateName: "Kindora NGO OS",
    url: kindoraCanonicalUrl,
    logo: {
      "@type": "ImageObject",
      url: kindoraLogoUrl,
      width: 512,
      height: 512,
    },
    description:
      "Kindora is a nonprofit management platform for donor management, grants, programs, finances, volunteers, and impact reporting.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: kindoraContactEmail,
      url: kindoraContactUrl,
      availableLanguage: ["English"],
    },
    parentOrganization: {
      "@type": "Organization",
      "@id": "https://spacenexus.net/#organization",
      name: "SpaceNexus",
      url: "https://spacenexus.net",
    },
    ...(kindoraVerifiedSameAs.length > 0
      ? { sameAs: kindoraVerifiedSameAs }
      : {}),
  };
}
