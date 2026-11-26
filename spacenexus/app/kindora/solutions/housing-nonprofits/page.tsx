import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Housing Nonprofit Management Software",
    description:
        "Kindora is the all-in-one platform for housing nonprofits. Manage housing clients, case files, grants, and program reporting in one place. Built for housing and homelessness service organizations.",
    keywords: [
        "housing nonprofit management software",
        "homelessness nonprofit software",
        "affordable housing nonprofit platform",
        "housing services management system",
        "homeless shelter management software",
    ],
    alternates: {
        canonical: "/kindora/solutions/housing-nonprofits",
    },
    openGraph: {
        title: "Housing Nonprofit Management Software",
        description:
            "Manage housing clients, case files, HUD grant reporting, and program operations in one platform. Built for housing nonprofits and homelessness services.",
        url: "https://spacenexus.net/kindora/solutions/housing-nonprofits",
        type: "website",
    },
};

const features = [
    {
        icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        title: "Housing Client Management",
        description:
            "Track housing clients through every stage — from intake and assessment through placement and housing stability follow-up. Full case history in one profile.",
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Intake & Needs Assessment",
        description:
            "Comprehensive intake forms for housing clients including housing history, barriers to housing, income, family composition, and immediate needs. Track eligibility for housing programs.",
    },
    {
        icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
        title: "Program Enrollment & Placement",
        description:
            "Manage enrollment across rapid rehousing, transitional housing, emergency shelter, supportive housing, and prevention programs. Track placement status and capacity.",
    },
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "HUD & Government Grant Reporting",
        description:
            "Generate client demographics, housing outcomes, bed utilization, and financial reports aligned with HUD, CDBG, ESG, and state government grant requirements.",
    },
    {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        title: "Staff & Volunteer Management",
        description:
            "Manage case workers, housing navigators, and shelter volunteers in one system. Track assignments, hours, and certifications.",
    },
    {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Budget & Cost Allocation",
        description:
            "Track program budgets, allocate costs across HUD and other grants, and generate real-time budget vs. actual reports. Keep your housing programs financially compliant.",
    },
];

const faqs = [
    {
        q: "Can Kindora handle HUD grant reporting requirements?",
        a: "Kindora generates client demographics, housing outcome reports, and financial breakdowns that align with HUD, ESG, and CDBG reporting requirements, significantly reducing manual reporting time.",
    },
    {
        q: "Can we track clients across multiple housing programs (shelter, transitional, rapid rehousing)?",
        a: "Yes. Kindora allows you to enroll clients in multiple programs, track each independently, and view a complete housing journey in one client profile.",
    },
    {
        q: "Does Kindora support bed/unit capacity management for shelters?",
        a: "Yes. Each service in Kindora can have a defined capacity limit, so you can track bed availability and manage waitlists for emergency shelter and transitional housing programs.",
    },
    {
        q: "Can Kindora store sensitive housing client information securely?",
        a: "Kindora uses role-based access controls to ensure only authorized staff can access sensitive client information. You control who sees what.",
    },
    {
        q: "Does Kindora help with housing outcome tracking for funders?",
        a: "Yes. Kindora tracks housing placements, stability outcomes, and program exits, so you can generate the outcome reports your funders and government grantors require.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kindora — Housing Nonprofit Management Software",
    description:
        "Kindora is the all-in-one platform for housing nonprofits. Manage housing clients, case files, grants, and program reporting in one place. Built for housing and homelessness service organizations.",
    url: "https://spacenexus.net/kindora/solutions/housing-nonprofits",
    serviceType: "Housing Nonprofit Management Platform",
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

export default function HousingNonprofitsPage() {
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
            <section className="py-16 lg:py-24 bg-gradient-to-b from-sky-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-3">
                            Solutions for Housing Nonprofits
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Housing Nonprofit Software for{" "}
                            <span className="text-sky-600">Every Program Type</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            From emergency shelter to rapid rehousing and supportive housing — Kindora
                            is the unified platform for housing nonprofits to manage clients, cases,
                            grants, and government reporting without the complexity.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 rounded-full shadow-lg shadow-sky-500/25 transition-all duration-300"
                            >
                                Try Kindora Free
                                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <Link
                                href="/kindora/contact"
                                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-sky-600 transition-colors"
                            >
                                Request a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-10 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                        {[
                            { stat: "Full client", label: "lifecycle tracking" },
                            { stat: "HUD & ESG", label: "reporting ready" },
                            { stat: "Multi-program", label: "capacity management" },
                            { stat: "Secure &", label: "role-based access" },
                        ].map((item) => (
                            <div key={item.label}>
                                <p className="text-xl font-bold text-sky-600">{item.stat}</p>
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
                            Built for the housing nonprofit workflow
                        </h2>
                        <p className="text-gray-600">
                            From intake to housing stability, and from grant budgeting to government
                            reporting — Kindora covers every operational need of a housing nonprofit.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 mb-4">
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

            {/* Program Types */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Supports all housing program types
                        </h2>
                        <p className="text-gray-600">
                            Whatever housing programs you operate, Kindora can manage them.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            "Emergency Shelter",
                            "Rapid Rehousing",
                            "Transitional Housing",
                            "Supportive Housing",
                            "Prevention Programs",
                            "Housing Navigation",
                            "Permanent Supportive",
                            "Homelessness Outreach",
                            "Affordable Housing",
                            "Veterans Housing",
                        ].map((program) => (
                            <div
                                key={program}
                                className="bg-sky-50 border border-sky-100 rounded-xl p-4 text-center text-sm font-medium text-sky-700"
                            >
                                {program}
                            </div>
                        ))}
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
            <section className="py-16 lg:py-24 bg-gradient-to-r from-sky-600 to-cyan-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to streamline your housing nonprofit operations?
                    </h2>
                    <p className="text-sky-100 text-lg mb-10">
                        Join housing nonprofits using Kindora to simplify operations and maximize their housing impact.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 text-base font-semibold text-sky-700 bg-white hover:bg-sky-50 rounded-full shadow-lg transition-all duration-300"
                        >
                            Explore Free Starter Plan
                        </a>
                        <Link
                            href="/kindora/contact"
                            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border border-white/30 hover:bg-white/10 rounded-full transition-all duration-300"
                        >
                            Request a Demo
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
