import { createKindoraServiceSchema } from "../components/commercial-schema";
import Link from "next/link";
import AnswerReadyBlock from "../components/AnswerReadyBlock";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Grant Management Software | Grant Tracking & Reporting",
  description:
    "Kindora grant management software helps nonprofits track applications, manage deadlines, automate reporting, and streamline the entire grant lifecycle from discovery to closeout.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/grant-management-software",
  },
  openGraph: {
    title: "Grant Management Software",
    description: "Streamline your grant lifecycle with Kindora — track applications, manage deadlines, and automate reporting.",
    url: "https://spacenexus.net/kindora/grant-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Grant Management Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grant Management Software",
    description: "Track applications, manage deadlines, and automate reporting with Kindora grant management software.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "grant management software",
    "grant tracking software",
    "grant management system",
    "nonprofit grant software",
    "grant lifecycle management",
    "grant reporting tools",
    "grant application tracking",
    "grant compliance software",
    "foundation grant management",
    "grant workflow software",
    "grant deadline tracker",
    "grant pipeline management",
    "grant accounting software",
    "grant management platform",
    "nonprofit grant tracking",
  ],
};

const grantFeatures = [
  {
    title: "Grant Pipeline",
    description: "Track every grant from discovery through application, award, reporting, and closeout in one place.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Deadline Calendar",
    description: "Never miss a deadline. View all upcoming grant deadlines, reporting dates, and tasks on a shared calendar.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Application Templates",
    description: "Create reusable application templates with common fields, narratives, budgets, and attachments.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Budget Tracking",
    description: "Track grant budgets, expenses, and remaining funds. Compare budget vs actuals in real time.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Automated Reports",
    description: "Generate grant reports with one click. Pull financials, outcomes, and impact data from across Kindora.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Compliance Tracking",
    description: "Track grant conditions, reporting requirements, and compliance deadlines to stay funder-ready.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Funder Database",
    description: "Maintain a searchable database of funders, past awards, and relationships all linked to grants.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Collaboration Tools",
    description: "Collaborate with your team on applications, share documents, assign tasks, and track progress.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

const stats = [
  { metric: "Full", label: "Grant lifecycle covered" },
  { metric: "Auto", label: "Report generation" },
  { metric: "Shared", label: "Deadline calendar" },
  { metric: "Searchable", label: "Funder database" },
];

const faqs = [
  {
    question: "What is grant management software?",
    answer:
      "Grant management software helps nonprofits track the entire grant lifecycle — from discovery and application through award management, reporting, and closeout. It centralizes deadlines, documents, budgets, and compliance requirements in one system.",
  },
  {
    question: "How does Kindora help with grant reporting?",
    answer:
      "Kindora automates grant report generation by pulling financial data, program outcomes, and impact metrics from across the platform. You can generate narrative and financial reports with one click, saving hours of manual compilation.",
  },
  {
    question: "Can Kindora track multiple grants at once?",
    answer:
      "Yes. Kindora provides a pipeline view of all your grants — active applications, pending decisions, awarded grants, and closed grants. Each grant has its own detailed record with documents, budgets, tasks, and reporting deadlines.",
  },
  {
    question: "Does Kindora include grant budget tracking?",
    answer:
      "Yes. Kindora lets you set budgets per grant, track actual expenses against budget, and view remaining funds. Budget vs. actual reports help you stay on track and prepare accurate financial reports for funders.",
  },
  {
    question: "Can my team collaborate on grant applications?",
    answer:
      "Yes. Kindora supports team collaboration with shared workspaces, document attachments, task assignments, and approval workflows. Your team can work together on applications and track progress in real time.",
  },
  {
    question: "Does Kindora track grant compliance and deadlines?",
    answer:
      "Yes. Kindora tracks all grant conditions, reporting requirements, and compliance deadlines. Automated reminders and a shared calendar ensure your team never misses a critical deadline.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    createKindoraServiceSchema({ name: "Kindora Grant Management Service", description: "Kindora grant management software helps nonprofits track applications, manage deadlines, automate reporting, and streamline the entire grant lifecycle from discovery to closeout.", category: "Nonprofit grant lifecycle management", url: "https://spacenexus.net/kindora/grant-management-software" }),
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

export default function GrantManagementSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-emerald-600">Grant Management Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Streamline Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Grant Lifecycle</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Track applications, manage deadlines, automate reporting, and stay compliant — all in one place. Kindora grant management software helps you move from discovery to closeout with confidence.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-teal-600 hover:to-emerald-700 rounded-full shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request a Demo
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Try for Free
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                {["No credit card required", "See current plan terms on the pricing page"].map((text) => (
                  <span key={text} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {text}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Grant Pipeline</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                    Illustrative sample data
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Active Grants", value: "24" },
                    { label: "Pending", value: "8" },
                    { label: "Awarded", value: "$2.6M" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Upcoming Deadlines</p>
                  {[
                    { grant: "Community Health Fund", due: "Jul 15, 2026", type: "Report" },
                    { grant: "Education Equity Grant", due: "Aug 1, 2026", type: "Application" },
                    { grant: "Youth Development", due: "Aug 20, 2026", type: "Report" },
                  ].map((d) => (
                    <div key={d.grant} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="text-sm font-semibold text-gray-900">{d.grant}</span>
                      </div>
                      <div className="text-right text-xs">
                        <span className="text-gray-500">{d.type}</span>
                        <span className="text-gray-500 ml-2">{d.due}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnswerReadyBlock page="grant" />

      {/* Stats */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-emerald-500 mb-1">{stat.metric}</div>
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
            <p className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Complete grant lifecycle management</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From discovery to closeout — track every stage of your grants in one place.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {grantFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-emerald-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-emerald-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From discovery to closeout</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A structured workflow for grant success.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discover", description: "Find and track grant opportunities that match your mission." },
              { step: "02", title: "Apply", description: "Collaborate on applications with templates and document management." },
              { step: "03", title: "Manage", description: "Track budgets, deliverables, and compliance requirements." },
              { step: "04", title: "Report", description: "Generate reports and close out grants with confidence." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about grant management software.</p>
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
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to streamline your grant process?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Take control of your grant lifecycle with Kindora grant management software.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-teal-600 hover:to-emerald-700 rounded-full shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-emerald-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-emerald-500 bg-emerald-50 hover:bg-emerald-100 rounded-full transition-all duration-300"
            >
              Try for Free
            </a>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
