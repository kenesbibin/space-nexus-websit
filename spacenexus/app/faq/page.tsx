import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
    title: "FAQ — Virtual Data Room Questions Answered",
    description: "The complete SpaceNexus FAQ library. VDR security, VDR compliance, virtual data room basics — 100+ questions answered by M&A and security experts.",
    alternates: {
        canonical: "https://spacenexus.net/faq",
    },
    keywords: [
        "VDR FAQ",
        "virtual data room FAQ",
        "data room questions",
        "VDR security FAQ",
        "VDR compliance FAQ",
        "SpaceNexus FAQ",
    ],
    openGraph: {
        title: "FAQ — Virtual Data Room Questions Answered | SpaceNexus",
        description: "The complete SpaceNexus FAQ library. VDR security, VDR compliance, virtual data room basics — 100+ questions answered.",
        url: "https://spacenexus.net/faq",
    },
};

const faqSections = [
    {
        title: "VDR Security FAQ",
        description: "40+ questions on virtual data room security — encryption, access controls, watermarking, audit logs, MFA, SSO, and more.",
        href: "/faq/vdr-security",
        count: 40,
        accent: "blue",
        icon: "🔐",
    },
    {
        title: "VDR Compliance FAQ",
        description: "30+ questions on virtual data room compliance — SOC 2, ISO 27001, GDPR, HIPAA, SEC 17a-4, FINRA, and more.",
        href: "/faq/vdr-compliance",
        count: 30,
        accent: "violet",
        icon: "📋",
    },
    {
        title: "Virtual Data Room FAQ",
        description: "20+ questions on virtual data room basics — what a VDR is, how it works, when to use one, pricing, setup, and more.",
        href: "/faq/data-room",
        count: 20,
        accent: "emerald",
        icon: "📚",
    },
];

const accentClasses: Record<string, { border: string; badge: string; iconBg: string; iconText: string }> = {
    blue: { border: "border-blue-200 hover:border-blue-400", badge: "bg-blue-50 text-blue-700", iconBg: "bg-blue-50", iconText: "text-blue-600" },
    violet: { border: "border-violet-200 hover:border-violet-400", badge: "bg-violet-50 text-violet-700", iconBg: "bg-violet-50", iconText: "text-violet-600" },
    emerald: { border: "border-emerald-200 hover:border-emerald-400", badge: "bg-emerald-50 text-emerald-700", iconBg: "bg-emerald-50", iconText: "text-emerald-600" },
};

export default function FAQIndexPage() {
    const totalQuestions = faqSections.reduce((sum, s) => sum + s.count, 0);

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "SpaceNexus FAQ Library",
        description: `${totalQuestions}+ questions on virtual data rooms, security, and compliance.`,
        numberOfItems: faqSections.length,
        itemListElement: faqSections.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            description: s.description,
            url: `https://spacenexus.net${s.href}`,
        })),
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
            { "@type": "ListItem", position: 2, name: "FAQ", item: "https://spacenexus.net/faq" },
        ],
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="faq-index-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
            <Script id="faq-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* Hero */}
            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <span className="text-gray-900">FAQ</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Frequently Asked Questions</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Virtual Data Room FAQ: Answers for M&A, Fundraising & Legal Teams</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mb-8">
                        {totalQuestions}+ questions on virtual data rooms, security, and compliance — answered by M&A and security practitioners.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 font-medium">
                            {totalQuestions}+ questions
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-medium">
                            {faqSections.length} categories
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 border border-violet-100 font-medium">
                            Updated June 2026
                        </span>
                    </div>
                </div>
            </section>

            {/* FAQ Sections Grid */}
            <section className="py-16 lg:py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        {faqSections.map((s) => {
                            const accent = accentClasses[s.accent];
                            return (
                                <Link
                                    key={s.href}
                                    href={s.href}
                                    className={`group block bg-white rounded-2xl border-2 ${accent.border} p-7 transition-all duration-200 hover:shadow-lg`}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`shrink-0 w-12 h-12 rounded-xl ${accent.iconBg} flex items-center justify-center text-2xl`}>
                                            {s.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-lg font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug mb-1.5">
                                                {s.title}
                                            </h2>
                                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${accent.badge}`}>
                                                {s.count}+ questions
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
                                    <p className="text-sm font-semibold text-[#2563eb] mt-4 group-hover:underline">
                                        Browse {s.title.toLowerCase()} →
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why this FAQ */}
            <section className="py-14 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Why we wrote these FAQs</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        The virtual data room market is dominated by opaque pricing, technical jargon, and aggressive sales tactics. We wrote these FAQs to give deal teams, legal teams, and security teams direct access to the answers they need — without having to schedule a sales call.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Every question on these pages reflects a real question we have been asked by customers, prospects, or security reviewers. The answers are written by our security and M&A teams based on actual SpaceNexus platform capabilities and industry best practices.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Still have questions?
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Our team is happy to answer specific questions about your use case, security requirements, or compliance needs.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">
                            Talk to our team →
                        </Link>
                        <Link href="/security" className="inline-flex items-center px-8 py-3.5 bg-white/10 backdrop-blur text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                            See security overview
                        </Link>
                    </div>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
    );
}
