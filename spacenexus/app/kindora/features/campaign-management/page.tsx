import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import FeatureIntentContent from "../FeatureIntentContent";

export const metadata: Metadata = {
  title: "Campaign Management Software for NGOs",
  description:
    "Create and manage fundraising, event, awareness, and advocacy campaigns with real-time goal tracking, donation attribution, and performance analytics.",
  keywords: [
    "fundraising campaign management",
    "nonprofit campaign software",
    "campaign tracking tools",
    "donation attribution software",
    "NGO campaign platform",
  ],
  alternates: {
    canonical: "/kindora/features/campaign-management",
  },
  openGraph: {
    title: "Campaign Management Software for NGOs",
    description:
      "Kindora's campaign management software for NGOs tracks fundraising goals, donation attribution, and campaign performance in real time.",
    url: "https://spacenexus.net/kindora/features/campaign-management",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Management Software for NGOs",
    description:
      "Run fundraising, event, and advocacy campaigns with real-time goal tracking using Kindora's NGO campaign management software.",
  },
};

const campaignTypes = [
  {
    name: "Fundraising",
    description: "Traditional donation drives with monetary goals",
    color: "emerald",
  },
  {
    name: "Event",
    description: "Galas, runs, auctions, and special occasions",
    color: "blue",
  },
  {
    name: "Awareness",
    description: "Education and outreach initiatives",
    color: "violet",
  },
  {
    name: "Advocacy",
    description: "Policy and action-oriented campaigns",
    color: "amber",
  },
];

const statuses = ["Planning", "Active", "Completed", "Cancelled"];

const features = [
  {
    title: "Campaign Creation",
    description:
      "Set up campaigns with names, descriptions, types, and target dates. Define clear goals and track progress from day one.",
    icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
  },
  {
    title: "Goal Setting & Tracking",
    description:
      "Set fundraising targets and watch real-time progress. Visual progress bars show exactly how close you are to each goal.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
  {
    title: "Donation Attribution",
    description:
      "Link donations directly to campaigns for accurate attribution. Know exactly which campaigns drive the most support.",
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
  {
    title: "Lifecycle Management",
    description:
      "Track campaigns through Planning, Active, Completed, and Cancelled stages. Maintain historical records of all campaigns.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Performance Analytics",
    description:
      "View campaign-specific reports including active campaigns count, goal vs raised analysis, and performance by type.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Campaign ROI",
    description:
      "Track campaign expenses alongside donations to understand true return on investment for each fundraising effort.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function CampaignManagementPage() {
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
              Nonprofit Campaign Management Software
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Create compelling campaigns, set ambitious goals, and track every
              dollar raised. From annual funds to special events, manage all
              your fundraising initiatives in one place.
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

      {/* Campaign Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Campaign Types
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create campaigns tailored to your specific fundraising and
              engagement goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaignTypes.map((type) => (
              <div
                key={type.name}
                className="relative bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-${type.color}-100/50 rounded-bl-full`}
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2 relative">
                  {type.name}
                </h3>
                <p className="text-sm text-gray-600 relative">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Lifecycle */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Campaign Lifecycle
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Track campaigns through every stage from initial planning to
              completion.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-0">
            {statuses.map((status, idx) => (
              <div key={status} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${
                      idx === 0
                        ? "bg-gray-400"
                        : idx === 1
                          ? "bg-[#2563eb]"
                          : idx === 2
                            ? "bg-emerald-500"
                            : "bg-gray-300"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700">
                    {status}
                  </span>
                </div>
                {idx < statuses.length - 1 && (
                  <div className="hidden lg:block w-24 h-0.5 bg-gray-200 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Campaign Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to run successful fundraising campaigns.
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

      {/* Goal Tracking Preview */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Real-Time Goal Tracking
              </h2>
              <p className="text-gray-600 mb-6">
                Watch your campaigns progress in real-time. Visual progress bars
                and percentage indicators show exactly how close you are to
                reaching each goal.
              </p>
              <ul className="space-y-3">
                {[
                  "Visual progress bars for each campaign",
                  "Goal vs raised comparison",
                  "Percentage completion indicators",
                  "Days remaining countdown",
                  "Donation velocity tracking",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
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
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Active Campaigns
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Annual Fund",
                    progress: 75,
                    color: "bg-emerald-500",
                  },
                  { name: "Spring Gala", progress: 45, color: "bg-blue-500" },
                  {
                    name: "Youth Program",
                    progress: 90,
                    color: "bg-violet-500",
                  },
                ].map((campaign) => (
                  <div
                    key={campaign.name}
                    className="p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">
                        {campaign.name}
                      </span>
                      <span className="text-sm font-semibold text-gray-700">
                        {campaign.progress}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${campaign.color} rounded-full transition-all duration-500`}
                        style={{ width: `${campaign.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureIntentContent feature="campaign-management" />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to supercharge your fundraising?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how Kindora&apos;s campaign management can help you reach your
            fundraising goals.
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
