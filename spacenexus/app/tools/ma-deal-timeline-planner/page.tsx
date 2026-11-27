import Link from "next/link";
import type { Metadata } from "next";
import MADealTimelinePlanner from "./MADealTimelinePlanner";

const PAGE_URL = "https://spacenexus.net/tools/ma-deal-timeline-planner";

export const metadata: Metadata = {
  title: "M&A Deal Timeline Planner – Free Transaction Timeline Tool",
  description:
    "Free M&A deal timeline planner. Generate a milestone timeline from your planned start and closing dates, track progress, edit dates, assign teams and export to PDF or Excel.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "M&A Deal Timeline Planner – Free Transaction Timeline Tool",
    description:
      "Plan and track M&A transaction milestones, deadlines and progress with a free, editable deal timeline.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M&A Deal Timeline Planner – Free Transaction Timeline Tool",
    description:
      "Generate a 12-milestone M&A timeline, track status and export the plan to PDF or Excel. No registration required.",
  },
  keywords: [
    "M&A deal timeline",
    "deal timeline planner",
    "M&A milestone tracker",
    "transaction timeline template",
    "due diligence timeline",
    "free M&A tools",
    "deal closing checklist timeline",
  ],
};

const faqItems = [
  {
    question: "How does the M&A Deal Timeline Planner work?",
    answer:
      "Enter your planned start date and expected closing date. The tool distributes 12 standard M&A milestones across the deal period in chronological order. You can then edit milestone dates, change statuses, assign responsible teams, add custom milestones and export the plan.",
  },
  {
    question: "Can I change milestone dates and deal dates?",
    answer:
      "Yes. Every milestone date can be edited inline as long as it stays within the selected deal period and the end date is on or after the start date. If you change the overall start or closing date, all milestone dates are recalculated automatically.",
  },
  {
    question: "What do the deal stages do?",
    answer:
      "The current deal stage pre-marks earlier milestones as completed so the timeline reflects where your transaction already stands. You can still adjust every milestone status manually afterwards.",
  },
  {
    question: "Is this tool free and private?",
    answer:
      "Yes. The M&A Deal Timeline Planner is completely free and requires no registration. All processing happens in your browser, and no deal information or documents are sent to an external service.",
  },
  {
    question: "Can I export the timeline?",
    answer:
      "Yes. You can download the complete timeline as a PDF report or an Excel workbook, including milestone dates, statuses, responsible teams and dependencies.",
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
  name: "M&A Deal Timeline Planner",
  url: PAGE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free M&A deal timeline planner that generates and tracks transaction milestones, deadlines and progress.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  provider: { "@type": "Organization", name: "SpaceNexus", url: "https://spacenexus.net" },
};

const internalLinks = [
  { title: "Data Room Due Diligence Guide", href: "/data-room-due-diligence", description: "How to structure and secure a diligence data room." },
  { title: "Due Diligence Checklist (200+ Items)", href: "/checklists/due-diligence-checklist", description: "The full checklist behind every M&A process." },
  { title: "VDR Document Completeness Checker", href: "/tools/vdr-document-completeness-checker", description: "Find missing documents before the deal closes." },
  { title: "M&A Case Studies", href: "/m-a-case-studies", description: "See how teams run faster, safer transactions." },
];

export default function MADealTimelinePlannerPage() {
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
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            Free Timeline Planner
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            M&A Deal <span className="text-[#2563eb]">Timeline</span> Planner
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plan and track M&amp;A transaction milestones, deadlines and progress.
          </p>
          <p className="text-sm text-gray-500 mt-3">No registration. No document uploads. All processing stays in your browser.</p>
        </div>

        <MADealTimelinePlanner />

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to plan an M&A timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Enter deal dates",
                body: "Add your planned start and expected closing dates, deal type and current stage. Milestones already behind you are pre-marked completed.",
              },
              {
                step: "2",
                title: "Review the milestones",
                body: "The tool builds 12 chronological milestones — from planning and NDA signing to due diligence, negotiation, signing and post-closing.",
              },
              {
                step: "3",
                title: "Track and export",
                body: "Update statuses, edit dates, assign teams and add custom milestones. Completion updates automatically, and you can export to PDF or Excel.",
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
