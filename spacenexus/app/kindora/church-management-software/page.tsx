import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Church Management Software | Ministry & Congregation",
  description:
    "Kindora church management software for ministries and congregations. Manage members, track attendance, process giving, coordinate events, schedule volunteers, and grow small groups — all in one platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/church-management-software",
  },
  openGraph: {
    title: "Church Management Software",
    description: "Manage members, track attendance, process giving, coordinate events, schedule volunteers, and grow small groups — all in one platform.",
    url: "https://spacenexus.net/kindora/church-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Church Management Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Management Software",
    description: "Manage members, track attendance, process giving, coordinate events, and grow small groups — all in one platform.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "church management software",
    "church management system",
    "ministry management software",
    "congregation management",
    "church membership software",
    "church database software",
    "church giving software",
    "church volunteer management",
  ],
};

const capabilities = [
  {
    stage: "1",
    title: "Member & Family Management",
    description: "Maintain a comprehensive church database with family relationships, contact details, communication preferences, and ministry involvement. Search, filter, and report on your congregation with ease.",
    features: ["Family grouping and relationships", "Contact and demographic tracking", "Custom fields for ministry needs"],
    color: "bg-blue-50 border-blue-200 text-blue-700",
    dot: "bg-blue-500",
  },
  {
    stage: "2",
    title: "Attendance & Engagement Tracking",
    description: "Track attendance across services, events, and small groups with mobile check-in. Understand engagement trends, identify disconnected members, and celebrate growth milestones automatically.",
    features: ["Mobile and kiosk check-in", "Service and small group attendance", "Engagement scoring and analytics"],
    color: "bg-purple-50 border-purple-200 text-purple-700",
    dot: "bg-purple-500",
  },
  {
    stage: "3",
    title: "Giving & Tithes Management",
    description: "Accept online giving, track tithes and offerings, and generate year-end statements for donors. Automated recurring giving, fund-specific donations, and real-time reporting keep your finances transparent.",
    features: ["Online and mobile giving portal", "Recurring tithes and pledges", "Automated year-end statements"],
    color: "bg-orange-50 border-orange-200 text-orange-700",
    dot: "bg-orange-500",
  },
  {
    stage: "4",
    title: "Ministry & Event Coordination",
    description: "Plan and promote church events, manage room reservations, coordinate volunteer teams, and communicate with ministry leaders. From Sunday services to community outreach — every detail is organized.",
    features: ["Event planning and promotion", "Volunteer scheduling and reminders", "Room and resource reservations"],
    color: "bg-green-50 border-green-200 text-green-700",
    dot: "bg-green-500",
  },
];

const features = [
  { title: "Member Directory", desc: "A searchable, filterable directory of every member and family — with photos, contact info, and involvement history." },
  { title: "Attendance Check-In", desc: "Fast mobile and kiosk check-in for services, children's ministry, and small groups with real-time dashboards." },
  { title: "Online Giving Portal", desc: "Secure, branded giving page for one-time and recurring tithes, offerings, and designated fund donations." },
  { title: "Small Group Management", desc: "Organize groups, assign leaders, track participation, and communicate with members through group messaging." },
  { title: "Volunteer Scheduling", desc: "Build volunteer teams, set up rotation schedules, send reminders, and track service hours for every ministry." },
  { title: "Communication & Announcements", desc: "Send email, SMS, and push announcements to your congregation. Segment by group, ministry, or custom tags." },
];

const benefits = [
  { metric: "40%", label: "increase in member engagement" },
  { metric: "50%", label: "faster giving processing" },
  { metric: "60%", label: "less time on admin tasks" },
  { metric: "100%", label: "attendance tracking" },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kindora Church Management Software",
  description: "Church management software for ministries and congregations. Manage members, track attendance, process giving, coordinate events, schedule volunteers, and grow small groups.",
  url: "https://spacenexus.net/kindora/church-management-software",
  serviceType: "Church Management Software",
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
      name: "What is church management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Church management software is a platform that helps churches and ministries manage members, track attendance, process giving, coordinate events, and communicate with their congregation. It replaces scattered spreadsheets and manual processes with a unified system for all church operations.",
      },
    },
    {
      "@type": "Question",
      name: "How does Kindora handle online giving and tithes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kindora provides a secure, branded online giving portal for one-time and recurring tithes, offerings, and designated fund donations. Donors can give via credit card, debit card, or ACH transfer. The system generates automated year-end statements and real-time giving reports for church leaders.",
      },
    },
    {
      "@type": "Question",
      name: "Can we track attendance for services and small groups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Kindora supports mobile and kiosk check-in for services, children's ministry, and small groups. You get real-time attendance dashboards, engagement scoring, and the ability to identify disconnected members who haven't attended in a while.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can we implement church management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kindora church management software can be configured within 24 hours. Import your member database, set up groups and ministries, configure giving options, invite staff and volunteers, and start using the platform the same day.",
      },
    },
  ],
};

export default function KindoraChurchManagementPage() {
  return (
    <>
      <Script id="kindora-church-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="kindora-church-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/kindora" className="hover:text-[#2563eb] transition-colors">Kindora</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Church Management Software</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Ministry & Congregation Platform
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Church Management Software for{" "}
                <span className="text-[#2563eb]">Growing Ministries</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Manage members, track attendance, process giving, coordinate events, schedule volunteers, and grow small groups — all in one platform. Built for churches that need <strong>connected, engaged congregations</strong>.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Kindora powers every ministry</h2>
              <p className="text-gray-600 max-w-xl mx-auto">From first-time visitors to lifelong members — one platform manages the entire church experience.</p>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-5">Your church command center</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  See every member, event, and ministry at a glance. Automated dashboards surface attendance trends, giving patterns, and volunteer gaps — so pastoral staff stay connected without the spreadsheets.
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
                  See it with your church
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">app.kindora.com / church</div>
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10 aspect-[16/9] relative">
                  <Image src="/spacenexus/screenshots/vdr-dashboard.png" alt="Kindora church management dashboard" fill loading="lazy" className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 800px" />
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
                { q: "What is church management software?", a: "Church management software is a platform that helps churches and ministries manage members, track attendance, process giving, coordinate events, and communicate with their congregation. It replaces scattered spreadsheets and manual processes with a unified system for all church operations." },
                { q: "How does Kindora handle online giving and tithes?", a: "Kindora provides a secure, branded online giving portal for one-time and recurring tithes, offerings, and designated fund donations. Donors can give via credit card, debit card, or ACH transfer. The system generates automated year-end statements and real-time giving reports for church leaders." },
                { q: "Can we track attendance for services and small groups?", a: "Yes. Kindora supports mobile and kiosk check-in for services, children's ministry, and small groups. You get real-time attendance dashboards, engagement scoring, and the ability to identify disconnected members who haven't attended in a while." },
                { q: "How quickly can we implement church management software?", a: "Kindora church management software can be configured within 24 hours. Import your member database, set up groups and ministries, configure giving options, invite staff and volunteers, and start using the platform the same day." },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Launch your church workspace in 24 hours</h2>
            <p className="text-gray-600 mb-8">No lengthy onboarding. Import members, set up groups, configure giving, invite volunteers, and start serving your congregation the same day.</p>
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
              <Link href="/kindora/nonprofit-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Comprehensive nonprofit operations platform.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Nonprofit Management Software →</h3>
              </Link>
              <Link href="/kindora/donation-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Track and manage donations across all channels.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Donation Management Software →</h3>
              </Link>
              <Link href="/kindora/volunteer-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Schedule, track, and grow your volunteer teams.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Volunteer Management Software →</h3>
              </Link>
              <Link href="/kindora/event-management-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Plan, promote, and manage events end to end.</p>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors leading-snug">Event Management Software →</h3>
              </Link>
              <Link href="/kindora/nonprofit-reporting-software" className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200">
                <p className="text-xs font-semibold text-[#2563eb] mb-2 uppercase tracking-wider">Reports and dashboards for mission-driven insights.</p>
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
