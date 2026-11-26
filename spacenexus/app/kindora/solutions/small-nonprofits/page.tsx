import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Nonprofit Software for Small Organizations",
    description:
        "Kindora is the all-in-one nonprofit management software built for small nonprofits. Manage donors, grants, clients, and finances — without the enterprise price tag.",
    keywords: [
        "nonprofit software for small organizations",
        "small nonprofit management software",
        "affordable nonprofit software",
        "nonprofit software for small charities",
        "nonprofit crm small organization",
    ],
    alternates: {
        canonical: "/kindora/solutions/small-nonprofits",
    },
    openGraph: {
        title: "Nonprofit Software for Small Organizations",
        description:
            "Kindora gives small nonprofits the tools of an enterprise — donor management, grant tracking, client services, and financial reporting in one platform.",
        url: "https://spacenexus.net/kindora/solutions/small-nonprofits",
        type: "website",
    },
};

const features = [
    {
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        title: "Donor Management",
        description:
            "Track every donor relationship in one place — giving history, contact details, communication logs, and receipts. No more spreadsheets.",
    },
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "Grant Tracking",
        description:
            "Manage your full grant pipeline — from prospect to awarded to reporting. Never miss a deadline or lose track of a reporting requirement.",
    },
    {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        title: "Client & Case Management",
        description:
            "Intake, enroll, and track clients across your programs. Full case notes, service history, and outcome tracking built in.",
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Financial Reporting",
        description:
            "Generate board-ready financial statements, budget vs. actual reports, and grant-compliant expense breakdowns in minutes.",
    },
    {
        icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        title: "Volunteer Tracking",
        description:
            "Log volunteer hours, track skills, and manage availability. Show funders the full picture of your organizational capacity.",
    },
    {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "Quick Setup, No IT Needed",
        description:
            "Get started in minutes — no technical expertise required. Kindora is designed for nonprofit staff, not software engineers.",
    },
];

const faqs = [
    {
        q: "Is Kindora affordable for a small nonprofit with a limited budget?",
        a: "Yes. Kindora is priced specifically so small nonprofits can afford enterprise-grade tools. We offer flexible plans and do not charge per-module — you get everything in one plan.",
    },
    {
        q: "Can I import our existing donor data from spreadsheets?",
        a: "Absolutely. Kindora supports data import so you can bring your existing donor, client, and grant data into the platform without starting from scratch.",
    },
    {
        q: "Do I need an IT person to set up Kindora?",
        a: "No. Kindora is built for nonprofit staff and executive directors. Setup takes minutes and does not require any technical background.",
    },
    {
        q: "How is Kindora different from just using Excel or Google Sheets?",
        a: "Spreadsheets break as your organization grows — data gets lost, formulas break, and there's no audit trail. Kindora gives you structured data, automation, real-time reporting, and multi-user collaboration built for nonprofits.",
    },
    {
        q: "Can small nonprofits use Kindora for grant compliance reporting?",
        a: "Yes. Kindora's grant module handles budget-to-grant alignment, cost allocation, and generates compliance-ready financial reports that match grantor requirements.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kindora — Nonprofit Software for Small Organizations",
    description:
        "Kindora is the all-in-one nonprofit management software built for small nonprofits. Manage donors, grants, clients, and finances — without the enterprise price tag.",
    url: "https://spacenexus.net/kindora/solutions/small-nonprofits",
    serviceType: "Nonprofit Management Software for Small Organizations",
    provider: {
        "@id": "https://spacenexus.net/kindora/#organization",
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
    offers: {
        "@type": "Offer",
        url: "https://spacenexus.net/kindora/pricing",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

export default function SmallNonprofitsPage() {
    return (
        <main className="pt-20 lg:pt-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {/* Hero */}
            <section className="py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
                            Solutions for Small Nonprofits
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Nonprofit Software Built for{" "}
                            <span className="text-[#2563eb]">Small Organizations</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Stop managing your donors, grants, and clients in separate
                            spreadsheets. Kindora gives small nonprofits one unified platform
                            — at a price that makes sense.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300"
                            >
                                Try Kindora Free
                                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <Link
                                href="/kindora/contact"
                                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-[#2563eb] transition-colors"
                            >
                                Request a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points Banner */}
            <section className="py-10 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                        {[
                            { stat: "10+ hrs", label: "saved per week" },
                            { stat: "1 platform", label: "instead of 5 tools" },
                            { stat: "100%", label: "grant compliance ready" },
                            { stat: "Minutes", label: "to get started" },
                        ].map((item) => (
                            <div key={item.label}>
                                <p className="text-2xl font-bold text-[#2563eb]">{item.stat}</p>
                                <p className="text-sm text-gray-500 mt-1">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 lg:py-24 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Everything a small nonprofit needs — nothing it doesn&apos;t
                        </h2>
                        <p className="text-gray-600">
                            Kindora is designed to be powerful without being complex. You get
                            enterprise-grade tools without the enterprise learning curve.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563eb] mb-4">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900 text-lg mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Kindora vs Spreadsheets */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
                                Why Kindora
                            </p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-5">
                                Built for nonprofits—not adapted from corporate CRMs
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Generic CRM tools like Salesforce require months of setup and
                                expensive consultants. Kindora was built from day one for
                                nonprofit workflows — donor management, grant compliance, client
                                intake, and program reporting are all native, not add-ons.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "No per-module fees — everything included",
                                    "No IT team or developer required",
                                    "Nonprofit-specific terminology and workflows",
                                    "Grant-compliant financial reporting built in",
                                    "Multi-user with role-based permissions",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                                        <svg className="w-5 h-5 text-[#2563eb] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-8">
                                <h3 className="font-bold text-gray-900 text-lg mb-6">Kindora vs. Spreadsheets</h3>
                                <div className="space-y-4">
                                    {[
                                        { feature: "Donor history & relationships", kindora: true, sheets: false },
                                        { feature: "Grant compliance reporting", kindora: true, sheets: false },
                                        { feature: "Multi-user collaboration", kindora: true, sheets: false },
                                        { feature: "Audit trail & data security", kindora: true, sheets: false },
                                        { feature: "Automated reminders & alerts", kindora: true, sheets: false },
                                        { feature: "Board-ready financial statements", kindora: true, sheets: false },
                                    ].map((row) => (
                                        <div key={row.feature} className="flex items-center justify-between text-sm">
                                            <span className="text-gray-700">{row.feature}</span>
                                            <div className="flex gap-8">
                                                <span className={row.kindora ? "text-emerald-600 font-medium" : "text-red-400"}>
                                                    {row.kindora ? "✓ Kindora" : "✗"}
                                                </span>
                                                <span className={row.sheets ? "text-emerald-600" : "text-red-400"}>
                                                    {row.sheets ? "✓ Sheets" : "✗ Sheets"}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 lg:py-24 bg-[#f8f9fa]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq) => (
                            <div key={faq.q} className="bg-white rounded-2xl border border-gray-100 p-6">
                                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-24 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to simplify your nonprofit operations?
                    </h2>
                    <p className="text-blue-100 text-lg mb-10">
                        Join nonprofit organizations using Kindora to manage their donors, grants, and clients in one place.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#2563eb] bg-white hover:bg-blue-50 rounded-full shadow-lg transition-all duration-300"
                        >
                            Explore Free Starter Plan
                        </a>
                        <Link
                            href="/kindora/pricing"
                            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border border-white/30 hover:bg-white/10 rounded-full transition-all duration-300"
                        >
                            View Pricing
                        </Link>
                    </div>
                
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
            </section>
        </main>
    );
}
