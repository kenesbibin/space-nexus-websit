import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grant Management Software for Nonprofits | Kindora",
  description:
    "End-to-end grant management platform for nonprofits: track applications, manage compliance, automate reporting, and monitor grant lifecycles. Built for grant-dependent organizations.",
  keywords: [
    "grant management software",
    "nonprofit grant tracking",
    "grant compliance software",
    "grant reporting tools",
    "grant lifecycle management",
    "foundation management software",
  ],
  alternates: {
    canonical: "/kindora/grant-management",
  },
  openGraph: {
    title: "Grant Management Software for Nonprofits | Kindora",
    description:
      "End-to-end grant management platform for nonprofits: track applications, manage compliance, automate reporting, and monitor grant lifecycles from submission to closeout.",
    url: "https://spacenexus.net/kindora/grant-management",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Grant Management",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "End-to-end grant management software for nonprofits. Track applications, manage compliance deadlines, automate reporting, and monitor grant lifecycles.",
      url: "https://spacenexus.net/kindora/grant-management",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can grant management software handle multiple funders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora supports multiple grantors with different reporting formats, deadlines, and compliance requirements. Each grant has its own budget, timeline, and reporting schedule while giving you a portfolio-wide view of all active grants.",
          },
        },
        {
          "@type": "Question",
          name: "How does grant reporting work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora generates both narrative and financial reports from your live data. Budget vs. actual reports, outcome tracking, and compliance checklists are automatically populated from your grant activities, reducing the time spent on manual report preparation.",
          },
        },
        {
          "@type": "Question",
          name: "Does Kindora support federal grant compliance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora includes tools for tracking federal grant requirements including cost allocation, time and effort reporting, allowable cost documentation, and audit trail maintenance. The platform is designed to support 2 CFR Part 200 compliance requirements.",
          },
        },
      ],
    },
  ],
};

const features = [
  {
    title: "Grant Lifecycle Tracking",
    description: "Track every stage from prospecting and application to award, reporting, and closeout. Never miss a deadline with automated reminders.",
    href: "/kindora/grant-lifecycle-management",
  },
  {
    title: "Grant Compliance Management",
    description: "Ensure every grant dollar is spent according to restrictions. Track allowable expenses, maintain audit trails, and generate compliance reports.",
    href: "/kindora/grant-compliance-software",
  },
  {
    title: "Grant Reporting",
    description: "Generate narrative and financial reports in grantor-required formats. Track outcomes and impact metrics alongside budget data.",
    href: "/kindora/grant-reporting-software",
  },
  {
    title: "Grant Tracking Dashboard",
    description: "Real-time overview of all active grants, pending reports, upcoming deadlines, and budget utilization across your portfolio.",
    href: "/kindora/grant-tracking-software",
  },
  {
    title: "Foundation Management",
    description: "Manage foundation relationships, application pipelines, and award histories in a centralized database.",
    href: "/kindora/foundation-management-software",
  },
  {
    title: "Cost Allocation",
    description: "Track and allocate expenses across multiple grants with automated cost allocation rules. Generate grant-specific financial reports.",
    href: "/kindora/cost-allocation-software",
  },
];

const relatedPages = [
  { title: "Grant Management Software", href: "/kindora/grant-management-software" },
  { title: "Grant Tracking Software", href: "/kindora/grant-tracking-software" },
  { title: "Grant Compliance Software", href: "/kindora/grant-compliance-software" },
  { title: "Grant Lifecycle Management", href: "/kindora/grant-lifecycle-management" },
  { title: "Grant Reporting Software", href: "/kindora/grant-reporting-software" },
  { title: "Foundation Management Software", href: "/kindora/foundation-management-software" },
  { title: "Cost Allocation Software", href: "/kindora/cost-allocation-software" },
  { title: "Grant Management Blog", href: "/kindora/blog" },
];

export default function GrantManagementPage() {
  return (
    <>
      <Script id="grant-management-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Grant Management Software for Nonprofits
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              Kindora's grant management platform helps nonprofits track the full grant lifecycle from application to closeout. Manage compliance deadlines, automate reporting, track budgets, and maintain audit trails for every grant in your portfolio. Built for grant-dependent organizations that need to demonstrate impact to funders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kindora/pricing" className="bg-[#2563eb] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors">
                View pricing
              </Link>
              <Link href="/kindora/demo" className="bg-white text-[#2563eb] border-2 border-[#2563eb] px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Request a demo
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Grant Management Software Matters</h2>
            <p className="text-gray-600 mb-12 max-w-3xl">
              Grants are a critical revenue source for many nonprofits, but managing multiple grants with different reporting requirements, deadlines, and compliance rules is complex. Without dedicated grant management software, organizations risk missed deadlines, compliance violations, and lost funding opportunities.
            </p>
            <p className="text-gray-600 mb-12 max-w-3xl">
              Kindora centralizes grant tracking, compliance monitoring, reporting, and budget management in one platform. Your team can see the status of every grant at a glance, automate routine reporting tasks, and maintain the audit trail needed for grantor reviews.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Grant Management Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((f) => (
                <Link key={f.href} href={f.href} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-[#2563eb] hover:shadow-md transition-all">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.description}</p>
                  <span className="text-[#2563eb] text-sm font-medium mt-2 inline-block">Learn more &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPages.map((p) => (
                <Link key={p.href} href={p.href} className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-[#2563eb] transition-colors">
                  <span className="text-[#2563eb] font-medium">{p.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can grant management software handle multiple funders?</h3>
                <p className="text-gray-600">Yes. Kindora supports multiple grantors with different reporting formats, deadlines, and compliance requirements. Each grant has its own budget, timeline, and reporting schedule while giving you a portfolio-wide view of all active grants.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How does grant reporting work?</h3>
                <p className="text-gray-600">Kindora generates both narrative and financial reports from your live data. Budget vs. actual reports, outcome tracking, and compliance checklists are automatically populated from your grant activities, reducing the time spent on manual report preparation.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Does Kindora support federal grant compliance?</h3>
                <p className="text-gray-600">Kindora includes tools for tracking federal grant requirements including cost allocation, time and effort reporting, allowable cost documentation, and audit trail maintenance. The platform is designed to support 2 CFR Part 200 compliance requirements.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-[#2563eb] text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Streamline your grant management</h2>
            <p className="text-blue-100 mb-6">Start your free Starter plan. No credit card required.</p>
            <Link href="/kindora/demo" className="inline-block bg-white text-[#2563eb] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get started free
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
