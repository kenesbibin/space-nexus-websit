import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Grant Lifecycle Management | End-to-End Grant Management",
  description:
    "Complete grant lifecycle management for nonprofits — from discovery and application through award, reporting, and closeout. Track every stage in one platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/grant-lifecycle-management",
  },
  openGraph: {
    title: "Grant Lifecycle Management",
    description:
      "Manage every stage of the grant lifecycle — discovery, application, award, reporting, and closeout — from one unified platform.",
    url: "https://spacenexus.net/kindora/grant-lifecycle-management",
    siteName: "Kindora by SpaceNexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Grant Lifecycle Management — Kindora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grant Lifecycle Management",
    description:
      "Complete grant lifecycle management. From discovery to closeout — track every stage in one platform.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "grant lifecycle management",
    "grant lifecycle",
    "grant lifecycle software",
    "grant lifecycle tracking",
    "end-to-end grant management",
    "grant management lifecycle",
    "grant pipeline management",
    "grant workflow management",
    "grant process management",
    "nonprofit grant lifecycle",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Grant Lifecycle Management",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Complete grant lifecycle management for nonprofits — from discovery and application through award, reporting, and closeout. Track every stage in one platform.",
      url: "https://spacenexus.net/kindora/grant-lifecycle-management",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "Grant Discovery & Pipeline",
        "Application Management",
        "Award Tracking",
        "Budget & Compliance Management",
        "Reporting & Closeout",
        "Funder Relationship Tracking",
        "Team Collaboration",
        "Automated Workflows",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is grant lifecycle management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Grant lifecycle management is the end-to-end process of managing grants from initial discovery through application, award, reporting, and closeout. It involves tracking every stage of each grant to ensure compliance, maximize funding, and maintain strong funder relationships.",
          },
        },
        {
          "@type": "Question",
          name: "What are the stages of the grant lifecycle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The grant lifecycle typically includes five stages: 1) Discovery — finding and evaluating grant opportunities, 2) Application — preparing and submitting proposals, 3) Award — managing the award agreement and initial setup, 4) Management — tracking deliverables, budgets, and compliance, and 5) Closeout — submitting final reports and closing the grant.",
          },
        },
        {
          "@type": "Question",
          name: "Why is grant lifecycle management important?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Effective grant lifecycle management ensures nonprofits meet all funder requirements, stay compliant with grant conditions, maximize their grant funding, and build strong relationships with funders. Poor lifecycle management leads to missed deadlines, compliance issues, and lost funding opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kindora support grant lifecycle management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora provides a complete grant management platform that tracks every stage of the lifecycle — from prospecting new opportunities through final closeout. Each grant has its own pipeline status, documents, budget tracking, compliance requirements, and reporting schedule — all connected in one system.",
          },
        },
        {
          "@type": "Question",
          name: "Can Kindora manage multiple grants at different stages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora's pipeline view shows all your grants at every stage — prospecting, applied, pending, awarded, active, and closed. You can filter by stage, track deadlines across your entire portfolio, and manage each grant independently.",
          },
        },
      ],
    },
  ],
};

const stages = [
  {
    step: "01",
    title: "Discover",
    description:
      "Find and evaluate grant opportunities that align with your mission and capacity.",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    tasks: [
      "Research funding sources",
      "Evaluate eligibility criteria",
      "Assess alignment with mission",
      "Track application deadlines",
    ],
  },
  {
    step: "02",
    title: "Apply",
    description:
      "Prepare compelling proposals and submit complete applications on time.",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    tasks: [
      "Create application narratives",
      "Build budgets and budgets",
      "Attach required documents",
      "Submit before deadline",
    ],
  },
  {
    step: "03",
    title: "Award",
    description:
      "Manage the award agreement, set up tracking, and begin implementation.",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    tasks: [
      "Review award terms",
      "Set up grant tracking",
      "Assign team responsibilities",
      "Establish budget controls",
    ],
  },
  {
    step: "04",
    title: "Manage",
    description:
      "Track deliverables, monitor budgets, and maintain compliance throughout.",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    tasks: [
      "Track program deliverables",
      "Monitor budget vs actuals",
      "Maintain compliance",
      "Document outcomes and impact",
    ],
  },
  {
    step: "05",
    title: "Report",
    description:
      "Generate progress reports and submit to funders on schedule.",
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
    tasks: [
      "Generate progress reports",
      "Submit financial statements",
      "Document program outcomes",
      "Maintain audit trail",
    ],
  },
  {
    step: "06",
    title: "Close",
    description:
      "Complete final reporting and close out the grant successfully.",
    color: "from-cyan-500 to-sky-600",
    bgColor: "bg-cyan-50",
    tasks: [
      "Submit final reports",
      "Complete financial reconciliation",
      "Document lessons learned",
      "Archive grant records",
    ],
  },
];

const features = [
  {
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    title: "Grant Discovery",
    description:
      "Find and track grant opportunities that match your mission, location, and funding needs.",
  },
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    title: "Pipeline Visibility",
    description:
      "See every grant at a glance — from prospect to awarded to closed. Know where every grant stands.",
  },
  {
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Deadline Management",
    description:
      "Automated reminders and a shared calendar ensure you never miss a reporting or application deadline.",
  },
  {
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Budget Tracking",
    description:
      "Set budgets per grant, track actual expenses, and view remaining funds in real time.",
  },
  {
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Automated Reporting",
    description:
      "Generate funder reports with one click. Pull financial and outcome data from across Kindora.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Funder Relationships",
    description:
      "Track funder history, past awards, and communications to strengthen your funding pipeline.",
  },
];

const benefits = [
  {
    stat: "Full",
    label: "Lifecycle Coverage",
    description: "From first prospect to final closeout — nothing falls through the cracks.",
  },
  {
    stat: "Zero",
    label: "Missed Deadlines",
    description: "Automated reminders keep your entire team on track.",
  },
  {
    stat: "10x",
    label: "Faster Workflows",
    description: "Automated data pulling and one-click reports save hours every week.",
  },
  {
    stat: "30 min",
    label: "Setup Time",
    description: "Setup time depends on your data and workflow needs; ask Kindora about onboarding options.",
  },
];

const faqs = [
  {
    question: "What is grant lifecycle management?",
    answer:
      "Grant lifecycle management is the end-to-end process of managing grants from initial discovery through application, award, reporting, and closeout. It involves tracking every stage of each grant to ensure compliance, maximize funding, and maintain strong funder relationships.",
  },
  {
    question: "What are the stages of the grant lifecycle?",
    answer:
      "The grant lifecycle typically includes five stages: 1) Discovery — finding and evaluating grant opportunities, 2) Application — preparing and submitting proposals, 3) Award — managing the award agreement and initial setup, 4) Management — tracking deliverables, budgets, and compliance, and 5) Closeout — submitting final reports and closing the grant.",
  },
  {
    question: "Why is grant lifecycle management important?",
    answer:
      "Effective grant lifecycle management ensures nonprofits meet all funder requirements, stay compliant with grant conditions, maximize their grant funding, and build strong relationships with funders. Poor lifecycle management leads to missed deadlines, compliance issues, and lost funding opportunities.",
  },
  {
    question: "How does Kindora support grant lifecycle management?",
    answer:
      "Kindora provides a complete grant management platform that tracks every stage of the lifecycle — from prospecting new opportunities through final closeout. Each grant has its own pipeline status, documents, budget tracking, compliance requirements, and reporting schedule — all connected in one system.",
  },
  {
    question: "Can Kindora manage multiple grants at different stages?",
    answer:
      "Yes. Kindora's pipeline view shows all your grants at every stage — prospecting, applied, pending, awarded, active, and closed. You can filter by stage, track deadlines across your entire portfolio, and manage each grant independently.",
  },
];

export default function GrantLifecycleManagementPage() {
  return (
    <>
      <Script
        id="grant-lifecycle-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-100 border border-teal-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-teal-700">
                Grant Lifecycle Management
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Grant Lifecycle Management
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              From discovery and application through award, reporting, and
              closeout — manage every stage of the grant lifecycle in one
              unified platform. Never lose a grant to poor process again.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 rounded-full shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
                href="/kindora/features/grant-management"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              {[
                { icon: "M5 13l4 4L19 7", label: "No credit card required" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Setup time varies by data and workflows" },
                { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Built for nonprofits" },
              ].map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-teal-600"
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
      <section className="py-12 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {benefit.stat}
                </div>
                <div className="text-sm font-semibold text-teal-100 mb-1">
                  {benefit.label}
                </div>
                <div className="text-xs text-teal-200">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle Stages */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              The Grant Lifecycle
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              From Discovery to Closeout — 6 Stages, One Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kindora tracks every stage of your grant lifecycle so nothing
              falls through the cracks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, i) => (
              <div
                key={i}
                className={`relative ${stage.bgColor} rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl transition-all duration-300`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stage.color} flex items-center justify-center text-white text-lg font-bold mb-4`}
                >
                  {stage.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {stage.description}
                </p>
                <ul className="space-y-2">
                  {stage.tasks.map((task, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-teal-500 flex-shrink-0"
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
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Core Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tools for Every Stage of the Lifecycle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From pipeline visibility to automated reporting, Kindora gives you
              complete control over your grant portfolio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-teal-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 mb-4 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
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
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about grant lifecycle management.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-[#f8f9fa] border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-100 transition-colors">
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
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Master the Grant Lifecycle?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join organizations that trust Kindora to manage their entire grant
            portfolio — from first discovery to final closeout.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 rounded-full shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300"
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
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-teal-600 transition-colors"
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
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Complete Grant Lifecycle Management Platform for Nonprofits
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kindora is the leading{" "}
            <Link
              href="/kindora/features/grant-management"
              className="text-teal-600 hover:underline"
            >
              grant management software
            </Link>{" "}
            and grant lifecycle management platform trusted by nonprofits
            nationwide. Our comprehensive{" "}
            <Link
              href="/kindora/grant-tracking-software"
              className="text-teal-600 hover:underline"
            >
              grant tracking software
            </Link>{" "}
            provides full visibility into every stage of the lifecycle. Whether
            you need{" "}
            <Link
              href="/kindora/grant-reporting-software"
              className="text-teal-600 hover:underline"
            >
              automated grant reporting
            </Link>
            ,{" "}
            <Link
              href="/kindora/features/financial-management"
              className="text-teal-600 hover:underline"
            >
              grant budget management
            </Link>
            , or{" "}
            <Link
              href="/kindora/features/donor-management"
              className="text-teal-600 hover:underline"
            >
              funder relationship tracking
            </Link>
            , Kindora delivers enterprise-grade features at a price nonprofits
            can afford. Unlike spreadsheets or generic project management tools,
            our{" "}
            <strong>grant lifecycle management</strong> platform is
            purpose-built for nonprofits — with pipeline visibility, automated
            compliance tracking, and one-click reporting built in from day one.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/kindora"
              className="text-teal-600 hover:underline font-medium"
            >
              Kindora Home →
            </Link>
            <Link
              href="/kindora/features"
              className="text-teal-600 hover:underline font-medium"
            >
              All Features →
            </Link>
            <Link
              href="/kindora/pricing"
              className="text-teal-600 hover:underline font-medium"
            >
              Pricing →
            </Link>
            <Link
              href="/kindora/contact"
              className="text-teal-600 hover:underline font-medium"
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
