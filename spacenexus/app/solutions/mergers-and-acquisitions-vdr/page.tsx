import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import AnswerBlock from "../../components/AnswerBlock";

export const metadata: Metadata = {
    title: "M&A Virtual Data Room Software",
    description: "Sell-side and buy-side M&A VDR with AI redaction, granular bidder access, structured Q&A, and tamper-evident audit logs. Start your data room in 24 hours.",
    alternates: {
        canonical: "https://spacenexus.net/solutions/mergers-and-acquisitions-vdr",
    },
    openGraph: {
        title: "M&A Virtual Data Room Software | SpaceNexus",
        description: "Sell-side and buy-side M&A VDR with AI redaction, granular bidder access, structured Q&...",
        url: "https://spacenexus.net/solutions/mergers-and-acquisitions-vdr",
    },
    keywords: [
        "M&A VDR",
        "virtual data room mergers acquisitions",
        "M&A due diligence software",
        "sell-side data room",
        "buy-side due diligence",
        "M&A data room software",
        "merger acquisition virtual data room",
    ],
};

const stages = [
    {
        stage: "1",
        title: "Deal Preparation",
        description: "Upload your CIM, financials, legal documents, and supporting materials. AI Auto-Categorization organizes everything instantly. AI Redaction removes sensitive information before buyer access.",
        features: ["Bulk upload — 100+ file types", "AI Auto-Categorization on upload", "One-click AI Redaction for PII and sensitive data"],
        color: "bg-blue-50 border-blue-200 text-blue-700",
        dot: "bg-blue-500",
    },
    {
        stage: "2",
        title: "Bidder Access Control",
        description: "Create separate NDAs and access tiers for each bidder group. Granular role-based permissions ensure each party sees exactly what they're authorized to — nothing more.",
        features: ["PII-redacted NDAs with e-signature", "Granular role-based permissions per group", "IP restriction and download controls"],
        color: "bg-purple-50 border-purple-200 text-purple-700",
        dot: "bg-purple-500",
    },
    {
        stage: "3",
        title: "Due Diligence & Q&A",
        description: "Manage the structured Q&A process from a single interface. Questions are categorized (Finance, Legal, Technical), assigned to subject matter experts, and tracked to resolution.",
        features: ["Structured Q&A with Finance/Legal/Technical tags", "Urgency flags and direct assignment", "Full Q&A audit trail for regulators"],
        color: "bg-orange-50 border-orange-200 text-orange-700",
        dot: "bg-orange-500",
    },
    {
        stage: "4",
        title: "Buyer Analytics & Close",
        description: "Track engagement per bidder — which documents they've viewed, for how long, and how many times. Use this intelligence to prioritize follow-ups and price negotiations.",
        features: ["Per-bidder engagement scoring", "Document heatmaps and view rankings", "Export analytics pack for final committee reports"],
        color: "bg-green-50 border-green-200 text-green-700",
        dot: "bg-green-500",
    },
];

const capabilities = [
    { title: "AI Document Redaction", desc: "Automatically identify and remove PII, financial figures, and sensitive names before sharing." },
    { title: "Granular Bidder Permissions", desc: "Separate access groups for each bidder party — with document-level, folder-level, and user-level controls." },
    { title: "Tamper-Evident Audit Logs", desc: "Every document view, download, and permission change is logged with a timestamp and cannot be altered." },
    { title: "Structured Q&A Workflows", desc: "Categorized, prioritized due diligence questions with assignment tracking and response deadlines." },
    { title: "Real-Time Buyer Analytics", desc: "Engagement scores and document heatmaps reveal which bidders are most serious — before they submit an LOI." },
    { title: "SOC 2 Type II Compliance", desc: "Independently certified security controls protect your most sensitive transaction documents." },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "M&A Virtual Data Room",
    description: "Purpose-built virtual data room for mergers and acquisitions due diligence, with AI redaction, structured Q&A, granular bidder permissions, and tamper-evident audit logs.",
    url: "https://spacenexus.net/solutions/mergers-and-acquisitions-vdr",
    serviceType: "Virtual Data Room",
    provider: {
        "@type": "Organization",
        name: "SpaceNexus",
        url: "https://spacenexus.net",
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
    offers: {
        "@type": "Offer",
        url: "https://spacenexus.net/pricing",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        description: "Contact for custom pricing tailored to transaction size and document volume.",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is an M&A virtual data room?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "An M&A virtual data room (VDR) is a secure online repository for storing and sharing confidential company documents during mergers and acquisitions. It provides granular bidder access controls, structured Q&A workflows, tamper-evident audit logs, and AI-powered redaction — all designed to streamline sell-side and buy-side due diligence while protecting sensitive deal information.",
            },
        },
        {
            "@type": "Question",
            name: "How does an M&A data room protect deal confidentiality?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "SpaceNexus M&A data rooms protect confidentiality through NDA enforcement at room entry, granular document-level and folder-level permissions per bidder group, IP access restrictions, download controls, dynamic watermarking, and tamper-evident audit logs that track every view and action. SOC 2 Type II certification and AES-256 encryption provide bank-grade security throughout the deal lifecycle.",
            },
        },
        {
            "@type": "Question",
            name: "How quickly can an M&A data room be set up?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "SpaceNexus M&A data rooms are fully operational within 24 hours. The bulk uploader processes 100+ file types, and AI Auto-Categorization organizes documents instantly. You can invite bidders, configure NDA gates, and set granular permissions the same day — no IT support or software installation required.",
            },
        },
        {
            "@type": "Question",
            name: "What documents go into an M&A data room?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A typical M&A data room includes the Confidential Information Memorandum (CIM), audited financials, cap table, material contracts, IP registrations, employee and benefit plans, regulatory filings, customer and supplier lists, litigation records, and environmental reports. SpaceNexus provides pre-built folder templates organized by due diligence workstream to accelerate setup.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://spacenexus.net/solutions" },
        { "@type": "ListItem", position: 3, name: "M&A Virtual Data Room", item: "https://spacenexus.net/solutions/mergers-and-acquisitions-vdr" },
    ],
};

export default function MAVDRPage() {
    return (
        <>
            <Script
                id="ma-vdr-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="ma-vdr-breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="ma-vdr-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <main className="pt-20 lg:pt-24">
            {/* Hero */}
            <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            M&amp;A Solution
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            The Virtual Data Room Built for{" "}
                            <span className="text-[#2563eb]">Mergers &amp; Acquisitions</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            From CIM upload to closing binder — Space Nexus manages the entire M&amp;A due diligence process. AI redaction, structured Q&amp;A, granular bidder access, and tamper-evident audit logs. Trusted on transactions of all sizes, from <strong>mid-market to large-cap</strong>.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Request M&amp;A Demo
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link href="/features" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                Explore Features
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <AnswerBlock text="SpaceNexus is an M&A virtual data room for sell-side and buy-side due diligence, with AI redaction, granular bidder permissions, structured Q&A, and tamper-evident audit logs. SOC 2 Type II certified with AES-256 encryption, flat-rate pricing, and 24-hour setup." />

            {/* Deal Stages */}
            <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            How Space Nexus powers every M&amp;A stage
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            From initial document preparation through final close — one platform manages the entire transaction lifecycle.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {stages.map((s) => (
                            <div key={s.stage} className={`rounded-2xl border p-7 ${s.color}`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`w-8 h-8 rounded-full ${s.dot} text-white text-sm font-bold flex items-center justify-center`}>{s.stage}</span>
                                    <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.description}</p>
                                <ul className="space-y-1.5">
                                    {s.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                                            <svg className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dashboard screenshot */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-5">Your M&amp;A deal command center</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Track active deals, document counts, open Q&amp;As, and bidder activity from one dashboard. AI Redaction and Auto-Categorization run silently so your team stays focused on the transaction.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {capabilities.map((cap) => (
                                    <div key={cap.title} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                        <p className="text-sm font-bold text-gray-900 mb-1">{cap.title}</p>
                                        <p className="text-xs text-gray-600 leading-relaxed">{cap.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <Link href="/demo" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                                See it with your own deal
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" />
                                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">app.spacenexus.net / deals</div>
                            </div>
                            <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                                <img src="/spacenexus/screenshots/vdr-deals.png" alt="SpaceNexus M&A deal pipeline" className="w-full h-auto" loading="lazy" />
                            </div>
                            <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-10 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-sm font-semibold text-gray-700 mb-4">Continue exploring</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link href="/ma-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            M&amp;A Data Room Providers (2026 Ranking) →
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/virtual-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            All Data Room Providers →
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/solutions/ma-document-sharing" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            M&amp;A Document Sharing →
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/competitors/datasite-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                            SpaceNexus vs Datasite →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#f8f9fa]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Launch your next M&amp;A data room in 24 hours</h2>
                    <p className="text-gray-600 mb-8">No lengthy onboarding. Upload documents, set permissions, invite bidders — and your data room is live.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">Request a Demo</Link>
                        <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">View Pricing</Link>
                    </div>
                    <p className="text-sm text-gray-600 mt-6">SOC 2 Type II · AES-256 encryption · Tamper-evident audit logs</p>
                </div>
            </section>
                    {/* Related VDR Resources */}
            <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring VDR resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/industries/investment-banking"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">M&A advisory workflows, multi-bidder processes, and pitch materials.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For investment banks →</h3>
                        </Link>
                        <Link
                            href="/industries/private-equity"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Buy-side due diligence and sell-side portfolio exits.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For private equity →</h3>
                        </Link>
                        <Link
                            href="/industries/law-firms"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Privilege protection, ethical walls, and court-admissible audit trails.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">For law firms →</h3>
                        </Link>
                        <Link
                            href="/ma-data-room-providers"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Independent ranking of the top providers for M&A transactions.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A data room providers (2026) →</h3>
                        </Link>
                        <Link
                            href="/checklists/due-diligence-checklist"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">200+ items across every workstream.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A due diligence checklist →</h3>
                        </Link>
                        <Link
                            href="/features/data-room"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">AI redaction, structured Q&A, and real-time engagement analytics.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR data room features →</h3>
                        </Link>
                        <Link
                            href="/features/qa"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Feature</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Q&amp;A workflow overview →</h3>
                        </Link>
                        <Link
                            href="/security"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Security</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Security information →</h3>
                        </Link>
                    </div>
                
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
            </section>

</main>
        </>
    );
}
