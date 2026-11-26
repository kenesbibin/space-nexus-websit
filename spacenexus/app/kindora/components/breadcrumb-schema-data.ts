const BASE_URL = "https://spacenexus.net";

const SEGMENT_LABELS: Record<string, string> = {
  kindora: "Kindora",
  features: "Features",
  solutions: "Solutions",
  pricing: "Pricing",
  blog: "Blog",
  contact: "Contact",
  demo: "Demo",
  "dashboard-analytics": "Dashboard & Analytics",
  "donor-management": "Donor Management",
  "grant-management": "Grant Management",
  "campaign-management": "Campaign Management",
  "client-management": "Client & Programs",
  "financial-management": "Financial Management",
  reporting: "Reporting & Export",
  communications: "Communications",
  "volunteer-management": "Volunteer Management",
  "program-management": "Program Management",
  "task-management": "Task Management",
  "document-management": "Document Management",
  "small-nonprofits": "Small Nonprofits",
  "social-services": "Social Services",
  "community-organizations": "Community Organizations",
  "youth-nonprofits": "Youth Nonprofits",
  "housing-nonprofits": "Housing Nonprofits",
};

function toLabel(segment: string): string {
  return SEGMENT_LABELS[segment] ?? segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function createKindoraBreadcrumbSchema(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] !== "kindora" || segments[1] === "email-click") return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      ...segments.map((segment, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: toLabel(segment),
        item: `${BASE_URL}/${segments.slice(0, index + 1).join("/")}`,
      })),
    ],
  };
}
