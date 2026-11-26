import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Fundraising Management Software | Complete Fundraising Platform",
  description:
    "Kindora fundraising management software helps nonprofits plan, execute, track, and report on all fundraising activities — campaigns, events, grants, and donor relationships in one platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/fundraising-management-software",
  },
  openGraph: {
    title: "Fundraising Management Software",
    description: "Complete fundraising management for nonprofits — campaigns, events, grants, and donor management in one platform.",
    url: "https://spacenexus.net/kindora/fundraising-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Fundraising Management Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundraising Management Software",
    description: "Plan, track, and report on all fundraising activities with Kindora's all-in-one management platform.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "fundraising management software",
    "fundraising management platform",
    "nonprofit fundraising management",
    "fundraising operations software",
    "campaign management system",
    "fundraising program management",
    "donor management platform",
    "fundraising workflow software",
    "charity fundraising management",
    "NGO fundraising operations",
    "fundraising planning tools",
    "fundraising performance tracking",
    "fundraising team management",
    "nonprofit development software",
    "fundraising administration platform",
  ],
};

const managementModules = [
  {
    title: "Strategic Planning",
    description: "Set fundraising goals, create campaign calendars, allocate resources, and track progress against annual targets.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Campaign Management",
    description: "Create, launch, and manage multiple campaigns simultaneously with real-time progress tracking.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Donor Portfolio Management",
    description: "Manage donor segments, assign portfolio responsibilities, and track relationship development activities.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Event Fundraising",
    description: "Plan fundraising events, manage ticketing, track attendance, and measure event ROI.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Grant Management",
    description: "Track grantors, deadlines, submissions, awards, and compliance reporting across all funding sources.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Communications & Stewardship",
    description: "Plan and execute donor communications, stewardship sequences, and engagement campaigns.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Budget & Expense Tracking",
    description: "Manage fundraising budgets, track expenses by campaign, and measure cost per dollar raised.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Reporting & Analytics",
    description: "Executive dashboards, campaign ROI analysis, donor trends, and board-ready performance reports.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const stats = [
  { metric: "8+", label: "Management modules" },
  { metric: "All", label: "Revenue streams covered" },
  { metric: "Real-time", label: "Performance tracking" },
  { metric: "1", label: "Unified platform" },
];

const faqs = [
  {
    question: "What is fundraising management software?",
    answer:
      "Fundraising management software is a comprehensive platform that helps nonprofits plan, execute, track, and report on all fundraising activities. It goes beyond simple donation tracking to include strategic planning, campaign management, donor portfolio management, event coordination, grant tracking, budget management, and performance analytics.",
  },
  {
    question: "How is fundraising management different from a donation platform?",
    answer:
      "A donation platform focuses on accepting and processing gifts. Fundraising management software covers the entire fundraising lifecycle — planning campaigns, managing donor relationships, coordinating events, tracking grants, managing budgets, and analyzing performance across all revenue streams.",
  },
  {
    question: "Can Kindora manage my entire fundraising program?",
    answer:
      "Yes. Kindora is a complete fundraising management platform covering campaigns, events, grants, donor management, communications, budget tracking, and reporting — all in one integrated system.",
  },
  {
    question: "Does Kindora help with fundraising planning?",
    answer:
      "Yes. Kindora supports strategic planning with goal setting, campaign calendars, resource allocation, and progress tracking against annual fundraising targets.",
  },
  {
    question: "Can I track fundraising expenses and ROI?",
    answer:
      "Yes. Kindora includes budget and expense tracking by campaign, allowing you to measure cost per dollar raised, campaign profitability, and overall fundraising ROI.",
  },
  {
    question: "Is Kindora suitable for fundraising teams?",
    answer:
      "Yes. Kindora supports multiple users with role-based access, portfolio assignments, and team collaboration tools — designed for development teams of all sizes.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Fundraising Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Fundraising management software for nonprofits — plan, execute, track, and report on all fundraising activities.",
      url: "https://spacenexus.net/kindora/fundraising-management-software",
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

export default function FundraisingManagementSoftwarePage() {
  return (
    <>
      <Script id="fundraising-management-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lime-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-lime-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-lime-600">Fundraising Management Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Manage Every Aspect of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-600">Fundraising</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Plan campaigns, manage donors, coordinate events, track grants, control budgets, and measure performance — all from one comprehensive fundraising management platform.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-lime-500 to-green-600 hover:from-green-600 hover:to-lime-700 rounded-full shadow-xl shadow-lime-500/30 hover:shadow-lime-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-lime-50 to-green-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Fundraising Overview</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    YTD View
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Active Campaigns", value: "6" },
                    { label: "Total Donors", value: "2,847" },
                    { label: "Events Planned", value: "4" },
                    { label: "Grants Active", value: "12" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <p className="text-xs text-gray-500 mb-0.5">{stat.label}</p>
                      <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Upcoming Deadlines</p>
                  {[
                    { task: "Grant application due", campaign: "Foundation XYZ", date: "Jun 15" },
                    { task: "Campaign midpoint review", campaign: "Spring Appeal", date: "Jun 20" },
                    { task: "Board report submission", campaign: "Q2 Fundraising", date: "Jun 30" },
                  ].map((item) => (
                    <div key={item.task} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.task}</p>
                        <p className="text-xs text-gray-500">{item.campaign}</p>
                      </div>
                      <span className="text-xs font-semibold text-amber-600">{item.date}</span>
                    </div>
                  ))}
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
                <div className="text-3xl lg:text-4xl font-black text-lime-500 mb-1">{stat.metric}</div>
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
            <p className="text-sm font-semibold text-lime-500 uppercase tracking-wider mb-3">Management Modules</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Complete fundraising management in one place</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plan, execute, track, and optimize every aspect of your fundraising program.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {managementModules.map((mod) => (
              <div
                key={mod.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-lime-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-lime-500/10 flex items-center justify-center mb-4 group-hover:bg-lime-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-lime-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mod.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors">{mod.title}</h3>
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
            <p className="text-sm font-semibold text-lime-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From planning to impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A structured approach to fundraising management.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Plan", description: "Set annual targets, plan campaigns, and allocate resources." },
              { step: "02", title: "Execute", description: "Launch campaigns, engage donors, and run events." },
              { step: "03", title: "Track", description: "Monitor progress, budgets, and performance in real time." },
              { step: "04", title: "Optimize", description: "Analyze results, refine strategies, and report impact." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-lime-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
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
            <p className="text-sm font-semibold text-lime-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about fundraising management software.</p>
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
            Ready to take control of your fundraising program?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join nonprofits that trust Kindora to manage their entire fundraising operation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-lime-500 to-green-600 hover:from-green-600 hover:to-lime-700 rounded-full shadow-xl shadow-lime-500/30 hover:shadow-lime-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-lime-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-lime-500 bg-lime-50 hover:bg-lime-100 rounded-full transition-all duration-300"
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
