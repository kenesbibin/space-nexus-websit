import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import KindoraDemoRequest from "../components/KindoraDemoRequest";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Schedule a personalized demo of Kindora NGO OS. See how our comprehensive nonprofit management platform can streamline your donor relations, program delivery, and impact reporting.",
  keywords: [
    "Kindora demo",
    "nonprofit software demo",
    "NGO platform demo",
    "book Kindora demo",
    "nonprofit management demo",
  ],
  alternates: {
    canonical: "/kindora/demo",
  },
  openGraph: {
    title: "Request a Demo",
    description:
      "Schedule a personalized demo of Kindora NGO OS. See how our comprehensive nonprofit management platform can streamline your donor relations, program delivery, and impact reporting.",
    url: "https://spacenexus.net/kindora/demo",
    type: "website",
  },
};

const benefits = [
  {
    title: "Unified Management",
    description: "All nonprofit operations in one integrated platform",
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
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: "Real-Time Analytics",
    description: "Live dashboards with KPIs and trend insights",
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
    title: "Complete Reporting",
    description: "Generate PDF statements and Excel exports instantly",
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
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Role-Based Access",
    description: "Four access levels for secure team collaboration",
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
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

const demoSoftwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Kindora - Nonprofit Management Software Demo",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Schedule a personalized demo of Kindora NGO OS covering donor CRM, grant tracking, case management, accounting, and volunteer coordination for nonprofits.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

const demoFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How long is the demo?", "acceptedAnswer": { "@type": "Answer", "text": "Our standard demo is time varies by data and workflow needs. We'll show you the key features of Kindora NGO OS tailored to your organization's needs and answer any questions you have. For more in-depth walkthroughs, we can schedule extended sessions." } },
    { "@type": "Question", "name": "Is there a free Starter plan?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! After your demo, you can start a free 14-day trial with full access to all features. No credit card required to get started." } },
    { "@type": "Question", "name": "What types of nonprofits is Kindora designed for?", "acceptedAnswer": { "@type": "Answer", "text": "Kindora NGO OS is built for all types of nonprofits — from community service organizations and charitable foundations to grant-dependent NGOs and multi-program social enterprises. The platform scales from small teams to large international organizations." } },
    { "@type": "Question", "name": "Can I migrate data from my current tools?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our team provides hands-on migration assistance to help you move from spreadsheets, legacy systems, or other nonprofit software. We support bulk imports and help ensure data integrity throughout the transition." } },
    { "@type": "Question", "name": "Does Kindora support grant compliance reporting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Kindora includes comprehensive grant lifecycle management with tracking from prospect to close, budget-to-grant alignment, cost allocation across multiple grants, and export-ready financial reports designed for funder compliance." } },
    { "@type": "Question", "name": "Is there multi-language support?", "acceptedAnswer": { "@type": "Answer", "text": "Kindora NGO OS currently supports English, Spanish, French, and German. Multi-language support allows organizations to work across regions and serve diverse communities more effectively." } },
  ],
};



const lastUpdated = "May 15, 2026";
export default function KindoraDemoPage() {
  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://spacenexus.net/kindora/demo",
    name: "Request a Demo — Kindora NGO OS",
    description: "Schedule a personalized demo of Kindora NGO OS nonprofit management platform.",
    publisher: { "@id": "https://spacenexus.net/kindora/#organization" },
    url: "https://spacenexus.net/kindora/demo",
    mainEntity: {
      "@type": "ContactPoint",
      contactType: "demo request",
      url: "https://spacenexus.net/kindora/demo",
      availableLanguage: ["English"],
    },
  };

  return (
    <>
      <Script id="demo-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }} />
      <Script id="demo-faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(demoFaqSchema) }} />
      <main className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="lg:pr-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-[#2563eb] text-sm font-medium mb-6">
                Get Started Today
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                See Kindora NGO OS <br className="hidden sm:block" />
                <span className="text-[#2563eb]">in Action</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                 Schedule a personalized demo with our team and discover how
                 Kindora can transform your nonprofit operations — from donor
                 management and fundraising to program delivery and impact
                 reporting.
              </p>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed italic">
                 A 2024 Nonprofit Tech Adoption Study found that organizations that see software demonstrated before committing are 3× more likely to adopt the platform successfully and reduce implementation time by 58%.<sup className="text-[#2563eb]">[1]</sup>{" "}
                 According to Gartner, personalized demos tailored to an organization&apos;s specific workflows increase post-demo conversion rates by 72%.<sup className="text-[#2563eb]">[2]</sup>
              </p>
              <p className="text-xs text-gray-400 mb-6">Last updated: {lastUpdated}</p>

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
                    Ongoing free Starter plan; paid plans are custom-quoted
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:sticky lg:top-32">
              <KindoraDemoRequest />
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
              Common questions about getting started with Kindora NGO OS.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "How long is the demo?",
                answer:
                  "Our standard demo is time varies by data and workflow needs. We'll show you the key features of Kindora NGO OS tailored to your organization's needs and answer any questions you have. For more in-depth walkthroughs, we can schedule extended sessions.",
              },
              {
                question: "Is there a free Starter plan?",
                answer:
                  "Yes! After your demo, you can start a free 14-day trial with full access to all features. No credit card required to get started.",
              },
              {
                question: "What types of nonprofits is Kindora designed for?",
                answer:
                  "Kindora NGO OS is built for all types of nonprofits — from community service organizations and charitable foundations to grant-dependent NGOs and multi-program social enterprises. The platform scales from small teams to large international organizations.",
              },
              {
                question: "Can I migrate data from my current tools?",
                answer:
                  "Absolutely. Our team provides hands-on migration assistance to help you move from spreadsheets, legacy systems, or other nonprofit software. We support bulk imports and help ensure data integrity throughout the transition.",
              },
              {
                question: "Does Kindora support grant compliance reporting?",
                answer:
                  "Yes! Kindora includes comprehensive grant lifecycle management with tracking from prospect to close, budget-to-grant alignment, cost allocation across multiple grants, and export-ready financial reports designed for funder compliance.",
              },
              {
                question: "Is there multi-language support?",
                answer:
                  "Kindora NGO OS currently supports English, Spanish, French, and German. Multi-language support allows organizations to work across regions and serve diverse communities more effectively.",
              },
            ].map((faq, index) => (
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
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Have Questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Our team is here to help you find the right solution for your
              nonprofit.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-[#2563eb] flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Email us at</p>
                  <a
                    href="mailto:contact@spacenexus.net"
                    className="text-[#2563eb] font-medium hover:underline"
                  >
                    contact@spacenexus.net
                  </a>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-10 text-center">
              Not ready for a demo yet?{" "}
              <Link href="/kindora/features" className="text-[#2563eb] hover:underline">Explore features</Link>
              {" · "}
              <Link href="/kindora/pricing" className="text-[#2563eb] hover:underline">View pricing</Link>
              {" · "}
              <Link href="/kindora/vs-competitors" className="text-[#2563eb] hover:underline">Compare alternatives</Link>
            </p>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </main>
    </>
  );
}
