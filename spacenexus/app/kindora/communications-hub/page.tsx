import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Communications Hub for Nonprofits 2026 | Unified Communication",
  description:
    "Centralize donor outreach, internal team messaging, and stakeholder communications in one unified nonprofit communications hub. Streamline every conversation across channels with Kindora.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/communications-hub",
  },
  openGraph: {
    title: "Communications Hub for Nonprofits 2026",
    description:
      "Centralize donor outreach, internal team messaging, and stakeholder communications in one unified platform. The complete guide for nonprofit communications leaders.",
    url: "https://spacenexus.net/kindora/communications-hub",
    siteName: "Kindora by Space Nexus",
    type: "article",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Communications Hub for Nonprofits" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Communications Hub for Nonprofits 2026 — Complete Guide",
    description:
      "The complete guide to nonprofit communications hubs. Unified inbox, donor workflows, team collaboration, and campaign management for operations teams.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "nonprofit communications hub",
    "nonprofit communication software",
    "donor communication platform",
    "nonprofit messaging software",
    "stakeholder communication tool",
    "nonprofit outreach software",
    "unified nonprofit communication",
    "nonprofit communication management",
    "NGO communications platform",
    "nonprofit multi-channel communication",
    "donor engagement platform",
    "nonprofit internal communications",
  ],
};

const mustHaveFeatures = [
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Unified multi-channel inbox",
    description:
      "Consolidate email, SMS, in-app messages, and social media interactions into a single unified inbox. Every donor and stakeholder conversation is visible in one place — eliminating scattered threads and missed messages.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Donor communication timeline",
    description:
      "Complete relationship context for every donor — every email, text, meeting, and note in one chronological view. Staff see full history before every touchpoint, ensuring personalized and informed outreach.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    title: "Automated donor workflows",
    description:
      "Trigger thank-you sequences, follow-up reminders, impact updates, and re-engagement campaigns based on donor activity. Every touchpoint is logged and tracked — no supporter ever falls through the cracks.",
  },
  {
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    title: "Team messaging & channels",
    description:
      "Create dedicated channels for programs, departments, and projects. Teams coordinate fundraising efforts, share donor insights, and align messaging — all without leaving the communications hub.",
  },
  {
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
    title: "Campaign management & analytics",
    description:
      "Plan, execute, and track multi-channel outreach campaigns from start to finish. Schedule messages, segment audiences, and measure engagement across every touchpoint — with full campaign analytics in real time.",
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Communication templates",
    description:
      "Pre-built templates for thank-you letters, tax receipts, impact reports, event invitations, appeals, and newsletters. Customize templates per campaign, segment, or donor level — consistent branding, zero design overhead.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Engagement analytics & reporting",
    description:
      "Measure open rates, click rates, response times, and engagement across every channel. Real-time dashboards surface trends, identify high-performing campaigns, and guide communication strategy.",
  },
  {
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    title: "Role-based access controls",
    description:
      "Set communication access by role, department, and sensitivity level. Fundraising teams see donor comms, program staff see program updates, and executives see organization-wide metrics — with full audit trails.",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Smart notifications & routing",
    description:
      "Automatic message routing by type, priority, and recipient. Real-time notifications ensure urgent messages are seen immediately, while routine communications are batched and processed efficiently.",
  },
];

const comparisonData = {
  scattered: {
    title: "Scattered Tools",
    subtitle: "Email, Slack, spreadsheets, manual tracking",
    items: [
      { text: "Conversations spread across inboxes", good: false },
      { text: "No centralized donor communication log", good: false },
      { text: "Manual follow-up tracking in spreadsheets", good: false },
      { text: "No campaign analytics or attribution", good: false },
      { text: "Missed messages and delayed responses", good: false },
      { text: "No audit trail for compliance", good: false },
    ],
  },
  generic: {
    title: "Generic Communication Tools",
    subtitle: "Mailchimp, Constant Contact, HubSpot",
    items: [
      { text: "Good email campaign features", good: true },
      { text: "Limited nonprofit-specific workflows", good: false },
      { text: "No unified inbox across channels", good: false },
      { text: "Disconnected from donor data", good: false },
      { text: "No internal team messaging", good: false },
      { text: "Per-contact pricing gets expensive", good: false },
    ],
  },
  kindora: {
    title: "Kindora Communications Hub",
    subtitle: "Purpose-built for nonprofits",
    items: [
      { text: "Unified inbox across all channels", good: true },
      { text: "Donor communication timeline", good: true },
      { text: "Automated donor workflows", good: true },
      { text: "Integrated with donor management", good: true },
      { text: "Team messaging & channels", good: true },
      { text: "Full campaign analytics & attribution", good: true },
    ],
  },
};

const useCases = [
  {
    title: "Donor Thank-You & Acknowledgment",
    description:
      "Automate personalized thank-you sequences triggered by donation type, amount, and donor segment. Ensure every donor receives timely, meaningful acknowledgment — from instant receipts to handwritten-style impact letters.",
  },
  {
    title: "Major Donor Stewardship",
    description:
      "Coordinate multi-touch stewardship plans for major donors. Schedule personal outreach, impact reports, event invitations, and cultivation touches — with full visibility across the fundraising team.",
  },
  {
    title: "Event Communication & Promotion",
    description:
      "Manage event invitations, reminders, post-event follow-ups, and thank-yous across email, SMS, and social channels. Track RSVPs, engagement, and post-event donation conversion.",
  },
  {
    title: "Grant Reporting & Funder Updates",
    description:
      "Automate grant reporting schedules, funder updates, and compliance communications. Ensure funders receive timely reports with impact data and program outcomes — strengthening relationships.",
  },
  {
    title: "Volunteer Coordination",
    description:
      "Send volunteer schedules, training materials, shift reminders, and appreciation messages. Coordinate volunteer teams through internal channels and keep everyone aligned on upcoming events.",
  },
  {
    title: "Crisis & Emergency Communications",
    description:
      "Rapidly deploy urgent communications across all channels during emergencies. Pre-built crisis templates, one-click multi-channel broadcast, and delivery tracking ensure critical messages reach everyone.",
  },
  {
    title: "Advocacy & Policy Outreach",
    description:
      "Coordinate advocacy campaigns with targeted email sequences, social media posts, and SMS alerts. Track constituent engagement and measure the impact of policy outreach efforts.",
  },
  {
    title: "Internal Team Coordination",
    description:
      "Keep programs, development, finance, and leadership aligned through dedicated channels. Share donor insights, coordinate campaign messaging, and resolve communication bottlenecks in real time.",
  },
];

const bestPractices = [
  {
    title: "Centralize all donor communication in one hub",
    description:
      "Every donor interaction — email, text, meeting, phone call, and social message — should be logged in a single communication timeline. This eliminates scattered information and ensures any staff member can pick up a donor relationship seamlessly.",
  },
  {
    title: "Automate routine donor touchpoints",
    description:
      "Thank-you sequences, tax receipts, birthday acknowledgments, and annual impact reports should run automatically. Automation ensures consistency while freeing staff for high-value personal outreach to major donors.",
  },
  {
    title: "Segment donors for targeted messaging",
    description:
      "Donors respond to personalized, relevant communication. Segment by giving history, engagement level, campaign affinity, and interests — then tailor messaging to each segment for maximum impact.",
  },
  {
    title: "Define communication SLAs",
    description:
      "Set response time standards for different communication types. Donor inquiries within 24 hours, major donor responses within 4 hours, general inquiries within 48 hours. SLAs create accountability and improve donor satisfaction.",
  },
  {
    title: "Use team channels for coordination",
    description:
      "Dedicate channels for fundraising campaigns, program updates, and cross-department coordination. Shared channels prevent information silos and ensure messaging consistency across the organization.",
  },
  {
    title: "Measure and optimize campaign performance",
    description:
      "Track open rates, click rates, conversion rates, and revenue attribution for every campaign. A/B test subject lines, content, and send times. Use data to continuously improve communication effectiveness.",
  },
  {
    title: "Maintain communication templates",
    description:
      "Build a library of approved templates for common communications — thank-yous, receipts, appeals, event invites, and newsletters. Templates ensure consistent branding and messaging quality across the team.",
  },
  {
    title: "Train staff on the communications hub",
    description:
      "All staff who communicate with donors, volunteers, or stakeholders should be trained on the hub. Consistent usage ensures complete communication logs, proper routing, and accurate analytics.",
  },
];

const selectionCriteria = [
  {
    title: "Multi-channel unified inbox",
    description:
      "The platform should consolidate email, SMS, social media, and in-app messages into a single inbox. Staff should see all conversations in one place without switching between apps.",
  },
  {
    title: "Donor communication timeline",
    description:
      "Complete relationship context for every donor — every interaction across all channels in one chronological view. Essential for personalized outreach and seamless staff transitions.",
  },
  {
    title: "Automation and workflow capabilities",
    description:
      "Pre-built and customizable workflows for thank-you sequences, follow-up reminders, re-engagement campaigns, and lifecycle communications. Automation should handle routine touchpoints without manual intervention.",
  },
  {
    title: "Campaign management and analytics",
    description:
      "Multi-channel campaign creation with audience segmentation, scheduling, and real-time performance tracking. A/B testing, revenue attribution, and engagement analytics should be standard.",
  },
  {
    title: "Integration with donor management",
    description:
      "The communications hub should integrate seamlessly with your donor management system. Communication data should feed into donor profiles, and donor data should inform communication segmentation.",
  },
  {
    title: "Team collaboration features",
    description:
      "Internal messaging channels, @mentions, shared notes, and coordination tools for programs, fundraising, and leadership teams. Collaboration features should keep everyone aligned without scattered email chains.",
  },
  {
    title: "Compliance and deliverability",
    description:
      "CAN-SPAM compliance, unsubscribe management, preference centers, and sender reputation tools. The platform should maintain high deliverability rates and handle compliance automatically.",
  },
  {
    title: "Scalability and pricing",
    description:
      "Pricing that scales with your contact list and communication volume. Nonprofits should not be penalized for growth. Transparent pricing without hidden fees for features like automation or analytics.",
  },
];

const faqItems = [
  {
    question: "What is a nonprofit communications hub?",
    answer:
      "A nonprofit communications hub is a centralized platform that consolidates donor outreach, internal team messaging, and stakeholder communications across email, SMS, social media, and in-app channels. It eliminates scattered conversations by providing a unified inbox, automated workflows, and full engagement tracking in one place.",
  },
  {
    question: "How does Kindora centralize donor communication?",
    answer:
      "Kindora logs every donor interaction — emails, texts, meetings, and notes — into a complete communication timeline. Automated workflows trigger thank-you sequences, follow-up reminders, and impact updates based on donor activity. Staff see full relationship context before every touchpoint.",
  },
  {
    question: "Can we send email and SMS campaigns from the platform?",
    answer:
      "Yes. Kindora supports multi-channel campaign creation with built-in email and SMS tools. Schedule campaigns, segment audiences by donor level or engagement, use pre-built templates, and track opens, clicks, and responses — all from the communications hub.",
  },
  {
    question: "How does the communications hub improve team collaboration?",
    answer:
      "Internal team channels let programs, departments, and fundraising teams share donor insights, coordinate messaging, and align on outreach strategies. Shared communication context and @mention threads keep everyone on the same page without scattered email chains.",
  },
  {
    question: "How long does it take to set up the communications hub?",
    answer:
      "Most nonprofits are running their communications hub within 24 hours. Import existing contacts, configure channels, set up basic automation workflows, and start communicating the same day. More complex implementations with custom segments and integrations typically take 1–2 weeks.",
  },
  {
    question: "Can the communications hub integrate with our CRM?",
    answer:
      "Yes. Kindora integrates with popular CRM and donor management systems including Salesforce, Bloomerang, and custom databases. Communication data syncs back to donor profiles, and CRM data informs segmentation and targeting.",
  },
  {
    question: "How does the hub handle opt-outs and compliance?",
    answer:
      "Kindora provides 100% CAN-SPAM, GDPR, and TCPA compliance with automatic unsubscribe links, preference centers, and opt-out management. Donors can manage their channel preferences and communication frequency — the system automatically respects their choices.",
  },
  {
    question: "What analytics are available in the communications hub?",
    answer:
      "Real-time dashboards track open rates, click rates, response times, engagement trends, campaign performance, and revenue attribution. Segment-level analytics show which donor groups respond best to which messages. Exportable reports support board and funder communication summaries.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Communications Hub for Nonprofits 2026 — Complete Guide for Operations Teams",
  description:
    "The complete 2026 guide to nonprofit communications hubs. Unified inbox, donor workflows, team collaboration, and campaign management for operations leaders.",
  author: { "@id": "https://spacenexus.net/kindora/#organization" },
  publisher: { "@id": "https://spacenexus.net/kindora/#organization" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  mainEntityOfPage: "https://spacenexus.net/kindora/communications-hub",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};



const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kindora Communications Hub for Nonprofits",
  description: "Unified nonprofit communications hub. Centralize donor outreach, internal team messaging, and stakeholder communications in one platform.",
  url: "https://spacenexus.net/kindora/communications-hub",
  serviceType: "Nonprofit Communications Hub",
  provider: { "@id": "https://spacenexus.net/kindora/#organization" },
  areaServed: { "@type": "Place", name: "Worldwide" },
  offers: { "@type": "Offer", url: "https://spacenexus.net/kindora/pricing", availability: "https://schema.org/InStock", priceCurrency: "USD" },
};

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function KindoraCommunicationsHubPage() {
  return (
    <>
      <Script id="kindora-comm-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="kindora-comm-article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="kindora-comm-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="pt-20 lg:pt-24">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <nav className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-6">
                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                <Link href="/kindora" className="hover:text-[#2563eb] transition-colors">Kindora</Link>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                <span className="text-gray-600">Communications Hub for Nonprofits</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                2026 Complete Guide
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Communications Hub for{" "}
                <span className="text-[#2563eb]">Unified Nonprofit Communication</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Centralize donor outreach, internal team messaging, and stakeholder communications in one unified platform. This guide covers the differences between scattered tools, generic platforms, and purpose-built nonprofit communications hubs — plus the features, best practices, and selection framework operations teams need in 2026.
              </p>
              <p className="text-sm text-gray-400 mb-10">
                16-minute read &nbsp;·&nbsp; Last updated: July 1, 2026 &nbsp;·&nbsp; Covers: comparison, features, best practices, FAQ
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#comparison" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                  Scattered vs. Kindora
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
                <a href="#features" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                  Must-Have Features
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Strip */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { metric: "Templates", label: "Reusable messages" },
                { metric: "History", label: "Logged interactions" },
                { metric: "Follow-ups", label: "Scheduled reminders" },
                { metric: "Records", label: "Communication activity" },
              ].map((b) => (
                <div key={b.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-[#2563eb] mb-1">{b.metric}</p>
                  <p className="text-sm text-gray-600">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is a nonprofit communications hub */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What is a nonprofit communications hub?</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                A nonprofit communications hub is a centralized platform that consolidates donor outreach, internal team messaging, and stakeholder communications across email, SMS, social media, and in-app channels. It replaces scattered conversations across inboxes, Slack, spreadsheets, and phone calls with a unified system that provides complete visibility into every interaction.
              </p>
              <p>
                The category emerged from the limitations of generic communication tools for nonprofit operations. Nonprofits juggle donor relationships, volunteer coordination, grant reporting, event promotion, and internal team alignment — often with lean teams and limited budgets. A communications hub eliminates the fragmentation that causes missed messages, duplicated outreach, and inconsistent donor experiences.
              </p>
              <p>
                Today, a communications hub is a strategic capability for nonprofits that need to scale stakeholder engagement without proportional headcount growth. Effective implementations reduce response times, improve donor retention, enhance team coordination, and ensure every communication is on-brand, timely, and logged for audit purposes.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison: Scattered vs Generic vs Kindora */}
        <section id="comparison" className="py-16 lg:py-20 bg-[#f8f9fa] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Comparison</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Scattered Tools vs. Generic Platforms vs. Kindora</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Three approaches to nonprofit communication management — and why a unified hub outperforms the alternatives.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {Object.entries(comparisonData).map(([key, data]) => (
                <div key={key} className={`bg-white rounded-2xl border p-7 shadow-sm ${key === "kindora" ? "border-[#2563eb]/40 ring-1 ring-[#2563eb]/10" : "border-gray-200"}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{data.title}</h3>
                  <p className="text-sm text-gray-500 mb-5">{data.subtitle}</p>
                  <ul className="space-y-2.5">
                    {data.items.map((item) => (
                      <li key={item.text} className="flex items-start gap-2.5 text-sm text-gray-700">
                        {item.good ? <CheckIcon /> : <XIcon />}
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Must-Have Features */}
        <section id="features" className="py-16 lg:py-20 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Feature Checklist</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Must-have features for a nonprofit communications hub</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These nine capabilities are the baseline for any modern nonprofit communications hub. Anything missing is a red flag for efficiency, compliance, or donor experience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mustHaveFeatures.map((feature) => (
                <div key={feature.title} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-[#2563eb]/20 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 lg:py-20 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Communications hub by nonprofit function</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every communication type benefits from a unified hub. Here are the highest-impact use cases across nonprofit operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {useCases.map((uc) => (
                <div key={uc.title} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:border-[#2563eb]/20 transition-all">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{uc.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8 best practices for nonprofit communications</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The platform is only part of the equation. These best practices help you get the most out of any communications hub.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {bestPractices.map((bp, i) => (
                <div key={bp.title} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-sm font-bold">{i + 1}</span>
                    <h3 className="text-base font-bold text-gray-900 pt-1">{bp.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-11">{bp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selection Criteria */}
        <section className="py-16 lg:py-20 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to choose a nonprofit communications hub</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Use these eight criteria to evaluate any communications platform. Prioritize based on your organization size, channel mix, and communication complexity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {selectionCriteria.map((c) => (
                <div key={c.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">✓</span>
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed pl-7">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Frequently asked questions about nonprofit communications hubs
            </h2>
            <div className="space-y-5">
              {faqItems.map((item) => (
                <div key={item.question} className="bg-[#f8f9fa] rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-10 bg-[#f8f9fa] border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-gray-700 mb-4">Continue exploring</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/kindora/nonprofit-email-communication-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Email Communication Software →
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/kindora/donor-communication-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Donor Communication Software →
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/kindora/email-marketing-for-nonprofits" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Email Marketing for Nonprofits →
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/kindora/donor-management-software" className="text-sm font-semibold text-[#2563eb] hover:underline">
                Donor Management Software →
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See the communications hub built for nonprofits
            </h2>
            <p className="text-gray-600 mb-8">
              Get a purpose-built communications platform — with unified inbox, donor workflows, team channels, and campaign analytics that keep every stakeholder engaged.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kindora/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                Request a Live Demo
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/kindora/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                See Pricing
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">SOC 2 Type II · AES-256 encryption · CAN-SPAM & GDPR compliant · No credit card required</p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related Resources</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/kindora/nonprofit-email-communication-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Professional email communication for nonprofits.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Email Communication Software →</h3>
              </Link>
              <Link href="/kindora/donor-communication-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Personalized donor communication at scale.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Donor Communication Software →</h3>
              </Link>
              <Link href="/kindora/email-marketing-for-nonprofits" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Email marketing built for nonprofit outreach.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Email Marketing for Nonprofits →</h3>
              </Link>
              <Link href="/kindora/donor-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Complete donor relationship management.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Donor Management Software →</h3>
              </Link>
              <Link href="/kindora/nonprofit-reporting-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Reporting and analytics for nonprofit operations.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Nonprofit Reporting Software →</h3>
              </Link>
              <Link href="/kindora/pricing" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Transparent pricing for nonprofits of every size.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">View Pricing →</h3>
              </Link>
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
