import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../components/LastUpdated";
import AnswerBlock from "../components/AnswerBlock";

export const metadata: Metadata = {
  title: "What is a Virtual Data Room? Complete Guide 2026",
  description:
    "A virtual data room (VDR) is a secure online repository for sharing confidential documents during M&A, due diligence, fundraising, and legal transactions. Learn how VDRs work, key features, security, pricing, and how to choose the right provider.",
  alternates: {
    canonical: "https://spacenexus.net/what-is-a-virtual-data-room",
  },
  openGraph: {
    title: "What is a Virtual Data Room? Complete Guide 2026 | SpaceNexus",
    description:
      "A virtual data room (VDR) is a secure online repository for sharing confidential documents during M&A, due diligence, fundraising, and legal transactions.",
    url: "https://spacenexus.net/what-is-a-virtual-data-room",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is a Virtual Data Room? Complete Guide 2026 | SpaceNexus",
    description:
      "A virtual data room (VDR) is a secure online repository for sharing confidential documents during M&A, due diligence, fundraising, and legal transactions.",
  },
  keywords: [
    "what is a virtual data room",
    "virtual data room definition",
    "VDR meaning",
    "virtual data room explained",
    "what is a VDR",
    "virtual data room guide",
    "how does a virtual data room work",
    "virtual data room features",
    "virtual data room security",
    "virtual data room pricing",
  ],
};

const whatIsSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What is a Virtual Data Room? Complete Guide 2026",
  description:
    "A comprehensive guide explaining what a virtual data room is, how it works, key features, security requirements, pricing models, and how to choose the right VDR provider.",
  author: {
    "@type": "Person",
    name: "Alex Thornton",
    jobTitle: "Head of Product",
  },
  publisher: {
    "@type": "Organization",
    name: "SpaceNexus",
    url: "https://spacenexus.net",
    logo: {
      "@type": "ImageObject",
      url: "https://spacenexus.net/logo.png",
    },
  },
  url: "https://spacenexus.net/what-is-a-virtual-data-room",
  datePublished: "2026-01-15",
  dateModified: "2026-07-19",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a virtual data room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A virtual data room (VDR) is a secure online platform used to store, share, and manage confidential documents during sensitive business transactions such as M&A deals, due diligence, fundraising, legal proceedings, and audits. VDRs provide controlled access, audit trails, and encryption to protect confidential information.",
      },
    },
    {
      "@type": "Question",
      name: "How does a virtual data room work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A virtual data room works by providing a secure cloud-based repository where authorized users can upload, view, and collaborate on confidential documents. Administrators control access with role-based permissions, track user activity with audit logs, and protect documents with encryption and dynamic watermarking.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a virtual data room and cloud storage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Virtual data rooms differ from cloud storage (like Google Drive or Dropbox) in several key ways: VDRs provide granular access controls, detailed audit trails, dynamic watermarking, Q&A workflows, and are designed specifically for high-stakes business transactions. Cloud storage is designed for general file sharing without transaction-specific security features.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a virtual data room cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Virtual data room pricing varies widely. Budget options start at $100-300/month, mid-range providers charge $500-1,500/month, and enterprise VDRs like Datasite and Intralinks can cost $15,000-150,000+ per year. Many providers offer per-deal or per-month pricing with different tiers based on storage, users, and features.",
      },
    },
    {
      "@type": "Question",
      name: "What industries use virtual data rooms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Virtual data rooms are used across many industries including investment banking, private equity, venture capital, law firms, corporate development, life sciences, technology, real estate, energy, and healthcare. Any industry that requires secure document sharing during transactions benefits from VDR technology.",
      },
    },
    {
      "@type": "Question",
      name: "What security features should a virtual data room have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key security features include: AES-256 encryption at rest and in transit, SOC 2 Type II certification, ISO 27001 compliance, role-based access controls, dynamic watermarking, document expiry, IP whitelisting, two-factor authentication, and immutable audit logs that track every user action.",
      },
    },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "What is a Virtual Data Room?",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".faq-question", ".faq-answer"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "What is a Virtual Data Room", item: "https://spacenexus.net/what-is-a-virtual-data-room" },
  ],
};

const sections = [
  {
    id: "definition",
    title: "What is a Virtual Data Room?",
    content: `A virtual data room (VDR) is a secure online repository used to store, share, and manage confidential documents during sensitive business transactions. Think of it as a digital version of the physical data rooms that were traditionally used in M&A deals — but with far greater security, accessibility, and control.

Virtual data rooms enable multiple parties — buyers, sellers, lawyers, accountants, and advisors — to review confidential documents in a controlled environment without physically meeting. Every action is logged, every access is tracked, and every document is protected.`,
  },
  {
    id: "how-vdrs-work",
    title: "How Do Virtual Data Rooms Work?",
    content: `Virtual data rooms operate on a simple but powerful model: centralized document storage with granular access control. Here's how the process typically works:

1. **Setup**: The deal team creates a data room, configures folder structure, and sets up permission groups.
2. **Document Upload**: Confidential documents are uploaded — financial statements, contracts, IP filings, employee records, and more.
3. **Access Control**: Administrators invite bidders, advisors, and other parties with specific permission levels (view-only, download, print, etc.).
4. **Collaboration**: Authorized users review documents, ask questions through structured Q&A workflows, and provide feedback.
5. **Audit Trail**: Every action — who viewed what, when, and for how long — is logged in an immutable audit trail.
6. **Deal Close**: Once the transaction completes, access is revoked and documents are archived.`,
  },
  {
    id: "key-features",
    title: "Key Features of Modern Virtual Data Rooms",
    content: `Modern virtual data rooms offer a comprehensive suite of features designed to streamline transactions while maintaining security:

**Security Features:**
- AES-256 encryption at rest and in transit
- Role-based access controls with document-level permissions
- Dynamic watermarking (displays viewer name, IP, timestamp)
- Document expiry and remote shredding
- IP whitelisting and device restrictions
- Two-factor authentication and SSO/SAML

**Collaboration Features:**
- Structured Q&A workflows with category routing
- Real-time document collaboration
- Comment and annotation tools
- Bulk document upload with auto-indexing
- Full-text search across all documents

**Analytics & Intelligence:**
- Per-user engagement tracking (who viewed what, for how long)
- Document heatmaps showing interest levels
- Bidder activity scoring
- Exportable audit logs for compliance`,
  },
  {
    id: "vdr-vs-cloud",
    title: "Virtual Data Room vs Cloud Storage",
    content: `Many people confuse virtual data rooms with cloud storage services like Google Drive, Dropbox, or OneDrive. While both store files online, they serve fundamentally different purposes:

| Feature | Virtual Data Room | Cloud Storage |
|---------|------------------|---------------|
| Purpose | Secure transaction management | General file sharing |
| Access Control | Granular, document-level | Basic folder-level |
| Audit Trail | Immutable, detailed | Limited or none |
| Watermarking | Dynamic, per-viewer | Not available |
| Q&A Workflow | Structured, categorized | Not available |
| Compliance | SOC 2, ISO 27001 | Basic security |
| Pricing | $100-150,000+/year | Free-$20/month |

If you're sharing confidential documents for a business transaction — M&A deal, fundraising round, legal proceeding, or audit — you need a virtual data room, not cloud storage.`,
  },
  {
    id: "use-cases",
    title: "Common Use Cases for Virtual Data Rooms",
    content: `Virtual data rooms are essential across many business scenarios:

**M&A Due Diligence** — The most common use case. Sellers create VDRs to share confidential documents with potential buyers during the due diligence process. AI-powered VDRs can auto-categorize thousands of documents in minutes.

**Capital Raising** — Startups and growth companies use VDRs to share financial projections, cap tables, and business plans with potential investors during fundraising rounds.

**IPO Preparation** — Companies preparing for public offerings use VDRs to organize SEC filings, financial statements, and governance documents for underwriters and regulators.

**Legal Proceedings** — Law firms use VDRs for litigation discovery, sharing evidence and case documents with opposing counsel under strict access controls.

**Private Equity** — PE firms use VDRs for buy-side due diligence, portfolio company reporting, and LP fundraising document management.

**Board Portals** — Companies use VDRs to share board meeting materials, strategic plans, and sensitive corporate documents with board members.`,
  },
  {
    id: "how-to-choose",
    title: "How to Choose a Virtual Data Room",
    content: `Selecting the right virtual data room depends on your specific needs. Here's a practical evaluation framework:

**Step 1: Define Your Requirements**
- What type of transaction? (M&A, fundraising, legal, compliance)
- How many users will need access?
- What's your document volume?
- What compliance standards must you meet?

**Step 2: Evaluate Security**
- Is the provider SOC 2 Type II certified?
- Do they offer AES-256 encryption?
- Can you set document-level permissions?
- Is there dynamic watermarking?
- Are audit logs immutable?

**Step 3: Assess Usability**
- Can you set up the room without onboarding calls?
- Is the interface intuitive for external users?
- Does it support bulk upload and auto-indexing?
- Is there a mobile experience?

**Step 4: Compare Pricing**
- Is pricing transparent or quote-only?
- Are there per-page or per-user fees?
- What's included in each tier?
- Is there a free trial?

**Step 5: Check Support**
- Is support available 24/7?
- Do they offer dedicated account management?
- What's the average response time?`,
  },
  {
    id: "pricing",
    title: "Virtual Data Room Pricing Guide",
    content: `VDR pricing varies dramatically based on provider, features, and deal size:

**Budget Tier ($100-500/month)**
Basic VDRs for small deals and simple document sharing. Suitable for sub-$5M transactions with limited users.

**Mid-Market Tier ($500-2,000/month)**
Full-featured VDRs with Q&A workflows, analytics, and compliance. Suitable for $5-50M deals with multiple bidders.

**Enterprise Tier ($15,000-150,000+/year)**
Premium VDRs like Datasite and Intralinks with white-glove service, advanced analytics, and global compliance. Suitable for $50M+ transactions.

**Key Pricing Factors:**
- Storage volume (GB/TB)
- Number of users
- Feature tier (basic vs advanced)
- Contract length (monthly vs annual)
- Support level (standard vs dedicated)

**SpaceNexus offers transparent pricing** with no per-page fees, starting with a free 14-day trial. All plans include AI document processing, structured Q&A, and real-time analytics.`,
  },
  {
    id: "best-practices",
    title: "Virtual Data Room Best Practices",
    content: `Follow these best practices to get the most from your virtual data room:

**Organization:**
- Use a standardized folder structure (Corporate, Financial, Commercial, Tech, Legal, HR)
- Name files consistently with clear version control
- Create an index document mapping all folders and files

**Security:**
- Apply principle of least privilege — give users only the access they need
- Use dynamic watermarking on sensitive documents
- Set document expiry dates for time-sensitive materials
- Enable two-factor authentication for all admin accounts

**Efficiency:**
- Use bulk upload with auto-indexing to save time
- Set up Q&A categories before launching to streamline buyer questions
- Create pre-prepared FAQ documents for common due diligence questions
- Use engagement analytics to identify the most serious buyers

**Communication:**
- Send personalized invitations with clear instructions
- Respond to Q&A within defined SLAs
- Use the audit trail to track buyer engagement
- Stage document disclosure across deal rounds`,
  },
];

export default function WhatIsAVirtualDataRoomPage() {
  return (
    <>
      <Script
        id="what-is-vdr-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(whatIsSchema) }}
      />
      <Script
        id="what-is-vdr-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="what-is-vdr-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="what-is-vdr-speakable"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
              <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
              <span>›</span>
              <span className="text-gray-900">What is a Virtual Data Room?</span>
            </nav>
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">
              Definitive Guide
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              What is a <span className="text-[#2563eb]">Virtual Data Room</span>?
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A comprehensive guide explaining what a virtual data room is, how it works, key features, security requirements, pricing models, and how to choose the right VDR provider for your transaction.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>By Alex Thornton, Head of Product</span>
              <span>·</span>
              <span>Updated July 2026</span>
              <span>·</span>
              <span>15 min read</span>
            </div>
          </div>
        </section>

        {/* AI Answer Block */}
        <AnswerBlock text="A virtual data room (VDR) is a secure online platform for storing, sharing, and managing confidential documents during M&A deals, due diligence, fundraising, and legal transactions. VDRs provide controlled access, audit trails, encryption, and structured Q&A workflows to protect sensitive business information." />

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Table of Contents */}
            <div className="bg-[#f8f9fa] rounded-2xl border border-gray-200 p-6 mb-12">
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">In this guide</p>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#2563eb] transition-colors py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0" />
                    {section.title}
                  </a>
                ))}
                <a href="#faq" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#2563eb] transition-colors py-1 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0" />
                  Frequently Asked Questions
                </a>
              </nav>
            </div>

            {/* Sections */}
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="mb-16 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}

            {/* FAQ Section */}
            <div id="faq" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq, i) => (
                  <div key={i} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                Ready to set up your virtual data room?
              </h3>
              <p className="text-blue-200 mb-6 text-sm">
                Get started with SpaceNexus in under 24 hours. No credit card required.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center px-6 py-3 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors text-sm"
              >
                Talk to Founders →
              </Link>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <div className="py-6 text-center border-t border-gray-100 mt-8">
          <LastUpdated date="2026-11-25" />
        </div>
      </main>
    </>
  );
}
