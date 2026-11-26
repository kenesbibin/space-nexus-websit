import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Best CRM for Small Nonprofits | Affordable Donor Management",
  description:
    "Looking for the best CRM for small nonprofits? Kindora offers affordable donor management, grant tracking, and reporting — designed for small teams with big missions.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/best-crm-for-small-nonprofits",
  },
  openGraph: {
    title: "Best CRM for Small Nonprofits",
    description: "Affordable, easy-to-use CRM for small nonprofits — donor management, grant tracking, and reporting in one platform.",
    url: "https://spacenexus.net/kindora/best-crm-for-small-nonprofits",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Best CRM for Small Nonprofits" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best CRM for Small Nonprofits",
    description: "Affordable donor management and grant tracking for small nonprofits — all in one platform.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "best crm for small nonprofits",
    "best nonprofit crm",
    "best crm for nonprofits",
    "affordable crm for small nonprofits",
    "small nonprofit crm",
    "nonprofit crm for small teams",
    "best donor management crm",
    "small nonprofit software",
    "easy nonprofit crm",
    "simple nonprofit crm",
    "cheap nonprofit crm",
    "nonprofit crm small budget",
    "best crm for small charities",
    "nonprofit crm comparison",
    "small nonprofit donor software",
  ],
};

const benefits = [
  {
    metric: "5-in-1",
    title: "Built for Small Nonprofits",
    description: "Designed specifically for small teams — no enterprise complexity, no expensive consultants, no steep learning curve.",
  },
  {
    metric: "30min",
    title: "Setup in Minutes",
    description: "Import contacts from spreadsheets, set up donation forms, and start tracking donors with setup time depending on your data and workflow needs.",
  },
  {
    metric: "Unlimited",
    title: "Users, No Per-Seat Fees",
    description: "Add your entire team — staff, volunteers, board members — without paying per user. One flat rate for everyone.",
  },
  {
    metric: "All-in-One",
    title: "Donors, Grants & More",
    description: "Donor CRM, grant tracking, volunteer management, and reporting in one platform — replaces 3–4 separate tools.",
  },
];

const features = [
  {
    title: "Donor Profiles & CRM",
    description: "Complete donor records with giving history, communication log, and engagement score.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Grant Tracking",
    description: "Track applications, budgets, deadlines, and funder reports — no separate grant software needed.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Donation Tracking",
    description: "Track every gift — one-time, recurring, pledged — with automatic receipts and reporting.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Email Communication",
    description: "Send personalised emails to donors with built-in templates and bulk messaging.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Volunteer Management",
    description: "Track hours, schedule shifts, and manage volunteer recognition.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Reporting & Dashboards",
    description: "Simple, clear reports on donors, donations, grants, and campaign performance.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Online Donation Forms",
    description: "Branded donation forms with recurring giving, suggested amounts, and text-to-give.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Easy Data Import",
    description: "Import contacts and donation history from spreadsheets or other CRMs with zero data loss.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
  },
];

const comparisonData = [
  { feature: "Donor CRM", kindora: true, bloomerang: true, salesforce: true, spreadsheet: false },
  { feature: "Grant Management", kindora: true, bloomerang: false, salesforce: "partial", spreadsheet: false },
  { feature: "Volunteer Management", kindora: true, bloomerang: false, salesforce: false, spreadsheet: false },
  { feature: "Online Donation Forms", kindora: true, bloomerang: true, salesforce: true, spreadsheet: false },
  { feature: "Email Communication", kindora: true, bloomerang: "partial", salesforce: "partial", spreadsheet: false },
  { feature: "Setup in 30 Minutes", kindora: true, bloomerang: true, salesforce: false, spreadsheet: true },
  { feature: "Unlimited Users", kindora: true, bloomerang: false, salesforce: false, spreadsheet: true },
  { feature: "No Per-Seat Fees", kindora: true, bloomerang: false, salesforce: false, spreadsheet: true },
  { feature: "Affordable Pricing", kindora: true, bloomerang: true, salesforce: false, spreadsheet: true },
  { feature: "No Consultants Needed", kindora: true, bloomerang: true, salesforce: false, spreadsheet: true },
];

const faqs = [
  {
    question: "What is the best CRM for small nonprofits?",
    answer:
      "The best CRM for small nonprofits is one that is affordable, easy to set up, and covers donor management, donation tracking, email communication, and reporting — without requiring consultants or technical skills. Kindora is designed specifically for small teams with all these capabilities at a flat, affordable price.",
  },
  {
    question: "How much does a nonprofit CRM cost?",
    answer:
      "Nonprofit CRM pricing varies widely. Salesforce can cost $60–$300+ per user per month. Bloomerang starts around $125/month. Kindora offers flat-rate pricing with unlimited users — no per-seat fees, no hidden costs, making it one of the most affordable options for small nonprofits.",
  },
  {
    question: "Can I use Kindora if I'm not technical?",
    answer:
      "Absolutely. Kindora is designed for non-technical users. Import your data from spreadsheets, start tracking donors, and send emails — no coding, no consultants, no training required. Most teams are up and running in time varies by data and workflow needs.",
  },
  {
    question: "Does Kindora work for organisations with fewer than 10 staff?",
    answer:
      "Yes. Kindora is built for small nonprofits. Whether you have 2 staff or 50, you get the same features and unlimited users at one flat price. No per-seat fees that penalise growing teams.",
  },
  {
    question: "What makes Kindora different from Salesforce for small nonprofits?",
    answer:
      "Salesforce is powerful but complex and expensive for small teams — most nonprofits need consultants to set it up and maintain it. Kindora gives you the same donor management, donation tracking, and email features in an easy-to-use platform that works out of the box.",
  },
];

const platformStats = [
  { metric: "5-in-1", label: "For small nonprofits" },
  { metric: "30min", label: "Setup time" },
  { metric: "Unlimited", label: "Users included" },
  { metric: "All-in-One", label: "Platform" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Best CRM for Small Nonprofits",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "The best CRM for small nonprofits — affordable donor management, grant tracking, volunteer tools, and reporting in one platform.",
      url: "https://spacenexus.net/kindora/best-crm-for-small-nonprofits",
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

export default function BestCrmForSmallNonprofitsPage() {
  return (
    <>
      <Script id="best-crm-small-nonprofits-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-blue-600">Best for Small Nonprofits</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              The Best CRM for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Small Nonprofits</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Donor management, grant tracking, volunteer tools, and reporting — all in one affordable platform designed for small teams with big missions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
                <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">{stat.metric}</p>
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">Why Kindora</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Built for Small Teams, Not Enterprise Budgets</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Most CRM platforms are built for large organisations. Kindora is purpose-built for small nonprofits that need powerful tools without the complexity or cost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xl font-bold mb-5">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 text-sm font-semibold mb-4">Features</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Everything Small Nonprofits Need</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From donor profiles to grant tracking, Kindora covers every capability your small team needs — without the complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Other CRM Options</h2>
            <p className="text-lg text-gray-600">See why small nonprofits choose Kindora over enterprise CRMs and spreadsheets.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-blue-600">Kindora</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Bloomerang</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Salesforce</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Spreadsheets</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className={i < comparisonData.length - 1 ? "border-b border-gray-50" : ""}>
                      <td className="py-4 px-6 text-sm text-gray-900 font-medium">{row.feature}</td>
                      {[row.kindora, row.bloomerang, row.salesforce, row.spreadsheet].map((val, j) => (
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 text-sm font-semibold mb-4">FAQs</span>
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
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Find the Best CRM?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of small nonprofits choosing Kindora over spreadsheets and enterprise CRMs.
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
