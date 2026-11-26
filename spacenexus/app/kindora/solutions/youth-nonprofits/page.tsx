import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Youth Nonprofit Management Software",
    description:
        "Kindora is the all-in-one software platform for youth nonprofits. Manage youth programs, client cases, volunteers, donor relationships, and grant reporting in one place.",
    keywords: [
        "youth nonprofit management software",
        "youth program management software",
        "youth organization nonprofit software",
        "after school program management software",
        "youth services nonprofit platform",
    ],
    alternates: {
        canonical: "/kindora/solutions/youth-nonprofits",
    },
    openGraph: {
        title: "Youth Nonprofit Management Software",
        description:
            "Manage youth programs, participants, volunteers, grants, and impact reporting in one platform. Kindora is built for youth-serving nonprofits.",
        url: "https://spacenexus.net/kindora/solutions/youth-nonprofits",
        type: "website",
    },
};

const features = [
    {
        icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
        title: "Youth Participant Tracking",
        description:
            "Maintain comprehensive profiles for every youth participant — demographics, household details, program enrollment history, and progress notes. Track parental consent and emergency contacts.",
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Program Enrollment",
        description:
            "Manage youth program enrollment with capacity limits, waitlists, and age eligibility. Track participant progress and completion rates across all programs.",
    },
    {
        icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
        title: "Multi-Program Management",
        description:
            "Run after-school programs, summer camps, mentorship, tutoring, sports, and arts programs simultaneously. Each with its own enrollment, budget, and reporting.",
    },
    {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        title: "Volunteer & Mentor Tracking",
        description:
            "Manage youth mentors and program volunteers. Track hours, certifications, background check status, and program assignments.",
    },
    {
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        title: "Grant & Foundation Reporting",
        description:
            "Generate youth program outcome reports, demographic breakdowns, and financial statements aligned with foundation and government grant requirements.",
    },
    {
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        title: "Impact Measurement",
        description:
            "Track and report on youth outcomes — academic improvement, skill development, and program completion rates. Demonstrate your impact to funders with data.",
    },
];

const faqs = [
    {
        q: "Can Kindora track youth participants and their program history?",
        a: "Yes. Kindora maintains complete participant profiles with enrollment history, case notes, progress tracking, and outcome records — all in one secure place.",
    },
    {
        q: "Is youth participant data kept private and secure?",
        a: "Kindora uses role-based access controls to protect sensitive participant information. Only authorized staff members can access specific program or participant records.",
    },
    {
        q: "Can we track volunteer mentors alongside youth participants?",
        a: "Yes. Kindora manages both youth participants and mentors/volunteers in the same platform, so you can match participants to mentors and track the relationship over time.",
    },
    {
        q: "How does Kindora help with government and foundation grant reporting for youth programs?",
        a: "Kindora generates service utilization statistics, participant demographic reports, and financial breakdowns that align with standard government and foundation reporting templates — saving your team hours of manual work.",
    },
    {
        q: "Can Kindora manage after-school programs and summer programs separately?",
        a: "Yes. Each program in Kindora has its own enrollment, capacity, budget, and reporting — so after-school, summer camps, and other programs are all managed independently but visible together.",
    },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kindora — Youth Nonprofit Management Software",
    description:
        "Kindora is the all-in-one software platform for youth nonprofits. Manage youth programs, client cases, volunteers, donor relationships, and grant reporting in one place.",
    url: "https://spacenexus.net/kindora/solutions/youth-nonprofits",
    serviceType: "Youth Nonprofit Management Platform",
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

export default function YouthNonprofitsPage() {
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
            <section className="py-16 lg:py-24 bg-gradient-to-b from-orange-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
                            Solutions for Youth Nonprofits
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Youth Program Management{" "}
                            <span className="text-orange-500">Built for Impact</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Kindora gives youth-serving nonprofits the tools to manage participants,
                            volunteers, programs, and grant reporting — so your team can spend more
                            time with youth and less time on administration.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-full shadow-lg shadow-orange-500/25 transition-all duration-300"
                            >
                                Try Kindora Free
                                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <Link
                                href="/kindora/contact"
                                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-orange-600 transition-colors"
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
                            { stat: "Youth & mentors", label: "in one platform" },
                            { stat: "Multiple programs", label: "managed separately" },
                            { stat: "Impact reports", label: "ready for funders" },
                            { stat: "Secure data", label: "with role-based access" },
                        ].map((item) => (
                            <div key={item.label}>
                                <p className="text-xl font-bold text-orange-500">{item.stat}</p>
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
                            Everything a youth nonprofit needs
                        </h2>
                        <p className="text-gray-600">
                            From participant intake to funder reporting, Kindora handles every
                            aspect of your youth programs so your staff can focus on the youth you serve.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-4">
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
            <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-500 to-amber-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Spend more time with youth — less time on admin
                    </h2>
                    <p className="text-orange-100 text-lg mb-10">
                        Let Kindora handle the operational complexity so your team can focus on what matters most.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 text-base font-semibold text-orange-600 bg-white hover:bg-orange-50 rounded-full shadow-lg transition-all duration-300"
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
