import Link from "next/link";
import AnswerReadyBlock from "../components/AnswerReadyBlock";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import ComparisonMethodology from "../components/ComparisonMethodology";

export const metadata: Metadata = {
    title: "Kindora vs Competitors | Nonprofit Software Comparison",
    description:
        "Compare Kindora with Bloomerang, Salesforce Nonprofit Cloud, Bonterra Apricot, Keela, and spreadsheets across nonprofit management capabilities.",
    alternates: {
        canonical: "https://spacenexus.net/kindora/vs-competitors",
    },
    openGraph: {
        title: "Kindora vs Competitors — Nonprofit Software Comparison",
        description:
            "Compare publicly documented donor, grant, case management, accounting, volunteer, fundraising, and reporting capabilities across nonprofit software.",
        url: "https://spacenexus.net/kindora/vs-competitors",
        siteName: "Kindora by Space Nexus",
        type: "website",
    },
    keywords: [
        "kindora vs bloomerang",
        "kindora vs salesforce nonprofit",
        "kindora vs bonterra",
        "kindora vs keela",
        "nonprofit software comparison",
        "bloomerang alternative",
        "salesforce nonprofit alternative",
        "nonprofit crm comparison",
        "all-in-one nonprofit platform",
    ],
};

const features = [
    "Donor CRM & Tracking",
    "Grant Lifecycle Management",
    "Client Case Management",
    "Nonprofit Accounting & Cost Allocation",
    "Volunteer Management",
    "Campaign & Fundraising Tools",
    "Built-in Communications Hub",
    "Export-Ready Board Reports",
    "Official pricing details available",
    "Published setup-time estimate",
    "API & Integrations",
    "Reporting & Analytics",
];

const kindoraReferenceLinks = [
    { label: "Kindora pricing and plan details", url: "/kindora/pricing" },
    { label: "Donor management", url: "/kindora/features/donor-management" },
    { label: "Grant management", url: "/kindora/features/grant-management" },
    { label: "Client programs", url: "/kindora/features/client-management" },
    { label: "Financials and cost allocation", url: "/kindora/features/financials" },
    { label: "Reports and analytics", url: "/kindora/features/reporting" },
    { label: "API and integrations overview", url: "/kindora/cloud-based-nonprofit-crm" },
];

type FeatureValue = true | false | "partial";

const competitors: {
    name: string;
    tagline: string;
    color: string;
    values: FeatureValue[];
}[] = [
        {
            name: "Kindora",
            tagline: "Nonprofit platform",
            color: "bg-[#2563eb] text-white",
            values: [true, true, true, true, true, true, true, true, true, true, true, true],
        },
        {
            name: "Bloomerang",
            tagline: "CRM & fundraising",
            color: "bg-gray-100 text-gray-700",
            values: [true, "partial", false, false, true, true, true, "partial", true, false, "partial", true],
        },
        {
            name: "Salesforce NPC",
            tagline: "Nonprofit platform",
            color: "bg-gray-100 text-gray-700",
            values: [true, "partial", "partial", "partial", true, true, "partial", "partial", true, false, true, true],
        },
        {
            name: "Bonterra Apricot",
            tagline: "Case management",
            color: "bg-gray-100 text-gray-700",
            values: [false, false, true, false, false, false, false, "partial", false, false, "partial", true],
        },
        {
            name: "Keela",
            tagline: "Fundraising CRM",
            color: "bg-gray-100 text-gray-700",
            values: [true, false, false, false, true, true, true, "partial", true, false, true, true],
        },
        {
            name: "Spreadsheets",
            tagline: "General-purpose",
            color: "bg-gray-100 text-gray-700",
            values: [false, false, false, false, false, false, false, false, true, false, false, false],
        },
    ];

const competitorDetails = [
    {
        name: "Bloomerang",
        slug: "bloomerang",
        headline: "Kindora vs Bloomerang",
        verdict: "Bloomerang's public materials describe donor CRM, fundraising, volunteer engagement, and supporter communications.",
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        textColor: "text-blue-700",
        bloomerangStrengths: [
            "Donor profiles, giving histories, and constituent timelines",
            "Fundraising tools including donation forms and event management",
            "Volunteer engagement is included in its Giving Platform",
            "Reporting dashboards, donor insights, and automated outreach",
        ],
        bloomerangWeaknesses: [
            "The reviewed pages describe grant tracking, but not a full grant lifecycle or compliance workflow",
            "The reviewed pages do not document client case management",
            "The reviewed pages do not document nonprofit accounting or cost allocation",
        ],
        kindoraAdvantages: [
            "Donor records and donation history are documented on Kindora's feature page",
            "Grant lifecycle tracking is documented on Kindora's feature page",
            "Client programs and nonprofit financial workflows are documented on Kindora's feature pages",
        ],
        bestFor: "Teams evaluating donor CRM, fundraising, volunteer engagement, and supporter communications",
        kindoraBestFor: "Nonprofits seeking donor, grant, client-program, and financial workflows in one platform",
        sourceLinks: [
            { label: "Bloomerang CRM", url: "https://bloomerang.com/crm" },
            { label: "Bloomerang pricing and product bundle", url: "https://bloomerang.com/pricing" },
        ],
    },
    {
        name: "Salesforce Nonprofit Cloud",
        slug: "salesforce",
        headline: "Kindora vs Salesforce Nonprofit Cloud",
        verdict: "Salesforce describes Nonprofit Cloud as a platform spanning fundraising, programs, volunteer management, and outcome management.",
        color: "from-violet-500 to-violet-600",
        bgColor: "bg-violet-50",
        borderColor: "border-violet-200",
        textColor: "text-violet-700",
        bloomerangStrengths: [
            "Fundraising portfolios, donor profiles, gift entry, and segmentation",
            "Program and outcome management, including targets and assessments",
            "Volunteer events, roles, shifts, applications, and hours",
            "Consult vendor current pricing; quotes vary by organization and plan.",
        ],
        bloomerangWeaknesses: [
            "Kindora and Salesforce package, licensing, and implementation costs use different models; compare quotes for your team",
            "The reviewed Nonprofit Cloud page does not provide a directly comparable setup-time estimate",
        ],
        kindoraAdvantages: [
            "Kindora publishes a free Starter tier for up to five team members",
            "Kindora documents donor, grant, client-program, and financial workflows in its feature pages",
            "Kindora lists custom Professional and Enterprise tiers; compare plan details for your requirements",
        ],
        bestFor: "Organizations seeking a nonprofit platform for fundraising, programs, volunteers, and outcomes",
        kindoraBestFor: "Small and mid-sized nonprofits comparing a free entry tier and integrated operating workflows",
        sourceLinks: [
            { label: "Salesforce Nonprofit Cloud features and pricing", url: "https://www.salesforce.com/nonprofit/cloud/" },
        ],
    },
    {
        name: "Bonterra Apricot",
        slug: "bonterra",
        headline: "Kindora vs Bonterra Apricot",
        verdict: "Bonterra presents Apricot as nonprofit case-management software for participant and program workflows.",
        color: "from-orange-500 to-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        textColor: "text-orange-700",
        bloomerangStrengths: [
            "Participant and program data in a case-management system",
            "Data capture, forms, workflows, scheduling, and referrals are described",
            "Reporting, analytics, dashboards, and API access are described for Apricot tiers",
            "Impact measurement and funder-facing reporting are described",
        ],
        bloomerangWeaknesses: [
            "Donor CRM is not described on the reviewed Apricot product page",
            "Grant lifecycle management is not described on the reviewed Apricot product page",
            "Nonprofit accounting and cost allocation are not described on the reviewed Apricot product page",
        ],
        kindoraAdvantages: [
            "Kindora documents donor management and grant tracking alongside client-program features",
            "Kindora's public pricing page lists nonprofit accounting and cost allocation in its Professional tier",
            "Compare the products against your required case-management and reporting workflows",
        ],
        bestFor: "Organizations evaluating participant case management, program data, and impact reporting",
        kindoraBestFor: "Organizations seeking case-management workflows alongside donor, grant, and financial tools",
        sourceLinks: [
            { label: "Bonterra Apricot product information", url: "https://www.bonterratech.com/product/apricot" },
        ],
    },
    {
        name: "Keela",
        slug: "keela",
        headline: "Kindora vs Keela",
        verdict: "Keela's public materials describe a fundraising CRM with donor management, communications, automation, and reporting.",
        color: "from-emerald-500 to-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        textColor: "text-emerald-700",
        bloomerangStrengths: [
            "Donor database, profiles, and gift history",
            "Donation forms, email and text communication, and automated journeys",
            "Dashboards, reporting, and integrations",
            "Pricing is based on the number of contacts; volunteer management is listed",
        ],
        bloomerangWeaknesses: [
            "Grant lifecycle management is not described on the reviewed homepage and pricing page",
            "Client case management is not described on the reviewed homepage and pricing page",
            "Nonprofit accounting and cost allocation are not described on the reviewed homepage and pricing page",
        ],
        kindoraAdvantages: [
            "Kindora documents grant lifecycle, client-program, and nonprofit finance workflows",
            "Kindora pricing lists accounting and cost allocation in the Professional tier",
            "Review both products' current plan details to compare the capabilities your organization needs",
        ],
        bestFor: "Teams evaluating donor management, fundraising communications, automation, and reporting",
        kindoraBestFor: "Organizations looking for donor tools alongside grant, program, and financial workflows",
        sourceLinks: [
            { label: "Keela product information", url: "https://www.keela.co/" },
            { label: "Keela pricing", url: "https://www.keela.co/pricing" },
        ],
    },
    {
        name: "Spreadsheets",
        slug: "spreadsheets",
        headline: "Kindora vs Spreadsheets (Excel / Google Sheets)",
        verdict: "Spreadsheets are flexible general-purpose tools; their nonprofit workflows depend on how each organization builds and maintains them.",
        color: "from-rose-500 to-rose-600",
        bgColor: "bg-rose-50",
        borderColor: "border-rose-200",
        textColor: "text-rose-700",
        bloomerangStrengths: [
            "Flexible tables that organizations can configure for their own records",
            "May be familiar to teams already using spreadsheet software",
            "Capabilities and licensing depend on the spreadsheet product and existing plan",
        ],
        bloomerangWeaknesses: [
            "A spreadsheet alone does not provide Kindora's predefined donor, grant, and client-program modules",
            "Automation, access controls, reporting, and data relationships depend on workbook design and connected tools",
        ],
        kindoraAdvantages: [
            "Kindora documents dedicated donor, grant, client-program, and financial modules",
            "Kindora's pricing page lists role-based access controls and exports",
            "Evaluate whether a managed nonprofit platform or configurable spreadsheets better match your workflow",
        ],
        bestFor: "Teams that prefer to build and maintain their own recordkeeping workflows",
        kindoraBestFor: "Teams seeking predefined nonprofit modules and shared records",
        sourceLinks: [
            { label: "Microsoft Excel product information", url: "https://www.microsoft.com/en-us/microsoft-365/excel" },
            { label: "Microsoft 365 plan pricing", url: "https://www.microsoft.com/en-us/microsoft-365/business/compare-all-microsoft-365-business-products" },
            { label: "Google Sheets product information", url: "https://workspace.google.com/products/sheets/" },
            { label: "Google Workspace plan pricing", url: "https://workspace.google.com/pricing.html" },
        ],
    },
];

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg className={className ?? "w-5 h-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
    );
}

function XIcon({ className }: { className?: string }) {
    return (
        <svg className={className ?? "w-5 h-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

function MinusIcon({ className }: { className?: string }) {
    return (
        <svg className={className ?? "w-5 h-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
        </svg>
    );
}

function FeatureCell({ value, isKindora }: { value: FeatureValue; isKindora: boolean }) {
    if (value === true) {
        return (
            <td className={`px-4 py-4 text-center ${isKindora ? "bg-blue-50/60" : ""}`}>
                <span aria-label="Documented in reviewed sources" className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${isKindora ? "bg-[#2563eb] text-white" : "bg-green-100 text-green-600"}`}>
                    <CheckIcon className="w-4 h-4" />
                </span>
            </td>
        );
    }
    if (value === "partial") {
        return (
            <td className={`px-4 py-4 text-center ${isKindora ? "bg-blue-50/60" : ""}`}>
                <span aria-label="Related or partial coverage documented" className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100 text-yellow-600">
                    <MinusIcon className="w-4 h-4" />
                </span>
            </td>
        );
    }
    return (
        <td className={`px-4 py-4 text-center ${isKindora ? "bg-blue-50/60" : ""}`}>
            <span aria-label="Not found on reviewed source page" className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-500 font-semibold">
                ?
            </span>
        </td>
    );
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Kindora vs Competitors: Nonprofit Software Feature Comparison",
  "description": "Compare Kindora against Bloomerang, Salesforce Nonprofit Cloud, Bonterra Apricot, Keela, and spreadsheets across donor management, grant tracking, case management, accounting, and volunteer features.",
  "about": { "@type": "Thing", "name": "Nonprofit Software Comparison" },
};

const vsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the difference between Kindora and Bloomerang?", "acceptedAnswer": { "@type": "Answer", "text": "Bloomerang's reviewed product pages describe donor CRM, fundraising, volunteer engagement, and supporter communications. Kindora's public materials describe donor management plus grant lifecycle, client-program, and nonprofit financial workflows. Compare the linked product pages and current plan details against your requirements; capabilities not listed in a reviewed page should not be assumed unavailable." } },
    { "@type": "Question", "name": "How does Kindora compare to Salesforce Nonprofit Cloud?", "acceptedAnswer": { "@type": "Answer", "text": "Salesforce describes Nonprofit Cloud capabilities for fundraising, programs, volunteers, and outcome management, with published per-user editions billed annually. Kindora publishes a free Starter tier for up to five team members and paid custom tiers. Pricing and implementation needs vary by organization, so compare current quotes and required workflows." } },
    { "@type": "Question", "name": "How does Kindora compare to Bonterra Apricot?", "acceptedAnswer": { "@type": "Answer", "text": "Bonterra's Apricot product page describes nonprofit case management, participant and program data, workflows, and impact reporting. Kindora's public materials also document donor and grant workflows alongside client programs and nonprofit financial tools. The comparison reflects only the linked pages reviewed, not a claim that unlisted features are unavailable." } },
    { "@type": "Question", "name": "Does Kindora have a free plan?", "acceptedAnswer": { "@type": "Answer", "text": "Kindora's pricing page lists a free Starter plan for up to five team members. Check that page for current plan limits and features." } },
    { "@type": "Question", "name": "How does Kindora compare to Keela?", "acceptedAnswer": { "@type": "Answer", "text": "Keela's reviewed product and pricing pages describe donor profiles, fundraising forms, communications, automation, reporting, integrations, and volunteer management. Kindora's public materials additionally document grant lifecycle, client-program, and nonprofit financial workflows. Compare the source pages for the modules and plan details relevant to your organization." } },
    { "@type": "Question", "name": "How does Kindora compare with spreadsheets?", "acceptedAnswer": { "@type": "Answer", "text": "Spreadsheets are general-purpose tools whose functionality depends on workbook design and connected services. Kindora publishes dedicated donor, grant, client-program, and financial modules. Choose based on whether your organization prefers custom-managed workbooks or predefined nonprofit workflows." } },
  ],
};

const comparisonItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Kindora nonprofit software comparison",
  description:
    "A side-by-side comparison of Kindora, Bloomerang, Salesforce Nonprofit Cloud, Bonterra Apricot, Keela, and spreadsheets across the features shown in the comparison table.",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: competitors.length,
  itemListElement: competitors.map((competitor, index) => {
    const includedFeatures = features.filter(
      (_, featureIndex) => competitor.values[featureIndex] === true,
    );
    const partiallySupportedFeatures = features.filter(
      (_, featureIndex) => competitor.values[featureIndex] === "partial",
    );
    const featureSummary = [
      includedFeatures.length > 0
        ? `Features documented in reviewed sources: ${includedFeatures.join(", ")}.`
        : "No features from this comparison list were found in the reviewed sources.",
      partiallySupportedFeatures.length > 0
        ? `Related or partial coverage documented: ${partiallySupportedFeatures.join(", ")}.`
        : "",
    ]
      .filter(Boolean)
      .join(" ");

    return {
      "@type": "ListItem",
      position: index + 1,
      name: competitor.name,
      description: `${competitor.tagline}. ${featureSummary}`,
    };
  }),
};



const lastUpdated = "October 29, 2026";
export default function VsCompetitorsPage() {
    return (
        <>
            <Script id="vs-competitors-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="vs-competitors-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vsFaqSchema) }} />
            <Script
                id="vs-competitors-itemlist"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(comparisonItemListSchema).replace(/</g, "\\u003c"),
                }}
            />
            {/* Hero */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-[#f0f4ff] to-white overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#2563eb]/5 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold mb-6">
                        <CheckIcon className="w-4 h-4" />
                        Nonprofit Software Comparison
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                        Kindora vs. the{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                            Alternatives
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Bloomerang and Keela publish donor and fundraising tools. Salesforce Nonprofit Cloud describes fundraising, programs, volunteers, and outcomes. Bonterra Apricot describes participant case management.{" "}
                        <strong className="text-gray-900">Kindora&apos;s public materials bring donor, grant, client-program, and financial workflows together.</strong>
                    </p>
                    <p className="text-sm text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Compare the capabilities each provider describes in its public product materials. This is a feature-scope guide, not an independent product test or a claim that an unlisted capability is unavailable.
                    </p>
                    <p className="text-xs text-gray-400 mb-6 text-center">Last updated: {lastUpdated}</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Try Kindora Free
                            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <Link
                            href="/kindora/demo"
                            className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                        >
                            Request a Demo
                        </Link>
                    </div>
                </div>
            </section>

      <AnswerReadyBlock page="comparison" />

            {/* Quick nav anchors */}
            <section className="py-6 bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider shrink-0 mr-2">
                            Jump to:
                        </span>
                        {[
                            { label: "Full Comparison", href: "#comparison-table" },
                            { label: "vs Bloomerang", href: "#vs-bloomerang" },
                            { label: "vs Salesforce", href: "#vs-salesforce" },
                            { label: "vs Bonterra", href: "#vs-bonterra" },
                            { label: "vs Keela", href: "#vs-keela" },
                            { label: "vs Spreadsheets", href: "#vs-spreadsheets" },
                        ].map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="shrink-0 px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#2563eb] hover:bg-blue-50 rounded-full transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Master Comparison Table */}
            <section className="py-20 lg:py-28 bg-white" id="comparison-table">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
                            Side-by-Side Comparison
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            How Kindora stacks up against every alternative
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            12 capabilities checked against the public product sources linked below, across six options.
                        </p>
                        <p className="text-sm text-gray-500 max-w-3xl mx-auto mt-4">
                            Sources reviewed October 29, 2026. A check means a reviewed source explicitly describes the capability; a dash means related or partial coverage; a question mark means we did not find it on the reviewed source page. A question mark does not establish that the product lacks the feature. Scope and packaging can change; confirm details with each provider.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left px-5 py-5 text-gray-500 font-medium bg-gray-50 min-w-[200px]">
                                        Feature
                                    </th>
                                    {competitors.map((c) => (
                                        <th
                                            key={c.name}
                                            className={`px-4 py-5 text-center min-w-[120px] ${c.name === "Kindora" ? "bg-[#2563eb]" : "bg-gray-50"}`}
                                        >
                                            <div className="flex flex-col items-center gap-1">
                                                <span className={`text-xs font-semibold uppercase tracking-wider ${c.name === "Kindora" ? "text-blue-200" : "text-gray-500"}`}>
                                                    {c.tagline}
                                                </span>
                                                <span className={`text-sm font-bold ${c.name === "Kindora" ? "text-white" : "text-gray-700"}`}>
                                                    {c.name}
                                                </span>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, fi) => (
                                    <tr
                                        key={feature}
                                        className={`border-b border-gray-100 ${fi % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
                                    >
                                        <td className="px-5 py-4 text-gray-700 font-medium">{feature}</td>
                                        {competitors.map((c) => (
                                            <FeatureCell
                                                key={c.name}
                                                value={c.values[fi]}
                                                isKindora={c.name === "Kindora"}
                                            />
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="bg-gray-50 border-t border-gray-200">
                                    <td className="px-5 py-4 text-gray-500 font-semibold text-sm">
                                        Explicitly documented (of 12)
                                    </td>
                                    {competitors.map((c) => {
                                        const count = c.values.filter((v) => v === true).length;
                                        return (
                                            <td
                                                key={c.name}
                                                className={`px-4 py-4 text-center font-black text-lg ${c.name === "Kindora" ? "text-[#2563eb] bg-blue-50/60" : "text-gray-500"}`}
                                            >
                                                {count}/{features.length}
                                            </td>
                                        );
                                    })}
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-5 py-3" />
                                    {competitors.map((c) => (
                                        <td key={c.name} className={`px-4 py-3 text-center ${c.name === "Kindora" ? "bg-blue-50/60" : ""}`}>
                                            {c.name === "Kindora" ? (
                                                <a
                                                    href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-colors"
                                                >
                                                    Try Free
                                                </a>
                                            ) : (
                                                <span className="text-xs text-gray-500">Check sources</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    {/* Legend */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#2563eb] text-white">
                                <CheckIcon className="w-3 h-3" />
                            </span>
                            Explicitly documented in reviewed source
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-100 text-yellow-600">
                                <MinusIcon className="w-3 h-3" />
                            </span>
                            Related or partial coverage documented
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 text-gray-500 font-semibold">
                                ?
                            </span>
                            Not found in reviewed source(s)
                        </span>
                    </div>
                    <div className="mt-8 rounded-xl bg-gray-50 border border-gray-200 p-5">
                        <p className="text-sm font-semibold text-gray-700 mb-3">Kindora product sources reviewed</p>
                        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                            {kindoraReferenceLinks.map((source) => (
                                <li key={source.url}>
                                    <Link href={source.url} className="text-sm text-[#2563eb] hover:underline">
                                        {source.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Individual Competitor Sections */}
            {competitorDetails.map((comp, idx) => (
                <section
                    key={comp.slug}
                    id={`vs-${comp.slug}`}
                    className={`py-20 lg:py-28 ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Section header */}
                        <div className="mb-12">
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${comp.bgColor} ${comp.textColor} text-sm font-semibold mb-4`}>
                                <span>Detailed Comparison</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                                {comp.headline}
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl">
                                {comp.verdict}
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 mb-10">
                            {/* Competitor card */}
                            <div className={`rounded-2xl border ${comp.borderColor} ${comp.bgColor} p-6 lg:p-8`}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${comp.color} flex items-center justify-center text-white font-bold text-sm`}>
                                        {comp.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{comp.name}</h3>
                                        <p className={`text-xs font-semibold ${comp.textColor}`}>Capabilities on reviewed official pages</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {comp.bloomerangStrengths.map((s) => (
                                        <li key={s} className="flex items-start gap-2.5 text-sm text-gray-700">
                                            <span className="mt-0.5 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                <CheckIcon className="w-3 h-3" />
                                            </span>
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                                <div className="border-t border-gray-200 pt-5">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                        Not listed in reviewed source(s)
                                    </p>
                                    <ul className="space-y-2.5">
                                        {comp.bloomerangWeaknesses.map((w) => (
                                            <li key={w} className="flex items-start gap-2.5 text-sm text-gray-600">
                                                <span className="mt-0.5 w-5 h-5 rounded-full bg-red-100 text-red-400 flex items-center justify-center shrink-0">
                                                    <XIcon className="w-3 h-3" />
                                                </span>
                                                {w}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Kindora card */}
                            <div className="rounded-2xl border-2 border-[#2563eb] bg-white p-6 lg:p-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] to-[#7c3aed]" />
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-[#2563eb] flex items-center justify-center text-white font-bold text-sm">
                                        K
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Kindora</h3>
                                        <p className="text-xs font-semibold text-[#2563eb]">Kindora&apos;s documented capabilities</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {comp.kindoraAdvantages.map((a) => (
                                        <li key={a} className="flex items-start gap-2.5 text-sm text-gray-700">
                                            <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0">
                                                <CheckIcon className="w-3 h-3" />
                                            </span>
                                            {a}
                                        </li>
                                    ))}
                                </ul>
                                <div className="border-t border-gray-100 pt-5 space-y-3">
                                    <div className="flex items-start gap-2">
                                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider w-36 shrink-0 mt-0.5">
                                            {comp.name} product focus:
                                        </span>
                                        <span className="text-sm text-gray-600">{comp.bestFor}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider w-36 shrink-0 mt-0.5">
                                            Kindora may fit when:
                                        </span>
                                        <span className="text-sm text-gray-800 font-medium">{comp.kindoraBestFor}</span>
                                    </div>
                                </div>
                                <div className="mt-5 border-t border-gray-100 pt-4">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                        Official sources reviewed
                                    </p>
                                    <ul className="space-y-1">
                                        {comp.sourceLinks.map((source) => (
                                            <li key={source.url}>
                                                <a
                                                    href={source.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-[#2563eb] hover:underline"
                                                >
                                                    {source.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Bottom CTA for each section */}
                        <div className="text-center">
                            <a
                                href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Explore Kindora Starter — Free plan
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            ))}

            {/* Kindora capability summary */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-[#1e3a8a] to-[#1e40af]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-4">
                        Kindora&apos;s published capabilities
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        One set of nonprofit workflows
                    </h2>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Kindora&apos;s public feature pages describe donor management, grant lifecycle tracking, client programs, financial management, and cost allocation. Its pricing page lists a free Starter tier for up to five team members and identifies which modules are included in paid tiers.
                    </p>

                    <p className="text-sm text-blue-200 mb-8">
                        See the current <Link href="/kindora/pricing" className="text-white underline">Kindora plan details</Link> and <Link href="/kindora/features" className="text-white underline">documented feature list</Link>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#2563eb] bg-white hover:bg-blue-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Start Free — No Credit Card Required
                            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <Link
                            href="/kindora/demo"
                            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-full transition-all duration-300"
                        >
                            Request a Live Demo
                        </Link>
                    </div>

                    <p className="mt-6 text-sm text-blue-300">
                        Plan limits and availability may change; confirm current details on the pricing page.
                    </p>
                    <p className="mt-4 text-sm text-blue-200">
                        <Link href="/kindora/pricing" className="text-white hover:underline">View pricing</Link>
                        {" · "}
                        <Link href="/kindora/features" className="text-white hover:underline">All features</Link>
                        {" · "}
                        <Link href="/kindora/blog" className="text-white hover:underline">Nonprofit blog</Link>
                    </p>
                </div>
            </section>

            {/* FAQ for this page */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Frequently asked questions
                        </h2>
                        <p className="text-gray-600">Common questions when comparing nonprofit software.</p>
                    </div>
                    <div className="space-y-4">
                        {[
                            {
                                q: "What is the difference between Kindora and Bloomerang?",
                                a: "Bloomerang's reviewed product pages describe donor CRM, fundraising, volunteer engagement, and supporter communications. Kindora's public materials describe donor management plus grant lifecycle, client-program, and nonprofit financial workflows. Compare the linked product pages and current plan details against your requirements; capabilities not listed in a reviewed page should not be assumed unavailable.",
                            },
                            {
                                q: "How does Kindora compare to Salesforce Nonprofit Cloud?",
                                a: "Salesforce describes Nonprofit Cloud capabilities for fundraising, programs, volunteers, and outcome management, with published per-user editions billed annually. Kindora publishes a free Starter tier for up to five team members and paid custom tiers. Pricing and implementation needs vary by organization, so compare current quotes and required workflows.",
                            },
                            {
                                q: "How does Kindora compare to Bonterra Apricot?",
                                a: "Bonterra's Apricot product page describes nonprofit case management, participant and program data, workflows, and impact reporting. Kindora's public materials also document donor and grant workflows alongside client programs and nonprofit financial tools. The comparison reflects only the linked pages reviewed, not a claim that unlisted features are unavailable.",
                            },
                            {
                                q: "Does Kindora have a free plan?",
                                a: "Kindora's pricing page lists a free Starter plan for up to five team members. Check that page for current plan limits and features.",
                            },
                            {
                                q: "How does Kindora compare to Keela?",
                                a: "Keela's reviewed product and pricing pages describe donor profiles, fundraising forms, communications, automation, reporting, integrations, and volunteer management. Kindora's public materials additionally document grant lifecycle, client-program, and nonprofit financial workflows. Compare the source pages for the modules and plan details relevant to your organization.",
                            },
                            {
                                q: "How does Kindora compare with spreadsheets?",
                                a: "Spreadsheets are general-purpose tools whose functionality depends on workbook design and connected services. Kindora publishes dedicated donor, grant, client-program, and financial modules. Choose based on whether your organization prefers custom-managed workbooks or predefined nonprofit workflows.",
                            },
                        ].map((faq, i) => (
                            <details
                                key={i}
                                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
                            >
                                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                                    <span className="text-base font-semibold text-gray-900">{faq.q}</span>
                                    <svg
                                        className="w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 group-open:rotate-180"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="px-6 pb-5 pt-1">
                                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <ComparisonMethodology />
                <LastUpdated date="2026-11-26" />
            </div></div>
            </section>
        </>
    );
}
