"use client";

import Link from "next/link";


const spaceAiEcosystem = [
  { name: "PMSpace", desc: "Project & Contract Management", href: "https://pmspace.ai/" },
  { name: "Space-Sign", desc: "Digital Signing", href: "https://space-sign.ai/" },
  { name: "Space-Capture", desc: "Field Data Capture", href: "https://spacecapture.ai/" },
  { name: "Space-Lizit", desc: "Immigration Management", href: "https://spacelizit.com/" },
  { name: "SpaceHR", desc: "HR Management", href: "https://spacehr.net/" },
  { name: "SpaceLean", desc: "Lean Scheduling", href: "https://spacelean.ai/" },
  { name: "SpaceNexus", desc: "Virtual Data Room", href: "https://spacenexus.net/" },
  { name: "SpaceCRM", desc: "CRM Platform", href: "https://spacecrm.net/" },
];

const footerLinks = {
  product: [
    { name: "Features", href: "/kindora/features" },
    { name: "Pricing", href: "/kindora/pricing" },
    { name: "Solutions", href: "/kindora/solutions" },
    { name: "Space AI Ecosystem", href: "/kindora/ecosystem" },
    { name: "Request Demo", href: "/kindora/demo" },
    { name: "Blog", href: "/kindora/blog" },
    { name: "Our Team", href: "/kindora/about#team" },
    { name: "Careers", href: "/kindora/careers" },
    { name: "Contact", href: "/kindora/contact" },
    { name: "Kindora for NGOs", href: "/kindora/kindora-for-ngos" },
    { name: "How to Add Users", href: "/kindora/how-to-add-users" },
    { name: "Knowledge Graph", href: "/kindora/knowledge-graph" },
    { name: "FAQ", href: "/kindora/faq" },
  ],
  crmDonor: [
    { name: "Nonprofit CRM", href: "/kindora/nonprofit-crm" },
    { name: "CRM Database", href: "/kindora/nonprofit-crm-database" },
    { name: "CRM for Nonprofits", href: "/kindora/crm-for-nonprofits" },
    { name: "Best CRM for Nonprofits", href: "/kindora/best-crm-for-nonprofits" },
    { name: "Best Nonprofit CRM", href: "/kindora/best-nonprofit-crm" },
    { name: "Cloud-Based Nonprofit CRM", href: "/kindora/cloud-based-nonprofit-crm" },
    { name: "Affordable Nonprofit CRM", href: "/kindora/affordable-nonprofit-crm" },
    { name: "Small Nonprofit CRM", href: "/kindora/small-nonprofit-crm" },
    { name: "Donor CRM", href: "/kindora/donor-crm" },
    { name: "Fundraising CRM", href: "/kindora/fundraising-crm" },
    { name: "Donor Management", href: "/kindora/donor-management-software" },
    { name: "Donor Database", href: "/kindora/donor-database-software" },
    { name: "Donor Tracking", href: "/kindora/donor-tracking-software" },
    { name: "Donor Relationship Management", href: "/kindora/donor-relationship-management" },
    { name: "Donor Analytics", href: "/kindora/donor-analytics-software" },
    { name: "Donor Engagement", href: "/kindora/donor-engagement-software" },
    { name: "Donor Retention", href: "/kindora/donor-retention-software" },
    { name: "Donor Stewardship", href: "/kindora/donor-stewardship-software" },
    { name: "Donor Communication", href: "/kindora/donor-communication-software" },
    { name: "Donor Portal", href: "/kindora/donor-portal" },
    { name: "Constituent Management", href: "/kindora/constituent-management-software" },
    { name: "Constituent Relationship", href: "/kindora/constituent-relationship-management" },
    { name: "Prospect Management", href: "/kindora/prospect-management-software" },
    { name: "Major Gifts", href: "/kindora/major-gift-management-software" },
    { name: "Membership Management", href: "/kindora/membership-management-software" },
  ],
  fundraising: [
    { name: "Donation Tracking", href: "/kindora/donation-tracking-software" },
    { name: "Donation Management", href: "/kindora/donation-management-software" },
    { name: "Donation Tracking System", href: "/kindora/donation-tracking-system" },
    { name: "Donation Reporting", href: "/kindora/donation-reporting-software" },
    { name: "Charity Donation Platform", href: "/kindora/charity-donation-platform" },
    { name: "Online Donation Platform", href: "/kindora/online-donation-platform" },
    { name: "Online Donation Software", href: "/kindora/online-donation-software" },
    { name: "Online Giving Platform", href: "/kindora/online-giving-platform" },
    { name: "Online Giving Software", href: "/kindora/online-giving-software" },
    { name: "Recurring Donations", href: "/kindora/recurring-donation-software" },
    { name: "Recurring Donation Management", href: "/kindora/recurring-donation-management" },
    { name: "Peer-to-Peer Fundraising", href: "/kindora/peer-to-peer-fundraising-software" },
    { name: "Pledge Management", href: "/kindora/pledge-management-software" },
    { name: "Digital Fundraising Platform", href: "/kindora/digital-fundraising-platform" },
    { name: "Fundraising Software", href: "/kindora/fundraising-software" },
    { name: "Fundraising Management", href: "/kindora/fundraising-management-software" },
    { name: "Best Fundraising Software", href: "/kindora/best-fundraising-software" },
    { name: "Nonprofit Fundraising Platform", href: "/kindora/nonprofit-fundraising-platform" },
    { name: "Small Nonprofit Fundraising", href: "/kindora/small-nonprofit-fundraising-software" },
    { name: "Text to Give", href: "/kindora/text-to-give-software" },
    { name: "Campaign Management", href: "/kindora/campaign-management-software" },
    { name: "Event Fundraising", href: "/kindora/event-fundraising-software" },
    { name: "Event Management", href: "/kindora/event-management-software" },
  ],
  grants: [
    { name: "Grant Management", href: "/kindora/grant-management-software" },
    { name: "Grant Tracking", href: "/kindora/grant-tracking-software" },
    { name: "Grant Reporting", href: "/kindora/grant-reporting-software" },
    { name: "Grant Compliance", href: "/kindora/grant-compliance-software" },
    { name: "Grant Lifecycle", href: "/kindora/grant-lifecycle-management" },
  ],
  programs: [
    { name: "Program Management", href: "/kindora/program-management-software" },
    { name: "Program Outcomes", href: "/kindora/program-outcome-tracking" },
    { name: "Client Case Management", href: "/kindora/client-case-management-software" },
    { name: "Case Management Software", href: "/kindora/nonprofit-case-management-software" },
    { name: "Social Services Case Mgmt", href: "/kindora/social-services-case-management" },
    { name: "Workflow Automation", href: "/kindora/nonprofit-workflow-automation" },
    { name: "Communications Hub", href: "/kindora/communications-hub" },
    { name: "Document Management", href: "/kindora/nonprofit-document-management" },
  ],
  volunteer: [
    { name: "Volunteer Management", href: "/kindora/volunteer-management-software" },
    { name: "Volunteer Database", href: "/kindora/volunteer-database-software" },
    { name: "Volunteer Hours Tracking", href: "/kindora/volunteer-hours-tracking-software" },
    { name: "Volunteer Scheduling", href: "/kindora/volunteer-scheduling-software" },
    { name: "Volunteer Recruitment", href: "/kindora/volunteer-recruitment-software" },
    { name: "Volunteer Portal", href: "/kindora/volunteer-portal" },
  ],
  financial: [
    { name: "Financial Management", href: "/kindora/nonprofit-financial-management-software" },
    { name: "Financial Reporting", href: "/kindora/financial-reporting-software" },
    { name: "Budget Management", href: "/kindora/budget-management-software" },
    { name: "Cost Allocation", href: "/kindora/cost-allocation-software" },
    { name: "Expense Management", href: "/kindora/expense-management-software" },
    { name: "Nonprofit Dashboard", href: "/kindora/nonprofit-dashboard-software" },
    { name: "Analytics Dashboard", href: "/kindora/nonprofit-analytics-dashboard" },
    { name: "Nonprofit Reporting", href: "/kindora/nonprofit-reporting-software" },
    { name: "Board Reporting", href: "/kindora/board-reporting-software" },
    { name: "Email Marketing", href: "/kindora/nonprofit-email-marketing-software" },
    { name: "Email Communication", href: "/kindora/nonprofit-email-communication-software" },
    { name: "Email Automation", href: "/kindora/nonprofit-email-automation" },
    { name: "Email Marketing for Nonprofits", href: "/kindora/email-marketing-for-nonprofits" },
    { name: "Communication Platform", href: "/kindora/nonprofit-communication-platform" },
  ],
  operations: [
    { name: "Nonprofit Management", href: "/kindora/nonprofit-management-software" },
    { name: "All-in-One Platform", href: "/kindora/all-in-one-nonprofit-management-platform" },
    { name: "Nonprofit Operations", href: "/kindora/nonprofit-operations-platform" },
    { name: "NGO Management", href: "/kindora/ngo-management-software" },
    { name: "Multi-Program NGO", href: "/kindora/multi-program-ngo-management" },
    { name: "Charity Management", href: "/kindora/charity-management-software" },
    { name: "Church Management", href: "/kindora/church-management-software" },
    { name: "Small Nonprofit Software", href: "/kindora/small-nonprofit-software" },
    { name: "Association Management", href: "/kindora/association-management-software" },
    { name: "Foundation Management", href: "/kindora/foundation-management-software" },
    { name: "Nonprofit Database", href: "/kindora/nonprofit-database-software" },
    { name: "Salesforce CRM for Nonprofits", href: "/kindora/salesforce-crm-for-nonprofits" },
    { name: "Best CRM for Small Nonprofits", href: "/kindora/best-crm-for-small-nonprofits" },
    { name: "Cloud CRM for Nonprofits", href: "/kindora/cloud-crm-for-nonprofits" },
  ],
  vs: [
    { name: "Kindora vs Bloomerang", href: "/kindora/bloomerang-alternative" },
    { name: "Kindora vs Bonterra", href: "/kindora/bonterra-alternative" },
    { name: "Kindora vs Salesforce NPC", href: "/kindora/salesforce-nonprofit-cloud-alternative" },
    { name: "Kindora vs DonorPerfect", href: "/kindora/donorperfect-alternative" },
    { name: "Kindora vs Neon One", href: "/kindora/neon-one-alternative" },
    { name: "Kindora vs DonorDock", href: "/kindora/donordock-alternative" },
    { name: "Kindora vs Little Green Light", href: "/kindora/little-green-light-alternative" },
    { name: "Kindora vs Network for Good", href: "/kindora/network-for-good-alternative" },
  ],
  alternativesTo: [
    { name: "Bloomerang Alternative", href: "/kindora/bloomerang-alternative" },
    { name: "Bonterra Alternative", href: "/kindora/bonterra-alternative" },
    { name: "DonorPerfect Alternative", href: "/kindora/donorperfect-alternative" },
    { name: "DonorDock Alternative", href: "/kindora/donordock-alternative" },
    { name: "Little Green Light Alternative", href: "/kindora/little-green-light-alternative" },
    { name: "Neon One Alternative", href: "/kindora/neon-one-alternative" },
    { name: "Network for Good Alternative", href: "/kindora/network-for-good-alternative" },
    { name: "Salesforce NPC Alternative", href: "/kindora/salesforce-nonprofit-cloud-alternative" },
  ],
  solutions: [
    { name: "Housing Nonprofits", href: "/kindora/solutions/housing-nonprofits" },
    { name: "Youth Nonprofits", href: "/kindora/solutions/youth-nonprofits" },
    { name: "Small Nonprofits", href: "/kindora/solutions/small-nonprofits" },
    { name: "Social Services", href: "/kindora/solutions/social-services" },
    { name: "Community Organizations", href: "/kindora/solutions/community-organizations" },
    { name: "Program Management Software", href: "/kindora/solutions/program-management-software" },
    { name: "Program Outcome Tracking", href: "/kindora/solutions/program-outcome-tracking" },
  ],
  contact: [
    { label: "Email", value: "contact@spacenexus.net", href: "mailto:contact@spacenexus.net" },
    { label: "Singapore", value: "+65 8611 1900", href: "tel:+6586111900" },
    { label: "USA", value: "+1 916-969-0451", href: "tel:+19169690451" },
    { label: "Website", value: "spacenexus.net", href: "https://spacenexus.net" },
  ],
};

export default function KindoraFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] p-8 sm:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Ready to transform your nonprofit operations?</h3>
                <p className="text-blue-100">Get started with Kindora NGO OS today.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/kindora/contact" className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-[#2563eb] bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all duration-300">Request Demo</Link>
                <Link href="/kindora/pricing" className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-full transition-all duration-300">View Pricing</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Powered by VeritasGraph */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-gray-800/60 border border-gray-700 px-6 py-5">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-white">
                Powered by VeritasGraph — Verifiable AI with Source Attribution
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Kindora AI answers are grounded by the VeritasGraph knowledge-graph framework.
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:justify-start">
                <a
                  href="https://github.com/bibinprathap/VeritasGraph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-blue-300 transition-colors hover:text-white"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  VeritasGraph source code on GitHub
                </a>
                <a
                  href="https://bibinprathap.github.io/VeritasGraph/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-blue-300 transition-colors hover:text-white"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  VeritasGraph documentation
                </a>
              </div>
            </div>
            <Link
              href="/kindora/veritas-graph"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700"
            >
              Learn about VeritasGraph
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Row 1: Product + CRM & Donor + Fundraising */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-6">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/kindora" className="flex items-center space-x-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">Kindora</span>
                  <span className="text-[10px] font-medium text-blue-400 uppercase tracking-wider -mt-1">NGO OS</span>
                </div>
              </Link>
              
            </div>
            <p className="text-sm text-gray-400 mb-4">The Complete Operating System for Nonprofits</p>
            <p className="text-xs text-gray-500 mb-4">Version 1.0 (Kindora-V1.0)</p>
            <div className="flex items-center space-x-3">
              <a href="https://www.youtube.com/@KindoraNGOOS1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-[#FF0000] transition-all duration-300" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="https://www.instagram.com/space_kindora_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-[#E1306C] transition-all duration-300" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="https://x.com/space_kindora" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-black transition-all duration-300" aria-label="Twitter/X">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/space-kindora/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-[#0A66C2] transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <Link href="/kindora/social-media" className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300" aria-label="Social Media">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}><Link href={link.href} className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">CRM & Donor Management</h4>
            <ul className="space-y-2">
              {footerLinks.crmDonor.map((link) => (
                <li key={link.name}><Link href={link.href} className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Fundraising & Donations</h4>
            <ul className="space-y-2">
              {footerLinks.fundraising.map((link) => (
                <li key={link.name}><Link href={link.href} className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Row 2: Grants + Programs + Volunteer + Financial */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-6">
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Grant Management</h4>
            <ul className="space-y-2">
              {footerLinks.grants.map((link) => (
                <li key={link.name}><Link href={link.href} className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Programs & Case Management</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}><Link href={link.href} className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Volunteer Management</h4>
            <ul className="space-y-2">
              {footerLinks.volunteer.map((link) => (
                <li key={link.name}><Link href={link.href} className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Financial & Reporting</h4>
            <ul className="space-y-2">
              {footerLinks.financial.map((link) => (
                <li key={link.name}><Link href={link.href} className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Row 3: Operations + Compare + Solutions + Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-6">
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Nonprofit Operations</h4>
            <ul className="space-y-2">
              {footerLinks.operations.map((link) => (
                <li key={link.name}><Link href={link.href} className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Guides</h4>
            <ul className="space-y-2">
              <li><Link href="/kindora/blog" className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">Nonprofit Management Guide</Link></li>
              <li><Link href="/kindora/blog" className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">Donor Management Guide</Link></li>
              <li><Link href="/kindora/blog" className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">Grant Management 101</Link></li>
              <li><Link href="/kindora/blog" className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">Fundraising Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}><Link href={link.href} className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((item) => (
                <li key={item.label}>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</span>
                  <a href={item.href} className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">{item.value}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Row 4: Comparisons + Alternatives */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6">
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Kindora vs</h4>
            <ul className="space-y-2">
              {footerLinks.vs.map((link) => (
                <li key={link.name}><Link href={link.href} className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">{link.name}</Link></li>
              ))}
              <li><Link href="/kindora/vs-competitors" className="block py-2 text-sm font-medium text-[#60a5fa] hover:text-white transition-colors">View All Comparisons →</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Alternatives to</h4>
            <ul className="space-y-2">
              {footerLinks.alternativesTo.map((link) => (
                <li key={link.name}><Link href={link.href} className="block py-2 text-sm text-gray-400 hover:text-white transition-colors">{link.name}</Link></li>
              ))}
              <li><Link href="/kindora/alternatives" className="block py-2 text-sm font-medium text-[#60a5fa] hover:text-white transition-colors">View All Alternatives →</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© 2026 SpaceAI App. All rights reserved.</p>
            <span className="text-xs text-gray-600">Built with Next.js, React, and MongoDB</span>
          </div>
        </div>
      </div>

      {/* Space AI Ecosystem Strip */}
      <div className="border-t border-gray-800 bg-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">Space AI Ecosystem</p>
          <div className="flex flex-wrap gap-3">
            {spaceAiEcosystem.map((product) => (
              <a key={product.name} href={product.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 hover:border-[#2563eb] hover:bg-gray-700 transition-all duration-200">
                <span className="w-2 h-2 rounded-full bg-[#2563eb] opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{product.name}</span>
                <span className="hidden sm:inline text-xs text-gray-500 group-hover:text-gray-400 transition-colors">— {product.desc}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
