import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { kindoraOrganizationId } from "../../components/kindora-entity";

const roles: Record<
  string,
  {
    title: string;
    experience: string;
    employmentType: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    niceToHave: string[];
  }
> = {
  "full-stack-developer": {
    title: "Full-Stack Developer (MERN)",
    experience: "Freshers Welcome",
    employmentType: "FULL_TIME",
    description:
      "Build scalable web applications for nonprofit impact using React, Next.js, Node.js, and MongoDB. Work alongside senior engineers to ship features that help nonprofits manage donors, grants, programs, and finances.",
    responsibilities: [
      "Build and maintain responsive web applications using React, Next.js, and Tailwind CSS",
      "Develop REST and GraphQL APIs with Node.js, NestJS, and Express",
      "Design and optimize MongoDB schemas and queries",
      "Collaborate with product and design to ship user-friendly nonprofit features",
      "Write clean, tested, and well-documented code",
      "Participate in code reviews and team stand-ups",
    ],
    requirements: [
      "Strong fundamentals in JavaScript, HTML, and CSS",
      "Experience with React and a Node.js backend (or strong academic projects demonstrating the same)",
      "Familiarity with MongoDB or another document database",
      "Understanding of REST APIs and basic database design",
      "Good communication skills and a collaborative mindset",
    ],
    niceToHave: [
      "Portfolio or open-source contributions",
      "Experience with Next.js or NestJS",
      "Familiarity with nonprofit or social-impact work",
    ],
  },
  "senior-full-stack-developer": {
    title: "Senior Full-Stack Developer",
    experience: "5 to 10 Years Experience",
    employmentType: "FULL_TIME",
    description:
      "Lead development of Kindora's nonprofit management platform. Architect scalable features, mentor engineers, and own delivery across the MERN stack and related technologies.",
    responsibilities: [
      "Architect and lead implementation of major product features end-to-end",
      "Define technical standards for React, Next.js, Node.js, and MongoDB codebases",
      "Mentor junior and mid-level engineers through code review and pairing",
      "Collaborate with product management on roadmap and technical planning",
      "Ensure performance, security, and reliability across the platform",
      "Drive best practices in testing, CI/CD, and observability",
    ],
    requirements: [
      "5+ years building production web applications with the MERN stack",
      "Expertise in React, Next.js, Node.js, and MongoDB",
      "Experience designing distributed systems and REST/GraphQL APIs",
      "Strong understanding of authentication, security, and data modeling",
      "Proven ability to mentor engineers and lead technical initiatives",
      "Excellent communication and stakeholder management skills",
    ],
    niceToHave: [
      "Experience with NestJS or TypeScript at scale",
      "Background in SaaS platforms for nonprofits or mission-driven orgs",
      "Experience with AI/LLM-powered features",
    ],
  },
  "python-developer-ai": {
    title: "Python Developer (AI & Automation)",
    experience: "3 to 5 Years Experience",
    employmentType: "FULL_TIME",
    description:
      "Design AI-powered donor insights, grant automation, and reporting pipelines for nonprofits using Python, RAG pipelines, and LLM optimization. Build tools that help nonprofit teams spend less time on admin.",
    responsibilities: [
      "Build and optimize Python-based AI services and automation pipelines",
      "Implement RAG systems that surface donor, grant, and program insights",
      "Work with LLMs and vector databases to power intelligent search and reporting",
      "Integrate AI features into the Kindora MERN platform",
      "Write performant, testable Python and document system architecture",
      "Monitor and tune model quality, latency, and cost",
    ],
    requirements: [
      "3-5 years of production Python experience",
      "Hands-on experience with RAG pipelines, embeddings, and vector databases",
      "Familiarity with LLM APIs and prompt engineering",
      "Solid understanding of APIs, async code, and data pipelines",
      "Strong problem-solving and communication skills",
    ],
    niceToHave: [
      "Experience with Neo4j or graph databases",
      "Experience with vLLM or model serving optimization",
      "Background in nonprofit, social impact, or analytics products",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(roles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const role = roles[slug];
  if (!role) {
    return { title: "Position Not Found" };
  }
  return {
    title: `${role.title} at Kindora`,
    description: `${role.description}`,
    alternates: {
      canonical: `/kindora/careers/${slug}`,
    },
    openGraph: {
      title: `${role.title} at Kindora`,
      description: role.description,
      url: `https://spacenexus.net/kindora/careers/${slug}`,
      siteName: "Kindora",
      type: "website",
      images: [
        {
          url: "https://spacenexus.net/kindora/og-card.png",
          width: 1200,
          height: 630,
          alt: `${role.title} — Kindora Careers`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${role.title} at Kindora`,
      description: role.description,
      images: ["https://spacenexus.net/kindora/og-card.png"],
    },
  };
}

export default async function RoleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = roles[slug];
  if (!role) {
    return (
      <main className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Position not found</h1>
          <p className="text-gray-600 mb-8">This role may have been filled or no longer exists.</p>
          <Link
            href="/kindora/careers"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300"
          >
            View all openings
          </Link>
        </div>
      </main>
    );
  }

  const jobSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.description,
    datePosted: "2026-09-05",
    validThrough: "2026-12-31",
    employmentType: role.employmentType,
    hiringOrganization: { "@id": kindoraOrganizationId },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: "Remote" },
    },
    experienceRequirements: {
      "@type": "OccupationalExperienceRequirements",
      monthsOfExperience: role.experience,
    },
  };

  return (
    <>
      <Script id={`job-jsonld-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }} />
      <main className="min-h-screen bg-[#f8f9fa]">
        {/* Header band */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
            <Link href="/kindora/careers" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-6">
              <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All openings
            </Link>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold">{role.experience}</span>
              {role.employmentType === "FULL_TIME" && (
                <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold">Full-time</span>
              )}
              <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold">Remote</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{role.title} at Kindora</h1>
            <p className="text-blue-100 leading-relaxed max-w-2xl">{role.description}</p>
          </div>
        </div>

        {/* Details */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What you&apos;ll do</h2>
            <ul className="space-y-3">
              {role.responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-[#2563eb] to-[#7c3aed] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What we&apos;re looking for</h2>
            <ul className="space-y-3">
              {role.requirements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-[#2563eb] to-[#7c3aed] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {role.niceToHave.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Bonus points</h2>
              <ul className="space-y-3">
                {role.niceToHave.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-300 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Apply CTA */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to apply?</h2>
            <p className="text-gray-600 mb-6">
              Send your resume and a short note about why you&apos;re excited to build nonprofit software with us.
            </p>
            <a
              href="mailto:careers@spacenexus.net?subject=Application: Full-Stack Developer"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
            >
              Apply for this role
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
