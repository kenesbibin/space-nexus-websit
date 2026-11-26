import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to Add Users in Kindora | Step-by-Step Guide",
  description:
    "Learn how to add users in Kindora step by step — invite team members, assign roles and permissions, and get your nonprofit team set up in minutes. No consultants required.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/how-to-add-users",
  },
  openGraph: {
    title: "How to Add Users in Kindora | Step-by-Step Guide",
    description:
      "Step-by-step guide to adding users in Kindora: invite team members, assign roles and permissions, and get your nonprofit team working in one platform.",
    url: "https://spacenexus.net/kindora/how-to-add-users",
    siteName: "Kindora",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora/og-card.png",
        width: 1200,
        height: 630,
        alt: "How to Add Users in Kindora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Add Users in Kindora | Step-by-Step Guide",
    description:
      "Step-by-step guide to adding users in Kindora: invite team members, assign roles and permissions, and get your nonprofit team set up in minutes.",
    images: ["https://spacenexus.net/kindora/og-card.png"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Add Users in Kindora",
  description:
    "A step-by-step guide to adding team members as users in Kindora, the all-in-one nonprofit management platform.",
  totalTime: "PT10M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Log in to your Kindora account",
      text: "Sign in to Kindora with your administrator account. Only an admin (Owner or Admin role) can invite and manage users.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Open the People or Users module",
      text: "From the left navigation, open the People (or User Management) module where your team and their access are managed.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Click 'Add User' or 'Invite'",
      text: "Click the Add User / Invite button to open the invite form for a new team member.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Enter the user's details",
      text: "Enter the person's name and email address. Their email is used for the invitation and login.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Assign a role and permissions",
      text: "Choose the role that fits how they should access Kindora — e.g. Admin, Staff, or a limited view-only role — and set the modules and permissions they need.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Send the invitation and save",
      text: "Click Send Invitation. The user receives an email to set up their password and start using Kindora. Save your changes before leaving the module.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I add users in Kindora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As an admin, open the People or User Management module, click Add User/Invite, enter the person's name and email, assign their role and permissions, then send the invitation.",
      },
    },
    {
      "@type": "Question",
      name: "Who can add users in Kindora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only users with an Owner or Admin role can add and manage users in Kindora.",
      },
    },
    {
      "@type": "Question",
      name: "Can I set different permissions for each user in Kindora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. When you add a user you can assign a role and choose which modules and permissions that team member can access.",
      },
    },
  ],
};

const steps = [
  {
    title: "Log in to your Kindora account",
    body: "Sign in with your administrator account. Inviting users requires an Owner or Admin role.",
  },
  {
    title: "Open the People or Users module",
    body: "In the left navigation, open the People (or User Management) module where team access is managed.",
  },
  {
    title: "Click 'Add User' or 'Invite'",
    body: "Select the Add User / Invite button to open the invite form for a new team member.",
  },
  {
    title: "Enter the user's details",
    body: "Add the person's name and email address. Their email is used for the invitation and login.",
  },
  {
    title: "Assign a role and permissions",
    body: "Pick the role that fits their access — Admin, Staff, or a limited view-only role — and set the modules and permissions they need.",
  },
  {
    title: "Send the invitation and save",
    body: "Click Send Invitation. The user gets an email to set up their password, then they can sign in to Kindora.",
  },
];

const faqs = [
  {
    q: "How do I add users in Kindora?",
    a: "As an admin, open the People or User Management module, click Add User/Invite, enter the person's name and email, assign their role and permissions, then send the invitation.",
  },
  {
    q: "Who can add users in Kindora?",
    a: "Only users with an Owner or Admin role can add and manage users in Kindora.",
  },
  {
    q: "Can I set different permissions for each user in Kindora?",
    a: "Yes. When you add a user you can assign a role and choose which modules and permissions that team member can access.",
  },
];

export default function HowToAddUsersPage() {
  return (
    <>
      <Script id="howto-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-[#f8f9fa]">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50/50" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 text-sm font-medium text-[#2563eb] mb-6">
              Help Center
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              How to Add Users in Kindora
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Adding team members to Kindora takes just a few minutes. Here&apos;s the step-by-step process to invite users,
              assign roles, and set the right permissions — no consultants required.
            </p>
          </div>
        </div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <ol className="space-y-6">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#7c3aed] text-white font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                    <span className="text-base font-semibold text-gray-900">{faq.q}</span>
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-1">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center py-6 border-t border-gray-100">
            <p className="text-gray-600 mb-4">Ready to get the rest of your team set up?</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/kindora/demo" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg transition-all">
                Request a Demo
              </Link>
              <Link href="/kindora/pricing" className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 rounded-full transition-all">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
