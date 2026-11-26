import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Kindora for NGOs | All-in-One NGO Management Software",
  description:
    "Kindora for NGOs is an all-in-one NGO management platform — donor CRM, grant tracking, programme management, volunteer coordination, and nonprofit accounting in one system.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/kindora-for-ngos",
  },
  openGraph: {
    title: "Kindora for NGOs | All-in-One NGO Management Software",
    description:
      "Manage donors, grants, programmes, volunteers, and finances in one platform. Kindora for NGOs is purpose-built for your organization — no more juggling 5 different tools.",
    url: "https://spacenexus.net/kindora/kindora-for-ngos",
    siteName: "Kindora",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora/og-card.png", width: 1200, height: 630, alt: "Kindora for NGOs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindora for NGOs | All-in-One NGO Management Software",
    description:
      "Donor CRM, grant tracking, programme management, and nonprofit accounting — all in one platform built for NGOs.",
    images: ["https://spacenexus.net/kindora/og-card.png"],
  },
  keywords: [
    "kindora for ngos",
    "kindora NGO software",
    "kindora for NGOs",
    "NGO management platform",
    "software for NGOs",
    "NGO donor management",
    "NGO grant tracking",
    "NGO programme management",
    "NGO operations software",
    "NGO all-in-one software",
  ],
};

const features = [
  {
    title: "Donor & Donation Management",
    description:
      "Track supporters, giving history, and campaigns in one CRM built for NGO teams.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Grant Lifecycle Tracking",
    description:
      "Follow every grant from application to award, receipts, and compliance reporting.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Programme & Case Management",
    description:
      "Manage client intake, enrolment, service delivery, and impact outcomes across programmes.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Volunteer Management",
    description:
      "Recruit, schedule, track hours, and communicate with volunteers across all locations.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Nonprofit Accounting",
    description:
      "Chart of accounts, budgets, expense management, and cost allocation built for NGO finances.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Reporting & Dashboards",
    description:
      "Real-time dashboards and export-ready reports for funders, boards, and leadership.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const whyNgos = [
  {
    title: "One platform, not five",
    description:
      "Most NGO teams juggle a donor CRM, a grant tracker, a volunteer scheduler, a finance tool, and spreadsheets. Kindora for NGOs replaces them all with one system.",
  },
  {
    title: "Built for real NGO workflows",
    description:
      "Grant receipts, funder compliance, programme outcomes, and cost allocation are first-class features — not afterthoughts or expensive add-ons.",
  },
  {
    title: "Priced for NGOs, not enterprises",
    description:
      "Affordable flat-rate pricing with unlimited users. No per-seat fees, no consultants required, no six-month implementation.",
  },
  {
    title: "Ready in time varies by data and workflow needs",
    description:
      "Import your data, set up your modules, and start working. Your team learns one system instead of several different tools.",
  },
];

const faqs = [
  {
    question: "What is Kindora for NGOs?",
    answer:
      "Kindora for NGOs is an all-in-one NGO management platform that brings donor management, grant tracking, programme and case management, volunteer coordination, and nonprofit accounting into one system. It replaces the 5-10 disconnected tools most NGO teams use with a single platform.",
  },
  {
    question: "Who is the platform for?",
    answer:
      "Kindora for NGOs is built for small to mid-sized NGOs and nonprofits — social service agencies, community development organizations, youth-serving organizations, housing assistance groups, food banks, and educational nonprofits — plus the multi-country teams that serve them.",
  },
  {
    question: "Does it work for international or multi-country NGOs?",
    answer:
      "Yes. Kindora is designed so international NGOs can track donors, grants, and programmes across multiple countries and locations from one unified dashboard, with role-based access for each field office.",
  },
  {
    question: "Can we replace our current NGO software with Kindora?",
    answer:
      "Yes. Most teams switch to Kindora for NGOs from a combination of donor CRMs, grant trackers, volunteer schedulers, and spreadsheets. Kindora covers those functions in one platform and imports your existing data.",
  },
  {
    question: "How much does Kindora for NGOs cost?",
    answer:
      "Kindora is priced specifically for NGOs and nonprofits with an affordable flat rate and no per-user fees. A free Starter plan is available — start at cad.spaceaiapp.com/kindora with no credit card required.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora for NGOs",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "All-in-one NGO management platform — donor CRM, grant tracking, programme management, volunteer coordination, and nonprofit accounting in a single system.",
      url: "https://spacenexus.net/kindora/kindora-for-ngos",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Ongoing free Starter plan; paid plans are custom-quoted" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function KindoraForNgosPage() {
  return (
    <>
      <Script id="kindora-for-ngos-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4ff] to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse mr-2" />
              <span className="text-sm font-medium text-[#2563eb]">Built for NGOs &amp; Nonprofits</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Kindora for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                NGOs
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
              Kindora for NGOs is an all-in-one platform that replaces disconnected
              CRMs, grant trackers, and spreadsheets with one system for donors,
              grants, programmes, volunteers, and finances.
            </p>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto mb-10">
              You asked about Kindora for NGOs — here it is. Manage your entire
              organization from a single platform designed specifically for NGOs,
              from a one-office community organization to a multi-country team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Try Kindora Free
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href="/kindora/demo"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
              >
                Request a Demo
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-500">
              {["No credit card required", "Setup time varies by data and workflows", "Unlimited users", "See current plan terms on the pricing page"].map((text) => (
                <span key={text} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why NGOs choose Kindora + H2 with exact phrase */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold mb-4">Why Kindora</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Kindora for NGOs: one platform for your whole organization
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get to know Kindora for NGOs: one system for donor relationships,
              grants, programmes, volunteers, and financials — with the same data
              powering decisions across every team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyNgos.map((item) => (
              <div key={item.title} className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg hover:border-[#2563eb]/30 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2563eb] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything your NGO needs */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold mb-4">One Platform</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything your NGO needs, in one system
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From donors to grant compliance to programme outcomes — Kindora for
              NGOs covers the full lifecycle of your operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#2563eb]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white flex items-center justify-center mb-4 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold mb-4">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">Common questions about Kindora for NGOs.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="text-base font-semibold text-gray-900">{faq.question}</span>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#7c3aed] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to move your NGO to one platform?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Try Kindora for NGOs free and see how one system replaces your stack of
            disconnected tools.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#2563eb] bg-white hover:bg-blue-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Free Starter Plan
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-full transition-all duration-300"
            >
              Request a Demo
            </Link>
          </div>

          <div className="py-6 text-center border-t border-white/20 mt-8">
            <LastUpdated date="2026-09-02" />
          </div>
        </div>
      </section>
    </>
  );
}