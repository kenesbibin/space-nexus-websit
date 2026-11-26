import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Client Case Management Software for Nonprofits",
  description:
    "Client case management software for nonprofits — track enrollment, manage case notes, monitor outcomes, and report program impact. Built for social services, youth programs, and community organizations.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/client-case-management-software",
  },
  openGraph: {
    title: "Client Case Management Software",
    description:
      "Track client enrollment, manage case notes, monitor outcomes, and report program impact — all from one unified platform.",
    url: "https://spacenexus.net/kindora/client-case-management-software",
    siteName: "Kindora by SpaceNexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Client Case Management Software — Kindora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Management Software",
    description:
      "Client case management software for nonprofits. Track enrollment, manage case notes, and report outcomes.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "client case management software",
    "case management software nonprofit",
    "case management software",
    "nonprofit case management",
    "client management software",
    "case tracking software",
    "client intake software",
    "program case management",
    "social services case management",
    "case management system",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Client Case Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Client case management software for nonprofits — track enrollment, manage case notes, monitor outcomes, and report program impact.",
      url: "https://spacenexus.net/kindora/client-case-management-software",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "Client Enrollment Tracking",
        "Case Notes & Documentation",
        "Outcome Monitoring",
        "Program Enrollment",
        "Referral Management",
        "Progress Tracking",
        "Outcome Reporting",
        "Data-Driven Insights",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is client case management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Client case management software is a specialized platform that helps nonprofits track client enrollment, manage case notes, monitor program outcomes, and report impact. It centralizes client information in one system for better service delivery and accountability.",
          },
        },
        {
          "@type": "Question",
          name: "Why do nonprofits need case management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nonprofits need case management software to replace scattered paper files and spreadsheets with a centralized system for client data. This improves service delivery, ensures data security, enables outcome tracking, and provides evidence for funders.",
          },
        },
        {
          "@type": "Question",
          name: "What features should case management software have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Essential features include client intake and enrollment, case notes and documentation, outcome tracking, referral management, program enrollment, progress monitoring, outcome reporting, and data security with role-based access controls.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kindora help with case management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora provides a complete case management platform that tracks clients from intake through program completion. Case notes, outcomes, and progress data are stored securely and connected to program reporting — giving you visibility into every client's journey.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kindora secure for client data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora provides role-based access controls, data encryption, and audit trails to protect sensitive client information. Only authorized staff can access client records based on their assigned roles.",
          },
        },
      ],
    },
  ],
};

const features = [
  {
    icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
    title: "Client Intake & Enrollment",
    description:
      "Streamline client intake with digital forms, automate enrollment workflows, and track eligibility requirements.",
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Case Notes & Documentation",
    description:
      "Record case notes, attach documents, and maintain a complete history for every client interaction.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Outcome Tracking",
    description:
      "Define outcomes, track client progress, and measure program effectiveness with real-time dashboards.",
  },
  {
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
    title: "Referral Management",
    description:
      "Track referrals between programs, manage partner relationships, and ensure clients get connected to services.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Program Enrollment",
    description:
      "Manage client enrollment across multiple programs, track participation, and monitor completion rates.",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Data Security",
    description:
      "Role-based access controls, data encryption, and audit trails protect sensitive client information.",
  },
];

const useCases = [
  {
    title: "Social Service Agencies",
    description:
      "Track client intake, manage service referrals, and report outcomes to government funders.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Youth-Serving Programs",
    description:
      "Manage youth enrollment, track attendance and progress, and report to education funders.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Housing Assistance",
    description:
      "Track housing placements, manage case plans, and report outcomes to HUD and other funders.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "Food Banks & Pantries",
    description:
      "Manage client intake, track food distribution, and report impact to donors and grantors.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

const benefits = [
  {
    stat: "Connected",
    label: "Client records",
    description: "Complete view of every client's journey from intake to outcomes.",
  },
  {
    stat: "Real-Time",
    label: "Outcome Tracking",
    description: "Monitor client progress and program effectiveness as it happens.",
  },
  {
    stat: "Secure",
    label: "Client Data",
    description: "Role-based access and encryption protect sensitive information.",
  },
  {
    stat: "Guided",
    label: "Setup support",
    description: "Discuss setup needs with the Kindora team before getting started.",
  },
];

const faqs = [
  {
    question: "What is client case management software?",
    answer:
      "Client case management software is a specialized platform that helps nonprofits track client enrollment, manage case notes, monitor program outcomes, and report impact. It centralizes client information in one system for better service delivery and accountability.",
  },
  {
    question: "Why do nonprofits need case management software?",
    answer:
      "Nonprofits need case management software to replace scattered paper files and spreadsheets with a centralized system for client data. This improves service delivery, ensures data security, enables outcome tracking, and provides evidence for funders.",
  },
  {
    question: "What features should case management software have?",
    answer:
      "Essential features include client intake and enrollment, case notes and documentation, outcome tracking, referral management, program enrollment, progress monitoring, outcome reporting, and data security with role-based access controls.",
  },
  {
    question: "How does Kindora help with case management?",
    answer:
      "Kindora provides a complete case management platform that tracks clients from intake through program completion. Case notes, outcomes, and progress data are stored securely and connected to program reporting — giving you visibility into every client's journey.",
  },
  {
    question: "Is Kindora secure for client data?",
    answer:
      "Yes. Kindora provides role-based access controls, data encryption, and audit trails to protect sensitive client information. Only authorized staff can access client records based on their assigned roles.",
  },
];

export default function ClientCaseManagementSoftwarePage() {
  return (
    <>
      <Script
        id="case-management-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-blue-700">
                Client Case Management Software
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Client Case Management Software{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Built for Nonprofits
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Track client enrollment, manage case notes, monitor outcomes,
              and report program impact — all from one secure platform designed
              for social services, youth programs, and community organizations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Free Starter Plan
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/kindora/features/client-management"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              {[
                { icon: "M5 13l4 4L19 7", label: "No credit card required" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Guided setup" },
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Secure client data" },
              ].map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={icon}
                    />
                  </svg>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {benefit.stat}
                </div>
                <div className="text-sm font-semibold text-blue-100 mb-1">
                  {benefit.label}
                </div>
                <div className="text-xs text-blue-200">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Client Case Management Software */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                Why Case Management Matters
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Stop Scattered Files. Start Delivering Better Outcomes.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Most nonprofits track client information in paper files,
                spreadsheets, or disconnected databases. This creates data
                silos, makes outcome tracking impossible, and puts sensitive
                client information at risk.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Purpose-built <strong>client case management software</strong>{" "}
                replaces this chaos with a secure, centralized platform where
                client intake, case notes, outcomes, and program data live
                together — giving your team complete visibility into every
                client&apos;s journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                >
                  See How It Works
                </Link>
                <Link
                  href="/kindora/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Client Dashboard
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    Sample dashboard
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-3">Illustrative sample records and values; these are not customer data or reported outcomes.</p>
                <div className="space-y-3">
                  {[
                    { name: "Sample participant", program: "Housing Assistance", status: "Active", progress: "75%" },
                    { name: "Sample participant", program: "Youth Development", status: "Active", progress: "60%" },
                    { name: "Sample participant", program: "Food Assistance", status: "Completed", progress: "100%" },
                    { name: "Sample participant", program: "Job Training", status: "Active", progress: "45%" },
                  ].map((client) => (
                    <div
                      key={client.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
                          {client.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {client.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {client.program}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                            client.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {client.status}
                        </span>
                        <p className="text-xs text-gray-400 mt-1">
                          {client.progress}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Who It&apos;s For
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for Every Type of Service Organization
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From social services to youth programs, Kindora adapts to your
              case management needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
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
                      d={useCase.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Core Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything Your Team Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From intake to outcomes, Kindora&apos;s case management software
              gives your team the tools to deliver better services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-[#f8f9fa] rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
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
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about client case management software.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Client Services?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join organizations that trust Kindora&apos;s client case management
            software to track enrollment, manage case notes, and deliver better
            outcomes for every client.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Explore Free Starter Plan
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              View Pricing
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Client Case Management Software for Nonprofits of Every
            Size
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kindora offers{" "}
            <Link
              href="/kindora/features/client-management"
              className="text-blue-600 hover:underline"
            >
              client case management software
            </Link>{" "}
            and nonprofit operations tools. The platform{" "}
            <Link
              href="/kindora/features/donor-management"
              className="text-blue-600 hover:underline"
            >
              nonprofit management platform
            </Link>{" "}
            connects client data with program reporting for complete
            visibility. Whether you need{" "}
            <Link
              href="/kindora/features/client-management"
              className="text-blue-600 hover:underline"
            >
              client intake management
            </Link>
            ,{" "}
            <Link
              href="/kindora/features/reporting"
              className="text-blue-600 hover:underline"
            >
              outcome tracking software
            </Link>
            , or{" "}
            <Link
              href="/kindora/features/client-management"
              className="text-blue-600 hover:underline"
            >
              program case management
            </Link>
            , Kindora delivers enterprise-grade features at a price nonprofits
            can afford. Unlike generic databases or spreadsheets, our{" "}
            <strong>client case management software</strong> is purpose-built
            for social services — with secure data handling, outcome reporting,
            and referral tracking built in from day one.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/kindora"
              className="text-blue-600 hover:underline font-medium"
            >
              Kindora Home →
            </Link>
            <Link
              href="/kindora/features"
              className="text-blue-600 hover:underline font-medium"
            >
              All Features →
            </Link>
            <Link
              href="/kindora/pricing"
              className="text-blue-600 hover:underline font-medium"
            >
              Pricing →
            </Link>
            <Link
              href="/kindora/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              Request Demo →
            </Link>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
