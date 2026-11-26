import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Donation Reporting Software | Track & Analyze Giving",
  description:
    "Kindora donation reporting software gives you real-time donation analytics, campaign performance reports, donor giving summaries, and tax receipt generation — all in one place.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/donation-reporting-software",
  },
  openGraph: {
    title: "Donation Reporting Software",
    description:
      "Real-time donation analytics, campaign reports, donor giving summaries, and tax receipt generation with Kindora donation reporting software.",
    url: "https://spacenexus.net/kindora/donation-reporting-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora Donation Reporting Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donation Reporting Software",
    description:
      "Real-time donation analytics, campaign reports, and donor giving summaries for nonprofits.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "donation reporting software",
    "donation tracking software",
    "donation analytics software",
    "donor giving reports",
    "campaign performance reports",
    "nonprofit donation reports",
    "tax receipt generation",
    "donation summary software",
    "fundraising reports software",
    "donation data analytics",
    "real-time donation tracking",
    "donation reporting tools",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Donation Reporting Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Donation reporting software — real-time donation analytics, campaign performance reports, donor giving summaries, and tax receipt generation.",
      url: "https://spacenexus.net/kindora/donation-reporting-software",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "Real-time donation analytics",
        "Campaign performance reports",
        "Donor giving summaries",
        "Tax receipt generation",
        "Revenue trend analysis",
        "Scheduled report delivery",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is donation reporting software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Donation reporting software tracks, analyzes, and visualizes all donation activity for nonprofit organizations. It provides real-time dashboards, campaign performance reports, donor giving summaries, and automated tax receipt generation.",
          },
        },
        {
          "@type": "Question",
          name: "What reports can Kindora generate for donations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora generates donation summaries, campaign performance reports, donor giving histories, revenue trend analysis, tax receipts, monthly fundraising reports, and custom reports for board meetings.",
          },
        },
        {
          "@type": "Question",
          name: "Can I track donations in real time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora provides real-time donation tracking with live dashboards that update as donations come in. See total giving, campaign progress, and donor activity as it happens.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora generate tax receipts for donations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora automatically generates tax receipts for donations, reducing manual work and ensuring donors receive timely documentation for their tax records.",
          },
        },
        {
          "@type": "Question",
          name: "Can I compare campaign performance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora lets you compare campaigns side by side — view donations raised, donor counts, average gift size, and conversion rates across campaigns.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kindora affordable for small nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora is priced specifically for small to mid-sized nonprofits, offering enterprise-grade donation reporting features at a price nonprofits can afford. A free Starter plan is available.",
          },
        },
      ],
    },
  ],
};

const reportingFeatures = [
  {
    title: "Real-Time Donation Tracking",
    description:
      "Watch donations come in with live dashboards. See totals, trends, and donor activity updated in real time.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Campaign Performance Reports",
    description:
      "Compare campaigns side by side — donations raised, donor counts, average gift size, and conversion rates.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
  {
    title: "Donor Giving Summaries",
    description:
      "View individual donor giving histories, lifetime value, frequency, and recency at a glance.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Revenue Trend Analysis",
    description:
      "Identify giving patterns over time — monthly, quarterly, and annual trends to forecast revenue.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Tax Receipt Generation",
    description:
      "Automatically generate and send tax receipts for donations. Reduce manual work and ensure compliance.",
    icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
  },
  {
    title: "Scheduled Report Delivery",
    description:
      "Automate report delivery via email on daily, weekly, or monthly schedules. Keep your team and board informed.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Custom Report Builder",
    description:
      "Build custom reports with the metrics that matter — mix and match donation, donor, and campaign data.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Data Visualization",
    description:
      "Charts, graphs, and heat maps that make your donation data easy to understand and share with stakeholders.",
    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
  },
];

const stats = [
  { metric: "Real-time", label: "Donation tracking" },
  { metric: "Auto", label: "Tax receipt generation" },
  { metric: "Custom", label: "Report builder" },
  { metric: "Export-ready", label: "Board & audit formats" },
];

const workflowSteps = [
  {
    step: "01",
    title: "Collect",
    description:
      "All donations flow into Kindora automatically — online, offline, recurring, and in-kind.",
  },
  {
    step: "02",
    title: "Analyze",
    description:
      "Real-time dashboards and reports reveal giving patterns, campaign performance, and donor insights.",
  },
  {
    step: "03",
    title: "Report",
    description:
      "Generate custom reports, tax receipts, and board summaries with a single click.",
  },
  {
    step: "04",
    title: "Grow",
    description:
      "Use data-driven insights to improve fundraising, retain donors, and increase impact.",
  },
];

const faqs = [
  {
    question: "What is donation reporting software?",
    answer:
      "Donation reporting software tracks, analyzes, and visualizes all donation activity for nonprofit organizations. It provides real-time dashboards, campaign performance reports, donor giving summaries, and automated tax receipt generation.",
  },
  {
    question: "What reports can Kindora generate for donations?",
    answer:
      "Kindora generates donation summaries, campaign performance reports, donor giving histories, revenue trend analysis, tax receipts, monthly fundraising reports, and custom reports for board meetings.",
  },
  {
    question: "Can I track donations in real time?",
    answer:
      "Yes. Kindora provides real-time donation tracking with live dashboards that update as donations come in. See total giving, campaign progress, and donor activity as it happens.",
  },
  {
    question: "Does Kindora generate tax receipts for donations?",
    answer:
      "Yes. Kindora automatically generates tax receipts for donations, reducing manual work and ensuring donors receive timely documentation for their tax records.",
  },
  {
    question: "Can I compare campaign performance?",
    answer:
      "Yes. Kindora lets you compare campaigns side by side — view donations raised, donor counts, average gift size, and conversion rates across campaigns.",
  },
  {
    question: "Is Kindora affordable for small nonprofits?",
    answer:
      "Yes. Kindora is priced specifically for small to mid-sized nonprofits, offering enterprise-grade donation reporting features at a price nonprofits can afford. A free Starter plan is available.",
  },
];

export default function DonationReportingSoftwarePage() {
  return (
    <>
      <Script
        id="donation-reporting-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-green-100/30 rounded-full blur-3xl" />
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
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-emerald-600">
                  Donation Reporting Software
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Track Every{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">
                  Donation
                </span>{" "}
                with Clarity
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Make informed fundraising decisions with Kindora donation
                reporting software. Real-time donation tracking, campaign
                performance reports, donor giving summaries, and automated tax
                receipts — all in one place.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-700 rounded-full shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request a Demo
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
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Try for Free
                </a>
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

            {/* Right Visual - Dashboard Preview */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
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
                          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      Donation Dashboard
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Total Donations", value: "$284,750" },
                    { label: "Donor Retention", value: "78%" },
                    { label: "Avg Gift Size", value: "$342" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center"
                    >
                      <p className="text-lg font-bold text-gray-900">
                        {s.value}
                      </p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Recent Reports
                  </p>
                  {[
                    {
                      name: "Monthly Donation Summary",
                      type: "Auto-generated",
                      freq: "Monthly",
                    },
                    {
                      name: "Campaign: Spring Gala",
                      type: "$42,300 raised",
                      freq: "Complete",
                    },
                    {
                      name: "Donor Giving Report",
                      type: "Top 50 donors",
                      freq: "Q1 2026",
                    },
                  ].map((r) => (
                    <div
                      key={r.name}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <div>
                          <span className="text-sm font-semibold text-gray-900">
                            {r.name}
                          </span>
                          <span className="text-xs text-gray-400 ml-2">
                            {r.type}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{r.freq}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-emerald-500 mb-1">
                  {stat.metric}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-3">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Donation reports that drive fundraising
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See your fundraising clearly with real-time donation tracking,
              campaign reports, and donor analytics.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reportingFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-emerald-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5 text-emerald-500 group-hover:text-white transition-colors"
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
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
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

      {/* Workflow Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              From donation to decision
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple workflow to turn donation data into fundraising
              insights.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {workflowSteps.map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about donation reporting software.
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
            Ready to see your donations clearly?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora donation reporting software today. Track
            every dollar, understand every donor, and grow your impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-700 rounded-full shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
            >
              Get Started Today
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
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-emerald-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-emerald-500 bg-emerald-50 hover:bg-emerald-100 rounded-full transition-all duration-300"
            >
              Try for Free
            </a>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
