import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Solutions - Use Cases for Every Nonprofit Type",
  description:
    "Discover how Kindora NGO OS serves community service organizations, fundraising-focused nonprofits, grant-dependent organizations, and multi-program nonprofits.",
  keywords: [
    "nonprofit solutions",
    "NGO use cases",
    "community organization software",
    "social services software",
    "nonprofit sector solutions",
  ],
  alternates: {
    canonical: "/kindora/solutions",
  },
  openGraph: {
    title: "Solutions - Use Cases for Every Nonprofit Type",
    description:
      "Discover how Kindora NGO OS serves community service organizations, fundraising-focused nonprofits, grant-dependent organizations, and multi-program nonprofits.",
    url: "https://spacenexus.net/kindora/solutions",
    type: "website",
  },
};

const solutions = [
  {
    id: "community-services",
    title: "Community Service Organizations",
    subtitle: "Client intake, case management, and service delivery",
    description:
      "For nonprofits focused on delivering services to individuals and communities, Kindora provides comprehensive tools for managing client relationships, tracking service enrollment, and measuring program outcomes.",
    color: "emerald",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    capabilities: [
      {
        title: "Client Intake & Demographics",
        description:
          "Comprehensive intake forms capturing personal information, demographics, location data, and emergency contacts. Track client status from waitlist to active to completed.",
      },
      {
        title: "Service Catalog Management",
        description:
          "Define services across categories like Education, Legal, Employment, Youth, Basic Needs, Housing, and Health. Set capacity limits and eligibility requirements.",
      },
      {
        title: "Enrollment Tracking",
        description:
          "Link clients to services with full enrollment lifecycle management. Track start dates, completion status, assigned supervisors, and follow-up schedules.",
      },
      {
        title: "Volunteer Coordination",
        description:
          "Maintain volunteer profiles with skills inventory and availability. Track volunteer hours and milestone achievements.",
      },
      {
        title: "Program Outcome Reporting",
        description:
          "Generate reports on enrollment statistics, completion rates, services by category, and client demographics to demonstrate impact.",
      },
      {
        title: "Grant Compliance Documentation",
        description:
          "Cost allocation tools help you track program expenses and generate reports that meet grantor requirements.",
      },
    ],
  },
  {
    id: "fundraising",
    title: "Fundraising-Focused Nonprofits",
    subtitle: "Donor relationship management and campaign tracking",
    description:
      "For organizations where donor relationships and fundraising campaigns are central to operations, Kindora provides robust tools for managing donors, tracking donations, and optimizing fundraising efforts.",
    color: "rose",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    capabilities: [
      {
        title: "Donor Relationship Management",
        description:
          "Complete donor profiles with contact information, giving history, communication records, and relationship notes. Support for Individual, Corporate, Foundation, and Government donors.",
      },
      {
        title: "Campaign Management",
        description:
          "Create and manage Fundraising, Event, Awareness, and Advocacy campaigns. Set goals, track progress in real-time, and link donations directly to campaigns for attribution.",
      },
      {
        title: "Donation Tracking",
        description:
          "Log donations with full details including amount, date, payment method, and receipt status. Support for Cash, Check, Credit Card, Bank Transfer, Online, ACH, and Wire payments.",
      },
      {
        title: "Recurring Donation Support",
        description:
          "Manage monthly giving programs and subscription-based donations with automated tracking.",
      },
      {
        title: "Donor Analytics",
        description:
          "Access reports on monthly donation trends, donor type breakdown, top donors ranking, recurring vs one-time donation analysis, and payment method distribution.",
      },
      {
        title: "Acknowledgment Management",
        description:
          "Track receipt status (Pending, Sent, Not Required) and send thank-you communications directly from donor profiles.",
      },
    ],
  },
  {
    id: "grant-dependent",
    title: "Grant-Dependent Organizations",
    subtitle: "Grant lifecycle and compliance management",
    description:
      "For organizations that rely heavily on grant funding, Kindora provides end-to-end grant management from prospecting to close, with robust tools for compliance tracking and financial reporting.",
    color: "blue",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    capabilities: [
      {
        title: "Grant Lifecycle Management",
        description:
          "Track grants through every stage: Prospect, Applied, Awarded, Declined, and Closed. Never lose track of important deadlines or follow-ups.",
      },
      {
        title: "Grantor Directory",
        description:
          "Maintain relationships with Foundation, Government, Corporate, and Individual grantors. Track grantor status and historical giving patterns.",
      },
      {
        title: "Receipt & Deposit Tracking",
        description:
          "Log grant receipts with payment type (Check, ACH, Wire, Cash), track receipt status, and confirm deposits with check number documentation.",
      },
      {
        title: "Budget-to-Grant Alignment",
        description:
          "Create grant-specific budgets and track actual spending against budgeted amounts in real-time.",
      },
      {
        title: "Cost Allocation",
        description:
          "Split expenses across multiple grants and programs with percentage-based allocation. Real-time validation ensures allocations total exactly 100%.",
      },
      {
        title: "Compliance-Ready Reporting",
        description:
          "Generate financial reports including Statement of Activities, expense breakdowns by grant, and budget vs actual comparisons for grantor reporting.",
      },
    ],
  },
  {
    id: "multi-program",
    title: "Multi-Program Nonprofits",
    subtitle: "Service catalog and capacity management",
    description:
      "For organizations running multiple programs or service lines, Kindora provides the organizational structure and tracking tools needed to manage complexity while maintaining clarity.",
    color: "violet",
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
    capabilities: [
      {
        title: "Service Catalog Management",
        description:
          "Define and organize services across 8 categories. Set service descriptions, capacity limits, duration expectations, and eligibility requirements.",
      },
      {
        title: "Program-Specific Budgets",
        description:
          "Create separate budgets for each program with Department or Program budget types. Track spending against each program's allocation.",
      },
      {
        title: "Cross-Program Enrollment",
        description:
          "Enroll clients in multiple services simultaneously. Track each enrollment's status, supervisor assignment, and completion independently.",
      },
      {
        title: "Capacity Management",
        description:
          "Set maximum enrollment limits per service and monitor capacity utilization. Waitlist management helps you balance demand across programs.",
      },
      {
        title: "Cost Allocation by Program",
        description:
          "Allocate shared expenses proportionally across programs. Understand the true cost of each program for strategic planning.",
      },
      {
        title: "Comparative Analytics",
        description:
          "View enrollment by service, completion rates by program, and service category breakdowns to compare program performance.",
      },
    ],
  },
];

const colorClasses: Record<
  string,
  { bg: string; text: string; border: string; gradient: string }
> = {
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
    gradient: "from-emerald-500 to-teal-600",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-200",
    gradient: "from-rose-500 to-pink-600",
  },
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
    gradient: "from-blue-500 to-indigo-600",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-200",
    gradient: "from-violet-500 to-purple-600",
  },
};

const solutionsArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Nonprofit Management Software Solutions by Use Case",
  "description": "Kindora solutions for community service organizations, fundraising-focused nonprofits, grant-dependent organizations, and multi-program NGOs — all in one platform.",
  "about": { "@type": "Thing", "name": "Nonprofit Software Solutions" },
};



const lastUpdated = "May 15, 2026";
export default function SolutionsPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <Script id="kindora-solutions-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsArticleSchema) }} />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
              Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Built for every type of nonprofit
            </h1>
            <p className="text-lg text-gray-600">
               Whether you focus on community services, fundraising, grants, or
               multi-program delivery, Kindora adapts to your organizational
               needs.
            </p>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed italic">
               A 2024 survey by the National Council of Nonprofits found that 72% of small to mid-sized nonprofits operate with 4+ separate software subscriptions for donor management, grants, accounting, and case management.<sup className="text-[#2563eb]">[1]</sup>{" "}
               The Nonprofit Tech for Good 2024 Benchmark Report estimates that multi-program nonprofits lose an average of 15 hours per month manually transferring data between fragmented systems.<sup className="text-[#2563eb]">[2]</sup>
            </p>
            <p className="text-xs text-gray-400 mt-4">Last updated: {lastUpdated}</p>
          </div>

          {/* SEO Solution Sub-Pages */}
          <div className="mb-10">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider text-center mb-6">
              Solutions by Organization Type
            </p>
            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { href: "/kindora/solutions/small-nonprofits", label: "Small Nonprofits", bg: "bg-blue-50", text: "text-[#2563eb]", border: "border-blue-100", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { href: "/kindora/solutions/social-services", label: "Social Services", bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
                { href: "/kindora/solutions/community-organizations", label: "Community Orgs", bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-100", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                { href: "/kindora/solutions/youth-nonprofits", label: "Youth Nonprofits", bg: "bg-orange-50", text: "text-orange-500", border: "border-orange-100", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
                { href: "/kindora/solutions/housing-nonprofits", label: "Housing Nonprofits", bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-100", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border ${item.border} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center`}
                >
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.text} group-hover:scale-110 transition-transform`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900 text-sm leading-tight">{item.label}</span>
                  <span className={`text-xs ${item.text} font-medium`}>Learn more →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions Quick Nav */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {solutions.map((solution) => {
              const colors = colorClasses[solution.color];
              return (
                <a
                  key={solution.id}
                  href={`#${solution.id}`}
                  className={`group flex items-center gap-4 p-4 rounded-xl bg-white border ${colors.border} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} group-hover:scale-110 transition-transform`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={solution.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900 text-sm">
                      {solution.title}
                    </h2>
                    <p className="text-xs text-gray-500">{solution.subtitle}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Details */}
      {solutions.map((solution, idx) => {
        const colors = colorClasses[solution.color];
        const isEven = idx % 2 === 0;

        return (
          <section
            key={solution.id}
            id={solution.id}
            className={`py-16 lg:py-24 ${isEven ? "bg-white" : "bg-[#f8f9fa]"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Solution Header */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12">
                <div className="lg:w-1/3">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white mb-6`}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={solution.icon}
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h2>
                  <p
                    className={`text-sm font-medium ${colors.text} uppercase tracking-wider mb-4`}
                  >
                    {solution.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <div className="lg:w-2/3">
                  <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                    {solution.capabilities.map((capability) => (
                      <div
                        key={capability.title}
                        className={`bg-white rounded-xl border ${colors.border} p-5 hover:shadow-md transition-shadow`}
                      >
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {capability.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to find your solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Every nonprofit is unique. Let us show you how Kindora can be
            configured to meet your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300"
            >
              Request a Demo
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/kindora/features"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-[#2563eb] transition-colors"
            >
              Explore All Features
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            <Link href="/kindora/vs-competitors" className="text-[#2563eb] hover:underline">Compare Kindora vs other platforms</Link>
            {" · "}
            <Link href="/kindora/blog" className="text-[#2563eb] hover:underline">Nonprofit management tips</Link>
            {" · "}
            <Link href="/kindora/demo" className="text-[#2563eb] hover:underline">Schedule a demo</Link>
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300"
            >
              Try for Free
            </a>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </main>
  );
}
