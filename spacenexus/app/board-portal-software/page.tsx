import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "Board Portal Software 2026 | SpaceNexus",
    description: "Compare the best board portal software for boards of directors, governance, and secure document distribution.",
    alternates: {
        canonical: "https://spacenexus.net/board-portal-software",
    },
    openGraph: {
        title: "Board Portal Software 2026 | SpaceNexus",
        description:
            "Compare the best board portal software for boards of directors, governance, and secure ...",
        url: "https://spacenexus.net/board-portal-software",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Board Portal Software 2026 — Best Board Management Platforms Compared",
        description:
            "Compare the top board portal software platforms in 2026. AI features, security, board pack distribution, and rankings.",
    },
    keywords: [
        "board portal software",
        "board management software",
        "board portal",
        "best board portal software",
        "board meeting software",
        "board pack software",
        "board of directors software",
        "board collaboration software",
        "governance software",
        "board portal comparison",
        "board portal pricing",
        "board portal for non-profits",
        "board portal for corporate boards",
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
        tagline: "Best Overall Board Portal Software",
        bestFor: "Corporate boards, non-profits, and advisory committees that want AI-powered board packs, secure messaging, and modern governance workflows",
        founded: "2022",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001", "GDPR Compliant"],
        pros: [
            "AI-powered board pack assembly — auto-generates director-ready PDFs from source documents",
            "Secure in-app messaging and threaded board discussions with full audit trail",
            "Granular permission controls per director, committee, and observer",
            "E-signature workflows for board resolutions and approvals",
            "Real-time collaboration on board materials with version control",
            "Granular audit trail logging every view, download, and annotation",
        ],
        cons: [
            "Newer vendor than the legacy board portal providers",
            "Less brand recognition in traditional governance circles",
        ],
        highlight: true,
        link: { href: "/demo", text: "Try SpaceNexus Free" },
    },
    {
        rank: 2,
        name: "Diligent (Diligent One)",
        tagline: "Best for Enterprise Public Companies",
        bestFor: "Large public companies with complex board, committee, and compliance workflows",
        founded: "2001",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001", "FedRAMP Ready"],
        pros: [
            "Recognized brand in enterprise governance",
            "Comprehensive board, committee, and entity management modules",
            "Deep integrations with enterprise compliance systems",
            "Established D&O questionnaire and entity management workflows",
        ],
        cons: [
            "Quote-only pricing — opaque and expensive",
            "Legacy UI with a steep learning curve",
            "Heavy implementation and CSM-driven onboarding",
            "AI features sold as premium add-ons",
        ],
    },
    {
        rank: 3,
        name: "OnBoard",
        tagline: "Best Mid-Market Board Portal",
        bestFor: "Mid-market companies, non-profits, and credit unions looking for an intuitive board portal",
        founded: "2003",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "User-friendly interface for directors of all technical levels",
            "Strong meeting scheduling and board book assembly",
            "Good support and onboarding for mid-market teams",
        ],
        cons: [
            "Limited AI capabilities compared to newer entrants",
            "Per-director pricing can be expensive for larger boards",
            "Less customization for unique governance structures",
        ],
    },
    {
        rank: 4,
        name: "BoardEffect",
        tagline: "Best for Non-Profits and Education",
        bestFor: "Non-profit boards, educational institutions, and association governance",
        founded: "2006",
        hq: "USA",
        certifications: ["SOC 2 Type II"],
        pros: [
            "Strong non-profit and association workflows",
            "Good committee and task management features",
            "Reasonable pricing for the non-profit sector",
        ],
        cons: [
            "No modern AI features",
            "Limited engagement analytics for directors",
            "Basic Q&A without structured workflow",
        ],
    },
    {
        rank: 5,
        name: "Nasdaq Boardvantage",
        tagline: "Best for Regulated Financial Services Boards",
        bestFor: "Banks, insurance companies, and other regulated financial services boards",
        founded: "2009",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001", "FINRA Aligned"],
        pros: [
            "Strong regulatory compliance workflows for financial services",
            "Deep audit trail and reporting capabilities",
            "Established integrations with Nasdaq governance products",
        ],
        cons: [
            "Quote-only enterprise pricing",
            "Interface has not been modernized significantly",
            "Limited AI capabilities",
        ],
    },
    {
        rank: 6,
        name: "Boardable",
        tagline: "Best Budget Board Portal for Small Teams",
        bestFor: "Small companies, startups, and emerging non-profits on a tight budget",
        founded: "2014",
        hq: "USA",
        certifications: ["SOC 2 Type II"],
        pros: [
            "Affordable entry-level pricing",
            "Simple, clean interface for smaller boards",
            "Quick setup with minimal onboarding",
        ],
        cons: [
            "Limited advanced features for complex governance",
            "Basic reporting and analytics",
            "Fewer integrations than enterprise platforms",
        ],
    },
    {
        rank: 7,
        name: "Email + Google Drive / SharePoint",
        tagline: "Worst Choice for Board Materials (But Most Common)",
        bestFor: "Never for board materials — internal use only",
        founded: "—",
        hq: "—",
        certifications: ["Varies"],
        pros: [
            "Free or very cheap",
            "Most teams already know how to use it",
        ],
        cons: [
            "No mandatory NDA or access control — board materials leak easily",
            "No immutable audit trail for director reviews",
            "No D&O liability protection from process documentation",
            "Regulators and auditors will not accept email-based board processes",
        ],
    },
];

const mustHaveFeatures = [
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "SOC 2 Type II & ISO 27001 Certified",
        description:
            "Enterprise-grade security certifications required by public companies, regulated industries, and institutional investors. AES-256 encryption at rest, TLS 1.3 in transit, MFA enforcement.",
    },
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "Board Pack Assembly & Distribution",
        description:
            "Compile, version, and distribute board packs to directors securely. The best board portal software auto-generates director-ready PDFs from source documents with consistent formatting.",
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "Granular Permission Controls",
        description:
            "Set access at the board, committee, and individual director level. Manage observers, advisors, and outside counsel with separate permission groups.",
    },
    {
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
        title: "Secure Board Messaging & Discussions",
        description:
            "In-app threaded discussions replace insecure email threads. Every message is logged in an immutable audit trail, with full version control and reply threading.",
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Meeting Management & Minutes",
        description:
            "Schedule board meetings, build agendas, take minutes, and capture resolutions — all in one platform with automatic distribution to directors.",
    },
    {
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        title: "E-Signature for Board Resolutions",
        description:
            "Directors sign board resolutions, approvals, and consent actions in-platform — with full audit trail and ESIGN Act / eIDAS compliance.",
    },
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "Tamper-Evident Audit Trail",
        description:
            "Every director action — view, download, comment, sign — is logged with timestamp, IP, and identity. The audit trail satisfies D&O liability requirements and regulatory scrutiny.",
    },
    {
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        title: "Full-Text Search Across Board Materials",
        description:
            "Search across years of board packs, minutes, and resolutions in seconds. Modern board portal software includes OCR for scanned documents and natural-language search.",
    },
    {
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
        title: "Committee Management",
        description:
            "Manage audit, compensation, governance, and nominating committees separately — with dedicated permission groups, meeting workflows, and reporting for each.",
    },
];

const useCases = [
    {
        title: "Corporate Board of Directors",
        description:
            "Public and private company boards use board portal software to distribute board packs, manage meetings, and capture minutes — replacing email and unsecured cloud storage.",
    },
    {
        title: "Non-Profit & Association Boards",
        description:
            "Non-profit boards of directors use board portals to manage governance, committee workflows, and member communications — with the audit trail required by regulators and donors.",
    },
    {
        title: "Advisory & Strategic Committees",
        description:
            "Corporate advisory boards, strategy committees, and M&A steering committees use board portals to share confidential materials and track meeting decisions.",
    },
    {
        title: "Credit Union & Cooperative Boards",
        description:
            "Credit union boards and cooperative governance structures use board portals to manage director elections, member communications, and regulatory filings.",
    },
    {
        title: "Investment Committee Governance",
        description:
            "Private equity, hedge fund, and family office investment committees use board portals to share deal materials, capture investment decisions, and maintain fiduciary records.",
    },
    {
        title: "Healthcare & Hospital Boards",
        description:
            "Hospital and healthcare system boards use board portals to manage quality, compliance, and credentialing committee workflows under HIPAA and Joint Commission requirements.",
    },
];

const selectionCriteria = [
    {
        title: "Security certifications",
        description:
            "Board materials are often subject to the highest confidentiality standards. SOC 2 Type II, ISO 27001, and GDPR compliance are baseline for any board portal handling sensitive director communications.",
    },
    {
        title: "AI board pack assembly",
        description:
            "Modern board portal software uses AI to auto-generate board packs from source documents, with consistent formatting, automatic page numbering, and one-click distribution. Legacy platforms require manual assembly.",
    },
    {
        title: "Director-friendly UX",
        description:
            "Directors are part-time users — often with limited tech tolerance. The best board portals are intuitive on desktop, tablet, and mobile, with offline reading and annotation.",
    },
    {
        title: "Audit trail & D&O liability",
        description:
            "Directors' & Officers' liability insurance increasingly requires documented board processes. Look for immutable audit trails, e-signature compliance, and D&O questionnaire support.",
    },
    {
        title: "Transparent pricing",
        description:
            "Many board portals use per-director or per-meeting pricing that scales unpredictably. Look for transparent flat-rate pricing that fits your board size without surprise overages.",
    },
    {
        title: "Setup time",
        description:
            "Board transitions happen on tight timelines (often 30–60 days for new directors). Modern board portals onboard in days, not the multi-week implementations of legacy enterprise platforms.",
    },
];

const faqItems = [
    {
        question: "What is board portal software?",
        answer:
            "Board portal software is a secure platform that helps corporate boards, non-profit boards, and advisory committees manage their governance workflows. It replaces email and unsecured cloud storage for distributing board packs, scheduling meetings, capturing minutes, signing resolutions, and maintaining the audit trail required by directors & officers (D&O) liability insurance and regulators. Top providers include SpaceNexus, Diligent, OnBoard, BoardEffect, Nasdaq Boardvantage, and Boardable.",
    },
    {
        question: "What is the best board portal software in 2026?",
        answer:
            "SpaceNexus is the best board portal software in 2026. It combines enterprise-grade security (SOC 2 Type II, ISO 27001, GDPR) with AI-powered board pack assembly, secure in-app messaging, granular per-director permissions, and a tamper-evident audit trail — on a transparent monthly subscription. For large public companies with complex compliance workflows, Diligent remains the enterprise standard. For mid-market and non-profit boards, OnBoard and BoardEffect are strong choices.",
    },
    {
        question: "How much does board portal software cost?",
        answer:
            "Board portal software pricing varies by provider. Modern platforms like SpaceNexus use transparent monthly subscription pricing with no per-director or per-meeting fees. Mid-market platforms like OnBoard typically charge per director per year. Enterprise platforms like Diligent and Nasdaq Boardvantage use quote-only pricing that can run into the tens of thousands of dollars annually for large boards. When comparing costs, account for setup fees, training costs, and per-meeting overage charges that can inflate legacy platform bills mid-year.",
    },
    {
        question: "What features should board portal software have?",
        answer:
            "Board portal software must include: (1) SOC 2 Type II and ISO 27001 certification; (2) AI-powered board pack assembly and distribution; (3) granular per-director permission controls; (4) secure in-app messaging and threaded discussions; (5) e-signature for board resolutions with ESIGN Act / eIDAS compliance; (6) meeting management and minutes capture; (7) tamper-evident audit trail for D&O liability protection; (8) full-text search across board materials with OCR; (9) committee management with separate permission groups; and (10) mobile and tablet support for director review on the go.",
    },
    {
        question: "How is board portal software different from a virtual data room (VDR)?",
        answer:
            "Board portal software and VDRs serve different purposes. A board portal is for ongoing board governance — recurring board meetings, committee workflows, and director communications. A VDR is for one-time transactions like M&A or fundraising. Board portals focus on collaboration, voting, and minutes; VDRs focus on secure document exchange with external counterparties. Some modern platforms (like SpaceNexus) combine both capabilities — letting boards use the same secure platform for ongoing governance and one-time transactions.",
    },
    {
        question: "How long does it take to set up board portal software?",
        answer:
            "With modern board portal software like SpaceNexus, boards can be fully configured in days. Upload existing board materials, configure permission groups for each director and committee, set the meeting schedule, and directors can be reviewing materials within the week. Legacy enterprise platforms like Diligent often require multi-week implementations with dedicated CSM involvement, which can be disruptive during board transitions.",
    },
    {
        question: "Can we use email and Google Drive for board materials instead?",
        answer:
            "You can — but you should not. Email and cloud storage tools lack the mandatory access control, immutable audit trail, and D&O liability protection that board governance requires. Many directors' & officers' liability insurers now explicitly require documented board processes. Using unsecured email for board materials creates legal exposure, fails regulatory scrutiny, and removes the procedural safeguards that protect individual directors and the organization.",
    },
    {
        question: "What is the difference between board portal software and board management software?",
        answer:
            "The terms are used interchangeably. Both refer to secure platforms that manage board governance workflows — board pack distribution, meeting management, minutes, resolutions, and audit trails. Some platforms emphasize meeting management (agendas, minutes) while others emphasize document security (board packs, resolutions). The best modern board portal software combines both into a single integrated platform.",
    },
];

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Board Portal Software 2026",
    description: "Independent ranking of the top board portal software providers in 2026.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: providers.length,
    itemListElement: providers.map((p) => ({
        "@type": "ListItem",
        position: p.rank,
        name: p.name,
        description: p.tagline,
        url: p.link?.href
            ? `https://spacenexus.net${p.link.href}`
            : `https://spacenexus.net/board-portal-software#provider-${p.rank}`,
    })),
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Board Portal Software 2026 — Best Board Management Platforms Compared",
    description:
        "Independent comparison and ranking of the 7 best board portal software providers in 2026. AI features, security, and which one boards actually pick.",
    author: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    datePublished: "2026-06-24",
    dateModified: "2026-06-25",
    mainEntityOfPage: "https://spacenexus.net/board-portal-software",
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
        { "@type": "ListItem", position: 2, name: "Board Portal Software", item: "https://spacenexus.net/board-portal-software" },
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
                    Editor&apos;s Choice · #1 Best Board Portal Software
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
                            href="/demo"
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200"
                        >
                            See Demo
                        </Link>
                    </div>
                )}
            </div>
        </article>
    );
}

export default function BoardPortalSoftwarePage() {
    return (
        <>
            <Script id="bps-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="bps-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="bps-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="bps-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="bps-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

            <main className="pt-20 lg:pt-24">

                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Board Portal Software</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                                2026 Comparison &amp; Ranking
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                7 Best Board Portal Software{" "}
                                <span className="text-[#2563eb]">in 2026</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                                We compared 2026&apos;s top 7 board portal software platforms on AI board pack assembly, secure messaging, e-signature, audit trails, and security certifications. Here&apos;s who made the list — and which one boards actually pick.
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
                                    <strong>SpaceNexus is the best board portal software in 2026.</strong> It combines enterprise-grade security with AI-powered board pack assembly, secure in-app messaging, granular per-director permissions, and e-signature workflows — on a transparent monthly subscription.
                                </p>
                                <p>
                                    <strong>For large public companies</strong>, Diligent remains the enterprise standard — but expect quote-only pricing and heavy implementation. <strong>For mid-market and non-profit boards</strong>, OnBoard and BoardEffect are strong established choices. <strong>For regulated financial services</strong>, Nasdaq Boardvantage offers specialized compliance workflows. <strong>Avoid</strong> email, Google Drive, and SharePoint for board materials — they lack the audit trail, D&amp;O liability protection, and access control that board governance requires.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is board portal software */}
                <section className="py-14 bg-[#f8f9fa]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is board portal software?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Board portal software is a secure platform that helps corporate boards, non-profit boards, and advisory committees manage their governance workflows. The category emerged from the limitations of email and unsecured cloud storage for distributing confidential board materials — both of which created security risks, version control chaos, and zero audit trail for director reviews.
                            </p>
                            <p>
                                Modern board portal software combines board pack distribution, meeting management, minutes capture, e-signature workflows, secure in-app messaging, and tamper-evident audit trails in a single platform. The best tools support corporate, non-profit, and committee governance workflows with granular per-director permissions and the security certifications required by directors&apos; &amp; officers&apos; liability insurance and regulators.
                            </p>
                            <p>
                                The board portal software market in 2026 spans legacy enterprise platforms (Diligent, Nasdaq Boardvantage) built for large public companies and a newer generation of AI-powered providers like SpaceNexus that deliver the same security and compliance — plus AI board pack assembly, modern UX, and transparent monthly pricing — for boards of all sizes.
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
                                Best board portal software, ranked
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Each provider below was evaluated on AI board pack assembly, secure messaging, e-signature, audit trail, security certifications, and transparent pricing.
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Board portal software comparison</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                All seven providers at a glance on the features that matter most for board governance.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm min-w-[680px]">
                                    <thead className="bg-gray-900 text-white">
                                        <tr>
                                            <th className="text-left font-semibold text-gray-300 px-4 py-4">Provider</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">AI Board Packs</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">Secure Messaging</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">E-Signature</th>
                                            <th className="text-center font-semibold text-gray-300 px-3 py-4">Audit Trail</th>
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
                                                    {p.pros.some((pr) => pr.toLowerCase().includes("ai") && pr.toLowerCase().includes("board pack")) ? (
                                                        <span className="text-green-600 font-bold">✓</span>
                                                    ) : (
                                                        <span className="text-red-500 font-bold">✗</span>
                                                    )}
                                                </td>
                                                <td className="px-3 py-3.5 text-center">
                                                    {p.pros.some((pr) => pr.toLowerCase().includes("messaging") || pr.toLowerCase().includes("discussion")) ? (
                                                        <span className="text-green-600 font-bold">✓</span>
                                                    ) : (
                                                        <span className="text-red-500 font-bold">✗</span>
                                                    )}
                                                </td>
                                                <td className="px-3 py-3.5 text-center">
                                                    {p.pros.some((pr) => pr.toLowerCase().includes("e-signature") || pr.toLowerCase().includes("signing")) ? (
                                                        <span className="text-green-600 font-bold">✓</span>
                                                    ) : (
                                                        <span className="text-red-500 font-bold">✗</span>
                                                    )}
                                                </td>
                                                <td className="px-3 py-3.5 text-center">
                                                    {p.pros.some((pr) => pr.toLowerCase().includes("audit")) ? (
                                                        <span className="text-green-600 font-bold">✓</span>
                                                    ) : (
                                                        <span className="text-red-500 font-bold">✗</span>
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Must-have features for board portal software</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These nine capabilities are the baseline for any modern board portal. Anything missing is a red flag for D&amp;O liability and regulatory scrutiny.
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">How we picked the best board portal software</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                We evaluated 12 board portal and governance platforms against 12 criteria specific to corporate and non-profit board workflows. The 7 listed above best serve boards of all sizes — from small non-profits to large public companies.
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

                {/* Use Cases */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who uses board portal software</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Board portal software serves a wide range of governance workflows — from corporate boards of directors to non-profit committees, advisory boards, and investment committees.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {useCases.map((uc) => (
                                <div key={uc.title} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-[#2563eb]/20 transition-all flex flex-col">
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{uc.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed flex-1">{uc.description}</p>
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
                                    Why SpaceNexus is #1
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Built for the way modern boards actually work
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is the only board portal on this list that was designed from day one for AI-powered board pack assembly, modern governance workflows, and transparent monthly pricing. Secure messaging, e-signature, granular permissions, and a tamper-evident audit trail run on every plan — at a price point that fits boards of all sizes.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "AI board pack assembly from source documents with consistent formatting",
                                        "Secure in-app messaging and threaded board discussions with full audit trail",
                                        "Granular per-director, per-committee permission controls",
                                        "E-signature workflows for resolutions and approvals with ESIGN Act compliance",
                                        "Tamper-evident audit trail logging every view, download, and annotation",
                                        "Real-time collaboration on board materials with version control",
                                        "SOC 2 Type II · ISO 27001 · GDPR Compliant",
                                        "Transparent monthly subscription — no per-director or per-meeting fees",
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
                                    <Link href="/features/data-room" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                        See the secure data room →
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
                                        alt="SpaceNexus board portal software dashboard"
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
                            Frequently asked questions about board portal software
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
                            <Link href="/features/data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                VDR Data Room →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Data Room Software →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/data-room-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Deal Room Software →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/features/security-compliance" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Security &amp; Compliance →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            See the board portal built for modern governance
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Stop using email and unsecured cloud storage for board materials. Get a purpose-built board portal live today — with AI board pack assembly, secure messaging, and a tamper-evident audit trail on every plan.
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
                        <p className="text-sm text-gray-600 mt-6">SOC 2 Type II · ISO 27001 · GDPR Compliant · No credit card required · Cancel anytime</p>
                    </div>
                </section>
                        {/* Related VDR Resources */}
            <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring VDR resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href="/secure-document-sharing"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">General secure sharing.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Secure document sharing →</h3>
                        </Link>
                        <Link
                            href="/legal-document-management"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">For legal teams.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Legal document management →</h3>
                        </Link>
                        <Link
                            href="/best-data-room-for-startups"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">7 providers ranked.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Best data rooms for startups →</h3>
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
