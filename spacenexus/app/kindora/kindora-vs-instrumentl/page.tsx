import { Fragment } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";
import ComparisonMethodology from "../components/ComparisonMethodology";

export const metadata: Metadata = {
  title: "Kindora vs Instrumentl | Nonprofit Software Comparison",
  description:
    "Compare Instrumentl's grant research and lifecycle plans with Kindora's broader nonprofit operations workflows, using published product details.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/kindora-vs-instrumentl",
  },
  openGraph: {
    title: "Kindora vs Instrumentl — Nonprofit Software Comparison",
    description:
      "Compare grant research, grant workflows, donor management, program operations, and financial workflows.",
    url: "https://spacenexus.net/kindora/kindora-vs-instrumentl",
    siteName: "Kindora",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora/og-card.png",
        width: 1200,
        height: 630,
        alt: "Kindora vs Instrumentl Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindora vs Instrumentl — Nonprofit Software Comparison",
    description:
      "Which is right for your nonprofit? See how Kindora and Instrumentl compare across grant discovery, tracking, and nonprofit operations.",
    images: ["https://spacenexus.net/kindora/og-card.png"],
  },
  keywords: [
    "kindora vs instrumentl",
    "instrumentl vs kindora",
    "kindora instrumentl comparison",
    "instrumentl alternative",
    "nonprofit grant software comparison",
    "instrumentl review",
    "grant discovery software",
    "grant tracking software comparison",
    "kindora grant management",
    "instrumentl pricing vs kindora",
    "nonprofit software comparison",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Nonprofit Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Nonprofit operations software with donor management, grant tracking, client-program workflows, and financial management.",
      url: "https://spacenexus.net/kindora/kindora-vs-instrumentl",
      offers: {
        "@type": "Offer",
    price: "See vendor current pricing",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan for up to 5 team members; paid plans are custom-quoted",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is better, Kindora or Instrumentl?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They serve different needs. Instrumentl's published plans cover grant research and application workflows, with selected plan-dependent post-award spend tracking and accounting integrations. Kindora's public pages describe donor, grant, client-program, and financial workflows. Choose based on whether grant discovery, broader nonprofit operations, or both matter to your team.",
          },
        },
        {
          "@type": "Question",
          name: "Is Instrumentl the same as Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Instrumentl's published plans focus on grant research and lifecycle work, while Kindora's published pages describe broader nonprofit operations. Compare the current plan details and confirm the workflows you need with both providers.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use Instrumentl with Kindora together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Potentially. An organization may use Instrumentl for grant research and discovery and Kindora for broader donor, program, grant-record, and financial workflows. Confirm integration options and account for any duplicate data entry before choosing a two-product setup.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora have grant discovery like Instrumentl?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora's grant management feature describes grant tracking and lifecycle workflows, not a funder-discovery database equivalent to Instrumentl's. Organizations that depend on grant prospect research should verify that need before choosing Kindora as a replacement.",
          },
        },
        {
          "@type": "Question",
          name: "What does Kindora do that Instrumentl doesn't?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora's public feature pages describe donor management, client-program workflows, financial management, and reporting alongside grant tracking. Instrumentl's pricing page also describes plan-dependent post-award spend tracking and accounting integrations. Confirm exact feature coverage and integrations with both providers.",
          },
        },
      ],
    },
  ],
};

type FeatureValue = boolean | "partial";

const comparisonFeatures: {
  category: string;
  features: { name: string; kindora: FeatureValue; instrumentl: FeatureValue }[];
}[] = [
  {
    category: "Grant Management",
    features: [
      { name: "Grant Discovery (Find Funders)", kindora: "partial", instrumentl: true },
      { name: "Grant Lifecycle Tracking", kindora: true, instrumentl: true },
      { name: "Application & Pipeline Management", kindora: true, instrumentl: true },
      { name: "Grant Receipts & Deadlines", kindora: true, instrumentl: true },
      { name: "Post-Award Spend Tracking", kindora: true, instrumentl: true },
      { name: "Grant Compliance Reporting", kindora: true, instrumentl: "partial" },
      { name: "Grantor Relationship Management", kindora: true, instrumentl: "partial" },
      { name: "Cost Allocation Across Grants", kindora: true, instrumentl: false },
    ],
  },
  {
    category: "Donor Management",
    features: [
      { name: "Donor Profiles & CRM", kindora: true, instrumentl: false },
      { name: "Giving History Tracking", kindora: true, instrumentl: false },
      { name: "Recurring Donations", kindora: true, instrumentl: false },
      { name: "Fundraising Campaigns", kindora: true, instrumentl: false },
      { name: "Donor Segmentation", kindora: true, instrumentl: false },
      { name: "Email & Communications", kindora: true, instrumentl: false },
    ],
  },
  {
    category: "Fundraising",
    features: [
      { name: "Online Donation Forms", kindora: true, instrumentl: false },
      { name: "Campaign Management", kindora: true, instrumentl: false },
      { name: "Event Management", kindora: true, instrumentl: false },
      { name: "Text-to-Give", kindora: true, instrumentl: false },
    ],
  },
  {
    category: "Case Management",
    features: [
      { name: "Client Intake & Enrollment", kindora: true, instrumentl: false },
      { name: "Service Delivery Tracking", kindora: true, instrumentl: false },
      { name: "Outcome Measurement", kindora: true, instrumentl: false },
      { name: "Program Reporting", kindora: true, instrumentl: false },
    ],
  },
  {
    category: "Financial Management",
    features: [
      { name: "Native Nonprofit Accounting", kindora: true, instrumentl: false },
      { name: "Cost Allocation", kindora: true, instrumentl: false },
      { name: "Chart of Accounts & Budgets", kindora: true, instrumentl: false },
      { name: "Expense & Bill Management", kindora: true, instrumentl: false },
      { name: "Board Financial Reports", kindora: true, instrumentl: false },
    ],
  },
  {
    category: "People & Operations",
    features: [
      { name: "Volunteer Management", kindora: true, instrumentl: false },
      { name: "Employee Management", kindora: true, instrumentl: false },
      { name: "Communications Hub", kindora: true, instrumentl: false },
      { name: "File Attachments & Documents", kindora: true, instrumentl: true },
    ],
  },
  {
    category: "Reporting & Analytics",
    features: [
      { name: "Grant-Specific Reports", kindora: true, instrumentl: true },
      { name: "Financial Reports", kindora: true, instrumentl: false },
      { name: "Program Impact Reports", kindora: true, instrumentl: false },
      { name: "Donor & Fundraising Reports", kindora: true, instrumentl: false },
      { name: "Export to PDF & Excel", kindora: true, instrumentl: true },
    ],
  },
  {
    category: "Usability & Support",
    features: [
      { name: "Simple Setup (No Consultants)", kindora: true, instrumentl: true },
      { name: "Role-Based Access Control", kindora: true, instrumentl: true },
      { name: "Priced for Small to Mid-sized Nonprofits", kindora: true, instrumentl: "partial" },
      { name: "Plan Includes Grant Research and Discovery", kindora: "partial", instrumentl: true },
    ],
  },
];

function FeatureCheckKindora({ value }: { value: FeatureValue }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2563eb] text-white">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100 text-yellow-600">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-400">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );
}

function FeatureCheckInstrumentl({ value }: { value: FeatureValue }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100 text-yellow-600">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-400">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );
}

const totalFeatures = comparisonFeatures.reduce(
  (acc, cat) => acc + cat.features.length,
  0
);

const faqs = [
  {
    question: "Which is better, Kindora or Instrumentl?",
    answer:
      "They serve different needs. Instrumentl's published plans cover grant research and application workflows, with selected plan-dependent post-award spend tracking and accounting integrations. Kindora's public pages describe donor, grant, client-program, and financial workflows. Choose based on whether grant discovery, broader nonprofit operations, or both matter to your team.",
  },
  {
    question: "Is Instrumentl the same as Kindora?",
    answer:
      "No. Instrumentl's published plans focus on grant research and lifecycle work, while Kindora's published pages describe broader nonprofit operations. Compare the current plan details and confirm the workflows you need with both providers.",
  },
  {
    question: "Can I use Instrumentl with Kindora together?",
    answer:
      "Potentially. An organization may use Instrumentl for grant research and discovery and Kindora for broader donor, program, grant-record, and financial workflows. Confirm integration options and account for any duplicate data entry before choosing a two-product setup.",
  },
  {
    question: "Does Kindora have grant discovery like Instrumentl?",
    answer:
      "Kindora's grant management feature describes grant tracking and lifecycle workflows, not a funder-discovery database equivalent to Instrumentl's. Organizations that depend on grant prospect research should verify that need before choosing Kindora as a replacement.",
  },
  {
    question: "What does Kindora do that Instrumentl doesn't?",
    answer:
      "Kindora's public feature pages describe donor management, client-program workflows, financial management, and reporting alongside grant tracking. Instrumentl's pricing page also describes plan-dependent post-award spend tracking and accounting integrations. Confirm exact feature coverage and integrations with both providers.",
  },
];

export default function KindoraVsInstrumentlPage() {
  return (
    <>
      <Script
        id="vs-instrumentl-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4ff] to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#2563eb]/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Head-to-Head Comparison
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Kindora vs Instrumentl
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            A practical comparison of Instrumentl&apos;s grant research and
            lifecycle plans with Kindora&apos;s broader nonprofit workflows.{" "}
            <strong className="text-gray-900">
              See which one is right for your organization.
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Try Kindora Free
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/kindora/demo"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Product scope summary */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl border-2 border-[#2563eb] bg-blue-50/50">
              <div className="text-2xl font-bold text-[#2563eb] mb-2">Kindora</div>
              <div className="text-sm text-gray-600 mt-1">Donor, grant, client-program, and financial workflows</div>
            </div>
            <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50">
              <div className="text-2xl font-bold text-gray-900 mb-2">Instrumentl</div>
              <div className="text-sm text-gray-600 mt-1">Grant research and lifecycle plans with tier-dependent workflows</div>
            </div>
            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <div className="text-2xl font-bold text-green-700 mb-2">Choose by workflow</div>
              <div className="text-sm text-gray-600 mt-1">Some nonprofits may use a discovery tool alongside broader operations software</div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Comparison Table */}
      <section className="py-20 lg:py-28 bg-gray-50" id="comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Full Feature Comparison
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Published feature coverage, side by side
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {totalFeatures} workflow areas across {comparisonFeatures.length} categories.
              A feature not listed below is not proof that a product lacks it.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-5 text-gray-500 font-medium bg-gray-50 min-w-[250px]">
                    Feature
                  </th>
                  <th className="px-6 py-5 bg-[#2563eb] text-white font-bold text-center min-w-[140px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-5 bg-gray-50 text-gray-600 font-semibold text-center min-w-[140px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Specialist</span>
                      <span className="text-base">Instrumentl</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((cat) => (
                  <Fragment key={cat.category}>
                    <tr className="bg-gray-100 border-b border-gray-200">
                      <td colSpan={3} className="px-6 py-3 text-xs font-bold text-gray-600 uppercase tracking-wider">
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((feature, fi) => (
                      <tr
                        key={feature.name}
                        className={`border-b border-gray-100 ${fi % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
                      >
                        <td className="px-6 py-3.5 text-gray-700 font-medium pl-10">
                          {feature.name}
                        </td>
                        <td className="px-6 py-3.5 text-center bg-blue-50/50">
                          <FeatureCheckKindora value={feature.kindora} />
                        </td>
                        <td className="px-6 py-3.5 text-center">
                          <FeatureCheckInstrumentl value={feature.instrumentl} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 border-t border-gray-200">
                  <td className="px-6 py-3" />
                  <td className="px-6 py-3 text-center bg-blue-50/60">
                    <a
                      href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 text-xs font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-colors"
                    >
                      Try Free
                    </a>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <a href="https://www.instrumentl.com/pricing" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-700 underline">
                      View Instrumentl plans
                    </a>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#2563eb] text-white">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </span>
              Capability documented
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-100 text-yellow-600">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" /></svg>
              </span>
              Plan-dependent or partial
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-400">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </span>
              Not listed in reviewed plan details
            </span>
          </div>
          <p className="mt-5 text-center text-xs leading-relaxed text-gray-500">
            Comparison based on Kindora feature pages and Instrumentl&apos;s
            published pricing page, reviewed September 17, 2026. Verify current
            plan availability and workflow details with each provider.
          </p>
        </div>
      </section>

      {/* Side by Side Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              At a Glance
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Strengths & Limitations
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Instrumentl Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white font-bold text-sm">In</div>
                <div>
                  <h3 className="font-bold text-gray-900">Instrumentl</h3>
                  <p className="text-xs font-semibold text-gray-500">What they do well</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Grant research and discovery",
                  "Grant application and pre-award workflows",
                  "Post-award spend tracking on the Full Lifecycle plan",
                  "Accounting integrations and other features vary by plan",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 pt-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Questions to verify</p>
                <ul className="space-y-2.5">
                  {[
                    "Which tier includes the grant and post-award workflows you need?",
                    "Does your team need a broader nonprofit operations platform as well?",
                    "Check accounting integrations and data flow with your existing ledger",
                    "Confirm whether donor, client-program, and volunteer workflows fit your current tools",
                  ].map((w) => (
                    <li key={w} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-red-100 text-red-400 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
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
                <div className="w-10 h-10 rounded-xl bg-[#2563eb] flex items-center justify-center text-white font-bold text-sm">K</div>
                <div>
                  <h3 className="font-bold text-gray-900">Kindora</h3>
                  <p className="text-xs font-semibold text-[#2563eb]">Documented workflow areas</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Donor management and fundraising workflows",
                  "Grant tracking and grant lifecycle workflows",
                  "Client and program management",
                  "Nonprofit financial management and cost allocation",
                  "Reporting across documented product workflows",
                ].map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-5 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider w-24 shrink-0 mt-0.5">Instrumentl best for:</span>
                  <span className="text-sm text-gray-600">Teams prioritizing grant research and funder discovery, after verifying the tier-specific workflows they need</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider w-24 shrink-0 mt-0.5">Kindora best for:</span>
                  <span className="text-sm text-gray-800 font-medium">Nonprofits comparing grant workflows with broader donor, client-program, and financial operations</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Kindora Starter — Free plan
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions when comparing Kindora to Instrumentl.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="text-base font-semibold text-gray-900">{faq.question}</span>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to see the difference?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Review Kindora&apos;s grant, donor, program, and financial workflows,
            then compare them with your organization&apos;s requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Start Free — No Credit Card Required
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-[#2563eb] transition-colors"
            >
              View Pricing
            </Link>
            <Link
              href="/kindora/instrumentl-alternative"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-[#2563eb] transition-colors"
            >
              Read the Instrumentl alternative guide
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Compare current plans and confirm feature availability with each provider.
          </p>

          {/* Last Updated */}
          <div className="py-6 text-center border-t border-gray-100 mt-8">
            <ComparisonMethodology />
            <LastUpdated date="2026-11-26" />
          </div>
        </div>
      </section>
    </>
  );
}
