import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
  title: "Volunteer Hours Tracking Software | Hour Logging",
  description:
    "Kindora volunteer hours tracking software lets nonprofits log, track, and report volunteer hours with clock-in/out, mobile check-in, and auto-calculated totals — perfect for grant reporting and impact measurement.",
  alternates: {
    canonical: "https://spacenexus.net/kindora/volunteer-hours-tracking-software",
  },
  openGraph: {
    title: "Volunteer Hours Tracking Software",
    description: "Track volunteer hours with clock-in/out, mobile check-in, and auto-calculated totals for reporting.",
    url: "https://spacenexus.net/kindora/volunteer-hours-tracking-software",
    siteName: "Kindora by Space Nexus",
    type: "website",
    images: [{ url: "https://spacenexus.net/kindora-og.png", width: 1200, height: 630, alt: "Kindora Volunteer Hours Tracking Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volunteer Hours Tracking Software",
    description: "Log and report volunteer hours with clock-in/out, mobile check-in, and auto-calculated totals.",
    images: ["https://spacenexus.net/kindora-og.png"],
  },
  keywords: [
    "volunteer hours tracking",
    "volunteer hour log software",
    "volunteer time tracking",
    "volunteer hours reporting",
    "nonprofit hour tracking",
    "volunteer clock in out",
    "volunteer hour tracker",
    "volunteer timesheet software",
    "volunteer hours database",
    "volunteer time log",
    "volunteer hour management",
    "volunteer tracking system",
    "volunteer hours report",
    "volunteer attendance tracking",
    "volunteer hour calculator",
  ],
};

const hoursFeatures = [
  {
    title: "Clock-In/Out",
    description: "Volunteers clock in and out via mobile, tablet, or kiosk. Auto-calculate total hours per shift.",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Mobile Check-In",
    description: "Volunteers check in from their phone using QR codes or geo-location. Perfect for off-site shifts.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Manual Entry",
    description: "Staff can log hours manually for volunteers who forget to check in or for past shifts.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
  {
    title: "Shift-Based Logging",
    description: "Hours are automatically associated with scheduled shifts. See who worked, when, and for how long.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Auto Calculations",
    description: "Automatic total hour calculations per volunteer, per shift, per week, month, and year.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Hour Reports",
    description: "Generate reports on total hours, hours by volunteer, by program, by date range — exportable for grants.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Program Tracking",
    description: "Attribute hours to specific programs, grants, or activities. Perfect for grant reporting compliance.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "Volunteer Portal",
    description: "Volunteers can view their own hour history, cumulative totals, and impact on their personal dashboard.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
];

const stats = [
  { metric: "Mobile", label: "Check-in & out" },
  { metric: "Auto", label: "Hour calculations" },
  { metric: "Per-program", label: "Hour attribution" },
  { metric: "Exportable", label: "Grant-ready reports" },
];

const faqs = [
  {
    question: "What is volunteer hours tracking software?",
    answer:
      "Volunteer hours tracking software helps nonprofits log, track, and report volunteer time. It supports clock-in/out, mobile check-in, manual entry, and automatic hour calculations for reporting and grant compliance.",
  },
  {
    question: "How do volunteers log their hours?",
    answer:
      "Volunteers can clock in and out via mobile app, tablet kiosk, or QR code check-in. Staff can also enter hours manually for past shifts or when volunteers forget to check in.",
  },
  {
    question: "Can Kindora track hours by program or grant?",
    answer:
      "Yes. Hours can be attributed to specific programs, grants, or activities. This makes it easy to generate program-specific hour reports for grant reporting and compliance.",
  },
  {
    question: "Does Kindora calculate total hours automatically?",
    answer:
      "Yes. Kindora automatically calculates total hours per volunteer, per shift, per week, month, and year. No manual math required.",
  },
  {
    question: "Can volunteers see their own hours?",
    answer:
      "Yes. Volunteers have access to a personal dashboard where they can view their hour history, cumulative totals, and the impact of their contributions.",
  },
  {
    question: "Does Kindora support hour reporting for grants?",
    answer:
      "Yes. Kindora generates exportable hour reports by volunteer, program, date range, and activity — perfect for grant reporting and board presentations.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Kindora Volunteer Hours Tracking Software",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Volunteer hours tracking software for nonprofits — clock-in/out, mobile check-in, auto calculations, and grant-ready reports.",
      url: "https://spacenexus.net/kindora/volunteer-hours-tracking-software",
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

export default function VolunteerHoursTrackingSoftwarePage() {
  return (
    <>
      <Script id="volunteer-hours-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lime-50/50 via-white to-white" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-lime-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-green-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse mr-2" />
                <span className="text-sm font-medium text-lime-600">Volunteer Hours Tracking Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                Track Every{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-600">Volunteer Hour</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Log, track, and report volunteer hours with ease. Kindora volunteer hours tracking software makes it simple to capture time, calculate totals, and generate reports for grants and impact measurement.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-lime-500 to-green-600 hover:from-green-600 hover:to-lime-700 rounded-full shadow-xl shadow-lime-500/30 hover:shadow-lime-500/50 transition-all duration-300 hover:-translate-y-0.5"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-lime-50 to-green-50 rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-green-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Hours Dashboard</span>
                  </div>
                  <span className="px-3 py-1 bg-lime-100 text-lime-700 text-xs font-medium rounded-full">
                    {new Date().getFullYear()}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Total Hours", value: "6,847" },
                    { label: "Active Volunteers", value: "156" },
                    { label: "Avg Hrs/Vol", value: "43.9" },
                  ].map((s) => (
                    <div key={s.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <p className="text-lg font-bold text-gray-900">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Recent Hours Logged</p>
                  {[
                    { name: "Sarah M.", shift: "Food Bank", hours: "4.0 hrs", date: "Today" },
                    { name: "James K.", shift: "Mentoring", hours: "2.5 hrs", date: "Yesterday" },
                    { name: "Lisa R.", shift: "Admin", hours: "3.0 hrs", date: "Yesterday" },
                  ].map((entry) => (
                    <div key={entry.name} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-lime-400" />
                        <div>
                          <span className="text-sm font-semibold text-gray-900">{entry.name}</span>
                          <span className="text-xs text-gray-400 ml-2">{entry.shift}</span>
                        </div>
                      </div>
                      <div className="text-right text-xs">
                        <span className="text-gray-500">{entry.hours}</span>
                        <span className="text-gray-400 ml-2">{entry.date}</span>
                      </div>
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
                <div className="text-3xl lg:text-4xl font-black text-lime-500 mb-1">{stat.metric}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-lime-500 uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Effortless hour tracking</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Log, calculate, and report volunteer hours without the spreadsheets.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hoursFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-lime-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-lime-500/10 flex items-center justify-center mb-4 group-hover:bg-lime-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-lime-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-lime-500 uppercase tracking-wider mb-3">Workflow</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From clock-in to impact report</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A simple hour tracking workflow.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Check In", description: "Volunteers clock in via mobile, kiosk, or QR code." },
              { step: "02", title: "Work", description: "Hours are tracked against their scheduled shift or program." },
              { step: "03", title: "Check Out", description: "Clock out and hours are auto-calculated and saved." },
              { step: "04", title: "Report", description: "Generate hour reports by volunteer, program, or date range." },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-lime-500 text-white text-xl font-black flex items-center justify-center mx-auto mb-4">
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
            <p className="text-sm font-semibold text-lime-500 uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about volunteer hours tracking software.</p>
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
            Ready to track volunteer hours effortlessly?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get started with Kindora volunteer hours tracking software today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kindora/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-lime-500 to-green-600 hover:from-green-600 hover:to-lime-700 rounded-full shadow-xl shadow-lime-500/30 hover:shadow-lime-500/50 transition-all duration-300"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kindora/pricing"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 hover:text-lime-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8">
            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-lime-500 bg-lime-50 hover:bg-lime-100 rounded-full transition-all duration-300"
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
