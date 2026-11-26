import Link from "next/link";
import type { BlogCategory } from "./data/posts";

type ContextualLinksProps = {
  category: string;
};

const primaryFeatureByCategory: Record<BlogCategory, { href: string; label: string }> = {
  "Donor Management": {
    href: "/kindora/features/donor-management",
    label: "Use Kindora donor management software",
  },
  "Grant Management": {
    href: "/kindora/features/grant-management",
    label: "Manage grants with Kindora",
  },
  "Nonprofit Tips": {
    href: "/kindora/features",
    label: "Explore Kindora nonprofit management features",
  },
  "Case Management": {
    href: "/kindora/features/client-management",
    label: "See Kindora client and program management",
  },
  "Product Updates": {
    href: "/kindora/features",
    label: "Explore the latest Kindora features",
  },
  Fundraising: {
    href: "/kindora/features/campaign-management",
    label: "Run fundraising campaigns with Kindora",
  },
};

export default function ContextualLinks({ category }: ContextualLinksProps) {
  const primaryFeature = primaryFeatureByCategory[category as BlogCategory] ?? primaryFeatureByCategory["Nonprofit Tips"];

  return (
    <aside className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12" aria-labelledby="kindora-contextual-links">
      <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#2563eb] mb-2">
          Put the guide into practice
        </p>
        <h2 id="kindora-contextual-links" className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
          Continue with Kindora
        </h2>
        <div className="grid sm:grid-cols-3 gap-3">
          <Link href={primaryFeature.href} className="rounded-xl border border-blue-100 bg-white p-4 text-sm font-semibold text-gray-900 hover:border-blue-300 hover:text-[#2563eb]">
            {primaryFeature.label} <span aria-hidden="true">→</span>
          </Link>
          <Link href="/kindora/pricing" className="rounded-xl border border-blue-100 bg-white p-4 text-sm font-semibold text-gray-900 hover:border-blue-300 hover:text-[#2563eb]">
            Review nonprofit-friendly pricing <span aria-hidden="true">→</span>
          </Link>
          <Link href="/kindora/vs-competitors" className="rounded-xl border border-blue-100 bg-white p-4 text-sm font-semibold text-gray-900 hover:border-blue-300 hover:text-[#2563eb]">
            Compare Kindora with alternatives <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
