import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Grant Reporting Software | Automated Grant Reports",
  description:
    "Grant reporting software for nonprofits — generate funder reports, compliance reports, and financial reports with one click. Pull data from across your organization automatically.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/grant-reporting-software",
  },
  openGraph: {
    title: "Grant Reporting Software",
    description:
      "Generate grant reports in minutes, not days. Automated funder reports, compliance reports, and financial statements from one platform.",
    url: "https://spacenexus.net/kindora/grant-reporting-software",
    siteName: "Kindora by SpaceNexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Grant Reporting Software — Kindora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grant Reporting Software",
    description:
      "Automated grant reporting software. Generate funder reports, compliance reports, and financial statements with one click.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "grant reporting software",
    "grant reports",
    "grant reporting tools",
    "nonprofit grant reporting",
    "funder reporting software",
    "grant compliance reporting",
    "grant financial reports",
    "automated grant reports",
    "grant report generator",
    "grant outcome reporting",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Grant Reporting Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Grant reporting software for nonprofits — generate funder reports, compliance reports, and financial reports with one click. Pull data from across your organization automatically.",
      url: "https://spacenexus.net/kindora/grant-reporting-software",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "One-Click Report Generation",
        "Funder Report Templates",
        "Compliance Reports",
        "Financial Statements",
        "Outcome & Impact Reports",
        "Budget vs Actual Reports",
        "Custom Report Builder",
        "Export to PDF & Excel",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is grant reporting software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Grant reporting software automates the creation of funder reports, compliance reports, and financial statements for nonprofits. It pulls data from across the organization — donor records, program outcomes, and financial transactions — to generate accurate reports in minutes instead of hours.",
          },
        },
        {
          "@type": "Question",
          name: "Why do nonprofits need grant reporting software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nonprofits need grant reporting software to save hours of manual data compilation, reduce errors in funder reports, meet compliance deadlines consistently, and produce professional reports that strengthen funder relationships. Manual spreadsheet-based reporting is slow, error-prone, and unsustainable.",
          },
        },
        {
          "@type": "Question",
          name: "What types of reports can grant reporting software generate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Grant reporting software can generate funder progress reports, financial expenditure reports, outcome and impact reports, compliance reports, budget vs actual statements, and custom reports tailored to specific funder requirements. Most platforms support PDF and Excel export.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kindora automate grant reports?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora pulls financial data, program outcomes, and impact metrics from across the platform into pre-built report templates. You select the grant and reporting period, and Kindora generates a complete report ready for review and submission — no manual data entry required.",
          },
        },
        {
          "@type": "Question",
          name: "Can I customize reports for different funders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora provides customizable report templates that you can tailor to each funder's specific requirements. Save custom templates for recurring funders and generate consistent, professional reports every reporting period.",
          },
        },
      ],
    },
  ],
};

const features = [
  {
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "One-Click Reports",
    description:
      "Generate complete funder reports with a single click. No manual data compilation needed.",
  },
  {
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    title: "Report Templates",
    description:
      "Pre-built templates for common funder requirements. Save custom templates for recurring reports.",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Compliance Reports",
    description:
      "Generate compliance reports that meet funder and regulatory requirements. Never miss a reporting deadline.",
  },
  {
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Financial Reports",
    description:
      "Pull financial data automatically. Budget vs actual, expenditure breakdowns, and fund balance reports.",
  },
  {
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
    title: "Outcome & Impact Reports",
    description:
      "Show funders the impact of their investment. Program outcomes, beneficiary data, and success metrics.",
  },
  {
    icon: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Export Anywhere",
    description:
      "Export reports to PDF for funders, Excel for analysis, or share directly via email.",
  },
];

const reportTypes = [
  {
    title: "Funder Progress Reports",
    description:
      "Periodic reports showing progress against grant objectives, milestones achieved, and funds spent.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Financial Expenditure Reports",
    description:
      "Detailed breakdown of how grant funds were spent — categories, timelines, and remaining balances.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Outcome & Impact Reports",
    description:
      "Show the difference your programs make — beneficiary outcomes, success stories, and measurable impact.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Compliance & Audit Reports",
    description:
      "Meet regulatory and funder compliance requirements with standardized, audit-ready documentation.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

const benefits = [
  {
    stat: "10x",
    label: "Faster Reporting",
    description: "Generate reports in minutes instead of hours of manual work.",
  },
  {
    stat: "Zero",
    label: "Data Entry Errors",
    description: "Automated data pulling eliminates copy-paste mistakes.",
  },
  {
    stat: "100%",
    label: "On-Time Submission",
    description: "Never miss a funder reporting deadline again.",
  },
  {
    stat: "30 min",
    label: "Setup Time",
    description: "Setup time depends on your data and workflow needs; ask Kindora about onboarding options.",
  },
];

const faqs = [
  {
    question: "What is grant reporting software?",
    answer:
      "Grant reporting software automates the creation of funder reports, compliance reports, and financial statements for nonprofits. It pulls data from across the organization — donor records, program outcomes, and financial transactions — to generate accurate reports in minutes instead of hours.",
  },
  {
    question: "Why do nonprofits need grant reporting software?",
    answer:
      "Nonprofits need grant reporting software to save hours of manual data compilation, reduce errors in funder reports, meet compliance deadlines consistently, and produce professional reports that strengthen funder relationships. Manual spreadsheet-based reporting is slow, error-prone, and unsustainable.",
  },
  {
    question: "What types of reports can grant reporting software generate?",
    answer:
      "Grant reporting software can generate funder progress reports, financial expenditure reports, outcome and impact reports, compliance reports, budget vs actual statements, and custom reports tailored to specific funder requirements. Most platforms support PDF and Excel export.",
  },
  {
    question: "How does Kindora automate grant reports?",
    answer:
      "Kindora pulls financial data, program outcomes, and impact metrics from across the platform into pre-built report templates. You select the grant and reporting period, and Kindora generates a complete report ready for review and submission — no manual data entry required.",
  },
  {
    question: "Can I customize reports for different funders?",
    answer:
      "Yes. Kindora provides customizable report templates that you can tailor to each funder's specific requirements. Save custom templates for recurring funders and generate consistent, professional reports every reporting period.",
  },
];

export default function GrantReportingSoftwarePage() {
  return (
    <>
      <Script
        id="grant-reporting-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-amber-700">
                Grant Reporting Software
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Grant Reporting Software{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                That Generates Reports in Minutes
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Stop spending hours compiling funder reports. Kindora&apos;s grant
              reporting software pulls data automatically and generates
              professional reports with one click — financial, compliance, and
              outcome reports.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 rounded-full shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
                { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Built for nonprofits" },
              ].map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-amber-600"
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
      <section className="py-12 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {benefit.stat}
                </div>
                <div className="text-sm font-semibold text-amber-100 mb-1">
                  {benefit.label}
                </div>
                <div className="text-xs text-amber-200">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Grant Reporting Software */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
                Why Grant Reporting Matters
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Stop Spending Days on Funder Reports. Start Generating Them in
                Minutes.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Most nonprofits spend hours every week manually compiling grant
                reports — copying data from spreadsheets, reformatting tables,
                and chasing down program staff for outcome data.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Purpose-built <strong>grant reporting software</strong> replaces
                this manual process with automated data pulling, pre-built
                templates, and one-click report generation — so your team can
                focus on delivering programs, not compiling reports.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-colors"
                >
                  See How It Works
                </Link>
                <Link
                  href="/kindora/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Report Generator
                  </h3>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                    One Click
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Q2 Funder Progress Report", status: "Ready", time: "2 min" },
                    { name: "Annual Compliance Report", status: "Ready", time: "3 min" },
                    { name: "Budget vs Actual Statement", status: "Ready", time: "1 min" },
                    { name: "Outcome & Impact Summary", status: "Ready", time: "2 min" },
                  ].map((report) => (
                    <div
                      key={report.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-amber-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {report.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-green-600 font-medium">
                          {report.status}
                        </span>
                        <span className="text-gray-400">{report.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Types */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
              Report Types
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Every Report Your Funders Need
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From progress reports to compliance documentation, Kindora
              generates them all automatically.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reportTypes.map((report, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-amber-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
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
                      d={report.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {report.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {report.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
              Core Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powerful Reporting Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to generate professional grant reports that
              funders love.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-[#f8f9fa] rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-amber-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
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
            <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about grant reporting software.
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
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-full transition-colors"
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
            Ready to Generate Grant Reports in Minutes?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join organizations that trust Kindora&apos;s grant reporting
            software to produce professional funder reports, compliance
            documentation, and financial statements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 rounded-full shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300"
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
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-amber-600 transition-colors"
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
            The Best Grant Reporting Software for Nonprofits of Every Size
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kindora is the leading{" "}
            <Link
              href="/kindora/features/grant-management"
              className="text-amber-600 hover:underline"
            >
              grant management software
            </Link>{" "}
            and grant reporting platform trusted by nonprofits nationwide. Our
            comprehensive{" "}
            <Link
              href="/kindora/grant-reporting-software"
              className="text-amber-600 hover:underline"
            >
              grant reporting tools
            </Link>{" "}
            automate the entire reporting process — from data collection to
            report generation. Whether you need{" "}
            <Link
              href="/kindora/features/financial-management"
              className="text-amber-600 hover:underline"
            >
              financial expenditure reports
            </Link>
            ,{" "}
            <Link
              href="/kindora/features/reporting"
              className="text-amber-600 hover:underline"
            >
              outcome and impact reports
            </Link>
            , or{" "}
            <Link
              href="/kindora/grant-lifecycle-management"
              className="text-amber-600 hover:underline"
            >
              compliance reports
            </Link>
            , Kindora delivers enterprise-grade features at a price nonprofits
            can afford. Unlike manual spreadsheet-based reporting or generic
            document tools, our{" "}
            <strong>grant reporting software</strong> is purpose-built for
            nonprofits — with automated data pulling, customizable templates,
            and one-click generation built in from day one.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/kindora"
              className="text-amber-600 hover:underline font-medium"
            >
              Kindora Home →
            </Link>
            <Link
              href="/kindora/features"
              className="text-amber-600 hover:underline font-medium"
            >
              All Features →
            </Link>
            <Link
              href="/kindora/pricing"
              className="text-amber-600 hover:underline font-medium"
            >
              Pricing →
            </Link>
            <Link
              href="/kindora/contact"
              className="text-amber-600 hover:underline font-medium"
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
