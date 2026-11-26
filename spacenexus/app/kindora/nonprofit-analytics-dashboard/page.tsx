import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Nonprofit Analytics Dashboard | Real-Time Nonprofit Reporting",
  description:
    "Kindora nonprofit analytics dashboard gives you real-time visibility into donors, fundraising, grants, and programme outcomes — one dashboard for your entire organisation.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/nonprofit-analytics-dashboard",
  },
  openGraph: {
    title: "Nonprofit Analytics Dashboard",
    description: "Real-time analytics dashboard for nonprofits — track donors, fundraising, and impact in one view.",
    url: "https://spacenexus.net/kindora/nonprofit-analytics-dashboard",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Nonprofit Analytics Dashboard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Analytics Dashboard",
    description: "Real-time analytics dashboard for nonprofits — track donors, fundraising, and impact in one view.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "nonprofit analytics dashboard",
    "nonprofit dashboard software",
    "nonprofit reporting dashboard",
    "nonprofit data analytics",
    "nonprofit KPI dashboard",
    "nonprofit metrics dashboard",
    "nonprofit performance dashboard",
    "nonprofit reporting tools",
    "nonprofit data dashboard",
    "charity analytics dashboard",
    "NGO analytics dashboard",
    "nonprofit reporting software",
    "nonprofit BI dashboard",
    "nonprofit impact dashboard",
    "nonprofit metrics software",
  ],
};

const benefits = [
  {
    metric: "100%",
    title: "Real-Time Data Visibility",
    description: "See what's happening across your organisation right now — not last month. Donor activity, fundraising progress, and programme outcomes update instantly.",
  },
  {
    metric: "3x",
    title: "Faster Decisions",
    description: "Stop waiting for manual reports. Dashboards give leaders the information they need to make strategic decisions in minutes, not weeks.",
  },
  {
    metric: "90%",
    title: "Less Reporting Work",
    description: "Automated dashboards replace hours of manual report building. Board reports, funder reports, and internal updates generate themselves.",
  },
  {
    metric: "100%",
    title: "Complete Organisational Picture",
    description: "One dashboard shows donors, fundraising, grants, volunteers, programmes, and finances — no more stitching together spreadsheets.",
  },
];

const features = [
  {
    title: "Donor Analytics",
    description: "Track giving trends, donor retention, acquisition sources, and lifetime value in real time.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Fundraising Metrics",
    description: "Campaign performance, donation trends, recurring giving health, and revenue forecasting.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Grant Tracking",
    description: "Monitor grant budgets, spending progress, deadlines, and compliance status across all funders.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Programme Impact",
    description: "Measure outcomes, track beneficiaries, and visualise programme effectiveness across locations.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Volunteer Metrics",
    description: "Track volunteer hours, retention, engagement, and programme contributions in real time.",
    icon: "M12 4.354a4 4 0 110 7.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Financial Overview",
    description: "Revenue vs expenses, budget tracking, cash flow, and financial health across all funds.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Custom Reports",
    description: "Build any report you need with drag-and-drop report builder. Schedule automated delivery to stakeholders.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Data Visualisation",
    description: "Interactive charts, graphs, and maps that make complex data easy to understand at a glance.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
];

const comparisonData = [
  { feature: "Real-Time Dashboards", kindora: true, blackbaud: false, salesforce: true, tableau: true },
  { feature: "Donor Analytics", kindora: true, blackbaud: true, salesforce: "partial", tableau: false },
  { feature: "Grant Tracking Reports", kindora: true, blackbaud: false, salesforce: false, tableau: false },
  { feature: "Programme Impact Metrics", kindora: true, blackbaud: false, salesforce: true, tableau: false },
  { feature: "Custom Report Builder", kindora: true, blackbaud: "partial", salesforce: true, tableau: true },
  { feature: "Scheduled Report Delivery", kindora: true, blackbaud: true, salesforce: true, tableau: true },
  { feature: "Built Into Nonprofit CRM", kindora: true, blackbaud: false, salesforce: false, tableau: false },
  { feature: "No Technical Skills Needed", kindora: true, blackbaud: false, salesforce: false, tableau: false },
];

const faqs = [
  {
    question: "What is a nonprofit analytics dashboard?",
    answer:
      "A nonprofit analytics dashboard is a visual tool that displays key metrics from across your organisation in one place. It shows real-time data on donors, fundraising, grants, programmes, volunteers, and finances — helping leaders make informed decisions without waiting for manual reports.",
  },
  {
    question: "How does a nonprofit dashboard help with decision-making?",
    answer:
      "Dashboards give leaders instant visibility into what's working and what needs attention. Instead of waiting weeks for manual reports, you can see fundraising trends, donor retention, programme outcomes, and financial health in real time — enabling faster, data-driven decisions.",
  },
  {
    question: "Do I need technical skills to create dashboards in Kindora?",
    answer:
      "No. Kindora includes a drag-and-drop dashboard builder that lets anyone create custom views without any technical skills. You can select the metrics you want, choose visualisation types, and build custom reports with a simple interface.",
  },
  {
    question: "Can I schedule automated report delivery?",
    answer:
      "Yes. Kindora lets you schedule reports to be automatically generated and delivered to stakeholders — board members, programme managers, funders — on any schedule. Daily, weekly, monthly, or custom schedules are all supported.",
  },
  {
    question: "What data sources does Kindora connect to?",
    answer:
      "Kindora's analytics dashboard pulls data from all modules within the platform — donor management, fundraising, grants, volunteers, programmes, events, and finances. Everything is unified in one system, so your dashboards always show the complete picture.",
  },
];

const platformStats = [
  { metric: "100%", label: "Real-time data" },
  { metric: "3x", label: "Faster decisions" },
  { metric: "90%", label: "Less reporting work" },
  { metric: "100%", label: "Organisational visibility" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Nonprofit Analytics Dashboard",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Nonprofit analytics dashboard — real-time visibility into donors, fundraising, grants, and programme outcomes.",
      url: "https://spacenexus.net/kindora/nonprofit-analytics-dashboard",
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

export default function NonprofitAnalyticsDashboardPage() {
  return (
    <>
      <Script id="nonprofit-analytics-dashboard-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-blue-600">Analytics Dashboard</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Nonprofit Analytics Dashboard That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">Reveals Insights</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Stop guessing. See exactly what&apos;s working across donors, fundraising, grants, and programmes — all in real time from one unified dashboard.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
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

            {/* Visual: Analytics Dashboard */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-bold text-gray-900">Analytics Dashboard</h3>
                  <span className="text-xs px-3 py-1 bg-green-500/10 text-green-600 rounded-full font-semibold">Live</span>
                </div>
                {/* Mini chart bars */}
                <div className="flex items-end gap-2 h-32 mb-6">
                  {[40, 55, 35, 70, 60, 80, 75, 90, 85, 95, 88, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: `linear-gradient(to top, #2563eb, #06b6d4)` }} />
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Donors", value: "1,247", trend: "+12%" },
                    { label: "Revenue", value: "$84K", trend: "+23%" },
                    { label: "Retention", value: "78%", trend: "+5%" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-sm font-bold text-gray-900">{stat.value}</p>
                      <p className="text-[10px] text-gray-500">{stat.label}</p>
                      <p className="text-[10px] text-green-600 font-semibold">{stat.trend}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Grant Compliance", value: "94%" },
                    { label: "Programme Impact", value: "87%" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-gray-600">{item.label}</span>
                        <span className="font-semibold text-gray-900">{item.value}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: item.value }} />
                      </div>
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">Why Dashboards Matter</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Make Decisions With Confidence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Without dashboards, nonprofits rely on gut instinct and outdated spreadsheets. Real-time analytics give you the clarity to make strategic decisions.
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">Dashboard Features</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Everything You Need to See Clearly</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From donor metrics to programme impact, Kindora dashboards cover every aspect of nonprofit performance.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Other Analytics Tools</h2>
            <p className="text-lg text-gray-600">See why nonprofits choose Kindora over generic BI tools.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-blue-600">Kindora</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Blackbaud</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Salesforce</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Tableau</th>
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
                        {typeof row.tableau === "boolean" ? (
                          row.tableau ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to See Your Data Clearly?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of nonprofits replacing spreadsheets with real-time analytics dashboards.
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
