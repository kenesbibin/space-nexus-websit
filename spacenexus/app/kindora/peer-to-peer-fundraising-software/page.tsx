import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Peer-to-Peer Fundraising Software | P2P Fundraising",
  description:
    "Kindora peer-to-peer fundraising software helps nonprofits launch supporter-driven campaigns with personal fundraising pages, team fundraising, social sharing, and real-time leaderboards.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/peer-to-peer-fundraising-software",
  },
  openGraph: {
    title: "Peer-to-Peer Fundraising Software",
    description: "Launch supporter-driven fundraising campaigns with personal pages, team fundraising, and social sharing.",
    url: "https://spacenexus.net/kindora/peer-to-peer-fundraising-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Peer-to-Peer Fundraising Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peer-to-Peer Fundraising Software",
    description: "Launch supporter-driven campaigns with personal pages, teams, and social sharing tools.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "peer-to-peer fundraising software",
    "P2P fundraising platform",
    "supporter fundraising software",
    "personal fundraising pages",
    "team fundraising software",
    "social fundraising platform",
    "fundraising event software",
    "walk run ride fundraising",
    "birthday fundraising software",
    "campaign fundraising platform",
    "donor driven fundraising",
    "fundraising leaderboard",
    "social sharing fundraising",
    "peer fundraising platform",
    "supporter driven campaigns",
  ],
};

const p2pFeatures = [
  {
    title: "Personal Pages",
    description: "Supporters get branded personal fundraising pages with photos, stories, goals, and progress tracking.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Team Fundraising",
    description: "Supporters can form teams, set team goals, and track collective progress on team leaderboards.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Social Sharing",
    description: "Built-in social sharing tools. Supporters can share their page on social media, email, and messaging apps.",
    icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z",
  },
  {
    title: "Leaderboards",
    description: "Real-time leaderboards for individuals and teams. Drive friendly competition and increase fundraising.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Email & Text Appeals",
    description: "Supporters can send fundraising appeals via email and text directly from their personal page.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Donation Matching",
    description: "Enable corporate matching and challenge grants. Supporters can unlock matching funds for their pages.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Event Integration",
    description: "Connect P2P campaigns to events, walks, runs, and virtual challenges with registration and tracking.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Campaign Dashboard",
    description: "Track total raised, participant counts, top fundraisers, and campaign performance in real time.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const stats = [
  { metric: "Personal", label: "Fundraising pages" },
  { metric: "Team", label: "Fundraising" },
  { metric: "Social", label: "Sharing tools" },
  { metric: "Real-time", label: "Leaderboards" },
];

const faqs = [
  {
    question: "What is peer-to-peer fundraising software?",
    answer:
      "Peer-to-peer fundraising software enables your supporters to create personal fundraising pages and fundraise on your behalf. They share their pages with their networks, expanding your reach and driving donations through trusted relationships.",
  },
  {
    question: "How do personal fundraising pages work?",
    answer:
      "Supporters create branded personal pages where they share their story, set a fundraising goal, and track progress. They can share their page via social media, email, and text to solicit donations from their network.",
  },
  {
    question: "Does Kindora support team fundraising?",
    answer:
      "Yes. Supporters can form teams, set collective goals, and track progress on team leaderboards. Teams add a social and competitive element that drives higher engagement and fundraising results.",
  },
  {
    question: "Can I see real-time campaign progress?",
    answer:
      "Yes. Kindora provides real-time dashboards showing total raised, participant counts, top fundraisers, and campaign performance metrics for both individuals and teams.",
  },
  {
    question: "Does Kindora integrate with events?",
    answer:
      "Yes. You can connect P2P campaigns to events, walks, runs, and virtual challenges. Participants can register for events and fundraise through their personal pages.",
  },
  {
    question: "Can supporters send fundraising appeals from their pages?",
    answer:
      "Yes. Supporters can send email and text appeals directly from their personal fundraising page, making it easy for them to ask their network for support.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Peer-to-Peer Fundraising Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Peer-to-peer fundraising software for nonprofits — supporter-driven campaigns with personal pages, team fundraising, and social sharing.",
      url: "https://spacenexus.net/kindora/peer-to-peer-fundraising-software",
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

export default function PeerToPeerFundraisingSoftwarePage() {
  return (
    <>
      <Script id="p2p-fundraising-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-violet-600">Peer-to-Peer Fundraising Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Turn Supporters into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">Fundraisers</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Launch supporter-driven campaigns with personal fundraising pages, team challenges, and social sharing tools. Kindora peer-to-peer fundraising software helps you reach new donors through the power of personal networks.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-600 hover:from-purple-600 hover:to-violet-700 rounded-full shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Campaign Dashboard</span>
                  </div>
                  <span className="px-3 py-1 bg-violet-100 text-violet-700 text-xs font-medium rounded-full">
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Participants", value: "342" },
                    { label: "Total Raised", value: "Donations" },
                    { label: "Avg Per Person", value: "Peer-driven" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Top Fundraisers</p>
                  {[
                    { name: "Emily S.", raised: "Personal best", goal: "82% to goal" },
                    { name: "Alex T.", raised: "Team captain", goal: "94% to goal" },
                    { name: "Maria G.", raised: "Top newbie", goal: "100% to goal" },
                  ].map((f) => (
                    <div key={f.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-violet-400" />
                        <span className="text-sm font-semibold text-gray-900">{f.name}</span>
                      </div>
                      <div className="text-right text-xs">
                        <span className="text-gray-500">{f.raised}</span>
                        <span className="text-gray-400 ml-2">{f.goal}</span>
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
                <div className="text-3xl lg:text-4xl font-black text-violet-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Amplify fundraising through supporter networks</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Give your supporters the tools to fundraise for you — with personal pages, teams, and social sharing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {p2pFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-violet-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-violet-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-violet-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How peer-to-peer fundraising works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Supporters become your most powerful fundraisers.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Launch", description: "Create a campaign with branded personal page templates." },
              { step: "02", title: "Recruit", description: "Invite supporters to create their own fundraising pages." },
              { step: "03", title: "Share", description: "Supporters share pages via social media, email, and text." },
              { step: "04", title: "Amplify", description: "Track performance and engage top fundraisers in real time." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-violet-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
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
            <p className="text-sm font-semibold text-violet-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about peer-to-peer fundraising software.</p>
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
            Ready to turn supporters into fundraisers?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Launch your first peer-to-peer campaign with Kindora.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-600 hover:from-purple-600 hover:to-violet-700 rounded-full shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-violet-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-violet-500 bg-violet-50 hover:bg-violet-100 rounded-full transition-all duration-300"
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
