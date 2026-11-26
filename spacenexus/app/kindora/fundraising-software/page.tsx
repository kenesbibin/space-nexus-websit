import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Fundraising Software | Nonprofit Fundraising Platform",
  description:
    "Kindora fundraising software helps nonprofits run campaigns, track donations, manage donors, and report impact — all from one integrated platform built for mission-driven organizations.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/fundraising-software",
  },
  openGraph: {
    title: "Fundraising Software",
    description: "Run successful fundraising campaigns with Kindora — donor management, campaign tracking, and impact reporting in one platform.",
    url: "https://spacenexus.net/kindora/fundraising-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Fundraising Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundraising Software",
    description: "Fundraising software built for nonprofits. Run campaigns, track donations, and manage donors from one platform.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "fundraising software",
    "nonprofit fundraising platform",
    "fundraising tools",
    "online fundraising software",
    "campaign management software",
    "donor fundraising software",
    "nonprofit fundraising tools",
    "fundraising campaign tracker",
    "charity fundraising platform",
    "NGO fundraising software",
    "fundraising management system",
    "donation fundraising platform",
    "fundraising CRM",
    "fundraising analytics",
    "fundraising reporting tools",
  ],
};

const fundraisingModules = [
  {
    title: "Campaign Management",
    description: "Create and manage multiple campaigns with goals, timelines, progress tracking, and performance analytics.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Donor Management",
    description: "Complete donor profiles with giving history, communication logs, segmentation, and engagement scoring.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Donation Tracking",
    description: "Track one-time, recurring, pledge, in-kind, and matching gifts with full campaign attribution.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Grant Management",
    description: "Track grantors, deadlines, receipts, and compliance reporting — integrated with your fundraising data.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Email & Communications",
    description: "Email templates, bulk messaging, automated follow-ups, and communication logging for every campaign.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Event Fundraising",
    description: "Create fundraising events, sell tickets, track attendance, and follow up with attendees.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Reporting & Analytics",
    description: "Campaign performance reports, donor analytics, giving trends, and board-ready summaries.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Volunteer Fundraising",
    description: "Empower volunteers to fundraise on your behalf with peer-to-peer campaign tools.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

const stats = [
  { metric: "12+", label: "Fundraising modules" },
  { metric: "All", label: "Donation types supported" },
  { metric: "1", label: "Integrated platform" },
  { metric: "Free", label: "Trial available" },
];

const faqs = [
  {
    question: "What is fundraising software?",
    answer:
      "Fundraising software helps nonprofits plan, execute, and track fundraising campaigns. It includes tools for donor management, donation tracking, campaign performance analytics, email communications, grant management, and reporting — all designed to help organizations raise more and manage relationships effectively.",
  },
  {
    question: "How is Kindora different from other fundraising tools?",
    answer:
      "Most fundraising tools only handle donations and campaigns. Kindora is a complete nonprofit operating system that also includes grant management, client case management, accounting, volunteer coordination, and impact reporting — all in one platform at one affordable price.",
  },
  {
    question: "Can Kindora manage multiple fundraising campaigns at once?",
    answer:
      "Yes. Kindora lets you create and manage multiple campaigns simultaneously, each with its own goals, timelines, donation tracking, and performance reporting. Compare campaign performance side by side.",
  },
  {
    question: "Does Kindora include email marketing for fundraising?",
    answer:
      "Yes. Kindora includes a communications hub with email templates, bulk messaging, and automated follow-ups. You can send campaign appeals, updates, and thank-you messages directly from the platform.",
  },
  {
    question: "Can Kindora track peer-to-peer fundraising?",
    answer:
      "Yes. Kindora supports volunteer and peer-to-peer fundraising with tools to track individual fundraisers, their progress, and team performance alongside your main campaigns.",
  },
  {
    question: "Is Kindora suitable for small nonprofit fundraising?",
    answer:
      "Absolutely. Kindora is designed for small to mid-sized nonprofits with affordable pricing, easy setup, and no need for consultants or dedicated IT support.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Fundraising Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Fundraising software for nonprofits — campaign management, donor management, donation tracking, and reporting in one platform.",
      url: "https://spacenexus.net/kindora/fundraising-software",
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

export default function FundraisingSoftwarePage() {
  return (
    <>
      <Script id="fundraising-software-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-amber-600">Fundraising Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Fundraising Software That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Powers Your Mission</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Run successful fundraising campaigns, manage donor relationships, track every gift, and report impact — all from one integrated platform built specifically for nonprofits.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-yellow-600 hover:to-amber-700 rounded-full shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Campaign Dashboard</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    3 Active
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Annual Gala 2026", donors: "89", progress: "68%", status: "On track" },
                    { name: "Spring Appeal", donors: "234", progress: "75%", status: "Ahead" },
                    { name: "Capital Campaign", donors: "47", progress: "43%", status: "Active" },
                  ].map((campaign) => (
                    <div key={campaign.name} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="flex items-center justify-between mb-1.5">
                        <p className="text-sm font-semibold text-gray-900">{campaign.name}</p>
                        <p className="text-xs font-bold text-gray-900">{campaign.progress}</p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
                        <span>{campaign.donors} donors</span>
                        <span>{campaign.status}</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" style={{ width: campaign.progress }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>3 active campaigns</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Real-time updates
                  </span>
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

      {/* Modules */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">Fundraising Modules</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything you need to fundraise effectively</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Campaigns, donors, donations, grants, communications, events, and reporting — all working together.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fundraisingModules.map((mod) => (
              <div
                key={mod.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-amber-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mod.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{mod.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From campaign to impact report</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A complete fundraising workflow designed for nonprofit teams.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Plan", description: "Set campaign goals, timelines, and target audiences." },
              { step: "02", title: "Launch", description: "Publish campaign pages, send appeals, and engage donors." },
              { step: "03", title: "Track", description: "Monitor progress, donations, and donor engagement in real time." },
              { step: "04", title: "Report", description: "Generate campaign reports and impact summaries for stakeholders." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-amber-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about Kindora fundraising software.</p>
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
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to transform your fundraising?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join nonprofits that trust Kindora to power their fundraising campaigns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-yellow-600 hover:to-amber-700 rounded-full shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-amber-600 transition-colors"
            >
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
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
