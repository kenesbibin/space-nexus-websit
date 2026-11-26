import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Cost Allocation Software | Nonprofit Overhead Distribution",
  description:
    "Kindora cost allocation software for nonprofits. Automatically distribute shared costs across programs, departments, and grants with full audit trails and compliance reporting.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/cost-allocation-software",
  },
  openGraph: {
    title: "Cost Allocation Software",
    description: "Automatically distribute shared costs across programs, departments, and grants with full audit trails.",
    url: "https://spacenexus.net/kindora/cost-allocation-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Cost Allocation Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost Allocation Software",
    description: "Automatically distribute shared costs across programs, departments, and grants with full audit trails.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "cost allocation software",
    "nonprofit cost allocation",
    "overhead allocation software",
    "shared cost distribution nonprofit",
    "program cost allocation",
    "indirect cost allocation",
    "grant cost allocation",
    "department cost allocation",
  ],
};

const capabilities = [
  {
    stage: "1",
    title: "Allocation Rule Configuration",
    description: "Define allocation bases — headcount, square footage, usage, or custom drivers. Build multi-tier allocation hierarchies that cascade shared costs from top-level pools down to programs, grants, and departments.",
    features: ["Flexible allocation base configuration", "Multi-tier cascade allocation models", "Custom driver definitions for complex scenarios"],
    color: "bg-blue-50 border-blue-200 text-blue-700",
    dot: "bg-blue-500",
  },
  {
    stage: "2",
    title: "Automated Cost Distribution",
    description: "AI-powered engine processes allocations automatically based on configured rules — monthly, quarterly, or on-demand. Eliminates manual spreadsheets and ensures every shared cost is distributed consistently.",
    features: ["Scheduled automated allocation runs", "Real-time allocation processing", "Consistent rule-based distribution"],
    color: "bg-purple-50 border-purple-200 text-purple-700",
    dot: "bg-purple-500",
  },
  {
    stage: "3",
    title: "Allocation Auditing & Compliance",
    description: "Every allocation calculation is logged with full traceability — which rules were applied, what data was used, and who approved the run. Audit-ready reports satisfy funder and regulatory requirements.",
    features: ["Full allocation audit trail with snapshots", "Funder compliance reporting", "Reviewer sign-off workflows"],
    color: "bg-orange-50 border-orange-200 text-orange-700",
    dot: "bg-orange-500",
  },
  {
    stage: "4",
    title: "Analysis & What-If Modeling",
    description: "Model allocation scenarios before committing changes. Compare current allocations against proposed rules, analyze impact on program P&Ls, and present board-ready reports showing how costs flow through the organization.",
    features: ["Scenario comparison dashboards", "What-if allocation modeling", "Program P&L impact analysis"],
    color: "bg-green-50 border-green-200 text-green-700",
    dot: "bg-green-500",
  },
];

const features = [
  { title: "Multi-Grant Allocation", desc: "Manage multiple overhead pools — facilities, IT, admin — with independent rules for each grant." },
  { title: "Step-Down Allocations", desc: "Support step-down and reciprocal methods for accurate inter-departmental cost distribution." },
  { title: "Real-Time Allocation Views", desc: "See allocation results instantly as rules are applied — no batch processing delays." },
  { title: "Version-Controlled Rules", desc: "Track allocation rule changes over time with full version history and rollback capability." },
  { title: "Donor-Restricted Fund Handling", desc: "Separate restricted and unrestricted cost allocations for accurate fund accounting." },
  { title: "Role-Based Access Control", desc: "Allocation administrators, reviewers, and department heads get precisely the access they need." },
];

const benefits = [
  { metric: "70%", label: "reduction in allocation processing time" },
  { metric: "99.9%", label: "allocation accuracy rate" },
  { metric: "5x", label: "faster audit preparation" },
  { metric: "100%", label: "allocation traceability" },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kindora Cost Allocation Software",
  description: "Cost allocation software for nonprofits. Automatically distribute shared costs across programs, departments, and grants.",
  url: "https://spacenexus.net/kindora/cost-allocation-software",
  serviceType: "Cost Allocation Software",
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
      name: "What is cost allocation software for nonprofits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost allocation software automates the distribution of shared and indirect costs — such as facilities, IT, and administrative overhead — across programs, grants, departments, and cost centers. It replaces manual spreadsheets with rule-driven automation, full audit trails, and funder-compliant reporting.",
      },
    },
    {
      "@type": "Question",
      name: "Why is cost allocation important for nonprofits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost allocation ensures shared costs are fairly distributed to the programs and grants that consume them. This is essential for accurate program P&L reporting, funder compliance, grant budget management, and organizational cost transparency. Many funders require documented allocation methodologies.",
      },
    },
    {
      "@type": "Question",
      name: "What allocation methods does Kindora support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kindora supports direct allocation, step-down allocation, reciprocal allocation, and custom driver-based methods. Allocate based on headcount, square footage, usage, or any custom metric. Multi-tier cascade models allow complex hierarchies.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can we implement cost allocation software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kindora cost allocation software can be configured within 24 hours. Import existing allocation data from Excel, configure allocation bases and rules, map cost pools, and run your first allocation cycle immediately.",
      },
    },
  ],
};

export default function KindoraCostAllocationPage() {
  return (
    <>
      <Script id="kindora-cost-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="kindora-cost-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/kindora" className="hover:text-[#2563eb] transition-colors">Kindora</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Cost Allocation Software</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Nonprofit Financial Operations
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Cost Allocation Software for{" "}
                <span className="text-[#2563eb]">Accurate Overhead Distribution</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Automatically distribute shared costs across programs, grants, and departments with full audit trails, compliance reporting, and AI-powered allocation modeling. Trusted by nonprofits of all sizes.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Kindora powers every allocation phase</h2>
              <p className="text-gray-600 max-w-xl mx-auto">From rule configuration through audit-ready reporting — one platform manages the entire cost allocation lifecycle.</p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-5">Your allocation command center</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  See how shared costs flow through every level of your organization. Automated dashboards surface allocation anomalies, rule conflicts, and compliance gaps — so finance teams maintain accuracy without the manual overhead.
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
                  See it with your allocations
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">app.kindora.com / allocations</div>
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10 aspect-[16/9] relative">
                  <Image src="/spacenexus/screenshots/vdr-dashboard.png" alt="Kindora cost allocation dashboard" fill loading="lazy" className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 800px" />
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
                { q: "What is cost allocation software for nonprofits?", a: "Cost allocation software automates the distribution of shared and indirect costs — such as facilities, IT, and administrative overhead — across programs, grants, departments, and cost centers. It replaces manual spreadsheets with rule-driven automation, full audit trails, and funder-compliant reporting." },
                { q: "Why is cost allocation important for nonprofits?", a: "Cost allocation ensures shared costs are fairly distributed to the programs and grants that consume them. This is essential for accurate program P&L reporting, funder compliance, grant budget management, and organizational cost transparency. Many funders require documented allocation methodologies." },
                { q: "What allocation methods does Kindora support?", a: "Kindora supports direct allocation, step-down allocation, reciprocal allocation, and custom driver-based methods. Allocate based on headcount, square footage, usage, or any custom metric. Multi-tier cascade models allow complex hierarchies." },
                { q: "How quickly can we implement cost allocation software?", a: "Kindora cost allocation software can be configured within 24 hours. Import existing allocation data from Excel, configure allocation bases and rules, map cost pools, and run your first allocation cycle immediately." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Launch your nonprofit cost allocation workspace in 24 hours</h2>
            <p className="text-gray-600 mb-8">No lengthy onboarding. Configure allocation rules, import cost data, and run your first allocation cycle the same day.</p>
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
              <Link href="/kindora/grant-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Manage grant budgets and compliance requirements.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Grant Management Software →</h3>
              </Link>
              <Link href="/kindora/nonprofit-reporting-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Allocation reports and compliance documentation.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Nonprofit Reporting Software →</h3>
              </Link>
              <Link href="/kindora/program-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Track program budgets and allocated costs.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Program Management Software →</h3>
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
