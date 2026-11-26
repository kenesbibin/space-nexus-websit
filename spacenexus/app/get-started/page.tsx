import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import DemoRequest from "@/app/components/DemoRequest";
import LastUpdated from "../components/LastUpdated";

export const metadata: Metadata = {
  title: "Get Started with SpaceNexus — Free Virtual Data Room Trial | SpaceNexus",
  description:
    "Start your free 14-day SpaceNexus VDR trial. No credit card required. Set up a secure data room for M&A, fundraising, or legal due diligence in under 24 hours.",
  alternates: {
    canonical: "https://spacenexus.net/get-started",
  },
  keywords: [
    "free VDR trial", "start free trial", "virtual data room free",
    "SpaceNexus trial", "data room no credit card", "free data room software",
  ],
  openGraph: {
    title: "Get Started with SpaceNexus — Free VDR Trial",
    description: "Start your free 14-day trial. No credit card required. Set up a secure data room in under 24 hours.",
    url: "https://spacenexus.net/get-started",
  },
};

const benefits = [
  {
    title: "Enterprise-Grade Security",
    description: "SOC 2 Type II, ISO 27001, AES-256 encryption, and granular permission controls.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    title: "AI-Powered Automation",
    description: "Auto-indexing, AI redaction, OCR search, and smart categorization process documents in hours.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    title: "24-Hour Setup",
    description: "Go from signup to a fully organized data room with permission tiers and NDA workflows in one day.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "Flat-Rate Pricing",
    description: "No per-page fees, no hidden costs. Transparent pricing that scales with your deal volume.",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
];

const faqs = [
  { question: "How long is the free trial?", answer: "14 days with full access to all features including unlimited storage, user permissions, and analytics. No credit card required." },
  { question: "What happens after the trial?", answer: "You can upgrade to a paid plan, extend your trial, or export your data at any time. Plans start with flexible month-to-month pricing." },
  { question: "How fast can I set up a data room?", answer: "Most teams have their data room live in under 24 hours. AI auto-indexing and pre-built folder templates mean you can upload documents and share them the same day." },
  { question: "Can I invite my team during the trial?", answer: "Yes. Invite unlimited team members with granular permission controls during your trial. Set up admin, contributor, and viewer roles for your deal team." },
  { question: "Is my data secure during the trial?", answer: "Absolutely. Trial accounts have the same enterprise security: AES-256 encryption, TLS 1.3, SOC 2 Type II controls, and dynamic watermarking." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "Get Started", item: "https://spacenexus.net/get-started" },
      ],
    },
  ],
};

export default function GetStartedPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <Script id="gs-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:pr-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-200/20 text-blue-200 text-sm font-medium mb-6">
                Free 14-Day Trial
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Get Started with <br className="hidden sm:block" />
                <span className="text-blue-200">SpaceNexus VDR</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Start your free trial today. No credit card required. Set up a secure data room for M&A, fundraising, or legal due diligence and see why hundreds of deal teams trust SpaceNexus.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/30 text-blue-200 flex items-center justify-center shrink-0">
                      {b.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">{b.title}</h3>
                      <p className="text-blue-200 text-sm">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-blue-400/30">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-blue-200">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-blue-200">Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-blue-200">14-day free trial</span>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
                <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-1 text-center">Start Your Free Trial</p>
                <p className="text-xs text-gray-600 mb-6 text-center">Fill in your details and get started in minutes.</p>
                <DemoRequest />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about getting started with SpaceNexus.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
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
