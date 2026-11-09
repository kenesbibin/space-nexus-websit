import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "Virtual Data Room Provider Directory 2026 | Compare Top Vendors | SpaceNexus",
    description: "Complete directory of 10+ virtual data room providers. Compare features, pricing, security, and use cases by industry.",
    alternates: {
        canonical: "https://spacenexus.net/virtual-data-room-providers",
    },
    openGraph: {
        title: "Virtual Data Room Provider Directory 2026 | SpaceNexus",
        description:
            "Complete directory of 10+ virtual data room providers. Compare features, pricing, security, and use cases.",
        url: "https://spacenexus.net/virtual-data-room-providers",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Virtual Data Room Provider Directory 2026 — Compare Vendors | SpaceNexus",
        description:
            "Comprehensive directory of virtual data room providers. Compare pricing, features, security certifications, and use cases.",
    },
    keywords: [
        "virtual data room provider directory",
        "VDR providers",
        "VDR vendor comparison",
        "virtual data room vendors",
        "secure data room providers",
        "M&A data room providers",
        "due diligence data room",
        "top VDR providers",
        "data room vendor list",
        "online data room providers",
    ],
};

const providers = [
    {
        name: "SpaceNexus",
        tagline: "AI-powered VDR built for modern deal teams",
        pricing: "Transparent pricing",
        pricingNote: "Transparent, public pricing",
        bestFor: "M&A due diligence, legal teams, startups raising capital",
        founded: "2022",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001", "SEC/FINRA Ready"],
        pros: [
            "AI document redaction and auto-categorization included",
            "Structured Q&A workflow with full audit trail",
            "Real-time buyer engagement analytics and heatmaps",
            "Setup in under 24 hours — no onboarding calls",
            "Transparent monthly pricing, no per-page fees",
            "Unlimited users on most plans",
        ],
        cons: [
            "Newer platform vs. legacy enterprise providers",
            "Smaller brand recognition in bulge bracket banking",
        ],
        highlight: true,
        link: "/demo",
        linkText: "Try SpaceNexus Free",
        badge: "Recommended",
    },
    {
        name: "Datasite",
        tagline: "Legacy enterprise VDR for large-cap M&A",
        pricing: "Quote only",
        pricingNote: "Tens of thousands per deal",
        bestFor: "Large-cap M&A at bulge bracket investment banks",
        founded: "1968",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Established brand in institutional investment banking",
            "Handles very high document volumes",
            "Large dedicated support team",
        ],
        cons: [
            "Opaque quote-only pricing with per-page charges",
            "Legacy interface with steep learning curve",
            "AI features sold as expensive add-ons",
            "Multi-day setup requiring CSM involvement",
        ],
        highlight: false,
        link: "/competitors/datasite-alternative",
        linkText: "SpaceNexus vs Datasite →",
        badge: null,
    },
    {
        name: "Intralinks",
        tagline: "Capital markets VDR by SS&C Technologies",
        pricing: "Quote only",
        pricingNote: "Tens of thousands per deal",
        bestFor: "Capital raising, syndicated lending, fund administration",
        founded: "1996",
        hq: "USA",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Strong capital markets workflow tools",
            "SS&C fund administration platform integration",
            "Established global compliance support",
        ],
        cons: [
            "Complex, dated interface",
            "Expensive for small-to-mid deals",
            "Limited AI and automation features",
            "Slow customer support response times",
        ],
        highlight: false,
        link: "/competitors/intralinks-alternative",
        linkText: "SpaceNexus vs Intralinks →",
        badge: null,
    },
    {
        name: "Firmex",
        tagline: "Mid-market Canadian VDR provider",
        pricing: "Quote-based",
        pricingNote: "Per-project pricing available",
        bestFor: "Mid-market M&A in Canada and Europe",
        founded: "2007",
        hq: "Canada",
        certifications: ["SOC 2 Type II", "ISO 27001"],
        pros: [
            "Reasonable mid-market pricing",
            "Clean interface for smaller teams",
            "Good document management fundamentals",
        ],
        cons: [
            "No AI document processing",
            "Limited buyer analytics",
            "Basic Q&A without workflow automation",
        ],
        highlight: false,
        link: null,
        linkText: null,
        badge: null,
    },
    {
        name: "iDeals",
        tagline: "European VDR for cross-border deals",
        pricing: "Quote-based",
        pricingNote: "Per-project or subscription",
        bestFor: "European cross-border M&A, mid-market transactions",
        founded: "2008",
        hq: "UK / Lithuania",
        certifications: ["ISO 27001", "SOC 2 Type II"],
        pros: [
            "Multi-language support for EU deals",
            "Clean, modern interface",
            "Competitive mid-market pricing",
        ],
        cons: [
            "Limited US regulatory compliance features",
            "No AI-powered redaction or auto-indexing",
            "Smaller support team for US time zones",
        ],
        highlight: false,
        link: null,
        linkText: null,
        badge: null,
    },
    {
        name: "Ansarada",
        tagline: "Australia-based VDR with deal workflow tools",
        pricing: "Quote-based",
        pricingNote: "Subscription-based",
        bestFor: "Asia-Pacific deals and board governance",
        founded: "2005",
        hq: "Australia",
        certifications: ["ISO 27001", "SOC 2 Type II"],
        pros: [
            "Built-in deal workflow management",
            "Board and governance modules",
            "Strong APAC market presence",
        ],
        cons: [
            "Limited traction in US M&A market",
            "No AI document redaction",
            "Enterprise features only on higher tiers",
        ],
        highlight: false,
        link: null,
        linkText: null,
        badge: null,
    },
];

const evaluationCriteria = [
    {
        number: "01",
        title: "Security Certifications",
        description:
            "SOC 2 Type II and ISO 27001 are the minimum baseline for any serious VDR provider. Additionally look for AES-256 encryption at rest, TLS 1.3 in transit, and multi-factor authentication as standard — not add-ons.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
        number: "02",
        title: "Pricing Transparency",
        description:
            "Avoid providers with quote-only pricing and hidden per-page charges. Modern VDR providers publish their rates. Opaque pricing is a red flag — it typically means surprise fees mid-deal when you can least afford them.",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
        number: "03",
        title: "AI and Automation Features",
        description:
            "AI-powered document redaction, auto-categorization, and smart indexing have become table stakes in 2026. Providers that still require manual indexing will cost your deal team hours of unnecessary work on every transaction.",
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
        number: "04",
        title: "Q&A Workflow Management",
        description:
            "Structured due diligence Q&A with categorization, urgency flags, assignee tracking, and a tamper-evident audit trail separates purpose-built VDRs from generic file-sharing platforms. This feature alone can compress due diligence timelines by weeks.",
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z",
    },
    {
        number: "05",
        title: "Setup Speed",
        description:
            "Modern VDR providers should be operational within 24 hours without requiring dedicated onboarding calls or CSM involvement. Deal timelines are compressed — your data room infrastructure should never be on the critical path.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
        number: "06",
        title: "Buyer Analytics",
        description:
            "Real-time engagement analytics — who viewed what, for how long, and when — give sell-side advisors critical intelligence during negotiations. This feature is essential for modern sell-side M&A advisory and not just a nice-to-have.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
];

const comparisonFeatures = [
    { feature: "AI Document Redaction", values: ["✓", "Add-on", "✗", "✗", "✗", "✗"] },
    { feature: "AI Auto-Categorization", values: ["✓", "✗", "✗", "✗", "✗", "✗"] },
    { feature: "Structured Q&A Workflow", values: ["✓", "Basic", "Basic", "Basic", "✓", "✓"] },
    { feature: "Real-Time Buyer Analytics", values: ["✓", "Add-on", "✓", "Basic", "✓", "✓"] },
    { feature: "Dynamic Watermarking", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
    { feature: "SOC 2 Type II", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
    { feature: "ISO 27001", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
    { feature: "SEC/FINRA Ready", values: ["✓", "✓", "✓", "✗", "✗", "✗"] },
    { feature: "Transparent Pricing", values: ["✓", "✗", "✗", "Partial", "Partial", "Partial"] },
    { feature: "No Per-Page Charges", values: ["✓", "✗", "✗", "✓", "✓", "✓"] },
    { feature: "Setup Under 24 Hours", values: ["✓", "✗", "✗", "✓", "✓", "✓"] },
    { feature: "Unlimited Users", values: ["✓", "✗", "✗", "✗", "✓", "Plan-dep."] },
    { feature: "NDA Click-Through Gate", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
    { feature: "Ethical Wall / Privilege Mgmt", values: ["✓", "✓", "✓", "✗", "✗", "✗"] },
    { feature: "Monthly Contracts", values: ["✓", "✗", "✗", "✓", "✓", "✓"] },
];

const providerNames = ["SpaceNexus", "Datasite", "Intralinks", "Firmex", "iDeals", "Ansarada"];

const industryRecommendations = [
    {
        industry: "M&A Due Diligence",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        recommended: "SpaceNexus",
        reason: "AI redaction, structured Q&A, real-time buyer analytics, and transparent pricing purpose-built for sell-side and buy-side M&A.",
        link: "/solutions/mergers-and-acquisitions-vdr",
    },
    {
        industry: "Investment Banking",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        recommended: "SpaceNexus or Datasite",
        reason: "SpaceNexus for mid-market mandates. Datasite for large-cap bulge bracket deals where institutional brand recognition matters.",
        link: "/industries/investment-banking",
    },
    {
        industry: "Private Equity",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        recommended: "SpaceNexus",
        reason: "Portfolio company document management, LP reporting, and deal pipeline tracking with unlimited users and transparent per-month pricing.",
        link: "/industries/private-equity",
    },
    {
        industry: "Law Firms",
        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
        recommended: "SpaceNexus",
        reason: "Attorney-client privilege protection, ethical walls, and tamper-evident audit trails meet law firm oversight and regulatory requirements.",
        link: "/industries/law-firms",
    },
    {
        industry: "Series A / Fundraising",
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        recommended: "SpaceNexus",
        reason: "Fast setup, transparent pricing, and investor-friendly analytics make it ideal for founders preparing for due diligence from VCs and growth investors.",
        link: "/solutions/series-a-fundraising-data-room",
    },
    {
        industry: "European / Cross-Border Deals",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        recommended: "iDeals or Firmex",
        reason: "Multi-language support, EU data residency, and competitive mid-market pricing for deals centered outside North America.",
        link: null,
    },
];

const faqItems = [
    {
        question: "What is a virtual data room provider?",
        answer:
            "A virtual data room (VDR) provider offers a secure online platform for storing, sharing, and managing confidential documents during business transactions such as M&A due diligence, capital raising, legal proceedings, and real estate transactions. Unlike general cloud storage, VDR providers offer enterprise-grade access controls, full audit trails, NDA enforcement, Q&A workflow management, and compliance certifications required by financial regulators. Key providers include SpaceNexus, Datasite, Intralinks, Firmex, iDeals, and Ansarada.",
    },
    {
        question: "How much does a virtual data room provider cost?",
        answer:
            "VDR provider pricing varies significantly. SpaceNexus offers transparent, published monthly pricing with no per-page fees. Legacy enterprise providers like Datasite and Intralinks operate on quote-only pricing that typically runs tens of thousands per deal. Mid-market providers like Firmex and iDeals use quote-based per-project or subscription pricing. When evaluating total cost, account for storage limits, user caps, per-page charges, add-on fees for AI features, and contract lock-in terms.",
    },
    {
        question: "What security certifications should a VDR provider have?",
        answer:
            "Minimum requirements for any serious VDR provider are SOC 2 Type II certification and ISO 27001 compliance. Additional certifications to look for include SEC and FINRA readiness for US investment banking transactions, HIPAA compliance for healthcare M&A, and GDPR-aligned data processing for EU deals. At the infrastructure level, require AES-256 encryption at rest, TLS 1.3 in transit, multi-factor authentication, and granular folder-level permissions with a tamper-evident audit trail.",
    },
    {
        question: "Which virtual data room provider is best for M&A?",
        answer:
            "For mid-market and growth-stage M&A, SpaceNexus offers the strongest combination of AI-powered features, transparent published pricing, and rapid 24-hour setup. It includes AI document redaction, structured Q&A workflow, and real-time buyer analytics as standard — not as expensive add-ons. For large-cap deals at bulge bracket investment banks, Datasite and Intralinks are established choices, though they carry significantly higher price points and longer setup times. The right choice depends on your deal size, budget, and the sophistication requirements of your counterparties.",
    },
    {
        question: "What is the difference between a virtual data room and cloud storage?",
        answer:
            "Virtual data rooms and general cloud storage (Dropbox, Google Drive, SharePoint) serve fundamentally different purposes. VDRs provide purpose-built features for business transactions: granular document-level access controls, automatic NDA click-through enforcement, tamper-evident audit trails logging every view and download, structured Q&A workflow management, dynamic watermarking, and security certifications required for regulated transactions. Cloud storage lacks the compliance certifications, deal-specific workflow tools, and audit trail integrity required for M&A due diligence, securities offerings, and legal proceedings.",
    },
    {
        question: "How long does it take to set up a virtual data room?",
        answer:
            "Modern VDR providers like SpaceNexus can be fully operational in under 24 hours — upload documents, configure permission groups, and invite buyers or counsel without any onboarding calls. Legacy enterprise providers like Datasite and Intralinks typically require multiple business days and involve dedicated customer success managers for initial setup. For time-sensitive transactions, setup speed is a critical evaluation factor that is often overlooked until a deal is already underway.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Virtual Data Room Providers 2026 — Complete Guide",
    description:
        "The definitive guide to virtual data room providers in 2026. Compare top VDR software for M&A, due diligence, fundraising, and legal transactions.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-06-01",
    mainEntityOfPage: "https://spacenexus.net/virtual-data-room-providers",
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
        { "@type": "ListItem", position: 2, name: "Virtual Data Room Providers", item: "https://spacenexus.net/virtual-data-room-providers" },
    ],
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://spacenexus.net/#organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
};

export default function VirtualDataRoomProvidersPage() {
    return (
        <>
            <Script id="vdr-providers-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="vdr-providers-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="vdr-providers-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="vdr-providers-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Virtual Data Room Providers</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                2026 Provider Guide
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Virtual Data Room Providers{" "}
                                <span className="text-[#2563eb]">— The 2026 Guide</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Not all virtual data room providers are built the same. This guide covers what a VDR provider is, how to evaluate them, and which providers lead the market in 2026 — across pricing, security, AI features, and regulatory compliance.
                            </p>
                            <p className="text-sm text-gray-600 mb-10">
                                Last updated: June 2026 &nbsp;·&nbsp; Covers: SpaceNexus, Datasite, Intralinks, Firmex, iDeals, Ansarada
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#providers" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    See All Providers
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </a>
                                <a href="#comparison-table" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    Jump to Comparison
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is a VDR Provider */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is a virtual data room provider?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                A virtual data room (VDR) provider delivers a secure, cloud-based platform for storing, sharing, and controlling access to confidential documents during high-stakes business transactions. Unlike general-purpose file sharing tools, VDR providers are purpose-built for the legal, compliance, and workflow requirements of M&A due diligence, capital raising, IPOs, real estate transactions, and legal proceedings.
                            </p>
                            <p>
                                The defining characteristics of a VDR provider — as distinct from ordinary cloud storage — are enterprise-grade access controls, mandatory NDA enforcement at room entry, a tamper-evident audit trail logging every document view and download, structured Q&A workflow management, and security certifications required by financial regulators and legal counterparties.
                            </p>
                            <p>
                                The market for VDR providers has bifurcated: legacy enterprise platforms built in the 1990s and early 2000s (Datasite, Intralinks) serve large-cap institutional deals with opaque pricing and complex setup, while a new generation of modern providers like SpaceNexus delivers AI-powered automation, transparent pricing, and rapid self-serve deployment for the broader mid-market.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Provider Cards */}
                <section id="providers" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Top virtual data room providers in 2026
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                An honest breakdown of the six leading VDR providers — what they offer, who they serve, and what the real costs look like.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {providers.map((p) => (
                                <div
                                    key={p.name}
                                    className={`rounded-2xl border p-7 flex flex-col transition-all duration-300 ${p.highlight
                                        ? "bg-white border-[#2563eb] shadow-lg shadow-blue-500/10 ring-1 ring-[#2563eb]/20"
                                        : "bg-white border-gray-200 hover:shadow-md hover:border-gray-300"
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
                                        {p.badge && (
                                            <span className="text-xs font-semibold bg-[#2563eb] text-white px-2.5 py-1 rounded-full">{p.badge}</span>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-600 mb-4">
                                        Est. {p.founded} &nbsp;·&nbsp; {p.hq}
                                    </p>
                                    <p className="text-sm text-gray-600 mb-4">{p.tagline}</p>
                                    <div className="mb-3">
                                        <span className="text-2xl font-bold text-gray-900">{p.pricing}</span>
                                        <span className="text-xs text-gray-600 ml-2">{p.pricingNote}</span>
                                    </div>
                                    <p className="text-xs font-medium text-gray-600 mb-3">Best for: {p.bestFor}</p>
                                    <div className="mb-3">
                                        <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Certifications</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {p.certifications.map((cert) => (
                                                <span key={cert} className="text-xs bg-green-50 text-green-700 border border-green-100 px-2 py-0.5 rounded-full font-medium">{cert}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <p className="text-xs font-semibold text-green-700 mb-1.5">Strengths</p>
                                        <ul className="space-y-1">
                                            {p.pros.map((pro) => (
                                                <li key={pro} className="flex items-start gap-2 text-xs text-gray-600">
                                                    <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                                                    {pro}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mb-5">
                                        <p className="text-xs font-semibold text-red-600 mb-1.5">Limitations</p>
                                        <ul className="space-y-1">
                                            {p.cons.map((con) => (
                                                <li key={con} className="flex items-start gap-2 text-xs text-gray-600">
                                                    <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                                                    {con}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {p.link && (
                                        <div className="mt-auto">
                                            <Link
                                                href={p.link}
                                                className={`inline-flex items-center text-sm font-semibold ${p.highlight
                                                    ? "text-white bg-[#2563eb] hover:bg-[#1d4ed8] px-5 py-2.5 rounded-full shadow-md"
                                                    : "text-[#2563eb] hover:underline"
                                                    }`}
                                            >
                                                {p.linkText}
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section id="comparison-table" className="py-16 lg:py-20 bg-white scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                VDR provider feature comparison
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Side-by-side comparison of security, AI capabilities, pricing, compliance, and usability across all six providers.
                            </p>
                        </div>
                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm min-w-[820px]">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="text-left px-4 py-4 font-semibold text-gray-900 border-b border-gray-200 sticky left-0 bg-gray-50 z-10 min-w-[180px]">Feature</th>
                                        {providerNames.map((name, i) => (
                                            <th
                                                key={name}
                                                className={`text-center px-3 py-4 font-semibold border-b border-gray-200 min-w-[100px] ${i === 0 ? "text-[#2563eb] bg-blue-50/50" : "text-gray-600"}`}
                                            >
                                                {name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonFeatures.map((row, ri) => (
                                        <tr key={row.feature} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                                            <td className="px-4 py-3 text-gray-700 font-medium border-b border-gray-100 sticky left-0 bg-inherit z-10">{row.feature}</td>
                                            {row.values.map((val, ci) => (
                                                <td key={ci} className={`px-3 py-3 text-center border-b border-gray-100 ${ci === 0 ? "bg-blue-50/30" : ""}`}>
                                                    {val === "✓" ? (
                                                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                        </span>
                                                    ) : val === "✗" ? (
                                                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-400">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                                                        </span>
                                                    ) : (
                                                        <span className="text-xs text-gray-600 font-medium">{val}</span>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Mobile Card Layout */}
                        <div className="md:hidden space-y-4">
                            {comparisonFeatures.map((row) => (
                                <div key={row.feature} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">{row.feature}</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {row.values.map((val, ci) => (
                                            <div key={ci} className={`flex items-center justify-between px-3 py-2 rounded-lg ${ci === 0 ? "bg-blue-50/50" : "bg-gray-50"}`}>
                                                <span className={`text-xs font-medium ${ci === 0 ? "text-[#2563eb]" : "text-gray-600"}`}>{providerNames[ci]}</span>
                                                {val === "✓" ? (
                                                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-50 text-green-600">
                                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                    </span>
                                                ) : val === "✗" ? (
                                                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-50 text-red-400">
                                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                                                    </span>
                                                ) : (
                                                    <span className="text-xs text-gray-600 font-medium">{val}</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-600 mt-3 text-center">
                            Based on publicly available information. Last updated June 2026.
                        </p>
                    </div>
                </section>

                {/* How to Evaluate */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                How to evaluate virtual data room providers
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Six criteria that separate purpose-built VDR providers from generic file-sharing tools and legacy platforms.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {evaluationCriteria.map((criterion) => (
                                <div key={criterion.title} className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg hover:border-[#2563eb]/20 transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-3xl font-black text-blue-100">{criterion.number}</span>
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={criterion.icon} />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{criterion.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{criterion.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industry Recommendations */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Best VDR provider by industry
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Different transactions have different requirements. Here is our recommendation for each major use case.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            {industryRecommendations.map((item) => (
                                <div key={item.industry} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:border-[#2563eb]/20 hover:shadow-sm transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#2563eb] flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                            </svg>
                                        </div>
                                        <h3 className="text-base font-bold text-gray-900">{item.industry}</h3>
                                    </div>
                                    <p className="text-sm font-semibold text-[#2563eb] mb-2">Recommended: {item.recommended}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.reason}</p>
                                    {item.link && (
                                        <Link href={item.link} className="text-xs font-semibold text-[#2563eb] hover:underline inline-flex items-center gap-1">
                                            Learn more
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SpaceNexus Callout */}
                <section className="py-14 bg-[#f8f9fa] border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Recommended Provider
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Why deal teams choose SpaceNexus
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    SpaceNexus is the modern virtual data room provider built for the speed of today&apos;s deal market. AI-powered from the ground up, with transparent pricing and a setup experience that doesn&apos;t require a CSM or a week of onboarding.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "AI redaction and auto-categorization on every upload",
                                        "Structured Q&A with urgency tagging and full audit trail",
                                        "Real-time buyer engagement analytics and heatmaps",
                                        "SOC 2 Type II · ISO 27001 · SEC/FINRA ready",
                                        "Transparent pricing — no per-page fees, no lock-in",
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
                                        See SpaceNexus in Action
                                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </Link>
                                    <Link href="/competitors/vdr-alternatives" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                        Full Provider Comparison →
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
                                    <img
                                        src="/spacenexus/screenshots/vdr-dashboard.png"
                                        alt="SpaceNexus virtual data room dashboard"
                                        className="w-full h-auto"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about VDR providers
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
                        <p className="text-sm font-semibold text-gray-700 mb-4">Continue reading</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/competitors/vdr-alternatives" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Best VDR Providers 2026 — Full Comparison →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/competitors/datasite-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                SpaceNexus vs Datasite →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/competitors/intralinks-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                SpaceNexus vs Intralinks →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/solutions/mergers-and-acquisitions-vdr" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                M&A Due Diligence VDR →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Ready to see the leading VDR provider in action?
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
                            href="/best-data-room-for-startups"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">7 providers ranked.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Best data rooms for startups →</h3>
                        </Link>
                        <Link
                            href="/ma-data-room-providers"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Top providers for M&A.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A data room providers →</h3>
                        </Link>
                        <Link
                            href="/data-room-software"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Software platform comparison.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Data room software →</h3>
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
                <LastUpdated date="2026-08-01" />
            </div></div>
            </section>

</main>
        </>
    );
}
