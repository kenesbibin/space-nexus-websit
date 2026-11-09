import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";
import AnswerBlock from "../components/AnswerBlock";

export const metadata: Metadata = {
    title: "Data Room for Due Diligence | SpaceNexus",
    description: "Virtual data room for due diligence. AI redaction, structured Q&A, real-time engagement analytics, audit logs.",
    alternates: {
        canonical: "https://spacenexus.net/data-room-due-diligence",
    },
    openGraph: {
        title: "Data Room for Due Diligence | SpaceNexus",
        description:
            "Virtual data room for due diligence. AI redaction, structured Q&A, real-time engagement...",
        url: "https://spacenexus.net/data-room-due-diligence",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Room Due Diligence — Complete Setup & Best Practices Guide 2026 | SpaceNexus",
        description:
            "How to set up and run data room due diligence. Folder structure, access permissions, Q&A workflow, buyer analytics, and best practices for M&A and fundraising.",
    },
    keywords: [
        "data room due diligence",
        "due diligence data room",
        "how to set up a data room for due diligence",
        "data room due diligence best practices",
        "due diligence data room checklist",
        "data room due diligence process",
        "virtual data room due diligence",
        "M&A data room due diligence",
        "data room setup due diligence",
        "due diligence data room structure",
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Data Room Due Diligence — Complete Setup & Best Practices Guide 2026",
    description:
        "How to set up and run data room due diligence. Covers folder structure, access permissions, Q&A workflow, buyer analytics, security, and best practices.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: {
        "@type": "Organization",
        "@id": "https://spacenexus.net/#organization",
        name: "SpaceNexus",
        logo: { "@type": "ImageObject", url: "https://spacenexus.net/logo.png" },
    },
    datePublished: "2026-01-01",
    dateModified: "2026-06-01",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://spacenexus.net/data-room-due-diligence" },
};

const faqItems = [
    {
        question: "What is a due diligence data room?",
        answer: "A due diligence data room (also called a virtual data room or VDR) is a secure, cloud-based repository used to store, organize, and share confidential business documents during a transaction — such as an M&A deal, fundraising round, IPO, or legal proceeding. Unlike general file-sharing tools, a due diligence data room provides mandatory NDA enforcement at room entry, document-level access permissions, a tamper-evident audit trail, structured Q&A for due diligence requests, dynamic watermarking, and compliance certifications (SOC 2 Type II, ISO 27001) that the transaction process requires.",
    },
    {
        question: "How do you set up a data room for due diligence?",
        answer: "Setting up a data room for due diligence involves six steps: (1) Choose a purpose-built VDR provider — not Dropbox or SharePoint. (2) Build your folder structure by workstream (Legal, Financial, Commercial, HR, Technology, Operations). (3) Upload and organize documents — AI auto-categorization dramatically speeds this step. (4) Apply NDA and access permissions — configure which buyer groups can access which folders before inviting anyone. (5) Configure Q&A workflow — set up categories, assign owners, and establish response SLAs. (6) Invite buyer parties and monitor engagement analytics in real time.",
    },
    {
        question: "What documents go in a due diligence data room?",
        answer: "A due diligence data room should contain documents across six workstreams: Legal (incorporation documents, material contracts, litigation register, IP assignments), Financial (audited financials, management accounts, working capital analysis, tax returns), Commercial (customer list and contracts, pipeline data, competitive analysis), HR (org chart, executive employment agreements, equity plan, cap table), Technology (architecture overview, IP ownership documentation, SOC 2 certification, penetration test results), and Operations (facility leases, insurance policies, supplier contracts, environmental permits).",
    },
    {
        question: "What's the difference between a data room and a virtual data room?",
        answer: "The terms 'data room' and 'virtual data room' (VDR) are used interchangeably in modern practice. Historically, a data room referred to a physical room where confidential documents were reviewed in-person under supervision. Virtual data rooms replaced physical rooms in the early 2000s by delivering the same secure, controlled document access over the internet. Today, 'data room due diligence' always means a cloud-based virtual data room — physical data rooms are no longer used in practice.",
    },
    {
        question: "How long should a due diligence data room stay open?",
        answer: "A due diligence data room should stay open from the time it is launched (typically after signing an NDA or LOI) until closing — typically 4–8 weeks for mid-market M&A. After closing, access should be withdrawn from buyer parties and the room archived with a complete audit trail for the seller's records. Most VDR providers offer post-close archiving as part of the subscription.",
    },
    {
        question: "Can buyers download documents from a due diligence data room?",
        answer: "Download permissions in a due diligence data room are controlled by the seller. Most VDR platforms allow the sell-side administrator to enable or disable downloads at the folder, document, or user-group level. For sensitive documents (personal data, key customer contracts), download can be disabled while still allowing online viewing. For documents requiring offline review by advisors (audited financials, legal agreements), selective download can be granted. All access — including downloads — is logged in the tamper-evident audit trail.",
    },
    {
        question: "What security standards should a due diligence data room have?",
        answer: "A due diligence data room should meet the following minimum security standards: SOC 2 Type II certification (audited annually), AES-256 encryption at rest, TLS 1.3 encryption in transit, multi-factor authentication (MFA) for all users, role-based access control (RBAC) at the document level, dynamic watermarking on viewed documents, IP restriction by geography or address, a complete immutable audit trail, and — for deals with international parties — ISO 27001 certification. For transactions with US regulatory involvement, SEC/FINRA-ready compliance logging is also required.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Data Room Due Diligence", item: "https://spacenexus.net/data-room-due-diligence" },
    ],
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://spacenexus.net/#organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
};

const setupSteps = [
    {
        step: "01",
        title: "Choose the right data room platform",
        time: "Day 1",
        description: "Select a purpose-built virtual data room — not a general file-sharing tool. Your data room needs mandatory NDA enforcement, document-level permissions, an audit trail, structured Q&A, and SOC 2 Type II certification. A general tool like SharePoint or Dropbox provides none of these.",
        actions: [
            "Confirm SOC 2 Type II + ISO 27001 certification",
            "Verify transparent pricing (no per-page fees)",
            "Check Q&A workflow and buyer analytics are included",
            "Confirm setup can be completed in under 24 hours",
        ],
        color: "blue",
        link: "/virtual-data-room-providers",
        linkText: "Compare data room providers →",
    },
    {
        step: "02",
        title: "Build your folder structure before uploading",
        time: "Day 1–2",
        description: "Create the folder index before uploading a single document. A well-structured data room signals management quality, reduces Q&A volume, and accelerates buyer review. Use the industry-standard workstream structure: Legal, Financial, Commercial, HR, Technology, Operations.",
        actions: [
            "Create top-level folders by workstream",
            "Add sub-folders matching your due diligence checklist",
            "Number folders to control display order (01. Legal, 02. Financial...)",
            "Create a 'Management Presentations' folder at the top level",
        ],
        color: "green",
        link: "/checklists/due-diligence-checklist",
        linkText: "Use our due diligence checklist as your folder index →",
    },
    {
        step: "03",
        title: "Upload and organize documents",
        time: "Day 2–4",
        description: "Upload documents in bulk and use AI auto-categorization to route them to the correct folders instantly. Before uploading, run AI redaction on documents containing PII, competitor names, or commercially sensitive information that shouldn't be visible to early-stage bidders.",
        actions: [
            "Bulk upload all documents via drag-and-drop",
            "Run AI Auto-Categorization to sort into correct folders",
            "Run AI Redaction on PII-sensitive documents",
            "Standardize file naming (avoid 'Final_v3_REVISED')",
            "Version-control documents with clear date stamps",
        ],
        color: "purple",
        link: null,
        linkText: null,
    },
    {
        step: "04",
        title: "Configure access permissions per buyer group",
        time: "Day 3–4",
        description: "This is the most critical configuration step. Create separate buyer groups (e.g., 'Bidder A — Management', 'Bidder A — Advisors', 'Bidder B — Advisors') and assign folder-level and document-level permissions before inviting anyone. A misrouted permission is a data breach.",
        actions: [
            "Create named groups for each buyer party and their advisors",
            "Restrict sensitive folders (HR compensation, IT source code) to advanced stages only",
            "Disable downloads on personal data and key customer contracts",
            "Set NDA click-through as mandatory before any access",
            "Enable IP restriction for jurisdiction-sensitive deals",
        ],
        color: "indigo",
        link: null,
        linkText: null,
    },
    {
        step: "05",
        title: "Set up the Q&A workflow",
        time: "Day 4",
        description: "Structured Q&A is the most underutilized feature in data room due diligence. Without it, buyer questions arrive by email, get lost, receive inconsistent answers, and create an undocumented record — a legal and process risk. Configure Q&A categories, assign sell-side owners, and set response SLAs before opening access.",
        actions: [
            "Create Q&A categories matching workstreams (Legal, Financial, Commercial, HR, Tech, Ops)",
            "Assign a sell-side owner to each category",
            "Set SLA targets (e.g., 48 hours for standard, 24 hours for urgent)",
            "Configure which buyer groups can see each other's questions (or not)",
            "Enable Q&A export for the definitive agreement schedule",
        ],
        color: "orange",
        link: null,
        linkText: null,
    },
    {
        step: "06",
        title: "Invite buyer parties and monitor engagement",
        time: "Day 5+",
        description: "Invite buyers via secure email with their NDA click-through. From the moment they access the room, monitor their engagement in real time — which documents they're reading, for how long, and which topics are generating the most Q&A. This intelligence drives your negotiation strategy.",
        actions: [
            "Send invitation emails with access instructions",
            "Confirm NDA acceptance before any document access",
            "Monitor daily buyer engagement reports",
            "Identify most-read documents to gauge buyer interest",
            "Track unanswered Q&A to prioritize sell-side response",
        ],
        color: "rose",
        link: null,
        linkText: null,
    },
];

const colorMap: Record<string, { dot: string; border: string; badge: string; stepBg: string; actionDot: string }> = {
    blue: { dot: "bg-[#2563eb]", border: "border-blue-200", badge: "bg-blue-100 text-blue-700", stepBg: "bg-blue-600", actionDot: "text-blue-500" },
    green: { dot: "bg-green-600", border: "border-green-200", badge: "bg-green-100 text-green-700", stepBg: "bg-green-600", actionDot: "text-green-500" },
    purple: { dot: "bg-purple-600", border: "border-purple-200", badge: "bg-purple-100 text-purple-700", stepBg: "bg-purple-600", actionDot: "text-purple-500" },
    indigo: { dot: "bg-indigo-600", border: "border-indigo-200", badge: "bg-indigo-100 text-indigo-700", stepBg: "bg-indigo-600", actionDot: "text-indigo-500" },
    orange: { dot: "bg-orange-500", border: "border-orange-200", badge: "bg-orange-100 text-orange-700", stepBg: "bg-orange-500", actionDot: "text-orange-500" },
    rose: { dot: "bg-rose-500", border: "border-rose-200", badge: "bg-rose-100 text-rose-700", stepBg: "bg-rose-500", actionDot: "text-rose-500" },
};

const folderStructure = [
    {
        folder: "01. Management Presentations",
        icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
        color: "text-[#2563eb]",
        bg: "bg-blue-50",
        border: "border-blue-200",
        subfolders: ["Executive Summary", "Investor Presentation / CIM", "Management Team Bios", "Company Overview"],
        note: "Open this folder first. Give all parties access.",
    },
    {
        folder: "02. Legal",
        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        subfolders: ["Corporate Documents", "Material Contracts", "IP & Technology", "Litigation & Regulatory", "Employment Agreements"],
        note: "Restrict sensitive employment contracts to later-stage bidders.",
    },
    {
        folder: "03. Financial",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        color: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-200",
        subfolders: ["Audited Financials", "Management Accounts", "Working Capital Analysis", "Revenue & Customer Analysis", "Tax Returns", "Debt & Credit Facilities"],
        note: "Most-accessed folder in any due diligence process.",
    },
    {
        folder: "04. Commercial",
        icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200",
        subfolders: ["Customer Contracts", "Pipeline & Backlog", "Market Analysis", "Competitive Intelligence", "Sales & Marketing Materials"],
        note: "Consider redacting competitor-sensitive pricing before upload.",
    },
    {
        folder: "05. Technology",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        border: "border-cyan-200",
        subfolders: ["Architecture Diagrams", "IP Ownership Documentation", "Security Certifications", "Penetration Test Reports", "Open Source Audit"],
        note: "Source code access should be provided via escrow, not direct upload.",
    },
    {
        folder: "06. Human Resources",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200",
        subfolders: ["Org Chart & Headcount", "Key Executive Agreements", "Equity Plan & Cap Table", "Compensation Summary", "Benefits & Compliance"],
        note: "Most sensitive folder. Grant access only to buyer's legal counsel.",
    },
    {
        folder: "07. Operations",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-4 4h10a2 2 0 002-2v-3a2 2 0 00-2-2H9a2 2 0 00-2 2v3a2 2 0 002 2z",
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-200",
        subfolders: ["Facility Leases", "Insurance Policies", "Supplier Contracts", "Environmental Compliance", "Permits & Licenses"],
        note: "Buyers often review this folder late — keep it current.",
    },
];

const bestPractices = [
    {
        title: "Open your data room before first investor contact",
        detail: "Sophisticated buyers form their first impression within the first 30 minutes in your data room. Launching with an incomplete or disorganized room signals weak management and hands buyers their first negotiating point. Populate at least 80% of your data room before inviting anyone.",
        badge: "Preparation",
        badgeColor: "bg-blue-100 text-blue-700",
    },
    {
        title: "Use numbered folders to control display order",
        detail: "Folder naming matters. Number your folders (01. Legal, 02. Financial...) so they display in logical order across all devices and operating systems. Buyers reviewing in alphabetical order will jump to 'Financial' immediately — make sure that folder is complete when you open access.",
        badge: "Organization",
        badgeColor: "bg-purple-100 text-purple-700",
    },
    {
        title: "Run AI redaction before any buyer sees a document",
        detail: "Inadvertently sharing PII (employee SSNs, personal addresses), competitor pricing data, or unredacted financial projections before the NDA process is complete creates legal exposure. Run AI redaction at upload — not as a cleanup step after the fact.",
        badge: "Security",
        badgeColor: "bg-red-100 text-red-700",
    },
    {
        title: "Never grant the same access to all buyer groups",
        detail: "In a competitive process, bidder groups should never be able to see each other's Q&A activity, documents, or data room presence. Configure separate groups with separate permissions before inviting anyone. This is both a competitive and a legal requirement in most jurisdictions.",
        badge: "Access Control",
        badgeColor: "bg-indigo-100 text-indigo-700",
    },
    {
        title: "Keep an answered Q&A log for the definitive agreement",
        detail: "Every question answered in your data room Q&A is a representation about the business. Exportthe Q&A log at closing — it forms part of the disclosure schedule under the SPA and is your primary defense against warranty claims.",
        badge: "Legal",
        badgeColor: "bg-green-100 text-green-700",
    },
    {
        title: "Monitor buyer engagement daily",
        detail: "Your data room analytics tell you which buyers are serious before they tell you. A buyer group that opens 200 documents and submits 30 Q&As in week one is likely to submit a bid. A buyer who hasn't opened the data room after 72 hours probably won't. Use this intelligence to prioritize follow-up and shape your process timeline.",
        badge: "Analytics",
        badgeColor: "bg-orange-100 text-orange-700",
    },
    {
        title: "Stage sensitive documents in waves",
        detail: "Not everything should be in the data room on day one. Organize document release in waves: Phase 1 (all bidders) → general business overview; Phase 2 (shortlisted bidders) → detailed financial and legal; Phase 3 (exclusivity) → HR, key customer names, source code escrow. This protects seller leverage and limits exposure if a buyer withdraws.",
        badge: "Process",
        badgeColor: "bg-cyan-100 text-cyan-700",
    },
    {
        title: "Archive the data room with a full audit trail at close",
        detail: "At transaction close, immediately withdraw buyer access and archive the room with a complete audit trail export. This archive is your legal record of who saw what and when — critical for post-close warranty claims, regulatory inquiries, or disputes about pre-close representations.",
        badge: "Post-Close",
        badgeColor: "bg-gray-100 text-gray-700",
    },
];

const securityRequirements = [
    { requirement: "SOC 2 Type II Certification", why: "Required by institutional buyers, PE firms, and regulated industries. Proves security controls have been independently audited — not just self-attested.", mustHave: true },
    { requirement: "ISO 27001 Certification", why: "Required for cross-border transactions involving European parties (GDPR-regulated data).", mustHave: false },
    { requirement: "AES-256 Encryption (at rest)", why: "Industry standard for document encryption at rest. Any data room not using AES-256 should be disqualified.", mustHave: true },
    { requirement: "TLS 1.3 (in transit)", why: "Ensures documents cannot be intercepted in transit. TLS 1.2 is outdated — require 1.3.", mustHave: true },
    { requirement: "Multi-Factor Authentication (MFA)", why: "Mandatory for all user accounts. Prevents unauthorized access via credential theft.", mustHave: true },
    { requirement: "Dynamic Watermarking", why: "Embeds viewer identity, IP address, and timestamp into viewed documents — deters unauthorized distribution and enables forensic tracing.", mustHave: true },
    { requirement: "Immutable Audit Trail", why: "Every access, download, and Q&A must be logged with a tamper-evident timestamp. Required for legal defensibility post-close.", mustHave: true },
    { requirement: "IP Restriction", why: "Restrict access by geography or specific IP ranges for jurisdiction-sensitive transactions.", mustHave: false },
    { requirement: "SEC/FINRA Compliance Logging", why: "Required for transactions involving US registered broker-dealers or investment advisers.", mustHave: false },
    { requirement: "Document-Level Permissions (RBAC)", why: "Role-based access at the folder and document level is what separates a VDR from a file-sharing tool. Non-negotiable.", mustHave: true },
];

const commonErrors = [
    {
        error: "Opening access before configuring permissions",
        consequence: "Buyer sees a competitor's name in the Q&A thread, or accesses HR compensation before exclusivity. Either triggers a legal claim or kills the deal.",
        prevention: "Always configure all buyer groups and permissions before sending the first invitation.",
    },
    {
        error: "Uploading documents with 'Final v3 REVISED' naming",
        consequence: "Signals document management chaos. Buyers assume the operational standards apply to the rest of the business.",
        prevention: "Standardize file naming before upload: YYYY-MM-DD_Document-Name_Version.pdf",
    },
    {
        error: "Managing Q&A over email instead of the data room",
        consequence: "Inconsistent answers to the same question, no audit trail, and no centralized record for the disclosure schedule.",
        prevention: "Route all due diligence Q&A through the data room Q&A module. Reject email questions politely and direct to the room.",
    },
    {
        error: "Granting identical access to all buyer groups",
        consequence: "Buyers can see each other's Q&A questions — revealing competitive bidding strategies and potentially triggering antitrust issues.",
        prevention: "Create separate buyer groups with separate permissions and isolated Q&A threads.",
    },
    {
        error: "Uploading unredacted documents containing PII",
        consequence: "GDPR and CCPA violations. Selling a business does not waive data protection obligations for employee personal data.",
        prevention: "Run AI redaction on all documents before upload. Pay particular attention to HR, payroll, and customer personal data.",
    },
    {
        error: "Failing to version-control documents",
        consequence: "Buyers review an outdated financial statement. New version uploaded mid-process creates confusion and Q&A volume.",
        prevention: "Date-stamp all uploads. When replacing a document, move the old version to an 'Archived' subfolder and clearly mark the new version.",
    },
];

export default function DataRoomDueDiligencePage() {
    return (
        <>
            <Script id="drdd-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="drdd-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="drdd-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="drdd-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">

                {/* Hero */}
                <section className="py-14 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Data Room Due Diligence</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Complete Guide · Updated June 2026
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Data Room{" "}
                                <span className="text-[#2563eb]">Due Diligence</span>
                                <br />Setup & Best Practices
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                How to set up, organize, and run a due diligence data room that closes deals faster — not one that creates more work. Covers folder structure, access permissions, Q&A workflow, buyer analytics, and the 8 best practices every sell-side team should follow.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#setup" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    6-Step Setup Guide
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                </a>
                                <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    Open a Free Data Room
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <AnswerBlock text="SpaceNexus streamlines M&A due diligence with AI-powered document categorization, structured Q&A workflows with SLA tracking, real-time buyer engagement analytics, and tiered bidder access controls. Setup takes under 24 hours with pre-built folder templates for common deal types." />

                {/* What is a due diligence data room */}
                <section className="py-14 bg-white border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-5">What is data room due diligence?</h2>
                        <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                            <p>
                                <strong className="text-gray-900">Data room due diligence</strong> refers to the process of conducting business transaction due diligence through a virtual data room (VDR) — a secure, cloud-based platform that replaces the physical "data room" model of the pre-internet era, where buyers reviewed documents in a supervised physical space.
                            </p>
                            <p>
                                In modern M&A, fundraising, and legal transactions, a due diligence data room is the central hub where the seller (or company raising capital) uploads and organizes all confidential documents — financial statements, legal contracts, HR records, IP documentation — and grants buyers or investors controlled, monitored access under the terms of an NDA.
                            </p>
                            <p>
                                Done well, data room due diligence compresses timelines, reduces Q&A volume, and gives the sell-side team a negotiating advantage through real-time buyer engagement analytics. Done poorly — disorganized rooms, misrouted permissions, email-managed Q&A — it delays deals, inflates advisor costs, and signals risk to buyers.
                            </p>
                            <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-4 mt-6">
                                <p className="text-sm text-blue-800 font-medium">
                                    <strong>Key distinction:</strong> A due diligence data room is not a file-sharing tool. Dropbox, Google Drive, and SharePoint lack NDA enforcement, document-level permissions, tamper-evident audit trails, structured Q&A, and the compliance certifications that a transaction process requires. Using a general file-sharing tool for M&A due diligence creates legal, regulatory, and security exposure.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6-Step Setup */}
                <section id="setup" className="py-16 lg:py-24 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to set up a data room for due diligence — 6 steps</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">From selecting a platform to monitoring buyer engagement, this is the complete operational setup guide.</p>
                        </div>
                        <div className="space-y-8">
                            {setupSteps.map((step) => {
                                const c = colorMap[step.color];
                                return (
                                    <div key={step.step} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <div className="flex items-stretch">
                                            {/* Step number bar */}
                                            <div className={`w-16 shrink-0 ${c.stepBg} flex items-center justify-center`}>
                                                <span className="text-white font-bold text-lg">{step.step}</span>
                                            </div>
                                            {/* Content */}
                                            <div className="flex-1 p-6 lg:p-8">
                                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                                                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>{step.time}</span>
                                                </div>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-4">{step.description}</p>
                                                <div className="grid sm:grid-cols-2 gap-2 mb-4">
                                                    {step.actions.map((action) => (
                                                        <div key={action} className="flex items-start gap-2.5">
                                                            <svg className={`w-4 h-4 ${c.actionDot} shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <span className="text-sm text-gray-700">{action}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                {step.link && (
                                                    <Link href={step.link} className="text-sm font-semibold text-[#2563eb] hover:underline inline-flex items-center gap-1">
                                                        {step.linkText}
                                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Folder structure */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Due diligence data room folder structure</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                The industry-standard folder structure used by M&A advisors, investment banks, and PE firms. Copy this structure as your starting index.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            {folderStructure.map((folder) => (
                                <div key={folder.folder} className={`rounded-2xl border ${folder.border} bg-white overflow-hidden hover:shadow-md transition-shadow duration-300`}>
                                    <div className={`px-5 py-4 ${folder.bg} border-b ${folder.border} flex items-center gap-3`}>
                                        <div className={`w-8 h-8 rounded-lg bg-white border ${folder.border} flex items-center justify-center shrink-0`}>
                                            <svg className={`w-4 h-4 ${folder.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={folder.icon} />
                                            </svg>
                                        </div>
                                        <h3 className="text-sm font-bold text-gray-900">{folder.folder}</h3>
                                    </div>
                                    <div className="px-5 py-4">
                                        <div className="space-y-1.5 mb-3">
                                            {folder.subfolders.map((sub) => (
                                                <div key={sub} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <svg className="w-3 h-3 text-gray-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l10 10M7 17L17 7" style={{ display: "none" }} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                                                    <span className="text-xs">{sub}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className={`text-xs font-medium ${folder.color} bg-opacity-10 mt-2`}>
                                            <span className="font-semibold">Note:</span> {folder.note}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Link href="/checklists/due-diligence-checklist" className="inline-flex items-center text-sm font-semibold text-[#2563eb] hover:underline gap-1">
                                Download the complete document list for each folder →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Best practices */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">8 data room due diligence best practices</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Field-tested practices from M&A advisors, PE-backed sell-side teams, and investment banking deal counsels.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            {bestPractices.map((bp, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center shrink-0 text-xs font-bold">{i + 1}</span>
                                        <h3 className="text-sm font-bold text-gray-900 leading-snug">{bp.title}</h3>
                                    </div>
                                    <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 ${bp.badgeColor}`}>{bp.badge}</span>
                                    <p className="text-sm text-gray-600 leading-relaxed">{bp.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Security requirements */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security requirements for a due diligence data room</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                The minimum security standards your data room must meet before a document goes near it.
                            </p>
                        </div>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-900 text-white">
                                        <th className="text-left px-5 py-3.5 font-semibold text-gray-300">Security Requirement</th>
                                        <th className="text-left px-5 py-3.5 font-semibold text-gray-300">Why It Matters</th>
                                        <th className="text-center px-4 py-3.5 font-semibold text-gray-300">Required?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {securityRequirements.map((req, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                                            <td className="px-5 py-3.5 font-semibold text-gray-800 text-sm border-b border-gray-100">{req.requirement}</td>
                                            <td className="px-5 py-3.5 text-xs text-gray-600 border-b border-gray-100 leading-relaxed max-w-xs">{req.why}</td>
                                            <td className="px-4 py-3.5 text-center border-b border-gray-100">
                                                {req.mustHave ? (
                                                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                        Must-have
                                                    </span>
                                                ) : (
                                                    <span className="text-xs text-gray-600 font-medium">Deal-specific</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-600 mt-3 text-center">SpaceNexus meets all must-have requirements and supports all deal-specific requirements.</p>
                    </div>
                </section>

                {/* Common errors */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 data room due diligence mistakes to avoid</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Every one of these errors has appeared in real transactions. Every one of them was avoidable.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            {commonErrors.map((e, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                                        </span>
                                        <h3 className="text-sm font-bold text-gray-900">{e.error}</h3>
                                    </div>
                                    <p className="text-xs text-red-700 bg-red-50 rounded-lg px-3 py-2.5 mb-3 leading-relaxed">
                                        <strong>Consequence:</strong> {e.consequence}
                                    </p>
                                    <p className="text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2.5 leading-relaxed">
                                        <strong>Prevention:</strong> {e.prevention}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SpaceNexus callout */}
                <section className="py-14 lg:py-16 bg-white border-t border-gray-100">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-3xl p-8 lg:p-12 text-white">
                            <div className="grid lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Built for data room due diligence
                                    </div>
                                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                                        SpaceNexus: the data room built for due diligence from day one
                                    </h2>
                                    <p className="text-blue-100 text-sm leading-relaxed mb-6">
                                        Every feature in SpaceNexus was designed around the due diligence workflow — not retrofitted onto a general file-sharing tool. AI redaction, auto-categorization, structured Q&A, real-time buyer analytics, and SOC 2 Type II compliance with transparent published pricing.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <Link href="/demo" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#2563eb] bg-white hover:bg-blue-50 rounded-full transition-all duration-200 shadow-lg">
                                            Request a Demo
                                        </Link>
                                        <Link href="/pricing" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white border border-white/30 hover:bg-white/10 rounded-full transition-all duration-200">
                                            View Pricing
                                        </Link>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { label: "AI Redaction", desc: "One-click PII removal before buyer access" },
                                        { label: "Auto-Categorization", desc: "AI routes documents to correct folders on upload" },
                                        { label: "Buyer Analytics", desc: "Real-time engagement per document and party" },
                                        { label: "Structured Q&A", desc: "Full audit trail, categories, and SLA tracking" },
                                        { label: "SOC 2 Type II", desc: "Independently audited security controls" },
                                        { label: "Setup in 24 hrs", desc: "No onboarding calls — live within a business day" },
                                    ].map((feat) => (
                                        <div key={feat.label} className="bg-white/10 rounded-xl p-3.5">
                                            <p className="text-sm font-semibold text-white mb-0.5">{feat.label}</p>
                                            <p className="text-xs text-blue-200 leading-snug">{feat.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about data room due diligence
                        </h2>
                        <div className="space-y-5">
                            {faqItems.map((item) => (
                                <div key={item.question} className="bg-white rounded-2xl border border-gray-100 p-6">
                                    <h3 className="text-base font-bold text-gray-900 mb-3">{item.question}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related links */}
                <section className="py-10 bg-white border-t border-gray-100">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-sm font-semibold text-gray-700 mb-5">Related guides</p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { title: "Best Due Diligence Software 2026 (Comparison)", href: "/due-diligence-software", label: "Comparison" },
                                { title: "Due Diligence Checklist (200+ items)", href: "/checklists/due-diligence-checklist", label: "Checklist" },
                                { title: "M&A Virtual Data Room Guide", href: "/solutions/mergers-and-acquisitions-vdr", label: "Solution" },
                                { title: "Data Room Software — Buyer's Guide", href: "/data-room-software", label: "Guide" },
                            ].map((post) => (
                                <Link key={post.href} href={post.href} className="group flex flex-col p-5 border border-gray-200 bg-white rounded-xl hover:border-[#2563eb]/30 hover:shadow-md transition-all duration-200">
                                    <span className="text-xs font-semibold text-[#2563eb] mb-2">{post.label}</span>
                                    <p className="text-sm font-medium text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">{post.title} →</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related VDR Resources */}
                <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring data room resources</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Link
                                href="/virtual-data-room-providers"
                                className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                            >
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Top providers for M&A.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR providers compared →</h3>
                            </Link>
                            <Link
                                href="/data-room-software"
                                className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                            >
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Software comparison.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Data room software guide →</h3>
                            </Link>
                            <Link
                                href="/checklists/due-diligence-checklist"
                                className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                            >
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">200+ item checklist.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Due diligence checklist →</h3>
                            </Link>
                            <Link
                                href="/solutions/mergers-and-acquisitions-vdr"
                                className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                            >
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">M&A solution.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A virtual data room →</h3>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa] border-t border-gray-100">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Start your due diligence data room today
                        </h2>
                        <p className="text-gray-600 mb-8">
                            AI-powered setup in under 24 hours. SOC 2 Type II certified. Transparent published pricing. No annual lock-in.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Request a Live Demo
                            </Link>
                            <Link href="/checklists/due-diligence-checklist" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                Download the Checklist
                            </Link>
                        </div>
                        <p className="text-sm text-gray-600 mt-6">No credit card required · SOC 2 Type II certified · Cancel anytime</p>
                    
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
                </section>

            </main>
        </>
    );
}
