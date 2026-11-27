import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import LastUpdated from "../components/LastUpdated";
import AnswerBlock from "../../components/AnswerBlock";

export const metadata: Metadata = {
    title: "Kindora Security & Compliance",
    description:
        "SOC 2 Type II, ISO 27001, GDPR, AES-256 encryption. How Kindora protects your nonprofit's donor, grant, and program data end-to-end.",
    alternates: { canonical: "/kindora/security" },
    openGraph: {
        title: "Kindora Security & Compliance | Kindora",
        description:
            "SOC 2 Type II, ISO 27001, GDPR, AES-256 encryption. How Kindora protects your nonprofit's donor, grant, and program data...",
        url: "https://spacenexus.net/kindora/security",
        siteName: "Kindora by Space Nexus",
        type: "website",
    },
};

const securityFeatures = [
    {
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        title: "256-bit AES Encryption",
        description:
            "Every donor record, grant document, and financial file is encrypted at rest using AES-256. Data in transit is protected by TLS 1.3.",
        color: "bg-blue-50 text-[#2563eb]",
    },
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        title: "SOC 2 Type II Certified",
        description:
            "Our systems and processes are independently audited against SOC 2 Type II standards — covering security, availability, processing integrity, confidentiality, and privacy.",
        color: "bg-emerald-50 text-emerald-600",
    },
    {
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        title: "Full Audit Trail",
        description:
            "Every action on your donor and grant data is logged — who viewed what, when, and from which IP address. Immutable, tamper-proof audit logs for compliance and reporting.",
        color: "bg-violet-50 text-violet-600",
    },
    {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
        title: "Granular Permissions",
        description:
            "Set access at the module, folder, or record level. Control who can view, edit, or export donor and financial data. Revoke access instantly — even after a staff member leaves.",
        color: "bg-amber-50 text-amber-600",
    },
    {
        icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
        title: "Donor PII Tokenization",
        description:
            "Share reports and exports without exposing personal data. Donor PII is tokenized so sensitive information stays protected across your organization.",
        color: "bg-rose-50 text-rose-600",
    },
    {
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        title: "GDPR & Data Residency",
        description:
            "Choose your data region (EU, US, APAC). Kindora is GDPR-compliant with tools for data subject access requests, consent management, and right-to-erasure workflows.",
        color: "bg-cyan-50 text-cyan-600",
    },
];

const certifications = [
    { name: "SOC 2 Type II", description: "Annual independent audit" },
    { name: "ISO 27001", description: "Information security management" },
    { name: "GDPR", description: "EU data protection ready" },
    { name: "TLS 1.3", description: "Encrypted data in transit" },
    { name: "AES-256", description: "Military-grade encryption at rest" },
    { name: "99.9% Uptime SLA", description: "Enterprise reliability guarantee" },
];

const securityFaqs = [
    {
        question: "Is Kindora SOC 2 Type II certified?",
        answer: "Yes. Kindora undergoes annual SOC 2 Type II audits conducted by an independent third-party auditor. This certification verifies that our security controls for data protection, availability, and confidentiality meet or exceed AICPA Trust Services Criteria. Enterprise clients can request the full audit report.",
    },
    {
        question: "What encryption does Kindora use?",
        answer: "Kindora uses AES-256 encryption for data at rest and TLS 1.3 for data in transit — the same standards used by major financial institutions. Enterprise plans also support customer-managed encryption keys (CMEK) for additional control.",
    },
    {
        question: "Is Kindora compliant with GDPR?",
        answer: "Yes. Kindora is GDPR compliant for European data protection, with tools for data subject access requests, consent management, and right-to-erasure workflows. We also align with ISO 27001 and CCPA requirements for donor and constituent personal data.",
    },
    {
        question: "Where is Kindora data stored?",
        answer: "Kindora data is stored in SOC 2 certified data centers with geographic redundancy. Enterprise clients can choose data residency in the US, EU, or other regions to meet compliance requirements. All data centers feature physical security, biometric access, and 24/7 monitoring.",
    },
    {
        question: "Does Kindora support multi-factor authentication (MFA)?",
        answer: "Yes — MFA is available on all plans and mandatory on Enterprise plans. Kindora supports TOTP authenticator apps, SMS verification, and SSO/SAML integration with identity providers like Okta, Azure AD, and Google Workspace.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Kindora", item: "https://spacenexus.net/kindora" },
        { "@type": "ListItem", position: 3, name: "Security", item: "https://spacenexus.net/kindora/security" },
    ],
};

const securityFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: securityFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
};

export default function KindoraSecurityPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script
                id="kindora-security-breadcrumb"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="kindora-security-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(securityFaqSchema) }}
            />
            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <nav className="flex items-center justify-center gap-2 text-xs text-blue-200/80 mb-8" aria-label="Breadcrumb">
                        <Link href="/kindora" className="hover:text-white transition-colors">Kindora</Link>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        <span className="text-blue-100">Security</span>
                    </nav>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white/80 font-medium mb-8">
                        <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Enterprise Security & Compliance
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Bank-grade security for your nonprofit&apos;s data
                    </h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Kindora is built for organizations that steward donor trust.
                        Every layer of our platform protects your donor, grant, and
                        program data and satisfies the strictest compliance requirements.
                    </p>
                </div>
            </section>

            <AnswerBlock text="Kindora security includes SOC 2 Type II certification, ISO 27001 compliance, AES-256 encryption at rest and in transit, donor PII tokenization, granular role-based permissions, immutable audit logs, IP whitelisting, and SSO/SAML integration with MFA support." />

            {/* Safeguarding Your Data */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 leading-tight">
                        <span className="text-[#2563eb]">Safeguarding Your Data,</span>
                        <br />
                        Ensuring Confidentiality
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col">
                            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">
                                Local Data Servers
                            </h3>
                            <p className="text-gray-600 text-center max-w-md mx-auto mb-6">
                                Customer data is locally hosted in Saudi Arabia, UAE, United States of
                                America, Singapore &amp; India.
                            </p>
                            <img
                                src="/kindora/images/global-data-map.svg"
                                alt="World map showing local data servers in USA, KSA, UAE, India and Singapore"
                                className="w-full h-auto mt-auto"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex-1 flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">
                                    On-premise Setup
                                </h3>
                                <p className="text-gray-600 text-center max-w-md mx-auto">
                                    Take control of your data with enterprise on-premise setup ensuring
                                    your data stays only on your network.
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex-1 flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">
                                    PII Tokenization
                                </h3>
                                <p className="text-gray-600 text-center max-w-md mx-auto">
                                    Send messages and conduct surveys without sharing personal data
                                    &amp; enable secure sharing across organization with token access.
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex-1 flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">
                                    24/7 Local Support
                                </h3>
                                <p className="text-gray-600 text-center max-w-md mx-auto">
                                    Get 24/7 localised support for any platform related queries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications strip */}
            <section className="py-8 bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {certifications.map((cert) => (
                            <div key={cert.name} className="flex flex-col items-center text-center p-4">
                                <p className="text-sm font-bold text-gray-900">{cert.name}</p>
                                <p className="text-xs text-gray-600 mt-0.5">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security features */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Security built for nonprofits, not just IT teams
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Six layers of protection for every donor record, every user, every program.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {securityFeatures.map((f) => (
                            <div
                                key={f.title}
                                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-5`}>
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Security FAQ</h2>
                        <p className="text-lg text-gray-600">Common questions about Kindora security and compliance.</p>
                    </div>
                    <div className="space-y-4">
                        {securityFaqs.map((faq, i) => (
                            <div key={i} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Your donor data is safe with Kindora
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Talk to our team and get a full security and compliance overview for your organization.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/kindora/demo"
                            className="px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25"
                        >
                            Request a Demo
                        </Link>
                        <Link
                            href="/kindora/faq"
                            className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors border border-gray-300"
                        >
                            Visit the FAQ
                        </Link>
                    </div>
                </div>
            </section>

            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-11-26" />
            </div>
        </div>
    );
}
