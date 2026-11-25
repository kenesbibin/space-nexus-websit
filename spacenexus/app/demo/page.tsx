import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import DemoRequest from "@/app/components/DemoRequest";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
  title: "Book a Free SpaceNexus Demo — Secure Virtual Data Room for Legal & M&A Teams",
  description:
    "Request a free 30-minute SpaceNexus VDR demo. See enterprise-grade security (SOC 2, ISO 27001), real-time analytics, and AI-powered due diligence in action. 14-day free trial included.",
  alternates: {
    canonical: "https://spacenexus.net/demo",
  },
  keywords: [
    "virtual data room demo",
    "VDR free trial",
    "secure data room demo",
    "SpaceNexus demo",
    "data room for legal teams",
    "M&A data room demo",
  ],
  openGraph: {
    title: "Book a Free SpaceNexus Demo — Secure VDR for Legal & M&A Teams",
    description:
      "Schedule a personalized demo. Enterprise security, real-time analytics, and 14-day free trial — no credit card required.",
    url: "https://spacenexus.net/demo",
  },
};

const benefits = [
  {
    title: "Enterprise Security",
    description: "Bank-level encryption and SOC 2 Type II certified",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Powerful Analytics",
    description: "Real-time insights into document engagement",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Seamless Integrations",
    description: "Connect with your existing tech stack",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description: "Dedicated customer success team",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

const demoFaqs = [
  {
    question: "How long is the SpaceNexus demo?",
    answer:
      "Our standard demo is 30 minutes. We walk you through the key features — data room setup, permission controls, Q&A workflows, and analytics — tailored to your use case. Extended sessions are available for enterprise evaluations.",
  },
  {
    question: "Is there a free trial of SpaceNexus?",
    answer:
      "Yes! After your demo, you can start a free 14-day trial with full access to all features including unlimited storage, user permissions, and analytics. No credit card required to get started.",
  },
  {
    question: "What security certifications does SpaceNexus have?",
    answer:
      "SpaceNexus is SOC 2 Type II certified, ISO 27001 compliant, and GDPR compliant. We use AES-256 encryption for data at rest, TLS 1.3 for data in transit, and support customer-managed encryption keys on enterprise plans.",
  },
  {
    question: "Can I migrate from Datasite, Intralinks, or another VDR?",
    answer:
      "Absolutely. Our team provides white-glove migration services to move you from any existing VDR — including Datasite, Intralinks, and Firmex — with zero downtime. We support bulk imports and preserve your existing folder structures and permissions.",
  },
  {
    question: "How much does SpaceNexus cost?",
    answer:
      "SpaceNexus offers flexible pricing starting with a free trial. Plans scale based on storage, users, and feature requirements. We offer special pricing for law firms and startups. Visit our pricing page or request a demo for a custom quote.",
  },
  {
    question: "Is SpaceNexus suitable for law firms and legal due diligence?",
    answer:
      "Yes — SpaceNexus is built for legal teams handling M&A transactions, litigation holds, and regulatory compliance. Features include granular permission controls, dynamic watermarking, redaction tools, and immutable audit trails required for attorney-client privilege and SEC compliance.",
  },
  {
    question: "How quickly can I set up a data room?",
    answer:
      "Most teams have their data room live in under 24 hours. SpaceNexus includes AI-powered document indexing, automatic folder structure templates for M&A and fundraising, and bulk upload support — so you can go from signup to sharing documents the same day.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
    { "@type": "ListItem", position: 2, name: "Book a Demo", item: "https://spacenexus.net/demo" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: demoFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function DemoPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <Script
        id="demo-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="demo-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        <span className="text-gray-600">Book a Demo</span>
      </nav>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="lg:pr-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-[#2563eb] text-sm font-medium mb-6">
                Get Started Today
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Book a Free <br className="hidden sm:block" />
                <span className="text-[#2563eb]">SpaceNexus VDR Demo</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                See how SpaceNexus helps legal teams, investment banks, and PE
                firms run secure due diligence — with SOC 2 certified security,
                real-time analytics, and AI-powered document management. Includes
                a 14-day free trial.
              </p>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563eb] flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    No credit card required
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">30-minute demo</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    Free trial available
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:sticky lg:top-32">
              <DemoRequest />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about SpaceNexus demos, pricing, and getting started.
            </p>
          </div>
          <div className="space-y-4">
            {demoFaqs.map((faq, index) => (
              <div
                key={index}
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
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
      </section>
    </main>
  );
}
