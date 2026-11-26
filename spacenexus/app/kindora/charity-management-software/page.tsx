import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Charity Management Software",
  description:
    "Purpose-built charity management software for donor tracking, grant management, fundraising campaigns, and financial reporting. Replace spreadsheets with one unified platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/charity-management-software",
  },
  openGraph: {
    title: "Charity Management Software",
    description:
      "Streamline your charity operations with Kindora's management software. Donor CRM, grant tracking, volunteer management, and financial reporting.",
    url: "https://spacenexus.net/kindora/charity-management-software",
    siteName: "Kindora by SpaceNexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Charity Management Software — Kindora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charity Management Software",
    description:
      "All-in-one charity management software for donor tracking, grant management, and impact reporting. Try free.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "charity management software",
    "charity software",
    "charity management platform",
    "software for charities",
    "charity operations software",
    "charity database software",
    "charity management system",
    "charity donor management software",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Charity Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Comprehensive charity management software for donor tracking, grant management, fundraising campaigns, volunteer coordination, and financial reporting.",
      url: "https://spacenexus.net/kindora/charity-management-software",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "Donor Management",
        "Grant Tracking",
        "Fundraising Campaigns",
        "Volunteer Management",
        "Client Case Management",
        "Charity Accounting",
        "Cost Allocation",
        "Reports & Analytics",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is charity management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Charity management software is a specialized platform that helps charitable organizations manage donors, track grants, run fundraising campaigns, coordinate volunteers, and report financial activity — all from a single unified system instead of disconnected spreadsheets and tools.",
          },
        },
        {
          "@type": "Question",
          name: "Why do charities need management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Charities need management software to replace manual spreadsheet workflows, reduce data entry errors, improve donor retention, streamline compliance reporting, and gain real-time visibility into fundraising performance. The right software saves hours of administrative work each week.",
          },
        },
        {
          "@type": "Question",
          name: "What features should charity management software have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Essential features include donor CRM and donation tracking, grant lifecycle management, fundraising campaign tools, volunteer management, client or program case management, charity accounting with fund tracking, role-based access control, and export-ready financial reports for trustees and regulators.",
          },
        },
        {
          "@type": "Question",
          name: "How much does charity management software cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing varies widely — from free tiers for small charities to enterprise plans costing thousands per month. Kindora is priced specifically for small to mid-sized charities with a ongoing free Starter plan; paid plans are custom-quoted, so you can evaluate the platform before committing.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kindora a good charity management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora is purpose-built for charities with integrated modules for donor management, grant tracking, fundraising campaigns, volunteer coordination, and financial reporting. It replaces multiple disconnected tools with one unified platform at a charity-friendly price point.",
          },
        },
        {
          "@type": "Question",
          name: "Can I try Kindora for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can start a free Starter plan with no credit card required. You can also request a personalized demo to see how Kindora fits your organization's specific needs.",
          },
        },
      ],
    },
  ],
};

const features = [
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Donor Management Software",
    description:
      "Track every donor relationship with a complete CRM — from first gift to major donor cultivation. Automated thank-you letters, donation history, and giving analytics.",
    href: "/kindora/features/donor-management",
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Grant Management Software",
    description:
      "Manage the full grant lifecycle — from prospecting and applications to award tracking and compliance reporting. Never miss a deadline again.",
    href: "/kindora/features/grant-management",
  },
  {
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
    title: "Fundraising Campaign Software",
    description:
      "Plan, execute, and track fundraising campaigns across multiple channels. Monitor progress in real time with visual dashboards.",
    href: "/kindora/features/campaign-management",
  },
  {
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    title: "Volunteer Management Software",
    description:
      "Recruit, schedule, and track volunteer hours. Manage shifts, communicate with your volunteer base, and measure community impact.",
    href: "/kindora/features/people-management",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Client & Program Management",
    description:
      "Track client enrollment, case notes, outcomes, and program impact. Built for social services, youth programs, and community organizations.",
    href: "/kindora/features/client-management",
  },
  {
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    title: "Charity Accounting Software",
    description:
      "Purpose-built charity accounting with fund tracking, cost allocation across grants, budget management, and financial statements.",
    href: "/kindora/features/financial-management",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Reports & Analytics",
    description:
      "Real-time dashboards, donation trend charts, program enrollment metrics, and export-ready reports for trustees and regulatory compliance.",
    href: "/kindora/features/reporting",
  },
];

const benefits = [
  {
    stat: "Automation",
    label: "Routine work",
    description: "Automate donor follow-ups, grant reminders, and reporting.",
  },
  {
    stat: "Reporting",
    label: "Connected workflows",
    description: "Generate trustee-ready reports in minutes, not days.",
  },
  {
    stat: "Role-based",
    label: "Data visibility",
    description: "Real-time dashboards across donors, grants, and programs.",
  },
  {
    stat: "Guided",
    label: "Setup support",
    description: "Discuss setup needs with the Kindora team before getting started.",
  },
];

const faqs = [
  {
    question: "What is charity management software?",
    answer:
      "Charity management software is a specialized platform that helps charitable organizations manage donors, track grants, run fundraising campaigns, coordinate volunteers, and report financial activity — all from a single unified system instead of disconnected spreadsheets and tools.",
  },
  {
    question: "Why do charities need management software?",
    answer:
      "Charities need management software to replace manual spreadsheet workflows, reduce data entry errors, improve donor retention, streamline compliance reporting, and gain real-time visibility into fundraising performance. The right software saves hours of administrative work each week.",
  },
  {
    question: "What features should charity management software have?",
    answer:
      "Essential features include donor CRM and donation tracking, grant lifecycle management, fundraising campaign tools, volunteer management, client or program case management, charity accounting with fund tracking, role-based access control, and export-ready financial reports for trustees and regulators.",
  },
  {
    question: "How much does charity management software cost?",
    answer:
      "Pricing varies widely — from free tiers for small charities to enterprise plans costing thousands per month. Kindora is priced specifically for small to mid-sized charities with a ongoing free Starter plan; paid plans are custom-quoted, so you can evaluate the platform before committing.",
  },
  {
    question: "Is Kindora a good charity management software?",
    answer:
      "Yes. Kindora is purpose-built for charities with integrated modules for donor management, grant tracking, fundraising campaigns, volunteer coordination, and financial reporting. It replaces multiple disconnected tools with one unified platform at a charity-friendly price point.",
  },
  {
    question: "Can I try Kindora for free?",
    answer:
      "Yes. You can start a free Starter plan with no credit card required. You can also request a personalized demo to see how Kindora fits your organization's specific needs.",
  },
];

export default function CharityManagementSoftwarePage() {
  return (
    <>
      <Script
        id="charity-software-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-rose-700">
                Charity Management Software
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Charity Management Software{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
                That Maximizes Your Fundraising
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Replace scattered spreadsheets and disconnected tools with one
              powerful charity management platform. Track donors, manage grants,
              run campaigns, and report impact — all in one place.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 rounded-full shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              {[
                { icon: "M5 13l4 4L19 7", label: "No credit card required" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Guided setup" },
                { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Built for charities" },
              ].map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-rose-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={icon}
                    />
                  </svg>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-rose-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {benefit.stat}
                </div>
                <div className="text-sm font-semibold text-rose-100 mb-1">
                  {benefit.label}
                </div>
                <div className="text-xs text-rose-200">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Charity Management Software */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-rose-600 uppercase tracking-wider mb-3">
                Why Charity Software Matters
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Stop Juggling Spreadsheets. Start Maximizing Your Fundraising.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Most charities run on a patchwork of Excel files, email threads,
                and disconnected tools. This creates data silos, causes missed
                deadlines, and wastes hours every week on manual data entry.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Purpose-built <strong>charity management software</strong> replaces
                this chaos with a single source of truth — where donor data, grant
                information, campaign performance, and financial records live
                together in one secure platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-full transition-colors"
                >
                  See How It Works
                </Link>
                <Link
                  href="/kindora/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="space-y-4">
                  {[
                    { label: "Donor Retention", progress: "92%", color: "bg-rose-500", width: "92%" },
                    { label: "Grant Compliance", progress: "88%", color: "bg-pink-500", width: "88%" },
                    { label: "Campaign ROI", progress: "95%", color: "bg-fuchsia-500", width: "95%" },
                    { label: "Volunteer Engagement", progress: "85%", color: "bg-red-500", width: "85%" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-700">{item.label}</span>
                        <span className="text-gray-500">{item.progress}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5">
                        <div
                          className={`${item.color} h-2.5 rounded-full`}
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-gray-900">4,500+</div>
                    <div className="text-xs text-gray-500">Donors Managed</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">$3.8M</div>
                    <div className="text-xs text-gray-500">Funds Raised</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">25,000+</div>
                    <div className="text-xs text-gray-500">Hours Saved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-rose-600 uppercase tracking-wider mb-3">
              Core Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything Your Charity Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From donor management to financial reporting, Kindora&apos;s charity
              management software covers every aspect of your operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <Link
                key={i}
                href={feature.href}
                className="group bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-rose-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 mb-4 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-rose-600 uppercase tracking-wider mb-3">
              Built For
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Charity Management Software for Every Organization
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you&apos;re a local community charity or a national
              fundraising organization, Kindora scales with your mission.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Health Charities",
                description: "Track patient programs, manage fundraising for research, and report outcomes to donors.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                title: "Education Charities",
                description: "Manage scholarship funds, track student outcomes, and report to education funders.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
              },
              {
                title: "Animal Welfare Charities",
                description: "Track adoption programs, manage donor campaigns, and report animal welfare outcomes.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z M12 8v4 M12 16h.01",
              },
              {
                title: "Community Charities",
                description: "Manage local programs, coordinate volunteers, and track community impact metrics.",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f8f9fa] rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-rose-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 mb-4">
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
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-[#f8f9fa]" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-rose-600 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about charity management software.
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

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Maximize Your Charity&apos;s Fundraising?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join organizations that trust Kindora&apos;s charity management
            software to manage donors, track grants, run campaigns, and report
            impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 rounded-full shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300"
            >
              Get Started Today
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
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-rose-600 transition-colors"
            >
              View Pricing
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Charity Management Software for Organizations of Every Size
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kindora is a charity management platform with{" "}
            <Link
              href="/kindora/features/donor-management"
              className="text-rose-600 hover:underline"
            >
              donor management software
            </Link>{" "}
            and charity operations features for organizations. Our{" "}
            <Link
              href="/kindora/features/grant-management"
              className="text-rose-600 hover:underline"
            >
              grant management software
            </Link>{" "}
            handles the full lifecycle from prospecting to compliance reporting.
            Whether you need{" "}
            <Link
              href="/kindora/features/campaign-management"
              className="text-rose-600 hover:underline"
            >
              fundraising campaign software
            </Link>
            ,{" "}
            <Link
              href="/kindora/features/people-management"
              className="text-rose-600 hover:underline"
            >
              volunteer management software
            </Link>
            , or{" "}
            <Link
              href="/kindora/features/financial-management"
              className="text-rose-600 hover:underline"
            >
              charity accounting software
            </Link>
            , Kindora delivers enterprise-grade features at a price charities
            can afford. Unlike generic CRM platforms or spreadsheets, our{" "}
            <strong>charity management software</strong> is purpose-built for
            the unique needs of charitable organizations — with fund
            accounting, cost allocation, and impact reporting built in from day
            one.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/kindora"
              className="text-rose-600 hover:underline font-medium"
            >
              Kindora Home →
            </Link>
            <Link
              href="/kindora/features"
              className="text-rose-600 hover:underline font-medium"
            >
              All Features →
            </Link>
            <Link
              href="/kindora/pricing"
              className="text-rose-600 hover:underline font-medium"
            >
              Pricing →
            </Link>
            <Link
              href="/kindora/contact"
              className="text-rose-600 hover:underline font-medium"
            >
              Request Demo →
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
