import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import AnswerBlock from "../../components/AnswerBlock";

export const metadata: Metadata = {
    title: "VDR Alternatives 2026",
    description: "Compare the top 7 alternatives to legacy VDR providers. Modern UX, transparent pricing, AI included.",
    alternates: {
        canonical: "https://spacenexus.net/competitors/vdr-alternatives",
    },
    openGraph: {
        title: "VDR Alternatives 2026 | SpaceNexus",
        description:
            "Compare the top 7 alternatives to legacy VDR providers. Modern UX, transparent pricing,...",
        url: "https://spacenexus.net/competitors/vdr-alternatives",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Virtual Data Room Providers 2026 — VDR Comparison | SpaceNexus",
        description:
            "Side-by-side comparison of the top virtual data room providers. Pricing, features, security, and use case recommendations.",
    },
    keywords: [
        "best virtual data room",
        "VDR comparison",
        "virtual data room providers",
        "VDR alternatives",
        "best data room for M&A",
        "Datasite alternative",
        "Intralinks alternative",
        "virtual data room pricing",
        "VDR comparison 2026",
        "top virtual data rooms",
        "data room software comparison",
    ],
};

const providers = [
    {
        name: "SpaceNexus",
        tagline: "AI-powered VDR for modern deal teams",
        pricing: "Transparent pricing",
        pricingNote: "Transparent, public pricing",
        bestFor: "M&A due diligence, legal teams, startups raising capital",
        pros: [
            "AI-powered document redaction and auto-categorization",
            "Structured Q&A workflow with audit trail",
            "Real-time buyer engagement analytics",
            "SOC 2 Type II, ISO 27001, SEC/FINRA ready",
            "Setup in under 24 hours, no onboarding calls",
            "Transparent pricing with no per-page fees",
        ],
        cons: [
            "Newer platform compared to legacy providers",
            "Smaller brand recognition in enterprise segment",
        ],
        highlight: true,
        link: "/demo",
        linkText: "Try SpaceNexus Free",
    },
    {
        name: "Datasite (fka Merrill Datasites)",
        tagline: "Legacy enterprise VDR for large-cap M&A",
        pricing: "Quote only",
        pricingNote: "Typically tens of thousands per deal",
        bestFor: "Large-cap M&A ($500M+ deals), bulge bracket banks",
        pros: [
            "Established brand in investment banking",
            "Large team of support staff",
            "Handles very high document volumes",
        ],
        cons: [
            "Opaque, expensive pricing with per-page charges",
            "Legacy UI — steep learning curve",
            "AI features sold as expensive add-ons",
            "Annual contracts with costly exit terms",
            "Days-long setup requiring CSM involvement",
        ],
        highlight: false,
        link: "/competitors/datasite-alternative",
        linkText: "SpaceNexus vs Datasite →",
    },
    {
        name: "Intralinks (SS&C)",
        tagline: "Capital markets-focused VDR",
        pricing: "Quote only",
        pricingNote: "Typically tens of thousands per deal",
        bestFor: "Capital raising, syndicated lending, fund administration",
        pros: [
            "Strong capital markets workflow tools",
            "Integration with SS&C fund admin platform",
            "Global compliance support",
        ],
        cons: [
            "Complex, dated interface",
            "Expensive for small-to-mid deals",
            "Limited AI/automation features",
            "Slow customer support response times",
            "Difficult to self-serve setup",
        ],
        highlight: false,
        link: "/competitors/intralinks-alternative",
        linkText: "SpaceNexus vs Intralinks →",
    },
    {
        name: "Firmex",
        tagline: "Mid-market Canadian VDR",
        pricing: "Quote-based",
        pricingNote: "Per-project pricing available",
        bestFor: "Mid-market M&A, Canadian and European deals",
        pros: [
            "Reasonable mid-market pricing",
            "Clean interface for smaller teams",
            "Good document management basics",
        ],
        cons: [
            "No AI document processing",
            "Limited buyer analytics",
            "Basic Q&A without workflow automation",
            "No real-time engagement heatmaps",
        ],
        highlight: false,
        link: null,
        linkText: null,
    },
    {
        name: "iDeals",
        tagline: "European VDR for cross-border deals",
        pricing: "Quote-based",
        pricingNote: "Per-project or subscription",
        bestFor: "European cross-border M&A, mid-market transactions",
        pros: [
            "Multi-language support for EU deals",
            "Clean, modern interface",
            "Competitive mid-market pricing",
        ],
        cons: [
            "Limited US regulatory compliance features",
            "No AI-powered redaction or auto-indexing",
            "Smaller support team for US time zones",
            "Limited integration ecosystem",
        ],
        highlight: false,
        link: null,
        linkText: null,
    },
    {
        name: "Ansarada",
        tagline: "Australia-based VDR with deal workflow tools",
        pricing: "Quote-based",
        pricingNote: "Subscription-based",
        bestFor: "Asia-Pacific deals, board governance",
        pros: [
            "Built-in deal workflow management",
            "Board and governance modules",
            "Good for APAC market compliance",
        ],
        cons: [
            "Limited traction in US M&A market",
            "No AI document redaction",
            "Smaller partner ecosystem in North America",
            "Enterprise features only on higher tiers",
        ],
        highlight: false,
        link: null,
        linkText: null,
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
    { feature: "Unlimited Users", values: ["✓", "✗", "✗", "✗", "✓", "Plan-dependent"] },
    { feature: "NDA Click-Through Gate", values: ["✓", "✓", "✓", "✓", "✓", "✓"] },
    { feature: "Ethical Wall / Privilege Mgmt", values: ["✓", "✓", "✓", "✗", "✗", "✗"] },
    { feature: "Monthly Contracts", values: ["✓", "✗", "✗", "✓", "✓", "✓"] },
];

const providerNames = ["SpaceNexus", "Datasite", "Intralinks", "Firmex", "iDeals", "Ansarada"];

const faqItems = [
    {
        question: "What is the best virtual data room for M&A in 2026?",
        answer:
            "The best virtual data room for M&A depends on your deal size and requirements. For mid-market and growth-stage M&A, SpaceNexus offers the best combination of AI-powered features, transparent published pricing, and rapid setup. For large-cap deals ($500M+) at bulge bracket banks, Datasite and Intralinks remain established choices — though at significantly higher price points with opaque quote-based pricing.",
    },
    {
        question: "How much does a virtual data room cost?",
        answer:
            "VDR pricing varies widely. SpaceNexus offers transparent, published monthly pricing with no per-page fees. Datasite and Intralinks typically cost tens of thousands per deal with quote-only pricing. Mid-market providers like Firmex and iDeals use quote-based subscription or per-project pricing. Key factors affecting cost include storage, number of users, deal duration, and add-on features like AI redaction.",
    },
    {
        question: "What should I look for when comparing virtual data room providers?",
        answer:
            "When comparing VDR providers, evaluate: (1) Security certifications — SOC 2 Type II and ISO 27001 are minimum requirements. (2) Pricing transparency — avoid providers with per-page charges or opaque quoting. (3) AI features — document redaction, auto-categorization, and smart indexing save significant time. (4) Q&A workflow — structured due diligence Q&A with audit trails is essential for M&A. (5) Setup speed — modern VDRs should be operational within 24 hours. (6) Regulatory compliance — SEC, FINRA, and CCPA readiness for US deals.",
    },
    {
        question: "Is SpaceNexus a good alternative to Datasite?",
        answer:
            "Yes. SpaceNexus is the leading modern alternative to Datasite for M&A due diligence. It offers AI-powered document redaction and auto-categorization as standard features (not expensive add-ons), transparent published pricing (vs. Datasite's opaque enterprise quotes), and setup in under 24 hours (vs. days with Datasite). Both platforms are SOC 2 Type II certified.",
    },
    {
        question: "Which VDR providers are compliant with SEC and FINRA regulations?",
        answer:
            "SpaceNexus, Datasite, and Intralinks all support SEC and FINRA compliance requirements for US-based investment banking and capital markets transactions. SpaceNexus includes SEC/FINRA readiness as standard across all plans, while Datasite and Intralinks typically include compliance features in their enterprise tiers.",
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
        { "@type": "ListItem", position: 2, name: "Competitors", item: "https://spacenexus.net/competitors" },
        { "@type": "ListItem", position: 3, name: "Best VDR Providers 2026", item: "https://spacenexus.net/competitors/vdr-alternatives" },
    ],
};

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Virtual Data Room Providers 2026",
    description: "Side-by-side comparison of the top virtual data room providers for M&A due diligence, fundraising, and secure document sharing.",
    numberOfItems: 6,
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            item: {
                "@type": "SoftwareApplication",
                name: "SpaceNexus",
                applicationCategory: "BusinessApplication",
                url: "https://spacenexus.net",
                description: "AI-powered VDR for modern deal teams with transparent pricing, AI document redaction, and setup in under 24 hours.",
                offers: {
                    "@type": "AggregateOffer",
                    lowPrice: "0",
                    highPrice: "Custom",
                    priceCurrency: "USD",
                    offerCount: 3,
                },
                aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "500",
                    bestRating: "5",
                },
            },
        },
        {
            "@type": "ListItem",
            position: 2,
            item: {
                "@type": "SoftwareApplication",
                name: "Datasite",
                applicationCategory: "BusinessApplication",
                url: "https://datasite.com",
                description: "Legacy enterprise VDR for large-cap M&A with opaque quote-only pricing and days-long setup.",
            },
        },
        {
            "@type": "ListItem",
            position: 3,
            item: {
                "@type": "SoftwareApplication",
                name: "Intralinks (SS&C)",
                applicationCategory: "BusinessApplication",
                url: "https://intralinks.com",
                description: "Capital markets-focused VDR with complex interface and expensive per-deal pricing.",
            },
        },
        {
            "@type": "ListItem",
            position: 4,
            item: {
                "@type": "SoftwareApplication",
                name: "Firmex",
                applicationCategory: "BusinessApplication",
                url: "https://firmex.com",
                description: "Mid-market Canadian VDR with reasonable pricing for smaller teams and basic document management.",
            },
        },
        {
            "@type": "ListItem",
            position: 5,
            item: {
                "@type": "SoftwareApplication",
                name: "iDeals",
                applicationCategory: "BusinessApplication",
                url: "https://idealsvdr.com",
                description: "European VDR with multi-language support for cross-border deals and modern interface.",
            },
        },
        {
            "@type": "ListItem",
            position: 6,
            item: {
                "@type": "SoftwareApplication",
                name: "Ansarada",
                applicationCategory: "BusinessApplication",
                url: "https://ansarada.com",
                description: "Australia-based VDR with built-in deal workflow management and board governance modules.",
            },
        },
    ],
};

export default function VdrAlternativesPage() {
    return (
        <>
            <Script id="vdr-alt-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="vdr-alt-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="vdr-alt-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
            <main className="pt-20 lg:pt-24">
                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                2026 Comparison Guide
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Best Virtual Data Room Providers{" "}
                                <span className="text-[#2563eb]">Compared for 2026</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Choosing the right VDR can make or break your deal timeline. We compared pricing, security, AI features, and compliance across the six most-used virtual data room providers — so you don&apos;t have to request six demo calls to find out.
                            </p>
                            <p className="text-base text-gray-600 mb-10 leading-relaxed">
                                Last updated: June 2026. This guide covers SpaceNexus, Datasite, Intralinks, Firmex, iDeals, and Ansarada.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#comparison-table" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    Jump to Comparison Table
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </a>
                                <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    Try SpaceNexus Free
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <AnswerBlock text="SpaceNexus is the top alternative to legacy VDR providers in 2026. It offers AI-powered document redaction, transparent pricing, structured Q&A workflows, and real-time buyer analytics. Setup takes under 24 hours with no onboarding calls, and all features are included in every plan." />

                {/* Provider Cards */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                6 virtual data room providers at a glance
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Each provider has strengths and trade-offs. Here is an honest breakdown of what each VDR offers, what it costs, and who it&apos;s best suited for.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {providers.map((p) => (
                                <div key={p.name} className={`rounded-2xl border p-7 transition-all duration-300 ${p.highlight ? "bg-white border-[#2563eb] shadow-lg shadow-blue-500/10 ring-1 ring-[#2563eb]/20" : "bg-white border-gray-200 hover:shadow-md hover:border-gray-300"}`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
                                        {p.highlight && (
                                            <span className="text-xs font-semibold bg-[#2563eb] text-white px-2.5 py-1 rounded-full">Recommended</span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">{p.tagline}</p>
                                    <div className="mb-4">
                                        <span className="text-2xl font-bold text-gray-900">{p.pricing}</span>
                                        <span className="text-xs text-gray-600 ml-2">{p.pricingNote}</span>
                                    </div>
                                    <p className="text-xs font-medium text-gray-600 mb-3">Best for: {p.bestFor}</p>
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
                                        <Link href={p.link} className={`inline-flex items-center text-sm font-semibold ${p.highlight ? "text-white bg-[#2563eb] hover:bg-[#1d4ed8] px-5 py-2.5 rounded-full shadow-md" : "text-[#2563eb] hover:underline"}`}>
                                            {p.linkText}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Feature Comparison Table */}
                <section id="comparison-table" className="py-16 lg:py-20 bg-white scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Feature-by-feature VDR comparison
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Side-by-side comparison of security, AI features, pricing, compliance, and usability across all six providers.
                            </p>
                        </div>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                            <table className="w-full text-sm min-w-[800px]">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="text-left px-4 py-4 font-semibold text-gray-900 border-b border-gray-200 sticky left-0 bg-gray-50 z-10">Feature</th>
                                        {providerNames.map((name, i) => (
                                            <th key={name} className={`text-center px-3 py-4 font-semibold border-b border-gray-200 min-w-[100px] ${i === 0 ? "text-[#2563eb] bg-blue-50/50" : "text-gray-600"}`}>
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
                    </div>
                </section>

                {/* How to Choose */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            How to choose the right virtual data room for your deal
                        </h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                Selecting a virtual data room is one of the most consequential technology decisions in any transaction. The wrong choice can delay due diligence by weeks, expose confidential documents through inadequate security controls, or inflate deal costs with surprise per-page charges and mandatory add-ons.
                            </p>
                            <p>
                                <strong>For mid-market M&amp;A and growth-stage deals</strong>, SpaceNexus offers the strongest combination of AI-powered automation, transparent pricing, and rapid deployment. Deal teams can upload documents, configure permissions, and invite buyers within hours — not days. AI auto-categorization and redaction eliminate the manual indexing work that traditional VDRs still require.
                            </p>
                            <p>
                                <strong>For large-cap transactions at bulge bracket banks</strong>, Datasite and Intralinks remain established choices with deep integration into institutional deal workflows. However, both platforms carry significantly higher price points, opaque quote-based pricing, and legacy interfaces that create friction for less experienced users on the buy side.
                            </p>
                            <p>
                                <strong>For European cross-border transactions</strong>, iDeals and Firmex provide solid mid-market offerings with competitive pricing. Their multi-language support and EU compliance features make them reasonable choices for deals centered outside North America — though both lack the AI capabilities that modern deal teams increasingly expect.
                            </p>
                            <p>
                                <strong>For Asia-Pacific transactions and board governance</strong>, Ansarada offers deal workflow tools alongside governance modules. However, its limited US presence and lack of SEC/FINRA compliance features make it less suitable for US-centric transactions.
                            </p>
                            <p>
                                Regardless of which provider you choose, ensure your VDR meets these non-negotiable requirements: SOC 2 Type II certification, AES-256 encryption at rest, TLS 1.3 in transit, granular folder-level permissions, tamper-evident audit trails, and structured Q&amp;A workflow management with full version control.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Use Case Recommendations */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Best VDR by use case
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Different transactions have different requirements. Here is our recommendation for each major use case.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    useCase: "M&A Due Diligence",
                                    recommended: "SpaceNexus",
                                    reason: "AI redaction, structured Q&A, buyer analytics, and transparent pricing make it ideal for sell-side and buy-side M&A advisory.",
                                    link: "/solutions/mergers-and-acquisitions-vdr",
                                },
                                {
                                    useCase: "Law Firm Deal Rooms",
                                    recommended: "SpaceNexus",
                                    reason: "Attorney-client privilege protection, ethical walls, tamper-evident audit trails, and SOC 2 Type II certification meet law firm oversight requirements.",
                                    link: "/industries/law-firms",
                                },
                                {
                                    useCase: "Capital Raising & IPO",
                                    recommended: "SpaceNexus or Intralinks",
                                    reason: "SpaceNexus for modern, cost-effective fundraising. Intralinks for large institutional capital markets transactions with SS&C integration.",
                                    link: "/solutions/series-a-fundraising-data-room",
                                },
                                {
                                    useCase: "Private Equity Portfolio",
                                    recommended: "SpaceNexus",
                                    reason: "Portfolio company document management, LP reporting, and deal pipeline tracking with unlimited users and transparent per-month pricing.",
                                    link: "/industries/private-equity",
                                },
                                {
                                    useCase: "Investment Banking",
                                    recommended: "SpaceNexus or Datasite",
                                    reason: "SpaceNexus for mid-market mandates. Datasite for large-cap bulge bracket deals where institutional brand recognition matters to the client.",
                                    link: "/industries/investment-banking",
                                },
                                {
                                    useCase: "European Cross-Border",
                                    recommended: "iDeals or Firmex",
                                    reason: "Multi-language support, EU data residency, and competitive mid-market pricing for deals centered outside North America.",
                                    link: null,
                                },
                            ].map((uc) => (
                                <div key={uc.useCase} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6">
                                    <h3 className="text-base font-bold text-gray-900 mb-1">{uc.useCase}</h3>
                                    <p className="text-sm font-semibold text-[#2563eb] mb-3">Recommended: {uc.recommended}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{uc.reason}</p>
                                    {uc.link && (
                                        <Link href={uc.link} className="text-xs font-semibold text-[#2563eb] hover:underline flex items-center gap-1">
                                            Learn more <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about virtual data rooms
                        </h2>
                        <div className="space-y-6">
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
                <section className="py-10 bg-[#f8f9fa] border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-sm font-semibold text-gray-700 mb-4">Continue exploring</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/best-data-room-for-startups" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Best Data Room for Startups (2026 Ranking) →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/competitors/datasite-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                SpaceNexus vs Datasite →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/competitors/intralinks-alternative" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                SpaceNexus vs Intralinks →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to see why deal teams are switching to SpaceNexus?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            AI-powered redaction. Transparent published pricing. Setup in under 24 hours. SOC 2 Type II certified. No annual lock-in.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Start Free Trial
                            </Link>
                            <Link href="/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                View Pricing
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
