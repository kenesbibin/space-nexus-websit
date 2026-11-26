import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { blogPosts, blogCategories, categoryColors } from "./data/posts";
import LastUpdated from "../../components/LastUpdated";

export const metadata: Metadata = {
    title: "Nonprofit Blog — Tips, Guides & Insights",
    description:
        "Expert articles on nonprofit management, donor retention, grant writing, case management, and program outcomes. Practical guides for nonprofit professionals.",
    keywords: [
        "nonprofit blog",
        "nonprofit management tips",
        "donor management guide",
        "grant management for nonprofits",
        "nonprofit software insights",
        "case management nonprofits",
    ],
    alternates: {
        canonical: "/kindora/blog",
    },
    openGraph: {
        title: "Nonprofit Blog — Tips, Guides & Insights",
        description:
            "Practical articles on nonprofit management, donor retention, grant writing, and program outcomes.",
        url: "https://spacenexus.net/kindora/blog",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Nonprofit Blog — Tips, Guides & Insights",
        description:
            "The Kindora blog delivers practical guides on donor management, grant writing, volunteer coordination, and nonprofit financial reporting.",
    },
};



function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Kindora Blog — Nonprofit Management Tips & Guides",
  "description": "Expert articles on donor management, grant writing, volunteer engagement, financial compliance, and nonprofit operations for small to mid-sized organizations.",
  "publisher": { "@id": "https://spacenexus.net/kindora/#organization" },
};



const lastUpdated = "October 28, 2026";
export default function BlogPage() {
    const featured = blogPosts.find((p) => p.featured)!;
    const rest = blogPosts.filter((p) => !p.featured);

    const collectionPageSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://spacenexus.net/kindora/blog",
        name: "Nonprofit Blog — Tips, Guides & Insights",
        description:
            "Expert articles on nonprofit management, donor retention, grant writing, case management, and program outcomes.",
        publisher: { "@id": "https://spacenexus.net/kindora/#organization" },
        url: "https://spacenexus.net/kindora/blog",
    };

    return (
        <>
            <Script id="blog-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
            <Script id="blog-collectionpage-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
            <main className="pt-20 lg:pt-24">
            {/* ── Hero / Header ─────────────────────────────────────────────────── */}
            <section className="py-14 lg:py-20 bg-gradient-to-b from-[#f8f9fa] to-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
                            Kindora Blog
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Insights for nonprofit professionals
                        </h1>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            The Kindora blog delivers practical guides on donor management, grant writing, case management, program
                            outcomes, and everything in between.
                        </p>
                        <p className="text-sm text-gray-400 mt-4 leading-relaxed italic">
                            Practical guides for nonprofit teams making decisions across donor stewardship, grant delivery, program outcomes, and financial accountability.
                        </p>
                        <p className="text-xs text-gray-400 mt-4">Last updated: {lastUpdated}</p>
                        <p className="text-sm text-gray-400 mt-4">
                            <Link href="/kindora" className="text-[#2563eb] hover:underline">Kindora homepage</Link>
                            {" · "}
                            <Link href="/kindora/features" className="text-[#2563eb] hover:underline">Features</Link>
                            {" · "}
                            <Link href="/kindora/pricing" className="text-[#2563eb] hover:underline">Pricing</Link>
                            {" · "}
                            <Link href="/kindora/contact" className="text-[#2563eb] hover:underline">Contact</Link>
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Category Filter Pills ─────────────────────────────────────────── */}
            <section className="sticky top-16 z-20 bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap pr-2">
                            Filter:
                        </span>
                        <Link
                            href="/kindora/blog"
                            className="whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium bg-[#2563eb] text-white transition-colors"
                        >
                            All Posts
                        </Link>
                        {blogCategories.map((cat) => {
                            const c = categoryColors[cat];
                            return (
                                <span
                                    key={cat}
                                    className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium border ${c.bg} ${c.text} ${c.border} cursor-pointer hover:shadow-sm transition-shadow`}
                                >
                                    {cat}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                {/* ── Featured Post ─────────────────────────────────────────────── */}
                <Link href={`/kindora/blog/${featured.slug}`} className="group block mb-14">
                    <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
                        {/* Visual side */}
                        <div className={`bg-gradient-to-br ${featured.coverGradient} p-10 lg:p-14 flex flex-col justify-between min-h-[280px]`}>
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">
                                    Featured
                                </span>
                                <span className="text-xs text-white/60">{featured.readingTime} min read</span>
                            </div>
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={featured.coverIcon} />
                                    </svg>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {featured.tags.map((tag) => (
                                        <span key={tag} className="text-xs text-white/80 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Content side */}
                        <div className="bg-white p-8 lg:p-12 flex flex-col justify-between">
                            <div>
                                {(() => {
                                    const c = categoryColors[featured.category];
                                    return (
                                        <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${c.bg} ${c.text} mb-4`}>
                                            {featured.category}
                                        </span>
                                    );
                                })()}
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-[#2563eb] transition-colors">
                                    {featured.title}
                                </h2>
                                <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
                                    {featured.excerpt}
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className={`w-9 h-9 rounded-full ${featured.author.color} flex items-center justify-center text-white text-sm font-bold`}>
                                        {featured.author.initials}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">{featured.author.name}</p>
                                        <p className="text-xs text-gray-500">{featured.author.role}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-[#2563eb] text-sm font-semibold">
                                    Read article
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* ── Post Grid ─────────────────────────────────────────────────── */}
                <div className="mb-6">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        All Articles
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {rest.map((post) => {
                        const c = categoryColors[post.category];
                        return (
                            <Link
                                key={post.slug}
                                href={`/kindora/blog/${post.slug}`}
                                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Card top gradient */}
                                <div className={`bg-gradient-to-br ${post.coverGradient} p-7 flex items-end justify-between`}>
                                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={post.coverIcon} />
                                        </svg>
                                    </div>
                                    <span className="text-xs text-white/70 font-medium">{post.readingTime} min</span>
                                </div>

                                {/* Card body */}
                                <div className="flex flex-col flex-1 p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${c.bg} ${c.text}`}>
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-gray-500">{formatDate(post.publishedAt)}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg leading-snug mb-3 group-hover:text-[#2563eb] transition-colors flex-1">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-5">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-7 h-7 rounded-full ${post.author.color} flex items-center justify-center text-white text-xs font-bold`}>
                                                {post.author.initials}
                                            </div>
                                            <div>
                                                <span className="text-xs text-gray-500 font-medium">{post.author.name}</span>
                                                <p className="text-xs text-gray-400 leading-tight max-w-[180px]">{post.author.bio}</p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-[#2563eb] font-semibold flex items-center gap-1">
                                            Read
                                            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* ── Newsletter CTA ────────────────────────────────────────────── */}
                <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl font-bold text-white mb-2">
                            Get the latest nonprofit insights
                        </h2>
                        <p className="text-blue-100 text-sm leading-relaxed max-w-md">
                            Join thousands of nonprofit professionals who get Kindora&apos;s best articles, guides, and
                            product updates delivered every two weeks.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                        <input
                            type="email"
                            placeholder="your@organization.org"
                            aria-label="Email address for newsletter"
                            required
                            className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 text-sm outline-none focus:bg-white/20 transition-colors min-w-[240px]"
                        />
                        <button
                            data-analytics-event="newsletter-subscribe"
                            className="px-6 py-4 bg-white text-[#2563eb] font-semibold text-sm rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap"
                        >
                            Subscribe Free
                        </button>
                    </div>
                </div>
            
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
        </main>
        </>
    );
}
