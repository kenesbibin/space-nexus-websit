import type { BlogPost } from "./posts";
import { kindoraOrganizationId } from "../../components/kindora-entity";

const siteUrl = "https://spacenexus.net";
export const kindoraPublisherId = kindoraOrganizationId;

function personId(name: string) {
  const slug = name
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${siteUrl}/kindora/about#person-${slug}`;
}

function isIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

export function createBlogPostingSchema(post: BlogPost) {
  const canonicalUrl = `${siteUrl}/kindora/blog/${post.slug}`;
  const imageUrl = new URL(post.image, siteUrl).toString();
  const modifiedDate = post.dateModified ?? post.publishedAt;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    datePublished: post.publishedAt,
    dateModified: modifiedDate,
    author: {
      "@type": "Person",
      "@id": personId(post.author.name),
      name: post.author.name,
      jobTitle: post.author.role,
      description: post.author.bio,
      url: new URL(post.author.url ?? "/kindora/about", siteUrl).toString(),
    },
    publisher: {
      "@id": kindoraPublisherId,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    url: canonicalUrl,
    articleSection: post.category,
    inLanguage: "en-US",
  };
}

export function assertBlogPostsValid(posts: BlogPost[]): void {
  const seenSlugs = new Set<string>();

  for (const post of posts) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) {
      throw new Error(`Invalid published Kindora blog slug: ${post.slug}`);
    }
    if (seenSlugs.has(post.slug)) {
      throw new Error(`Duplicate published Kindora blog slug: ${post.slug}`);
    }
    seenSlugs.add(post.slug);

    for (const [field, value] of Object.entries({
      headline: post.title,
      description: post.excerpt,
      author: post.author?.name,
      authorRole: post.author?.role,
      authorBio: post.author?.bio,
      image: post.image,
      datePublished: post.publishedAt,
    })) {
      if (typeof value !== "string" || value.trim().length === 0) {
        throw new Error(`Missing ${field} on published Kindora blog post: ${post.slug}`);
      }
    }

    const modifiedDate = post.dateModified ?? post.publishedAt;
    if (!isIsoDate(post.publishedAt) || !isIsoDate(modifiedDate)) {
      throw new Error(`Invalid ISO publication/modification date on Kindora blog post: ${post.slug}`);
    }
    if (modifiedDate < post.publishedAt) {
      throw new Error(`dateModified precedes datePublished on Kindora blog post: ${post.slug}`);
    }

    const schema = createBlogPostingSchema(post);
    if (
      schema["@type"] !== "BlogPosting" ||
      schema.headline !== post.title ||
      schema.description !== post.excerpt ||
      schema.datePublished !== post.publishedAt ||
      schema.dateModified !== modifiedDate ||
      schema.author.name !== post.author.name ||
      schema.publisher["@id"] !== kindoraPublisherId ||
      schema.mainEntityOfPage["@id"] !== schema.url ||
      !new URL(schema.image[0]).host
    ) {
      throw new Error(`Invalid BlogPosting graph generated for: ${post.slug}`);
    }
  }
}
