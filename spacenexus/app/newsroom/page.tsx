import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Newsroom",
    description:
        "News, announcements, and updates from Space Nexus — product launches, certifications, and milestones from the enterprise virtual data room platform.",
    alternates: { canonical: "https://spacenexus.net/newsroom" },
    openGraph: {
        title: "Newsroom | Space Nexus",
        description:
            "News, announcements, and updates from Space Nexus — product launches, certifications, and milestones.",
        url: "https://spacenexus.net/newsroom",
    },
};

const newsItems = [
    {
        category: "Milestone",
        title: "Space Nexus Surpasses 500 Enterprises Trusting the Platform for Critical Transactions",
        image: "/spacenexus/screenshots/vdr-dashboard.png",
        href: "/about",
        alt: "Space Nexus data room dashboard",
    },
    {
        category: "Product",
        title: "Space Nexus Launches Kindora NGO OS, Expanding into the Nonprofit Sector",
        image: "/kindora/og-card.png",
        href: "/kindora",
        alt: "Kindora NGO operating system",
    },
    {
        category: "Product",
        title: "AI-Powered Document Processing and Intelligent Indexing Now Available",
        image: "/spacenexus/screenshots/vdr-qa.png",
        href: "/features",
        alt: "AI-powered document Q&A in Space Nexus",
    },
    {
        category: "Security",
        title: "Space Nexus Achieves SOC 2 Type II Certification",
        image: "/spacenexus/screenshots/security%20complince.jpeg",
        href: "/security",
        alt: "Space Nexus security and compliance",
    },
    {
        category: "Product",
        title: "Native Integrations Connect Space Nexus to the Full Deal Stack",
        image: "/spacenexus/screenshots/integration.jpeg",
        href: "/features/integrations",
        alt: "Space Nexus integrations",
    },
];

export default function NewsroomPage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            {/* Hero */}
            <section className="pt-32 pb-12 bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-[#2563eb] to-[#60a5fa] bg-clip-text text-transparent">
                            Newsroom
                        </span>
                    </h1>
                    <p className="text-lg text-gray-500">Updates from Space Nexus</p>
                </div>
            </section>

            {/* News list */}
            <section className="py-14">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    {newsItems.map((item) => (
                        <article
                            key={item.title}
                            className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="grid sm:grid-cols-2 gap-6 items-center">
                                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-100">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
                                        {item.category}
                                    </p>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-5">
                                        {item.title}
                                    </h2>
                                    <Link
                                        href={item.href}
                                        className="inline-flex items-center justify-center px-6 py-3 bg-[#2563eb] text-white text-sm font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/25"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

        </div>
    );
}
