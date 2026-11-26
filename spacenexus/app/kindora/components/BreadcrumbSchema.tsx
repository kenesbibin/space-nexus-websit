"use client";

import { usePathname } from "next/navigation";
import { createKindoraBreadcrumbSchema } from "./breadcrumb-schema-data";

export default function BreadcrumbSchema() {
  const pathname = usePathname();
  const schema = pathname ? createKindoraBreadcrumbSchema(pathname) : null;
  if (!schema) return null;

  const id = `breadcrumb-schema-${pathname!.split("/").filter(Boolean).join("-") || "home"}`;
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
