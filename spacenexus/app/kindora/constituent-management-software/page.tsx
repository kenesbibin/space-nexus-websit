import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Constituent Management Software | Manage Constituents",
  description:
    "Kindora constituent management software helps nonprofits track donors, volunteers, staff, and beneficiaries in one unified system with relationship mapping and engagement tracking.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/constituent-management-software",
  },
  openGraph: {
    title: "Constituent Management Software",
    description: "Track and manage all constituents — donors, volunteers, staff, and beneficiaries — in one unified system.",
    url: "https://spacenexus.net/kindora/constituent-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Constituent Management Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Constituent Management Software",
    description: "Track and manage all constituents — donors, volunteers, staff, and beneficiaries — in one system.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "constituent management software",
    "constituent relationship management",
    "nonprofit constituent management",
    "constituent tracking software",
    "constituent database software",
    "donor constituent management",
    "constituent engagement software",
    "CRM constituent management",
    "constituent data management",
    "constituent communication software",
    "charity constituent management",
    "NGO constituent tracking",
    "beneficiary management software",
    "stakeholder management software",
    "best constituent management software",
  ],
};

const features = [
  {
    title: "Constituent Profiles",
    description: "Complete profiles for donors, volunteers, staff, beneficiaries, and board members — all in one system.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Relationship Mapping",
    description: "Map relationships between constituents — family connections, corporate affiliations, and board relationships.",
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
  {
    title: "Constituent Types",
    description: "Categorise constituents by type — donors, volunteers, beneficiaries, staff, board members, partners, and more.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Engagement Tracking",
    description: "Track every interaction — donations, volunteer hours, event attendance, communications, and service delivery.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Communication Log",
    description: "Record emails, calls, meetings, and notes. Know exactly how and when you last interacted with each constituent.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    title: "Segmentation",
    description: "Segment constituents by type, engagement level, giving history, location, programme participation, and custom fields.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "Constituent Reports",
    description: "Demographic reports, engagement analytics, retention rates, and constituent growth trends in one dashboard.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Data Import/Export",
    description: "Import from spreadsheets or other systems. Export lists for mailings, reports, and external analysis.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
  },
];

const comparisonData = [
  { feature: "Constituent Profiles", kindora: true, bloomerrang: true, neontwo: true, lurato: true },
  { feature: "Relationship Mapping", kindora: true, bloomerrang: "partial", neontwo: false, lurato: false },
  { feature: "Multiple Constituent Types", kindora: true, bloomerrang: true, neontwo: true, lurato: "partial" },
  { feature: "Engagement Tracking", kindora: true, bloomerrang: true, neontwo: true, lurato: true },
  { feature: "Communication Log", kindora: true, bloomerrang: true, neontwo: true, lurato: true },
  { feature: "Advanced Segmentation", kindora: true, bloomerrang: true, neontwo: "partial", lurato: false },
  { feature: "Grant Management", kindora: true, bloomerrang: false, neontwo: false, lurato: false },
  { feature: "Volunteer Tracking", kindora: true, bloomerrang: false, neontwo: true, lurato: false },
];

const faqs = [
  {
    question: "What is constituent management software?",
    answer:
      "Constituent management software helps nonprofits track and manage all the people connected to their organisation — donors, volunteers, staff, beneficiaries, board members, and partners. It provides a unified view of every constituent and their relationship to your mission.",
  },
  {
    question: "How is constituent management different from donor management?",
    answer:
      "Donor management focuses specifically on fundraising relationships. Constituent management is broader — it includes donors plus volunteers, beneficiaries, staff, board members, and any other stakeholder connected to your organisation.",
  },
  {
    question: "Can Kindora track relationships between constituents?",
    answer:
      "Yes. Kindora includes relationship mapping that tracks family connections, corporate affiliations, board relationships, and other connections between constituents. This helps you understand the full network around your organisation.",
  },
  {
    question: "What types of constituents can Kindora manage?",
    answer:
      "Kindora manages donors, volunteers, beneficiaries, staff members, board members, corporate partners, grant makers, and any other constituent type you define. Custom fields let you track data specific to each type.",
  },
  {
    question: "Can I segment constituents for targeted communications?",
    answer:
      "Yes. Kindora segments constituents by type, engagement level, giving history, location, programme participation, and any custom field. Create targeted lists for email campaigns, mailings, and outreach.",
  },
  {
    question: "Is Kindora suitable for social service organisations?",
    answer:
      "Yes. Kindora supports beneficiary management, case tracking, and service delivery alongside fundraising — making it ideal for social service organisations that manage both clients and donors.",
  },
];

const platformStats = [
  { metric: "1", label: "Unified constituent view" },
  { metric: "All", label: "Constituent types" },
  { metric: "Auto", label: "Engagement scoring" },
  { metric: "Real-time", label: "Relationship mapping" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Constituent Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Constituent management software for nonprofits — donor, volunteer, staff, and beneficiary tracking in one unified system.",
      url: "https://spacenexus.net/kindora/constituent-management-software",
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

export default function ConstituentManagementSoftwarePage() {
  return (
    <>
      <Script id="constituent-management-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-rose-600">Constituent Management</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Manage Every{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Constituent Relationship</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Donors, volunteers, beneficiaries, staff, and board members — track every constituent and their relationship to your mission in one unified system.
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

            {/* Right visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Constituent Database</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">1,247 Total</span>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { name: "Sarah Johnson", type: "Donor + Volunteer", activity: "23 donations, 48 volunteer hours", updated: "Today", color: "from-rose-400 to-rose-500" },
                    { name: "Robert Smith", type: "Board Member", activity: "Monthly board meetings, 2 campaigns", updated: "Yesterday", color: "from-pink-400 to-pink-500" },
                    { name: "Tech Corp", type: "Corporate Partner", activity: "3 grants, event sponsorship", updated: "3 days ago", color: "from-emerald-400 to-emerald-500" },
                    { name: "Emily Davis", type: "Beneficiary", activity: "Programme A, Programme B", updated: "1 week ago", color: "from-amber-400 to-amber-500" },
                  ].map((constituent) => (
                    <div key={constituent.name} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${constituent.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                        {constituent.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">{constituent.name}</p>
                        <p className="text-xs text-gray-500 truncate">{constituent.activity}</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          constituent.type.includes("Donor") ? "bg-rose-100 text-rose-700" :
                          constituent.type.includes("Board") ? "bg-pink-100 text-pink-700" :
                          constituent.type.includes("Corporate") ? "bg-emerald-100 text-emerald-700" :
                          "bg-amber-100 text-amber-700"
                        }`}>{constituent.type}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-100">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-black text-gray-900">1,247</p>
                      <p className="text-[10px] text-gray-500">Total Constituents</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-rose-600">6</p>
                      <p className="text-[10px] text-gray-500">Constituent Types</p>
                    </div>
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
                <div className="text-3xl lg:text-4xl font-black text-rose-500 mb-1">{stat.metric}</div>
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
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Complete Constituent Management</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every constituent type, every interaction, every relationship — all in one unified system.
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

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">How We Compare</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Other Constituent Software</h2>
            <p className="text-lg text-gray-600">See why nonprofits choose Kindora over Bloomerang, Neon CRM, and Lurato.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-rose-600">Kindora</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Bloomerang</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Neon CRM</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Lurato</th>
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
                        {typeof row.bloomerrang === "boolean" ? (
                          row.bloomerrang ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.neontwo === "boolean" ? (
                          row.neontwo ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.lurato === "boolean" ? (
                          row.lurato ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
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
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
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
      <section className="py-20 lg:py-28 bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Manage Every Constituent?</h2>
          <p className="text-xl text-rose-100 mb-10 max-w-2xl mx-auto">
            Join nonprofits using Kindora to track donors, volunteers, beneficiaries, and all stakeholders in one system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-rose-600 bg-white hover:bg-rose-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
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
