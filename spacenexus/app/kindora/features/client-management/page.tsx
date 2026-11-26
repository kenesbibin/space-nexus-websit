import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import FeatureIntentContent from "../FeatureIntentContent";

export const metadata: Metadata = {
  title: "Programs — Client Services & Enrollment Management",
  description:
    "Kindora Programs helps nonprofits manage client services, track enrollments, and monitor program performance. Organize service offerings, manage client participation, and measure community impact.",
  keywords: [
    "client management nonprofit",
    "program management software",
    "client case management",
    "service delivery tracking",
    "nonprofit program software",
  ],
  alternates: {
    canonical: "/kindora/features/client-management",
  },
  openGraph: {
    title: "Programs — Client Services & Enrollment Management",
    description:
      "Manage client profiles, service programs, enrollment tracking, and program outcomes — all in one centralized system for nonprofit service delivery.",
    url: "https://spacenexus.net/kindora/features/client-management",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programs — Client Services & Enrollment Management",
    description:
      "Client intake, service programs, enrollment tracking, and program analytics for nonprofit service delivery.",
  },
};

const features = [
  {
    title: "Client Profile Management",
    description:
      "Maintain and manage client profiles with contact details and intake information. Keep comprehensive records for every individual your organization serves.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Service Program Setup",
    description:
      "Create and manage service programs with defined schedules and capacity limits. Organize offerings across program areas such as education, employment, legal aid, and housing assistance.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "Enrollment Tracking",
    description:
      "Enroll clients into services and track participation status. Monitor active and completed enrollments across all programs in one centralized view.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    title: "Service Utilization & Capacity",
    description:
      "Track service utilization and available capacity for each program. Identify over-subscribed programs and plan resources to ensure consistent service delivery.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Program Reports & Analytics",
    description:
      "Generate program reports to analyze client activity and outcomes. Identify popular services, monitor engagement trends, and demonstrate measurable community impact.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Service Categories",
    description:
      "Categorize services by program areas — education, employment, legal aid, housing assistance, and more. Organize your service catalog to match your organization's mission and delivery model.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
  },
];

const galleryScreenshots = [
  { src: "/kindora/screenshots/Programs/Programs%20(2).png", caption: "Service Programs List" },
  { src: "/kindora/screenshots/Programs/Programs%20(3).png", caption: "Enrollment Management" },
  { src: "/kindora/screenshots/Programs/Programs%20(4).png", caption: "Program Analytics" },
  { src: "/kindora/screenshots/Programs/Programs%20(5).png", caption: "Client Activity Overview" },
];

export default function ProgramsPage() {
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
                Program Management
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Nonprofit Client & Program Management Software
              </h1>
              <p className="text-sm font-medium text-violet-600 mb-4 italic">
                Deliver impactful services and manage client programs with ease.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Programs module helps organizations manage client services, track enrollments,
                and monitor program performance in a centralized system. It enables teams to organize
                service offerings, manage client participation, and gain insights into program outcomes,
                ensuring efficient service delivery and measurable community impact.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Maintain and manage client profiles with contact details and intake information",
                  "Create and manage service programs with defined schedules and capacity limits",
                  "Enroll clients into services and track participation status",
                  "Monitor active and completed enrollments across programs",
                  "Track service utilization and available capacity for each program",
                  "Generate program reports to analyze client activity and outcomes",
                  "Categorize services by program areas: education, employment, legal aid, and housing",
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
                  app.kindora.com / programs
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10 aspect-[16/9] relative">
                <Image
                  src="/kindora/screenshots/Programs/Programs(1).png"
                  alt="Kindora Programs — client services and enrollment management"
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
              Manage Every Program with Confidence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From client intake to program outcomes — Kindora gives your team the tools to
              deliver impactful services efficiently and with full visibility.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Programs in Action</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              See how Kindora manages every aspect of program and client service delivery.
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
                    app.kindora.com / programs
                  </div>
                </div>
                <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-lg aspect-[16/9] relative">
                  <Image
                    src={screenshot.src}
                    alt={`Kindora Programs — ${screenshot.caption}`}
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

      <FeatureIntentContent feature="client-management" />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-violet-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              See Programs in Action
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Schedule a demo and see how Kindora helps your organization manage client
              services, track enrollments, and measure program outcomes — all in one place.
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
