import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Donor Stewardship Software | Donor Retention Software",
  description:
    "Kindora donor stewardship software helps you build lasting donor relationships, automate thank-yous, track engagement, and increase retention — all from one integrated platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/donor-stewardship-software",
  },
  openGraph: {
    title: "Donor Stewardship Software",
    description: "Build lasting donor relationships and increase retention with Kindora donor stewardship software.",
    url: "https://spacenexus.net/kindora/donor-stewardship-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora Donor Stewardship Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donor Stewardship Software",
    description: "Build lasting donor relationships and increase retention with Kindora donor stewardship software.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "donor stewardship software",
    "donor retention software",
    "donor stewardship system",
    "donor relationship software",
    "nonprofit stewardship",
    "donor engagement software",
    "donor appreciation software",
    "donor follow-up software",
    "donor thank you software",
    "donor retention system",
    "donor stewardship tools",
    "best donor stewardship software",
    "donor relationship management",
    "nonprofit donor software",
    "donor management tools",
  ],
};

const benefits = [
  {
    metric: "Tracked",
    title: "Higher Donor Retention",
    description: "Track giving patterns, identify donors who may need follow-up, and record stewardship activity. Retention outcomes vary by organization.",
  },
  {
    metric: "Personalized",
    title: "Increased Lifetime Value",
    description: "Personalized stewardship journeys help teams coordinate communications and follow-ups with supporters.",
  },
  {
    metric: "Auto",
    title: "Automated Stewardship Workflows",
    description: "Automated thank-yous, milestone alerts, and re-engagement workflows ensure no donor falls through the cracks.",
  },
  {
    metric: "Real-Time",
    title: "Engagement Insights",
    description: "See exactly how engaged each donor is with real-time engagement scoring — know when to thank, when to ask, and when to reconnect.",
  },
];

const features = [
  {
    title: "Engagement Scoring",
    description: "Automatically score donor engagement based on giving frequency, event attendance, email opens, and volunteer activity.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Automated Thank-Yous",
    description: "Instant personalised thank-you emails sent automatically after every donation — no manual work, no missed acknowledgements.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Lapsed Donor Alerts",
    description: "Automatic alerts when donors haven't given in a defined period — triggers re-engagement workflows.",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
  {
    title: "Stewardship Workflows",
    description: "Build custom stewardship journeys that guide donors from first gift to lifelong advocacy — fully automated.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Personalised Communication",
    description: "Send the right message at the right time with personalised communication based on giving history, interests, and engagement.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Giving Milestone Tracking",
    description: "Celebrate donor milestones — first gift, 1-year anniversary, cumulative giving levels — with automated recognitions.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    title: "Donor Portal",
    description: "Self-service portal for donors to view giving history, update payment methods, and download tax receipts.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Impact Reporting",
    description: "Show donors exactly how their gifts make a difference with personalised impact reports and impact metrics.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const comparisonData = [
  { feature: "Engagement Scoring", kindora: true, bloomerang: true, blackbaud: false, salesforce: true },
  { feature: "Auto Thank-Yous", kindora: true, bloomerang: true, blackbaud: false, salesforce: false },
  { feature: "Lapsed Donor Alerts", kindora: true, bloomerang: true, blackbaud: false, salesforce: false },
  { feature: "Stewardship Workflows", kindora: true, bloomerang: false, blackbaud: false, salesforce: false },
  { feature: "Personalised Comms", kindora: true, bloomerang: true, blackbaud: false, salesforce: true },
  { feature: "Milestone Tracking", kindora: true, bloomerang: false, blackbaud: false, salesforce: false },
  { feature: "Donor Portal", kindora: true, bloomerang: false, blackbaud: false, salesforce: false },
  { feature: "All-in-One Platform", kindora: true, bloomerang: false, blackbaud: true, salesforce: false },
];

const faqs = [
  {
    question: "What is donor stewardship software?",
    answer:
      "Donor stewardship software helps nonprofits build and maintain relationships with donors after they give. It automates thank-yous, tracks engagement, sends personalised communications, and ensures every donor feels valued — leading to higher retention and lifetime value.",
  },
  {
    question: "How does donor stewardship software improve retention?",
    answer:
      "Donor stewardship software can help teams coordinate personalized touchpoints, track donor engagement, identify donors for follow-up, and plan re-engagement campaigns. Retention outcomes depend on each organization and its program.",
  },
  {
    question: "What features should I look for in donor stewardship software?",
    answer:
      "Key features include automated thank-yous, engagement scoring, lapsed donor alerts, stewardship workflows, personalised communication, giving milestone tracking, donor portal, and impact reporting. These features work together to create comprehensive donor journeys.",
  },
  {
    question: "How is Kindora different from other donor stewardship software?",
    answer:
      "Most stewardship tools only handle post-gift communication. Kindora includes stewardship plus donor management, grant tracking, volunteer management, programme tracking, events, and reporting — all in one platform. You get complete organisational visibility, not just stewardship tools.",
  },
  {
    question: "Can I migrate my donor data to Kindora?",
    answer:
      "Yes. Kindora provides full data migration support. Our team helps you import donor records from spreadsheets, other CRMs, or any data source — so nothing is lost in the switch.",
  },
];

const platformStats = [
  { metric: "Auto", label: "Automated Stewardship" },
  { metric: "Real-Time", label: "Engagement Scoring" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Donor Stewardship Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Donor stewardship software — build lasting donor relationships, automate thank-yous, track engagement, and increase retention.",
      url: "https://spacenexus.net/kindora/donor-stewardship-software",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
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

export default function DonorStewardshipSoftwarePage() {
  return (
    <>
      <Script id="donor-stewardship-software-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-blue-600">Donor Stewardship</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Donor Stewardship Software That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">Turns One-Time Givers Into Lifelong Donors</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Build lasting donor relationships and increase retention through personalised stewardship — the donor stewardship software nonprofits trust.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-cyan-600 hover:to-blue-700 rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
                <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">{stat.metric}</p>
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">Why Donor Stewardship</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">One-Time Givers Deserve More Than a Receipt</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Without donor stewardship software, nonprofits struggle to retain donors after their first gift. Kindora turns one-time givers into lifelong supporters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white text-xl font-bold mb-5">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">Features</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Everything You Need to Steward Donors</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From engagement scoring to impact reporting, Kindora donor stewardship covers every aspect of donor relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">How We Compare</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Other Stewardship Software</h2>
            <p className="text-lg text-gray-600">See why nonprofits choose Kindora over generic donor stewardship tools.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-blue-600">Kindora</th>
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
                        {typeof row.bloomerang === "boolean" ? (
                          row.bloomerang ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
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
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">FAQs</span>
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
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Retain More Donors?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of nonprofits turning one-time givers into lifelong donors with professional stewardship software.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
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
