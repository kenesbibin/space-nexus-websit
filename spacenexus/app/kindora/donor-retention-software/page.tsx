import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Donor Retention Software | Keep Nonprofit Donors Engaged",
  description:
    "Kindora donor retention software helps nonprofits keep donors engaged with smart segmentation, automated follow-ups, engagement tracking, and personalized communication.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/donor-retention-software",
  },
  openGraph: {
    title: "Donor Retention Software",
    description: "Keep your donors coming back. Kindora helps nonprofits track engagement, automate follow-ups, and build lasting relationships.",
    url: "https://spacenexus.net/kindora/donor-retention-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Donor Retention Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donor Retention Software",
    description: "Retain more donors with smart engagement tools. Kindora helps nonprofits build lasting supporter relationships.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "donor retention software",
    "donor retention strategies",
    "nonprofit donor retention",
    "donor engagement platform",
    "keep nonprofit donors",
    "donor loyalty software",
    "donor communication tools",
    "donor follow-up automation",
    "nonprofit engagement software",
    "donor retention rate",
    "stewardship software",
    "donor cultivation platform",
    "charity donor retention",
    "NGO donor loyalty",
    "donor re-engagement tools",
  ],
};

const retentionStrategies = [
  {
    title: "Smart Segmentation",
    description: "Group donors by giving level, frequency, interests, and engagement. Send the right message to the right people at the right time.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
  },
  {
    title: "Engagement Scoring",
    description: "Track donor engagement across interactions, donations, events, and communications. Identify who's at risk of lapsing.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Automated Follow-ups",
    description: "Set triggers for thank-you messages, renewal reminders, birthday greetings, and re-engagement campaigns.",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
  {
    title: "Communication Hub",
    description: "Email templates, bulk messaging, and communication logging. Track opens, clicks, and responses.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Giving Pattern Analysis",
    description: "Visualize donation trends, frequency, and seasonality. Identify patterns and predict future giving behavior.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Stewardship Workflows",
    description: "Create automated stewardship sequences — welcome series, impact updates, renewal reminders, and thank-you campaigns.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "At-Risk Alerts",
    description: "Get notified when donor engagement drops. Re-engage lapsed donors before they churn with targeted campaigns.",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z",
  },
  {
    title: "Impact Reporting",
    description: "Share impact reports and donor statements that show supporters exactly how their contributions make a difference.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

const retentionStats = [
  {
    metric: "2.5x",
    label: "Higher retention with segmentation",
  },
  {
    metric: "60%",
    label: "of lapsed donors can be re-engaged",
  },
  {
    metric: "42%",
    label: "increase in repeat gifts with follow-ups",
  },
  {
    metric: "90%",
    label: "faster with automated stewardship",
  },
];

const faqs = [
  {
    question: "What is donor retention software?",
    answer:
      "Donor retention software helps nonprofits keep their donors engaged and giving over the long term. It includes tools for segmentation, communication tracking, automated follow-ups, engagement scoring, and impact reporting — all designed to build lasting donor relationships.",
  },
  {
    question: "Why is donor retention important?",
    answer:
      "Acquiring a new donor costs 5-7 times more than retaining an existing one. Improving donor retention by just 10% can increase the lifetime value of your donor base significantly. Retention-focused strategies build sustainable fundraising programs.",
  },
  {
    question: "How does Kindora help with donor retention?",
    answer:
      "Kindora helps you segment donors for targeted communication, track every interaction, automate follow-ups and stewardship sequences, monitor engagement scores, and identify at-risk donors before they lapse — all in one platform.",
  },
  {
    question: "Can Kindora identify at-risk donors?",
    answer:
      "Yes. Kindora tracks donor engagement across interactions, donations, and communications. You can see which donors haven't engaged recently and set up targeted re-engagement campaigns to bring them back.",
  },
  {
    question: "Does Kindora include automated communications?",
    answer:
      "Yes. Kindora includes a communications hub with email templates, bulk messaging, and automated follow-up sequences. Set up thank-you messages, renewal reminders, and stewardship campaigns that run on autopilot.",
  },
  {
    question: "How do I measure donor retention in Kindora?",
    answer:
      "Kindora provides reporting and analytics that show retention rates, repeat giving patterns, campaign performance, and engagement trends over time. Generate reports to track your retention progress.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Donor Retention Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Donor retention software for nonprofits — keep donors engaged with segmentation, automation, and engagement tracking.",
      url: "https://spacenexus.net/kindora/donor-retention-software",
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

export default function DonorRetentionSoftwarePage() {
  return (
    <>
      <Script id="donor-retention-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-orange-600">Donor Retention Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Keep Donors Coming Back with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Smart Retention</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Stop losing donors to silence. Kindora helps you track engagement, automate follow-ups, segment communications, and re-engage lapsed supporters — so every donor feels valued.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-700 rounded-full shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Retention Dashboard</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100">
                    <div>
                      <p className="text-sm text-gray-500">Retention Rate</p>
                      <p className="text-3xl font-black text-gray-900">94%</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-emerald-600">+5% vs last year</p>
                      <p className="text-xs text-gray-500">Trending up</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      { label: "Active donors", value: "1,847", color: "bg-orange-500" },
                      { label: "At-risk (needs attention)", value: "156", color: "bg-amber-500" },
                      { label: "Lapsed (re-engagement target)", value: "89", color: "bg-gray-300" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${item.color}`} />
                          <span className="text-sm text-gray-600">{item.label}</span>
                        </div>
                        <span className="text-sm font-bold text-gray-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-orange-600 font-semibold">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Re-engage at-risk donors now
                  </div>
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
            {retentionStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-orange-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">Retention Strategies</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Proven tools to keep donors engaged</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kindora gives you everything you need to build a donor retention strategy that works.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {retentionStrategies.map((strategy) => (
              <div
                key={strategy.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-orange-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={strategy.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{strategy.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Your donor retention workflow</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A simple, repeatable process for keeping donors engaged.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Segment",
                description: "Group donors by giving level, interests, and engagement history.",
              },
              {
                step: "02",
                title: "Engage",
                description: "Send targeted communications and track every interaction.",
              },
              {
                step: "03",
                title: "Monitor",
                description: "Watch engagement scores and get alerts when donors go quiet.",
              },
              {
                step: "04",
                title: "Re-engage",
                description: "Launch automated campaigns to bring lapsed donors back.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-orange-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
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
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about donor retention software.</p>
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
            Ready to keep your donors coming back?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Start building lasting donor relationships with Kindora&apos;s retention tools.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-700 rounded-full shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-orange-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-orange-500 bg-orange-50 hover:bg-orange-100 rounded-full transition-all duration-300"
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
