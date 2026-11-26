import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title:
    "Donor Relationship Management Software | Build Stronger Donor Bonds",
  description:
    "Kindora donor relationship management software helps nonprofits build lasting donor relationships with personalized communication, engagement scoring, giving history tracking, and automated stewardship workflows.",
  alternates: {
    canonical:
      "https://spacenexus.net/kindora/donor-relationship-management",
  },
  openGraph: {
    title: "Donor Relationship Management Software",
    description:
      "Build lasting donor relationships with personalized communication, engagement scoring, and automated stewardship workflows.",
    url: "https://spacenexus.net/kindora/donor-relationship-management",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora Donor Relationship Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donor Relationship Management",
    description:
      "Build lasting donor relationships with personalized communication, engagement scoring, and automated stewardship.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "donor relationship management",
    "donor relationship management software",
    "donor CRM",
    "donor management software",
    "nonprofit donor relationship",
    "donor stewardship software",
    "donor retention software",
    "donor engagement CRM",
    "nonprofit CRM software",
    "donor relationship building",
    "donor communication software",
    "donor tracking software",
    "nonprofit relationship management",
    "charity donor management",
    "donor lifecycle management",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Donor Relationship Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Donor relationship management software — personalized communication, engagement scoring, giving history tracking, and automated stewardship workflows.",
      url: "https://spacenexus.net/kindora/donor-relationship-management",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "Donor profiles & giving history",
        "Engagement scoring",
        "Automated stewardship workflows",
        "Personalized communication",
        "Donor retention tracking",
        "Lapsed donor alerts",
        "Major donor management",
        "Donor journey mapping",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is donor relationship management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Donor relationship management (DRM) software helps nonprofits build and maintain strong relationships with their supporters. It centralizes donor data, tracks giving history, automates personalized communication, and provides insights to improve donor retention and lifetime value.",
          },
        },
        {
          "@type": "Question",
          name: "How does donor relationship management differ from a donor database?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A donor database simply stores contact information and gift records. Donor relationship management software goes further by tracking engagement, scoring donor interest, automating personalized outreach, and providing actionable insights to deepen relationships over time.",
          },
        },
        {
          "@type": "Question",
          name: "What features should donor relationship management software include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Key features include: comprehensive donor profiles, giving history and analytics, engagement scoring, automated stewardship workflows, personalized communication tools, major donor tracking, lapsed donor alerts, and reporting dashboards for team collaboration.",
          },
        },
        {
          "@type": "Question",
          name: "How does donor relationship management improve retention?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By tracking donor touchpoints, automating thank-you messages and impact updates, identifying at-risk donors before they lapse, and enabling personalized outreach based on giving patterns and interests — all of which strengthen the donor's connection to your mission.",
          },
        },
        {
          "@type": "Question",
          name: "Can Kindora manage relationships with major donors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora supports major donor management with detailed giving histories, engagement tracking, custom relationship notes, and personalized communication workflows tailored to high-value supporters.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kindora affordable for small nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora is priced specifically for small to mid-sized nonprofits, offering enterprise-grade donor relationship management features at a price nonprofits can afford. A free Starter plan is available.",
          },
        },
      ],
    },
  ],
};

const drmFeatures = [
  {
    title: "Comprehensive Donor Profiles",
    description:
      "Every donor gets a complete profile — contact details, giving history, engagement score, communication preferences, and relationship notes.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Engagement Scoring",
    description:
      "Automatically score donors based on giving frequency, recency, communication engagement, and event attendance to prioritize your outreach.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Automated Stewardship Workflows",
    description:
      "Set up automated touchpoints — thank-you messages, impact updates, birthday greetings, and renewal reminders — that run without manual effort.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Personalized Communication",
    description:
      "Send targeted messages based on donor interests, giving history, and engagement level — making every interaction feel personal.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Donor Retention Tracking",
    description:
      "Monitor retention rates by segment, identify at-risk donors before they lapse, and track the impact of your stewardship efforts.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Lapsed Donor Alerts",
    description:
      "Get notified when a donor hasn't given in a while so you can reach out personally and re-engage them before they're lost.",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
  {
    title: "Major Donor Management",
    description:
      "Dedicated workflows for major donors — detailed relationship notes, custom communication plans, and giving pattern analysis.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Donor Journey Mapping",
    description:
      "Visualize the complete donor journey — from first contact to major gift — and identify opportunities to deepen each relationship.",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  },
];

const stats = [
  { metric: "85%+", label: "Donor retention rate" },
  { metric: "3×", label: "Increase in repeat gifts" },
  { metric: "40%", label: "Less admin time" },
  { metric: "Real-time", label: "Engagement insights" },
];

const workflowSteps = [
  {
    step: "01",
    title: "Centralize",
    description:
      "All donor data — contact info, giving history, interactions — lives in one place.",
  },
  {
    step: "02",
    title: "Score",
    description:
      "Engagement scoring automatically ranks donors by interest and likelihood to give again.",
  },
  {
    step: "03",
    title: "Engage",
    description:
      "Automated stewardship workflows keep every donor connected to your mission.",
  },
  {
    step: "04",
    title: "Grow",
    description:
      "Deeper relationships lead to higher retention, larger gifts, and more lifetime value.",
  },
];

const faqs = [
  {
    question: "What is donor relationship management software?",
    answer:
      "Donor relationship management (DRM) software helps nonprofits build and maintain strong relationships with their supporters. It centralizes donor data, tracks giving history, automates personalized communication, and provides insights to improve donor retention and lifetime value.",
  },
  {
    question:
      "How does donor relationship management differ from a donor database?",
    answer:
      "A donor database simply stores contact information and gift records. Donor relationship management software goes further by tracking engagement, scoring donor interest, automating personalized outreach, and providing actionable insights to deepen relationships over time.",
  },
  {
    question:
      "What features should donor relationship management software include?",
    answer:
      "Key features include: comprehensive donor profiles, giving history and analytics, engagement scoring, automated stewardship workflows, personalized communication tools, major donor tracking, lapsed donor alerts, and reporting dashboards for team collaboration.",
  },
  {
    question: "How does donor relationship management improve retention?",
    answer:
      "By tracking donor touchpoints, automating thank-you messages and impact updates, identifying at-risk donors before they lapse, and enabling personalized outreach based on giving patterns and interests — all of which strengthen the donor's connection to your mission.",
  },
  {
    question: "Can Kindora manage relationships with major donors?",
    answer:
      "Yes. Kindora supports major donor management with detailed giving histories, engagement tracking, custom relationship notes, and personalized communication workflows tailored to high-value supporters.",
  },
  {
    question: "Is Kindora affordable for small nonprofits?",
    answer:
      "Yes. Kindora is priced specifically for small to mid-sized nonprofits, offering enterprise-grade donor relationship management features at a price nonprofits can afford. A free Starter plan is available.",
  },
];

export default function DonorRelationshipManagementPage() {
  return (
    <>
      <Script
        id="drm-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl" />
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
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-rose-600">
                  Donor Relationship Management
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                  Lasting Donor
                </span>{" "}
                Relationships
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Move beyond transactional giving. Kindora donor relationship
                management software helps you understand every donor, personalize
                every interaction, and build relationships that last — turning
                one-time donors into lifelong supporters.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-700 rounded-full shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 hover:-translate-y-0.5"
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

            {/* Right Visual - Donor CRM Preview */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
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
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      Donor Relationship Dashboard
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-medium rounded-full">
                    1,247 Donors
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Retention Rate", value: "87%" },
                    { label: "Active Donors", value: "1,224" },
                    { label: "At Risk", value: "23" },
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
                    Donor Segments
                  </p>
                  {[
                    {
                      name: "Major Donors",
                      count: "48 donors",
                      score: "High Value",
                      color: "bg-rose-400",
                    },
                    {
                      name: "Active Monthly",
                      count: "312 donors",
                      score: "Loyal",
                      color: "bg-pink-400",
                    },
                    {
                      name: "At Risk",
                      count: "23 donors",
                      score: "Re-engage",
                      color: "bg-amber-400",
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
                          <span className="text-xs text-gray-500 ml-2">
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
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-rose-500 mb-1">
                  {stat.metric}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Every tool to nurture every relationship
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From first contact to major gift, Kindora helps you manage every
              donor relationship with care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {drmFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-rose-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5 text-rose-500 group-hover:text-white transition-colors"
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
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
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

      {/* Workflow Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              From data to deeper relationships
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple workflow to turn donor data into lasting connections.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {workflowSteps.map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-rose-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about donor relationship management
              software.
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
            Ready to build relationships that last?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora donor relationship management software
            today. Turn one-time donors into lifelong supporters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-700 rounded-full shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300"
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
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-rose-500 bg-rose-50 hover:bg-rose-100 rounded-full transition-all duration-300"
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
