import type { Metadata } from "next";
import AnswerReadyBlock from "../components/AnswerReadyBlock";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Kindora — The Complete Operating System for Nonprofits",
  description:
    "Kindora is the all-in-one nonprofit management platform built to help NGOs, charities, and community organizations manage donors, grants, programs, finances, and volunteers from a single system.",
  alternates: {
    canonical: "/kindora/about",
  },
  openGraph: {
    title: "About Kindora — The Complete Operating System for Nonprofits",
    description:
      "Kindora is the all-in-one nonprofit management platform built to help NGOs, charities, and community organizations manage donors, grants, programs, finances, and volunteers from a single system.",
    url: "https://spacenexus.net/kindora/about",
    siteName: "Kindora by Space Nexus",
    type: "website",
  },
};

const evidenceFacts = [
  { value: "2022", label: "SpaceNexus founded", owner: "SpaceNexus Inc.", href: "/about", source: "Company timeline" },
  { value: "2024", label: "Kindora launched", owner: "SpaceNexus Inc.", href: "/about", source: "Company timeline" },
  { value: "4", label: "Access roles: Admin, Manager, Staff, Viewer", owner: "Product", href: "/kindora/features", source: "Features catalog" },
  { value: "5 / 25 / unlimited", label: "Team-member limits: Starter / Professional / Enterprise", owner: "Product", href: "/kindora/pricing", source: "Current plan details" },
];

const values = [
  {
    title: "Mission-first design",
    description:
      "Every feature is built to help nonprofits spend less time on administration and more time delivering impact. Kindora is designed around the real workflows of NGOs, charities, and community organizations.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "All-in-one simplicity",
    description:
      "Donor management, grant tracking, program delivery, financial reporting, volunteer coordination — one system instead of scattered spreadsheets and disconnected tools. Everything works together by default.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Accessible for every NGO",
    description:
      "Kindora offers a free Starter plan and custom-priced paid plans. Teams can review the public plan details before contacting sales.",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
  {
    title: "Built with transparency",
    description:
      "Clear pricing, export-ready reports, and full visibility into donor, grant, and program data. Nonprofits can demonstrate impact to funders and boards with confidence.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://spacenexus.net/kindora/about#about",
    name: "About Kindora",
    url: "https://spacenexus.net/kindora/about",
    about: { "@id": "https://spacenexus.net/kindora/#organization" },
  };

  return (
    <>
      <script id="about-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema).replace(/</g, "\\u003c") }} />
      <main className="min-h-screen bg-[#f8f9fa]">
        {/* Hero */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50/50" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 text-sm font-medium text-[#2563eb] mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                About Kindora
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                The Complete Operating System for{" "}
                <span className="bg-gradient-to-r from-[#2563eb] to-[#7c3aed] bg-clip-text text-transparent">
                  Nonprofits
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Kindora is an all-in-one platform that helps nonprofits and NGOs manage donors, track grants,
                deliver programs, and report financial impact — all in one place. We replace scattered
                spreadsheets with a unified system built specifically for the way nonprofit teams work.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/kindora/demo"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300"
                >
                  Request a Demo
                </Link>
                <Link
                  href="/kindora/pricing"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#2563eb] bg-white border border-blue-200 hover:bg-blue-50 rounded-full transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        <AnswerReadyBlock page="about" />

        <section id="ownership" aria-labelledby="ownership-heading" className="bg-white py-16 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-widest mb-2">Company and team</p>
            <h2 id="ownership-heading" className="text-3xl font-bold text-gray-900 mb-8">Who owns and builds Kindora?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Ownership and product</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Kindora is a nonprofit software product developed by SpaceNexus Inc. SpaceNexus was founded in 2022, and the company launched Kindora in 2024. Product ownership sits with SpaceNexus; the company has not publicly named an individual Kindora product owner or editor.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Team and experience</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  SpaceNexus describes its team as engineers, strategists, and creators. It has not published individual biographies for Kindora leadership, so names and experience are not attributed here.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Location and service area</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  SpaceNexus lists its company location in Sacramento, California, USA. Kindora serves nonprofits, NGOs, charities, and community organizations; its public materials do not specify a geographic service territory.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Contact and public profiles</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Contact the Kindora team at <a className="text-[#2563eb] hover:underline" href="mailto:contact@spacenexus.net">contact@spacenexus.net</a> or use the <Link className="text-[#2563eb] hover:underline" href="/kindora/contact">contact form</Link>.
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  <li><a className="text-[#2563eb] hover:underline" href="https://www.linkedin.com/company/space-kindora/" rel="me noopener noreferrer">LinkedIn</a></li>
                  <li><a className="text-[#2563eb] hover:underline" href="https://www.youtube.com/@KindoraNGOOS1" rel="me noopener noreferrer">YouTube</a></li>
                  <li><a className="text-[#2563eb] hover:underline" href="https://www.instagram.com/space_kindora_/" rel="me noopener noreferrer">Instagram</a></li>
                  <li><a className="text-[#2563eb] hover:underline" href="https://x.com/space_kindora" rel="me noopener noreferrer">X</a></li>
                  <li><a className="text-[#2563eb] hover:underline" href="https://www.facebook.com/kindora.ngo.os" rel="me noopener noreferrer">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="evidence-heading" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 id="evidence-heading" className="text-2xl font-bold text-gray-900 mb-2">Dated company and product facts</h2>
          <p className="text-sm text-gray-500 mb-6">Checked November 26, 2026. Company-history facts come from the SpaceNexus timeline; product configuration and plan limits link to their current public pages. These are not customer outcome claims.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {evidenceFacts.map((fact) => (
              <div key={fact.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <p className="text-2xl font-bold text-[#2563eb] mb-2">{fact.value}</p>
                <p className="text-sm font-semibold text-gray-900">{fact.label}</p>
                <p className="text-xs text-gray-500 mt-3">Owner: {fact.owner}</p>
                <Link className="text-xs text-[#2563eb] hover:underline mt-1 inline-block" href={fact.href}>Source: {fact.source}</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-widest mb-2">
              What we believe
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for nonprofit impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles behind everything we build.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#7c3aed] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meetups */}
        <div className="relative overflow-hidden" id="team">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4ff] via-white to-[#faf5ff]" />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-3xl -translate-x-1/3" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-widest mb-3">
                Community
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                At the heart of the{" "}
                <span className="bg-gradient-to-r from-[#2563eb] to-[#7c3aed] bg-clip-text text-transparent">
                  community
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We regularly attend nonprofit and tech meetups to learn, connect, and share what we&apos;re building — because real impact starts with real conversations.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {[
                { src: "/kindora/meetups/ceo.jpeg", caption: "Kindora team members at a nonprofit software meetup", tag: "Team", sub: "Discussing nonprofit software and product workflows" },
                { src: "/kindora/meetups/tm.jpeg", caption: "Kindora team collaborating on nonprofit technology", tag: "Culture", sub: "Building together, every single day" },
                { src: "/kindora/meetups/colg.jpeg", caption: "Kindora team engaging with nonprofit leaders at a community meetup", tag: "Events", sub: "Engaging with nonprofit leaders and changemakers" },
              ].map((shot) => (
                <figure
                  key={shot.src}
                  className="group relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 hover:shadow-[0_30px_80px_-20px_rgba(37,99,235,0.35)] hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                    <Image
                      src={shot.src}
                      alt={shot.caption}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#2563eb] shadow-sm">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {shot.tag}
                      </span>
                    </div>
                  </div>
                  <figcaption className="absolute bottom-0 inset-x-0 p-6 text-white">
                    <p className="text-xl font-bold mb-1">{shot.caption}</p>
                    <p className="text-sm text-white/80 leading-relaxed">{shot.sub}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* Mission section */}
        <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-semibold text-blue-200 uppercase tracking-widest mb-3">
                  Our mission
                </p>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Helping every nonprofit spend less time on administration
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Nonprofit teams are stretched thin. Between donor follow-ups, grant deadlines, program
                  reporting, and financial compliance, valuable time is lost to manual admin work. Kindora
                  brings every workflow into one system so teams can focus on what matters — their mission.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/kindora/features"
                    className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#2563eb] bg-white hover:bg-blue-50 rounded-full transition-all duration-300"
                  >
                    Explore Features
                  </Link>
                  <Link
                    href="/kindora/free-tools"
                    className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-full transition-all duration-300"
                  >
                    Free Tools
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Donor Management", "Grant Tracking", "Program Delivery", "Financial Reporting", "Volunteer Coordination", "Impact Reporting"].map((item) => (
                  <div key={item} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                    <svg className="w-6 h-6 text-white mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to transform your nonprofit operations?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              See how Kindora can help your organization manage donors, grants, programs, and finances in one place.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/kindora/demo"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all duration-300"
              >
                Request a Demo
              </Link>
              <Link
                href="/kindora/contact"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              <Link href="/kindora/blog" className="text-[#2563eb] hover:underline">Read our blog</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
