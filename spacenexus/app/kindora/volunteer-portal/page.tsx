import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Volunteer Portal | Self-Service Volunteer Management",
  description:
    "Kindora's volunteer portal lets volunteers view schedules, sign up for shifts, log hours, update profiles, and track their impact — all from one self-service platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/volunteer-portal",
  },
  openGraph: {
    title: "Volunteer Portal",
    description:
      "Give your volunteers a self-service portal to manage schedules, log hours, and track their impact.",
    url: "https://spacenexus.net/kindora/volunteer-portal",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora-og.png",
        width: 1200,
        height: 630,
        alt: "Kindora Volunteer Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volunteer Portal",
    description:
      "Self-service volunteer portal for scheduling, hour logging, and impact tracking.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "volunteer portal",
    "volunteer self-service portal",
    "volunteer sign-up portal",
    "volunteer scheduling portal",
    "volunteer hour logging",
    "volunteer management portal",
    "nonprofit volunteer portal",
    "volunteer engagement portal",
    "volunteer dashboard",
    "volunteer self-service platform",
    "volunteer coordinator software",
    "volunteer program portal",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Volunteer Portal",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Self-service volunteer portal — view schedules, sign up for shifts, log hours, update profiles, and track impact.",
      url: "https://spacenexus.net/kindora/volunteer-portal",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Ongoing free Starter plan; paid plans are custom-quoted",
      },
      featureList: [
        "Self-service shift sign-up",
        "Hour logging & tracking",
        "Profile management",
        "Impact dashboard",
        "Availability preferences",
        "Communication center",
        "Schedule viewing",
        "Announcement feed",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a volunteer portal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A volunteer portal is a self-service platform where volunteers can view and sign up for shifts, log their hours, update their personal information, communicate with coordinators, and track their own impact — without needing to call or email staff.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kindora's volunteer portal work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Volunteers receive a login to the Kindora portal where they can see upcoming shifts, sign up for ones that fit their schedule, clock in/out or log hours manually, update their profile and availability, view announcements, and see their total hours and impact stats.",
          },
        },
        {
          "@type": "Question",
          name: "Can volunteers sign up for shifts themselves?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Volunteers can browse available shifts, see the details (date, time, role, location), and sign up directly through the portal. Coordinators can approve sign-ups or allow automatic enrollment.",
          },
        },
        {
          "@type": "Question",
          name: "Can volunteers log hours through the portal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Volunteers can log hours via clock-in/clock-out, mobile check-in, or manual entry. All logged hours are tracked and visible to both the volunteer and the coordinator.",
          },
        },
        {
          "@type": "Question",
          name: "Can volunteers update their own profiles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Volunteers can update their contact information, availability preferences, skills, interests, and emergency contacts through the portal — reducing administrative overhead for your team.",
          },
        },
        {
          "@type": "Question",
          name: "Is the volunteer portal mobile-friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kindora's volunteer portal is fully responsive and works on any device — desktop, tablet, or smartphone. Volunteers can manage everything from their phone.",
          },
        },
      ],
    },
  ],
};

const portalFeatures = [
  {
    title: "Shift Sign-Up",
    description:
      "Volunteers browse available shifts, see details, and sign up directly — no emails or phone calls required.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Hour Logging",
    description:
      "Clock in/out, mobile check-in, or manual entry — volunteers log their own hours and coordinators approve them.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Profile Management",
    description:
      "Volunteers update their contact info, availability, skills, and interests — keeping records current without admin work.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Impact Dashboard",
    description:
      "Volunteers see their total hours, programs served, and personal impact — boosting engagement and retention.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Availability Preferences",
    description:
      "Volunteers set their weekly availability and preferred roles — making scheduling effortless for coordinators.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Announcements",
    description:
      "Coordinators post updates, reminders, and news — volunteers see them in their portal feed.",
    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
  },
  {
    title: "Communication Center",
    description:
      "Volunteers receive shift reminders, messages, and notifications — and can reply directly through the portal.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Skills Matching",
    description:
      "Volunteers tag their skills and interests — coordinators find the perfect match for each opportunity.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
  },
];

const benefits = [
  {
    title: "Reduce Admin Work",
    description:
      "Volunteers handle their own sign-ups, hour logging, and profile updates — freeing your team for mission-critical work.",
    stat: "80%",
    statLabel: "less admin time",
  },
  {
    title: "Boost Engagement",
    description:
      "When volunteers see their impact and manage their own schedules, they stay engaged and come back more often.",
    stat: "2x",
    statLabel: "higher retention",
  },
  {
    title: "Fill Shifts Faster",
    description:
      "Volunteers see open shifts instantly and sign up in seconds — no more phone tag or email chains.",
    stat: "3x",
    statLabel: "faster fill rate",
  },
  {
    title: "Keep Data Current",
    description:
      "Volunteers update their own profiles, availability, and skills — your database stays accurate without manual entry.",
    stat: "Real-time",
    statLabel: "data accuracy",
  },
];

const faqs = [
  {
    question: "What is a volunteer portal?",
    answer:
      "A volunteer portal is a self-service platform where volunteers can view and sign up for shifts, log their hours, update their personal information, communicate with coordinators, and track their own impact — without needing to call or email staff.",
  },
  {
    question: "How does Kindora's volunteer portal work?",
    answer:
      "Volunteers receive a login to the Kindora portal where they can see upcoming shifts, sign up for ones that fit their schedule, clock in/out or log hours manually, update their profile and availability, view announcements, and see their total hours and impact stats.",
  },
  {
    question: "Can volunteers sign up for shifts themselves?",
    answer:
      "Yes. Volunteers can browse available shifts, see the details (date, time, role, location), and sign up directly through the portal. Coordinators can approve sign-ups or allow automatic enrollment.",
  },
  {
    question: "Can volunteers log hours through the portal?",
    answer:
      "Yes. Volunteers can log hours via clock-in/clock-out, mobile check-in, or manual entry. All logged hours are tracked and visible to both the volunteer and the coordinator.",
  },
  {
    question: "Can volunteers update their own profiles?",
    answer:
      "Yes. Volunteers can update their contact information, availability preferences, skills, interests, and emergency contacts through the portal — reducing administrative overhead for your team.",
  },
  {
    question: "Is the volunteer portal mobile-friendly?",
    answer:
      "Yes. Kindora's volunteer portal is fully responsive and works on any device — desktop, tablet, or smartphone. Volunteers can manage everything from their phone.",
  },
];

export default function VolunteerPortalPage() {
  return (
    <>
      <Script
        id="volunteer-portal-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-white" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-emerald-600">
                  Volunteer Portal
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                  Volunteer Portal
                </span>{" "}
                That Empowers Your Team
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Let volunteers sign up for shifts, log hours, update their
                profiles, and track their own impact — all from one
                self-service portal. Less admin work, more mission impact.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-teal-600 hover:to-emerald-700 rounded-full shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Try Kindora Free
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <Link
                  href="/kindora/demo"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Request a Demo
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                {[
                  "No credit card required",
                  "Setup time varies by data and workflows",
                  "See current plan terms on the pricing page",
                ].map((text) => (
                  <span key={text} className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      Volunteer Dashboard
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      initials: "SJ",
                      name: "Sarah Johnson",
                      role: "Event Support",
                      hours: "24 hrs",
                      color: "from-emerald-400 to-emerald-500",
                    },
                    {
                      initials: "MK",
                      name: "Mike Kim",
                      role: "Food Bank",
                      hours: "18 hrs",
                      color: "from-teal-400 to-teal-500",
                    },
                    {
                      initials: "AL",
                      name: "Ana Lopez",
                      role: "Mentoring",
                      hours: "32 hrs",
                      color: "from-cyan-400 to-cyan-500",
                    },
                    {
                      initials: "DP",
                      name: "David Park",
                      role: "Fundraising",
                      hours: "12 hrs",
                      color: "from-blue-400 to-blue-500",
                    },
                  ].map((vol) => (
                    <div
                      key={vol.initials}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
                    >
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${vol.color} flex items-center justify-center text-white text-sm font-bold`}
                      >
                        {vol.initials}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">
                          {vol.name}
                        </p>
                        <p className="text-xs text-gray-500">{vol.role}</p>
                      </div>
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                        {vol.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Self-service portal
                  </span>
                  <span>86 hrs logged this week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              Why Volunteer Portal
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Empower volunteers, reduce admin work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When volunteers manage their own schedules and hours, your team
              can focus on what matters — delivering your mission.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl font-black text-emerald-500 mb-2">
                  {b.stat}
                </div>
                <div className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-4">
                  {b.statLabel}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Features */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              Portal Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything volunteers need — in one portal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From shift sign-up to impact tracking, the volunteer portal gives
              your team the tools to self-manage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {portalFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-emerald-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5 text-emerald-500 group-hover:text-white transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about Kindora&apos;s volunteer
              portal.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
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
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to empower your volunteers?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Give your volunteers a self-service portal to manage schedules, log
            hours, and track their impact. Less admin work, more mission
            impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-teal-600 hover:to-emerald-700 rounded-full shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
            >
              Start Free — No Credit Card Required
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-emerald-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Free Starter plan · No credit card · Setup time varies by data and workflows · See current plan terms on the pricing page
          </p>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
