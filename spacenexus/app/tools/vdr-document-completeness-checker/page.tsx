import Link from "next/link";
import type { Metadata } from "next";
import VDRCompletenessChecker from "./VDRCompletenessChecker";

const PAGE_URL = "https://spacenexus.net/tools/vdr-document-completeness-checker";

export const metadata: Metadata = {
  title: "VDR Document Completeness Checker – Free Due Diligence Tool",
  description:
    "Free VDR document completeness checker. Compare your due diligence document list against M&A, fundraising, real estate and acquisition checklists to find missing documents and export a PDF or Excel report.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "VDR Document Completeness Checker – Free Due Diligence Tool",
    description:
      "Check your due diligence document list, identify missing M&A and fundraising documents, and generate a document completeness report.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VDR Document Completeness Checker – Free Due Diligence Tool",
    description:
      "Compare your document list to a due diligence checklist and find missing documents in seconds. No upload of confidential files, no registration.",
  },
  keywords: [
    "VDR document completeness checker",
    "due diligence document checklist",
    "missing documents due diligence",
    "data room completeness",
    "free due diligence tool",
    "M&A document checklist",
    "fundraising data room checklist",
    "virtual data room completeness report",
  ],
};

const faqItems = [
  {
    question: "What does the VDR Document Completeness Checker do?",
    answer:
      "The checker compares the document filenames you have collected against a standard due diligence checklist for your transaction type. It highlights matched, missing and unmatched documents, shows category-wise completion, and lets you download a PDF or Excel completeness report.",
  },
  {
    question: "Do I need to upload confidential documents?",
    answer:
      "No. This free tool only compares filenames. You can upload an Excel or CSV list of document names, or type filenames manually. All processing happens in your browser and your document list is never sent to an external service.",
  },
  {
    question: "Which transaction types are supported?",
    answer:
      "The tool includes predefined checklists for M&A, fundraising, real estate and business acquisition transactions. You can edit the expected checklist, remove irrelevant items, and add custom documents before running the check.",
  },
  {
    question: "How are filenames matched to expected documents?",
    answer:
      "Filenames are normalized so that case, spaces, underscores, hyphens and file extensions are ignored. The checker also supports configurable aliases for common document names. Strong matches are marked as matched automatically, while uncertain matches are flagged for manual review and never confirmed unless you approve them.",
  },
  {
    question: "Do I need an account to use this tool?",
    answer:
      "No registration is required. The VDR Document Completeness Checker is completely free to use. You only need a SpaceNexus account if you want to organize and manage the actual documents in a virtual data room.",
  },
  {
    question: "What should I do after finding missing documents?",
    answer:
      "Use the report to assign owners and deadlines for each missing item, then upload the completed documents to a secure data room. SpaceNexus Virtual Data Room provides granular permissions, audit trails and Q&A workflows so buyers and investors only see what they are allowed to see.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "VDR Document Completeness Checker",
  url: PAGE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free due diligence tool that compares a document list against M&A, fundraising, real estate and business acquisition checklists and generates a completeness report.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
};

const internalLinks = [
  { title: "Due Diligence Checklist (200+ Items)", href: "/checklists/due-diligence-checklist", description: "The complete M&A checklist behind this tool." },
  { title: "Data Room Due Diligence Guide", href: "/data-room-due-diligence", description: "How to structure and secure a diligence data room." },
  { title: "Data Room Software Buyer's Guide", href: "/data-room-software", description: "Compare modern VDR features, pricing and security." },
  { title: "Due Diligence Checklist Generator", href: "/tools/dd-checklist-generator", description: "Generate a tailored folder structure by industry." },
];

export default function VDRCompletenessCheckerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/tools" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#2563eb] mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-[#14b8a6] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Free Due Diligence Tool
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            VDR Document <span className="text-[#2563eb]">Completeness</span> Checker
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check your due diligence document list, identify missing M&A and fundraising documents, and generate a document completeness report.
          </p>
          <p className="text-sm text-gray-500 mt-3">No registration. No confidential uploads. Filename matching only.</p>
        </div>

        <VDRCompletenessChecker />

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How the document completeness checker works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Choose a transaction type",
                body: "Select M&A, fundraising, real estate or business acquisition. A standard due diligence checklist loads automatically for that deal type.",
              },
              {
                step: "2",
                title: "Add your document list",
                body: "Upload an Excel or CSV list of filenames, or type them manually. The tool compares filenames only — never the documents themselves.",
              },
              {
                step: "3",
                title: "Review and export",
                body: "See matched, missing and unmatched documents, confirm uncertain matches, then download a PDF or Excel completeness report.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl border border-gray-200 shadow-md p-6">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2563eb] font-black flex items-center justify-center mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-base font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <svg className="w-5 h-5 text-[#2563eb] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="text-sm text-gray-600 leading-relaxed mt-3">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related SpaceNexus resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {internalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
                <p className="text-sm font-bold text-gray-900 group-hover:text-[#2563eb] mb-1">{link.title}</p>
                <p className="text-xs text-gray-600">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
