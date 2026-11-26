import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/data/posts";
import { kindoraLastModified } from "./sitemap-dates";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spacenexus.net";

  const staticPages = [
    { route: "", priority: 1.0 },
    { route: "/features", priority: 0.9 },
    { route: "/pricing", priority: 0.9 },
    { route: "/solutions", priority: 0.8 },
    { route: "/contact", priority: 0.8 },
    { route: "/demo", priority: 0.9 },
    { route: "/blog", priority: 0.9 },
    { route: "/vs-competitors", priority: 0.9 },
    { route: "/ecosystem", priority: 0.8 },
    { route: "/social-media", priority: 0.7 },
    { route: "/about", priority: 0.8 },
    { route: "/careers", priority: 0.8 },
    { route: "/how-to-add-users", priority: 0.7 },
    { route: "/kindora-for-ngos", priority: 0.9 },
    { route: "/donor-management", priority: 0.8 },
    { route: "/grant-management", priority: 0.8 },
    { route: "/volunteer-management", priority: 0.8 },
    { route: "/nonprofit-financials", priority: 0.8 },
    { route: "/case-management", priority: 0.8 },
    { route: "/knowledge-graph", priority: 0.8 },
    { route: "/veritas-graph", priority: 0.8 },
    { route: "/faq", priority: 0.8 },
  ];

  const careerPages = [
    "full-stack-developer",
    "senior-full-stack-developer",
    "python-developer-ai",
  ].map((slug) => ({
    route: `/careers/${slug}`,
    priority: 0.7,
  }));

  const featurePages = [
    "campaign-management",
    "client-management",
    "communications",
    "dashboard-analytics",
    "donor-management",
    "expense-management",
    "file-management",
    "financial-management",
    "financials",
    "grant-management",
    "people-management",
    "reporting",
    "settings",
    "user-management",
  ].map((feature) => ({
    route: `/features/${feature}`,
    priority: 0.8,
  }));

  const solutionPages = [
    "youth-nonprofits",
    "small-nonprofits",
    "community-organizations",
    "social-services",
    "housing-nonprofits",
    "program-management-software",
    "program-outcome-tracking",
  ].map((solution) => ({
    route: `/solutions/${solution}`,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    route: `/blog/${post.slug}`,
    priority: 0.7,
  }));

  const freeToolPages = [
    "free-tools",
    "free-tools/grant-readiness-scorecard",
    "free-tools/donor-retention-calculator",
    "free-tools/indirect-cost-allocator",
    "free-tools/chart-of-accounts-generator",
    "free-tools/impact-matrix-builder",
    "free-tools/nonprofit-kpi-calculator",
    "free-tools/donation-receipt-generator",
    "free-tools/volunteer-time-value-calculator",
    "free-tools/nonprofit-software-roi-calculator",
  ].map((slug) => ({
    route: `/${slug}`,
    priority: 0.8,
  }));

  const indexAndRoundupPages = [
    "alternatives",
    "best-salesforce-alternatives",
    "best-bloomerang-alternatives",
    "best-donorperfect-alternatives",
  ].map((slug) => ({
    route: `/${slug}`,
    priority: 0.9,
  }));

  const seoLandingPages = [
    "affordable-nonprofit-crm",
    "all-in-one-nonprofit-management-platform",
    "association-management-software",
    "best-crm-for-nonprofits",
    "best-crm-for-small-nonprofits",
    "best-donor-management-software",
    "best-fundraising-software",
    "best-nonprofit-crm",
    "bloomerang-alternative",
    "board-reporting-software",
    "bonterra-alternative",
    "budget-management-software",
    "campaign-management-software",
    "charity-donation-platform",
    "charity-management-software",
    "church-management-software",
    "client-case-management-software",
    "cloud-based-nonprofit-crm",
    "cloud-crm-for-nonprofits",
    "communications-hub",
    "constituent-management-software",
    "constituent-relationship-management",
    "cost-allocation-software",
    "crm-for-nonprofits",
    "digital-fundraising-platform",
    "donation-management-software",
    "donation-reporting-software",
    "donation-tracking-software",
    "donation-tracking-system",
    "donor-analytics-software",
    "donor-communication-software",
    "donor-crm",
    "donor-database-for-nonprofits",
    "donor-database-software",
    "donordock-alternative",
    "donor-engagement-software",
    "donor-management-software",
    "donorperfect-alternative",
    "donor-portal",
    "donor-relationship-management",
    "donor-retention-software",
    "donor-stewardship-software",
    "donor-tracking-software",
    "email-marketing-for-nonprofits",
    "event-fundraising-software",
    "event-management-software",
    "expense-management-software",
    "financial-reporting-software",
    "foundation-management-software",
    "fundraising-crm",
    "fundraising-management-software",
    "fundraising-software",
    "grant-compliance-software",
    "grant-lifecycle-management",
    "grant-management-software",
    "grant-reporting-software",
    "grant-tracking-software",
    "instrumentl-alternative",
    "kindora-vs-instrumentl",
    "little-green-light-alternative",
    "major-gift-management-software",
    "membership-management-software",
    "multi-program-ngo-management",
    "neon-one-alternative",
    "network-for-good-alternative",
    "ngo-management-software",
    "nonprofit-analytics-dashboard",
    "nonprofit-case-management-software",
    "nonprofit-communication-platform",
    "nonprofit-crm",
    "nonprofit-crm-database",
    "nonprofit-dashboard-software",
    "nonprofit-database-software",
    "nonprofit-document-management",
    "nonprofit-email-automation",
    "nonprofit-email-communication-software",
    "nonprofit-email-marketing-software",
    "nonprofit-financial-management-software",
    "nonprofit-fundraising-platform",
    "nonprofit-management-software",
    "nonprofit-operations-platform",
    "nonprofit-reporting-software",
    "nonprofit-workflow-automation",
    "online-donation-platform",
    "online-donation-software",
    "online-giving-platform",
    "online-giving-software",
    "peer-to-peer-fundraising-software",
    "pledge-management-software",
    "program-management-software",
    "program-outcome-tracking",
    "prospect-management-software",
    "recurring-donation-management",
    "recurring-donation-software",
    "salesforce-crm-for-nonprofits",
    "salesforce-nonprofit-cloud-alternative",
    "small-nonprofit-crm",
    "small-nonprofit-fundraising-software",
    "small-nonprofit-software",
    "social-services-case-management",
    "text-to-give-software",
    "volunteer-database-software",
    "volunteer-hours-tracking-software",
    "volunteer-management-software",
    "volunteer-portal",
    "volunteer-recruitment-software",
    "volunteer-scheduling-software",
  ].map((slug) => ({
    route: `/${slug}`,
    priority: 0.8,
  }));

  const blogLastModified = Object.fromEntries(
    blogPosts.map((post) => [
      `/blog/${post.slug}`,
      post.dateModified ?? post.publishedAt,
    ])
  );

  const allPages = [
    ...staticPages,
    ...careerPages,
    ...featurePages,
    ...solutionPages,
    ...blogPages,
    ...freeToolPages,
    ...indexAndRoundupPages,
    ...seoLandingPages,
  ];

  return allPages.map((page) => {
    const route = page.route === "" ? "/" : page.route;
    const lastModified = blogLastModified[route] ?? kindoraLastModified[route];
    return {
      url: `${baseUrl}/kindora${page.route}`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: "monthly" as const,
      priority: page.priority,
    };
  });
}
