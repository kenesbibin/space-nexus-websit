import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import FeatureIntentContent from "../FeatureIntentContent";

export const metadata: Metadata = {
  title: "Users — Access Control & System User Management",
  description:
    "Kindora Users allows organizations to manage system users and define access levels within the platform. Assign roles, control permissions, and ensure team members have appropriate access to different modules.",
  keywords: [
    "nonprofit user management",
    "role-based access control NGO",
    "team permissions software",
    "user access management nonprofit",
    "multi-user nonprofit platform",
  ],
  alternates: {
    canonical: "/kindora/features/user-management",
  },
  openGraph: {
    title: "Users — Access Control & System User Management",
    description:
      "Create user accounts, assign role-based access levels, control module permissions, and manage active or inactive users — all from a centralized interface.",
    url: "https://spacenexus.net/kindora/features/user-management",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Users — Access Control & System User Management",
    description:
      "Role-based access control, user management, and secure module permissions for nonprofit platforms.",
  },
};

const features = [
  {
    title: "User Account Management",
    description:
      "Create and manage user accounts for all team members on the platform. Add new users, update account details, and maintain a complete registry of everyone with access to your system.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Role-Based Access Levels",
    description:
      "Assign role-based access levels such as Admin, Manager, Staff, and Viewer. Each role comes with predefined permission sets that match the responsibilities of different team members.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Module Permission Control",
    description:
      "Control permissions for different modules and system features. Ensure team members can only access the areas of the platform relevant to their role — protecting sensitive data.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "User Status Management",
    description:
      "Monitor user status and manage active or inactive accounts. Deactivate accounts when team members leave, and reactivate them when needed — without losing historical records.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Centralized Access Management",
    description:
      "Maintain a centralized system for secure user access management. View all users, their roles, and access levels at a glance — and make changes from one unified interface.",
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
  },
  {
    title: "Operational Security",
    description:
      "Improve organizational security by ensuring team members only access data relevant to their responsibilities. Reduce data exposure risk while maintaining operational efficiency.",
    icon: "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

export default function UsersPage() {
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-medium mb-4">
                Nonprofit User Access & Role Management Software
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Users
              </h1>
              <p className="text-sm font-medium text-rose-600 mb-4 italic">
                Control access and manage system users securely.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Users module allows organizations to manage system users and
                define their access levels within the platform. It helps
                administrators assign roles, control permissions, and ensure
                that team members have appropriate access to different modules —
                improving security and operational efficiency.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Create and manage user accounts for team members",
                  "Assign role-based access levels such as Admin, Manager, Staff, and Viewer",
                  "Control permissions for different modules and system features",
                  "Monitor user status and manage active or inactive accounts",
                  "Maintain a centralized system for secure user access management",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-rose-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
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
              <div className="absolute -inset-4 bg-rose-500/10 blur-2xl rounded-3xl -z-10" />
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-400 ml-3">
                  app.kindora.com / users
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10 aspect-[16/9] relative">
                <Image
                  src="/kindora/screenshots/Users/Screenshot%202026-03-17%20123550.png"
                  alt="Kindora Users — user management and access control interface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 92vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Levels */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Access Role Levels
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Assign the right level of access to every team member based on
              their role and responsibilities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: "Admin",
                description: "Full platform access and configuration",
                color: "bg-rose-50 border-rose-100 text-rose-700",
              },
              {
                label: "Manager",
                description: "Manage team, programs, and reports",
                color: "bg-orange-50 border-orange-100 text-orange-700",
              },
              {
                label: "Staff",
                description: "Operational access for daily tasks",
                color: "bg-blue-50 border-blue-100 text-blue-700",
              },
              {
                label: "Viewer",
                description: "Read-only access to approved modules",
                color: "bg-gray-50 border-gray-200 text-gray-700",
              },
            ].map((role) => (
              <div
                key={role.label}
                className={`rounded-xl border p-5 text-center ${role.color}`}
              >
                <p className="font-bold text-lg mb-1">{role.label}</p>
                <p className="text-xs opacity-80">{role.description}</p>
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
              Secure Access for Every Team Member
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kindora Users gives administrators complete control over who can
              access what — so your data stays protected and your team stays
              productive.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-rose-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 mb-4">
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

      <FeatureIntentContent feature="user-management" />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 lg:p-12 border border-rose-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Take Control of Platform Access
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              See how Kindora helps administrators manage users, assign roles,
              and control access — so your team always has exactly the right
              level of access.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300"
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
