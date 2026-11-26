import { createKindoraServiceSchema } from "../components/commercial-schema";
import Link from "next/link";
import AnswerReadyBlock from "../components/AnswerReadyBlock";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Donor CRM | Nonprofit Donor Relationship Management",
  description:
    "Kindora Donor CRM helps nonprofits manage donor relationships, track giving history, run campaigns, and build long-term supporter engagement — all in one platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/donor-crm",
  },
  openGraph: {
    title: "Donor CRM",
    description: "Build stronger donor relationships with Kindora CRM. Track interactions, manage campaigns, and grow engagement.",
    url: "https://spacenexus.net/kindora/donor-crm",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Donor CRM" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donor CRM",
    description: "The donor CRM built for nonprofits. Manage relationships, track interactions, and grow engagement.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "donor CRM",
    "donor relationship management",
    "nonprofit CRM",
    "donor management CRM",
    "constituent relationship management",
    "donor engagement platform",
    "nonprofit donor CRM",
    "fundraising CRM",
    "donor communication tools",
    "donor interaction tracking",
    "donor retention CRM",
    "charity CRM",
    "NGO donor CRM",
    "donor management system",
    "nonprofit donor database",
  ],
};

const capabilities = [
  {
    title: "360° Donor Profiles",
    description: "Complete donor view with contact info, giving history, communication log, engagement score, and notes.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Interaction Tracking",
    description: "Log every touchpoint — calls, emails, meetings, events — with timestamps and follow-up reminders.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Donation Management",
    description: "Track one-time, recurring, pledge, in-kind, and matching gift donations with full history.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Campaign Management",
    description: "Create fundraising campaigns, set goals, segment audiences, and track real-time progress.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Segmentation",
    description: "Segment donors by giving level, interests, location, engagement, or custom criteria.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
  },
  {
    title: "Grant Tracking",
    description: "Manage grantor relationships, deadlines, receipts, and compliance alongside donor data.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Volunteer Management",
    description: "Track volunteer hours, skills, and engagement alongside your donor relationships.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Impact Reporting",
    description: "Generate donor statements, campaign reports, and impact summaries for board and stakeholders.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const benefits = [
  {
    title: "Deepen Donor Relationships",
    description: "Every interaction logged, every preference noted, every gift recorded. Know your donors and strengthen connections.",
    stat: "360°",
    statLabel: "donor view",
  },
  {
    title: "Increase Retention",
    description: "Targeted communication, timely follow-ups, and personalised engagement strategies that keep donors coming back.",
    stat: "Targeted",
    statLabel: "donor follow-ups",
  },
  {
    title: "Save Time Daily",
    description: "Stop switching between spreadsheets, email, and notes. Everything lives in one CRM.",
    stat: "One CRM",
    statLabel: "for relationship records",
  },
  {
    title: "Report with Confidence",
    description: "Board-ready reports, donor summaries, and campaign analytics — generated in seconds.",
    stat: "Shared",
    statLabel: "donor reporting",
  },
];

const crmComparison = [
  { feature: "Donor Profiles & Giving History", kindora: true, salesforce: true, bloomerang: true, hubspot: true },
  { feature: "Interaction Logging", kindora: true, salesforce: true, bloomerang: "partial", hubspot: true },
  { feature: "Campaign Management", kindora: true, salesforce: true, bloomerang: true, hubspot: "partial" },
  { feature: "Donor Segmentation", kindora: true, salesforce: true, bloomerang: true, hubspot: true },
  { feature: "Grant Lifecycle Tracking", kindora: true, salesforce: "partial", bloomerang: false, hubspot: false },
  { feature: "Volunteer Coordination", kindora: true, salesforce: "partial", bloomerang: "partial", hubspot: false },
  { feature: "Nonprofit Accounting", kindora: true, salesforce: false, bloomerang: false, hubspot: false },
  { feature: "Impact Reporting", kindora: true, salesforce: true, bloomerang: "partial", hubspot: false },
  { feature: "Client Case Management", kindora: true, salesforce: "partial", bloomerang: false, hubspot: false },
  { feature: "Affordable for Nonprofits", kindora: true, salesforce: false, bloomerang: true, hubspot: "partial" },
  { feature: "Quick Setup (No Consultants)", kindora: true, salesforce: false, bloomerang: true, hubspot: true },
];

const faqs = [
  {
    question: "What is a Donor CRM?",
    answer:
      "A Donor CRM (Customer Relationship Management) is a software platform designed specifically for nonprofits to manage relationships with donors. It centralizes donor contact information, giving history, communication logs, and engagement data, helping organizations build stronger, longer-lasting relationships with their supporters.",
  },
  {
    question: "How is Kindora different from Salesforce?",
    answer:
      "Salesforce is a powerful but complex platform that typically requires expensive consultants and months of setup. Kindora is purpose-built for nonprofits, ready to use in minutes, and includes nonprofit-specific features like grant tracking, cost allocation, and client case management that Salesforce requires expensive add-ons for.",
  },
  {
    question: "Can Kindora help with donor retention?",
    answer:
      "Yes. Kindora helps you track every donor interaction, segment your audience for targeted communication, set follow-up reminders, and measure engagement — all proven strategies for improving donor retention.",
  },
  {
    question: "Is Kindora suitable for small nonprofits?",
    answer:
      "Absolutely. Kindora is designed for small to mid-sized nonprofits. It's affordable, easy to set up, and includes everything you need without requiring a dedicated IT team.",
  },
  {
    question: "Can I import my existing donor data?",
    answer:
      "Yes. Kindora supports importing donor data from CSV and Excel files. Your existing donor records can be migrated quickly and easily.",
  },
  {
    question: "Does Kindora include email and communication tools?",
    answer:
      "Yes. Kindora includes a communications hub with email templates, bulk messaging, communication logging, and follow-up tracking — all integrated with your donor CRM.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    createKindoraServiceSchema({ name: "Kindora Donor CRM Service", description: "Kindora Donor CRM helps nonprofits manage donor relationships, track giving history, run campaigns, and build long-term supporter engagement ? all in one platform.", category: "Nonprofit donor relationship management", url: "https://spacenexus.net/kindora/donor-crm" }),
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

export default function DonorCRM() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-violet-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-violet-600">Donor CRM</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                The Donor CRM That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">Builds Relationships</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Track every donor interaction, understand giving patterns, run targeted campaigns, and build lasting relationships — all with a CRM designed specifically for nonprofits.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-600 hover:from-purple-600 hover:to-violet-700 rounded-full shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:-translate-y-0.5"
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

              <div className="flex items-center gap-6 text-sm text-gray-500">
                {["No credit card required", "See current plan terms on the pricing page"].map((text) => (
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
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Donor Relationship Timeline</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Sample activity
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      action: "Annual gift received",
                      donor: "Jane Doe",
                      detail: "Donation of 2 service sponsorships",
                      time: "2 hours ago",
                      color: "from-violet-400 to-violet-500",
                    },
                    {
                      action: "Email opened",
                      donor: "Robert Smith",
                      detail: "Campaign newsletter — Spring Appeal",
                      time: "Yesterday",
                      color: "from-blue-400 to-blue-500",
                    },
                    {
                      action: "Event attended",
                      donor: "Maria Johnson",
                      detail: "Annual Gala — Guest +1",
                      time: "3 days ago",
                      color: "from-amber-400 to-amber-500",
                    },
                    {
                      action: "Follow-up scheduled",
                      donor: "Tom Kim",
                      detail: "Call to discuss planned giving",
                      time: "Next week",
                      color: "from-emerald-400 to-emerald-500",
                    },
                  ].map((item) => (
                    <div key={item.donor} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5`}>
                        {item.donor.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">{item.action}</p>
                        <p className="text-xs text-gray-500 truncate">{item.donor} — {item.detail}</p>
                      </div>
                      <span className="text-[10px] text-gray-500 whitespace-nowrap">{item.time}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Role-based access
                  </span>
                  <span>Real-time activity feed</span>
                </div>
                <p className="mt-3 text-center text-[11px] leading-4 text-gray-400">Illustrative activity; names and timestamps are sample data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnswerReadyBlock page="donor" />

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-500 uppercase tracking-wider mb-3">Why Kindora CRM</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Build donor relationships that last</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kindora helps you understand, engage, and retain your donors better than ever before.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl font-black text-violet-500 mb-2">{b.stat}</div>
                <div className="text-xs font-semibold text-violet-500 uppercase tracking-wider mb-4">{b.statLabel}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-500 uppercase tracking-wider mb-3">CRM Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything a donor CRM should be</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Profiles, interactions, campaigns, grants, volunteers, and reporting — all connected.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-violet-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-violet-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cap.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">{cap.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-500 uppercase tracking-wider mb-3">CRM Comparison</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">The smarter choice for donor CRM</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">See why nonprofits choose Kindora over Salesforce and other CRMs.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium bg-gray-50 w-48">Feature</th>
                  <th className="px-6 py-4 bg-violet-500 text-white font-bold text-center min-w-[140px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Best Choice</span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">Salesforce</th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">Bloomerang</th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">HubSpot</th>
                </tr>
              </thead>
              <tbody>
                {crmComparison.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center bg-violet-50/50">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-violet-500 text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </span>
                    </td>
                    {[row.salesforce, row.bloomerang, row.hubspot].map((val, j) => (
                      <td key={j} className="px-6 py-4 text-center">
                        {val === true ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          </span>
                        ) : val === "partial" ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100 text-yellow-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" /></svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-violet-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about Kindora Donor CRM.</p>
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
            Ready to build stronger donor relationships?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Start using a donor CRM that helps you understand, engage, and retain your supporters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-600 hover:from-purple-600 hover:to-violet-700 rounded-full shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-violet-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-violet-500 bg-violet-50 hover:bg-violet-100 rounded-full transition-all duration-300"
            >
              Try for Free
            </a>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
