import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Recurring Donation Software | Monthly Giving Platform",
  description:
    "Kindora recurring donation software helps nonprofits launch and manage monthly giving programs, track subscriptions, reduce churn, and grow sustainable funding.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/recurring-donation-software",
  },
  openGraph: {
    title: "Recurring Donation Software",
    description: "Launch and manage a successful monthly giving program with Kindora's recurring donation platform.",
    url: "https://spacenexus.net/kindora/recurring-donation-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Recurring Donation Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recurring Donation Software",
    description: "Build sustainable funding with recurring donations. Kindora helps you launch and manage monthly giving programs.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "recurring donation software",
    "monthly giving software",
    "recurring gift platform",
    "subscription donation system",
    "monthly donor program",
    "sustainer program software",
    "recurring fundraising platform",
    "automatic donation software",
    "monthly giving program management",
    "donor subscription management",
    "recurring gift tracking",
    "nonprofit subscription platform",
    "monthly donor management",
    "sustainer giving program",
    "recurring donation management",
  ],
};

const recurringFeatures = [
  {
    title: "Subscription Management",
    description: "Manage all recurring gift subscriptions — monthly, quarterly, annual. Track active, paused, and lapsed subscribers.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Donor Portal",
    description: "Supporters can manage their own recurring gifts — update payment methods, change amounts, pause, or upgrade.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Churn Monitoring",
    description: "Track churn rate, identify at-risk subscribers, and launch re-engagement campaigns to retain supporters.",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z",
  },
  {
    title: "Payment Retry Logic",
    description: "Automatic retry on failed payments with smart scheduling. Reduce involuntary churn without manual intervention.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Pledge Conversion",
    description: "Convert one-time donors and pledge payers into recurring supporters with targeted campaigns and follow-ups.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Recurring Reporting",
    description: "Monthly recurring revenue (MRR), subscriber counts, lifetime value, churn analysis, and growth trends.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Automated Receipting",
    description: "Recurring donation receipts generated and sent automatically after each successful payment.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Donor Communication",
    description: "Automated thank-you sequences, impact updates, and renewal reminders for recurring supporters.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

const stats = [
  { metric: "All", label: "Recurring frequencies supported" },
  { metric: "Auto", label: "Payment retry logic" },
  { metric: "Self-serve", label: "Donor portal" },
  { metric: "Live", label: "Churn monitoring" },
];

const faqs = [
  {
    question: "What is recurring donation software?",
    answer:
      "Recurring donation software helps nonprofits launch and manage monthly giving programs. It handles subscription management, payment processing, donor communication, churn monitoring, and reporting — making it easy to build a sustainable base of recurring supporters.",
  },
  {
    question: "Why are recurring donations important for nonprofits?",
    answer:
      "Recurring donations provide predictable, sustainable revenue that nonprofits can count on. Monthly donors have higher lifetime value, lower acquisition costs, and are more engaged with your mission. A strong recurring program is the foundation of financial stability.",
  },
  {
    question: "Can Kindora handle different recurring frequencies?",
    answer:
      "Yes. Kindora supports monthly, quarterly, and annual recurring gift frequencies. Donors can choose their preferred interval, and you can offer different giving levels for each frequency.",
  },
  {
    question: "Does Kindora automatically retry failed payments?",
    answer:
      "Yes. Kindora includes smart payment retry logic that automatically retries failed transactions on a schedule. This reduces involuntary churn and recovers donations that would otherwise be lost.",
  },
  {
    question: "Can donors manage their own recurring gifts?",
    answer:
      "Yes. Kindora includes a donor portal where supporters can update payment methods, change their gift amount, pause or resume their subscription, and view their complete giving history.",
  },
  {
    question: "Does Kindora track recurring donation metrics?",
    answer:
      "Yes. Kindora provides reporting on monthly recurring revenue (MRR), subscriber counts, churn rate, donor lifetime value, payment success rates, and growth trends over time.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Recurring Donation Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Recurring donation software for nonprofits — launch and manage monthly giving programs with subscription management and churn monitoring.",
      url: "https://spacenexus.net/kindora/recurring-donation-software",
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

export default function RecurringDonationSoftwarePage() {
  return (
    <>
      <Script id="recurring-donation-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-violet-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-indigo-600">Recurring Donation Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Build Sustainable Funding with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600">Recurring Gifts</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Launch and manage a successful monthly giving program. Kindora handles subscription management, payment processing, donor communication, and churn monitoring — so you can grow sustainable revenue.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-violet-600 hover:to-indigo-700 rounded-full shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Recurring Program</span>
                  </div>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                    Sustainer Program
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Subscribers", value: "892" },
                    { label: "Active", value: "847" },
                    { label: "Churn Rate", value: "5.2%" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                      <p className="text-[10px] text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Recent Subscribers</p>
                  {[
                    { name: "Sarah M.", plan: "Monthly", since: "2 days ago", status: "Active" },
                    { name: "James K.", plan: "Monthly", since: "1 week ago", status: "Active" },
                    { name: "Lisa R.", plan: "Quarterly", since: "2 weeks ago", status: "Active" },
                  ].map((sub) => (
                    <div key={sub.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-sm font-semibold text-gray-900">{sub.name}</span>
                      </div>
                      <div className="text-right text-xs">
                        <span className="text-gray-500">{sub.plan}</span>
                        <span className="text-gray-400 ml-2">{sub.since}</span>
                      </div>
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
                <div className="text-3xl lg:text-4xl font-black text-indigo-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Grow your recurring giving program</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to launch, manage, and scale sustainable recurring revenue.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recurringFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-indigo-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-indigo-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From one-time to lifetime supporter</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A proven path to building recurring revenue.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Attract", description: "Invite one-time donors to become recurring supporters." },
              { step: "02", title: "Subscribe", description: "Donors choose their frequency, amount, and payment method." },
              { step: "03", title: "Nurture", description: "Automated thank-yous, impact updates, and stewardship." },
              { step: "04", title: "Retain", description: "Monitor churn, re-engage lapsed, and grow lifetime value." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-indigo-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
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
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about recurring donation software.</p>
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
            Ready to build sustainable recurring revenue?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Start growing your monthly giving program with Kindora&apos;s recurring donation platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-violet-600 hover:to-indigo-700 rounded-full shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-indigo-500 bg-indigo-50 hover:bg-indigo-100 rounded-full transition-all duration-300"
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
