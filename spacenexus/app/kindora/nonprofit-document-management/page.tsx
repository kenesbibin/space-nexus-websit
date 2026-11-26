import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Nonprofit Document Management 2026 | Secure Storage & Compliance",
  description:
    "Organize, store, and share nonprofit documents with version control and compliance. Kindora document management for grants, board materials, and operational records.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/nonprofit-document-management",
  },
  openGraph: {
    title: "Nonprofit Document Management 2026",
    description:
      "Organize, store, and share nonprofit documents with version control and compliance. The complete guide for nonprofit operations leaders.",
    url: "https://spacenexus.net/kindora/nonprofit-document-management",
    siteName: "Kindora by Space Nexus",
    type: "article",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Nonprofit Document Management" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Document Management 2026 — Complete Guide",
    description:
      "The complete guide to nonprofit document management. Secure storage, version control, compliance tracking, and best practices for operations teams.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "nonprofit document management",
    "nonprofit document storage",
    "grant document management",
    "nonprofit file management",
    "secure document sharing nonprofit",
    "nonprofit compliance documents",
    "board document management",
    "nonprofit document software",
    "NGO document management",
    "nonprofit document library",
    "nonprofit document control",
    "nonprofit document organization",
  ],
};

const mustHaveFeatures = [
  {
    icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
    title: "Hierarchical folder structure",
    description:
      "Organize documents by grant, program, department, and document type with deep hierarchical structure. Smart folders adapt to your nonprofit's organizational model — grants, programs, departments, and board committees.",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "SOC 2 Type II & ISO 27001 compliance",
    description:
      "Enterprise-grade security certifications combined with nonprofit-specific access controls. Board members, staff, volunteers, and auditors each get precisely the document access their role requires.",
  },
  {
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    title: "Full-text search across all documents",
    description:
      "Search inside documents, not just filenames. OCR processes scanned PDFs, Word documents, and images. Natural-language queries find any clause, term, or reference across your entire document library.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    title: "Version control and document history",
    description:
      "Every version of every document is preserved. View any prior version, compare versions, and roll back when needed. The complete edit history is logged with timestamp and user identity — essential for audits and board oversight.",
  },
  {
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
    title: "Document review and approval workflows",
    description:
      "Route documents through structured review and approval workflows. Board resolutions, policy updates, and grant applications move through defined stages with commenting, versioning, and sign-off tracking.",
  },
  {
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    title: "Granular access controls",
    description:
      "Set access at the folder, document, and page level. Board members see board materials, finance staff see financial records, and external auditors get read-only access to only the documents they need to review.",
  },
  {
    icon: "M9 75l-7 7 7 7m0 0l7-7M9 9v6m0 0l-3-3m3 3l3-3",
    title: "Automated retention and archival",
    description:
      "Automated retention and disposition policies ensure documents are kept for the required period and securely archived when the retention period expires. Compliance with funder requirements, board mandates, and regulatory obligations is built in.",
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Audit trail and compliance reporting",
    description:
      "Immutable, exportable audit trails satisfy funder requirements and board inquiries. Document-level audit logs track every view, edit, share, and download — with timestamp, IP, and user identity.",
  },
  {
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    title: "E-signature integration",
    description:
      "Collect legally binding signatures directly within the platform. Track signature status, send reminders, and store signed documents alongside related materials — no third-party tools needed.",
  },
];

const comparisonData = {
  sharedDrives: {
    title: "Shared Drives & File Shares",
    subtitle: "Google Drive, Dropbox, OneDrive, network drives",
    items: [
      { text: "Basic folder organization", good: true },
      { text: "Limited access controls", good: false },
      { text: "No audit trail for document access", good: false },
      { text: "No retention policy management", good: false },
      { text: "No version comparison or rollback", good: false },
      { text: "Not designed for compliance", good: false },
    ],
  },
  genericDMS: {
    title: "Generic Document Management",
    subtitle: "SharePoint, Box, Dropbox Business",
    items: [
      { text: "Advanced folder structure", good: true },
      { text: "Basic access controls", good: true },
      { text: "Standard audit logging", good: true },
      { text: "Not built for nonprofit workflows", good: false },
      { text: "No grant-specific organization", good: false },
      { text: "Complex setup and training", good: false },
    ],
  },
  kindora: {
    title: "Kindora Document Management",
    subtitle: "Purpose-built for nonprofits",
    items: [
      { text: "Grant and program-centric organization", good: true },
      { text: "Role-based access by grant, department, role", good: true },
      { text: "Tamper-evident audit trails", good: true },
      { text: "Automated retention and archival", good: true },
      { text: "Built-in review and approval workflows", good: true },
      { text: "Nonprofit-specific templates and taxonomies", good: true },
    ],
  },
};

const useCases = [
  {
    title: "Grant Document Management",
    description:
      "Organize all grant-related documents — applications, budgets, reports, correspondence, and compliance records — in a centralized, searchable library. Track deadlines, submission status, and funder requirements.",
  },
  {
    title: "Board Materials & Governance",
    description:
      "Manage board packets, meeting minutes, resolutions, policies, and committee reports. Secure access for board members with version control and approval workflows for governance documents.",
  },
  {
    title: "Financial Records & Compliance",
    description:
      "Store audited financials, 990 filings, bank statements, and financial policies with automated retention. Tamper-evident audit trails satisfy IRS, funder, and state regulatory requirements.",
  },
  {
    title: "Program Documentation",
    description:
      "Organize program plans, participant records, outcome data, and reporting templates. Role-based access ensures program staff see their documents while maintaining confidentiality across programs.",
  },
  {
    title: "HR & Personnel Records",
    description:
      "Manage employee contracts, benefits documentation, performance reviews, and training records. Strict access controls ensure only HR and authorized personnel can view personnel files.",
  },
  {
    title: "Donor & Fundraising Records",
    description:
      "Store donor agreements, gift documentation, campaign materials, and fundraising correspondence. Secure sharing with major donors and fundraising consultants through time-limited access links.",
  },
  {
    title: "Policy & Procedure Library",
    description:
      "Maintain a living library of organizational policies, procedures, and guidelines. Version control and approval workflows ensure policies are current, approved, and accessible to staff who need them.",
  },
  {
    title: "Compliance & Audit Documentation",
    description:
      "Compile and maintain audit-ready documentation packages. One-click report generation compiles all relevant documents, audit trails, and compliance records for funder audits and regulatory reviews.",
  },
];

const bestPractices = [
  {
    title: "Establish a consistent folder taxonomy",
    description:
      "Design a hierarchical folder structure that mirrors your organizational model — by grant, program, department, and document type. Train all staff on the taxonomy and enforce it consistently.",
  },
  {
    title: "Use metadata, not just folder names",
    description:
      "Tag documents with metadata — grant number, program, document type, date, status, and author. Metadata enables powerful search and filtering that folder structures alone cannot provide.",
  },
  {
    title: "Implement role-based access from day one",
    description:
      "Don't wait for a security incident to restrict access. Set up role-based permissions during onboarding — board members see board materials, finance sees financials, auditors get read-only access.",
  },
  {
    title: "Enforce version control for all documents",
    description:
      "Never allow staff to overwrite documents without version tracking. Every edit should create a new version with full history. This prevents accidental overwrites and provides complete audit trails.",
  },
  {
    title: "Set up automated retention policies",
    description:
      "Configure retention rules based on document type, grant requirements, and regulatory obligations. Grant documents are retained per funder requirements, HR records per labor law, and financial records per IRS rules.",
  },
  {
    title: "Use review workflows for governance documents",
    description:
      "Board resolutions, policy updates, and strategic documents should follow structured review and approval workflows — not email chains. Workflows ensure proper review, sign-off, and version tracking.",
  },
  {
    title: "Digitize paper documents with OCR",
    description:
      "Scan and OCR all paper documents at intake. Full-text search across scanned PDFs, Word documents, and images ensures nothing is lost in filing cabinets. Train staff on the scanning workflow.",
  },
  {
    title: "Conduct quarterly access reviews",
    description:
      "Review document access permissions quarterly. Remove access for departed staff, update permissions for role changes, and ensure audit trails are complete. Quarterly reviews prevent access creep.",
  },
  {
    title: "Maintain audit-ready documentation",
    description:
      "Design document management with audits in mind. Tamper-evident audit trails, complete version history, and one-click report generation make grant audits and regulatory reviews straightforward.",
  },
  {
    title: "Train staff on document management best practices",
    description:
      "Even the best document management system fails without user adoption. Train all staff on naming conventions, folder structure, access policies, and version control. Regular refresher training is essential.",
  },
];

const selectionCriteria = [
  {
    title: "Nonprofit-specific organization",
    description:
      "The platform should support grant-centric, program-centric, and department-centric document organization — not just generic folder structures. Pre-built taxonomies for nonprofit document types accelerate setup.",
  },
  {
    title: "Granular access controls",
    description:
      "Role-based access at the folder, document, and page level. Board members, staff, volunteers, and auditors each get precisely the access their role requires. Support for confidential document restrictions.",
  },
  {
    title: "Version control and audit trails",
    description:
      "Full version history with rollback capability. Tamper-evident audit logs for every access, edit, share, and download. Immutable records satisfy funder requirements, board oversight, and regulatory compliance.",
  },
  {
    title: "Search and discovery capabilities",
    description:
      "Full-text search across all documents, including OCR for scanned files. Filter by metadata, date, author, grant, program, and document type. Find any document in seconds, not hours.",
  },
  {
    title: "Security and compliance certifications",
    description:
      "SOC 2 Type II, ISO 27001, and AES-256 encryption. Compliance with GDPR, CCPA, and funder-specific security requirements. The platform should produce audit reports on request.",
  },
  {
    title: "Review and approval workflows",
    description:
      "Built-in workflows for document review, approval, and sign-off. Essential for board resolutions, policy updates, and grant applications that require structured review processes.",
  },
  {
    title: "E-signature integration",
    description:
      "Built-in or integrated e-signature for document execution. Track signature status, send reminders, and store signed documents alongside related materials.",
  },
  {
    title: "Mobile access and offline capabilities",
    description:
      "Staff should be able to access documents from the field, board meetings, and remote locations. Mobile access with offline reading ensures documents are available wherever your team works.",
  },
];

const faqItems = [
  {
    question: "What is nonprofit document management software?",
    answer:
      "Nonprofit document management software is a platform that organizes, stores, and secures all nonprofit documents — from grant files and board minutes to policies and compliance records. It replaces scattered email attachments, shared drives, and filing cabinets with a centralized, searchable, and audit-ready document library purpose-built for nonprofit operations.",
  },
  {
    question: "How does document version control work in Kindora?",
    answer:
      "Every time a document is edited, Kindora creates a new version while preserving the full history. You can view who changed what, when, and why. If a mistake is made, restoring any previous version takes a single click — ensuring no critical nonprofit document is ever lost or overwritten.",
  },
  {
    question: "Can we control who sees specific documents?",
    answer:
      "Yes. Kindora provides granular role-based access controls. You can restrict document access by role, department, grant, or individual user. Board members see board materials, finance staff see financial records, and external auditors get read-only access to only the documents they need to review.",
  },
  {
    question: "How does document management help with grant compliance?",
    answer:
      "Kindora maintains tamper-evident audit trails for every document access, edit, and share. Automated retention policies ensure grant documents are archived according to funder requirements. One-click audit reports compile all relevant documentation — making grant audits straightforward and stress-free.",
  },
  {
    question: "How long does it take to set up document management?",
    answer:
      "Most nonprofits are running their document management system within 24 hours. Pre-built folder templates for grants, board materials, and financial records accelerate setup. Bulk document import with AI auto-categorization handles legacy files. More complex implementations with custom taxonomies and integrations typically take 1–2 weeks.",
  },
  {
    question: "Can we migrate from Google Drive or Dropbox?",
    answer:
      "Yes. Kindora provides guided migration tools that preserve folder structures, metadata, and version history when moving from Google Drive, Dropbox, OneDrive, or network file shares. Bulk import with AI auto-categorization handles thousands of documents efficiently.",
  },
  {
    question: "How does document management integrate with other Kindora features?",
    answer:
      "Document management is fully integrated with Kindora's workflow automation, grant management, and reporting features. Grant applications automatically organize related documents. Workflow approvals link to the relevant documents. Reporting pulls data from document metadata for compliance reports.",
  },
  {
    question: "What security certifications does Kindora have?",
    answer:
      "Kindora is SOC 2 Type II certified with AES-256 encryption at rest and in transit. The platform undergoes annual third-party security audits and maintains compliance with GDPR, CCPA, and major funder security requirements. Tamper-evident audit logs provide complete document access history.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nonprofit Document Management 2026 — Complete Guide for Operations Teams",
  description:
    "The complete 2026 guide to nonprofit document management. Secure storage, version control, compliance tracking, and best practices for operations leaders.",
  author: { "@id": "https://spacenexus.net/kindora/#organization" },
  publisher: { "@id": "https://spacenexus.net/kindora/#organization" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  mainEntityOfPage: "https://spacenexus.net/kindora/nonprofit-document-management",
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
  name: "Kindora Nonprofit Document Management",
  description: "Nonprofit document management for organizing, storing, and sharing documents with version control and compliance.",
  url: "https://spacenexus.net/kindora/nonprofit-document-management",
  serviceType: "Nonprofit Document Management",
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

export default function KindoraNonprofitDocumentManagementPage() {
  return (
    <>
      <Script id="kindora-doc-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="kindora-doc-article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="kindora-doc-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
                <span className="text-gray-600">Nonprofit Document Management</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                2026 Complete Guide
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Nonprofit Document Management{" "}
                <span className="text-[#2563eb]">— The 2026 Guide</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Organize, store, and share nonprofit documents with version control, secure access, and compliance tracking. This guide covers the differences between shared drives, generic DMS, and purpose-built nonprofit document management — plus the features, best practices, and selection framework operations teams need in 2026.
              </p>
              <p className="text-sm text-gray-400 mb-10">
                18-minute read &nbsp;·&nbsp; Last updated: July 1, 2026 &nbsp;·&nbsp; Covers: comparison, features, best practices, FAQ
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#comparison" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                  Shared Drives vs. Kindora
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
                { metric: "60%", label: "faster document retrieval" },
                { metric: "100%", label: "version control" },
                { metric: "90%", label: "reduction in lost documents" },
                { metric: "100%", label: "compliance audit readiness" },
              ].map((b) => (
                <div key={b.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-[#2563eb] mb-1">{b.metric}</p>
                  <p className="text-sm text-gray-600">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is nonprofit document management */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What is nonprofit document management?</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Nonprofit document management is the practice of storing, organizing, securing, and retrieving nonprofit documents across grants, programs, departments, and time. It combines centralized document storage with version control, access management, compliance tracking, and search capabilities — all purpose-built for the unique needs of nonprofit organizations.
              </p>
              <p>
                The category emerged from the limitations of shared drives, email attachments, and filing cabinets for nonprofit operations. Traditional approaches scattered documents across inboxes, personal drives, and physical filing systems — making retrieval slow, version control impossible, and compliance audits painful. Modern nonprofit document management is strategic — it spans the full document lifecycle from capture through collaboration, storage, retrieval, sharing, and retention.
              </p>
              <p>
                Today, document management is a core capability for nonprofits that need to scale operations while maintaining compliance. Effective implementations reduce document retrieval time, prevent version conflicts, enhance team collaboration, and ensure audit readiness for funders, boards, and regulators.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison: Shared Drives vs Generic DMS vs Kindora */}
        <section id="comparison" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Comparison</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Shared Drives vs. Generic DMS vs. Kindora</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Three approaches to nonprofit document management — and why purpose-built software outperforms the alternatives.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Must-have features for nonprofit document management</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These nine capabilities are the baseline for any modern nonprofit document management platform. Anything missing is a red flag for security, compliance, or operational efficiency.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Document management by nonprofit function</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every department generates critical documents. Here are the highest-impact use cases across nonprofit operations.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">10 best practices for nonprofit document management</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The platform is only part of the equation. These best practices help you get the most out of any document management system.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to choose a nonprofit document management platform</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Use these eight criteria to evaluate any document management solution. Prioritize based on your organization size, document volume, and compliance requirements.
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
              Frequently asked questions about nonprofit document management
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
              <Link href="/kindora/nonprofit-workflow-automation" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Nonprofit Workflow Automation →
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/kindora/grant-management-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Grant Management Software →
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/kindora/board-reporting-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Board Reporting Software →
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
              See the document management platform built for nonprofits
            </h2>
            <p className="text-gray-600 mb-8">
              Get a purpose-built document management platform — with grant-centric organization, version control, audit trails, and compliance tracking that satisfies funders and boards.
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
            <p className="text-sm text-gray-500 mt-6">SOC 2 Type II · AES-256 encryption · Tamper-evident audit logs · No credit card required</p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related Resources</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/kindora/nonprofit-workflow-automation" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Automate repetitive nonprofit workflows.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Nonprofit Workflow Automation →</h3>
              </Link>
              <Link href="/kindora/grant-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Manage grant budgets, expenses, and compliance.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Grant Management Software →</h3>
              </Link>
              <Link href="/kindora/board-reporting-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Generate board-ready reports in minutes.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Board Reporting Software →</h3>
              </Link>
              <Link href="/kindora/expense-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Track and reconcile expenses across programs.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Expense Management Software →</h3>
              </Link>
              <Link href="/kindora/nonprofit-reporting-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Financial statements and compliance reports.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Nonprofit Reporting Software →</h3>
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
