import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Donor Engagement Software | Keep Supporters Involved",
  description:
    "Kindora donor engagement software helps nonprofits keep supporters involved with targeted communication, event tracking, volunteer coordination, and personalized outreach.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/donor-engagement-software",
  },
  openGraph: {
    title: "Donor Engagement Software",
    description: "Keep your supporters engaged with Kindora's donor engagement platform — communication, events, volunteering, and more.",
    url: "https://spacenexus.net/kindora/donor-engagement-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Donor Engagement Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donor Engagement Software",
    description: "Engage your supporters with targeted communication, events, and personalized outreach.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "donor engagement software",
    "donor engagement platform",
    "nonprofit engagement tools",
    "supporter engagement",
    "donor communication software",
    "donor outreach tools",
    "nonprofit communication platform",
    "donor stewardship software",
    "donor engagement strategies",
    "nonprofit supporter engagement",
    "donor touchpoints",
    "donor relationship building",
    "charity engagement platform",
    "NGO supporter tools",
    "donor involvement platform",
  ],
};

const engagementTools = [
  {
    title: "Multi-Channel Communication",
    description: "Email, in-app messages, and bulk communications. Reach donors where they're most responsive.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Event Management",
    description: "Create events, send invitations, track attendance, and follow up — all within the platform.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Volunteer Coordination",
    description: "Post opportunities, track hours, match skills, and recognize volunteer contributions.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Engagement Scoring",
    description: "Score donors based on interactions, donations, event attendance, and communication responses.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Automated Workflows",
    description: "Trigger personalized follow-ups, birthday greetings, anniversary messages, and re-engagement campaigns.",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  },
  {
    title: "Donor Surveys & Feedback",
    description: "Collect donor feedback, measure satisfaction, and understand what drives engagement.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Impact Stories",
    description: "Share success stories and impact updates that show donors the difference they make.",
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
  },
  {
    title: "Engagement Reports",
    description: "Measure engagement trends, track campaign effectiveness, and identify your most engaged supporters.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const engagementStats = [
  { metric: "3x", label: "Higher engagement with segmentation" },
  { metric: "68%", label: "of donors prefer personalized outreach" },
  { metric: "4+", label: "Touchpoints for optimal retention" },
  { metric: "90%", label: "Faster with automated workflows" },
];

const faqs = [
  {
    question: "What is donor engagement software?",
    answer:
      "Donor engagement software helps nonprofits build and maintain meaningful relationships with their supporters. It includes tools for multi-channel communication, event management, volunteer coordination, automated follow-ups, and engagement tracking — all designed to keep donors connected to your mission.",
  },
  {
    question: "Why is donor engagement important?",
    answer:
      "Engaged donors give more, give more often, and stay longer. They also become ambassadors for your cause, referring new supporters and advocating on your behalf. Investing in donor engagement is one of the highest-ROI activities a nonprofit can undertake.",
  },
  {
    question: "How does Kindora help with donor engagement?",
    answer:
      "Kindora provides a complete engagement toolkit: multi-channel communication, event management, volunteer coordination, engagement scoring, automated workflows, and impact reporting. Everything is integrated so you can see the full picture of donor engagement in one place.",
  },
  {
    question: "Can Kindora automate donor communications?",
    answer:
      "Yes. Kindora lets you create automated communication workflows triggered by donor actions — welcome sequences, birthday messages, anniversary celebrations, donation acknowledgments, and re-engagement campaigns.",
  },
  {
    question: "Does Kindora include event management?",
    answer:
      "Yes. Kindora includes event management tools for creating events, sending invitations, tracking RSVPs and attendance, and following up with attendees afterward.",
  },
  {
    question: "Can I track volunteer engagement alongside donor engagement?",
    answer:
      "Yes. Kindora tracks volunteer hours, skills, event participation, and communication — all linked to the same supporter profile. You can see the full picture of how each person engages with your organization.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Donor Engagement Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Donor engagement software for nonprofits — communication, events, volunteering, and personalized outreach.",
      url: "https://spacenexus.net/kindora/donor-engagement-software",
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

export default function DonorEngagementSoftwarePage() {
  return (
    <>
      <Script id="donor-engagement-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-cyan-600">Donor Engagement Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Engage Your Supporters{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-600">Beyond the Donation</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Donors are more than transactions. Kindora helps you build real connections through personalized communication, events, volunteer opportunities, and impact stories — turning one-time givers into lifelong advocates.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-sky-600 hover:to-cyan-700 rounded-full shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-0.5"
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

            {/* Right visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-50 to-sky-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Engagement Overview</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { label: "Email open rate", value: "68%", change: "+12%", bar: "w-3/4" },
                    { label: "Event attendance", value: "342", change: "+28", bar: "w-2/3" },
                    { label: "Volunteer hours", value: "1,247", change: "+18%", bar: "w-1/2" },
                    { label: "Survey responses", value: "89", change: "+15", bar: "w-1/3" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">{item.label}</span>
                        <div className="text-right">
                          <span className="font-bold text-gray-900">{item.value}</span>
                          <span className="text-emerald-600 text-xs ml-1.5 font-medium">{item.change}</span>
                        </div>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 ${item.bar}`} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-cyan-600 font-semibold">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Engagement trending up across all channels
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {engagementStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-cyan-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Tools */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider mb-3">Engagement Tools</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything you need to engage supporters</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Communication, events, volunteering, and automation — all working together to build deeper connections.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {engagementTools.map((tool) => (
              <div
                key={tool.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-cyan-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-cyan-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tool.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">{tool.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Workflow */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider mb-3">Engagement Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Build a complete engagement journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From first interaction to lifelong advocacy — Kindora supports every stage.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Welcome & Onboard",
                description: "Automated welcome sequences that introduce new donors to your mission.",
              },
              {
                step: "02",
                title: "Inform & Inspire",
                description: "Share impact updates, success stories, and program highlights regularly.",
              },
              {
                step: "03",
                title: "Invite & Involve",
                description: "Invite supporters to events, volunteer opportunities, and behind-the-scenes access.",
              },
              {
                step: "04",
                title: "Recognize & Retain",
                description: "Personalized thank-yous, donor spotlights, and stewardship that builds loyalty.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-cyan-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
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
            <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about donor engagement software.</p>
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
            Ready to engage your supporters like never before?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Start building deeper connections with Kindora&apos;s donor engagement platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-sky-600 hover:to-cyan-700 rounded-full shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-cyan-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-cyan-500 bg-cyan-50 hover:bg-cyan-100 rounded-full transition-all duration-300"
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
