import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Security & Compliance Features | SpaceNexus",
  description: "SOC 2 Type II, ISO 27001, GDPR, HIPAA, SEC 17a-4. Enterprise-grade security for sensitive deal documents.",
  keywords: [
    "VDR security",
    "SOC 2 data room",
    "ISO 27001 VDR",
    "HIPAA compliant data room",
    "secure virtual data room",
    "data room compliance",
  ],
  alternates: {
    canonical: "https://spacenexus.net/features/security-compliance",
  },
  openGraph: {
    title: "Security & Compliance Features | SpaceNexus",
    description:
      "SOC 2 Type II, ISO 27001, GDPR, HIPAA, SEC 17a-4. Enterprise-grade security for sensiti...",
    url: "https://spacenexus.net/features/security-compliance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security & Compliance — SOC 2, SEC & FINRA Compliant | SpaceNexus",
    description:
      "MFA, watermarking, encrypted storage, session controls, and US regulatory compliance (SEC, FINRA, CCPA) for secure M&A data rooms.",
  },
};

const features = [
  {
    title: "Security Score Monitoring",
    description:
      "Monitor your overall security score and system protection status at a glance. Identify gaps in your security posture and take action before they become vulnerabilities in an active transaction.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Multi-Factor Authentication",
    description:
      "Enable MFA for all users to add a critical layer of access security. Ensure that only verified individuals can access the data room — even if login credentials are compromised.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
      </svg>
    ),
  },
  {
    title: "Document Watermarking",
    description:
      "Apply dynamic watermarks to documents to protect sensitive information and deter unauthorized distribution. Watermarks can include viewer identity, timestamp, and access context — visible or invisible.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Session Timeout Controls",
    description:
      "Configure session timeout settings to prevent unauthorized access from unattended sessions. Set inactivity thresholds appropriate for your organization's security requirements.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Encrypted Data Storage",
    description:
      "Maintain encrypted data storage and secure document handling throughout the deal lifecycle. All documents and transaction data are protected at rest with enterprise-grade encryption standards.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Regulatory Compliance",
    description:
      "Support compliance with SOC 2 Type II, ISO 27001, GDPR, and HIPAA. Space Nexus is built to meet the standards required for M&A transactions, financial services, and regulated industries.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const secCompFaqs = [
  {
    question: "What compliance certifications does SpaceNexus hold?",
    answer: "SpaceNexus holds SOC 2 Type II certification, ISO 27001 accreditation, and is fully GDPR and UK GDPR compliant. We also support SEC Rule 17a-4, FINRA requirements, FCA regulatory standards, CCPA, and HIPAA-compliant configurations for healthcare transactions.",
  },
  {
    question: "How does SpaceNexus handle document watermarking?",
    answer: "SpaceNexus applies dynamic watermarks that display the viewer's name, email, IP address, and access timestamp on every document page. Watermarks are rendered server-side and cannot be removed — deterring unauthorized sharing and providing forensic traceability.",
  },
  {
    question: "Can SpaceNexus generate compliance audit reports?",
    answer: "Yes. SpaceNexus provides immutable, timestamped audit logs tracking every user action — document views, downloads, prints, permission changes, and login events. These logs can be exported as compliance reports for SEC filings, litigation holds, and regulatory reviews.",
  },
  {
    question: "Does SpaceNexus support IP whitelisting and geo-restrictions?",
    answer: "Yes. Enterprise plans include IP whitelisting, geo-based access restrictions, and device management policies. You can restrict data room access to specific office networks, countries, or approved devices for maximum security.",
  },
];

const secCompFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: secCompFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function SecurityCompliancePage() {
  return (
    <main className="pt-20 lg:pt-24">
      <Script
        id="sec-comp-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(secCompFaqSchema) }}
      />
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
              { "@type": "ListItem", position: 2, name: "Features", item: "https://spacenexus.net/features" },
              { "@type": "ListItem", position: 3, name: "Security & Compliance", item: "https://spacenexus.net/features/security-compliance" },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <Link
                href="/features"
                className="inline-flex mr-7 items-center text-sm text-gray-600 hover:text-[#2563eb] mb-6 transition-colors"
              >
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Features
              </Link>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
                Enterprise Security
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Security & Compliance
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The Security & Compliance section provides enterprise-level security controls to protect
                sensitive deal data within the platform. It ensures that documents, user access, and
                transaction activities meet strict security and regulatory standards.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Monitor overall security score and system protection status",
                  "Enable Multi-Factor Authentication (MFA) for secure user access",
                  "Apply document watermarking to protect sensitive information",
                  "Configure session timeout settings to prevent unauthorized access",
                  "Maintain encrypted data storage and secure document handling",
                  "Support compliance with SOC 2 Type II, ISO 27001, GDPR, and HIPAA",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/demo"
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Request a Demo
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right: Screenshot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-red-500/10 blur-2xl rounded-3xl -z-10" />
              <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-600 ml-3">
                  app.spacenexus.net / security
                </div>
              </div>
              <div className="border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                <Image
                  src="/spacenexus/screenshots/security%20complince.jpeg"
                  alt="SpaceNexus VDR Security & Compliance — enterprise security controls dashboard"
                  width={1578}
                  height={713}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
              Enterprise Security Built for High-Stakes Transactions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From MFA to encrypted storage and regulatory compliance — Space Nexus provides
              the security infrastructure that M&A teams and regulated industries demand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Regulatory Compliance Standards</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Space Nexus is built to meet the requirements of the world&apos;s most demanding security and privacy regulations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "SOC 2 Type II", description: "Security & availability controls", color: "bg-red-50 border-red-100 text-red-700" },
              { label: "ISO 27001", description: "Information security management", color: "bg-orange-50 border-orange-100 text-orange-700" },
              { label: "GDPR", description: "EU data privacy regulation", color: "bg-blue-50 border-blue-100 text-blue-700" },
              { label: "HIPAA", description: "Healthcare data protection", color: "bg-green-50 border-green-100 text-green-700" },
            ].map((standard) => (
              <div key={standard.label} className={`rounded-xl border p-5 text-center ${standard.color}`}>
                <p className="font-bold text-lg mb-1">{standard.label}</p>
                <p className="text-xs opacity-80">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security That Protects Every Layer of Your Deal
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Space Nexus enforces security at access, document, and data levels — so your
              team and your counterparties can transact with full confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Secure Access",
                description:
                  "Enable MFA and configure session timeouts to protect all entry points. Ensure only authorized users access the platform with verified, time-limited sessions.",
              },
              {
                step: "02",
                title: "Protect Documents",
                description:
                  "Apply watermarking to documents before sharing. Maintain encrypted storage for all files so sensitive deal information is protected both in transit and at rest.",
              },
              {
                step: "03",
                title: "Monitor & Comply",
                description:
                  "Track your security score, review system protection status, and maintain compliance with SOC 2, ISO 27001, GDPR, and HIPAA requirements for regulated industries.",
              },
            ].map((step) => (
              <div key={step.step} className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{step.step.replace("0", "")}</span>
                </div>
                <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">
                  Step {step.step}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-4">
            Explore More Features
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Users & Permissions — Access Control", href: "/features/users-permissions" },
              { title: "Secure Data Room — Document Management", href: "/features/data-room" },
              { title: "Reports — Audit Trails & Compliance Logs", href: "/features/reports" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between p-5 bg-[#f8f9fa] border border-gray-200 rounded-xl hover:border-red-300 hover:shadow-md transition-all duration-200"
              >
                <p className="text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                  {link.title}
                </p>
                <svg className="w-4 h-4 text-gray-600 group-hover:text-red-600 transition-colors shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security &amp; Compliance FAQ</h2>
            <p className="text-lg text-gray-600">Common questions about SpaceNexus certifications, encryption, and compliance.</p>
          </div>
          <div className="space-y-4">
            {secCompFaqs.map((faq, i) => (
              <div key={i} className="bg-[#f8f9fa] rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl p-8 lg:p-12 border border-red-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              See Enterprise Security in Action
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Schedule a personalized demo and see how Space Nexus protects your deal data
              with MFA, encryption, watermarking, and full regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Request a Demo
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors"
              >
                View All Features
              </Link>
            </div>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div></div>
      </section>
    </main>
  );
}
