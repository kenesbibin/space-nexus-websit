import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Startup Fundraising | SpaceNexus",
    description: "How founders used SpaceNexus to close Series A and seed rounds. Engagement analytics, NDA workflows, Q&A.",
    alternates: {
        canonical: "https://spacenexus.net/case-studies/startup-fundraising",
    },
    openGraph: {
        title: "Startup Fundraising | SpaceNexus",
        description:
            "How founders used SpaceNexus to close Series A and seed rounds. Engagement analytics, N...",
        url: "https://spacenexus.net/case-studies/startup-fundraising",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Startup Fundraising 2026 — Real Founder Wins",
        description:
            "Real Startup Fundraising. How founders closed pre-seed through Series C rounds faster with SpaceNexus.",
    },
    keywords: [
        "Startup Fundraising",
        "startup data room case studies",
        "fundraising case studies",
        "pre-seed case studies",
        "seed round case studies",
        "Series A case studies",
        "Series B case studies",
        "founder data room success stories",
        "investor diligence case studies",
        "SpaceNexus case studies",
        "fundraising data room examples",
    ],
};

type CaseStudy = {
    stage: string;
    sector: string;
    scenario: string;
    challenge: string;
    solution: string;
    results: string[];
    duration: string;
    outcome: string;
};

const caseStudies: CaseStudy[] = [
    {
        stage: "Pre-Seed → Seed",
        sector: "AI Infrastructure",
        scenario:
            "A first-time founder with a technical AI infrastructure product needed to close a seed round within 12 weeks. No existing investor relationships, no prior fundraising experience, and a team of 3 engineers with no product in market yet.",
        challenge:
            "The founder had no idea how to set up a data room, what documents investors expected, or how to handle the 40+ questions that would come in during diligence. Time was the critical constraint — runway was under 6 months.",
        solution:
            "SpaceNexus&apos;s AI auto-categorization pre-built the seed-round folder structure from a simple drag-and-drop of the company&apos;s existing Google Drive. The founder uploaded pitch deck, basic financials, cap table, founder bios, and a product demo in under 2 hours. AI pre-answered common investor questions in the structured Q&A module. Per-investor NDA click-through was enabled from day one.",
        results: [
            "Data room live in under 24 hours from signup",
            "5 seed investors invited in week 1; 3 submitted term sheets by week 6",
            "Structured Q&A answered 40+ diligence questions across investors",
            "Founder tracked which investors were most engaged in real time",
            "Closed seed round 4 weeks ahead of target timeline",
        ],
        duration: "Closed in 8 weeks (12-week target)",
        outcome: "Seed round closed, runway extended, 3 competitive term sheets",
    },
    {
        stage: "Seed → Series A",
        sector: "Vertical SaaS (Healthcare)",
        scenario:
            "A healthcare SaaS company with strong product-market fit needed to raise a Series A. The round attracted 8 interested funds, requiring sophisticated data room management with HIPAA compliance documentation, customer references, and security audit reports.",
        challenge:
            "The founder needed to share hundreds of customer contracts, HIPAA compliance documentation, and a SOC 2 audit report with 8 competing funds. Customer references needed to be managed carefully — investors wanted intros but customer privacy was paramount.",
        solution:
            "SpaceNexus provided a structured data room organized by workstream (Product, Customers, Financials, Legal, HR, Security). AI redaction automatically identified and redacted PII across 1,200 documents before any investor viewed them. Per-investor permission groups isolated each fund&apos;s Q&A. Customer reference requests were routed to the founder for pre-screening. Real-time engagement analytics showed the founder which funds were most engaged.",
        results: [
            "1,200 documents organized and shared across 8 competing funds",
            "PII redaction automated across all customer-facing documents",
            "Customer reference workflow preserved 100% of customer privacy",
            "AI engagement analytics identified 3 funds with serious intent in week 2",
            "Series A closed with 2x oversubscription, 40% above initial target",
        ],
        duration: "Closed in 10 weeks (16-week target)",
        outcome: "Series A closed, oversubscribed, 3x customer growth post-round",
    },
    {
        stage: "Series A → Series B",
        sector: "Developer Tools",
        scenario:
            "A developer tools company with $4M ARR needed to raise a Series B to expand into European and APAC markets. The round required extensive commercial diligence on customer cohorts, expansion metrics, and international GTM strategy.",
        challenge:
            "The founder was running a full-time Series B process while managing a 40-person team. Diligence required sharing sensitive cohort data, churn analysis, and expansion metrics with 5 competing growth funds. Coordinating document updates and investor Q&A across 5 funds was becoming a full-time job.",
        solution:
            "SpaceNexus&apos;s structured Q&amp;A workflow with category routing, urgency flags, and SME assignment let the founder delegate Q&amp;A to the right team members without losing oversight. The founder received a daily digest of new questions and engagement analytics showing which funds were most active. AI auto-categorization kept the data room organized as new documents were added. Real-time analytics identified the lead fund based on engagement depth and breadth.",
        results: [
            "Founder spent 8 hours/week on data room management (down from 20+ hours)",
            "Structured Q&A routed 180+ questions to the right team members",
            "Daily engagement digests identified the lead fund by week 3",
            "Real-time analytics showed which metrics each fund cared most about",
            "Series B closed 6 weeks ahead of timeline with the engagement-identified lead",
        ],
        duration: "Closed in 8 weeks (14-week target)",
        outcome: "Series B closed, 2.5x revenue multiple, international expansion funded",
    },
    {
        stage: "Bridge Round",
        sector: "Climate Tech",
        scenario:
            "A climate tech startup needed to extend runway with a bridge round while waiting for Series A market conditions to improve. Existing investors were willing to participate but needed standardized diligence materials to approve the bridge.",
        challenge:
            "Bridge rounds are typically faster than priced rounds, but the existing investors needed the same diligence standards as a Series A. The founder had to coordinate 6 existing investors, each with different diligence requirements, in a 4-week window.",
        solution:
            "SpaceNexus&apos;s reusable room templates let the founder spin up a bridge-round data room from the existing Series A materials in under 1 hour. AI auto-categorization identified which documents needed updating vs. which could be reused. Per-investor permission groups handled each existing investor&apos;s specific requirements. The founder used the data room&apos;s audit trail to demonstrate process discipline to the existing investors.",
        results: [
            "Bridge data room live in 1 hour (vs. 3 weeks for a new room)",
            "75% of documents reused from existing Series A materials",
            "6 existing investors managed in parallel with per-investor workflows",
            "Bridge round closed in 3 weeks (down from 8-week average)",
            "Existing investor confidence preserved for future Series A participation",
        ],
        duration: "Closed in 3 weeks",
        outcome: "Bridge round closed, runway extended by 12 months",
    },
    {
        stage: "Series C → Strategic Round",
        sector: "Fintech",
        scenario:
            "A late-stage fintech company was approached by a strategic acquirer for a pre-IPO strategic investment. The deal required parallel processes — Series C with a growth fund and a strategic investment from the acquirer. Both required extensive regulatory and compliance documentation.",
        challenge:
            "Running two parallel investment processes with different terms, different lead investors, and different timelines created coordination complexity. The legal and compliance documentation had to be shared with different sets of counsel without information leakage between processes.",
        solution:
            "SpaceNexus supported both the Series C and the strategic investment in a single platform, with separate permission structures and audit trails for each. The founder used the per-process engagement analytics to track each lead investor&apos;s progress independently. The shared compliance documents were available to both, but process-specific terms sheets, side letters, and counsel communications were isolated.",
        results: [
            "Two parallel processes managed in a single platform",
            "Zero information leakage between processes",
            "Engagement analytics tracked each lead investor independently",
            "Series C closed first; strategic investment closed 3 weeks later",
            "Total capital raised: 40% above original Series C target",
        ],
        duration: "Series C: 6 weeks; Strategic: 3 weeks after",
        outcome: "Both rounds closed, pre-IPO runway extended, strategic partnership formalized",
    },
    {
        stage: "Pre-Seed → Series A (Stealth Mode)",
        sector: "Enterprise AI",
        scenario:
            "A stealth-mode AI company with no public presence needed to raise a pre-seed and then a Series A within 9 months. The founder needed to share proprietary research, model architecture, and customer pipeline data with select investors under strict confidentiality.",
        challenge:
            "Stealth-mode fundraising requires the highest level of access control. The founder needed to share deeply confidential technical and commercial information with select investors without any risk of leak that could alert competitors or future employees.",
        solution:
            "SpaceNexus&apos;s NDA click-through enforcement, dynamic per-viewer watermarking, and granular permission controls provided the security foundation. The founder used time-bound access to share specific documents with specific investors for specific windows. Engagement analytics confirmed which investors were seriously reviewing materials vs. just browsing. The audit trail provided legal evidence of the founder&apos;s confidentiality practices for future investor reference.",
        results: [
            "Stealth materials shared with 12 investors across pre-seed and Series A",
            "Zero confidentiality incidents across 9 months of fundraising",
            "Time-bound access ensured investors reviewed materials within agreed windows",
            "Per-viewer watermarking enabled leak attribution if any occurred",
            "Both rounds closed with the same lead investor following both rounds",
        ],
        duration: "Pre-seed: 4 weeks; Series A: 5 weeks",
        outcome: "Pre-seed and Series A closed, stealth maintained, product launch on schedule",
    },
];

const commonPatterns = [
    {
        pattern: "AI auto-categorization eliminates weeks of folder organization",
        detail:
            "Across all six case studies, AI auto-categorization processed hundreds of documents in hours — replacing what would have been weeks of manual filing. First-time founders with no fundraising experience could go from signup to a complete data room in under 24 hours.",
    },
    {
        pattern: "Structured Q&A compresses the Q&A cycle from weeks to days",
        detail:
            "Email and Slack-based Q&A creates confusion, lost questions, and inconsistent answers. Structured Q&A with category routing, urgency flags, and SME assignment compresses Q&A cycles by 60-80% — and creates a clean record of every question for future reference.",
    },
    {
        pattern: "Real-time engagement analytics identify the lead investor early",
        detail:
            "Across every case study, the founder or CEO could identify the most engaged investor within the first 2-3 weeks based on time spent, document breadth, and question quality. This allowed the founder to prioritize the most promising lead and close faster.",
    },
    {
        pattern: "Per-investor NDA enforcement prevents accidental leaks",
        detail:
            "Founders shared confidential materials with 50+ investors across all case studies combined. NDA click-through enforcement, dynamic watermarking, and granular permission controls ensured that no investor received materials they weren&apos;t authorized to see — and the audit trail provided legal evidence if any dispute arose.",
    },
    {
        pattern: "Reusable room templates accelerate subsequent rounds",
        detail:
            "Three of the six case studies involved multiple rounds (bridge, Series B, or strategic). The ability to spin up a new data room from existing materials saved 2-3 weeks of folder organization per subsequent round.",
    },
    {
        pattern: "Customer reference workflows preserve trust and privacy",
        detail:
            "Customer references are often the make-or-break signal in fundraising. Modern data rooms let founders pre-screen reference requests, route intros to the right customers, and provide investors with redacted case studies that preserve customer privacy while demonstrating traction.",
    },
];

const faqItems = [
    {
        question: "What are Startup Fundraising?",
        answer:
            "Startup Fundraising are detailed real-world examples of startups raising capital from pre-seed through Series C and beyond. They cover the challenges founders faced, the solutions deployed (data rooms, Q&A workflows, investor management), and the measurable results achieved (timeline compression, oversubscribed rounds, higher valuations). They serve as benchmarks for founders planning their own raises.",
    },
    {
        question: "How long does a typical startup fundraising round take?",
        answer:
            "Fundraising timelines vary by stage. Pre-seed rounds typically take 4-8 weeks. Seed rounds take 2-3 months. Series A rounds take 3-6 months. Series B and beyond typically take 4-8 months. Modern data room platforms with AI redaction, structured Q&A, and real-time engagement analytics can compress these timelines by 30-50% compared to manual document sharing.",
    },
    {
        question: "When should a startup set up a data room for fundraising?",
        answer:
            "Set up your fundraising data room 4-6 weeks before you plan to start investor conversations. This gives you time to organize all existing documents by workstream, fill gaps identified during mock diligence, clean up the cap table, and test the system with a friendly investor or advisor. Trying to set up a data room the week you send your first pitch deck creates delays and lost momentum.",
    },
    {
        question: "What documents do startups need in their fundraising data room?",
        answer:
            "A complete startup fundraising data room covers six workstreams: (1) Company — pitch deck, executive summary, founder bios; (2) Financials — historical financials, current KPIs, projections, unit economics; (3) Commercial — customer references, pipeline, churn analysis; (4) HR — org chart, employment agreements, equity plan; (5) Technology — architecture overview, security reports, SOC 2 audit; (6) Legal — cap table, IP assignments, material contracts. Modern AI-powered platforms auto-organize these from your existing Google Drive or Dropbox.",
    },
    {
        question: "What is the best data room for startup fundraising?",
        answer:
            "The best data room for startup fundraising in 2026 is SpaceNexus. It combines AI auto-categorization that organizes documents by workstream, per-investor NDA click-through, real-time engagement analytics, structured Q&A workflow, and SOC 2 Type II security — on a transparent monthly subscription designed for early-stage budgets. For pre-seed rounds, DocSend is a simple alternative for sharing pitch decks. For later-stage rounds, the same SpaceNexus platform scales to support full institutional diligence.",
    },
    {
        question: "How do founders track which investors are most engaged?",
        answer:
            "Modern data room platforms show real-time engagement analytics for every investor — which documents they reviewed, for how long, how many times, and which Q&A questions they asked. The founders in these case studies could identify the most engaged investor within 2-3 weeks based on engagement depth and breadth. This signal is far more reliable than verbal interest — investors who spend meaningful time on the financial model and customer contracts are the ones who close.",
    },
    {
        question: "Can first-time founders use a data room for fundraising?",
        answer:
            "Yes — and they should. First-time founders with no fundraising experience can use modern data room platforms to set up a complete fundraising data room in under 24 hours. AI auto-categorization handles the folder structure, pre-built templates cover the common documents, and structured Q&amp;A routes questions to the right people. The data room provides the process discipline that signals professionalism to investors — a key signal for first-time founders.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Startup Fundraising 2026 — Real Founder Wins with SpaceNexus",
    description:
        "Real Startup Fundraising. How founders used SpaceNexus to close pre-seed through Series C rounds faster.",
    author: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
    mainEntityOfPage: "https://spacenexus.net/case-studies/startup-fundraising",
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
        { "@type": "ListItem", position: 2, name: "Startup Fundraising", item: "https://spacenexus.net/case-studies/startup-fundraising" },
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

export default function StartupFundraisingCaseStudiesPage() {
    return (
        <>
            <Script id="sfcs-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="sfcs-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="sfcs-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="sfcs-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">

                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Startup Fundraising</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                6 Real Founder Stories
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Startup Fundraising{" "}
                                <span className="text-[#2563eb]">Case Studies</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Six real startup fundraising rounds, anonymized for confidentiality, showing how founders used SpaceNexus to close pre-seed through Series C and strategic rounds faster. From first-time founders to oversubscribed Series B — across AI, healthcare, fintech, climate, and developer tools.
                            </p>
                            <p className="text-sm text-gray-600 mb-10">
                                15-minute read &nbsp;·&nbsp; Last updated: June 25, 2026 &nbsp;·&nbsp; Anonymized founder data, real outcomes
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
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">The Rounds</p>
                            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">Six startup fundraising rounds, six different journeys</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Each case study has been anonymized for founder confidentiality. Stage, sector, and outcome metrics reflect the actual rounds.
                            </p>
                        </div>
                        <div className="space-y-8">
                            {caseStudies.map((cs, i) => (
                                <article key={i} className="bg-gradient-to-br from-white to-[#f8f9fa] rounded-2xl border border-gray-200 p-7 lg:p-8 shadow-sm">
                                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-6">
                                        <div className="shrink-0 lg:w-48">
                                            <div className="text-xs font-bold text-[#2563eb] uppercase tracking-wider mb-1">Case Study {String(i + 1).padStart(2, "0")}</div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{cs.stage}</h3>
                                            <p className="text-sm font-semibold text-gray-700 mb-3">{cs.sector}</p>
                                            <div className="text-xs text-gray-600 space-y-1">
                                                <p><span className="font-semibold">Duration:</span> {cs.duration}</p>
                                                <p><span className="font-semibold">Outcome:</span> {cs.outcome}</p>
                                            </div>
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <div>
                                                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Scenario</p>
                                                <p className="text-sm text-gray-700 leading-relaxed">{cs.scenario}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Challenge</p>
                                                <p className="text-sm text-gray-700 leading-relaxed">{cs.challenge}</p>
                                            </div>
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 common patterns across these rounds</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Patterns that appeared in multiple case studies — and the operational implications for any founder running a round in 2026.
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
                            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Aggregate results across the six rounds</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { value: "6 stages", label: "Pre-seed through strategic" },
                                    { value: "Multiple sectors", label: "AI, SaaS, fintech, climate" },
                                    { value: "Material", label: "Timeline compression vs. manual processes" },
                                    { value: "Zero", label: "Confidentiality incidents" },
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
                            Frequently asked questions about startup fundraising
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
                            <Link href="/ma-case-studies" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                M&amp;A Case Studies →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/solutions/series-a-fundraising-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Series A Fundraising Data Room →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/solutions/investor-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Investor Data Room →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/investor-due-diligence" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Fundraising &amp; Investor Due Diligence Guide →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Related VDR Resources */}
                <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related VDR Resources</p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring fundraising resources</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Link
                                href="/best-data-room-for-startups"
                                className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                            >
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">7 providers ranked.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Best data rooms for startups →</h3>
                            </Link>
                            <Link
                                href="/solutions/series-a-fundraising-data-room"
                                className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                            >
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Series A solution.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Series A fundraising data room →</h3>
                            </Link>
                            <Link
                                href="/investor-due-diligence"
                                className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                            >
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Complete guide.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Fundraising & investor DD guide →</h3>
                            </Link>
                            <Link
                                href="/checklists/investor-data-room"
                                className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                            >
                                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Checklist.</p>
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Investor data room checklist →</h3>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Set up your fundraising data room today
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Whether you&apos;re a first-time founder raising your pre-seed or a seasoned operator closing your Series B, SpaceNexus delivers the same AI-powered, transparent, and secure data room experience that helped the founders above close their rounds.
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
                    
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
                </section>
            </main>
        </>
    );
}
