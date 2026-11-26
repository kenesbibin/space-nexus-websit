import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Nonprofit Reporting Software | Analytics & Reports",
  description:
    "Kindora nonprofit reporting software gives you customizable dashboards, donor analytics, financial reports, program impact metrics, and grant-ready exports — all in one place.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/nonprofit-reporting-software",
  },
  openGraph: {
    title: "Nonprofit Reporting Software",
    description: "Dashboards, donor analytics, financial reports, and grant-ready exports with Kindora reporting software.",
    url: "https://spacenexus.net/kindora/nonprofit-reporting-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Nonprofit Reporting Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Reporting Software",
    description: "Dashboards, donor analytics, financial reports, and grant-ready exports for nonprofits.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "nonprofit reporting software",
    "nonprofit analytics software",
    "nonprofit reporting tools",
    "donor analytics software",
    "nonprofit dashboard software",
    "nonprofit financial reporting",
    "grant reporting software",
    "nonprofit data analytics",
    "nonprofit impact reporting",
    "board reporting nonprofit",
    "nonprofit KPI tracking",
    "nonprofit performance reporting",
    "donor giving reports",
    "nonprofit metrics dashboard",
    "nonprofit data visualization",
  ],
};

const reportingFeatures = [
  {
    title: "Custom Dashboards",
    description: "Build custom dashboards with the metrics that matter — fundraising, engagement, programs, and finances.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Fundraising Reports",
    description: "Track campaign performance, revenue by source, donor acquisition costs, and fundraising ROI.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Donor Analytics",
    description: "Analyze donor giving patterns, lifetime value, retention rates, and segmentation insights.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Financial Reports",
    description: "Income statements, budget vs actuals, expense tracking, and revenue summaries for board and management.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Program Impact",
    description: "Measure program outcomes, track KPIs, and generate impact reports for stakeholders and funders.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Grant-Ready Exports",
    description: "Export reports formatted for grant applications and reporting. Include financials, impact data, and narratives.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
  },
  {
    title: "Scheduled Reports",
    description: "Automate report delivery via email on daily, weekly, or monthly schedules. Keep your team informed.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Data Visualization",
    description: "Charts, graphs, and heat maps that make your data easy to understand and share with stakeholders.",
    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
  },
];

const stats = [
  { metric: "Custom", label: "Dashboard builder" },
  { metric: "Multi-source", label: "Report types" },
  { metric: "Auto", label: "Scheduled delivery" },
  { metric: "Export-ready", label: "Grant & board formats" },
];

const faqs = [
  {
    question: "What is nonprofit reporting software?",
    answer:
      "Nonprofit reporting software centralizes data from across your organization — fundraising, programs, finances, and engagement — into customizable dashboards and reports for informed decision-making.",
  },
  {
    question: "What kind of reports can Kindora generate?",
    answer:
      "Kindora generates fundraising reports, donor analytics, financial statements, program impact reports, budget vs actuals, retention analysis, and grant-ready exports.",
  },
  {
    question: "Can I create custom dashboards?",
    answer:
      "Yes. Kindora has a custom dashboard builder that lets you choose which metrics to display — from fundraising progress to program KPIs to financial summaries.",
  },
  {
    question: "Does Kindora support scheduled reports?",
    answer:
      "Yes. You can schedule reports to be automatically generated and emailed to your team or board on a daily, weekly, or monthly basis.",
  },
  {
    question: "Can I export reports for grant applications?",
    answer:
      "Yes. Kindora exports reports in formats suitable for grant applications and board presentations, including financials, impact data, and supporting narratives.",
  },
  {
    question: "Does Kindora track donor analytics?",
    answer:
      "Yes. Kindora provides donor analytics including giving patterns, lifetime value, retention rates, and segmentation insights to help you understand your donor base.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Nonprofit Reporting Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Nonprofit reporting software — dashboards, donor analytics, financial reports, and grant-ready exports.",
      url: "https://spacenexus.net/kindora/nonprofit-reporting-software",
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

export default function NonprofitReportingSoftwarePage() {
  return (
    <>
      <Script id="nonprofit-reporting-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gray-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-slate-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-slate-600">Nonprofit Reporting Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Turn Data into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-gray-600">Actionable Insights</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Make informed decisions with Kindora nonprofit reporting software. Custom dashboards, donor analytics, financial reports, and grant-ready exports — all powered by your real-time data.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-slate-500 to-gray-600 hover:from-gray-600 hover:to-slate-700 rounded-full shadow-xl shadow-slate-500/30 hover:shadow-slate-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request a Demo
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Try for Free
                </a>
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

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-500 to-gray-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Analytics Dashboard</span>
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    Real-time
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Total Revenue", value: "YTD Funds" },
                    { label: "Donor Retention", value: "87%" },
                    { label: "Active Programs", value: "12" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Report Templates</p>
                  {[
                    { name: "Monthly Fundraising Summary", type: "Auto-generated", freq: "Monthly" },
                    { name: "Board Report", type: "Executive summary", freq: "Quarterly" },
                    { name: "Grant Impact Report", type: "Program outcomes", freq: "Per grant" },
                  ].map((r) => (
                    <div key={r.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-400" />
                        <div>
                          <span className="text-sm font-semibold text-gray-900">{r.name}</span>
                          <span className="text-xs text-gray-400 ml-2">{r.type}</span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{r.freq}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-slate-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Reports that drive decisions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See your organization clearly with customizable reports and real-time analytics.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reportingFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-slate-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-500/10 flex items-center justify-center mb-4 group-hover:bg-slate-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-slate-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From data to decisions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A simple reporting workflow.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Connect", description: "Pull data from across your organization automatically." },
              { step: "02", title: "Configure", description: "Build dashboards and reports with the metrics you need." },
              { step: "03", title: "Schedule", description: "Automate report delivery to your team and board." },
              { step: "04", title: "Act", description: "Make data-driven decisions and share insights with stakeholders." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-slate-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about nonprofit reporting software.</p>
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

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to see your data in action?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora nonprofit reporting software today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-slate-500 to-gray-600 hover:from-gray-600 hover:to-slate-700 rounded-full shadow-xl shadow-slate-500/30 hover:shadow-slate-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-slate-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-slate-500 bg-slate-50 hover:bg-slate-100 rounded-full transition-all duration-300"
            >
              Try for Free
            </a>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
