import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Donor Analytics Software | Donor Insights & Trends",
  description:
    "Kindora donor analytics software helps nonprofits understand donor behavior with giving patterns, lifetime value, retention analysis, cohort tracking, and actionable insights.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/donor-analytics-software",
  },
  openGraph: {
    title: "Donor Analytics Software",
    description: "Understand donor behavior with giving patterns, lifetime value, retention analysis, and cohort tracking.",
    url: "https://spacenexus.net/kindora/donor-analytics-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Donor Analytics Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donor Analytics Software",
    description: "Understand donor behavior with giving patterns, lifetime value, and retention analysis.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "donor analytics software",
    "donor analytics platform",
    "donor data analysis",
    "donor giving patterns",
    "donor lifetime value",
    "donor retention analytics",
    "donor behavior analysis",
    "donor insights software",
    "donor trend analysis",
    "donor segmentation analytics",
    "donor cohort analysis",
    "donor giving history",
    "donor predictive analytics",
    "donor engagement analytics",
    "donor reporting software",
  ],
};

const donorAnalyticsFeatures = [
  {
    title: "Giving Patterns",
    description: "Visualize donor giving frequency, amounts, and recency. Identify trends and seasonal patterns.",
    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
  },
  {
    title: "Lifetime Value",
    description: "Calculate donor lifetime value and track how LTV changes over time. Identify your most valuable supporters.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Retention Analysis",
    describe: "Track retention rates by cohort, campaign source, and donor segment. Identify what drives loyalty.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Cohort Tracking",
    description: "Group donors by acquisition date, campaign, or channel. Compare giving behavior across cohorts.",
    icon: "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z",
  },
  {
    title: "Segment Insights",
    description: "Analyze giving behavior by donor segment — monthly vs one-time, by level, by source, by program interest.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Churn Prediction",
    description: "Identify donors at risk of lapsing. Proactive alerts allow you to re-engage before they stop giving.",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z",
  },
  {
    title: "Campaign Attribution",
    description: "See which campaigns, channels, and appeals drive the best donor acquisition and highest LTV.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Predictive Analytics",
    description: "Forecast giving potential, identify upgrade opportunities, and predict future donor behavior.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const stats = [
  { metric: "Multi-dimensional", label: "Donor analysis" },
  { metric: "Cohort-based", label: "Retention tracking" },
  { metric: "Predictive", label: "Churn & upgrade alerts" },
  { metric: "Campaign-linked", label: "Attribution" },
];

const faqs = [
  {
    question: "What is donor analytics software?",
    answer:
      "Donor analytics software helps nonprofits analyze donor behavior — giving patterns, lifetime value, retention rates, churn risk, and campaign attribution — to make data-driven fundraising decisions.",
  },
  {
    question: "What donor metrics does Kindora track?",
    answer:
      "Kindora tracks giving frequency and amounts, donor lifetime value, retention and churn rates, cohort performance, segment behavior, and campaign attribution.",
  },
  {
    question: "Can Kindora predict which donors might lapse?",
    answer:
      "Yes. Kindora uses predictive analytics to identify donors at risk of lapsing, allowing you to proactively re-engage them before they stop giving.",
  },
  {
    question: "Does Kindora support cohort analysis?",
    answer:
      "Yes. Kindora groups donors by acquisition date, campaign, or channel, and compares giving behavior across cohorts to identify trends and patterns.",
  },
  {
    question: "Can I see which campaigns acquire the best donors?",
    answer:
      "Yes. Kindora attributes donor behavior back to the source campaign, so you can see which channels drive the highest LTV and retention rates.",
  },
  {
    question: "Does Kindora calculate donor lifetime value?",
    answer:
      "Yes. Kindora automatically calculates donor lifetime value and tracks how LTV changes over time, helping you identify your most valuable supporters.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Donor Analytics Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Donor analytics software for nonprofits — giving patterns, lifetime value, retention analysis, and predictive insights.",
      url: "https://spacenexus.net/kindora/donor-analytics-software",
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

export default function DonorAnalyticsSoftwarePage() {
  return (
    <>
      <Script id="donor-analytics-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-violet-600">Donor Analytics Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Understand Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">Donors Deeply</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Uncover giving patterns, predict behavior, and build stronger relationships. Kindora donor analytics software gives you the insights you need to grow donor loyalty and revenue.
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
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Donor Analytics</span>
                  </div>
                  <span className="px-3 py-1 bg-violet-100 text-violet-700 text-xs font-medium rounded-full">
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Avg Gift Size", value: "Giving" },
                    { label: "Retention Rate", value: "87%" },
                    { label: "Lifetime Value", value: "Donor LTV" },
                    { label: "Churn Risk", value: "Low" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Donor Insights</p>
                  {[
                    { insight: "Top 10% of donors contribute 62% of revenue", type: "Concentration", icon: "Arrow up" },
                    { insight: "Monthly donors retain at 91% vs 42% for one-time", type: "Retention", icon: "Heart" },
                    { insight: "Email campaign donors have highest LTV", type: "Channel", icon: "Target" },
                  ].map((i) => (
                    <div key={i.insight} className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2 mb-0.5">
                        <div className="w-2 h-2 rounded-full bg-violet-400" />
                        <span className="text-xs font-medium text-violet-600 uppercase">{i.type}</span>
                      </div>
                      <p className="text-sm text-gray-900 pl-4">{i.insight}</p>
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
                <div className="text-3xl lg:text-4xl font-black text-violet-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Know your donors better</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Analytics that reveal who your donors are, what drives them, and how to deepen their support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {donorAnalyticsFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-violet-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-violet-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From data to donor insight</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A simple analytics workflow.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Collect", description: "Donor data flows in automatically from every touchpoint." },
              { step: "02", title: "Analyze", description: "Patterns, trends, and predictions are calculated in real time." },
              { step: "03", title: "Discover", description: "Surface insights about donor behavior and opportunities." },
              { step: "04", title: "Act", description: "Use insights to personalize outreach and improve retention." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-violet-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-violet-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about donor analytics software.</p>
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
            Ready to understand your donors?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora donor analytics software today.
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
