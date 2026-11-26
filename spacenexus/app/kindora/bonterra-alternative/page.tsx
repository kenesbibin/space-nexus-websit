import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";
import ComparisonMethodology from "../components/ComparisonMethodology";

export const metadata: Metadata = {
  title: "Bonterra Alternative | Better Case & Donor Management",
  description:
    "Looking for a Bonterra alternative? Kindora offers everything Bonterra Apricot does for case management — plus donor CRM, grant tracking, nonprofit accounting, and more. Try it free.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/bonterra-alternative",
  },
  openGraph: {
    title: "Bonterra Alternative",
    description:
      "Kindora offers everything Bonterra does for case management — plus donor CRM, grant tracking, and nonprofit accounting. The all-in-one alternative.",
    url: "https://spacenexus.net/kindora/bonterra-alternative",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora — Bonterra Alternative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonterra Alternative",
    description:
      "Everything Bonterra does for case management — plus donor CRM, grants, accounting, and volunteers. Try Kindora free.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "bonterra alternative",
    "bonterra competitor",
    "alternative to bonterra",
    "bonterra vs kindora",
    "bonterra replacement",
    "bonterra apricot alternative",
    "case management software alternative",
    "nonprofit crm alternative",
    "bonterra pricing",
    "bonterra vs",
    "best bonterra alternative",
    "switch from bonterra",
    "bonterra apricot vs kindora",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Bonterra Alternative",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "The all-in-one Bonterra alternative. Everything Bonterra does for case management — plus donor CRM, grant tracking, nonprofit accounting, and volunteer management.",
      url: "https://spacenexus.net/kindora/bonterra-alternative",
      offers: {
        "@type": "Offer",
    price: "See vendor current pricing",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan for up to 5 team members; paid plans are custom-quoted",
      },
      featureList: [
        "Donor CRM & tracking",
        "Client case management",
        "Grant lifecycle management",
        "Nonprofit accounting",
        "Volunteer management",
        "Campaign tools",
        "Communications hub",
        "Outcome tracking",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why switch from Bonterra to Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bonterra Apricot is strong for case management, but it lacks donor CRM, grant tracking, and nonprofit accounting. If you also fundraise or manage grants, you'll end up paying for multiple tools. Kindora does all of that in one platform at an affordable price.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora offer the same case management features as Bonterra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora includes client intake, service delivery tracking, outcome measurement, and program reporting — everything Bonterra Apricot offers for case management. Plus Kindora adds donor CRM, grant management, accounting, and volunteer tools that Bonterra doesn't have.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kindora compare to Bonterra on pricing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora is priced for small to mid-sized nonprofits and includes features that would require separate tools (and separate subscriptions) with Bonterra. You get more for less — no need to budget for additional donor, grant, or accounting software.",
          },
        },
        {
          "@type": "Question",
          name: "What does Bonterra do that Kindora also does?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bonterra's strengths — case management, intake forms, outcome tracking, and program reporting — are all included in Kindora. You won't lose any case management functionality by switching.",
          },
        },
        {
          "@type": "Question",
          name: "What does Kindora do that Bonterra doesn't?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora adds donor CRM with engagement scoring, grant lifecycle management, nonprofit accounting with cost allocation, volunteer management, and a built-in communications hub. These are features Bonterra simply doesn't offer.",
          },
        },
        {
          "@type": "Question",
          name: "Can I migrate my data from Bonterra to Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora supports data import from Bonterra and other case management platforms. Our team can help you migrate your client records, program data, and outcome measurements smoothly.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kindora really better than Bonterra for nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you only do case management, Bonterra Apricot is fine. If you also fundraise, manage grants, or need nonprofit accounting, Kindora is the better choice — it replaces 3–4 tools with one affordable platform.",
          },
        },
      ],
    },
  ],
};

const comparisonRows = [
  {
    feature: "Client Case Management",
    kindora: { value: "Full intake, services, and outcomes", positive: true },
    bonterra: { value: "Strong case management focus", positive: true },
  },
  {
    feature: "Donor CRM & Tracking",
    kindora: { value: "Full CRM with engagement scoring", positive: true },
    bonterra: { value: "Basic donor tracking (CiviCore)", positive: false },
  },
  {
    feature: "Grant Lifecycle Management",
    kindora: { value: "Full grant tracking from prospect to award", positive: true },
    bonterra: { value: "Not available", positive: false },
  },
  {
    feature: "Nonprofit Accounting",
    kindora: { value: "Built-in with cost allocation", positive: true },
    bonterra: { value: "Not available", positive: false },
  },
  {
    feature: "Volunteer Management",
    kindora: { value: "Hours, scheduling, and recognition", positive: true },
    bonterra: { value: "Not available", positive: false },
  },
  {
    feature: "Communications Hub",
    kindora: { value: "Built-in email and bulk messaging", positive: true },
    bonterra: { value: "Limited — requires integrations", positive: false },
  },
  {
    feature: "Campaign Management",
    kindora: { value: "Full campaign creation and tracking", positive: true },
    bonterra: { value: "Basic fundraising tools", positive: false },
  },
  {
    feature: "Outcome Tracking",
    kindora: { value: "Program outcomes with dashboards", positive: true },
    bonterra: { value: "Strong outcome reporting", positive: true },
  },
  {
    feature: "Affordable for Small Nonprofits",
    kindora: { value: "Yes — priced for small nonprofits", positive: true },
    bonterra: { value: "Expensive for small teams", positive: false },
  },
  {
    feature: "Ready in Minutes",
    kindora: { value: "Yes — no consultants needed", positive: true },
    bonterra: { value: "Requires implementation support", positive: false },
  },
];

const bonterraStrengths = [
  "Purpose-built for social services case management",
  "Strong outcome tracking and program reporting",
  "Configurable intake forms and workflows",
  "Good for human services organizations",
];

const bonterraWeaknesses = [
  "No donor CRM or fundraising tools",
  "No grant lifecycle management",
  "No nonprofit accounting or cost allocation",
  "Expensive for small nonprofits",
  "Requires separate tools for donor management",
];

const kindoraAdvantages = [
  "Full case management AND donor CRM in one platform",
  "Track clients AND funders without switching tools",
  "Grant management connects directly to program delivery",
  "One platform replaces 3–4 tools",
];

const whySwitchReasons = [
  {
    title: "More Than Case Management",
    description:
      "Bonterra only handles case management. If you also fundraise, manage grants, or need accounting, you'll need multiple tools. Kindora does it all.",
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
  },
  {
    title: "Save Money",
    description:
      "Stop paying for Bonterra plus a donor CRM, a grant tracker, and an accounting tool. One Kindora subscription replaces all of them.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Unified Reporting",
    description:
      "Generate board reports, grant compliance documents, and financial statements from one platform — no more stitching data from multiple tools.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "No Consultants Required",
    description:
      "Bonterra requires implementation support. Kindora Starter signup is self-service; confirm implementation scope with sales.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const faqs = [
  {
    question: "Why switch from Bonterra to Kindora?",
    answer:
      "Bonterra Apricot is strong for case management, but it lacks donor CRM, grant tracking, and nonprofit accounting. If you also fundraise or manage grants, you'll end up paying for multiple tools. Kindora does all of that in one platform at an affordable price.",
  },
  {
    question:
      "Does Kindora offer the same case management features as Bonterra?",
    answer:
      "Yes. Kindora includes client intake, service delivery tracking, outcome measurement, and program reporting — everything Bonterra Apricot offers for case management. Plus Kindora adds donor CRM, grant management, accounting, and volunteer tools that Bonterra doesn't have.",
  },
  {
    question: "How does Kindora compare to Bonterra on pricing?",
    answer:
      "Kindora is priced for small to mid-sized nonprofits and includes features that would require separate tools (and separate subscriptions) with Bonterra. You get more for less — no need to budget for additional donor, grant, or accounting software.",
  },
  {
    question: "What does Bonterra do that Kindora also does?",
    answer:
      "Bonterra's strengths — case management, intake forms, outcome tracking, and program reporting — are all included in Kindora. You won't lose any case management functionality by switching.",
  },
  {
    question: "What does Kindora do that Bonterra doesn't?",
    answer:
      "Kindora adds donor CRM with engagement scoring, grant lifecycle management, nonprofit accounting with cost allocation, volunteer management, and a built-in communications hub. These are features Bonterra simply doesn't offer.",
  },
  {
    question: "Can I migrate my data from Bonterra to Kindora?",
    answer:
      "Yes. Kindora supports data import from Bonterra and other case management platforms. Our team can help you migrate your client records, program data, and outcome measurements smoothly.",
  },
  {
    question: "Is Kindora really better than Bonterra for nonprofits?",
    answer:
      "If you only do case management, Bonterra Apricot is fine. If you also fundraise, manage grants, or need nonprofit accounting, Kindora is the better choice — it replaces 3–4 tools with one affordable platform.",
  },
];

export default function BonterraAlternativePage() {
  return (
    <>
      <Script
        id="bonterra-alternative-jsonld"
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
                  Bonterra Alternative
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                  Bonterra Alternative
                </span>{" "}
                That Does More
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Bonterra Apricot is great for case management — but that&apos;s
                all it does well. If you also fundraise, manage grants, or need
                nonprofit accounting, you&apos;ll end up paying for 3–4 separate
                tools. Kindora does everything in one affordable platform.
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
                    { feature: "Case Management", kindora: true, bonterra: true },
                    { feature: "Donor CRM", kindora: true, bonterra: false },
                    { feature: "Grant Tracking", kindora: true, bonterra: false },
                    { feature: "Nonprofit Accounting", kindora: true, bonterra: false },
                    { feature: "Volunteer Tools", kindora: true, bonterra: false },
                    { feature: "Outcome Tracking", kindora: true, bonterra: true },
                    { feature: "Communications", kindora: true, bonterra: false },
                    { feature: "Board Reports", kindora: true, bonterra: false },
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
                          Bonterra
                        </span>
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${row.bonterra ? "bg-green-100 text-green-600" : "bg-red-100 text-red-400"}`}
                        >
                          {row.bonterra ? (
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
                    features · Bonterra:{" "}
                    <span className="font-bold text-gray-500">2/8</span>{" "}
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
              Bonterra is great for case management. Kindora does cases +
              everything else.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              If your nonprofit also fundraises, manages grants, or needs
              accounting — you&apos;re outgrowing Bonterra.
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
              Kindora vs Bonterra — Feature by Feature
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
                    Bonterra
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
                      {row.bonterra.positive ? (
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
                        {row.bonterra.value}
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
            {/* Bonterra Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                  B
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Bonterra</h3>
                  <p className="text-xs font-semibold text-gray-500">
                    What they do well
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {bonterraStrengths.map((s) => (
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
                  {bonterraWeaknesses.map((w) => (
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
                    Bonterra best for:
                  </span>
                  <span className="text-sm text-gray-600">
                    Organizations that only need case management
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider w-24 shrink-0 mt-0.5">
                    Kindora best for:
                  </span>
                  <span className="text-sm text-gray-800 font-medium">
                    Nonprofits that also fundraise, manage grants, or need
                    accounting
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
              Common questions when comparing Kindora to Bonterra.
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to switch from Bonterra?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora today. Everything Bonterra does for case
            management — plus donor CRM, grants, accounting, and more.
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
