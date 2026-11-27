"use client";

import Image from "next/image";
import Link from "next/link";
import AskForSummary from "./AskForSummary";

type FooterLink = {
  name: string;
  href: string;
  external?: boolean;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Data Room", href: "/features/data-room" },
      { name: "VDR Data Room", href: "/features/vdr-data-room" },
      { name: "Deals", href: "/features/deals" },
      { name: "Dashboard", href: "/features/dashboard" },
      { name: "Q&A Workflow", href: "/features/qa" },
      { name: "Users & Permissions", href: "/features/users-permissions" },
      { name: "Analytics", href: "/features/activity-analytics" },
      { name: "Reports", href: "/features/reports" },
      { name: "Security", href: "/features/security-compliance" },
      { name: "Integrations", href: "/features/integrations" },
      { name: "Billing & Plans", href: "/features/billing-plans" },
      { name: "Settings", href: "/features/settings" },
      { name: "Support", href: "/features/support" },
      { name: "Pricing", href: "/pricing" },
      { name: "Lead Generation", href: "/lead-generation" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "M&A Virtual Data Room", href: "/solutions/mergers-and-acquisitions-vdr" },
      { name: "M&A Document Sharing", href: "/solutions/ma-document-sharing" },
      { name: "Investor Data Room", href: "/solutions/investor-data-room" },
      { name: "Startup Data Room", href: "/solutions/startup-data-room" },
      { name: "Series A Fundraising", href: "/solutions/series-a-fundraising-data-room" },
      { name: "Legal Document Sharing", href: "/solutions/secure-document-sharing-for-legal" },
      { name: "Law Firm Exchange", href: "/solutions/law-firm-document-exchange" },
      { name: "Private Credit", href: "/solutions/private-credit" },
      { name: "Distressed Debt", href: "/solutions/distressed-debt" },
      { name: "CLO Advisory", href: "/solutions/clo-advisory" },
      { name: "Syndicated Lending", href: "/solutions/syndicated-lending" },
      { name: "NPL Portfolio", href: "/solutions/npl-portfolio" },
      { name: "ESG Consulting", href: "/solutions/esg-consulting" },
      { name: "Program Management", href: "/solutions/program-management-software" },
      { name: "Program Outcome Tracking", href: "/solutions/program-outcome-tracking" },
      { name: "Secure Document Sharing", href: "/secure-document-sharing" },
      { name: "Enterprise", href: "/enterprise" },
      { name: "VDR UAE", href: "/solutions/virtual-data-room-uae" },
      { name: "VDR Canada", href: "/solutions/virtual-data-room-canada" },
      { name: "VDR Germany", href: "/solutions/virtual-data-room-germany" },
      { name: "VDR Taiwan", href: "/solutions/virtual-data-room-taiwan" },
    ],
  },
  {
    title: "Industries",
    links: [
      { name: "Investment Banking", href: "/industries/investment-banking" },
      { name: "M&A Advisory", href: "/industries/investment-banking/ma-advisory" },
      { name: "Sell-Side Process", href: "/industries/investment-banking/sell-side-process" },
      { name: "Capital Markets", href: "/industries/investment-banking/capital-markets" },
      { name: "Private Capital", href: "/industries/investment-banking/private-capital" },
      { name: "Restructuring", href: "/industries/investment-banking/restructuring" },
      { name: "Private Equity", href: "/industries/private-equity" },
      { name: "Buy-Side Diligence", href: "/industries/private-equity/buy-side-diligence" },
      { name: "Sell-Side Exit", href: "/industries/private-equity/exit-sell-side" },
      { name: "Add-On Acquisitions", href: "/industries/private-equity/add-on-acquisitions" },
      { name: "Portfolio Management", href: "/industries/private-equity/portfolio-management" },
      { name: "LP Fundraising", href: "/industries/private-equity/lp-fundraising" },
      { name: "Venture Capital", href: "/industries/venture-capital" },
      { name: "Early-Stage Diligence", href: "/industries/venture-capital/early-stage-diligence" },
      { name: "Fund Operations", href: "/industries/venture-capital/fund-operations" },
      { name: "LP Communications", href: "/industries/venture-capital/lp-communications" },
      { name: "Portfolio Support", href: "/industries/venture-capital/portfolio-support" },
      { name: "Exits & Secondaries", href: "/industries/venture-capital/exits-secondaries" },
      { name: "Law Firms", href: "/industries/law-firms" },
      { name: "M&A Due Diligence", href: "/industries/law-firms/ma-diligence" },
      { name: "Litigation & E-Discovery", href: "/industries/law-firms/litigation-discovery" },
      { name: "IP & Licensing", href: "/industries/law-firms/ip-licensing" },
      { name: "Client Portals", href: "/industries/law-firms/client-portals" },
      { name: "Real Estate", href: "/industries/real-estate" },
      { name: "Real Estate Practice", href: "/industries/law-firms/real-estate" },
      { name: "Life Sciences", href: "/industries/life-sciences" },
      { name: "Technology", href: "/industries/technology" },
      { name: "Energy & Infrastructure", href: "/industries/energy-infrastructure" },
      { name: "Corporate Development", href: "/industries/corporate-development" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "VDR Guide", href: "/vdr-guide" },
      { name: "Glossary", href: "/glossary" },
      { name: "Financial Glossary", href: "/glossary/financial" },
      { name: "Checklists", href: "/checklists" },
      { name: "DD Checklist", href: "/checklists/due-diligence-checklist" },
      { name: "Investor DD Checklist", href: "/checklists/investor-data-room" },
      { name: "Templates", href: "/checklists/templates" },
      { name: "Video Tutorials", href: "/tutorials" },
      { name: "Setup Walkthrough", href: "/tutorials/data-room-setup-walkthrough" },
      { name: "Managing Bidder Access", href: "/tutorials/managing-bidder-access" },
      { name: "Permission Management", href: "/tutorials/permission-management" },
      { name: "Q&A Workflow Tutorial", href: "/tutorials/structured-qa-workflow" },
      { name: "Watermarking Setup", href: "/tutorials/dynamic-watermarking-setup" },
      { name: "Engagement Analytics", href: "/tutorials/engagement-analytics" },
      { name: "Audit Log Export", href: "/tutorials/audit-log-export" },
      { name: "SSO & MFA Config", href: "/tutorials/sso-and-mfa-configuration" },
      { name: "FAQ", href: "/faq" },
      { name: "Data Room FAQ", href: "/faq/data-room" },
      { name: "VDR Security FAQ", href: "/faq/vdr-security" },
      { name: "VDR Compliance FAQ", href: "/faq/vdr-compliance" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Startup Fundraising", href: "/case-studies/startup-fundraising" },
      { name: "M&A Case Studies", href: "/m-a-case-studies" },
      { name: "Startup Case Studies", href: "/startup-fundraising-case-studies" },
      { name: "Reviews", href: "/reviews" },
      { name: "NPL Guide", href: "/resources/npl-guide" },
    ],
  },
  {
    title: "Compare",
    links: [
      { name: "VDR Alternatives", href: "/competitors/vdr-alternatives" },
      { name: "Datasite Alternative", href: "/competitors/datasite-alternative" },
      { name: "Firmex Alternative", href: "/competitors/firmex-alternative" },
      { name: "Intralinks Alternative", href: "/competitors/intralinks-alternative" },
      { name: "iDeals Alternative", href: "/competitors/ideals-alternative" },
      { name: "Drooms Alternative", href: "/competitors/drooms-alternative" },
      { name: "ShareFile Alternative", href: "/competitors/sharefile-alternative" },
      { name: "Box Alternative", href: "/competitors/box-alternative" },
      { name: "Onehub Alternative", href: "/competitors/onehub-alternative" },
      { name: "SecureDocs Alternative", href: "/competitors/securedocs-alternative" },
      { name: "Ansarada Alternative", href: "/competitors/ansarada-alternative" },
      { name: "Dealroom Alternative", href: "/competitors/dealroom-alternative" },
      { name: "Pricing Comparison", href: "/pricing-comparison" },
      { name: "VDR Comparison", href: "/vdr-comparison" },
      { name: "SpaceNexus vs Firmex", href: "/compare/spacenexus-vs-firmex" },
      { name: "SpaceNexus vs ShareFile", href: "/compare/spacenexus-vs-sharefile" },
      { name: "SpaceNexus vs Box", href: "/compare/spacenexus-vs-box" },
      { name: "SpaceNexus vs Onehub", href: "/compare/spacenexus-vs-onehub" },
      { name: "SpaceNexus vs SecureDocs", href: "/compare/spacenexus-vs-securedocs" },
      { name: "SpaceNexus vs Ansarada", href: "/compare/spacenexus-vs-ansarada" },
      { name: "SpaceNexus vs Intralinks", href: "/compare/spacenexus-vs-intralinks" },
      { name: "SpaceNexus vs Datasite", href: "/compare/spacenexus-vs-datasite" },
      { name: "SpaceNexus vs iDeals", href: "/compare/spacenexus-vs-ideals" },
      { name: "SpaceNexus vs Drooms", href: "/compare/spacenexus-vs-drooms" },
      { name: "SpaceNexus vs Dealroom", href: "/compare/spacenexus-vs-dealroom" },
      { name: "M&A Data Room Providers", href: "/m-a-data-room-providers" },
    ],
  },
  {
    title: "Guides",
    links: [
      { name: "Data Room Solutions", href: "/data-room-solutions" },
      { name: "Data Room Pricing", href: "/data-room-pricing" },
      { name: "Data Room Providers", href: "/data-room-providers" },
      { name: "Virtual Data Room Providers", href: "/virtual-data-room-providers" },
      { name: "Top Data Room Providers", href: "/top-data-room-providers" },
      { name: "Electronic Data Room", href: "/electronic-data-room" },
      { name: "Enterprise Data Room", href: "/enterprise-data-room" },
      { name: "Cloud Data Room", href: "/cloud-data-room" },
      { name: "Investment Data Room", href: "/investment-data-room" },
      { name: "Startup Fundraising Room", href: "/startup-fundraising-data-room" },
      { name: "Private Equity Data Room", href: "/private-equity-data-room" },
      { name: "Data Room Security", href: "/data-room-security" },
      { name: "Data Room Due Diligence", href: "/data-room-due-diligence" },
      { name: "Due Diligence Software", href: "/due-diligence-software" },
      { name: "Best Data Room for Startups", href: "/best-data-room-for-startups" },
      { name: "VDR Software", href: "/vdr-software" },
      { name: "VDR Guide", href: "/vdr-guide" },
    ],
  },
  {
    title: "More Guides",
    links: [
      { name: "Virtual Deal Management", href: "/virtual-deal-management" },
      { name: "Deal Management Software", href: "/deal-management-software" },
      { name: "Deal Room Software", href: "/deal-room-software" },
      { name: "Deal Collaboration Platform", href: "/deal-collaboration-platform" },
      { name: "M&A Platform", href: "/ma-platform" },
      { name: "Merger & Acquisition SW", href: "/merger-acquisition-software" },
      { name: "M&A Data Room Providers", href: "/m-a-data-room-providers" },
      { name: "Online Due Diligence", href: "/online-due-diligence-platform" },
      { name: "Business Acquisition SW", href: "/business-acquisition-software" },
      { name: "Vendor Due Diligence SW", href: "/vendor-due-diligence-software" },
      { name: "Board Portals", href: "/board-portals" },
      { name: "Board Portal Software", href: "/board-portal-software" },
      { name: "Board Document Portal", href: "/board-document-portal" },
      { name: "Legal Document Management", href: "/legal-document-management" },
      { name: "Investor Due Diligence", href: "/investor-due-diligence" },
      { name: "Investor DD Platform", href: "/fundraising-and-investor-due-diligence" },
      { name: "Secure Document Sharing", href: "/secure-document-sharing" },
      { name: "Data Room Comparison", href: "/vdr-comparison" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Security", href: "/security" },
      { name: "Demo", href: "/demo" },
      { name: "Get Started", href: "/get-started" },
      { name: "Ecosystem", href: "/ecosystem" },
      { name: "Tools", href: "/tools" },
      { name: "Kindora – Nonprofit Software", href: "/kindora" },
      { name: "Knowledge Graph", href: "/knowledge-graph" },
      { name: "Social Media", href: "/social-media-platforms" },
    ],
  },
];

const socialLinks: FooterLink[] = [
  { name: "YouTube", href: "https://www.youtube.com/@spacenexus-b5p", external: true },
  { name: "Instagram", href: "https://www.instagram.com/spacenexus618/", external: true },
  { name: "X", href: "https://x.com/spacenexus111", external: true },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/space-nexus", external: true },
];

const spaceAiEcosystem = [
  { name: "PMSpace", href: "https://pmspace.ai/" },
  { name: "Space-Sign", href: "https://space-sign.ai/" },
  { name: "Space-Capture", href: "https://spacecapture.ai/" },
  { name: "Space-Lizit", href: "https://spacelizit.com/" },
  { name: "SpaceHR", href: "https://spacehr.net/" },
  { name: "SpaceLean", href: "https://spacelean.ai/" },
  { name: "SpaceNexus", href: "https://spacenexus.net/" },
  { name: "SpaceCRM", href: "https://spacecrm.net/" },
];

function FooterAnchor({
  link,
  className,
}: {
  link: FooterLink;
  className: string;
}) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {link.name}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.name}
    </Link>
  );
}

export default function Footer() {
  return (
    <>
      <AskForSummary />
      <footer className="bg-white text-gray-900" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(260px,1.1fr)_minmax(0,2.4fr)]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label="Space Nexus Home"
            >
              <span className="relative block w-10 h-10 flex-shrink-0">
                <Image
                  src="/icononly_transparent_nobuffer.png"
                  alt="SpaceNexus secure virtual data room logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </span>
              <span className="flex items-baseline gap-1.5">
                <span className="text-xl font-black tracking-tight text-gray-900">
                  SPACE
                </span>
                <span className="text-xl font-black tracking-tight text-[#2563eb]">
                  NEXUS
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-600">
              Enterprise-grade virtual data room software for M&A, fundraising,
              legal diligence, and secure document collaboration.
            </p>

            <div id="footer-phones" className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p><span className="font-semibold text-gray-900">USA</span> <span className="text-gray-600">+1 646 421 5740</span></p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p>
                  <span className="font-semibold text-gray-900">Canada</span> <span className="text-gray-600">+1 (979) 326-9493</span></p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                
                </svg>
                <p><span className="font-semibold text-gray-900">UAE</span> <span className="text-gray-600">+971 56 256 7509</span></p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p><span className="font-semibold text-gray-900">Saudi Arabia</span> <span className="text-gray-600">+966 56 208 1999</span></p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p><span className="font-semibold text-gray-900">Kuwait</span> <span className="text-gray-600">+965 9724 3755</span></p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p><span className="font-semibold text-gray-900">Singapore</span> <span className="text-gray-600">+65 86 111 900</span></p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p><span className="font-semibold text-gray-900">Malaysia</span> <span className="text-gray-600">+60 10660 7357</span></p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 h-6">
              <a href="https://x.com/spacenexus111" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors h-6" aria-label="X/Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://www.instagram.com/spacenexus618/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors h-6" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="https://www.youtube.com/@spacenexus-b5p" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors h-6" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/space-nexus" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors h-6" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <Link href="/social-media-platforms" className="flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors h-6" aria-label="Social Media Platforms">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="3" y="3" width="6" height="6" rx="0.5" /><rect x="9" y="3" width="6" height="6" rx="0.5" /><rect x="15" y="3" width="6" height="6" rx="0.5" /><rect x="3" y="9" width="6" height="6" rx="0.5" /><rect x="9" y="9" width="6" height="6" rx="0.5" /><rect x="15" y="9" width="6" height="6" rx="0.5" /><rect x="3" y="15" width="6" height="6" rx="0.5" /><rect x="9" y="15" width="6" height="6" rx="0.5" /><rect x="15" y="15" width="6" height="6" rx="0.5" /></svg>
              </Link>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-gray-900">
                SpaceAI Ecosystem
              </p>
              <ul className="mt-3 space-y-2">
                {spaceAiEcosystem.map((product) => (
                  <li key={product.name}>
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 transition-colors hover:text-[#2563eb]"
                    >
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8"
          >
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-semibold text-gray-900">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.name}`}>
                      <FooterAnchor
                        link={link}
                        className="text-sm leading-5 text-gray-600 transition-colors hover:text-[#2563eb]"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col gap-3 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 Space Nexus. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <Link
              href="/sitemap.xml"
              className="font-medium text-gray-600 transition-colors hover:text-[#2563eb]"
            >
              Sitemap
            </Link>
          </div>
        </div>

        {/* Powered by VeritasGraph — verifiable AI with source attribution */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <p className="text-sm leading-6 text-gray-600">
            <strong className="font-semibold text-gray-900">
              Powered by VeritasGraph — Verifiable AI with Source Attribution.
            </strong>{" "}
            SpaceNexus AI answers are grounded by{" "}
            <a
              href="https://github.com/bibinprathap/VeritasGraph"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#2563eb] transition-colors hover:text-blue-700"
            >
              VeritasGraph
            </a>
            , an open-source GraphRAG knowledge-graph framework. Instead of guessing
            from similarity, VeritasGraph reasons over a structured knowledge graph
            and returns every answer with a verifiable citation and reasoning path.{" "}
            <a
              href="https://bibinprathap.github.io/VeritasGraph/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#2563eb] transition-colors hover:text-blue-700"
            >
              Learn how it works
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
