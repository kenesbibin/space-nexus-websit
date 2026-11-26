import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Program Outcome Tracking Software | Measure Your Impact",
  description:
    "Program outcome tracking software for nonprofits — define outcomes, track participant progress, measure program effectiveness, and report impact to funders.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/solutions/program-outcome-tracking",
  },
  openGraph: {
    title: "Program Outcome Tracking",
    description:
      "Define outcomes, track participant progress, measure program effectiveness, and report impact — all from one unified platform.",
    url: "https://spacenexus.net/kindora/solutions/program-outcome-tracking",
    siteName: "Kindora by SpaceNexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Program Outcome Tracking — Kindora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Program Outcome Tracking",
    description:
      "Program outcome tracking software. Define outcomes, track progress, and measure impact.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "program outcome tracking",
    "outcome tracking software",
    "program outcome measurement",
    "nonprofit outcome tracking",
    "program impact tracking",
    "outcome measurement software",
    "program effectiveness tracking",
    "nonprofit impact measurement",
    "outcome reporting software",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Program Outcome Tracking",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Program outcome tracking software for nonprofits — define outcomes, track participant progress, measure program effectiveness, and report impact.",
      url: "https://spacenexus.net/kindora/solutions/program-outcome-tracking",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "Outcome Definition & Frameworks",
        "Participant Progress Tracking",
        "Real-Time Outcome Dashboards",
        "Pre/Post Assessments",
        "Impact Analytics",
        "Funder Outcome Reports",
        "Custom Outcome Metrics",
        "Outcome Trend Analysis",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is program outcome tracking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Program outcome tracking is the process of defining, measuring, and reporting on the specific changes or results your programs create for participants. It goes beyond counting activities to demonstrate real impact.",
          },
        },
        {
          "@type": "Question",
          name: "Why is outcome tracking important for nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Outcome tracking is critical because funders increasingly require evidence of impact, not just activity counts. It helps organizations understand what's working, improve programs, and make data-driven decisions about resource allocation.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between outputs and outcomes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Outputs are the activities you perform (e.g., 'served 500 meals'), while outcomes are the changes those activities create (e.g., '85% of clients reported improved food security'). Funders care most about outcomes.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kindora help with outcome tracking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora provides tools to define outcome frameworks, collect outcome data through assessments and surveys, track participant progress over time, visualize results in real-time dashboards, and generate funder-ready outcome reports.",
          },
        },
        {
          "@type": "Question",
          name: "Can Kindora track outcomes across multiple programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora supports outcome tracking across unlimited programs. Define unique outcomes for each program while also viewing organization-wide impact metrics.",
          },
        },
      ],
    },
  ],
};

const features = [
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    title: "Outcome Frameworks",
    description:
      "Define custom outcome frameworks for each program. Set targets, timelines, and measurement methods.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Participant Tracking",
    description:
      "Track individual participant progress toward outcomes. See who's meeting targets and who needs support.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Real-Time Dashboards",
    description:
      "See outcome progress in real time. Visual dashboards show trends, comparisons, and program effectiveness.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    title: "Pre/Post Assessments",
    description:
      "Design pre and post assessments to measure change. Compare baseline data to program completion outcomes.",
  },
  {
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
    title: "Impact Analytics",
    description:
      "Deep analytics reveal what's working, what's not, and where to focus resources for maximum impact.",
  },
  {
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Funder Reports",
    description:
      "Generate outcome reports that funders want. Pull data automatically and create compelling impact narratives.",
  },
];

const outcomeTypes = [
  {
    title: "Knowledge & Awareness Outcomes",
    description: "Measure changes in knowledge, awareness, skills, or attitudes among program participants.",
    examples: ["Pre/post knowledge assessments", "Skill proficiency tests", "Attitude surveys"],
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Behavior & Action Outcomes",
    description: "Track changes in behavior, actions, or practices that result from program participation.",
    examples: ["Behavior change surveys", "Action tracking", "Practice implementation"],
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Condition & Status Outcomes",
    description: "Measure improvements in living conditions, health status, or economic circumstances.",
    examples: ["Health status indicators", "Housing stability metrics", "Employment status"],
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Community-Level Outcomes",
    description: "Track broader community impact — policy changes, system improvements, or community capacity.",
    examples: ["Community surveys", "System change indicators", "Capacity assessments"],
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const benefits = [
  {
    stat: "Data-Driven",
    label: "Program Decisions",
    description: "Use outcome data to improve programs and allocate resources effectively.",
  },
  {
    stat: "Funder",
    label: "Ready Reports",
    description: "Generate outcome reports that demonstrate impact and secure future funding.",
  },
  {
    stat: "Real-Time",
    label: "Impact Visibility",
    description: "See outcome progress as it happens — not months after the fact.",
  },
  {
    stat: "30 min",
    label: "Setup Time",
    description: "Setup time depends on your data and workflow needs; ask Kindora about onboarding options.",
  },
];

const faqs = [
  {
    question: "What is program outcome tracking?",
    answer:
      "Program outcome tracking is the process of defining, measuring, and reporting on the specific changes or results your programs create for participants. It goes beyond counting activities to demonstrate real impact.",
  },
  {
    question: "Why is outcome tracking important for nonprofits?",
    answer:
      "Outcome tracking is critical because funders increasingly require evidence of impact, not just activity counts. It helps organizations understand what's working, improve programs, and make data-driven decisions about resource allocation.",
  },
  {
    question: "What is the difference between outputs and outcomes?",
    answer:
      "Outputs are the activities you perform (e.g., 'served 500 meals'), while outcomes are the changes those activities create (e.g., '85% of clients reported improved food security'). Funders care most about outcomes.",
  },
  {
    question: "How does Kindora help with outcome tracking?",
    answer:
      "Kindora provides tools to define outcome frameworks, collect outcome data through assessments and surveys, track participant progress over time, visualize results in real-time dashboards, and generate funder-ready outcome reports.",
  },
  {
    question: "Can Kindora track outcomes across multiple programs?",
    answer:
      "Yes. Kindora supports outcome tracking across unlimited programs. Define unique outcomes for each program while also viewing organization-wide impact metrics.",
  },
];

export default function ProgramOutcomeTrackingSolutionPage() {
  return (
    <>
      <Script
        id="outcome-tracking-solution-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-100 border border-green-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-green-700">
                Program Outcome Tracking
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Program Outcome Tracking{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                That Proves Your Impact
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Define outcomes, track participant progress, measure program
              effectiveness, and report impact — all from one unified platform
              that makes outcome tracking effortless.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-full shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
                href="/kindora/features/reporting"
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
                    className="w-4 h-4 text-green-600"
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
      <section className="py-12 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {benefit.stat}
                </div>
                <div className="text-sm font-semibold text-green-100 mb-1">
                  {benefit.label}
                </div>
                <div className="text-xs text-green-200">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Outcome Tracking */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">
                Why Outcome Tracking Matters
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Funders Don&apos;t Want Activity Counts. They Want Impact.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Most nonprofits can tell you how many people they served. But
                funders increasingly want to know what changed as a result. Did
                participants get healthier? Did students improve? Did families
                achieve stability?
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Purpose-built <strong>program outcome tracking</strong> software
                replaces activity counting with genuine impact measurement. It
                helps you define what success looks like, collect the data to
                prove it, and report it in ways that strengthen your case for
                continued funding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-full transition-colors"
                >
                  See How It Works
                </Link>
                <Link
                  href="/kindora/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Outcome Dashboard
                  </h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    Real-Time
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    { outcome: "Improved Food Security", target: "85%", actual: "91%", status: "Exceeded" },
                    { outcome: "Housing Stability", target: "80%", actual: "78%", status: "On Track" },
                    { outcome: "Employment Placement", target: "70%", actual: "73%", status: "Exceeded" },
                    { outcome: "Health Improvement", target: "75%", actual: "82%", status: "Exceeded" },
                  ].map((item) => (
                    <div
                      key={item.outcome}
                      className="p-3 rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-900">
                          {item.outcome}
                        </span>
                        <span
                          className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                            item.status === "Exceeded"
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>Target: {item.target}</span>
                        <span>•</span>
                        <span className="font-semibold text-green-600">
                          Actual: {item.actual}
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

      {/* Outcome Types */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">
              Types of Outcomes
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Track Every Type of Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From knowledge gains to community-level change, Kindora supports
              outcome tracking across all impact dimensions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {outcomeTypes.map((type, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-green-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
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
                      d={type.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {type.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {type.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((example, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">
              Core Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powerful Outcome Tracking Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to define, collect, analyze, and report on
              program outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-[#f8f9fa] rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-green-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
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
            <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about program outcome tracking.
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
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-full transition-colors"
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
            Ready to Prove Your Program Impact?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join organizations that trust Kindora&apos;s outcome tracking to
            demonstrate impact, secure funding, and improve programs through
            data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-full shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300"
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
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-green-600 transition-colors"
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
            The Best Program Outcome Tracking Software for Nonprofits
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kindora is the leading{" "}
            <Link
              href="/kindora/solutions/program-management-software"
              className="text-green-600 hover:underline"
            >
              program management software
            </Link>{" "}
            and outcome tracking platform trusted by nonprofits nationwide. Our
            comprehensive{" "}
            <Link
              href="/kindora/features/reporting"
              className="text-green-600 hover:underline"
            >
              impact measurement tools
            </Link>{" "}
            help organizations define outcomes, collect data, and demonstrate
            impact. Whether you need{" "}
            <Link
              href="/kindora/solutions/program-outcome-tracking"
              className="text-green-600 hover:underline"
            >
              pre/post assessments
            </Link>
            ,{" "}
            <Link
              href="/kindora/features/reporting"
              className="text-green-600 hover:underline"
            >
              outcome dashboards
            </Link>
            , or{" "}
            <Link
              href="/kindora/grant-reporting-software"
              className="text-green-600 hover:underline"
            >
              funder outcome reports
            </Link>
            , Kindora delivers enterprise-grade features at a price nonprofits
            can afford. Unlike generic survey tools or spreadsheets, our{" "}
            <strong>program outcome tracking</strong> is purpose-built for
            nonprofits — with outcome frameworks, participant tracking, and
            impact analytics built in from day one.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/kindora"
              className="text-green-600 hover:underline font-medium"
            >
              Kindora Home →
            </Link>
            <Link
              href="/kindora/features"
              className="text-green-600 hover:underline font-medium"
            >
              All Features →
            </Link>
            <Link
              href="/kindora/pricing"
              className="text-green-600 hover:underline font-medium"
            >
              Pricing →
            </Link>
            <Link
              href="/kindora/contact"
              className="text-green-600 hover:underline font-medium"
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
