import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Small Nonprofit CRM | Affordable CRM for Small Nonprofits",
  description:
    "Kindora small nonprofit CRM is an affordable, easy-to-use platform designed for small teams. Manage donors, track donations, send emails, and grow your impact without the complexity.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/small-nonprofit-crm",
  },
  openGraph: {
    title: "Small Nonprofit CRM",
    description: "Affordable, easy-to-use CRM designed for small nonprofit teams. Manage donors and grow your impact.",
    url: "https://spacenexus.net/kindora/small-nonprofit-crm",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Small Nonprofit CRM" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Nonprofit CRM",
    description: "Affordable CRM for small nonprofits — manage donors, track donations, and grow your impact.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "small nonprofit crm",
    "nonprofit crm for small nonprofits",
    "affordable nonprofit crm",
    "small nonprofit donor software",
    "crm for small charities",
    "small nonprofit management software",
    "nonprofit crm small budget",
    "simple nonprofit crm",
    "easy nonprofit crm",
    "small team nonprofit software",
    "nonprofit crm for startups",
    "small nonprofit donor management",
    "lightweight nonprofit crm",
    "nonprofit crm affordable",
    "small nonprofit database",
  ],
};

const comparisonData = [
  { feature: "Donor CRM & Tracking", kindora: true, bloomerang: true, salesforce: true, spreadsheet: false },
  { feature: "Grant Management", kindora: true, bloomerang: false, salesforce: "partial", spreadsheet: false },
  { feature: "Client Case Management", kindora: true, bloomerang: false, salesforce: "partial", spreadsheet: false },
  { feature: "Nonprofit Accounting", kindora: true, bloomerang: false, salesforce: false, spreadsheet: false },
  { feature: "Email Communication", kindora: true, bloomerang: "partial", salesforce: "partial", spreadsheet: false },
  { feature: "Campaign & Fundraising", kindora: true, bloomerang: true, salesforce: true, spreadsheet: false },
  { feature: "Affordable for Small Teams", kindora: true, bloomerang: true, salesforce: false, spreadsheet: true },
  { feature: "Ready in Minutes", kindora: true, bloomerang: true, salesforce: false, spreadsheet: true },
  { feature: "Export-Ready Reports", kindora: true, bloomerang: "partial", salesforce: true, spreadsheet: false },
  { feature: "No Technical Skills Needed", kindora: true, bloomerang: true, salesforce: false, spreadsheet: true },
];

const smallCrmFeatures = [
  {
    title: "Simple Donor Management",
    description: "Track donors, donations, and contact history without the complexity of enterprise CRM systems.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Quick Setup",
    description: "Get up and running in time varies by data and workflow needs. Import your data from spreadsheets and start managing relationships.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Donation Tracking",
    description: "Record and track every donation. See who gives, how much, and when with instant reporting.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Email Communication",
    description: "Send personalized emails to your donors. Templates included, no design skills needed.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Affordable Pricing",
    description: "Built for small budgets. Get enterprise features at a fraction of the cost with no hidden fees.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Easy Import",
    description: "Import your existing contacts and donation history from spreadsheets or other CRMs. No manual data entry.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
  },
  {
    title: "Basic Reporting",
    description: "Understand your fundraising with simple reports on donations, donors, and campaign performance.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Free Trial",
    description: "Try Kindora free with no credit card required. See if it is the right fit for your small nonprofit.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const stats = [
  { metric: "30 min", label: "Setup time" },
  { metric: "Affordable", label: "For small budgets" },
  { metric: "Simple", label: "Easy to use" },
  { metric: "Free", label: "Trial available" },
];

const faqs = [
  {
    question: "What is a small nonprofit CRM?",
    answer:
      "A small nonprofit CRM is a lightweight, affordable donor management system designed specifically for organizations with small teams and limited budgets. It helps track donors, donations, and communications without enterprise complexity.",
  },
  {
    question: "Is Kindora affordable for small nonprofits?",
    answer:
      "Yes. Kindora is built with small nonprofits in mind. We offer affordable pricing with no hidden fees, and a free Starter plan so you can try before you commit.",
  },
  {
    question: "How quickly can I set up Kindora?",
    answer:
      "Most small nonprofits can get up and running in about time varies by data and workflow needs. You can import your contacts from a spreadsheet and start managing relationships immediately.",
  },
  {
    question: "Does Kindora include email features?",
    answer:
      "Yes. Kindora includes email communication tools with templates, so you can send personalized messages to your donors without needing a separate email platform.",
  },
  {
    question: "Can I import my existing data?",
    answer:
      "Yes. Kindora supports easy import from spreadsheets and other CRM systems. No manual data entry required.",
  },
  {
    question: "Do I need technical skills to use Kindora?",
    answer:
      "No. Kindora is designed to be intuitive and easy to use. If you can send an email, you can use Kindora.",
  },
  {
    question: "How does Kindora compare to spreadsheets?",
    answer:
      "Unlike spreadsheets, Kindora automates tracking, provides real-time dashboards, and generates export-ready reports. It eliminates manual errors and saves hours of data entry while keeping your donor data organized and secure.",
  },
  {
    question: "What features do small nonprofits need most?",
    answer:
      "Small nonprofits typically need donor tracking, donation recording, email communication, basic reporting, and easy data import. Kindora includes all of these in one simple, affordable platform.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Small Nonprofit CRM",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Affordable, easy-to-use CRM for small nonprofits -- manage donors, track donations, and grow your impact.",
      url: "https://spacenexus.net/kindora/small-nonprofit-crm",
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

export default function SmallNonprofitCrmPage() {
  return (
    <>
      <Script id="small-nonprofit-crm-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
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
                <span className="text-sm font-medium text-teal-600">Small Nonprofit CRM</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                CRM Built for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">Small Teams</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Donor management does not have to be complicated or expensive. Kindora small nonprofit CRM gives you everything you need to manage relationships, track donations, and grow your impact — without enterprise complexity or price tags.
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
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Small Nonprofit CRM</span>
                  </div>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                    Simple & Affordable
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Donors Tracked", value: "500+" },
                    { label: "Setup Time", value: "30 min" },
                    { label: "Monthly Cost", value: "Affordable" },
                    { label: "Free Trial", value: "Yes" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">What You Get</p>
                  {[
                    { name: "Donor Database", status: "Unlimited contacts" },
                    { name: "Donation Tracking", status: "Unlimited donations" },
                    { name: "Email Outreach", status: "Included" },
                    { name: "Reports", status: "Basic + export" },
                  ].map((f) => (
                    <div key={f.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-teal-400" />
                        <span className="text-sm font-semibold text-gray-900">{f.name}</span>
                      </div>
                      <span className="text-xs text-emerald-600 font-medium">{f.status}</span>
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
                <div className="text-3xl lg:text-4xl font-black text-teal-500 mb-1">{stat.metric}</div>
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
            <p className="text-sm font-semibold text-teal-500 uppercase tracking-wider mb-3">See It In Action</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Built for small nonprofits like yours</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch how Kindora makes donor management simple for small teams.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-6 bg-gradient-to-br from-teal-100/60 via-emerald-50/40 to-teal-100/40 rounded-[3rem] blur-2xl -z-10" />

            <div className="relative rounded-2xl lg:rounded-3xl shadow-[0_30px_80px_-15px_rgba(20,184,166,0.25)] border border-white/60 overflow-hidden ring-1 ring-teal-100">
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
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 hidden sm:flex">
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
                  <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <p className="text-sm font-semibold text-teal-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything small nonprofits need</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful enough to grow with you. Simple enough to start today.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {smallCrmFeatures.map((feature) => (
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

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-teal-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get started in time varies by data and workflow needs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Simple steps to get your small nonprofit organized.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Sign Up", description: "Create your account free. No credit card needed." },
              { step: "02", title: "Import", description: "Upload your contacts from a spreadsheet." },
              { step: "03", title: "Track", description: "Start recording donations and managing relationships." },
              { step: "04", title: "Grow", description: "Send emails, run reports, and grow your impact." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-teal-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
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
            <p className="text-sm font-semibold text-teal-500 uppercase tracking-wider mb-3">Comparison</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why small nonprofits choose Kindora</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how Kindora compares to other options for small nonprofits.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-12">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium bg-gray-50 w-48">Feature</th>
                  <th className="px-6 py-4 bg-teal-500 text-white font-bold text-center min-w-[130px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Best Choice</span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[120px]">Bloomerang</th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[120px]">Salesforce NPC</th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[120px]">Spreadsheets</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center bg-teal-50/50">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-teal-500 text-white">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </td>
                    {[row.bloomerang, row.salesforce, row.spreadsheet].map((val, j) => (
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
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-500 text-white">
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
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
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
            <p className="text-sm font-semibold text-teal-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about small nonprofit CRM.</p>
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
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-teal-500 hover:bg-teal-600 rounded-full transition-colors"
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
            Ready to grow your impact?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora small nonprofit CRM today. Join hundreds of small organizations managing donors, tracking donations, and growing their impact.
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
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Affordable Small Nonprofit CRM for Growing Organizations
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Kindora is the{" "}
            <a href="/kindora/small-nonprofit-crm" className="text-teal-600 hover:underline font-medium">
              small nonprofit CRM
            </a>{" "}
            designed for organizations with limited budgets and small teams. Unlike enterprise solutions that require expensive consultants and months of setup, Kindora is ready to use in time varies by data and workflow needs with{" "}
            <a href="/kindora/features/donor-management" className="text-teal-600 hover:underline font-medium">
              donor management
            </a>,{" "}
            <a href="/kindora/features/grant-management" className="text-teal-600 hover:underline font-medium">
              grant tracking
            </a>, and{" "}
            <a href="/kindora/features/financial-management" className="text-teal-600 hover:underline font-medium">
              nonprofit accounting
            </a>{" "}
            built in from day one.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our{" "}
            <a href="/kindora/features/campaign-management" className="text-teal-600 hover:underline font-medium">
              campaign management
            </a>{" "}
            tools help you run fundraising appeals, track donations, and communicate with donors — all from one platform. Whether you need{" "}
            <a href="/kindora/donor-management-software" className="text-teal-600 hover:underline font-medium">
              donor management software
            </a>,{" "}
            <a href="/kindora/fundraising-software" className="text-teal-600 hover:underline font-medium">
              fundraising software
            </a>, or a{" "}
            <a href="/kindora/donor-crm" className="text-teal-600 hover:underline font-medium">
              donor CRM
            </a>, Kindora delivers everything your small nonprofit needs at a price you can afford.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/kindora/features" className="text-teal-600 hover:underline font-medium">All Features →</Link>
            <Link href="/kindora/pricing" className="text-teal-600 hover:underline font-medium">Pricing →</Link>
            <Link href="/kindora/best-nonprofit-crm" className="text-teal-600 hover:underline font-medium">Best Nonprofit CRM →</Link>
            <Link href="/kindora/nonprofit-crm" className="text-teal-600 hover:underline font-medium">Nonprofit CRM →</Link>
            <Link href="/kindora/donor-management-software" className="text-teal-600 hover:underline font-medium">Donor Management →</Link>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
