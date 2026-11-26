import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import FeatureIntentContent from "../FeatureIntentContent";

export const metadata: Metadata = {
  title: "Reports — Financial & Program Analytics",
  description:
    "Kindora Reports provides a comprehensive overview of organizational performance combining financial data and program analytics. Monitor revenue, expenses, donations, and service outcomes for better decision-making.",
  keywords: [
    "nonprofit reporting software",
    "NGO financial reports",
    "impact reporting tools",
    "nonprofit analytics platform",
    "program outcome reporting",
  ],
  alternates: {
    canonical: "/kindora/features/reporting",
  },
  openGraph: {
    title: "Reports — Financial & Program Analytics",
    description:
      "View key financial metrics, analyze income vs expenses, track donation trends, monitor program outcomes, and export reports — all in one reporting module.",
    url: "https://spacenexus.net/kindora/features/reporting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reports — Financial & Program Analytics",
    description:
      "Financial reports, program analytics, donation trends, and export tools — built for nonprofit transparency and decision-making.",
  },
};

const features = [
  {
    title: "Key Metrics Overview",
    description:
      "View key metrics including total revenue, expenses, net income, and clients served — all in one summary view. Get an instant snapshot of your organization's financial and operational health.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Income vs Expense Analysis",
    description:
      "Analyze financial performance through income vs expense comparisons. Understand cost drivers, identify surplus or deficit trends, and make data-backed decisions for sustainable operations.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Donation Trends",
    description:
      "Track donation trends and fundraising performance over time. Identify growth patterns, seasonal peaks, and donor behavior changes to optimize your fundraising strategy.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Expense Distribution",
    description:
      "Monitor expense distribution across different spending categories. Understand how resources are allocated — across programs, operations, and overhead — to optimize spending.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
  {
    title: "Program Performance Reports",
    description:
      "Generate program reports to evaluate service usage and client engagement. Measure program outcomes, identify high-impact services, and report results to funders and stakeholders.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Data Export",
    description:
      "Export financial data such as donations and expenses for reporting and analysis. Generate Excel, PDF, or CSV exports to share with boards, auditors, and grant reporting requirements.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
  },
];

export default function ReportsPage() {
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium mb-4">
                Reporting
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Nonprofit Reporting & Analytics Software
              </h1>
              <p className="text-sm font-medium text-amber-600 mb-4 italic">
                Gain insights with powerful financial and program analytics.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Reports module provides a comprehensive overview of organizational performance
                by combining financial data and program analytics. It helps organizations monitor
                revenue, expenses, donations, and service outcomes through visual charts and
                summaries, enabling better decision-making and transparency.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "View key metrics: total revenue, expenses, net income, and clients served",
                  "Analyze financial performance through income vs expense comparisons",
                  "Track donation trends and fundraising performance over time",
                  "Monitor expense distribution across different spending categories",
                  "Generate program reports to evaluate service usage and client engagement",
                  "Export financial data such as donations and expenses for reporting and analysis",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="absolute -inset-4 bg-amber-500/10 blur-2xl rounded-3xl -z-10" />
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                  app.kindora.com / reports
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10 aspect-[16/9] relative">
                <Image
                  src="/kindora/screenshots/Reports/Reports%20(1).png"
                  alt="Kindora Reports — financial and program analytics overview"
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
              Turn Data into Organizational Transparency
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kindora Reports combines financial and program data into clear, actionable reports
              that support better decisions, stronger accountability, and confident stakeholder reporting.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-amber-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
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

      {/* 2nd Screenshot */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Financial Analytics & Charts</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Visual charts and breakdowns that make financial reporting clear for boards, auditors, and funders.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                app.kindora.com / reports / financials
              </div>
            </div>
            <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-xl shadow-gray-900/10 aspect-[16/9] relative">
              <Image
                src="/kindora/screenshots/Reports/Reports%20(2).png"
                alt="Kindora Reports — financial analytics and visual charts"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 640px) 88vw, (max-width: 1024px) 44vw, 560px"
              />
            </div>
          </div>
        </div>
      </section>

      <FeatureIntentContent feature="reporting" />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 lg:p-12 border border-amber-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              See Your Organization&apos;s Full Picture
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Schedule a demo and see how Kindora Reports brings together financial data,
              program outcomes, and analytics for confident reporting and accountability.
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
