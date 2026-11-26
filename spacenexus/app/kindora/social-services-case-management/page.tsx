import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Social Services Case Management Software",
  description:
    "Social services case management software for nonprofits — track client intake, manage referrals, monitor outcomes, and report impact to government and private funders.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/social-services-case-management",
  },
  openGraph: {
    title: "Social Services Case Management",
    description:
      "Track client intake, manage referrals, monitor outcomes, and report impact for social services agencies.",
    url: "https://spacenexus.net/kindora/social-services-case-management",
    siteName: "Kindora by SpaceNexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Social Services Case Management — Kindora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Services Case Management",
    description:
      "Social services case management software. Track clients, manage referrals, and report outcomes.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "social services case management",
    "social services software",
    "case management for social services",
    "social services case tracking",
    "social services management software",
    "case management social services",
    "human services case management",
    "social services case worker software",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Social Services Case Management",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Social services case management software for nonprofits — track client intake, manage referrals, monitor outcomes, and report impact.",
      url: "https://spacenexus.net/kindora/social-services-case-management",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "Client Intake & Enrollment",
        "Referral Management",
        "Case Notes & Documentation",
        "Outcome Tracking",
        "Program Enrollment",
        "Progress Monitoring",
        "Impact Reporting",
        "Data Security & Compliance",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is social services case management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Social services case management software is a platform that helps agencies track client intake, manage service referrals, document case activities, monitor outcomes, and report to government and private funders — all from one secure system.",
          },
        },
        {
          "@type": "Question",
          name: "Why do social services agencies need case management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Social services agencies need case management software to replace paper files and spreadsheets with a centralized system. This improves service coordination, ensures data security, enables outcome tracking, and provides the evidence funders require.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kindora help social services agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora provides a complete case management platform that tracks clients from intake through service delivery and outcomes. Case notes, referrals, and progress data are stored securely and connected to program reporting — giving agencies visibility into every client's journey.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kindora compliant with social services regulations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora provides role-based access controls, data encryption, audit trails, and compliance documentation to meet government and funder requirements for social services agencies.",
          },
        },
        {
          "@type": "Question",
          name: "Can Kindora track referrals between agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora supports referral management — track referrals to partner agencies, monitor referral status, and ensure clients receive connected services across your network.",
          },
        },
      ],
    },
  ],
};

const features = [
  {
    icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
    title: "Client Intake & Assessment",
    description:
      "Streamline intake with digital forms, automated eligibility checks, and structured assessments for every client.",
  },
  {
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
    title: "Referral Management",
    description:
      "Track referrals to partner agencies, monitor status, and ensure clients receive connected services.",
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
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Service Coordination",
    description:
      "Coordinate services across your team and partner organizations. Track who's doing what for every client.",
  },
  {
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Impact Reporting",
    description:
      "Generate reports for government funders, private foundations, and board meetings with one click.",
  },
];

const services = [
  {
    title: "Housing & Homelessness Services",
    description: "Track housing placements, manage case plans, and report outcomes to HUD and local funders.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "Behavioral Health Services",
    description: "Manage treatment plans, track client progress, and maintain HIPAA-compliant documentation.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Child Welfare Services",
    description: "Track family assessments, manage service plans, and report to state and federal agencies.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Substance Abuse Services",
    description: "Manage treatment episodes, track recovery outcomes, and comply with SAMHSA reporting requirements.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

const benefits = [
  {
    stat: "100%",
    label: "Client Visibility",
    description: "Complete view of every client's journey from intake to outcomes.",
  },
  {
    stat: "Secure",
    label: "Client Data",
    description: "Role-based access and encryption protect sensitive information.",
  },
  {
    stat: "Compliant",
    label: "Funder Reporting",
    description: "Meet government and funder reporting requirements every time.",
  },
  {
    stat: "30 min",
    label: "Setup Time",
    description: "Setup time depends on your data and workflow needs; ask Kindora about onboarding options.",
  },
];

const faqs = [
  {
    question: "What is social services case management software?",
    answer:
      "Social services case management software is a platform that helps agencies track client intake, manage service referrals, document case activities, monitor outcomes, and report to government and private funders — all from one secure system.",
  },
  {
    question: "Why do social services agencies need case management software?",
    answer:
      "Social services agencies need case management software to replace paper files and spreadsheets with a centralized system. This improves service coordination, ensures data security, enables outcome tracking, and provides the evidence funders require.",
  },
  {
    question: "How does Kindora help social services agencies?",
    answer:
      "Kindora provides a complete case management platform that tracks clients from intake through service delivery and outcomes. Case notes, referrals, and progress data are stored securely and connected to program reporting — giving agencies visibility into every client's journey.",
  },
  {
    question: "Is Kindora compliant with social services regulations?",
    answer:
      "Yes. Kindora provides role-based access controls, data encryption, audit trails, and compliance documentation to meet government and funder requirements for social services agencies.",
  },
  {
    question: "Can Kindora track referrals between agencies?",
    answer:
      "Yes. Kindora supports referral management — track referrals to partner agencies, monitor referral status, and ensure clients receive connected services across your network.",
  },
];

export default function SocialServicesCaseManagementPage() {
  return (
    <>
      <Script
        id="social-services-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-emerald-700">
                Social Services Case Management
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Social Services Case Management{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Software That Serves Communities
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Track client intake, manage service referrals, monitor outcomes,
              and report impact — all from one secure platform built for social
              services agencies serving vulnerable populations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Setup time varies by data and workflows" },
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "HIPAA-aligned security" },
              ].map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-emerald-600"
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
      <section className="py-12 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {benefit.stat}
                </div>
                <div className="text-sm font-semibold text-emerald-100 mb-1">
                  {benefit.label}
                </div>
                <div className="text-xs text-emerald-200">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Social Services Case Management */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
                Why Social Services Case Management Matters
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Your Clients Deserve Better Than Paper Files and Spreadsheets.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Social services agencies handle sensitive client information
                across multiple programs and funding streams. Paper files get
                lost, spreadsheets have errors, and disconnected systems make
                it impossible to see the full picture for each client.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Purpose-built <strong>social services case management</strong>{" "}
                software replaces this chaos with a secure, centralized platform
                where client intake, case notes, referrals, and outcomes live
                together — giving your team the tools to serve clients better
                while meeting every funder requirement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full transition-colors"
                >
                  See How It Works
                </Link>
                <Link
                  href="/kindora/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Client Case Dashboard
                  </h3>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                    24 Active Cases
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Housing Assistance", cases: 12, status: "Active", color: "bg-emerald-500" },
                    { name: "Behavioral Health", cases: 8, status: "Active", color: "bg-blue-500" },
                    { name: "Child Welfare", cases: 6, status: "Active", color: "bg-purple-500" },
                    { name: "Substance Abuse", cases: 4, status: "Active", color: "bg-amber-500" },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="text-sm font-semibold text-gray-900">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-gray-500">
                          {item.cases} cases
                        </span>
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 font-medium rounded-full">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              Who It&apos;s For
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for Every Type of Social Service
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From housing to behavioral health, Kindora adapts to the unique
              needs of social services agencies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-emerald-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
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
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              Core Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything Your Agency Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From intake to outcomes, Kindora gives social services agencies
              the tools to serve clients better.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-[#f8f9fa] rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-emerald-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
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
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about social services case management.
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
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full transition-colors"
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
            Ready to Transform Your Social Services Agency?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join agencies that trust Kindora&apos;s social services case
            management to track clients, manage referrals, and deliver better
            outcomes for the communities you serve.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
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
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-emerald-600 transition-colors"
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
            The Best Social Services Case Management Software for Agencies of
            Every Size
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kindora is the leading{" "}
            <Link
              href="/kindora/client-case-management-software"
              className="text-emerald-600 hover:underline"
            >
              client case management software
            </Link>{" "}
            and social services platform trusted by agencies nationwide. Our
            comprehensive{" "}
            <Link
              href="/kindora/features/client-management"
              className="text-emerald-600 hover:underline"
            >
              case management system
            </Link>{" "}
            tracks clients from intake through outcomes. Whether you need{" "}
            <Link
              href="/kindora/features/client-management"
              className="text-emerald-600 hover:underline"
            >
              referral management software
            </Link>
            ,{" "}
            <Link
              href="/kindora/features/reporting"
              className="text-emerald-600 hover:underline"
            >
              outcome tracking for social services
            </Link>
            , or{" "}
            <Link
              href="/kindora/grant-compliance-software"
              className="text-emerald-600 hover:underline"
            >
              funder compliance reporting
            </Link>
            , Kindora delivers enterprise-grade features at a price social
            services agencies can afford. Unlike generic databases or
            spreadsheets, our{" "}
            <strong>social services case management</strong> software is
            purpose-built for the unique needs of human services — with secure
            data handling, HIPAA-aligned controls, and impact reporting built
            in from day one.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/kindora"
              className="text-emerald-600 hover:underline font-medium"
            >
              Kindora Home →
            </Link>
            <Link
              href="/kindora/features"
              className="text-emerald-600 hover:underline font-medium"
            >
              All Features →
            </Link>
            <Link
              href="/kindora/pricing"
              className="text-emerald-600 hover:underline font-medium"
            >
              Pricing →
            </Link>
            <Link
              href="/kindora/contact"
              className="text-emerald-600 hover:underline font-medium"
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
