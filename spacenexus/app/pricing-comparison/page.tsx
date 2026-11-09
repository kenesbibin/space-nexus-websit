import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "VDR Pricing Comparison 2026 | SpaceNexus",
    description: "Compare VDR pricing across providers. Transparent flat-rate vs quote-only enterprise contracts and per-page fees.",
    alternates: {
        canonical: "https://spacenexus.net/pricing-comparison",
    },
    openGraph: {
        title: "VDR Pricing Comparison 2026 | SpaceNexus",
        description:
            "Compare VDR pricing across providers. Transparent flat-rate vs quote-only enterprise co...",
        url: "https://spacenexus.net/pricing-comparison",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "SpaceNexus Pricing vs Competitors 2026 — VDR Cost Comparison",
        description:
            "Independent pricing comparison of SpaceNexus vs Datasite, Intralinks, Firmex, iDeals, and other VDR providers.",
    },
    keywords: [
        "SpaceNexus pricing",
        "VDR pricing comparison",
        "data room pricing comparison",
        "SpaceNexus vs Datasite pricing",
        "SpaceNexus vs Intralinks pricing",
        "VDR cost comparison",
        "data room cost",
        "virtual data room pricing",
        "transparent VDR pricing",
        "flat-rate data room pricing",
        "no per-page fees VDR",
        "AI data room pricing",
    ],
};

type Competitor = {
    rank: number;
    name: string;
    pricingModel: string;
    costClarity: "Transparent" | "Partial" | "Opaque";
    perPageFees: "None" | "Common" | "Unknown";
    aiIncluded: "Yes" | "Add-on" | "No";
    setupTime: string;
    keyDifferentiator: string;
    bestFor: string;
};

const competitors: Competitor[] = [
    {
        rank: 1,
        name: "SpaceNexus",
        pricingModel: "Transparent flat-rate monthly subscription",
        costClarity: "Transparent",
        perPageFees: "None",
        aiIncluded: "Yes",
        setupTime: "Under 24 hours",
        keyDifferentiator: "AI redaction, auto-categorization, and engagement analytics included on every plan",
        bestFor: "Mid-market M&A, fundraising, and any team tired of quote-only pricing and per-page fees",
    },
    {
        rank: 2,
        name: "Datasite",
        pricingModel: "Quote-only enterprise contracts",
        costClarity: "Opaque",
        perPageFees: "Common",
        aiIncluded: "Add-on",
        setupTime: "Multi-day onboarding",
        keyDifferentiator: "Recognized brand at bulge-bracket banks globally",
        bestFor: "Large-cap M&A where brand recognition is the primary decision factor",
    },
    {
        rank: 3,
        name: "Intralinks",
        pricingModel: "Quote-only enterprise contracts",
        costClarity: "Opaque",
        perPageFees: "Common",
        aiIncluded: "No",
        setupTime: "Multi-day onboarding",
        keyDifferentiator: "Global data residency and long-standing regulatory credibility",
        bestFor: "Cross-border M&A with strict data residency requirements",
    },
    {
        rank: 4,
        name: "Firmex",
        pricingModel: "Per-project or subscription",
        costClarity: "Partial",
        perPageFees: "None",
        aiIncluded: "No",
        setupTime: "1–2 days",
        keyDifferentiator: "Reasonable mid-market pricing with clean interface",
        bestFor: "Mid-market M&A and legal advisory firms that want predictable costs",
    },
    {
        rank: 5,
        name: "iDeals",
        pricingModel: "Per-project or subscription",
        costClarity: "Partial",
        perPageFees: "None",
        aiIncluded: "No",
        setupTime: "1–3 days",
        keyDifferentiator: "Multi-language support for European deals",
        bestFor: "European cross-border M&A with multi-language needs",
    },
    {
        rank: 6,
        name: "DocSend",
        pricingModel: "Entry-level subscription",
        costClarity: "Transparent",
        perPageFees: "None",
        aiIncluded: "No",
        setupTime: "Under 1 hour",
        keyDifferentiator: "Affordable entry-level pricing for pitch deck sharing",
        bestFor: "Pre-seed startups sharing pitch decks with early investors",
    },
    {
        rank: 7,
        name: "Email + Cloud Storage",
        pricingModel: "Free or per-user",
        costClarity: "Transparent",
        perPageFees: "None",
        aiIncluded: "No",
        setupTime: "Instant",
        keyDifferentiator: "Free or very cheap, most teams already know how to use it",
        bestFor: "Internal team collaboration only — never for external counterparty transactions",
    },
];

const pricingDimensions = [
    {
        dimension: "Pricing transparency",
        spacenexus: "Published flat-rate monthly pricing",
        legacy: "Quote-only contracts, pricing varies by deal",
        midmarket: "Per-project pricing with annual options",
        cheap: "Free or transparent subscription",
        whyItMatters:
            "Quote-only enterprise contracts make budgeting impossible. You cannot compare costs across providers, and you cannot forecast what a single deal will cost until the invoice arrives — often 30-60 days after close.",
    },
    {
        dimension: "Per-page upload fees",
        spacenexus: "None — unlimited pages on every plan",
        legacy: "Common — can 5–10x your bill mid-deal",
        midmarket: "None on most plans",
        cheap: "None on standard plans",
        whyItMatters:
            "Per-page fees are the most punishing cost model in the VDR industry. A mid-sized M&A deal with 5,000 pages can generate 5,000+ page-fee events — pushing your final bill 5-10x the original quote. Per-page fees also create perverse incentives to upload fewer documents, which compromises diligence quality.",
    },
    {
        dimension: "AI features included",
        spacenexus: "AI redaction, auto-categorization, engagement analytics — all included",
        legacy: "Sold as premium add-ons ($$$)",
        midmarket: "Basic or none",
        cheap: "None",
        whyItMatters:
            "AI is now table-stakes for transaction-grade data rooms. When legacy VDRs sell AI as an add-on, they are charging you twice: once for the platform, and again for the automation that the platform is supposed to provide. Modern AI-powered platforms include AI in the base price because it is the platform, not an upgrade.",
    },
    {
        dimension: "Setup time",
        spacenexus: "Under 24 hours, self-serve",
        legacy: "Multi-day with CSM-led onboarding",
        midmarket: "1–3 days",
        cheap: "Instant to under 1 hour",
        whyItMatters:
            "In fast-moving transactions, setup time is a material factor. A multi-day CSM-led onboarding process can delay deal timelines by a week or more. Modern platforms are live in hours, not days.",
    },
    {
        dimension: "Per-user licensing",
        spacenexus: "Unlimited users on most plans",
        legacy: "Per-seat licensing common",
        midmarket: "Per-user with caps",
        cheap: "Per-user with caps",
        whyItMatters:
            "Per-user licensing creates barriers to inviting the right people to the data room. Counsel teams, expert advisors, and junior deal members may be excluded to save seats — which compromises diligence quality and creates security gaps (people share logins to bypass limits).",
    },
    {
        dimension: "Setup and onboarding fees",
        spacenexus: "None",
        legacy: "Common, often material",
        midmarket: "Sometimes",
        cheap: "None",
        whyItMatters:
            "One-time setup fees can add thousands to a single deal. For organizations running multiple deals per year, these fees compound. Look for platforms with zero setup fees and self-serve onboarding.",
    },
    {
        dimension: "Contract length",
        spacenexus: "Monthly, no lock-in",
        legacy: "Annual contracts standard",
        midmarket: "Monthly or annual with discounts",
        cheap: "Monthly available",
        whyItMatters:
            "Annual lock-in contracts are risky for organizations with variable deal flow. Monthly contracts let you scale up for active deals and scale down in quiet periods — paying only for what you use.",
    },
    {
        dimension: "Overage charges",
        spacenexus: "None — predictable monthly cost",
        legacy: "Common — storage, user, and feature overages",
        midmarket: "Sometimes",
        cheap: "Sometimes (per-seat, per-storage)",
        whyItMatters:
            "Overage charges are the silent killer of VDR budgets. Storage overages, additional user fees, and per-feature charges can inflate your final bill 2-3x the original quote. Look for platforms with predictable, all-inclusive pricing.",
    },
];

const hiddenCosts = [
    {
        cost: "Per-page upload fees",
        description:
            "Legacy VDRs charge per page uploaded or per page viewed. A mid-sized M&A deal with thousands of pages can generate tens of thousands in page-fee events. The per-page fee is often hidden in the contract and not disclosed until the invoice.",
    },
    {
        cost: "Per-user licensing overages",
        description:
            "When deal teams exceed the per-user cap, legacy VDRs charge per additional user — often at premium rates. A deal that needs 25 users but only budgeted for 20 can add material costs mid-process.",
    },
    {
        cost: "AI feature add-ons",
        description:
            "Legacy VDRs charge separately for AI redaction, auto-categorization, translation, and analytics. These add-ons can double or triple the platform cost — and they are often sold mid-deal when the customer realizes they need them.",
    },
    {
        cost: "Storage overages",
        description:
            "When document volume exceeds the storage cap, legacy VDRs charge per-GB overage fees. A large M&A deal with extensive due diligence materials can easily exceed standard storage allocations.",
    },
    {
        cost: "Setup and onboarding fees",
        description:
            "Some legacy VDRs charge one-time setup fees ranging from hundreds to thousands of dollars per deal. These fees are often non-refundable and applied to the first invoice.",
    },
    {
        cost: "Premium support charges",
        description:
            "Phone support, dedicated CSM, and priority response are often premium add-ons at legacy VDRs. Email-only support is the default — which can be a problem during time-sensitive deals.",
    },
    {
        cost: "Cancellation fees",
        description:
            "Annual contracts at legacy VDRs often include early termination fees. If a deal closes early or a customer wants to switch providers, they may face material cancellation penalties.",
    },
    {
        cost: "Integration fees",
        description:
            "Connecting the VDR to e-signature, calendaring, CRM, or practice management systems may require professional services fees at legacy VDRs. These fees are often quoted separately after the platform contract is signed.",
    },
];

const totalCostComparison = [
    {
        scenario: "Mid-market M&A deal (5,000 pages, 15 users, 8 weeks)",
        spacenexus: "Single transparent monthly fee, no overages",
        legacy: "Per-page fees can multiply the quote 5-10x",
        midmarket: "Per-project fee with annual discount available",
        cheap: "N/A — not designed for M&A transactions",
    },
    {
        scenario: "Fundraising round (Series A, 2,000 pages, 25 users, 6 weeks)",
        spacenexus: "Single transparent monthly fee, unlimited users",
        legacy: "Quote-only — typically premium pricing even for short engagements",
        midmarket: "Per-project fee, reasonable for fundraising scale",
        cheap: "Entry-level subscription, works for pre-seed only",
    },
    {
        scenario: "Multi-deal annual usage (10 deals per year)",
        spacenexus: "Monthly subscription scales with usage, no annual commitment",
        legacy: "Annual enterprise contract with volume discounts",
        midmarket: "Annual subscription with significant discount",
        cheap: "Annual subscription with usage caps",
    },
    {
        scenario: "First-time founder with no fundraising experience",
        spacenexus: "Self-serve setup, AI guides the process",
        legacy: "Not designed for first-time founders",
        midmarket: "Requires implementation support",
        cheap: "Simple but limited in functionality",
    },
    {
        scenario: "Stealth-mode fundraising with maximum confidentiality",
        spacenexus: "NDA click-through, watermarking, granular permissions",
        legacy: "Quote-only — premium pricing for stealth",
        midmarket: "Available with proper configuration",
        cheap: "Not designed for confidential fundraising",
    },
];

const faqItems = [
    {
        question: "How does SpaceNexus pricing compare to Datasite and Intralinks?",
        answer:
            "SpaceNexus uses transparent flat-rate monthly pricing with no per-page fees, no setup fees, and no AI add-on charges. Datasite and Intralinks use quote-only enterprise contracts that typically include per-page upload fees, AI feature add-ons, and annual commitments. For most mid-market M&A and fundraising transactions, SpaceNexus delivers the same security and AI capabilities at a fraction of the total cost — with no surprise overages.",
    },
    {
        question: "What are the hidden costs in VDR pricing?",
        answer:
            "The most common hidden costs in VDR pricing are: (1) per-page upload fees that can multiply your bill 5-10x; (2) per-user licensing overages when deal teams exceed caps; (3) AI feature add-ons sold mid-deal; (4) storage overages; (5) one-time setup and onboarding fees; (6) premium support charges; (7) early termination fees on annual contracts; and (8) integration fees. SpaceNexus includes all of these in the base price.",
    },
    {
        question: "Are per-page fees common in the VDR industry?",
        answer:
            "Per-page fees are common at legacy enterprise VDRs (Datasite, Intralinks) and can be a material cost driver. A mid-sized M&A deal with 5,000 pages can generate tens of thousands of dollars in page-fee events. Modern AI-powered platforms like SpaceNexus, Firmex, and iDeals have eliminated per-page fees in favor of transparent flat-rate or per-project pricing.",
    },
    {
        question: "Do legacy VDRs include AI features in the base price?",
        answer:
            "No. Legacy enterprise VDRs (Datasite, Intralinks) typically sell AI features — redaction, auto-categorization, translation, analytics — as premium add-ons. These AI add-ons can double or triple the platform cost. Modern AI-powered platforms like SpaceNexus include AI features in the base price because AI is the platform, not an upgrade.",
    },
    {
        question: "What is the most expensive VDR?",
        answer:
            "The most expensive VDRs are the legacy enterprise providers (Datasite, Intralinks) that charge quote-only pricing with per-page fees, AI add-ons, and annual commitments. Total cost for a single mid-market M&A deal can run into the tens of thousands of dollars. Mid-market platforms (Firmex, iDeals, SpaceNexus) offer transparent pricing at a fraction of the enterprise cost.",
    },
    {
        question: "What is the cheapest VDR?",
        answer:
            "The cheapest VDR options are consumer cloud storage platforms (Google Drive, Dropbox) and entry-level services (DocSend for pitch decks). However, these platforms lack the security features, compliance certifications, and transaction-specific workflows required for M&A and institutional fundraising. The best value for mid-market transactions is a transparent flat-rate platform like SpaceNexus that includes AI features, unlimited users, and no per-page fees.",
    },
    {
        question: "Is SpaceNexus cheaper than legacy VDRs?",
        answer:
            "For most mid-market M&A and fundraising transactions, SpaceNexus is significantly cheaper than legacy VDRs in total cost of ownership. Transparent flat-rate monthly pricing with no per-page fees, no setup fees, and no AI add-ons delivers the same security and AI capabilities at a fraction of the total cost. The exact comparison depends on deal size, duration, and team — but SpaceNexus customers consistently report 50-80% savings vs. legacy enterprise VDRs.",
    },
    {
        question: "Does SpaceNexus charge per-page fees?",
        answer:
            "No. SpaceNexus has no per-page fees on any plan. Upload unlimited pages, store unlimited documents, and invite unlimited users. The flat-rate monthly pricing is published publicly and includes AI features, structured Q&A, real-time engagement analytics, and SOC 2 Type II security.",
    },
    {
        question: "How much does a VDR cost for a Series A round?",
        answer:
            "For a typical Series A round with 2,000 pages and 25 users over 6 weeks, the cost varies dramatically by provider. Legacy enterprise VDRs charge quote-only pricing that can run into the tens of thousands. Mid-market platforms charge per-project fees that are typically a fraction of enterprise cost. SpaceNexus uses transparent flat-rate monthly pricing that is published publicly and includes all AI features with no per-page fees.",
    },
    {
        question: "Why are legacy VDRs so expensive?",
        answer:
            "Legacy VDRs are expensive because of their enterprise cost structure: large customer success teams, complex implementations, per-page fees, AI add-ons, and annual contract minimums. These costs make sense for bulge-bracket M&A where deal values justify the spend, but they are disproportionate for mid-market M&A, fundraising, and routine transactions. Modern AI-powered platforms like SpaceNexus deliver the same security at a fraction of the cost by automating setup, eliminating per-page fees, and including AI in the base price.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SpaceNexus Pricing vs Competitors 2026 — VDR Cost Comparison",
    description:
        "Independent pricing comparison of SpaceNexus vs Datasite, Intralinks, Firmex, iDeals, and other VDR providers. Transparent flat-rate pricing vs quote-only enterprise contracts.",
    author: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    publisher: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
    mainEntityOfPage: "https://spacenexus.net/pricing-comparison",
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
        { "@type": "ListItem", position: 2, name: "Pricing Comparison", item: "https://spacenexus.net/pricing-comparison" },
    ],
};

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "VDR Pricing Comparison 2026",
    description: "Independent pricing comparison of top virtual data room providers including SpaceNexus, Datasite, Intralinks, Firmex, iDeals, and DocSend.",
    numberOfItems: competitors.length,
    itemListElement: competitors.map((c) => ({
        "@type": "ListItem",
        position: c.rank,
        item: {
            "@type": "SoftwareApplication",
            name: c.name,
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Virtual Data Room",
            url: "https://spacenexus.net/pricing-comparison",
            description: c.keyDifferentiator,
            offers: {
                "@type": "Offer",
                price: c.costClarity === "Transparent" ? "See pricing page" : "Contact for pricing",
                priceCurrency: "USD",
                description: c.pricingModel,
            },
        },
    })),
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

export default function PricingComparisonPage() {
    return (
        <>
            <Script id="pc-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="pc-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="pc-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="pc-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

            <main className="pt-20 lg:pt-24">

                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Pricing Comparison</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                2026 Independent Comparison
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                SpaceNexus Pricing{" "}
                                <span className="text-[#2563eb]">vs Competitors</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                An honest, side-by-side pricing comparison of SpaceNexus vs Datasite, Intralinks, Firmex, iDeals, and other virtual data room providers. Transparent flat-rate pricing vs quote-only enterprise contracts, per-page fees, and hidden costs.
                            </p>
                            <p className="text-sm text-gray-600 mb-10">
                                14-minute read &nbsp;·&nbsp; Last updated: June 25, 2026 &nbsp;·&nbsp; Based on publicly available pricing information
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#competitors" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    See the Comparison
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </a>
                                <a href="#hidden-costs" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    Hidden Costs to Watch
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Summary */}
                <section className="py-12 bg-white border-b border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 lg:p-8">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">TL;DR · The Bottom Line</p>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">The honest comparison</h2>
                            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                                <p>
                                    <strong>SpaceNexus is the only major VDR provider that publishes transparent flat-rate monthly pricing</strong> — with no per-page fees, no setup fees, no AI add-ons, and no annual lock-in. Every plan includes AI redaction, auto-categorization, engagement analytics, and SOC 2 Type II security.
                                </p>
                                <p>
                                    <strong>Legacy enterprise VDRs (Datasite, Intralinks) use quote-only contracts</strong> that can include per-page fees, AI add-ons, setup charges, and annual commitments. For most mid-market M&A and fundraising, these contracts cost significantly more than SpaceNexus.
                                </p>
                                <p>
                                    <strong>Mid-market platforms (Firmex, iDeals) use per-project pricing</strong> that is more transparent than legacy VDRs but does not include AI features. They work for predictable M&A workflows but lack the modern AI automation that SpaceNexus provides.
                                </p>
                                <p>
                                    <strong>The cheapest options (DocSend, Google Drive, email)</strong> are affordable but lack the security features, compliance certifications, and transaction-specific workflows required for M&A and institutional fundraising. They work for pre-seed pitch decks and internal collaboration — but not for transactions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Competitor Comparison */}
                <section id="competitors" className="py-16 lg:py-20 bg-white scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">The Comparison</p>
                            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">7 VDR providers compared</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Each provider evaluated on pricing model, cost transparency, per-page fees, AI features, setup time, and best-fit use case.
                            </p>
                        </div>
                        <div className="space-y-5">
                            {competitors.map((c) => (
                                <article key={c.name} className={`bg-white rounded-2xl border p-6 lg:p-7 shadow-sm ${c.rank === 1 ? "border-[#2563eb] ring-2 ring-[#2563eb]/10" : "border-gray-200"}`}>
                                    <div className="flex flex-col lg:flex-row lg:items-start gap-5">
                                        <div className="shrink-0 lg:w-16">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black ${c.rank === 1 ? "bg-[#2563eb] text-white" : "bg-gray-100 text-gray-700"}`}>
                                                #{c.rank}
                                            </div>
                                        </div>
                                        <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-1">{c.name}</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">{c.bestFor}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1">Pricing Model</p>
                                                <p className="text-sm text-gray-700">{c.pricingModel}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1">Cost Clarity</p>
                                                <p className={`text-sm font-semibold ${c.costClarity === "Transparent" ? "text-green-700" : c.costClarity === "Partial" ? "text-amber-700" : "text-red-600"}`}>
                                                    {c.costClarity}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1">Per-Page Fees</p>
                                                <p className={`text-sm font-semibold ${c.perPageFees === "None" ? "text-green-700" : c.perPageFees === "Common" ? "text-red-600" : "text-amber-700"}`}>
                                                    {c.perPageFees}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <p className="text-xs text-gray-600"><span className="font-semibold text-gray-700">AI Features:</span> {c.aiIncluded} &nbsp;·&nbsp; <span className="font-semibold text-gray-700">Setup:</span> {c.setupTime}</p>
                                        <p className="text-sm text-gray-600 mt-2"><span className="font-semibold text-gray-700">Key Differentiator:</span> {c.keyDifferentiator}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Dimensions Comparison */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">8 pricing dimensions compared</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Beyond the sticker price, these 8 dimensions determine your true total cost. Compare how SpaceNexus stacks up against legacy and mid-market VDRs.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {pricingDimensions.map((d) => (
                                <div key={d.dimension} className="bg-white rounded-2xl border border-gray-200 p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">{d.dimension}</h3>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                                        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                                            <p className="text-[10px] font-semibold text-[#2563eb] uppercase tracking-wider mb-1">SpaceNexus</p>
                                            <p className="text-sm text-gray-700">{d.spacenexus}</p>
                                        </div>
                                        <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
                                            <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1">Legacy VDR</p>
                                            <p className="text-sm text-gray-700">{d.legacy}</p>
                                        </div>
                                        <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
                                            <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1">Mid-Market</p>
                                            <p className="text-sm text-gray-700">{d.midmarket}</p>
                                        </div>
                                        <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
                                            <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1">Cheap Options</p>
                                            <p className="text-sm text-gray-700">{d.cheap}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed"><span className="font-semibold text-gray-700">Why it matters:</span> {d.whyItMatters}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Hidden Costs */}
                <section id="hidden-costs" className="py-16 lg:py-20 bg-white scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">8 hidden costs to watch for in VDR pricing</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                The sticker price is rarely the total cost. These 8 hidden costs are the most common sources of VDR budget overruns.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            {hiddenCosts.map((c) => (
                                <div key={c.cost} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6">
                                    <div className="flex items-start gap-3 mb-2">
                                        <XIcon />
                                        <h3 className="text-base font-bold text-gray-900">{c.cost}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed pl-7">{c.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Total Cost Comparison */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Total cost of ownership by scenario</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                How pricing models compare across common deal scenarios.
                            </p>
                        </div>
                        {/* Desktop Table */}
                        <div className="hidden md:block rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm min-w-[900px]">
                                    <thead className="bg-gray-900 text-white">
                                        <tr>
                                            <th className="text-left font-semibold text-gray-300 px-4 py-4">Scenario</th>
                                            <th className="text-center font-semibold text-[#60a5fa] px-3 py-4">SpaceNexus</th>
                                            <th className="text-center font-semibold text-gray-600 px-3 py-4">Legacy VDR</th>
                                            <th className="text-center font-semibold text-gray-600 px-3 py-4">Mid-Market</th>
                                            <th className="text-center font-semibold text-gray-600 px-3 py-4">Cheap Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {totalCostComparison.map((row, i) => (
                                            <tr key={row.scenario} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"} border-t border-gray-100`}>
                                                <td className="px-4 py-3.5 text-sm font-medium text-gray-800 min-w-[240px]">{row.scenario}</td>
                                                <td className="px-3 py-3.5 text-xs text-center text-gray-700 font-medium">{row.spacenexus}</td>
                                                <td className="px-3 py-3.5 text-xs text-center text-gray-600">{row.legacy}</td>
                                                <td className="px-3 py-3.5 text-xs text-center text-gray-600">{row.midmarket}</td>
                                                <td className="px-3 py-3.5 text-xs text-center text-gray-600">{row.cheap}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* Mobile Card Layout */}
                        <div className="md:hidden space-y-4">
                            {totalCostComparison.map((row) => (
                                <div key={row.scenario} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">{row.scenario}</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-blue-50/50">
                                            <span className="text-xs font-medium text-[#2563eb]">SpaceNexus</span>
                                            <span className="text-xs font-medium text-gray-700">{row.spacenexus}</span>
                                        </div>
                                        <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-50">
                                            <span className="text-xs font-medium text-gray-600">Legacy VDR</span>
                                            <span className="text-xs text-gray-600">{row.legacy}</span>
                                        </div>
                                        <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-50">
                                            <span className="text-xs font-medium text-gray-600">Mid-Market</span>
                                            <span className="text-xs text-gray-600">{row.midmarket}</span>
                                        </div>
                                        <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-50">
                                            <span className="text-xs font-medium text-gray-600">Cheap Options</span>
                                            <span className="text-xs text-gray-600">{row.cheap}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about VDR pricing
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
                            <Link href="/pricing" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                SpaceNexus Pricing →
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
                            <Link href="/competitors/vdr-alternatives" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Best VDR Comparison 2026 →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            See SpaceNexus pricing in action
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Request a personalized demo and see how SpaceNexus&apos;s transparent flat-rate pricing compares to your current VDR. No quote-only contracts, no per-page fees, no AI add-ons.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Request a Live Demo
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                See Published Pricing
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
                            href="/virtual-data-room-providers"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Complete directory.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">All virtual data room providers →</h3>
                        </Link>
                        <Link
                            href="/data-room-software"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Software platform comparison.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Data room software →</h3>
                        </Link>
                        <Link
                            href="/checklists/templates"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">8 downloadable templates.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Free DD templates (CSV) →</h3>
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
