import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Prospect Management Software | Track Donor Prospects",
  description:
    "Kindora prospect management software helps nonprofits identify, track, and cultivate donor prospects with pipeline stages, capacity indicators, and automated follow-ups.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/prospect-management-software",
  },
  openGraph: {
    title: "Prospect Management Software",
    description: "Identify, track, and cultivate donor prospects with Kindora's all-in-one prospect management software.",
    url: "https://spacenexus.net/kindora/prospect-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Prospect Management Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prospect Management Software",
    description: "Identify, track, and cultivate donor prospects with Kindora — pipeline, capacity scoring, and follow-ups.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "prospect management software",
    "donor prospect tracking",
    "prospect tracking software",
    "nonprofit prospect management",
    "donor prospect software",
    "prospect cultivation software",
    "fundraising prospect software",
    "donor pipeline software",
    "prospect research software",
    "charity prospect management",
    "NGO prospect tracking",
    "donor prospecting tools",
    "gift officer prospect tracking",
    "prospect engagement software",
    "best prospect management software",
  ],
};

const features = [
  {
    title: "Prospect Pipeline",
    description: "Visual pipeline tracking prospects from identification through qualification, cultivation, solicitation, and closure.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Capacity Scoring",
    description: "Wealth screening indicators and capacity scores to prioritise prospects with the highest giving potential.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Prospect Profiles",
    description: "Comprehensive profiles with giving history, interests, connections, communication log, and engagement score.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Activity Tracking",
    description: "Log meetings, calls, events, and personal touches. See every interaction with each prospect in one timeline.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    title: "Automated Follow-Ups",
    description: "Trigger personalised follow-up tasks based on prospect stage, last activity, and engagement score.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Team Assignment",
    description: "Assign prospect owners, set reminders, share notes, and coordinate cultivation across your development team.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Prospect Reports",
    description: "Pipeline value, stage distribution, conversion rates, and prospect activity reports in one dashboard.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Donor Conversion",
    description: "Track conversion from prospect to active donor. Measure prospect pipeline health and fundraising readiness.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

const comparisonData = [
  { feature: "Prospect Pipeline", kindora: true, bloomerrang: true, blackbaud: true, lurato: "partial" },
  { feature: "Capacity Scoring", kindora: true, bloomerrang: true, blackbaud: true, lurato: false },
  { feature: "Prospect Profiles", kindora: true, bloomerrang: true, blackbaud: true, lurato: true },
  { feature: "Activity Tracking", kindora: true, bloomerrang: true, blackbaud: true, lurato: true },
  { feature: "Automated Follow-Ups", kindora: true, bloomerrang: false, blackbaud: "partial", lurato: false },
  { feature: "Team Assignment", kindora: true, bloomerrang: true, blackbaud: true, lurato: false },
  { feature: "Grant Management", kindora: true, bloomerrang: false, blackbaud: false, lurato: false },
  { feature: "Volunteer Tracking", kindora: true, bloomerrang: false, blackbaud: false, lurato: false },
];

const faqs = [
  {
    question: "What is prospect management software?",
    answer:
      "Prospect management software helps nonprofits identify, track, and cultivate potential major donors. It provides pipeline management, capacity scoring, activity logging, and automated follow-ups to ensure prospects are properly nurtured through the giving journey.",
  },
  {
    question: "How does prospect management improve fundraising?",
    answer:
      "Prospect management ensures your team focuses on the right prospects at the right time. By tracking pipeline stages, capacity scores, and last activities, you can prioritise high-potential prospects and ensure no opportunity is missed.",
  },
  {
    question: "What data does Kindora track for prospects?",
    answer:
      "Kindora tracks giving history, capacity indicators, interests, connections, communication logs, meeting notes, and engagement scores — all in one comprehensive prospect profile.",
  },
  {
    question: "Can Kindora automate follow-up tasks?",
    answer:
      "Yes. Kindora triggers personalised follow-up tasks based on prospect stage, last activity date, and engagement score. Your team is always reminded to take the next step.",
  },
  {
    question: "How is Kindora different from Bloomerang for prospects?",
    answer:
      "Bloomerang is a great donor management tool but doesn't include grant management, volunteer tracking, or programme reporting. Kindora gives you prospect management plus complete nonprofit operations in one platform.",
  },
  {
    question: "Can I assign prospects to team members?",
    answer:
      "Yes. Kindora lets you assign prospect owners, set follow-up reminders, share notes, and coordinate cultivation across your development team with full visibility.",
  },
];

const platformStats = [
  { metric: "3x", label: "More prospects converted" },
  { metric: "100%", label: "Pipeline visibility" },
  { metric: "Auto", label: "Follow-up triggers" },
  { metric: "All-in-one", label: "Nonprofit platform" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Prospect Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Prospect management software for nonprofits \u2014 pipeline tracking, capacity scoring, activity logging, and automated follow-ups.",
      url: "https://spacenexus.net/kindora/prospect-management-software",
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

export default function ProspectManagementSoftwarePage() {
  return (
    <>
      <Script id="prospect-management-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-teal-600">Prospect Management Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Identify and Cultivate{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">High-Value Prospects</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Prospect pipeline, capacity scoring, activity tracking, and automated follow-ups — identify the right prospects and guide them to their first gift.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 rounded-full shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Prospect Pipeline</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">18 Prospects</span>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { name: "David & Mary Wilson", stage: "Cultivation", capacity: "High", owner: "Sarah M.", color: "from-teal-400 to-teal-500" },
                    { name: "The Harrison Trust", stage: "Qualification", capacity: "High", owner: "James K.", color: "from-emerald-400 to-emerald-500" },
                    { name: "Jennifer Park", stage: "Identification", capacity: "Medium", owner: "Lisa R.", color: "from-blue-400 to-blue-500" },
                    { name: "Global Tech Corp", stage: "Solicitation", capacity: "High", owner: "Sarah M.", color: "from-amber-400 to-amber-500" },
                  ].map((prospect) => (
                    <div key={prospect.name} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${prospect.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                        {prospect.name.split(" ").slice(0, 2).map((n) => n[0]).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">{prospect.name}</p>
                        <p className="text-xs text-gray-500">{prospect.owner} · {prospect.capacity} capacity</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          prospect.stage === "Solicitation" ? "bg-teal-100 text-teal-700" :
                          prospect.stage === "Cultivation" ? "bg-emerald-100 text-emerald-700" :
                          prospect.stage === "Qualification" ? "bg-blue-100 text-blue-700" :
                          "bg-amber-100 text-amber-700"
                        }`}>{prospect.stage}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-gray-500">Pipeline Health</p>
                    <p className="text-xs font-bold text-teal-600">Strong</p>
                  </div>
                  <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-500" style={{ width: "72%" }} />
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">72% of pipeline at qualification or above</p>
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
                <div className="text-3xl lg:text-4xl font-black text-teal-500 mb-1">{stat.metric}</div>
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
            <p className="text-sm font-semibold text-teal-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Complete Prospect Management</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From identification to conversion — every stage of the prospect lifecycle, one platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-teal-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-teal-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{feature.title}</h3>
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
            <p className="text-sm font-semibold text-teal-500 uppercase tracking-wider mb-3">How We Compare</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Other Prospect Software</h2>
            <p className="text-lg text-gray-600">See why nonprofits choose Kindora over Bloomerang, Blackbaud, and Lurato.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-teal-600">Kindora</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Bloomerang</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Blackbaud</th>
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
                        {typeof row.blackbaud === "boolean" ? (
                          row.blackbaud ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
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
            <p className="text-sm font-semibold text-teal-500 uppercase tracking-wider mb-3">FAQ</p>
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
      <section className="py-20 lg:py-28 bg-gradient-to-br from-teal-500 via-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Identify High-Value Prospects?</h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Join nonprofits using Kindora to cultivate prospects and convert them into major donors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-teal-600 bg-white hover:bg-teal-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
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
