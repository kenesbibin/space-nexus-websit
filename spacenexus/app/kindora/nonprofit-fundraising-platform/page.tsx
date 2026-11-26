import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Nonprofit Fundraising Platform | Raise More with Kindora",
  description:
    "Kindora nonprofit fundraising platform helps organisations raise more with campaign pages, peer-to-peer fundraising, recurring giving, and real-time progress tracking — all in one system.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/nonprofit-fundraising-platform",
  },
  openGraph: {
    title: "Nonprofit Fundraising Platform",
    description: "Raise more with Kindora's all-in-one nonprofit fundraising platform — campaigns, peer-to-peer, recurring giving, and reporting.",
    url: "https://spacenexus.net/kindora/nonprofit-fundraising-platform",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Nonprofit Fundraising Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Fundraising Platform",
    description: "Raise more with Kindora — campaign pages, peer-to-peer fundraising, recurring giving, and real-time dashboards.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "nonprofit fundraising platform",
    "fundraising platform for nonprofits",
    "charity fundraising platform",
    "online fundraising platform",
    "NGO fundraising platform",
    "nonprofit donation platform",
    "fundraising website platform",
    "peer-to-peer fundraising platform",
    "campaign fundraising platform",
    "nonprofit crowdfunding platform",
    "best fundraising platform",
    "affordable fundraising platform",
    "fundraising tools for nonprofits",
    "digital fundraising platform",
    "nonprofit giving platform",
  ],
};

const features = [
  {
    title: "Campaign Pages",
    description: "Create beautiful, branded fundraising campaign pages with real-time progress bars and goal tracking.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Peer-to-Peer Fundraising",
    description: "Empower supporters to create personal fundraising pages and collect donations on your behalf.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Recurring Giving",
    description: "Monthly, quarterly, and annual subscription donations with auto-renewal and donor self-management.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Online Donation Forms",
    description: "Customisable, mobile-friendly donation forms that embed on your website or stand alone.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Text-to-Give",
    description: "Let supporters donate via text message with a simple keyword and automatic receipt.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Event Fundraising",
    description: "Gala dinners, fun runs, auction events \u2014 manage event registrations, ticketing, and donations together.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Real-Time Dashboard",
    description: "Live donation feed, campaign progress, and fundraising metrics as gifts come in.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Automated Receipts",
    description: "Tax-compliant receipts generated and emailed instantly after every donation.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

const comparisonData = [
  { feature: "Campaign Pages", kindora: true, classyla: true, givegently: true, oneCause: true },
  { feature: "Peer-to-Peer Fundraising", kindora: true, classyla: true, givegently: true, oneCause: "partial" },
  { feature: "Recurring Giving", kindora: true, classyla: true, givegently: true, oneCause: true },
  { feature: "Text-to-Give", kindora: true, classyla: false, givegently: false, oneCause: false },
  { feature: "Event Fundraising", kindora: true, classyla: true, givegently: false, oneCause: true },
  { feature: "Grant Management", kindora: true, classyla: false, givegently: false, oneCause: false },
  { feature: "Donor CRM", kindora: true, classyla: "partial", givegently: "partial", oneCause: false },
  { feature: "Volunteer Management", kindora: true, classyla: false, givegently: false, oneCause: false },
];

const faqs = [
  {
    question: "What is a nonprofit fundraising platform?",
    answer:
      "A nonprofit fundraising platform is software that helps organisations raise money through online campaigns, donation forms, peer-to-peer fundraising, events, and recurring giving. It centralises all fundraising activities with donor tracking, reporting, and automated receipting.",
  },
  {
    question: "How is Kindora different from Classy or Give Lively?",
    answer:
      "Classy and Give Lively focus primarily on fundraising campaigns. Kindora includes campaign and peer-to-peer tools plus complete nonprofit operations \u2014 grant management, volunteer tracking, programme reporting, and financial management \u2014 all in one platform.",
  },
  {
    question: "Does Kindora support peer-to-peer fundraising?",
    answer:
      "Yes. Kindora lets supporters create personal fundraising pages, share them on social media, and collect donations on your behalf. You can track peer-to-peer performance and recognise top fundraisers in real time.",
  },
  {
    question: "Can I run event fundraisers on Kindora?",
    answer:
      "Yes. Kindora supports gala dinners, fun runs, auctions, and other fundraising events with registration, ticketing, donation collection, and event reporting \u2014 all connected to your donor CRM.",
  },
  {
    question: "Does Kindora provide real-time fundraising dashboards?",
    answer:
      "Yes. Kindora includes live donation feeds, campaign progress tracking, and fundraising metric dashboards that update in real time as donations come in.",
  },
  {
    question: "Is Kindora suitable for small nonprofits?",
    answer:
      "Yes. Kindora is designed for organisations of all sizes. Small nonprofits benefit from the all-in-one approach, which eliminates the need for multiple disconnected tools and reduces overall software costs.",
  },
];

const platformStats = [
  { metric: "3x", label: "More fundraising revenue" },
  { metric: "Real-time", label: "Campaign tracking" },
  { metric: "100%", label: "Mobile-optimised" },
  { metric: "All-in-one", label: "Platform" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Nonprofit Fundraising Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Nonprofit fundraising platform \u2014 campaign pages, peer-to-peer fundraising, recurring giving, and real-time dashboards.",
      url: "https://spacenexus.net/kindora/nonprofit-fundraising-platform",
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

export default function NonprofitFundraisingPlatformPage() {
  return (
    <>
      <Script id="nonprofit-fundraising-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-rose-600">Nonprofit Fundraising Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                The Fundraising Platform{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Built for Nonprofits</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Campaign pages, peer-to-peer fundraising, recurring giving, text-to-give, and event fundraising — all connected to your donor CRM with real-time dashboards.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-700 rounded-full shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Live Campaign Dashboard</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Active
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  {[
                    { name: "Spring Appeal", raised: "78%", goal: "Goal", supporters: "342 supporters", color: "from-rose-400 to-rose-500" },
                    { name: "Annual Gala", raised: "95%", goal: "Goal", supporters: "189 supporters", color: "from-pink-400 to-pink-500" },
                    { name: "Youth Programme", raised: "45%", goal: "Goal", supporters: "78 supporters", color: "from-amber-400 to-amber-500" },
                  ].map((campaign) => (
                    <div key={campaign.name} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-semibold text-gray-900">{campaign.name}</p>
                        <p className="text-xs font-bold text-rose-600">{campaign.raised}</p>
                      </div>
                      <div className="w-full h-2 bg-white rounded-full overflow-hidden mb-1">
                        <div className={`h-full rounded-full bg-gradient-to-r ${campaign.color}`} style={{ width: campaign.raised }} />
                      </div>
                      <p className="text-[10px] text-gray-400">{campaign.supporters}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-black text-gray-900">609</p>
                      <p className="text-[10px] text-gray-500">Total Supporters</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-black text-rose-600">Active</p>
                      <p className="text-[10px] text-gray-500">3 Campaigns</p>
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
                <div className="text-3xl lg:text-4xl font-black text-rose-500 mb-1">{stat.metric}</div>
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
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything to Raise More</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From campaign pages to peer-to-peer — every fundraising channel, one platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-rose-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-rose-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">{feature.title}</h3>
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
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">How We Compare</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Other Fundraising Platforms</h2>
            <p className="text-lg text-gray-600">See why nonprofits choose Kindora over Classy, Give Lively, and OneCause.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-rose-600">Kindora</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Classy</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Give Lively</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">OneCause</th>
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
                        {typeof row.classyla === "boolean" ? (
                          row.classyla ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.givegently === "boolean" ? (
                          row.givegently ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.oneCause === "boolean" ? (
                          row.oneCause ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
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
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">FAQ</p>
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
      <section className="py-20 lg:py-28 bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Raise More?</h2>
          <p className="text-xl text-rose-100 mb-10 max-w-2xl mx-auto">
            Join nonprofits using Kindora to power their fundraising with campaigns, peer-to-peer, and recurring giving.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-rose-600 bg-white hover:bg-rose-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
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
