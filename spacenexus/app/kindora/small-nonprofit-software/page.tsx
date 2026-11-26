import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Small Nonprofit Software | Affordable Nonprofit Tools",
  description:
    "Kindora small nonprofit software gives your team the tools to manage donors, track grants, run campaigns, and raise funds — without the cost or complexity of enterprise platforms.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/small-nonprofit-software",
  },
  openGraph: {
    title: "Small Nonprofit Software",
    description: "Affordable nonprofit tools built for small organizations — manage donors, grants, volunteers, and campaigns in one place.",
    url: "https://spacenexus.net/kindora/small-nonprofit-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Small Nonprofit Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Nonprofit Software",
    description: "Affordable nonprofit tools for small organizations — donors, grants, volunteers, and campaigns in one platform.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "small nonprofit software",
    "software for small nonprofits",
    "affordable nonprofit software",
    "nonprofit software for small organizations",
    "small charity software",
    "cheap nonprofit software",
    "nonprofit tools small team",
    "small nonprofit management",
    "best software for small nonprofits",
    "small nonprofit donor management",
    "small nonprofit fundraising",
    "startup nonprofit software",
  ],
};

const features = [
  {
    title: "Donor Management",
    description: "Track every donor, their giving history, and engagement — all in one simple dashboard built for small teams.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Online Donations",
    description: "Accept donations online with customizable forms — no developer needed. Works on any device, any time.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Grant Tracking",
    description: "Manage grant applications, deadlines, and reporting requirements without losing track of a single opportunity.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Volunteer Tracking",
    description: "Log volunteer hours, assign roles, and recognize your most dedicated supporters effortlessly.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Campaign Tools",
    description: "Launch fundraising campaigns with email, social, and donation pages — designed for organizations without a marketing team.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
  {
    title: "Email Marketing",
    description: "Send donor updates, appeal letters, and newsletters with built-in email tools — no third-party service required.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Financial Reports",
    description: "Generate donor receipts, financial summaries, and board-ready reports in seconds — no spreadsheets needed.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Easy Setup",
    description: "Get started in time varies by data and workflow needs with guided onboarding — no IT team, no consultants, no complexity.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const stats = [
  { metric: "30 min", label: "Setup time" },
  { metric: "Free", label: "Trial available" },
  { metric: "All-in-one", label: "Platform" },
  { metric: "No IT", label: "Team required" },
];

const faqs = [
  {
    question: "What software do small nonprofits actually need?",
    answer:
      "Small nonprofits need donor management, online donations, basic reporting, and email communication. Kindora bundles all of these into one affordable platform — so you don't need to piece together multiple tools.",
  },
  {
    question: "Is Kindora affordable for a small nonprofit?",
    answer:
      "Yes. Kindora is built specifically for small nonprofits that need real functionality without enterprise pricing. You get donor management, donation forms, grant tracking, email marketing, and reporting — all included.",
  },
  {
    question: "Do I need technical skills or an IT team?",
    answer:
      "No. Kindora is designed for nonprofit staff, not IT departments. If you can use email, you can use Kindora. Setup takes about time varies by data and workflow needs with guided onboarding — no developer or consultant required.",
  },
  {
    question: "Can I start with just the basics and grow later?",
    answer:
      "Absolutely. Many small nonprofits start with donor management and online donations, then add grant tracking, volunteer management, and campaign tools as their team and programs grow.",
  },
  {
    question: "Can Kindora replace our spreadsheets?",
    answer:
      "Yes. Kindora replaces donor spreadsheets, donation logs, grant trackers, and volunteer lists with a single organized system. No more version conflicts, lost files, or manual data entry.",
  },
  {
    question: "How is this different from free tools like Google Sheets?",
    answer:
      "Spreadsheets require manual work, offer no donor forms, and can't send emails or generate receipts. Kindora automates donor records, provides online donation pages, sends receipts, and creates reports — all connected in one place.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Small Nonprofit Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Affordable nonprofit software for small organizations — manage donors, grants, volunteers, and campaigns in one platform.",
      url: "https://spacenexus.net/kindora/small-nonprofit-software",
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

export default function SmallNonprofitSoftwarePage() {
  return (
    <>
      <Script id="small-nonprofit-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
                <span className="text-sm font-medium text-indigo-600">Small Nonprofit Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Everything Your Small Nonprofit{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600">Needs in One Place</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Manage donors, accept online donations, track grants, coordinate volunteers, and run campaigns — all from a single affordable platform built for small teams.
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Donor Dashboard</span>
                  </div>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                    {new Date().getFullYear()} Active
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Total Donors", value: "Donors" },
                    { label: "Online Gifts", value: "Donations" },
                    { label: "Active Grants", value: "Grants" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Recent Activity</p>
                  {[
                    { name: "Online Donation", channel: "Donation Form", time: "Just now" },
                    { name: "Grant Report Due", channel: "Grant Tracking", time: "In 3 days" },
                    { name: "Volunteer Signup", channel: "Volunteer Portal", time: "1 hour ago" },
                  ].map((c) => (
                    <div key={c.name} className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-indigo-400" />
                          <span className="text-sm font-semibold text-gray-900">{c.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{c.time}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{c.channel}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Built for small nonprofit teams</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to run your nonprofit — without the complexity or cost of enterprise software.
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

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From signup to impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A simple workflow for small nonprofit success.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Sign Up", description: "Create your account and import existing donor data in minutes." },
              { step: "02", title: "Set Up", description: "Configure donation forms, email templates, and grant tracking." },
              { step: "03", title: "Engage", description: "Send campaigns, manage volunteers, and accept online donations." },
              { step: "04", title: "Grow", description: "Track progress, generate reports, and focus on your mission." },
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
            <p className="text-lg text-gray-600">Everything you need to know about software for small nonprofits.</p>
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
            Ready to simplify your nonprofit operations?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Start managing donors, donations, grants, and volunteers with Kindora — built for small teams with big missions.
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
