import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import FeatureIntentContent from "../FeatureIntentContent";

export const metadata: Metadata = {
  title: "Communications Hub - Email & Stakeholder Outreach",
  description:
    "Send targeted emails to donors, clients, volunteers, and team members directly from the platform with templates and tracking.",
  keywords: [
    "nonprofit email software",
    "donor communication tools",
    "stakeholder outreach platform",
    "NGO newsletter software",
    "volunteer email system",
  ],
  alternates: {
    canonical: "/kindora/features/communications",
  },
  openGraph: {
    title: "Communications Hub - Email & Stakeholder Outreach",
    description:
      "Send targeted emails to donors, clients, volunteers, and team members directly from the platform with templates and tracking.",
    url: "https://spacenexus.net/kindora/features/communications",
    type: "website",
  },
};

const audiences = [
  {
    name: "Donors",
    description: "Thank-you messages, appeals, and updates",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    name: "Clients",
    description: "Program updates and service notifications",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    name: "Volunteers",
    description: "Scheduling, opportunities, and appreciation",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "Team",
    description: "Internal updates and coordination",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

const features = [
  {
    title: "Direct Email Sending",
    description:
      "Send emails directly from any profile page without leaving the platform. Keep communication in context with the recipient's record.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Email Templates",
    description:
      "Create reusable templates for common communications: donation receipts, welcome messages, program updates, and more.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Communication History",
    description:
      "Every email is logged in the recipient's profile. View complete communication history for personalized follow-up.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Bulk Communications",
    description:
      "Send targeted messages to groups based on donor type, client program, volunteer status, or custom criteria.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Personalization",
    description:
      "Use merge fields to personalize messages with recipient names, donation amounts, program details, and more.",
    icon: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Activity Logging",
    description:
      "All communications are automatically logged in the activity feed. Track what was sent, when, and to whom.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kindora — Communications Hub",
  description:
    "Send targeted emails to donors, clients, volunteers, and team members directly from the platform with templates and tracking.",
  url: "https://spacenexus.net/kindora/features/communications",
  serviceType: "Nonprofit Email & Stakeholder Outreach Software",
  provider: {
    "@id": "https://spacenexus.net/kindora/#organization",
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  offers: {
    "@type": "Offer",
    url: "https://spacenexus.net/kindora/pricing",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
  },
};

export default function CommunicationsPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/kindora/features"
                className="inline-flex mr-7 items-center text-sm text-gray-500 hover:text-[#2563eb] mb-6 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Features
              </Link>

              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-4">
                Communication & Engagement
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Nonprofit Communication Management Software
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Reach your donors, clients, volunteers, and team members
                directly from the platform. Send personalized emails, maintain
                communication history, and build stronger relationships.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/25"
                >
                  Request a Demo
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Compose Email</h3>
                <span className="text-xs text-gray-500">Draft</span>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-500 block mb-1">To</label>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                      Donor
                    </div>
                    <div className="h-4 w-32 bg-gray-200 rounded" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-1">
                    Subject
                  </label>
                  <div className="h-10 bg-gray-50 rounded-lg" />
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-1">
                    Message
                  </label>
                  <div className="h-24 bg-gray-50 rounded-lg" />
                </div>
                <div className="flex justify-end gap-2">
                  <button className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg">
                    Template
                  </button>
                  <button className="px-4 py-2 text-sm text-white bg-[#2563eb] rounded-lg">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reach Every Stakeholder
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Communicate directly with all the people who make your mission
              possible.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience) => (
              <div
                key={audience.name}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={audience.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {audience.name}
                </h3>
                <p className="text-sm text-gray-600">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Communication Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to keep your stakeholders informed and
              engaged.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-4">
                  <svg
                    className="w-6 h-6"
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Flow */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Seamless Communication Flow
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From any profile, send a message and it&apos;s automatically
              logged for future reference.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
            {[
              { step: "1", label: "Open Profile" },
              { step: "2", label: "Click Email" },
              { step: "3", label: "Compose Message" },
              { step: "4", label: "Send" },
              { step: "5", label: "Auto-Logged" },
            ].map((item, idx) => (
              <div key={item.step} className="flex items-center gap-4 lg:gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#2563eb] flex items-center justify-center text-white font-bold mb-2">
                    {item.step}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {item.label}
                  </span>
                </div>
                {idx < 4 && (
                  <svg
                    className="hidden lg:block w-8 h-8 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureIntentContent feature="communications" />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to improve stakeholder communication?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how Kindora&apos;s communications hub can help you build
            stronger relationships with your community.
          </p>
          <Link
            href="/kindora/contact"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/25"
          >
            Request a Demo
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
          </Link>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </main>
  );
}
