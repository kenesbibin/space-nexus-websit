import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kindora Customer Reviews",
  description: "A verifiable public set of Kindora customer reviews is not currently available.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Kindora Customer Reviews",
    description: "A verifiable public set of Kindora customer reviews is not currently available.",
    url: "https://spacenexus.net/kindora/consumer-review",
    type: "website",
  },
};

export default function ConsumerReviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
