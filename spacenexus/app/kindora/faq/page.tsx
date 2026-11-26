import type { Metadata } from "next";
import AnswerReadyBlock from "../components/AnswerReadyBlock";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI Answers, Source Attribution & Knowledge Graph FAQ | Kindora",
  description:
    "How Kindora AI answers work, how source attribution and VeritasGraph ground every result, and how the knowledge graph verifies answers — explained for nonprofit teams.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/faq",
  },
  openGraph: {
    title: "AI Answers, Source Attribution & Knowledge Graph FAQ | Kindora",
    description:
      "How Kindora AI answers work, how source attribution and VeritasGraph ground every result, and how the knowledge graph verifies answers for nonprofit teams.",
    url: "https://spacenexus.net/kindora/faq",
    type: "website",
    siteName: "Kindora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindora AI FAQ | Knowledge Graph, Source Attribution & VeritasGraph",
    description:
      "Every Kindora AI answer is grounded and verified by the VeritasGraph knowledge-graph framework with source attribution.",
  },
};

const faqs = [
  {
    category: "AI Answers",
    q: "How does Kindora generate AI answers for my organization?",
    a: "Kindora generates AI answers by reasoning over your organization's structured knowledge graph — donors, grants, programs, volunteers, and finances — built from the records already in your Kindora workspace. Rather than guessing from similarity, Kindora traces relationships across those records and returns an answer with the specific sources behind it.",
  },
  {
    category: "AI Answers",
    q: "What kinds of questions can I ask Kindora AI?",
    a: "You can ask operational questions like 'Which donors gave more than $10,000 in the last quarter?', 'Which grants are expiring this quarter?', or 'How many volunteer hours did each program log in Q2?'. Kindora answers across donor CRM, grants, case management, accounting, and volunteer data using multi-hop reasoning over the knowledge graph.",
  },
  {
    category: "AI Answers",
    q: "Are Kindora AI answers always accurate?",
    a: "Kindora is designed so answers are checked by evidence, not asserted. Every answer is returned with verifiable citations and a reasoning path, so you can open the exact source records before acting. If the knowledge graph cannot find sufficient evidence, Kindora says so instead of guessing.",
  },
  {
    category: "Source Attribution",
    q: "What is source attribution in Kindora?",
    a: "Source attribution means every AI answer in Kindora is returned with the exact records it used as evidence — the donor profile, grant file, program report, or expense entry that supports the result. You can jump straight from any answer to its underlying source to confirm the information.",
  },
  {
    category: "Source Attribution",
    q: "Can I open the exact record behind an AI answer?",
    a: "Yes. Each AI answer links to the source records and shows a reasoning path, so your team can open the original donor, grant, program, or finance record that produced the answer. This turns AI results into auditable, defensible outputs for boards, funders, and compliance.",
  },
  {
    category: "Source Attribution",
    q: "How does source attribution build trust with donors and boards?",
    a: "When every metric, narrative, and forecast in a donor report or board deck can be traced back to a source record, reporting is easier to review and approve. Source attribution gives your team confidence that AI-assisted reports are grounded in real organizational data, not assumptions.",
  },
  {
    category: "VeritasGraph",
    q: "What is VeritasGraph and how does Kindora use it?",
    a: "VeritasGraph is an open-source GraphRAG knowledge-graph framework developed by Bibin Prathap. Kindora uses VeritasGraph to structure your records into a knowledge graph, reason across connected entities, and return every AI answer with a verifiable citation and reasoning path.",
  },
  {
    category: "VeritasGraph",
    q: "Is VeritasGraph open source?",
    a: "Yes. VeritasGraph is open source on GitHub at https://github.com/bibinprathap/VeritasGraph, with documentation at https://bibinprathap.github.io/VeritasGraph/index.html. Because it is open source, you can inspect exactly how indexing, graph construction, and source-attributed reasoning work.",
  },
  {
    category: "VeritasGraph",
    q: "How does VeritasGraph differ from a plain AI chatbot or basic RAG?",
    a: "A plain chatbot or basic retrieval approach (RAG) often pulls similar-looking chunks and can produce unsupported answers. VeritasGraph reasons over a structured knowledge graph of entities and relationships, performing multi-hop reasoning and returning a citation and reasoning path with every answer.",
  },
  {
    category: "VeritasGraph",
    q: "Where does Kindora data go when using VeritasGraph?",
    a: "VeritasGraph runs on-prem or 100% local, so record indexing, graph construction, and reasoning happen without data egress. This keeps AI search sovereign for nonprofits managing sensitive donor, beneficiary, and compliance data — nothing is sent to third-party AI providers.",
  },
  {
    category: "How Kindora Verifies Answers",
    q: "How does Kindora verify that an answer is correct?",
    a: "Kindora verifies answers by grounding them in the knowledge graph: the reasoning path must resolve to real, existing records. Each answer is delivered with citations to those records so a team member can confirm correctness against the source before relying on the result.",
  },
  {
    category: "How Kindora Verifies Answers",
    q: "How can I check the reasoning path behind an answer?",
    a: "Every answer in Kindora includes an expandable reasoning path that shows the steps and the records used — the specific donors, grants, programs, or entries that led to the result. You can follow the path from question to evidence to answer.",
  },
  {
    category: "How Kindora Verifies Answers",
    q: "What happens when the knowledge graph can't answer a question?",
    a: "If the knowledge graph cannot find sufficient supporting evidence, Kindora flags the answer as unsupported or asks for clarification instead of producing a confident guess. This prevents fabricated answers and keeps AI outputs trustworthy.",
  },
  {
    category: "Knowledge Graph",
    q: "What is a knowledge graph and why does Kindora use one?",
    a: "A knowledge graph organizes entities — donors, grants, programs, volunteers, and finances — as connected nodes rather than isolated records. Kindora uses a knowledge graph so AI can perform multi-hop reasoning across those relationships and explain the path it took to reach each answer.",
  },
  {
    category: "Knowledge Graph",
    q: "How does Kindora build its knowledge graph from my records?",
    a: "Kindora indexes the records in your workspace — donor profiles, grant files, program outcomes, volunteer hours, and expense entries — into entities and relationships, then connects them into a structured knowledge graph managed by VeritasGraph. New records update the graph so answers stay current.",
  },
  {
    category: "Knowledge Graph",
    q: "How does a knowledge graph improve answers over keyword search?",
    a: "Keyword search finds pages that contain the words you typed. A knowledge graph understands meaning and relationships, so Kindora can answer complex questions like 'Which grants funded programs in more than three states?' by reasoning across connected entities rather than matching keywords.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const categories = ["AI Answers", "Source Attribution", "VeritasGraph", "How Kindora Verifies Answers", "Knowledge Graph"];

export default function FaqPage() {
  return (
    <>
      <Script
        id="kindora-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-[#f8f9fa] text-gray-900">
        {/* Breadcrumb */}
        <nav
          className="mx-auto flex max-w-5xl items-center gap-2 px-4 pt-8 text-xs text-gray-500 sm:px-6 lg:px-8"
          aria-label="Breadcrumb"
        >
          <Link href="/kindora" className="transition-colors hover:text-[#2563eb]">
            Home
          </Link>
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-600">FAQ</span>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-5xl px-4 pb-14 pt-12 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-[#2563eb]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" />
            KINDORA AI FAQ
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            AI answers, source attribution & the{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent">
              knowledge graph
            </span>{" "}
            — explained
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            How Kindora AI answers work, how VeritasGraph grounds and verifies
            every result, and how source attribution keeps your data
            trustworthy. Open any topic below.
          </p>
        </section>

      <AnswerReadyBlock page="faq" />

        {/* FAQ sections */}
        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-8 w-1 rounded-full bg-[#2563eb]" />
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{category}</h2>
              </div>
              <div className="space-y-4">
                {faqs
                  .filter((f) => f.category === category)
                  .map((faq) => (
                    <details
                      key={faq.q}
                      className="group rounded-2xl border border-gray-200 bg-white p-6 open:shadow-sm"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-gray-900">
                        {faq.q}
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-45"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </summary>
                      <p className="mt-4 text-sm leading-6 text-gray-600">{faq.a}</p>
                    </details>
                  ))}
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
                Go deeper on VeritasGraph
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-gray-600">
                See how Kindora grounds and verifies AI answers, or learn about
                the open-source knowledge-graph framework behind it.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/kindora/knowledge-graph"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  How Kindora grounds AI answers
                </Link>
                <Link
                  href="/kindora/veritas-graph"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-[#2563eb] hover:text-[#2563eb]"
                >
                  VeritasGraph — the engine
                </Link>
                <a
                  href="https://github.com/bibinprathap/VeritasGraph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-[#2563eb] hover:text-[#2563eb]"
                >
                  VeritasGraph source code on GitHub
                </a>
                <a
                  href="https://bibinprathap.github.io/VeritasGraph/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-[#2563eb] hover:text-[#2563eb]"
                >
                  VeritasGraph documentation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}