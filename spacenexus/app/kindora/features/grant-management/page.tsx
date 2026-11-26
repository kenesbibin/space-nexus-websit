import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import FeatureIntentContent from "../FeatureIntentContent";

export const metadata: Metadata = {
  title: "Grant Management Software & Tracking for Nonprofits",
  description:
    "Track grants from prospect to close, manage grantors, process receipts, and generate compliance-ready reports with Kindora's grant management tools.",
  keywords: [
    "grant management software",
    "grant tracking nonprofit",
    "grant compliance reporting",
    "grantor management",
    "nonprofit grant software",
  ],
  alternates: {
    canonical: "/kindora/features/grant-management",
  },
  openGraph: {
    title: "Grant Management Software & Tracking for Nonprofits",
    description:
      "Full-lifecycle grant management software: track applications, manage grantors, process receipts, and generate compliance reports — built for nonprofits.",
    url: "https://spacenexus.net/kindora/features/grant-management",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grant Management Software & Tracking for Nonprofits",
    description:
      "Track grants from prospect to close with Kindora's nonprofit grant management software. Compliance reports included.",
  },
};

const grantStatuses = [
  {
    name: "Prospect",
    description: "Identified potential funding opportunity",
    color: "gray",
  },
  {
    name: "Applied",
    description: "Application submitted, awaiting decision",
    color: "blue",
  },
  {
    name: "Awarded",
    description: "Grant approved and funds committed",
    color: "emerald",
  },
  {
    name: "Declined",
    description: "Application not selected this cycle",
    color: "rose",
  },
  {
    name: "Closed",
    description: "Grant completed and fully reported",
    color: "violet",
  },
];

const grantorTypes = ["Foundation", "Government", "Corporate", "Individual"];

const features = [
  {
    title: "Grant Lifecycle Tracking",
    description:
      "Follow grants through every stage from initial prospect identification to final close-out. Never lose track of important deadlines or requirements.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Grantor Directory",
    description:
      "Maintain comprehensive profiles for all funders including Foundation, Government, Corporate, and Individual grantors with status tracking and relationship notes.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Receipt Management",
    description:
      "Track grant payments with check numbers, ACH details, wire transfers, and cash receipts. Monitor receipt status from pending through deposited.",
    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Deadline Tracking",
    description:
      "Never miss a submission deadline, report due date, or renewal opportunity. Set and track important grant milestones and requirements.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Pipeline Visualization",
    description:
      "See your entire grant pipeline at a glance. Understand awarded vs received funds, identify gaps, and forecast future funding.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
  {
    title: "Attachment Support",
    description:
      "Attach proposals, award letters, contracts, and reports directly to grant records. Keep all documentation organized and accessible.",
    icon: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13",
  },
];

const reports = [
  "Awarded vs received funds tracking",
  "Funds gap analysis",
  "Top grantors by amount received",
  "Grant status distribution",
  "Receipt status overview",
  "Grant timeline and deadlines",
];

export default function GrantManagementPage() {
  return (
    <main className="pt-20 lg:pt-24">

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/kindora/features"
              className="inline-flex mr-7 items-center text-sm text-gray-500 hover:text-[#2563eb] mb-6 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Features
            </Link>

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium mb-4">
              Financial Management
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Nonprofit Grant Management Software
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Track grants from initial prospect to final close-out. Manage
              grantor relationships, process receipts, and maintain compliance
              with comprehensive grant lifecycle tools.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/25"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What is grant tracking?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Grant tracking is the process of recording and monitoring funding
            opportunities and awarded grants throughout their lifecycle.
            Nonprofits use grant tracking software to organize funder details,
            application and award status, deadlines, grant budgets, deliverables,
            and reporting requirements in one place. This gives teams a shared
            view of what is due, what has been submitted, and how each grant is
            progressing.
          </p>
        </div>
      </section>

      {/* Grant Lifecycle */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Grant Lifecycle
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Track every grant through its complete lifecycle with clear status
              indicators.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {grantStatuses.map((status, idx) => (
              <div
                key={status.name}
                className={`relative bg-white rounded-xl border-2 p-5 text-center ${
                  status.color === "gray"
                    ? "border-gray-200"
                    : status.color === "blue"
                      ? "border-blue-200 bg-blue-50/30"
                      : status.color === "emerald"
                        ? "border-emerald-200 bg-emerald-50/30"
                        : status.color === "rose"
                          ? "border-rose-200 bg-rose-50/30"
                          : "border-violet-200 bg-violet-50/30"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold ${
                    status.color === "gray"
                      ? "bg-gray-400"
                      : status.color === "blue"
                        ? "bg-blue-500"
                        : status.color === "emerald"
                          ? "bg-emerald-500"
                          : status.color === "rose"
                            ? "bg-rose-500"
                            : "bg-violet-500"
                  }`}
                >
                  {idx + 1}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{status.name}</h3>
                <p className="text-xs text-gray-600">{status.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grantor Types */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Grantor Directory
              </h2>
              <p className="text-gray-600 mb-6">
                Maintain comprehensive profiles for all your funders. Track
                relationship history, giving patterns, and engagement status.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {grantorTypes.map((type) => (
                  <div
                    key={type}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb]">
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
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-900">{type}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-600">
                Track grantor status (Active, Inactive, Prospect) to prioritize
                your outreach and stewardship efforts.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="h-5 w-40 bg-gray-200 rounded mb-2" />
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded">
                    Active
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Type</span>
                  <span className="text-sm font-medium text-gray-900">
                    Foundation
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Total Awarded</span>
                  <div className="h-4 w-20 bg-gray-100 rounded" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Grants</span>
                  <div className="h-4 w-12 bg-gray-100 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Grant Management Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools for managing your grant portfolio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb] mb-4">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
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

      {/* Reports Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Grant Pipeline
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      label: "Awarded",
                      width: "100%",
                      color: "bg-emerald-500",
                    },
                    { label: "Received", width: "72%", color: "bg-blue-500" },
                    { label: "Gap", width: "28%", color: "bg-amber-500" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{item.label}</span>
                      </div>
                      <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full`}
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Grant Reports
              </h2>
              <p className="text-gray-600 mb-6">
                Generate compliance-ready reports and gain insights into your
                grant portfolio.
              </p>
              <ul className="space-y-3">
                {reports.map((report) => (
                  <li key={report} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-[#2563eb]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{report}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FeatureIntentContent feature="grant-management" />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to streamline your grant management?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how Kindora can help you track grants, manage relationships, and
            maintain compliance.
          </p>
          <Link
            href="/kindora/contact"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/25"
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

            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </main>
  );
}
