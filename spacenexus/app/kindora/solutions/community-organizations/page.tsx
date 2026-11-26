import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Community Organization Management Software",
    description:
        "Kindora helps community organizations manage volunteers, donors, programs, and grants in one platform. Purpose-built nonprofit software for community-focused organizations.",
    keywords: [
        "community organization management software",
        "community nonprofit software",
        "volunteer management software nonprofits",
        "community organization platform",
        "nonprofit community management system",
    ],
    alternates: {
        canonical: "/kindora/solutions/community-organizations",
    },
    openGraph: {
        title: "Community Organization Management Software",
        description:
            "Run your community organization with confidence. Kindora manages volunteers, programs, donors, and reporting — all in one place.",
        url: "https://spacenexus.net/kindora/solutions/community-organizations",
        type: "website",
    },
};

const features = [
    {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        title: "Volunteer Management",
        description:
            "Track volunteer profiles, skills, availability, and hours. Recognize milestones and maintain a directory of engaged community members.",
    },
    {
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        title: "Donor Engagement",
        description:
            "Manage community donors and individual contributors with full communication history, giving records, and acknowledgment tracking.",
    },
    {
        icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
        title: "Program Management",
        description:
            "Define your community programs, set enrollment capacities, and manage participation. Track outcomes and demonstrate community impact to your funders.",
    },
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "Grant & Funding Management",
        description:
            "Track community grants from multiple funders. Manage grant budgets, deadlines, and generate compliance reports without spreadsheets.",
    },
    {
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        title: "Impact Reporting",
        description:
            "Generate board presentations, annual reports, and funder reports from built-in data. Turn your community's work into compelling impact narratives.",
    },
    {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Finance & Budget Tracking",
        description:
            "Track revenue, expenses, and budgets for each program. Allocate shared costs across programs and grants with real-time validation.",
    },
];

const faqs = [
    {
        q: "Can Kindora handle both volunteer and donor management?",
        a: "Yes. Kindora manages volunteers and donors in separate but connected modules, giving you a full picture of your community's human and financial resources in one platform.",
    },
    {
        q: "Is Kindora suitable for a neighborhood association or small community group?",
        a: "Absolutely. Kindora scales from small community groups with a handful of volunteers up to large multi-program community organizations. You pay for what you need.",
    },
    {
        q: "Can I track volunteer hours for grant reporting?",
        a: "Yes. Volunteer hour tracking is built into Kindora, and you can include volunteer contributions as in-kind support in your grant reports.",
    },
    {
        q: "How does Kindora help with demonstrating community impact?",
        a: "Kindora's reporting tools aggregate your program participation, service delivery, and financial data into impact reports you can share with your board, community, and funders.",
    },
    {
        q: "Can we manage multiple community programs in one Kindora account?",
        a: "Yes. Kindora supports unlimited programs in one account, each with their own service catalog, budget, enrollment tracking, and reporting.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kindora — Community Organization Management Software",
    description:
        "Kindora helps community organizations manage volunteers, donors, programs, and grants in one platform. Purpose-built nonprofit software for community-focused organizations.",
    url: "https://spacenexus.net/kindora/solutions/community-organizations",
    serviceType: "Community Organization Nonprofit Management Software",
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

export default function CommunityOrganizationsPage() {
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
            <section className="py-16 lg:py-24 bg-gradient-to-b from-violet-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-3">
                            Solutions for Community Organizations
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Community Organization Software That{" "}
                            <span className="text-violet-600">Works for You</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Kindora helps community organizations manage volunteers, donors, programs,
                            and grants — without juggling five different tools. Everything your
                            community needs, in one simple platform.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-full shadow-lg shadow-violet-500/25 transition-all duration-300"
                            >
                                Try Kindora Free
                                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <Link
                                href="/kindora/contact"
                                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-violet-600 transition-colors"
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
                            { stat: "Volunteers", label: "& donors in one place" },
                            { stat: "Multi-program", label: "management built in" },
                            { stat: "Real-time", label: "impact reporting" },
                            { stat: "One login", label: "for your whole team" },
                        ].map((item) => (
                            <div key={item.label}>
                                <p className="text-xl font-bold text-violet-600">{item.stat}</p>
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
                            Everything your community organization needs
                        </h2>
                        <p className="text-gray-600">
                            From volunteer scheduling to grant reporting, Kindora handles the
                            administrative overhead so your team can focus on community impact.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 mb-4">
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
            <section className="py-16 lg:py-24 bg-gradient-to-r from-violet-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to bring your community together — on one platform?
                    </h2>
                    <p className="text-violet-100 text-lg mb-10">
                        See how Kindora can simplify your community organization&apos;s operations from day one.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 text-base font-semibold text-violet-700 bg-white hover:bg-violet-50 rounded-full shadow-lg transition-all duration-300"
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
