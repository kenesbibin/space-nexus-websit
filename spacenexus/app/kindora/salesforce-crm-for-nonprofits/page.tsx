import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title:
    "Salesforce CRM for Nonprofits — A Better Alternative",
  description:
    "Looking for Salesforce CRM for nonprofits? Get the same donor management, fundraising, and reporting features with Kindora — without Salesforce complexity, consultants, or enterprise pricing.",
  alternates: {
    canonical:
      "https://spacenexus.net/kindora/salesforce-crm-for-nonprofits",
  },
  openGraph: {
    title:
      "Salesforce CRM for Nonprofits — Switch to Kindora",
    description:
      "Salesforce CRM for nonprofits is expensive and complex. Kindora gives you the same donor CRM, campaigns, and reporting — ready in minutes, not months.",
    url: "https://spacenexus.net/kindora/salesforce-crm-for-nonprofits",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora — Salesforce CRM for Nonprofits Alternative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce CRM for Nonprofits — Switch to Kindora",
    description:
      "Donor CRM, campaigns, and reporting without Salesforce complexity. Start free.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "salesforce crm for nonprofits",
    "salesforce nonprofit crm",
    "salesforce crm nonprofit",
    "salesforce for nonprofits",
    "salesforce nonprofit edition",
    "salesforce crm alternative for nonprofits",
    "nonprofit crm software",
    "best crm for nonprofits",
    "affordable nonprofit crm",
    "salesforce nonprofit pricing",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Salesforce CRM for Nonprofits Alternative",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "The affordable alternative to Salesforce CRM for nonprofits. Donor management, fundraising campaigns, grant tracking, case management, and reporting — ready in minutes.",
      url: "https://spacenexus.net/kindora/salesforce-crm-for-nonprofits",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "Donor CRM & Engagement Scoring",
        "Fundraising Campaign Management",
        "Grant Lifecycle Tracking",
        "Client Case Management",
        "Volunteer Coordination",
        "Nonprofit Accounting",
        "Communications Hub",
        "Real-Time Dashboards",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Salesforce CRM for nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Salesforce CRM for nonprofits is a version of Salesforce's customer relationship management platform adapted for nonprofit organizations. It includes donor management, fundraising campaigns, volunteer tracking, and reporting — but requires per-user licenses, implementation consultants, and ongoing customization.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a better alternative to Salesforce CRM for nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora is a purpose-built nonprofit CRM that includes everything Salesforce offers — donor management, campaigns, grant tracking, case management, volunteer tools, and accounting — at a fraction of the cost and setup time. No consultants, no customization, ready in time varies by data and workflow needs.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Salesforce CRM for nonprofits cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Salesforce offers a free Nonprofit Success Pack for up to 10 users, but most nonprofits need paid licenses starting at $60–$150+ per user per month. Implementation typically costs $10,000–$50,000+ with certified consultants, and ongoing maintenance adds to the total cost.",
          },
        },
        {
          "@type": "Question",
          name: "Can Kindora replace Salesforce CRM for nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Kindora includes donor CRM, fundraising campaigns, grant tracking, client case management, volunteer management, nonprofit accounting, and real-time dashboards — all core capabilities of Salesforce CRM for nonprofits, delivered in an affordable, easy-to-use platform.",
          },
        },
        {
          "@type": "Question",
          name: "Why do nonprofits choose Salesforce CRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nonprofits choose Salesforce CRM for its powerful customization, massive integration ecosystem, and the 10-free-user offer. However, many switch away due to high total cost of ownership, need for certified consultants, long implementation times, and complexity that overwhelms small teams.",
          },
        },
      ],
    },
  ],
};

const comparisonRows = [
  {
    feature: "Donor Management",
    kindora: { value: "Full CRM with engagement scoring", positive: true },
    salesforce: { value: "Full CRM with custom configuration", positive: true },
  },
  {
    feature: "Fundraising Campaigns",
    kindora: { value: "Built-in campaign creation and tracking", positive: true },
    salesforce: { value: "Strong campaign tools", positive: true },
  },
  {
    feature: "Grant Tracking",
    kindora: { value: "Full lifecycle from prospect to award", positive: true },
    salesforce: {
      value: "Requires custom objects or add-ons",
      positive: "partial" as const,
    },
  },
  {
    feature: "Case Management",
    kindora: { value: "Full intake, services, and outcomes", positive: true },
    salesforce: {
      value: "Available in Nonprofit Cloud edition",
      positive: true,
    },
  },
  {
    feature: "Volunteer Management",
    kindora: { value: "Hours, scheduling, and recognition", positive: true },
    salesforce: {
      value: "Requires third-party app or custom build",
      positive: false,
    },
  },
  {
    feature: "Nonprofit Accounting",
    kindora: { value: "Built-in with cost allocation", positive: true },
    salesforce: {
      value: "Not included — requires integration",
      positive: false,
    },
  },
  {
    feature: "Communications",
    kindora: { value: "Built-in email and bulk messaging", positive: true },
    salesforce: {
      value: "Requires Marketing Cloud or Pardot",
      positive: "partial" as const,
    },
  },
  {
    feature: "Reporting & Dashboards",
    kindora: { value: "Real-time dashboards, export-ready", positive: true },
    salesforce: { value: "Advanced reporting with setup", positive: true },
  },
  {
    feature: "Setup Time",
    kindora: { value: "time varies by data and workflow needs — no consultants", positive: true },
    salesforce: { value: "Weeks to months", positive: false },
  },
  {
    feature: "Per-User Pricing",
    kindora: { value: "Affordable flat-rate pricing", positive: true },
    salesforce: { value: "$60–$150+ per user per month", positive: false },
  },
  {
    feature: "Implementation Cost",
    kindora: { value: "Free — self-service", positive: true },
    salesforce: { value: "$10,000–$50,000+ with consultants", positive: false },
  },
  {
    feature: "Learning Curve",
    kindora: { value: "Intuitive — built for nonprofit staff", positive: true },
    salesforce: {
      value: "Steep — requires Salesforce admin",
      positive: false,
    },
  },
];

const salesforceStrengths = [
  "Massive ecosystem of integrations and add-ons",
  "Highly customizable platform for complex workflows",
  "Advanced reporting and analytics",
  "Enterprise-grade security and scalability",
  "Large user community and documentation",
];

const salesforceWeaknesses = [
  "Requires certified Salesforce consultants for setup",
  "Per-user licensing is expensive for growing teams",
  "Weeks to months of implementation before launch",
  "No built-in nonprofit accounting or cost allocation",
  "Volunteer management requires third-party tools",
  "Complex for small teams without a dedicated admin",
];

const kindoraAdvantages = [
  "Everything Salesforce CRM does for nonprofits — without the complexity",
  "Ready in time varies by data and workflow needs with no consultants or training",
  "Built-in nonprofit accounting and cost allocation",
  "One affordable price replaces Salesforce licenses plus add-ons",
];

const whyChooseKindora = [
  {
    title: "No Consultants Needed",
    description:
      "Salesforce requires certified implementation partners costing $10,000–$50,000+. Kindora is designed for nonprofits to set up themselves in time varies by data and workflow needs.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Save Thousands Per Year",
    description:
      "Salesforce charges $60–$150+ per user per month. Kindora offers transparent, flat-rate pricing for nonprofits of all sizes.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Built-In Accounting",
    description:
      "Salesforce doesn't include nonprofit accounting. You need a separate integration. Kindora has it built in with grant cost allocation.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Ready in Minutes",
    description:
      "Salesforce implementation takes weeks or months. Kindora gets your nonprofit running in time varies by data and workflow needs with no training required.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const faqs = [
  {
    question: "What is Salesforce CRM for nonprofits?",
    answer:
      "Salesforce CRM for nonprofits is a version of Salesforce's customer relationship management platform adapted for nonprofit organizations. It includes donor management, fundraising campaigns, volunteer tracking, and reporting — but requires per-user licenses, implementation consultants, and ongoing customization.",
  },
  {
    question: "Is there a better alternative to Salesforce CRM for nonprofits?",
    answer:
      "Yes. Kindora is a purpose-built nonprofit CRM that includes everything Salesforce offers — donor management, campaigns, grant tracking, case management, volunteer tools, and accounting — at a fraction of the cost and setup time. No consultants, no customization, ready in time varies by data and workflow needs.",
  },
  {
    question: "How much does Salesforce CRM for nonprofits cost?",
    answer:
      "Salesforce offers a free Nonprofit Success Pack for up to 10 users, but most nonprofits need paid licenses starting at $60–$150+ per user per month. Implementation typically costs $10,000–$50,000+ with certified consultants, and ongoing maintenance adds to the total cost.",
  },
  {
    question: "Can Kindora replace Salesforce CRM for nonprofits?",
    answer:
      "Absolutely. Kindora includes donor CRM, fundraising campaigns, grant tracking, client case management, volunteer management, nonprofit accounting, and real-time dashboards — all core capabilities of Salesforce CRM for nonprofits, delivered in an affordable, easy-to-use platform.",
  },
  {
    question: "Why do nonprofits choose Salesforce CRM?",
    answer:
      "Nonprofits choose Salesforce CRM for its powerful customization, massive integration ecosystem, and the 10-free-user offer. However, many switch away due to high total cost of ownership, need for certified consultants, long implementation times, and complexity that overwhelms small teams.",
  },
];

export default function SalesforceCrmForNonprofitsPage() {
  return (
    <>
      <Script
        id="salesforce-crm-for-nonprofits-jsonld"
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
                  Salesforce CRM for Nonprofits
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                A{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                  Better CRM
                </span>{" "}
                Than Salesforce for Your Nonprofit
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Salesforce CRM for nonprofits needs consultants, costs thousands
                per year, and takes months to deploy. Kindora gives you donor
                management, campaigns, and reporting — ready in minutes, not
                months.
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
                  "Setup time varies by data and workflows",
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

            {/* Right Visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold text-gray-900">
                    CRM Feature Comparison
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    Side-by-Side
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { feature: "Donor Management", kindora: true, salesforce: true },
                    { feature: "Fundraising Campaigns", kindora: true, salesforce: true },
                    { feature: "Grant Tracking", kindora: true, salesforce: false },
                    { feature: "Case Management", kindora: true, salesforce: true },
                    { feature: "Volunteer Tools", kindora: true, salesforce: false },
                    { feature: "Nonprofit Accounting", kindora: true, salesforce: false },
                    { feature: "Communications", kindora: true, salesforce: false },
                    { feature: "30-Minute Setup", kindora: true, salesforce: false },
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
                          Salesforce
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
                    features · Salesforce:{" "}
                    <span className="font-bold text-gray-400">3/8</span>{" "}
                    features
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Kindora Over Salesforce CRM */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Why Choose Kindora
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Salesforce CRM is powerful. Kindora is practical.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              If your nonprofit doesn&apos;t have a Salesforce admin and a
              six-figure budget — you&apos;re overpaying for complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseKindora.map((reason) => (
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
              Kindora vs Salesforce CRM for Nonprofits — Feature by Feature
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
                    Salesforce CRM
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
                    Salesforce CRM for Nonprofits
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
                    Large nonprofits with dedicated Salesforce admin teams
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
              Switch to Kindora — Free Trial
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
              Common questions when comparing Kindora to Salesforce CRM for
              nonprofits.
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
            Ready to replace Salesforce CRM?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora today. Everything Salesforce CRM for
            nonprofits does — without the complexity, cost, or consultants.
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
            Free Starter plan · No credit card · Setup time varies by data and workflows · See current plan terms on the pricing page
          </p>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
