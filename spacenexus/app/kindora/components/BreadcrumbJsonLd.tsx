import Script from "next/script";

type BreadcrumbJsonLdProps = {
  id: string;
  items: Array<{
    name: string;
    url: string;
  }>;
};

export default function BreadcrumbJsonLd({ id, items }: BreadcrumbJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id={`breadcrumb-${id}-jsonld`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
