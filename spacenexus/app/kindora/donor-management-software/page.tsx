import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Donor Management Software for Small Nonprofits | Kindora",
  description:
    "Find donor management software for a small nonprofit. Kindora's free Starter plan supports up to 5 team members with donor and donation management, giving history, and basic reporting.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/donor-management-software",
  },
  openGraph: {
    title: "Donor Management Software for Small Nonprofits",
    description: "Manage donor records and giving history with Kindora. The free Starter plan supports up to 5 team members.",
    url: "https://spacenexus.net/kindora/donor-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora Donor Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donor Management Software for Small Nonprofits",
    description: "Manage donor records and giving history with Kindora. The free Starter plan supports up to 5 team members.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "donor management software",
    "donor management software for small nonprofits",
    "affordable donor management software",
    "free donor management software for nonprofits",
    "donor CRM for small nonprofits",
    "donor crm software",
    "donor tracking software",
    "donor database software",
    "donor management system",
    "donor management platform",
    "charity donor software",
    "NGO donor management",
    "donor relationship management",
    "nonprofit donor software",
    "donor management tools",
    "donor records software",
    "donor history software",
    "best donor management software",
    "donor management crm",
  ],
};

const benefits = [
  {
    title: "Keep donor details together",
    description: "Store donor contact information, giving history, and relationship notes in donor profiles instead of maintaining disconnected records.",
  },
  {
    title: "See giving history at a glance",
    description: "Review gifts, dates, payment methods, campaign attribution, and receipt status from the donor record.",
  },
  {
    title: "Follow up with context",
    description: "Record donor communications and use active, inactive, and prospect statuses to organize stewardship follow-up.",
  },
  {
    title: "Start with a free plan",
    description: "Kindora's Starter plan is listed at no cost for up to five team members and includes donor and donation management plus basic reporting.",
  },
];

const features = [
  {
    title: "Donor Profiles",
    description: "Keep donor contact information, addresses, communication preferences, and relationship notes in each donor profile.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Giving History",
    description: "Review gift amounts, dates, payment methods, campaign attribution, and receipt status from the donor record.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Donor Statuses",
    description: "Organize records as active, inactive, or prospect so your small team can see which relationships need attention.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Recurring Giving",
    description: "Manage monthly giving programs and recurring donation schedules alongside each donor's giving history.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Communication History",
    description: "Log emails, calls, meetings, and thank-you notes to maintain relationship context with each donor record.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Direct Email",
    description: "Send an email from a donor profile using a template or a custom message, without leaving the platform.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Donation Analytics",
    description: "Review total giving, average and largest gift, and most recent donation to inform donor stewardship.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Receipt Status",
    description: "Track whether a donation receipt is pending, sent, or not required.",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
];

const faqs = [
  {
    question: "What is donor management software?",
    answer:
      "Donor management software helps nonprofits organize donor contact details, giving history, communications, and receipt records. A shared donor record gives staff a consistent place to review relationship context and plan follow-up.",
  },
  {
    question: "How does donor management software improve retention?",
    answer:
      "Donor management software makes giving history and communication notes easier to review together. Teams can use that context to plan timely, personal follow-up; software alone does not guarantee donor retention.",
  },
  {
    question: "What features should I look for in donor management software?",
    answer:
      "Small nonprofits commonly need donor profiles, gift history, communication notes, donation reporting, and receipt tracking. Consider the number of users included, which modules are in each plan, and whether the product fits your existing fundraising process.",
  },
  {
    question: "How is Kindora different from other donor management software?",
    answer:
      "Kindora documents donor profiles, donation history, donor statuses, communication history, direct email, donation analytics, and receipt status. Its free Starter plan includes donor and donation management for up to five team members; paid plans have custom pricing and additional modules.",
  },
  {
    question: "Can I migrate my donor data from spreadsheets to Kindora?",
    answer:
      "Before switching, ask Kindora about supported import formats and migration assistance for your specific donor records. Confirm which fields and gift history can be transferred before starting a migration.",
  },
  {
    question: "Is Kindora affordable for a small nonprofit?",
    answer:
      "Kindora lists its Starter plan as free forever for up to five team members, with donor and donation management, client and service tracking, and basic reporting and exports. Professional and Enterprise plans are custom-priced. Review the current plan details to confirm which modules and limits fit your organization.",
  },
  {
    question: "Is Kindora donor management easy for a small team to use?",
    answer:
      "Kindora keeps donor profiles, giving history, communication notes, and receipt status together, so staff can review the same donor context in one place. Ask for a demo to check the workflow against your team's daily tasks and existing records.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Donor Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Donor management software for small nonprofits with donor profiles, donation history, communication records, receipt tracking, and a free Starter plan for up to five team members.",
      url: "https://spacenexus.net/kindora/donor-management-software",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free Starter plan for up to five team members; see current plan details.",
      },
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

export default function DonorManagementSoftwarePage() {
  return (
    <>
      <Script id="donor-management-software-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-blue-600">Donor Management</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Donor Management Software for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">Small Nonprofits</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Small nonprofit teams need donor records they can keep current without adding unnecessary cost or complexity. Keep donor profiles, giving history, communication notes, and receipt status together with Kindora.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-cyan-600 hover:to-blue-700 rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Start with the free plan
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href="/kindora/features/donor-management"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
              >
                Explore donor management features
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Small nonprofit plan */}
      <section className="border-y border-gray-100 bg-white py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              A clear starting point for small teams
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Start with Kindora&apos;s free Starter plan
            </h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Starter is listed at $0 for up to five team members and includes
              donor and donation management, basic reporting, and exports.
              Professional and Enterprise plans are custom-priced.
            </p>
          </div>
          <Link
            href="/kindora/pricing"
            className="shrink-0 rounded-full border border-blue-700 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Compare plans
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">Why Donor Management</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">A manageable donor workflow for a small team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Keep core donor work in a consistent place: profile details, gifts, communications, and receipt status. This gives staff a shared record to refer to when planning stewardship and reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">Features</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Donor management features for day-to-day work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Review the donor and donation workflows Kindora documents, from profile details and gift history to communication records and receipts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/kindora/features/donor-management"
              className="inline-flex items-center font-semibold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900"
            >
              See Kindora&apos;s donor management feature details
            </Link>
          </div>
        </div>
      </section>

      {/* Affordability and next steps */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              What should a small nonprofit compare?
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Check whether the plan fits your team size and includes the donor
              workflows you actually use. Kindora&apos;s published Starter plan
              is free for up to five team members and includes core donor and
              donation management. Its plan page lists Professional and
              Enterprise pricing as custom, so request a quote before budgeting
              for paid modules.
            </p>
            <Link
              href="/kindora/pricing"
              className="font-semibold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900"
            >
              See current Kindora plan details
            </Link>
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Keep the workflow simple and verifiable
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Before adopting any donor system, test a representative task:
              open a donor profile, review recent gifts, record a conversation,
              and check receipt status. Kindora&apos;s feature page describes
              these steps and the available donor record fields.
            </p>
            <Link
              href="/kindora/features/donor-management"
              className="font-semibold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-900"
            >
              Review the donor management workflow
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">FAQs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Manage Donors Better?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Review donor management features and plan details, then decide whether Kindora fits your team&apos;s workflow and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Start with the free Starter plan
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
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-10-29" />
            </div></div>
      </section>
    </>
  );
}
