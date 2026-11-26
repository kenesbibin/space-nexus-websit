import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Donor Portal | Self-Service Donor Engagement",
  description:
    "Kindora donor portal gives your supporters a personalized self-service experience — view giving history, download tax receipts, manage recurring donations, and track their impact.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/donor-portal",
  },
  openGraph: {
    title: "Donor Portal",
    description:
      "A personalized self-service portal for donors to view giving history, download receipts, manage recurring gifts, and track their impact.",
    url: "https://spacenexus.net/kindora/donor-portal",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora Donor Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donor Portal",
    description:
      "Personalized self-service portal for donors to manage giving, view history, and track impact.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "donor portal",
    "donor self-service portal",
    "donor engagement portal",
    "donor giving portal",
    "online donor portal",
    "donor portal software",
    "donor portal platform",
    "donor portal nonprofit",
    "donor portal for donations",
    "donor portal login",
    "donor portal donation history",
    "recurring donation management",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Donor Portal",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Donor portal software — personalized self-service portal for donors to view giving history, download receipts, manage recurring gifts, and track their impact.",
      url: "https://spacenexus.net/kindora/donor-portal",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "Personalized donor dashboard",
        "Giving history & receipts",
        "Recurring donation management",
        "Impact tracking",
        "Tax receipt downloads",
        "Secure donor login",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a donor portal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A donor portal is a self-service web application that allows nonprofit donors to view their giving history, download tax receipts, manage recurring donations, and see the impact of their contributions — all without contacting your staff.",
          },
        },
        {
          "@type": "Question",
          name: "Why should my nonprofit offer a donor portal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A donor portal reduces administrative burden by letting donors self-serve common requests like receipt downloads and recurring gift changes. It also improves donor satisfaction and retention by providing transparency and easy access to their giving information.",
          },
        },
        {
          "@type": "Question",
          name: "What can donors do in the Kindora donor portal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Donors can view their complete giving history, download tax receipts, manage recurring donations, see the impact of their contributions, update their contact information, and make one-time or recurring gifts.",
          },
        },
        {
          "@type": "Question",
          name: "Is the donor portal secure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Kindora donor portal uses bank-grade encryption and secure authentication to protect donor information. Donors can only see their own giving data.",
          },
        },
        {
          "@type": "Question",
          name: "Can donors manage recurring donations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Donors can view, pause, update, or cancel their recurring donations directly from the portal — no need to call or email your team.",
          },
        },
        {
          "@type": "Question",
          name: "Can donors see the impact of their donations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The portal can display program updates, impact metrics, and stories showing how donations are making a difference — helping donors feel connected to your mission.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kindora affordable for small nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora is priced specifically for small to mid-sized nonprofits, offering enterprise-grade donor portal features at a price nonprofits can afford. A free Starter plan is available.",
          },
        },
      ],
    },
  ],
};

const portalFeatures = [
  {
    title: "Personalized Donor Dashboard",
    description:
      "Each donor sees a personalized view of their giving history, impact, and upcoming activities.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Giving History & Receipts",
    description:
      "Donors view their complete giving history and download tax receipts instantly — no emails or phone calls needed.",
    icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
  },
  {
    title: "Recurring Donation Management",
    description:
      "Donors can view, pause, update, or cancel their recurring donations without contacting your team.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Impact Tracking",
    description:
      "Show donors how their contributions make a difference with program updates, stories, and impact metrics.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Secure Donor Login",
    description:
      "Bank-grade encryption and secure authentication ensure donor data is protected at all times.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Self-Service Giving",
    description:
      "Donors can make one-time or recurring gifts directly from the portal — increasing convenience and revenue.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const benefits = [
  {
    title: "Reduce Admin Work",
    description:
      "Donors self-serve receipts, gift changes, and history lookups — freeing your team for mission-critical work.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Improve Donor Retention",
    description:
      "A transparent, easy-to-use portal keeps donors engaged and more likely to give again.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Increase Transparency",
    description:
      "Show donors exactly where their money goes with impact tracking and program updates.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Set Up",
    description:
      "Launch your branded donor portal in minutes. Customize colors, logo, and content.",
  },
  {
    step: "02",
    title: "Invite",
    description:
      "Send donors a link to access their personalized portal. No app download required.",
  },
  {
    step: "03",
    title: "Engage",
    description:
      "Donors view history, download receipts, manage gifts, and see their impact.",
  },
  {
    step: "04",
    title: "Grow",
    description:
      "Better donor experiences lead to higher retention, more recurring gifts, and increased revenue.",
  },
];

const faqs = [
  {
    question: "What is a donor portal?",
    answer:
      "A donor portal is a self-service web application that allows nonprofit donors to view their giving history, download tax receipts, manage recurring donations, and see the impact of their contributions — all without contacting your staff.",
  },
  {
    question: "Why should my nonprofit offer a donor portal?",
    answer:
      "A donor portal reduces administrative burden by letting donors self-serve common requests like receipt downloads and recurring gift changes. It also improves donor satisfaction and retention by providing transparency and easy access to their giving information.",
  },
  {
    question: "What can donors do in the Kindora donor portal?",
    answer:
      "Donors can view their complete giving history, download tax receipts, manage recurring donations, see the impact of their contributions, update their contact information, and make one-time or recurring gifts.",
  },
  {
    question: "Is the donor portal secure?",
    answer:
      "Yes. The Kindora donor portal uses bank-grade encryption and secure authentication to protect donor information. Donors can only see their own giving data.",
  },
  {
    question: "Can donors manage recurring donations?",
    answer:
      "Yes. Donors can view, pause, update, or cancel their recurring donations directly from the portal — no need to call or email your team.",
  },
  {
    question: "Can donors see the impact of their donations?",
    answer:
      "Yes. The portal can display program updates, impact metrics, and stories showing how donations are making a difference — helping donors feel connected to your mission.",
  },
  {
    question: "Is Kindora affordable for small nonprofits?",
    answer:
      "Yes. Kindora is priced specifically for small to mid-sized nonprofits, offering enterprise-grade donor portal features at a price nonprofits can afford. A free Starter plan is available.",
  },
];

export default function DonorPortalPage() {
  return (
    <>
      <Script
        id="donor-portal-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-violet-600">
                  Donor Portal Software
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Give Donors the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">
                  Experience
                </span>{" "}
                They Deserve
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Launch a branded self-service donor portal where supporters
                view giving history, download receipts, manage recurring gifts,
                and track their impact — reducing your admin work and increasing
                donor satisfaction.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-600 hover:from-purple-600 hover:to-violet-700 rounded-full shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request a Demo
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
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Try for Free
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                {[
                  "No credit card required",
                  "Setup time varies by data and workflows",
                  "See current plan terms on the pricing page",
                ].map((text) => (
                  <span key={text} className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-green-500"
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
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Visual - Donor Portal Preview */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      Donor Portal
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-violet-100 text-violet-700 text-xs font-medium rounded-full">
                    Welcome, Sarah
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Total Given", value: "$4,250" },
                    { label: "Tax Receipts", value: "3 ready" },
                    { label: "Impact Score", value: "High" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center"
                    >
                      <p className="text-lg font-bold text-gray-900">
                        {s.value}
                      </p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Quick Actions
                  </p>
                  {[
                    {
                      name: "Download 2025 Tax Receipt",
                      action: "Download",
                      color: "text-violet-500",
                    },
                    {
                      name: "View Recurring Gift",
                      action: "Manage",
                      color: "text-violet-500",
                    },
                    {
                      name: "See Your Impact",
                      action: "View",
                      color: "text-violet-500",
                    },
                  ].map((r) => (
                    <div
                      key={r.name}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-violet-400" />
                        <span className="text-sm font-semibold text-gray-900">
                          {r.name}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-semibold ${r.color} cursor-pointer hover:underline`}
                      >
                        {r.action}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-500 uppercase tracking-wider mb-3">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything donors need, nothing they don&apos;t
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A clean, intuitive portal that makes donors feel valued and
              empowered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portalFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-violet-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5 text-violet-500 group-hover:text-white transition-colors"
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
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-500 uppercase tracking-wider mb-3">
              Benefits
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why nonprofits love the donor portal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A donor portal isn&apos;t just good for donors — it transforms
              your operations too.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-violet-500/10 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-violet-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={benefit.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-500 uppercase tracking-wider mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Launch your donor portal in minutes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No developers needed. Get your branded portal live quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {workflowSteps.map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-violet-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-violet-500 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about donor portal software.
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
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to delight your donors?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Launch a branded donor portal that reduces admin work, increases
            transparency, and keeps donors coming back.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-600 hover:from-purple-600 hover:to-violet-700 rounded-full shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300"
            >
              Get Started Today
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
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-violet-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-violet-500 bg-violet-50 hover:bg-violet-100 rounded-full transition-all duration-300"
            >
              Try for Free
            </a>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
