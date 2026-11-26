import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Board Reporting Software | Nonprofit Board Reports",
  description:
    "Kindora board reporting software helps nonprofits prepare executive summaries, financial reports, program updates, and impact metrics for board meetings — with automated scheduling and collaboration.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/board-reporting-software",
  },
  openGraph: {
    title: "Board Reporting Software",
    description: "Prepare board-ready reports with executive summaries, financials, program updates, and impact metrics.",
    url: "https://spacenexus.net/kindora/board-reporting-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Board Reporting Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Board Reporting Software",
    description: "Prepare board-ready reports with financials, program updates, and impact metrics.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "board reporting software",
    "nonprofit board reports",
    "board report software",
    "board meeting reports",
    "board reporting tools",
    "nonprofit board reporting",
    "board dashboard software",
    "board report template",
    "board reporting system",
    "board report automation",
    "board report generator",
    "board meeting preparation",
    "board report template nonprofit",
    "board reporting platform",
    "board report management",
  ],
};

const boardFeatures = [
  {
    title: "Executive Summaries",
    description: "Auto-generated executive summaries pulling key metrics from fundraising, programs, and finances.",
    icon: "M4 6h16M4 10h16M4 14h16M4 18h16",
  },
  {
    title: "Financial Reports",
    description: "Income statements, balance sheets, budget vs actuals, and revenue breakdowns formatted for board review.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Program Impact",
    description: "Summarize program outcomes, KPIs, and milestones achieved — with data visualizations for quick comprehension.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Board Dashboard",
    description: "A dedicated board-facing dashboard with high-level KPIs, trends, and organizational health metrics.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Scheduled Delivery",
    description: "Auto-generate and distribute board reports before every meeting. Set schedules and control access.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Collaboration Tools",
    description: "Share draft reports with executives, collect feedback, and finalize before board distribution.",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
  },
  {
    title: "Goal Tracking",
    description: "Track organizational goals and strategic priorities. Show progress, milestones, and areas needing attention.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Document Library",
    description: "Store board reports, minutes, policies, and supporting documents in a secure, organized library.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
];

const stats = [
  { metric: "Auto-generated", label: "Board reports" },
  { metric: "Executive", label: "Summary format" },
  { metric: "Scheduled", label: "Report delivery" },
  { metric: "Board-ready", label: "Dashboards" },
];

const faqs = [
  {
    question: "What is board reporting software?",
    answer:
      "Board reporting software helps nonprofits prepare and distribute professional reports for board meetings. It compiles financials, program updates, impact metrics, and executive summaries into board-ready formats.",
  },
  {
    question: "What kind of board reports can Kindora generate?",
    answer:
      "Kindora generates executive summaries, financial reports (income, balance sheet, budget vs actuals), program impact updates, goal progress trackers, and organizational health dashboards.",
  },
  {
    question: "Can Kindora automate board report delivery?",
    answer:
      "Yes. You can schedule board reports to be auto-generated and distributed before each meeting. Set recurring schedules and control who has access to each report.",
  },
  {
    question: "Is there a board-facing dashboard?",
    answer:
      "Yes. Kindora provides a dedicated board dashboard with high-level KPIs, trends, and organizational health metrics designed for board member consumption.",
  },
  {
    question: "Can I collaborate on board reports before sharing?",
    answer:
      "Yes. Kindora supports collaboration — share draft reports with executives, collect feedback, make revisions, and finalize before distributing to the full board.",
  },
  {
    question: "Does Kindora store historical board reports?",
    answer:
      "Yes. Kindora includes a document library that stores all past board reports, meeting minutes, policies, and supporting documents in a secure, searchable archive.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Board Reporting Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Board reporting software for nonprofits — prepare board-ready reports with financials, program updates, and impact metrics.",
      url: "https://spacenexus.net/kindora/board-reporting-software",
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

export default function BoardReportingSoftwarePage() {
  return (
    <>
      <Script id="board-reporting-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
                <span className="text-sm font-medium text-slate-600">Board Reporting Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Board-Ready Reports{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-gray-600">in Minutes</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Prepare professional board reports with executive summaries, financials, program updates, and impact metrics. Kindora board reporting software automates the process so you can focus on strategy.
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Board Report</span>
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                    Q2 {new Date().getFullYear()}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Revenue YTD", value: "YTD Funds" },
                    { label: "Programs Active", value: "12" },
                    { label: "Board Members", value: "9" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                       <p className="text-xs text-gray-600">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Report Sections</p>
                  {[
                    { section: "Executive Summary", status: "Ready", icon: "M9 12l2 2 4-4" },
                    { section: "Financial Statements", status: "Ready", icon: "M9 12l2 2 4-4" },
                    { section: "Program Impact", status: "Needs review", icon: "M12 9v2m0 4h.01" },
                  ].map((r) => (
                    <div key={r.section} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-400" />
                        <span className="text-sm font-semibold text-gray-900">{r.section}</span>
                      </div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        r.status === "Ready" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                      }`}>
                        {r.status}
                      </span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Board reports made simple</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prepare, collaborate, and distribute professional board reports effortlessly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {boardFeatures.map((feature) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From data to board approval</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A streamlined board reporting workflow.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Gather", description: "Pull financials, program data, and KPIs automatically." },
              { step: "02", title: "Review", description: "Collaborate with leadership on drafts and refine content." },
              { step: "03", title: "Distribute", description: "Schedule and send board-ready reports automatically." },
              { step: "04", title: "Present", description: "Board members access reports via dashboard or document library." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-slate-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
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
            <p className="text-lg text-gray-600">Everything you need to know about board reporting software.</p>
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
            Ready to impress your board?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora board reporting software today.
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
