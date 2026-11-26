import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Social Services Case Management Software",
    description:
        "Kindora is the all-in-one social services management platform for nonprofits. Handle client intake, case management, service enrollment, and grant-compliant reporting in one place.",
    keywords: [
        "social services case management software",
        "social services nonprofit software",
        "case management software for nonprofits",
        "nonprofit client management system",
        "social service organization software",
    ],
    alternates: {
        canonical: "/kindora/solutions/social-services",
    },
    openGraph: {
        title: "Social Services Case Management Software",
        description:
            "Manage clients, cases, services, and grants in one place. Kindora is built for social services organizations delivering community impact.",
        url: "https://spacenexus.net/kindora/solutions/social-services",
        type: "website",
    },
};

const features = [
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Structured Client Intake",
        description:
            "Comprehensive intake forms capturing demographics, household composition, presenting needs, and eligibility status. Set up intake workflows tailored to each program.",
    },
    {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        title: "Case Management",
        description:
            "Assign case workers, log case notes, track service delivery, and monitor client progress over time. Full timeline of every client interaction in one place.",
    },
    {
        icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
        title: "Service Catalog",
        description:
            "Define services across categories — Education, Housing, Legal, Employment, Youth, Health, and Basic Needs. Set capacity limits and eligibility requirements per service.",
    },
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "Grant & Funder Reporting",
        description:
            "Generate service statistics, client demographics, and outcome reports that meet grantor requirements. Cost allocation tools help you track program expenses accurately.",
    },
    {
        icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        title: "Waitlist & Enrollment Management",
        description:
            "Move clients from waitlist to active enrollment with clear status tracking. Monitor capacity utilization across programs and manage service demand efficiently.",
    },
    {
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        title: "Program Outcome Tracking",
        description:
            "Measure and report on program outcomes — enrollment rates, completion rates, service categories, and client success metrics for board and funder reporting.",
    },
];

const faqs = [
    {
        q: "Can Kindora handle multiple social service programs at once?",
        a: "Yes. Kindora is designed for multi-program organizations. You can manage separate service catalogs, budgets, and reporting for each program while maintaining a unified client database.",
    },
    {
        q: "Does Kindora comply with client data privacy requirements?",
        a: "Kindora is built with data security and privacy in mind, including role-based access controls so only authorized staff can view sensitive client information.",
    },
    {
        q: "Can frontline staff use Kindora during client intake sessions?",
        a: "Yes. Kindora is web-based and mobile-friendly, so case workers can complete intake forms and add case notes from any device during a client meeting.",
    },
    {
        q: "Can I track grant funding linked to specific client services?",
        a: "Absolutely. Kindora's cost allocation tools let you track which program expenses are covered by which grants, making funder reporting accurate and straightforward.",
    },
    {
        q: "How does Kindora help with government grant reporting?",
        a: "Kindora generates service utilization reports, client demographic breakdowns, and financial statements that align with standard government grantor requirements — saving hours of manual report preparation.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kindora — Social Services Case Management Software",
    description:
        "Kindora is the all-in-one social services management platform for nonprofits. Handle client intake, case management, service enrollment, and grant-compliant reporting in one place.",
    url: "https://spacenexus.net/kindora/solutions/social-services",
    serviceType: "Social Services Case Management Platform",
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

export default function SocialServicesPage() {
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
            <section className="py-16 lg:py-24 bg-gradient-to-b from-emerald-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
                            Solutions for Social Services
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Social Services Case Management{" "}
                            <span className="text-emerald-600">Made Simple</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Kindora is the purpose-built platform for social services organizations.
                            Manage client intake, case notes, service enrollment, and grant reporting
                            — all in one place, without the complexity of legacy systems.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full shadow-lg shadow-emerald-500/25 transition-all duration-300"
                            >
                                Try Kindora Free
                                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <Link
                                href="/kindora/contact"
                                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-emerald-600 transition-colors"
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
                            { stat: "Full lifecycle", label: "client management" },
                            { stat: "8 service", label: "categories supported" },
                            { stat: "100%", label: "grant-compliance ready" },
                            { stat: "1 platform", label: "for all programs" },
                        ].map((item) => (
                            <div key={item.label}>
                                <p className="text-2xl font-bold text-emerald-600">{item.stat}</p>
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
                            Built for the full social services workflow
                        </h2>
                        <p className="text-gray-600">
                            From first contact to case closure, Kindora supports every stage of
                            your client journey and every report your funders require.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
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

            {/* FAQ */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq) => (
                            <div key={faq.q} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6">
                                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to modernize your social services operations?
                    </h2>
                    <p className="text-emerald-100 text-lg mb-10">
                        See how Kindora can replace your spreadsheets and legacy systems with one unified platform.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 text-base font-semibold text-emerald-700 bg-white hover:bg-emerald-50 rounded-full shadow-lg transition-all duration-300"
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
