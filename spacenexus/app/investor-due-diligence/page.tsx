import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";
import AnswerBlock from "../components/AnswerBlock";

export const metadata: Metadata = {
    title: "Investor Due Diligence 2026",
    description: "Complete guide to investor due diligence. Documents, processes, and tools for fundraising teams and VCs.",
    alternates: {
        canonical: "https://spacenexus.net/investor-due-diligence",
    },
    openGraph: {
        title: "Investor Due Diligence 2026 | SpaceNexus",
        description:
            "Complete guide to investor due diligence. Documents, processes, and tools for fundraisi...",
        url: "https://spacenexus.net/investor-due-diligence",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fundraising & Investor Due Diligence 2026 — Complete Guide",
        description:
            "The complete guide to startup fundraising and investor due diligence. Pre-seed through Series C, diligence checklists, and data room setup.",
    },
    keywords: [
        "fundraising and investor due diligence",
        "startup fundraising",
        "investor due diligence",
        "due diligence fundraising",
        "fundraising due diligence checklist",
        "startup due diligence",
        "investor due diligence process",
        "due diligence data room",
        "fundraising process",
        "pre-seed fundraising",
        "seed round due diligence",
        "Series A due diligence",
        "Series B due diligence",
        "Series C due diligence",
        "VC due diligence",
    ],
};

const stages = [
    {
        stage: "Pre-Seed",
        raiseRange: "Pre-seed range (varies by market)",
        leadInvestors: "Angels, pre-seed funds, accelerators (YC, Techstars)",
        timeline: "3–6 months",
        focus: "Team, vision, early product validation, market opportunity",
        diligenceDepth: "Light — 1–2 calls, basic deck review, founder references",
        documentsNeeded: [
            "Pitch deck (10–15 slides)",
            "Executive summary / one-pager",
            "Founder bios and LinkedIn profiles",
            "Cap table (basic)",
            "Any existing prototype or MVP",
            "Initial customer or user feedback",
        ],
    },
    {
        stage: "Seed",
        raiseRange: "Seed range (varies by market)",
        leadInvestors: "Seed VCs, micro VCs, strategic angels, early-stage funds",
        timeline: "3–6 months",
        focus: "Product-market fit signals, early traction, team depth, market size",
        diligenceDepth: "Moderate — calls with founders, customer references, basic product review",
        documentsNeeded: [
            "Comprehensive pitch deck (15–20 slides)",
            "Product demo or live access",
            "Traction metrics (MRR, users, engagement)",
            "Customer references and case studies",
            "Detailed cap table with all rounds",
            "Founder employment agreements",
            "IP assignment letters",
            "Material contracts (customer, vendor)",
            "Financial model (3-year projection)",
        ],
    },
    {
        stage: "Series A",
        raiseRange: "Series A range (varies by market)",
        leadInvestors: "Series A VCs, growth funds, corporate VCs",
        timeline: "4–8 months",
        focus: "Product-market fit, unit economics, repeatable sales process, team scaling",
        diligenceDepth: "Deep — full data room, customer references, expert calls, market analysis",
        documentsNeeded: [
            "Comprehensive pitch deck and data room",
            "Audited or reviewed financials (2–3 years)",
            "Monthly financial statements (KPIs, MRR, churn, CAC, LTV)",
            "Customer cohort analysis and retention curves",
            "Top 20 customer contracts and references",
            "Sales pipeline and forecast",
            "Full cap table with all SAFE/convertible notes",
            "Employee agreements, equity plan, org chart",
            "Material contracts, IP assignments, litigation",
            "Tech architecture, security, and SOC 2 reports",
            "Product roadmap and key metrics",
            "Market sizing and competitive analysis",
        ],
    },
    {
        stage: "Series B",
        raiseRange: "Series B range (varies by market)",
        leadInvestors: "Growth equity, late-stage VCs, crossover funds, strategic investors",
        timeline: "4–8 months",
        focus: "Scaling playbook, market expansion, competitive moat, path to profitability",
        diligenceDepth: "Very deep — full operational, financial, and technical diligence",
        documentsNeeded: [
            "All Series A diligence materials, expanded",
            "Multi-year financial model with unit economics",
            "Cohort analysis across multiple dimensions",
            "Net dollar retention, gross margin analysis",
            "Full product, engineering, and security audit",
            "Sales and marketing playbook",
            "Hiring plan and org structure",
            "Competitive moat and IP portfolio",
            "International expansion strategy",
            "Board governance and reporting cadence",
        ],
    },
    {
        stage: "Series C+",
        raiseRange: "Series C+ range (varies by market)",
        leadInvestors: "Late-stage VCs, growth equity, hedge funds, sovereign wealth funds",
        timeline: "3–6 months",
        focus: "Market leadership, profitability, exit trajectory, public company readiness",
        diligenceDepth: "Institutional — full operational, financial, legal, and technical diligence with external advisors",
        documentsNeeded: [
            "All Series B diligence materials, expanded",
            "Detailed financial model with sensitivity analysis",
            "Market research and competitive landscape",
            "Exit comparables and IPO readiness",
            "International expansion financials",
            "Risk factors and mitigation plans",
            "Audit-ready financial controls",
            "Board governance and executive compensation",
        ],
    },
];

const diligenceProcess = [
    {
        phase: "01",
        title: "Initial Screening",
        duration: "1–2 weeks",
        description:
            "Investors review the deck, executive summary, and founder background. Most deals are filtered out at this stage based on market, stage, and thesis fit. If you pass, the investor will request a first call.",
    },
    {
        phase: "02",
        title: "Partner Meeting",
        duration: "2–4 weeks",
        description:
            "A 60–90 minute deep-dive with the lead partner. Expect detailed questions on market, traction, team, and business model. This is where the investor decides whether to invest — the rest of diligence confirms or refutes that decision.",
    },
    {
        phase: "03",
        title: "Diligence Deep-Dive",
        duration: "4–8 weeks",
        description:
            "Full due diligence on product, market, team, financials, and legal. Investors review the data room, conduct customer references, run expert calls, and may hire third-party consultants for technical or financial diligence.",
    },
    {
        phase: "04",
        title: "Term Sheet",
        duration: "1–2 weeks",
        description:
            "Lead investor delivers a term sheet outlining valuation, investment amount, board composition, liquidation preferences, anti-dilution, and other key terms. Most founders negotiate with multiple term sheets to drive competitive dynamics.",
    },
    {
        phase: "05",
        title: "Legal Documentation",
        duration: "4–8 weeks",
        description:
            "SAFT, convertible note, or preferred stock purchase agreement is negotiated. Investors conduct legal diligence on corporate structure, IP, contracts, employment, and compliance. Founders engage legal counsel.",
    },
    {
        phase: "06",
        title: "Closing",
        duration: "2–4 weeks",
        description:
            "Final signatures, wire transfers, board appointments, and 83(b) elections for founders. Post-closing, the company files an 83(b) election, updates the cap table, and announces the round.",
    },
];

const diligenceAreas = [
    {
        area: "Product Diligence",
        description:
            "Investors evaluate product-market fit, technical architecture, defensibility, and roadmap. They will request product demos, technical architecture documentation, security audits, customer usage data, and roadmap plans.",
        keyQuestions: [
            "How does the product solve a real, validated problem?",
            "What's the technical architecture and is it scalable?",
            "What is the defensibility — patents, network effects, switching costs?",
            "What is the product roadmap for the next 12–24 months?",
        ],
    },
    {
        area: "Market Diligence",
        description:
            "Investors evaluate market size, growth rate, competitive dynamics, and the company&apos;s position within the market. They commission third-party market research and conduct expert calls with industry veterans.",
        keyQuestions: [
            "What is the TAM, SAM, and SOM?",
            "What is the market growth rate and key drivers?",
            "Who are the main competitors and what is the moat?",
            "What are the barriers to entry?",
        ],
    },
    {
        area: "Team Diligence",
        description:
            "Investors evaluate the founding team&apos;s background, expertise, commitment, and ability to execute. They conduct deep reference checks on founders and key executives.",
        keyQuestions: [
            "Why is this team uniquely positioned to win?",
            "What relevant domain expertise do founders have?",
            "Has the team worked together before?",
            "What is the hiring plan and can they attract top talent?",
        ],
    },
    {
        area: "Financial Diligence",
        description:
            "Investors review historical financials, current KPIs, financial projections, unit economics, and the underlying assumptions. They will request audits or quality-of-earnings reviews for larger rounds.",
        keyQuestions: [
            "Are the historical financials accurate and reconciled?",
            "What are the unit economics (CAC, LTV, payback period)?",
            "What is the burn rate and runway?",
            "Are the projections realistic and supported by evidence?",
        ],
    },
    {
        area: "Legal Diligence",
        description:
            "Investors review corporate structure, IP ownership, contracts, employment, and compliance. They will request corporate records, IP assignments, material contracts, employment agreements, and any litigation history.",
        keyQuestions: [
            "Is the corporate structure clean and properly formed?",
            "Is all IP properly assigned to the company?",
            "Are there any material contracts or pending litigation?",
            "Are there any regulatory or compliance issues?",
        ],
    },
];

const bestPractices = [
    {
        title: "Set up the data room before you need it",
        description:
            "Don't wait for a term sheet to start organizing your data room. Set up the structure, populate key documents, and get the system live 4–6 weeks before you start fundraising. You'll be able to respond to diligence requests in hours instead of days.",
    },
    {
        title: "Build the data room by workstream, not document type",
        description:
            "Organize the data room into six workstreams: Corporate, Financial, Commercial, HR, Technology, and Tax/Regulatory. Investors expect this structure. Putting financial statements under 'Finance' and HR docs under 'HR' (not 'PDFs from the COO') dramatically improves review speed.",
    },
    {
        title: "Pre-populate every document investors will request",
        description:
            "Anticipate every document an investor will request and have it ready. Common requests include cap table history, financial model, customer references, IP assignments, employment agreements, material contracts, and SOC 2 reports. Pre-populating signals preparation and professionalism.",
    },
    {
        title: "Use AI to auto-organize legacy documents",
        description:
            "Most startups have thousands of documents scattered across Google Drive, Notion, Slack, and email. Modern data room platforms use AI to auto-categorize and index these documents at upload — turning weeks of manual organization into hours.",
    },
    {
        title: "Track investor engagement in real time",
        description:
            "Modern data rooms show which investors have viewed which documents, for how long, and how many times. Use this signal to prioritize follow-ups, identify engaged investors, and time your outreach. Investors who spent 45 minutes on your financial model are serious — investors who opened the deck once and disappeared are not.",
    },
    {
        title: "Maintain a 'clean' data room for the whole process",
        description:
            "Once your data room is live, keep it updated. New customer logos, new hires, new product launches — these should be added in real time. Investors who see a data room that hasn't been updated in 6 months lose confidence in the company's execution.",
    },
    {
        title: "Use per-investor NDA gating",
        description:
            "Require every investor to electronically accept an NDA before viewing any document. The click-through acceptance is timestamped and IP-bound, forming part of the legal record. This protects your company's confidential information — and signals professionalism.",
    },
    {
        title: "Prepare for customer reference calls",
        description:
            "Investor customer references are a make-or-break signal. Pre-warn your best customers that they may be contacted, brief them on what to say, and have a 'reference packet' ready. A strong reference can close a deal; a weak one can kill it.",
    },
    {
        title: "Have your cap table clean and audit-ready",
        description:
            "Misaligned cap tables kill deals. Use a cap table management tool (Carta, Pulley, AngelList) and keep it perfectly reconciled. Investors will run their own 409A valuation and compare — any discrepancy creates friction.",
    },
    {
        title: "Run a dry diligence before you fundraise",
        description:
            "Before you start fundraising, hire a fractional CFO or experienced advisor to run a mock diligence. They'll identify gaps in your data room, weak points in your story, and missing documents — before an investor does.",
    },
    {
        title: "Maintain a single source of truth for metrics",
        description:
            "Investors will ask for the same metrics in different forms — MRR, ARR, growth rate, retention, CAC, LTV. If your numbers change between conversations, you lose credibility. Use a single dashboard (ChartMogul, Baremetrics, internal) as your source of truth.",
    },
    {
        title: "Plan for the post-round transition",
        description:
            "Closing the round is just the beginning. Plan for board meetings, investor updates, and follow-on reporting from day one. Investors who see professional post-round operations are more likely to lead your next round.",
    },
];

const faqItems = [
    {
        question: "What is fundraising and investor due diligence?",
        answer:
            "Fundraising is the process by which startups raise capital from investors — typically through priced equity rounds (pre-seed, seed, Series A, B, C+) or convertible instruments (SAFEs, notes). Investor due diligence is the process investors run before investing to verify the company's claims about product, market, team, financials, and legal status. Diligence typically involves a full data room review, customer reference calls, expert interviews, and sometimes third-party financial or technical audits. The process can take 4–8 weeks for priced rounds.",
    },
    {
        question: "How long does fundraising take?",
        answer:
            "Fundraising timelines vary by stage. Pre-seed rounds typically take 3–6 weeks from first conversation to close. Seed rounds take 3–6 months. Series A rounds take 4–8 months including diligence. Series B and beyond typically take 4–8 months but with much deeper institutional diligence. Plan for fundraising to consume 30–50% of a founder's time during the process.",
    },
    {
        question: "What is the difference between fundraising and investor due diligence?",
        answer:
            "Fundraising is the overall process of raising capital — pitching investors, getting term sheets, negotiating, and closing. Investor due diligence is one specific phase within fundraising where investors verify the company's claims by reviewing the data room, conducting reference calls, and running financial or technical analyses. Diligence happens after the term sheet and before closing.",
    },
    {
        question: "What documents do investors need for due diligence?",
        answer:
            "Investor due diligence typically requires: (1) Corporate — cap table, incorporation documents, board minutes, IP assignments; (2) Financial — historical financials, current KPIs, projections, unit economics; (3) Commercial — customer references, pipeline, churn analysis; (4) HR — org chart, employment agreements, equity plan; (5) Technology — architecture overview, security reports, SOC 2 audit; (6) Tax/Regulatory — tax returns, regulatory filings, material contracts. A complete pre-built data room dramatically accelerates the diligence process.",
    },
    {
        question: "How do I prepare for investor due diligence?",
        answer:
            "The best preparation is to set up a comprehensive data room 4–6 weeks before you start fundraising. Organize by workstream (Corporate, Financial, Commercial, HR, Technology, Tax/Regulatory). Pre-populate every document an investor might request. Run a mock diligence with a fractional CFO or experienced advisor. Have your cap table clean and audit-ready. Use a modern data room platform with AI auto-categorization and real-time engagement tracking.",
    },
    {
        question: "What is a data room for fundraising?",
        answer:
            "A fundraising data room is a secure, cloud-based platform where startups organize and share confidential documents with prospective and current investors. Modern data rooms for fundraising include: (1) AI auto-categorization that organizes documents by workstream; (2) per-investor NDA click-through enforcement; (3) per-investor permission groups; (4) real-time engagement analytics showing which investors have reviewed which documents; (5) structured Q&A workflow for investor questions; and (6) SOC 2 Type II security. Top platforms include SpaceNexus, DocSend, and Carta Data Rooms.",
    },
    {
        question: "How long does investor due diligence take?",
        answer:
            "Investor due diligence typically takes 4–8 weeks for a priced equity round. The process includes data room review, customer reference calls, expert interviews, financial analysis, and legal review. For larger rounds (Series B+), third-party technical or financial audits can add 2–4 weeks. Pre-built, well-organized data rooms dramatically compress this timeline — some rounds close in 6 weeks when the data room is ready on day one.",
    },
    {
        question: "What do investors look for during due diligence?",
        answer:
            "Investors look for: (1) Product-market fit signals — strong retention, growing usage, customer love; (2) A team that can execute — relevant expertise, prior wins, complementary skills; (3) A large, growing market — TAM/SAM/SOM, favorable tailwinds; (4) A clear competitive moat — defensibility, switching costs, network effects; (5) Sound unit economics — CAC payback, LTV/CAC ratio, gross margins; (6) Clean legal and financial records — cap table, IP, contracts, employment; (7) Realistic projections — supported by evidence, not hockey-stick fantasies.",
    },
    {
        question: "What is the best data room software for fundraising?",
        answer:
            "The best data room software for fundraising in 2026 is SpaceNexus. It combines AI auto-categorization that organizes documents by workstream, per-investor NDA click-through, real-time engagement analytics, structured Q&A workflow, and SOC 2 Type II security — on a transparent monthly subscription. For pre-seed rounds, DocSend is a simple alternative for sharing pitch decks. For later-stage rounds, the same SpaceNexus platform scales to support full institutional diligence.",
    },
    {
        question: "When should I set up a data room for fundraising?",
        answer:
            "Set up your fundraising data room 4–6 weeks before you plan to start investor conversations. This gives you time to: organize all existing documents by workstream; fill gaps identified during mock diligence; clean up the cap table; and test the system with a friendly investor or advisor. Trying to set up a data room the week you send your first pitch deck creates delays, missed requests, and lost momentum.",
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Fundraising & Investor Due Diligence 2026 — Complete Guide for Startups",
    description:
        "The complete 2026 guide to startup fundraising and investor due diligence. Pre-seed through Series C, what investors look for, the diligence process, data room setup, and best practices.",
    author: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    publisher: { "@type": "Organization", "@id": "https://spacenexus.net/#organization", name: "SpaceNexus", url: "https://spacenexus.net" },
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
    mainEntityOfPage: "https://spacenexus.net/investor-due-diligence",
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
        { "@type": "ListItem", position: 2, name: "Fundraising & Investor Due Diligence", item: "https://spacenexus.net/investor-due-diligence" },
    ],
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://spacenexus.net/#organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
};

export default function FundraisingAndInvestorDueDiligencePage() {
    return (
        <>
            <Script id="fidd-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="fidd-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="fidd-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="fidd-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">

                {/* Hero */}
                <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Investor Due Diligence</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                2026 Complete Guide
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Fundraising &amp; Investor{" "}
                                <span className="text-[#2563eb]">Due Diligence</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                Fundraising is the process by which startups raise capital from investors. Investor due diligence is the verification phase that follows. This guide covers the full journey from pre-seed pitch deck through Series C closing — including what investors look for, the diligence process, data room setup, and best practices for closing rounds faster.
                            </p>
                            <p className="text-sm text-gray-600 mb-10">
                                20-minute read &nbsp;·&nbsp; Last updated: June 25, 2026 &nbsp;·&nbsp; Covers: stages, process, areas, best practices, FAQ
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#stages" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    See Stage-by-Stage Guide
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </a>
                                <a href="#process" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    The Diligence Process
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <AnswerBlock text="Investor due diligence is the verification phase in which investors review a company's legal, financial, commercial, and technical records before funding. Founders typically respond through a structured data room that organizes documents, tracks investor questions, and records access. SpaceNexus provides a virtual data room for running investor diligence and fundraising workflows." />

                {/* What is fundraising */}
                <section className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What is fundraising and investor due diligence?</h2>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                <strong>Fundraising</strong> is the process by which startups raise capital from external investors — typically through priced equity rounds (pre-seed, seed, Series A, B, C+) or convertible instruments (SAFEs, convertible notes). Successful fundraising requires a compelling pitch, a strong data room, and the ability to close multiple investors into a coordinated round.
                            </p>
                            <p>
                                <strong>Investor due diligence</strong> is the verification phase that follows the term sheet. Once an investor commits in principle to invest, they conduct deep due diligence on the company — verifying the product, market, team, financials, and legal status. Diligence can take 4–8 weeks for priced rounds and involves data room review, customer reference calls, expert interviews, and sometimes third-party audits.
                            </p>
                            <p>
                                The two processes are deeply interconnected. Strong fundraising preparation — a well-organized data room, clean cap table, documented metrics, and clear narrative — dramatically accelerates due diligence and reduces the risk of deals falling apart in the final stretch. Most failed deals fail in diligence, not in pitching. Preparation is everything.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stages */}
                <section id="stages" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">By Stage</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fundraising by stage: pre-seed through Series C+</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Each fundraising stage has different raise sizes, lead investors, diligence depth, and document requirements. Here&apos;s what to expect at every stage.
                            </p>
                        </div>
                        <div className="space-y-5">
                            {stages.map((s) => (
                                <div key={s.stage} className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-7 shadow-sm">
                                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                        <div className="shrink-0 lg:w-48">
                                            <div className="text-xs font-bold text-[#2563eb] uppercase tracking-wider mb-1">Stage</div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{s.stage}</h3>
                                            <p className="text-sm font-semibold text-gray-700 mb-3">{s.raiseRange}</p>
                                            <p className="text-xs text-gray-600">{s.timeline}</p>
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <div>
                                                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Lead Investors</p>
                                                <p className="text-sm text-gray-700">{s.leadInvestors}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Investor Focus</p>
                                                <p className="text-sm text-gray-700">{s.focus}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Diligence Depth</p>
                                                <p className="text-sm text-gray-700">{s.diligenceDepth}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Documents Needed</p>
                                                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                                                    {s.documentsNeeded.map((d) => (
                                                        <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] mt-2 shrink-0" />
                                                            <span>{d}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Diligence Process */}
                <section id="process" className="py-16 lg:py-20 bg-white scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">The investor due diligence process</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                From initial pitch to closing, fundraising proceeds through six distinct phases. Understanding each phase helps you prepare the right materials and avoid delays.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {diligenceProcess.map((p) => (
                                <div key={p.phase} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                                    <div className="text-3xl font-black text-[#2563eb] mb-3">{p.phase}</div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                                        <span className="text-xs text-gray-600">· {p.duration}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Diligence Areas */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">What investors look for during due diligence</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Investor due diligence covers five major areas. Each has its own questions, documents, and red flags. Here&apos;s what to expect in each.
                            </p>
                        </div>
                        <div className="space-y-5">
                            {diligenceAreas.map((area) => (
                                <div key={area.area} className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-7 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{area.area}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{area.description}</p>
                                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Key Investor Questions</p>
                                    <ul className="space-y-2">
                                        {area.keyQuestions.map((q) => (
                                            <li key={q} className="flex items-start gap-2 text-sm text-gray-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] mt-2 shrink-0" />
                                                <span>{q}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Best Practices */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">12 best practices for fundraising and due diligence</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                The best-funded startups approach fundraising as a process, not an event. These twelve best practices help you close rounds faster and avoid the most common pitfalls.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            {bestPractices.map((bp, i) => (
                                <div key={bp.title} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-3 mb-2">
                                        <span className="shrink-0 w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-sm font-bold">{i + 1}</span>
                                        <h3 className="text-base font-bold text-gray-900 pt-1">{bp.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed pl-11">{bp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about fundraising and due diligence
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
                            <Link href="/solutions/series-a-fundraising-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Series A Fundraising Data Room →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/solutions/investor-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Investor Data Room →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/solutions/startup-data-room" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Startup Data Room →
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/best-data-room-for-startups" className="text-sm font-semibold text-[#2563eb] hover:underline">
                                Best Data Room for Startups →
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
                            Stop scrambling when investors request documents. Get a purpose-built fundraising data room live in under an hour — with AI auto-categorization, per-investor NDA enforcement, and real-time engagement tracking.
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
                            href="/solutions/investor-data-room"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">For investor communications.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Investor data room →</h3>
                        </Link>
                        <Link
                            href="/solutions/series-a-fundraising-data-room"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">For Series A diligence.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Series A fundraising room →</h3>
                        </Link>
                        <Link
                            href="/best-data-room-for-startups"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">7 providers ranked.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Best data rooms for startups →</h3>
                        </Link>
                        <Link
                            href="/checklists/investor-data-room"
                            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
                        >
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">8 downloadable templates.</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Free investor data room templates →</h3>
                        </Link>
                    </div>
                
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-11-25" />
            </div></div>
            </section>

</main>
        </>
    );
}
