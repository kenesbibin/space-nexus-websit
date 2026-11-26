import type { Metadata } from "next";
import Link from "next/link";
import { kindoraCanonicalUrl, kindoraOrganizationId } from "../components/kindora-entity";
import Script from "next/script";

export const metadata: Metadata = {
  title: "VeritasGraph — The Knowledge-Graph Engine Behind Kindora AI | Kindora",
  description:
    "VeritasGraph is the open-source GraphRAG knowledge-graph framework that powers Kindora AI. Every answer ships with a verifiable citation and reasoning path.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/veritas-graph",
  },
  openGraph: {
    title: "VeritasGraph — The Knowledge-Graph Engine Behind Kindora AI | Kindora",
    description:
      "VeritasGraph is the open-source GraphRAG knowledge-graph framework that powers Kindora AI with verifiable source attribution.",
    url: "https://spacenexus.net/kindora/veritas-graph",
    type: "website",
    siteName: "Kindora",
  },
  twitter: {
    card: "summary_large_image",
    title: "VeritasGraph | Kindora",
    description:
      "The open-source knowledge-graph framework that powers Kindora AI with verifiable citations.",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${kindoraCanonicalUrl}/#software`,
  name: "Kindora",
  alternateName: "Kindora NGO OS",
  applicationCategory: "BusinessApplication",
  url: kindoraCanonicalUrl,
  provider: { "@id": kindoraOrganizationId },
  publisher: { "@id": kindoraOrganizationId },
  featureList: [
    "AI search with source attribution",
    "Knowledge graph reasoning",
    "On-prem / 100% local processing",
  ],
  isBasedOn: {
    "@type": "SoftwareSourceCode",
    name: "VeritasGraph",
    codeRepository: "https://github.com/bibinprathap/VeritasGraph",
    url: "https://bibinprathap.github.io/VeritasGraph/index.html",
  },
  author: { "@type": "Person", name: "Bibin Prathap" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is VeritasGraph?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VeritasGraph is an open-source GraphRAG knowledge-graph framework. It turns your organization's records into a connected graph of entities and relationships, then answers questions by reasoning across that graph — returning every answer with a verifiable citation and reasoning path.",
      },
    },
    {
      "@type": "Question",
      name: "How does Kindora use VeritasGraph?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kindora uses VeritasGraph to power its AI search and answers across donors, grants, programs, volunteers, and finances. Because answers are grounded in a knowledge graph, Kindora can point you to the exact source record behind every result.",
      },
    },
    {
      "@type": "Question",
      name: "Is VeritasGraph open source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. VeritasGraph is open source and its code is available on GitHub. It can run on-prem or 100% local, so sensitive nonprofit records never leave your environment.",
      },
    },
  ],
};

const faqs = [
  {
    q: "What is VeritasGraph?",
    a: "VeritasGraph is an open-source GraphRAG knowledge-graph framework. It turns your organization's records into a connected graph of entities and relationships, then answers questions by reasoning across that graph — returning every answer with a verifiable citation and reasoning path.",
  },
  {
    q: "How does Kindora use VeritasGraph?",
    a: "Kindora uses VeritasGraph to power its AI search and answers across donors, grants, programs, volunteers, and finances. Because answers are grounded in a knowledge graph, Kindora can point you to the exact source record behind every result.",
  },
  {
    q: "Is VeritasGraph open source?",
    a: "Yes. VeritasGraph is open source and its code is available on GitHub. It can run on-prem or 100% local, so sensitive nonprofit records never leave your environment.",
  },
];

const capabilities = [
  {
    title: "Source attribution",
    desc: "Every answer is returned with a citation you can open — evidence over assertion.",
  },
  {
    title: "Multi-hop reasoning",
    desc: "Traverses relationships across donors, grants, and programs like a human analyst.",
  },
  {
    title: "Private by default",
    desc: "Runs on-prem or 100% local. Zero data egress, fully sovereign.",
  },
];

export default function VeritasGraphPage() {
  return (
    <>
      <Script
        id="veritasgraph-software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id="veritasgraph-faq-schema"
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
          <span className="text-gray-600">VeritasGraph</span>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-12 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-[#2563eb]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" />
            Open Source · GraphRAG · Verifiable AI
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Meet{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent">
              VeritasGraph
            </span>
            , the engine behind Kindora AI.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            VeritasGraph is the open-source knowledge-graph framework that powers
            Kindora&apos;s AI answers — turning donor, grant, and program records
            into a connected graph where every answer comes with the source to
            back it up.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/bibinprathap/VeritasGraph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              View source on GitHub
            </a>
            <a
              href="https://bibinprathap.github.io/VeritasGraph/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-[#2563eb] hover:text-[#2563eb]"
            >
              Read the docs
            </a>
          </div>
        </section>

        {/* What is VeritasGraph */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                What is VeritasGraph?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                A GraphRAG knowledge-graph framework that reasons over connected
                entities and returns every answer with a verifiable citation and
                reasoning path.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900">{cap.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Kindora uses it */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              How Kindora uses VeritasGraph
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              When you ask Kindora a question, VeritasGraph traces the answer
              across your organization&apos;s records — donors, grants, programs,
              volunteer hours, and expenses — and returns each result with the
              exact source it came from. No more guessing where an answer came
              from.{" "}
              <Link
                href="/kindora/knowledge-graph"
                className="font-medium text-[#2563eb] transition-colors hover:text-blue-700"
              >
                See how Kindora grounds its AI answers
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/bibinprathap/VeritasGraph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                GitHub repository
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
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            VeritasGraph — frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </summary>
                <p className="mt-4 text-sm leading-6 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
