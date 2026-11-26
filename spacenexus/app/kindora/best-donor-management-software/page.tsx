import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Best Donor Management Software | Donor Software Comparison",
  description:
    "See how Kindora compares for donor management software — donor tracking, fundraising automation, reporting, and engagement tools in one affordable platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/best-donor-management-software",
  },
  openGraph: {
    title: "Best Donor Management Software",
    description: "Donor management software with fundraising automation, reporting, and engagement tools — all in one platform. See how Kindora compares.",
    url: "https://spacenexus.net/kindora/best-donor-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Best Donor Management Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Donor Management Software",
    description: "Donor management software for nonprofits. Track donors, automate fundraising, and grow retention — in one platform.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "best donor management software",
    "best donor software for nonprofits",
    "top donor management software",
    "best donor tracking software",
    "donor management software comparison",
    "best nonprofit donor software",
    "donor software reviews",
    "top rated donor software",
    "best fundraising donor software",
    "donor management platform",
    "best donor crm",
    "donor software ranking",
    "best donor retention software",
    "donor management tools",
    "donor management software 2026",
  ],
};

const comparisonData = [
  { feature: "Donor Profiles & History", kindora: true, bloom: true, lgl: true, salesforce: true },
  { feature: "Donation Tracking (All Types)", kindora: true, bloom: true, lgl: true, salesforce: "partial" },
  { feature: "Fundraising Automation", kindora: true, bloom: "partial", lgl: false, salesforce: true },
  { feature: "Email Marketing", kindora: true, bloom: "partial", lgl: false, salesforce: "partial" },
  { feature: "Grant Management", kindora: true, bloom: false, lgl: false, salesforce: "partial" },
  { feature: "Volunteer Management", kindora: true, bloom: "partial", lgl: false, salesforce: "partial" },
  { feature: "Nonprofit Accounting", kindora: true, bloom: false, lgl: false, salesforce: false },
  { feature: "Campaign Performance Reports", kindora: true, bloom: true, lgl: "partial", salesforce: true },
  { feature: "Affordable for Small Nonprofits", kindora: true, bloom: true, lgl: true, salesforce: false },
  { feature: "No Consultants Required", kindora: true, bloom: true, lgl: true, salesforce: false },
];

const features = [
  {
    title: "Complete Donor Profiles",
    description: "Full donor history with giving patterns, communication logs, engagement scores, and custom fields.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Fundraising Automation",
    description: "Automate donation receipts, thank-you sequences, pledge reminders, and recurring gift processing.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
  {
    title: "Advanced Segmentation",
    description: "Segment donors by giving level, interests, geography, or custom tags for targeted outreach campaigns.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
  },
  {
    title: "Donation Tracking",
    description: "Track one-time, recurring, pledge, in-kind, and matching gifts with complete history for each donor.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Email Campaigns",
    description: "Design and send personalized email campaigns with donor segmentation, templates, and open/click analytics.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Impact Reporting",
    description: "Generate donor statements, tax receipts, campaign ROI reports, and board-ready dashboards in seconds.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Grant Management",
    description: "Track grantor relationships, deadlines, receipts, and compliance reporting alongside donor management.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Volunteer Management",
    description: "Manage volunteers, track hours, schedule shifts, and store volunteer records alongside donor data.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

const stats = [
  { metric: "5-in-1", label: "Donor + Grants + Programs + Accounting + Volunteers" },
  { metric: "30 min", label: "Setup time" },
  { metric: "Free", label: "Plan available" },
  { metric: "1 platform", label: "Replaces 3–4 tools" },
];

const faqs = [
  {
    question: "What is the best donor management software?",
    answer:
      "The best donor management software combines donor tracking, fundraising automation, email marketing, reporting, and affordability in one platform. Kindora includes all these features with no enterprise bloat, no consultants required, and transparent pricing.",
  },
  {
    question: "How does Kindora compare to Bloomerang?",
    answer:
      "Kindora offers more features at a similar price point. You get donor management, grant tracking, volunteer management, nonprofit accounting, and client case management — all in one platform. Bloomerang focuses primarily on fundraising and donor retention.",
  },
  {
    question: "What features should I look for in donor management software?",
    answer:
      "Key features include: donor profiles with complete giving history, donation tracking for all gift types, automated receipts and thank-yous, email marketing with segmentation, campaign performance reports, and easy data import. Kindora includes all of these.",
  },
  {
    question: "Is Kindora affordable for small nonprofits?",
    answer:
      "Yes. Kindora is priced specifically for small to mid-sized nonprofits, offering enterprise-grade donor management features at a price nonprofits can afford. A free Starter plan is available with no credit card required.",
  },
  {
    question: "Can I import my existing donor data?",
    answer:
      "Yes. Kindora supports importing donor data from CSV and Excel files. Whether you're migrating from spreadsheets, Bloomerang, Salesforce, or another system, we make the transition smooth.",
  },
  {
    question: "Does Kindora track recurring donations?",
    answer:
      "Yes. Kindora tracks one-time donations, recurring gifts, pledge payments, in-kind contributions, and matching gifts — with full history for each donor and automated receipt generation.",
  },
  {
    question: "Can I generate tax receipts and donor statements?",
    answer:
      "Yes. Kindora generates donor tax receipts, year-end statements, and impact summaries ready for distribution to your supporters.",
  },
  {
    question: "Why choose Kindora for donor management?",
    answer:
      "Kindora combines ease of use, comprehensive features (donor CRM, fundraising, email, grants, volunteers, accounting), affordable pricing, and support — all in one purpose-built platform for nonprofits.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Best Donor Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Best donor management software for nonprofits -- donor tracking, fundraising automation, reporting, and engagement tools.",
      url: "https://spacenexus.net/kindora/best-donor-management-software",
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

export default function BestDonorManagementSoftwarePage() {
  return (
    <>
      <Script id="best-donor-mgmt-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-indigo-600">All-in-One Donor Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">Best Donor Management Software</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Stop juggling spreadsheets and disconnected tools. Kindora is an all-in-one donor management platform for tracking donors, automating fundraising, and growing retention.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-blue-600 hover:to-indigo-700 rounded-full shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Best Donor Software</span>
                  </div>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">All-in-One</span>
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
                       <p className="text-xs text-gray-600">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">All-In-One Platform</p>
                  {[
                    { name: "Donor CRM", status: "Unlimited" },
                    { name: "Fundraising Tools", status: "Full suite" },
                    { name: "Email Marketing", status: "Included" },
                    { name: "Grant Tracking", status: "Lifecycle" },
                    { name: "Reports & Analytics", status: "Board-ready" },
                  ].map((f) => (
                    <div key={f.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-400" />
                        <span className="text-sm font-semibold text-gray-900">{f.name}</span>
                      </div>
                      <span className="text-xs text-indigo-600 font-medium">{f.status}</span>
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

      {/* Video Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">See It In Action</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">The donor software nonprofits love</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch how Kindora brings donor, grant, program, and financial management together.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-6 bg-gradient-to-br from-indigo-100/60 via-blue-50/40 to-indigo-100/40 rounded-[3rem] blur-2xl -z-10" />

            <div className="relative rounded-2xl lg:rounded-3xl shadow-[0_30px_80px_-15px_rgba(99,102,241,0.25)] border border-white/60 overflow-hidden ring-1 ring-indigo-100">
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
                <div className="flex items-center gap-1.5 text-[10px] text-gray-600 hidden sm:flex">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  Secure
                </div>
              </div>

              <div className="relative bg-[#f0f4ff] aspect-video">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
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
                  <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                  </svg>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything you need to manage donors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From donor profiles to impact reports — Kindora covers every aspect of donor management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
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

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From signup to impact in time varies by data and workflow needs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get started with the best donor management software fast.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Sign Up Free", description: "Create your account. No credit card needed." },
              { step: "02", title: "Import Data", description: "Upload donors from spreadsheets or other tools." },
              { step: "03", title: "Manage Donors", description: "Track donations, segment, and send emails." },
              { step: "04", title: "Grow Retention", description: "Automate follow-ups and measure impact." },
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

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">Comparison</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why nonprofits choose Kindora</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how Kindora compares to Bloomerang, Little Green Light, and Salesforce.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-600 font-medium bg-gray-50 w-48">Feature</th>
                  <th className="px-6 py-4 bg-indigo-500 text-white font-bold text-center min-w-[130px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Best Choice</span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[120px]">Bloomerang</th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[120px]">Little Green Light</th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[120px]">Salesforce</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center bg-indigo-50/50">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-indigo-500 text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </td>
                    {[row.bloom, row.lgl, row.salesforce].map((val, j) => (
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
                    <div className="flex items-center gap-6 text-xs text-gray-600">
                      <span className="flex items-center gap-1.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500 text-white">
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
            <Link href="/kindora/vs-competitors" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
              See full comparison
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about donor management software.</p>
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
            <Link href="/kindora/contact" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 rounded-full transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to use the best donor management software?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of nonprofits using Kindora to manage donors, automate fundraising, and grow their impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-blue-600 hover:to-indigo-700 rounded-full shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/kindora/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-indigo-600 transition-colors">
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
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Best Donor Management Software for Nonprofits of Every Size
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Kindora is the{" "}
            <a href="/kindora/best-donor-management-software" className="text-indigo-600 hover:underline font-medium">
              best donor management software
            </a>{" "}
            for organizations that want powerful features without enterprise complexity. Our all-in-one platform includes{" "}
            <a href="/kindora/features/donor-management" className="text-indigo-600 hover:underline font-medium">
              donor CRM
            </a>,{" "}
            <a href="/kindora/features/campaign-management" className="text-indigo-600 hover:underline font-medium">
              campaign management
            </a>,{" "}
            <a href="/kindora/features/grant-management" className="text-indigo-600 hover:underline font-medium">
              grant tracking
            </a>, and{" "}
            <a href="/kindora/features/reporting" className="text-indigo-600 hover:underline font-medium">
              reporting
            </a>{" "}
            — all in one affordable platform.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you need{" "}
            <a href="/kindora/donor-management-software" className="text-indigo-600 hover:underline font-medium">
              donor management software
            </a>,{" "}
            <a href="/kindora/fundraising-software" className="text-indigo-600 hover:underline font-medium">
              fundraising software
            </a>, or a{" "}
            <a href="/kindora/donor-crm" className="text-indigo-600 hover:underline font-medium">
              donor CRM
            </a>, Kindora delivers everything your nonprofit needs at a price you can afford. Our{" "}
            <a href="/kindora/donor-database-software" className="text-indigo-600 hover:underline font-medium">
              donor database
            </a>{" "}
            centralizes all your donor data with powerful search, segmentation, and real-time reporting.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/kindora/features" className="text-indigo-600 hover:underline font-medium">All Features →</Link>
            <Link href="/kindora/pricing" className="text-indigo-600 hover:underline font-medium">Pricing →</Link>
            <Link href="/kindora/donor-management-software" className="text-indigo-600 hover:underline font-medium">Donor Management →</Link>
            <Link href="/kindora/donor-database-software" className="text-indigo-600 hover:underline font-medium">Donor Database →</Link>
            <Link href="/kindora/fundraising-software" className="text-indigo-600 hover:underline font-medium">Fundraising →</Link>
            <Link href="/kindora/best-nonprofit-crm" className="text-indigo-600 hover:underline font-medium">Best Nonprofit CRM →</Link>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
