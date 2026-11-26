import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Nonprofit CRM Database | Donor Database CRM",
  description:
    "Kindora nonprofit CRM database centralises donor records, communications, donations, and programme data in one secure, searchable system.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/nonprofit-crm-database",
  },
  openGraph: {
    title: "Nonprofit CRM Database",
    description: "Centralise all donor records, communications, and donations in Kindora's nonprofit CRM database.",
    url: "https://spacenexus.net/kindora/nonprofit-crm-database",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Nonprofit CRM Database" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit CRM Database",
    description: "Centralise donor records, communications, and donations in Kindora's nonprofit CRM database.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "nonprofit crm database",
    "donor database crm",
    "nonprofit database software",
    "donor crm database",
    "nonprofit contact database",
    "donor management database",
    "charity crm database",
    "NGO database software",
    "nonprofit data management",
    "donor record management",
    "constituent database",
    "nonprofit data platform",
    "donor information system",
    "nonprofit contact management",
    "best nonprofit crm database",
  ],
};

const features = [
  {
    title: "Donor Records",
    description: "Complete donor profiles with contact details, giving history, communication log, and engagement data.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Unified Data",
    description: "Donors, donations, communications, volunteers, and programmes — all connected in one database.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
  },
  {
    title: "Advanced Search",
    description: "Filter and search by any field — giving level, campaign, date range, location, engagement score, and more.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    title: "Custom Fields",
    description: "Add custom fields to track data specific to your organisation — interests, membership type, or any attribute.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Data Import/Export",
    description: "Import existing data from spreadsheets or other CRMs. Export reports and lists for mailings and analysis.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
  },
  {
    title: "Data Quality",
    description: "Duplicate detection, address validation, and data hygiene tools to keep your database clean and accurate.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Role-Based Access",
    description: "Control who sees what with role-based permissions. Protect sensitive donor data while enabling team collaboration.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "API Access",
    description: "Connect your CRM database to other tools via API. Integrate with email, accounting, and website systems.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
];

const comparisonData = [
  { feature: "Donor Records", kindora: true, bloomerrang: true, neontwo: true, lurato: true },
  { feature: "Unified Data", kindora: true, bloomerrang: true, neontwo: true, lurato: "partial" },
  { feature: "Advanced Search", kindora: true, bloomerrang: true, neontwo: true, lurato: "partial" },
  { feature: "Custom Fields", kindora: true, bloomerrang: true, neontwo: true, lurato: true },
  { feature: "Data Quality Tools", kindora: true, bloomerrang: false, neontwo: false, lurato: false },
  { feature: "Role-Based Access", kindora: true, bloomerrang: true, neontwo: true, lurato: "partial" },
  { feature: "Grant Management", kindora: true, bloomerrang: false, neontwo: false, lurato: false },
  { feature: "Volunteer Tracking", kindora: true, bloomerrang: false, neontwo: true, lurato: false },
];

const faqs = [
  {
    question: "What is a nonprofit CRM database?",
    answer:
      "A nonprofit CRM database is a centralised system that stores all donor, donation, communication, and programme data. It replaces spreadsheets and disconnected tools with one searchable, connected database for managing all constituent relationships.",
  },
  {
    question: "How is Kindora different from Bloomerang's database?",
    answer:
      "Bloomerang is a solid donor database. Kindora extends it with grant management, volunteer tracking, programme reporting, and financial management — all in one unified database, not separate systems.",
  },
  {
    question: "Can I import data from spreadsheets?",
    answer:
      "Yes. Kindora supports bulk import from Excel and CSV files. The import wizard maps columns to fields, detects duplicates, and validates data before importing.",
  },
  {
    question: "How does Kindora keep data clean?",
    answer:
      "Kindora includes duplicate detection, address validation, and data hygiene tools. The system flags potential duplicates, validates addresses against postal databases, and suggests corrections.",
  },
  {
    question: "Can I control who accesses donor data?",
    answer:
      "Yes. Kindora includes role-based access control. Administrators can set permissions by role, limiting who can view, edit, or export sensitive donor information.",
  },
  {
    question: "Does Kindora have an API?",
    answer:
      "Yes. Kindora provides API access for integrating your CRM database with email platforms, accounting software, websites, and other tools your organisation uses.",
  },
];

const platformStats = [
  { metric: "1", label: "Unified database" },
  { metric: "100%", label: "Data security" },
  { metric: "Instant", label: "Search & filter" },
  { metric: "Auto", label: "Duplicate detection" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Nonprofit CRM Database",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Nonprofit CRM database for nonprofits \u2014 donor records, communications, donations, and programme data in one secure system.",
      url: "https://spacenexus.net/kindora/nonprofit-crm-database",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Ongoing free Starter plan; paid plans are custom-quoted" },
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

export default function NonprofitCrmDatabasePage() {
  return (
    <>
      <Script id="nonprofit-crm-database-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-slate-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-slate-600">Nonprofit CRM Database</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                One Database for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-blue-600">Your Entire Organisation</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Donors, donations, communications, volunteers, and programmes — all connected in one searchable, secure CRM database.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-slate-600 to-blue-600 hover:from-blue-600 hover:to-slate-700 rounded-full shadow-xl shadow-slate-500/30 hover:shadow-slate-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Try for Free
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Request a Demo
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                {["No credit card required", "Setup time varies by data and workflows", "See current plan terms on the pricing page"].map((text) => (
                  <span key={text} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-600 to-blue-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">CRM Database</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Synced
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { name: "Sarah Johnson", type: "Donor", records: "23 donations, 12 emails", updated: "Today", color: "from-slate-500 to-slate-600" },
                    { name: "Robert Smith", type: "Volunteer", records: "48 hours, 3 events", updated: "Yesterday", color: "from-blue-400 to-blue-500" },
                    { name: "Tech Corp", type: "Corporate", records: "3 grants, 1 event sponsor", updated: "2 days ago", color: "from-emerald-400 to-emerald-500" },
                    { name: "Emily Davis", type: "Donor", records: "8 donations, 5 events", updated: "3 days ago", color: "from-amber-400 to-amber-500" },
                  ].map((record) => (
                    <div key={record.name} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${record.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                        {record.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">{record.name}</p>
                        <p className="text-xs text-gray-500 truncate">{record.records}</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          record.type === "Donor" ? "bg-slate-100 text-slate-700" :
                          record.type === "Volunteer" ? "bg-blue-100 text-blue-700" :
                          "bg-emerald-100 text-emerald-700"
                        }`}>{record.type}</p>
                        <p className="text-[10px] text-gray-400 mt-1">{record.updated}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-black text-gray-900">2.4K</p>
                      <p className="text-[10px] text-gray-500">Total Records</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-slate-600">98%</p>
                      <p className="text-[10px] text-gray-500">Data Quality</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-blue-600">3</p>
                      <p className="text-[10px] text-gray-500">Data Sources</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platformStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-slate-600 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Complete CRM Database for Nonprofits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every record, every interaction, every data point — all in one searchable, secure database.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-slate-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-500/10 flex items-center justify-center mb-4 group-hover:bg-slate-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-slate-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">How We Compare</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Other CRM Databases</h2>
            <p className="text-lg text-gray-600">See why nonprofits choose Kindora over Bloomerang, Neon CRM, and Lurato.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-slate-600">Kindora</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Bloomerang</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Neon CRM</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Lurato</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className={i < comparisonData.length - 1 ? "border-b border-gray-50" : ""}>
                      <td className="py-4 px-6 text-sm text-gray-900 font-medium">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.kindora === "boolean" ? (
                          row.kindora ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.bloomerrang === "boolean" ? (
                          row.bloomerrang ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.neontwo === "boolean" ? (
                          row.neontwo ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.lurato === "boolean" ? (
                          row.lurato ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
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
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="text-base font-semibold text-gray-900">{faq.question}</span>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-700 via-blue-700 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Centralise Your Data?</h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
            Join nonprofits using Kindora to manage all donor data in one secure, searchable CRM database.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Free Starter Plan
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
