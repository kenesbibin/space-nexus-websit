import { createKindoraServiceSchema } from "../components/commercial-schema";
import Link from "next/link";
import AnswerReadyBlock from "../components/AnswerReadyBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer Management Software for Nonprofits | Kindora",
  description:
    "Complete volunteer management platform for nonprofits: recruitment, scheduling, hour tracking, volunteer portal, and impact reporting. Built for organizations that rely on volunteers.",
  keywords: [
    "volunteer management software",
    "nonprofit volunteer tracking",
    "volunteer scheduling software",
    "volunteer hours tracking",
    "volunteer recruitment software",
    "volunteer database",
    "volunteer portal",
  ],
  alternates: {
    canonical: "/kindora/volunteer-management",
  },
  openGraph: {
    title: "Volunteer Management Software for Nonprofits | Kindora",
    description:
      "Complete volunteer management platform: recruitment, scheduling, hour tracking, volunteer portal, and impact reporting in one place.",
    url: "https://spacenexus.net/kindora/volunteer-management",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    createKindoraServiceSchema({ name: "Kindora Volunteer Management Service", description: "Complete volunteer management platform for nonprofits: recruitment, scheduling, hour tracking, volunteer portal, and impact reporting. Built for organizations that rely on volunteers.", category: "Nonprofit volunteer management", url: "https://spacenexus.net/kindora/volunteer-management" }),
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does volunteer scheduling work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kindora allows you to create shift schedules, post open opportunities, and let volunteers sign up for available slots. Automated reminders reduce no-shows, and the dashboard gives you a real-time view of scheduled vs. filled positions across all programs.",
          },
        },
        {
          "@type": "Question",
          name: "Can volunteers log their own hours?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Through the volunteer portal, volunteers can clock in and out, log hours for completed shifts, and view their participation history. Staff can also enter or adjust hours on behalf of volunteers as needed.",
          },
        },
        {
          "@type": "Question",
          name: "How does volunteer hour tracking support grant reporting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Volunteer hours are tracked against specific programs and grants, so you can report the value of volunteer contributions to funders. Kindora can apply standard valuation rates to calculate the dollar equivalent of volunteer time for impact reports.",
          },
        },
      ],
    },
  ],
};

const features = [
  {
    title: "Volunteer Database",
    description: "Centralized database of volunteer profiles with contact info, skills inventory, availability, interests, and participation history.",
    href: "/kindora/volunteer-database-software",
  },
  {
    title: "Volunteer Scheduling",
    description: "Create and manage volunteer schedules. Post open shifts, allow self-scheduling, and send automated reminders for upcoming commitments.",
    href: "/kindora/volunteer-scheduling-software",
  },
  {
    title: "Volunteer Hour Tracking",
    description: "Track volunteer hours by person, program, and activity. Support for clock-in/clock-out, mobile check-in, and bulk hour logging.",
    href: "/kindora/volunteer-hours-tracking-software",
  },
  {
    title: "Volunteer Portal",
    description: "Self-service portal where volunteers can update profiles, view schedules, log hours, and track their impact and milestone achievements.",
    href: "/kindora/volunteer-portal",
  },
  {
    title: "Volunteer Recruitment",
    description: "Post volunteer opportunities, manage applications, onboard new volunteers, and match skills to program needs.",
    href: "/kindora/volunteer-recruitment-software",
  },
  {
    title: "Volunteer Management",
    description: "Complete volunteer lifecycle management from recruitment and onboarding to scheduling, tracking, and recognition.",
    href: "/kindora/volunteer-management-software",
  },
];

const relatedPages = [
  { title: "Volunteer Management Software", href: "/kindora/volunteer-management-software" },
  { title: "Volunteer Database Software", href: "/kindora/volunteer-database-software" },
  { title: "Volunteer Scheduling Software", href: "/kindora/volunteer-scheduling-software" },
  { title: "Volunteer Hours Tracking Software", href: "/kindora/volunteer-hours-tracking-software" },
  { title: "Volunteer Portal", href: "/kindora/volunteer-portal" },
  { title: "Volunteer Recruitment Software", href: "/kindora/volunteer-recruitment-software" },
  { title: "Best Nonprofit CRM", href: "/kindora/best-nonprofit-crm" },
  { title: "Nonprofit Fundamentals", href: "/kindora/blog" },
];

export default function VolunteerManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-violet-50 to-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Volunteer Management Software for Nonprofits
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              Kindora&apos;s volunteer management platform helps nonprofits recruit, schedule, track, and engage volunteers. From hour tracking and scheduling to volunteer portals and impact reporting, manage your volunteer program from a single system built for organizations that rely on volunteer contributions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kindora/pricing" className="bg-[#2563eb] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors">
                View pricing
              </Link>
              <Link href="/kindora/demo" className="bg-white text-[#2563eb] border-2 border-[#2563eb] px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Request a demo
              </Link>
            </div>
          </div>
        </section>

      <AnswerReadyBlock page="volunteer" />

        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Volunteer Management Software Matters</h2>
            <p className="text-gray-600 mb-12 max-w-3xl">
              Volunteers are essential to many nonprofit operations, but managing them effectively requires more than a spreadsheet. Scheduling conflicts, untracked hours, poor communication, and volunteer burnout are common challenges when organizations lack dedicated volunteer management tools.
            </p>
            <p className="text-gray-600 mb-12 max-w-3xl">
              Kindora centralizes every aspect of volunteer management: recruitment and onboarding, scheduling and shift management, hour tracking, communication, and impact reporting. Volunteers get a self-service portal where they can manage their own participation, while your team gets real-time visibility into volunteer engagement across all programs.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((f) => (
                <Link key={f.href} href={f.href} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-[#2563eb] hover:shadow-md transition-all">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.description}</p>
                  <span className="text-[#2563eb] text-sm font-medium mt-2 inline-block">Learn more &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPages.map((p) => (
                <Link key={p.href} href={p.href} className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-[#2563eb] transition-colors">
                  <span className="text-[#2563eb] font-medium">{p.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How does volunteer scheduling work?</h3>
                <p className="text-gray-600">Kindora allows you to create shift schedules, post open opportunities, and let volunteers sign up for available slots. Automated reminders reduce no-shows, and the dashboard gives you a real-time view of scheduled vs. filled positions across all programs.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can volunteers log their own hours?</h3>
                <p className="text-gray-600">Yes. Through the volunteer portal, volunteers can clock in and out, log hours for completed shifts, and view their participation history. Staff can also enter or adjust hours on behalf of volunteers as needed.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How does volunteer hour tracking support grant reporting?</h3>
                <p className="text-gray-600">Volunteer hours are tracked against specific programs and grants, so you can report the value of volunteer contributions to funders. Kindora can apply standard valuation rates to calculate the dollar equivalent of volunteer time for impact reports.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-[#2563eb] text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Empower your volunteer program</h2>
            <p className="text-blue-100 mb-6">Start your free Starter plan today. No credit card required.</p>
            <Link href="/kindora/demo" className="inline-block bg-white text-[#2563eb] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get started free
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
