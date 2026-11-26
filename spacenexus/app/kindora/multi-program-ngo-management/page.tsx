import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Multi-Program NGO Management 2026 | Unified Operations",
  description:
    "Manage multiple programs, grants, and teams from one unified platform. Kindora multi-program NGO management provides cross-program visibility, shared resources, and consolidated reporting.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/multi-program-ngo-management",
  },
  openGraph: {
    title: "Multi-Program NGO Management 2026",
    description:
      "Manage multiple programs, grants, and teams from one unified platform. The complete guide for NGO operations leaders.",
    url: "https://spacenexus.net/kindora/multi-program-ngo-management",
    siteName: "Kindora by Space Nexus",
    type: "article",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Multi-Program NGO Management" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Program NGO Management 2026 — Complete Guide",
    description:
      "The complete guide to multi-program NGO management. Cross-program visibility, shared resources, and consolidated reporting for operations teams.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "multi-program NGO management",
    "NGO program management",
    "multi-program nonprofit software",
    "NGO operations management",
    "cross-program management",
    "nonprofit multi-program platform",
    "NGO program coordination",
    "multi-site NGO software",
  ],
};

const mustHaveFeatures = [
  {
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
    title: "Multi-program dashboard",
    description:
      "Unified dashboard showing enrollment, attendance, outcomes, and budget status across every active program. Drill into any program for detailed metrics while maintaining organizational-wide visibility.",
  },
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "Cross-program resource allocation",
    description:
      "Share staff, equipment, and budgets across programs. Track resource utilization in real time, prevent over-allocation, and optimize how your organization deploys limited resources across competing priorities.",
  },
  {
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    title: "Consolidated financial management",
    description:
      "Track budgets, expenses, and revenue across all programs with shared chart of accounts. Fund accounting, cost allocation, and multi-currency support ensure accurate financial reporting per grant and per program.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Cross-program impact reporting",
    description:
      "Generate consolidated reports showing impact across all programs. Board-ready summaries, funder-specific reports, and regulatory submissions pull data from every program into unified outputs.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Staff & volunteer cross-assignment",
    description:
      "Assign staff and volunteers to multiple programs with time tracking and availability management. See who is working on what across the organization and prevent double-booking or burnout.",
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Multi-grant compliance tracking",
    description:
      "Track compliance requirements across grants funding different programs. Automated reminders, deadline tracking, and funder-specific reporting templates ensure every grant stays compliant.",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Automated cross-program workflows",
    description:
      "Automate processes that span multiple programs — shared intake forms, cross-referral workflows, and consolidated approval chains. Workflows trigger actions across programs based on events in any single program.",
  },
  {
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    title: "Role-based cross-program access",
    description:
      "Grant access at the program, department, and organization level. Program managers see their programs, executives see everything, and external auditors get read-only access to relevant programs only.",
  },
  {
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
    title: "Organization-wide analytics",
    description:
      "Compare program performance, identify trends across programs, and benchmark outcomes. Analytics surface which programs are most effective, where resources are best deployed, and where improvements are needed.",
  },
];

const comparisonData = {
  spreadsheets: {
    title: "Spreadsheets & Manual Tracking",
    subtitle: "Excel, Google Sheets, paper records",
    items: [
      { text: "Each program tracked separately", good: false },
      { text: "No cross-program visibility", good: false },
      { text: "Manual data consolidation for reports", good: false },
      { text: "Version conflicts and data silos", good: false },
      { text: "No resource sharing visibility", good: false },
      { text: "Hours spent on manual reporting", good: false },
    ],
  },
  singleProgram: {
    title: "Single-Program Tools",
    subtitle: "Program-specific software, isolated systems",
    items: [
      { text: "Good depth for individual programs", good: true },
      { text: "No cross-program coordination", good: false },
      { text: "Separate logins and data per tool", good: false },
      { text: "Duplicate data entry across systems", good: false },
      { text: "No consolidated organizational view", good: false },
      { text: "Expensive per-program licensing", good: false },
    ],
  },
  kindora: {
    title: "Kindora Multi-Program Management",
    subtitle: "Purpose-built for multi-program NGOs",
    items: [
      { text: "Unified dashboard across all programs", good: true },
      { text: "Cross-program resource allocation", good: true },
      { text: "Consolidated financial management", good: true },
      { text: "Shared staff and volunteer assignment", good: true },
      { text: "One-click cross-program reporting", good: true },
      { text: "Multi-grant compliance tracking", good: true },
    ],
  },
};

const useCases = [
  {
    title: "Multi-Site Service Delivery",
    description:
      "NGOs delivering the same program across multiple locations — tutoring centers, health clinics, or community offices — need unified tracking with local flexibility. Kindora provides both.",
  },
  {
    title: "Cross-Program Client Referrals",
    description:
      "When a client needs services from multiple programs, Kindora tracks the referral, shares relevant data (with consent), and coordinates care across programs — no client falls through the cracks.",
  },
  {
    title: "Shared Staff Across Programs",
    description:
      "Program coordinators, case managers, and volunteers often work across multiple programs. Kindora tracks time, availability, and workload across programs to prevent burnout and optimize deployment.",
  },
  {
    title: "Consolidated Grant Reporting",
    description:
      "When a single funder supports multiple programs, generate consolidated reports showing aggregate impact. When different grants fund different programs, track compliance and spending per grant with precision.",
  },
  {
    title: "Board & Executive Reporting",
    description:
      "Leadership needs a unified view of organizational performance — not per-program silos. Consolidated dashboards show total impact, resource utilization, and financial health across every program.",
  },
  {
    title: "Multi-Year Program Planning",
    description:
      "Plan program expansion, new program launches, and resource reallocation across your portfolio. Multi-year projections and scenario planning help leadership make data-driven decisions.",
  },
  {
    title: "Volunteer Cross-Training",
    description:
      "Volunteers who work across multiple programs need visibility into schedules, requirements, and outcomes for each. Kindora provides a single volunteer portal with access to all assigned programs.",
  },
  {
    title: "Regulatory & Compliance Reporting",
    description:
      "NGOs with multiple programs face complex regulatory requirements — different funder rules, government mandates, and accreditation standards. Kindora tracks compliance across every program simultaneously.",
  },
];

const bestPractices = [
  {
    title: "Standardize data structures across programs",
    description:
      "Use consistent enrollment forms, outcome metrics, and reporting templates across all programs. Standardization enables cross-program comparison and consolidated reporting without data transformation.",
  },
  {
    title: "Implement shared resource pools",
    description:
      "Create shared resource pools for staff, equipment, and meeting spaces that serve multiple programs. Visibility into resource utilization prevents over-allocation and identifies optimization opportunities.",
  },
  {
    title: "Use cross-program dashboards for leadership",
    description:
      "Executives and board members need consolidated views, not per-program silos. Configure organization-wide dashboards that roll up key metrics from every program into a single view.",
  },
  {
    title: "Establish cross-program referral protocols",
    description:
      "When clients need services from multiple programs, formalize the referral process. Define which staff can refer, what data is shared, and how intake works across programs.",
  },
  {
    title: "Consolidate grant compliance tracking",
    description:
      "Track all grant deadlines, reporting requirements, and compliance obligations in one system. Automated reminders and consolidated compliance dashboards prevent missed deadlines across programs.",
  },
  {
    title: "Measure cross-program outcomes",
    description:
      "Some outcomes span multiple programs — client retention, community impact, or organizational sustainability. Define and measure cross-program outcomes alongside program-specific metrics.",
  },
  {
    title: "Conduct quarterly portfolio reviews",
    description:
      "Review your program portfolio quarterly. Which programs are most effective? Where should resources shift? Which programs should expand, consolidate, or sunset? Data-driven portfolio management maximizes organizational impact.",
  },
  {
    title: "Train staff on cross-program visibility",
    description:
      "Staff should understand how their program fits into the organization's broader mission. Cross-program visibility helps staff see the bigger picture and coordinate with colleagues in other programs.",
  },
];

const selectionCriteria = [
  {
    title: "Multi-program dashboard",
    description:
      "The platform should provide a unified dashboard showing key metrics across all active programs. Drill-down capability to individual programs and roll-up to organizational summary.",
  },
  {
    title: "Cross-program resource management",
    description:
      "Track staff, volunteer, and equipment allocation across programs. Prevent over-allocation, optimize deployment, and see utilization rates across the organization.",
  },
  {
    title: "Consolidated financial management",
    description:
      "Multi-program budgeting, fund accounting, cost allocation, and financial reporting. Track expenses per program, per grant, and per funder with a shared chart of accounts.",
  },
  {
    title: "Flexible program configuration",
    description:
      "Each program should be configurable independently — different enrollment forms, outcome metrics, workflows, and reporting templates — while maintaining organizational consistency.",
  },
  {
    title: "Cross-program client management",
    description:
      "Track clients across multiple programs with shared profiles, consent management, and referral workflows. Ensure continuity of care when clients access services from different programs.",
  },
  {
    title: "Consolidated reporting and analytics",
    description:
      "Generate reports that pull data from multiple programs. Board summaries, funder reports, and regulatory submissions should be producible with one click, not hours of manual consolidation.",
  },
  {
    title: "Role-based access across programs",
    description:
      "Granular permissions at the program, department, and organization level. Program managers see their programs, executives see everything, and auditors get relevant access only.",
  },
  {
    title: "Scalability for program growth",
    description:
      "The platform should handle adding new programs without reconfiguration or data migration. As your organization grows, the system should scale with you — not against you.",
  },
];

const faqItems = [
  {
    question: "What is multi-program NGO management?",
    answer:
      "Multi-program NGO management is the practice of coordinating, tracking, and reporting across multiple programs within a single NGO from one unified platform. It replaces per-program silos with cross-program visibility, shared resource management, and consolidated reporting — giving leadership a complete view of organizational performance.",
  },
  {
    question: "Why do NGOs need multi-program management software?",
    answer:
      "NGOs with multiple programs face challenges that single-program tools cannot solve: shared staff across programs, consolidated grant reporting, cross-program client referrals, and organizational-wide dashboards. Multi-program management software eliminates data silos and provides the coordination layer that multi-program operations require.",
  },
  {
    question: "How does Kindora handle multiple programs?",
    answer:
      "Kindora supports unlimited programs with independent configuration — each program has its own enrollment forms, outcome metrics, workflows, and reporting templates. Cross-program features include shared dashboards, resource allocation, consolidated financials, and organization-wide analytics.",
  },
  {
    question: "Can staff work across multiple programs in Kindora?",
    answer:
      "Yes. Kindora supports cross-program staff and volunteer assignment with time tracking, availability management, and workload visibility. Staff see all their assigned programs in one portal, and managers see utilization across programs.",
  },
  {
    question: "How does multi-program management affect grant compliance?",
    answer:
      "Kindora tracks grant compliance requirements across programs — deadlines, reporting obligations, and spending limits. Consolidated compliance dashboards show the status of every grant across every program, with automated reminders for upcoming deadlines.",
  },
  {
    question: "Can we compare performance across programs?",
    answer:
      "Yes. Kindora's analytics compare enrollment, attendance, outcomes, cost-per-participant, and other metrics across programs. Identify which programs are most effective, where resources are best deployed, and where improvements are needed.",
  },
  {
    question: "How long does it take to set up multi-program management?",
    answer:
      "Most organizations are running their first program within hours. Adding additional programs takes minutes — configure program-specific settings, and cross-program features (dashboards, financials, reporting) work automatically.",
  },
  {
    question: "Is Kindora suitable for small NGOs with 2–3 programs?",
    answer:
      "Yes. Kindora is designed for NGOs of every size — from small organizations with 2–3 programs to large NGOs with dozens. Multi-program features provide value at any scale by eliminating spreadsheet silos and enabling consolidated visibility.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Multi-Program NGO Management 2026 — Complete Guide for Operations Teams",
  description:
    "The complete 2026 guide to multi-program NGO management. Cross-program visibility, shared resources, and consolidated reporting for operations leaders.",
  author: { "@id": "https://spacenexus.net/kindora/#organization" },
  publisher: { "@id": "https://spacenexus.net/kindora/#organization" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  mainEntityOfPage: "https://spacenexus.net/kindora/multi-program-ngo-management",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};



const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kindora Multi-Program NGO Management",
  description: "Manage multiple programs, grants, and teams from one unified platform with cross-program visibility and consolidated reporting.",
  url: "https://spacenexus.net/kindora/multi-program-ngo-management",
  serviceType: "Multi-Program NGO Management",
  provider: { "@id": "https://spacenexus.net/kindora/#organization" },
  areaServed: { "@type": "Place", name: "Worldwide" },
  offers: { "@type": "Offer", url: "https://spacenexus.net/kindora/pricing", availability: "https://schema.org/InStock", priceCurrency: "USD" },
};

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function MultiProgramNGOManagementPage() {
  return (
    <>
      <Script id="kindora-mp-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="kindora-mp-article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="kindora-mp-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="pt-20 lg:pt-24">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <nav className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-6">
                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                <Link href="/kindora" className="hover:text-[#2563eb] transition-colors">Kindora</Link>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                <span className="text-gray-600">Multi-Program NGO Management</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                2026 Complete Guide
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Multi-Program NGO Management{" "}
                <span className="text-[#2563eb]">— The 2026 Guide</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Manage multiple programs, grants, and teams from one unified platform. This guide covers the differences between spreadsheet tracking, single-program tools, and purpose-built multi-program NGO management — plus the features, best practices, and selection framework operations teams need in 2026.
              </p>
              <p className="text-sm text-gray-500 mb-10">
                16-minute read &nbsp;·&nbsp; Last updated: July 1, 2026 &nbsp;·&nbsp; Covers: comparison, features, best practices, FAQ
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#comparison" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                  Spreadsheets vs. Kindora
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
                <a href="#features" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                  Must-Have Features
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Strip */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { metric: "80%", label: "less time on admin" },
                { metric: "3x", label: "faster reporting" },
                { metric: "100%", label: "cross-program visibility" },
                { metric: "30 min", label: "setup time" },
              ].map((b) => (
                <div key={b.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-[#2563eb] mb-1">{b.metric}</p>
                  <p className="text-sm text-gray-600">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is multi-program NGO management */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What is multi-program NGO management?</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Multi-program NGO management is the practice of coordinating, tracking, and reporting across multiple programs within a single NGO from one unified platform. It replaces per-program silos — where each program has its own spreadsheets, tools, and data — with cross-program visibility, shared resource management, and consolidated reporting.
              </p>
              <p>
                The category emerged from the challenges NGOs face as they scale. A 5-person NGO running one program can manage with spreadsheets. A 50-person NGO running 15 programs across 5 locations needs a coordination layer that spreadsheet tools cannot provide. Multi-program management software provides that layer.
              </p>
              <p>
                Today, multi-program management is a strategic capability for NGOs that need to scale impact without proportional administrative growth. Effective implementations reduce duplicated effort, improve resource utilization, enable cross-program referrals, and give leadership the consolidated visibility needed for strategic decision-making.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section id="comparison" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Comparison</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Spreadsheets vs. Single-Program Tools vs. Kindora</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Three approaches to multi-program NGO management — and why unified management outperforms the alternatives.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {Object.entries(comparisonData).map(([key, data]) => (
                <div key={key} className={`bg-white rounded-2xl border p-7 shadow-sm ${key === "kindora" ? "border-[#2563eb]/40 ring-1 ring-[#2563eb]/10" : "border-gray-200"}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{data.title}</h3>
                  <p className="text-sm text-gray-500 mb-5">{data.subtitle}</p>
                  <ul className="space-y-2.5">
                    {data.items.map((item) => (
                      <li key={item.text} className="flex items-start gap-2.5 text-sm text-gray-700">
                        {item.good ? <CheckIcon /> : <XIcon />}
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Must-Have Features */}
        <section id="features" className="py-16 lg:py-20 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Feature Checklist</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Must-have features for multi-program NGO management</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These nine capabilities are the baseline for any modern multi-program NGO management platform. Anything missing is a red flag for coordination, compliance, or scalability.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mustHaveFeatures.map((feature) => (
                <div key={feature.title} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-[#2563eb]/20 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 lg:py-20 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Multi-program management by NGO function</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every multi-program organization faces coordination challenges. Here are the highest-impact use cases across NGO operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {useCases.map((uc) => (
                <div key={uc.title} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:border-[#2563eb]/20 transition-all">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{uc.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8 best practices for multi-program NGO management</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The platform is only part of the equation. These best practices help you get the most out of any multi-program management system.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {bestPractices.map((bp, i) => (
                <div key={bp.title} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-sm font-bold">{i + 1}</span>
                    <h3 className="text-base font-bold text-gray-900 pt-1">{bp.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-11">{bp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selection Criteria */}
        <section className="py-16 lg:py-20 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to choose a multi-program NGO management platform</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Use these eight criteria to evaluate any multi-program management solution. Prioritize based on your program count, complexity, and organizational structure.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {selectionCriteria.map((c) => (
                <div key={c.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">✓</span>
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed pl-7">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Frequently asked questions about multi-program NGO management
            </h2>
            <div className="space-y-5">
              {faqItems.map((item) => (
                <div key={item.question} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-10 bg-[#f8f9fa] border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-gray-700 mb-4">Continue exploring</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/kindora/program-management-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Program Management Software →
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/kindora/ngo-management-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                NGO Management Software →
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/kindora/grant-management-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Grant Management Software →
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/kindora/nonprofit-reporting-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Nonprofit Reporting Software →
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See the multi-program management platform built for NGOs
            </h2>
            <p className="text-gray-600 mb-8">
              Get a purpose-built multi-program platform — with cross-program dashboards, shared resource management, consolidated financials, and one-click reporting that gives leadership complete visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kindora/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                Request a Live Demo
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/kindora/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                See Pricing
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">SOC 2 Type II · AES-256 encryption · Unlimited programs · No credit card required</p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related Resources</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/kindora/program-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Track enrollment, delivery, and outcomes.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Program Management Software →</h3>
              </Link>
              <Link href="/kindora/ngo-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Complete NGO operations platform.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">NGO Management Software →</h3>
              </Link>
              <Link href="/kindora/grant-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Manage grant budgets, expenses, and compliance.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Grant Management Software →</h3>
              </Link>
              <Link href="/kindora/nonprofit-reporting-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Financial statements and compliance reports.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Nonprofit Reporting Software →</h3>
              </Link>
              <Link href="/kindora/budget-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Plan, track, and control nonprofit budgets.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Budget Management Software →</h3>
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
