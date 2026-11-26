import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Budget Management Software | Nonprofit Budget Tracking",
  description:
    "Kindora budget management software for nonprofits. Plan, track, and control budgets across programs, departments, and grants with real-time variance analysis and automated forecasting.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/budget-management-software",
  },
  openGraph: {
    title: "Budget Management Software",
    description: "Plan, track, and control budgets across programs, departments, and grants with real-time variance analysis.",
    url: "https://spacenexus.net/kindora/budget-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Budget Management Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Budget Management Software",
    description: "Plan, track, and control nonprofit budgets with real-time variance analysis and AI-powered forecasting.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "budget management software",
    "nonprofit budget tracking",
    "budget planning software nonprofit",
    "grant budget management",
    "program budget tracking",
    "department budget management",
    "nonprofit financial planning",
    "budget forecasting software",
    "budget variance analysis",
  ],
};

const capabilities = [
  {
    stage: "1",
    title: "Budget Planning & Creation",
    description: "Build annual and program-level budgets with department and grant granularity. AI-assisted forecasting uses historical data to generate realistic budget proposals in minutes.",
    features: ["Top-down and bottom-up budget workflows", "Grant-specific budget templates", "Scenario modeling with what-if analysis"],
    color: "bg-blue-50 border-blue-200 text-blue-700",
    dot: "bg-blue-500",
  },
  {
    stage: "2",
    title: "Real-Time Budget Tracking",
    description: "Monitor actual spend against budgeted amounts as transactions flow in. Live dashboards surface variances instantly — by program, department, grant, or any custom dimension.",
    features: ["Live budget vs. actual dashboards", "Custom variance thresholds with alerts", "Multi-dimensional budget drill-down"],
    color: "bg-purple-50 border-purple-200 text-purple-700",
    dot: "bg-purple-500",
  },
  {
    stage: "3",
    title: "Budget Approval Workflows",
    description: "Route budget requests through multi-level approval chains with full audit trails. Budget owners get one-click approve/reject with context, and escalation rules prevent bottlenecks.",
    features: ["Configurable multi-level approval chains", "One-click approve/reject with comments", "Automatic escalation for stalled requests"],
    color: "bg-orange-50 border-orange-200 text-orange-700",
    dot: "bg-orange-500",
  },
  {
    stage: "4",
    title: "Forecasting & Variance Analysis",
    description: "Rolling forecasts update automatically as new data arrives. AI identifies spending patterns, flags anomalies, and projects year-end outcomes — giving finance teams the foresight to course-correct.",
    features: ["Rolling 12-month forecast models", "AI anomaly detection on spend patterns", "Variance root-cause analysis"],
    color: "bg-green-50 border-green-200 text-green-700",
    dot: "bg-green-500",
  },
];

const features = [
  { title: "Multi-Grant Budgeting", desc: "Consolidate budgets across grants, programs, and departments in a unified view." },
  { title: "Automated Allocations", desc: "Auto-distribute budgets based on rules, headcount, or historical usage." },
  { title: "Encumbrance Tracking", desc: "Reserve funds against committed spend so budget holders see true available balances." },
  { title: "Version Control & Audit Trails", desc: "Track every budget revision with full change history and approval records." },
  { title: "Donor-Restricted Budgets", desc: "Manage restricted and unrestricted funds separately with clear segregation." },
  { title: "Role-Based Access Control", desc: "Budget owners, approvers, and viewers get precisely the access they need." },
];

const benefits = [
  { metric: "40%", label: "faster budget cycle completion" },
  { metric: "25%", label: "reduction in budget overruns" },
  { metric: "60%", label: "less time on manual reconciliations" },
  { metric: "3x", label: "faster variance identification" },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kindora Budget Management Software",
  description: "Budget management software for nonprofits. Plan, track, and control budgets across programs, departments, and grants.",
  url: "https://spacenexus.net/kindora/budget-management-software",
  serviceType: "Budget Management Software",
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
      name: "What is budget management software for nonprofits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Budget management software for nonprofits is a centralized platform that enables finance teams to plan, create, track, and control organizational budgets across grants, programs, and departments. It replaces spreadsheets with automated workflows, real-time variance tracking, and donor-restricted fund management.",
      },
    },
    {
      "@type": "Question",
      name: "How does Kindora handle grant-specific budgets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kindora supports grant-specific budget templates, restricted and unrestricted fund segregation, and grant compliance reporting. Budgets can be created per grant with funder-required categories, and the system automatically tracks spending against grant-specific limits.",
      },
    },
    {
      "@type": "Question",
      name: "Can nonprofits track program-level budgets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Kindora supports multi-dimensional budgeting across programs, departments, grants, and cost centers. Program directors can see their specific budgets in real time while finance leadership maintains a consolidated view.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can we implement budget management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kindora budget management software can be configured within 24 hours. Import existing budget data from Excel, configure approval workflows, invite budget owners, and begin tracking immediately.",
      },
    },
  ],
};

export default function KindoraBudgetManagementPage() {
  return (
    <>
      <Script id="kindora-budget-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="kindora-budget-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/kindora" className="hover:text-[#2563eb] transition-colors">Kindora</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Budget Management Software</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Nonprofit Financial Planning
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Budget Management Software for{" "}
                <span className="text-[#2563eb]">Nonprofits That Deliver Impact</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Plan, track, and control budgets across every program, grant, and department with real-time variance analysis and automated forecasting. Built for nonprofits managing budgets from <strong>$100K to $100M+</strong>.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Kindora powers every budget phase</h2>
              <p className="text-gray-600 max-w-xl mx-auto">From initial budget planning through year-end close — one platform manages the entire budget lifecycle.</p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-5">Your nonprofit budget command center</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  See the health of every program and grant budget at a glance. Automated dashboards surface variances, forecast deviations, and approval bottlenecks — so finance teams stay proactive.
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
                  See it with your budgets
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">app.kindora.com / budgets</div>
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10 aspect-[16/9] relative">
                  <Image src="/spacenexus/screenshots/vdr-dashboard.png" alt="Kindora budget management dashboard" fill loading="lazy" className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 800px" />
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
                { q: "What is budget management software for nonprofits?", a: "Budget management software for nonprofits is a centralized platform that enables finance teams to plan, create, track, and control organizational budgets across grants, programs, and departments. It replaces spreadsheets with automated workflows, real-time variance tracking, and donor-restricted fund management." },
                { q: "How does Kindora handle grant-specific budgets?", a: "Kindora supports grant-specific budget templates, restricted and unrestricted fund segregation, and grant compliance reporting. Budgets can be created per grant with funder-required categories, and the system automatically tracks spending against grant-specific limits." },
                { q: "Can nonprofits track program-level budgets?", a: "Yes. Kindora supports multi-dimensional budgeting across programs, departments, grants, and cost centers. Program directors can see their specific budgets in real time while finance leadership maintains a consolidated view." },
                { q: "How quickly can we implement budget management software?", a: "Kindora budget management software can be configured within 24 hours. Import existing budget data from Excel, configure approval workflows, invite budget owners, and begin tracking immediately." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Launch your nonprofit budget workspace in 24 hours</h2>
            <p className="text-gray-600 mb-8">No lengthy onboarding. Import budgets, configure workflows, invite budget owners, and start tracking the same day.</p>
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
              <Link href="/kindora/cost-allocation-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Allocate shared costs across departments and programs.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Cost Allocation Software →</h3>
              </Link>
              <Link href="/kindora/program-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Track program budgets, milestones, and outcomes.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Program Management Software →</h3>
              </Link>
              <Link href="/kindora/nonprofit-reporting-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Budget variance and financial reports.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Nonprofit Reporting Software →</h3>
              </Link>
              <Link href="/kindora/grant-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Manage grant budgets and compliance requirements.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Grant Management Software →</h3>
              </Link>
              <Link href="/kindora/donation-reporting-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Track donations and fund allocation in real time.</p>
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
