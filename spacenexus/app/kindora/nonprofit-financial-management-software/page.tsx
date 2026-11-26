import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Nonprofit Financial Management Software | Nonprofit Accounting",
  description:
    "Kindora nonprofit financial management software — chart of accounts, budget tracking, expense management, cost allocation, and board-ready financial reports. Built for nonprofits.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/nonprofit-financial-management-software",
  },
  openGraph: {
    title: "Nonprofit Financial Management Software",
    description:
      "Manage your nonprofit's finances with chart of accounts, budgets, expense tracking, cost allocation, and financial reporting — all in one platform.",
    url: "https://spacenexus.net/kindora/nonprofit-financial-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora Nonprofit Financial Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Financial Management Software",
    description:
      "Nonprofit accounting, budgets, expense tracking, and financial reporting in one platform.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "nonprofit financial management software",
    "nonprofit accounting software",
    "nonprofit bookkeeping software",
    "nonprofit budget tracking",
    "nonprofit expense management",
    "nonprofit cost allocation",
    "fund accounting software",
    "nonprofit financial reporting",
    "nonprofit chart of accounts",
    "grant accounting software",
    "nonprofit finance software",
    "NGO accounting software",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Nonprofit Financial Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Nonprofit financial management software — chart of accounts, budgets, expense tracking, cost allocation, and financial reporting.",
      url: "https://spacenexus.net/kindora/nonprofit-financial-management-software",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "Chart of Accounts",
        "Budget Management",
        "Expense & Bill Tracking",
        "Cost Allocation",
        "Financial Reporting",
        "Grant Accounting",
        "Donor Fund Tracking",
        "Board Financial Reports",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is nonprofit financial management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nonprofit financial management software helps organizations manage their finances using fund accounting principles — tracking restricted and unrestricted funds, managing budgets by program or grant, handling cost allocation, and generating board-ready financial reports compliant with nonprofit accounting standards.",
          },
        },
        {
          "@type": "Question",
          name: "How is nonprofit accounting different from regular accounting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nonprofit accounting follows fund accounting principles — tracking donor-restricted funds separately, managing budgets by program or grant, allocating shared costs across activities, and producing financial statements that show how funds are used for their intended purpose (Statement of Financial Position, Statement of Activities).",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora include cost allocation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora includes built-in cost allocation that lets you distribute shared expenses across programs, grants, and departments — ensuring accurate financial reporting and grant compliance without spreadsheets.",
          },
        },
        {
          "@type": "Question",
          name: "Can Kindora generate board financial reports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora generates board-ready financial reports including budget vs. actual summaries, program expense breakdowns, grant utilization reports, and financial position statements — all exportable as PDF or Excel.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora support grant accounting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora tracks grant funds separately with their own budgets, restrictions, and compliance requirements. You can see exactly how much of each grant has been spent, what's remaining, and generate grant-specific financial reports.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kindora affordable for small nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora is priced for small to mid-sized nonprofits and includes financial management features that would require separate accounting software with other platforms. Start with a free Starter plan — no credit card required.",
          },
        },
      ],
    },
  ],
};

const features = [
  {
    title: "Chart of Accounts",
    description:
      "Set up a structured chart of accounts following nonprofit accounting standards — assets, liabilities, revenue, and expenses organized by fund and program.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Budget Management",
    description:
      "Create and track budgets by program, department, or grant. Monitor budget vs. actual spending in real time with visual dashboards.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Expense & Bill Tracking",
    description:
      "Record expenses, manage bills, track approvals, and categorize spending by fund, program, or grant for accurate financial records.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Cost Allocation",
    description:
      "Distribute shared costs across programs, grants, and departments — ensuring accurate financial reporting and grant compliance.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Grant Accounting",
    description:
      "Track restricted and unrestricted funds separately. Manage grant budgets, restrictions, and compliance requirements in one place.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Financial Reporting",
    description:
      "Generate Statement of Financial Position, Statement of Activities, budget reports, and program expense breakdowns — all exportable.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Donor Fund Tracking",
    description:
      "Link donations to specific funds and track how donor-restricted money is spent — ensuring transparency and compliance.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Audit-Ready Records",
    description:
      "Maintain clean, organized financial records with complete transaction history — ready for audits and compliance reviews.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

const benefits = [
  {
    title: "Fund Accounting Built In",
    description:
      "Track restricted and unrestricted funds separately — no spreadsheets, no manual calculations, no errors.",
    stat: "100%",
    statLabel: "fund accounting compliant",
  },
  {
    title: "Budget vs. Actual",
    description:
      "See real-time budget utilization across programs and grants. Know exactly where you stand before the board meeting.",
    stat: "Real-time",
    statLabel: "budget tracking",
  },
  {
    title: "Grant Compliance",
    description:
      "Track grant restrictions, spending limits, and reporting deadlines — all in one financial dashboard.",
    stat: "Auto",
    statLabel: "compliance tracking",
  },
  {
    title: "Board-Ready Reports",
    description:
      "Generate financial statements, budget summaries, and program reports in seconds — not days.",
    stat: "90%",
    statLabel: "faster reporting",
  },
];

const faqs = [
  {
    question: "What is nonprofit financial management software?",
    answer:
      "Nonprofit financial management software helps organizations manage their finances using fund accounting principles — tracking restricted and unrestricted funds, managing budgets by program or grant, handling cost allocation, and generating board-ready financial reports compliant with nonprofit accounting standards.",
  },
  {
    question: "How is nonprofit accounting different from regular accounting?",
    answer:
      "Nonprofit accounting follows fund accounting principles — tracking donor-restricted funds separately, managing budgets by program or grant, allocating shared costs across activities, and producing financial statements that show how funds are used for their intended purpose (Statement of Financial Position, Statement of Activities).",
  },
  {
    question: "Does Kindora include cost allocation?",
    answer:
      "Yes. Kindora includes built-in cost allocation that lets you distribute shared expenses across programs, grants, and departments — ensuring accurate financial reporting and grant compliance without spreadsheets.",
  },
  {
    question: "Can Kindora generate board financial reports?",
    answer:
      "Yes. Kindora generates board-ready financial reports including budget vs. actual summaries, program expense breakdowns, grant utilization reports, and financial position statements — all exportable as PDF or Excel.",
  },
  {
    question: "Does Kindora support grant accounting?",
    answer:
      "Yes. Kindora tracks grant funds separately with their own budgets, restrictions, and compliance requirements. You can see exactly how much of each grant has been spent, what's remaining, and generate grant-specific financial reports.",
  },
  {
    question: "Is Kindora affordable for small nonprofits?",
    answer:
      "Yes. Kindora is priced for small to mid-sized nonprofits and includes financial management features that would require separate accounting software with other platforms. Start with a free Starter plan — no credit card required.",
  },
];

export default function NonprofitFinancialManagementSoftwarePage() {
  return (
    <>
      <Script
        id="nonprofit-financial-management-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
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
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-amber-600">
                  Financial Management Software
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Nonprofit Financial Management{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                  Without the Complexity
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Chart of accounts, budgets, expense tracking, cost allocation,
                and board-ready financial reports — all built for nonprofit fund
                accounting. No QuickBooks workarounds, no spreadsheets.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-700 rounded-full shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:-translate-y-0.5"
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

            {/* Right visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      Financial Dashboard
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      label: "Total Revenue",
                      value: "$284,500",
                      color: "text-green-600",
                    },
                    {
                      label: "Total Expenses",
                      value: "$192,300",
                      color: "text-red-500",
                    },
                    {
                      label: "Budget Remaining",
                      value: "$92,200",
                      color: "text-amber-600",
                    },
                    {
                      label: "Grant Funds Available",
                      value: "$156,800",
                      color: "text-blue-600",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100"
                    >
                      <span className="text-sm text-gray-600">
                        {item.label}
                      </span>
                      <span
                        className={`text-lg font-bold ${item.color}`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Audit-ready records
                  </span>
                  <span>Fund accounting compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
              Why Kindora Finance
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Financial management built for nonprofits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stop hacking QuickBooks or juggling spreadsheets. Kindora
              handles fund accounting, grants, and budgets the way nonprofits
              need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl font-black text-amber-500 mb-2">
                  {b.stat}
                </div>
                <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-4">
                  {b.statLabel}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything you need for nonprofit finances
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From chart of accounts to board reports — Kindora covers every
              aspect of nonprofit financial management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-amber-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about nonprofit financial management
              software.
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

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to simplify your nonprofit finances?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join nonprofits that manage their finances with Kindora — chart of
            accounts, budgets, expenses, cost allocation, and financial
            reporting in one platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-700 rounded-full shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300"
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
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-amber-600 transition-colors"
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
