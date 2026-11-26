import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import FeatureIntentContent from "../FeatureIntentContent";

export const metadata: Metadata = {
  title: "People — Team, Volunteer & Communications Management",
  description:
    "Kindora People helps nonprofits manage employees, volunteers, and communication activities in one platform. Maintain staff records, coordinate volunteers, and track all interactions with donors, clients, and partners.",
  keywords: [
    "volunteer management software",
    "nonprofit staff management",
    "volunteer coordination tools",
    "nonprofit HR software",
    "team management NGO",
  ],
  alternates: {
    canonical: "/kindora/features/people-management",
  },
  openGraph: {
    title: "People — Team, Volunteer & Communications Management",
    description:
      "Employee profiles, volunteer management, communication logs, and engagement tracking — all in one centralized platform for nonprofit team management.",
    url: "https://spacenexus.net/kindora/features/people-management",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "People — Team, Volunteer & Communications Management",
    description:
      "Manage employees, volunteers, and communications in one place — built for nonprofit teams.",
  },
};

const features = [
  {
    title: "Employee Profiles",
    description:
      "Maintain employee profiles including contact details, departments, and employment status. Keep a complete staff directory that your team can access and update from anywhere.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Volunteer Management",
    description:
      "Manage volunteer information including skills, availability, participation hours, and activity status. Coordinate volunteers across activities and maintain a complete volunteer registry.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Volunteer Engagement Tracking",
    description:
      "Track volunteer contributions and engagement across organizational activities. Monitor hours logged, tasks completed, and participation trends to recognize and retain your volunteer base.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Communications Logging",
    description:
      "Log and manage communications with donors, clients, volunteers, and partners. Record every interaction — emails, meetings, and follow-ups — to maintain a complete communication history.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Communication History",
    description:
      "Access a full record of past communications per contact — emails sent, meetings held, and follow-up actions. Ensure continuity of relationships even as team members change.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Team Activity Monitoring",
    description:
      "Use a centralized system to monitor team activity and engagement across the organization. Understand how your staff and volunteers are contributing to your mission at a glance.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const galleryScreenshots = [
  { src: "/kindora/screenshots/People/People%20(2).png", caption: "Volunteer Management" },
  { src: "/kindora/screenshots/People/People%20(3).png", caption: "Communications Log" },
];

export default function PeoplePage() {
  return (
    <main className="pt-20 lg:pt-24">


      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/kindora/features"
                className="inline-flex mr-7 items-center text-sm text-gray-500 hover:text-[#2563eb] mb-6 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Features
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-medium mb-4">
                People Management
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Nonprofit People &amp; Volunteer Management Software
              </h1>
              <p className="text-sm font-medium text-violet-600 mb-4 italic">
                Manage your team, volunteers, and communications in one place.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The People module helps organizations manage employees, volunteers, and communication
                activities in a centralized platform. It allows teams to maintain staff records,
                coordinate volunteer participation, and track interactions with donors, clients, and
                partners — improving collaboration, engagement, and operational efficiency.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Maintain employee profiles with contact details, departments, and employment status",
                  "Manage volunteer information: skills, availability, participation hours, and activity status",
                  "Track volunteer contributions and engagement across organizational activities",
                  "Log and manage communications with donors, clients, volunteers, and partners",
                  "Record communication history — emails, meetings, and follow-ups",
                  "Monitor team activity and engagement across the organization",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40"
                >
                  Request a Demo
                </Link>
                <Link
                  href="/kindora/pricing"
                  className="inline-flex items-center px-6 py-3 text-base font-semibold text-gray-700 border-2 border-gray-200 rounded-full hover:border-gray-300 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Hero Screenshot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-violet-500/10 blur-2xl rounded-3xl -z-10" />
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                  app.kindora.com / people
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10 aspect-[16/9] relative">
                <Image
                  src="/kindora/screenshots/People/People%20(1).png"
                  alt="Kindora People — employee and volunteer management overview"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 92vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Team — Organized & Engaged
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kindora People brings everyone together in one system — staff, volunteers, and
              every interaction — so your organization can collaborate and grow with confidence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-violet-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">People Module Views</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              From volunteer coordination to communication tracking — all in one place.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {galleryScreenshots.map((screenshot) => (
              <div key={screenshot.src}>
                <div className="bg-gray-800 rounded-t-xl px-3 py-2.5 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="flex-1 bg-gray-700 rounded px-2 py-0.5 text-xs text-gray-400 ml-2">
                    app.kindora.com / people
                  </div>
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-lg aspect-[16/9] relative">
                  <Image
                    src={screenshot.src}
                    alt={`Kindora People — ${screenshot.caption}`}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 44vw, 560px"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">{screenshot.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureIntentContent feature="people-management" />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-violet-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Build a Stronger Team with Kindora People
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              See how Kindora helps you manage staff, volunteers, and communications in one
              unified platform — built for nonprofit organizations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300"
              >
                Request a Demo
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/kindora/features"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors"
              >
                View All Features
              </Link>
            </div>
          </div>

            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </main>
  );
}
