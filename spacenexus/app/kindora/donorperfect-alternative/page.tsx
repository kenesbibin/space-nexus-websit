import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";
import ComparisonMethodology from "../components/ComparisonMethodology";

export const metadata: Metadata = {
  title: "DonorPerfect Alternative | Better Nonprofit Software",
  description:
    "Looking for a DonorPerfect alternative? Kindora offers everything DonorPerfect does for donor management — plus grant tracking, volunteer management, programme tracking, and more. Try it free.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/donorperfect-alternative",
  },
  openGraph: {
    title: "DonorPerfect Alternative",
    description:
      "Everything DonorPerfect does for donors — plus grants, volunteers, programmes, and communications. The all-in-one alternative.",
    url: "https://spacenexus.net/kindora/donorperfect-alternative",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora — DonorPerfect Alternative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DonorPerfect Alternative",
    description:
      "Everything DonorPerfect does for donors — plus grants, volunteers, programmes, and communications. Try Kindora free.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "donorperfect alternative",
    "donorperfect competitor",
    "alternative to donorperfect",
    "donorperfect vs kindora",
    "donorperfect replacement",
    "donorperfect crm alternative",
    "donorperfect nonprofit software",
    "donor management software alternative",
    "nonprofit crm alternative",
    "donorperfect pricing",
    "donorperfect vs",
    "best donorperfect alternative",
    "switch from donorperfect",
    "donorperfect vs kindora nonprofit",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — DonorPerfect Alternative",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "The all-in-one DonorPerfect alternative. Everything DonorPerfect does for donors — plus grant tracking, volunteer management, programme tracking, and communications.",
      url: "https://spacenexus.net/kindora/donorperfect-alternative",
      offers: {
        "@type": "Offer",
    price: "See vendor current pricing",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan for up to 5 team members; paid plans are custom-quoted",
      },
      featureList: [
        "Donor CRM & tracking",
        "Fundraising campaigns",
        "Grant lifecycle management",
        "Volunteer management",
        "Programme tracking",
        "Event management",
        "Reporting & analytics",
        "Communications hub",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why switch from DonorPerfect to Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DonorPerfect is a solid donor management system, but it doesn't include grant tracking, volunteer management, programme tracking, or event management. You end up paying for multiple tools and stitching data together. Kindora does everything in one platform at an affordable price.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora offer the same donor management features as DonorPerfect?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora includes everything DonorPerfect offers — donor profiles, giving history, segmentation, acknowledgement tracking, and online giving. Plus Kindora adds grant management, volunteer tools, programme tracking, and event management that DonorPerfect doesn't have.",
          },
        },
        {
          "@type": "Question",
          name: "How does DonorPerfect pricing compare to Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Compare the current vendor quote with Kindora's published plan limits: Starter supports up to five team members, Professional up to 25, and Enterprise has an unlimited team-member limit. Professional and Enterprise pricing is custom-quoted.",
          },
        },
        {
          "@type": "Question",
          name: "Can I migrate from DonorPerfect to Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora provides full data migration support from DonorPerfect. Our team helps you transfer donor records, giving history, custom fields, and campaign data so nothing is lost in the switch.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kindora better than DonorPerfect for small nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora offers Starter for up to five team members, Professional for up to 25, and Enterprise with an unlimited team-member limit. Compare the modules in each plan with your requirements and request a current quote for the paid plans.",
          },
        },
      ],
    },
  ],
};

const benefits = [
  {
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    title: "No Per-User Fees",
    description: "Compare the vendors' published plan limits and current quotes; Kindora Starter supports up to five members, Professional up to 25, and Enterprise has an unlimited team-member limit.",
  },
  {
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    title: "Grant Management Included",
    description: "DonorPerfect doesn't track grants. Kindora manages the full grant lifecycle — applications, budgets, deadlines, and funder reports.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Volunteer Management",
    description: "DonorPerfect has no volunteer tools. Kindora includes recruitment, scheduling, hour tracking, and volunteer communication.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Programme Tracking",
    description: "Track programme outcomes, beneficiary data, and impact metrics — capabilities DonorPerfect simply doesn't offer.",
  },
];

const comparisonData = [
  { feature: "Donor CRM", kindora: true, donorperfect: true },
  { feature: "Fundraising Campaigns", kindora: true, donorperfect: true },
  { feature: "Online Giving", kindora: true, donorperfect: true },
  { feature: "Grant Management", kindora: true, donorperfect: false },
  { feature: "Volunteer Management", kindora: true, donorperfect: false },
  { feature: "Programme Tracking", kindora: true, donorperfect: false },
  { feature: "Event Management", kindora: true, donorperfect: false },
  { feature: "Team member limit", kindora: "Starter: 5; Professional: 25; Enterprise: unlimited", donorperfect: "Check current vendor plan terms" },
];

const alternatives = [
  {
    name: "Salesforce NPSP",
    description: "Powerful but complex. Requires consultants and months of setup. Kindora gives you the same power in minutes.",
    href: "/kindora/kindora-vs-salesforce",
  },
  {
    name: "Bloomerang",
    description: "Good for donor retention but limited beyond that. Kindora adds grants, volunteers, programmes, and events.",
    href: "/kindora/bloomerang-alternative",
  },
  {
    name: "Blackbaud",
    description: "Enterprise pricing puts it out of reach for most nonprofits. Kindora delivers the same features affordably.",
    href: "/kindora/kindora-vs-blackbaud",
  },
];

export default function DonorPerfectAlternativePage() {
  return (
    <>
      <Script
        id="donorperfect-alternative-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-blue-600">DonorPerfect Alternative</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              A Better Alternative to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">DonorPerfect</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              DonorPerfect handles donors well — but that&apos;s where it stops. Kindora gives you donor management <strong>plus</strong> grant tracking, volunteer management, programme tracking, and events — all in one platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
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
          </div>

          {/* Comparison Table */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-500 to-cyan-600">
                <h2 className="text-xl font-bold text-white">DonorPerfect vs Kindora</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                      <th className="text-center py-4 px-6 text-sm font-semibold text-blue-600">Kindora</th>
                      <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">DonorPerfect</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={row.feature} className={i < comparisonData.length - 1 ? "border-b border-gray-50" : ""}>
                        <td className="py-4 px-6 text-sm text-gray-900 font-medium">{row.feature}</td>
                        <td className="py-4 px-6 text-center">
                          {row.kindora ? (
                            <span className="text-green-500 text-lg">&#10003;</span>
                          ) : (
                            <span className="text-red-400 text-lg">&#10007;</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {row.donorperfect ? (
                            <span className="text-green-500 text-lg">&#10003;</span>
                          ) : (
                            <span className="text-red-400 text-lg">&#10007;</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Switch */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">Why Switch</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">DonorPerfect Is Good at Donors. Kindora Does Everything.</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              DonorPerfect is a solid donor management system. But most nonprofits need more than just donor tracking. Kindora gives you the complete picture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">Everything Included</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What You Get with Kindora</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Donor CRM", desc: "Complete donor profiles, giving history, segmentation, and engagement scoring." },
              { title: "Fundraising", desc: "Campaigns, online giving, recurring donations, and peer-to-peer tools." },
              { title: "Grant Tracking", desc: "Applications, budgets, deadlines, compliance, and funder reports." },
              { title: "Volunteers", desc: "Recruitment, scheduling, hour tracking, and volunteer communication." },
              { title: "Programmes", desc: "Outcome tracking, beneficiary data, and impact measurement." },
              { title: "Events", desc: "Registration, attendance tracking, and post-event communication." },
              { title: "Reporting", desc: "Real-time dashboards and custom reports for every function." },
              { title: "Automation", desc: "Automate thank-yous, follow-ups, and internal workflows." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Alternatives */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">More Comparisons</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">See How Kindora Compares</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {alternatives.map((alt) => (
              <Link
                key={alt.name}
                href={alt.href}
                className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{alt.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{alt.description}</p>
                <span className="text-sm font-semibold text-blue-600 group-hover:underline">See comparison &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">FAQs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {jsonLd["@graph"]?.[1]?.mainEntity?.map((faq) => (
              <div key={faq.name} className="p-6 rounded-2xl bg-white border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Switch from DonorPerfect?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of nonprofits who replaced DonorPerfect with Kindora&apos;s all-in-one platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Free Starter
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
                <ComparisonMethodology />
                <LastUpdated date="2026-11-26" />
            </div></div>
      </section>
    </>
  );
}
