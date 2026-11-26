import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";
import ComparisonMethodology from "../components/ComparisonMethodology";

export const metadata: Metadata = {
  title: "Best DonorPerfect Alternatives for Nonprofits (2026)",
  description:
    "Compare the best DonorPerfect alternatives: Kindora, Bloomerang, Neon One, Little Green Light, DonorDock, Bonterra, and Network for Good — features and pricing.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/best-donorperfect-alternatives",
  },
  openGraph: {
    title: "Best DonorPerfect Alternatives for Nonprofits (2026)",
    description:
      "The top DonorPerfect alternatives compared honestly — features, pricing, and best-for guidance. Pricing verified August 2026.",
    url: "https://spacenexus.net/kindora/best-donorperfect-alternatives",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Best DonorPerfect Alternatives for Nonprofits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best DonorPerfect Alternatives for Nonprofits (2026)",
    description:
      "The top DonorPerfect alternatives compared — features, pricing, and honest best-for guidance.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "donorperfect alternatives",
    "donorperfect alternative",
    "alternative to donorperfect",
    "best donorperfect alternatives",
    "donorperfect vs kindora",
    "donorperfect competitor",
    "donor management software alternatives",
    "switch from donorperfect",
    "donorperfect pricing",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora — Best DonorPerfect Alternative for Nonprofits",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "An all-in-one alternative to DonorPerfect: donor management and fundraising plus grants, case management, nonprofit accounting, volunteers, and communications.",
      url: "https://spacenexus.net/kindora/best-donorperfect-alternatives",
      offers: {
        "@type": "Offer",
    price: "See vendor current pricing",
        priceCurrency: "USD",
        description: "Free plan for up to 5 members; paid tiers quoted as custom",
      },
      featureList: [
        "Donor CRM & engagement scoring",
        "Grant lifecycle management",
        "Client case management",
        "Nonprofit accounting with cost allocation",
        "Volunteer management",
        "Communications hub",
        "Campaign management",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best DonorPerfect alternative?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For nonprofits that also manage grants, programs, or need accounting, the best alternative is an all-in-one platform like Kindora. For donor-management-only needs, Bloomerang and Little Green Light are strong options.",
          },
        },
        {
          "@type": "Question",
          name: "Why do nonprofits switch from DonorPerfect?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common reasons include tiered add-on pricing, an interface some teams find dated, and the fact that DonorPerfect focuses on donor management rather than grants, case management, and accounting.",
          },
        },
        {
          "@type": "Question",
          name: "How much does DonorPerfect cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Consult vendor current pricing; quotes vary by organization and plan.",
          },
        },
        {
          "@type": "Question",
          name: "What should I look for in a DonorPerfect alternative?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Look for donor management and reporting on par with DonorPerfect, plus — if you need them — grants, case management, accounting, and volunteer features in the same platform, with pricing that doesn't gate basics behind high tiers.",
          },
        },
        {
          "@type": "Question",
          name: "Can I migrate my data from DonorPerfect to Kindora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora supports importing donor records and giving history from common export formats. Confirm migration details with the Kindora team for your specific setup.",
          },
        },
      ],
    },
  ],
};

const painPoints = [
  {
    title: "Tiered Add-On Pricing",
    description:
      "Features you'd expect in a base plan can sit in higher tiers, so the real cost of DonorPerfect often ends up well above the advertised entry price.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Donors Only",
    description:
      "DonorPerfect is built for donor management and fundraising. Grants, case management, volunteer coordination, and nonprofit accounting live outside the platform.",
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
  },
  {
    title: "Data Silos",
    description:
      "Pulling together board, grant, and financial reporting means stitching data from DonorPerfect plus your other tools.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

const criteria = [
  "Donor management and reporting on par with DonorPerfect",
  "All-in-one coverage for nonprofits that also run grants, programs, or accounting",
  "Pricing that doesn't gate core features behind high tiers",
  "Easy data import from DonorPerfect exports",
  "Unified reporting across donors, grants, and finances",
];

const alternatives = [
  {
    name: "Kindora",
    tag: "Best all-in-one alternative",
    price: "Free Starter (up to 5 team members); paid plans custom-quoted",
    bestFor: "Nonprofits that want DonorPerfect-level donor tools plus grants, case management, accounting, and volunteers in one platform",
    honestNote:
      "Kindora's paid-tier pricing is not published, so total cost depends on your team size and modules.",
  },
  {
    name: "Bloomerang",
    price: "See vendor current pricing",
    bestFor: "Fundraising-focused nonprofits that want strong donor retention tools",
    honestNote:
      "Bloomerang is donor-CRM only; grants, case management, and accounting require separate tools.",
  },
  {
    name: "Neon One",
    price: "See vendor current pricing",
    bestFor: "Nonprofits that want donor CRM plus fundraising modules",
    honestNote:
      "Neon One sells modules separately, so the final price depends on which products you add.",
  },
  {
    name: "Little Green Light",
    price: "See vendor current pricing",
    bestFor: "Small nonprofits that want simple, affordable donor management",
    honestNote:
      "LGL is affordable and user-friendly but focused on donor management rather than full operations.",
  },
  {
    name: "DonorDock",
    price: "See vendor current pricing",
    bestFor: "Mid-size nonprofits that want polished donor management and will pay for it",
    honestNote:
      "DonorDock is premium-priced; onboarding is not included in the monthly fee.",
  },
  {
    name: "Bonterra",
    price: "See vendor current pricing",
    bestFor: "Larger nonprofits evaluating an integrated suite of purpose-built products",
    honestNote:
      "Bonterra is positioned at the enterprise end and requires contacting sales for pricing.",
  },
  {
    name: "Network for Good",
    price: "See vendor current pricing",
    bestFor: "Nonprofits that want giving and donor tools bundled with coaching",
    honestNote:
      "Network for Good requires contacting sales for pricing.",
  },
];

const comparisonRows = [
  {
    feature: "Donor CRM & tracking",
    kindora: { value: "Full CRM with engagement scoring", positive: true },
    donorperfect: { value: "Mature donor management", positive: true },
  },
  {
    feature: "Grant lifecycle management",
    kindora: { value: "Full grant tracking built in", positive: true },
    donorperfect: { value: "Not available", positive: false },
  },
  {
    feature: "Client case management",
    kindora: { value: "Built-in intake, services, outcomes", positive: true },
    donorperfect: { value: "Not available", positive: false },
  },
  {
    feature: "Nonprofit accounting",
    kindora: { value: "Built in with cost allocation", positive: true },
    donorperfect: { value: "Not available", positive: false },
  },
  {
    feature: "Volunteer management",
    kindora: { value: "Hours, scheduling, recognition", positive: true },
    donorperfect: { value: "Not available", positive: false },
  },
  {
    feature: "Communications hub",
    kindora: { value: "Built-in email and bulk messaging", positive: true },
    donorperfect: { value: "Add-ons or integrations", positive: false },
  },
  {
    feature: "Pricing model",
    kindora: { value: "Free plan; paid tiers custom-quoted", positive: true },
    donorperfect: { value: "Tiered plans; features gated by tier", positive: false },
  },
];

const recommendations = [
  {
    bestFor: "All-in-one operations (donors + grants + programs + finance)",
    pick: "Kindora",
    why: "It covers the full nonprofit operating stack in one platform, which is why it tops this list.",
  },
  {
    bestFor: "Donor management and fundraising only",
    pick: "Bloomerang",
    why: "Excellent retention tools and an intuitive interface for fundraising-focused teams.",
  },
  {
    bestFor: "Established donor program with mature reporting",
    pick: "DonorPerfect",
    why: "If your team already knows it well and the tiered pricing fits, staying is reasonable.",
  },
  {
    bestFor: "Best value for a small nonprofit",
    pick: "Little Green Light",
    why: "Review the vendor's current plan and user-limit terms to see whether they fit your budget.",
  },
];

const faqs = [
  {
    question: "What is the best DonorPerfect alternative?",
    answer:
      "For nonprofits that also manage grants, programs, or need accounting, the best alternative is an all-in-one platform like Kindora. For donor-management-only needs, Bloomerang and Little Green Light are strong options.",
  },
  {
    question: "Why do nonprofits switch from DonorPerfect?",
    answer:
      "Common reasons include tiered add-on pricing, an interface some teams find dated, and the fact that DonorPerfect focuses on donor management rather than grants, case management, and accounting.",
  },
  {
    question: "How much does DonorPerfect cost?",
    answer:
      "Consult vendor current pricing; quotes vary by organization and plan.",
  },
  {
    question: "What should I look for in a DonorPerfect alternative?",
    answer:
      "Look for donor management and reporting on par with DonorPerfect, plus — if you need them — grants, case management, accounting, and volunteer features in the same platform, with pricing that doesn't gate basics behind high tiers.",
  },
  {
    question: "Can I migrate my data from DonorPerfect to Kindora?",
    answer:
      "Kindora supports importing donor records and giving history from common export formats. Confirm migration details with the Kindora team for your specific setup.",
  },
];

export default function BestDonorPerfectAlternativesPage() {
  return (
    <>
      <Script
        id="best-donorperfect-alternatives-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-blue-600">
                Roundup · Pricing verified August 2026
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              The Best{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                DonorPerfect Alternatives
              </span>{" "}
              for Nonprofits
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              DonorPerfect is a mature donor management platform — but it only
              covers donors, and its tiered pricing can gate basics behind
              higher plans. Here are the leading alternatives compared honestly.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Try Kindora Free
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href="/kindora/demo"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Why Switch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why nonprofits look beyond DonorPerfect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              DonorPerfect does one thing well. These are the reasons
              multi-faceted nonprofits evaluate alternatives.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((p) => (
              <div key={p.title} className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-[#2563eb] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={p.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#2563eb] transition-colors">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              How We Compared
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Evaluation criteria
            </h2>
            <ul className="space-y-3">
              {criteria.map((c) => (
                <li key={c} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              We apply the same criteria to every tool — including Kindora — so
              the comparison stays honest.
            </p>
          </div>
        </div>
      </section>

      {/* Alternatives grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              The Shortlist
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The leading DonorPerfect alternatives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Seven options, each with a clear best-for and an honest caveat.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alternatives.map((alt, i) => (
              <div key={alt.name} className={`p-6 rounded-2xl border ${i === 0 ? "border-[#2563eb] bg-blue-50/30" : "border-gray-200 bg-white"} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}>
                {i === 0 && (
                  <span className="inline-block px-3 py-1 rounded-full bg-[#2563eb] text-white text-xs font-semibold mb-3">
                    {alt.tag}
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{alt.name}</h3>
                <p className="text-sm font-medium text-gray-500 mb-3">{alt.price}</p>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  <span className="font-semibold text-gray-800">Best for: </span>
                  {alt.bestFor}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  <span className="font-medium">Honest note: </span>
                  {alt.honestNote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Kindora vs DonorPerfect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              How the two compare across the features that matter most.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium bg-gray-50 w-48">Feature</th>
                  <th className="px-6 py-4 bg-[#2563eb] text-white font-bold text-center min-w-[140px]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">All-in-One</span>
                      <span className="text-base">Kindora</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 bg-gray-50 text-gray-600 font-semibold text-center min-w-[140px]">DonorPerfect</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center bg-blue-50/50">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${row.kindora.positive ? "bg-[#2563eb] text-white" : "bg-red-100 text-red-400"}`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={row.kindora.positive ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                        </svg>
                      </span>
                      <span className="block text-xs text-gray-500 mt-1 max-w-[160px] mx-auto">{row.kindora.value}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${row.donorperfect.positive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-400"}`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={row.donorperfect.positive ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                        </svg>
                      </span>
                      <span className="block text-xs text-gray-500 mt-1 max-w-[160px] mx-auto">{row.donorperfect.value}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recommendations */}
          <div className="grid md:grid-cols-2 gap-6">
            {recommendations.map((rec) => (
              <div key={rec.bestFor} className="p-6 rounded-2xl border border-gray-200 bg-white">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Best for</p>
                <h3 className="font-bold text-gray-900 mb-1">{rec.bestFor}</h3>
                <p className="text-sm text-[#2563eb] font-semibold mb-2">→ {rec.pick}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{rec.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold text-gray-700 mr-1">Related:</span>
            <Link href="/kindora/donorperfect-alternative" className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#2563eb] hover:border-blue-500/40 transition-colors">DonorPerfect Alternative</Link>
            <Link href="/kindora/donorperfect-alternative" className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#2563eb] hover:border-blue-500/40 transition-colors">Kindora vs DonorPerfect</Link>
            <Link href="/kindora/alternatives" className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#2563eb] hover:border-blue-500/40 transition-colors">All Alternatives</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about replacing DonorPerfect.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="text-base font-semibold text-gray-900">{faq.question}</span>
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            Ready to see if Kindora fits?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Start free — no credit card. If Kindora isn&apos;t the right fit,
            this guide names the tools that might be.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Start Free — No Credit Card Required
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-[#2563eb] transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Ongoing free Starter plan for up to 5 team members · Paid plans by custom quote
          </p>
          <div className="py-6 text-center border-t border-gray-100 mt-8">
            <ComparisonMethodology />
            <LastUpdated date="2026-11-26" />
          </div>
        </div>
      </section>
    </>
  );
}
