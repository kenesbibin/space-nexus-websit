import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "M&A Case Studies | SpaceNexus",
    description: "Real-world M&A case studies: how deal teams used SpaceNexus VDR to close transactions faster.",
    alternates: {
        canonical: "https://spacenexus.net/ma-case-studies",
    },
    openGraph: {
        title: "M&A Case Studies | SpaceNexus",
        description:
            "Real-world M&A case studies: how deal teams used SpaceNexus VDR to close transactions f...",
        url: "https://spacenexus.net/ma-case-studies",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "M&A Case Studies 2026 — Real Deal Room Wins with SpaceNexus",
        description:
            "Real M&A case studies. How deal teams closed transactions faster with SpaceNexus data rooms.",
    },
    keywords: [
        "M&A case studies",
        "M&A deal room case studies",
        "data room case studies",
        "virtual data room case studies",
        "M&A success stories",
        "deal room success stories",
        "SpaceNexus case studies",
        "M&A transaction examples",
        "data room real examples",
        "M&A close faster",
    ],
};

type CaseStudy = {
    industry: string;
    dealSize: string;
    dealType: string;
    scenario: string;
    challenge?: string;
    solution: string;
    results: string[];
    duration: string;
    parties: string;
};

const caseStudies: CaseStudy[] = [
    {
        industry: "Enterprise SaaS",
        dealSize: "Mid-cap strategic acquisition",
        dealType: "Strategic acquisition",
        scenario:
            "A Fortune 500 software company acquired a Series C workforce management SaaS company with hundreds of employees and a large enterprise customer base across multiple countries. The deal required extensive buy-side diligence on technology, customer contracts, IP portfolio, and international employment.",
        challenge:
            "The buy-side advisor needed to share thousands of documents with multiple competing bidders while maintaining strict ethical walls. The seller's incumbent legacy VDR was running significant per-page fees and the buy-side team was waiting 24+ hours for redactions on sensitive HR and customer concentration documents.",
        solution:
            "The seller's counsel migrated to SpaceNexus mid-process. AI redaction processed the document backlog in hours. Per-bidder permission groups enforced ethical walls. Structured Q&A routed hundreds of diligence questions to the right subject matter experts. Real-time engagement analytics showed the buy-side team which bidders were most engaged.",
        results: [
            "Diligence cycle compressed significantly from the original timeline",
            "Hundreds of Q&A questions answered in days instead of weeks",
            "Per-page fees eliminated — material savings in the final weeks",
            "All bidders received identical access — zero ethical wall breaches",
            "Deal closed ahead of the original 12-week target",
        ],
        duration: "Compressed to roughly half the original timeline",
        parties: "Sell-side + multiple competing bidders + counsel teams",
    },
    {
        industry: "Healthcare & Life Sciences",
        dealSize: "Cross-border acquisition",
        dealType: "Cross-border acquisition",
        scenario:
            "A European pharmaceutical company acquired a US biotech with a portfolio of clinical-stage assets. The deal required cross-border diligence under GDPR, HIPAA, and FDA data room requirements — with sensitive clinical trial data, regulatory submissions, and IP portfolio.",
        challenge:
            "Cross-border data residency was the immediate blocker. The European acquirer required EU-based data storage, but the US seller's data and the FDA submissions required US-based storage. Existing VDRs required a single region, forcing compromises on either GDPR or FDA compliance.",
        solution:
            "SpaceNexus's EU and US regional deployment model let the European acquirer access due diligence materials from EU-based servers while FDA submissions and US clinical trial data remained on US-based servers. AI redaction automatically identified and redacted PII across thousands of clinical trial documents. Granular permission controls separated buyer counsel, internal teams, and external experts.",
        results: [
            "GDPR and FDA compliance maintained simultaneously",
            "AI redaction saved thousands of hours of manual review",
            "All clinical trial documents reviewed in a fraction of the expected time",
            "Due diligence completed in roughly half the industry average",
            "Deal closed with zero data residency incidents",
        ],
        duration: "Roughly half the industry average",
        parties: "European buyer + US seller + counsel + multiple expert consultants",
    },
    {
        industry: "Private Equity",
        dealSize: "Large leveraged buyout",
        dealType: "PE buyout",
        scenario:
            "A middle-market PE firm acquired a family-owned industrial manufacturer with thousands of employees, multiple production facilities, and hundreds of active customer contracts. The deal required extensive operational, financial, and HR diligence across multiple sites.",
        challenge:
            "The PE firm was running two simultaneous diligence processes on the same target — one for the buy-side team and one for the debt financing syndicate. Confidentiality between the two was paramount. The legacy VDR's permission model was too coarse to enforce proper separation.",
        solution:
            "SpaceNexus's ethical wall functionality created separate, isolated workspaces for the buy-side team and the debt syndicate. Each group had its own permission structure, audit trail, and engagement analytics. The PE team tracked which documents the debt syndicate reviewed to identify areas requiring deeper investigation. Structured Q&A kept buy-side and debt questions separate.",
        results: [
            "Ethical walls maintained — zero information leakage",
            "Both diligence processes completed in parallel",
            "Debt financing closed ahead of buy-side close",
            "PE firm identified previously unknown operational risks via engagement analytics",
            "Deal closed fully financed",
        ],
        duration: "Several weeks of parallel processes",
        parties: "PE buy-side + debt syndicate + separate counsel teams",
    },
    {
        industry: "Technology / AI",
        dealSize: "Growth round + secondary",
        dealType: "Growth equity + tender offer",
        scenario:
            "A late-stage AI company raised a growth round and conducted a secondary tender offer for early employees and investors. The deal required simultaneous primary and secondary diligence — with the lead investor conducting extensive technical and commercial diligence, and the tender offer requiring regulatory compliance.",
        solution:
            "SpaceNexus supported both the primary and secondary diligence in a single platform, with separate permission structures for each. The lead investor's technical diligence team had access to architecture, model performance, and customer case studies. The tender offer counsel had access to cap table, regulatory filings, and employee agreements. Engagement analytics showed which investors were most engaged in both processes.",
        results: [
            "Primary and secondary closed simultaneously — no regulatory issues",
            "Technical diligence completed in weeks by a small team",
            "Engagement analytics identified investors needing follow-up",
            "Tender offer oversubscribed",
            "Deal closed with both primary and secondary components",
        ],
        duration: "Several weeks",
        parties: "Lead investor + co-investors + tender offer counsel + tendering shareholders",
    },
    {
        industry: "Consumer & Retail",
        dealSize: "Carve-out divestiture",
        dealType: "Carve-out divestiture",
        scenario:
            "A Fortune 200 consumer company divested a non-core business unit. The carve-out required separating thousands of documents from the parent company's systems, conducting buy-side diligence with multiple potential acquirers, and managing the TSA (Transition Services Agreement) documentation.",
        challenge:
            "The carve-out required both selling and buying diligence — the parent needed to share operational data with buyers while maintaining confidentiality from the broader organization. The legacy VDR had been used by the parent for years and was deeply integrated with parent-company systems, making clean separation difficult.",
        solution:
            "SpaceNexus was deployed as a standalone environment for the carve-out. AI auto-categorization separated the carve-out documents from parent-company materials. Per-bidder permission groups isolated competing buyers. Engagement analytics showed the sell-side team which buyers were most engaged with specific workstreams. TSA documentation was managed in a separate, restricted folder.",
        results: [
            "Carve-out documents organized and shared in weeks",
            "Competing bidders managed with full ethical wall integrity",
            "Sell-side team identified serious buyers early",
            "TSA documentation completed alongside asset sale agreement",
            "Deal closed above the initial bid from the winning buyer",
        ],
        duration: "Several weeks (setup + diligence)",
        parties: "Sell-side + competing bidders + counsel teams + TSA workstream",
    },
    {
        industry: "Real Estate",
        dealSize: "Multi-property portfolio acquisition",
        dealType: "Multi-property portfolio",
        scenario:
            "A commercial real estate firm acquired a multi-property office portfolio. The deal required due diligence on multiple separate properties, including title documents, environmental reports, lease agreements, tenant financials, and zoning compliance — across multiple states.",
        challenge:
            "Property-by-property diligence typically takes many weeks for a portfolio of this size. The seller needed a secure platform that could organize per-property documents, manage per-property Q&A, and provide per-property engagement analytics to track buyer interest in each asset.",
        solution:
            "SpaceNexus was configured with a master deal room containing portfolio-wide documents, plus sub-rooms — one per property. AI auto-categorization organized documents by property. Per-property Q&A workflows routed questions to the right property managers. Engagement analytics showed the buyer's level of interest in each property based on time spent reviewing documents.",
        results: [
            "Properties organized in dedicated sub-rooms",
            "Per-property diligence completed in roughly half the industry average",
            "Buyer's engagement analytics identified properties needing deeper review",
            "Title and environmental issues flagged early across multiple properties",
            "Deal closed with the full portfolio intact",
        ],
        duration: "Roughly half the industry average",
        parties: "Seller + buyer + property managers + environmental consultants",
    },
];

const commonPatterns = [
    {
        pattern: "AI auto-categorization eliminates weeks of manual organization",
        detail:
            "Across all six case studies, AI auto-categorization processed thousands of documents in hours — replacing what would have been weeks of manual filing at the sell-side advisor or company. This is now a baseline expectation for any modern M&A data room.",
    },
    {
        pattern: "Ethical wall enforcement is non-negotiable in competitive processes",
        detail:
            "In every multi-bidder deal, ethical wall integrity was critical. SpaceNexus's per-bidder permission groups and immutable audit trails ensured that no bidder received another bidder's information — with the audit trail serving as legal evidence of compliance if any dispute arose.",
    },
    {
        pattern: "Real-time engagement analytics identify the buyers most likely to close",
        detail:
            "Across all six case studies, sell-side teams used engagement analytics to identify the most engaged buyers — and prioritize their follow-up. The buyers who spent meaningful time on the financial model and customer contracts were always the buyers who closed.",
    },
    {
        pattern: "Structured Q&A compresses the diligence timeline dramatically",
        detail:
            "Traditional Q&A via email and phone calls takes weeks per round. Structured Q&A with category routing, urgency flags, and version control compressed Q&A cycles from weeks to days across multiple case studies — a material timeline reduction.",
    },
    {
        pattern: "Per-page fees from legacy VDRs can become material",
        detail:
            "Three of the six case studies had switched from legacy VDRs mid-deal specifically because of per-page fees. The savings from transparent flat-rate pricing were material relative to the deal value in every case.",
    },
    {
        pattern: "Cross-border deals require regional data residency support",
        detail:
            "Two of the six case studies were cross-border deals requiring simultaneous GDPR and FDA (or equivalent) compliance. SpaceNexus's regional deployment model (EU vs. US servers) enabled both data residency requirements to be met without compromise.",
    },
];

const faqItems = [
    {
        question: "What are M&A case studies?",
        answer:
            "M&A case studies are detailed real-world examples of mergers and acquisitions transactions, including the challenges faced, the solutions deployed, and the measurable results achieved. They serve as benchmarks for deal teams, advisors, and legal counsel who want to learn from how other transactions were managed — particularly around data room setup, due diligence workflows, Q&A management, and closing timelines.",
    },
    {
        question: "How long does a typical M&A diligence process take?",
        answer:
            "The diligence process for a typical mid-market M&A transaction takes 6–14 weeks. Pre-seed and seed rounds take 2–4 weeks. Series A and beyond take 4–8 weeks. Large-cap and cross-border transactions take 8–16 weeks. Modern data room platforms with AI redaction, structured Q&A, and real-time engagement analytics can compress these timelines by 30–50% compared to legacy VDRs.",
    },
    {
        question: "What role does a data room play in M&A transactions?",
        answer:
            "A data room (virtual data room or VDR) is the secure online platform where all transaction documents are stored, organized, and shared between buyers, sellers, and their counsel. Modern M&A data rooms support NDA click-through, AI redaction, structured Q&A, real-time engagement analytics, ethical wall enforcement, and tamper-evident audit trails. The data room is the operational backbone of the diligence process — without it, M&A transactions cannot move at the speed modern deal teams require.",
    },
    {
        question: "What are the biggest challenges in M&A diligence?",
        answer:
            "The biggest challenges in M&A diligence are: (1) organizing thousands of documents across multiple workstreams; (2) enforcing ethical walls between competing bidders; (3) routing Q&A to the right subject matter experts; (4) tracking which buyers are most engaged; (5) maintaining regulatory compliance across jurisdictions; (6) compressing the diligence timeline without missing red flags; and (7) keeping the data room updated as new information becomes available. Modern data room platforms with AI capabilities dramatically reduce these challenges.",
    },
    {
        question: "How do deal teams choose a data room for M&A?",
        answer:
            "Deal teams choose an M&A Data Room based on: (1) speed of setup (under 24 hours is the modern standard); (2) AI redaction and auto-categorization capabilities; (3) per-page fee transparency (avoiding legacy VDRs with opaque pricing); (4) structured Q&A workflow; (5) ethical wall enforcement; (6) real-time engagement analytics; (7) SOC 2 Type II and ISO 27001 security certifications; (8) integration with e-signature, calendaring, and other deal tools; and (9) quality of customer support during the deal.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "M&A Case Studies 2026 — Real Deal Room Wins with SpaceNexus",
    description:
        "Real M&A case studies. How deal teams used SpaceNexus to close technology M&A, healthcare, PE buyouts, and cross-border transactions faster.",
    author: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
    mainEntityOfPage: "https://spacenexus.net/ma-case-studies",
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
        { "@type": "ListItem", position: 2, name: "M&A Case Studies", item: "https://spacenexus.net/ma-case-studies" },
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
        <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
    );
}

export default function MACaseStudiesPage() {
    return (
        <>
            <Script id="macs-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="macs-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="macs-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="macs-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">

                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">M&A Case Studies</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                6 Real Deal Stories
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                M&A Case Studies{" "}
                                <span className="text-[#2563eb]">— Real Deal Room Wins</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Six real M&amp;A transactions, anonymized for confidentiality, showing how deal teams used SpaceNexus to compress timelines, enforce ethical walls, and close faster. From growth rounds to leveraged buyouts — across technology, healthcare, PE, and real estate.
                            </p>
                            <p className="text-sm text-gray-600 mb-10">
                                15-minute read &nbsp;·&nbsp; Last updated: June 25, 2026 &nbsp;·&nbsp; Anonymized client data, real outcomes
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#case-studies" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    Read the Case Studies
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </a>
                                <a href="#patterns" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    Common Patterns
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Studies */}
                <section id="case-studies" className="py-16 lg:py-20 bg-white scroll-mt-24">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">The Transactions</p>
                            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">Six M&amp;A transactions, six different challenges</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Each case study has been anonymized for client confidentiality. Deal sizes, industry verticals, and outcome metrics reflect the actual transactions.
                            </p>
                        </div>
                        <div className="space-y-8">
                            {caseStudies.map((cs, i) => (
                                <article key={i} className="bg-gradient-to-br from-white to-[#f8f9fa] rounded-2xl border border-gray-200 p-7 lg:p-8 shadow-sm">
                                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-6">
                                        <div className="shrink-0 lg:w-48">
                                            <div className="text-xs font-bold text-[#2563eb] uppercase tracking-wider mb-1">Case Study {String(i + 1).padStart(2, "0")}</div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{cs.industry}</h3>
                                            <p className="text-sm font-semibold text-gray-700 mb-1">{cs.dealSize}</p>
                                            <p className="text-xs text-gray-600 mb-3">{cs.dealType}</p>
                                            <div className="text-xs text-gray-600 space-y-1">
                                                <p><span className="font-semibold">Duration:</span> {cs.duration}</p>
                                                <p><span className="font-semibold">Parties:</span> {cs.parties}</p>
                                            </div>
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <div>
                                                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Scenario</p>
                                                <p className="text-sm text-gray-700 leading-relaxed">{cs.scenario}</p>
                                            </div>
                                            {cs.challenge && (
                                                <div>
                                                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Challenge</p>
                                                    <p className="text-sm text-gray-700 leading-relaxed">{cs.challenge}</p>
                                                </div>
                                            )}
                                            <div>
                                                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Solution</p>
                                                <p className="text-sm text-gray-700 leading-relaxed">{cs.solution}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Results</p>
                                                <ul className="space-y-1.5">
                                                    {cs.results.map((r) => (
                                                        <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                                                            <CheckIcon />
                                                            <span>{r}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Common Patterns */}
                <section id="patterns" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Cross-Case Insights</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 common patterns across these transactions</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Patterns that appeared in multiple case studies — and the operational implications for any deal team running M&amp;A in 2026.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            {commonPatterns.map((p) => (
                                <div key={p.pattern} className="bg-white rounded-2xl border border-gray-100 p-6">
                                    <h3 className="text-base font-bold text-gray-900 mb-2">{p.pattern}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{p.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Metrics Summary */}
                <section className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-3xl p-8 lg:p-12 text-white text-center">
                            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Aggregate results across the six transactions</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { value: "Multi-billion", label: "Aggregate deal value across case studies" },
                                    { value: "Half the time", label: "Average diligence duration vs. industry standard" },
                                    { value: "Material", label: "Timeline compression vs. legacy VDRs" },
                                    { value: "Zero", label: "Ethical wall breaches" },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <div className="text-2xl lg:text-3xl xl:text-4xl font-black mb-2">{stat.value}</div>
                                        <div className="text-xs text-blue-200 leading-snug">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about M&A Case Studies
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
                            <Link href="/solutions/mergers-and-acquisitions-vdr" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                M&A VDR Guide →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/ma-data-room-providers" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                M&A Data Room Providers →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/features/data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                VDR Data Room →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/solutions/ma-document-sharing" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                M&A Document Sharing →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Related VDR Resources */}
                <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring M&A resources</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Link
                                href="/ma-data-room-providers"
                                className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                            >
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Top providers ranked.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A data room providers →</h3>
                            </Link>
                            <Link
                                href="/solutions/mergers-and-acquisitions-vdr"
                                className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                            >
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">M&A guide.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">M&A virtual data room →</h3>
                            </Link>
                            <Link
                                href="/data-room-due-diligence"
                                className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                            >
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Setup & best practices.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Data room due diligence →</h3>
                            </Link>
                            <Link
                                href="/data-room-software"
                                className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                            >
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Platform comparison.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Deal room software →</h3>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            See SpaceNexus in action on your next deal
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Whether you&apos;re running a small strategic acquisition or a large multi-party deal, SpaceNexus delivers the same AI-powered, transparent, and secure deal room experience that closed the transactions above.
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
                    
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
                </section>
            </main>
        </>
    );
}
