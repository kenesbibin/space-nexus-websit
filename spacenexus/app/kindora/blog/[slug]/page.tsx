import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, blogPosts } from "../data/posts";
import { createBlogPostingSchema } from "../data/article-schema";
import BlogPostContent from "./BlogPostContent";

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      description: "The article you are looking for could not be found.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${post.title}`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `/kindora/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://spacenexus.net/kindora/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.dateModified ?? post.publishedAt,
      authors: [post.author.name],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const blogPostingSchema = createBlogPostingSchema(post);

  return (
    <>
      <script
        id={`blog-${slug}-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema).replace(/</g, "\\u003c"),
        }}
      />
      <BlogPostContent slug={slug} />
    </>
  );
}
