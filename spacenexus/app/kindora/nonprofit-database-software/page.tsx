import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Nonprofit Database Software | Nonprofit Data Management",
  description:
    "Kindora nonprofit database software centralises donor, volunteer, grant, and programme data in one secure database — clean data, instant access, total control.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/nonprofit-database-software",
  },
  openGraph: {
    title: "Nonprofit Database Software",
    description:
      "Centralise donor, volunteer, grant, and programme data in one secure database.",
    url: "https://spacenexus.net/kindora/nonprofit-database-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora Nonprofit Database Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Database Software",
    description:
      "Centralise donor, volunteer, grant, and programme data in one secure database.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "nonprofit database software",
    "nonprofit data management",
    "nonprofit data software",
    "charity database software",
    "NGO database software",
    "nonprofit data platform",
    "nonprofit record keeping",
    "nonprofit information system",
    "nonprofit data tracking",
    "nonprofit data system",
    "nonprofit data crm",
    "best nonprofit database software",
    "nonprofit database platform",
    "nonprofit data management software",
  ],
};

const benefits = [
  {
    metric: "1",
    title: "Unified Data Platform",
    description:
      "Donors, volunteers, grants, and programmes in one centralised database. No more siloed spreadsheets or disconnected systems.",
  },
  {
    metric: "100%",
    title: "Clean Data",
    description:
      "Automatic deduplication, validation rules, and audit trails ensure every record is accurate, complete, and trustworthy.",
  },
  {
    metric: "Real-Time",
    title: "Instant Access",
    description:
      "Your entire team accesses the same live database simultaneously. No emailing spreadsheets or wondering who has the latest version.",
  },
  {
    metric: "Secure",
    title: "Protected Information",
    description:
      "Encrypted storage, role-based access, and automatic backups protect sensitive beneficiary and financial data.",
  },
];

const features = [
  {
    title: "Centralised Records",
    description:
      "One database for all nonprofit data — donors, volunteers, grants, programmes, and outcomes.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
  {
    title: "Duplicate Detection",
    description:
      "Automatic duplicate detection and merge keeps your database clean — no duplicate records or fragmented histories.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
  {
    title: "Custom Fields",
    description:
      "Add any custom field to records — volunteer hours, grant deadlines, programme outcomes, or anything else.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
  {
    title: "Import & Export",
    description:
      "Import data from spreadsheets, other CRMs, or any source. Export for analysis, reporting, or migration.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
  },
  {
    title: "Audit Trail",
    description:
      "Every change is logged with timestamp and user — complete accountability for data integrity.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Data Validation",
    description:
      "Validation rules enforce quality — required fields, format checks, and data entry standards applied automatically.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Role-Based Access",
    description:
      "Granular permissions control who can view, edit, or export data — protecting sensitive information.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Automated Backups",
    description:
      "Automatic daily backups ensure your nonprofit data is never lost — restore any record at any time.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
];

const comparisonData = [
  {
    feature: "Centralised Database",
    kindora: true,
    bloomerrang: true,
    blackbaud: true,
    spreadsheets: false,
  },
  {
    feature: "Duplicate Detection",
    kindora: true,
    bloomerrang: true,
    blackbaud: false,
    spreadsheets: false,
  },
  {
    feature: "Custom Fields",
    kindora: true,
    bloomerrang: true,
    blackbaud: true,
    spreadsheets: true,
  },
  {
    feature: "Audit Trail",
    kindora: true,
    bloomerrang: false,
    blackbaud: true,
    spreadsheets: false,
  },
  {
    feature: "Data Validation",
    kindora: true,
    bloomerrang: false,
    blackbaud: false,
    spreadsheets: false,
  },
  {
    feature: "Role-Based Access",
    kindora: true,
    bloomerrang: true,
    blackbaud: true,
    spreadsheets: false,
  },
  {
    feature: "Import/Export",
    kindora: true,
    bloomerrang: true,
    blackbaud: true,
    spreadsheets: true,
  },
  {
    feature: "Real-Time Multi-User",
    kindora: true,
    bloomerrang: true,
    blackbaud: false,
    spreadsheets: false,
  },
];

const faqs = [
  {
    question: "What is nonprofit database software?",
    answer:
      "Nonprofit database software is a centralised system for storing, managing, and accessing all organisational data — donor records, volunteer information, grant tracking, and programme outcomes. It replaces spreadsheets and disconnected tools with a searchable, secure database that your entire team can access in real time.",
  },
  {
    question: "Why do nonprofits need dedicated database software?",
    answer:
      "Spreadsheets can't track relationships, prevent duplicates, or enforce data quality across departments. Dedicated nonprofit database software centralises records, ensures data integrity, and gives your team instant access to complete information — leading to better fundraising, volunteer management, and programme delivery.",
  },
  {
    question: "Can I import my existing data into Kindora?",
    answer:
      "Yes. Kindora supports imports from Excel, CSV, and other nonprofit databases. Our team helps you map fields, clean data, and merge duplicates so your database starts clean from day one.",
  },
  {
    question: "How does Kindora prevent duplicate records?",
    answer:
      "Kindora uses automated duplicate detection that identifies potential matches based on name, email, phone, and address. You can merge duplicates with one click, combining all associated records and histories.",
  },
  {
    question: "Is nonprofit data secure in Kindora?",
    answer:
      "Yes. Kindora uses encrypted storage, role-based access controls, and audit trails to protect sensitive data. Automatic backups ensure your data is never lost, and granular permissions let you restrict who can view or edit specific information.",
  },
];

const platformStats = [
  { metric: "1", label: "Single Source of Truth" },
  { metric: "100%", label: "Data Integrity" },
  { metric: "Real-Time", label: "Multi-User Access" },
  { metric: "99.9%", label: "Uptime" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Nonprofit Database Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Nonprofit database software — centralise donor, volunteer, grant, and programme data in one secure database.",
      url: "https://spacenexus.net/kindora/nonprofit-database-software",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function NonprofitDatabaseSoftwarePage() {
  return (
    <>
      <Script
        id="nonprofit-database-software-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-blue-600">
                Nonprofit Database
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Nonprofit Database Software That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                Unifies Everything
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              One centralised database for every donor, volunteer, grant, and
              programme record. No more scattered spreadsheets, no more
              duplicated effort, no more missing data.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-cyan-600 hover:to-blue-700 rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Try for Free
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
              </a>
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
              >
                Request a Demo
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              {[
                "No credit card required",
                "Setup time varies by data and workflows",
                "See current plan terms on the pricing page",
              ].map((text) => (
                <span key={text} className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platformStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">
                  {stat.metric}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">
              Why Nonprofit Database Software
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              One Database for Your Entire Organisation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Donors, volunteers, grants, and programmes all in one place.
              Kindora brings every data point together so your team works from
              a single source of truth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white text-xl font-bold mb-5">
                  {benefit.metric}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Built for Data Integrity
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From duplicate detection to audit trails, Kindora ensures your
              nonprofit data is clean, secure, and always trustworthy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-white"
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">
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

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">
              How We Compare
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Kindora vs Spreadsheets &amp; Other Tools
            </h2>
            <p className="text-lg text-gray-600">
              See why nonprofits choose Kindora over Excel and other database
              platforms.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">
                      Feature
                    </th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-blue-600">
                      Kindora
                    </th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">
                      Bloomerang
                    </th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">
                      Blackbaud
                    </th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">
                      Spreadsheets
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={
                        i < comparisonData.length - 1
                          ? "border-b border-gray-50"
                          : ""
                      }
                    >
                      <td className="py-4 px-6 text-sm text-gray-900 font-medium">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.kindora === "boolean" ? (
                          row.kindora ? (
                            <span className="text-green-500 text-lg">
                              &#10003;
                            </span>
                          ) : (
                            <span className="text-red-400 text-lg">
                              &#10007;
                            </span>
                          )
                        ) : (
                          <span className="text-yellow-500 text-sm">
                            Partial
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.bloomerrang === "boolean" ? (
                          row.bloomerrang ? (
                            <span className="text-green-500 text-lg">
                              &#10003;
                            </span>
                          ) : (
                            <span className="text-red-400 text-lg">
                              &#10007;
                            </span>
                          )
                        ) : (
                          <span className="text-yellow-500 text-sm">
                            Partial
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.blackbaud === "boolean" ? (
                          row.blackbaud ? (
                            <span className="text-green-500 text-lg">
                              &#10003;
                            </span>
                          ) : (
                            <span className="text-red-400 text-lg">
                              &#10007;
                            </span>
                          )
                        ) : (
                          <span className="text-yellow-500 text-sm">
                            Partial
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.spreadsheets === "boolean" ? (
                          row.spreadsheets ? (
                            <span className="text-green-500 text-lg">
                              &#10003;
                            </span>
                          ) : (
                            <span className="text-red-400 text-lg">
                              &#10007;
                            </span>
                          )
                        ) : (
                          <span className="text-yellow-500 text-sm">
                            Partial
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">
              FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Unify Your Nonprofit Data?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of nonprofits replacing spreadsheets with
            professional database software that scales with your mission.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
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
            </a>
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-full transition-all duration-300"
            >
              Request a Demo
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
