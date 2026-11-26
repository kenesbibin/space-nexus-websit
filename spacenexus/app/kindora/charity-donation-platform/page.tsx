import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Charity Donation Platform | Online Giving for Nonprofits",
  description:
    "Kindora charity donation platform helps nonprofits accept one-time and recurring gifts, manage donors, run campaigns, and track impact — all from one integrated system.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/charity-donation-platform",
  },
  openGraph: {
    title: "Charity Donation Platform",
    description: "Accept and manage charity donations with Kindora's all-in-one platform for nonprofits.",
    url: "https://spacenexus.net/kindora/charity-donation-platform",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Charity Donation Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charity Donation Platform",
    description: "Accept and manage charity donations online with Kindora — one-time, recurring, pledges, and in-kind gifts.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "charity donation platform",
    "charity donation software",
    "donate to charity online",
    "charity giving platform",
    "nonprofit donation platform",
    "charity online donations",
    "charity fundraising platform",
    "charity donation management",
    "donation processing software",
    "charity donation tracking",
    "online charity donations",
    "charity donation forms",
    "charity recurring donations",
    "charity donation portal",
    "charity donation system",
  ],
};

const features = [
  {
    title: "Donation Forms",
    description: "Embeddable, mobile-optimized donation forms with suggested amounts, custom fields, and branding.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    title: "Recurring Giving",
    description: "Automate monthly, quarterly, and annual recurring donations with easy donor self-service management.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Donor Management",
    description: "Complete donor profiles with giving history, engagement scoring, and segmentation for targeted appeals.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Campaign Tracking",
    description: "Track fundraising campaigns with goals, progress bars, donor acquisition metrics, and real-time analytics.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Automated Receipts",
    description: "Generate and send tax-deductible donation receipts automatically via email — IRS-compliant formatting.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Pledge Management",
    description: "Track multi-year pledges, send reminders, and reconcile payments against pledge commitments.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Donor Portal",
    description: "Self-service donor portal where supporters can view history, download receipts, and manage recurring gifts.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Impact Reporting",
    description: "Show donors the real-world impact of their gifts with automated impact reports and storytelling.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
];

const stats = [
  { metric: "One-time &", label: "Recurring gifts" },
  { metric: "Auto", label: "Tax receipts" },
  { metric: "Real-time", label: "Campaign tracking" },
  { metric: "Self-service", label: "Donor portal" },
];

const faqs = [
  {
    question: "What is a charity donation platform?",
    answer:
      "A charity donation platform is software that helps nonprofits accept, process, and manage charitable donations. It typically includes donation forms, donor management, receipt generation, and reporting. Kindora combines all of these with grant tracking, case management, and accounting in one platform.",
  },
  {
    question: "Can Kindora process recurring donations?",
    answer:
      "Yes. Kindora supports monthly, quarterly, and annual recurring donations. Donors can set up, modify, or cancel recurring gifts through a self-service portal, and you can track all recurring revenue in one dashboard.",
  },
  {
    question: "Does Kindora generate tax receipts?",
    answer:
      "Yes. Kindora automatically generates IRS-compliant donation receipts and sends them to donors via email immediately after each gift. You can customize receipt templates with your charity's branding.",
  },
  {
    question: "Can I embed donation forms on my website?",
    answer:
      "Yes. Kindora provides embeddable, mobile-optimized donation forms that you can add to any webpage. Forms support suggested amounts, custom fields, and match your charity's branding.",
  },
  {
    question: "Does Kindora support pledge tracking?",
    answer:
      "Yes. Kindora tracks multi-year pledges, sends automated reminders for upcoming payments, and reconciles donations against pledge commitments — so you never lose track of committed funds.",
  },
  {
    question: "Can donors manage their own gifts?",
    answer:
      "Yes. Kindora provides a self-service donor portal where supporters can view their giving history, download receipts, update payment methods, and manage recurring donation schedules.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Charity Donation Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Charity donation platform for nonprofits — accept one-time and recurring gifts, manage donors, run campaigns, and track impact.",
      url: "https://spacenexus.net/kindora/charity-donation-platform",
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

export default function CharityDonationPlatformPage() {
  return (
    <>
      <Script id="charity-donation-platform-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-rose-600">Charity Donation Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Accept & Manage{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Charity Donations</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Accept one-time and recurring gifts, manage donors, run campaigns, and track impact — all from one integrated charity donation platform built for nonprofits.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-700 rounded-full shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Try for Free
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Request a Demo
                </Link>
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
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Donation Dashboard</span>
                  </div>
                  <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-medium rounded-full">
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Total Raised", value: "48.2K" },
                    { label: "Donors", value: "1,247" },
                    { label: "Recurring", value: "38%" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Recent Donations</p>
                  {[
                    { name: "Sarah M.", type: "Monthly", time: "2 min ago" },
                    { name: "James R.", type: "One-time", time: "15 min ago" },
                    { name: "Anonymous", type: "Weekly", time: "1 hr ago" },
                  ].map((d) => (
                    <div key={d.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-rose-400" />
                        <span className="text-sm font-semibold text-gray-900">{d.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-400">{d.type}</span>
                        <span className="text-xs text-gray-400">{d.time}</span>
                      </div>
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
                <div className="text-3xl lg:text-4xl font-black text-rose-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything to accept & manage donations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From donation forms to impact reporting — Kindora handles the full donation lifecycle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-rose-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-rose-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From form to impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A proven donation workflow.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Create", description: "Set up donation forms, configure amounts, and enable recurring giving." },
              { step: "02", title: "Accept", description: "Accept gifts online, via text, or in-person — all processed securely." },
              { step: "03", title: "Manage", description: "Track donors, segment audiences, and automate receipts and thank-yous." },
              { step: "04", title: "Report", description: "Measure impact, generate reports, and show donors the difference they make." },
            ].map((item) => (
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

      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about charity donation platforms.</p>
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
            Ready to start accepting donations?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Launch your charity donation platform with Kindora. Accept gifts, manage donors, and track impact — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-700 rounded-full shadow-xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
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
