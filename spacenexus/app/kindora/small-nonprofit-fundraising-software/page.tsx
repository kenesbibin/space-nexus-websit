import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Small Nonprofit Fundraising Software | Affordable Fundraising",
  description:
    "Looking for fundraising software for your small nonprofit? Kindora offers donor management, online donation forms, campaign tracking, and reporting — built for small teams.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/small-nonprofit-fundraising-software",
  },
  openGraph: {
    title: "Small Nonprofit Fundraising Software",
    description: "Fundraising software built for small nonprofits — donors, campaigns, and reporting in one platform.",
    url: "https://spacenexus.net/kindora/small-nonprofit-fundraising-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Small Nonprofit Fundraising Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Nonprofit Fundraising Software",
    description: "Fundraising software for small nonprofits — donors, campaigns, and reporting in one platform.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "small nonprofit fundraising software",
    "fundraising software for small nonprofits",
    "small nonprofit fundraising tools",
    "affordable fundraising software",
    "small charity fundraising software",
    "nonprofit fundraising platform small",
    "small nonprofit donation software",
    "fundraising software for small organisations",
    "small team fundraising software",
    "low cost fundraising software",
    "nonprofit fundraising small budget",
    "best fundraising software small nonprofit",
    "easy fundraising software",
    "simple fundraising software",
    "small nonprofit campaign software",
  ],
};

const benefits = [
  {
    metric: "3x",
    title: "Raise More Money",
    description: "Online donation forms, recurring giving, and campaign pages help small nonprofits raise 3x more than traditional methods.",
  },
  {
    metric: "30min",
    title: "Set Up Today",
    description: "Create donation forms, import donors, and launch campaigns with setup time depending on your data and workflow needs — no technical skills needed.",
  },
  {
    metric: "Flat",
    title: "Flat-Rate Pricing",
    description: "One predictable price for your entire team. No per-user fees, no transaction fees, no surprise costs.",
  },
  {
    metric: "All-in-One",
    title: "More Than Fundraising",
    description: "Donor CRM, grant tracking, volunteer management, and reporting included — replaces multiple tools.",
  },
];

const features = [
  {
    title: "Online Donation Forms",
    description: "Branded donation pages with suggested amounts, recurring options, and text-to-give.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Campaign Tracking",
    description: "Create campaigns, set goals, track progress, and measure performance in real time.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Recurring Giving",
    description: "Monthly, weekly, and annual subscriptions with donor self-management portal.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Donor CRM",
    description: "Complete donor profiles with giving history, segmentation, and engagement scoring.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Peer-to-Peer Fundraising",
    description: "Empower supporters to create their own fundraising pages for events and campaigns.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Automated Receipts",
    description: "Instant tax-compliant receipts sent automatically after every donation.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Email Communication",
    description: "Send campaign updates, thank-yous, and appeals with built-in email marketing.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Reporting & Dashboards",
    description: "Donor reports, campaign performance, and board-ready fundraising summaries.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const comparisonData = [
  { feature: "Online Donation Forms", kindora: true, classyy: true, giveLively: true, spreadsheet: false },
  { feature: "Recurring Giving", kindora: true, classyy: true, giveLively: true, spreadsheet: false },
  { feature: "Peer-to-Peer Fundraising", kindora: true, classyy: true, giveLively: "partial", spreadsheet: false },
  { feature: "Donor CRM", kindora: true, classyy: "partial", giveLively: false, spreadsheet: false },
  { feature: "Grant Management", kindora: true, classyy: false, giveLively: false, spreadsheet: false },
  { feature: "Volunteer Management", kindora: true, classyy: false, giveLively: false, spreadsheet: false },
  { feature: "Flat-Rate Pricing", kindora: true, classyy: false, giveLively: true, spreadsheet: true },
  { feature: "Setup in 30 Minutes", kindora: true, classyy: true, giveLively: true, spreadsheet: true },
];

const faqs = [
  {
    question: "What is the best fundraising software for small nonprofits?",
    answer:
      "The best fundraising software for small nonprofits combines online donation forms, recurring giving, donor CRM, and campaign tracking in one affordable platform. Kindora is built specifically for small teams — no enterprise complexity, no per-user fees, no expensive consultants.",
  },
  {
    question: "How much does fundraising software cost for a small nonprofit?",
    answer:
      "Fundraising software pricing varies. Classy charges $299+/month. Give Lively is free but limited. Kindora offers flat-rate pricing that includes donor CRM, grant tracking, volunteer management, and reporting — no per-user fees, no transaction fees.",
  },
  {
    question: "Can I accept online donations with Kindora?",
    answer:
      "Yes. Kindora provides branded online donation forms with one-time and recurring options, suggested amounts, text-to-give, and peer-to-peer fundraising pages. Donors can give from any device.",
  },
  {
    question: "Does Kindora include donor management?",
    answer:
      "Yes. Every Kindora plan includes complete donor CRM — donor profiles, giving history, segmentation, engagement scoring, and communication tracking. It's not a separate add-on.",
  },
  {
    question: "What makes Kindora different from other fundraising platforms?",
    answer:
      "Most fundraising platforms only handle donations. Kindora includes donor CRM, grant tracking, volunteer management, email communication, and reporting in one platform — replacing 3–4 separate tools at a flat, affordable price.",
  },
];

const platformStats = [
  { metric: "3x", label: "More donations" },
  { metric: "30min", label: "Setup time" },
  { metric: "Flat Rate", label: "Predictable pricing" },
  { metric: "All-in-One", label: "Platform" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Small Nonprofit Fundraising Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Fundraising software for small nonprofits — donor management, online donations, campaigns, and reporting.",
      url: "https://spacenexus.net/kindora/small-nonprofit-fundraising-software",
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

export default function SmallNonprofitFundraisingSoftwarePage() {
  return (
    <>
      <Script id="small-nonprofit-fundraising-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-amber-600">Small Nonprofit Fundraising</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Fundraising Software for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Small Nonprofits</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Raise more money with online donation forms, recurring giving, campaign tracking, and donor CRM — all designed for small teams with big missions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-700 rounded-full shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:-translate-y-0.5"
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

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
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
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platformStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">{stat.metric}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 text-sm font-semibold mb-4">Why Kindora</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Fundraising Built for Small Teams</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Most fundraising platforms are designed for large organisations. Kindora gives small nonprofits the tools to raise more money without the complexity or cost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white text-xl font-bold mb-5">
                  {benefit.metric}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 text-sm font-semibold mb-4">Features</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Everything You Need to Fundraise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From donation forms to campaign dashboards, Kindora covers every aspect of small nonprofit fundraising.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 text-sm font-semibold mb-4">How We Compare</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Other Fundraising Platforms</h2>
            <p className="text-lg text-gray-600">See why small nonprofits choose Kindora over Classy, Give Lively, and spreadsheets.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-amber-600">Kindora</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Classy</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Give Lively</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Spreadsheets</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className={i < comparisonData.length - 1 ? "border-b border-gray-50" : ""}>
                      <td className="py-4 px-6 text-sm text-gray-900 font-medium">{row.feature}</td>
                      {[row.kindora, row.classyy, row.giveLively, row.spreadsheet].map((val, j) => (
                        <td key={j} className="py-4 px-6 text-center">
                          {typeof val === "boolean" ? (
                            val ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                          ) : (
                            <span className="text-yellow-500 text-sm">Partial</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 text-sm font-semibold mb-4">FAQs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Raise More Money?</h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
            Join small nonprofits that trust Kindora to power their fundraising. Start accepting donations today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-amber-600 bg-white hover:bg-amber-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
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
