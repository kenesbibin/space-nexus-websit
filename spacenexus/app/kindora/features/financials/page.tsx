import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import FeatureIntentContent from "../FeatureIntentContent";

export const metadata: Metadata = {
  title: "Financials — Complete Nonprofit Financial Management",
  description:
    "Kindora Financials centralizes all financial operations: donor management, donation tracking, campaign fundraising, grant management, vendor records, expense tracking, and financial reporting in one unified platform.",
  keywords: [
    "nonprofit financial management",
    "NGO financial software",
    "donation tracking platform",
    "nonprofit financial reporting",
    "grant financial management",
  ],
  alternates: {
    canonical: "/kindora/features/financials",
  },
  openGraph: {
    title: "Financials — Complete Nonprofit Financial Management",
    description:
      "Manage donors, donations, campaigns, grants, vendors, expenses, and financial reports — all in one unified financial platform built for nonprofits.",
    url: "https://spacenexus.net/kindora/features/financials",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financials — Complete Nonprofit Financial Management",
    description:
      "Donors, donations, grants, campaigns, expenses, and reports — every financial operation for your nonprofit in one place.",
  },
};

const features = [
  {
    title: "Donor & Donation Management",
    description:
      "Maintain a complete database of donors — individuals, corporations, foundations, and governments. Record and track all donations with payment methods, recurring contributions, and full transaction history.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Donation Analytics",
    description:
      "Monitor donation performance through detailed analytics including total donations, average donation value, recurring donation tracking, and donor behavior insights over time.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Campaign Fundraising",
    description:
      "Create and manage fundraising campaigns with defined goals, timelines, and progress tracking. Evaluate performance with campaign reports, progress indicators, and fundraising analytics.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
  {
    title: "Grant Management",
    description:
      "Manage grant funding by tracking grantors, applications, awarded grants, and upcoming opportunities. Analyze your grant pipeline including awarded grants, pending decisions, and potential prospects.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Vendor & Expense Tracking",
    description:
      "Manage vendor and supplier information and record categorized organizational expenses — payroll, events, rent, professional services, and marketing. Link expenses to campaigns, programs, or operations.",
    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Accounts Payable",
    description:
      "Monitor accounts payable by managing bills, due dates, unpaid bills, and overdue payments. Stay on top of obligations and ensure timely vendor payments across all programs.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Financial Reports",
    description:
      "Generate financial reports providing insights into expenses, donations, vendor spending, and overall financial performance. Analyze spending patterns to support budgeting and financial planning.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Centralized Financial Dashboard",
    description:
      "Maintain a centralized financial dashboard that improves visibility, accountability, and financial decision-making across your entire organization — all from one unified platform.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
];

const galleryScreenshots = [
  {
    src: "/kindora/screenshots/Financials/Donation1.png",
    caption: "Donation Tracking & History",
  },
  {
    src: "/kindora/screenshots/Financials/Campaign1.png",
    caption: "Campaign Fundraising Management",
  },
  {
    src: "/kindora/screenshots/Financials/Grants%20(1).png",
    caption: "Grant Pipeline Management",
  },
  {
    src: "/kindora/screenshots/Financials/Expenses%20(1).png",
    caption: "Expense Tracking & Categories",
  },
];

export default function FinancialsPage() {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Nonprofit Financials & Accounting Software
              </h1>
              <p className="text-sm font-medium text-emerald-600 mb-4 italic">
                Manage every dollar with clarity, transparency, and control.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Financials module provides a comprehensive system for
                managing all financial activities within your organization. From
                tracking donors and donations to managing grants, campaigns,
                vendors, expenses, and financial reports, it centralizes all
                financial operations into one unified platform for accurate
                record-keeping, transparency, and better decision-making.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Manage a complete donor database — individuals, corporations, foundations, and governments",
                  "Record and track all donations with payment methods and transaction history",
                  "Monitor donation performance through detailed analytics and donor insights",
                  "Create and manage fundraising campaigns with goals and progress tracking",
                  "Manage grant funding — grantors, applications, awarded grants, and opportunities",
                  "Record and categorize expenses linked to campaigns, programs, or operations",
                  "Monitor accounts payable — bills, due dates, and overdue payments",
                  "Generate financial reports for expenses, donations, and financial performance",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
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
                  app.kindora.com / financials / donors
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10 aspect-[16/9] relative">
                <Image
                  src="/kindora/screenshots/Financials/Donors.png"
                  alt="Kindora Financials — donor management and financial overview"
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
              Every Financial Operation in One Place
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From the first donation to the final expense report — Kindora
              Financials centralizes every financial activity for complete
              visibility and control.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
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

      {/* Screenshot Gallery */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Explore Financials Modules
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Each area of the Financials module is purpose-built for nonprofit
              financial management.
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
                    app.kindora.com / financials
                  </div>
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-lg aspect-[16/9] relative">
                  <Image
                    src={screenshot.src}
                    alt={`Kindora Financials — ${screenshot.caption}`}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 44vw, 560px"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  {screenshot.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureIntentContent feature="financials" />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12 border border-emerald-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Take Control of Your Nonprofit Finances
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Schedule a demo and see how Kindora Financials brings every
              financial operation — donors, donations, grants, campaigns, and
              expenses — into one unified platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300"
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
