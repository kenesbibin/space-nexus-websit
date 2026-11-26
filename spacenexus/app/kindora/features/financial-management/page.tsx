import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import FeatureIntentContent from "../FeatureIntentContent";

export const metadata: Metadata = {
  title: "Finance — Chart of Accounts & Budget Management",
  description:
    "Kindora Finance helps nonprofits manage their financial structure and budgeting processes. Organize a structured chart of accounts, track financial categories, and create budgets for programs and operations.",
  keywords: [
    "nonprofit accounting software",
    "nonprofit budget tracking",
    "chart of accounts nonprofit",
    "financial management NGO",
    "nonprofit bookkeeping",
  ],
  alternates: {
    canonical: "/kindora/features/financial-management",
  },
  openGraph: {
    title: "Finance — Chart of Accounts & Budget Management",
    description:
      "Manage a structured chart of accounts, create and monitor budgets, and track financial allocations — all built for nonprofit financial planning and accountability.",
    url: "https://spacenexus.net/kindora/features/financial-management",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance — Chart of Accounts & Budget Management",
    description:
      "Chart of accounts, budget tracking, and financial structure management built for nonprofits.",
  },
};

const features = [
  {
    title: "Chart of Accounts",
    description:
      "Manage a structured chart of accounts including assets, liabilities, revenue, and expenses. Organize financial categories using nonprofit accounting standards for accurate record-keeping.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Financial Category Organization",
    description:
      "Organize financial categories to maintain accurate accounting records across all activities. Group accounts logically to support clean financial reporting and audit-ready records.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
  },
  {
    title: "Budget Creation & Management",
    description:
      "Create and manage budgets for organizational operations and programs. Define budget amounts for each account category and manage financial allocations across different activities.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Budget vs Actual Tracking",
    description:
      "Track total budgeted amounts, actual spending, and remaining funds. Compare planned vs actual finances to stay on track and make informed adjustments during the fiscal year.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Active Budget Monitoring",
    description:
      "Monitor active budgets and financial allocations across different activities in real time. Identify budget overruns early and reallocate resources before they impact program delivery.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Financial Planning & Reporting",
    description:
      "Maintain a centralized system for financial planning and reporting. Generate budget reports that provide visibility into organizational financial health and support board accountability.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

export default function FinancePage() {
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
                Nonprofit Financial Management Software
              </h1>
              <p className="text-sm font-medium text-emerald-600 mb-4 italic">
                Organize financial structure and plan budgets effectively.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Finance module helps organizations manage their financial structure and budgeting
                processes. It provides tools to organize accounts, track financial categories, and
                create budgets for programs and operations — ensuring better financial planning,
                transparency, and accountability.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Manage a structured chart of accounts including assets, liabilities, revenue, and expenses",
                  "Organize financial categories to maintain accurate accounting records",
                  "Create and manage budgets for organizational operations and programs",
                  "Track total budgeted amounts, spending, and remaining funds",
                  "Monitor active budgets and financial allocations across different activities",
                  "Maintain a centralized system for financial planning and reporting",
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
                  app.kindora.com / finance
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10 aspect-[16/9] relative">
                <Image
                  src="/kindora/screenshots/Finance/Finance%20(1).png"
                  alt="Kindora Finance — chart of accounts and budget management"
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
              Structure Your Finances for Growth & Accountability
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kindora Finance gives your organization a solid financial foundation — from a
              structured chart of accounts to budgets that track every dollar allocated.
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

      {/* 2nd Screenshot */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Budget Planning & Tracking</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Create and monitor budgets across programs and operations — with clear visibility into spending and remaining funds.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                app.kindora.com / finance / budgets
              </div>
            </div>
            <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-xl shadow-gray-900/10 aspect-[16/9] relative">
              <Image
                src="/kindora/screenshots/Finance/Finance%20(2).png"
                alt="Kindora Finance — budget planning and tracking"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 640px) 88vw, (max-width: 1024px) 44vw, 560px"
              />
            </div>
          </div>
        </div>
      </section>

      <FeatureIntentContent feature="financial-management" />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12 border border-emerald-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Build a Stronger Financial Foundation
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              See how Kindora Finance helps your organization structure accounts, plan budgets,
              and maintain financial transparency for better decision-making.
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
