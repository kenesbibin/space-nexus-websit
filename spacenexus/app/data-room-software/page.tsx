import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";
import AnswerBlock from "../components/AnswerBlock";

export const metadata: Metadata = {
    title: "Data Room Software Comparison 2026 — Features, Pricing & Top Picks",
    description: "Compare the best data room software platforms side by side. AI features, security certifications, pricing, and use cases — find the right data room for your deal.",
    alternates: {
        canonical: "https://spacenexus.net/data-room-software",
    },
    openGraph: {
        title: "Data Room Software Comparison 2026 | SpaceNexus",
        description:
            "Compare the best data room software platforms side by side. AI features, security, pricing, and use cases.",
        url: "https://spacenexus.net/data-room-software",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Room Software Comparison 2026 — Side-by-Side | SpaceNexus",
        description:
            "Compare data room software features, pricing, and security certifications across the top platforms.",
    },
    keywords: [
        "data room software comparison",
        "best data room software",
        "data room software 2026",
        "compare data room software",
        "M&A data room software",
        "secure data room software",
        "due diligence software",
        "online data room software",
        "data room platform",
        "deal room software",
        "data room tools",
    ],
};

const coreFeatures = [
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "Bank-Grade Security",
        description: "AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 Type II and ISO 27001 certification. Zero Trust architecture with MFA enforcement and IP-based access restrictions.",
        tags: ["SOC 2 Type II", "ISO 27001", "AES-256"],
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "Granular Permission Controls",
        description: "Set access at the folder, document, and page level. Restrict view-only, download, print, and copy rights per user or group. Apply dynamic watermarks with viewer identity embedded automatically.",
        tags: ["Folder-level", "Page-level", "Dynamic watermarks"],
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "AI Document Processing",
        description: "Automatically redact PII, sensitive financials, and privileged information. AI auto-categorizes uploaded documents into the correct folder structure and generates smart index numbers.",
        tags: ["Auto-redaction", "Auto-categorization", "Smart indexing"],
    },
    {
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
        title: "Structured Q&A Workflow",
        description: "Route due diligence questions to the right subject matter expert by category, urgency, and department. Track every question from submission to answer with a version-controlled audit trail.",
        tags: ["Category routing", "Urgency flags", "Audit trail"],
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Real-Time Engagement Analytics",
        description: "Track every document view, download, and time-on-page per buyer in real time. Engagement heatmaps reveal which sections attract the most interest — critical intelligence during negotiations.",
        tags: ["Per-user heatmaps", "Time-on-page", "Download tracking"],
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Tamper-Evident Audit Trail",
        description: "Every access event — view, download, print, permission change — is logged with timestamp, IP address, and user identity. Immutable audit logs satisfy legal discovery and regulatory requirements.",
        tags: ["Immutable logs", "Legal discovery", "Compliance-ready"],
    },
    {
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "NDA Enforcement",
        description: "Require all external parties to electronically accept a non-disclosure agreement before accessing any documents. Each acceptance is timestamped and logged — forming part of the transaction record.",
        tags: ["Click-through NDA", "E-signature", "Timestamped"],
    },
    {
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        title: "Full-Text Search",
        description: "Instant search across 100+ file types including PDFs, Word documents, Excel files, PowerPoint presentations, and images with OCR. Find any clause, number, or name across thousands of documents in seconds.",
        tags: ["100+ file types", "OCR", "Natural language"],
    },
    {
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
        title: "Bulk Upload & Auto-Index",
        description: "Upload thousands of documents in a single drag-and-drop. The software automatically organizes files into a logical due diligence index structure — eliminating the manual filing that delays data room launch.",
        tags: ["Bulk upload", "Auto-index", "Drag-and-drop"],
    },
];

const softwareComparison = [
    {
        feature: "AI Document Redaction",
        spacenexus: { value: "Built-in, one-click", good: true },
        legacy: { value: "Add-on or manual", good: false },
        generic: { value: "Not available", good: false },
    },
    {
        feature: "Auto-Categorization",
        spacenexus: { value: "AI-powered on upload", good: true },
        legacy: { value: "Manual indexing required", good: false },
        generic: { value: "Not available", good: false },
    },
    {
        feature: "Transparent Pricing",
        spacenexus: { value: "Published, transparent", good: true },
        legacy: { value: "Quote-only, opaque", good: false },
        generic: { value: "Not purpose-built", good: false },
    },
    {
        feature: "SOC 2 Type II",
        spacenexus: { value: "Certified", good: true },
        legacy: { value: "Certified", good: true },
        generic: { value: "Rarely certified", good: false },
    },
    {
        feature: "Structured Q&A",
        spacenexus: { value: "Full workflow + audit trail", good: true },
        legacy: { value: "Basic module", good: false },
        generic: { value: "Email only", good: false },
    },
    {
        feature: "Buyer Analytics",
        spacenexus: { value: "Real-time per-user heatmaps", good: true },
        legacy: { value: "Add-on or limited", good: false },
        generic: { value: "Not available", good: false },
    },
    {
        feature: "NDA Enforcement",
        spacenexus: { value: "Click-through at room entry", good: true },
        legacy: { value: "Available", good: true },
        generic: { value: "Manual process", good: false },
    },
    {
        feature: "Setup Time",
        spacenexus: { value: "Under 24 hours, self-serve", good: true },
        legacy: { value: "Days, requires CSM", good: false },
        generic: { value: "Hours (but no VDR features)", good: false },
    },
    {
        feature: "Contract Flexibility",
        spacenexus: { value: "Monthly, no lock-in", good: true },
        legacy: { value: "Annual, exit fees", good: false },
        generic: { value: "Monthly available", good: true },
    },
    {
        feature: "Per-Page Charges",
        spacenexus: { value: "None", good: true },
        legacy: { value: "Common", good: false },
        generic: { value: "None", good: true },
    },
];

const evaluationChecklist = [
    {
        category: "Security & Compliance",
        items: [
            "SOC 2 Type II certification (request current audit report)",
            "ISO 27001 alignment",
            "AES-256 encryption at rest, TLS 1.3 in transit",
            "SEC/FINRA readiness for US investment banking transactions",
            "GDPR and CCPA data privacy compliance",
            "Multi-factor authentication enforced for all users",
            "IP-based access restrictions",
        ],
    },
    {
        category: "Core Data Room Features",
        items: [
            "NDA click-through enforcement at room entry",
            "Granular permissions: folder, document, and page level",
            "Dynamic watermarking with viewer identity",
            "Tamper-evident audit trail with full access logs",
            "Document expiry and remote wipe capability",
            "Bulk upload with AI auto-indexing",
            "Full-text search across 100+ file types",
        ],
    },
    {
        category: "AI & Automation",
        items: [
            "AI document redaction (PII, financial data, privileged content)",
            "Automatic document categorization and folder organization",
            "Smart index number generation",
            "Q&A routing by category and subject matter expert",
        ],
    },
    {
        category: "Analytics & Reporting",
        items: [
            "Real-time buyer engagement analytics per document",
            "Time-on-page and download tracking per user",
            "Exportable activity reports for compliance",
            "Deal-level summary dashboards",
        ],
    },
    {
        category: "Pricing & Contracts",
        items: [
            "Transparent, published pricing (no quote-only)",
            "No per-page upload or download charges",
            "Monthly contract option — no forced annual lock-in",
            "No surprise overage fees mid-deal",
        ],
    },
];

const softwareUseCases = [
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "M&A Due Diligence",
        detail: "Sell-side and buy-side teams use data room software to securely exchange thousands of documents — financial models, contracts, IP records, employment agreements — under strict permission controls and NDA enforcement.",
        link: "/solutions/mergers-and-acquisitions-vdr",
        linkText: "M&A Data Room Software →",
    },
    {
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        title: "Fundraising & Capital Raising",
        detail: "Founders and CFOs use data room software to share investor materials — cap tables, financial projections, customer data, IP portfolios — with VC and PE firms during Series A through pre-IPO fundraising.",
        link: "/solutions/series-a-fundraising-data-room",
        linkText: "Fundraising Data Room →",
    },
    {
        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
        title: "Law Firms & Legal Teams",
        detail: "Attorneys use data room software to maintain privilege walls between deal parties, exchange sensitive discovery documents, and manage transactional document sets with full audit trails that satisfy evidentiary standards.",
        link: "/industries/law-firms",
        linkText: "Legal Data Room Software →",
    },
    {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Private Equity",
        detail: "PE firms use data room software to manage portfolio company documents, run LP reporting, and orchestrate acquisition due diligence across multiple simultaneous transactions with deal pipeline tracking.",
        link: "/industries/private-equity",
        linkText: "PE Data Room Software →",
    },
    {
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        title: "Real Estate",
        detail: "Real estate professionals use data room software to share property records, title documents, environmental reports, and lease agreements with buyers, lenders, and counsel during asset sale processes.",
        link: "/industries/real-estate",
        linkText: "Real Estate Data Room →",
    },
    {
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
        title: "Life Sciences & Biotech",
        detail: "Pharma and biotech companies use data room software to share clinical trial data, regulatory filings, and IP portfolios under HIPAA compliance during licensing deals, partnerships, and strategic acquisitions.",
        link: "/industries/life-sciences",
        linkText: "Life Sciences Data Room →",
    },
];

const faqItems = [
    {
        question: "What is data room software?",
        answer: "Data room software is a secure, cloud-based platform purpose-built for storing and sharing confidential documents during business transactions. Unlike general file-sharing tools, data room software provides the security controls, compliance certifications, and transaction-specific workflow features — NDA enforcement, granular permissions, tamper-evident audit trails, structured Q&A, and buyer analytics — required for M&A due diligence, fundraising, legal proceedings, and other high-stakes document exchanges.",
    },
    {
        question: "How is data room software different from SharePoint or Google Drive?",
        answer: "SharePoint and Google Drive are enterprise productivity tools not designed for transactional document security. Data room software differs in three critical ways: (1) Compliance — data room software holds SOC 2 Type II, ISO 27001, and regulatory certifications that generic tools do not; (2) Transaction controls — NDA click-through enforcement, dynamic watermarking, document expiry, and remote wipe are data room-specific features; (3) Deal workflow — structured Q&A with audit trails, buyer engagement analytics, and privilege wall management are absent from productivity tools. Using SharePoint or Google Drive for M&A due diligence creates legal and compliance exposure.",
    },
    {
        question: "What features should data room software have?",
        answer: "Essential features for data room software include: SOC 2 Type II and ISO 27001 certification; AES-256 encryption at rest and TLS 1.3 in transit; NDA click-through enforcement; granular permissions at the folder, document, and page level; dynamic watermarking; a tamper-evident immutable audit trail; structured Q&A workflow management; full-text search across 100+ file types; bulk upload with AI auto-indexing; real-time buyer engagement analytics; and transparent pricing without per-page charges. Modern platforms like SpaceNexus also include AI document redaction and auto-categorization as standard features.",
    },
    {
        question: "How much does data room software cost?",
        answer: "Data room software pricing varies significantly by provider. SpaceNexus offers transparent, published pricing with no per-page fees — AI redaction, buyer analytics, and Q&A workflow are all included. Legacy enterprise platforms like Datasite and Intralinks operate on quote-only pricing that typically ranges in the tens of thousands per deal, with additional charges for AI features and user licenses. When comparing costs, account for per-page upload fees, user caps, storage overages, and add-on charges that inflate legacy platform bills mid-deal.",
    },
    {
        question: "Can data room software integrate with other tools?",
        answer: "Most modern data room software supports integrations with enterprise tools. SpaceNexus integrates with DocuSign for e-signatures, Salesforce for CRM deal tracking, Microsoft 365 for document collaboration, and Slack for deal team notifications. Key integrations to look for include e-signature platforms (DocuSign, Adobe Sign), CRM systems (Salesforce, HubSpot), identity providers (Okta, Azure AD) for SSO, and cloud storage platforms for document import.",
    },
    {
        question: "How quickly can data room software be set up?",
        answer: "Modern data room software like SpaceNexus can be fully configured and live in under 24 hours — without any onboarding calls or dedicated implementation support. Upload documents via bulk drag-and-drop, configure permission groups, set the NDA, and send invitations to buyers or counsel within hours. Legacy platforms like Datasite and Intralinks require multiple days and dedicated customer success manager involvement for initial setup, which can delay deal timelines.",
    },
    {
        question: "Is data room software secure enough for M&A transactions?",
        answer: "Purpose-built data room software meets the security standards required for M&A transactions. SpaceNexus holds SOC 2 Type II certification, aligns with ISO 27001, and is SEC/FINRA ready for US investment banking transactions. The platform uses AES-256 encryption at rest, TLS 1.3 in transit, Zero Trust architecture, and multi-factor authentication. Every document access event is logged in an immutable audit trail. Generic file-sharing tools do not meet these requirements and should not be used for confidential deal materials.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Data Room Software 2026 — Complete Guide to Features, Pricing & Top Picks",
    description: "The complete guide to data room software in 2026. Compare features, pricing, and security certifications across the top platforms.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-06-01",
    mainEntityOfPage: "https://spacenexus.net/data-room-software",
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

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Data Room Software", item: "https://spacenexus.net/data-room-software" },
    ],
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://spacenexus.net/#organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
};

const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://spacenexus.net/#software",
    name: "SpaceNexus Data Room Software",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Data Room Software",
    operatingSystem: "Web Browser",
    url: "https://spacenexus.net",
    description: "AI-powered data room software for M&A due diligence, fundraising, and secure document sharing.",
    publisher: { "@id": "https://spacenexus.net/#organization" },
    isPartOf: { "@id": "https://spacenexus.net/#website" },
    offers: {
        "@type": "Offer",
        description: "Transparent, published pricing. Contact SpaceNexus for current plan pricing.",
    },
};

export default function DataRoomSoftwarePage() {
    return (
        <>
            <Script id="drs-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="drs-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="drs-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="drs-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="drs-software" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

            <main className="pt-20 lg:pt-24">

                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Data Room Software</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                2026 Software Guide
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Data Room Software{" "}
                                <span className="text-[#2563eb]">— The 2026 Complete Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Not all data room software is built the same. This guide covers what to look for, what separates purpose-built data room software from generic file-sharing tools, and which platform leads in 2026.
                            </p>
                            <p className="text-sm text-gray-600 mb-10">
                                Last updated: June 2026 &nbsp;·&nbsp; Covers features, pricing, security, integrations, and use cases
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    Try SpaceNexus Free
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <a href="#features" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    See All Features
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <AnswerBlock text="SpaceNexus is AI-powered virtual data room software for M&A due diligence, capital raising, and secure document collaboration. It provides automatic document indexing, structured Q&A, buyer engagement heatmaps, and bank-grade security with SOC 2 Type II and ISO 27001 compliance." />

                {/* What is data room software */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is data room software?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Data room software is a secure, cloud-hosted platform for storing, organizing, and sharing confidential documents during business transactions. The category was designed to replace physical data rooms — supervised facilities where deal parties reviewed printed documents — with a digital equivalent that provides the same security controls at a fraction of the cost and with far greater efficiency.
                            </p>
                            <p>
                                The defining feature of purpose-built data room software is its transaction-specific compliance layer: NDA enforcement at room entry, document-level access controls, an immutable audit trail logging every view and download, structured Q&A workflow management, and security certifications (SOC 2 Type II, ISO 27001) required by financial regulators and legal counterparties. These features are absent from general productivity tools like SharePoint, Dropbox, or Google Drive.
                            </p>
                            <p>
                                In 2026, the data room software market splits clearly into two tiers: legacy enterprise platforms (Datasite, Intralinks) built in the 1990s that charge tens of thousands per deal with opaque quote-based pricing, and a newer generation of AI-powered platforms like SpaceNexus that deliver the same security and compliance with AI redaction, auto-categorization, and buyer analytics included at a transparent, published monthly price.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Stats Bar */}
                <section className="py-10 bg-[#2563eb]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                            {[
                                { value: "Published", label: "Transparent, listed pricing — no quotes" },
                                { value: "< 24hrs", label: "Average data room setup time" },
                                { value: "SOC 2 II", label: "Security certification standard" },
                                { value: "500+", label: "Enterprise deal teams trust SpaceNexus" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-black mb-1">{stat.value}</div>
                                    <div className="text-xs text-blue-200 leading-snug">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Features */}
                <section id="features" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Feature Breakdown</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                What the best data room software must include
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These nine capabilities are the baseline for any serious data room software platform. Anything missing is a red flag.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {coreFeatures.map((feature) => (
                                <div key={feature.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300">
                                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{feature.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {feature.tags.map((tag) => (
                                            <span key={tag} className="text-xs bg-blue-50 text-[#2563eb] px-2 py-0.5 rounded-full font-medium border border-blue-100">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SpaceNexus Product Callout */}
                <section className="py-14 bg-white border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Recommended Data Room Software
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    SpaceNexus — AI-powered data room software with transparent, published pricing
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is purpose-built data room software for modern deal teams. Every plan includes AI document redaction, auto-categorization, buyer engagement analytics, and structured Q&A — features that legacy software charges as expensive add-ons.
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[
                                        { label: "AI Redaction", desc: "One-click, auto on upload" },
                                        { label: "Buyer Analytics", desc: "Real-time per-user heatmaps" },
                                        { label: "Structured Q&A", desc: "Routed, tracked, audited" },
                                        { label: "SOC 2 Type II", desc: "Certified + ISO 27001" },
                                        { label: "Setup Time", desc: "Under 24 hours, self-serve" },
                                        { label: "Pricing", desc: "Transparent, no lock-in" },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-start gap-2.5 bg-[#f8f9fa] rounded-xl p-3">
                                            <span className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-3 h-3 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-900">{item.label}</p>
                                                <p className="text-xs text-gray-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/demo" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                                        Request a Demo
                                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </Link>
                                    <Link href="/pricing" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                        View Pricing
                                    </Link>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                    <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">app.spacenexus.net / dashboard</div>
                                </div>
                                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl">
                                    <img src="/spacenexus/screenshots/vdr-dashboard.png" alt="SpaceNexus data room software dashboard" className="w-full h-auto" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Software Comparison Table */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Data room software vs. legacy platforms vs. generic tools
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                How SpaceNexus compares to legacy enterprise VDR software and generic file-sharing tools on the features that matter most.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="grid grid-cols-4 bg-gray-900 text-white">
                                <div className="px-5 py-4 text-sm font-semibold text-gray-300">Feature</div>
                                <div className="px-5 py-4 text-sm font-bold text-center text-[#60a5fa] border-l border-gray-700">SpaceNexus</div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-600 border-l border-gray-700">Legacy VDR<br /><span className="text-xs font-normal text-gray-600">(Datasite / Intralinks)</span></div>
                                <div className="px-5 py-4 text-sm font-semibold text-center text-gray-600 border-l border-gray-700">Generic Tools<br /><span className="text-xs font-normal text-gray-600">(Drive / SharePoint)</span></div>
                            </div>
                            {softwareComparison.map((row, i) => (
                                <div key={row.feature} className={`grid grid-cols-4 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                                    <div className="px-5 py-3.5 text-sm font-medium text-gray-800">{row.feature}</div>
                                    <div className={`px-5 py-3.5 text-xs text-center border-l border-gray-100 font-medium ${row.spacenexus.good ? "text-green-700" : "text-red-500"}`}>
                                        {row.spacenexus.good && (
                                            <span className="inline-flex items-center gap-1">
                                                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                {row.spacenexus.value}
                                            </span>
                                        )}
                                        {!row.spacenexus.good && row.spacenexus.value}
                                    </div>
                                    <div className={`px-5 py-3.5 text-xs text-center border-l border-gray-100 ${row.legacy.good ? "text-gray-600" : "text-red-500"}`}>{row.legacy.value}</div>
                                    <div className={`px-5 py-3.5 text-xs text-center border-l border-gray-100 ${row.generic.good ? "text-gray-600" : "text-red-500"}`}>{row.generic.value}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-600 mt-3 text-center">Based on publicly available information. Last updated June 2026.</p>
                    </div>
                </section>

                {/* Evaluation Checklist */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Data room software evaluation checklist
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Use this checklist when evaluating any data room software vendor. SpaceNexus meets every item as standard.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {evaluationChecklist.map((section) => (
                                <div key={section.category} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6">
                                    <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                                        {section.category}
                                    </h3>
                                    <ul className="space-y-2">
                                        {section.items.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                                                <svg className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Data room software by use case
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Data room software serves different workflows across industries. Here is how it is used in each major transaction type.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {softwareUseCases.map((uc) => (
                                <div key={uc.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300 flex flex-col">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4 shrink-0">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={uc.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{uc.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{uc.detail}</p>
                                    <Link href={uc.link} className="text-xs font-semibold text-[#2563eb] hover:underline inline-flex items-center gap-1 mt-auto">
                                        {uc.linkText}
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about data room software
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
                        <p className="text-sm font-semibold text-gray-700 mb-4">Related guides</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/deal-room-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Deal Room Software →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/virtual-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Virtual Data Room Providers →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Data Room Providers →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/competitors/vdr-alternatives" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Best VDR Comparison 2026 →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/competitors/datasite-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Datasite Alternative →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/features/data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                SpaceNexus Features →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            See the data room software built for modern deals
                        </h2>
                        <p className="text-gray-600 mb-8">
                            AI-powered redaction. Transparent published pricing. Setup in under 24 hours. SOC 2 Type II certified. No annual lock-in.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Request a Live Demo
                            </Link>
                            <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                View Pricing
                            </Link>
                        </div>
                        <p className="text-sm text-gray-600 mt-6">No credit card required · SOC 2 Type II certified · Cancel anytime</p>
                    </div>
                </section>

                        {/* Related VDR Resources */}
            <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring VDR resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/virtual-data-room-providers"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Complete directory.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">All virtual data room providers →</h3>
                        </Link>
                        <Link
                            href="/deal-room-software"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">For M&A and fundraising.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Deal room software →</h3>
                        </Link>
                        <Link
                            href="/due-diligence-software"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Diligence automation.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Due diligence software →</h3>
                        </Link>
                        <Link
                            href="/vdr-providers"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">All VDR providers compared.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR providers →</h3>
                        </Link>
                        <Link
                            href="/pricing-comparison"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Transparent pricing.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR pricing comparison →</h3>
                        </Link>
                    </div>
                
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-11-25" />
            </div></div>
            </section>

</main>
        </>
    );
}
