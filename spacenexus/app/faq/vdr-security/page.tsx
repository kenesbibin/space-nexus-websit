import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "VDR Security FAQ — 40+ Questions Answered",
    description: "The most comprehensive FAQ on virtual data room security. Encryption, access controls, watermarking, audit logs, MFA, SSO, data residency, and 35+ more questions answered.",
    alternates: {
        canonical: "https://spacenexus.net/faq/vdr-security",
    },
    keywords: [
        "VDR security FAQ",
        "virtual data room security",
        "VDR encryption",
        "VDR access control",
        "VDR audit log",
        "VDR MFA",
        "VDR SSO",
        "is a virtual data room secure",
        "VDR security questions",
        "VDR watermarking",
    ],
    openGraph: {
        title: "VDR Security FAQ — 40+ Questions Answered | SpaceNexus",
        description: "The most comprehensive FAQ on virtual data room security. Encryption, access controls, watermarking, audit logs, MFA, SSO, and more.",
        url: "https://spacenexus.net/faq/vdr-security",
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
        id: "encryption",
        title: "Encryption & Data Protection",
        description: "How VDRs encrypt data at rest and in transit, and protect against breaches.",
        items: [
            {
                question: "How is data encrypted in a virtual data room?",
                answer: "A modern VDR encrypts data at two layers: at rest using AES-256 encryption (the same standard used by governments and financial institutions for classified data) and in transit using TLS 1.3 (the latest transport layer security protocol with forward secrecy). Encryption keys are managed through a dedicated KMS (Key Management Service) with role-based access controls and automatic key rotation.",
            },
            {
                question: "What is AES-256 encryption and why does it matter?",
                answer: "AES-256 is the Advanced Encryption Standard with a 256-bit key length. It is the encryption standard used by the U.S. government for top-secret classified data, by financial institutions, and by major cloud providers. A 256-bit key is mathematically infeasible to brute-force with current computing technology — there are more possible keys than atoms in the observable universe.",
            },
            {
                question: "What is TLS 1.3 and how is it different from older versions?",
                answer: "TLS 1.3 is the latest version of the Transport Layer Security protocol used to encrypt data in transit between your browser and the VDR server. Compared to TLS 1.2, it offers faster handshakes, removes support for outdated cryptographic algorithms, and provides forward secrecy by default — meaning a compromised key cannot be used to decrypt past sessions.",
            },
            {
                question: "Can the VDR provider decrypt my documents?",
                answer: "With standard encryption, the VDR provider technically holds the encryption keys and could access data. For maximum control, enterprise VDR tiers offer customer-managed encryption keys (CMEK), where the customer controls the keys in their own KMS and the provider cannot decrypt data without the customer's key. This is critical for highly regulated industries and zero-trust architectures.",
            },
            {
                question: "Are backups encrypted?",
                answer: "Yes. Enterprise VDRs encrypt backups with AES-256 using separate key sets from the primary data. This means a backup tape or snapshot cannot be read without the backup encryption keys, even if it is physically exfiltrated. Backup encryption is a SOC 2 Type II and ISO 27001 control requirement.",
            },
            {
                question: "What happens to my data if the VDR provider is breached?",
                answer: "A well-architected VDR protects against provider breaches through: AES-256 encryption at rest (data is unreadable without keys), customer-managed keys (provider cannot decrypt even if breached), immutable audit logs (tamper-evident), and geographic redundancy (data replicated across multiple secure data centers). A breach of the provider should not result in a breach of your documents.",
            },
        ],
    },
    {
        id: "access-controls",
        title: "Access Controls & Authentication",
        description: "How VDRs control who can access what, and verify user identity.",
        items: [
            {
                question: "What is multi-factor authentication (MFA) and is it required?",
                answer: "Multi-factor authentication requires users to provide two or more verification factors (something they know, something they have, something they are) before gaining access. Enterprise VDRs require MFA on all accounts, supporting TOTP authenticator apps (Google Authenticator, Authy), hardware security keys (YubiKey), and SMS as a fallback. MFA should never be optional for a VDR handling confidential deal data.",
            },
            {
                question: "What is SSO and does my VDR support it?",
                answer: "Single Sign-On (SSO) allows users to log in to the VDR using their existing corporate identity (Okta, Azure AD, Google Workspace, OneLogin) via SAML 2.0 or OpenID Connect. Enterprise VDRs support SSO with SCIM provisioning, which automatically creates, updates, and deactivates user accounts based on HR systems. This eliminates password reuse and ensures terminated employees lose access immediately.",
            },
            {
                question: "How granular can VDR access permissions be?",
                answer: "Enterprise VDRs support permissions at the user, group, folder, document, and even page level. You can set view-only access, no-download, no-print, watermarked download, time-limited access, IP-restricted access, and per-document expiration. The principle of least privilege is foundational — give each user or group only the access they need to do their job.",
            },
            {
                question: "Can I restrict access to specific IP addresses?",
                answer: "Yes. Enterprise VDRs support IP whitelisting, which restricts access to specific IP addresses or CIDR ranges (e.g., your office network, your VPN, your home IP). Combined with device binding, this means even a compromised password cannot be used to log in from an unauthorized network or device. IP whitelisting is a common requirement for transactions involving classified or highly sensitive data.",
            },
            {
                question: "What is just-in-time access provisioning?",
                answer: "Just-in-time (JIT) access provisioning automatically grants temporary access to specific documents or folders for a defined period (e.g., 24 hours, 7 days). After the period expires, access is automatically revoked. JIT is used for highly sensitive documents where even long-term authorized users should only have access for the time they need to complete their review.",
            },
            {
                question: "How do I revoke access when someone leaves the deal?",
                answer: "VDRs allow instant access revocation through the user management console. You can deactivate individual users (their login stops working immediately) or remove them from specific groups (losing access to group-restricted documents). For maximum security, enterprise VDRs also support automatic deprovisioning via SCIM when an employee leaves your identity provider.",
            },
        ],
    },
    {
        id: "document-protection",
        title: "Document Protection",
        description: "How VDRs protect individual documents from copying, printing, and redistribution.",
        items: [
            {
                question: "What is dynamic watermarking?",
                answer: "Dynamic watermarking renders a visible overlay on every page of every document viewed or downloaded in the VDR. The watermark typically includes the viewer's name, email address, IP address, and a timestamp. Dynamic watermarks are a powerful forensic deterrent — if a document leaks, the watermark identifies exactly which user leaked it. The watermark is rendered server-side and cannot be removed by the viewer.",
            },
            {
                question: "What is view-only mode with screenshot protection?",
                answer: "View-only mode (also called screen shield) prevents users from downloading, printing, or copying text from documents. The document is rendered as an image in the browser, and additional protections block common screenshot tools, right-click, copy/paste, and screen recording attempts. View-only mode is used for highly sensitive materials like unreleased financial statements, M&A targets, and pre-IPO information.",
            },
            {
                question: "Can I disable printing and downloading?",
                answer: "Yes. VDRs allow you to set per-document or per-folder policies: allow download, allow watermarked download only, view-only with no download, or no access. You can also disable printing entirely or allow printing only with watermarks. These controls can be set at the deal level, document level, or user level.",
            },
            {
                question: "What is screen capture prevention?",
                answer: "Screen capture prevention (also called screenshot blocking) uses browser-based protections to block the most common screenshot and screen recording tools (Snipping Tool, Snagit, OBS, etc.) when view-only mode is enabled. The protection renders documents on top of an overlay that makes screenshots show as black or blurred. While no client-side protection is 100% effective, screen capture prevention deters the vast majority of casual and opportunistic leakage.",
            },
            {
                question: "Can documents be revoked after being downloaded?",
                answer: "Once a document is downloaded to a user's device, the VDR cannot technically reach into the device to delete it. However, dynamic watermarks identify who downloaded what, and the legal framework (NDAs, watermarks serving as forensic evidence) provides strong recourse. For maximum control, view-only mode keeps documents in the VDR browser viewer and prevents any local copy.",
            },
        ],
    },
    {
        id: "audit-monitoring",
        title: "Audit & Monitoring",
        description: "How VDRs track, log, and report on every action in the data room.",
        items: [
            {
                question: "What is an immutable audit trail?",
                answer: "An immutable audit trail is a tamper-proof log of every action taken in the VDR — logins, document views, downloads, prints, permission changes, Q&A exchanges, watermarks applied. The log is append-only (entries cannot be modified or deleted by any user, including administrators) and cryptographically signed so any tampering is detectable. Immutable audit trails are court-admissible and regulator-ready.",
            },
            {
                question: "What is recorded in a VDR audit log?",
                answer: "VDR audit logs typically record: who accessed what document, when, for how long, from which IP address and device, what they did (view, download, print, share), and any Q&A activity. Enterprise logs also capture permission changes, user invitations, failed login attempts, and administrative actions. Logs are exportable as CSV, PDF, or via API for compliance and regulatory reporting.",
            },
            {
                question: "Can audit logs be deleted or modified?",
                answer: "No. Immutable audit logs cannot be modified or deleted by any user, including administrators. Each entry is timestamped and cryptographically chained to the previous entry, so any tampering is detectable. This is a SOC 2 Type II control requirement and is essential for court-admissible evidence in litigation or regulatory investigations.",
            },
            {
                question: "How long are audit logs retained?",
                answer: "Audit log retention varies by plan: standard plans typically retain logs for the life of the data room plus 1-2 years; enterprise plans can retain logs for 7-10 years or longer to meet regulatory requirements (SEC Rule 17a-4 requires 6 years, HIPAA requires 6 years, some financial regulations require 7+ years). Logs are typically exportable for archival in your own records management system.",
            },
            {
                question: "Can I get real-time alerts on suspicious activity?",
                answer: "Yes. Enterprise VDRs support real-time alerts on suspicious activity: unusual login locations, bulk downloads, access from a new device, failed login attempts exceeding a threshold, downloads outside business hours, and other anomaly patterns. Alerts are sent via email, SMS, or webhook to deal administrators, security teams, or SIEM systems.",
            },
        ],
    },
    {
        id: "infrastructure",
        title: "Security Infrastructure",
        description: "How VDRs are hosted, replicated, and protected at the infrastructure level.",
        items: [
            {
                question: "Where is VDR data physically stored?",
                answer: "Enterprise VDRs offer data residency options across major regions: US, EU (Ireland, Germany, Netherlands), UK, Canada, Australia, Singapore, Japan, UAE, and more. For GDPR compliance, EU data should be stored in EU data centers. For HIPAA, US data centers with BAA support are required. For other regulations, choose a data center location that meets your jurisdictional requirements.",
            },
            {
                question: "What is the VDR's uptime SLA?",
                answer: "Enterprise VDRs commit to 99.9% uptime SLAs (about 9 hours of allowed downtime per year), with contractual penalties for missing the SLA. Leading providers offer 99.99% (about 53 minutes of allowed downtime per year) for mission-critical transactions. SLA guarantees are backed by multi-region redundancy, automatic failover, and 24/7 monitoring.",
            },
            {
                question: "What happens if a VDR data center goes down?",
                answer: "Enterprise VDRs use multi-region replication and automatic failover. If a primary data center becomes unavailable, traffic is automatically routed to a secondary region with no data loss. Users experience no disruption, and the data room remains accessible. Multi-region replication is a SOC 2 Type II and ISO 27001 control requirement.",
            },
            {
                question: "Does the VDR undergo penetration testing?",
                answer: "Yes. Enterprise VDRs undergo independent third-party penetration testing at least annually, with the results used to remediate findings and improve security posture. SOC 2 Type II audits include review of penetration testing, and the VDR provider should share executive summaries of pen test reports with enterprise customers under NDA. Continuous vulnerability scanning runs in production to detect new issues.",
            },
            {
                question: "Is the VDR provider SOC 2 Type II certified?",
                answer: "Yes. Enterprise VDRs hold SOC 2 Type II certification, which is an independent audit of the provider's security controls over a 6-12 month period. SOC 2 Type II is significantly stronger than Type I (which only audits controls at a point in time). Request the actual SOC 2 Type II report and review the auditor's opinion and any noted exceptions before selecting a VDR.",
            },
        ],
    },
    {
        id: "common-questions",
        title: "Common VDR Security Questions",
        description: "The questions deal teams, legal teams, and security teams ask most often.",
        items: [
            {
                question: "Is a VDR more secure than email for sharing deal documents?",
                answer: "Yes, dramatically. Email is not encrypted end-to-end, has no access controls (once sent, you lose control), no audit trail, and is the #1 vector for data breaches. A VDR encrypts at rest and in transit, provides granular access controls, logs every action, prevents forwarding, supports dynamic watermarking, and meets regulatory requirements that email never will.",
            },
            {
                question: "Is a VDR more secure than Dropbox, Google Drive, or SharePoint?",
                answer: "Yes, for sensitive deal data. Consumer and general-purpose cloud storage tools were designed for collaboration, not for controlled, auditable information exchange. They lack per-document permissions, dynamic watermarking, immutable audit trails, ethical wall enforcement, NDA workflows, and the regulatory certifications (SOC 2 Type II, ISO 27001, HIPAA, SEC 17a-4) that deal teams require.",
            },
            {
                question: "Can I use a VDR for classified or top-secret data?",
                answer: "Standard VDRs are not designed for government-classified data (which has specific physical and personnel security requirements). For top-secret or classified government data, you need a VDR deployed in a classified environment with appropriate facility clearance and personnel clearances. For most commercial M&A, fundraising, legal, and healthcare transactions, a SOC 2 Type II certified VDR is more than sufficient.",
            },
            {
                question: "What happens if a VDR user shares their password?",
                answer: "VDRs detect and prevent password sharing through: mandatory MFA (a shared password still requires the second factor from the original user), IP whitelisting (shared password from a new IP is blocked), device binding (shared password from a new device is blocked), concurrent session limits, and anomaly detection (impossible travel, unusual hours, bulk activity). All of these are logged and alert deal administrators.",
            },
            {
                question: "Can I tell if a document has been leaked?",
                answer: "Dynamic watermarks make it possible to identify the source of any leaked document. Each downloaded or printed document is stamped with the viewer's identity, and any leaked copy can be traced back to the specific user. Combined with NDA enforcement, this creates a strong deterrent — most leaks never happen because the leaker knows they can be identified.",
            },
            {
                question: "What questions should I ask a VDR provider about security?",
                answer: "Ask for: (1) their SOC 2 Type II report and ISO 27001 certificate; (2) the location of their data centers and data residency options; (3) their encryption standards and key management approach; (4) their MFA and SSO support; (5) their audit log retention period and immutability; (6) their incident response plan and breach notification process; (7) their pen testing history; (8) their uptime SLA and disaster recovery approach; (9) references from financial services or healthcare customers; (10) their vulnerability disclosure program.",
            },
        ],
    },
];

const flatFaqs = categories.flatMap(c => c.items);

export default function VDRSecurityFAQPage() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
            { "@type": "ListItem", position: 2, name: "FAQ", item: "https://spacenexus.net/faq" },
            { "@type": "ListItem", position: 3, name: "VDR Security", item: "https://spacenexus.net/faq/vdr-security" },
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
        name: "VDR Security FAQ Resource",
        description: "Comprehensive FAQ on virtual data room security. Encryption, access controls, watermarking, audit logs, MFA, SSO, data residency, and 35+ more questions answered.",
        url: "https://spacenexus.net/faq/vdr-security",
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
        name: "VDR Security FAQ",
        speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".faq-question", ".faq-answer"],
        },
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="vdr-security-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="vdr-security-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="vdr-security-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="vdr-security-speakable-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

            {/* Hero */}
            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/faq" className="hover:text-[#2563eb] transition-colors">FAQ</Link>
                        <span>›</span>
                        <span className="text-gray-900">VDR Security</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">FAQ</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">VDR Security FAQ: Encryption, Permissions, Watermarking & Audit Trails</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mb-8">
                        The most comprehensive FAQ on virtual data room security — {flatFaqs.length} questions covering encryption, access controls, watermarking, audit logs, MFA, SSO, data residency, and more.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 font-medium">
                            {flatFaqs.length} questions answered
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-medium">
                            {categories.length} categories
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
                    <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">Jump to category</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {categories.map(c => (
                            <a
                                key={c.id}
                                href={`#${c.id}`}
                                className="block p-4 rounded-xl border border-gray-200 hover:border-[#2563eb]/40 hover:shadow-sm transition-all"
                            >
                                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb]">{c.title}</h3>
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue exploring VDR security</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/faq/vdr-compliance" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">FAQ</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR compliance FAQ →</h3>
                            <p className="text-xs text-gray-600 mt-2">SOC 2, ISO 27001, GDPR, HIPAA, SEC 17a-4 — all the compliance questions answered.</p>
                        </Link>
                        <Link href="/blog/vdr-security-what-to-look-for" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Guide</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR security: 10 critical features →</h3>
                            <p className="text-xs text-gray-600 mt-2">The 10-point security checklist to use before signing with any VDR provider.</p>
                        </Link>
                        <Link href="/blog/vdr-security-what-to-look-for" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Guide</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR security & compliance guide →</h3>
                            <p className="text-xs text-gray-600 mt-2">The definitive 22-minute guide to VDR security standards and evaluation.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        See the SpaceNexus security stack in action
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        SOC 2 Type II certified, ISO 27001 accredited, GDPR compliant. Get a security overview, our SOC 2 report under NDA, and a personalized demo.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">
                            Request a security demo →
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
