import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Program Management Software for Nonprofits",
  description:
    "Program management software for nonprofits — track enrollment, manage program delivery, monitor outcomes, and report impact. Built for every type of nonprofit program.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/solutions/program-management-software",
  },
  openGraph: {
    title: "Program Management Software",
    description:
      "Track enrollment, manage program delivery, monitor outcomes, and report impact — all from one unified platform.",
    url: "https://spacenexus.net/kindora/solutions/program-management-software",
    siteName: "Kindora by SpaceNexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Program Management Software — Kindora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Program Management Software",
    description:
      "Program management software for nonprofits. Track enrollment, manage delivery, and report outcomes.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "program management software",
    "nonprofit program management",
    "program management platform",
    "program tracking software",
    "program delivery software",
    "program enrollment software",
    "nonprofit program software",
    "program outcome tracking",
    "program management system",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Program Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Program management software for nonprofits — track enrollment, manage program delivery, monitor outcomes, and report impact.",
      url: "https://spacenexus.net/kindora/solutions/program-management-software",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "Program Enrollment Tracking",
        "Activity Scheduling",
        "Attendance Monitoring",
        "Outcome Measurement",
        "Program Reporting",
        "Resource Management",
        "Participant Dashboards",
        "Impact Analytics",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is program management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Program management software is a platform that helps nonprofits track program enrollment, manage activities and scheduling, monitor attendance and participation, measure outcomes, and report program impact to funders and stakeholders.",
          },
        },
        {
          "@type": "Question",
          name: "Why do nonprofits need program management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nonprofits need program management software to replace scattered spreadsheets and paper sign-in sheets with a centralized system. This enables real-time tracking of enrollment and attendance, automated outcome measurement, and one-click reporting for funders.",
          },
        },
        {
          "@type": "Question",
          name: "What features should program management software have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Essential features include program enrollment and registration, attendance tracking, activity scheduling, outcome measurement, participant dashboards, resource management, program reporting, and impact analytics.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kindora help with program management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora provides a complete program management platform that tracks enrollment, attendance, activities, and outcomes in one place. Program managers get real-time dashboards showing enrollment trends, participation rates, and outcome metrics — plus automated reporting for funders.",
          },
        },
        {
          "@type": "Question",
          name: "Can Kindora manage multiple programs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora supports unlimited programs — track enrollment, activities, and outcomes separately for each program while maintaining a unified view of your organization's overall impact.",
          },
        },
      ],
    },
  ],
};

const features = [
  {
    icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
    title: "Enrollment & Registration",
    description:
      "Digital enrollment forms, eligibility checks, and automated registration workflows for every program.",
  },
  {
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Activity Scheduling",
    description:
      "Schedule program activities, manage calendars, and coordinate across multiple programs and locations.",
  },
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    title: "Attendance Tracking",
    description:
      "Track participant attendance for every session. Monitor participation rates and identify engagement trends.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Outcome Measurement",
    description:
      "Define outcomes, track progress, and measure program effectiveness with real-time dashboards.",
  },
  {
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Program Reporting",
    description:
      "Generate program reports for funders, board meetings, and internal reviews with one click.",
  },
  {
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    title: "Resource Management",
    description:
      "Track program budgets, staff assignments, and resource allocation across all your programs.",
  },
];

const programTypes = [
  {
    title: "Youth Development Programs",
    description: "Track student enrollment, attendance, tutoring sessions, and educational outcomes.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Job Training Programs",
    description: "Manage participant enrollment, track skill assessments, and measure employment outcomes.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Health & Wellness Programs",
    description: "Track health screenings, manage wellness activities, and monitor health outcomes.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Community Engagement Programs",
    description: "Manage volunteer activities, track community events, and measure engagement impact.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

const benefits = [
  {
    stat: "360°",
    label: "Program Visibility",
    description: "Complete view of enrollment, activities, and outcomes across every program.",
  },
  {
    stat: "Real-Time",
    label: "Outcome Tracking",
    description: "Monitor program effectiveness and participant progress as it happens.",
  },
  {
    stat: "One-Click",
    label: "Program Reports",
    description: "Generate funder reports and board presentations in seconds.",
  },
  {
    stat: "30 min",
    label: "Setup Time",
    description: "Setup time depends on your data and workflow needs; ask Kindora about onboarding options.",
  },
];

const faqs = [
  {
    question: "What is program management software?",
    answer:
      "Program management software is a platform that helps nonprofits track program enrollment, manage activities and scheduling, monitor attendance and participation, measure outcomes, and report program impact to funders and stakeholders.",
  },
  {
    question: "Why do nonprofits need program management software?",
    answer:
      "Nonprofits need program management software to replace scattered spreadsheets and paper sign-in sheets with a centralized system. This enables real-time tracking of enrollment and attendance, automated outcome measurement, and one-click reporting for funders.",
  },
  {
    question: "What features should program management software have?",
    answer:
      "Essential features include program enrollment and registration, attendance tracking, activity scheduling, outcome measurement, participant dashboards, resource management, program reporting, and impact analytics.",
  },
  {
    question: "How does Kindora help with program management?",
    answer:
      "Kindora provides a complete program management platform that tracks enrollment, attendance, activities, and outcomes in one place. Program managers get real-time dashboards showing enrollment trends, participation rates, and outcome metrics — plus automated reporting for funders.",
  },
  {
    question: "Can Kindora manage multiple programs?",
    answer:
      "Yes. Kindora supports unlimited programs — track enrollment, activities, and outcomes separately for each program while maintaining a unified view of your organization's overall impact.",
  },
];

export default function ProgramManagementSoftwareSolutionPage() {
  return (
    <>
      <Script
        id="program-management-solution-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-orange-700">
                Program Management Software
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Program Management Software{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                That Maximizes Impact
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Track enrollment, manage program delivery, monitor outcomes, and
              report impact — all from one unified platform built for every type
              of nonprofit program.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 rounded-full shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
                href="/kindora/features"
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
                    className="w-4 h-4 text-orange-600"
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
            <div className="absolute -inset-6 bg-gradient-to-br from-orange-100/60 via-amber-50/40 to-yellow-100/40 rounded-[3rem] blur-2xl -z-10" />
            <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-gray-200 p-8 max-w-5xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
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
                    Program Dashboard
                  </span>
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                  2026 Active
                </span>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Active Programs", value: "12", color: "bg-orange-500" },
                  { label: "Participants", value: "340", color: "bg-amber-500" },
                  { label: "Activities", value: "86", color: "bg-green-500" },
                  { label: "Outcomes Met", value: "94%", color: "bg-blue-500" },
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
                  Program Performance
                </p>
                {[
                  { name: "Youth Tutoring", enrolled: 45, attendance: "92%", outcomes: "88%" },
                  { name: "Job Training", enrolled: 32, attendance: "87%", outcomes: "91%" },
                  { name: "Health & Wellness", enrolled: 68, attendance: "78%", outcomes: "85%" },
                  { name: "Community Engagement", enrolled: 120, attendance: "65%", outcomes: "79%" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                      <span className="text-sm font-semibold text-gray-900">
                        {p.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-gray-500">{p.enrolled} enrolled</span>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 font-medium rounded-full">
                        {p.attendance} attendance
                      </span>
                      <span className="text-gray-400">{p.outcomes} outcomes</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {benefit.stat}
                </div>
                <div className="text-sm font-semibold text-orange-100 mb-1">
                  {benefit.label}
                </div>
                <div className="text-xs text-orange-200">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Program Management Software */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
                Why Program Management Matters
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Your Programs Deserve Better Than Spreadsheets and Sign-In
                Sheets.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Most nonprofits manage programs with a mix of paper sign-in
                sheets, email chains, and disconnected spreadsheets. This makes
                it impossible to track enrollment trends, measure outcomes, or
                generate the reports funders require.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Purpose-built <strong>program management software</strong>{" "}
                replaces this chaos with a centralized platform where enrollment,
                activities, attendance, and outcomes live together — giving your
                team real-time visibility into every program&apos;s performance
                and impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-full transition-colors"
                >
                  See How It Works
                </Link>
                <Link
                  href="/kindora/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="space-y-4">
                  {[
                    { label: "Enrollment Rate", progress: "89%", color: "bg-orange-500", width: "89%" },
                    { label: "Attendance Rate", progress: "82%", color: "bg-amber-500", width: "82%" },
                    { label: "Outcome Achievement", progress: "94%", color: "bg-green-500", width: "94%" },
                    { label: "Participant Satisfaction", progress: "96%", color: "bg-blue-500", width: "96%" },
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Types */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
              Who It&apos;s For
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for Every Type of Nonprofit Program
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From youth development to community engagement, Kindora adapts to
              your program needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {programTypes.map((program, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-orange-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
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
                      d={program.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {program.description}
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
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
              Core Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything Your Programs Need
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From enrollment to impact reporting, Kindora&apos;s program
              management software gives your team the tools to deliver results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-[#f8f9fa] rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-orange-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
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
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about program management software.
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
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-full transition-colors"
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
            Ready to Maximize Your Program Impact?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join organizations that trust Kindora&apos;s program management
            software to track enrollment, manage delivery, and report outcomes
            for every program.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 rounded-full shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
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
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-orange-600 transition-colors"
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
            The Best Program Management Software for Nonprofits of Every Size
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kindora is the leading{" "}
            <Link
              href="/kindora/solutions/program-management-software"
              className="text-orange-600 hover:underline"
            >
              program management software
            </Link>{" "}
            and nonprofit operations platform trusted by organizations
            nationwide. Our comprehensive{" "}
            <Link
              href="/kindora/client-case-management-software"
              className="text-orange-600 hover:underline"
            >
              client case management
            </Link>{" "}
            connects program data with client outcomes for complete visibility.
            Whether you need{" "}
            <Link
              href="/kindora/features/client-management"
              className="text-orange-600 hover:underline"
            >
              program enrollment software
            </Link>
            ,{" "}
            <Link
              href="/kindora/features/reporting"
              className="text-orange-600 hover:underline"
            >
              program outcome tracking
            </Link>
            , or{" "}
            <Link
              href="/kindora/features/reporting"
              className="text-orange-600 hover:underline"
            >
              program impact reporting
            </Link>
            , Kindora delivers enterprise-grade features at a price nonprofits
            can afford. Unlike generic project management tools or
            spreadsheets, our{" "}
            <strong>program management software</strong> is purpose-built for
            nonprofits — with attendance tracking, outcome measurement, and
            funder reporting built in from day one.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/kindora"
              className="text-orange-600 hover:underline font-medium"
            >
              Kindora Home →
            </Link>
            <Link
              href="/kindora/features"
              className="text-orange-600 hover:underline font-medium"
            >
              All Features →
            </Link>
            <Link
              href="/kindora/pricing"
              className="text-orange-600 hover:underline font-medium"
            >
              Pricing →
            </Link>
            <Link
              href="/kindora/contact"
              className="text-orange-600 hover:underline font-medium"
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
