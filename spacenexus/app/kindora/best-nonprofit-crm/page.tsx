import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Best Nonprofit CRM | Nonprofit CRM Comparison",
  description:
    "See how Kindora compares for nonprofit CRM software — donor management, fundraising tools, reporting, and automation in one platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/best-nonprofit-crm",
  },
  openGraph: {
    title: "Best Nonprofit CRM",
    description: "Nonprofit CRM with donor management, fundraising, reporting, and automation — all in one platform. See how Kindora compares.",
    url: "https://spacenexus.net/kindora/best-nonprofit-crm",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Best Nonprofit CRM" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Nonprofit CRM",
    description: "Nonprofit CRM with donor management, fundraising, reporting, and automation — all in one platform.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "best nonprofit crm",
    "best crm for nonprofits",
    "top nonprofit crm",
    "best nonprofit donor software",
    "nonprofit crm comparison",
    "best crm for small nonprofits",
    "best crm for charity",
    "nonprofit crm reviews",
    "top rated nonprofit crm",
    "best fundraising crm",
    "nonprofit crm software",
    "best donor management software",
    "nonprofit crm ranking",
    "best crm for fundraising",
    "nonprofit crm 2026",
  ],
};

const comparisonData = [
  { feature: "Donor CRM & Tracking", kindora: true, bloomerang: true, salesforce: true, bonterra: false },
  { feature: "Grant Lifecycle Management", kindora: true, bloomerang: false, salesforce: "partial", bonterra: false },
  { feature: "Client Case Management", kindora: true, bloomerang: false, salesforce: "partial", bonterra: true },
  { feature: "Nonprofit Accounting & Cost Allocation", kindora: true, bloomerang: false, salesforce: false, bonterra: false },
  { feature: "Volunteer Management", kindora: true, bloomerang: "partial", salesforce: "partial", bonterra: false },
  { feature: "Campaign & Fundraising Tools", kindora: true, bloomerang: true, salesforce: true, bonterra: false },
  { feature: "Built-in Communications Hub", kindora: true, bloomerang: "partial", salesforce: "partial", bonterra: false },
  { feature: "Affordable for All Nonprofits", kindora: true, bloomerang: true, salesforce: false, bonterra: false },
  { feature: "Ready in Minutes (No Consultants)", kindora: true, bloomerang: true, salesforce: false, bonterra: false },
  { feature: "Export-Ready Board Reports", kindora: true, bloomerang: "partial", salesforce: true, bonterra: "partial" },
];

const bestCrmFeatures = [
  {
    title: "Complete Donor Management",
    description: "Track every donor interaction, donation history, and communication in one central database.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Fundraising Automation",
    description: "Automate donation receipts, follow-up emails, and recurring donation processing.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
  {
    title: "Advanced Reporting",
    description: "Generate donor insights, campaign ROI reports, and board-ready dashboards in seconds.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Email Marketing",
    description: "Design and send personalized email campaigns with segmentation and analytics.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Volunteer Management",
    description: "Manage volunteers, track hours, schedule shifts, and communicate seamlessly.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Event Fundraising",
    description: "Create events, sell tickets, track fundraising progress, and manage attendees.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Board Reporting",
    description: "Prepare beautiful board reports with key metrics, trends, and visualizations.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Implement in Minutes",
    description: "Import your data and start using Kindora immediately. No lengthy onboarding required.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const stats = [
  { metric: "All-in-One", label: "Donor + Grants + Programs + Accounting + Volunteers" },
  { metric: "99.9%", label: "Uptime" },
  { metric: "30 min", label: "Setup time" },
  { metric: "Free", label: "Plan available" },
];

const faqs = [
  {
    question: "What makes Kindora a strong nonprofit CRM?",
    answer:
      "Kindora combines donor management, fundraising automation, email marketing, volunteer management, and reporting in one affordable platform. Purpose-built for nonprofits with no enterprise bloat, no consultants required, and transparent pricing.",
  },
  {
    question: "How does Kindora compare to other nonprofit CRMs?",
    answer:
      "Kindora offers more features at a lower price point than leading alternatives. You get donor management, fundraising, email, reporting, volunteer tools, grant management, and client case management all in one platform. No add-ons or hidden fees.",
  },
  {
    question: "Is Kindora suitable for small nonprofits?",
    answer:
      "Yes. Kindora is designed for nonprofits of all sizes. Small teams love the simplicity and quick setup, while larger organizations benefit from the powerful automation and reporting features.",
  },
  {
    question: "Can I migrate from my current CRM to Kindora?",
    answer:
      "Yes. Kindora supports easy data import from spreadsheets and other CRM systems. Our team can help with migration for larger datasets.",
  },
  {
    question: "Does Kindora offer customer support?",
    answer:
      "Yes. We offer email and chat support for all plans, plus dedicated account management for larger organizations.",
  },
  {
    question: "Is there a free Starter plan?",
    answer:
      "Yes. You can try Kindora free with no credit card required. Start with a free plan and upgrade as your team grows.",
  },
  {
    question: "What makes a nonprofit CRM the best?",
    answer:
      "The best nonprofit CRM combines ease of use, comprehensive features, affordable pricing, and excellent support. It should replace multiple disconnected tools with one unified platform purpose-built for nonprofit workflows.",
  },
  {
    question: "Does Kindora handle grant management?",
    answer:
      "Yes. Kindora includes complete grant lifecycle management — track grants from prospect to award, manage grantor relationships, record grant receipts, set deadline reminders, and allocate costs across multiple grants for compliance reporting.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Best Nonprofit CRM",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Nonprofit CRM with donor management, fundraising, reporting, and automation — all in one platform.",
      url: "https://spacenexus.net/kindora/best-nonprofit-crm",
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

export default function BestNonprofitCrmPage() {
  return (
    <>
      <Script id="best-nonprofit-crm-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f3ff]/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-violet-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-purple-600">All-in-One Nonprofit CRM</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-600">Best Nonprofit CRM</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Stop juggling spreadsheets and disconnected tools. Kindora is an all-in-one nonprofit CRM for managing donors, running campaigns, and growing impact — without enterprise complexity.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-violet-600 hover:from-violet-600 hover:to-purple-700 rounded-full shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-0.5"
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

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                {["No credit card required", "Setup time varies by data and workflows", "Free plan available"].map((text) => (
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
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Best Nonprofit CRM</span>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                    All-in-One
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Modules", value: "7-in-1" },
                    { label: "Free Plan", value: "Yes" },
                    { label: "Setup Time", value: "30 min" },
                    { label: "Free Trial", value: "Yes" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">All-In-One Platform</p>
                  {[
                    { name: "Donor Management", status: "Unlimited" },
                    { name: "Fundraising Tools", status: "Full suite" },
                    { name: "Email Marketing", status: "Unlimited" },
                    { name: "Volunteer Management", status: "Included" },
                    { name: "Advanced Reports", status: "Board-ready" },
                  ].map((f) => (
                    <div key={f.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        <span className="text-sm font-semibold text-gray-900">{f.name}</span>
                      </div>
                      <span className="text-xs text-purple-600 font-medium">{f.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-purple-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-purple-500 uppercase tracking-wider mb-3">See It In Action</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">The platform nonprofits can run on</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See Kindora in action and how it brings donor, grant, program, and financial management together.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-6 bg-gradient-to-br from-purple-100/60 via-violet-50/40 to-purple-100/40 rounded-[3rem] blur-2xl -z-10" />

            <div className="relative rounded-2xl lg:rounded-3xl shadow-[0_30px_80px_-15px_rgba(147,51,234,0.25)] border border-white/60 overflow-hidden ring-1 ring-purple-100">
              <div className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-gray-100 to-gray-50 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-5 py-1.5 bg-white rounded-lg text-xs text-gray-500 border border-gray-200 shadow-sm w-full max-w-xs">
                    <svg className="w-3 h-3 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="truncate">cad.spaceaiapp.com/kindora</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-500 hidden sm:flex">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  Secure
                </div>
              </div>

              <div className="relative bg-[#f0f4ff] aspect-video">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/kindora-demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              {[
                { icon: "M5 13l4 4L19 7", label: "No credit card required" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Setup time varies by data and workflows" },
                { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Built for nonprofits" },
              ].map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                  </svg>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-purple-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything you need in one CRM</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The most complete nonprofit CRM platform. No add-ons. No hidden fees.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bestCrmFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-purple-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-purple-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-purple-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From signup to impact in time varies by data and workflow needs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get started with the best nonprofit CRM fast.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Sign Up Free", description: "Create your account. No credit card needed." },
              { step: "02", title: "Import Data", description: "Upload your contacts from any system." },
              { step: "03", title: "Start Fundraising", description: "Send appeals, track donations, manage events." },
              { step: "04", title: "Measure Impact", description: "Run reports and share results with your board." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-purple-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-purple-500 uppercase tracking-wider mb-3">Comparison</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why nonprofits choose Kindora</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how Kindora compares to Bloomerang, Salesforce, and Bonterra.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium bg-gray-50 w-48">Feature</th>
                  <th className="px-6 py-4 bg-purple-500 text-white font-bold text-center min-w-[130px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Best Choice</span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[120px]">Bloomerang</th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[120px]">Salesforce NPC</th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[120px]">Bonterra</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center bg-purple-50/50">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-purple-500 text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </td>
                    {[row.bloomerang, row.salesforce, row.bonterra].map((val, j) => (
                      <td key={j} className="px-6 py-4 text-center">
                        {val === true ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : val === "partial" ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100 text-yellow-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 border-t border-gray-200">
                  <td colSpan={5} className="px-6 py-3">
                    <div className="flex items-center gap-6 text-xs text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-500 text-white">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        </span>
                        Full support
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-100 text-yellow-600">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" /></svg>
                        </span>
                        Partial / add-on
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-400">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                        </span>
                        Not available
                      </span>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="text-center">
            <Link
              href="/kindora/vs-competitors"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
            >
              See full comparison
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-purple-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about Kindora nonprofit CRM.</p>
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

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-purple-500 hover:bg-purple-600 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to use the best nonprofit CRM?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of nonprofits using Kindora to manage donors, run campaigns, track grants, and report impact — all from one platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-violet-600 hover:from-violet-600 hover:to-purple-700 rounded-full shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-purple-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-purple-500 bg-purple-50 hover:bg-purple-100 rounded-full transition-all duration-300"
            >
              Try for Free
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Best Nonprofit CRM Software for Organizations of Every Size
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Kindora is the{" "}
            <a href="/kindora/best-nonprofit-crm" className="text-purple-600 hover:underline font-medium">
              best nonprofit CRM
            </a>{" "}
            software for organizations that want powerful features without enterprise complexity. Our all-in-one platform includes{" "}
            <a href="/kindora/features/donor-management" className="text-purple-600 hover:underline font-medium">
              donor management
            </a>,{" "}
            <a href="/kindora/features/grant-management" className="text-purple-600 hover:underline font-medium">
              grant tracking
            </a>,{" "}
            <a href="/kindora/features/campaign-management" className="text-purple-600 hover:underline font-medium">
              campaign management
            </a>, and{" "}
            <a href="/kindora/features/reporting" className="text-purple-600 hover:underline font-medium">
              reporting
            </a>{" "}
            — all in one affordable platform.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you need{" "}
            <a href="/kindora/donor-management-software" className="text-purple-600 hover:underline font-medium">
              donor management software
            </a>,{" "}
            <a href="/kindora/fundraising-software" className="text-purple-600 hover:underline font-medium">
              fundraising software
            </a>,{" "}
            <a href="/kindora/volunteer-management-software" className="text-purple-600 hover:underline font-medium">
              volunteer management
            </a>, or a{" "}
            <a href="/kindora/donor-crm" className="text-purple-600 hover:underline font-medium">
              donor CRM
            </a>, Kindora delivers everything your nonprofit needs. Our{" "}
            <a href="/kindora/small-nonprofit-crm" className="text-purple-600 hover:underline font-medium">
              small nonprofit CRM
            </a>{" "}
            is designed for organizations with limited budgets, while our enterprise features scale with growing nonprofits.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/kindora/features" className="text-purple-600 hover:underline font-medium">All Features →</Link>
            <Link href="/kindora/pricing" className="text-purple-600 hover:underline font-medium">Pricing →</Link>
            <Link href="/kindora/small-nonprofit-crm" className="text-purple-600 hover:underline font-medium">Small Nonprofit CRM →</Link>
            <Link href="/kindora/nonprofit-crm" className="text-purple-600 hover:underline font-medium">Nonprofit CRM →</Link>
            <Link href="/kindora/vs-competitors" className="text-purple-600 hover:underline font-medium">VS Competitors →</Link>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
