import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, authorProfiles } from "../data/posts";
import LastUpdated from "../../components/LastUpdated";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.description,
        alternates: { canonical: `https://spacenexus.net/blog/${slug}` },
        openGraph: {
            title: post.title,
            description: post.description,
            url: `https://spacenexus.net/blog/${slug}`,
            type: "article",
            publishedTime: post.publishedAt,
            authors: [post.author.name],
        },
    };
}

function renderContent(markdown: string) {
    const lines = markdown.split("\n");
    const elements: React.ReactNode[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith("## ")) {
            elements.push(
                <h2 key={key++} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                    {line.slice(3)}
                </h2>
            );
        } else if (line.startsWith("### ")) {
            elements.push(
                <h3 key={key++} className="text-xl font-semibold text-gray-800 mt-8 mb-3">
                    {line.slice(4)}
                </h3>
            );
        } else if (line.startsWith("#### ")) {
            elements.push(
                <h4 key={key++} className="text-base font-semibold text-gray-800 mt-6 mb-2">
                    {line.slice(5)}
                </h4>
            );
        } else if (line.startsWith("- ") || line.startsWith("❌ ") || line.startsWith("1. ") || (line.match(/^\d+\./))) {
            elements.push(
                <li key={key++} className="text-gray-600 leading-relaxed ml-4 list-disc marker:text-[#2563eb] mb-1">
                    {line.replace(/^[-❌✅*\d.]\s*/, "")}
                </li>
            );
        } else if (line.startsWith("| ")) {
            // Collect all table lines
            const tableLines: string[] = [];
            while (i < lines.length && lines[i].startsWith("| ")) {
                tableLines.push(lines[i]);
                i++;
            }
            i--; // Adjust for loop increment

            // Parse table
            const headerCells = tableLines[0].split("|").filter(c => c.trim()).map(c => c.trim());
            const bodyRows = tableLines.slice(2).filter(r => !r.match(/^\|[\s-|]+\|$/)).map(r =>
                r.split("|").filter(c => c.trim()).map(c => c.trim())
            );

            elements.push(
                <div key={key++} className="overflow-x-auto my-4">
                    <table className="w-full text-sm border border-gray-200 rounded-lg">
                        <thead>
                            <tr className="bg-gray-50">
                                {headerCells.map((cell, ci) => (
                                    <th key={ci} className="px-4 py-2 text-left font-semibold text-gray-900 border-b border-gray-200">{cell}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {bodyRows.map((row, ri) => (
                                <tr key={ri} className="border-b border-gray-100 last:border-0">
                                    {row.map((cell, ci) => (
                                        <td key={ci} className="px-4 py-2 text-gray-600">{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        } else if (line.startsWith("```")) {
            // code block start/end
            elements.push(<div key={key++} />);
        } else if (line.trim() === "") {
            elements.push(<div key={key++} className="h-2" />);
        } else {
            elements.push(
                <p key={key++} className="text-gray-600 leading-relaxed mb-4">
                    {line}
                </p>
            );
        }
    }
    return elements;
}

function extractFaqItems(content: string): { question: string; answer: string }[] {
    const faqSectionMatch = content.match(/## Frequently Asked Questions\n([\s\S]*?)(?=\n## |\n$)/);
    if (!faqSectionMatch) return [];

    const faqBlock = faqSectionMatch[1];
    const items: { question: string; answer: string }[] = [];
    const lines = faqBlock.split("\n").map(l => l.trim()).filter(l => l.length > 0);

    let currentQuestion = "";
    let currentAnswer = "";

    for (const line of lines) {
        if (line.startsWith("**") && line.endsWith("**")) {
            if (currentQuestion && currentAnswer) {
                items.push({ question: currentQuestion, answer: currentAnswer.trim() });
            }
            currentQuestion = line.replace(/\*\*/g, "");
            currentAnswer = "";
        } else if (currentQuestion) {
            currentAnswer += (currentAnswer ? " " : "") + line;
        }
    }

    if (currentQuestion && currentAnswer) {
        items.push({ question: currentQuestion, answer: currentAnswer.trim() });
    }

    return items;
}

export default async function BlogPostPage({ params }: { params: Params }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);
    const authorProfile = authorProfiles[post.author.name];

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        ...(post.lastReviewed && { dateModified: post.lastReviewed }),
        author: {
            "@type": "Person",
            ...(authorProfile && { "@id": `https://spacenexus.net/about#${authorProfile.slug}` }),
            name: post.author.name,
            jobTitle: post.author.role,
            ...(authorProfile && {
                url: `https://spacenexus.net/about#${authorProfile.slug}`,
                description: authorProfile.bio,
                sameAs: [authorProfile.linkedin],
                worksFor: { "@id": "https://spacenexus.net/#organization" },
            }),
        },
        publisher: {
            "@id": "https://spacenexus.net/#organization",
        },
        isPartOf: { "@id": "https://spacenexus.net/#website" },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://spacenexus.net/blog/${slug}`,
        },
        image: "https://spacenexus.net/og-image.png",
        url: `https://spacenexus.net/blog/${slug}`,
        inLanguage: "en-US",
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://spacenexus.net" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://spacenexus.net/blog" },
            { "@type": "ListItem", position: 3, name: post.title },
        ],
    };

    const faqItems = extractFaqItems(post.content);
    const faqSchema = faqItems.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
    } : null;

    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            {/* JSON-LD Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                id="blogpost-breadcrumb"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {faqSchema && (
                <script
                    id="blogpost-faq"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">
                            Home
                        </Link>
                        <span>›</span>
                        <Link href="/blog" className="hover:text-[#2563eb] transition-colors">
                            Blog
                        </Link>
                        <span>›</span>
                        <span className="text-gray-900 truncate">{post.title}</span>
                    </nav>
                </div>
            </div>

            {/* Article Header */}
            <header className="pt-12 pb-10 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#2563eb] border border-blue-100 mb-5">
                        {post.category}
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">{post.description}</p>
                    <div className="flex items-center gap-4">
                        <div
                            className={`w-11 h-11 rounded-full bg-gradient-to-br ${post.author.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                        >
                            {post.author.initials}
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900">
                                {authorProfile ? (
                                    <a href={`/about#${authorProfile.slug}`} className="hover:text-[#2563eb] transition-colors">
                                        {post.author.name}
                                    </a>
                                ) : post.author.name}
                            </p>
                            <p className="text-xs text-gray-600">
                                {post.author.role} ·{" "}
                                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}{" "}
                                · {post.readTime}
                            </p>
                            {post.lastReviewed && (
                                <p className="text-xs text-emerald-600 mt-1">
                                    ✓ Last reviewed{" "}
                                    {new Date(post.lastReviewed).toLocaleDateString("en-US", {
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Article Body */}
            <article className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose-like">
                        {renderContent(post.content)}
                    </div>
                </div>
            </article>

            {/* Author Bio Box */}
            {authorProfile && (
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">About the Author</p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <div
                                className={`w-16 h-16 rounded-full bg-gradient-to-br ${authorProfile.color} flex items-center justify-center text-white text-xl font-bold shrink-0`}
                            >
                                {authorProfile.initials}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <a href={`/about#${authorProfile.slug}`} className="text-lg font-bold text-gray-900 hover:text-[#2563eb] transition-colors">
                                        {authorProfile.name}
                                    </a>
                                    <a
                                        href={authorProfile.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-medium text-[#2563eb] hover:underline"
                                    >
                                        LinkedIn →
                                    </a>
                                </div>
                                <p className="text-sm font-medium text-gray-600 mb-3">{authorProfile.role}, SpaceNexus</p>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">{authorProfile.bio}</p>
                                <div className="flex flex-wrap gap-2">
                                    {authorProfile.credentials.map((cred, i) => (
                                        <span key={i} className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                                            {cred}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Box */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-2xl p-8 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">
                        Ready to set up your data room?
                    </h3>
                    <p className="text-blue-200 mb-6 text-sm">
                        Get started in under 24 hours. No credit card required.
                    </p>
                    <Link
                        href="/demo"
                        className="inline-flex items-center px-6 py-3 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-colors text-sm"
                    >
                        Talk to Founders →
                    </Link>
                </div>
            </div>

            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-08-01" />
            </div>

            {/* Related Posts */}
            {related.length > 0 && (
                <section className="py-12 bg-white border-t border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {related.map((r) => (
                                <Link
                                    key={r.slug}
                                    href={`/blog/${r.slug}`}
                                    className="group flex flex-col p-6 rounded-xl border border-gray-200 hover:border-[#2563eb]/30 hover:shadow-md transition-all duration-300"
                                >
                                    <span className="text-xs font-semibold text-[#2563eb] mb-2">{r.category}</span>
                                    <h3 className="font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors text-sm leading-snug mb-3">
                                        {r.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-auto">{r.readTime}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
