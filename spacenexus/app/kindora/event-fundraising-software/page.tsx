import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Event Fundraising Software | Fundraising Events Platform",
  description:
    "Kindora event fundraising software helps nonprofits maximize fundraising through events — with ticketing, donation collection, peer-to-peer tools, sponsor management, and post-event reporting.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/event-fundraising-software",
  },
  openGraph: {
    title: "Event Fundraising Software",
    description: "Maximize fundraising at events with ticketing, donations, peer-to-peer tools, and sponsor management.",
    url: "https://spacenexus.net/kindora/event-fundraising-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Event Fundraising Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Fundraising Software",
    description: "Maximize fundraising at events with ticketing, donations, peer-to-peer, and sponsor management.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "event fundraising software",
    "fundraising event platform",
    "nonprofit event fundraising",
    "event donation software",
    "gala fundraising software",
    "fundraising event management",
    "event fundraising tools",
    "virtual fundraising event",
    "hybrid event fundraising",
    "event peer to peer fundraising",
    "fundraising event ticketing",
    "event sponsor management",
    "event revenue tracking",
    "fundraising event reporting",
    "nonprofit gala software",
  ],
};

const eventFundraisingFeatures = [
  {
    title: "Event Ticketing",
    description: "Sell tickets with tiered pricing, early bird discounts, promo codes, and complimentary passes for sponsors.",
    icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
  },
  {
    title: "Donation Collection",
    description: "Accept donations during registration, at check-in, throughout the event, and in post-event follow-ups.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Peer-to-Peer Integration",
    description: "Attendees can create personal fundraising pages tied to the event. Expand your reach through their networks.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Sponsor Management",
    description: "Manage sponsor levels, benefits, payments, and recognition. Track sponsor ROI post-event.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Mobile Check-In",
    description: "Mobile check-in with QR codes. Track attendance and capture donations on site.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Email Campaigns",
    description: "Send invitations, reminders, and follow-ups. Segment by ticket type, attendance, and donation history.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Live Auctions & Pledges",
    description: "Run live auctions, paddle raises, and pledge drives during events. Track bids and pledges in real time.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Post-Event Reports",
    description: "Revenue by source — tickets, donations, sponsorships, auctions. Attendance, conversion, and donor data.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const stats = [
  { metric: "All", label: "Event types supported" },
  { metric: "Ticket + Donation", label: "Revenue streams" },
  { metric: "Built-in", label: "Peer-to-peer tools" },
  { metric: "Post-event", label: "Revenue reports" },
];

const faqs = [
  {
    question: "What is event fundraising software?",
    answer:
      "Event fundraising software helps nonprofits maximize revenue from fundraising events. It combines ticketing, donation collection, peer-to-peer fundraising, sponsor management, and post-event reporting in one platform.",
  },
  {
    question: "Can Kindora handle event ticketing and donations together?",
    answer:
      "Yes. Kindora lets you sell tickets, accept donations during registration, and continue collecting donations throughout the event — all with integrated donor tracking.",
  },
  {
    question: "Does Kindora support peer-to-peer fundraising for events?",
    answer:
      "Yes. Attendees can create personal fundraising pages linked to your event, expanding your reach through their personal networks.",
  },
  {
    question: "Can I manage sponsors through Kindora?",
    answer:
      "Yes. Kindora helps you manage sponsor levels, benefits, payments, and recognition — including sponsor tickets and logo placement.",
  },
  {
    question: "Does Kindora support live auctions and pledge drives?",
    answer:
      "Yes. Kindora supports live auctions, paddle raises, and pledge drives during events with real-time tracking of bids and pledges.",
  },
  {
    question: "What post-event reporting does Kindora provide?",
    answer:
      "Kindora provides comprehensive reports on ticket revenue, donations, sponsorships, auction income, attendance, and donor acquisition — all in one dashboard.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Event Fundraising Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Event fundraising software for nonprofits — maximize fundraising with ticketing, donations, peer-to-peer, and sponsor management.",
      url: "https://spacenexus.net/kindora/event-fundraising-software",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Ongoing free Starter plan; paid plans are custom-quoted" },
    },
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

export default function EventFundraisingSoftwarePage() {
  return (
    <>
      <Script id="event-fundraising-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-red-600">Event Fundraising Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Maximize Revenue at{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">Every Event</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                From galas to virtual fundraisers — Kindora event fundraising software combines ticketing, donations, peer-to-peer, and sponsor management to maximize every event&apos;s impact.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-red-500 to-rose-600 hover:from-rose-600 hover:to-red-700 rounded-full shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
                {["No credit card required", "Setup time varies by data and workflows", "See current plan terms on the pricing page"].map((text) => (
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
              <div className="absolute -inset-4 bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Event Fundraising</span>
                  </div>
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                    {new Date().getFullYear()}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Events This Year", value: "12" },
                    { label: "Total Revenue", value: "Funds" },
                    { label: "Avg Per Event", value: "Impact" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Upcoming Events</p>
                  {[
                    { name: "Annual Gala", date: "Sep 15", tickets: "342 sold", revenue: "Tickets + Donations" },
                    { name: "Fall 5K Run", date: "Oct 5", tickets: "128 registered", revenue: "P2P Fundraising" },
                    { name: "Giving Tuesday", date: "Dec 1", tickets: "Virtual event", revenue: "Donations" },
                  ].map((e) => (
                    <div key={e.name} className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center justify-between mb-0.5">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-400" />
                          <span className="text-sm font-semibold text-gray-900">{e.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{e.date}</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 pl-4">
                        <span>{e.tickets}</span>
                        <span>{e.revenue}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-red-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Fundraising events done right</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to maximize revenue from every event.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {eventFundraisingFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-red-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From planning to post-event</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A complete event fundraising workflow.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Plan", description: "Set up ticketing, donation pages, and fundraising goals." },
              { step: "02", title: "Promote", description: "Launch email campaigns, recruit sponsors, and activate P2P." },
              { step: "03", title: "Execute", description: "Check in guests, collect donations, run auctions and pledges." },
              { step: "04", title: "Report", description: "Track revenue, attendance, and donor data post-event." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-red-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about event fundraising software.</p>
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

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to maximize your next event?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora event fundraising software today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-red-500 to-rose-600 hover:from-rose-600 hover:to-red-700 rounded-full shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-red-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-red-500 bg-red-50 hover:bg-red-100 rounded-full transition-all duration-300"
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
