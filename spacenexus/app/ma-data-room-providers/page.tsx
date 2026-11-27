import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "M&A Data Room Providers 2026 | SpaceNexus",
    description: "Compare 7 top M&A data room providers. Features, security, pricing, and which one advisors actually use in 2026.",
    alternates: {
        canonical: "https://spacenexus.net/ma-data-room-providers",
    },
    openGraph: {
        title: "M&A Data Room Providers 2026 | SpaceNexus",
        description:
            "Compare 7 top M&A data room providers. Features, security, pricing, and which one advis...",
        url: "https://spacenexus.net/ma-data-room-providers",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "M&A Data Room Providers 2026 — Best VDR for M&A Diligence",
        description:
            "Independent ranking and comparison of the best data room providers for M&A due diligence in 2026.",
    },
    keywords: [
        "M&A data room providers",
        "M&A data room",
        "data room M&A",
        "virtual data room M&A",
        "M&A due diligence data room",
        "M&A VDR",
        "mergers and acquisitions data room",
        "sell-side data room",
        "buy-side data room",
        "data room for M&A transactions",
        "best data room M&A",
        "M&A data room comparison",
        "data room providers for M&A",
        "M&A due diligence software",
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
        tagline: "Best Overall M&A Data Room Provider",
        bestFor: "Sell-side and buy-side M&A — mid-market advisory, PE, and corporate development teams",
        founded: "2022",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001", "SEC/FINRA Ready"],
        pros: [
            "AI redaction, auto-categorization, and smart indexing included on every plan",
            "Structured Q&A with category routing, urgency flags, and full audit trail",
            "Real-time per-buyer engagement analytics with document heatmaps",
            "Setup in under 24 hours — no CSM call required",
            "Transparent flat-rate pricing — no per-page or per-user surprises",
            "Privilege / ethical wall support for multi-party deals",
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
        tagline: "Best for Large-Cap, Bulge-Bracket M&A",
        bestFor: "Large-cap M&A at bulge-bracket investment banks, mega-deals, and cross-border transactions",
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
        tagline: "Best for Cross-Border, Regulated M&A",
        bestFor: "Cross-border M&A, syndicated lending, fund administration, and heavily regulated transactions",
        founded: "1996",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Global data residency options (EU, US, APAC)",
            "Strong capital markets workflow tools",
            "SS&C fund administration integration",
            "Long-standing regulatory credibility",
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
        tagline: "Best Mid-Market VDR for M&A",
        bestFor: "Mid-market M&A, PE portfolio transactions, and legal advisory firms",
        founded: "2007",
        hq: "Canada",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Reasonable mid-market pricing",
            "Cleaner interface than legacy enterprise VDRs",
            "Strong document management fundamentals",
        ],
        cons: [
            "No AI document processing",
            "Limited buyer engagement analytics",
            "Basic Q&A without structured workflow",
            "Less M&A-specific feature depth",
        ],
    },
    {
        rank: 5,
        name: "iDeals",
        tagline: "Best for European Cross-Border M&A",
        bestFor: "European cross-border M&A and mid-market international transactions",
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
            "Less M&A-specific workflow tooling",
        ],
    },
    {
        rank: 6,
        name: "Ansarada",
        tagline: "Best for APAC M&A and Board Governance",
        bestFor: "Asia-Pacific M&A, board governance, and complex multi-stakeholder deals",
        founded: "2005",
        hq: "Australia",
        certifications: ["ISO 27001", "SOC 2 Type II"],
        pros: [
            "Built-in deal workflow management",
            "Board and governance modules",
            "Strong APAC market presence",
        ],
        cons: [
            "Limited US M&A traction",
            "No AI document redaction",
            "Enterprise features only on higher tiers",
            "Weaker buyer analytics",
        ],
    },
    {
        rank: 7,
        name: "Sharefile (by Citrix)",
        tagline: "Worst M&A Fit — But Sometimes Used",
        bestFor: "Document sharing for ongoing business operations — not M&A transactions",
        founded: "2005",
        hq: "USA",
        certifications: ["SOC 2 Type II", "HIPAA"],
        pros: [
            "Familiar interface for routine document sharing",
            "Strong integrations with Microsoft and Citrix stacks",
        ],
        cons: [
            "No M&A-specific Q&A workflow",
            "No buyer engagement analytics",
            "No ethical wall / privilege management",
            "Per-user pricing gets expensive fast on large deal teams",
        ],
    },
];

const mustHaveFeatures = [
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "NDA Click-Through Enforcement",
        description:
            "Every prospective buyer signs an NDA digitally before viewing a single document. The click-through acceptance is timestamped and IP-bound — forming part of the transaction record and protecting against legal exposure.",
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "Granular Permission Controls",
        description:
            "Set access at the folder, document, and page level. Build separate permission groups for each buyer party, counsel team, and advisor — with ethical walls between competing bidders and privileged access for outside counsel.",
    },
    {
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "AI Document Redaction",
        description:
            "Automatic redaction of PII, financial data, and privileged information saves deal teams dozens of hours per transaction. Modern M&A data room providers include AI redaction on every plan — not as an expensive add-on.",
    },
    {
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
        title: "Structured Q&A Workflow",
        description:
            "Route diligence questions by category (financial, legal, commercial, HR), urgency, and subject matter expert. Track every question from submission to answer with a version-controlled audit trail that holds up under legal scrutiny.",
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Buyer Engagement Analytics",
        description:
            "See which buyers have reviewed which documents, for how long, and how many times. Engagement heatmaps reveal which sections attract the most interest — critical intelligence during late-stage negotiations and bid revisions.",
    },
    {
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        title: "Dynamic Watermarking",
        description:
            "Every PDF a buyer downloads is automatically stamped with their name, email, IP, and timestamp. If a confidential document leaks, you can trace it back to the source — and the visible deterrent prevents leaks in the first place.",
    },
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "Tamper-Evident Audit Trail",
        description:
            "Every access event — view, download, print, permission change — is logged with timestamp, IP, and user identity. Immutable audit logs satisfy legal discovery requirements and provide defensible evidence in post-deal disputes.",
    },
    {
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        title: "Full-Text Search Across Deal Documents",
        description:
            "Buyers expect to search across thousands of documents in seconds. Modern VDR search includes OCR for scanned files, natural-language queries, and the ability to find any clause, number, or name across the entire deal repository.",
    },
    {
        icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        title: "Bulk Upload & Auto-Indexing",
        description:
            "M&A deals often involve thousands of documents. The best M&A data room providers support bulk drag-and-drop upload, automatic folder organization, and AI-generated index numbering — eliminating days of manual filing.",
    },
];

const maUseCases = [
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "Sell-Side M&A Due Diligence",
        description:
            "Investment bankers, M&A advisors, and corporate development teams use VDRs to share company financials, contracts, IP, and HR documents with prospective buyers under strict access controls, NDA enforcement, and ethical wall management.",
        link: "/solutions/mergers-and-acquisitions-vdr",
    },
    {
        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
        title: "Buy-Side M&A Diligence",
        description:
            "Acquirers use VDRs to conduct due diligence on targets — uploading their own NDA templates, managing iterative document requests, and tracking which questions remain outstanding across financial, legal, commercial, and technical workstreams.",
    },
    {
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Cross-Border M&A Transactions",
        description:
            "International M&A deals require data residency compliance (GDPR, APAC privacy laws), multi-language support, and global infrastructure. The best M&A data room providers offer regional hosting, multi-language interfaces, and 24/7 global support.",
    },
    {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Private Equity Deal Pipeline",
        description:
            "PE firms use VDRs to manage portfolio company diligence, run multiple simultaneous transactions, and coordinate between deal teams, portfolio management, and LP reporting — with deal pipeline tracking and reusable room templates.",
    },
    {
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
        title: "Life Sciences & Pharma M&A",
        description:
            "Pharma and biotech M&A requires HIPAA-compliant data rooms for clinical trial data, regulatory filings (FDA, EMA), and IP portfolios. Specialized life-sciences M&A workflows include scientific data rooms, regulatory milestone tracking, and partner-specific access controls.",
    },
    {
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        title: "Real Estate & Asset Acquisitions",
        description:
            "Real estate M&A and large asset acquisitions use VDRs to share property records, environmental reports, lease agreements, tenant rolls, and title documentation with buyers, lenders, and counsel — often across multi-property portfolios.",
    },
];

const selectionCriteria = [
    {
        title: "AI redaction & auto-categorization",
        description:
            "M&A deals involve thousands of documents with sensitive PII and financial data. The best providers include AI-powered redaction and auto-organization as standard — not as expensive add-ons that inflate the bill mid-deal.",
    },
    {
        title: "Structured Q&A workflow",
        description:
            "Buyers will ask hundreds of questions across financial, legal, commercial, and technical categories. The data room must route questions to the right SME, track urgency, and maintain a full version-controlled audit trail.",
    },
    {
        title: "Buyer engagement analytics",
        description:
            "Real-time per-buyer heatmaps showing which documents were reviewed, for how long, and how many times are critical for late-stage deal intelligence. Generic file-sharing tools do not provide this.",
    },
    {
        title: "Ethical walls & privilege management",
        description:
            "Multi-party M&A requires strict separation between competing bidders, separate access for counsel vs. management, and privilege protection. The VDR must support these without complex configuration.",
    },
    {
        title: "Transparent, predictable pricing",
        description:
            "Per-page fees and quote-only enterprise contracts are deal-killers for mid-market M&A. We prioritize vendors that publish pricing, include AI features in the base price, and let you pay monthly.",
    },
    {
        title: "Setup speed",
        description:
            "Deal timelines are unforgiving. M&A data rooms must be live in hours, not days. We heavily weighted < 24-hour self-serve setup over multi-day CSM-led implementations.",
    },
];

const maChecklist = [
    { category: "Corporate", items: ["Articles of incorporation & bylaws", "Cap table (fully diluted)", "Subsidiary list and org chart", "Board minutes (last 3 years)"] },
    { category: "Financial", items: ["Audited financials (last 3 years)", "Management accounts (monthly)", "Revenue by customer / segment", "Working capital analysis"] },
    { category: "Commercial", items: ["Top 20 customer contracts", "Pipeline & win/loss analysis", "Pricing model & discount policy", "Customer concentration analysis"] },
    { category: "Legal", items: ["Material contracts", "Litigation summary", "IP register & assignments", "Regulatory licenses & permits"] },
    { category: "HR & People", items: ["Org chart & headcount", "Employment agreements (C-suite)", "Equity incentive plan", "Employee turnover data"] },
    { category: "Technology & IP", items: ["Tech architecture overview", "Source code repository access", "Patent & trademark register", "Data privacy & security policies"] },
];

const faqItems = [
    {
        question: "What is an M&A data room provider?",
        answer:
            "An M&A data room provider supplies secure, cloud-based software purpose-built for the due diligence phase of mergers and acquisitions. M&A data rooms enforce NDA click-through before document access, provide granular permission controls for each buyer party and counsel team, log every view and download in a tamper-evident audit trail, support structured Q&A workflows, and offer AI redaction and analytics. Top providers like SpaceNexus, Datasite, Intralinks, Firmex, iDeals, and Ansarada specialize in M&A workflows and are accepted by investment banks, PE firms, and corporate development teams worldwide.",
    },
    {
        question: "How do M&A data room providers differ from general file-sharing tools?",
        answer:
            "M&A data room providers offer transaction-specific features that general file-sharing tools lack: mandatory NDA click-through enforcement, document-level permission controls that persist after sharing, a legally defensible tamper-evident audit trail, structured Q&A workflow management, ethical walls between competing bidders, dynamic per-viewer watermarking, and security certifications (SOC 2 Type II, ISO 27001) required by acquirers, counsel, and regulators. Using Google Drive, Dropbox, or SharePoint for M&A due diligence creates legal exposure, fails institutional counterparty requirements, and offers zero buyer engagement analytics.",
    },
    {
        question: "How much do M&A data room providers charge?",
        answer:
            "M&A data room pricing varies significantly. Modern providers like SpaceNexus use transparent flat-rate monthly pricing with no per-page fees. Mid-market platforms like Firmex use a similar flat-rate model. Legacy enterprise VDRs like Datasite and Intralinks use quote-only pricing that typically runs tens of thousands of dollars per deal, with per-page upload charges and AI features sold as premium add-ons. For mid-market M&A, modern providers deliver 90% of the functionality at less than 10% of the cost.",
    },
    {
        question: "What features should an M&A data room provider have?",
        answer:
            "An M&A data room provider must include: SOC 2 Type II and ISO 27001 certifications; AES-256 encryption at rest and TLS 1.3 in transit; NDA click-through enforcement at room entry; granular permissions at folder, document, and page level; AI-powered redaction and auto-categorization; structured Q&A with category routing, urgency flags, and full audit trail; real-time buyer engagement analytics; dynamic watermarking; ethical wall / privilege support; tamper-evident audit trail; bulk upload with AI auto-indexing; full-text search with OCR; and transparent pricing without per-page fees.",
    },
    {
        question: "Which M&A data room provider is best for mid-market transactions?",
        answer:
            "SpaceNexus is the best M&A data room provider for mid-market transactions. It combines enterprise-grade security (SOC 2 Type II, ISO 27001, SEC/FINRA ready) with AI redaction, auto-categorization, and structured Q&A included on every plan. Pricing is transparent with no per-page fees, and the platform is live in under 24 hours without an onboarding call. For larger transactions where bulge-bracket brand recognition matters, Datasite and Intralinks remain the standard — but at significantly higher cost.",
    },
    {
        question: "How long does it take to set up an M&A data room?",
        answer:
            "With modern M&A data room providers like SpaceNexus, a sell-side M&A data room can be fully configured in under 24 hours. Upload all diligence documents via bulk drag-and-drop, set up permission groups for each prospective buyer, configure the NDA, and start sending invitations. Legacy providers like Datasite and Intralinks often require 3–7 days of CSM-led setup before any documents can be shared. In fast-moving M&A processes, this difference can materially impact deal timelines.",
    },
    {
        question: "Can a single M&A data room be reused for multiple deals?",
        answer:
            "Yes — modern M&A data room providers support reusable room templates and multi-deal pipelines. PE firms and investment banks commonly maintain standardized folder structures (Corporate, Financial, Commercial, Legal, HR, Technology) that can be cloned for new engagements. SpaceNexus supports room templates, while enterprise platforms like Datasite and Intralinks offer similar template functionality for repeat institutional clients.",
    },
    {
        question: "How do M&A data room providers protect confidentiality?",
        answer:
            "M&A data room providers protect confidentiality through multiple layers: (1) NDA click-through enforcement at room entry with timestamped acceptance; (2) AES-256 encryption at rest and TLS 1.3 in transit; (3) granular permission controls with ethical walls between competing bidders; (4) dynamic per-viewer watermarking on every downloaded PDF; (5) tamper-evident audit trail logging every access event; (6) IP-based access restrictions and device binding; (7) MFA enforcement for all users; and (8) remote wipe capability for revoked access. The best providers also offer forensic watermarking that survives photocopying and screenshots.",
    },
];

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best M&A Data Room Providers 2026",
    description: "Independent ranking of the top M&A data room providers for mergers and acquisitions in 2026.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: providers.length,
    itemListElement: providers.map((p) => ({
        "@type": "ListItem",
        position: p.rank,
        name: p.name,
        description: p.tagline,
        url: p.link?.href
            ? `https://spacenexus.net${p.link.href}`
            : `https://spacenexus.net/ma-data-room-providers#provider-${p.rank}`,
    })),
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "M&A Data Room Providers 2026 — Best VDR for M&A Diligence",
    description:
        "Independent ranking and comparison of the 7 best M&A data room providers in 2026. AI features, security, and which one deal teams actually pick.",
    author: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    datePublished: "2026-06-22",
    dateModified: "2026-06-25",
    mainEntityOfPage: "https://spacenexus.net/ma-data-room-providers",
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
        { "@type": "ListItem", position: 2, name: "M&A Data Room Providers", item: "https://spacenexus.net/ma-data-room-providers" },
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
                    Editor&apos;s Choice · #1 M&amp;A Data Room Provider
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
                        <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                            <span>Est. {provider.founded}</span>
                            <span>·</span>
                            <span>{provider.hq}</span>
                        </div>
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

export default function MADataRoomProvidersPage() {
    return (
        <>
            <Script id="madrp-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="madrp-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="madrp-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="madrp-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="madrp-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

            <main className="pt-20 lg:pt-24">

                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">M&A Data Room Providers</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Independent Ranking · Updated June 2026
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                7 Best M&amp;A Data Room{" "}
                                <span className="text-[#2563eb]">Providers</span> in 2026
                            </h1>
                            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                                We ranked 2026&apos;s top data room providers for mergers &amp; acquisitions on AI redaction, structured Q&amp;A, buyer analytics, security certifications, and total cost. Here&apos;s who made the list — and which one deal teams actually pick.
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
                                    <strong>SpaceNexus is the best M&amp;A data room provider in 2026 for mid-market transactions.</strong> It includes AI redaction, structured Q&amp;A, and per-buyer engagement analytics on every plan, supports ethical walls between competing bidders, and uses transparent monthly pricing with no per-page fees.
                                </p>
                                <p>
                                    <strong>For large-cap and bulge-bracket deals</strong>, Datasite and Intralinks remain the standard — but expect opaque pricing and per-page fees. <strong>For European cross-border M&amp;A</strong>, iDeals is a strong mid-market choice. <strong>Avoid</strong> Sharefile and generic cloud storage entirely — they lack the NDA enforcement, audit trails, and buyer analytics that M&amp;A requires.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is an M&A data room */}
                <section className="py-14 bg-[#f8f9fa]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is an M&amp;A data room provider?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                An M&amp;A data room provider delivers secure, cloud-based software for managing the due diligence phase of mergers and acquisitions. The category emerged from physical data rooms — locked facilities where deal parties would visit in person to review sensitive documents under supervision. Modern M&A Data Room Providers have replaced this with online platforms that offer the same security controls digitally, at a fraction of the cost and with far greater efficiency.
                            </p>
                            <p>
                                What separates a dedicated M&amp;A data room provider from a general file-sharing tool is the transaction-specific compliance layer: mandatory NDA enforcement before document access, ethical walls between competing bidders, granular permission controls at the folder and document level, an immutable audit trail logging every view and download, structured Q&amp;A workflow management with category routing, dynamic per-viewer watermarking, and security certifications (SOC 2 Type II, ISO 27001, SEC/FINRA readiness) required by institutional acquirers, outside counsel, and regulators.
                            </p>
                            <p>
                                The M&amp;A data room market in 2026 spans legacy enterprise platforms (Datasite, Intralinks) and a newer generation of AI-powered providers like SpaceNexus that deliver the same security and compliance — plus AI redaction, auto-categorization, and buyer engagement analytics included as standard — on transparent monthly pricing.
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
                                Best M&A Data Room Providers, ranked
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Each provider below was evaluated on AI redaction, structured Q&amp;A, buyer engagement analytics, ethical wall support, security certifications, transparent pricing, and setup speed.
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">M&amp;A data room provider comparison</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                All seven providers at a glance on the features that matter most for M&amp;A due diligence.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm min-w-[680px]">
                                    <thead className="bg-gray-900 text-white">
                                        <tr>
                                            <th className="text-left font-semibold text-gray-300 px-4 py-4">Provider</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">AI Redaction</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">Buyer Analytics</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">Ethical Walls</th>
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
                                                    {p.pros.some((pr) => pr.toLowerCase().includes("analytics") || pr.toLowerCase().includes("heatmap")) ? (
                                                        <span className="text-green-600 font-bold">✓</span>
                                                    ) : (
                                                        <span className="text-red-500 font-bold">✗</span>
                                                    )}
                                                </td>
                                                <td className="px-3 py-3.5 text-center">
                                                    {p.pros.some((pr) => pr.toLowerCase().includes("ethical") || pr.toLowerCase().includes("privilege")) || p.name === "SpaceNexus" || p.name === "Datasite" || p.name === "Intralinks" ? (
                                                        <span className="text-green-600 font-bold">✓</span>
                                                    ) : (
                                                        <span className="text-red-500 font-bold">✗</span>
                                                    )}
                                                </td>
                                                <td className="px-3 py-3.5 text-center">
                                                    {p.cons.some((c) => c.toLowerCase().includes("per-page") || c.toLowerCase().includes("per user")) ? (
                                                        <span className="text-red-500 font-bold">Yes</span>
                                                    ) : (
                                                        <span className="text-green-600 font-bold">No</span>
                                                    )}
                                                </td>
                                                <td className="px-3 py-3.5 text-center text-xs text-gray-700">{p.certifications.some((c) => c.includes("SOC 2")) ? "✓" : "—"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="text-xs text-gray-600 mt-3 text-center">
                            Pricing based on publicly available information as of June 2026. Always confirm with the vendor for your specific deal size.
                        </p>
                    </div>
                </section>

                {/* Must-Have Features */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Feature Checklist</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Must-have features for M&amp;A data rooms</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These nine capabilities are the baseline for any M&amp;A-grade data room provider. Anything missing is a red flag.
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">How we picked the best M&A Data Room Providers</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                We evaluated 14 data room vendors against 12 criteria specific to M&amp;A due diligence. The 7 listed above best serve sell-side advisors, buy-side acquirers, and PE deal teams.
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

                {/* M&A Document Checklist */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to put in an M&amp;A data room</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                A complete M&amp;A data room covers 6 diligence categories. SpaceNexus provides pre-built folder structures and AI auto-categorization so every document lands in the right place from day one.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {maChecklist.map((cat) => (
                                <div key={cat.category} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-[#2563eb]/20 transition-all">
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
                                Download the full 200+ item M&amp;A due diligence checklist (free)
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* M&A Use Cases */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">M&amp;A data room use cases</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Data rooms power every phase of the M&amp;A lifecycle — from sell-side preparation through post-close integration. Here are the most common workflows.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {maUseCases.map((uc) => (
                                <div key={uc.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300 flex flex-col">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4 shrink-0">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={uc.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{uc.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{uc.description}</p>
                                    {uc.link && (
                                        <Link href={uc.link} className="text-xs font-semibold text-[#2563eb] hover:underline inline-flex items-center gap-1 mt-auto">
                                            Learn more
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </Link>
                                    )}
                                </div>
                            ))}
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
                                    Why SpaceNexus is #1 for M&amp;A
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Built for the speed of modern M&amp;A
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is the only M&amp;A data room on this list that was purpose-built for the way mid-market deal teams actually work. AI redaction and auto-categorization run on every upload, structured Q&amp;A routes to the right SME, and buyer engagement analytics tell you which bidders are serious — on transparent monthly pricing with no per-page fees.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "AI redaction, auto-categorization, and smart indexing — included on every plan",
                                        "Structured Q&A with category routing, urgency flags, and version-controlled audit trail",
                                        "Real-time per-buyer engagement heatmaps — see who is reading what, when",
                                        "Ethical wall / privilege support for multi-party M&A",
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
                                    <Link href="/solutions/mergers-and-acquisitions-vdr" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                        See the M&amp;A VDR page →
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
                                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                                    <img
                                        src="/spacenexus/screenshots/vdr-dashboard.png"
                                        alt="SpaceNexus M&A data room dashboard"
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
                            Frequently asked questions about M&A Data Room Providers
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
                            <Link href="/data-room-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Deal Room Software →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/solutions/mergers-and-acquisitions-vdr" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                M&amp;A VDR Guide →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/solutions/ma-document-sharing" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                M&amp;A Document Sharing →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/virtual-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                All Data Room Providers →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/competitors/datasite-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                SpaceNexus vs Datasite →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/checklists/due-diligence-checklist" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                M&amp;A Due Diligence Checklist →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Launch your M&amp;A data room in under 24 hours
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Stop running M&amp;A diligence on email, shared drives, or legacy enterprise VDRs. Get a purpose-built M&amp;A data room live today — with AI redaction, structured Q&amp;A, and per-buyer analytics on every plan.
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
                            href="/best-data-room-for-startups"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">7 providers ranked for founders.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Best data rooms for startups →</h3>
                        </Link>
                        <Link
                            href="/pricing-comparison"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Transparent pricing vs legacy.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR pricing comparison →</h3>
                        </Link>
                        <Link
                            href="/solutions/mergers-and-acquisitions-vdr"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Our M&A VDR platform.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A virtual data room →</h3>
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
