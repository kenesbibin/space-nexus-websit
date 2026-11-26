"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { getPostBySlug, getRelatedPosts, categoryColors } from "../data/posts";

interface BlogPostContentProps {
    slug: string;
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default function BlogPostContent({ slug }: BlogPostContentProps) {
    const post = getPostBySlug(slug);
    const related = getRelatedPosts(slug, 3);
    const [progress, setProgress] = useState(0);
    const [activeSection, setActiveSection] = useState(0);
    const articleRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const el = articleRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const windowH = window.innerHeight;
            const articleH = el.offsetHeight;
            const start = rect.top + window.scrollY - windowH;
            const end = rect.top + window.scrollY + articleH;
            const current = window.scrollY;
            const p = Math.max(0, Math.min(100, ((current - start) / (end - start - windowH)) * 100));
            setProgress(p);

            // Active section tracking
            if (post) {
                let active = 0;
                post.content.sections.forEach((_, i) => {
                    const el = document.getElementById(`section-${i}`);
                    if (el && el.getBoundingClientRect().top < 120) active = i;
                });
                setActiveSection(active);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [post]);

    if (!post) {
        return (
            <main className="pt-32 pb-20 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Article not found</h1>
                    <p className="text-gray-500 mb-6">This article may have moved or doesn&apos;t exist.</p>
                    <Link href="/kindora/blog" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2563eb] text-white rounded-xl text-sm font-semibold hover:bg-[#1d4ed8] transition-colors">
                        ← Back to Blog
                    </Link>
                </div>
            </main>
        );
    }

    const c = categoryColors[post.category];

    return (
        <>
            {/* Reading progress bar */}
            <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-gray-100">
                <div
                    className="h-full bg-gradient-to-r from-[#2563eb] to-violet-500 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <main className="pt-20 lg:pt-24">
                {/* ── Hero ──────────────────────────────────────────────────────── */}
                <section className={`bg-gradient-to-br ${post.coverGradient} py-16 lg:py-24`}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
                            <Link href="/kindora/blog" className="hover:text-white transition-colors">
                                Blog
                            </Link>
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-white/80">{post.category}</span>
                        </nav>

                        {/* Category badge */}
                        <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/20 text-white border border-white/30 mb-5">
                            {post.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                            {post.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-3xl">
                            {post.excerpt}
                        </p>

                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-5">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full ${post.author.color} flex items-center justify-center text-white text-sm font-bold ring-2 ring-white/30`}>
                                    {post.author.initials}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">{post.author.name}</p>
                                    <p className="text-xs text-white/60">{post.author.role}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-white/60">
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {formatDate(post.publishedAt)}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {post.readingTime} min read
                                </span>
                                {post.dateModified && post.dateModified !== post.publishedAt && (
                                    <span>Updated {formatDate(post.dateModified)}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Article Layout ─────────────────────────────────────────────── */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                    <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-14">

                        {/* Main content */}
                        <article ref={articleRef} className="min-w-0">
                            {/* Intro */}
                            <div className="prose prose-lg max-w-none mb-10">
                                <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                                    {post.content.intro}
                                </div>
                            </div>

                            {/* Sections */}
                            <div className="space-y-12">
                                {post.content.sections.map((section, i) => (
                                    <section key={i} id={`section-${i}`} className="scroll-mt-24">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`w-8 h-8 rounded-lg ${c.bg} ${c.text} flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                                                {i + 1}
                                            </div>
                                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                                                {section.heading}
                                            </h2>
                                        </div>

                                        <div className="pl-11">
                                            {section.body && (
                                                <p className="text-gray-600 leading-relaxed mb-5 whitespace-pre-line">
                                                    {section.body}
                                                </p>
                                            )}
                                            {section.listItems && (
                                                <ul className="space-y-3">
                                                    {section.listItems.map((item, j) => (
                                                        <li key={j} className="flex items-start gap-3">
                                                            <span className={`mt-1.5 w-2 h-2 rounded-full ${c.bg.replace("50", "400")} flex-shrink-0`} />
                                                            <span className="text-gray-600 leading-relaxed text-sm">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </section>
                                ))}
                            </div>

                            {/* Conclusion */}
                            <div className={`mt-14 p-7 rounded-2xl border ${c.border} ${c.bg}`}>
                                <div className="flex items-center gap-2 mb-3">
                                    <svg className={`w-5 h-5 ${c.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className={`text-sm font-semibold ${c.text}`}>Key Takeaway</span>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    {post.content.conclusion}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full font-medium">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Author card */}
                            <div className="mt-10 p-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-5">
                                <div className={`w-14 h-14 rounded-2xl ${post.author.color} flex items-center justify-center text-white text-xl font-bold flex-shrink-0`}>
                                    {post.author.initials}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{post.author.name}</p>
                                    <p className="text-sm text-gray-500 mb-1">{post.author.role} · Kindora</p>
                                    <p className="text-xs text-gray-500">
                                        Writing about nonprofit technology, fundraising strategy, and organizational effectiveness.
                                    </p>
                                </div>
                            </div>

                            {/* Share row */}
                            <div className="flex items-center justify-between mt-8 p-5 rounded-2xl bg-white border border-gray-100">
                                <span className="text-sm font-semibold text-gray-700">Share this article</span>
                                <div className="flex items-center gap-3">
                                    {[
                                        { label: "Twitter/X", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                                        { label: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M2 6.5a2 2 0 100-4 2 2 0 000 4z" },
                                    ].map((s) => (
                                        <button
                                            key={s.label}
                                            title={s.label}
                                            className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                        >
                                            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                                            </svg>
                                        </button>
                                    ))}
                                    <button
                                        title="Copy link"
                                        className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                        onClick={() => navigator.clipboard.writeText(window.location.href)}
                                    >
                                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </article>

                        {/* ── Sidebar ─────────────────────────────────────────────── */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-24 space-y-6">
                                {/* Table of Contents */}
                                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                        In this article
                                    </p>
                                    <nav className="space-y-1">
                                        {post.content.sections.map((section, i) => (
                                            <a
                                                key={i}
                                                href={`#section-${i}`}
                                                className={`flex items-center gap-2 py-1.5 px-2 rounded-lg text-sm transition-all ${activeSection === i
                                                    ? `${c.bg} ${c.text} font-semibold`
                                                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                                                    }`}
                                            >
                                                <span className={`w-4 h-4 rounded text-xs flex items-center justify-center flex-shrink-0 font-bold ${activeSection === i ? c.text : "text-gray-300"}`}>
                                                    {i + 1}
                                                </span>
                                                <span className="leading-tight text-xs">{section.heading}</span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                                {/* CTA card */}
                                <div className={`p-6 rounded-2xl bg-gradient-to-br ${post.coverGradient} text-white`}>
                                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-white text-sm mb-2">
                                        Try Kindora Free
                                    </p>
                                    <p className="text-white/70 text-xs leading-relaxed mb-4">
                                        See how Kindora handles everything you just read about — in one platform.
                                    </p>
                                    <a
                                        href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-center py-2.5 px-4 bg-white text-sm font-semibold rounded-xl text-gray-900 hover:bg-white/90 transition-colors"
                                    >
                                        Start Free →
                                    </a>
                                </div>

                                {/* Reading progress indicator */}
                                <div className="p-5 rounded-2xl bg-white border border-gray-100">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-xs font-medium text-gray-500">Reading progress</p>
                                        <p className="text-xs font-semibold text-gray-900">{Math.round(progress)}%</p>
                                    </div>
                                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full bg-gradient-to-r ${post.coverGradient} transition-all duration-300`}
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>

                    {/* ── Related Posts ─────────────────────────────────────────────── */}
                    {related.length > 0 && (
                        <div className="mt-20 pt-14 border-t border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related articles</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {related.map((rp) => {
                                    const rc = categoryColors[rp.category];
                                    return (
                                        <Link
                                            key={rp.slug}
                                            href={`/kindora/blog/${rp.slug}`}
                                            className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <div className={`bg-gradient-to-br ${rp.coverGradient} p-6 flex items-end justify-between`}>
                                                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={rp.coverIcon} />
                                                    </svg>
                                                </div>
                                                <span className="text-xs text-white/70">{rp.readingTime} min</span>
                                            </div>
                                            <div className="p-5 flex flex-col flex-1">
                                                <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${rc.bg} ${rc.text} self-start mb-3`}>
                                                    {rp.category}
                                                </span>
                                                <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-[#2563eb] transition-colors flex-1 mb-3">
                                                    {rp.title}
                                                </h3>
                                                <div className="flex items-center gap-2 mt-auto">
                                                    <div className={`w-6 h-6 rounded-full ${rp.author.color} flex items-center justify-center text-white text-xs font-bold`}>
                                                        {rp.author.initials}
                                                    </div>
                                                    <span className="text-xs text-gray-500">{rp.author.name}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* ── Bottom Nav ───────────────────────────────────────────────── */}
                    <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                        <Link
                            href="/kindora/blog"
                            className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#2563eb] transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Blog
                        </Link>
                        <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${c.bg} ${c.text}`}>
                            {post.category}
                        </span>
                    </div>
                </div>
            </main>
        </>
    );
}
