import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Cloud-Based Nonprofit CRM | Cloud Nonprofit Software",
  description:
    "Kindora cloud-based nonprofit CRM gives your team access from anywhere — donors, fundraising, grants, and volunteers in one secure cloud platform.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/cloud-based-nonprofit-crm",
  },
  openGraph: {
    title: "Cloud-Based Nonprofit CRM",
    description: "Access your nonprofit CRM from anywhere with Kindora's cloud-based platform.",
    url: "https://spacenexus.net/kindora/cloud-based-nonprofit-crm",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Cloud-Based Nonprofit CRM" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud-Based Nonprofit CRM",
    description: "Access your nonprofit CRM from anywhere with Kindora's cloud-based platform.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "cloud-based nonprofit CRM",
    "cloud nonprofit CRM",
    "nonprofit CRM cloud",
    "cloud nonprofit software",
    "cloud-based donor management",
    "cloud donor CRM",
    "nonprofit cloud platform",
    "cloud charity software",
    "cloud NGO CRM",
    "online nonprofit CRM",
    "SaaS nonprofit CRM",
    "cloud-based fundraising software",
    "cloud volunteer management",
    "cloud grant management",
    "best cloud nonprofit CRM",
  ],
};

const benefits = [
  {
    metric: "100%",
    title: "Access From Anywhere",
    description: "Work from the office, home, or the field. Your CRM is accessible from any device with an internet connection — no downloads, no VPN.",
  },
  {
    metric: "Zero",
    title: "IT Infrastructure Needed",
    description: "No servers to buy, no software to install, no maintenance to worry about. Kindora handles all the technical overhead.",
  },
  {
    metric: "99.9%",
    title: "Uptime Guarantee",
    description: "Enterprise-grade hosting with automatic backups, disaster recovery, and security updates — your data is always safe and available.",
  },
  {
    metric: "Real-Time",
    title: "Automatic Updates",
    description: "Always on the latest version with new features, security patches, and improvements — no manual upgrades required.",
  },
];

const features = [
  {
    title: "Cloud Hosting",
    description: "Secure, scalable cloud infrastructure with automatic backups and disaster recovery built in.",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
  {
    title: "Mobile Access",
    description: "Full CRM functionality on phones and tablets — update records, send emails, and track donors from anywhere.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Multi-User Collaboration",
    description: "Unlimited users can access the CRM simultaneously with role-based permissions and real-time sync.",
    icon: "M12 4.354a4 4 0 110 7.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Data Security",
    description: "SOC 2 compliant, encrypted data, role-based access control, and audit logs protect your sensitive information.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Automatic Backups",
    description: "Daily automated backups with point-in-time recovery. Your data is never lost.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "API Integrations",
    description: "Connect Kindora to your existing tools with our open API and pre-built integrations.",
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Real-Time Sync",
    description: "Every change syncs instantly across all devices and users — no manual refresh needed.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "No Installation Required",
    description: "Open your browser, log in, and start working. Zero installation, zero maintenance, zero downtime.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const comparisonData = [
  { feature: "Cloud-Based Access", kindora: true, blackbaud: true, salesforce: true, bloomerang: true },
  { feature: "Mobile App", kindora: true, blackbaud: false, salesforce: true, bloomerang: false },
  { feature: "Multi-User Real-Time Sync", kindora: true, blackbaud: false, salesforce: true, bloomerang: false },
  { feature: "SOC 2 Compliant", kindora: true, blackbaud: true, salesforce: true, bloomerang: true },
  { feature: "Automatic Backups", kindora: true, blackbaud: true, salesforce: true, bloomerang: true },
  { feature: "No IT Staff Needed", kindora: true, blackbaud: false, salesforce: false, bloomerang: true },
  { feature: "All-In-One Platform", kindora: true, blackbaud: true, salesforce: false, bloomerang: false },
  { feature: "Affordable Pricing", kindora: true, blackbaud: false, salesforce: false, bloomerang: true },
];

const faqs = [
  {
    question: "What is a cloud-based nonprofit CRM?",
    answer:
      "A cloud-based nonprofit CRM is a donor and operations management system hosted on secure cloud servers instead of local computers. It lets your team access the CRM from any device with an internet connection — no installation, no servers to maintain, and automatic updates.",
  },
  {
    question: "How is Kindora different from on-premise nonprofit software?",
    answer:
      "On-premise software requires you to buy servers, install software on every computer, manage backups, and handle updates. Kindora's cloud-based CRM runs in your browser — zero installation, zero maintenance, automatic updates, and accessible from anywhere.",
  },
  {
    question: "Is my data secure in a cloud CRM?",
    answer:
      "Yes. Kindora uses SOC 2 compliant infrastructure with encrypted data, role-based access control, and audit logs. Your data is backed up daily with disaster recovery built in. Cloud security is typically stronger than on-premise setups for most nonprofits.",
  },
  {
    question: "Can I access Kindora on my phone?",
    answer:
      "Yes. Kindora is fully responsive and works on any device — phones, tablets, laptops, and desktops. You can update donor records, send emails, and check dashboards from anywhere.",
  },
  {
    question: "What if I lose internet connection?",
    answer:
      "Kindora requires an internet connection to access cloud data. However, you can view previously loaded data and draft updates that sync when your connection returns. Most nonprofits find connectivity is reliable enough that this is rarely an issue.",
  },
];

const platformStats = [
  { metric: "100%", label: "Access from anywhere" },
  { metric: "Zero", label: "IT infrastructure" },
  { metric: "99.9%", label: "Uptime guarantee" },
  { metric: "Real-Time", label: "Automatic updates" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Cloud-Based Nonprofit CRM",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Cloud-based nonprofit CRM — access donors, fundraising, grants, and volunteers from anywhere.",
      url: "https://spacenexus.net/kindora/cloud-based-nonprofit-crm",
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

export default function CloudBasedNonprofitCrmPage() {
  return (
    <>
      <Script id="cloud-based-nonprofit-crm-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-blue-600">Cloud CRM</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Cloud-Based Nonprofit CRM That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">Works Anywhere</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Access your CRM from the office, home, or the field. No servers, no installation, no IT headaches — just log in and go.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-cyan-600 hover:to-blue-700 rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Try for Free
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-full transition-all duration-300"
                >
                  Request a Demo
                </Link>
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

            {/* Visual: Cloud CRM */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-bold text-gray-900">Cloud CRM</h3>
                  <span className="text-xs px-3 py-1 bg-green-500/10 text-green-600 rounded-full font-semibold">Online</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <div>
                    <p className="text-white text-sm font-semibold">Connected to Cloud</p>
                    <p className="text-blue-100 text-xs">All data synced and secure</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Uptime", value: "99.9%" },
                    { label: "Users", value: "Unlimited" },
                    { label: "Storage", value: "Included" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-sm font-bold text-gray-900">{stat.value}</p>
                      <p className="text-[10px] text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Data encryption", value: "Active" },
                    { label: "Automatic backups", value: "Daily" },
                    { label: "Mobile access", value: "Enabled" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="text-xs text-gray-600">{item.label}</span>
                      <span className="text-[10px] text-green-600 font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platformStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">{stat.metric}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">Why Cloud</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Leave Servers Behind</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              On-premise software ties you to one computer. Cloud-based CRM lets your entire team work from anywhere, on any device.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white text-xl font-bold mb-5">
                  {benefit.metric}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">Cloud Features</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Built for the Cloud</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From hosting to security to mobile access, Kindora is designed for modern cloud-first nonprofits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">How We Compare</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kindora vs Other Cloud CRMs</h2>
            <p className="text-lg text-gray-600">See why nonprofits choose Kindora over other cloud-based solutions.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Feature</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-blue-600">Kindora</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Blackbaud</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Salesforce</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-500">Bloomerang</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className={i < comparisonData.length - 1 ? "border-b border-gray-50" : ""}>
                      <td className="py-4 px-6 text-sm text-gray-900 font-medium">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.kindora === "boolean" ? (
                          row.kindora ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.blackbaud === "boolean" ? (
                          row.blackbaud ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.salesforce === "boolean" ? (
                          row.salesforce ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.bloomerang === "boolean" ? (
                          row.bloomerang ? <span className="text-green-500 text-lg">&#10003;</span> : <span className="text-red-400 text-lg">&#10007;</span>
                        ) : (
                          <span className="text-yellow-500 text-sm">Partial</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-semibold mb-4">FAQs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of nonprofits replacing outdated on-premise software with modern cloud CRM.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Free Starter Plan
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-full transition-all duration-300"
            >
              Request a Demo
            </Link>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </>
  );
}
