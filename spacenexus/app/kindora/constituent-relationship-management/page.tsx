import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title:
    "Constituent Relationship Management Software | CRM for Nonprofits",
  description:
    "Kindora constituent relationship management software helps nonprofits manage donors, volunteers, grantors, and stakeholders in one unified platform with engagement scoring, communication tools, and impact reporting.",
  alternates: {
    canonical:
      "https://spacenexus.net/kindora/constituent-relationship-management",
  },
  openGraph: {
    title:
      "Constituent Relationship Management Software",
    description:
      "Manage donors, volunteers, grantors, and stakeholders in one unified nonprofit CRM with engagement scoring, communication tools, and impact reporting.",
    url: "https://spacenexus.net/kindora/constituent-relationship-management",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora Constituent Relationship Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Constituent Relationship Management",
    description:
      "Manage donors, volunteers, grantors, and stakeholders in one unified nonprofit CRM.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "constituent relationship management",
    "constituent relationship management software",
    "CRM for nonprofits",
    "nonprofit CRM",
    "donor management software",
    "volunteer management CRM",
    "grant tracking software",
    "nonprofit constituent management",
    "stakeholder management software",
    "nonprofit relationship management",
    "constituent database software",
    "nonprofit contact management",
    "donor volunteer grantor CRM",
    "all-in-one nonprofit software",
    "constituent engagement platform",
  ],
};

const benefits = [
  {
    stat: "10+ hrs/week",
    title: "Replace Manual Tracking",
    description:
      "Eliminate spreadsheets, duplicate data entry, and disconnected tools. Automate constituent data management and reclaim hours every week.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    stat: "360°",
    title: "Know Every Relationship",
    description:
      "See the full picture of every constituent — giving history, volunteer hours, grant activity, communications, and engagement score in one view.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    stat: "2.5x",
    title: "Grow Engagement",
    description:
      "Personalized outreach, automated stewardship workflows, and engagement scoring help you deepen relationships and retain more constituents.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    stat: "90%",
    title: "Report Instantly",
    description:
      "Generate board-ready reports, constituent statements, and impact summaries in seconds — not hours of manual spreadsheet work.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const features = [
  {
    title: "Donor Profiles",
    description:
      "Complete donor profiles with giving history, communication logs, engagement scores, and personalized relationship notes.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Volunteer Management",
    description:
      "Track volunteer hours, skills, availability, and engagement alongside donor data for a complete constituent picture.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Grant Tracking",
    description:
      "Full grant lifecycle management from prospecting to award to compliance reporting with deadline reminders and receipt tracking.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Campaign Management",
    description:
      "Launch, track, and optimize fundraising campaigns with real-time goal tracking, donor segmentation, and ROI measurement.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
  },
  {
    title: "Communication Hub",
    description:
      "Email templates, bulk messaging, communication logging, and automated follow-up sequences — all connected to constituent records.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Segmentation",
    description:
      "Dynamic segments by giving level, demographics, interests, engagement score, and custom tags for targeted outreach.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "Impact Reporting",
    description:
      "Board-ready reports, constituent statements, and impact summaries generated instantly — no spreadsheets required.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Financial Management",
    description:
      "Chart of accounts, budgets, expense tracking, and cost allocation built into your constituent management platform.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
];

const comparisonData = [
  {
    feature: "Donor Management",
    kindora: true,
    salesforce: true,
    bloomerang: true,
    lgl: true,
  },
  {
    feature: "Grant Lifecycle Tracking",
    kindora: true,
    salesforce: "partial",
    bloomerang: false,
    lgl: false,
  },
  {
    feature: "Campaign Management",
    kindora: true,
    salesforce: true,
    bloomerang: true,
    lgl: false,
  },
  {
    feature: "Client Case Management",
    kindora: true,
    salesforce: "partial",
    bloomerang: false,
    lgl: false,
  },
  {
    feature: "Nonprofit Accounting",
    kindora: true,
    salesforce: false,
    bloomerang: false,
    lgl: false,
  },
  {
    feature: "Volunteer Management",
    kindora: true,
    salesforce: "partial",
    bloomerang: "partial",
    lgl: false,
  },
  {
    feature: "Impact Reporting",
    kindora: true,
    salesforce: true,
    bloomerang: "partial",
    lgl: false,
  },
  {
    feature: "No Consultants Needed",
    kindora: true,
    salesforce: false,
    bloomerang: true,
    lgl: true,
  },
  {
    feature: "Affordable Pricing",
    kindora: true,
    salesforce: false,
    bloomerang: true,
    lgl: true,
  },
];

const faqs = [
  {
    question: "What is Constituent Relationship Management?",
    answer:
      "Constituent Relationship Management (CRM) is a software approach that helps nonprofits manage all their stakeholder relationships — donors, volunteers, grantors, board members, clients, and community partners — in one unified platform. Unlike generic CRMs, constituent relationship management for nonprofits includes specialized features like donation tracking, grant lifecycle management, volunteer hour tracking, and impact reporting.",
  },
  {
    question: "How is Kindora different from Salesforce Nonprofit?",
    answer:
      "Salesforce Nonprofit Cloud requires expensive consultants, months of implementation, and ongoing customization costs that can exceed $50,000. Kindora is ready to use with setup time depending on your data and workflow needs, costs a fraction of the price, and includes nonprofit-specific features like grant lifecycle management, client case management, volunteer coordination, and cost allocation — features that require expensive add-ons in Salesforce.",
  },
  {
    question:
      "Can Kindora manage donors, volunteers, and grantors in one place?",
    answer:
      "Yes. Kindora is designed as a true all-in-one constituent relationship management platform. You can track donor giving history, volunteer hours and skills, grant applications and compliance, and stakeholder communications — all in a single unified system with 360° constituent views.",
  },
  {
    question: "Does Kindora include campaign and fundraising management?",
    answer:
      "Yes. Kindora includes full campaign management — launch fundraising campaigns, set goals, segment audiences, track donations in real time, and measure campaign ROI. You can manage email campaigns, peer-to-peer fundraising, text-to-give, and event-based campaigns all from one platform.",
  },
  {
    question: "Is Kindora CRM affordable for small nonprofits?",
    answer:
      "Absolutely. Kindora is priced specifically for small to mid-sized nonprofits. It includes enterprise-grade constituent management features — donor tracking, volunteer management, grant tracking, campaign management, financial management, and impact reporting — at a price nonprofits can actually afford. A free Starter plan is available with no credit card required.",
  },
  {
    question: "Can I import my existing constituent data?",
    answer:
      "Yes. Kindora supports easy data import from CSV and Excel files. You can import your existing donor records, volunteer data, grant information, and contact details. Our team can help with data migration to ensure a smooth transition from your current system.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Constituent Relationship Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Constituent relationship management software for nonprofits — manage donors, volunteers, grantors, and stakeholders with engagement scoring, communication tools, and impact reporting.",
      url: "https://spacenexus.net/kindora/constituent-relationship-management",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "Donor profiles and giving history",
        "Volunteer management and hour tracking",
        "Grant lifecycle tracking",
        "Campaign and fundraising management",
        "Communication hub with email templates",
        "Dynamic constituent segmentation",
        "Impact and board reporting",
        "Nonprofit financial management",
      ],
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

export default function ConstituentRelationshipManagementPage() {
  return (
    <>
      <Script
        id="crm-constituent-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse mr-2" />
                <span className="text-sm font-medium text-[#2563eb]">
                  CRM for Nonprofits
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Constituent Relationship Management That Builds{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                  Lasting Connections
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Manage every stakeholder relationship in one platform. From
                donors and volunteers to grantors and board members — Kindora
                gives you a 360° view of every constituent, so you can build
                deeper relationships and drive lasting impact.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
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

            {/* Right Visual - Constituent Dashboard */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#7c3aed] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      Constituent Dashboard
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    3,200+ Constituents
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Total Constituents", value: "3,200+" },
                    { label: "Active Relationships", value: "89%" },
                    { label: "Engagement Score", value: "94%" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center"
                    >
                      <p className="text-lg font-bold text-gray-900">
                        {s.value}
                      </p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Constituent Segments
                  </p>
                  {[
                    {
                      name: "Major Donors",
                      count: "142 donors",
                      score: "High Value",
                      color: "bg-[#2563eb]",
                    },
                    {
                      name: "Active Volunteers",
                      count: "287 volunteers",
                      score: "Engaged",
                      color: "bg-[#7c3aed]",
                    },
                    {
                      name: "Grant Partners",
                      count: "34 grantors",
                      score: "Active Grants",
                      color: "bg-green-400",
                    },
                  ].map((r) => (
                    <div
                      key={r.name}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${r.color}`} />
                        <div>
                          <span className="text-sm font-semibold text-gray-900">
                            {r.name}
                          </span>
                          <span className="text-xs text-gray-400 ml-2">
                            {r.count}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{r.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3,200+", label: "Constituents managed" },
              { value: "360°", label: "Constituent views" },
              { value: "89%", label: "Engagement rate" },
              { value: "1", label: "Unified platform" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-[#2563eb] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Why Kindora CRM
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for how nonprofits actually work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stop switching between disconnected tools. Kindora brings
              donors, volunteers, grants, and communications into one seamless
              platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#2563eb]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="text-4xl font-black text-[#2563eb] mb-3">
                  {benefit.stat}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#2563eb] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              CRM Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything your nonprofit needs in one platform
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From donor profiles to grant tracking to campaign management —
              Kindora includes every feature nonprofits need without the
              enterprise complexity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#2563eb]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2563eb]/10 flex items-center justify-center mb-4 group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5 text-[#2563eb] group-hover:text-white transition-colors"
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
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#2563eb] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Nonprofit CRM Comparison
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Kindora compares to other nonprofit CRMs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Not all nonprofit CRMs are created equal. See why Kindora
              delivers more features at a fraction of the cost.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium bg-gray-50 w-48">
                    Feature
                  </th>
                  <th className="px-6 py-4 bg-[#2563eb] text-white font-bold text-center min-w-[140px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
                        Best Value
                      </span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">
                    Salesforce NPC
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">
                    Bloomerang
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[130px]">
                    Little Green Light
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center bg-blue-50/50">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2563eb] text-white">
                        <svg
                          className="w-4 h-4"
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
                    </td>
                    {[row.salesforce, row.bloomerang, row.lgl].map(
                      (val, j) => (
                        <td key={j} className="px-6 py-4 text-center">
                          {val === true ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600">
                              <svg
                                className="w-4 h-4"
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
                          ) : val === "partial" ? (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100 text-yellow-600">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M20 12H4"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-400">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </span>
                          )}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about Kindora constituent
              relationship management software.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to transform your constituent relationships?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Stop managing donors, volunteers, and grants in separate tools.
            Start using one unified platform built for your mission.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
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
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-[#2563eb] transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300"
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
