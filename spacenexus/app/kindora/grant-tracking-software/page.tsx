import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Grant Tracking Software | Track Every Grant",
  description:
    "Grant tracking software for nonprofits — track applications, manage deadlines, monitor budgets, and report on every grant from one unified platform. Try free.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/grant-tracking-software",
  },
  openGraph: {
    title: "Grant Tracking Software",
    description:
      "Track every grant from application to closeout. Manage deadlines, monitor budgets, and automate compliance reporting.",
    url: "https://spacenexus.net/kindora/grant-tracking-software",
    siteName: "Kindora by SpaceNexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Grant Tracking Software — Kindora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grant Tracking Software",
    description:
      "Track every grant from application to closeout. Manage deadlines, monitor budgets, and automate compliance reporting.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "grant tracking software",
    "grant tracking",
    "grant tracking system",
    "grant tracker",
    "grant deadline tracker",
    "grant application tracker",
    "grant budget tracker",
    "nonprofit grant tracking",
    "grant tracking tool",
    "grant monitoring software",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Grant Tracking Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Grant tracking software for nonprofits — track applications, manage deadlines, monitor budgets, and report on every grant from one unified platform.",
      url: "https://spacenexus.net/kindora/grant-tracking-software",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "Grant Application Tracking",
        "Deadline Management",
        "Budget Monitoring",
        "Compliance Tracking",
        "Automated Reports",
        "Funder Database",
        "Team Collaboration",
        "Pipeline Dashboard",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is grant tracking software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Grant tracking software is a specialized platform that helps nonprofits monitor the status of every grant application, track deadlines, manage budgets, and ensure compliance requirements are met throughout the grant lifecycle.",
          },
        },
        {
          "@type": "Question",
          name: "Why do nonprofits need grant tracking software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nonprofits need grant tracking software to avoid missed deadlines, stay on top of multiple simultaneous applications, monitor grant budgets vs actuals, and ensure compliance with funder requirements. Manual spreadsheets can't keep up with complex grant portfolios.",
          },
        },
        {
          "@type": "Question",
          name: "How does grant tracking software work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Grant tracking software centralizes all grant information in one platform. You enter grant details once, and the software tracks deadlines, budgets, deliverables, and compliance requirements. Dashboards give you visibility into your entire grant pipeline at a glance.",
          },
        },
        {
          "@type": "Question",
          name: "Can Kindora track multiple grants at once?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora provides a pipeline view of all your grants — active applications, pending decisions, awarded grants, and closed grants. Each grant has its own detailed record with documents, budgets, tasks, and reporting deadlines.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora track grant budgets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora lets you set budgets per grant, track actual expenses against budget, and view remaining funds. Budget vs. actual reports help you stay on track and prepare accurate financial reports for funders.",
          },
        },
      ],
    },
  ],
};

const features = [
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    title: "Pipeline Dashboard",
    description:
      "See every grant at a glance — from application to award to closeout. Know exactly where each grant stands.",
  },
  {
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Deadline Tracking",
    description:
      "Never miss a deadline. Automated reminders and a shared calendar keep your entire team on track.",
  },
  {
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Budget Monitoring",
    description:
      "Track grant budgets in real time. Compare planned vs actual spending and see remaining funds at a glance.",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Compliance Tracking",
    description:
      "Track grant conditions, reporting requirements, and compliance deadlines. Stay funder-ready at all times.",
  },
  {
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Automated Reports",
    description:
      "Generate grant reports with one click. Pull financials, outcomes, and impact data from across Kindora.",
  },
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "Funder Database",
    description:
      "Maintain a searchable database of funders, past awards, and relationships — all linked to your grants.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Team Collaboration",
    description:
      "Collaborate on applications, share documents, assign tasks, and track progress across your team.",
  },
];

const benefits = [
  {
    stat: "Zero",
    label: "Missed Deadlines",
    description: "Automated reminders ensure you never miss a reporting date.",
  },
  {
    stat: "Real-Time",
    label: "Budget Visibility",
    description: "Track spending against every grant budget as it happens.",
  },
  {
    stat: "One-Click",
    label: "Grant Reports",
    description: "Generate compliance and financial reports in seconds.",
  },
  {
    stat: "30 min",
    label: "Setup Time",
    description: "Setup time depends on your data and workflow needs; ask Kindora about onboarding options.",
  },
];

const faqs = [
  {
    question: "What is grant tracking software?",
    answer:
      "Grant tracking software is a specialized platform that helps nonprofits monitor the status of every grant application, track deadlines, manage budgets, and ensure compliance requirements are met throughout the grant lifecycle.",
  },
  {
    question: "Why do nonprofits need grant tracking software?",
    answer:
      "Nonprofits need grant tracking software to avoid missed deadlines, stay on top of multiple simultaneous applications, monitor grant budgets vs actuals, and ensure compliance with funder requirements. Manual spreadsheets can't keep up with complex grant portfolios.",
  },
  {
    question: "How does grant tracking software work?",
    answer:
      "Grant tracking software centralizes all grant information in one platform. You enter grant details once, and the software tracks deadlines, budgets, deliverables, and compliance requirements. Dashboards give you visibility into your entire grant pipeline at a glance.",
  },
  {
    question: "Can Kindora track multiple grants at once?",
    answer:
      "Yes. Kindora provides a pipeline view of all your grants — active applications, pending decisions, awarded grants, and closed grants. Each grant has its own detailed record with documents, budgets, tasks, and reporting deadlines.",
  },
  {
    question: "Does Kindora track grant budgets?",
    answer:
      "Yes. Kindora lets you set budgets per grant, track actual expenses against budget, and view remaining funds. Budget vs. actual reports help you stay on track and prepare accurate financial reports for funders.",
  },
];

export default function GrantTrackingSoftwarePage() {
  return (
    <>
      <Script
        id="grant-tracking-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-indigo-700">
                Grant Tracking Software
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Grant Tracking Software{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                That Never Lets You Miss a Deadline
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Track every grant from application to closeout. Manage deadlines,
              monitor budgets, automate compliance reporting, and stay
              funder-ready — all from one unified platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
                    className="w-4 h-4 text-indigo-600"
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

          {/* Dashboard Preview */}
          <div className="mt-16 lg:mt-24 relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-indigo-100/60 via-purple-50/40 to-pink-100/40 rounded-[3rem] blur-2xl -z-10" />
            <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-gray-200 p-8 max-w-5xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    Grant Pipeline
                  </span>
                </div>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                  2026 Active
                </span>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Applications", value: "12", color: "bg-amber-500" },
                  { label: "Pending", value: "6", color: "bg-blue-500" },
                  { label: "Awarded", value: "18", color: "bg-green-500" },
                  { label: "Total Value", value: "$3.2M", color: "bg-indigo-500" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-center"
                  >
                    <div className={`w-2 h-2 rounded-full ${s.color} mx-auto mb-2`} />
                    <p className="text-lg font-bold text-gray-900">{s.value}</p>
                    <p className="text-xs text-gray-500">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Upcoming Deadlines
                </p>
                {[
                  { grant: "Community Health Fund", due: "Jul 15, 2026", type: "Report", status: "On Track" },
                  { grant: "Education Equity Grant", due: "Aug 1, 2026", type: "Application", status: "In Progress" },
                  { grant: "Youth Development Program", due: "Aug 20, 2026", type: "Report", status: "On Track" },
                  { grant: "Housing Assistance Fund", due: "Sep 5, 2026", type: "Budget", status: "Review" },
                ].map((d) => (
                  <div
                    key={d.grant}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-400" />
                      <span className="text-sm font-semibold text-gray-900">
                        {d.grant}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-gray-500">{d.type}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full font-medium ${
                          d.status === "On Track"
                            ? "bg-green-100 text-green-700"
                            : d.status === "In Progress"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {d.status}
                      </span>
                      <span className="text-gray-400">{d.due}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {benefit.stat}
                </div>
                <div className="text-sm font-semibold text-indigo-100 mb-1">
                  {benefit.label}
                </div>
                <div className="text-xs text-indigo-200">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Grant Tracking Software */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
                Why Grant Tracking Matters
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Stop Losing Grants to Missed Deadlines and Lost Spreadsheets.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Most nonprofits track grants in spreadsheets that quickly become
                outdated. Deadlines slip through cracks, budgets get mismanaged,
                and compliance reports take hours to compile.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Purpose-built <strong>grant tracking software</strong> replaces
                this chaos with real-time visibility into every grant — from
                application status to budget health to upcoming deadlines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors"
                >
                  See How It Works
                </Link>
                <Link
                  href="/kindora/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="space-y-4">
                  {[
                    { label: "Deadline Compliance", progress: "100%", color: "bg-indigo-500", width: "100%" },
                    { label: "Budget Accuracy", progress: "96%", color: "bg-purple-500", width: "96%" },
                    { label: "Report Completion", progress: "94%", color: "bg-blue-500", width: "94%" },
                    { label: "Grant Success Rate", progress: "78%", color: "bg-green-500", width: "78%" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-700">
                          {item.label}
                        </span>
                        <span className="text-gray-500">{item.progress}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5">
                        <div
                          className={`${item.color} h-2.5 rounded-full`}
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-gray-900">36</div>
                    <div className="text-xs text-gray-500">Grants Tracked</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">$3.2M</div>
                    <div className="text-xs text-gray-500">Total Value</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">0</div>
                    <div className="text-xs text-gray-500">Missed Deadlines</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
              Core Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Every Tool to Track Your Grants
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From pipeline visibility to compliance tracking, Kindora&apos;s
              grant tracking software gives you complete control over your
              grant portfolio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-indigo-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
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

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Track Every Grant in 4 Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple workflow to keep your entire grant portfolio organized
              and on track.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Add Your Grants",
                description:
                  "Enter grant details, set budgets, and assign deadlines. Import existing grants from spreadsheets.",
              },
              {
                step: "02",
                title: "Track Progress",
                description:
                  "Monitor application status, budget health, and deliverable completion in real time.",
              },
              {
                step: "03",
                title: "Get Reminders",
                description:
                  "Automated reminders alert you before deadlines — for applications, reports, and budgets.",
              },
              {
                step: "04",
                title: "Report & Close",
                description:
                  "Generate compliance reports with one click and close out grants with confidence.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-indigo-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about grant tracking software.
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
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors"
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
            Ready to Never Miss a Grant Deadline Again?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join organizations that trust Kindora&apos;s grant tracking
            software to manage their entire grant portfolio — from application
            to closeout.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
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
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
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
            The Best Grant Tracking Software for Nonprofits of Every Size
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kindora is the leading{" "}
            <Link
              href="/kindora/features/grant-management"
              className="text-indigo-600 hover:underline"
            >
              grant management software
            </Link>{" "}
            and grant tracking platform trusted by nonprofits nationwide. Our
            comprehensive{" "}
            <Link
              href="/kindora/features/donor-management"
              className="text-indigo-600 hover:underline"
            >
              donor management software
            </Link>{" "}
            connects your grant data with donor relationships for complete
            visibility. Whether you need{" "}
            <Link
              href="/kindora/features/grant-management"
              className="text-indigo-600 hover:underline"
            >
              grant deadline tracking
            </Link>
            ,{" "}
            <Link
              href="/kindora/features/financial-management"
              className="text-indigo-600 hover:underline"
            >
              grant budget monitoring
            </Link>
            , or{" "}
            <Link
              href="/kindora/features/reporting"
              className="text-indigo-600 hover:underline"
            >
              grant compliance reporting
            </Link>
            , Kindora delivers enterprise-grade features at a price nonprofits
            can afford. Unlike spreadsheets or generic project management tools,
            our{" "}
            <strong>grant tracking software</strong> is purpose-built for
            nonprofits — with funder databases, automated reminders, and
            one-click compliance reports built in from day one.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/kindora"
              className="text-indigo-600 hover:underline font-medium"
            >
              Kindora Home →
            </Link>
            <Link
              href="/kindora/features"
              className="text-indigo-600 hover:underline font-medium"
            >
              All Features →
            </Link>
            <Link
              href="/kindora/pricing"
              className="text-indigo-600 hover:underline font-medium"
            >
              Pricing →
            </Link>
            <Link
              href="/kindora/contact"
              className="text-indigo-600 hover:underline font-medium"
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
