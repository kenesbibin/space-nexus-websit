import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import FeatureIntentContent from "../FeatureIntentContent";

export const metadata: Metadata = {
  title: "Donor Management Software for Nonprofits",
  description:
    "Manage donor profiles, track donations, monitor giving history, and build lasting donor relationships with Kindora's comprehensive donor management system.",
  keywords: [
    "donor management software",
    "nonprofit donor tracking",
    "donor CRM",
    "recurring giving software",
    "donor database nonprofit",
  ],
  alternates: {
    canonical: "/kindora/features/donor-management",
  },
  openGraph: {
    title: "Donor Management Software for Nonprofits",
    description:
      "Kindora's donor management software helps nonprofits track donations, manage donor relationships, and grow recurring giving — all in one place.",
    url: "https://spacenexus.net/kindora/features/donor-management",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donor Management Software for Nonprofits",
    description:
      "Track donations, manage donor profiles, and grow recurring giving with Kindora's nonprofit donor management software.",
  },
};

const donorTypes = [
  "Individual",
  "Corporate",
  "Foundation",
  "County",
  "City",
  "State",
  "Federal",
  "Other",
];

const paymentMethods = [
  "Cash",
  "Check",
  "Credit Card",
  "Bank Transfer",
  "Online",
  "ACH",
  "Wire",
];

const features = [
  {
    title: "Complete Donor Profiles",
    description:
      "Store comprehensive contact information, addresses, communication preferences, and relationship notes for every donor in your database.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Donation History Tracking",
    description:
      "View complete giving history for each donor including amounts, dates, payment methods, campaign attributions, and receipt status.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Donor Status Management",
    description:
      "Track donor engagement with status categories: Active, Inactive, and Prospect. Identify lapsed donors and nurture new prospects.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Recurring Donation Support",
    description:
      "Manage monthly giving programs and subscription-based donations. Track recurring gift schedules and maintain consistent revenue streams.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Communication History",
    description:
      "Log every interaction with donors—emails, calls, meetings, thank-you notes. Maintain a complete relationship timeline for personalized engagement.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    title: "Direct Email Capability",
    description:
      "Send emails directly from donor profile pages. Use pre-built templates or compose custom messages without leaving the platform.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Donation Analytics",
    description:
      "Access donor-specific metrics including total donated, average gift size, largest gift, and last donation date for informed stewardship.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Receipt Management",
    description:
      "Track receipt status for every donation: Pending, Sent, or Not Required. Ensure compliance and maintain donor trust with proper acknowledgments.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

const reports = [
  "Monthly donation trends analysis",
  "Donor type breakdown charts",
  "Top donors ranking",
  "Recurring vs one-time donation split",
  "Payment method analysis",
  "Receipt status summary",
];

export default function DonorManagementPage() {
  return (
    <main className="pt-20 lg:pt-24">

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
                Nonprofit Donor Management Software
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Build stronger donor relationships with comprehensive profiles,
                complete giving history, and powerful communication tools—all in
                one integrated system.
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

            <div className="relative">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2563eb] to-[#7c3aed] flex items-center justify-center text-white text-xl font-bold">
                    D
                  </div>
                  <div>
                    <div className="h-5 w-32 bg-gray-200 rounded mb-2" />
                    <div className="h-4 w-24 bg-gray-100 rounded" />
                  </div>
                  <span className="ml-auto px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                    Active
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {["Total Given", "Avg Gift", "Last Gift"].map((label) => (
                    <div key={label} className="text-center">
                      <p className="text-xs text-gray-500 mb-1">{label}</p>
                      <div className="h-6 w-16 bg-gray-100 rounded mx-auto" />
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#2563eb]" />
                      <div className="h-4 flex-1 bg-gray-200 rounded" />
                      <div className="h-4 w-16 bg-gray-100 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What is nonprofit donor management?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nonprofit donor management is the process of organizing donor
            contact details, giving history, communication preferences, and
            engagement activity so a nonprofit can maintain relationships and
            coordinate fundraising. Donor management software keeps this
            information in a shared system, helping staff record gifts, review
            donor histories, plan follow-up, and prepare reports rather than
            tracking each interaction in separate spreadsheets.
          </p>
        </div>
      </section>

      {/* Donor Types & Payment Methods */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gradient-to-br from-[#2563eb]/5 to-violet-500/5 rounded-2xl p-6 lg:p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Supported Donor Types
              </h3>
              <p className="text-gray-600 mb-6">
                Categorize your donors to understand your funding mix and tailor
                your engagement strategies.
              </p>
              <div className="flex flex-wrap gap-2">
                {donorTypes.map((type) => (
                  <span
                    key={type}
                    className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl p-6 lg:p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Payment Methods Tracked
              </h3>
              <p className="text-gray-600 mb-6">
                Record how donations are received for accurate financial
                reporting and donor preferences.
              </p>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Donor Management Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage donor relationships effectively and
              grow your supporter base.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Donation Reports & Analytics
              </h2>
              <p className="text-gray-600 mb-8">
                Gain insights into your donor base and giving patterns with
                comprehensive reports designed for nonprofit fundraising.
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
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="h-8 w-48 bg-gray-200 rounded" />
                <div className="flex items-end gap-2 h-32">
                  {[40, 65, 45, 80, 55, 70, 60, 85, 75, 90, 70, 95].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[#2563eb] to-[#2563eb]/60 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    ),
                  )}
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Jan</span>
                  <span>Jun</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureIntentContent feature="donor-management" />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to strengthen your donor relationships?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how Kindora can help you manage donors more effectively and grow
            your fundraising results.
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
