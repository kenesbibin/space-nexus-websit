import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Cloud CRM for Nonprofits | Cloud-Based Donor Management",
  description:
    "Kindora is the cloud CRM for nonprofits — access your donor database, campaigns, grants, and reports from anywhere. No installs, no servers, no consultants. Try it free.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/cloud-crm-for-nonprofits",
  },
  openGraph: {
    title: "Cloud CRM for Nonprofits",
    description:
      "The cloud-based nonprofit CRM you can access from anywhere. Donor management, campaigns, grants, and reporting — all in the cloud.",
    url: "https://spacenexus.net/kindora/cloud-crm-for-nonprofits",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora Cloud CRM for Nonprofits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud CRM for Nonprofits",
    description:
      "Cloud-based nonprofit CRM. Manage donors, campaigns, and grants from anywhere.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "cloud CRM for nonprofits",
    "cloud-based nonprofit CRM",
    "nonprofit cloud software",
    "cloud donor management",
    "online nonprofit CRM",
    "cloud fundraising software",
    "cloud-based donor tracking",
    "SaaS nonprofit software",
    "web-based nonprofit CRM",
    "cloud grant management",
    "remote nonprofit management",
    "cloud charity software",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Cloud CRM for Nonprofits",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Cloud-based nonprofit CRM — donor management, fundraising campaigns, grant tracking, case management, and impact reporting accessible from any device.",
      url: "https://spacenexus.net/kindora/cloud-crm-for-nonprofits",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "Cloud-based donor CRM",
        "Access from any device",
        "Real-time data sync",
        "Grant lifecycle management",
        "Campaign management",
        "Volunteer management",
        "Nonprofit accounting",
        "Impact reporting",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a cloud CRM for nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A cloud CRM for nonprofits is a donor and relationship management platform hosted online (in the cloud) rather than on local servers. It lets nonprofit staff access donor data, run campaigns, track grants, and generate reports from any device with an internet connection — no software installation required.",
          },
        },
        {
          "@type": "Question",
          name: "Why should nonprofits use cloud-based CRM software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cloud CRM eliminates the need for on-premise servers, IT maintenance, and software updates. Nonprofits can access their data from the office, home, or field — perfect for distributed teams and remote work. Cloud CRMs also offer automatic backups, security updates, and lower upfront costs compared to on-premise solutions.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kindora compare to other cloud CRMs for nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most cloud CRMs for nonprofits focus only on donor management (like Bloomerang) or require enterprise-level implementation (like Salesforce). Kindora combines donor CRM, grant tracking, case management, volunteer management, and nonprofit accounting in one cloud platform — at a price nonprofits can afford.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kindora's cloud CRM secure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora uses industry-standard encryption, automatic backups, and SOC 2-compliant security practices to protect your nonprofit's data. Your donor records, financial data, and program information are always safe and accessible.",
          },
        },
        {
          "@type": "Question",
          name: "Can I access Kindora from my phone or tablet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora is fully responsive and works on any device — desktop, tablet, or smartphone. Since it's cloud-based, your data syncs in real time across all devices.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora offer a free Starter plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora offers a free Starter plan with no credit card required. You can set up your cloud nonprofit CRM in about time varies by data and workflow needs and start managing donors, campaigns, and grants immediately.",
          },
        },
      ],
    },
  ],
};

const cloudFeatures = [
  {
    name: "Access Anywhere",
    description:
      "Use Kindora from any device with an internet connection — office, home, field, or on the go. Your data is always available.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    name: "Real-Time Sync",
    description:
      "Every update, donation, and note syncs instantly across all devices. Your team always sees the latest information.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    name: "Automatic Backups",
    description:
      "Your data is automatically backed up in the cloud. No more worrying about lost spreadsheets or server crashes.",
    icon: "M5 12a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2zM5 12V7a1 1 0 011-1h4l2 2h4a1 1 0 011 1v3M5 12v5a2 2 0 002 2h10a2 2 0 002-2v-5",
  },
  {
    name: "No IT Overhead",
    description:
      "No servers to maintain, no software to install, no updates to manage. Kindora handles all the infrastructure for you.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    name: "Enterprise Security",
    description:
      "Bank-level encryption, SOC 2 compliance, and role-based access controls protect your sensitive nonprofit data.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    name: "Team Collaboration",
    description:
      "Multiple staff members can work simultaneously with shared access to donor records, notes, and task assignments.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    name: "Donor Management",
    description:
      "Complete donor profiles with giving history, engagement scoring, segmentation, and communication logs — all in the cloud.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "Grant & Campaign Tracking",
    description:
      "Manage fundraising campaigns and grant lifecycles from the same cloud platform — no need for separate tools.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

const benefits = [
  {
    title: "Work From Anywhere",
    description:
      "Your staff, volunteers, and board members can access the CRM from any location — perfect for hybrid and remote teams.",
    stat: "100%",
    statLabel: "cloud-based access",
  },
  {
    title: "Zero IT Hassle",
    description:
      "No servers to buy, no software to install, no backups to schedule. Kindora handles all infrastructure so you can focus on your mission.",
    stat: "0",
    statLabel: "IT overhead required",
  },
  {
    title: "Always Up to Date",
    description:
      "New features and security updates are deployed automatically. You always have the latest version without any manual upgrades.",
    stat: "Auto",
    statLabel: "updates & patches",
  },
  {
    title: "Scales With You",
    description:
      "Whether you have 100 donors or 100,000, Kindora's cloud infrastructure grows with your organization without performance issues.",
    stat: "∞",
    statLabel: "scalability",
  },
];

const cloudVsTraditional = [
  {
    feature: "Access from Any Device",
    cloud: true,
    traditional: false,
  },
  {
    feature: "Real-Time Data Sync",
    cloud: true,
    traditional: false,
  },
  {
    feature: "Automatic Backups",
    cloud: true,
    traditional: false,
  },
  {
    feature: "No Server Maintenance",
    cloud: true,
    traditional: false,
  },
  {
    feature: "Remote Team Access",
    cloud: true,
    traditional: false,
  },
  {
    feature: "Automatic Security Updates",
    cloud: true,
    traditional: false,
  },
  {
    feature: "Low Upfront Cost",
    cloud: true,
    traditional: false,
  },
  {
    feature: "Instant Setup",
    cloud: true,
    traditional: false,
  },
];

const faqs = [
  {
    question: "What is a cloud CRM for nonprofits?",
    answer:
      "A cloud CRM for nonprofits is a donor and relationship management platform hosted online (in the cloud) rather than on local servers. It lets nonprofit staff access donor data, run campaigns, track grants, and generate reports from any device with an internet connection — no software installation required.",
  },
  {
    question: "Why should nonprofits use cloud-based CRM software?",
    answer:
      "Cloud CRM eliminates the need for on-premise servers, IT maintenance, and software updates. Nonprofits can access their data from the office, home, or field — perfect for distributed teams and remote work. Cloud CRMs also offer automatic backups, security updates, and lower upfront costs compared to on-premise solutions.",
  },
  {
    question: "How does Kindora compare to other cloud CRMs for nonprofits?",
    answer:
      "Most cloud CRMs for nonprofits focus only on donor management (like Bloomerang) or require enterprise-level implementation (like Salesforce). Kindora combines donor CRM, grant tracking, case management, volunteer management, and nonprofit accounting in one cloud platform — at a price nonprofits can afford.",
  },
  {
    question: "Is Kindora's cloud CRM secure?",
    answer:
      "Yes. Kindora uses industry-standard encryption, automatic backups, and SOC 2-compliant security practices to protect your nonprofit's data. Your donor records, financial data, and program information are always safe and accessible.",
  },
  {
    question: "Can I access Kindora from my phone or tablet?",
    answer:
      "Yes. Kindora is fully responsive and works on any device — desktop, tablet, or smartphone. Since it's cloud-based, your data syncs in real time across all devices.",
  },
  {
    question: "Does Kindora offer a free Starter plan?",
    answer:
      "Yes. Kindora offers a free Starter plan with no credit card required. You can set up your cloud nonprofit CRM in about time varies by data and workflow needs and start managing donors, campaigns, and grants immediately.",
  },
];

export default function CloudCRMForNonprofitsPage() {
  return (
    <>
      <Script
        id="cloud-crm-for-nonprofits-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
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
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-cyan-600">
                  Cloud CRM for Nonprofits
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  Cloud CRM
                </span>{" "}
                Built for Nonprofits
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Manage donors, run campaigns, track grants, and report impact —
                all from a cloud platform you can access from anywhere. No
                servers, no installs, no IT headaches.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-700 rounded-full shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Try Kindora Free
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
                  href="/kindora/demo"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Request a Demo
                </Link>
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

            {/* Right visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
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
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      Cloud Dashboard
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Online
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      label: "Donors Tracked",
                      value: "2,847",
                      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                      color: "text-cyan-500",
                    },
                    {
                      label: "Active Campaigns",
                      value: "6",
                      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                      color: "text-blue-500",
                    },
                    {
                      label: "Grants Managed",
                      value: "12",
                      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                      color: "text-purple-500",
                    },
                    {
                      label: "Team Members Online",
                      value: "4",
                      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
                      color: "text-green-500",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <svg
                          className={`w-5 h-5 ${item.color}`}
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
                        <span className="text-sm text-gray-600">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Cloud-encrypted
                  </span>
                  <span>Real-time sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-600 uppercase tracking-wider mb-3">
              Why Cloud
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nonprofit CRM without the IT burden
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cloud CRM means your team can work from anywhere, your data is
              always safe, and you never worry about servers or software
              updates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl font-black text-cyan-500 mb-2">
                  {b.stat}
                </div>
                <div className="text-xs font-semibold text-cyan-500 uppercase tracking-wider mb-4">
                  {b.statLabel}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Features */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-600 uppercase tracking-wider mb-3">
              Cloud Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything your nonprofit needs — in the cloud
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Full nonprofit CRM functionality with the freedom and security of
              cloud computing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cloudFeatures.map((feature) => (
              <div
                key={feature.name}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-cyan-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5 text-cyan-500 group-hover:text-white transition-colors"
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
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {feature.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud vs Traditional */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-600 uppercase tracking-wider mb-3">
              Cloud vs Traditional
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why cloud beats on-premise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Traditional CRM software ties you to one computer. Cloud CRM
              frees your team to work from anywhere.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium bg-gray-50 w-48">
                    Capability
                  </th>
                  <th className="px-6 py-4 bg-cyan-500 text-white font-bold text-center min-w-[140px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
                        Cloud
                      </span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[140px]">
                    Traditional CRM
                  </th>
                </tr>
              </thead>
              <tbody>
                {cloudVsTraditional.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center bg-cyan-50/50">
                      {row.cloud ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-cyan-500 text-white">
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
                    <td className="px-6 py-4 text-center">
                      {row.traditional ? (
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500 text-white">
                <svg
                  className="w-3 h-3"
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
              Included
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-400">
                <svg
                  className="w-3 h-3"
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
              Not available
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-cyan-600 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about cloud CRM for nonprofits.
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

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to move your nonprofit to the cloud?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join nonprofits that manage donors, campaigns, grants, and impact
            reporting from Kindora&apos;s cloud platform — accessible from
            anywhere, anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-700 rounded-full shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Start Free — No Credit Card Required
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
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-cyan-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Free Starter plan · No credit card · Setup time varies by data and workflows · See current plan terms on the pricing page
          </p>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
