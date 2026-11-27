"use client";

import Link from "next/link";

const tools = [
  {
    id: "ma-readiness",
    name: "M&A Due Diligence Readiness Grader",
    description: "Answer 12 quick questions to get your Deal Readiness Score (0-100%). Find out exactly which documents you need before entering a deal.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
    ),
    href: "/tools/ma-readiness",
    badge: "FREE",
  },
  {
    id: "vdr-cost-estimator",
    name: "Legacy VDR vs Modern VDR Cost Estimator",
    description: "Compare the true cost of legacy data rooms vs. modern AI-powered VDRs. See your potential savings on per-page fees, storage, and setup time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    href: "/tools/vdr-cost-estimator",
    badge: "FREE",
  },
  {
    id: "pii-redaction-scanner",
    name: "AI PII & Redaction Scanner",
    description: "Upload a PDF to automatically detect sensitive PII, signatures, and financial data. Redact with one click in seconds.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    ),
    href: "/tools/pii-redaction-scanner",
    badge: "FREE",
  },
  {
    id: "dd-checklist-generator",
    name: "Due Diligence Checklist Generator",
    description: "Generate a tailored due diligence index and folder tree based on your industry and transaction type. Export to Excel or import into SpaceNexus.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
    ),
    href: "/tools/dd-checklist-generator",
    badge: "FREE",
  },
  {
    id: "cap-table-waterfall",
    name: "Cap Table & M&A Waterfall Calculator",
    description: "Model payout distributions across common shareholders, preferred investors, and option pools at various exit valuations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    href: "/tools/cap-table-waterfall",
    badge: "FREE",
  },
  {
    id: "vdr-document-completeness-checker",
    name: "VDR Document Completeness Checker",
    description: "Check your due diligence document list, identify missing M&A and fundraising documents, and generate a document completeness report.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 9l2 2 4-4" /></svg>
    ),
    href: "/tools/vdr-document-completeness-checker",
    badge: "FREE",
  },
  {
    id: "ma-deal-timeline-planner",
    name: "M&A Deal Timeline Planner",
    description: "Plan and track M&A transaction milestones, deadlines and progress.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
    href: "/tools/ma-deal-timeline-planner",
    badge: "FREE",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#2563eb] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Free Tools
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            SpaceNexus <span className="text-[#2563eb]">Tools</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Free tools to help you prepare for deals, assess readiness, and optimize your data room.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link key={tool.id} href={tool.href} className="group bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl hover:border-[#2563eb]/30 transition-all duration-300 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#14b8a6] flex items-center justify-center group-hover:bg-[#2563eb] group-hover:text-white transition-colors duration-300">
                  {tool.icon}
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#14b8a6] bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  FREE
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#2563eb] transition-colors">{tool.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">{tool.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] mt-auto">
                Launch Tool
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
