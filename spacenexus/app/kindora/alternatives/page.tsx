import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";
import ComparisonMethodology from "../components/ComparisonMethodology";

export const metadata: Metadata = {
  title: "Nonprofit Software Alternatives | Kindora vs Competitors",
  description:
    "Compare Kindora to Bloomerang, DonorPerfect, Salesforce Nonprofit Cloud, Neon One, DonorDock, Little Green Light, Bonterra, and Network for Good. See pricing and features.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/alternatives",
  },
  openGraph: {
    title: "All Nonprofit Software Alternatives Compared",
    description:
      "Side-by-side comparisons of Kindora vs the top nonprofit software platforms — features, pricing, and honest best-for guidance.",
    url: "https://spacenexus.net/kindora/alternatives",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora — Nonprofit Software Alternatives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Nonprofit Software Alternatives Compared",
    description:
      "Compare Kindora vs Bloomerang, DonorPerfect, Salesforce NPC, Neon One, and more — features, pricing, and best-for guidance.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "nonprofit software alternatives",
    "bloomerang alternative",
    "donorperfect alternative",
    "salesforce nonprofit cloud alternative",
    "neon one alternative",
    "donordock alternative",
    "little green light alternative",
    "bonterra alternative",
    "network for good alternative",
    "kindora vs",
    "best nonprofit software",
    "donor management software alternatives",
    "nonprofit crm comparison",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Nonprofit Software Alternatives — Kindora Comparison Hub",
  url: "https://spacenexus.net/kindora/alternatives",
  description:
    "Compare Kindora to the top nonprofit management platforms: Bloomerang, DonorPerfect, Salesforce Nonprofit Cloud, Neon One, DonorDock, Little Green Light, Bonterra, and Network for Good.",
  about: {
    "@type": "SoftwareApplication",
    name: "Kindora NGO OS",
    applicationCategory: "BusinessApplication",
  },
  mainEntity: [
    { "@type": "WebPage", url: "https://spacenexus.net/kindora/bloomerang-alternative", name: "Bloomerang Alternative" },
    { "@type": "WebPage", url: "https://spacenexus.net/kindora/donorperfect-alternative", name: "DonorPerfect Alternative" },
    { "@type": "WebPage", url: "https://spacenexus.net/kindora/salesforce-nonprofit-cloud-alternative", name: "Salesforce Nonprofit Cloud Alternative" },
    { "@type": "WebPage", url: "https://spacenexus.net/kindora/neon-one-alternative", name: "Neon One Alternative" },
    { "@type": "WebPage", url: "https://spacenexus.net/kindora/donordock-alternative", name: "DonorDock Alternative" },
    { "@type": "WebPage", url: "https://spacenexus.net/kindora/little-green-light-alternative", name: "Little Green Light Alternative" },
    { "@type": "WebPage", url: "https://spacenexus.net/kindora/bonterra-alternative", name: "Bonterra Alternative" },
    { "@type": "WebPage", url: "https://spacenexus.net/kindora/network-for-good-alternative", name: "Network for Good Alternative" },
    { "@type": "WebPage", url: "https://spacenexus.net/kindora/best-salesforce-alternatives", name: "Best Salesforce Alternatives" },
    { "@type": "WebPage", url: "https://spacenexus.net/kindora/best-bloomerang-alternatives", name: "Best Bloomerang Alternatives" },
    { "@type": "WebPage", url: "https://spacenexus.net/kindora/best-donorperfect-alternatives", name: "Best DonorPerfect Alternatives" },
  ],
};

const alternativePages = [
  {
    name: "Bloomerang Alternative",
    slug: "bloomerang-alternative",
    tagline: "Everything Bloomerang does for donors — plus grants, case management, and nonprofit accounting.",
    bestFor: "Nonprofits that also manage grants, programs, or social services",
  },
  {
    name: "DonorPerfect Alternative",
    slug: "donorperfect-alternative",
    tagline: "Donor management without the per-user pricing model and dated interface.",
    bestFor: "Nonprofits tired of tiered add-on pricing for basics",
  },
  {
    name: "Salesforce NPC Alternative",
    slug: "salesforce-nonprofit-cloud-alternative",
    tagline: "The power of a full-featured CRM without the consultants and admin overhead.",
    bestFor: "Nonprofits that want a complete CRM without Salesforce complexity",
  },
  {
    name: "Neon One Alternative",
    slug: "neon-one-alternative",
    tagline: "One integrated platform instead of buying modular add-ons separately.",
    bestFor: "Nonprofits that want donor CRM and fundraising in one price",
  },
  {
    name: "DonorDock Alternative",
    slug: "donordock-alternative",
    tagline: "Powerful donor management without the high monthly fee or onboarding cost.",
    bestFor: "Nonprofits comparing donor management features and current vendor quotes",
  },
  {
    name: "Little Green Light Alternative",
    slug: "little-green-light-alternative",
    tagline: "Affordable donor management that also covers grants, programs, and accounting.",
    bestFor: "Small nonprofits that need more than LGL's donor-focused feature set",
  },
  {
    name: "Bonterra Alternative",
    slug: "bonterra-alternative",
    tagline: "Purpose-built modules in one platform instead of assembling a suite.",
    bestFor: "Nonprofits evaluating Bonterra's suite without the enterprise price",
  },
  {
    name: "Network for Good Alternative",
    slug: "network-for-good-alternative",
    tagline: "Donation and donor tools plus grant, program, and financial management.",
    bestFor: "Nonprofits that want giving tools plus full operations in one place",
  },
];

const pluralPages = [
  {
    name: "Best Salesforce Alternatives",
    slug: "best-salesforce-alternatives",
    tagline: "The top Salesforce Nonprofit Cloud alternatives compared — features, pricing, and fit.",
  },
  {
    name: "Best Bloomerang Alternatives",
    slug: "best-bloomerang-alternatives",
    tagline: "The top Bloomerang alternatives for donor management — compared honestly.",
  },
  {
    name: "Best DonorPerfect Alternatives",
    slug: "best-donorperfect-alternatives",
    tagline: "The top DonorPerfect alternatives — feature by feature, price by price.",
  },
];

const reasonsToMove = [
  {
    title: "One Platform, Not a Stack",
    description:
      "Most legacy tools only cover donors or fundraising. Kindora adds grants, case management, nonprofit accounting, volunteers, and communications — so you stop paying for 3–4 separate tools.",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  {
    title: "Affordable from the Start",
    description:
      "Kindora's free plan covers up to 5 members — no credit card, no per-user fee that grows with your team. Add capacity only when your organization actually grows.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Implementation Scope",
    description:
      "Starter signup is self-service. Data migration assistance, training, integrations, and service-level terms depend on plan and scope; discuss requirements with Kindora before choosing a paid tier.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Reporting That Ties Together",
    description:
      "Board reports, grant compliance documents, financial statements, and donor analytics generated from a single source of truth.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

export default function AlternativesPage() {
  return (
    <>
      <Script
        id="alternatives-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-blue-600">
                Comparison Hub
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Every Nonprofit Software Alternative,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">
                Compared Honestly
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Compare Kindora to Bloomerang, DonorPerfect, Salesforce Nonprofit
              Cloud, Neon One, DonorDock, Little Green Light, Bonterra, and
              Network for Good. Pricing verified August 2026. Every comparison
              lists what each tool does well and where it falls short — no
              marketing spin.
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

      {/* Sticky Jump Nav */}
      <div className="sticky top-16 z-30 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <nav className="flex gap-2 py-3 whitespace-nowrap">
            {alternativePages.map((p) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="px-4 py-1.5 rounded-full bg-gray-100 hover:bg-blue-500/10 hover:text-[#2563eb] text-sm font-medium text-gray-600 transition-colors"
              >
                {p.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Individual Comparisons */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Head-to-Head
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Kindora vs a Specific Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep-dive comparisons against each major nonprofit software
              platform, with honest strengths and weaknesses for both sides.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {alternativePages.map((p) => (
              <Link
                key={p.slug}
                href={`/kindora/${p.slug}`}
                id={p.slug}
                className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-blue-500/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 scroll-mt-28"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                    {p.name}
                  </h3>
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-[#2563eb] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {p.tagline}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Best for:
                  </span>
                  <span className="text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                    {p.bestFor}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Roundups */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Roundups
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Best Alternatives, Side by Side
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multi-tool roundups that compare the leading alternatives on
              features and pricing — with Kindora evaluated on the same
              criteria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pluralPages.map((p) => (
              <Link
                key={p.slug}
                href={`/kindora/${p.slug}`}
                className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-blue-500/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors mb-3">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {p.tagline}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-[#2563eb] group-hover:gap-2 transition-all">
                  View roundup
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why switch */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Why Switch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common reasons nonprofits move to Kindora
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              If any of these sound like your organization, it may be time to
              evaluate your current stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasonsToMove.map((reason) => (
              <div
                key={reason.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-[#2563eb] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={reason.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#2563eb] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Still comparing? Start free.
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Kindora&apos;s free plan covers up to 5 members. See for yourself
            whether it replaces the tools you&apos;re currently paying for.
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
              href="/kindora/vs-competitors"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-[#2563eb] transition-colors"
            >
              View the Big Comparison
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
