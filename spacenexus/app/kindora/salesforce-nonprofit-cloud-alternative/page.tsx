import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";
import ComparisonMethodology from "../components/ComparisonMethodology";

export const metadata: Metadata = {
  title:
    "Salesforce Nonprofit Cloud Alternative | Affordable Nonprofit Software",
  description:
    "Looking for a Salesforce Nonprofit Cloud alternative? Kindora offers donor CRM, grant tracking, case management, accounting, and more — without the Salesforce complexity or cost. Try it free.",
  alternates: {
    canonical:
      "https://spacenexus.net/kindora/salesforce-nonprofit-cloud-alternative",
  },
  openGraph: {
    title:
      "Salesforce Nonprofit Cloud Alternative",
    description:
      "Everything Salesforce Nonprofit Cloud does for nonprofits — without the complexity, consultants, or enterprise pricing. The all-in-one alternative.",
    url: "https://spacenexus.net/kindora/salesforce-nonprofit-cloud-alternative",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora — Salesforce Nonprofit Cloud Alternative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce Nonprofit Cloud Alternative",
    description:
      "Donor CRM, grants, case management, and accounting — without Salesforce complexity. Try Kindora free.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "salesforce nonprofit cloud alternative",
    "salesforce nonprofit competitor",
    "alternative to salesforce nonprofit",
    "salesforce vs kindora",
    "salesforce nonprofit replacement",
    "nonprofit crm alternative",
    "salesforce nonprofit pricing",
    "salesforce vs",
    "best salesforce alternative",
    "switch from salesforce nonprofit",
    "salesforce nonprofit cloud vs kindora",
    "affordable nonprofit software",
    "nonprofit management software alternative",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Salesforce Nonprofit Cloud Alternative",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "The all-in-one Salesforce Nonprofit Cloud alternative. Donor CRM, grant tracking, case management, nonprofit accounting, and communications — without the enterprise complexity.",
      url: "https://spacenexus.net/kindora/salesforce-nonprofit-cloud-alternative",
      offers: {
        "@type": "Offer",
    price: "See vendor current pricing",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan for up to 5 team members; paid plans are custom-quoted",
      },
      featureList: [
        "Donor CRM & tracking",
        "Grant lifecycle management",
        "Client case management",
        "Nonprofit accounting",
        "Volunteer management",
        "Campaign tools",
        "Communications hub",
        "Dashboard analytics",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why switch from Salesforce Nonprofit Cloud to Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Salesforce Nonprofit Cloud is powerful but complex — it requires certified consultants, expensive licenses, and months of implementation. Kindora delivers the same nonprofit features (donor CRM, grants, case management, accounting) in an affordable, ready-in-minutes platform with no consultants required.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora offer the same features as Salesforce Nonprofit Cloud?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora includes donor CRM, fundraising campaigns, grant tracking, case management, program management, volunteer management, and nonprofit accounting. These are all core features that Salesforce Nonprofit Cloud provides — but without the enterprise complexity.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kindora compare to Salesforce Nonprofit Cloud on pricing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Consult vendor current pricing; quotes vary by organization and plan.",
          },
        },
        {
          "@type": "Question",
          name: "What does Salesforce Nonprofit Cloud do that Kindora also does?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Salesforce Nonprofit Cloud's strengths — donor management, fundraising campaigns, program tracking, case management, and custom reporting — are all included in Kindora. You get the same nonprofit functionality without the Salesforce overhead.",
          },
        },
        {
          "@type": "Question",
          name: "What does Kindora do that Salesforce Nonprofit Cloud doesn't?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora provides built-in nonprofit accounting with cost allocation, grant lifecycle management from prospect to compliance, a communications hub, and volunteer management — all without requiring additional Salesforce add-ons, third-party integrations, or custom development.",
          },
        },
        {
          "@type": "Question",
          name: "Can I migrate my data from Salesforce Nonprofit Cloud to Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora supports data import from Salesforce and other nonprofit platforms. Our team can help you migrate donor records, grant data, case files, and program information smoothly.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kindora really better than Salesforce Nonprofit Cloud for nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you're a large enterprise with a dedicated Salesforce admin team, Salesforce works. If you're a small to mid-sized nonprofit that needs powerful features without the complexity, cost, and consultants — Kindora is the better choice. Same features, fraction of the cost and setup time.",
          },
        },
      ],
    },
  ],
};

const comparisonRows = [
  {
    feature: "Donor CRM & Tracking",
    kindora: { value: "Full CRM with engagement scoring", positive: true },
    salesforce: { value: "Full CRM with complex configuration", positive: true },
  },
  {
    feature: "Grant Lifecycle Management",
    kindora: { value: "Full grant tracking from prospect to award", positive: true },
    salesforce: { value: "Available via custom configuration or add-ons", positive: "partial" as const },
  },
  {
    feature: "Client Case Management",
    kindora: { value: "Full intake, services, and outcomes", positive: true },
    salesforce: { value: "Requires Nonprofit Cloud for case management", positive: true },
  },
  {
    feature: "Nonprofit Accounting",
    kindora: { value: "Built-in with cost allocation", positive: true },
    salesforce: { value: "Not built-in — requires third-party integration", positive: false },
  },
  {
    feature: "Volunteer Management",
    kindora: { value: "Hours, scheduling, and recognition", positive: true },
    salesforce: { value: "Requires custom objects or third-party app", positive: false },
  },
  {
    feature: "Communications Hub",
    kindora: { value: "Built-in email and bulk messaging", positive: true },
    salesforce: { value: "Requires Marketing Cloud or Pardot add-on", positive: "partial" as const },
  },
  {
    feature: "Campaign Management",
    kindora: { value: "Full campaign creation and tracking", positive: true },
    salesforce: { value: "Strong campaign tools", positive: true },
  },
  {
    feature: "Setup Time",
    kindora: { value: "Setup time varies by workflow; confirm onboarding scope", positive: true },
    salesforce: { value: "Weeks to months with implementation partner", positive: false },
  },
  {
    feature: "Implementation Cost",
    kindora: { value: "Starter is free for up to 5 members; paid plan pricing is custom-quoted", positive: true },
    salesforce: { value: "Consult vendor current pricing; quotes vary by organization and plan.", positive: false },
  },
  {
    feature: "Per-User Pricing",
    kindora: { value: "Free Starter; Professional and Enterprise are custom-quoted", positive: true },
    salesforce: { value: "Consult vendor current pricing; quotes vary by organization and plan.", positive: false },
  },
  {
    feature: "Export-Ready Reports",
    kindora: { value: "PDF, Excel, board-ready formats", positive: true },
    salesforce: { value: "Advanced reporting with custom dashboards", positive: true },
  },
  {
    feature: "Learning Curve",
    kindora: { value: "Intuitive — designed for nonprofit staff", positive: true },
    salesforce: { value: "Steep — requires Salesforce training", positive: false },
  },
];

const salesforceStrengths = [
  "Extremely powerful and customizable CRM platform",
  "Massive ecosystem of integrations and add-ons",
  "Advanced reporting and analytics capabilities",
  "Enterprise-grade security and scalability",
  "Large community and extensive documentation",
];

const salesforceWeaknesses = [
  "Complex — requires certified Salesforce consultants",
  "Expensive: per-user licensing plus implementation fees",
  "Weeks to months of setup before you can use it",
  "No built-in nonprofit accounting or cost allocation",
  "Volunteer management requires custom development or add-ons",
  "Overwhelming for small to mid-sized nonprofit teams",
];

const kindoraAdvantages = [
  "Everything Salesforce does for nonprofits — without the enterprise complexity",
  "Starter signup is self-service; implementation scope for paid plans is confirmed with sales",
  "Built-in nonprofit accounting and cost allocation — no add-ons needed",
      "Compare the published Kindora plan limits and included modules with your Salesforce licenses and connected tools",
];

const whySwitchReasons = [
  {
    title: "No Consultants Required",
    description:
      "Salesforce implementation needs depend on the organization's configuration and scope. Kindora Starter signup is self-service; confirm implementation scope for paid plans with sales.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Save Thousands Per Year",
    description:
      "Consult vendor current pricing; quotes vary by organization and plan.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Built-In Accounting",
    description:
      "Salesforce doesn't include nonprofit accounting. You'll need a separate integration or tool. Kindora has it built in with cost allocation.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Ready in Minutes",
    description:
      "Implementation time depends on the product, data, and workflows being configured. Kindora offers self-service Starter access and Enterprise migration assistance; confirm requirements with each vendor.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const faqs = [
  {
    question: "Why switch from Salesforce Nonprofit Cloud to Kindora?",
    answer:
      "Salesforce Nonprofit Cloud is powerful but complex — it requires certified consultants, expensive licenses, and months of implementation. Kindora delivers the same nonprofit features (donor CRM, grants, case management, accounting) in an affordable, ready-in-minutes platform with no consultants required.",
  },
  {
    question: "Does Kindora offer the same features as Salesforce Nonprofit Cloud?",
    answer:
      "Yes. Kindora includes donor CRM, fundraising campaigns, grant tracking, case management, program management, volunteer management, and nonprofit accounting. These are all core features that Salesforce Nonprofit Cloud provides — but without the enterprise complexity.",
  },
  {
    question: "How does Kindora compare to Salesforce Nonprofit Cloud on pricing?",
    answer:
      "Consult vendor current pricing; quotes vary by organization and plan.",
  },
  {
    question: "What does Salesforce Nonprofit Cloud do that Kindora also does?",
    answer:
      "Salesforce Nonprofit Cloud's strengths — donor management, fundraising campaigns, program tracking, case management, and custom reporting — are all included in Kindora. You get the same nonprofit functionality without the Salesforce overhead.",
  },
  {
    question: "What does Kindora do that Salesforce Nonprofit Cloud doesn't?",
    answer:
      "Kindora provides built-in nonprofit accounting with cost allocation, grant lifecycle management from prospect to compliance, a communications hub, and volunteer management — all without requiring additional Salesforce add-ons, third-party integrations, or custom development.",
  },
  {
    question: "Can I migrate my data from Salesforce Nonprofit Cloud to Kindora?",
    answer:
      "Yes. Kindora supports data import from Salesforce and other nonprofit platforms. Our team can help you migrate donor records, grant data, case files, and program information smoothly.",
  },
  {
    question: "Is Kindora really better than Salesforce Nonprofit Cloud for nonprofits?",
    answer:
      "If you're a large enterprise with a dedicated Salesforce admin team, Salesforce works. If you're a small to mid-sized nonprofit that needs powerful features without the complexity, cost, and consultants — Kindora is the better choice. Same features, fraction of the cost and setup time.",
  },
];

export default function SalesforceNonprofitCloudAlternativePage() {
  return (
    <>
      <Script
        id="salesforce-nonprofit-cloud-alternative-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-blue-600">
                  Salesforce Nonprofit Cloud Alternative
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                  Salesforce Alternative
                </span>{" "}
                Built for Nonprofits
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Salesforce Nonprofit Cloud is powerful — but it needs
                consultants, costs thousands per year, and takes months to set
                up. Kindora delivers the same nonprofit features in an
                affordable platform you can start using today.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Try Kindora Free
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <Link
                  href="/kindora/demo"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Request a Demo
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                {[
                  "No credit card required",
                  "Self-service Starter signup; setup time varies by workflow",
                  "See current plan terms on the pricing page",
                ].map((text) => (
                  <span key={text} className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Visual - Side by Side Preview */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold text-gray-900">
                    Feature Comparison
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    Side-by-Side
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { feature: "Donor CRM", kindora: true, salesforce: true },
                    {
                      feature: "Grant Tracking",
                      kindora: true,
                      salesforce: false,
                    },
                    {
                      feature: "Case Management",
                      kindora: true,
                      salesforce: true,
                    },
                    {
                      feature: "Nonprofit Accounting",
                      kindora: true,
                      salesforce: false,
                    },
                    {
                      feature: "Volunteer Tools",
                      kindora: true,
                      salesforce: false,
                    },
                    {
                      feature: "Campaign Tools",
                      kindora: true,
                      salesforce: true,
                    },
                    {
                      feature: "Communications",
                      kindora: true,
                      salesforce: false,
                    },
                    {
                      feature: "30-Minute Setup",
                      kindora: true,
                      salesforce: false,
                    },
                  ].map((row) => (
                    <div
                      key={row.feature}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {row.feature}
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-400 w-16 text-right">
                          Kindora
                        </span>
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${row.kindora ? "bg-[#2563eb] text-white" : "bg-red-100 text-red-400"}`}
                        >
                          {row.kindora ? (
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                        </span>
                        <span className="text-xs text-gray-400 w-24 text-right">
                          Salesforce NPC
                        </span>
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${row.salesforce ? "bg-green-100 text-green-600" : "bg-red-100 text-red-400"}`}
                        >
                          {row.salesforce ? (
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          )}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <span className="text-sm text-gray-500">
                    Kindora:{" "}
                    <span className="font-bold text-[#2563eb]">8/8</span>{" "}
                    features · Salesforce NPC:{" "}
                    <span className="font-bold text-gray-400">3/8</span>{" "}
                    features
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Why Switch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Salesforce is powerful. Kindora is practical.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              If your nonprofit doesn&apos;t have a Salesforce admin team and a
              six-figure budget — you&apos;re overpaying for complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySwitchReasons.map((reason) => (
              <div
                key={reason.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5 text-[#2563eb] group-hover:text-white transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={reason.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#2563eb] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
              <span>Detailed Comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Kindora vs Salesforce Nonprofit Cloud — Feature by Feature
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              See how Kindora compares across every feature that matters.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium bg-gray-50 w-48">
                    Feature
                  </th>
                  <th className="px-6 py-4 bg-[#2563eb] text-white font-bold text-center min-w-[140px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
                        Best Choice
                      </span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[140px]">
                    Salesforce NPC
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center bg-blue-50/50">
                      {row.kindora.positive ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2563eb] text-white">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-400">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                      )}
                      <span className="block text-xs text-gray-500 mt-1 max-w-[160px] mx-auto">
                        {row.kindora.value}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.salesforce.positive === true ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                      ) : row.salesforce.positive === "partial" ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100 text-yellow-600">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M20 12H4"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-400">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                      )}
                      <span className="block text-xs text-gray-500 mt-1 max-w-[160px] mx-auto">
                        {row.salesforce.value}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 border-t border-gray-200">
                  <td colSpan={3} className="px-6 py-3">
                    <div className="flex items-center gap-6 text-xs text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#2563eb] text-white">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        Full support
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-100 text-yellow-600">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M20 12H4"
                            />
                          </svg>
                        </span>
                        Partial / requires add-on
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-400">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                        Not available
                      </span>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Side by Side Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Salesforce Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  SF
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    Salesforce Nonprofit Cloud
                  </h3>
                  <p className="text-xs font-semibold text-gray-500">
                    What they do well
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {salesforceStrengths.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2.5 text-sm text-gray-700"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 pt-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Where they fall short
                </p>
                <ul className="space-y-2.5">
                  {salesforceWeaknesses.map((w) => (
                    <li
                      key={w}
                      className="flex items-start gap-2.5 text-sm text-gray-600"
                    >
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-red-100 text-red-400 flex items-center justify-center shrink-0">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Kindora Card */}
            <div className="rounded-2xl border-2 border-[#2563eb] bg-white p-6 lg:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] to-[#7c3aed]" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#2563eb] flex items-center justify-center text-white font-bold text-sm">
                  K
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Kindora</h3>
                  <p className="text-xs font-semibold text-[#2563eb]">
                    Why Kindora wins
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {kindoraAdvantages.map((a) => (
                  <li
                    key={a}
                    className="flex items-start gap-2.5 text-sm text-gray-700"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-5 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider w-24 shrink-0 mt-0.5">
                    Salesforce best for:
                  </span>
                  <span className="text-sm text-gray-600">
                    Large enterprises with dedicated Salesforce admin teams
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider w-24 shrink-0 mt-0.5">
                    Kindora best for:
                  </span>
                  <span className="text-sm text-gray-800 font-medium">
                    Small to mid-sized nonprofits that need powerful features
                    without the complexity
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Kindora Starter — Free plan
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions when comparing Kindora to Salesforce Nonprofit
              Cloud.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to switch from Salesforce?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora today. Everything Salesforce Nonprofit
            Cloud does for nonprofits — without the complexity, cost, or
            consultants.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Start Free — No Credit Card Required
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-[#2563eb] transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Ongoing free Starter plan for up to 5 team members · Paid plans by custom quote
          </p>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <ComparisonMethodology />
                <LastUpdated date="2026-11-26" />
            </div></div>
      </section>
    </>
  );
}
