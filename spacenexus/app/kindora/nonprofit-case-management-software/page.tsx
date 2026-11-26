import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Nonprofit Case Management Software | Case Management for Nonprofits",
  description:
    "Kindora nonprofit case management software helps organisations track client cases, manage services, measure outcomes, and report impact — one system for your team.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/nonprofit-case-management-software",
  },
  openGraph: {
    title: "Nonprofit Case Management Software",
    description: "Track client cases, manage services, and measure outcomes with Kindora case management software.",
    url: "https://spacenexus.net/kindora/nonprofit-case-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Nonprofit Case Management Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Case Management Software",
    description: "Track client cases, manage services, and measure outcomes with Kindora case management software.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "nonprofit case management software",
    "case management for nonprofits",
    "nonprofit case tracking",
    "client case management software",
    "human services case management",
    "social services case management",
    "nonprofit case workers software",
    "case management platform",
    "charity case management",
    "NGO case management",
    "case management tools nonprofits",
    "nonprofit client tracking",
    "social work case management",
    "case management database",
    "best case management software nonprofits",
  ],
};

const benefits = [
  {
    metric: "100%",
    title: "Complete Client Visibility",
    description: "See every client interaction, service, outcome, and note in one timeline. No more lost paperwork or scattered records.",
  },
  {
    metric: "60%",
    title: "Less Administrative Work",
    description: "Automate intake forms, progress notes, outcome tracking, and reporting — freeing case workers for direct service.",
  },
  {
    metric: "3x",
    title: "Better Client Outcomes",
    description: "Data-driven case management helps case workers identify at-risk clients, track progress, and deliver more effective services.",
  },
  {
    metric: "100%",
    title: "Compliance & Reporting",
    description: "Automated funder reports, outcome tracking, and compliance documentation — always audit-ready.",
  },
];

const features = [
  {
    title: "Client Intake & Assessment",
    description: "Digital intake forms, automated assessments, and eligibility screening to onboard clients efficiently.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Case Tracking",
    description: "Track case status, milestones, referrals, and next steps for every client in one dashboard.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Service Management",
    description: "Track services delivered, schedule appointments, manage referrals, and monitor service quality.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "Outcome Tracking",
    description: "Define outcome metrics, track client progress, and measure programme effectiveness over time.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Progress Notes",
    description: "Digital progress notes with templates, auto-save, and full case history for every client interaction.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
  {
    title: "Referral Management",
    description: "Track referrals in and out, manage partner organisations, and monitor referral outcomes.",
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
  {
    title: "Client Portal",
    description: "Self-service portal for clients to view services, complete forms, and communicate with case workers.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Outcome Reports",
    description: "Automated outcome reports for funders, board members, and programme managers.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

const comparisonData = [
  { feature: "Built-In Case Management", kindora: true, salesforce: false, effilogics: true, apricot: true },
  { feature: "Integrated Donor CRM", kindora: true, salesforce: true, effilogics: false, apricot: false },
  { feature: "Client Intake Forms", kindora: true, salesforce: false, effilogics: true, apricot: true },
  { feature: "Outcome Tracking", kindora: true, salesforce: "partial", effilogics: true, apricot: true },
  { feature: "Referral Management", kindora: true, salesforce: false, effilogics: true, apricot: true },
  { feature: "Client Portal", kindora: true, salesforce: false, effilogics: false, apricot: false },
  { feature: "Volunteer Management", kindora: true, salesforce: false, effilogics: false, apricot: false },
  { feature: "Affordable Pricing", kindora: true, salesforce: false, effilogics: false, apricot: false },
];

const faqs = [
  {
    question: "What is nonprofit case management software?",
    answer:
      "Nonprofit case management software is a tool that helps human services organisations track client cases, manage services, record progress notes, and measure outcomes. It centralises client records, automates administrative tasks, and helps case workers deliver more effective services.",
  },
  {
    question: "How is Kindora different from dedicated case management tools?",
    answer:
      "Dedicated tools like Effilogics or Apricot handle case management but don't manage donors, fundraising, or volunteers. Kindora combines case management with complete nonprofit operations — one system for client services, donor management, and organisational reporting.",
  },
  {
    question: "Can I track client outcomes in Kindora?",
    answer:
      "Yes. Kindora lets you define outcome metrics, track client progress over time, and generate outcome reports for funders. You can see individual client progress and aggregate programme effectiveness across your organisation.",
  },
  {
    question: "Does Kindora support client intake?",
    answer:
      "Yes. Kindora includes digital intake forms, automated eligibility screening, and assessment tools. Clients can complete forms online or case workers can enter information during intake meetings.",
  },
  {
    question: "Is Kindora suitable for social services and human services nonprofits?",
    answer:
      "Yes. Kindora is designed for any nonprofit that delivers services to clients — social services, housing, food banks, mental health, youth programmes, and more. The case management module handles intake, services, outcomes, and reporting.",
  },
];

const platformStats = [
  { metric: "100%", label: "Client visibility" },
  { metric: "60%", label: "Less admin work" },
  { metric: "3x", label: "Better outcomes" },
  { metric: "100%", label: "Compliance ready" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Nonprofit Case Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Nonprofit case management software — track client cases, manage services, and measure outcomes.",
      url: "https://spacenexus.net/kindora/nonprofit-case-management-software",
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

export default function NonprofitCaseManagementSoftwarePage() {
  return (
    <>
      <Script id="nonprofit-case-management-software-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-blue-600">Case Management</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Nonprofit Case Management Software That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">Delivers Results</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Track client cases, manage services, measure outcomes, and report impact — all connected to your donors and programmes in one system.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-cyan-600 hover:to-blue-700 rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
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

            {/* Visual: Case Management Dashboard */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-bold text-gray-900">Case Dashboard</h3>
                  <span className="text-xs px-3 py-1 bg-green-500/10 text-green-600 rounded-full font-semibold">Active</span>
                </div>
                <div className="space-y-3">
                  {[
                    { client: "Maria Garcia", status: "Active", next: "Follow-up call", priority: "high" },
                    { client: "James Wilson", status: "New", next: "Intake assessment", priority: "medium" },
                    { client: "Sarah Thompson", status: "Active", next: "Service review", priority: "low" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <div className={`w-2 h-2 rounded-full ${item.priority === "high" ? "bg-red-500" : item.priority === "medium" ? "bg-yellow-500" : "bg-green-500"}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-gray-900">{item.client}</p>
                        <p className="text-[10px] text-gray-500">{item.next}</p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full font-semibold">{item.status}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[
                    { label: "Active Cases", value: "47" },
                    { label: "Services", value: "124" },
                    { label: "Outcomes", value: "89%" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-sm font-bold text-gray-900">{stat.value}</p>
                      <p className="text-[10px] text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platformStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">{stat.metric}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">Why Case Management</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Better Service, Better Outcomes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Paper files and spreadsheets can't track complex cases. Case management software gives case workers the tools to deliver effective, compliant services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white text-xl font-bold mb-5">
                  {benefit.metric}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">Features</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Everything Your Case Workers Need</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From intake to outcomes, Kindora case management covers every step of client service delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">How We Compare</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Other Case Management Tools</h2>
            <p className="text-lg text-gray-600">See why nonprofits choose Kindora over dedicated case management systems.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-blue-600">Kindora</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Salesforce</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Effilogics</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Apricot</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className={i < comparisonData.length - 1 ? "border-b border-gray-50" : ""}>
                      <td className="py-4 px-6 text-sm text-gray-900 font-medium">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.kindora === "boolean" ? (
                          row.kindora ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.salesforce === "boolean" ? (
                          row.salesforce ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.effilogics === "boolean" ? (
                          row.effilogics ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.apricot === "boolean" ? (
                          row.apricot ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">FAQs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Improve Client Outcomes?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of nonprofits replacing paper files with integrated case management software.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Free Starter Plan
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-full transition-all duration-300"
            >
              Request a Demo
            </Link>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
