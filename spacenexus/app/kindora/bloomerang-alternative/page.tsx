import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";
import ComparisonMethodology from "../components/ComparisonMethodology";

export const metadata: Metadata = {
  title: "Bloomerang Alternative | Better Donor Management",
  description:
    "Compare Bloomerang and Kindora for nonprofit donor management. Review donor, grant, volunteer, program, and finance capabilities with official sources.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/bloomerang-alternative",
  },
  openGraph: {
    title: "Bloomerang Alternative",
    description:
      "Compare Bloomerang and Kindora using their published product and pricing information.",
    url: "https://spacenexus.net/kindora/bloomerang-alternative",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora — Bloomerang Alternative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloomerang Alternative",
    description:
      "Compare Bloomerang and Kindora donor, grant, program, and financial workflows.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "bloomerang alternative",
    "bloomerang competitor",
    "alternative to bloomerang",
    "bloomerang vs kindora",
    "bloomerang replacement",
    "donor management software alternative",
    "nonprofit crm alternative",
    "bloomerang pricing",
    "bloomerang vs",
    "best bloomerang alternative",
    "switch from bloomerang",
    "bloomerang vs kindora nonprofit",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Bloomerang Alternative",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "A nonprofit management platform with donor management, grant tracking, client programs, nonprofit financial workflows, and communications.",
      url: "https://spacenexus.net/kindora/bloomerang-alternative",
      offers: {
        "@type": "Offer",
    price: "See vendor current pricing",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan for up to 5 team members; paid plans are custom-quoted",
      },
      featureList: [
        "Donor CRM & tracking",
        "Engagement scoring",
        "Grant lifecycle management",
        "Client case management",
        "Nonprofit accounting",
        "Volunteer management",
        "Campaign tools",
        "Communications hub",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why switch from Bloomerang to Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bloomerang's public product pages describe donor CRM, fundraising, volunteer engagement, supporter communications, reporting, and grant tracking. Kindora's public pages describe donor management alongside grant lifecycle, client-program, and financial workflows. Compare current plans and source pages against your requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora offer the same donor management features as Bloomerang?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both products document donor profiles, giving history, communications, and reporting. Bloomerang also lists grant tracking and volunteer engagement in its public materials. Kindora's public materials describe donor management together with grant lifecycle, client-program, and nonprofit financial workflows. Feature depth and plan availability should be checked with each provider.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kindora compare to Bloomerang on pricing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bloomerang publishes pricing for its products, including CRM pricing based on database contacts and annual billing. Kindora publishes a free Starter tier for up to five team members and custom-priced Professional and Enterprise tiers. These plans use different packaging and pricing models, so compare current quotes and included modules.",
          },
        },
        {
          "@type": "Question",
          name: "What does Bloomerang do that Kindora also does?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bloomerang describes donor insights, constituent profiles, donor groups, automated outreach, email campaigns, and fundraising tools. Kindora describes donor profiles, giving history, communication tracking, and donation analytics. Review both products and test the workflows you rely on before switching.",
          },
        },
        {
          "@type": "Question",
          name: "How do Kindora's broader workflows compare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora's public feature pages describe grant lifecycle management, client programs, nonprofit financial workflows, cost allocation, volunteer tools, and communications. Bloomerang's public pages also list grant tracking and volunteer engagement; the reviewed pages do not establish feature parity for every workflow, so verify your requirements directly.",
          },
        },
        {
          "@type": "Question",
          name: "Can I migrate my data from Bloomerang to Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ask Kindora about supported import formats, migration scope, and assistance before switching. Confirm that donor records, giving history, and any campaign data you need can be transferred.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kindora really better than Bloomerang for nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The right fit depends on your workflows. Bloomerang's published pages describe a donor and fundraising platform with volunteer engagement and grant tracking. Kindora's published pages cover donor, grant, client-program, and financial workflows. Compare the linked plan details and confirm functionality with each vendor.",
          },
        },
      ],
    },
  ],
};

const comparisonRows = [
  {
    feature: "Donor CRM & Tracking",
    kindora: { value: "Donor profiles, giving history, and analytics", positive: true },
    bloomerang: { value: "Donor management, profiles, and donor insights", positive: true },
  },
  {
    feature: "Grant Tracking",
    kindora: { value: "Grant lifecycle tracking", positive: true },
    bloomerang: { value: "Grant tracking is listed; workflow depth may differ", positive: true },
  },
  {
    feature: "Client Case Management",
    kindora: { value: "Full intake, services, and outcomes", positive: true },
    bloomerang: { value: "Not described on reviewed product pages", positive: false },
  },
  {
    feature: "Nonprofit Accounting & Cost Allocation",
    kindora: { value: "Built-in with cost allocation", positive: true },
    bloomerang: { value: "Not described on reviewed product pages", positive: false },
  },
  {
    feature: "Volunteer Management",
    kindora: { value: "Volunteer management tools", positive: true },
    bloomerang: { value: "Volunteer engagement is included in its Giving Platform", positive: true },
  },
  {
    feature: "Email & Supporter Communications",
    kindora: { value: "Email and communication history", positive: true },
    bloomerang: { value: "Email campaigns and automated outreach", positive: true },
  },
  {
    feature: "Campaign Management",
    kindora: { value: "Fundraising campaign tools", positive: true },
    bloomerang: { value: "Fundraising and event tools", positive: true },
  },
  {
    feature: "Reporting & Analytics",
    kindora: { value: "Financial and program analytics", positive: true },
    bloomerang: { value: "Dashboards, donor insights, and campaign reports", positive: true },
  },
  {
    feature: "Published Pricing",
    kindora: { value: "Free Starter (up to 5 users); paid plans custom-priced", positive: true },
    bloomerang: { value: "Consult vendor current pricing; quotes vary by organization and plan.", positive: true },
  },
  {
    feature: "Plan Details",
    kindora: { value: "Modules and user limits listed by plan", positive: true },
    bloomerang: { value: "Product bundles and feature lists published", positive: true },
  },
];

const bloomerangStrengths = [
  "Donor CRM with supporter profiles, giving history, and donor insights",
  "Fundraising tools including donation forms and event management",
  "Volunteer engagement within its Giving Platform",
  "Email campaigns, automated outreach, dashboards, and campaign reporting",
  "Grant tracking is listed among CRM features",
];

const bloomerangWeaknesses = [
  "Its public pages reviewed here do not describe client case management",
  "Its public pages reviewed here do not describe nonprofit accounting or cost allocation",
  "Its grant tracking listing does not establish feature parity with a full grant lifecycle workflow",
];

const kindoraAdvantages = [
  "Donor management documented alongside grant lifecycle workflows",
  "Client program and service tracking documented in the platform",
  "Nonprofit financial management and cost allocation listed in paid plans",
  "Review current plans to determine whether consolidated workflows fit your organization",
];

const whySwitchReasons = [
  {
    title: "More Than Donors",
    description:
      "Bloomerang describes donor, fundraising, volunteer, communication, and grant-tracking capabilities. Kindora's public materials additionally describe client-program and nonprofit financial workflows. Compare scope against your own needs.",
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
  },
  {
    title: "Save Money",
    description:
      "Pricing models and included modules differ. Bloomerang publishes contact-based product pricing; Kindora lists a free Starter tier and custom-priced paid tiers. Compare quotes and the additional tools your team currently uses.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Unified Reporting",
    description:
      "Kindora's public materials describe financial and program reporting alongside donor and grant workflows. Review its reporting pages and confirm that the required outputs match your board and funder needs.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Compare Implementation Needs",
    description:
      "Implementation time depends on data, configuration, and team needs. Ask both vendors about migration support, onboarding, training, and any implementation fees.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const faqs = [
  {
    question: "Why switch from Bloomerang to Kindora?",
    answer:
      "Bloomerang's public product pages describe donor CRM, fundraising, volunteer engagement, supporter communications, reporting, and grant tracking. Kindora's public pages describe donor management alongside grant lifecycle, client-program, and financial workflows. Compare current plans and source pages against your requirements.",
  },
  {
    question:
      "Does Kindora offer the same donor management features as Bloomerang?",
    answer:
      "Both products document donor profiles, giving history, communications, and reporting. Bloomerang also lists grant tracking and volunteer engagement in its public materials. Kindora's public materials describe donor management together with grant lifecycle, client-program, and nonprofit financial workflows. Feature depth and plan availability should be checked with each provider.",
  },
  {
    question: "How does Kindora compare to Bloomerang on pricing?",
    answer:
      "Bloomerang publishes pricing for its products, including CRM pricing based on database contacts and annual billing. Kindora publishes a free Starter tier for up to five team members and custom-priced Professional and Enterprise tiers. These plans use different packaging and pricing models, so compare current quotes and included modules.",
  },
  {
    question: "What does Bloomerang do that Kindora also does?",
    answer:
      "Bloomerang describes donor insights, constituent profiles, donor groups, automated outreach, email campaigns, and fundraising tools. Kindora describes donor profiles, giving history, communication tracking, and donation analytics. Review both products and test the workflows you rely on before switching.",
  },
  {
    question: "How do Kindora's broader workflows compare?",
    answer:
      "Kindora's public feature pages describe grant lifecycle management, client programs, nonprofit financial workflows, cost allocation, volunteer tools, and communications. Bloomerang's public pages also list grant tracking and volunteer engagement; the reviewed pages do not establish feature parity for every workflow, so verify your requirements directly.",
  },
  {
    question: "Can I migrate my data from Bloomerang to Kindora?",
    answer:
      "Ask Kindora about supported import formats, migration scope, and assistance before switching. Confirm that donor records, giving history, and any campaign data you need can be transferred.",
  },
  {
    question: "Is Kindora really better than Bloomerang for nonprofits?",
    answer:
      "The right fit depends on your workflows. Bloomerang's published pages describe a donor and fundraising platform with volunteer engagement and grant tracking. Kindora's published pages cover donor, grant, client-program, and financial workflows. Compare the linked plan details and confirm functionality with each vendor.",
  },
];

export default function BloomerangAlternativePage() {
  return (
    <>
      <Script
        id="bloomerang-alternative-jsonld"
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
                  Bloomerang Alternative
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                  Bloomerang Alternative
                </span>{" "}
                That Does More
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Comparing Bloomerang with Kindora? Both document donor and
                  fundraising workflows. Bloomerang also lists grant tracking
                  and volunteer engagement; Kindora brings together donor,
                  grant, client-program, and financial workflows. Review current
                  plans and feature details to find the fit for your organization.
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
                  "Compare published features",
                  "Explore product details",
                  "Choose based on your needs",
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
                    { feature: "Donor CRM", kindora: true, bloomerang: true },
                    { feature: "Grant Tracking", kindora: true, bloomerang: true },
                    { feature: "Case Management", kindora: true, bloomerang: false },
                    { feature: "Nonprofit Accounting", kindora: true, bloomerang: false },
                    { feature: "Volunteer Tools", kindora: true, bloomerang: true },
                    { feature: "Campaign Tools", kindora: true, bloomerang: true },
                    { feature: "Communications", kindora: true, bloomerang: true },
                    { feature: "Reporting", kindora: true, bloomerang: true },
                  ].map((row) => (
                    <div
                      key={row.feature}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {row.feature}
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-500 w-16 text-right">
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
                        <span className="text-xs text-gray-500 w-20 text-right">
                          Bloomerang
                        </span>
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${row.bloomerang ? "bg-green-100 text-green-600" : "bg-red-100 text-red-400"}`}
                        >
                          {row.bloomerang ? (
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
                    Marks reflect features documented on reviewed public pages;
                    a missing mark does not establish that a product lacks a
                    capability.
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
              Compare donor tools with broader nonprofit workflows
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Both platforms document donor and fundraising workflows.
              Kindora&apos;s public materials also cover client programs and
              nonprofit financial management; check each product&apos;s scope
              against your needs.
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
              Kindora vs Bloomerang — Feature by Feature
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
                        Kindora
                      </span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[140px]">
                    Bloomerang
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
                      {row.bloomerang.positive ? (
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
                        {row.bloomerang.value}
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
                        Not described in reviewed sources
                      </span>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Side by Side Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Bloomerang Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white font-bold text-sm">
                  B
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Bloomerang</h3>
                  <p className="text-xs font-semibold text-gray-500">
                    What they do well
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {bloomerangStrengths.map((s) => (
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
                  {bloomerangWeaknesses.map((w) => (
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
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider w-24 shrink-0 mt-0.5">
                    Bloomerang best for:
                  </span>
                  <span className="text-sm text-gray-600">
                    Organizations that only do fundraising
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider w-24 shrink-0 mt-0.5">
                    Kindora best for:
                  </span>
                  <span className="text-sm text-gray-800 font-medium">
                    Nonprofits that also manage grants, programs, or social
                    services
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
              Common questions when comparing Kindora to Bloomerang.
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
                    className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
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

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Compare product details and explore Kindora features
          </h2>
          <p className="text-gray-600 mb-6">
            Comparison notes reflect information on the public pages below,
            reviewed September 17, 2026. A feature not described on a reviewed
            page should not be read as proof that the product lacks it. Confirm
            plan availability and workflow details directly with each provider.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-8 text-blue-700">
            <li>
              <a href="https://bloomerang.com/crm" target="_blank" rel="noopener noreferrer" className="underline">
                Bloomerang CRM product page
              </a>
            </li>
            <li>
              <a href="https://bloomerang.com/pricing" target="_blank" rel="noopener noreferrer" className="underline">
                Bloomerang pricing and Giving Platform details
              </a>
            </li>
            <li>
              <Link href="/kindora/pricing" className="underline">
                Kindora plan details
              </Link>
            </li>
          </ul>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Explore Kindora&apos;s relevant nonprofit workflows
          </h3>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <Link href="/kindora/features/donor-management" className="text-blue-700 underline">Donor management</Link>
            <Link href="/kindora/features/grant-management" className="text-blue-700 underline">Grant management</Link>
            <Link href="/kindora/features/client-management" className="text-blue-700 underline">Client and program management</Link>
            <Link href="/kindora/features/financials" className="text-blue-700 underline">Financial management</Link>
            <Link href="/kindora/features/people-management" className="text-blue-700 underline">People and volunteer management</Link>
            <Link href="/kindora/features/reporting" className="text-blue-700 underline">Reporting</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            See whether Kindora fits your nonprofit
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Review Kindora&apos;s donor, grant, client-program, and financial
            workflows, then compare them with your organization&apos;s
            requirements.
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
            Review plan details and confirm current feature availability with
            each provider.
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
