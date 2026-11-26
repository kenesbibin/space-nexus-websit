import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Nonprofit Email Automation | Automated Email Sequences",
  description:
    "Kindora nonprofit email automation helps you create triggered email sequences for welcome series, donation thank-yous, lapsed donor re-engagement, and more — all integrated with your donor data.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/nonprofit-email-automation",
  },
  openGraph: {
    title: "Nonprofit Email Automation",
    description: "Automated email sequences for welcome series, thank-yous, lapsed donor re-engagement, and more.",
    url: "https://spacenexus.net/kindora/nonprofit-email-automation",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Nonprofit Email Automation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Email Automation",
    description: "Triggered email sequences for welcome series, thank-yous, lapsed donor re-engagement, and more.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "nonprofit email automation",
    "email automation for nonprofits",
    "automated email sequences nonprofit",
    "donor email automation",
    "nonprofit email drip campaigns",
    "triggered emails nonprofit",
    "automated donor communication",
    "nonprofit email workflow",
    "email automation platform nonprofit",
    "nonprofit marketing automation",
    "donor journey automation",
    "nonprofit email sequence",
    "automated thank you email nonprofit",
    "nonprofit email trigger",
    "nonprofit email campaign automation",
  ],
};

const automationFeatures = [
  {
    title: "Trigger-Based Sequences",
    description: "Create email sequences triggered by donations, event registrations, form submissions, or date-based events.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Welcome Series",
    description: "Automatically onboard new donors and subscribers with a welcome sequence that introduces your mission.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Thank-You Automation",
    description: "Send personalized thank-you emails immediately after every donation. Add impact stories and tax receipts.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Lapsed Donor Re-Engagement",
    description: "Auto-detect lapsed donors and trigger re-engagement sequences to win back their support.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Birthday & Anniversary",
    description: "Celebrate donor milestones with automated birthday wishes and giving anniversary messages.",
    icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.701 2.701 0 003 15.546V21h18v-5.454z",
  },
  {
    title: "Event Follow-Up",
    description: "Post-event email sequences — thank attendees, share photos, collect feedback, and drive next steps.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Conditional Logic",
    description: "Branch sequences based on donor actions — opened email, clicked link, donated, or didn't engage.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Performance Analytics",
    description: "Track sequence performance — completion rates, click-throughs, conversions, and revenue generated.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const stats = [
  { metric: "Trigger-based", label: "Email sequences" },
  { metric: "Multi-step", label: "Automation journeys" },
  { metric: "Conditional", label: "Logic branching" },
  { metric: "Tracked", label: "Sequence analytics" },
];

const faqs = [
  {
    question: "What is nonprofit email automation?",
    answer:
      "Nonprofit email automation allows you to create triggered email sequences that send automatically based on donor actions — new sign-ups, donations, lapsed giving, birthdays, and more.",
  },
  {
    question: "What kind of email sequences can I create?",
    answer:
      "You can create welcome series, thank-you sequences, lapsed donor re-engagement, birthday and anniversary messages, event follow-ups, and any custom donor journey.",
  },
  {
    question: "Does Kindora support conditional logic?",
    answer:
      "Yes. Kindora supports branching logic — sequences can change based on whether a donor opened an email, clicked a link, made a donation, or didn't engage.",
  },
  {
    question: "Can I automate thank-you emails?",
    answer:
      "Yes. Kindora can send personalized thank-you emails automatically after every donation, including impact stories and tax receipts.",
  },
  {
    question: "Does Kindora track automation performance?",
    answer:
      "Yes. Kindora tracks completion rates, click-throughs, conversions, and revenue generated by each automation sequence.",
  },
  {
    question: "Can I re-engage lapsed donors automatically?",
    answer:
      "Yes. Kindora automatically detects lapsed donors and can trigger re-engagement email sequences to win back their support.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Nonprofit Email Automation",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Nonprofit email automation — create triggered email sequences for welcome series, thank-yous, lapsed re-engagement, and more.",
      url: "https://spacenexus.net/kindora/nonprofit-email-automation",
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

export default function NonprofitEmailAutomationPage() {
  return (
    <>
      <Script id="nonprofit-email-automation-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
                <span className="text-sm font-medium text-indigo-600">Nonprofit Email Automation</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Automate{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600">Donor Engagement</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Set up triggered email sequences that nurture donors automatically. Welcome series, thank-yous, re-engagement, and more — all based on donor behavior.
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
                    <span className="text-sm font-semibold text-gray-900">Automation</span>
                  </div>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Active Sequences", value: "8" },
                    { label: "Emails Sent/Mo", value: "18.5K" },
                    { label: "Avg Completion", value: "72%" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Sequences</p>
                  {[
                    { name: "Welcome Series", trigger: "New subscriber", sent: "342 this month" },
                    { name: "Thank You Flow", trigger: "Donation made", sent: "1,280 this month" },
                    { name: "Lapsed Re-Engage", trigger: "90 days inactive", sent: "156 this month" },
                  ].map((s) => (
                    <div key={s.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-400" />
                        <div>
                          <span className="text-sm font-semibold text-gray-900">{s.name}</span>
                          <span className="text-xs text-gray-400 ml-2">{s.trigger}</span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{s.sent}</span>
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
                <div className="text-3xl lg:text-4xl font-black text-indigo-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Engage donors on autopilot</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sequences that work around the clock to nurture your supporters.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {automationFeatures.map((feature) => (
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

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From trigger to engagement</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A simple automation workflow.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Trigger", description: "Choose the donor action that starts the sequence." },
              { step: "02", title: "Build", description: "Design your email sequence with timing and content." },
              { step: "03", title: "Launch", description: "Activate the automation. It runs on its own." },
              { step: "04", title: "Optimize", description: "Review performance metrics and refine over time." },
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

      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about nonprofit email automation.</p>
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
            Ready to automate donor engagement?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora nonprofit email automation today.
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
