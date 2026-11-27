import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../components/LastUpdated";
import AnswerBlock from "../components/AnswerBlock";
import KnowledgeGraphDiagram from "./KnowledgeGraphDiagram";

export const metadata: Metadata = {
  title: "The Connected Knowledge Graph — How VeritasGraph Links Deal Entities | SpaceNexus",
  description:
    "See how VeritasGraph builds a connected knowledge graph inside SpaceNexus, linking deal documents, participants, counterparties, assets, financials, and contracts through entity extraction and multi-hop reasoning.",
  alternates: {
    canonical: "https://spacenexus.net/knowledge-graph",
  },
  keywords: [
    "knowledge graph",
    "VeritasGraph",
    "entity extraction",
    "relationship mapping",
    "multi-hop reasoning",
    "Space Data Hub",
    "M&A knowledge graph",
    "due diligence graph",
    "deal intelligence",
    "GEO",
    "generative engine optimization",
    "AI citability",
  ],
  openGraph: {
    title: "The Connected Knowledge Graph — How VeritasGraph Links Deal Entities | SpaceNexus",
    description:
      "How VeritasGraph builds a connected knowledge graph inside SpaceNexus — linking deal documents, participants, assets, and contracts for multi-hop reasoning and AI citability.",
    url: "https://spacenexus.net/knowledge-graph",
    type: "article",
  },
};

const faqItems = [
  {
    question: "What is the SpaceNexus knowledge graph?",
    answer:
      "The SpaceNexus knowledge graph is a structured representation of all entities and relationships across your deals. It connects deal documents, participants, counterparties, target assets, financial statements, and contracts into a single queryable graph — so you can trace connections that span dozens of folders and hundreds of files.",
  },
  {
    question: "How does VeritasGraph build the knowledge graph from my data room?",
    answer:
      "When documents are uploaded to your SpaceNexus data room, VeritasGraph ingests them through the VDR Document Pipeline. It extracts entities — deal participants, counterparties, monetary amounts, dates, legal clauses — and maps typed relationships between them. Each edge in the graph carries a confidence score and a link back to the source document and page.",
  },
  {
    question: "What types of entities does VeritasGraph extract from deal documents?",
    answer:
      "VeritasGraph extracts deal participants (buyers, sellers, advisors, legal counsel), counterparties and legal entities, target assets and facilities, financial data (revenue, EBITDA, cap table entries), contractual obligations, and key dates. Each entity is typed, scored, and linked to its source passage.",
  },
  {
    question: "How does multi-hop reasoning work in a due diligence context?",
    answer:
      "Multi-hop reasoning traverses multiple edges in the graph to answer complex questions. For example: 'Which contracts reference the Dallas facility?' requires hopping from the Facility node to Contracts via the 'references' edge, then to the signing Counterparty via 'executed by'. This reveals connections that keyword search alone would miss.",
  },
  {
    question: "How does the VDR Document Pipeline feed the knowledge graph?",
    answer:
      "The VDR Document Pipeline is the ingestion layer that receives documents from your data room, auto-categorizes them (financials, legal, correspondence), triggers entity extraction, and feeds results into VeritasGraph for graph construction. New documents trigger incremental updates without full reprocessing.",
  },
  {
    question: "What is GEO and how does it apply to my deal data?",
    answer:
      "Generative Engine Optimization (GEO) ensures that AI systems citing your data room content provide accurate, traceable answers. VeritasGraph powers GEO by scoring AI citability, attributing every fact to its source document, and providing verifiable reasoning paths through the knowledge graph.",
  },
];

const connectedKgCards = [
  {
    title: "Entity Extraction from Deal Documents",
    description:
      "VeritasGraph parses your data room documents to extract deal-specific entities — buyers, sellers, advisors, target companies, facilities, revenue figures, EBITDA, and contractual clauses. Each entity is typed, scored, and linked to its source passage.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Relationship Mapping Across Deals",
    description:
      "Entities are linked through typed deal relationships — 'negotiated between', 'acquired by', 'guaranteed by', 'references', 'located at'. Each edge carries metadata about its source document, page number, and extraction confidence.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "Multi-Hop Reasoning for Due Diligence",
    description:
      "Queries traverse multiple edges to answer complex deal questions. For example: 'Which contracts reference this facility?' requires hopping from a Facility node to Contracts via 'references', then to the signing Counterparty via 'executed by' — revealing connections keyword search misses.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
];

const spaceDataHubSteps = [
  { step: "1", title: "VDR Upload", description: "Documents are uploaded to your SpaceNexus data room via the web portal, API, or bulk import." },
  { step: "2", title: "Auto-Categorization", description: "Documents are classified by type — financials, legal, correspondence, exhibits — using ML classifiers." },
  { step: "3", title: "Entity Extraction", description: "VeritasGraph extracts deal entities — participants, counterparties, amounts, dates, and clauses." },
  { step: "4", title: "Graph Construction", description: "Extracted entities and relationships are merged into the knowledge graph via VeritasGraph." },
  { step: "5", title: "Incremental Updates", description: "New documents trigger graph updates without full reprocessing — the graph stays current." },
];

const geoCapabilities = [
  {
    title: "AI Citability Scoring",
    description: "Every answer generated from your data room includes a citability score — indicating how likely AI systems are to reference your content accurately.",
  },
  {
    title: "Source Attribution on Every Answer",
    description: "Every fact traced back to its source document with page number, paragraph, and extraction confidence — no black-box answers.",
  },
  {
    title: "Verifiable Reasoning Paths",
    description: "AI systems can trace the reasoning path through the graph — from question to answer — so you can audit how conclusions were reached.",
  },
  {
    title: "Structured Data for LLMs",
    description: "Knowledge graph triples are formatted as structured context that LLMs consume efficiently, reducing hallucination on deal-critical data.",
  },
  {
    title: "llms.txt Integration",
    description: "VeritasGraph can generate and maintain an llms.txt file that helps AI crawlers understand the graph structure and available deal data.",
  },
];

export default function KnowledgeGraphPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
      { "@type": "ListItem", position: 2, name: "Knowledge Graph", item: "https://spacenexus.net/knowledge-graph" },
    ],
  };

  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": "https://spacenexus.net/knowledge-graph#dataset",
    name: "VeritasGraph Deal Knowledge Graph Schema",
    description:
      "Schema describing the entity types and relationships in the VeritasGraph knowledge graph powering SpaceNexus deal intelligence.",
    url: "https://spacenexus.net/knowledge-graph",
    creator: { "@id": "https://spacenexus.net/#organization" },
    isBasedOn: { "@id": "https://spacenexus.net/#veritasgraph" },
    variableMeasured: [
      "Deal Entity Type",
      "Relationship Type",
      "Source Document",
      "Confidence Score",
      "Reasoning Path",
    ],
    measurementTechnique: "GraphRAG Knowledge Graph Construction",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://spacenexus.net/knowledge-graph#webpage",
    url: "https://spacenexus.net/knowledge-graph",
    name: "The Connected Knowledge Graph — How VeritasGraph Links Deal Entities",
    isPartOf: { "@id": "https://spacenexus.net/#website" },
    about: { "@id": "https://spacenexus.net/#veritasgraph" },
    description:
      "How VeritasGraph builds a connected knowledge graph inside SpaceNexus — linking deal documents, participants, assets, and contracts for multi-hop reasoning and AI citability.",
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Script id="kg-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="kg-dataset-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <Script id="kg-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="kg-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#f8f9fa] border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-900">Knowledge Graph</span>
          </nav>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-sm font-medium mb-4">
            VeritasGraph
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The Connected Knowledge Graph
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-8">
            VeritasGraph links deal documents, participants, counterparties, assets, and contracts into a single queryable graph inside SpaceNexus — enabling multi-hop reasoning that goes beyond keyword search.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#diagram" className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
              See the Diagram
            </a>
            <Link href="/demo" className="inline-flex items-center px-6 py-3 text-base font-semibold text-[#2563eb] bg-white border border-[#2563eb]/20 hover:bg-blue-50 rounded-full transition-all duration-200">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* GEO-optimized AnswerBlock */}
      <AnswerBlock text="VeritasGraph is the knowledge graph engine inside SpaceNexus that extracts entities from deal documents, maps typed relationships between them, and enables multi-hop reasoning queries across your data room. The VDR Document Pipeline feeds documents into the graph in real time, while entity extraction and relationship mapping power Generative Engine Optimization (GEO) — providing AI citability scoring, source attribution, and verifiable reasoning paths for LLM consumption." />

      {/* Section 2: SVG Diagram */}
      <section id="diagram" className="py-16 lg:py-24 bg-white" aria-labelledby="diagram-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Interactive Diagram</p>
          <h2 id="diagram-heading" className="text-3xl font-bold text-gray-900 mb-4">
            SpaceNexus Knowledge-Graph Explainer
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl">
            How VeritasGraph connects deal documents, participants, counterparties, target assets, financials, and contracts into a single queryable graph through the VDR Document Pipeline.
          </p>

          <figure role="img" aria-label="Knowledge graph diagram showing how VeritasGraph connects deal documents, participants, counterparties, target assets, financial statements, and contracts through entity extraction and the VDR Document Pipeline" className="bg-[#f8f9fa] rounded-2xl border border-gray-200 p-6 sm:p-10 overflow-x-auto">
            <KnowledgeGraphDiagram />

            <figcaption className="mt-4 text-sm text-gray-600 text-center">
              Diagram: VeritasGraph knowledge graph connecting deal documents, participants, counterparties, target assets, financials, and contracts inside SpaceNexus. The VDR Document Pipeline serves as the ingestion layer feeding documents into the graph.
            </figcaption>
          </figure>

          <noscript>
            <p className="mt-4 text-sm text-gray-600">
              The knowledge graph diagram shows VeritasGraph at the center, connected to six entity types: Deal Documents (top), Deal Participants (left), Counterparties (right), Target Assets (bottom-left), Financials (bottom-right), and Contracts (bottom-center). The VDR Document Pipeline (bottom) feeds documents into the graph. Edge labels indicate deal relationships: filed by, negotiated between, acquired by, due diligence for, guaranteed by, and references.
            </p>
          </noscript>
        </div>
      </section>

      {/* Section 3: Connected Knowledge Graph */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]" aria-labelledby="connected-kg-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Core Concepts</p>
          <h2 id="connected-kg-heading" className="text-3xl font-bold text-gray-900 mb-4">
            Connected Knowledge Graph
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl">
            VeritasGraph turns your unstructured deal documents into a connected graph through three core capabilities.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {connectedKgCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: VDR Document Pipeline */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="sdh-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Ingestion Layer</p>
          <h2 id="sdh-heading" className="text-3xl font-bold text-gray-900 mb-4">
            VDR Document Pipeline
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl">
            The ingestion layer that feeds your data room documents into the knowledge graph through a five-step pipeline.
          </p>
          <div className="relative">
            <div className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-blue-100" aria-hidden="true" />
            <div className="grid md:grid-cols-5 gap-4 relative">
              {spaceDataHubSteps.map((step) => (
                <div key={step.step} className="bg-[#f8f9fa] rounded-2xl border border-gray-200 p-5 text-center hover:shadow-lg transition-shadow duration-300 relative">
                  <div className="w-10 h-10 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-sm font-bold mx-auto mb-3 relative z-10">
                    {step.step}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: GEO Task */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]" aria-labelledby="geo-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">GEO Task</p>
          <h2 id="geo-heading" className="text-3xl font-bold text-gray-900 mb-4">
            Generative Engine Optimization
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl">
            How the knowledge graph ensures AI systems cite your deal data accurately and traceably.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {geoCapabilities.map((cap) => (
              <div key={cap.title} className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">FAQ</p>
          <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group bg-[#f8f9fa] rounded-xl border border-gray-200 hover:border-[#2563eb]/30 transition-all"
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
      </section>

      {/* Section 7: CTA + Last Updated */}
      <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to see your deal data as a connected graph?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Upload your data room documents and let VeritasGraph build the knowledge graph automatically.
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

      {/* Cross-links */}
      <section className="py-14 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-4">Related Resources</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue exploring</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/features/data-room" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Feature</p>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">VDR Data Room →</h3>
              <p className="text-xs text-gray-600 mt-2">How VeritasGraph integrates with your data room for automated entity extraction.</p>
            </Link>
            <Link href="/features/activity-analytics" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Analytics</p>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Activity Analytics →</h3>
              <p className="text-xs text-gray-600 mt-2">Track who accesses what across your data room with real-time engagement analytics.</p>
            </Link>
            <Link href="/security" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all">
              <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Security</p>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Security & Compliance →</h3>
              <p className="text-xs text-gray-600 mt-2">SOC 2, zero trust, encryption, and audit trails protecting your deal data.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <div className="py-6 text-center border-t border-gray-100">
        <LastUpdated date="2026-09-15" />
      </div>
    </div>
  );
}
