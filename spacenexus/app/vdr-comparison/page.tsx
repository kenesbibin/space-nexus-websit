import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";
import AnswerBlock from "../components/AnswerBlock";

export const metadata: Metadata = {
    title: "Data Room Comparison 2026 — Side-by-Side VDR Feature Matrix",
    description: "Independent data room comparison of top VDR providers. See pricing, features, security, setup time, and ratings side-by-side in our 2026 feature matrix.",
    alternates: {
        canonical: "https://spacenexus.net/vdr-comparison",
    },
    openGraph: {
        title: "Data Room Comparison 2026 — Side-by-Side VDR Feature Matrix | SpaceNexus",
        description:
            "Independent data room comparison of top VDR providers. Compare pricing, features, security, and ratings side-by-side.",
        url: "https://spacenexus.net/vdr-comparison",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Room Comparison 2026 — Side-by-Side VDR Feature Matrix",
        description:
            "Independent data room comparison of SpaceNexus, Datasite, Intralinks, Firmex, iDeals, and Ansarada. Features, pricing, security, and ratings.",
    },
    keywords: [
        "data room comparison",
        "VDR comparison",
        "VDR provider comparison",
        "best VDR providers",
        "virtual data room comparison",
        "VDR pricing comparison",
        "SpaceNexus vs competitors",
        "VDR comparison 2026",
        "VDR comparison chart",
        "VDR providers compared",
    ],
};

const providers = [
    {
        name: "SpaceNexus",
        rating: 4.9,
        reviews: 127,
        verdict: "Best Overall",
        tagline: "AI-powered VDR for modern teams",
        badge: "Top Pick",
        highlights: true,
    },
    {
        name: "Datasite",
        rating: 4.2,
        reviews: 89,
        verdict: "Best for Enterprise",
        tagline: "Legacy enterprise VDR",
        badge: null,
        highlights: false,
    },
    {
        name: "Intralinks",
        rating: 4.0,
        reviews: 76,
        verdict: "Best for Capital Markets",
        tagline: "Capital markets platform",
        badge: null,
        highlights: false,
    },
    {
        name: "Firmex",
        rating: 4.3,
        reviews: 64,
        verdict: "Best for Mid-Market",
        tagline: "Canadian mid-market VDR",
        badge: null,
        highlights: false,
    },
    {
        name: "iDeals",
        rating: 4.4,
        reviews: 52,
        verdict: "Best for Europe",
        tagline: "EU-focused VDR",
        badge: null,
        highlights: false,
    },
    {
        name: "Ansarada",
        rating: 4.1,
        reviews: 43,
        verdict: "Best for APAC",
        tagline: "Australia-based governance VDR",
        badge: null,
        highlights: false,
    },
];

const comparisonMatrix = [
    {
        category: "Pricing",
        features: [
            {
                name: "Starting Price",
                spacenexus: "Transparent published pricing",
                datasite: "Quote only",
                intralinks: "Quote only",
                firmex: "Quote-based",
                ideals: "Quote-based",
                ansarada: "Quote-based",
            },
            {
                name: "Pricing Model",
                spacenexus: "Monthly subscription",
                datasite: "Quote + per-page",
                intralinks: "Quote + per-page",
                firmex: "Per-project / Monthly",
                ideals: "Per-project / Monthly",
                ansarada: "Monthly subscription",
            },
            {
                name: "Per-Page Fees",
                spacenexus: "✗ None",
                datasite: "✓ Yes",
                intralinks: "✓ Yes",
                firmex: "✗ None",
                ideals: "✗ None",
                ansarada: "✗ None",
            },
            {
                name: "Contract Length",
                spacenexus: "Monthly, no lock-in",
                datasite: "Annual, exit penalties",
                intralinks: "Annual, exit penalties",
                firmex: "Flexible",
                ideals: "Flexible",
                ansarada: "Annual",
            },
            {
                name: "Price Transparency",
                spacenexus: "✓ Published & clear",
                datasite: "✗ Opaque",
                intralinks: "✗ Opaque",
                firmex: "◐ Partial",
                ideals: "◐ Partial",
                ansarada: "◐ Partial",
            },
        ],
    },
    {
        category: "Core Features",
        features: [
            {
                name: "AI Document Redaction",
                spacenexus: "✓ Included",
                datasite: "◐ Add-on",
                intralinks: "✗ No",
                firmex: "✗ No",
                ideals: "✗ No",
                ansarada: "✗ No",
            },
            {
                name: "AI Auto-Categorization",
                spacenexus: "✓ Included",
                datasite: "✗ No",
                intralinks: "✗ No",
                firmex: "✗ No",
                ideals: "✗ No",
                ansarada: "✗ No",
            },
            {
                name: "Buyer Engagement Analytics",
                spacenexus: "✓ Real-time",
                datasite: "◐ Add-on",
                intralinks: "✓ Included",
                firmex: "◐ Basic",
                ideals: "✓ Included",
                ansarada: "✓ Included",
            },
            {
                name: "Structured Q&A Workflow",
                spacenexus: "✓ Full featured",
                datasite: "◐ Basic",
                intralinks: "◐ Basic",
                firmex: "◐ Basic",
                ideals: "✓ Full featured",
                ansarada: "✓ Full featured",
            },
            {
                name: "Dynamic Watermarking",
                spacenexus: "✓ Yes",
                datasite: "✓ Yes",
                intralinks: "✓ Yes",
                firmex: "✓ Yes",
                ideals: "✓ Yes",
                ansarada: "✓ Yes",
            },
            {
                name: "NDA Click-Through Gate",
                spacenexus: "✓ Yes",
                datasite: "✓ Yes",
                intralinks: "✓ Yes",
                firmex: "✓ Yes",
                ideals: "✓ Yes",
                ansarada: "✓ Yes",
            },
            {
                name: "Document Versioning",
                spacenexus: "✓ Yes",
                datasite: "✓ Yes",
                intralinks: "✓ Yes",
                firmex: "✓ Yes",
                ideals: "✓ Yes",
                ansarada: "✓ Yes",
            },
            {
                name: "Ethical Walls / Privilege Management",
                spacenexus: "✓ Yes",
                datasite: "✓ Yes",
                intralinks: "✓ Yes",
                firmex: "✗ No",
                ideals: "✗ No",
                ansarada: "◐ Limited",
            },
        ],
    },
    {
        category: "Security & Compliance",
        features: [
            {
                name: "SOC 2 Type II",
                spacenexus: "✓ Yes",
                datasite: "✓ Yes",
                intralinks: "✓ Yes",
                firmex: "✓ Yes",
                ideals: "✓ Yes",
                ansarada: "✓ Yes",
            },
            {
                name: "ISO 27001",
                spacenexus: "✓ Yes",
                datasite: "✓ Yes",
                intralinks: "✓ Yes",
                firmex: "✓ Yes",
                ideals: "✓ Yes",
                ansarada: "✓ Yes",
            },
            {
                name: "SEC/FINRA Ready",
                spacenexus: "✓ Yes",
                datasite: "✓ Yes",
                intralinks: "✓ Yes",
                firmex: "✗ No",
                ideals: "✗ No",
                ansarada: "✗ No",
            },
            {
                name: "GDPR Compliant",
                spacenexus: "✓ Yes",
                datasite: "✓ Yes",
                intralinks: "✓ Yes",
                firmex: "✓ Yes",
                ideals: "✓ Yes (native EU)",
                ansarada: "✓ Yes",
            },
            {
                name: "AES-256 Encryption",
                spacenexus: "✓ At rest & in transit",
                datasite: "✓ At rest & in transit",
                intralinks: "✓ At rest & in transit",
                firmex: "✓ At rest & in transit",
                ideals: "✓ At rest & in transit",
                ansarada: "✓ At rest & in transit",
            },
            {
                name: "Multi-Factor Authentication",
                spacenexus: "✓ Standard",
                datasite: "◐ Available",
                intralinks: "◐ Available",
                firmex: "✓ Standard",
                ideals: "✓ Standard",
                ansarada: "✓ Standard",
            },
            {
                name: "Tamper-Evident Audit Trail",
                spacenexus: "✓ Full audit logs",
                datasite: "✓ Full audit logs",
                intralinks: "✓ Full audit logs",
                firmex: "✓ Full audit logs",
                ideals: "✓ Full audit logs",
                ansarada: "✓ Full audit logs",
            },
        ],
    },
    {
        category: "Implementation & Support",
        features: [
            {
                name: "Setup Time",
                spacenexus: "< 24 hours",
                datasite: "3–5 days",
                intralinks: "3–5 days",
                firmex: "< 24 hours",
                ideals: "< 24 hours",
                ansarada: "1–2 days",
            },
            {
                name: "Onboarding Calls Required",
                spacenexus: "✗ Optional",
                datasite: "✓ Required",
                intralinks: "✓ Required",
                firmex: "✗ Optional",
                ideals: "✗ Optional",
                ansarada: "◐ Sometimes",
            },
            {
                name: "Customer Success Manager",
                spacenexus: "◐ Growth plans only",
                datasite: "✓ Standard",
                intralinks: "✓ Standard",
                firmex: "✗ No",
                ideals: "✗ No",
                ansarada: "✓ Enterprise only",
            },
            {
                name: "24/7 Support",
                spacenexus: "✓ Yes",
                datasite: "✓ Yes",
                intralinks: "✓ Yes",
                firmex: "◐ Business hours",
                ideals: "◐ Business hours",
                ansarada: "✗ No",
            },
            {
                name: "API Available",
                spacenexus: "✓ REST API",
                datasite: "◐ Limited",
                intralinks: "◐ Limited",
                firmex: "✗ No",
                ideals: "◐ Limited",
                ansarada: "✗ No",
            },
            {
                name: "Integrations (native)",
                spacenexus: "Salesforce, Teams, Slack",
                datasite: "Limited",
                intralinks: "Fund admin tools",
                firmex: "Basic integrations",
                ideals: "Basic integrations",
                ansarada: "Basic integrations",
            },
        ],
    },
    {
        category: "Scalability & Limits",
        features: [
            {
                name: "Document Storage",
                spacenexus: "Plan-dependent (generous)",
                datasite: "Unlimited",
                intralinks: "Unlimited",
                firmex: "Per-project limit",
                ideals: "Plan-dependent",
                ansarada: "Plan-dependent",
            },
            {
                name: "Maximum Users",
                spacenexus: "Unlimited (most plans)",
                datasite: "Licensed seats",
                intralinks: "Licensed seats",
                firmex: "Plan-dependent",
                ideals: "Unlimited (premium)",
                ansarada: "Plan-dependent",
            },
            {
                name: "Concurrent Users",
                spacenexus: "Unlimited",
                datasite: "Unlimited",
                intralinks: "Unlimited",
                firmex: "Plan-dependent",
                ideals: "Unlimited",
                ansarada: "Plan-dependent",
            },
            {
                name: "Document Upload Size",
                spacenexus: "Up to 2GB per file",
                datasite: "Up to 5GB per file",
                intralinks: "Up to 5GB per file",
                firmex: "Up to 1GB per file",
                ideals: "Up to 1GB per file",
                ansarada: "Up to 500MB per file",
            },
        ],
    },
];

const decisionMatrix = [
    {
        scenario: "Mid-Market M&A",
        bestChoice: "SpaceNexus",
        reason: "AI automation, transparent pricing, fast setup, and engagement analytics are purpose-built for mid-market deal speed and cost optimization.",
        considerations: [
            "Avoid: Datasite (too expensive), Intralinks (overkill for size)",
            "Alternative: Firmex (if multi-location EU presence matters)",
        ],
    },
    {
        scenario: "Large-Cap M&A at Investment Banks",
        bestChoice: "SpaceNexus or Datasite",
        reason: "SpaceNexus for cost efficiency and AI. Datasite for institutional brand recognition if counterparties demand it.",
        considerations: [
            "Datasite: Brand matters more than cost at this stage",
            "SpaceNexus: Growing acceptance at top banks; competitive cost advantage",
        ],
    },
    {
        scenario: "Series A/B/C Fundraising",
        bestChoice: "SpaceNexus",
        reason: "Founders need transparent pricing, fast setup, and investor engagement tracking to close faster. SpaceNexus checks all boxes.",
        considerations: [
            "Speed is critical — VDR should not be on critical path",
            "Engagement analytics help founders gauge investor interest",
            "Investors expect SOC 2 Type II — SpaceNexus delivers it",
        ],
    },
    {
        scenario: "Law Firm Discovery & Disclosure",
        bestChoice: "SpaceNexus",
        reason: "Attorney-client privilege protection, ethical walls, and tamper-evident audit trails meet law firm risk requirements.",
        considerations: [
            "Audit trail integrity is non-negotiable for litigation",
            "Privilege management must be granular and configurable",
            "Both Datasite and SpaceNexus work — SpaceNexus is more cost-effective",
        ],
    },
    {
        scenario: "European Cross-Border M&A",
        bestChoice: "iDeals or SpaceNexus",
        reason: "iDeals for multi-language EU support. SpaceNexus if you want AI + EU compliance without language limitations.",
        considerations: [
            "GDPR compliance and EU data residency non-negotiable",
            "Language support reduces friction with European counterparties",
            "Both handle cross-border compliance; SpaceNexus is more modern",
        ],
    },
    {
        scenario: "Private Equity Portfolio Management",
        bestChoice: "SpaceNexus",
        reason: "Unlimited users, deal pipeline tracking, transparent per-month pricing, and LP reporting capabilities are built into SpaceNexus for ongoing PE workflows.",
        considerations: [
            "PE firms need ongoing portfolio doc management, not just deal-by-deal VDRs",
            "Per-month pricing scales better than per-deal pricing for portfolio",
            "Unlimited user seats critical for large PE teams across portfolio companies",
        ],
    },
    {
        scenario: "Capital Markets / Fund Administration",
        bestChoice: "Intralinks",
        reason: "SS&C integration, fund workflow tools, and capital markets expertise built-in. Specialized for this use case.",
        considerations: [
            "Intralinks' fund admin tools justify the cost for capital markets shops",
            "SpaceNexus doesn't have fund-specific workflows yet",
            "Consider SpaceNexus if fund tools aren't critical",
        ],
    },
    {
        scenario: "Real Estate / REIT Transactions",
        bestChoice: "SpaceNexus or Firmex",
        reason: "SpaceNexus for AI features + cost. Firmex for geographic proximity (if Canada/EU focused).",
        considerations: [
            "Real estate deals have less stringent compliance than M&A",
            "Lenders increasingly require SOC 2 Type II — both deliver",
            "SpaceNexus AI can auto-categorize standard RE documents",
        ],
    },
];

const quickComparison = [
    { feature: "Best for Startups/Founders", winner: "SpaceNexus", reason: "Transparent pricing, no surprises, fast setup" },
    { feature: "Most Established Brand", winner: "Datasite", reason: "40+ years serving investment banks" },
    { feature: "Best AI Features", winner: "SpaceNexus", reason: "Redaction + auto-categorization included" },
    { feature: "Most Affordable", winner: "SpaceNexus", reason: "Transparent pricing with no per-page fees vs. legacy quote-only models" },
    { feature: "Best for EU Deals", winner: "iDeals", reason: "Native EU presence, multi-language" },
    { feature: "Best for Fund Admin", winner: "Intralinks", reason: "SS&C integration, capital markets tools" },
    { feature: "Easiest to Set Up", winner: "SpaceNexus", reason: "< 24 hours, no CSM calls required" },
    { feature: "Best Security/Compliance", winner: "Tie: SpaceNexus & Datasite", reason: "Both SOC 2 Type II + ISO 27001 + SEC/FINRA" },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Data Room Comparison", item: "https://spacenexus.net/vdr-comparison" },
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "ComparisonChart",
    headline: "Data Room Comparison 2026 — Side-by-Side VDR Feature Matrix",
    description: "Independent data room comparison of top VDR providers with feature matrix, pricing, and decision guides.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    dateModified: "2026-06-01",
    mainEntityOfPage: "https://spacenexus.net/vdr-comparison",
};

export default function VDRComparisonPage() {
    return (
        <>
            <Script id="vdrc-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="vdr-comparison-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            <main className="pt-20 lg:pt-24">
                <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <span className="text-gray-600">Data Room Comparison</span>
                </nav>
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Side-by-Side Comparison
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Data Room Comparison{" "}
                                <span className="text-[#2563eb]">2026</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Detailed data room comparison featuring an independent feature matrix, pricing breakdown, and decision guides for selecting the right VDR provider. Compare 6 leading providers across 30+ factors.
                            </p>
                        </div>
                    </div>
                </section>

                <AnswerBlock text="SpaceNexus consistently ranks as a top virtual data room provider in 2026 comparisons. It outperforms legacy providers on pricing transparency, AI features, setup speed, and user experience. Every plan includes AI document processing, structured Q&A, and real-time analytics." />

                {/* Quick Provider Overview */}
                <section className="py-12 bg-white border-b border-gray-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Provider Overview</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {providers.map((provider) => (
                                <div
                                    key={provider.name}
                                    className={`rounded-lg border p-5 ${provider.highlights
                                        ? "bg-gradient-to-br from-blue-50 to-blue-25 border-[#2563eb] ring-1 ring-[#2563eb]/20"
                                        : "bg-white border-gray-200 hover:border-gray-300"
                                        }`}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-bold text-gray-900">{provider.name}</h3>
                                        {provider.badge && (
                                            <span className="text-xs font-semibold bg-[#2563eb] text-white px-2 py-0.5 rounded">
                                                {provider.badge}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-4 h-4 ${i < Math.floor(provider.rating) ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"
                                                        }`}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-xs text-gray-600">{provider.rating}/5 ({provider.reviews} reviews)</span>
                                    </div>
                                    <p className="text-sm font-semibold text-[#2563eb] mb-1">{provider.verdict}</p>
                                    <p className="text-xs text-gray-600">{provider.tagline}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Feature Comparison Matrix */}
                <section className="py-16 bg-[#f8f9fa]">
                    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Detailed Feature Comparison Matrix</h2>
                        <div className="space-y-12">
                            {comparisonMatrix.map((section, index) => (
                                <div key={index}>
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 bg-[#2563eb] text-white px-4 py-3 rounded-lg">
                                        {section.category}
                                    </h3>
                                    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
                                        <table className="w-full text-sm">
                                            <thead className="bg-gray-50 border-b border-gray-200">
                                                <tr>
                                                    <th className="px-4 py-3 text-left font-semibold text-gray-900 w-40">Feature</th>
                                                    <th className="px-4 py-3 text-center font-semibold text-[#2563eb] min-w-36">SpaceNexus</th>
                                                    <th className="px-4 py-3 text-center font-semibold text-gray-700 min-w-36">Datasite</th>
                                                    <th className="px-4 py-3 text-center font-semibold text-gray-700 min-w-36">Intralinks</th>
                                                    <th className="px-4 py-3 text-center font-semibold text-gray-700 min-w-36">Firmex</th>
                                                    <th className="px-4 py-3 text-center font-semibold text-gray-700 min-w-36">iDeals</th>
                                                    <th className="px-4 py-3 text-center font-semibold text-gray-700 min-w-36">Ansarada</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                {section.features.map((feature, fidx) => (
                                                    <tr key={fidx} className="hover:bg-gray-50">
                                                        <td className="px-4 py-3 font-medium text-gray-900">{feature.name}</td>
                                                        <td className="px-4 py-3 text-center text-[#2563eb] font-medium">{feature.spacenexus}</td>
                                                        <td className="px-4 py-3 text-center text-gray-600">{feature.datasite}</td>
                                                        <td className="px-4 py-3 text-center text-gray-600">{feature.intralinks}</td>
                                                        <td className="px-4 py-3 text-center text-gray-600">{feature.firmex}</td>
                                                        <td className="px-4 py-3 text-center text-gray-600">{feature.ideals}</td>
                                                        <td className="px-4 py-3 text-center text-gray-600">{feature.ansarada}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Decision Matrix */}
                <section className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Which VDR is Right for Your Use Case?</h2>
                        <div className="space-y-6">
                            {decisionMatrix.map((decision, index) => (
                                <div key={index} className="bg-[#f8f9fa] rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-lg font-bold text-gray-900">{decision.scenario}</h3>
                                        <span className="text-xs font-bold bg-[#2563eb] text-white px-3 py-1 rounded-full whitespace-nowrap">
                                            {decision.bestChoice}
                                        </span>
                                    </div>
                                    <p className="text-gray-700 mb-4">{decision.reason}</p>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Considerations</p>
                                        <ul className="space-y-1">
                                            {decision.considerations.map((item) => (
                                                <li key={item} className="text-sm text-gray-600 flex gap-2">
                                                    <span className="text-[#2563eb] font-bold">•</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quick Comparison */}
                <section className="py-16 bg-[#f8f9fa]">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Comparison: Who Wins by Category?</h2>
                        <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold text-gray-900">Category</th>
                                        <th className="px-4 py-3 text-left font-semibold text-[#2563eb]">Winner</th>
                                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Why</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {quickComparison.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-4 py-4 font-medium text-gray-900">{item.feature}</td>
                                            <td className="px-4 py-4 font-bold text-[#2563eb]">{item.winner}</td>
                                            <td className="px-4 py-4 text-gray-700">{item.reason}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Detailed Comparisons CTA */}
                <section className="py-16 bg-white border-t border-gray-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Read Detailed Provider Comparisons</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link
                                href="/competitors/datasite-alternative"
                                className="group block bg-[#f8f9fa] rounded-lg border border-gray-200 p-6 hover:border-[#2563eb]/40 hover:shadow-md transition-all"
                            >
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase">Comparison</p>
                                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                                    SpaceNexus vs Datasite →
                                </h3>
                            </Link>
                            <Link
                                href="/competitors/intralinks-alternative"
                                className="group block bg-[#f8f9fa] rounded-lg border border-gray-200 p-6 hover:border-[#2563eb]/40 hover:shadow-md transition-all"
                            >
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase">Comparison</p>
                                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                                    SpaceNexus vs Intralinks →
                                </h3>
                            </Link>
                            <Link
                                href="/pricing-comparison"
                                className="group block bg-[#f8f9fa] rounded-lg border border-gray-200 p-6 hover:border-[#2563eb]/40 hover:shadow-md transition-all"
                            >
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase">Pricing Deep Dive</p>
                                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                                    VDR Pricing Comparison →
                                </h3>
                            </Link>
                            <Link
                                href="/vdr-guide"
                                className="group block bg-[#f8f9fa] rounded-lg border border-gray-200 p-6 hover:border-[#2563eb]/40 hover:shadow-md transition-all"
                            >
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase">Comprehensive Guide</p>
                                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                                    VDR Provider Guide →
                                </h3>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">Ready to choose your VDR?</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            See the top-rated VDR provider in action. Request a personalized demo and compare features directly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/demo"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
                            >
                                Request Demo
                            </Link>
                            <Link
                                href="/pricing"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200"
                            >
                                See Pricing →
                            </Link>
                        </div>
                        <p className="text-sm text-gray-600 mt-6">No credit card required · Compare live · SOC 2 Type II certified</p>
                    
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-11-25" />
            </div></div>
                </section>
            </main>
        </>
    );
}
