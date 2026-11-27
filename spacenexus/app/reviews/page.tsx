import type { Metadata } from "next";
import Link from "next/link";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
  title: "VDR Reviews & Customer Feedback",
  description:
    "See how deal professionals evaluate SpaceNexus for M&A, fundraising and legal document sharing, and find independent review platforms to research virtual data room software.",
  alternates: {
    canonical: "https://spacenexus.net/reviews",
  },
  openGraph: {
    title: "VDR Reviews & Customer Feedback",
    description:
      "How deal teams evaluate SpaceNexus, and where to research virtual data room software independently.",
    url: "https://spacenexus.net/reviews",
  },
  twitter: {
    title: "SpaceNexus Reviews & Customer Feedback",
    description:
      "How deal professionals evaluate SpaceNexus for M&A, fundraising and legal document sharing.",
  },
};

const reviewPlatforms = [
  {
    name: "G2",
    category: "Virtual Data Room Software",
    url: "https://www.g2.com/products/spacenexus/reviews",
    description:
      "G2 is a large B2B software review marketplace. Reviews are submitted and moderated by G2 under its own verification process.",
    cta: "Visit G2",
  },
  {
    name: "Capterra",
    category: "Virtual Data Room Software",
    url: "https://www.capterra.com/p/spacenexus/",
    description:
      "Capterra is a software comparison site operated by Gartner Digital Markets, with reviews moderated on its platform.",
    cta: "Visit Capterra",
  },
  {
    name: "TrustRadius",
    category: "Virtual Data Room",
    url: "https://www.trustradius.com/products/spacenexus/reviews",
    description:
      "TrustRadius hosts in-depth software reviews and is known for longer, implementation-focused write-ups.",
    cta: "Visit TrustRadius",
  },
  {
    name: "GetApp",
    category: "Data Room Software",
    url: "https://www.getapp.com/p/spacenexus/",
    description:
      "GetApp is a software discovery platform in the Gartner Digital Markets network, alongside Capterra and Software Advice.",
    cta: "Visit GetApp",
  },
  {
    name: "Software Advice",
    category: "Virtual Data Room",
    url: "https://www.softwareadvice.com/vdr/spacenexus-profile/",
    description:
      "Software Advice offers software recommendations and comparisons from Gartner Digital Markets.",
    cta: "Visit Software Advice",
  },
];

const evaluationPoints = [
  {
    title: "Security and access control",
    body: "Check how a provider handles encryption in transit and at rest, granular permissions, multi-factor authentication, SSO, dynamic watermarking, and tamper-evident audit logs. Ask which controls are included by default versus an add-on.",
  },
  {
    title: "Deal workflows",
    body: "Evaluate structured Q&A, bidder or investor permission templates, document indexing, redaction, and engagement analytics against the workflows your team actually runs during diligence.",
  },
  {
    title: "Pricing transparency",
    body: "Compare how each provider prices storage, pages, users, and add-ons, and request a written quote for your expected document volume and number of participants.",
  },
  {
    title: "Onboarding and support",
    body: "Confirm setup time, migration support, training, and the support channels available during a live transaction, plus any uptime or service commitments in the contract.",
  },
];

const faqs = [
  {
    question: "Where can I read third-party reviews of SpaceNexus?",
    answer:
      "Independent reviews, where they exist, are hosted by third-party software directories such as G2, Capterra, TrustRadius, GetApp, and Software Advice. Each platform controls its own review verification and publication.",
  },
  {
    question: "How should I evaluate a virtual data room provider?",
    answer:
      "Compare security controls, deal workflows, pricing transparency, and onboarding against your actual transaction. Request a written quote and, where possible, a trial or demo using your own document set.",
  },
  {
    question: "How does SpaceNexus compare to Datasite and Intralinks?",
    answer:
      "SpaceNexus positions itself as a modern virtual data room focused on AI-assisted document processing, granular permissions, structured Q&A, and transparent pricing. See the comparison pages for a feature-by-feature breakdown.",
  },
  {
    question: "Can I share my own feedback about SpaceNexus?",
    answer:
      "Yes. Current and former customers can submit feedback directly to SpaceNexus, or post a review on the third-party platform of their choice, subject to that platform's verification rules.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://spacenexus.net",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Reviews",
                    item: "https://spacenexus.net/reviews",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#f0f4ff] to-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#2563eb] tracking-wide uppercase mb-4">
            Reviews & Evaluation
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            How Deal Teams Evaluate SpaceNexus
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Guidance on evaluating SpaceNexus and other virtual data room
            providers for M&amp;A due diligence, fundraising, and secure
            document sharing, plus links to independent review platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25"
            >
              Book a Free Demo
            </Link>
            <Link
              href="/competitors/vdr-alternatives"
              className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors border border-gray-300"
            >
              Compare VDR Providers
            </Link>
          </div>
        </div>
      </section>

      {/* Evaluation guidance */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What to evaluate in a virtual data room
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Use the same criteria whether you are reviewing SpaceNexus or any
              other provider.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {evaluationPoints.map((point) => (
              <div
                key={point.title}
                className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Independent Review Platforms
            </h2>
            <p className="text-gray-600">
              Research virtual data room software on independent B2B review
              directories. Reviews and verification are managed by each
              platform, not by SpaceNexus.
            </p>
          </div>
          <div className="space-y-4">
            {reviewPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center gap-4 bg-[#f8f9fa] rounded-xl border border-gray-200 p-6 hover:border-[#2563eb] transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2563eb]">
                      {platform.name}
                    </h3>
                    <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                      {platform.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {platform.description}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-[#2563eb] group-hover:underline">
                  {platform.cta} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Links */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Compare SpaceNexus to Other VDR Providers
            </h2>
            <p className="text-gray-600">
              See detailed feature-by-feature comparisons with other virtual
              data room providers
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/competitors/datasite-alternative"
              className="group bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-[#2563eb] mb-2">
                SpaceNexus vs Datasite
              </h3>
              <p className="text-sm text-gray-600">
                Feature comparison, pricing, and migration guide
              </p>
            </Link>
            <Link
              href="/competitors/intralinks-alternative"
              className="group bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-[#2563eb] mb-2">
                SpaceNexus vs Intralinks
              </h3>
              <p className="text-sm text-gray-600">
                Feature comparison, pricing, and migration guide
              </p>
            </Link>
            <Link
              href="/competitors/vdr-alternatives"
              className="group bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-[#2563eb] transition-colors"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-[#2563eb] mb-2">
                VDR Alternatives 2026
              </h3>
              <p className="text-sm text-gray-600">
                Compare providers side-by-side
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to see SpaceNexus for yourself?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Book a demo to review the platform against your own deal workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="px-8 py-4 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25"
            >
              Book a Free Demo
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors border border-gray-300"
            >
              View Pricing
            </Link>
          </div>

          {/* Last Updated */}
          <div className="py-6 text-center border-t border-gray-100 mt-8">
            <LastUpdated date="2026-11-25" />
          </div>
        </div>
      </section>
    </>
  );
}
