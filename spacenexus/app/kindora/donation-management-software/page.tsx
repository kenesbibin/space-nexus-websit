import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Donation Management Software | Donation Tracking System",
  description:
    "Kindora donation management software helps you track donations, process gifts, and generate receipts automatically — all from one integrated platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/donation-management-software",
  },
  openGraph: {
    title: "Donation Management Software",
    description: "Track donations, process gifts, and generate receipts automatically with Kindora donation management software.",
    url: "https://spacenexus.net/kindora/donation-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora Donation Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donation Management Software",
    description: "Track donations, process gifts, and generate receipts automatically with Kindora donation management software.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "donation management software",
    "donation tracking system",
    "donation management system",
    "online donation software",
    "nonprofit donation software",
    "donation tracking software",
    "donation management platform",
    "charity donation software",
    "NGO donation management",
    "donation processing software",
    "donation receipt software",
    "donation management tools",
    "donation records software",
    "best donation management software",
    "donation management crm",
  ],
};

const benefits = [
  {
    metric: "100%",
    title: "Complete Gift Tracking",
    description: "Track every gift — one-time, recurring, in-kind, pledged — with full transaction history. No more lost donations or manual reconciliation.",
  },
  {
    metric: "Auto",
    title: "Automated Receipts",
    description: "Instant tax receipts sent automatically after every donation. No manual work, no missed acknowledgements, full compliance.",
  },
  {
    metric: "Real-Time",
    title: "Donation Reporting",
    description: "Live dashboards showing donation trends, campaign performance, and donor activity. Make data-driven fundraising decisions.",
  },
  {
    metric: "24/7",
    title: "Online Processing",
    description: "Accept donations anytime, anywhere — online forms, text-to-give, and mobile-friendly pages that work around the clock.",
  },
];

const features = [
  {
    title: "Donation Tracking",
    description: "Track every gift, pledge, and contribution with full transaction history and automatic categorisation.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    title: "Online Donation Forms",
    description: "Beautiful, mobile-friendly donation pages that convert visitors into donors — no coding required.",
    icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
  },
  {
    title: "Recurring Donations",
    description: "Set up and manage recurring gifts with automatic payment processing, failure handling, and donor management.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Tax Receipt Generation",
    description: "Automatic tax-compliant receipts generated and delivered after every donation — fully customisable templates.",
    icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
  },
  {
    title: "Donation Reporting",
    description: "Real-time reports on campaign performance, donor activity, giving trends, and financial summaries.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Payment Processing",
    description: "Accept credit cards, ACH, PayPal, and digital wallets — all PCI-compliant with automatic failure retry.",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
  {
    title: "Pledge Management",
    description: "Track multi-year pledges, send automatic reminders, and manage pledge payments — all in one place.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Text-to-Give",
    description: "Enable donors to give via text message — perfect for events, campaigns, and emergency fundraising.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
];

const comparisonData = [
  { feature: "Donation Tracking", kindora: true, bloomerang: true, blackbaud: true, spreadsheets: "partial" },
  { feature: "Online Donations", kindora: true, bloomerang: true, blackbaud: true, spreadsheets: false },
  { feature: "Recurring Gifts", kindora: true, bloomerang: true, blackbaud: true, spreadsheets: false },
  { feature: "Auto Receipts", kindora: true, bloomerang: true, blackbaud: false, spreadsheets: false },
  { feature: "Donation Reports", kindora: true, bloomerang: true, blackbaud: true, spreadsheets: "partial" },
  { feature: "Payment Processing", kindora: true, bloomerang: true, blackbaud: false, spreadsheets: false },
  { feature: "Pledge Management", kindora: true, bloomerang: false, blackbaud: true, spreadsheets: false },
  { feature: "All-in-One", kindora: true, bloomerang: false, blackbaud: true, spreadsheets: false },
];

const faqs = [
  {
    question: "What is donation management software?",
    answer:
      "Donation management software is a system that helps nonprofits track, process, and manage all donations — one-time, recurring, in-kind, and pledges. It automates receipt generation, provides real-time reporting, and gives teams complete visibility into their fundraising performance.",
  },
  {
    question: "How does donation management software improve fundraising?",
    answer:
      "Donation management software provides real-time insights into campaign performance, donor behaviour, and giving trends. It automates manual tasks like receipt generation, enables online giving, and helps nonprofits identify opportunities to increase donations and donor retention.",
  },
  {
    question: "What features should I look for in donation management software?",
    answer:
      "Key features include donation tracking, online donation forms, recurring gift management, automatic tax receipts, real-time reporting, payment processing, pledge management, and text-to-give. An all-in-one platform that integrates with your existing tools is ideal.",
  },
  {
    question: "How is Kindora different from other donation management software?",
    answer:
      "Most donation tools only handle gifts. Kindora includes donation management plus donor management, grant tracking, volunteer management, programme tracking, events, and reporting — all in one platform. You get complete organisational visibility, not just donation data.",
  },
  {
    question: "Can I migrate my donation data from spreadsheets to Kindora?",
    answer:
      "Yes. Kindora provides full data migration support. Our team helps you import donation records from spreadsheets, other systems, or any data source — so nothing is lost in the switch.",
  },
];

const platformStats = [
  { metric: "100%", label: "Gift Tracking" },
  { metric: "Auto", label: "Receipt Generation" },
  { metric: "Real-Time", label: "Donation Reporting" },
  { metric: "24/7", label: "Online Processing" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Donation Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Donation management software — track donations, process gifts, and generate receipts automatically.",
      url: "https://spacenexus.net/kindora/donation-management-software",
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

export default function DonationManagementSoftwarePage() {
  return (
    <>
      <Script id="donation-management-software-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-blue-600">Donation Management</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Donation Management Software That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">Never Misses a Gift</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Track every donation, process gifts, and generate receipts automatically — the donation management software nonprofits trust.
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">Why Donation Management</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Donations Deserve Better Than Spreadsheets</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Without donation management software, nonprofits lose track of gifts, miss receipts, and struggle to process donations efficiently. Kindora changes that.
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Everything You Need to Manage Donations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From tracking to receipts, Kindora donation management covers every aspect of donation processing.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Other Donation Software</h2>
            <p className="text-lg text-gray-600">See why nonprofits choose Kindora over generic donation management tools.</p>
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
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Spreadsheets</th>
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
                        {typeof row.spreadsheets === "boolean" ? (
                          row.spreadsheets ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Manage Donations Better?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of nonprofits replacing spreadsheets with professional donation management software.
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
