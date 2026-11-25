import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Virtual Data Room FAQ — 30+ Questions Answered",
    description: "The most comprehensive FAQ on virtual data rooms. What a VDR is, how it works, when to use one, pricing, setup, and 25+ more questions answered.",
    alternates: {
        canonical: "https://spacenexus.net/faq/data-room",
    },
    keywords: [
        "virtual data room FAQ",
        "data room questions",
        "what is a VDR",
        "how does a VDR work",
        "VDR pricing",
        "VDR setup",
        "when to use a VDR",
        "data room basics",
        "VDR vs physical data room",
    ],
    openGraph: {
        title: "Virtual Data Room FAQ — 30+ Questions Answered | SpaceNexus",
        description: "The most comprehensive FAQ on virtual data rooms. What a VDR is, how it works, when to use one, pricing, setup, and more.",
        url: "https://spacenexus.net/faq/data-room",
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
        id: "basics",
        title: "Virtual Data Room Basics",
        description: "What a VDR is, how it works, and why it exists.",
        items: [
            {
                question: "What is a virtual data room (VDR)?",
                answer: "A virtual data room is a secure, cloud-based online repository used to store and share highly confidential documents during M&A due diligence, capital raising, IPO preparation, legal proceedings, and other high-stakes business transactions. Unlike consumer cloud storage (Dropbox, Google Drive), a VDR is purpose-built for the deal environment with granular permissions, structured Q&A, real-time engagement analytics, dynamic watermarking, and immutable audit trails.",
            },
            {
                question: "What is the difference between a VDR and cloud storage?",
                answer: "Cloud storage (Dropbox, Google Drive, Box, SharePoint) is designed for general collaboration and productivity. A VDR is designed for controlled, auditable, secure information exchange during high-stakes transactions. VDRs provide: granular per-document permissions, dynamic watermarking, structured Q&A, real-time engagement analytics, immutable audit trails, ethical wall enforcement, NDA workflows, and redaction tools — none of which consumer cloud storage offers natively.",
            },
            {
                question: "What is the difference between a VDR and a physical data room?",
                answer: "A physical data room is a secure physical location where printed copies of deal documents are stored, indexed, and made available for authorized reviewers under supervision. A virtual data room digitizes this process — making it faster (setup in 24 hours vs 1-4 weeks), cheaper (no venue, printing, courier, or travel costs), more secure (encryption, watermarks, audit trails), and provides better counterparty experience (anywhere, anytime, on any device). VDRs have largely replaced physical data rooms in modern M&A.",
            },
            {
                question: "What is a VDR used for?",
                answer: "VDRs are used for: (1) M&A due diligence (sell-side and buy-side); (2) Capital raising (Series A, B, C, debt offerings, IPOs); (3) Legal proceedings (litigation discovery, e-discovery, document production); (4) Real estate transactions (commercial, REITs, property due diligence); (5) Life sciences (pharma licensing, biotech M&A, clinical trial data); (6) Restructuring and bankruptcy; (7) Audits and regulatory examinations; (8) Board communications and governance; (9) Any high-stakes transaction involving confidential documents.",
            },
            {
                question: "How long has virtual data room technology existed?",
                answer: "Virtual data rooms emerged in the late 1990s and early 2000s, replacing physical data rooms that had been the standard for M&A due diligence since the 1970s. The first VDRs were built by companies like Intralinks (founded 1996) and Datasite (originally Merrill Corporation). The market has since matured significantly, with modern VDRs adding AI-powered features (auto-indexing, redaction, Q&A routing), real-time engagement analytics, and structured workflows that go far beyond the original document storage use case.",
            },
        ],
    },
    {
        id: "how-it-works",
        title: "How VDRs Work",
        description: "The mechanics of setting up, using, and closing a virtual data room.",
        items: [
            {
                question: "How long does it take to set up a virtual data room?",
                answer: "Modern VDRs can be set up in under 24 hours, often in minutes. The process involves: (1) creating the workspace and configuring security settings; (2) uploading documents via drag-and-drop or bulk upload; (3) using AI auto-indexing to organize documents into folders; (4) setting up permission groups for different parties; (5) sending invitations with NDA workflows. Enterprise VDRs with custom security configurations may take 1-2 weeks.",
            },
            {
                question: "How does document upload work in a VDR?",
                answer: "Modern VDRs support drag-and-drop bulk upload, allowing hundreds or thousands of files to be uploaded at once. AI auto-indexing categorizes documents into the right folders, extracts metadata, and applies consistent naming conventions. Files can be uploaded in any common format (PDF, Word, Excel, PowerPoint, images, video) and are automatically converted to a secure in-browser viewer format. OCR is applied to scanned documents for full-text searchability.",
            },
            {
                question: "How does VDR access control work?",
                answer: "VDRs use role-based access control (RBAC) with permissions at the user, group, folder, document, and page level. Each user is assigned to one or more groups, and each group has specific permissions: view only, view + download, view + download + print, etc. Additional controls include time-limited access, IP whitelisting, geographic restrictions, device binding, MFA, and SSO. The principle of least privilege is foundational — give each user only the access they need.",
            },
            {
                question: "What is structured Q&A in a VDR?",
                answer: "Structured Q&A replaces chaotic email threads during due diligence with a trackable, deadline-managed workflow. Buyers submit questions through the VDR interface; questions are linked to specific documents, routed to the right subject matter expert on the sell side, tracked with SLA deadlines, and answered with full audit history. The sell-side team controls which answers are visible to which buyer groups, and all activity is logged in the immutable audit trail.",
            },
            {
                question: "How long does a VDR stay open?",
                answer: "VDRs typically stay open for the duration of a transaction (typically 2-6 months for M&A due diligence) plus an archival period (often 1-2 years for post-close reference). For long-term projects (real estate, ongoing investor relations, LP reporting), VDRs can stay open for years. Most VDRs support configurable retention and auto-deletion policies, and the data room can be archived (with full audit trail) when the project ends.",
            },
        ],
    },
    {
        id: "pricing",
        title: "VDR Pricing",
        description: "How VDRs are priced and what affects the cost.",
        items: [
            {
                question: "How much does a virtual data room cost?",
                answer: "VDR pricing varies widely by provider and deal complexity. Traditional enterprise VDRs (Datasite, Intralinks) use quote-only pricing that can be material for document-heavy deals. Modern VDRs (SpaceNexus) use transparent flat-rate monthly or annual pricing with no per-page fees, no per-user fees, and predictable costs. For most mid-market M&A and fundraising transactions, a modern VDR costs a small fraction of legacy alternatives. Contact providers directly for current pricing.",
            },
            {
                question: "What is per-page pricing?",
                answer: "Per-page pricing is a legacy VDR pricing model used by traditional providers (Datasite, Intralinks, Firmex) where customers are charged for each page uploaded to the data room. Costs can range from $0.40 to $1.00+ per page, making total costs unpredictable for document-heavy deals. A deal with 10,000 pages could cost thousands in page fees alone. Modern VDRs (SpaceNexus) typically use flat-rate pricing with no per-page fees, providing predictable costs.",
            },
            {
                question: "What is included in a VDR subscription?",
                answer: "A typical VDR subscription includes: data room storage and bandwidth; unlimited users and groups; AI auto-indexing and document organization; structured Q&A workflows; dynamic watermarking; view-only mode; granular access controls; MFA and SSO; immutable audit logs; engagement analytics; email and chat support; SOC 2 Type II and ISO 27001 security; GDPR compliance. Enterprise tiers may add customer-managed encryption keys, dedicated support, custom retention, and advanced analytics.",
            },
            {
                question: "Are there hidden fees in VDR pricing?",
                answer: "Traditional enterprise VDRs have multiple potential hidden fees: per-page overage charges, per-user fees beyond a threshold, training and onboarding fees, integration fees, premium support fees, audit log export fees, and overage fees for storage or bandwidth. Modern VDRs (SpaceNexus) use transparent flat-rate pricing with all features included. Always ask for a complete breakdown of all potential fees before signing a VDR contract.",
            },
        ],
    },
    {
        id: "selection",
        title: "Choosing a VDR",
        description: "How to evaluate and select the right VDR for your needs.",
        items: [
            {
                question: "How do I choose a virtual data room provider?",
                answer: "Evaluate VDRs on five critical criteria: (1) Security certifications (SOC 2 Type II, ISO 27001, GDPR, HIPAA, etc.); (2) Ease of use (intuitive interface, fast document rendering, mobile access); (3) Analytics and reporting (real-time engagement, document heatmaps, Q&A metrics); (4) Q&A and workflow tools (structured Q&A, deadline tracking, automation); (5) Pricing transparency (flat-rate vs per-page, all-included vs add-on fees). Also check references from similar transactions and request a free trial or demo.",
            },
            {
                question: "What questions should I ask a VDR provider before signing?",
                answer: "Ask: (1) What security certifications do you hold? (2) Where are your data centers? (3) What is your pricing model — flat-rate or per-page? (4) Are there any hidden fees? (5) What is your uptime SLA? (6) How long have you been in business? (7) Can I speak with references from similar transactions? (8) What is your breach notification process? (9) How is customer data handled after the deal closes? (10) Can I see a demo or start a free trial?",
            },
            {
                question: "How do VDRs differ for sell-side vs buy-side M&A?",
                answer: "Sell-side VDRs focus on: (1) bidder tier management (preliminary bidders, shortlisted bidders, final round); (2) staged disclosure of sensitive information; (3) bidder engagement analytics to identify most serious buyers; (4) easy document management and Q&A response. Buy-side VDRs focus on: (1) efficient document review and analysis; (2) Q&A submission to seller; (3) collaborative annotation and note-taking; (4) export of findings for investment committee. Many VDRs support both workflows.",
            },
            {
                question: "Can I switch VDR providers mid-deal?",
                answer: "Technically yes, but it is disruptive. Switching mid-deal requires migrating all documents (potentially thousands), recreating folder structure, reconfiguring permissions, re-inviting all parties, and resetting the audit trail. It is much better to choose the right VDR upfront. If you must switch, choose a provider with bulk import tools and a strong onboarding team. The data room disruption can kill deal momentum.",
            },
        ],
    },
];

const flatFaqs = categories.flatMap(c => c.items);

export default function DataRoomFAQPage() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
            { "@type": "ListItem", position: 2, name: "FAQ", item: "https://spacenexus.net/faq" },
            { "@type": "ListItem", position: 3, name: "Data Room", item: "https://spacenexus.net/faq/data-room" },
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
        name: "Virtual Data Room FAQ Resource",
        description: "Comprehensive FAQ on virtual data rooms. What a VDR is, how it works, when to use one, pricing, setup, and 25+ more questions answered.",
        url: "https://spacenexus.net/faq/data-room",
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
        name: "Virtual Data Room FAQ",
        speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [".faq-question", ".faq-answer"],
        },
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script id="data-room-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="data-room-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="data-room-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id="data-room-speakable-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

            {/* Hero */}
            <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                        <span>›</span>
                        <Link href="/faq" className="hover:text-[#2563eb] transition-colors">FAQ</Link>
                        <span>›</span>
                        <span className="text-gray-900">Data Room</span>
                    </nav>
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">FAQ</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Virtual Data Room FAQ: What a VDR Is, How It Works, and When to Use One</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mb-8">
                        The most comprehensive FAQ on virtual data rooms — {flatFaqs.length} questions covering what a VDR is, how it works, when to use one, pricing, setup, and more.
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
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue exploring VDR</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/faq/vdr-security" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">FAQ</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR security FAQ →</h3>
                            <p className="text-xs text-gray-600 mt-2">Encryption, access controls, watermarking, and 35+ more questions answered.</p>
                        </Link>
                        <Link href="/faq/vdr-compliance" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">FAQ</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR compliance FAQ →</h3>
                            <p className="text-xs text-gray-600 mt-2">SOC 2, ISO 27001, GDPR, HIPAA, SEC 17a-4 — all compliance questions answered.</p>
                        </Link>
                        <Link href="/blog/what-is-a-virtual-data-room" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                            <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Guide</p>
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR vs physical data room →</h3>
                            <p className="text-xs text-gray-600 mt-2">Side-by-side comparison of VDRs and physical data rooms in 2026.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Ready to set up your data room?
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Most teams are live in under 24 hours. No credit card required for the demo.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/demo" className="inline-flex items-center px-8 py-3.5 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors">
                            Request a demo →
                        </Link>
                        <Link href="/pricing" className="inline-flex items-center px-8 py-3.5 bg-white/10 backdrop-blur text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                            See pricing
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
