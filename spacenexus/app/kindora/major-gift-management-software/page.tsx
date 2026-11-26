import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Major Gift Management Software | Manage Major Donors",
  description:
    "Kindora major gift management software helps nonprofits identify, cultivate, and track major gift donors with pipeline management, ask tracking, and stewardship workflows.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/major-gift-management-software",
  },
  openGraph: {
    title: "Major Gift Management Software",
    description: "Identify, cultivate, and close major gifts with Kindora's all-in-one major gift management software.",
    url: "https://spacenexus.net/kindora/major-gift-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Major Gift Management Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Major Gift Management Software",
    description: "Identify, cultivate, and close major gifts with Kindora — pipeline, ask tracking, and stewardship.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "major gift management software",
    "major donor management",
    "major gifts software",
    "major gift tracking",
    "major donor software",
    "major gift pipeline",
    "major gift cultivation",
    "major gift ask tracking",
    "nonprofit major gifts",
    "charity major donor software",
    "NGO major gifts management",
    "donor stewardship software",
    "gift officer software",
    "planned giving software",
    "best major gift software",
  ],
};

const features = [
  {
    title: "Gift Pipeline",
    description: "Visual pipeline to track major gift prospects from identification through cultivation, solicitation, and closure.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Donor Profiles",
    description: "Comprehensive profiles with giving history, interests, connections, communication log, and capacity indicators.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Ask Tracking",
    description: "Track ask amounts, expected close dates, solicitor assignment, and ask outcomes for every major gift opportunity.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Stewardship Workflows",
    description: "Automated touchpoints, thank-you sequences, and impact reports to keep major donors engaged and giving.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Capacity Indicators",
    description: "Wealth screening data and capacity indicators to help identify donors with major giving potential.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Activity Logging",
    description: "Log meetings, calls, events, and personal touches. Know exactly where each major gift prospect stands.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    title: "Team Collaboration",
    description: "Assign solicitors, set reminders, share notes, and coordinate cultivation across your development team.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Gift Reports",
    description: "Pipeline value, ask conversion rates, solicitor performance, and major gift revenue reports in one dashboard.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

const comparisonData = [
  { feature: "Gift Pipeline", kindora: true, bloomerrang: true, blackbaud: true, salesforce: true },
  { feature: "Donor Profiles", kindora: true, bloomerrang: true, blackbaud: true, salesforce: true },
  { feature: "Ask Tracking", kindora: true, bloomerrang: "partial", blackbaud: true, salesforce: true },
  { feature: "Stewardship Workflows", kindora: true, bloomerrang: false, blackbaud: "partial", salesforce: "partial" },
  { feature: "Capacity Indicators", kindora: true, bloomerrang: true, blackbaud: true, salesforce: true },
  { feature: "Activity Logging", kindora: true, bloomerrang: true, blackbaud: true, salesforce: true },
  { feature: "Grant Management", kindora: true, bloomerrang: false, blackbaud: false, salesforce: false },
  { feature: "Volunteer Tracking", kindora: true, bloomerrang: false, blackbaud: false, salesforce: false },
];

const faqs = [
  {
    question: "What is major gift management software?",
    answer:
      "Major gift management software helps nonprofits track and cultivate high-value donor relationships. It provides pipeline management, ask tracking, stewardship workflows, and activity logging to ensure major gift prospects are properly identified, cultivated, and solicited.",
  },
  {
    question: "How does Kindora help with major gift cultivation?",
    answer:
      "Kindora provides a visual gift pipeline, automated stewardship workflows, activity logging, and team collaboration tools. Your development team can track every touchpoint, assign solicitors, set reminders, and ensure no major gift opportunity falls through the cracks.",
  },
  {
    question: "Can Kindora track gift officer performance?",
    answer:
      "Yes. Kindora tracks solicitor assignments, ask conversion rates, pipeline velocity, and revenue by gift officer. Managers can see which team members are most effective and where additional support is needed.",
  },
  {
    question: "Does Kindora include wealth screening?",
    answer:
      "Yes. Kindora includes capacity indicators based on wealth screening data to help identify donors with major giving potential. These indicators are integrated directly into donor profiles for easy reference.",
  },
  {
    question: "How is Kindora different from Salesforce for major gifts?",
    answer:
      "Salesforce requires complex customisation and expensive add-ons for major gift management. Kindora includes it out of the box \u2014 plus grant management, volunteer tracking, and programme reporting \u2014 without the consulting fees.",
  },
  {
    question: "Can I manage planned gifts in Kindora?",
    answer:
      "Yes. Kindora supports planned giving tracking alongside major gifts. Track bequests, charitable trusts, and other planned gift commitments with the same pipeline and stewardship tools.",
  },
];

const platformStats = [
  { metric: "40%", label: "More major gifts closed" },
  { metric: "2x", label: "Faster gift cycle" },
  { metric: "100%", label: "Pipeline visibility" },
  { metric: "All-in-one", label: "Nonprofit platform" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Major Gift Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Major gift management software for nonprofits \u2014 pipeline management, ask tracking, stewardship workflows, and team collaboration.",
      url: "https://spacenexus.net/kindora/major-gift-management-software",
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

export default function MajorGiftManagementSoftwarePage() {
  return (
    <>
      <Script id="major-gift-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-indigo-600">Major Gift Management</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Close More Major Gifts{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">With Less Effort</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Pipeline management, ask tracking, stewardship workflows, and team collaboration — everything your development team needs to cultivate and close major gifts.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-blue-600 hover:to-indigo-700 rounded-full shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Major Gift Pipeline</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">3 Active</span>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { name: "Robert & Linda Chen", stage: "Solicitation", value: "Prospect", solicitor: "Sarah M.", color: "from-indigo-400 to-indigo-500" },
                    { name: "The Williams Foundation", stage: "Cultivation", value: "Prospect", solicitor: "James K.", color: "from-blue-400 to-blue-500" },
                    { name: "Dr. Ahmed Patel", stage: "Proposal", value: "Prospect", solicitor: "Sarah M.", color: "from-emerald-400 to-emerald-500" },
                    { name: "Tech Corp Foundation", stage: "Identification", value: "Prospect", solicitor: "Lisa R.", color: "from-amber-400 to-amber-500" },
                  ].map((donor) => (
                    <div key={donor.name} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${donor.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                        {donor.name.split(" ").slice(0, 2).map((n) => n[0]).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">{donor.name}</p>
                        <p className="text-xs text-gray-500">{donor.solicitor}</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          donor.stage === "Solicitation" ? "bg-indigo-100 text-indigo-700" :
                          donor.stage === "Cultivation" ? "bg-blue-100 text-blue-700" :
                          donor.stage === "Proposal" ? "bg-emerald-100 text-emerald-700" :
                          "bg-amber-100 text-amber-700"
                        }`}>{donor.stage}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-black text-gray-900">12</p>
                      <p className="text-[10px] text-gray-500">Active Prospects</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-indigo-600">3</p>
                      <p className="text-[10px] text-gray-500">Proposals Out</p>
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
                <div className="text-3xl lg:text-4xl font-black text-indigo-500 mb-1">{stat.metric}</div>
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
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Complete Major Gift Management</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From identification to stewardship — every stage of the major gift lifecycle, one platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-indigo-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-indigo-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
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
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">How We Compare</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Other Major Gift Software</h2>
            <p className="text-lg text-gray-600">See why nonprofits choose Kindora over Bloomerang, Blackbaud, and Salesforce.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-indigo-600">Kindora</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Bloomerang</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Blackbaud</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Salesforce</th>
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
                        {typeof row.salesforce === "boolean" ? (
                          row.salesforce ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
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
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">FAQ</p>
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
      <section className="py-20 lg:py-28 bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Close More Major Gifts?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join nonprofits using Kindora to cultivate major donors and close transformational gifts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-indigo-600 bg-white hover:bg-indigo-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
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
