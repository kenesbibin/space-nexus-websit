import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Volunteer Management Software | Volunteer Tracking System",
  description:
    "Kindora volunteer management software helps you track volunteers, schedule shifts, manage programmes, and maximise every hour — all from one integrated platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/volunteer-management-software",
  },
  openGraph: {
    title: "Volunteer Management Software",
    description: "Track volunteers, schedule shifts, and manage programmes with Kindora volunteer management software.",
    url: "https://spacenexus.net/kindora/volunteer-management-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora Volunteer Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volunteer Management Software",
    description: "Track volunteers, schedule shifts, and manage programmes with Kindora volunteer management software.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "volunteer management software",
    "volunteer tracking system",
    "volunteer database software",
    "volunteer scheduling software",
    "nonprofit volunteer software",
    "volunteer management system",
    "volunteer management platform",
    "volunteer hour tracking",
    "volunteer coordination software",
    "volunteer recruitment software",
    "volunteer engagement software",
    "best volunteer management software",
    "volunteer management tools",
    "volunteer programme software",
    "community volunteer software",
  ],
};

const benefits = [
  {
    metric: "Engagement",
    title: "Higher Volunteer Retention",
    description: "Track engagement, recognize contributions, and send follow-ups. Volunteer retention outcomes vary by organization.",
  },
  {
    metric: "Recorded",
    title: "Complete Hour Tracking",
    description: "Record volunteer hours by shift and activity to support internal tracking and reporting.",
  },
  {
    metric: "Auto",
    title: "Smart Scheduling",
    description: "Automated shift scheduling, availability matching, and confirmation reminders free your team to focus on impact instead of juggling spreadsheets.",
  },
  {
    metric: "Real-Time",
    title: "Activity Monitoring",
    description: "See who's checked in, who's overdue, and who's most engaged — all updated in real-time across your entire volunteer programme.",
  },
];

const features = [
  {
    title: "Volunteer Profiles",
    description: "Complete volunteer records with contact info, skills, availability, hours logged, and engagement history — all in one place.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Hour Tracking",
    description: "Track every volunteer hour with check-in/check-out, manual entry, and automatic calculation — accurate records for reporting.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Shift Scheduling",
    description: "Create recurring shifts, match volunteers to roles based on availability and skills, and send automated reminders.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Volunteer Recruitment",
    description: "Post opportunities, track applications, manage onboarding, and convert prospects into active volunteers.",
    icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
  },
  {
    title: "Communication Tools",
    description: "Send bulk messages, event reminders, and personalised updates — keep your volunteers informed and engaged.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Event Management",
    description: "Plan volunteer events, track registrations, manage logistics, and measure impact — all from one dashboard.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    title: "Impact Reports",
    description: "Generate reports on volunteer hours, programme outcomes, and community impact — shareable with stakeholders and funders.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Volunteer Portal",
    description: "Self-service portal for volunteers to view shifts, log hours, update availability, and access resources.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const comparisonData = [
  { feature: "Volunteer Profiles", kindora: true, bloomerang: false, blackbaud: true, signupgenius: true },
  { feature: "Hour Tracking", kindora: true, bloomerang: false, blackbaud: true, signupgenius: false },
  { feature: "Shift Scheduling", kindora: true, bloomerang: false, blackbaud: false, signupgenius: true },
  { feature: "Recruitment", kindora: true, bloomerang: false, blackbaud: false, signupgenius: false },
  { feature: "Communication", kindora: true, bloomerang: false, blackbaud: true, signupgenius: false },
  { feature: "Event Management", kindora: true, bloomerang: false, blackbaud: true, signupgenius: true },
  { feature: "Impact Reports", kindora: true, bloomerang: false, blackbaud: true, signupgenius: false },
  { feature: "All-in-One Platform", kindora: true, bloomerang: false, blackbaud: true, signupgenius: false },
];

const faqs = [
  {
    question: "What is volunteer management software?",
    answer:
      "Volunteer management software is a system that helps nonprofits track volunteer information, schedule shifts, log hours, and manage engagement. It centralises volunteer data, automates communication, and gives teams the tools to run effective volunteer programmes.",
  },
  {
    question: "How does volunteer management software improve retention?",
    answer:
      "Volunteer management software tracks engagement, recognises contributions, and triggers timely follow-ups. Automated scheduling, personalised communication, and impact reporting help nonprofits retain more volunteers and keep them engaged longer.",
  },
  {
    question: "What features should I look for in volunteer management software?",
    answer:
      "Key features include volunteer profiles, hour tracking, shift scheduling, recruitment tools, communication, event management, and impact reporting. Advanced features like volunteer portals, automated reminders, and availability matching are also valuable.",
  },
  {
    question: "How is Kindora different from other volunteer management software?",
    answer:
      "Most volunteer management tools only handle volunteers. Kindora includes volunteer management plus donor tracking, grant management, programme tracking, events, and reporting — all in one platform. You get complete organisational visibility, not just volunteer data.",
  },
  {
    question: "Can I migrate my volunteer data from spreadsheets to Kindora?",
    answer:
      "Yes. Kindora provides full data migration support. Our team helps you import volunteer records from spreadsheets, other systems, or any data source — so nothing is lost in the switch.",
  },
];

const platformStats = [
  { metric: "2x", label: "Volunteer Retention" },
  { metric: "100%", label: "Hour Tracking" },
  { metric: "Auto", label: "Schedule Management" },
  { metric: "Real-Time", label: "Activity Feed" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Volunteer Management Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Volunteer management software — track volunteers, schedule shifts, manage programmes, and maximise every hour.",
      url: "https://spacenexus.net/kindora/volunteer-management-software",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
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

export default function VolunteerManagementSoftwarePage() {
  return (
    <>
      <Script id="volunteer-management-software-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
              <span className="text-sm font-medium text-blue-600">Volunteer Management</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Volunteer Management Software That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">Maximises Every Hour</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Kindora volunteer management software is a system that helps
              nonprofits track volunteers, schedule shifts, log hours, and manage
              programmes from one integrated platform. It combines volunteer
              management with donor tracking, grant management, programme
              tracking, events, and reporting.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-cyan-600 hover:to-blue-700 rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Try for Free
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
              >
                Request a Demo
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
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
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora Volunteer Management By the Numbers</h2>
            <p className="text-lg text-gray-600">
              Kindora volunteer management software tracks every volunteer hour automatically and reports 2x higher volunteer retention for organisations that use structured engagement tracking. Hour tracking covers 100% of logged volunteer time, and the platform is ready to use with no credit card required.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platformStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">{stat.metric}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">Why Volunteer Management</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Volunteers Deserve Better Than Spreadsheets</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Volunteer management software helps nonprofits track hours, coordinate schedules, and plan follow-ups. Retention outcomes depend on each organization and its volunteer program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white text-xl font-bold mb-5">
                  {benefit.metric}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">Features</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Everything You Need to Manage Volunteers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kindora volunteer management software includes eight core capabilities: volunteer profiles, hour tracking, shift scheduling, recruitment, communication tools, event management, impact reports, and a volunteer portal — so teams run recruitment, scheduling, and recognition from one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">How We Compare</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Other Volunteer Software</h2>
            <p className="text-lg text-gray-600">Kindora is an all-in-one volunteer management platform, whereas Bloomerang and SignUpGenius cover only part of the volunteer workflow. Across eight feature categories — profiles, hour tracking, scheduling, recruitment, communication, events, impact reports, and an all-in-one platform — Kindora offers full coverage.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-blue-600">Kindora</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Bloomerang</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Blackbaud</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">SignUpGenius</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className={i < comparisonData.length - 1 ? "border-b border-gray-50" : ""}>
                      <td className="py-4 px-6 text-sm text-gray-900 font-medium">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.kindora === "boolean" ? (
                          row.kindora ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.bloomerang === "boolean" ? (
                          row.bloomerang ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.blackbaud === "boolean" ? (
                          row.blackbaud ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.signupgenius === "boolean" ? (
                          row.signupgenius ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">FAQs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Manage Volunteers Better?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of nonprofits replacing spreadsheets with professional volunteer management software.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Free Starter Plan
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-full transition-all duration-300"
            >
              Request a Demo
            </Link>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
