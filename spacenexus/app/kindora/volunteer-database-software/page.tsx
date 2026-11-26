import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Volunteer Database Software | Volunteer Directory",
  description:
    "Kindora volunteer database software helps nonprofits maintain a centralized volunteer directory with contact info, skills, availability, hours, and engagement history — all searchable and segmentable.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/volunteer-database-software",
  },
  openGraph: {
    title: "Volunteer Database Software",
    description: "Maintain a centralized volunteer directory with skills tracking, availability, hours, and engagement history.",
    url: "https://spacenexus.net/kindora/volunteer-database-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Volunteer Database Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volunteer Database Software",
    description: "Centralize volunteer data with contact info, skills, hours, and engagement history in one searchable directory.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "volunteer database software",
    "volunteer directory software",
    "volunteer record management",
    "volunteer data management",
    "volunteer information system",
    "nonprofit volunteer database",
    "volunteer contact management",
    "volunteer skills database",
    "volunteer tracking database",
    "volunteer management database",
    "volunteer record keeping",
    "volunteer profile management",
    "volunteer data platform",
    "volunteer information database",
    "volunteer directory management",
  ],
};

const databaseFeatures = [
  {
    title: "Volunteer Directory",
    description: "Centralized database of every volunteer with contact info, skills, availability, and complete engagement history.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Skills & Interests",
    description: "Tag volunteers with skills, interests, languages, and certifications. Find the right person for any opportunity.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "Availability Tracking",
    description: "Record volunteer availability preferences and schedules. Quickly find who is available when you need them.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Hour History",
    description: "Complete record of every volunteer hour logged, including shift details, dates, and cumulative totals.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Search & Filters",
    description: "Search volunteers by name, skill, availability, role, or engagement level. Advanced filters for precise results.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    title: "Engagement History",
    description: "View each volunteer's full engagement timeline — shifts worked, events attended, training completed, and communications.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Segment & Export",
    description: "Create volunteer segments for targeted communications. Export data for reporting or external systems.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L5 8m4-4v12",
  },
  {
    title: "Communication Log",
    description: "Track all communications with each volunteer — emails, SMS, calls — linked directly to their profile.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

const stats = [
  { metric: "Searchable", label: "Volunteer directory" },
  { metric: "Skills-based", label: "Tagging & search" },
  { metric: "Full", label: "Engagement history" },
  { metric: "Exportable", label: "Volunteer data" },
];

const faqs = [
  {
    question: "What is volunteer database software?",
    answer:
      "Volunteer database software helps nonprofits maintain a centralized directory of volunteer information including contact details, skills, availability, hours worked, and engagement history — all in one searchable system.",
  },
  {
    question: "What volunteer information can Kindora store?",
    answer:
      "Kindora stores contact information, skills and interests, availability preferences, certifications, hour history, engagement timeline, communication log, and any custom fields you need.",
  },
  {
    question: "Can I search for volunteers by skill?",
    answer:
      "Yes. Kindora lets you tag volunteers with skills, interests, and certifications. You can search and filter to find volunteers with specific qualifications.",
  },
  {
    question: "Does Kindora track volunteer hours?",
    answer:
      "Yes. Kindora maintains a complete record of every volunteer hour logged, including shift details, dates, and cumulative totals — all linked to the volunteer profile.",
  },
  {
    question: "Can I export volunteer data?",
    answer:
      "Yes. Kindora allows you to export volunteer data for reporting, analysis, or integration with external systems.",
  },
  {
    question: "Does Kindora track volunteer communications?",
    answer:
      "Yes. Every email, SMS, and call with a volunteer is logged and linked to their profile, providing a complete communication history.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Volunteer Database Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Volunteer database software for nonprofits — centralized directory with skills, availability, hours, and engagement tracking.",
      url: "https://spacenexus.net/kindora/volunteer-database-software",
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

export default function VolunteerDatabaseSoftwarePage() {
  return (
    <>
      <Script id="volunteer-database-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-yellow-600">Volunteer Database Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Your Complete{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">Volunteer Directory</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Maintain a centralized database of every volunteer — their skills, availability, hours, and engagement history. Kindora volunteer database software makes it easy to manage and mobilize your volunteer team.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-amber-600 hover:to-yellow-700 rounded-full shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Volunteer Directory</span>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                    {156} Active
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Total Volunteers", value: "312" },
                    { label: "Active", value: "156" },
                    { label: "Skills Listed", value: "24" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Recent Volunteers</p>
                  {[
                    { name: "Sarah Mitchell", skill: "Event Coordination", hours: "48 hrs" },
                    { name: "James Keller", skill: "Food Services", hours: "72 hrs" },
                    { name: "Lisa Rodriguez", skill: "Admin Support", hours: "36 hrs" },
                  ].map((v) => (
                    <div key={v.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div>
                          <span className="text-sm font-semibold text-gray-900">{v.name}</span>
                          <span className="text-xs text-gray-400 ml-2">{v.skill}</span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{v.hours}</span>
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
                <div className="text-3xl lg:text-4xl font-black text-yellow-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-yellow-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Know every volunteer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A complete view of your volunteer team — all in one searchable database.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {databaseFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-yellow-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-yellow-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-yellow-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From registration to engagement</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Build and maintain your volunteer database.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Register", description: "Volunteers join through sign-up forms. Profiles auto-create." },
              { step: "02", title: "Profile", description: "Capture skills, availability, interests, and certifications." },
              { step: "03", title: "Track", description: "Log hours, shifts, events, and communications per volunteer." },
              { step: "04", title: "Search", description: "Find the right volunteer for every opportunity instantly." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-yellow-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
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
            <p className="text-sm font-semibold text-yellow-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about volunteer database software.</p>
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
            Ready to organize your volunteer data?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora volunteer database software today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-amber-600 hover:to-yellow-700 rounded-full shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-yellow-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-yellow-500 bg-yellow-50 hover:bg-yellow-100 rounded-full transition-all duration-300"
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
