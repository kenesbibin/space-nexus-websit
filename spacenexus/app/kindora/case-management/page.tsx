import { createKindoraServiceSchema } from "../components/commercial-schema";
import Link from "next/link";
import AnswerReadyBlock from "../components/AnswerReadyBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Management & Program Management Software | Kindora",
  description:
    "Nonprofit case management and program management platform for client intake, service delivery, outcome tracking, and program reporting. Built for social services and community organizations.",
  keywords: [
    "case management software nonprofit",
    "program management software",
    "client intake system",
    "social services software",
    "outcome tracking",
    "nonprofit program reporting",
    "client case management",
  ],
  alternates: {
    canonical: "/kindora/case-management",
  },
  openGraph: {
    title: "Case Management & Program Management Software | Kindora",
    description:
      "Nonprofit case management and program management platform for client intake, service delivery, outcome tracking, and program reporting in one place.",
    url: "https://spacenexus.net/kindora/case-management",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    createKindoraServiceSchema({ name: "Kindora Case Management Service", description: "Nonprofit case management and program management platform for client intake, service delivery, outcome tracking, and program reporting. Built for social services and community organizations.", category: "Nonprofit case and program management", url: "https://spacenexus.net/kindora/case-management" }),
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of nonprofits benefit from case management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Social service organizations, community action agencies, youth programs, housing nonprofits, health and human services organizations, and any nonprofit that delivers direct services to clients can benefit from case management software to track intake, services, and outcomes.",
          },
        },
        {
          "@type": "Question",
          name: "Can I track multiple funding sources for a single program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora supports cost allocation and budget tracking across multiple funding sources within a single program. This is essential for organizations that blend funding from federal grants, state contracts, and private foundations to deliver services.",
          },
        },
        {
          "@type": "Question",
          name: "How does outcome tracking work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You define measurable outcomes for each program, then track participant progress against those outcomes. Kindora calculates completion rates, generates outcome-based reports, and helps you identify which program elements are most effective at achieving desired results.",
          },
        },
      ],
    },
  ],
};

const features = [
  {
    title: "Client Intake & Demographics",
    description: "Comprehensive intake forms capturing personal information, demographics, service needs, and eligibility. Track client status from waitlist to active to completed.",
    href: "/kindora/client-case-management-software",
  },
  {
    title: "Service Catalog & Enrollment",
    description: "Define services across categories like education, employment, housing, and health. Set capacity limits, eligibility rules, and enrollment workflows.",
    href: "/kindora/social-services-case-management",
  },
  {
    title: "Program Outcome Tracking",
    description: "Define measurable outcomes for each program. Track participant progress, calculate completion rates, and generate outcome-based impact reports.",
    href: "/kindora/program-outcome-tracking",
  },
  {
    title: "Multi-Program Management",
    description: "Manage multiple programs from a single platform. Track participants across programs, avoid duplicate data entry, and get organization-wide reporting.",
    href: "/kindora/multi-program-ngo-management",
  },
  {
    title: "Constituent Relationship Management",
    description: "360-degree view of each constituent including services received, interactions logged, and outcomes achieved. Track engagement across all programs.",
    href: "/kindora/constituent-relationship-management",
  },
  {
    title: "Nonprofit Case Management",
    description: "Dedicated case management workflows for social service organizations. Manage caseloads, document interactions, and track service delivery milestones.",
    href: "/kindora/nonprofit-case-management-software",
  },
];

const relatedPages = [
  { title: "Client Case Management Software", href: "/kindora/client-case-management-software" },
  { title: "Social Services Case Management", href: "/kindora/social-services-case-management" },
  { title: "Program Management Software", href: "/kindora/program-management-software" },
  { title: "Program Outcome Tracking", href: "/kindora/program-outcome-tracking" },
  { title: "Multi-Program NGO Management", href: "/kindora/multi-program-ngo-management" },
  { title: "Constituent Relationship Management", href: "/kindora/constituent-relationship-management" },
  { title: "Nonprofit Case Management Software", href: "/kindora/nonprofit-case-management-software" },
  { title: "Constituent Management Software", href: "/kindora/constituent-management-software" },
  { title: "NGO Management Software", href: "/kindora/ngo-management-software" },
  { title: "Association Management Software", href: "/kindora/association-management-software" },
  { title: "Church Management Software", href: "/kindora/church-management-software" },
  { title: "Charity Management Software", href: "/kindora/charity-management-software" },
];

export default function CaseManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-emerald-50 to-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case Management & Program Management Software
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              Kindora helps nonprofits manage client intake, track service delivery, monitor program outcomes, and demonstrate impact to funders. From social services and community organizations to membership associations and faith-based groups, our platform unifies case management, program tracking, and constituent relationships in one system.
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

      <AnswerReadyBlock page="case" />

        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Case & Program Management Software Matters</h2>
            <p className="text-gray-600 mb-12 max-w-3xl">
              Nonprofits delivering direct services need to track who they serve, what services they receive, and what outcomes they achieve. Without dedicated case management software, organizations rely on paper files, spreadsheets, or multiple disconnected systems that make it difficult to measure impact, report to funders, or identify service gaps.
            </p>
            <p className="text-gray-600 mb-12 max-w-3xl">
              Kindora provides a unified platform for client intake, service delivery tracking, outcome measurement, and program reporting. Whether you run one program or dozens, your team can manage caseloads, track progress, and generate impact reports from a single source of truth.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Features</h2>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What types of nonprofits benefit from case management software?</h3>
                <p className="text-gray-600">Social service organizations, community action agencies, youth programs, housing nonprofits, health and human services organizations, and any nonprofit that delivers direct services to clients can benefit from case management software to track intake, services, and outcomes.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I track multiple funding sources for a single program?</h3>
                <p className="text-gray-600">Yes. Kindora supports cost allocation and budget tracking across multiple funding sources within a single program. This is essential for organizations that blend funding from federal grants, state contracts, and private foundations to deliver services.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How does outcome tracking work?</h3>
                <p className="text-gray-600">You define measurable outcomes for each program, then track participant progress against those outcomes. Kindora calculates completion rates, generates outcome-based reports, and helps you identify which program elements are most effective at achieving desired results.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-[#2563eb] text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Transform your program management</h2>
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
