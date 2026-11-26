import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Grant Compliance Software | Stay Funder-Ready",
  description:
    "Grant compliance software for nonprofits — track reporting requirements, meet deadlines, and maintain audit-ready documentation. Never lose funding to compliance issues.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/grant-compliance-software",
  },
  openGraph: {
    title: "Grant Compliance Software",
    description:
      "Stay funder-ready with automated compliance tracking, deadline reminders, and audit-ready documentation.",
    url: "https://spacenexus.net/kindora/grant-compliance-software",
    siteName: "Kindora by SpaceNexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Grant Compliance Software — Kindora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grant Compliance Software",
    description:
      "Automated grant compliance software. Track requirements, meet deadlines, and stay audit-ready.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "grant compliance software",
    "grant compliance",
    "grant compliance tracking",
    "nonprofit grant compliance",
    "funder compliance software",
    "grant audit software",
    "grant reporting compliance",
    "grant deadline tracker",
    "grant compliance management",
    "nonprofit compliance software",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Grant Compliance Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Grant compliance software for nonprofits — track reporting requirements, meet deadlines, and maintain audit-ready documentation.",
      url: "https://spacenexus.net/kindora/grant-compliance-software",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "Compliance Deadline Tracking",
        "Automated Reminders",
        "Document Management",
        "Audit Trail Logging",
        "Reporting Requirements",
        "Funder Condition Tracking",
        "Compliance Dashboard",
        "Export-Ready Documentation",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is grant compliance software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Grant compliance software helps nonprofits track funder requirements, meet reporting deadlines, and maintain audit-ready documentation. It automates compliance tracking so organizations never miss a requirement that could jeopardize their funding.",
          },
        },
        {
          "@type": "Question",
          name: "Why do nonprofits need grant compliance software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nonprofits need grant compliance software because missing a funder requirement can result in clawback of funds, loss of future funding, and reputational damage. Manual compliance tracking is unreliable — spreadsheets can't send reminders or track multiple overlapping requirements across dozens of grants.",
          },
        },
        {
          "@type": "Question",
          name: "What does grant compliance software track?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Grant compliance software tracks reporting deadlines, document submission requirements, budget restrictions, program deliverables, audit requirements, and funder-specific conditions. It provides visibility into what's due, when it's due, and whether it's been completed.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kindora help with grant compliance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora tracks all grant conditions, reporting requirements, and compliance deadlines in one platform. Automated reminders alert your team before deadlines, a shared calendar shows upcoming requirements, and compliance dashboards give you real-time visibility into your organization's compliance status.",
          },
        },
        {
          "@type": "Question",
          name: "Can Kindora help with grant audits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora maintains a complete audit trail of all grant activities, financial transactions, and compliance documentation. When auditors request records, you can pull compliance reports and supporting documentation in minutes.",
          },
        },
      ],
    },
  ],
};

const features = [
  {
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Deadline Tracking",
    description:
      "Track every compliance deadline across all your grants. Automated reminders ensure nothing is missed.",
  },
  {
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
    title: "Automated Reminders",
    description:
      "Never miss a compliance deadline. Get alerts days, weeks, or months before due dates.",
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Document Management",
    description:
      "Store compliance documents, attach them to grants, and track submission status for every requirement.",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Audit Trail",
    description:
      "Complete audit trail of all activities, document uploads, and compliance submissions for every grant.",
  },
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    title: "Funder Conditions",
    description:
      "Track specific conditions for each funder — restricted funds, reporting formats, and special requirements.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Compliance Dashboard",
    description:
      "Real-time visibility into your organization's compliance status across all active grants.",
  },
];

const complianceItems = [
  {
    category: "Financial Compliance",
    items: [
      "Budget vs actual tracking",
      "Expense documentation",
      "Fund restriction monitoring",
      "Cost allocation verification",
    ],
  },
  {
    category: "Reporting Compliance",
    items: [
      "Progress report deadlines",
      "Financial report requirements",
      "Outcome reporting schedules",
      "Narrative submission tracking",
    ],
  },
  {
    category: "Programmatic Compliance",
    items: [
      "Deliverable tracking",
      "Milestone documentation",
      "Outcome measurement",
      "Participant tracking",
    ],
  },
  {
    category: "Administrative Compliance",
    items: [
      "Insurance documentation",
      "Board approval records",
      "Policy compliance",
      "Audit preparation",
    ],
  },
];

const benefits = [
  {
    stat: "100%",
    label: "Compliance Rate",
    description: "Never miss a funder requirement or reporting deadline.",
  },
  {
    stat: "Audit",
    label: "Ready Documentation",
    description: "Complete audit trail for every grant activity.",
  },
  {
    stat: "Zero",
    label: "Compliance Penalties",
    description: "Automated tracking prevents costly compliance failures.",
  },
  {
    stat: "30 min",
    label: "Setup Time",
    description: "Setup time depends on your data and workflow needs; ask Kindora about onboarding options.",
  },
];

const faqs = [
  {
    question: "What is grant compliance software?",
    answer:
      "Grant compliance software helps nonprofits track funder requirements, meet reporting deadlines, and maintain audit-ready documentation. It automates compliance tracking so organizations never miss a requirement that could jeopardize their funding.",
  },
  {
    question: "Why do nonprofits need grant compliance software?",
    answer:
      "Nonprofits need grant compliance software because missing a funder requirement can result in clawback of funds, loss of future funding, and reputational damage. Manual compliance tracking is unreliable — spreadsheets can't send reminders or track multiple overlapping requirements across dozens of grants.",
  },
  {
    question: "What does grant compliance software track?",
    answer:
      "Grant compliance software tracks reporting deadlines, document submission requirements, budget restrictions, program deliverables, audit requirements, and funder-specific conditions. It provides visibility into what's due, when it's due, and whether it's been completed.",
  },
  {
    question: "How does Kindora help with grant compliance?",
    answer:
      "Kindora tracks all grant conditions, reporting requirements, and compliance deadlines in one platform. Automated reminders alert your team before deadlines, a shared calendar shows upcoming requirements, and compliance dashboards give you real-time visibility into your organization's compliance status.",
  },
  {
    question: "Can Kindora help with grant audits?",
    answer:
      "Yes. Kindora maintains a complete audit trail of all grant activities, financial transactions, and compliance documentation. When auditors request records, you can pull compliance reports and supporting documentation in minutes.",
  },
];

export default function GrantComplianceSoftwarePage() {
  return (
    <>
      <Script
        id="grant-compliance-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-100 border border-red-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-red-700">
                Grant Compliance Software
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Grant Compliance Software{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">
                That Keeps You Funder-Ready
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Track every funder requirement, meet every deadline, and maintain
              audit-ready documentation. Kindora&apos;s grant compliance software
              ensures you never lose funding to compliance issues.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 rounded-full shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Free Starter Plan
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
              </Link>
              <Link
                href="/kindora/features/grant-management"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              {[
                { icon: "M5 13l4 4L19 7", label: "No credit card required" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Setup time varies by data and workflows" },
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Audit-ready security" },
              ].map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={icon}
                    />
                  </svg>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {benefit.stat}
                </div>
                <div className="text-sm font-semibold text-red-100 mb-1">
                  {benefit.label}
                </div>
                <div className="text-xs text-red-200">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Grant Compliance Software */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
                Why Grant Compliance Matters
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Missing One Compliance Deadline Can Cost You Everything.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nonprofits that fail to meet funder requirements face serious
                consequences — clawback of funds, loss of future grants,
                reputational damage, and even legal liability.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Purpose-built <strong>grant compliance software</strong> replaces
                unreliable spreadsheet tracking with automated deadline
                reminders, document management, and real-time compliance
                dashboards — so your organization stays funder-ready at all
                times.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-full transition-colors"
                >
                  See How It Works
                </Link>
                <Link
                  href="/kindora/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Compliance Status
                  </h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    All Compliant
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { grant: "Community Health Fund", status: "Compliant", next: "Report due Jul 15" },
                    { grant: "Education Equity Grant", status: "Compliant", next: "Application Aug 1" },
                    { grant: "Youth Development", status: "Compliant", next: "Report due Aug 20" },
                    { grant: "Housing Assistance", status: "Compliant", next: "Budget review Sep 5" },
                  ].map((item) => (
                    <div
                      key={item.grant}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {item.grant}
                          </p>
                          <p className="text-xs text-gray-500">{item.next}</p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Categories */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
              What We Track
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Every Type of Compliance Requirement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Financial, reporting, programmatic, and administrative — Kindora
              tracks it all.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceItems.map((category, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-red-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-red-500 flex-shrink-0"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
              Core Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powerful Compliance Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to stay compliant and audit-ready across all
              your grants.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-[#f8f9fa] rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-red-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-6 h-6"
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about grant compliance software.
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

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Stay Funder-Ready at All Times?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join organizations that trust Kindora&apos;s grant compliance
            software to track requirements, meet deadlines, and maintain
            audit-ready documentation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 rounded-full shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300"
            >
              Explore Free Starter Plan
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
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-red-600 transition-colors"
            >
              View Pricing
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Best Grant Compliance Software for Nonprofits of Every Size
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kindora is the leading{" "}
            <Link
              href="/kindora/grant-lifecycle-management"
              className="text-red-600 hover:underline"
            >
              grant lifecycle management
            </Link>{" "}
            and grant compliance platform trusted by nonprofits nationwide. Our
            comprehensive{" "}
            <Link
              href="/kindora/grant-tracking-software"
              className="text-red-600 hover:underline"
            >
              grant tracking software
            </Link>{" "}
            ensures your organization stays compliant across every grant. Whether
            you need{" "}
            <Link
              href="/kindora/grant-compliance-software"
              className="text-red-600 hover:underline"
            >
              automated compliance tracking
            </Link>
            ,{" "}
            <Link
              href="/kindora/grant-reporting-software"
              className="text-red-600 hover:underline"
            >
              compliance reporting
            </Link>
            , or{" "}
            <Link
              href="/kindora/features/financial-management"
              className="text-red-600 hover:underline"
            >
              financial compliance monitoring
            </Link>
            , Kindora delivers enterprise-grade features at a price nonprofits
            can afford. Unlike spreadsheets or generic tracking tools, our{" "}
            <strong>grant compliance software</strong> is purpose-built for
            nonprofits — with automated reminders, document management, and
            audit trail logging built in from day one.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/kindora"
              className="text-red-600 hover:underline font-medium"
            >
              Kindora Home →
            </Link>
            <Link
              href="/kindora/features"
              className="text-red-600 hover:underline font-medium"
            >
              All Features →
            </Link>
            <Link
              href="/kindora/pricing"
              className="text-red-600 hover:underline font-medium"
            >
              Pricing →
            </Link>
            <Link
              href="/kindora/contact"
              className="text-red-600 hover:underline font-medium"
            >
              Request Demo →
            </Link>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
