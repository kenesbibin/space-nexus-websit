import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Foundation Management Software 2026 | Grant & Fund Tracking",
  description:
    "Manage foundation grants, donor funds, and philanthropic programs from one platform. Kindora foundation management software tracks grants, fund allocations, compliance, and impact reporting.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/foundation-management-software",
  },
  openGraph: {
    title: "Foundation Management Software 2026",
    description:
      "Manage foundation grants, donor funds, and philanthropic programs from one unified platform. The complete guide for foundation operations leaders.",
    url: "https://spacenexus.net/kindora/foundation-management-software",
    siteName: "Kindora by Space Nexus",
    type: "article",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Foundation Management Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foundation Management Software 2026 — Complete Guide",
    description:
      "The complete guide to foundation management software. Grant tracking, fund management, compliance, and impact reporting for foundations and philanthropic organizations.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "foundation management software",
    "foundation grant management",
    "philanthropy software",
    "foundation fund tracking",
    "grant management for foundations",
    "foundation reporting software",
    "philanthropic fund management",
    "foundation compliance software",
  ],
};

const mustHaveFeatures = [
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Grant lifecycle management",
    description:
      "Track the full grant lifecycle — from solicitation and application through award, disbursement, reporting, and renewal. Manage deadlines, compliance requirements, and funder relationships across every active grant.",
  },
  {
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Fund accounting & allocation",
    description:
      "Track restricted, unrestricted, and endowment funds with proper fund accounting. Allocate costs across grants, programs, and administrative overhead with precision that auditors require.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Impact measurement & reporting",
    description:
      "Define impact metrics, collect outcome data, and generate funder-ready reports. Automated report generation compiles grant performance, beneficiary outcomes, and financial summaries in minutes.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Grantee & partner management",
    description:
      "Manage relationships with grantees, partners, and sub-recipients. Track applications, review status, award amounts, compliance, and performance for every funded organization.",
  },
  {
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    title: "Budget management & tracking",
    description:
      "Create program budgets, track actuals against forecasts, and manage budget amendments. Real-time budget dashboards show spending velocity, remaining balances, and projected end-of-period positions.",
  },
  {
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    title: "Compliance & audit readiness",
    description:
      "Tamper-evident audit trails, automated compliance reminders, and one-click audit report generation. Track reporting deadlines, spending limits, and funder requirements across every grant.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    title: "Automated workflows",
    description:
      "Automate grant review, approval, disbursement, and reporting workflows. Route applications through review committees, trigger disbursement approvals, and send reporting reminders automatically.",
  },
  {
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    title: "Board & committee reporting",
    description:
      "Generate board-ready reports showing foundation performance, grant portfolio health, and impact outcomes. Committee-specific views for finance, grants, and programs ensure focused oversight.",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Donor & contributor tracking",
    description:
      "Track contributions to the foundation — individual donors, corporate sponsors, and government grants. Manage donor relationships, acknowledgment letters, and contribution history in one place.",
  },
];

const comparisonData = {
  spreadsheets: {
    title: "Spreadsheets & Manual Tracking",
    subtitle: "Excel, Google Sheets, paper files",
    items: [
      { text: "No grant lifecycle tracking", good: false },
      { text: "Manual budget reconciliation", good: false },
      { text: "No compliance deadline alerts", good: false },
      { text: "Hours spent on report generation", good: false },
      { text: "No audit trail for grants", good: false },
      { text: "Version conflicts and data loss risk", good: false },
    ],
  },
  generic: {
    title: "Generic Grant Management Tools",
    subtitle: "Foundant, SmartSimple, Fluxx",
    items: [
      { text: "Good grant application tracking", good: true },
      { text: "Basic reporting capabilities", good: true },
      { text: "Grant deadline management", good: true },
      { text: "Not integrated with operations", good: false },
      { text: "Limited fund accounting", good: false },
      { text: "Expensive per-user licensing", good: false },
    ],
  },
  kindora: {
    title: "Kindora Foundation Management",
    subtitle: "Purpose-built for foundations",
    items: [
      { text: "Full grant lifecycle management", good: true },
      { text: "Fund accounting with cost allocation", good: true },
      { text: "Integrated impact measurement", good: true },
      { text: "Connected to program delivery", good: true },
      { text: "Automated compliance tracking", good: true },
      { text: "Board and committee reporting", good: true },
    ],
  },
};

const useCases = [
  {
    title: "Community Foundations",
    description:
      "Manage donor-advised funds, community grants, and scholarship programs. Track fund balances, grant distributions, and community impact across hundreds of grants simultaneously.",
  },
  {
    title: "Family Foundations",
    description:
      "Simplify family foundation operations with streamlined grant management, donor contribution tracking, and board reporting. Reduce administrative overhead while maintaining family philanthropy goals.",
  },
  {
    title: "Corporate Foundations",
    description:
      "Manage corporate giving programs, employee matching gifts, and community investment initiatives. Track compliance with corporate governance requirements and generate impact reports for stakeholders.",
  },
  {
    title: "Government Grant Programs",
    description:
      "Administer government-funded grant programs with strict compliance requirements. Track spending against allocations, generate required reports, and maintain audit-ready documentation.",
  },
  {
    title: "Scholarship Foundations",
    description:
      "Manage scholarship applications, review processes, award disbursements, and recipient tracking. Automate application workflows and track scholar outcomes over time.",
  },
  {
    title: "Research Foundations",
    description:
      "Track research grants from proposal through publication. Manage researcher relationships, funding allocations, progress reports, and intellectual property considerations.",
  },
  {
    title: "International Philanthropy",
    description:
      "Manage cross-border grants with multi-currency support, compliance with international regulations, and impact measurement across diverse geographic contexts.",
  },
  {
    title: "Donor-Advised Funds",
    description:
      "Track donor contributions, recommend grants, and manage fund balances. Provide donors with transparent reporting on fund performance and grant impact.",
  },
];

const bestPractices = [
  {
    title: "Implement proper fund accounting from day one",
    description:
      "Distinguish between restricted, unrestricted, and endowment funds. Track fund balances, restrictions, and spending rules accurately. Proper fund accounting prevents compliance violations and audit findings.",
  },
  {
    title: "Automate grant reporting schedules",
    description:
      "Set up automated reminders for quarterly, semi-annual, and annual grant reports. Automated schedules prevent missed deadlines and ensure consistent reporting to funders.",
  },
  {
    title: "Define clear impact metrics for each grant",
    description:
      "Before disbursing funds, define measurable outcomes for each grant. Clear metrics make reporting straightforward and demonstrate foundation impact to board members and stakeholders.",
  },
  {
    title: "Conduct regular portfolio reviews",
    description:
      "Review the grant portfolio quarterly. Identify grants that need attention, track renewal timelines, and assess overall portfolio health. Proactive management prevents compliance issues.",
  },
  {
    title: "Maintain audit-ready documentation",
    description:
      "Every grant action — application, review, award, disbursement, report, and closeout — should be documented with timestamps and approvals. Audit-ready documentation satisfies funder requirements and board oversight.",
  },
  {
    title: "Streamline grantee communication",
    description:
      "Establish clear communication channels with grantees. Automated status updates, reporting reminders, and feedback mechanisms keep grantees engaged and informed throughout the grant period.",
  },
  {
    title: "Use data for strategic grantmaking",
    description:
      "Leverage grant data to identify trends, measure foundation impact, and inform strategic decisions. Data-driven grantmaking maximizes the foundation's philanthropic impact.",
  },
  {
    title: "Train board members on foundation software",
    description:
      "Board members need visibility into foundation performance. Provide training on dashboards, reports, and key metrics so board oversight is informed and effective.",
  },
];

const selectionCriteria = [
  {
    title: "Grant lifecycle management",
    description:
      "Track the complete grant lifecycle — application, review, award, disbursement, reporting, and closeout. Support for multiple grant types, funding cycles, and funder requirements.",
  },
  {
    title: "Fund accounting capabilities",
    description:
      "Proper fund accounting for restricted, unrestricted, and endowment funds. Fund balance tracking, spending rules, and cost allocation across grants and programs.",
  },
  {
    title: "Impact measurement and reporting",
    description:
      "Define impact metrics, collect outcome data, and generate automated reports. Support for custom report templates, funder-specific formats, and one-click board presentations.",
  },
  {
    title: "Grantee management features",
    description:
      "Track grantee relationships, application status, award amounts, compliance, and performance. Support for multiple grantees per grant and sub-recipient management.",
  },
  {
    title: "Compliance and audit support",
    description:
      "Automated compliance reminders, tamper-evident audit trails, and one-click audit report generation. Track reporting deadlines, spending limits, and funder requirements.",
  },
  {
    title: "Workflow automation",
    description:
      "Automate grant review, approval, disbursement, and reporting workflows. Route applications through review committees and trigger approvals based on amount, type, and program.",
  },
  {
    title: "Board and committee reporting",
    description:
      "Generate board-ready reports with grant portfolio performance, financial summaries, and impact outcomes. Committee-specific views for focused oversight.",
  },
  {
    title: "Integration with operations",
    description:
      "Connect grant management with program delivery, financial management, and donor tracking. Integrated platforms eliminate data silos and provide complete organizational visibility.",
  },
];

const faqItems = [
  {
    question: "What is foundation management software?",
    answer:
      "Foundation management software is a platform that helps foundations and philanthropic organizations manage the full grant lifecycle — from solicitation and application through award, disbursement, reporting, and renewal. It includes fund accounting, grantee management, impact measurement, compliance tracking, and board reporting — all purpose-built for foundation operations.",
  },
  {
    question: "How does foundation management software differ from grant management?",
    answer:
      "Grant management software typically focuses on the grantor's perspective — managing applications, reviews, and awards. Foundation management software is broader — it includes fund accounting, donor contribution tracking, investment management, board reporting, and multi-year strategic planning that foundations require.",
  },
  {
    question: "What features should foundation management software have?",
    answer:
      "Essential features include grant lifecycle management, fund accounting with restricted/unrestricted tracking, grantee management, impact measurement, compliance tracking, automated workflows, board reporting, and donor contribution management. Integration with accounting and program delivery systems is also important.",
  },
  {
    question: "How does Kindora help with foundation management?",
    answer:
      "Kindora provides a complete foundation management platform with grant lifecycle tracking, fund accounting, grantee management, impact measurement, and automated compliance. The platform connects grant management with program delivery and financial reporting — giving foundations complete operational visibility.",
  },
  {
    question: "Can Kindora manage multiple fund types?",
    answer:
      "Yes. Kindora supports restricted funds, unrestricted funds, endowment funds, donor-advised funds, and matching funds. Each fund type has its own balance, spending rules, and reporting requirements — all tracked accurately with proper fund accounting.",
  },
  {
    question: "How does foundation management software handle compliance?",
    answer:
      "Kindora tracks compliance requirements for every grant — reporting deadlines, spending limits, and funder-specific obligations. Automated reminders alert staff before deadlines. Tamper-evident audit trails log every grant action, and one-click report generation compiles compliance documentation.",
  },
  {
    question: "Can foundation management software generate board reports?",
    answer:
      "Yes. Kindora generates board-ready reports showing grant portfolio performance, financial summaries, impact outcomes, and compliance status. Reports can be customized by committee — finance, grants, programs — and exported in standard formats for board meetings.",
  },
  {
    question: "How long does it take to implement foundation management software?",
    answer:
      "Most foundations are running their first grant within days. Pre-built grant templates, fund accounting setup, and grantee import tools accelerate implementation. More complex implementations with custom workflows and integrations typically take 2–4 weeks.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Foundation Management Software 2026 — Complete Guide for Foundation Operations",
  description:
    "The complete 2026 guide to foundation management software. Grant tracking, fund management, compliance, and impact reporting for foundation operations leaders.",
  author: { "@id": "https://spacenexus.net/kindora/#organization" },
  publisher: { "@id": "https://spacenexus.net/kindora/#organization" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  mainEntityOfPage: "https://spacenexus.net/kindora/foundation-management-software",
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
  name: "Kindora Foundation Management Software",
  description: "Manage foundation grants, donor funds, and philanthropic programs with grant lifecycle tracking, fund accounting, and impact reporting.",
  url: "https://spacenexus.net/kindora/foundation-management-software",
  serviceType: "Foundation Management Software",
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

export default function FoundationManagementSoftwarePage() {
  return (
    <>
      <Script id="kindora-fm-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="kindora-fm-article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="kindora-fm-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
                <span className="text-gray-600">Foundation Management Software</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                2026 Complete Guide
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Foundation Management Software{" "}
                <span className="text-[#2563eb]">— The 2026 Guide</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Manage foundation grants, donor funds, and philanthropic programs from one unified platform. This guide covers the differences between spreadsheet tracking, generic grant tools, and purpose-built foundation management software — plus the features, best practices, and selection framework foundation operations teams need in 2026.
              </p>
              <p className="text-sm text-gray-400 mb-10">
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
                { metric: "75%", label: "faster grant reporting" },
                { metric: "100%", label: "compliance tracking" },
                { metric: "60%", label: "reduction in admin time" },
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

        {/* What is foundation management software */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What is foundation management software?</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Foundation management software is a platform that helps foundations and philanthropic organizations manage the full grant lifecycle — from solicitation and application through award, disbursement, reporting, and renewal. It combines fund accounting, grantee management, impact measurement, compliance tracking, and board reporting into one purpose-built system.
              </p>
              <p>
                The category emerged from the limitations of generic grant management tools for foundation operations. Foundations have unique needs — fund accounting for restricted and unrestricted funds, multi-year grant commitments, donor contribution tracking, investment management, and board oversight — that generic tools do not address.
              </p>
              <p>
                Today, foundation management software is a strategic capability for foundations that need to maximize philanthropic impact while maintaining rigorous compliance. Effective implementations reduce administrative overhead, improve grantee relationships, ensure compliance, and provide the data foundation needs for strategic grantmaking decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section id="comparison" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Comparison</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Spreadsheets vs. Generic Tools vs. Kindora</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Three approaches to foundation management — and why purpose-built software outperforms the alternatives.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Must-have features for foundation management software</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These nine capabilities are the baseline for any modern foundation management platform. Anything missing is a red flag for compliance, accountability, or operational efficiency.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Foundation management by foundation type</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every foundation type has unique management needs. Here are the highest-impact use cases across philanthropic organizations.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8 best practices for foundation management</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The platform is only part of the equation. These best practices help you get the most out of any foundation management system.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to choose foundation management software</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Use these eight criteria to evaluate any foundation management solution. Prioritize based on your foundation size, grant volume, and compliance requirements.
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
              Frequently asked questions about foundation management software
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
              <Link href="/kindora/grant-management-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Grant Management Software →
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/kindora/grant-lifecycle-management" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Grant Lifecycle Management →
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/kindora/nonprofit-reporting-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Nonprofit Reporting Software →
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/kindora/budget-management-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Budget Management Software →
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See the foundation management platform built for philanthropy
            </h2>
            <p className="text-gray-600 mb-8">
              Get a purpose-built foundation management platform — with grant lifecycle tracking, fund accounting, impact measurement, and compliance that satisfies funders and boards.
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
            <p className="text-sm text-gray-500 mt-6">SOC 2 Type II · AES-256 encryption · Fund accounting · No credit card required</p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related Resources</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/kindora/grant-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Manage grant budgets, expenses, and compliance.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Grant Management Software →</h3>
              </Link>
              <Link href="/kindora/grant-lifecycle-management" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Track grants from application to closeout.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Grant Lifecycle Management →</h3>
              </Link>
              <Link href="/kindora/nonprofit-reporting-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Financial statements and compliance reports.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Nonprofit Reporting Software →</h3>
              </Link>
              <Link href="/kindora/budget-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Plan, track, and control nonprofit budgets.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Budget Management Software →</h3>
              </Link>
              <Link href="/kindora/grant-compliance-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Automated compliance tracking for grants.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Grant Compliance Software →</h3>
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
