import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Affordable Nonprofit CRM | Low-Cost Donor Management",
  description:
    "Looking for an affordable nonprofit CRM? Kindora offers donor management, grant tracking, and reporting at a flat rate with unlimited users — no per-seat fees, no hidden costs.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/affordable-nonprofit-crm",
  },
  openGraph: {
    title: "Affordable Nonprofit CRM",
    description: "Affordable nonprofit CRM with donor management, grant tracking, and unlimited users at a flat rate.",
    url: "https://spacenexus.net/kindora/affordable-nonprofit-crm",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Affordable Nonprofit CRM" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Nonprofit CRM",
    description: "Affordable nonprofit CRM — donor management, grant tracking, and unlimited users at a flat rate.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "affordable nonprofit crm",
    "cheap nonprofit crm",
    "low cost nonprofit crm",
    "nonprofit crm pricing",
    "affordable donor management",
    "nonprofit crm for small budget",
    "inexpensive nonprofit software",
    "free nonprofit crm",
    "nonprofit crm cost",
    "affordable crm for nonprofits",
    "low cost donor software",
    "budget nonprofit crm",
    "nonprofit software pricing",
    "affordable nonprofit software",
    "best value nonprofit crm",
  ],
};

const benefits = [
  {
    metric: "Flat",
    title: "Flat-Rate Pricing",
    description: "One price for the entire platform. No per-user fees, no per-record charges, no surprise overages. What you see is what you pay.",
  },
  {
    metric: "All",
    title: "All Features Included",
    description: "Donor CRM, grant tracking, volunteer management, email communication, and reporting — every plan includes everything.",
  },
  {
    metric: "∞",
    title: "Unlimited Users",
    description: "Add staff, volunteers, board members, and interns without paying per seat. Your CRM grows with your team at no extra cost.",
  },
  {
    metric: "0",
    title: "No Hidden Costs",
    description: "No setup fees, no training fees, no implementation fees, no per-page charges. Just straightforward, transparent pricing.",
  },
];

const features = [
  {
    title: "Donor CRM & Tracking",
    description: "Complete donor profiles, giving history, segmentation, and engagement scoring.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Grant Management",
    description: "Track applications, budgets, deadlines, and funder reports — included in every plan.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Volunteer Management",
    description: "Hours tracking, scheduling, and volunteer recognition — no extra module required.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Email Communication",
    description: "Built-in email marketing with templates, bulk sending, and open tracking.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Donation Forms",
    description: "Branded online donation forms with recurring giving and text-to-give.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Reporting & Dashboards",
    description: "Donor reports, grant compliance, financial summaries, and board-ready exports.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Workflow Automation",
    description: "Automate thank-yous, follow-ups, and re-engagement with visual workflow builder.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Easy Setup",
    description: "Get started in time varies by data and workflow needs. Import from spreadsheets, no consultants needed.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const comparisonData = [
  { feature: "Donor CRM", kindora: true, bloomerang: true, salesforce: true },
  { feature: "Grant Management", kindora: true, bloomerang: false, salesforce: false },
  { feature: "Volunteer Management", kindora: true, bloomerang: false, salesforce: false },
  { feature: "Email Marketing", kindora: true, bloomerang: true, salesforce: true },
  { feature: "Online Donation Forms", kindora: true, bloomerang: true, salesforce: true },
  { feature: "Workflow Automation", kindora: true, bloomerang: false, salesforce: true },
  { feature: "Unlimited Users", kindora: true, bloomerang: false, salesforce: false },
  { feature: "Flat-Rate Pricing", kindora: true, bloomerang: false, salesforce: false },
  { feature: "No Per-Seat Fees", kindora: true, bloomerang: false, salesforce: false },
  { feature: "Setup in 30 Minutes", kindora: true, bloomerang: true, salesforce: false },
];

const faqs = [
  {
    question: "How much does an affordable nonprofit CRM cost?",
    answer:
      "Most nonprofit CRMs charge $50–$300+ per user per month. Salesforce starts at $60/user/month. Bloomerang charges around $125/month for limited users. Kindora offers flat-rate pricing with unlimited users — one predictable cost for your entire team.",
  },
  {
    question: "What's the catch with affordable CRM pricing?",
    answer:
      "There's no catch. Kindora includes every feature at every plan level — donor CRM, grant tracking, volunteer management, email marketing, and reporting. No feature gating, no upsells, no hidden costs. Flat-rate pricing means predictable budgeting.",
  },
  {
    question: "Can an affordable CRM really replace Salesforce or Bloomerang?",
    answer:
      "Yes. Kindora includes everything Bloomerang offers for donor management — plus grant tracking, volunteer management, and workflow automation that Bloomerang doesn't have. Compared to Salesforce, Kindora is easier to set up and doesn't require consultants.",
  },
  {
    question: "Is Kindora really free to try?",
    answer:
      "Yes. Kindora offers a free Starter plan with no credit card required. You get full access to every feature — donor CRM, grants, volunteers, email, and reporting — so you can evaluate the platform before committing.",
  },
  {
    question: "What nonprofit types benefit most from affordable CRM?",
    answer:
      "Small to mid-sized nonprofits with limited budgets — community organisations, churches, animal shelters, food banks, arts groups, and social services agencies. Any nonprofit that needs donor management and grant tracking without enterprise pricing.",
  },
];

const platformStats = [
  { metric: "Flat Rate", label: "Predictable pricing" },
  { metric: "All Features", label: "No feature gating" },
  { metric: "Unlimited", label: "Users included" },
  { metric: "No Fees", label: "Hidden costs" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Affordable Nonprofit CRM",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Affordable nonprofit CRM — donor management, grant tracking, and unlimited users at a flat rate.",
      url: "https://spacenexus.net/kindora/affordable-nonprofit-crm",
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

export default function AffordableNonprofitCrmPage() {
  return (
    <>
      <Script id="affordable-nonprofit-crm-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-green-600">Affordable CRM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Affordable</span>{" "}
              Nonprofit CRM
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Donor management, grant tracking, volunteer tools, and reporting — all at a flat rate with unlimited users. No per-seat fees, no hidden costs, no surprises.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-700 rounded-full shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
                <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">{stat.metric}</p>
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-4">Why Affordable</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Enterprise Features, Nonprofit Pricing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Other CRMs charge per user, per feature, or per record. Kindora gives you everything at one flat rate — the most affordable way to manage donors, grants, and volunteers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white text-xl font-bold mb-5">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-semibold mb-4">Features</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">All Features, One Price</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              No tiered plans, no feature gating. Every Kindora plan includes every capability — donor CRM, grants, volunteers, email, and reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-4">Pricing Comparison</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Affordable CRM vs Expensive CRM</h2>
            <p className="text-lg text-gray-600">See how Kindora's flat-rate pricing compares to per-user models.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-green-600">Kindora</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Bloomerang</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Salesforce</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className={i < comparisonData.length - 1 ? "border-b border-gray-50" : ""}>
                      <td className="py-4 px-6 text-sm text-gray-900 font-medium">{row.feature}</td>
                      {[row.kindora, row.bloomerang, row.salesforce].map((val, j) => (
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-semibold mb-4">FAQs</span>
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
      <section className="py-20 lg:py-28 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready for Affordable CRM?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Join nonprofits that chose Kindora for powerful features at a price that fits any budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-green-600 bg-white hover:bg-green-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
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
