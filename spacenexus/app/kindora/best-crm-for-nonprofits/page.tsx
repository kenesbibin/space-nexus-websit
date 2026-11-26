import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Best CRM for Nonprofits | Donor CRM Software",
  description:
    "See how Kindora compares for nonprofit CRM — donor management, fundraising, grants, volunteers, and reporting in one platform built specifically for nonprofits.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/best-crm-for-nonprofits",
  },
  openGraph: {
    title: "Best CRM for Nonprofits",
    description: "All-in-one CRM for nonprofits — donor management, fundraising, grants, volunteers, and reporting in one platform.",
    url: "https://spacenexus.net/kindora/best-crm-for-nonprofits",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Best CRM for Nonprofits" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best CRM for Nonprofits",
    description: "CRM for nonprofits — donor management, fundraising, grants, volunteers, and reporting.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "best crm for nonprofits",
    "best nonprofit crm",
    "top crm for nonprofits",
    "best donor crm",
    "best crm for charities",
    "best crm for ngos",
    "nonprofit crm software",
    "donor management crm",
    "fundraising crm",
    "charity crm software",
    "best crm for fundraising",
    "affordable nonprofit crm",
    "easy nonprofit crm",
    "all-in-one nonprofit crm",
    "best crm for small nonprofits",
  ],
};

const features = [
  {
    title: "Donor Management",
    description: "Complete donor profiles with giving history, engagement scoring, communication log, and relationship mapping.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Fundraising Tools",
    description: "Campaign pages, peer-to-peer, recurring giving, text-to-give, and event fundraising — all built in.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Grant Management",
    description: "Track applications, budgets, reports, and compliance. Never miss a deadline or reporting requirement.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Volunteer Management",
    description: "Recruit, schedule, track hours, and recognise volunteers — all connected to your donor CRM.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Programme Reporting",
    description: "Track outcomes, beneficiary data, and service delivery alongside your fundraising operations.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Email Marketing",
    description: "Built-in email campaigns, automated sequences, and communication tracking — no third-party tools.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Financial Management",
    description: "Budget tracking, expense management, fund accounting, and financial reports in one place.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Real-Time Dashboards",
    description: "Live dashboards showing fundraising, donors, grants, volunteers, and programme performance.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

const comparisonData = [
  { feature: "Donor Management", kindora: true, bloomerrang: true, neontwo: true, salesforce: true },
  { feature: "Fundraising Tools", kindora: true, bloomerrang: true, neontwo: true, salesforce: true },
  { feature: "Grant Management", kindora: true, bloomerrang: false, neontwo: false, salesforce: true },
  { feature: "Volunteer Management", kindora: true, bloomerrang: false, neontwo: true, salesforce: true },
  { feature: "Programme Reporting", kindora: true, bloomerrang: false, neontwo: false, salesforce: "partial" },
  { feature: "Email Marketing", kindora: true, bloomerrang: false, neontwo: true, salesforce: true },
  { feature: "Financial Management", kindora: true, bloomerrang: false, neontwo: false, salesforce: false },
  { feature: "Setup Time", kindora: "30 min", bloomerrang: "1 week", neontwo: "1 week", salesforce: "3-6 months" },
];

const faqs = [
  {
    question: "What is the best CRM for nonprofits?",
    answer:
      "The best CRM for nonprofits depends on your needs, but the ideal solution includes donor management, fundraising tools, grant management, volunteer tracking, and reporting — all in one platform. Kindora provides all of this in an easy-to-use, affordable system built specifically for nonprofits.",
  },
  {
    question: "Why do nonprofits choose Kindora?",
    answer:
      "Kindora combines donor management, fundraising, grants, volunteers, programmes, and financials in one platform. Unlike general-purpose CRMs, it's purpose-built for nonprofit workflows with no consulting fees and setup based on your data and workflow needs.",
  },
  {
    question: "How does Kindora compare to Bloomerang?",
    answer:
      "Bloomerang is a strong donor management CRM. Kindora goes further with grant management, volunteer tracking, programme reporting, email marketing, and financial management — all included, not as add-ons.",
  },
  {
    question: "Is Kindora suitable for small nonprofits?",
    answer:
      "Yes. Kindora is designed for organisations of all sizes. Small nonprofits benefit from the all-in-one approach, which eliminates the need for multiple disconnected tools and reduces overall software costs.",
  },
  {
    question: "Does Kindora include email marketing?",
    answer:
      "Yes. Kindora includes built-in email campaigns, automated sequences, and communication tracking. No need for separate email marketing tools like Mailchimp or Constant Contact.",
  },
  {
    question: "How long does it take to set up Kindora?",
    answer:
      "Kindora sets up in time varies by data and workflow needs with guided onboarding. Import your existing data from spreadsheets or other CRMs and start using the platform immediately.",
  },
];

const platformStats = [
  { metric: "5-in-1", label: "All-in-one CRM" },
  { metric: "30 min", label: "Setup time" },
  { metric: "All", label: "Nonprofit operations" },
  { metric: "0", label: "Consulting fees" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora - Best CRM for Nonprofits",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Best CRM for nonprofits \u2014 donor management, fundraising, grants, volunteers, and reporting in one platform.",
      url: "https://spacenexus.net/kindora/best-crm-for-nonprofits",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Ongoing free Starter plan; paid plans are custom-quoted" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function BestCrmForNonprofitsPage() {
  return (
    <>
      <Script id="best-crm-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-emerald-600">Best CRM for Nonprofits</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                The CRM That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600">Nonprofits Actually Love</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Donor management, fundraising, grants, volunteers, programmes, and financials — all in one platform built specifically for nonprofits. No consultants, no complexity, no compromise.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-700 rounded-full shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Try for Free
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Request a Demo
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                {["No credit card required", "Setup time varies by data and workflows", "See current plan terms on the pricing page"].map((text) => (
                  <span key={text} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">All-in-One Dashboard</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">Live</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Total Donors", value: "2,431", change: "+12%", color: "text-emerald-600" },
                    { label: "Active Grants", value: "8", change: "+2", color: "text-blue-600" },
                    { label: "Volunteers", value: "156", change: "+8%", color: "text-purple-600" },
                    { label: "Programmes", value: "5", change: "Active", color: "text-amber-600" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                       <p className="text-[10px] text-gray-600">{stat.label}</p>
                      <p className="text-lg font-black text-gray-900">{stat.value}</p>
                      <p className={`text-[10px] font-medium ${stat.color}`}>{stat.change}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {[
                    { action: "New donation received", time: "Just now", type: "Donation" },
                    { action: "Grant report submitted", time: "2 hours ago", type: "Grant" },
                    { action: "Volunteer shift completed", time: "Yesterday", type: "Volunteer" },
                  ].map((activity) => (
                    <div key={activity.action} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 border border-gray-100">
                      <div className={`w-2 h-2 rounded-full shrink-0 ${
                        activity.type === "Donation" ? "bg-emerald-400" :
                        activity.type === "Grant" ? "bg-blue-400" :
                        "bg-purple-400"
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-900 truncate">{activity.action}</p>
                      </div>
                       <span className="text-[10px] text-gray-600 whitespace-nowrap">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platformStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-emerald-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-3">Everything You Need</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">The Complete Nonprofit CRM</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every tool your nonprofit needs — donor management, fundraising, grants, volunteers, programmes, and financials — all in one platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-emerald-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-emerald-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-3">How We Compare</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Other Nonprofit CRMs</h2>
            <p className="text-lg text-gray-600">See why nonprofits choose Kindora over Bloomerang, Neon CRM, and Salesforce.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-emerald-600">Kindora</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Bloomerang</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Neon CRM</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Salesforce</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className={i < comparisonData.length - 1 ? "border-b border-gray-50" : ""}>
                      <td className="py-4 px-6 text-sm text-gray-900 font-medium">{row.feature}</td>
                      {(["kindora", "bloomerrang", "neontwo", "salesforce"] as const).map((key) => {
                        const val = row[key];
                        if (typeof val === "string") {
                          return <td key={key} className="py-4 px-6 text-center text-sm text-gray-600">{val}</td>;
                        }
                        return (
                          <td key={key} className="py-4 px-6 text-center">
                            {val ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
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

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Find the Best CRM?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Join nonprofits that chose Kindora as their all-in-one CRM. Try it free today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-emerald-600 bg-white hover:bg-emerald-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Free Starter Plan
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-full transition-all duration-300"
            >
              Request a Demo
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
