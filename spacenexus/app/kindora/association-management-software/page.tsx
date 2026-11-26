import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Association Management Software | Membership & Events",
  description:
    "Kindora association management software for nonprofits. Manage membership, events, dues, communications, and advocacy for associations and professional societies.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/association-management-software",
  },
  openGraph: {
    title: "Association Management Software",
    description: "Manage membership, events, dues, communications, and advocacy for associations and professional societies.",
    url: "https://spacenexus.net/kindora/association-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Association Management Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Association Management Software",
    description: "Manage membership, events, dues, and advocacy for associations and professional societies.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "association management software",
    "membership management software",
    "association management platform",
    "professional society software",
    "membership database software",
    "association event management",
    "membership dues software",
  ],
};

const capabilities = [
  {
    stage: "1",
    title: "Membership Lifecycle Management",
    description: "Manage the full member journey from prospect to renewal. Automate onboarding, track engagement levels, send personalized renewal reminders, and maintain a comprehensive member database that updates in real time.",
    features: ["Automated membership onboarding workflows", "Engagement scoring and activity tracking", "Renewal reminders and auto-renewal options"],
    color: "bg-blue-50 border-blue-200 text-blue-700",
    dot: "bg-blue-500",
  },
  {
    stage: "2",
    title: "Event & Conference Management",
    description: "Plan, promote, and manage association events from single-day workshops to multi-day conferences. Handle registration, speaker management, venue logistics, and post-event analytics in one integrated platform.",
    features: ["Online registration and ticketing", "Speaker and session management", "Post-event analytics and follow-up"],
    color: "bg-purple-50 border-purple-200 text-purple-700",
    dot: "bg-purple-500",
  },
  {
    stage: "3",
    title: "Dues & Revenue Management",
    description: "Streamline membership dues collection with online payment processing, tiered pricing, and automated invoicing. Track revenue across membership categories, sponsorships, and event fees with real-time financial dashboards.",
    features: ["Online dues collection and auto-billing", "Tiered membership pricing models", "Real-time revenue dashboards and reporting"],
    color: "bg-orange-50 border-orange-200 text-orange-700",
    dot: "bg-orange-500",
  },
  {
    stage: "4",
    title: "Advocacy & Engagement Tools",
    description: "Amplify your association's voice with built-in advocacy tools. Manage committees, run surveys, send targeted communications, and track member participation in advocacy campaigns and chapter activities.",
    features: ["Committee and chapter management tools", "Targeted member communication campaigns", "Advocacy campaign tracking and analytics"],
    color: "bg-green-50 border-green-200 text-green-700",
    dot: "bg-green-500",
  },
];

const features = [
  { title: "Membership Database", desc: "Centralized member database with profiles, engagement history, and communication preferences in one place." },
  { title: "Online Dues Collection", desc: "Automated dues invoicing, online payment processing, and flexible billing cycles for every membership tier." },
  { title: "Event Registration Portal", desc: "Self-service event registration with real-time availability, waitlists, and automated confirmation emails." },
  { title: "Member Communication Tools", desc: "Targeted emails, newsletters, and announcements segmented by membership type, interests, or engagement level." },
  { title: "Committee Management", desc: "Assign members to committees, track participation, manage meeting schedules, and document outcomes." },
  { title: "Chapter & Region Management", desc: "Organize chapters and regions with localized events, communications, and leadership oversight." },
];

const benefits = [
  { metric: "50%", label: "faster membership processing" },
  { metric: "35%", label: "increase in member retention" },
  { metric: "60%", label: "reduction in event admin time" },
  { metric: "100%", label: "dues tracking accuracy" },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kindora Association Management Software",
  description: "Association management software for nonprofits. Manage membership, events, dues, communications, and advocacy for associations and professional societies.",
  url: "https://spacenexus.net/kindora/association-management-software",
  serviceType: "Association Management Software",
  provider: { "@id": "https://spacenexus.net/kindora/#organization" },
  areaServed: { "@type": "Place", name: "Worldwide" },
  offers: { "@type": "Offer", url: "https://spacenexus.net/kindora/pricing", availability: "https://schema.org/InStock", priceCurrency: "USD" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is association management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Association management software is a platform that helps associations and professional societies manage membership, events, dues, communications, and advocacy. It replaces scattered spreadsheets and manual processes with an integrated system that automates member onboarding, event registration, revenue collection, and committee management.",
      },
    },
    {
      "@type": "Question",
      name: "How does Kindora handle membership dues collection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kindora automates the entire dues lifecycle. It supports tiered membership pricing, online payment processing, automated invoicing, auto-renewal, and dunning workflows. Members can manage their billing online, and finance teams get real-time dashboards tracking dues across every membership category.",
      },
    },
    {
      "@type": "Question",
      name: "Can Kindora manage association events and conferences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Kindora provides end-to-end event management including online registration, speaker and session management, venue logistics, and post-event analytics. Associations can manage single-day workshops, multi-day conferences, and recurring chapter events from a single platform.",
      },
    },
    {
      "@type": "Question",
      name: "How does association management software increase member retention?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kindora increases retention by delivering personalized member experiences. Automated renewal reminders, engagement scoring, targeted communications, and easy event participation keep members active. The platform also surfaces at-risk members early so staff can intervene before lapses occur.",
      },
    },
  ],
};

export default function KindoraAssociationManagementPage() {
  return (
    <>
      <Script id="kindora-association-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="kindora-association-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/kindora" className="hover:text-[#2563eb] transition-colors">Kindora</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Association Management Software</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Nonprofit Association Operations
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Association Management Software for{" "}
                <span className="text-[#2563eb]">Engaged Memberships</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Manage membership, events, dues, communications, and advocacy for associations and professional societies with a unified platform. Built for nonprofits that need <strong>powerful member engagement tools</strong>.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/kindora/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">
                  Request a Demo
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/kindora/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Strip */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((b) => (
                <div key={b.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-[#2563eb] mb-1">{b.metric}</p>
                  <p className="text-sm text-gray-600">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 lg:py-20 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Kindora powers every association phase</h2>
              <p className="text-gray-600 max-w-xl mx-auto">From member onboarding through advocacy — one platform manages the entire association lifecycle.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {capabilities.map((s) => (
                <div key={s.stage} className={`rounded-2xl border p-7 ${s.color}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`w-8 h-8 rounded-full ${s.dot} text-white text-sm font-bold flex items-center justify-center`}>{s.stage}</span>
                    <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.description}</p>
                  <ul className="space-y-1.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-5">Your association command center</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  See every member, event, and revenue stream at a glance. Automated dashboards surface lapsing memberships, pending registrations, and advocacy campaign progress — so association leaders stay in control without the chase.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {features.map((f) => (
                    <div key={f.title} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <p className="text-sm font-bold text-gray-900 mb-1">{f.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
                <Link href="/kindora/demo" className="inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20">
                  See it with your association
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">app.kindora.com / associations</div>
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10 aspect-[16/9] relative">
                  <Image src="/spacenexus/screenshots/vdr-dashboard.png" alt="Kindora association management dashboard" fill loading="lazy" className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 800px" />
                </div>
                <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-[#f8f9fa]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently asked questions</h2>
            <div className="space-y-4">
              {[
                { q: "What is association management software?", a: "Association management software is a platform that helps associations and professional societies manage membership, events, dues, communications, and advocacy. It replaces scattered spreadsheets and manual processes with an integrated system that automates member onboarding, event registration, revenue collection, and committee management." },
                { q: "How does Kindora handle membership dues collection?", a: "Kindora automates the entire dues lifecycle. It supports tiered membership pricing, online payment processing, automated invoicing, auto-renewal, and dunning workflows. Members can manage their billing online, and finance teams get real-time dashboards tracking dues across every membership category." },
                { q: "Can Kindora manage association events and conferences?", a: "Yes. Kindora provides end-to-end event management including online registration, speaker and session management, venue logistics, and post-event analytics. Associations can manage single-day workshops, multi-day conferences, and recurring chapter events from a single platform." },
                { q: "How does association management software increase member retention?", a: "Kindora increases retention by delivering personalized member experiences. Automated renewal reminders, engagement scoring, targeted communications, and easy event participation keep members active. The platform also surfaces at-risk members early so staff can intervene before lapses occur." },
              ].map((faq) => (
                <details key={faq.q} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <summary className="px-6 py-5 cursor-pointer font-semibold text-gray-900 hover:text-[#2563eb] transition-colors flex items-center justify-between">
                    {faq.q}
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Launch your association workspace in 24 hours</h2>
            <p className="text-gray-600 mb-8">No lengthy onboarding. Set up membership tiers, configure event portals, invite members, and start managing associations the same day.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kindora/demo" className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25">Request a Demo</Link>
              <Link href="/kindora/pricing" className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 border border-gray-200 hover:border-[#2563eb]/40 rounded-full transition-all duration-200">View Pricing</Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">SOC 2 Type II · AES-256 encryption · Tamper-evident audit logs</p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Related Resources</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Continue exploring</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/kindora/membership-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Grow and manage your membership base.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Membership Management Software →</h3>
              </Link>
              <Link href="/kindora/event-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Plan and manage events from registration to follow-up.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Event Management Software →</h3>
              </Link>
              <Link href="/kindora/donor-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Build stronger relationships with your donors.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Donor Management Software →</h3>
              </Link>
              <Link href="/kindora/nonprofit-reporting-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Insightful reports for better decision-making.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Nonprofit Reporting Software →</h3>
              </Link>
              <Link href="/kindora/nonprofit-dashboard-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Visual dashboards for real-time nonprofit insights.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Nonprofit Dashboard Software →</h3>
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
