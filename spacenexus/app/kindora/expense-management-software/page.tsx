import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Expense Management Software | Nonprofit Expense Tracking",
  description:
    "Kindora expense management software for nonprofits. Track, categorize, and reconcile expenses across programs, grants, and departments with automated receipt capture and approval workflows.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/expense-management-software",
  },
  openGraph: {
    title: "Expense Management Software",
    description: "Track, categorize, and reconcile expenses across programs, grants, and departments with automated approval workflows.",
    url: "https://spacenexus.net/kindora/expense-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Expense Management Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expense Management Software",
    description: "Track, categorize, and reconcile expenses with automated approval workflows.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "expense management software",
    "nonprofit expense tracking",
    "expense reporting software",
    "expense approval workflow",
    "grant expense management",
    "program expense tracking",
    "reimbursement software nonprofit",
    "receipt capture software",
  ],
};

const capabilities = [
  {
    stage: "1",
    title: "Expense Capture & Submission",
    description: "Staff submit expenses via web or mobile with photo receipt capture. AI auto-extracts vendor, amount, date, and category — eliminating manual data entry and ensuring consistent categorization from the start.",
    features: ["Mobile receipt scanning with OCR", "AI-powered expense categorization", "Mileage and per diem calculations"],
    color: "bg-blue-50 border-blue-200 text-blue-700",
    dot: "bg-blue-500",
  },
  {
    stage: "2",
    title: "Approval Workflows",
    description: "Configurable multi-level approval chains route expenses to the right reviewers based on amount, department, grant, or expense type. Approvers see full context — receipt, policy compliance, and budget impact — in one view.",
    features: ["Role-based approval routing", "Budget impact preview before approval", "Mobile approve/reject with comments"],
    color: "bg-purple-50 border-purple-200 text-purple-700",
    dot: "bg-purple-500",
  },
  {
    stage: "3",
    title: "Policy Compliance & Audit Trails",
    description: "Automated policy checks flag out-of-policy expenses before submission. Every expense, approval, and modification is logged with a tamper-evident audit trail — ready for funder audits and regulatory reviews.",
    features: ["Automated policy compliance checks", "Tamper-evident audit trails", "Funder-specific expense rules"],
    color: "bg-orange-50 border-orange-200 text-orange-700",
    dot: "bg-orange-500",
  },
  {
    stage: "4",
    title: "Reporting & Reconciliation",
    description: "Real-time expense dashboards show spending by program, grant, department, or vendor. One-click reconciliation matches expenses to bank transactions, and automated reports satisfy grant reporting requirements.",
    features: ["Real-time expense dashboards", "One-click bank reconciliation", "Grant-compliant expense reports"],
    color: "bg-green-50 border-green-200 text-green-700",
    dot: "bg-green-500",
  },
];

const features = [
  { title: "Grant-Linked Expenses", desc: "Tag every expense to a specific grant, program, or fund for accurate allocation and reporting." },
  { title: "Receipt Management", desc: "Store, search, and retrieve receipts digitally — no more paper filing or lost documentation." },
  { title: "Per Diem & Mileage", desc: "Automatic per diem calculations and mileage tracking based on configurable rates." },
  { title: "Recurring Expenses", desc: "Set up recurring expenses for subscriptions, rent, and utilities with automatic categorization." },
  { title: "Multi-Currency Support", desc: "Track expenses in local currencies with automatic conversion for international programs." },
  { title: "Role-Based Access", desc: "Staff submit, managers approve, finance reviews — each role gets precisely the access needed." },
];

const benefits = [
  { metric: "80%", label: "faster expense submission" },
  { metric: "50%", label: "reduction in processing time" },
  { metric: "95%", label: "first-pass approval rate" },
  { metric: "100%", label: "policy compliance tracking" },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kindora Expense Management Software",
  description: "Expense management software for nonprofits. Track, categorize, and reconcile expenses across programs, grants, and departments.",
  url: "https://spacenexus.net/kindora/expense-management-software",
  serviceType: "Expense Management Software",
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
      name: "What is expense management software for nonprofits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Expense management software for nonprofits is a platform that automates expense submission, approval, tracking, and reconciliation across programs, grants, and departments. It replaces paper receipts and manual spreadsheets with digital capture, automated policy checks, and grant-compliant reporting.",
      },
    },
    {
      "@type": "Question",
      name: "How does Kindora handle grant-specific expenses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kindora lets you tag every expense to a specific grant, program, or fund. The system enforces grant-specific expense rules, tracks remaining budgets in real time, and generates funder-ready expense reports that satisfy compliance requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can staff submit expenses from mobile devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Kindora provides mobile expense submission with photo receipt capture. Staff can photograph receipts on their phones, and AI auto-extracts vendor, amount, date, and category. Expenses route through approval workflows immediately.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can we implement expense management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kindora expense management software can be configured within 24 hours. Set up approval workflows, configure expense policies, invite staff, and begin submitting expenses the same day.",
      },
    },
  ],
};

export default function KindoraExpenseManagementPage() {
  return (
    <>
      <Script id="kindora-expense-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="kindora-expense-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/kindora" className="hover:text-[#2563eb] transition-colors">Kindora</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Expense Management Software</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                </svg>
                Nonprofit Expense Operations
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Expense Management Software for{" "}
                <span className="text-[#2563eb]">Streamlined Nonprofit Spending</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Track, categorize, and reconcile expenses across programs, grants, and departments with automated receipt capture, approval workflows, and policy compliance. Built for nonprofits that need <strong>grant-ready expense documentation</strong>.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Kindora powers every expense phase</h2>
              <p className="text-gray-600 max-w-xl mx-auto">From receipt capture through reconciliation — one platform manages the entire expense lifecycle.</p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-5">Your expense command center</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  See every expense across your organization at a glance. Automated dashboards surface policy violations, pending approvals, and budget impacts — so finance teams stay in control without the chase.
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
                  See it with your expenses
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">app.kindora.com / expenses</div>
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10 aspect-[16/9] relative">
                  <Image src="/spacenexus/screenshots/vdr-dashboard.png" alt="Kindora expense management dashboard" fill loading="lazy" className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 800px" />
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
                { q: "What is expense management software for nonprofits?", a: "Expense management software for nonprofits is a platform that automates expense submission, approval, tracking, and reconciliation across programs, grants, and departments. It replaces paper receipts and manual spreadsheets with digital capture, automated policy checks, and grant-compliant reporting." },
                { q: "How does Kindora handle grant-specific expenses?", a: "Kindora lets you tag every expense to a specific grant, program, or fund. The system enforces grant-specific expense rules, tracks remaining budgets in real time, and generates funder-ready expense reports that satisfy compliance requirements." },
                { q: "Can staff submit expenses from mobile devices?", a: "Yes. Kindora provides mobile expense submission with photo receipt capture. Staff can photograph receipts on their phones, and AI auto-extracts vendor, amount, date, and category. Expenses route through approval workflows immediately." },
                { q: "How quickly can we implement expense management software?", a: "Kindora expense management software can be configured within 24 hours. Set up approval workflows, configure expense policies, invite staff, and begin submitting expenses the same day." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Launch your nonprofit expense workspace in 24 hours</h2>
            <p className="text-gray-600 mb-8">No lengthy onboarding. Configure approval workflows, set expense policies, invite staff, and start submitting expenses the same day.</p>
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
              <Link href="/kindora/cost-allocation-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Allocate shared costs across programs and departments.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Cost Allocation Software →</h3>
              </Link>
              <Link href="/kindora/financial-reporting-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Financial statements and compliance reports.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Financial Reporting Software →</h3>
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
