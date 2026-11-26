import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import FeatureIntentContent from "../FeatureIntentContent";

export const metadata: Metadata = {
  title: "Expense Management - Track & Categorize Nonprofit Spending",
  description:
    "Record expenses, attach receipts, categorize spending, track vendors, and maintain complete financial records for nonprofit operations.",
  keywords: [
    "nonprofit expense tracking",
    "expense management software NGO",
    "receipt tracking nonprofit",
    "vendor expense management",
    "nonprofit spending tracker",
  ],
  alternates: {
    canonical: "/kindora/features/expense-management",
  },
  openGraph: {
    title: "Expense Management - Track & Categorize Nonprofit Spending",
    description:
      "Record expenses, attach receipts, categorize spending, track vendors, and maintain complete financial records for nonprofit operations.",
    url: "https://spacenexus.net/kindora/features/expense-management",
    type: "website",
  },
};

const expenseCategories = [
  "Personnel",
  "Program Supplies",
  "Rent & Utilities",
  "Travel",
  "Equipment",
  "Professional Services",
  "Insurance",
  "Office Supplies",
  "Marketing",
  "Training",
  "Technology",
  "Other",
];

const paymentMethods = ["Check", "Cash", "Credit Card", "ACH", "Wire", "Other"];

const features = [
  {
    title: "Expense Recording",
    description:
      "Capture all organizational expenses with amount, date, vendor, category, and payment method. Maintain complete spending records.",
    icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
  },
  {
    title: "Receipt Attachments",
    description:
      "Upload and store receipt images and documents directly with expense records. Keep all supporting documentation organized and accessible.",
    icon: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13",
  },
  {
    title: "Category Management",
    description:
      "Organize expenses into meaningful categories for budget tracking and reporting. Customize categories to match your chart of accounts.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
  },
  {
    title: "Vendor Directory",
    description:
      "Maintain a directory of vendors with contact information and payment details. Track spending by vendor across time.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Grant Expense Association",
    description:
      "Link expenses directly to grants for accurate cost tracking and compliance reporting. Demonstrate proper fund utilization.",
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
  {
    title: "Expense Analytics",
    description:
      "View spending trends over time, analyze by category, and compare against budgets. Make data-driven financial decisions.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const reports = [
  "Monthly expense trends",
  "Spending by category breakdown",
  "Top vendor analysis",
  "Payment method distribution",
  "Grant expense allocation",
  "Budget vs actual comparison",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kindora — Expense Management",
  description:
    "Record expenses, attach receipts, categorize spending, track vendors, and maintain complete financial records for nonprofit operations.",
  url: "https://spacenexus.net/kindora/features/expense-management",
  serviceType: "Nonprofit Expense Tracking Software",
  provider: {
    "@id": "https://spacenexus.net/kindora/#organization",
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  offers: {
    "@type": "Offer",
    url: "https://spacenexus.net/kindora/pricing",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
  },
};

export default function ExpenseManagementPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
                Nonprofit Expense Management Software
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Track every dollar spent with comprehensive expense recording,
                receipt management, and category-based reporting for complete
                financial transparency.
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

            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Recent Expenses</h3>
                <span className="text-sm text-gray-500">This Month</span>
              </div>
              <div className="space-y-3">
                {[
                  { category: "Program Supplies", color: "bg-emerald-500" },
                  { category: "Rent & Utilities", color: "bg-blue-500" },
                  { category: "Personnel", color: "bg-violet-500" },
                  { category: "Travel", color: "bg-amber-500" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <div className="flex-1">
                      <div className="h-4 w-3/4 bg-gray-200 rounded mb-1" />
                      <span className="text-xs text-gray-500">
                        {item.category}
                      </span>
                    </div>
                    <div className="h-4 w-16 bg-gray-100 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Payment Methods */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gradient-to-br from-rose-500/5 to-pink-500/5 rounded-2xl p-6 lg:p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Expense Categories
              </h3>
              <p className="text-gray-600 mb-6">
                Organize spending into meaningful categories for budget tracking
                and compliance reporting.
              </p>
              <div className="flex flex-wrap gap-2">
                {expenseCategories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl p-6 lg:p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Payment Methods
              </h3>
              <p className="text-gray-600 mb-6">
                Track how expenses are paid for better cash flow management and
                reconciliation.
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
              Expense Management Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete tools for recording, tracking, and analyzing
              organizational spending.
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

      {/* Reports & Analytics */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Expense Reports
              </h2>
              <p className="text-gray-600 mb-6">
                Gain insights into organizational spending with comprehensive
                reports and visualizations.
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
              <h4 className="text-sm font-medium text-gray-500 mb-4">
                Spending by Category
              </h4>
              <div className="space-y-3">
                {[
                  { name: "Personnel", width: "65%", color: "bg-violet-500" },
                  {
                    name: "Program Supplies",
                    width: "15%",
                    color: "bg-emerald-500",
                  },
                  {
                    name: "Rent & Utilities",
                    width: "10%",
                    color: "bg-blue-500",
                  },
                  { name: "Other", width: "10%", color: "bg-gray-400" },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="text-gray-500">{item.width}</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
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
        </div>
      </section>

      <FeatureIntentContent feature="expense-management" />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to take control of organizational spending?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how Kindora can help you track expenses, maintain receipt
            records, and gain spending insights.
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
