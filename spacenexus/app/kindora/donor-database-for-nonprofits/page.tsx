import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Donor Database for Nonprofits | Centralized Donor Records",
  description:
    "Kindora is the donor database for nonprofits. Centralized donor records, complete giving history, powerful search, segmentation, and real-time reports — all in one secure platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/donor-database-for-nonprofits",
  },
  openGraph: {
    title: "Donor Database for Nonprofits",
    description: "Centralized donor database for nonprofits with giving history, search, segmentation, and real-time reporting.",
    url: "https://spacenexus.net/kindora/donor-database-for-nonprofits",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Donor Database for Nonprofits" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donor Database for Nonprofits",
    description: "The donor database built for nonprofits. Centralize, search, and grow your donor relationships.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "donor database for nonprofits",
    "nonprofit donor database",
    "donor database software",
    "donor records for nonprofits",
    "nonprofit donor records",
    "donor data management",
    "donor tracking database",
    "charity donor database",
    "NGO donor database",
    "donor information system",
    "nonprofit database software",
    "donor management database",
    "constituent database",
    "donor data software",
    "centralized donor database",
  ],
};

const comparisonData = [
  { feature: "Searchable Donor Profiles", kindora: true, excel: false, bloomerang: true, salesforce: true },
  { feature: "Complete Giving History", kindora: true, excel: "partial", bloomerang: true, salesforce: true },
  { feature: "Advanced Filtering & Segmentation", kindora: true, excel: false, bloomerang: true, salesforce: true },
  { feature: "Communication Log", kindora: true, excel: false, bloomerang: "partial", salesforce: true },
  { feature: "Pledge Tracking & Reminders", kindora: true, excel: "partial", bloomerang: true, salesforce: "partial" },
  { feature: "Grantor Records", kindora: true, excel: "partial", bloomerang: false, salesforce: "partial" },
  { feature: "Volunteer Data", kindora: true, excel: "partial", bloomerang: "partial", salesforce: "partial" },
  { feature: "One-Click Reports", kindora: true, excel: false, bloomerang: "partial", salesforce: true },
  { feature: "Auto-backup & Security", kindora: true, excel: false, bloomerang: true, salesforce: true },
  { feature: "Multi-User Access with Roles", kindora: true, excel: false, bloomerang: true, salesforce: true },
  { feature: "Affordable for Small Nonprofits", kindora: true, excel: true, bloomerang: true, salesforce: false },
  { feature: "Ready in Minutes", kindora: true, excel: true, bloomerang: true, salesforce: false },
];

const capabilities = [
  {
    title: "Centralized Donor Database",
    description: "All donor information — contact details, giving history, communication logs, and notes — in one searchable, organized database.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
  {
    title: "Complete Giving History",
    description: "Complete donation records including one-time gifts, recurring donations, pledges, in-kind contributions, and matching gifts.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Search & Filter",
    description: "Powerful search across all donor records. Filter by name, location, giving level, tags, and custom fields.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    title: "Segmentation",
    description: "Create dynamic donor segments based on giving behavior, demographics, interests, engagement level, and custom criteria.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
  },
  {
    title: "Communication Logging",
    description: "Log every donor interaction — emails, calls, meetings, mailings — with timestamps and follow-up reminders.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Data Import & Export",
    description: "Import existing donor records from CSV/Excel. Export data for mailings, reports, or backups in multiple formats.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
  },
  {
    title: "Campaign Tracking",
    description: "Track which donors contributed to which campaigns. Measure campaign-specific fundraising performance.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Reporting & Analytics",
    description: "Generate donor lists, giving summaries, campaign reports, and board-ready analytics in seconds.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Pledge Management",
    description: "Track pledges, payment schedules, and fulfillment status. Automated reminders for pledge payments.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Custom Fields",
    description: "Add custom fields to donor profiles for data specific to your organization's needs.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
  {
    title: "Volunteer Records",
    description: "Store volunteer information, hours, skills, and availability alongside donor data in the same database.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

const testimonials = [
  {
    quote: "\"We used to maintain donor records in three different spreadsheets. Kindora gave us one source of truth.\"",
    author: "Nonprofit Operations Director",
    result: "Single source of truth",
  },
  {
    quote: "\"Searching for donor information went from minutes to seconds. Our team is so much more efficient now.\"",
    author: "Development Coordinator",
    result: "3x faster information access",
  },
  {
    quote: "\"The reporting alone saved us days of work each month. Board reports that used to take a week now take an hour.\"",
    author: "Executive Director",
    result: "90% faster reporting",
  },
];

const stats = [
  { metric: "2,847+", label: "Records managed" },
  { metric: "30 min", label: "Setup time" },
  { metric: "SOC 2", label: "Compliant" },
  { metric: "Free", label: "Trial available" },
];

const faqs = [
  {
    question: "What is a donor database for nonprofits?",
    answer:
      "A donor database for nonprofits is a centralized system that stores and organizes all information about your donors — including contact details, giving history, communication logs, and engagement data. It replaces spreadsheets and disconnected files with a searchable, secure, and accessible record system.",
  },
  {
    question: "Why do nonprofits need a dedicated donor database?",
    answer:
      "Spreadsheets become unmanageable as your donor base grows. A dedicated donor database like Kindora provides powerful search, filtering, segmentation, automated reporting, and multi-user access with role-based permissions — all while keeping your data secure and backed up.",
  },
  {
    question: "Can I migrate my donor data from spreadsheets?",
    answer:
      "Yes. Kindora supports importing donor data from CSV and Excel files. Your existing donor records can be migrated quickly, preserving giving history, contact information, and custom notes.",
  },
  {
    question: "Is my donor data secure?",
    answer:
      "Yes. Kindora is SOC 2 compliant with encrypted data storage, role-based access control, and automated backups. Your donor data is protected with enterprise-grade security.",
  },
  {
    question: "How is Kindora different from keeping records in Excel?",
    answer:
      "Excel lacks search, segmentation, multi-user access, audit trails, and automated reporting. Kindora gives you a proper database with powerful search, dynamic segments, role-based permissions, and one-click report generation — saving your team hours every week.",
  },
  {
    question: "Can multiple team members use the database at the same time?",
    answer:
      "Yes. Kindora supports unlimited users with role-based access control. Admin, Manager, Staff, and Viewer roles ensure everyone sees only what they need.",
  },
  {
    question: "Does Kindora include volunteer and grantor records?",
    answer:
      "Yes. Kindora stores volunteer data (hours, skills, availability) and grantor records (deadlines, award amounts, reporting requirements) alongside your donor database — giving you a complete view of all your organization's relationships.",
  },
  {
    question: "Can I generate donor statements and tax receipts?",
    answer:
      "Yes. Kindora generates donor statements, tax receipts, giving summaries, and impact reports ready for distribution to your supporters or board.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Donor Database for Nonprofits",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Donor database for nonprofits -- centralized donor records, giving history, search, segmentation, and reporting.",
      url: "https://spacenexus.net/kindora/donor-database-for-nonprofits",
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

export default function DonorDatabaseForNonprofitsPage() {
  return (
    <>
      <Script id="donor-db-nonprofits-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-amber-600">Donor Database for Nonprofits</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Your Donor Data,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">One Source of Truth</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Stop hunting through spreadsheets and scattered files. Kindora gives you a centralized, searchable donor database with complete giving history, communication logs, and real-time reports — all in one secure place.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-700 rounded-full shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request a Demo
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Try for Free
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                {["Centralized records", "Real-time updates", "SOC 2 compliant"].map((text) => (
                  <span key={text} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {text}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Donor Database</span>
                  </div>
                  <span className="text-xs text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full font-medium">2,847 records</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search donors..."
                      aria-label="Search donors"
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none"
                      readOnly
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { name: "Jane Doe", email: "jane@email.org", since: "Since 2019", status: "Active" },
                    { name: "Robert Smith", email: "robert@email.org", since: "Since 2020", status: "Active" },
                    { name: "Maria Johnson", email: "maria@email.org", since: "Since 2025", status: "New" },
                    { name: "Tom Kim", email: "tom@email.org", since: "Since 2021", status: "Active" },
                  ].map((donor) => (
                    <div key={donor.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{donor.name}</p>
                          <p className="text-xs text-gray-500">{donor.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium">{donor.since}</p>
                        <p className={`text-xs font-medium ${donor.status === "New" ? "text-amber-600" : "text-gray-500"}`}>{donor.status}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Auto-backed up
                  </span>
                  <span>Showing 4 of 2,847</span>
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
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-amber-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">Database Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Your complete donor database, built for nonprofits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kindora is more than a list of names — it&apos;s a fully searchable, filterable, and reportable donor database.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-amber-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cap.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{cap.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">Real Results</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What teams say about Kindora donor database</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nonprofit teams are saving hours every week with a proper donor database.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-all duration-300">
                <svg className="w-8 h-8 text-amber-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">{t.quote}</p>
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-xs font-semibold text-gray-500">{t.author}</p>
                  <div className="inline-block mt-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">{t.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">Donor Database Comparison</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Kindora beats spreadsheets and other tools</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Not all donor databases are created equal. See how Kindora compares.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium bg-gray-50 w-48">Feature</th>
                  <th className="px-6 py-4 bg-amber-500 text-white font-bold text-center min-w-[130px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Best Choice</span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[120px]">Spreadsheets</th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[120px]">Bloomerang</th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[120px]">Salesforce</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center bg-amber-50/50">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </td>
                    {[row.excel, row.bloomerang, row.salesforce].map((val, j) => (
                      <td key={j} className="px-6 py-4 text-center">
                        {val === true ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : val === "partial" ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100 text-yellow-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 border-t border-gray-200">
                  <td colSpan={5} className="px-6 py-3">
                    <div className="flex items-center gap-6 text-xs text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-500 text-white">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        </span>
                        Full support
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-100 text-yellow-600">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" /></svg>
                        </span>
                        Partial / add-on
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-400">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                        </span>
                        Not available
                      </span>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about donor database software for nonprofits.</p>
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
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to centralize your donor data?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Stop searching through spreadsheets. Start using a proper donor database built for nonprofits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-700 rounded-full shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/kindora/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-amber-600 transition-colors">
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-amber-500 bg-amber-50 hover:bg-amber-100 rounded-full transition-all duration-300"
            >
              Try for Free
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Donor Database for Nonprofits That Replaces Spreadsheets
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Kindora is the{" "}
            <a href="/kindora/donor-database-for-nonprofits" className="text-amber-600 hover:underline font-medium">
              donor database for nonprofits
            </a>{" "}
            that centralizes all your donor records in one searchable, secure platform. Our database includes{" "}
            <a href="/kindora/features/donor-management" className="text-amber-600 hover:underline font-medium">
              donor profiles
            </a>,{" "}
            <a href="/kindora/features/campaign-management" className="text-amber-600 hover:underline font-medium">
              campaign tracking
            </a>,{" "}
            <a href="/kindora/features/reporting" className="text-amber-600 hover:underline font-medium">
              reporting
            </a>, and{" "}
            <a href="/kindora/features/grant-management" className="text-amber-600 hover:underline font-medium">
              grant management
            </a>{" "}
            — all in one platform.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you need{" "}
            <a href="/kindora/donor-database-software" className="text-amber-600 hover:underline font-medium">
              donor database software
            </a>,{" "}
            <a href="/kindora/donor-management-software" className="text-amber-600 hover:underline font-medium">
              donor management software
            </a>, or a{" "}
            <a href="/kindora/donor-crm" className="text-amber-600 hover:underline font-medium">
              donor CRM
            </a>, Kindora gives your nonprofit a centralized source of truth with powerful search, segmentation, and real-time reporting. Replace scattered spreadsheets with a proper database built for your team.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/kindora/features" className="text-amber-600 hover:underline font-medium">All Features →</Link>
            <Link href="/kindora/pricing" className="text-amber-600 hover:underline font-medium">Pricing →</Link>
            <Link href="/kindora/donor-database-software" className="text-amber-600 hover:underline font-medium">Donor Database Software →</Link>
            <Link href="/kindora/donor-management-software" className="text-amber-600 hover:underline font-medium">Donor Management →</Link>
            <Link href="/kindora/best-donor-management-software" className="text-amber-600 hover:underline font-medium">Best Donor Software →</Link>
            <Link href="/kindora/donor-crm" className="text-amber-600 hover:underline font-medium">Donor CRM →</Link>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
