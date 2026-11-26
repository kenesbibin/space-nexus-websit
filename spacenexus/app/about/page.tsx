import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { authorProfiles } from "../blog/data/posts";
import LastUpdated from "../components/LastUpdated";
//above code is importing necessary modules and types from Next.j, as well as author profile data from a local file. The Metadata type is used for defining metadata for the page, Link is used for client-side navigation, Script is used for injecting scripts into the page, and authorProfiles contains information about the authors to be displayed on the About page.
const teamMembers = Object.values(authorProfiles);
export const metadata: Metadata =  {
    title: "About Space Nexus — Enterprise Virtual Data Room",
    description:
        "Built by a team from Fortune 500 companies, Big 4 consulting firms, and top investment banks. Space Nexus is purpose-built for M&A professionals who need speed, security, and reliability.",
    alternates: { canonical: "https://spacenexus.net/about" },
    openGraph: {
        title: "About Space Nexus — Enterprise Virtual Data Room",
        description:
            "The team behind Space Nexus comes from Fortune 500, Big 4, and top investment banks. Built by dealmakers, for dealmakers.",
        url: "https://spacenexus.net/about",
    },
};

const values = [
    {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "Speed is Everything",
        description:
            "Every hour of deal delay costs money. We obsess over eliminating friction from deal room setup, document review, and Q&A workflows.",
        color: "from-blue-500 to-blue-600",
    },
    {
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        title: "Security Without Compromise",
        description:
            "Bank-grade encryption, granular access controls, and full audit trails aren't optional extras — they're the foundation of everything we build.",
        color: "from-emerald-500 to-emerald-600",
    },
    {
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        title: "Built by Dealmakers",
        description:
            "Our team has personally worked on M&A transactions, capital raises, and portfolio management. We build what we wished existed.",
        color: "from-violet-500 to-violet-600",
    },
];

const milestones = [
    { year: "2022", event: "Space Nexus founded by team from Fortune 500 & Big 4" },
    { year: "2023", event: "Launched AI-powered document processing & intelligent indexing" },
    { year: "2023", event: "Reached 100+ active deal rooms across APAC, US, and Europe" },
    { year: "2024", event: "Launched Kindora NGO OS — expanding to nonprofit sector" },
    { year: "2026", event: "500+ enterprises trust Space Nexus for critical transactions" },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://spacenexus.net/about" },
    ],
}; 


export default function AboutPage() {
    return (
        
        <div className="min-h-screen bg-[#f8f9fa]">
            <Script
                id="about-breadcrumb"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "AboutPage",
                                name: "About SpaceNexus",
                                url: "https://spacenexus.net/about",
                            },
                            ...teamMembers.map((m) => ({
                                "@type": "Person",
                                "@id": `https://spacenexus.net/about#${m.slug}`,
                                name: m.name,
                                jobTitle: m.role,
                                description: m.bio,
                                url: `https://spacenexus.net/about#${m.slug}`,
                                sameAs: [m.linkedin],
                                worksFor: {
                                    "@type": "Organization",
                                    name: "SpaceNexus",
                                    url: "https://spacenexus.net",
                                },
                            })),
                        ],
                    }),
                }}
            />
            <nav className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                <span className="text-gray-600">About</span>
            </nav>
            {/* Hero */}
            <section className="pt-28 pb-20 bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-4">
                                About Space Nexus
                            </p>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Built by dealmakers,{" "}
                                <span className="text-[#2563eb]">for dealmakers</span>
                            </h1>
                            
                            <p className="text-lg text-gray-600 mb-6">
                                Space Nexus was founded by a team with deep roots in M&A advisory,
                                private equity, and enterprise software. We&apos;ve been on both sides
                                of the deal table — and we built the tool we always wished existed.
                            </p>
                            <p className="text-gray-600">
                                Our mission is simple: eliminate the friction from high-stakes
                                transactions so deal teams can focus on what matters — closing deals.
                            </p>
                            <div className="mt-8 flex gap-4">
                                <Link
                                    href="/demo"
                                    className="px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors text-sm shadow-lg shadow-blue-500/25"
                                >
                                    Talk to Founders
                                </Link>
                            </div>
                        </div>

                        {/* Trust indicators */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Fortune 500", detail: "Team background", icon: "🏢" },
                                { label: "Big 4 Consulting", detail: "Advisory experience", icon: "📊" },
                                { label: "Top Investment Banks", detail: "Deal expertise", icon: "🏦" },
                                { label: "500+ Enterprises", detail: "Trust Space Nexus", icon: "🌏" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="bg-[#f8f9fa] rounded-2xl border border-gray-200 p-6 text-center"
                                >
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <p className="text-sm font-bold text-gray-900">{item.label}</p>
                                    <p className="text-xs text-gray-600 mt-0.5">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        What we stand for
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {values.map((v) => (
                            <div
                                key={v.title}
                                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center text-white mb-5 shadow-lg`}>
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Our journey
                    </h2> 
                    
                    
                    <div className="space-y-6">
                        {milestones.map((m, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="shrink-0 w-16 text-right">
                                    <span className="text-sm font-bold text-[#2563eb]">{m.year}</span>
                                </div>
                                <div className="flex-1 relative pl-6 border-l-2 border-gray-200 pb-6">
                                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[#2563eb]" />
                                    <p className="text-sm text-gray-700">{m.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-2">OUR TEAM</p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            The People Behind <span className="text-[#2563eb]">SpaceNexus</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We are a close-knit group of engineers, strategists, and creators. We value open dialogue, hands-on craft, and technology built to last.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Founders card */}
                        <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="relative" style={{ paddingBottom: '133%' }}>
                                <img src="/teams/founders.jpeg" alt="SpaceNexus Founders" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/95 text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        Leadership
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <h3 className="text-xl font-bold text-white mb-1">Our Founders</h3>
                                    <p className="text-sm text-gray-200">Leading with vision, guiding innovation, and inspiring meaningful change</p>
                                </div>
                            </div>
                        </div>

                        {/* Team card */}
                        <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="relative" style={{ paddingBottom: '133%' }}>
                                <img src="/teams/teammeetup.jpeg" alt="SpaceNexus Team" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/95 text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        Culture
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <h3 className="text-xl font-bold text-white mb-1">Our Team</h3>
                                    <p className="text-sm text-gray-200">Working together to turn ideas into impactful solutions</p>
                                </div>
                            </div>
                        </div>

                        {/* Meetup card */}
                        <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="relative" style={{ paddingBottom: '133%' }}>
                                <img src="/teams/community_meetup.jpeg" alt="SpaceNexus Meetup" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/95 text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        Events
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <h3 className="text-xl font-bold text-white mb-1">Community Meetups</h3>
                                    <p className="text-sm text-gray-200">Connecting, collaborating, and creating meaningful memories together</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-[#f8f9fa] border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the team</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Built by deal professionals from Fortune 500 companies, Big 4 firms, and leading investment banks.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {teamMembers.map((member) => (
                            <div key={member.slug} id={member.slug} className="bg-white rounded-xl border border-gray-200 p-6 scroll-mt-24">
                                <div className="flex items-center gap-4 mb-4">
                                    <div
                                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-lg font-bold shrink-0`}
                                    >
                                        {member.initials}
                                    </div>
                                    
                                    <div>
                                        <h3 className="font-bold text-gray-900">{member.name}</h3>
                                        <p className="text-sm text-gray-600">{member.role}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {member.credentials.map((cred, i) => (
                                        <span key={i} className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
                                            {cred}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-[#2563eb] hover:underline"
                                >
                                    View LinkedIn Profile →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Our product family</h2>
                    <p className="text-blue-200 mb-10">Two products. One mission: remove friction so great organizations can do great work.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-left">
                            <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2">Product 1</p>
                            <h3 className="text-xl font-bold text-white mb-2">Space Nexus VDR</h3>
                            <p className="text-blue-200 text-sm">Enterprise virtual data room for M&A due diligence, capital raising, and secure document sharing.</p>
                            <Link href="/features" className="inline-block mt-4 text-sm text-white font-semibold hover:text-blue-300 transition-colors">
                                Explore features →
                            </Link>
                        </div>
                        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-left">
                            <p className="text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2">Product 2</p>
                            <h3 className="text-xl font-bold text-white mb-2">Kindora NGO OS</h3>
                            <p className="text-blue-200 text-sm">All-in-one nonprofit management platform for donor CRM, grant tracking, client management, and impact reporting.</p>
                            <Link href="/kindora" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm text-white font-semibold hover:text-emerald-300 transition-colors">
                                Explore Kindora →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div>
        </div>
    );
}
