import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "Due Diligence Software 2026 | SpaceNexus",
    description: "Compare the best due diligence software platforms. AI document review, structured Q&A, and audit-ready workflows.",
    alternates: {
        canonical: "https://spacenexus.net/due-diligence-software",
    },
    openGraph: {
        title: "Due Diligence Software 2026 | SpaceNexus",
        description:
            "Compare the best due diligence software platforms. AI document review, structured Q&A, ...",
        url: "https://spacenexus.net/due-diligence-software",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Due Diligence Software 2026 — Best M&A Diligence Tools Compared",
        description:
            "Independent comparison of the best due diligence software providers in 2026. Pricing, features, and rankings.",
    },
    keywords: [
        "due diligence software",
        "M&A due diligence software",
        "diligence software",
        "due diligence tools",
        "virtual data room due diligence",
        "automated due diligence software",
        "AI due diligence software",
        "due diligence platform",
        "best due diligence software",
        "due diligence software comparison",
        "due diligence software 2026",
        "M&A diligence tools",
        "due diligence workflow software",
    ],
};

type Provider = {
    rank: number;
    name: string;
    tagline: string;
    bestFor: string;
    founded: string;
    hq: string;
    certifications: string[];
    pros: string[];
    cons: string[];
    highlight?: boolean;
    link?: { href: string; text: string };
};

const providers: Provider[] = [
    {
        rank: 1,
        name: "SpaceNexus",
        tagline: "Best Overall Due Diligence Software",
        bestFor: "M&A, fundraising, and transaction teams that want AI automation, transparent pricing, and a 24-hour setup",
        founded: "2022",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001", "SEC/FINRA Ready"],
        pros: [
            "AI redaction, auto-categorization, and smart indexing included on every plan",
            "Structured Q&A with category routing, urgency flags, and full audit trail",
            "Real-time per-buyer engagement analytics with document heatmaps",
            "Automated due-diligence checklist tracking across workstreams",
            "Setup in under 24 hours — no CSM call required",
            "Transparent flat-rate pricing — no per-page or per-seat surprises",
        ],
        cons: [
            "Newer vendor than the legacy enterprise providers",
            "Less brand recognition in bulge-bracket investment banking",
        ],
        highlight: true,
        link: { href: "/demo", text: "Try SpaceNexus Free" },
    },
    {
        rank: 2,
        name: "Datasite",
        tagline: "Best for Enterprise M&A Diligence",
        bestFor: "Bulge-bracket M&A, mega-deals, and enterprise diligence workflows where brand recognition matters",
        founded: "1968",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Recognized brand at every bulge-bracket bank globally",
            "Mature AI redaction and translation modules",
            "Handles extremely high document volumes",
            "Large dedicated customer success team",
        ],
        cons: [
            "Quote-only pricing — opaque and expensive",
            "Per-page upload fees that can 5–10x your bill",
            "Legacy UI with a steep learning curve",
            "Multi-day setup with mandatory onboarding calls",
            "AI features sold as expensive add-ons, not included",
        ],
    },
    {
        rank: 3,
        name: "Intralinks",
        tagline: "Best for Cross-Border, Regulated Diligence",
        bestFor: "Cross-border M&A, syndicated lending, and heavily regulated diligence workflows",
        founded: "1996",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Global data residency options (EU, US, APAC)",
            "Strong capital markets workflow tools",
            "Long-standing regulatory credibility",
            "Deep permission model with enterprise SSO",
        ],
        cons: [
            "Most expensive option in this ranking",
            "Outdated interface — limited redesign since 2017",
            "No modern AI features — manual indexing required",
            "Slow customer support response times",
        ],
    },
    {
        rank: 4,
        name: "Firmex",
        tagline: "Best Mid-Market Diligence Software",
        bestFor: "Mid-market M&A, PE portfolio diligence, and legal advisory firms",
        founded: "2007",
        hq: "Canada",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Reasonable mid-market pricing",
            "Cleaner interface than legacy enterprise tools",
            "Strong document management fundamentals",
        ],
        cons: [
            "No AI document processing",
            "Limited buyer engagement analytics",
            "Basic Q&A without structured workflow",
        ],
    },
    {
        rank: 5,
        name: "iDeals",
        tagline: "Best for European Cross-Border Diligence",
        bestFor: "European cross-border M&A and mid-market international diligence",
        founded: "2008",
        hq: "UK / Lithuania",
        certifications: ["ISO 27001", "SOC 2 Type II"],
        pros: [
            "Multi-language support for EU deals",
            "Modern, clean interface",
            "Competitive mid-market pricing",
        ],
        cons: [
            "Limited US regulatory compliance features",
            "No AI-powered redaction or auto-indexing",
            "Smaller support team for US time zones",
        ],
    },
    {
        rank: 6,
        name: "Donnelley Financial Solutions (DFIN)",
        tagline: "Best for SEC Filing & Public-Company Diligence",
        bestFor: "Public-company transactions, SEC filings, and IPO readiness diligence",
        founded: "1983",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Deep SEC filing and disclosure expertise",
            "Strong active disclosure management workflows",
            "Established brand in capital markets",
        ],
        cons: [
            "Quote-only pricing — opaque",
            "Built primarily for public-company workflows",
            "Less suited to private mid-market M&A",
            "Heavy implementation for typical due diligence use cases",
        ],
    },
    {
        rank: 7,
        name: "Email + Google Drive / SharePoint",
        tagline: "Worst Diligence Choice (But Most Common)",
        bestFor: "Internal team collaboration only — never for external counterparty diligence",
        founded: "—",
        hq: "—",
        certifications: ["Varies"],
        pros: [
            "Free or very cheap",
            "Most teams already know how to use it",
            "Great for internal collaboration",
        ],
        cons: [
            "No mandatory NDA enforcement — forwarded links leak",
            "No document-level audit trail",
            "No Q&A workflow for diligence requests",
            "No AI redaction or auto-categorization",
            "Institutional counterparties will not accept a Drive link",
        ],
    },
];

const mustHaveFeatures = [
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "NDA Click-Through Enforcement",
        description:
            "Every counterparty signs an NDA digitally before viewing a single document. The acceptance is timestamped and IP-bound — protecting the seller and forming part of the transaction record.",
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "AI Document Redaction",
        description:
            "Automatic redaction of PII, financial data, and privileged content saves diligence teams dozens of hours per transaction. Modern due diligence software includes AI redaction on every plan — not as an expensive add-on.",
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "Granular Permission Controls",
        description:
            "Set access at folder, document, and page level. Build separate permission groups for each counterparty — with ethical walls between competing bidders and privileged access for outside counsel.",
    },
    {
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
        title: "Structured Q&A Workflow",
        description:
            "Route due diligence questions by category (financial, legal, commercial, HR, technology), urgency, and subject matter expert. Track every question from submission to answer with a version-controlled audit trail.",
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Real-Time Engagement Analytics",
        description:
            "See which counterparties have reviewed which documents, for how long, and how many times. Engagement heatmaps reveal which sections attract the most interest — critical intelligence during late-stage negotiations.",
    },
    {
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
        title: "Automated Diligence Checklists",
        description:
            "The best diligence software includes pre-built checklists by transaction type (M&A, fundraising, IPO) and workstream. Track request completion rates, identify bottlenecks, and ensure no document is missed.",
    },
    {
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        title: "Dynamic Watermarking",
        description:
            "Every PDF a counterparty downloads is automatically stamped with their name, email, IP, and timestamp. If a confidential document leaks, you can trace it back to the source — and the visible deterrent prevents leaks.",
    },
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "Tamper-Evident Audit Trail",
        description:
            "Every access event — view, download, print, permission change — is logged with timestamp, IP, and user identity. Immutable audit logs satisfy legal discovery requirements and provide defensible evidence in post-deal disputes.",
    },
    {
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        title: "Full-Text Search with OCR",
        description:
            "Diligence teams search across thousands of documents in seconds. Modern due diligence search includes OCR for scanned files, natural-language queries, and the ability to find any clause, number, or name across the entire repository.",
    },
];

const diligenceTypes = [
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "Financial Due Diligence",
        description:
            "Audited financials, management accounts, working capital analysis, tax returns, and quality-of-earnings analysis. Diligence software should support accounting-firm collaboration with read-only or partial-access permissions.",
        link: null,
    },
    {
        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
        title: "Legal Due Diligence",
        description:
            "Material contracts, litigation history, IP ownership, regulatory licenses, and corporate governance documents. Diligence software must enforce privilege walls between buyer counsel and seller management.",
        link: "/industries/law-firms",
    },
    {
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        title: "Commercial Due Diligence",
        description:
            "Customer list and contracts, pipeline data, churn analysis, pricing strategy, and competitive analysis. Look for software that supports anonymized customer reference workflows.",
        link: null,
    },
    {
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        title: "HR & People Due Diligence",
        description:
            "Org chart, employment agreements, equity plan, employee turnover data, and key-person dependencies. Diligence software should restrict sensitive HR documents to specific buyer groups.",
        link: null,
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "Technology & IP Due Diligence",
        description:
            "Architecture overview, source code repository access, patent and trademark register, data privacy and security policies, SOC 2 audit reports, and penetration test results.",
        link: null,
    },
    {
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
        title: "Tax & Regulatory Due Diligence",
        description:
            "Tax returns, transfer pricing documentation, regulatory filings, environmental permits, and industry-specific compliance records. Often runs in parallel with legal and financial workstreams.",
        link: null,
    },
];

const selectionCriteria = [
    {
        title: "AI redaction & auto-categorization",
        description:
            "Diligence involves thousands of documents with sensitive PII and financial data. The best providers include AI-powered redaction and auto-organization as standard — not as expensive add-ons that inflate the bill mid-deal.",
    },
    {
        title: "Structured Q&A workflow",
        description:
            "Diligence buyers will ask hundreds of questions across financial, legal, commercial, HR, and technology categories. The software must route questions to the right SME, track urgency, and maintain a full version-controlled audit trail.",
    },
    {
        title: "Real-time engagement analytics",
        description:
            "Per-counterparty heatmaps showing which documents were reviewed, for how long, and how many times are critical for late-stage deal intelligence. Generic file-sharing tools do not provide this.",
    },
    {
        title: "Automated diligence checklists",
        description:
            "Pre-built checklists by transaction type and workstream help ensure no document is missed. The best tools also track request completion rates and identify bottlenecks in real time.",
    },
    {
        title: "Transparent, predictable pricing",
        description:
            "Per-page fees and quote-only enterprise contracts are deal-killers for mid-market M&A. We prioritize vendors that publish pricing, include AI features in the base price, and let you pay monthly.",
    },
    {
        title: "Setup speed",
        description:
            "Deal timelines are unforgiving. Due diligence software must be live in hours, not days. We heavily weighted < 24-hour self-serve setup over multi-day CSM-led implementations.",
    },
];

const diligenceChecklist = [
    { category: "Financial DD", items: ["Audited financials (3 years)", "Management accounts (monthly)", "Working capital analysis", "Tax returns + transfer pricing"] },
    { category: "Legal DD", items: ["Material contracts", "Litigation & disputes register", "IP assignments & register", "Regulatory licenses"] },
    { category: "Commercial DD", items: ["Top 20 customer contracts", "Pipeline & win/loss analysis", "Pricing & discount policy", "Churn / retention analysis"] },
    { category: "HR DD", items: ["Org chart & headcount", "C-suite employment agreements", "Equity incentive plan", "Turnover & key-person risk"] },
    { category: "Technology DD", items: ["Tech architecture overview", "Source code repo access", "Patent & trademark register", "SOC 2 + pen test reports"] },
    { category: "Tax & Regulatory", items: ["Federal & state tax returns", "Transfer pricing docs", "Environmental permits", "Industry compliance records"] },
];

const faqItems = [
    {
        question: "What is due diligence software?",
        answer:
            "Due diligence software is a secure, cloud-based platform that helps deal teams manage the end-to-end diligence process during M&A, fundraising, IPOs, and other transactions. It combines a virtual data room for document storage and sharing with structured Q&A workflow, automated checklists, AI-powered redaction, and engagement analytics. Top due diligence software providers like SpaceNexus, Datasite, Intralinks, Firmex, iDeals, and DFIN offer purpose-built tools that replace ad-hoc email, file-sharing, and spreadsheet-based diligence workflows.",
    },
    {
        question: "What is the best due diligence software in 2026?",
        answer:
            "SpaceNexus is the best due diligence software in 2026 for mid-market M&A and fundraising. It includes AI redaction, auto-categorization, structured Q&A, and per-buyer engagement analytics on every plan, supports ethical walls between competing bidders, and uses transparent monthly pricing with no per-page fees. For large-cap and bulge-bracket deals where brand recognition matters, Datasite and Intralinks remain the standard — but at significantly higher cost. For European cross-border M&A, iDeals is a strong mid-market choice. For SEC filings and public-company transactions, DFIN offers specialized disclosure workflows.",
    },
    {
        question: "How much does due diligence software cost?",
        answer:
            "Due diligence software pricing varies significantly. Modern providers like SpaceNexus use transparent flat-rate monthly pricing with no per-page fees. Mid-market platforms like Firmex and iDeals use a similar flat-rate model. Legacy enterprise VDRs like Datasite and Intralinks use quote-only pricing that typically runs tens of thousands of dollars per deal, with per-page upload charges and AI features sold as premium add-ons. For mid-market M&A, modern providers deliver 90% of the functionality at less than 10% of the cost.",
    },
    {
        question: "What features should due diligence software have?",
        answer:
            "Due diligence software must include: (1) SOC 2 Type II and ISO 27001 certifications; (2) AES-256 encryption at rest and TLS 1.3 in transit; (3) NDA click-through enforcement at room entry; (4) granular permissions at folder, document, and page level; (5) AI-powered redaction and auto-categorization; (6) structured Q&A with category routing, urgency flags, and full audit trail; (7) real-time buyer engagement analytics; (8) dynamic watermarking; (9) tamper-evident audit trail; (10) bulk upload with AI auto-indexing; (11) full-text search with OCR; and (12) pre-built diligence checklists by transaction type and workstream.",
    },
    {
        question: "Is due diligence software the same as a virtual data room (VDR)?",
        answer:
            "Due diligence software is a broader category that includes virtual data rooms (VDRs) as a core component, plus additional features purpose-built for the diligence workflow. A VDR focuses on secure document storage and sharing with NDA enforcement, permissions, and audit trails. Due diligence software extends that foundation with structured Q&A management, automated checklists, AI redaction, engagement analytics, and deal-team collaboration tools. Most modern VDR providers (including SpaceNexus, Datasite, Intralinks, and Firmex) deliver the full due diligence software suite.",
    },
    {
        question: "How long does it take to set up due diligence software?",
        answer:
            "With modern due diligence software like SpaceNexus, a sell-side diligence room can be fully configured in under 24 hours. Upload all diligence documents via bulk drag-and-drop, set up permission groups for each counterparty, configure the NDA, and start sending invitations. Legacy providers like Datasite and Intralinks often require 3–7 days of CSM-led setup before any documents can be shared. In fast-moving M&A processes, this difference can materially impact deal timelines.",
    },
    {
        question: "Can Google Drive or Dropbox be used for due diligence?",
        answer:
            "Google Drive, Dropbox, and SharePoint are not suitable replacements for due diligence software in transactional contexts. They lack NDA click-through enforcement, document-level permission controls that persist after sharing, a legally defensible tamper-evident audit trail, structured Q&A workflow management, automated checklists, AI-powered redaction, dynamic watermarking, and the regulatory compliance certifications (SOC 2 Type II, ISO 27001) that counterparties, counsel, and regulators require. Using cloud storage for M&A or fundraising diligence creates legal exposure, fails institutional counterparty requirements, and offers zero buyer engagement analytics.",
    },
    {
        question: "What is automated due diligence?",
        answer:
            "Automated due diligence is the use of AI and machine learning to accelerate and standardize the diligence process. Modern due diligence software automates: (1) document classification and auto-categorization into the right folder; (2) PII, financial, and privileged-content redaction; (3) duplicate detection and deduplication; (4) Q&A routing to the right subject matter expert; (5) engagement analytics and follow-up prioritization; (6) checklist completion tracking; and (7) anomaly flagging (e.g., unusual contract terms, missing signatures). SpaceNexus, Datasite, and other modern providers include automation as standard; legacy providers sell it as an expensive add-on.",
    },
];

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Due Diligence Software 2026",
    description: "Independent ranking of the top due diligence software providers in 2026.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: providers.length,
    itemListElement: providers.map((p) => ({
        "@type": "ListItem",
        position: p.rank,
        name: p.name,
        description: p.tagline,
        url: p.link?.href
            ? `https://spacenexus.net${p.link.href}`
            : `https://spacenexus.net/due-diligence-software#provider-${p.rank}`,
    })),
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Due Diligence Software 2026 — Best M&A Diligence Tools Compared",
    description:
        "Independent comparison and ranking of the 7 best due diligence software providers in 2026. Pricing, AI features, security, and which one deal teams actually pick.",
    author: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    datePublished: "2026-06-24",
    dateModified: "2026-06-25",
    mainEntityOfPage: "https://spacenexus.net/due-diligence-software",
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
        { "@type": "ListItem", position: 2, name: "Due Diligence Software", item: "https://spacenexus.net/due-diligence-software" },
    ],
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://spacenexus.net/#organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
};

function CheckIcon() {
    return (
        <svg className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

function ProviderCard({ provider }: { provider: Provider }) {
    const isWinner = provider.highlight;
    return (
        <article
            id={`provider-${provider.rank}`}
            className={`relative bg-white rounded-2xl border ${isWinner ? "border-[#2563eb] ring-2 ring-[#2563eb]/10 shadow-xl" : "border-gray-200 shadow-sm"} overflow-hidden scroll-mt-24`}
        >
            {isWinner && (
                <div className="absolute top-0 inset-x-0 bg-[#2563eb] text-white text-center text-xs font-bold py-2 tracking-wider uppercase">
                    Editor&apos;s Choice · #1 Best Due Diligence Software
                </div>
            )}
            <div className={`p-6 lg:p-8 ${isWinner ? "pt-14" : ""}`}>
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-6">
                    <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black ${isWinner ? "bg-[#2563eb] text-white" : "bg-gray-100 text-gray-700"}`}>
                        #{provider.rank}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{provider.name}</h3>
                        <p className={`text-sm font-semibold mb-3 ${isWinner ? "text-[#2563eb]" : "text-gray-700"}`}>{provider.tagline}</p>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">{provider.bestFor}</p>
                        {provider.hq !== "—" && (
                            <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                                <span>Est. {provider.founded}</span>
                                <span>·</span>
                                <span>{provider.hq}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-[#f8f9fa] rounded-lg p-3 mb-6">
                    <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Certifications</p>
                    <div className="flex flex-wrap gap-1.5">
                        {provider.certifications.map((cert) => (
                            <span key={cert} className="text-[10px] bg-green-50 text-green-700 border border-green-100 px-2 py-0.5 rounded-full font-medium">
                                {cert}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-3">Pros</p>
                        <ul className="space-y-2">
                            {provider.pros.map((p) => (
                                <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                                    <CheckIcon />
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3">Cons</p>
                        <ul className="space-y-2">
                            {provider.cons.map((c) => (
                                <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                                    <XIcon />
                                    <span>{c}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {provider.link && (
                    <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                        <Link
                            href={provider.link.href}
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-md shadow-blue-500/20"
                        >
                            {provider.link.text}
                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link
                            href="/pricing"
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200"
                        >
                            See Pricing
                        </Link>
                    </div>
                )}
            </div>
        </article>
    );
}

export default function DueDiligenceSoftwarePage() {
    return (
        <>
            <Script id="dds-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="dds-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="dds-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="dds-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="dds-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

            <main className="pt-20 lg:pt-24">

                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Due Diligence Software</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                2026 Comparison &amp; Ranking
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Best Due Diligence Software{" "}
                                <span className="text-[#2563eb]">— 2026 Comparison</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                                We compared 2026&apos;s top 7 due diligence software platforms on AI automation, structured Q&amp;A, engagement analytics, security, and total cost. Here&apos;s who made the list — and which one deal teams actually pick.
                            </p>
                            <p className="text-sm text-gray-600 mb-10">
                                14-minute read &nbsp;·&nbsp; Last updated: June 25, 2026 &nbsp;·&nbsp; Pricing verified monthly
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="#provider-1" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                    See the #1 Pick
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <a href="#ranking" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    Jump to Full Ranking
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Summary Box */}
                <section className="py-12 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 lg:p-8">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">TL;DR · Quick Summary</p>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">The 30-second answer</h2>
                            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                                <p>
                                    <strong>SpaceNexus is the best due diligence software in 2026 for mid-market M&amp;A and fundraising.</strong> It includes AI redaction, auto-categorization, structured Q&amp;A, and automated checklists on every plan, and uses transparent monthly pricing with no per-page fees.
                                </p>
                                <p>
                                    <strong>For large-cap and bulge-bracket deals</strong>, Datasite and Intralinks remain the standard — but expect opaque pricing and per-page fees. <strong>For SEC filings and public-company transactions</strong>, DFIN offers specialized disclosure workflows. <strong>Avoid</strong> email, Google Drive, and SharePoint for external counterparty diligence — they lack the NDA enforcement, audit trails, and analytics that the diligence process requires.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is due diligence software */}
                <section className="py-14 bg-[#f8f9fa]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is due diligence software?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Due diligence software is a secure, cloud-based platform that helps deal teams manage the end-to-end diligence process during M&amp;A, fundraising, IPOs, and other transactions. The category emerged from the limitations of physical data rooms and ad-hoc email-based document sharing — both of which created security risks, version control chaos, and zero visibility into counterparty engagement.
                            </p>
                            <p>
                                Modern due diligence software combines a virtual data room (for secure document storage and sharing) with structured Q&amp;A workflow, automated checklists by workstream, AI-powered redaction and auto-categorization, real-time engagement analytics, and tamper-evident audit trails. The best tools support all six diligence workstreams — financial, legal, commercial, HR, technology, and tax/regulatory — in a single platform.
                            </p>
                            <p>
                                The due diligence software market in 2026 spans legacy enterprise VDRs (Datasite, Intralinks) and a newer generation of AI-powered providers like SpaceNexus that deliver the same security and compliance — plus AI redaction, automated checklists, and engagement analytics included as standard — on transparent monthly pricing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Full Ranking */}
                <section id="ranking" className="py-16 lg:py-20 bg-white scroll-mt-24">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">The Full Ranking</p>
                            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
                                Best due diligence software, ranked
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Each provider below was evaluated on AI redaction, structured Q&amp;A, automated checklists, engagement analytics, security certifications, transparent pricing, and setup speed.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {providers.map((p) => (
                                <ProviderCard key={p.rank} provider={p} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Side-by-Side Comparison Table */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Due diligence software comparison</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                All seven providers at a glance on the features that matter most for the diligence workflow.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm min-w-[680px]">
                                    <thead className="bg-gray-900 text-white">
                                        <tr>
                                            <th className="text-left font-semibold text-gray-300 px-4 py-4">Provider</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">AI Redaction</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">Structured Q&amp;A</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">Engagement Analytics</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">Per-Page Fees</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">SOC 2</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {providers.map((p, i) => (
                                            <tr key={p.name} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} border-t border-gray-100`}>
                                                <td className="px-4 py-3.5 font-bold text-gray-900 flex items-center gap-2 min-w-[180px]">
                                                    <span className={`w-6 h-6 rounded-full text-xs font-black flex items-center justify-center shrink-0 ${p.highlight ? "bg-[#2563eb] text-white" : "bg-gray-200 text-gray-700"}`}>{p.rank}</span>
                                                    {p.name}
                                                </td>
                                                <td className="px-3 py-3.5 text-center">
                                                    {p.pros.some((pr) => pr.toLowerCase().includes("redaction") || pr.toLowerCase().includes("ai")) ? (
                                                        <span className="text-green-600 font-bold">✓</span>
                                                    ) : (
                                                        <span className="text-red-500 font-bold">✗</span>
                                                    )}
                                                </td>
                                                <td className="px-3 py-3.5 text-center">
                                                    {p.pros.some((pr) => pr.toLowerCase().includes("q&a") || pr.toLowerCase().includes("structured")) ? (
                                                        <span className="text-green-600 font-bold">✓</span>
                                                    ) : (
                                                        <span className="text-red-500 font-bold">✗</span>
                                                    )}
                                                </td>
                                                <td className="px-3 py-3.5 text-center">
                                                    {p.pros.some((pr) => pr.toLowerCase().includes("analytics") || pr.toLowerCase().includes("heatmap")) ? (
                                                        <span className="text-green-600 font-bold">✓</span>
                                                    ) : (
                                                        <span className="text-red-500 font-bold">✗</span>
                                                    )}
                                                </td>
                                                <td className="px-3 py-3.5 text-center">
                                                    {p.cons.some((c) => c.toLowerCase().includes("per-page")) ? (
                                                        <span className="text-red-500 font-bold">Yes</span>
                                                    ) : (
                                                        <span className="text-green-600 font-bold">No</span>
                                                    )}
                                                </td>
                                                <td className="px-3 py-3.5 text-center text-xs text-gray-700">{p.certifications.some((c) => c.includes("SOC 2") || c === "Varies") ? "✓" : "—"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="text-xs text-gray-600 mt-3 text-center">
                            Comparison based on publicly available information as of June 2026. Always confirm current details with the vendor.
                        </p>
                    </div>
                </section>

                {/* Must-Have Features */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Feature Checklist</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Must-have features for due diligence software</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These nine capabilities are the baseline for any diligence-grade platform. Anything missing is a red flag.
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

                {/* How We Picked */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Methodology</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">How we picked the best due diligence software</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                We evaluated 14 due diligence and VDR providers against 12 criteria specific to the diligence workflow. The 7 listed above best serve M&amp;A advisors, PE firms, corporate development teams, and startup founders.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {selectionCriteria.map((c) => (
                                <div key={c.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                                    <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-start gap-2">
                                        <span className="w-5 h-5 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">✓</span>
                                        {c.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{c.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Diligence Types */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of due diligence software supports</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Modern due diligence software supports all six major diligence workstreams in a single platform. The best tools include pre-built folder structures and checklists for each.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {diligenceTypes.map((dt) => (
                                <div key={dt.title} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-[#2563eb]/20 transition-all flex flex-col">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4 shrink-0">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={dt.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{dt.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-3 flex-1">{dt.description}</p>
                                    {dt.link && (
                                        <Link href={dt.link} className="text-xs font-semibold text-[#2563eb] hover:underline inline-flex items-center gap-1 mt-auto">
                                            Learn more
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Diligence Checklist */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">What goes in a due diligence data room</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                A complete due diligence data room covers 6 workstreams. SpaceNexus provides pre-built folder structures and AI auto-categorization so every document lands in the right place from day one.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {diligenceChecklist.map((cat) => (
                                <div key={cat.category} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-[#2563eb]/20 transition-all">
                                    <h3 className="text-sm font-bold text-[#2563eb] uppercase tracking-wider mb-3">{cat.category}</h3>
                                    <ul className="space-y-1.5">
                                        {cat.items.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                                                <CheckIcon />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Link href="/checklists/due-diligence-checklist" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:underline">
                                Download the full 200+ item due diligence checklist (free)
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Why SpaceNexus Wins */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Why SpaceNexus is #1
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Built for the speed of modern due diligence
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is the only due diligence platform on this list that was purpose-built for the way mid-market deal teams actually run diligence. AI redaction, auto-categorization, structured Q&amp;A, and automated checklists run on every plan — on transparent monthly pricing with no per-page fees.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "AI redaction, auto-categorization, and smart indexing — included on every plan",
                                        "Structured Q&A with category routing, urgency flags, and version-controlled audit trail",
                                        "Pre-built diligence checklists by workstream (Financial, Legal, Commercial, HR, Tech, Tax)",
                                        "Real-time per-counterparty engagement heatmaps",
                                        "Ethical wall / privilege support for multi-party diligence",
                                        "Dynamic watermarking on every downloaded PDF",
                                    "SOC 2 Type II · ISO 27001 · SEC/FINRA ready",
                                    "Transparent flat-rate pricing — no per-page fees, no annual lock-in, no CSM call",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                                            <span className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-3 h-3 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/demo" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                                        Try SpaceNexus Free
                                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </Link>
                                    <Link href="/data-room-due-diligence" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                        See the due diligence guide →
                                    </Link>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                    <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">app.spacenexus.net / data-room</div>
                                </div>
                                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                                    <img
                                        src="/spacenexus/screenshots/vdr-dashboard.png"
                                        alt="SpaceNexus due diligence software dashboard"
                                        className="w-full h-auto"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl -z-10" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about due diligence software
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

                {/* Related Links */}
                <section className="py-10 bg-white border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-sm font-semibold text-gray-700 mb-4">Continue exploring</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/data-room-due-diligence" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Data Room Due Diligence Guide →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/ma-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                M&amp;A Data Room Providers →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Data Room Software →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/checklists/due-diligence-checklist" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Due Diligence Checklist (200+ items) →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Launch your due diligence room in under 24 hours
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Stop running diligence on email, shared drives, or legacy enterprise VDRs. Get a purpose-built due diligence platform live today — with AI redaction, structured Q&amp;A, automated checklists, and per-counterparty analytics on every plan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Request a Live Demo
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                See Pricing
                            </Link>
                        </div>
                        <p className="text-sm text-gray-600 mt-6">SOC 2 Type II · ISO 27001 · SEC/FINRA ready · No credit card required · Cancel anytime</p>
                    </div>
                </section>
                        {/* Related VDR Resources */}
            <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring VDR resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/data-room-software"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Software platform comparison.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Data room software →</h3>
                        </Link>
                        <Link
                            href="/best-data-room-for-startups"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">7 providers ranked.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Best data rooms for startups →</h3>
                        </Link>
                        <Link
                            href="/checklists/due-diligence-checklist"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">200+ items, free.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A due diligence checklist →</h3>
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
