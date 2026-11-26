import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Financial Reporting Software for Nonprofits",
  description:
    "Generate board-ready financial statements, grant reports, and compliance documents in minutes. Kindora financial reporting software for nonprofits automates fund accounting, multi-entity consolidation, and regulatory filings.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/financial-reporting-software",
  },
  openGraph: {
    title: "Financial Reporting Software for Nonprofits",
    description: "Generate board-ready financial statements, grant reports, and compliance documents in minutes.",
    url: "https://spacenexus.net/kindora/financial-reporting-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Financial Reporting Software for Nonprofits" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Reporting Software for Nonprofits",
    description: "Generate board-ready financial statements, grant reports, and compliance documents in minutes.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "financial reporting software nonprofit",
    "nonprofit financial statements",
    "grant financial reporting",
    "board financial reports",
    "nonprofit accounting reports",
    "fund accounting software",
    "compliance reporting nonprofit",
  ],
};

const capabilities = [
  {
    stage: "1",
    title: "Financial Statement Generation",
    description: "Auto-generate income statements, balance sheets, cash flow statements, and statement of functional expenses from live transaction data. Every statement follows GAAP and nonprofit accounting standards — ready for board review the moment it's needed.",
    features: ["GAAP-compliant financial statements", "Real-time statement generation", "Multi-period comparative reporting"],
    color: "bg-blue-50 border-blue-200 text-blue-700",
    dot: "bg-blue-500",
  },
  {
    stage: "2",
    title: "Grant & Fund Reporting",
    description: "Produce funder-ready financial reports for every grant in your portfolio. Track restricted and unrestricted funds, calculate indirect cost rates, and generate drawdown reports that satisfy federal, state, and private funder requirements.",
    features: ["Grant-specific financial reports", "Restricted vs. unrestricted fund tracking", "Indirect cost rate calculations"],
    color: "bg-purple-50 border-purple-200 text-purple-700",
    dot: "bg-purple-500",
  },
  {
    stage: "3",
    title: "Board & Leadership Reporting",
    description: "Deliver polished board packages with narrative summaries, variance analysis, and key performance indicators — all auto-generated from your financial data. Board members receive exactly what they need without weeks of preparation.",
    features: ["One-click board package generation", "Narrative financial summaries", "Budget-to-actual variance analysis"],
    color: "bg-orange-50 border-orange-200 text-orange-700",
    dot: "bg-orange-500",
  },
  {
    stage: "4",
    title: "Real-Time Dashboards & Analytics",
    description: "Interactive dashboards surface KPIs, trends, and anomalies across your entire financial picture. CFOs and program directors drill into any metric, filter by fund or program, and export visualizations for stakeholder presentations.",
    features: ["Interactive financial dashboards", "Trend analysis and anomaly detection", "Exportable visualizations for stakeholders"],
    color: "bg-green-50 border-green-200 text-green-700",
    dot: "bg-green-500",
  },
];

const features = [
  { title: "Multi-Entity Consolidation", desc: "Merge financials across subsidiaries, chapters, and programs into unified statements with elimination entries." },
  { title: "Fund Accounting", desc: "Track restricted, temporarily restricted, and unrestricted funds with automatic classification and reporting." },
  { title: "Custom Report Builder", desc: "Design reports with drag-and-drop tools — add charts, tables, narrative blocks, and custom headers." },
  { title: "Export & Sharing", desc: "Export to PDF, Excel, or CSV. Schedule automated report delivery to board members and funders." },
  { title: "Audit Support", desc: "Complete audit trail with source transaction links, adjustment journals, and reconciled statements." },
  { title: "Role-Based Access", desc: "Finance teams see everything, board members see summaries, auditors see what they need — nothing more." },
];

const benefits = [
  { metric: "90%", label: "faster financial close" },
  { metric: "75%", label: "reduction in report preparation" },
  { metric: "100%", label: "compliance with funder requirements" },
  { metric: "5x", label: "faster audit completion" },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kindora Financial Reporting Software for Nonprofits",
  description: "Financial reporting software for nonprofits. Generate board-ready financial statements, grant reports, and compliance documents in minutes.",
  url: "https://spacenexus.net/kindora/financial-reporting-software",
  serviceType: "Financial Reporting Software",
  provider: { "@id": "https://spacenexus.net/kindora/#organization" },
  areaServed: { "@type": "Place", name: "Worldwide" },
  offers: { "@type": "Offer", url: "https://spacenexus.net/kindora/pricing", availability: "https://schema.org/InStock", priceCurrency: "USD" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is financial reporting software for nonprofits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Financial reporting software for nonprofits is a platform that automates the creation of income statements, balance sheets, cash flow statements, and grant-specific financial reports. It replaces manual spreadsheet consolidation with real-time data aggregation, GAAP-compliant formatting, and one-click report generation tailored to nonprofit accounting standards.",
      },
    },
    {
      "@type": "Question",
      name: "How does Kindora handle grant financial reporting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kindora tracks restricted and unrestricted funds separately, calculates indirect cost rates automatically, and generates funder-ready drawdown reports for federal, state, and private grants. Every grant report pulls live data from your transactions — no manual compilation required.",
      },
    },
    {
      "@type": "Question",
      name: "Can Kindora generate board-ready financial packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Kindora auto-generates complete board packages including income statements, balance sheets, budget-to-actual variance analysis, and narrative summaries. Board members receive polished, presentation-ready documents with one click — eliminating weeks of manual preparation.",
      },
    },
    {
      "@type": "Question",
      name: "How does financial reporting software help with audit preparation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kindora maintains a complete audit trail with source transaction links, adjustment journals, and reconciled statements. Auditors can drill into any figure to see the underlying transactions, and the tamper-evident log ensures data integrity throughout the reporting period.",
      },
    },
  ],
};

export default function KindoraFinancialReportingPage() {
  return (
    <>
      <Script id="kindora-financial-reporting-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="kindora-financial-reporting-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/kindora" className="hover:text-[#2563eb] transition-colors">Kindora</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Financial Reporting Software for Nonprofits</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Nonprofit Financial Operations
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Financial Reporting Software for{" "}
                <span className="text-[#2563eb]">Board-Ready Nonprofit Financials</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Generate board-ready financial statements, grant reports, and compliance documents in minutes. Automated fund accounting, multi-entity consolidation, and regulatory filings — built for nonprofits that need <strong>audit-ready financial transparency</strong>.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/kindora/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                  Request a Demo
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/kindora/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Strip */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((b) => (
                <div key={b.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-[#2563eb] mb-1">{b.metric}</p>
                  <p className="text-sm text-gray-600">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 lg:py-20 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Kindora powers every financial reporting phase</h2>
              <p className="text-gray-600 max-w-xl mx-auto">From data ingestion through board presentation — one platform manages the entire financial reporting lifecycle.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {capabilities.map((s) => (
                <div key={s.stage} className={`rounded-2xl border p-7 ${s.color}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`w-8 h-8 rounded-full ${s.dot} text-white text-sm font-bold flex items-center justify-center`}>{s.stage}</span>
                    <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.description}</p>
                  <ul className="space-y-1.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-5">Your financial reporting command center</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  See every financial statement, grant report, and compliance document at a glance. Automated dashboards surface missing reports, upcoming deadlines, and reconciliation gaps — so finance teams stay in control without the chase.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {features.map((f) => (
                    <div key={f.title} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <p className="text-sm font-bold text-gray-900 mb-1">{f.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
                <Link href="/kindora/demo" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                  See it with your financials
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">app.kindora.com / financial-reports</div>
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10 aspect-[16/9] relative">
                  <Image src="/spacenexus/screenshots/vdr-dashboard.png" alt="Kindora financial reporting dashboard" fill loading="lazy" className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 800px" />
                </div>
                <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-[#f8f9fa]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently asked questions</h2>
            <div className="space-y-4">
              {[
                { q: "What is financial reporting software for nonprofits?", a: "Financial reporting software for nonprofits is a platform that automates the creation of income statements, balance sheets, cash flow statements, and grant-specific financial reports. It replaces manual spreadsheet consolidation with real-time data aggregation, GAAP-compliant formatting, and one-click report generation tailored to nonprofit accounting standards." },
                { q: "How does Kindora handle grant financial reporting?", a: "Kindora tracks restricted and unrestricted funds separately, calculates indirect cost rates automatically, and generates funder-ready drawdown reports for federal, state, and private grants. Every grant report pulls live data from your transactions — no manual compilation required." },
                { q: "Can Kindora generate board-ready financial packages?", a: "Yes. Kindora auto-generates complete board packages including income statements, balance sheets, budget-to-actual variance analysis, and narrative summaries. Board members receive polished, presentation-ready documents with one click — eliminating weeks of manual preparation." },
                { q: "How does financial reporting software help with audit preparation?", a: "Kindora maintains a complete audit trail with source transaction links, adjustment journals, and reconciled statements. Auditors can drill into any figure to see the underlying transactions, and the tamper-evident log ensures data integrity throughout the reporting period." },
              ].map((faq) => (
                <details key={faq.q} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <summary className="px-6 py-5 cursor-pointer font-semibold text-gray-900 hover:text-[#2563eb] transition-colors flex items-center justify-between">
                    {faq.q}
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Launch your nonprofit financial reporting workspace in 24 hours</h2>
            <p className="text-gray-600 mb-8">No lengthy onboarding. Connect your accounting data, configure report templates, invite your team, and generate your first financial report the same day.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kindora/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">Request a Demo</Link>
              <Link href="/kindora/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">View Pricing</Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">SOC 2 Type II · AES-256 encryption · Tamper-evident audit logs</p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related Resources</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/kindora/budget-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Plan, track, and control nonprofit budgets.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Budget Management Software →</h3>
              </Link>
              <Link href="/kindora/expense-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Track, categorize, and reconcile expenses.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Expense Management Software →</h3>
              </Link>
              <Link href="/kindora/cost-allocation-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Allocate shared costs across programs and departments.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Cost Allocation Software →</h3>
              </Link>
              <Link href="/kindora/grant-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Manage grant budgets, expenses, and compliance.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Grant Management Software →</h3>
              </Link>
              <Link href="/kindora/donation-reporting-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Track donations and revenue in real time.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Donation Reporting Software →</h3>
              </Link>
              <Link href="/kindora/pricing" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Transparent pricing for nonprofits of every size.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">View Pricing →</h3>
              </Link>
            </div>
          
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
        </section>
      </main>
    </>
  );
}
