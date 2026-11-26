import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "VDR Compliance FAQ — SOC 2, GDPR, HIPAA, SEC",
    description: "Comprehensive FAQ on virtual data room compliance. SOC 2 Type II, ISO 27001, GDPR, HIPAA, SEC 17a-4, FINRA, and 25+ more compliance questions answered.",
    alternates: {
        canonical: "https://spacenexus.net/faq/vdr-compliance",
    },
    keywords: [
        "VDR compliance FAQ",
        "virtual data room compliance",
        "VDR SOC 2",
        "VDR GDPR",
        "VDR HIPAA",
        "VDR ISO 27001",
        "VDR SEC 17a-4",
        "VDR FINRA",
        "virtual data room regulatory",
        "data room compliance",
    ],
    openGraph: {
        title: "VDR Compliance FAQ — SOC 2, GDPR, HIPAA, SEC | SpaceNexus",
        description: "Comprehensive FAQ on virtual data room compliance. SOC 2 Type II, ISO 27001, GDPR, HIPAA, SEC 17a-4, FINRA, and more.",
        url: "https://spacenexus.net/faq/vdr-compliance",
        type: "article",
    },
};

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqCategory {
    id: string;
    title: string;
    description: string;
    items: FaqItem[];
}

const categories: FaqCategory[] = [
    {
        id: "soc-2",
        title: "SOC 2 Type II Compliance",
        description: "The gold standard for SaaS security — what SOC 2 means and why it matters.",
        items: [
            {
                question: "What is SOC 2 Type II?",
                answer: "SOC 2 (Service Organization Control 2) is an independent audit framework developed by the AICPA that evaluates a service organization's controls across five Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy. A Type II report evaluates controls over a 6-12 month period, providing strong assurance that security practices are consistently maintained — not just designed on paper.",
            },
            {
                question: "What's the difference between SOC 2 Type I and Type II?",
                answer: "SOC 2 Type I evaluates controls at a single point in time — it tells you the controls are designed correctly. SOC 2 Type II evaluates controls over an extended period (typically 6-12 months) and tells you the controls actually work consistently. Type II is significantly stronger and is what enterprise customers should require. Always ask for the Type II report, not just a Type I or a SOC 2 logo.",
            },
            {
                question: "What does the SOC 2 audit cover?",
                answer: "A SOC 2 Type II audit covers the operating effectiveness of controls across five Trust Services Criteria: (1) Security — protection against unauthorized access; (2) Availability — system uptime and disaster recovery; (3) Processing Integrity — accurate and complete data processing; (4) Confidentiality — protection of confidential information; (5) Privacy — collection, use, and disposal of personal information. The audit also reviews logical access, change management, system operations, and risk mitigation.",
            },
            {
                question: "How often does a VDR get SOC 2 audited?",
                answer: "SOC 2 Type II audits are conducted annually. The audit covers a 6-12 month period, and the resulting report is typically refreshed each year. Leading VDRs also undergo continuous monitoring and quarterly reviews by their auditor between annual audits. Always ask for the most recent SOC 2 Type II report, and check the report period covers the last 12 months.",
            },
            {
                question: "How can I review a VDR provider's SOC 2 report?",
                answer: "Enterprise VDR providers share their SOC 2 Type II report under NDA. The report includes the auditor's opinion, scope of the audit, control descriptions, test procedures and results, and any noted exceptions. Review the auditor's opinion (it should be unqualified/clean), check for any noted exceptions, and confirm the report period covers recent months. Treat the report as confidential — it is for your security review only.",
            },
        ],
    },
    {
        id: "iso-27001",
        title: "ISO 27001 Compliance",
        description: "The international standard for information security management.",
        items: [
            {
                question: "What is ISO 27001?",
                answer: "ISO 27001 is the international standard for Information Security Management Systems (ISMS), published by the International Organization for Standardization. It specifies the requirements for establishing, implementing, maintaining, and continually improving an information security management system. ISO 27001 certification is awarded by accredited certification bodies after a multi-stage audit process.",
            },
            {
                question: "How is ISO 27001 different from SOC 2?",
                answer: "SOC 2 is a US-centric framework focused on Trust Services Criteria, primarily used by SaaS companies serving US customers. ISO 27001 is an international standard with a risk-based, process-oriented approach used globally. Many VDRs hold both — SOC 2 for US enterprise customers, ISO 27001 for global and EU customers. Both are strong certifications; ISO 27001 is often required for European and APAC enterprise deals.",
            },
            {
                question: "What does ISO 27001 require?",
                answer: "ISO 27001 requires: (1) a systematic approach to managing sensitive information; (2) risk assessment and treatment processes; (3) security controls across 14 domains (Annex A) including access control, cryptography, physical security, operations security, and communications security; (4) regular internal audits and management reviews; (5) continuous improvement through corrective actions; and (6) top management commitment and accountability.",
            },
            {
                question: "How long does ISO 27001 certification take?",
                answer: "A typical ISO 27001 implementation takes 6-12 months for a mature organization, including risk assessment, control implementation, internal audits, and the certification audit. Annual surveillance audits maintain the certification, with a full re-certification audit every 3 years. Once certified, the VDR provider's ISMS is continuously monitored and improved.",
            },
        ],
    },
    {
        id: "gdpr",
        title: "GDPR Compliance",
        description: "The EU's General Data Protection Regulation and what it means for VDR use.",
        items: [
            {
                question: "Is a VDR GDPR compliant?",
                answer: "A VDR itself is not 'compliant' — it is a tool that supports GDPR compliance when used correctly. A GDPR-compliant VDR deployment requires: (1) Data Processing Agreement (DPA) with the provider; (2) data residency in the EU for EU data subjects; (3) encryption at rest and in transit; (4) granular access controls; (5) immutable audit logs; (6) breach notification infrastructure (72-hour notification); (7) support for data subject rights (access, erasure, portability). SpaceNexus supports all of these requirements.",
            },
            {
                question: "Where should EU data be stored under GDPR?",
                answer: "GDPR does not require EU data to stay in the EU, but transfers outside the EEA require appropriate safeguards: (1) adequacy decision (e.g., EU-US Data Privacy Framework for certified US organizations); (2) Standard Contractual Clauses (SCCs); (3) Binding Corporate Rules. For maximum simplicity, choose a VDR provider with EU data centers (Ireland, Germany, Netherlands) so data stays in the EEA by default. SpaceNexus offers EU data residency options.",
            },
            {
                question: "Does the VDR provider need to sign a DPA?",
                answer: "Yes. Under GDPR, when a VDR provider processes personal data on behalf of a controller, the provider is a 'processor' and must sign a Data Processing Agreement (DPA). The DPA specifies the scope, purpose, and duration of processing, the types of personal data processed, the security measures in place, and the provider's obligations. SpaceNexus offers GDPR-compliant DPAs for all enterprise customers.",
            },
            {
                question: "What is a Records of Processing Activities (ROPA)?",
                answer: "A ROPA (Article 30 of GDPR) is a record of all processing activities carried out by an organization, including the categories of data, purposes of processing, recipients, transfers outside the EEA, and retention periods. When using a VDR, the controller's ROPA should document the VDR as a processing tool, the categories of personal data in the data room, and the VDR provider as a sub-processor. SpaceNexus supports ROPA documentation with detailed processor information.",
            },
            {
                question: "What is the 72-hour breach notification under GDPR?",
                answer: "GDPR Article 33 requires organizations to notify the relevant supervisory authority within 72 hours of becoming aware of a personal data breach that poses a risk to individuals' rights and freedoms. The VDR must support this with real-time monitoring, anomaly detection, and incident response infrastructure. SpaceNexus provides 24/7 security monitoring and a documented incident response plan with breach notification SLAs that meet the 72-hour requirement.",
            },
        ],
    },
    {
        id: "hipaa",
        title: "HIPAA Compliance",
        description: "Healthcare data protection requirements for VDRs handling PHI.",
        items: [
            {
                question: "Can a VDR be used for HIPAA-protected health information (PHI)?",
                answer: "Yes, but only with proper configuration: (1) Business Associate Agreement (BAA) with the VDR provider; (2) HIPAA-compliant configuration (audit logs with 6-year retention, access controls, encryption); (3) minimum-necessary access controls; (4) breach notification infrastructure. SpaceNexus offers HIPAA-ready configurations and BAA execution for healthcare customers, supporting pharmaceutical licensing, biotech M&A, and clinical trial data sharing.",
            },
            {
                question: "What is a Business Associate Agreement (BAA) for VDR?",
                answer: "A BAA is a written contract required by HIPAA between a covered entity (or business associate) and a vendor that processes PHI on their behalf. The BAA specifies the permitted uses of PHI, requires the vendor to implement HIPAA security safeguards, mandates breach notification, and allocates liability. Without a signed BAA, the VDR provider cannot legally process PHI for your organization.",
            },
            {
                question: "What is the minimum necessary standard under HIPAA?",
                answer: "HIPAA's minimum necessary standard requires that PHI shared during due diligence or any other activity be limited to the minimum necessary to accomplish the purpose. In a VDR context, this means: (1) redacting PHI not needed for the diligence objective; (2) de-identifying patient data where possible; (3) limiting access to individuals with a legitimate need; (4) tiered access for different user groups. SpaceNexus provides granular access controls and redaction tools to support this.",
            },
            {
                question: "How long must HIPAA audit logs be retained?",
                answer: "HIPAA requires audit logs and documentation to be retained for 6 years from the date of creation or the date when the document was last in effect, whichever is later. VDRs handling PHI must support audit log retention for at least 6 years, with secure export and archival capabilities. SpaceNexus offers configurable retention policies with cryptographic deletion verification after the retention period expires.",
            },
        ],
    },
    {
        id: "sec-finra",
        title: "SEC & FINRA Compliance",
        description: "Financial services regulations and VDR requirements for broker-dealers and investment advisors.",
        items: [
            {
                question: "What is SEC Rule 17a-4 and how does it affect VDRs?",
                answer: "SEC Rule 17a-4 (17 CFR 240.17a-4) requires broker-dealers to retain certain records in a non-rewritable, non-erasable format (WORM — write once, read many) for specified periods (typically 6 years). For VDRs handling regulated financial data, this means audit trails and key documents must be stored in tamper-evident WORM format. SpaceNexus supports SEC 17a-4 retention with immutable audit logs and configurable retention periods.",
            },
            {
                question: "What is the Sarbanes-Oxley (SOX) Section 802 requirement?",
                answer: "SOX Section 802 imposes criminal penalties for altering, destroying, or concealing documents relevant to federal investigations. For VDRs, this means data rooms involved in SEC-regulated transactions must maintain tamper-evident records for the duration of the investigation and any subsequent retention period. SpaceNexus's immutable audit logs and cryptographic record protection support SOX 802 compliance.",
            },
            {
                question: "What is FINRA Rule 3110 and how does it apply to VDRs?",
                answer: "FINRA Rule 3110 requires member firms to establish and maintain a supervisory system for the activities of their business, including electronic communications. VDRs used by broker-dealers and investment advisors must support retention of all deal communications and document exchanges for FINRA-mandated periods. SpaceNexus provides the audit trail, retention controls, and supervisory workflows required for FINRA compliance.",
            },
            {
                question: "What is Regulation FD and how does it relate to VDRs?",
                answer: "Regulation FD (Fair Disclosure) prohibits selective disclosure of material non-public information (MNPI) by public companies. VDRs used for due diligence must have strict access controls to prevent unauthorized disclosure of MNPI, and audit trails to demonstrate compliance. SpaceNexus provides per-user, per-document access controls with full audit trails that support Regulation FD compliance for public company transactions.",
            },
        ],
    },
    {
        id: "industry-specific",
        title: "Industry-Specific Compliance",
        description: "Compliance requirements specific to financial services, legal, healthcare, and other regulated industries.",
        items: [
            {
                question: "What compliance certifications do VDRs need for financial services?",
                answer: "For financial services (investment banking, PE, broker-dealers), VDRs need: (1) SOC 2 Type II; (2) ISO 27001; (3) SEC Rule 17a-4 compliance; (4) FINRA-compliant retention; (5) SOX 802-compliant record protection; (6) Regulation FD-compliant access controls; (7) information barrier (Chinese wall) enforcement; (8) MNPI handling controls. SpaceNexus supports all financial services compliance requirements.",
            },
            {
                question: "What compliance certifications do VDRs need for legal use?",
                answer: "For law firm and corporate counsel use, VDRs need: (1) SOC 2 Type II; (2) ISO 27001; (3) court-admissible audit logs (immutable, tamper-evident); (4) privilege protection with granular access controls; (5) ethical wall enforcement; (6) state bar data security compliance; (7) GDPR for cross-border matters; (8) HIPAA BAA for healthcare matters. SpaceNexus provides legal-grade compliance with privilege hierarchies, ethical walls, and court-admissible audit logs.",
            },
            {
                question: "What compliance certifications do VDRs need for healthcare?",
                answer: "For healthcare M&A, pharmaceutical licensing, and clinical trial data, VDRs need: (1) SOC 2 Type II; (2) HIPAA BAA availability; (3) HITRUST certification (for some healthcare systems); (4) FDA 21 CFR Part 11 compliance (for electronic records and signatures); (5) GDPR for European clinical trials; (6) minimum necessary access controls; (7) 6-year audit log retention. SpaceNexus supports HIPAA-ready configurations and FDA 21 CFR Part 11 compliance.",
            },
            {
                question: "What is FDA 21 CFR Part 11 and why does it matter for VDRs?",
                answer: "FDA 21 CFR Part 11 governs the use of electronic records and electronic signatures in FDA-regulated industries (pharmaceutical, biotech, medical device). For VDRs handling clinical trial data, regulatory submissions, or pharmaceutical M&A, Part 11 requires: (1) electronic records with tamper-evident audit trails; (2) electronic signature controls; (3) role-based access controls; (4) time-stamped records; (5) data integrity controls. SpaceNexus supports Part 11 compliance with immutable audit logs and configurable e-signature workflows.",
            },
        ],
    },
];

const flatFaqs = categories.flatMap(c => c.items);

export default function VDRComplianceFAQPage() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
            { "@type": "ListItem", position: 2, name: "FAQ", item: "https://spacenexus.net/faq" },
            { "@type": "ListItem", position: 3, name: "VDR Compliance", item: "https://spacenexus.net/faq/vdr-compliance" },
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: flatFaqs.map(f => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "VDR Compliance FAQ Resource",
        description: "Comprehensive FAQ on virtual data room regulatory compliance. SOC 2, ISO 27001, GDPR, HIPAA, SEC, FINRA, and more.",
        url: "https://spacenexus.net/faq/vdr-compliance",
        serviceType: "Virtual Data Room",
        provider: {
            "@type": "Organization",
            name: "SpaceNexus",
            url: "https://spacenexus.net",
        },
        areaServed: { "@type": "Place", name: "Worldwide" },
    };

    const speakableSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "VDR Compliance FAQ",
        speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".faq-question", ".faq-answer"],
        },
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="vdr-compliance-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="vdr-compliance-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="vdr-compliance-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="vdr-compliance-speakable-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

            {/* Hero */}
            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/faq" className="hover:text-[#2563eb] transition-colors">FAQ</Link>
                        <span>›</span>
                        <span className="text-gray-900">VDR Compliance</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">FAQ</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">VDR Compliance FAQ: SOC 2, ISO 27001, GDPR & More</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mb-8">
                        The most comprehensive FAQ on virtual data room compliance — {flatFaqs.length} questions covering SOC 2, ISO 27001, GDPR, HIPAA, SEC 17a-4, FINRA, and more.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 font-medium">
                            {flatFaqs.length} questions answered
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-medium">
                            {categories.length} frameworks
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 border border-violet-100 font-medium">
                            Updated June 2026
                        </span>
                    </div>
                </div>
            </section>

            {/* Table of contents */}
            <section className="py-10 bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">Jump to framework</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {categories.map(c => (
                            <a
                                key={c.id}
                                href={`#${c.id}`}
                                className="block p-4 rounded-xl border border-gray-200 hover:border-[#2563eb]/40 hover:shadow-sm transition-all"
                            >
                                <h3 className="text-sm font-semibold text-gray-900">{c.title}</h3>
                                <p className="text-xs text-gray-600 mt-1">{c.items.length} questions</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ sections */}
            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {categories.map(category => (
                        <div key={category.id} id={category.id} className="scroll-mt-24">
                            <div className="mb-6">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{category.title}</h2>
                                <p className="text-gray-600">{category.description}</p>
                            </div>
                            <div className="space-y-3">
                                {category.items.map((item, i) => (
                                    <details
                                        key={i}
                                        className="group bg-white rounded-xl border border-gray-200 hover:border-[#2563eb]/30 transition-all"
                                    >
                                        <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
                                            <h3 className="text-base font-semibold text-gray-900 leading-snug pr-2">{item.question}</h3>
                                            <svg className="shrink-0 w-5 h-5 text-[#2563eb] mt-0.5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </summary>
                                        <div className="px-5 pb-5 -mt-2 text-sm text-gray-600 leading-relaxed">
                                            {item.answer}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Cross-links */}
            <section className="py-14 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Related VDR Resources</p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue exploring VDR compliance</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/faq/vdr-security" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">FAQ</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR security FAQ →</h3>
                            <p className="text-xs text-gray-600 mt-2">Encryption, access controls, watermarking, audit logs, and 35+ more security questions answered.</p>
                        </Link>
                        <Link href="/blog/vdr-security-what-to-look-for" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Guide</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR compliance guide →</h3>
                            <p className="text-xs text-gray-600 mt-2">The 22-minute definitive guide to SOC 2, ISO 27001, GDPR, HIPAA, SEC, and FINRA standards.</p>
                        </Link>
                        <Link href="/blog/secure-file-sharing-for-lawyers" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Guide</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">UK law firm compliance →</h3>
                            <p className="text-xs text-gray-600 mt-2">FCA, Companies Act 2006, SRA, and UK GDPR requirements for law firms.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Get the SpaceNexus compliance pack
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        SOC 2 Type II report, ISO 27001 certificate, GDPR DPA, HIPAA BAA, and penetration test summary — all under NDA.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">
                            Request compliance pack →
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
