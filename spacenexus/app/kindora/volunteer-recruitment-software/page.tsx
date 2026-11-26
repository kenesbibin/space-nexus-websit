import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Volunteer Recruitment Software | Find & Attract Volunteers",
  description:
    "Kindora volunteer recruitment software helps nonprofits attract, screen, and onboard volunteers with customizable sign-up forms, automated workflows, and engagement tracking.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/volunteer-recruitment-software",
  },
  openGraph: {
    title: "Volunteer Recruitment Software",
    description: "Attract, screen, and onboard volunteers with Kindora recruitment software — sign-up forms, automated workflows, and tracking.",
    url: "https://spacenexus.net/kindora/volunteer-recruitment-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Volunteer Recruitment Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volunteer Recruitment Software",
    description: "Attract, screen, and onboard volunteers with sign-up forms and automated workflows.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "volunteer recruitment software",
    "volunteer recruitment platform",
    "volunteer recruitment tools",
    "nonprofit volunteer recruitment",
    "volunteer recruitment system",
    "volunteer recruitment management",
    "volunteer recruitment process",
    "volunteer recruitment automation",
    "volunteer recruitment workflow",
    "volunteer recruitment funnel",
    "volunteer recruitment marketing",
    "volunteer recruitment screening",
    "volunteer recruitment onboarding",
    "volunteer recruitment platform",
  ],
};

const recruitmentFeatures = [
  {
    title: "Custom Sign-Up Forms",
    description: "Create branded volunteer sign-up forms with custom fields for skills, availability, interests, and background info.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L5 8m4-4v12",
  },
  {
    title: "Application Workflow",
    description: "Review, approve, or decline volunteer applications. Set up automated approval sequences.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Automated Onboarding",
    description: "Send welcome emails, orientation details, waiver forms, and training links automatically upon approval.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Background Screening",
    description: "Request and track background checks. Set requirements by volunteer role and track completion status.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Opportunity Posting",
    description: "Post volunteer opportunities with descriptions, time commitments, skills needed, and locations.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "Referral Tracking",
    description: "Track how volunteers find you — referral sources, campaigns, events, or organic search.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Communication Templates",
    description: "Pre-built email templates for recruitment campaigns, follow-ups, acceptances, and rejections.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Recruitment Analytics",
    description: "Track application rates, conversion funnel, time-to-onboard, and recruitment channel effectiveness.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const stats = [
  { metric: "Custom", label: "Sign-up forms" },
  { metric: "Auto", label: "Onboarding workflows" },
  { metric: "Multi-source", label: "Recruitment tracking" },
  { metric: "End-to-end", label: "Recruitment pipeline" },
];

const faqs = [
  {
    question: "What is volunteer recruitment software?",
    answer:
      "Volunteer recruitment software helps nonprofits attract, screen, and onboard new volunteers. It includes custom sign-up forms, application workflows, background screening, automated onboarding, and recruitment analytics.",
  },
  {
    question: "How does Kindora help attract volunteers?",
    answer:
      "Kindora provides customizable sign-up forms that can be embedded on your website and shared on social media. You can also post volunteer opportunities and track which channels drive the most applicants.",
  },
  {
    question: "Does Kindora support volunteer screening?",
    answer:
      "Yes. Kindora supports application review workflows and background check tracking. You can set different screening requirements for different volunteer roles.",
  },
  {
    question: "Can Kindora automate volunteer onboarding?",
    answer:
      "Yes. Upon approval, Kindora can automatically send welcome emails, orientation details, waiver forms, and training links — getting new volunteers ready faster.",
  },
  {
    question: "Can I track where volunteers come from?",
    answer:
      "Yes. Kindora tracks referral sources so you can see which recruitment channels — social media, events, word of mouth, website — are most effective.",
  },
  {
    question: "Does Kindora provide recruitment analytics?",
    answer:
      "Yes. Kindora tracks application rates, conversion through the recruitment funnel, time-to-onboard, and channel effectiveness to help you optimize your recruitment strategy.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Volunteer Recruitment Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Volunteer recruitment software for nonprofits — attract, screen, and onboard volunteers with sign-up forms and automated workflows.",
      url: "https://spacenexus.net/kindora/volunteer-recruitment-software",
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

export default function VolunteerRecruitmentSoftwarePage() {
  return (
    <>
      <Script id="volunteer-recruitment-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-sky-600">Volunteer Recruitment Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Attract & Onboard{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Great Volunteers</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                    Find and onboard dedicated volunteers with Kindora&apos;s recruitment platform. Custom sign-up forms, automated workflows, and screening tools help you build a strong volunteer team.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-700 rounded-full shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Recruitment Pipeline</span>
                  </div>
                  <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-medium rounded-full">
                    Open
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Openings", value: "8" },
                    { label: "Applicants", value: "47" },
                    { label: "Approved", value: "23" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Recent Applicants</p>
                  {[
                    { name: "Emily S.", role: "Food Bank Volunteer", status: "Pending" },
                    { name: "Alex T.", role: "Youth Mentor", status: "Approved" },
                    { name: "Maria G.", role: "Admin Support", status: "Screening" },
                  ].map((a) => (
                    <div key={a.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-sky-400" />
                        <div>
                          <span className="text-sm font-semibold text-gray-900">{a.name}</span>
                          <span className="text-xs text-gray-500 ml-2">{a.role}</span>
                        </div>
                      </div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        a.status === "Approved" ? "bg-green-100 text-green-700" :
                        a.status === "Pending" ? "bg-amber-100 text-amber-700" :
                        "bg-blue-100 text-blue-700"
                      }`}>
                        {a.status}
                      </span>
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
                <div className="text-3xl lg:text-4xl font-black text-sky-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">End-to-end volunteer recruitment</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Attract, screen, and onboard — a complete recruitment pipeline.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recruitmentFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-sky-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-sky-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From prospect to volunteer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A complete recruitment workflow.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Attract", description: "Share sign-up forms and post opportunities across channels." },
              { step: "02", title: "Screen", description: "Review applications, run background checks, and approve." },
              { step: "03", title: "Onboard", description: "Automated welcome sequences, waivers, and training." },
              { step: "04", title: "Engage", description: "Track new volunteers and convert them into active contributors." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-sky-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
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
            <p className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about volunteer recruitment software.</p>
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
            Ready to attract great volunteers?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora volunteer recruitment software today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-700 rounded-full shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-sky-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-sky-500 bg-sky-50 hover:bg-sky-100 rounded-full transition-all duration-300"
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
