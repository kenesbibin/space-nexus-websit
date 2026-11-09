import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "M&A Due Diligence Checklist 2026 | SpaceNexus",
    description: "200+ item due diligence checklist for M&A, fundraising, and legal. Legal, financial, commercial, HR, tech, ops.",
    alternates: {
        canonical: "https://spacenexus.net/checklists/due-diligence-checklist",
    },
    openGraph: {
        title: "M&A Due Diligence Checklist 2026 | SpaceNexus",
        description:
            "200+ item due diligence checklist for M&A, fundraising, and legal. Legal, financial, co...",
        url: "https://spacenexus.net/checklists/due-diligence-checklist",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Due Diligence Checklist 2026 — Complete M&A Guide (200+ Items) | SpaceNexus",
        description:
            "200+ item due diligence checklist covering every workstream: legal, financial, commercial, HR, technology, and operations.",
    },
    keywords: [
        "due diligence checklist",
        "M&A due diligence checklist",
        "due diligence checklist template",
        "due diligence checklist PDF",
        "M&A due diligence checklist 2026",
        "legal due diligence checklist",
        "financial due diligence checklist",
        "due diligence checklist for acquisitions",
        "due diligence checklist startup",
        "due diligence process",
        "due diligence items list",
        "virtual data room due diligence checklist",
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Due Diligence Checklist 2026 — Complete M&A Guide (200+ Items)",
    description:
        "The complete due diligence checklist for M&A transactions, covering legal, financial, commercial, HR, technology, and operations workstreams with 200+ items.",
    author: { "@type": "Organization", name: "SpaceNexus" },
    publisher: {
        "@type": "Organization",
        name: "SpaceNexus",
        logo: { "@type": "ImageObject", url: "https://spacenexus.net/logo.png" },
    },
    datePublished: "2026-01-01",
    dateModified: "2026-06-01",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://spacenexus.net/checklists/due-diligence-checklist" },
};

const faqItems = [
    {
        question: "What is a due diligence checklist?",
        answer: "A due diligence checklist is a structured list of documents, information, and analyses that a buyer or investor requires to evaluate a target company before completing an acquisition, investment, or other transaction. Due diligence checklists organize the review process into workstreams — typically legal, financial, commercial, human resources, technology/IP, and operations — so that all material risks are identified and documented before closing.",
    },
    {
        question: "What are the main categories in a due diligence checklist?",
        answer: "A comprehensive due diligence checklist covers six main categories: (1) Legal — corporate structure, contracts, litigation, and regulatory compliance; (2) Financial — audited statements, tax records, working capital, and debt; (3) Commercial — customers, market position, competitive landscape, and pipeline; (4) Human Resources — key employees, compensation, equity plans, and retention risk; (5) Technology & IP — source code, patents, cybersecurity, and data privacy; (6) Operations — facilities, suppliers, insurance, and environmental compliance.",
    },
    {
        question: "How long does due diligence take?",
        answer: "Due diligence for a mid-market M&A transaction typically takes 4–8 weeks from the time a data room is opened. Large-cap or complex transactions can run 8–16 weeks. Startup fundraising due diligence (Series A–C) is typically 2–4 weeks. The timeline depends on: how organized the seller's data room is, the complexity and size of the business, the number of workstreams running in parallel, and whether unexpected issues require deeper investigation.",
    },
    {
        question: "What's the difference between buy-side and sell-side due diligence?",
        answer: "Buy-side due diligence is conducted by the acquirer (or investor) to evaluate the target before deciding to proceed and on what terms. Sell-side due diligence (also called vendor due diligence) is commissioned by the seller ahead of a process to proactively prepare documentation, identify and resolve issues before they appear during buyer review, and accelerate the timeline by having an organized data room ready at launch.",
    },
    {
        question: "What documents should go in a due diligence data room?",
        answer: "A due diligence data room should contain: audited financial statements (3 years), management accounts, the cap table, corporate formation documents and board minutes, material contracts, employment agreements, IP ownership documentation, technology architecture overview, cybersecurity certifications, tax returns, insurance policies, regulatory filings, and an org chart. Organizing these documents in a purpose-built virtual data room (VDR) — rather than a shared drive — provides the granular access controls, NDA enforcement, audit trail, and Q&A workflow that a proper due diligence process requires.",
    },
    {
        question: "What are the biggest risks found during due diligence?",
        answer: "The most common deal-breaking issues discovered during due diligence are: (1) Revenue quality problems — revenue is more concentrated, less recurring, or lower-margin than presented; (2) IP ownership gaps — founders or early contractors didn't sign IP assignment agreements; (3) Undisclosed liabilities — contingent legal claims, tax positions, or off-balance-sheet obligations; (4) Key person risk — a single executive holds disproportionate customer relationships or technical knowledge; (5) Contract change-of-control provisions that give major customers or lenders termination rights on the acquisition; (6) Data privacy non-compliance (GDPR, CCPA) creating regulatory exposure.",
    },
    {
        question: "Do I need a virtual data room for due diligence?",
        answer: "Yes, for any transaction involving confidential financial, legal, or personnel documents, a virtual data room (VDR) is the appropriate tool. VDRs provide: mandatory NDA click-through at room entry, document-level and page-level access permissions (so advisors see documents their counterparts cannot), a tamper-evident audit trail required for legal defensibility, structured Q&A workflow to manage due diligence questions, dynamic watermarking to deter unauthorized sharing, and compliance certifications (SOC 2 Type II, ISO 27001) required by financial regulators. Using Dropbox, Google Drive, or SharePoint for M&A due diligence creates legal, compliance, and security exposure.",
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
        { "@type": "ListItem", position: 2, name: "Checklists", item: "https://spacenexus.net/checklists" },
        { "@type": "ListItem", position: 3, name: "Due Diligence Checklist", item: "https://spacenexus.net/checklists/due-diligence-checklist" },
    ],
};

const checklistSections = [
    {
        id: "legal",
        title: "Legal Due Diligence",
        color: "blue",
        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
        description: "Corporate structure, material contracts, litigation, regulatory compliance, and change-of-control analysis.",
        subsections: [
            {
                title: "Corporate Structure & Governance",
                items: [
                    "Certificate of incorporation and all amendments (including restated articles)",
                    "Bylaws and all amendments",
                    "List of all subsidiaries, joint ventures, and affiliated entities",
                    "Corporate organization chart",
                    "Good standing certificates for all jurisdictions",
                    "Shareholder register / cap table (current, fully diluted)",
                    "All share issuances, transfers, and repurchases",
                    "Board of directors and officer list (current and last 3 years)",
                    "Board meeting minutes and written consents (last 3–5 years)",
                    "Annual shareholder meeting minutes (last 3–5 years)",
                    "Shareholder agreements, voting agreements, rights agreements",
                    "Investor rights agreements (registration rights, information rights)",
                    "Rights of first refusal and co-sale agreements",
                    "Anti-dilution provisions and their applicability",
                    "Drag-along and tag-along rights documentation",
                ],
            },
            {
                title: "Material Contracts",
                items: [
                    "All contracts with annual value exceeding $250K (or material threshold)",
                    "Customer contracts — top 20 by revenue, including term, renewal, termination clauses",
                    "Supplier and vendor contracts — critical dependencies",
                    "Change-of-control provisions in all material contracts",
                    "Assignment restrictions in key agreements",
                    "Non-disclosure and confidentiality agreements",
                    "Distribution, reseller, and channel partner agreements",
                    "Licensing agreements (inbound and outbound)",
                    "Joint venture and strategic alliance agreements",
                    "Government and public sector contracts",
                    "Exclusivity provisions and non-compete obligations",
                ],
            },
            {
                title: "Litigation & Regulatory",
                items: [
                    "List of all pending and threatened litigation",
                    "Settlement agreements from the last 5 years",
                    "Regulatory investigations or enforcement actions",
                    "Government inquiries and subpoenas",
                    "EEOC claims, labor disputes, and employment lawsuits",
                    "Product liability claims",
                    "IP disputes and infringement claims",
                    "Anti-trust or competition law matters",
                    "Environmental compliance history and pending matters",
                    "FCPA / anti-bribery compliance review",
                    "Industry-specific regulatory licenses and permits",
                    "Export control and sanctions compliance (OFAC, BIS)",
                ],
            },
        ],
    },
    {
        id: "financial",
        title: "Financial Due Diligence",
        color: "green",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        description: "Audited financials, working capital, debt schedule, tax, and quality-of-earnings analysis.",
        subsections: [
            {
                title: "Financial Statements & Audit",
                items: [
                    "Audited financial statements — last 3 fiscal years (P&L, balance sheet, cash flow)",
                    "Auditor reports, management letters, and responses",
                    "Audit committee meeting minutes (last 3 years)",
                    "Management accounts — current year to date (monthly P&L, balance sheet)",
                    "Prior-year management accounts for comparison",
                    "Interim financial statements for the current stub period",
                    "Accounting policies and any changes in accounting treatment",
                    "Off-balance-sheet arrangements and contingent liabilities",
                    "Related-party transactions",
                    "Restatements or corrections in any period",
                ],
            },
            {
                title: "Revenue & Customer Analysis",
                items: [
                    "Revenue breakdown by customer (top 20 by revenue, % of total)",
                    "Revenue breakdown by product/service line",
                    "Revenue breakdown by geography",
                    "Recurring vs. non-recurring revenue split",
                    "ARR / MRR waterfall (for SaaS/subscription businesses)",
                    "Gross margin by product line",
                    "Revenue recognition policy and deferred revenue schedule",
                    "Backlog and contracted-not-yet-recognized revenue",
                    "Customer churn rate and net revenue retention",
                    "Pipeline and forecasted revenue (next 12 months)",
                    "Historical win rate and sales cycle data",
                ],
            },
            {
                title: "Working Capital & Cash",
                items: [
                    "Working capital bridge — last 12 months monthly",
                    "Normalized working capital target for purchase price adjustment",
                    "Accounts receivable aging schedule",
                    "Allowance for doubtful accounts methodology",
                    "Accounts payable aging schedule",
                    "Inventory valuation and obsolescence reserve",
                    "Cash and cash equivalents reconciliation",
                    "Capex schedule (last 3 years) and planned capex",
                    "Lease obligations (operating and finance leases under ASC 842/IFRS 16)",
                    "Intercompany balances and settlement terms",
                ],
            },
            {
                title: "Debt, Equity & Tax",
                items: [
                    "All credit facilities, term loans, and revolving credit agreements",
                    "Convertible notes and outstanding SAFEs",
                    "Letters of credit and surety bonds",
                    "Liens, pledges, and security interests on assets",
                    "Debt covenants and compliance certificates",
                    "Federal, state, and local tax returns (last 3 years)",
                    "Open tax audits and assessments",
                    "R&D tax credits and other deferred tax assets",
                    "Transfer pricing documentation",
                    "Tax sharing agreements with affiliates",
                    "NOL carryforwards and their limitations under Section 382",
                    "Sales and use tax obligations and compliance",
                ],
            },
        ],
    },
    {
        id: "commercial",
        title: "Commercial Due Diligence",
        color: "purple",
        icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
        description: "Market position, customers, competitive landscape, pipeline, and commercial sustainability.",
        subsections: [
            {
                title: "Market & Competitive Position",
                items: [
                    "Total addressable market (TAM) and serviceable market (SAM) analysis",
                    "Company's market share and relative position",
                    "Competitive landscape map (direct and indirect competitors)",
                    "Competitive differentiation and barriers to entry",
                    "Customer switching costs and stickiness analysis",
                    "Pricing power and pricing history",
                    "Industry growth rate and key market drivers",
                    "Regulatory or market trends that affect the business",
                    "Market research reports and third-party analyst coverage",
                ],
            },
            {
                title: "Customers & Commercial Relationships",
                items: [
                    "Customer list with revenue, tenure, and contract status for top 25",
                    "Customer concentration risk analysis",
                    "Customer satisfaction scores (NPS, CSAT, or equivalent)",
                    "Reference customer interviews (ideally 5–10)",
                    "Customer attrition and retention rates (3-year trend)",
                    "Churn reasons and patterns",
                    "Key account management and relationship ownership",
                    "Key customer contacts and dependency on individual relationships",
                    "Customer credit quality and payment history",
                ],
            },
            {
                title: "Sales, Marketing & Pipeline",
                items: [
                    "Sales organization structure and headcount",
                    "Go-to-market strategy documentation",
                    "Sales cycle length and conversion rates by stage",
                    "Sales pipeline — current (by stage, value, probability)",
                    "Historical win/loss analysis",
                    "Marketing spend and customer acquisition cost (CAC)",
                    "Brand and marketing assets",
                    "Channel partner and distributor relationships",
                    "Lead generation metrics and sources",
                ],
            },
        ],
    },
    {
        id: "technology",
        title: "Technology & IP Due Diligence",
        color: "indigo",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        description: "Source code, IP ownership, cybersecurity, open source compliance, and data privacy.",
        subsections: [
            {
                title: "Intellectual Property",
                items: [
                    "IP ownership schedule — patents, trademarks, copyrights, domain names",
                    "IP assignment agreements — founders, employees, and contractors",
                    "Work-for-hire documentation for any external development",
                    "Open source license audit and software composition analysis",
                    "FOSS (free and open source) compliance review",
                    "Third-party IP licenses (inbound) — scope, exclusivity, transferability",
                    "IP licenses granted to third parties (outbound)",
                    "IP ownership disputes or challenges",
                    "Patent prosecution history and pending applications",
                    "Trade secret protections and confidentiality controls",
                ],
            },
            {
                title: "Technology Architecture & Product",
                items: [
                    "Technology architecture diagram and system overview",
                    "Source code repository access or escrow agreement",
                    "Technical debt assessment",
                    "Scalability analysis — capacity and headroom",
                    "Third-party software dependencies and SaaS subscriptions",
                    "Infrastructure and hosting agreements (AWS, GCP, Azure)",
                    "Disaster recovery and business continuity plan",
                    "Uptime and SLA compliance history",
                    "Product roadmap (current and 12-month)",
                    "Engineering team structure and key person dependencies",
                ],
            },
            {
                title: "Cybersecurity & Data Privacy",
                items: [
                    "SOC 2 Type II certification and audit report",
                    "ISO 27001 certification (if applicable)",
                    "Penetration test results (last 12 months)",
                    "Vulnerability disclosure policy and bug bounty program",
                    "Security incident history and breach notifications",
                    "Incident response plan",
                    "Access control and identity management policies",
                    "Data encryption standards (at rest and in transit)",
                    "GDPR compliance documentation and DPA",
                    "CCPA privacy policy and consumer rights procedures",
                    "HIPAA compliance (if applicable — healthcare data)",
                    "Data retention and deletion policies",
                    "Third-party security assessments of key vendors",
                ],
            },
        ],
    },
    {
        id: "hr",
        title: "Human Resources Due Diligence",
        color: "orange",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        description: "Key employees, compensation structure, equity plans, retention risk, and labor compliance.",
        subsections: [
            {
                title: "Organization & Key People",
                items: [
                    "Organizational chart — current, by department",
                    "Headcount by function, location, and employment type",
                    "Resumes or bios for all C-suite and VP-level executives",
                    "Key person identification — who are the critical 5–10 employees?",
                    "Succession planning or absence of coverage for key roles",
                    "Recent departures at the management level (last 12 months)",
                    "Employee tenure distribution",
                    "Cultural assessment (Glassdoor, internal surveys, etc.)",
                ],
            },
            {
                title: "Compensation & Equity",
                items: [
                    "Total compensation summary — salary, bonus, benefits, equity by employee",
                    "Employment agreements for all C-suite and key employees",
                    "Offer letters for recent senior hires",
                    "Non-compete, non-solicitation, and IP assignment agreements",
                    "Equity incentive plan (ESOP / equity plan document)",
                    "Stock option grant schedule — all outstanding grants with strike price, vesting, and expiry",
                    "Fully diluted cap table with option pool",
                    "409A valuation reports",
                    "Change-of-control acceleration provisions in equity agreements",
                    "Bonus plan structures and historical payout history",
                    "Commission plans for sales team",
                ],
            },
            {
                title: "Benefits, Compliance & Labor",
                items: [
                    "Benefits plan documentation — health, dental, vision, retirement",
                    "401(k) or pension plan compliance and funding status",
                    "Workers' compensation claims history",
                    "COBRA and WARN Act compliance",
                    "Employee handbook and HR policies",
                    "EEOC reports and diversity data (if applicable)",
                    "Independent contractor agreements and classification analysis",
                    "PEO or EOR arrangements (if applicable)",
                    "Labor union agreements (if applicable)",
                    "Immigration status and work authorization for key hires",
                    "OSHA compliance and workplace safety record",
                ],
            },
        ],
    },
    {
        id: "operations",
        title: "Operations Due Diligence",
        color: "rose",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-4 4h10a2 2 0 002-2v-3a2 2 0 00-2-2H9a2 2 0 00-2 2v3a2 2 0 002 2z",
        description: "Facilities, supply chain, insurance, environmental compliance, and operational dependencies.",
        subsections: [
            {
                title: "Facilities & Real Estate",
                items: [
                    "All office, warehouse, and facility lease agreements",
                    "Lease terms — expiry dates, renewal options, termination rights",
                    "Owned real property — title reports, surveys, mortgages",
                    "Sublease agreements and assignment provisions",
                    "Change-of-control provisions in property leases",
                    "Capex commitments for facility improvements",
                    "Equipment leases and maintenance agreements",
                ],
            },
            {
                title: "Supply Chain & Vendors",
                items: [
                    "Key vendor and supplier contracts",
                    "Single-source or sole-source dependency analysis",
                    "Vendor concentration risk (which vendors represent >10% of COGS?)",
                    "Supplier financial health (are key vendors at risk?)",
                    "Inventory management policy and safety stock levels",
                    "Lead time analysis and supply chain disruption history",
                    "Quality control procedures and defect rates",
                ],
            },
            {
                title: "Insurance & Environmental",
                items: [
                    "Insurance policies — general liability, property, D&O, E&O",
                    "Cyber liability insurance policy and coverage limits",
                    "Key man insurance",
                    "Claims history (last 5 years)",
                    "Environmental permits and compliance certifications",
                    "Environmental liabilities — soil contamination, waste disposal",
                    "Phase I/II environmental site assessments",
                    "Health, safety, and environmental (HSE) incident log",
                ],
            },
        ],
    },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; subsectionBg: string; icon: string }> = {
    blue: {
        bg: "from-blue-50 to-white",
        border: "border-blue-200",
        text: "text-blue-700",
        badge: "bg-blue-100 text-blue-700",
        subsectionBg: "bg-blue-50/50",
        icon: "text-blue-600",
    },
    green: {
        bg: "from-green-50 to-white",
        border: "border-green-200",
        text: "text-green-700",
        badge: "bg-green-100 text-green-700",
        subsectionBg: "bg-green-50/50",
        icon: "text-green-600",
    },
    purple: {
        bg: "from-purple-50 to-white",
        border: "border-purple-200",
        text: "text-purple-700",
        badge: "bg-purple-100 text-purple-700",
        subsectionBg: "bg-purple-50/50",
        icon: "text-purple-600",
    },
    indigo: {
        bg: "from-indigo-50 to-white",
        border: "border-indigo-200",
        text: "text-indigo-700",
        badge: "bg-indigo-100 text-indigo-700",
        subsectionBg: "bg-indigo-50/50",
        icon: "text-indigo-600",
    },
    orange: {
        bg: "from-orange-50 to-white",
        border: "border-orange-200",
        text: "text-orange-700",
        badge: "bg-orange-100 text-orange-700",
        subsectionBg: "bg-orange-50/50",
        icon: "text-orange-600",
    },
    rose: {
        bg: "from-rose-50 to-white",
        border: "border-rose-200",
        text: "text-rose-700",
        badge: "bg-rose-100 text-rose-700",
        subsectionBg: "bg-rose-50/50",
        icon: "text-rose-600",
    },
};

const totalItems = checklistSections.reduce(
    (sum, s) => sum + s.subsections.reduce((s2, sub) => s2 + sub.items.length, 0),
    0
);

const ddTypes = [
    {
        type: "M&A Sell-Side",
        aka: "Vendor Due Diligence",
        description: "Commissioned by the seller before launching a sale process. Identifies issues proactively, prepares a clean data room, and reduces buyer uncertainty — compressing timelines and supporting valuation.",
        keyDocs: ["Audited financials + normalized EBITDA bridge", "Cap table and org chart", "Top 20 customer contracts", "IP ownership certificates", "Clean SOC 2 / ISO 27001 certification"],
        link: "/solutions/mergers-and-acquisitions-vdr",
    },
    {
        type: "M&A Buy-Side",
        aka: "Confirmatory Due Diligence",
        description: "The buyer's independent review of the target before signing. Validates the investment thesis, confirms financial performance, uncovers risks, and informs purchase price adjustments or indemnity provisions.",
        keyDocs: ["Quality of Earnings (QoE) report", "Working capital analysis", "Litigation and regulatory review", "IT and cybersecurity assessment", "Key employee and compensation review"],
        link: "/industries/investment-banking",
    },
    {
        type: "Series A Fundraising",
        aka: "Investor Due Diligence",
        description: "VC and growth equity investors conduct due diligence on startups before term sheet or close. Shorter than M&A but covers the same core workstreams — founders should prepare a clean, organized data room before starting investor meetings.",
        keyDocs: ["Pitch deck + financial model", "Cap table and SAFEs/notes", "IP assignment agreements", "MRR/ARR waterfall", "Reference customers"],
        link: "/solutions/series-a-fundraising-data-room",
    },
    {
        type: "Real Estate",
        aka: "Property Due Diligence",
        description: "Title, environmental, zoning, and lease review for commercial property acquisitions. Involves a specialist Phase I/II environmental assessment and title search alongside financial analysis of rental income.",
        keyDocs: ["Title report and survey", "Phase I environmental assessment", "Lease agreements", "Property financials (rent roll, NOI)", "Zoning and building permits"],
        link: null,
    },
    {
        type: "Legal / Law Firm",
        aka: "Legal Due Diligence",
        description: "Counsel-led review of contracts, litigation exposure, regulatory compliance, and IP ownership. Legal due diligence often surfaces the most deal-critical risks — change-of-control triggers, IP gaps, and undisclosed liabilities.",
        keyDocs: ["Material contracts with COC provisions", "Litigation register", "Regulatory licenses and compliance filings", "IP chain-of-title documents", "Data privacy compliance documentation"],
        link: "/industries/law-firms",
    },
    {
        type: "Life Sciences / Healthcare",
        aka: "Clinical & Regulatory DD",
        description: "For pharma, biotech, and healthcare M&A. Adds clinical data (trial results, regulatory submissions, FDA status), HIPAA compliance, manufacturing and supply chain quality, and reimbursement analysis.",
        keyDocs: ["Regulatory filings (FDA, EMA, PMDA)", "Clinical trial data and protocols", "HIPAA compliance documentation", "Manufacturing Quality Agreements", "Reimbursement and payer contracts"],
        link: "/industries/life-sciences",
    },
];

const timeline = [
    { week: "Week 1", title: "Data Room Preparation", side: "sell", items: ["Organize and upload all documents to VDR", "Apply access permissions by workstream", "Assign Q&A categories and responsible parties", "Open NDA click-through for buyer parties"] },
    { week: "Week 1–2", title: "Initial Document Review", side: "buy", items: ["Review corporate structure and cap table", "Download audited financials and management accounts", "Identify top 20 customers and contracts", "Submit initial Q&A requests"] },
    { week: "Week 2–4", title: "Deep-Dive Workstreams", side: "both", items: ["Legal: contract review, litigation search, IP chain-of-title", "Financial: QoE, working capital, debt schedule", "Commercial: customer interviews and market analysis", "Technology: architecture review, security audit"] },
    { week: "Week 4–6", title: "Management Presentations", side: "both", items: ["Management team presentations by workstream", "Facility and site visits (if applicable)", "Follow-up Q&A and document requests", "Key employee retention conversations"] },
    { week: "Week 6–8", title: "Findings & SPA Negotiation", side: "buy", items: ["Consolidate all workstream findings", "Identify material issues requiring price adjustment or indemnity", "Prepare due diligence findings report", "Negotiate representations, warranties, and indemnities in SPA"] },
    { week: "Week 8+", title: "Sign & Close", side: "both", items: ["Signature closing conditions checklist", "Escrow and funds flow mechanics", "Closing deliverables (bring-down certificates, officer certs)", "Data room access withdrawal or transition"] },
];

const commonMistakes = [
    {
        mistake: "Starting with a disorganized data room",
        impact: "Delays the process by 2–4 weeks, signals poor management hygiene, and gives buyers grounds to lower their offer or add indemnity provisions.",
        fix: "Build and populate your virtual data room before launching the process. Use AI auto-categorization to index documents instantly.",
    },
    {
        mistake: "Missing IP assignment agreements",
        impact: "If early contractors or co-founders didn't sign IP assignments, the company doesn't legally own its own product. This is a deal-breaker in technology M&A.",
        fix: "Audit IP assignments before launching the process. If missing, execute retroactive assignments before the data room opens.",
    },
    {
        mistake: "Ignoring change-of-control provisions",
        impact: "Major customer or lender contracts may give counterparties the right to terminate on a change of control. One undisclosed provision can kill or significantly reprice a deal.",
        fix: "Review all material contracts for COC provisions in the first week of sell-side preparation. Get consent where required.",
    },
    {
        mistake: "Using Dropbox or Google Drive as a data room",
        impact: "No audit trail, no granular access controls, no Q&A workflow, no NDA enforcement. Legal and regulatory exposure for securities-related document sharing.",
        fix: "Use a purpose-built virtual data room (VDR) with SOC 2 Type II certification, document-level permissions, and a tamper-evident audit trail.",
    },
    {
        mistake: "Not tracking buyer engagement",
        impact: "Sellers lose negotiating leverage when they can't tell which buyers are serious and which are gathering competitive intelligence.",
        fix: "Use a VDR with real-time buyer analytics — track which parties are reading which documents and for how long.",
    },
    {
        mistake: "Presenting unaudited or inconsistent financials",
        impact: "Revenue adjustments discovered by QoE advisors re-open price negotiations and erode trust. Restatements mid-process are deal-killers.",
        fix: "Have your CFO and auditor reconcile all management accounts to audited statements before the data room opens. Commission an independent QoE proactively.",
    },
];

export default function DueDiligenceChecklistPage() {
    return (
        <>
            <Script id="ddcl-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="ddcl-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="ddcl-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="pt-20 lg:pt-24">

                {/* Hero */}
                <section className="py-14 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6">
                                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <Link href="/checklists" className="hover:text-[#2563eb] transition-colors">Checklists</Link>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                <span className="text-gray-600">Due Diligence Checklist</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                                Updated June 2026 · {totalItems}+ checklist items
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                The Complete{" "}
                                <span className="text-[#2563eb]">Due Diligence Checklist</span>
                                {" "}for 2026
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                {totalItems}+ items across 6 workstreams — legal, financial, commercial, technology, HR, and operations. Built for M&A advisors, deal teams, and founders preparing for an acquisition or fundraising process.
                            </p>

                            {/* Stats strip */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-2xl mx-auto">
                                {[
                                    { label: "Checklist items", value: `${totalItems}+` },
                                    { label: "Workstreams", value: "6" },
                                    { label: "Deal types", value: "6" },
                                    { label: "Always free", value: "✓" },
                                ].map((s) => (
                                    <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4">
                                        <p className="text-2xl font-bold text-[#2563eb]">{s.value}</p>
                                        <p className="text-xs text-gray-600 mt-0.5">{s.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#checklist" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                                    View Full Checklist
                                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                </a>
                                <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                    Execute in SpaceNexus
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is due diligence */}
                <section className="py-14 bg-white border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What is due diligence?</h2>
                        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
                            <p>
                                <strong className="text-gray-900">Due diligence</strong> is the structured process of investigating a business, asset, or investment before completing a transaction. In an M&A context, due diligence is the period between signing a letter of intent (LOI) and signing a definitive purchase agreement — during which the buyer's advisors independently verify the seller's representations about the business.
                            </p>
                            <p>
                                A due diligence checklist organizes this investigation into workstreams, ensuring no material area is overlooked. Due diligence is not a bureaucratic exercise — it is the mechanism by which acquirers and investors validate their investment thesis, discover deal-breakers, and establish the factual basis for purchase price adjustments and indemnity provisions.
                            </p>
                            <p>
                                The scope of any due diligence checklist will vary by deal type, industry, and transaction size. The checklist below covers the standard workstreams for a mid-market M&A transaction. Deal teams should expand or contract scope based on materiality and deal-specific risks.
                            </p>
                        </div>
                    </div>
                </section>

                {/* DD Types */}
                <section className="py-14 lg:py-18 bg-[#f8f9fa] border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Types of due diligence by transaction</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">The due diligence process and checklist scope varies by deal type. Select your transaction type below.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {ddTypes.map((dd) => (
                                <div key={dd.type} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col hover:shadow-md hover:border-[#2563eb]/20 transition-all duration-300">
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <div>
                                            <h3 className="text-base font-bold text-gray-900">{dd.type}</h3>
                                            <p className="text-xs text-gray-600 italic">{dd.aka}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{dd.description}</p>
                                    <div className="mb-4">
                                        <p className="text-xs font-semibold text-gray-700 mb-2">Key documents</p>
                                        <ul className="space-y-1.5">
                                            {dd.keyDocs.map((doc) => (
                                                <li key={doc} className="flex items-start gap-2 text-xs text-gray-600">
                                                    <span className="text-[#2563eb] shrink-0 mt-0.5">·</span>{doc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {dd.link && (
                                        <div className="mt-auto pt-3 border-t border-gray-100">
                                            <Link href={dd.link} className="text-xs font-semibold text-[#2563eb] hover:underline inline-flex items-center gap-1">
                                                SpaceNexus for this deal type
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The main checklist */}
                <section id="checklist" className="py-16 lg:py-24 bg-white scroll-mt-24">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                The complete due diligence checklist — {totalItems}+ items
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Organized by workstream. Each section covers documents typically requested by buy-side advisors, organized as they would appear in a virtual data room index.
                            </p>
                        </div>

                        {/* TOC */}
                        <div className="bg-[#f8f9fa] rounded-2xl border border-gray-200 p-6 mb-12">
                            <p className="text-sm font-bold text-gray-900 mb-4">Jump to workstream</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {checklistSections.map((s) => {
                                    const c = colorMap[s.color];
                                    const itemCount = s.subsections.reduce((sum, sub) => sum + sub.items.length, 0);
                                    return (
                                        <a key={s.id} href={`#${s.id}`} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border ${c.border} bg-white hover:shadow-sm transition-all text-sm font-semibold ${c.text}`}>
                                            <svg className={`w-4 h-4 shrink-0 ${c.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                                            </svg>
                                            <span>{s.title.split(" Due Diligence")[0].split(" & ")[0]}</span>
                                            <span className="ml-auto text-xs font-normal text-gray-600">{itemCount}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Workstream sections */}
                        <div className="space-y-14">
                            {checklistSections.map((section) => {
                                const c = colorMap[section.color];
                                const sectionTotal = section.subsections.reduce((sum, sub) => sum + sub.items.length, 0);
                                return (
                                    <div key={section.id} id={section.id} className="scroll-mt-28">
                                        {/* Section header */}
                                        <div className={`bg-gradient-to-r ${c.bg} border-l-4 ${c.border} rounded-r-2xl px-7 py-5 mb-6`}>
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-xl bg-white border ${c.border} flex items-center justify-center shrink-0`}>
                                                    <svg className={`w-5 h-5 ${c.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={section.icon} />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3 mb-0.5">
                                                        <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                                                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>{sectionTotal} items</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600">{section.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Subsections */}
                                        <div className="space-y-5">
                                            {section.subsections.map((sub) => (
                                                <div key={sub.title} className={`rounded-xl border border-gray-200 overflow-hidden`}>
                                                    <div className={`px-5 py-3 ${c.subsectionBg} border-b border-gray-200`}>
                                                        <h4 className="text-sm font-bold text-gray-800">{sub.title}</h4>
                                                    </div>
                                                    <ul className="divide-y divide-gray-100">
                                                        {sub.items.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-4 px-5 py-3.5 bg-white hover:bg-gray-50/50 transition-colors">
                                                                <span className={`w-5 h-5 rounded border-2 ${c.border} mt-0.5 shrink-0 flex items-center justify-center`}>
                                                                    <svg className={`w-2.5 h-2.5 ${c.text} opacity-20`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                                    </svg>
                                                                </span>
                                                                <span className="text-sm text-gray-700">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* SpaceNexus CTA strip */}
                <section className="py-10 bg-[#2563eb]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h3 className="text-xl font-bold text-white mb-2">Execute this checklist inside SpaceNexus</h3>
                        <p className="text-blue-200 text-sm mb-6">Upload your documents, track Q&A by workstream, and share securely with buyers — all in one auditable platform.</p>
                        <Link href="/demo" className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-[#2563eb] bg-white hover:bg-blue-50 rounded-full transition-all duration-200 shadow-lg">
                            Start a free data room
                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>
                </section>

                {/* Timeline */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Due diligence timeline — week by week</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Standard timeline for a mid-market M&A transaction. Adjust based on transaction complexity and data room readiness.</p>
                        </div>
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-[88px] top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />
                            <div className="space-y-6">
                                {timeline.map((phase, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="text-right shrink-0 w-20 pt-4 hidden sm:block">
                                            <span className="text-xs font-semibold text-[#2563eb]">{phase.week}</span>
                                        </div>
                                        <div className="relative sm:pl-8">
                                            <div className="absolute -left-1.5 top-4 w-3 h-3 rounded-full bg-[#2563eb] border-2 border-white shadow hidden sm:block" />
                                            <div className={`rounded-xl border p-5 ${phase.side === "sell" ? "border-blue-200 bg-blue-50/30" : phase.side === "buy" ? "border-green-200 bg-green-50/30" : "border-gray-200 bg-gray-50/30"}`}>
                                                <div className="flex items-center gap-3 mb-3">
                                                    <h4 className="text-sm font-bold text-gray-900">{phase.title}</h4>
                                                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${phase.side === "sell" ? "bg-blue-100 text-blue-700" : phase.side === "buy" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                                                        {phase.side === "sell" ? "Sell-side" : phase.side === "buy" ? "Buy-side" : "Both parties"}
                                                    </span>
                                                    <span className="text-xs text-gray-600 sm:hidden">{phase.week}</span>
                                                </div>
                                                <ul className="space-y-1.5">
                                                    {phase.items.map((item) => (
                                                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                                                            <svg className="w-3.5 h-3.5 text-gray-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common mistakes */}
                <section className="py-16 lg:py-20 bg-[#f8f9fa]">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">6 due diligence mistakes that kill deals</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Avoidable errors that surface during due diligence and their impact on deal outcomes.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            {commonMistakes.map((m, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                                            <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                                        </span>
                                        <h3 className="text-sm font-bold text-gray-900">{m.mistake}</h3>
                                    </div>
                                    <p className="text-xs text-red-700 bg-red-50 rounded-lg px-3 py-2 mb-3 leading-relaxed"><strong>Impact:</strong> {m.impact}</p>
                                    <p className="text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2 leading-relaxed"><strong>Fix:</strong> {m.fix}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
                            Frequently asked questions about due diligence
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

                {/* Related resources */}
                <section className="py-10 bg-[#f8f9fa] border-t border-gray-100">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-sm font-semibold text-gray-700 mb-5">Related resources</p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { title: "M&A VDR — Virtual Data Room for Mergers", href: "/solutions/mergers-and-acquisitions-vdr", label: "Solution" },
                                { title: "Series A Fundraising Data Room Guide", href: "/solutions/series-a-fundraising-data-room", label: "Solution" },
                                { title: "Virtual Data Room Providers Compared", href: "/virtual-data-room-providers", label: "Guide" },
                                { title: "Data Room Software — Buyer's Guide", href: "/data-room-software", label: "Guide" },
                            ].map((post) => (
                                <Link key={post.href} href={post.href} className="group flex flex-col p-5 border border-gray-200 bg-white rounded-xl hover:border-[#2563eb]/30 hover:shadow-md transition-all duration-200">
                                    <span className="text-xs font-semibold text-[#2563eb] mb-2">{post.label}</span>
                                    <p className="text-sm font-medium text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">{post.title} →</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Ready to run a cleaner due diligence process?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            SpaceNexus gives your deal team a purpose-built virtual data room — AI auto-categorization, structured Q&A, buyer engagement analytics, and SOC 2 Type II security with transparent published pricing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                                Request a Live Demo
                            </Link>
                            <Link href="/checklists" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                                More Free Checklists
                            </Link>
                        </div>
                        <p className="text-sm text-gray-600 mt-6">No credit card required · SOC 2 Type II certified · Cancel anytime</p>
                    
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
                </section>

            </main>
        </>
    );
}
