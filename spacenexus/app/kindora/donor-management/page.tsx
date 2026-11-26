import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Donor Management Software for Nonprofits | Kindora",
  description:
    "Complete donor management platform for nonprofits: track donations, manage donor relationships, automate communications, and grow recurring giving. All-in-one CRM built for small to mid-sized organizations.",
  keywords: [
    "donor management software",
    "nonprofit donor CRM",
    "donor tracking system",
    "donation management",
    "nonprofit fundraising tools",
    "donor database",
    "recurring donation software",
  ],
  alternates: {
    canonical: "/kindora/donor-management",
  },
  openGraph: {
    title: "Donor Management Software for Nonprofits | Kindora",
    description:
      "Complete donor management platform for nonprofits: track donations, manage relationships, automate communications, and grow recurring giving in one place.",
    url: "https://spacenexus.net/kindora/donor-management",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Donor Management",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "All-in-one donor management software for nonprofits. Track donations, manage donor relationships, automate thank-yous, and grow recurring giving programs.",
      url: "https://spacenexus.net/kindora/donor-management",
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
          name: "What features should donor management software have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Essential features include contact management with giving history, donation tracking (one-time and recurring), communication logs, reporting dashboards, and integration with your existing email and accounting tools. Kindora includes all of these plus volunteer coordination, grant tracking, and case management in a single platform.",
          },
        },
        {
          "@type": "Question",
          name: "How does donor management software improve fundraising?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By centralizing donor data, you can segment your audience, personalize communications, identify major gift prospects, and track campaign effectiveness. Nonprofits using donor management software typically see higher donor retention and larger average gifts because they can build stronger relationships based on donor history and preferences.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kindora suitable for small nonprofits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora is built specifically for small to mid-sized nonprofits. Our free Starter plan lets you explore all features with no commitment, and paid plans start at an affordable flat rate with no per-contact fees, so you can grow without unexpected cost increases.",
          },
        },
      ],
    },
  ],
};

const features = [
  {
    title: "Donor Profiles & History",
    description:
      "Comprehensive donor profiles with giving history, communication logs, engagement scores, and preference tracking. Know every donor's journey with your organization.",
    href: "/kindora/donor-database-software",
  },
  {
    title: "Donation Tracking",
    description:
      "Track one-time gifts, recurring donations, pledges, and in-kind contributions. Automatically categorize donations for receipting and reporting.",
    href: "/kindora/donation-tracking-software",
  },
  {
    title: "Recurring Giving Management",
    description:
      "Build sustainable revenue with recurring donation programs. Manage subscription amounts, frequencies, and upgrade paths for monthly donors.",
    href: "/kindora/recurring-donation-management",
  },
  {
    title: "Donor Engagement & Communication",
    description:
      "Automated thank-you emails, donor newsletters, and targeted campaign messaging. Track open rates and engagement metrics per donor.",
    href: "/kindora/donor-communication-software",
  },
  {
    title: "Donor Retention & Stewardship",
    description:
      "Identify at-risk donors with retention scoring. Automate stewardship workflows and create personalized cultivation plans for major donors.",
    href: "/kindora/donor-retention-software",
  },
  {
    title: "Fundraising Campaign Management",
    description:
      "Plan, execute, and measure fundraising campaigns. Track campaign-specific donations, goal progress, and ROI across channels.",
    href: "/kindora/campaign-management-software",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Real-time dashboards for donor acquisition costs, lifetime value, retention rates, and campaign performance. Export data for board reports.",
    href: "/kindora/donor-analytics-software",
  },
  {
    title: "Pledge & Major Gift Management",
    description:
      "Track pledged amounts, payment schedules, and fulfillment status for major donors. Manage your entire major gift pipeline in one place.",
    href: "/kindora/pledge-management-software",
  },
];

const relatedPages = [
  { title: "Best Donor Management Software", href: "/kindora/best-donor-management-software" },
  { title: "Donor Database for Nonprofits", href: "/kindora/donor-database-for-nonprofits" },
  { title: "Donor Portal", href: "/kindora/donor-portal" },
  { title: "Donor Relationship Management", href: "/kindora/donor-relationship-management" },
  { title: "Donor CRM", href: "/kindora/donor-crm" },
  { title: "Donor Stewardship Software", href: "/kindora/donor-stewardship-software" },
  { title: "Donor Tracking Software", href: "/kindora/donor-tracking-software" },
  { title: "Donor Engagement Software", href: "/kindora/donor-engagement-software" },
  { title: "DonorPerfect Alternative", href: "/kindora/donorperfect-alternative" },
  { title: "DonorDock Alternative", href: "/kindora/donordock-alternative" },
];

export default function DonorManagementPage() {
  return (
    <>
      <Script id="donor-management-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-rose-50 to-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Donor Management Software for Nonprofits
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              Kindora's donor management platform helps nonprofits track every gift, nurture every relationship, and grow recurring revenue. Replace spreadsheets with a centralized donor CRM that captures giving history, communication preferences, engagement patterns, and campaign performance in one place.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Dedicated Donor Management Matters</h2>
            <p className="text-gray-600 mb-12 max-w-3xl">
              Nonprofits that use dedicated donor management software see higher retention rates, larger average gifts, and more efficient fundraising operations. Without a centralized system, donor data gets scattered across spreadsheets, email inboxes, and disconnected tools, making it impossible to build the kind of personalized relationships that drive long-term giving.
            </p>
            <p className="text-gray-600 mb-12 max-w-3xl">
              Kindora brings donor management, fundraising, and communication into one unified platform. Every interaction is logged, every gift is tracked, and every donor gets a complete profile that your team can access from anywhere.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Donor Management Features</h2>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What features should donor management software have?</h3>
                <p className="text-gray-600">Essential features include contact management with giving history, donation tracking (one-time and recurring), communication logs, reporting dashboards, and integration with your existing email and accounting tools. Kindora includes all of these plus volunteer coordination, grant tracking, and case management in a single platform.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How does donor management software improve fundraising?</h3>
                <p className="text-gray-600">By centralizing donor data, you can segment your audience, personalize communications, identify major gift prospects, and track campaign effectiveness. Nonprofits using donor management software typically see higher donor retention and larger average gifts because they can build stronger relationships based on donor history and preferences.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is Kindora suitable for small nonprofits?</h3>
                <p className="text-gray-600">Yes. Kindora is built specifically for small to mid-sized nonprofits. Our free Starter plan lets you explore all features with no commitment, and paid plans start at an affordable flat rate with no per-contact fees, so you can grow without unexpected cost increases.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-[#2563eb] text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your donor management?</h2>
            <p className="text-blue-100 mb-6">Start your free Starter plan today. No credit card required.</p>
            <Link href="/kindora/demo" className="inline-block bg-white text-[#2563eb] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get started free
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
