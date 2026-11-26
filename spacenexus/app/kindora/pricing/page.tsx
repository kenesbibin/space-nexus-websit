import { createKindoraProductSchema } from "../components/commercial-schema";
import type { Metadata } from "next";
import PricingContent from "./PricingContent";
import { pricingFaqs, pricingPlanFaqs } from "./pricing-faqs";

export const metadata: Metadata = {
  title: { absolute: "Kindora Pricing — Free & Nonprofit-Friendly Plans" },
  description:
    "Kindora pricing for nonprofits: a forever-free Starter plan plus flexible Professional and Enterprise tiers with donor CRM, grant tracking, and nonprofit-friendly rates.",
  alternates: { canonical: "https://spacenexus.net/kindora/pricing" },
  openGraph: {
    type: "website",
    url: "https://spacenexus.net/kindora/pricing",
    siteName: "Kindora",
    title: "Kindora Pricing — Free & Nonprofit-Friendly Plans",
    description:
      "Forever-free Starter plan plus Professional and Enterprise tiers with donor CRM, grant tracking, and nonprofit-friendly rates.",
    images: [{ url: "/kindora-og.png", alt: "Kindora — Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindora Pricing — Free & Nonprofit-Friendly Plans",
    description:
      "Forever-free Starter plan plus Professional and Enterprise tiers with donor CRM, grant tracking, and nonprofit-friendly rates.",
    images: ["/kindora-og.png"],
  },
};

const productSchema = createKindoraProductSchema();

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...pricingFaqs, ...pricingPlanFaqs].map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};



export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PricingContent />
    </>
  );
}