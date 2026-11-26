import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Nonprofit Operations Platform | Nonprofit Management Software",
  description:
    "Kindora nonprofit operations platform centralises donor management, fundraising, grants, volunteers, and reporting — one system for your entire organisation.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/nonprofit-operations-platform",
  },
  openGraph: {
    title: "Nonprofit Operations Platform",
    description: "Centralise all nonprofit operations in one integrated platform with Kindora.",
    url: "https://spacenexus.net/kindora/nonprofit-operations-platform",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Nonprofit Operations Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Operations Platform",
    description: "Centralise all nonprofit operations in one integrated platform with Kindora.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "nonprofit operations platform",
    "nonprofit management software",
    "nonprofit operations software",
    "nonprofit management platform",
    "all-in-one nonprofit software",
    "nonprofit operational software",
    "nonprofit system",
    "charity management platform",
    "NGO operations software",
    "nonprofit software platform",
    "nonprofit back office software",
    "nonprofit admin software",
    "unified nonprofit platform",
    "nonprofit organisation software",
    "nonprofit enterprise software",
  ],
};

const benefits = [
  {
    metric: "1",
    title: "Single Source of Truth",
    description: "All your nonprofit data — donors, grants, volunteers, events, programs — in one integrated system. No more spreadsheets or siloed tools.",
  },
  {
    metric: "40%",
    title: "Reduce Software Costs",
    description: "Replace 5-10 separate tools with one platform. Cut subscription fees, reduce training time, and eliminate integration headaches.",
  },
  {
    metric: "100%",
    title: "Full Organisational Visibility",
    description: "Real-time dashboards showing fundraising progress, program outcomes, volunteer engagement, and financial health — all in one view.",
  },
  {
    metric: "2x",
    title: "Team Productivity",
    description: "When your team uses one system instead of switching between tools, they accomplish twice as much in the same time.",
  },
];

const features = [
  {
    title: "Donor Management",
    description: "Complete CRM with giving history, donor segmentation, engagement tracking, and relationship management.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Fundraising & Campaigns",
    description: "Run campaigns, track donations, manage recurring gifts, and accept online giving — all built in.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Grant Management",
    description: "Track applications, manage deadlines, monitor budgets, and generate funder reports from one system.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Volunteer Management",
    description: "Recruit, schedule, track hours, and communicate with your volunteer team from a centralised dashboard.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Program Management",
    description: "Track program outcomes, manage enrolment, measure impact, and report results to stakeholders.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Event Management",
    description: "Create events, manage registrations, track attendance, and send automated event communications.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Reporting & Analytics",
    description: "Real-time dashboards and custom reports for fundraising, programs, grants, and organisational performance.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Workflow Automation",
    description: "Automate repetitive tasks, donor communications, and internal processes with visual workflow builder.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
];

const comparisonData = [
  { feature: "All-in-One Platform", kindora: true, blackbaud: true, salesforce: false, bloomerang: false },
  { feature: "Donor Management", kindora: true, blackbaud: true, salesforce: true, bloomerang: true },
  { feature: "Fundraising Tools", kindora: true, blackbaud: true, salesforce: "partial", bloomerang: true },
  { feature: "Grant Management", kindora: true, blackbaud: false, salesforce: false, bloomerang: false },
  { feature: "Volunteer Management", kindora: true, blackbaud: false, salesforce: false, bloomerang: false },
  { feature: "Program Management", kindora: true, blackbaud: "partial", salesforce: true, bloomerang: false },
  { feature: "Workflow Automation", kindora: true, blackbaud: false, salesforce: true, bloomerang: false },
  { feature: "Affordable Pricing", kindora: true, blackbaud: false, salesforce: false, bloomerang: true },
];

const faqs = [
  {
    question: "What is a nonprofit operations platform?",
    answer:
      "A nonprofit operations platform is an all-in-one software system that centralises every aspect of nonprofit management — donor relations, fundraising, grant tracking, volunteer coordination, program delivery, event management, and reporting — into a single integrated platform. It eliminates the need for multiple disconnected tools.",
  },
  {
    question: "How is Kindora different from other nonprofit software?",
    answer:
      "Most nonprofit tools do one thing well — donor management OR grant tracking OR volunteer scheduling. Kindora does everything in one platform. This means your data lives in one place, your team learns one system, and you get complete visibility across your entire organisation without paying for 5-10 separate subscriptions.",
  },
  {
    question: "Can I replace my existing nonprofit tools with Kindora?",
    answer:
      "Yes. Most nonprofits using Kindora replace 5-10 separate tools — their donor CRM, fundraising platform, grant tracker, volunteer scheduler, event system, and reporting tools. Kindora handles all of these functions in one integrated system, reducing costs and eliminating data silos.",
  },
  {
    question: "Is Kindora suitable for small nonprofits?",
    answer:
      "Yes. Kindora is designed for nonprofits of all sizes. Small organisations benefit from having one affordable system instead of managing multiple free tools. Larger organisations benefit from unified data and enterprise features. Pricing scales with your needs.",
  },
  {
    question: "How long does it take to set up Kindora?",
    answer:
      "Most nonprofits are up and running with Kindora based on your data and workflow needs. Our onboarding team helps you import existing data, configure your workflows, and train your team. You can start with the features you need and add more as your organisation grows.",
  },
];

const platformStats = [
  { metric: "1", label: "Platform for everything" },
  { metric: "40%", label: "Lower software costs" },
  { metric: "100%", label: "Data visibility" },
  { metric: "2x", label: "Team productivity" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Nonprofit Operations Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "All-in-one nonprofit operations platform — centralise donor management, fundraising, grants, volunteers, and reporting.",
      url: "https://spacenexus.net/kindora/nonprofit-operations-platform",
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

export default function NonprofitOperationsPlatformPage() {
  return (
    <>
      <Script id="nonprofit-operations-platform-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-purple-600">Operations Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Nonprofit Operations Platform That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">Unifies Everything</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Replace 5-10 disconnected tools with one integrated platform. Manage donors, fundraising, grants, volunteers, programs, and reporting from a single source of truth.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 rounded-full shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-0.5"
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

            {/* Visual: Operations Dashboard */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-bold text-gray-900">Operations Dashboard</h3>
                  <span className="text-xs px-3 py-1 bg-purple-500/10 text-purple-600 rounded-full font-semibold">Live</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-900">Donor Management</p>
                      <p className="text-[10px] text-gray-500">1,247 active donors</p>
                    </div>
                    <span className="text-[10px] text-green-600 font-semibold">Synced</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-green-50 rounded-xl border border-green-100">
                    <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-900">Fundraising</p>
                      <p className="text-[10px] text-gray-500">Campaign progress tracking</p>
                    </div>
                    <span className="text-[10px] text-green-600 font-semibold">Active</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-orange-50 rounded-xl border border-orange-100">
                    <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-900">Grant Tracking</p>
                      <p className="text-[10px] text-gray-500">3 grants pending reports</p>
                    </div>
                    <span className="text-[10px] text-orange-600 font-semibold">Review</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[
                    { label: "Modules Active", value: "8" },
                    { label: "Data Sources", value: "Unified" },
                    { label: "Reports", value: "Real-time" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                      <p className="text-[10px] text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platformStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">{stat.metric}</p>
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-600 text-sm font-semibold mb-4">Why Unify</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">One Platform, One Team, One Truth</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Scattered tools create data silos, duplicate work, and blind spots. Kindora brings everything together so your entire team works from the same information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-xl font-bold mb-5">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 text-sm font-semibold mb-4">Platform Features</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Everything Your Nonprofit Needs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From donor management to program delivery, Kindora covers every function your nonprofit needs in one integrated platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-600 text-sm font-semibold mb-4">How We Compare</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Other Platforms</h2>
            <p className="text-lg text-gray-600">See why nonprofits choose Kindora over disconnected point solutions.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-purple-600">Kindora</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Blackbaud</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Salesforce NPSP</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Bloomerang</th>
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
                      <td className="py-4 px-6 text-center">
                        {typeof row.bloomerang === "boolean" ? (
                          row.bloomerang ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
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
      <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Unify Your Nonprofit?</h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Join thousands of nonprofits replacing scattered tools with one integrated operations platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-purple-600 bg-white hover:bg-purple-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
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
