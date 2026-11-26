import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import FeatureIntentContent from "../FeatureIntentContent";

export const metadata: Metadata = {
  title: "Dashboard & Analytics — Mission Impact in One Powerful View",
  description:
    "Kindora's Dashboard & Analytics provides a centralized overview combining financial data, donor insights, campaign progress, and operational activity into one intuitive interface for data-driven nonprofit decisions.",
  keywords: [
    "nonprofit dashboard",
    "NGO analytics",
    "donation trends tracking",
    "nonprofit KPI dashboard",
    "mission impact analytics",
  ],
  alternates: {
    canonical: "/kindora/features/dashboard-analytics",
  },
  openGraph: {
    title: "Dashboard & Analytics — Mission Impact in One Powerful View",
    description:
      "View high-level metrics, donation trends, donor distribution, active campaigns, and pending grant applications — all in one centralized nonprofit dashboard.",
    url: "https://spacenexus.net/kindora/features/dashboard-analytics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard & Analytics — Mission Impact in One Powerful View",
    description:
      "Centralized nonprofit dashboard: KPIs, donation trends, campaign progress, and donor insights for data-driven decisions.",
  },
};

const features = [
  {
    title: "High-Level Metrics Overview",
    description:
      "View key metrics at a glance — total donations, net income, expenses, and active users. Understand your organization's financial health and operational activity without digging through reports.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Donation Trend Charts",
    description:
      "Track donation patterns over time with visual charts and graphs. Identify peak giving periods, seasonal patterns, and growth trends to optimize your fundraising calendar.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Donor Distribution Analysis",
    description:
      "Analyze your donor base by type — individual, corporate, government, and foundation. Understand your funding mix and identify opportunities to diversify revenue sources.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
  {
    title: "Campaign Progress Monitoring",
    description:
      "Monitor active campaigns and funding progress in real time. See goal-versus-raised progress for every campaign and take action before any fall behind.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Recent Activity & Communications",
    description:
      "Access a live feed of recent activity and communications for better engagement tracking. Stay informed of new donations, grant updates, client enrollments, and team actions.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Grant Applications Overview",
    description:
      "Review pending grant applications and upcoming funding opportunities directly from the dashboard. Never miss a deadline or lose track of an active grant application.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

const galleryScreenshots = [
  {
    src: "/kindora/screenshots/Dashboard/Screenshot%202026-03-17%20112831.png",
    caption: "Donor Trends & Distribution",
  },
  {
    src: "/kindora/screenshots/Dashboard/Screenshot%202026-03-17%20113054.png",
    caption: "Campaign Progress & Activity Feed",
  },
];

export default function DashboardAnalyticsPage() {
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
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Features
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium mb-4">
                Financial Management
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Nonprofit Dashboard & Analytics Software
              </h1>
              <p className="text-sm font-medium text-emerald-600 mb-4 italic">
                Your mission, your impact — all in one powerful view.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Dashboard & Analytics section provides a centralized overview of your organization&apos;s
                performance, combining financial data, donor insights, campaign progress, and operational
                activity into one intuitive interface. It helps users quickly understand trends, monitor
                key metrics, and make data-driven decisions.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "View high-level metrics: total donations, net income, expenses, and active users",
                  "Track donation trends over time with visual charts and graphs",
                  "Analyze donor distribution by type — individual, corporate, government, foundation",
                  "Monitor active campaigns and funding progress in real time",
                  "Access recent activity and communications for better engagement tracking",
                  "Review pending grant applications and funding opportunities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40"
                >
                  Request a Demo
                </Link>
                <Link
                  href="/kindora/pricing"
                  className="inline-flex items-center px-6 py-3 text-base font-semibold text-gray-700 border-2 border-gray-200 rounded-full hover:border-gray-300 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Hero Screenshot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/10 blur-2xl rounded-3xl -z-10" />
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                  app.kindora.com / dashboard
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10 aspect-[16/9] relative">
                <Image
                  src="/kindora/screenshots/Dashboard/Screenshot%202026-03-17%20112749.png"
                  alt="Kindora Dashboard & Analytics — centralized nonprofit performance overview"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 92vw, 600px"
                  priority
                />
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
              Turn Data into Actionable Insights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A centralized dashboard that brings together every metric your team needs —
              so decisions are faster, better-informed, and backed by real data.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">More Dashboard Views</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Explore different sections of the Kindora dashboard — from donation trends to campaign progress.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {galleryScreenshots.map((screenshot) => (
              <div key={screenshot.src}>
                <div className="bg-gray-800 rounded-t-xl px-3 py-2.5 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="flex-1 bg-gray-700 rounded px-2 py-0.5 text-xs text-gray-400 ml-2">
                    app.kindora.com / dashboard
                  </div>
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-lg aspect-[16/9] relative">
                  <Image
                    src={screenshot.src}
                    alt={`Kindora Dashboard — ${screenshot.caption}`}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 44vw, 560px"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">{screenshot.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureIntentContent feature="dashboard-analytics" />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12 border border-emerald-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              See Your Impact in Real Time
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Schedule a demo and see how Kindora&apos;s dashboard brings together all your
              nonprofit&apos;s data — donations, campaigns, grants, and programs — in one place.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300"
              >
                Request a Demo
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/kindora/features"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors"
              >
                View All Features
              </Link>
            </div>
          </div>

            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </main>
  );
}
