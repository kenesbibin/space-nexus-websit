import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Digital Fundraising Platform | Online Fundraising Software",
  description:
    "Kindora digital fundraising platform helps nonprofits raise more online with donation forms, peer-to-peer pages, event fundraising, text-to-give, and real-time analytics.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/digital-fundraising-platform",
  },
  openGraph: {
    title: "Digital Fundraising Platform",
    description: "Raise more online with Kindora's digital fundraising platform — donation forms, peer-to-peer, events, and analytics.",
    url: "https://spacenexus.net/kindora/digital-fundraising-platform",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Digital Fundraising Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Fundraising Platform",
    description: "Raise more online with donation forms, peer-to-peer pages, event fundraising, and real-time analytics.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "digital fundraising platform",
    "online fundraising software",
    "digital donation platform",
    "online giving platform",
    "digital fundraising tools",
    "online fundraising campaign",
    "digital charity platform",
    "online donation processing",
    "digital fundraising solutions",
    "online peer-to-peer fundraising",
    "digital event fundraising",
    "online fundraising for nonprofits",
  ],
};

const fundraisingFeatures = [
  {
    title: "Online Donation Forms",
    description: "Customizable donation forms with suggested amounts, recurring options, and branded design that convert more visitors into donors.",
    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Social Media Integration",
    description: "Share campaigns across Facebook, Instagram, Twitter, and LinkedIn with built-in social sharing tools and tracking.",
    icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z",
  },
  {
    title: "Peer-to-Peer Pages",
    description: "Empower supporters to fundraise on your behalf with personal fundraising pages, leaderboards, and team challenges.",
    icon: "M12 4.354a4 4 0 110 7.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Event Fundraising",
    description: "Host virtual and in-person fundraising events with registration, ticketing, live donation feeds, and post-event reporting.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Email Campaigns",
    description: "Send targeted email appeals, thank-you messages, and drip sequences to engage donors and drive recurring gifts.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Text-to-Give",
    description: "Accept donations via text message with short codes, keywords, and automated receipt and thank-you workflows.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Recurring Giving",
    description: "Set up monthly and annual recurring donations with easy management, upgrades, and cancellation options for donors.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Impact Dashboards",
    description: "Track fundraising performance with real-time dashboards showing donor acquisition, retention, revenue, and campaign ROI.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const stats = [
  { metric: "24/7", label: "Online giving" },
  { metric: "Multi-channel", label: "Fundraising" },
  { metric: "Automated", label: "Processing" },
  { metric: "Real-time", label: "Analytics" },
];

const faqs = [
  {
    question: "What is a digital fundraising platform?",
    answer:
      "A digital fundraising platform is software that helps nonprofits raise money online through donation forms, peer-to-peer campaigns, events, email appeals, text-to-give, and social media — all managed from a single dashboard.",
  },
  {
    question: "What does a digital fundraising platform include?",
    answer:
      "A complete platform includes online donation forms, peer-to-peer fundraising pages, event management, email campaigns, text-to-give, recurring giving, social media integration, donor management, and real-time analytics.",
  },
  {
    question: "What is peer-to-peer fundraising?",
    answer:
      "Peer-to-peer fundraising lets your supporters create their own fundraising pages and ask their networks to donate. It turns your donors into fundraisers, expanding your reach and bringing in new supporters.",
  },
  {
    question: "Can I run virtual fundraising events?",
    answer:
      "Yes. Kindora supports virtual and hybrid fundraising events with online registration, ticketing, live donation feeds, leaderboards, and post-event reporting — all in one platform.",
  },
  {
    question: "Does Kindora support text-to-give?",
    answer:
      "Yes. Supporters can donate by texting a keyword to your short code. Donations are processed instantly, and donors receive automated receipts and thank-you messages.",
  },
  {
    question: "How do I get started with digital fundraising?",
    answer:
      "Sign up for a free Kindora account, customize your donation forms and fundraising pages, connect your payment processor, and launch your first campaign in minutes — no technical skills required.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Digital Fundraising Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Digital fundraising platform for nonprofits — online donations, peer-to-peer pages, event fundraising, text-to-give, and real-time analytics.",
      url: "https://spacenexus.net/kindora/digital-fundraising-platform",
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

export default function DigitalFundraisingPlatformPage() {
  return (
    <>
      <Script id="digital-fundraising-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-cyan-600">Digital Fundraising Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Raise More With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">Digital Fundraising</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Launch online donation campaigns, empower peer-to-peer fundraisers, host events, and accept gifts via text — all from one platform. Kindora helps nonprofits raise more with less effort.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-teal-600 hover:to-cyan-700 rounded-full shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Fundraising Dashboard</span>
                  </div>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-medium rounded-full">
                    {new Date().getFullYear()} Active
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Donations", value: "Gifts" },
                    { label: "Peer Pages", value: "Active" },
                    { label: "Events", value: "Running" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Campaigns</p>
                  {[
                    { name: "Annual Giving Appeal", channel: "Email + Social", progress: "78%" },
                    { name: "Peer-to-Peer Challenge", channel: "Fundraiser Pages", progress: "52%" },
                    { name: "Gala Night", channel: "Event Fundraising", progress: "95%" },
                  ].map((c) => (
                    <div key={c.name} className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-cyan-400" />
                          <span className="text-sm font-semibold text-gray-900">{c.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{c.progress}</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full" style={{ width: c.progress }} />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{c.channel}</p>
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
                <div className="text-3xl lg:text-4xl font-black text-cyan-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything for digital fundraising</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Online donations, peer-to-peer, events, and more — all in one platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fundraisingFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-cyan-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-cyan-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From idea to impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A proven digital fundraising workflow.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Create", description: "Set up donation forms, peer-to-peer pages, or an event in minutes." },
              { step: "02", title: "Promote", description: "Share via email, social media, and text to reach your audience." },
              { step: "03", title: "Receive", description: "Accept gifts online, via text, or at events — processed automatically." },
              { step: "04", title: "Measure", description: "Track donations, donor retention, and campaign ROI in real time." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-cyan-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
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
            <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about digital fundraising platforms.</p>
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
            Ready to start your digital fundraising journey?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join nonprofits using Kindora to raise more online with peer-to-peer, events, and real-time analytics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-teal-600 hover:to-cyan-700 rounded-full shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-cyan-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-cyan-500 bg-cyan-50 hover:bg-cyan-100 rounded-full transition-all duration-300"
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
