import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Online Donation Platform | Accept & Manage Gifts Online",
  description:
    "Kindora online donation platform lets nonprofits accept one-time and recurring donations, track pledges, manage in-kind gifts, and report impact — all from one integrated system.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/online-donation-platform",
  },
  openGraph: {
    title: "Online Donation Platform",
    description: "Accept, track, and manage online donations with Kindora's all-in-one platform for nonprofits.",
    url: "https://spacenexus.net/kindora/online-donation-platform",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Online Donation Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Donation Platform",
    description: "Accept and manage donations online with Kindora — one-time, recurring, pledges, and in-kind gifts.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "online donation platform",
    "online donation software",
    "donate online nonprofit",
    "online giving platform",
    "digital donation platform",
    "online fundraising platform",
    "accept donations online",
    "nonprofit online donations",
    "online donation system",
    "web donation platform",
    "online giving software",
    "charity donation platform",
    "NGO online donations",
    "donation portal",
    "online fundraising tools",
  ],
};

const platformFeatures = [
  {
    title: "One-Time Donations",
    description: "Accept single gifts through your website, email campaigns, or direct links. Instant receipting included.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Recurring Giving",
    description: "Let supporters set up monthly, quarterly, or annual gifts. Manage subscriptions with full donor history.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Pledge Payments",
    description: "Accept pledge payments online. Supporters can fulfill pledges through a simple payment portal.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Campaign Pages",
    description: "Dedicated campaign pages that track real-time progress toward fundraising goals.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Donor Portal",
    description: "Supporters can view their giving history, manage recurring gifts, and download tax receipts.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Automated Receipting",
    description: "Tax-compliant receipts sent automatically for every donation. Customizable templates.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Real-Time Dashboard",
    description: "Live donation feed showing every gift as it comes in. Track progress toward campaign goals.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Multi-Currency Support",
    description: "Accept donations in multiple currencies from international supporters.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
];

const platformStats = [
  { metric: "24/7", label: "Online donation acceptance" },
  { metric: "Instant", label: "Receipt generation" },
  { metric: "All", label: "Payment types supported" },
  { metric: "1", label: "Integrated platform" },
];

const faqs = [
  {
    question: "What is an online donation platform?",
    answer:
      "An online donation platform allows nonprofits to accept and manage donations through their website, email campaigns, and social media. It handles the entire donation workflow — from payment processing and receipting to donor management and reporting — all in one integrated system.",
  },
  {
    question: "What types of donations can Kindora accept online?",
    answer:
      "Kindora accepts one-time donations, recurring gifts (monthly, quarterly, annual), pledge payments, and in-kind contributions. Supporters can donate through your website, direct links, or campaign pages.",
  },
  {
    question: "Does Kindora provide donor receipts automatically?",
    answer:
      "Yes. Kindora generates tax-compliant receipts automatically for every donation. Receipts can be emailed to donors immediately or made available through the donor portal.",
  },
  {
    question: "Can supporters manage their own recurring gifts?",
    answer:
      "Yes. Kindora includes a donor portal where supporters can view their giving history, update payment methods, increase or pause recurring gifts, and download their tax receipts.",
  },
  {
    question: "Does Kindora support fundraising campaigns?",
    answer:
      "Yes. Kindora lets you create dedicated campaign pages with real-time progress tracking toward fundraising goals. Campaigns integrate fully with your donation management and reporting.",
  },
  {
    question: "Is Kindora secure for online donations?",
    answer:
      "Yes. Kindora is SOC 2 compliant with encrypted payment processing, secure data storage, and role-based access control. Donor payment information is handled securely.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Online Donation Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Online donation platform for nonprofits — accept one-time, recurring, and pledge payments with automated receipting and donor management.",
      url: "https://spacenexus.net/kindora/online-donation-platform",
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

export default function OnlineDonationPlatformPage() {
  return (
    <>
      <Script id="online-donation-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-sky-600">Online Donation Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Accept Donations Online{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Without the Complexity</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                A complete online donation platform that lets you accept one-time and recurring gifts, manage pledges, run campaigns, and automate receipting — all integrated with your donor management and reporting.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-700 rounded-full shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
                {["No credit card required", "Setup time varies by data and workflows", "SOC 2 compliant"].map((text) => (
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
              <div className="absolute -inset-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Live Donation Feed</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Accepting
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { donor: "Anonymous", method: "One-time", campaign: "General Fund", time: "Just now", color: "bg-sky-400" },
                    { donor: "Sarah L.", method: "Monthly", campaign: "Sustainer Program", time: "12 min ago", color: "bg-emerald-400" },
                    { donor: "Michael R.", method: "One-time", campaign: "Annual Gala", time: "28 min ago", color: "bg-blue-400" },
                    { donor: "Emily T.", method: "Pledge", campaign: "Capital Campaign", time: "1 hr ago", color: "bg-amber-400" },
                  ].map((item) => (
                    <div key={item.donor} className="flex items-center gap-3 p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className={`w-2 h-2 rounded-full ${item.color} shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">{item.donor}</p>
                        <p className="text-xs text-gray-500">{item.campaign} — {item.method}</p>
                      </div>
                      <span className="text-[10px] text-gray-400 whitespace-nowrap">{item.time}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-100 text-center">
                  <p className="text-xs text-gray-500 mb-1">Campaign Status</p>
                  <p className="text-2xl font-black text-gray-900">Active</p>
                  <p className="text-xs text-gray-500">Spring Appeal · 847 supporters</p>
                  <div className="w-full h-2 bg-white rounded-full mt-2 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500" style={{ width: "46%" }} />
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
            {platformStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-sky-500 mb-1">{stat.metric}</div>
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
            <p className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-3">Platform Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything you need to accept donations online</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A complete online giving experience — from donation page to receipt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {platformFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-sky-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-sky-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">{feature.title}</h3>
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
            <p className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From donation to dashboard in seconds</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A seamless online giving experience for your supporters and your team.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Donate", description: "Supporters give through your website, campaign page, or direct link." },
              { step: "02", title: "Receipt", description: "Tax receipt sent automatically. Donor notified instantly." },
              { step: "03", title: "Record", description: "Donation logged in real time. Dashboard updates immediately." },
              { step: "04", title: "Manage", description: "Full donor profile, campaign tracking, and reporting ready to use." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-sky-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
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
            <p className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about Kindora&apos;s online donation platform.</p>
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
            Ready to start accepting donations online?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join nonprofits that trust Kindora to power their online giving.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-700 rounded-full shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-sky-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-sky-500 bg-sky-50 hover:bg-sky-100 rounded-full transition-all duration-300"
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
