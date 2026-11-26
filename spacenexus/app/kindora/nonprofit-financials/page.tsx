import { createKindoraServiceSchema } from "../components/commercial-schema";
import Link from "next/link";
import AnswerReadyBlock from "../components/AnswerReadyBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nonprofit Financial Management Software | Kindora",
  description:
    "Financial management platform for nonprofits: budget tracking, expense management, financial reporting, cost allocation, and audit-ready records. Built for nonprofit accounting needs.",
  keywords: [
    "nonprofit financial management",
    "nonprofit accounting software",
    "nonprofit budget management",
    "cost allocation software",
    "nonprofit financial reporting",
    "nonprofit expense management",
    "board reporting software",
  ],
  alternates: {
    canonical: "/kindora/nonprofit-financials",
  },
  openGraph: {
    title: "Nonprofit Financial Management Software | Kindora",
    description:
      "Financial management platform for nonprofits: budget tracking, expense management, financial reporting, and cost allocation in one place.",
    url: "https://spacenexus.net/kindora/nonprofit-financials",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    createKindoraServiceSchema({ name: "Kindora Nonprofit Financial Management Service", description: "Financial management platform for nonprofits: budget tracking, expense management, financial reporting, cost allocation, and audit-ready records. Built for nonprofit accounting needs.", category: "Nonprofit financial management", url: "https://spacenexus.net/kindora/nonprofit-financials" }),
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How is nonprofit financial management different from regular accounting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nonprofits use fund accounting to track restricted vs. unrestricted funds, must allocate costs across programs for grant reporting, and need to demonstrate fiscal compliance to funders and board members. Kindora is built specifically for these requirements rather than adapting for-profit accounting software.",
          },
        },
        {
          "@type": "Question",
          name: "Can Kindora generate audit-ready financial statements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora generates statement of activities, statement of financial position, cash flow statements, and functional expense allocations that meet GAAP and audit requirements. All transactions maintain a complete audit trail with supporting documentation.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora integrate with QuickBooks or other accounting tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora includes API access for integration with accounting platforms. The platform also serves as a complete financial management solution, reducing the need for separate accounting software by handling fund accounting, cost allocation, and financial reporting natively.",
          },
        },
      ],
    },
  ],
};

const features = [
  {
    title: "Budget Management",
    description: "Create and manage program and organizational budgets. Track actual vs. budgeted spending in real-time with variance alerts.",
    href: "/kindora/budget-management-software",
  },
  {
    title: "Expense Management",
    description: "Track expenses by program, grant, and funding source. Automate approval workflows and maintain complete audit trails.",
    href: "/kindora/expense-management-software",
  },
  {
    title: "Financial Reporting",
    description: "Generate statement of activities, statement of financial position, and program-specific financial reports from live data.",
    href: "/kindora/financial-reporting-software",
  },
  {
    title: "Cost Allocation",
    description: "Automatically allocate shared costs across programs and grants. Support for direct and indirect cost pools with customizable allocation methodologies.",
    href: "/kindora/cost-allocation-software",
  },
  {
    title: "Board Reporting",
    description: "Prepare board-ready financial packages with dashboards, trend analysis, and program-level financial summaries.",
    href: "/kindora/board-reporting-software",
  },
  {
    title: "Nonprofit Financial Management",
    description: "Complete fund accounting platform designed for nonprofit financial operations, compliance, and audit preparation.",
    href: "/kindora/nonprofit-financial-management-software",
  },
];

const relatedPages = [
  { title: "Nonprofit Financial Management Software", href: "/kindora/nonprofit-financial-management-software" },
  { title: "Budget Management Software", href: "/kindora/budget-management-software" },
  { title: "Expense Management Software", href: "/kindora/expense-management-software" },
  { title: "Financial Reporting Software", href: "/kindora/financial-reporting-software" },
  { title: "Cost Allocation Software", href: "/kindora/cost-allocation-software" },
  { title: "Board Reporting Software", href: "/kindora/board-reporting-software" },
  { title: "Nonprofit Reporting Software", href: "/kindora/nonprofit-reporting-software" },
  { title: "Nonprofit Dashboard Software", href: "/kindora/nonprofit-dashboard-software" },
];

export default function NonprofitFinancialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-teal-50 to-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nonprofit Financial Management Software
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              Kindora&apos;s financial management platform handles nonprofit finance workflows such as fund tracking, cost allocation across programs and grants, budget monitoring, and financial reporting. Replace disconnected accounting tools with a unified system designed for nonprofit finance teams.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kindora/pricing" className="bg-[#2563eb] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors">
                View pricing
              </Link>
              <Link href="/kindora/demo" className="bg-white text-[#2563eb] border-2 border-[#2563eb] px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Request a demo
              </Link>
            </div>
          </div>
        </section>

      <AnswerReadyBlock page="financial" />

        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Nonprofit Financial Management Matters</h2>
            <p className="text-gray-600 mb-12 max-w-3xl">
              Nonprofit financial management is fundamentally different from for-profit accounting. Nonprofits must track funds by restricted and unrestricted categories, allocate costs across programs and grants, and produce financial reports that meet both GAAP and grantor requirements.
            </p>
            <p className="text-gray-600 mb-12 max-w-3xl">
              Kindora is designed for these workflows. Budget management, expense tracking, cost allocation, and financial reporting are integrated with program and grant data, so teams can review their nonprofit&apos;s operations in one place.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((f) => (
                <Link key={f.href} href={f.href} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-[#2563eb] hover:shadow-md transition-all">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.description}</p>
                  <span className="text-[#2563eb] text-sm font-medium mt-2 inline-block">Learn more &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPages.map((p) => (
                <Link key={p.href} href={p.href} className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-[#2563eb] transition-colors">
                  <span className="text-[#2563eb] font-medium">{p.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How is nonprofit financial management different from regular accounting?</h3>
                <p className="text-gray-600">Nonprofits use fund accounting to track restricted vs. unrestricted funds, must allocate costs across programs for grant reporting, and need to demonstrate fiscal compliance to funders and board members. Kindora is built specifically for these requirements rather than adapting for-profit accounting software.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can Kindora generate audit-ready financial statements?</h3>
                <p className="text-gray-600">Yes. Kindora generates statement of activities, statement of financial position, cash flow statements, and functional expense allocations that meet GAAP and audit requirements. All transactions maintain a complete audit trail with supporting documentation.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Does Kindora integrate with QuickBooks or other accounting tools?</h3>
                <p className="text-gray-600">Kindora includes API access for integration with accounting platforms. The platform also serves as a complete financial management solution, reducing the need for separate accounting software by handling fund accounting, cost allocation, and financial reporting natively.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-[#2563eb] text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Simplify your financial management</h2>
            <p className="text-blue-100 mb-6">Start your free Starter plan today. No credit card required.</p>
            <Link href="/kindora/demo" className="inline-block bg-white text-[#2563eb] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get started free
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
