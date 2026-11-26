import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Donation Tracking System | Track Every Donation",
  description:
    "Kindora donation tracking system records every one-time, recurring, pledge, and in-kind gift in real time with automated receipting and campaign attribution.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/donation-tracking-system",
  },
  openGraph: {
    title: "Donation Tracking System",
    description: "Track every donation in real time with Kindora's all-in-one donation tracking system for nonprofits.",
    url: "https://spacenexus.net/kindora/donation-tracking-system",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Donation Tracking System" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donation Tracking System",
    description: "Track every donation in real time with Kindora — one-time, recurring, pledges, and in-kind gifts.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "donation tracking system",
    "donation tracking software",
    "donation tracking tool",
    "nonprofit donation tracking",
    "donation record keeping",
    "donation management system",
    "gift tracking system",
    "donation log software",
    "track donations online",
    "donation tracking app",
    "charity donation tracking",
    "NGO donation tracking",
    "donation database system",
    "donation reporting system",
    "best donation tracking system",
  ],
};

const features = [
  {
    title: "Real-Time Tracking",
    description: "Every donation recorded instantly with donor details, amount, payment method, and campaign attribution.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "All Gift Types",
    description: "One-time gifts, recurring subscriptions, pledge payments, in-kind contributions, and matching gifts — all in one place.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Campaign Attribution",
    description: "Track which campaigns drive donations. Measure fundraising performance and ROI by campaign.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Automated Receipting",
    description: "Tax-compliant receipts generated and emailed instantly after every donation. Customisable templates.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Donor History",
    description: "Complete giving history for every donor — every gift, every campaign, every payment method in one timeline.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Gift Search",
    description: "Find any donation instantly by donor name, amount, date, campaign, payment method, or gift type.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    title: "Financial Reports",
    description: "Giving summaries, revenue trends, campaign reports, and donor statements ready in seconds.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Recurring Management",
    description: "Track active, paused, and lapsed recurring gifts. Monitor monthly revenue and subscription health.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
];

const comparisonData = [
  { feature: "Real-Time Tracking", kindora: true, bloomerrang: true, neontwo: true, lurato: true },
  { feature: "All Gift Types", kindora: true, bloomerrang: true, neontwo: true, lurato: "partial" },
  { feature: "Campaign Attribution", kindora: true, bloomerrang: true, neontwo: true, lurato: true },
  { feature: "Automated Receipting", kindora: true, bloomerrang: true, neontwo: true, lurato: "partial" },
  { feature: "Donor History", kindora: true, bloomerrang: true, neontwo: true, lurato: true },
  { feature: "Gift Search", kindora: true, bloomerrang: true, neontwo: "partial", lurato: false },
  { feature: "Grant Management", kindora: true, bloomerrang: false, neontwo: false, lurato: false },
  { feature: "Volunteer Tracking", kindora: true, bloomerrang: false, neontwo: true, lurato: false },
];

const faqs = [
  {
    question: "What is a donation tracking system?",
    answer:
      "A donation tracking system records and manages every donation your nonprofit receives. It tracks donor details, gift amounts, payment methods, campaign attribution, and provides real-time reporting on fundraising performance.",
  },
  {
    question: "What types of donations can Kindora track?",
    answer:
      "Kindora tracks one-time gifts, recurring subscriptions, pledge payments, in-kind contributions, and corporate matching gifts. Each donation type includes full donor attribution and campaign tracking.",
  },
  {
    question: "How does real-time donation tracking work?",
    answer:
      "When a donation is received, Kindora records it instantly with full details — donor, amount, payment method, campaign, and receipt status. Dashboards and reports update in real time as gifts come in.",
  },
  {
    question: "Does Kindora generate donation receipts?",
    answer:
      "Yes. Kindora automatically generates tax-compliant receipts for every donation. Receipts are emailed to donors immediately and can be customised with your organisation's branding.",
  },
  {
    question: "Can I track donations by campaign?",
    answer:
      "Yes. Every donation is linked to its campaign. Kindora shows campaign-level totals, donor counts, average gift size, and conversion rates for each fundraising campaign.",
  },
  {
    question: "How is Kindora different from spreadsheet tracking?",
    answer:
      "Spreadsheets are manual, error-prone, and lack real-time visibility. Kindora automates receipting, prevents duplicates, tracks recurring gifts, and provides instant reporting — without the manual work.",
  },
];

const platformStats = [
  { metric: "Real-time", label: "Donation tracking" },
  { metric: "All", label: "Gift types supported" },
  { metric: "Instant", label: "Receipt generation" },
  { metric: "100%", label: "Campaign attribution" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Donation Tracking System",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Donation tracking system for nonprofits \u2014 track every gift in real time with automated receipting and campaign attribution.",
      url: "https://spacenexus.net/kindora/donation-tracking-system",
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

export default function DonationTrackingSystemPage() {
  return (
    <>
      <Script id="donation-tracking-system-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-cyan-600">Donation Tracking System</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Track Every Donation{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">In Real Time</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Every gift, every campaign, every donor — recorded instantly with automated receipting, campaign attribution, and real-time reporting.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-teal-600 hover:to-cyan-700 rounded-full shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Live Donation Feed</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Tracking
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { donor: "Anonymous", amount: "One-time", campaign: "General Fund", time: "Just now", color: "bg-cyan-400" },
                    { donor: "Lisa M.", amount: "Monthly", campaign: "Sustainer Programme", time: "5 min ago", color: "bg-teal-400" },
                    { donor: "Tech Corp", amount: "Matching", campaign: "Annual Appeal", time: "18 min ago", color: "bg-emerald-400" },
                    { donor: "James K.", amount: "Pledge", campaign: "Capital Campaign", time: "45 min ago", color: "bg-amber-400" },
                  ].map((item) => (
                    <div key={item.donor + item.time} className="flex items-center gap-3 p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className={`w-2 h-2 rounded-full ${item.color} shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">{item.donor}</p>
                        <p className="text-xs text-gray-500">{item.campaign} — {item.amount}</p>
                      </div>
                      <span className="text-[10px] text-gray-500 whitespace-nowrap">{item.time}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-teal-50 border border-cyan-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-black text-gray-900">847</p>
                      <p className="text-[10px] text-gray-500">Total Gifts</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-cyan-600">92%</p>
                      <p className="text-[10px] text-gray-500">Receipt Rate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-teal-600">12</p>
                      <p className="text-[10px] text-gray-500">Campaigns</p>
                    </div>
                  </div>
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
                <div className="text-3xl lg:text-4xl font-black text-cyan-500 mb-1">{stat.metric}</div>
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
            <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Complete Donation Tracking</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every gift, every campaign, every receipt — tracked automatically in one system.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-cyan-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-cyan-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">{feature.title}</h3>
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
            <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider mb-3">How We Compare</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Other Tracking Systems</h2>
            <p className="text-lg text-gray-600">See why nonprofits choose Kindora over Bloomerang, Neon CRM, and Lurato.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-cyan-600">Kindora</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Bloomerang</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Neon CRM</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Lurato</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className={i < comparisonData.length - 1 ? "border-b border-gray-50" : ""}>
                      <td className="py-4 px-6 text-sm text-gray-900 font-medium">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.kindora === "boolean" ? (
                          row.kindora ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.bloomerrang === "boolean" ? (
                          row.bloomerrang ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.neontwo === "boolean" ? (
                          row.neontwo ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.lurato === "boolean" ? (
                          row.lurato ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
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
            <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider mb-3">FAQ</p>
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
      <section className="py-20 lg:py-28 bg-gradient-to-br from-cyan-500 via-teal-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Track Every Donation?</h2>
          <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
            Join nonprofits using Kindora to track every gift in real time with automated receipting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-cyan-600 bg-white hover:bg-cyan-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
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
