import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { kindoraOrganizationId } from "../components/kindora-entity";

export const metadata: Metadata = {
  title: "Careers at Kindora — Join the Team Building Nonprofit Software",
  description:
    "Join Kindora and help build the all-in-one nonprofit management platform used by NGOs, charities, and community organizations. Explore remote roles in engineering, product, and customer success.",
  alternates: {
    canonical: "/kindora/careers",
  },
  openGraph: {
    title: "Careers at Kindora — Join Our Team",
    description:
      "Build technology that helps nonprofits spend less time on admin and more time on their mission. Explore open roles at Kindora.",
    url: "https://spacenexus.net/kindora/careers",
    siteName: "Kindora",
    type: "website",
    images: [
      {
        url: "https://spacenexus.net/kindora/og-card.png",
        width: 1200,
        height: 630,
        alt: "Careers at Kindora — All-in-One Nonprofit Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Kindora — Join Our Team",
    description:
      "Build technology that helps nonprofits spend less time on admin and more time on their mission.",
    images: ["https://spacenexus.net/kindora/og-card.png"],
  },
};

const openRoles = [
  {
    title: "Full-Stack Developer (MERN)",
    experience: "Freshers Welcome",
    description:
      "Build scalable web applications for nonprofit impact using React, Next.js, Node.js, and MongoDB.",
    tags: ["Full-time", "Remote"],
    slug: "full-stack-developer",
  },
  {
    title: "Senior Full-Stack Developer",
    experience: "5 to 10 Years Experience",
    description:
      "Lead development of Kindora's nonprofit management platform with expertise in the MERN stack and related technologies.",
    tags: ["Full-time, Part-time", "Remote"],
    slug: "senior-full-stack-developer",
  },
  {
    title: "Python Developer (AI & Automation)",
    experience: "3 to 5 Years Experience",
    description:
      "Design AI-powered donor insights, grant automation, and reporting pipelines using Python, RAG, and LLM optimization.",
    tags: ["Full-time", "Remote"],
    slug: "python-developer-ai",
  },
];

const benefits = [
  {
    title: "Mission-driven work",
    description:
      "Every line of code helps nonprofits deliver more impact — donors funded, grants won, programs delivered.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Remote-first team",
    description:
      "Work from anywhere. We collaborate across time zones with async-first communication and flexible hours.",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
  {
    title: "Modern stack",
    description:
      "Build with Next.js, React, Node.js, MongoDB, and AI tooling — modern technologies that keep your skills sharp.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
  {
    title: "Growth & learning",
    description:
      "Opportunities to mentor, own products, publish technical content, and grow into leadership as we scale.",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
  },
];

export default function CareersPage() {
  const careersSchema = {
    "@context": "https://schema.org",
    "@graph": openRoles.map((role) => ({
      "@type": "JobPosting",
      title: role.title,
      hiringOrganization: { "@id": kindoraOrganizationId },
      employmentType: role.tags[0],
      jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Remote" } },
      description: role.description,
    })),
  };

  return (
    <>
      <Script id="careers-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }} />
      <main className="min-h-screen bg-[#f8f9fa]">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50/50" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 text-sm font-medium text-[#2563eb] mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Careers at Kindora
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Join our team and help shape the future of{" "}
                <span className="bg-gradient-to-r from-[#2563eb] to-[#7c3aed] bg-clip-text text-transparent">
                  nonprofit technology
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Kindora empowers NGOs, charities, and community organizations to manage donors, grants,
                programs, and finances from one platform. We&apos;re looking for builders who care about mission-driven impact.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="#openings"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300"
                >
                  View Open Roles
                </Link>
                <a
                  href="mailto:careers@spacenexus.net"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#2563eb] bg-white border border-blue-200 hover:bg-blue-50 rounded-full transition-all duration-300"
                >
                  Send Us Your Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section id="openings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 scroll-mt-24">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-widest mb-2">
              Open Positions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Current openings at Kindora
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All roles are remote-friendly. We hire people who are excited to build software that makes
              nonprofit operations simpler.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {openRoles.map((role) => (
              <div
                key={role.slug}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="h-1.5 bg-gradient-to-r from-[#2563eb] to-[#7c3aed]" />
                <div className="flex flex-col flex-1 p-7">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#2563eb] text-xs font-semibold mb-4 self-start">
                    {role.experience}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{role.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{role.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {role.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link
                      href={`/kindora/careers/${role.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-[#2563eb] group-hover:text-[#1d4ed8] transition-colors"
                    >
                      View job details
                      <svg className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white border-t border-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-widest mb-2">
                Why Kindora
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What it&apos;s like to work with us</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#7c3aed] flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Send resume CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Don&apos;t see a position that fits your skills?
              </h2>
              <p className="text-blue-100 mb-8">
                We&apos;re always looking for great people. Send us your resume and we&apos;ll keep you in mind for future openings.
              </p>
              <a
                href="mailto:careers@spacenexus.net"
                className="inline-flex items-center px-8 py-4 text-sm font-semibold text-[#2563eb] bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all duration-300"
              >
                Send us your resume
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn more about Kindora</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore the platform you&apos;ll help build, or get in touch with our team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/kindora/about"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all duration-300"
              >
                About Kindora
              </Link>
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
