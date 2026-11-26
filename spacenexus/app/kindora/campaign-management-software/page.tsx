import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Campaign Management Software | Fundraising Campaigns",
  description:
    "Kindora campaign management software helps nonprofits plan, launch, track, and optimize fundraising campaigns across channels — with goal tracking, donor segmentation, and real-time analytics.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/campaign-management-software",
  },
  openGraph: {
    title: "Campaign Management Software",
    description: "Plan, launch, and optimize fundraising campaigns with Kindora campaign management software.",
    url: "https://spacenexus.net/kindora/campaign-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Campaign Management Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Management Software",
    description: "Plan, launch, and optimize fundraising campaigns with goal tracking and real-time analytics.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "campaign management software",
    "fundraising campaign software",
    "nonprofit campaign management",
    "campaign tracking platform",
    "fundraising campaign tools",
    "donor campaign management",
    "campaign analytics software",
    "multi-channel campaign",
    "campaign goal tracking",
    "fundraising campaign planner",
    "campaign performance tracking",
    "donor segmentation campaigns",
    "campaign reporting software",
    "nonprofit marketing campaigns",
    "campaign optimization tools",
  ],
};

const campaignFeatures = [
  {
    title: "Campaign Dashboard",
    description: "Central view of all campaigns with goals, progress, timelines, and performance metrics at a glance.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Goal Setting & Tracking",
    description: "Set fundraising goals, track progress in real time, and get notified when milestones are reached.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Donor Segmentation",
    description: "Target campaigns to specific donor segments based on giving history, engagement, and preferences.",
    icon: "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z",
  },
  {
    title: "Multi-Channel Support",
    description: "Launch campaigns across email, SMS, direct mail, social media, and your website from one platform.",
    icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z",
  },
  {
    title: "Automated Appeals",
    description: "Create automated campaign sequences with scheduled emails, SMS, and follow-up messages.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Campaign Templates",
    description: "Reusable campaign templates with pre-built email journeys, landing pages, and donation forms.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
  },
  {
    title: "A/B Testing",
    description: "Test subject lines, messaging, donation amounts, and calls to action to optimize campaign performance.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Campaign Analytics",
    description: "Real-time analytics on campaign performance, donor acquisition, conversion rates, and ROI.",
    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
  },
];

const stats = [
  { metric: "Multi-channel", label: "Campaign management" },
  { metric: "Real-time", label: "Goal tracking" },
  { metric: "Segment-based", label: "Targeting" },
  { metric: "A/B", label: "Testing built-in" },
];

const faqs = [
  {
    question: "What is campaign management software for nonprofits?",
    answer:
      "Campaign management software helps nonprofits plan, launch, track, and optimize fundraising campaigns. It centralizes goal setting, donor targeting, multi-channel communications, and performance analytics in one platform.",
  },
  {
    question: "Can Kindora track campaign goals in real time?",
    answer:
      "Yes. Kindora provides real-time campaign dashboards showing progress toward goals, funds raised, donor acquisition, and key performance metrics — updated as donations come in.",
  },
  {
    question: "Does Kindora support multi-channel campaigns?",
    answer:
      "Yes. You can launch and manage campaigns across email, SMS, direct mail, social media, and your website — all from a single campaign workspace.",
  },
  {
    question: "Can I target specific donor segments?",
    answer:
      "Yes. Kindora lets you create donor segments based on giving history, engagement level, interests, demographics, and more. Target the right donors with the right message.",
  },
  {
    question: "Does Kindora include A/B testing?",
    answer:
      "Yes. Kindora supports A/B testing for email subject lines, messaging, donation amounts, and calls to action so you can optimize campaign performance.",
  },
  {
    question: "Can I reuse campaign templates?",
    answer:
      "Yes. Kindora provides reusable campaign templates with pre-built email journeys, landing pages, and donation forms. Save time by cloning successful campaigns.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Campaign Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Campaign management software for nonprofits — plan, launch, and optimize fundraising campaigns with goal tracking and analytics.",
      url: "https://spacenexus.net/kindora/campaign-management-software",
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

export default function CampaignManagementSoftwarePage() {
  return (
    <>
      <Script id="campaign-management-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-teal-600">Campaign Management Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Launch & Optimize{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">Powerful Campaigns</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Plan, launch, and optimize fundraising campaigns across every channel. Kindora campaign management software helps you reach the right donors, track progress, and maximize results.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 rounded-full shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-0.5"
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

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Campaign Dashboard</span>
                  </div>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                    {new Date().getFullYear()} Active
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Active Campaigns", value: "6" },
                    { label: "Total Raised", value: "Donations" },
                    { label: "Avg Conversion", value: "Gifts" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                       <p className="text-xs text-gray-600">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Campaigns</p>
                  {[
                    { name: "Annual Appeal", channel: "Email + Mail", progress: "72%" },
                    { name: "Giving Tuesday", channel: "Multi-channel", progress: "45%" },
                    { name: "Spring Fundraiser", channel: "Email + Social", progress: "91%" },
                  ].map((c) => (
                    <div key={c.name} className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-teal-400" />
                          <span className="text-sm font-semibold text-gray-900">{c.name}</span>
                        </div>
                         <span className="text-xs text-gray-600">{c.progress}</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full" style={{ width: c.progress }} />
                      </div>
                       <p className="text-xs text-gray-600 mt-1">{c.channel}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-teal-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-teal-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything for campaign success</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plan, execute, and optimize campaigns across every channel.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {campaignFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-teal-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-teal-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-teal-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From strategy to results</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A proven campaign workflow.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Plan", description: "Set goals, define segments, and create campaign strategy." },
              { step: "02", title: "Build", description: "Design messaging, choose channels, and set up automation." },
              { step: "03", title: "Launch", description: "Deploy across channels, test variations, and monitor in real time." },
              { step: "04", title: "Optimize", description: "Analyze performance, refine targeting, and improve results." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-teal-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about campaign management software.</p>
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

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to launch your next campaign?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Start planning and optimizing fundraising campaigns with Kindora.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 rounded-full shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-teal-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-teal-500 bg-teal-50 hover:bg-teal-100 rounded-full transition-all duration-300"
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
