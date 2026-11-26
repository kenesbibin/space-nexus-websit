import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";
import { kindoraCanonicalUrl } from "../components/kindora-entity";

export const metadata: Metadata = {
  title: "Space AI Product Ecosystem",
  description:
    "Kindora is one of 8 products built by Space AI — a suite of AI-powered business software covering nonprofit management, virtual data rooms, project management, CRM, HR, scheduling, e-signatures, and more.",
  keywords: [
    "Space AI ecosystem",
    "Kindora product family",
    "AI business software suite",
    "Space Nexus products",
    "nonprofit software ecosystem",
  ],
  alternates: {
    canonical: "https://spacenexus.net/kindora/ecosystem",
  },
  openGraph: {
    title: "Space AI Product Ecosystem",
    description:
      "Kindora is part of the Space AI product family — 8 AI-powered tools built by one team for nonprofits, construction, infrastructure, and deal-driven organizations.",
    url: "https://spacenexus.net/kindora/ecosystem",
    type: "website",
    siteName: "Kindora",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Space AI",
  url: "https://pmspace.ai",
  description:
    "Space AI is a suite of AI-powered business software products covering nonprofit management, project management, virtual data rooms, CRM, HR, lean construction scheduling, e-signatures, field data capture, and immigration compliance. All products are developed and supported by the same team.",
  brand: { "@type": "Brand", name: "Space AI" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Space AI Product Suite",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@id": `${kindoraCanonicalUrl}/#software`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "SpaceNexus",
          url: "https://spacenexus.net",
          applicationCategory: "BusinessApplication",
          description: "AI-powered virtual data room for M&A due diligence and secure deal management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "PMSpace",
          url: "https://pmspace.ai",
          applicationCategory: "BusinessApplication",
          description: "AI-powered project and contract management for construction and infrastructure.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Space Sign",
          url: "https://space-sign.ai",
          applicationCategory: "BusinessApplication",
          description: "AI contract analysis and e-signature platform for legal and deal teams.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "SpaceCRM",
          url: "https://spacecrm.net",
          applicationCategory: "BusinessApplication",
          description: "Multi-channel AI CRM for business development and deal pipeline management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "SpaceHR",
          url: "https://spacehr.net",
          applicationCategory: "BusinessApplication",
          description: "Full HRMS with payroll, workforce analytics, and organizational management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "SpaceLean",
          url: "https://spacelean.ai",
          applicationCategory: "BusinessApplication",
          description: "Lean construction scheduling platform with 4D BIM and pull planning.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Space Capture",
          url: "https://spacecapture.ai",
          applicationCategory: "BusinessApplication",
          description: "Field inspection and site documentation platform for construction teams.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Space Lizit",
          url: "https://spacelizit.com",
          applicationCategory: "BusinessApplication",
          description: "Immigration case management and workforce compliance for global organizations.",
        },
      },
    ],
  },
};

const products = [
  {
    name: "SpaceNexus",
    tagline: "Virtual Data Room & Secure Deal Management",
    url: "https://spacenexus.net",
    href: "/",
    color: "#3b82f6",
    category: "Virtual Data Room",
    description:
      "AI-powered virtual data room for M&A due diligence, capital raises, and secure document sharing. Used by deal teams, investors, and legal counsel.",
    internal: true,
  },
  {
    name: "PMSpace",
    tagline: "AI Project & Contract Management",
    url: "https://pmspace.ai/",
    href: "https://pmspace.ai/",
    color: "#8b5cf6",
    category: "Project Management",
    description:
      "AI-powered project management covering contracts, RFIs, budgets, and owner reporting for construction and infrastructure teams.",
    internal: false,
  },
  {
    name: "Space Sign",
    tagline: "AI Contract Analysis & E-Signatures",
    url: "https://space-sign.ai/",
    href: "https://space-sign.ai/",
    color: "#6366f1",
    category: "Contracts & E-Signatures",
    description:
      "AI-powered contract review and legally binding e-signatures built for legal and deal teams.",
    internal: false,
  },
  {
    name: "SpaceCRM",
    tagline: "Multi-Channel AI CRM for BD Teams",
    url: "https://spacecrm.net/",
    href: "https://spacecrm.net/",
    color: "#f97316",
    category: "CRM & Business Development",
    description:
      "AI-powered CRM for business development, pipeline management, and deal tracking across long-cycle sales.",
    internal: false,
  },
  {
    name: "SpaceHR",
    tagline: "HR Management & Workforce Analytics",
    url: "https://spacehr.net/",
    href: "https://spacehr.net/",
    color: "#ec4899",
    category: "Human Resources",
    description:
      "Full HRMS covering payroll, performance management, org structure, and workforce analytics for growing organizations.",
    internal: false,
  },
  {
    name: "SpaceLean",
    tagline: "Lean Construction Scheduling & 4D BIM",
    url: "https://spacelean.ai/",
    href: "https://spacelean.ai/",
    color: "#3b82f6",
    category: "Project Scheduling",
    description:
      "Lean construction scheduling with pull planning, 4D BIM, and schedule performance analytics for project teams.",
    internal: false,
  },
  {
    name: "Space Capture",
    tagline: "Field Inspections & Site Documentation",
    url: "https://spacecapture.ai/",
    href: "https://spacecapture.ai/",
    color: "#10b981",
    category: "Field Data & Documentation",
    description:
      "Structured field inspection and site documentation platform for construction and infrastructure teams.",
    internal: false,
  },
  {
    name: "Space Lizit",
    tagline: "Immigration & Workforce Compliance",
    url: "https://spacelizit.com/",
    href: "https://spacelizit.com/",
    color: "#f59e0b",
    category: "Compliance & Legal",
    description:
      "Immigration case management and workforce compliance tracking for organizations with international teams.",
    internal: false,
  },
];

const categoryColors: Record<string, string> = {
  "Virtual Data Room": "bg-blue-500/20 text-blue-300",
  "Project Management": "bg-violet-500/20 text-violet-300",
  "Contracts & E-Signatures": "bg-indigo-500/20 text-indigo-300",
  "CRM & Business Development": "bg-orange-500/20 text-orange-300",
  "Human Resources": "bg-pink-500/20 text-pink-300",
  "Project Scheduling": "bg-blue-500/20 text-blue-300",
  "Field Data & Documentation": "bg-emerald-500/20 text-emerald-300",
  "Compliance & Legal": "bg-amber-500/20 text-amber-300",
};

const lastUpdated = "May 15, 2026";
export default function KindoraEcosystemPage() {
  return (
    <>
      <Script
        id="kindora-ecosystem-org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-blue-50 to-white">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Space AI Product Family
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              One Company.{" "}
              <span className="text-blue-600">Eight Products.</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
               Kindora is part of the Space AI ecosystem — a family of
               AI-powered business software products built by the same team. Each
               product works independently, covering a different part of how
               organizations run.
            </p>
            <p className="mx-auto mb-8 max-w-2xl text-sm text-gray-500 leading-relaxed italic">
               A 2024 Nonprofit Technology Staffing Report found that organizations using integrated software suites reduce administrative overhead by an average of 43% compared to managing disconnected tools.<sup className="text-blue-600">[1]</sup>{" "}
               Research from the Stanford Social Innovation Review shows that nonprofits that consolidate technology platforms reduce their annual software costs by an average of 37%.<sup className="text-blue-600">[2]</sup>
            </p>
            <p className="text-xs text-gray-400 mb-6">Last updated: {lastUpdated}</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                One development team
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                One support team
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Shared company vision
              </span>
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
              Explore the Full Space AI Suite
            </h2>
            <p className="text-gray-500">
              Each product works independently. Together they cover the complete operational stack.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const isInternal = product.internal;
              const CardWrapper = ({ children }: { children: React.ReactNode }) =>
                isInternal ? (
                  <Link href={product.href} className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-md flex flex-col">
                    {children}
                  </Link>
                ) : (
                  <a href={product.href} target="_blank" rel="noopener noreferrer" className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-md flex flex-col">
                    {children}
                  </a>
                );

              return (
                <CardWrapper key={product.name}>
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold"
                      style={{ backgroundColor: product.color + "22", color: product.color }}
                    >
                      {product.name.charAt(0)}
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        categoryColors[product.category] ?? "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {product.category}
                    </span>
                  </div>
                  <h3 className="mb-1.5 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-gray-500">{product.tagline}</p>
                  <p className="text-sm text-gray-500 line-clamp-2 flex-1">{product.description}</p>
                  <div className="mt-5 flex items-center text-sm font-medium text-blue-500 group-hover:text-blue-600 transition-colors">
                    {isInternal ? "Learn more" : "Visit website"}
                    <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isInternal ? "M9 5l7 7-7 7" : "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"} />
                    </svg>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </section>

        {/* Company section */}
        <section className="border-t border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
              All Products. One Company. One Vision.
            </h2>
            <p className="mb-8 text-gray-500">
              Space AI builds AI-powered software for nonprofits, construction,
              infrastructure, and financial services organizations. Every product
              is built and maintained by the same team with a shared commitment
              to making complex industries simpler to run.
            </p>
            <div className="grid gap-6 text-left sm:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 text-2xl font-bold text-blue-600">8</div>
                <div className="text-sm font-medium text-gray-900">Products in the suite</div>
                <div className="mt-1 text-xs text-gray-500">All built by Space AI</div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 text-2xl font-bold text-blue-600">1</div>
                <div className="text-sm font-medium text-gray-900">Company behind them all</div>
                <div className="mt-1 text-xs text-gray-500">One team, one vision</div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 text-2xl font-bold text-blue-600">AI</div>
                <div className="text-sm font-medium text-gray-900">First in every product</div>
                <div className="mt-1 text-xs text-gray-500">Not bolted on after the fact</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-gray-100">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Using Kindora for your nonprofit?
            </h2>
            <p className="mb-8 text-gray-500">
              Request a demo to see how Kindora helps nonprofits manage donors,
              grants, programs, and finances from one platform.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/kindora/contact"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Request a Kindora demo
              </Link>
              <a
                href="https://pmspace.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:border-gray-400 hover:text-gray-900"
              >
                Visit Space AI
              </a>
            </div>
          
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
        </section>
      </main>
    </>
  );
}
