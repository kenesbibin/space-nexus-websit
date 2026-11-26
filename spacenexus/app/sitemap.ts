import type { MetadataRoute } from "next";
import { ecosystemProducts } from "./ecosystem/data";
import { spacenexusLastModified } from "./sitemap-dates";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spacenexus.net";

  // VDR static pages
  const vdrStaticPages = [
    { route: "", priority: 1.0, changeFrequency: "weekly" as const },
    { route: "/demo", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/features", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/industries", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/security", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/blog", priority: 0.9, changeFrequency: "weekly" as const },
    // Phase 2: Content Strategy pages
    { route: "/glossary", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/checklists", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/checklists/due-diligence-checklist", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/checklists/templates", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/checklists/investor-data-room", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/faq/vdr-security", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/faq/vdr-compliance", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/faq/data-room", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/glossary/financial", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/get-started", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/case-studies", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/resources", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/resources/backlink-strategy", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/resources/keyword-tracking", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/resources/npl-guide", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/tutorials", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/tutorials/data-room-setup-walkthrough", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/tutorials/managing-bidder-access", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/tutorials/structured-qa-workflow", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/tutorials/dynamic-watermarking-setup", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/tutorials/engagement-analytics", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/tutorials/permission-management", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/tutorials/audit-log-export", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/tutorials/sso-and-mfa-configuration", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/competitors/datasite-alternative", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/competitors/intralinks-alternative", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/competitors/vdr-alternatives", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/virtual-data-room-providers", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/data-room-software", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/ma-data-room-providers", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/board-portal-software", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/secure-document-sharing", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/legal-document-management", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/investor-due-diligence", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/ma-case-studies", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/case-studies/startup-fundraising", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/data-room-due-diligence", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/due-diligence-software", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/pricing-comparison", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/reviews", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/solutions/mergers-and-acquisitions-vdr", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/solutions/investor-data-room", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/solutions/series-a-fundraising-data-room", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/solutions/startup-data-room", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/best-data-room-for-startups", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/solutions/secure-document-sharing-for-legal", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/solutions/law-firm-document-exchange", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/solutions/ma-document-sharing", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/solutions/virtual-data-room-canada", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/solutions/virtual-data-room-taiwan", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/solutions/virtual-data-room-uae", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/solutions/virtual-data-room-germany", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/solutions/clo-advisory", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/solutions/distressed-debt", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/solutions/esg-consulting", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/solutions/npl-portfolio", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/solutions/private-credit", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/solutions/syndicated-lending", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/solutions/program-management-software", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/solutions/program-outcome-tracking", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/vdr-comparison", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/vdr-guide", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/enterprise", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/social-media-platforms", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/knowledge-graph", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  // VDR blog posts
  const vdrBlogPosts = [
    "what-is-a-virtual-data-room",
    "virtual-data-room-for-private-equity",
    "vdr-security-what-to-look-for",
    "how-to-set-up-virtual-data-room-series-a",
    "best-virtual-data-room-for-ma",
    "secure-file-sharing-for-lawyers",
    "due-diligence-virtual-data-room-guide",
    "hipaa-compliant-file-sharing-healthcare-ma",
    "vdr-security-compliance-guide",
    "secure-data-room-uk-law-firms",
    "secure-platforms-for-legal-due-diligence",
    "automated-due-diligence-software",
    "vdr-software-investment-banking",
    "vdr-vs-physical-data-room",
    "ma-market-pulse-june-2026",
    "tech-ma-insights-may-2026",
    "mid-market-deal-structure-april-2026",
    "security-compliance-pulse-june-2026",
    "compliance-landscape-2026",
    "vendor-security-assessment-vdr-2026",
    "insider-threats-deal-data-rooms-march-2026",
    "ai-governance-ma-diligence-february-2026",
    "data-room-organization-best-practices",
    "seller-data-room-prep-checklist-14-days",
    "buyer-diligence-efficiency-playbook",
    "mid-deal-qa-playbook",
    "data-room-mistakes-that-kill-deals",
  ].map((slug) => ({
    route: `/blog/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));


  // VDR feature pages
  const vdrFeaturePages = [
    "data-room",
    "dashboard",
    "security-compliance",
    "users-permissions",
    "activity-analytics",
    "qa",
    "reports",
    "integrations",
    "deals",
    "billing-plans",
    "support",
    "settings",
  ].map((feature) => ({
    route: `/features/${feature}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  // VDR industry pages
  const industryPages = [
    "investment-banking",
    "private-equity",
    "law-firms",
    "corporate-development",
    "life-sciences",
    "real-estate",
    "technology",
    "energy-infrastructure",
  ].map((industry) => ({
    route: `/industries/${industry}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  // Law firm practice pages
  const lawFirmPracticePages = [
    "ma-diligence",
    "litigation-discovery",
    "client-portals",
    "real-estate",
    "ip-licensing",
  ].map((practice) => ({
    route: `/industries/law-firms/${practice}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  // Investment banking practice pages
  const ibPracticePages = [
    "ma-advisory",
    "capital-markets",
    "restructuring",
    "private-capital",
    "sell-side-process",
  ].map((practice) => ({
    route: `/industries/investment-banking/${practice}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  // Private equity practice pages
  const pePracticePages = [
    "buy-side-diligence",
    "portfolio-management",
    "lp-fundraising",
    "exit-sell-side",
    "add-on-acquisitions",
  ].map((practice) => ({
    route: `/industries/private-equity/${practice}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  // Venture capital practice pages
  const vcPracticePages = [
    "early-stage-diligence",
    "portfolio-support",
    "fund-operations",
    "lp-communications",
    "exits-secondaries",
  ].map((practice) => ({
    route: `/industries/venture-capital/${practice}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  // Ecosystem hub + individual product pages
  const ecosystemPages = [
    { route: "/ecosystem", priority: 0.9, changeFrequency: "monthly" as const },
    ...ecosystemProducts.map((p) => ({
      route: `/ecosystem/${p.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  ];

  // Combine all pages
  const allPages = [
    ...vdrStaticPages,
    ...vdrBlogPosts,
    ...vdrFeaturePages,
    ...industryPages,
    ...lawFirmPracticePages,
    ...ibPracticePages,
    ...pePracticePages,
    ...vcPracticePages,
    ...ecosystemPages,
  ];

  return allPages.map((page) => {
    const route = page.route === "" ? "/" : page.route;
    const lastModified = spacenexusLastModified[route];
    return {
      url: `${baseUrl}${page.route}`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    };
  });
}
