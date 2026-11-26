"use client";

import Link from "next/link";
import {
    FadeInUp,
    StaggerContainer,
    StaggerItem,
    ScaleIn,
    HeroEntrance,
} from "./Animations";

// ─── Animated Hero Entrance ──────────────────────────────────────────────────
export function AnimatedHeroBadge({ children }: { children: React.ReactNode }) {
    return <HeroEntrance delay={0}>{children}</HeroEntrance>;
}

export function AnimatedHeroHeading({ children }: { children: React.ReactNode }) {
    return <HeroEntrance delay={0.1}>{children}</HeroEntrance>;
}

export function AnimatedHeroSubtext({ children }: { children: React.ReactNode }) {
    return <HeroEntrance delay={0.2}>{children}</HeroEntrance>;
}

export function AnimatedHeroCTA({ children }: { children: React.ReactNode }) {
    return <HeroEntrance delay={0.3}>{children}</HeroEntrance>;
}

export function AnimatedHeroDashboard({ children }: { children: React.ReactNode }) {
    return <HeroEntrance delay={0.45} className="mt-16 lg:mt-24 relative">{children}</HeroEntrance>;
}

// ─── Animated Stats Bar ──────────────────────────────────────────────────────
export function AnimatedStatsBar() {
    const stats = [
        { value: "2024", label: "Kindora launched", icon: "M8 7V3m8 4V3M5 11h14M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" },
        { value: "4", label: "Access roles", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
        { value: "Free", label: "Starter plan", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m9-4a9 9 0 11-18 0 9 9 0 0118 0z" },
        { value: "5 / 25 / Unlimited", label: "Plan user limits", icon: "M4 6h16M4 12h16M4 18h16" },
    ];

    return (
        <section className="py-12 bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#1d4ed8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" staggerDelay={0.12}>
                    {stats.map((stat) => (
                        <StaggerItem key={stat.label}>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3">
                                    <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                                    </svg>
                                </div>
                                <p className="text-3xl lg:text-4xl font-black text-white mb-1">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-blue-200 font-medium">{stat.label}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
                <p className="mt-6 text-center text-xs text-blue-100">
                    Owner: SpaceNexus Inc. Checked November 26, 2026. Sources: <Link className="underline" href="/about">company timeline</Link>, <Link className="underline" href="/kindora/features">access roles</Link>, and <Link className="underline" href="/kindora/pricing">current plan limits</Link>.
                </p>
            </div>
        </section>
    );
}

// ─── Animated Section Header ─────────────────────────────────────────────────
export function AnimatedSectionHeader({
    eyebrow,
    heading,
    subtext,
}: {
    eyebrow: string;
    heading: string;
    subtext?: string;
}) {
    return (
        <FadeInUp className="text-center mb-16">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">{eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{heading}</h2>
            {subtext && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtext}</p>}
        </FadeInUp>
    );
}

// ─── Animated Value Props Grid ───────────────────────────────────────────────
export function AnimatedValueProps({ valueProps }: {
    valueProps: { title: string; description: string; icon: React.ReactNode }[];
}) {
    return (
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" staggerDelay={0.1}>
            {valueProps.map((prop) => (
                <StaggerItem key={prop.title}>
                    <div className="group relative bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-[#2563eb]/30 hover:-translate-y-1 transition-all duration-300 h-full">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#2563eb]/5 to-transparent rounded-bl-[100px] rounded-tr-2xl" />
                        <div className="relative">
                            <div className="w-14 h-14 rounded-xl bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300 mb-5">
                                {prop.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{prop.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{prop.description}</p>
                        </div>
                    </div>
                </StaggerItem>
            ))}
        </StaggerContainer>
    );
}

// ─── Animated How It Works ───────────────────────────────────────────────────
export function AnimatedHowItWorks() {
    const steps = [
        {
            step: "01",
            title: "Set Up Your Organization",
            description: "Import available records, add team members with role-based access, and configure workflows included in your plan. Setup time depends on your data and requirements.",
            icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
            color: "bg-[#2563eb]",
            textColor: "text-[#2563eb]",
            highlights: ["Import donor data", "Add team members", "Configure accounts"],
        },
        {
            step: "02",
            title: "Manage Everything in One Place",
            description: "Track donors, manage grants end-to-end, enroll clients in programs, run campaigns, and handle finances — all from one dashboard.",
            icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
            color: "bg-violet-600",
            textColor: "text-violet-600",
            highlights: ["Donor & grant tracking", "Client case management", "Campaign management"],
        },
        {
            step: "03",
            title: "Report Your Impact",
            description: "Generate PDF statements, Excel exports, and visual dashboards for board meetings, grant reports, and funder presentations — in one click.",
            icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
            color: "bg-emerald-600",
            textColor: "text-emerald-600",
            highlights: ["PDF board reports", "Grant compliance exports", "Real-time dashboards"],
        },
    ];

    return (
        <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f0f4ff] to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSectionHeader
                    eyebrow="Get Started in Minutes"
                    heading="How Kindora works"
                    subtext="Starter signup is self-service. Setup and onboarding needs depend on your data, workflows, and selected plan."
                />
                <div className="relative">
                    <div className="hidden lg:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-[#2563eb]/30 via-[#2563eb] to-[#2563eb]/30" />
                    <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12" staggerDelay={0.15}>
                        {steps.map((step, i) => (
                            <StaggerItem key={i}>
                                <div className="relative flex flex-col items-center text-center">
                                    <ScaleIn delay={i * 0.1}>
                                        <div className={`relative z-10 w-14 h-14 rounded-full ${step.color} flex items-center justify-center text-white font-black text-lg shadow-lg mb-6`}>
                                            {step.step}
                                        </div>
                                    </ScaleIn>
                                    <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 w-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        <div className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mx-auto mb-4`}>
                                            <svg className={`w-6 h-6 ${step.textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>
                                        <ul className="space-y-1.5">
                                            {step.highlights.map((h) => (
                                                <li key={h} className="flex items-center justify-center gap-2 text-sm text-gray-500">
                                                    <svg className="w-4 h-4 text-[#2563eb] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
                <FadeInUp delay={0.2} className="text-center mt-12">
                    <a
                        href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Explore the free Starter plan
                        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </FadeInUp>
            </div>
        </section>
    );
}

// ─── Animated Strength Cards ─────────────────────────────────────────────────
export function AnimatedStrengthCards() {
    const cards = [
        {
            title: "Donor and Donation Records",
            subtitle: "Donor workflows",
            description: "Manage donor profiles, giving history, and communication records in one place.",
            color: "from-blue-500 to-blue-600",
            icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        },
        {
            title: "Organization Overview",
            subtitle: "Connected nonprofit workflows",
            description: "Review donor, grant, client, financial, and team activity through Kindora's shared platform.",
            color: "from-violet-500 to-violet-600",
            icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        },
        {
            title: "Grant Lifecycle Management",
            subtitle: "Grant workflows",
            description: "Track every grant from prospect to award. Manage funder relationships, record receipts, set deadline reminders, and allocate costs for compliance.",
            color: "from-emerald-500 to-emerald-600",
            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        },
        {
            title: "Social Services Case Management",
            subtitle: "Program workflows",
            description: "Manage client intake, program enrollment, service delivery, and outcome tracking. Prove impact to funders with structured data.",
            color: "from-orange-500 to-orange-600",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
        },
        {
            title: "Nonprofit Accounting & Cost Allocation",
            subtitle: "Financial workflows",
            description: "Chart of accounts, expense tracking, budget management, and multi-grant cost allocation — all synced with your donor and program data.",
            color: "from-rose-500 to-rose-600",
            icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
        },
        {
            title: "Multi-Channel Communications",
            subtitle: "Communications workflows",
            description: "Send targeted email campaigns to donor segments, automate grant deadline notifications, and manage client appointment reminders from one hub.",
            color: "from-cyan-500 to-cyan-600",
            icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        },
    ];

    return (
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {cards.map((card) => (
                <StaggerItem key={card.title}>
                    <div className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color}`} />
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.icon} />
                            </svg>
                        </div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{card.subtitle}</p>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
                    </div>
                </StaggerItem>
            ))}
        </StaggerContainer>
    );
}

// ─── Animated Comparison Table Header ────────────────────────────────────────
export function AnimatedComparisonHeader() {
    return (
        <FadeInUp className="text-center mb-14">
            <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Why Kindora</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why nonprofits choose Kindora over the alternatives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Compare Kindora&apos;s documented workflows and plan details with your organization&apos;s requirements.
            </p>
        </FadeInUp>
    );
}

// ─── Animated Trusted Strip ──────────────────────────────────────────────────
export function AnimatedTrustBadges() {
    const badges = [
        { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "Encrypted connections" },
        { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Role-Based Access" },
        { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", label: "Email support on Starter" },
        { icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z", label: "Cloud-based access" },
        { icon: "M12 18h.01M8 21h8a2 2 0 002-2v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2a2 2 0 002 2zM12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707", label: "Priority email support on Professional" },
        { icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", label: "Dedicated Enterprise support manager" },
    ];

    return (
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12" staggerDelay={0.07}>
            {badges.map((badge) => (
                <StaggerItem key={badge.label}>
                    <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-[#2563eb]/20 flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#60a5fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={badge.icon} />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-300 text-center">{badge.label}</span>
                    </div>
                </StaggerItem>
            ))}
        </StaggerContainer>
    );
}

// ─── Animated Feature Grid ───────────────────────────────────────────────────
export function AnimatedFeatureGrid({ features }: {
    features: { name: string; icon: string; href: string }[];
}) {
    return (
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6" staggerDelay={0.05}>
            {features.map((feature) => (
                <StaggerItem key={feature.name}>
                    <Link
                        href={feature.href}
                        className="group flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-[#2563eb]/30 hover:shadow-lg transition-all duration-300 h-full"
                    >
                        <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-[#2563eb]/10 flex items-center justify-center text-gray-600 group-hover:text-[#2563eb] transition-all duration-300 mb-4">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-800 text-center group-hover:text-[#2563eb] transition-colors">
                            {feature.name}
                        </span>
                    </Link>
                </StaggerItem>
            ))}
        </StaggerContainer>
    );
}

// ─── Screenshot Gallery ───────────────────────────────────────────────────────
import { useState } from "react";
import Image from "next/image";

export function AnimatedScreenshotGallery() {
    const tabs = [
        {
            id: "donors",
            label: "Donor Management",
            icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
            color: "from-blue-500 to-blue-700",
            image: "/kindora/screenshots/donor-profile.png",
            caption: "Donor Profile — full giving history at a glance",
            headline: "Know every donor inside and out",
            description: "See total donated, average gift, last gift date, contact info, and donation history — all in a single, beautiful donor profile.",
            features: ["Donation history timeline", "Send email directly from profile", "Log donations instantly", "Donor engagement stats"],
            href: "/kindora/features/donor-management",
        },
        {
            id: "reports",
            label: "Reports & Analytics",
            icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
            color: "from-violet-500 to-violet-700",
            image: "/kindora/screenshots/reports.png",
            caption: "Reports — financial + program analytics in one view",
            headline: "Board-ready reports in one click",
            description: "View total revenue, expenses, net income, and clients served. Export PDF or Excel reports for board meetings and grant compliance.",
            features: ["Program enrollment charts", "Financial statements", "Donor analysis reports", "Export to PDF & Excel"],
            href: "/kindora/features/reporting",
        },
        {
            id: "grants",
            label: "Grant Tracking",
            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
            color: "from-emerald-500 to-emerald-700",
            image: "/kindora/screenshots/grants.png",
            caption: "Grants & Receipts — track every dollar from award to receipt",
            headline: "Never miss a grant deadline again",
            description: "Track awarded grants, pending decisions, and prospects. Monitor funds received vs. pending, and maintain complete funder relationships.",
            features: ["Award & receipt tracking", "Prospect pipeline", "Funds tracking dashboard", "Grant status summaries"],
            href: "/kindora/features/grant-management",
        },
        {
            id: "finance",
            label: "Financial Management",
            icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
            color: "from-orange-500 to-orange-700",
            image: "/kindora/screenshots/budget.png",
            caption: "Budget Management — create and track budgets by program",
            headline: "Full nonprofit accounting built in",
            description: "Create program or organizational budgets, track spending, and manage your chart of accounts — no separate accounting software needed.",
            features: ["Program budgets", "FY budget planning", "Expense tracking", "Cost allocation"],
            href: "/kindora/features/financial-management",
        },
    ];

    const [activeTab, setActiveTab] = useState(0);
    const active = tabs[activeTab];

    return (
        <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8faff] to-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <FadeInUp className="text-center mb-12">
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">Real Product Screenshots</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">See it in action</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        No mock-ups. No stock photos. This is the real Kindora — built for nonprofits like yours.
                    </p>
                </FadeInUp>

                {/* Tabs */}
                <FadeInUp delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
                    {tabs.map((tab, i) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(i)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === i
                                ? "bg-[#2563eb] text-white shadow-lg shadow-blue-500/30 scale-105"
                                : "bg-white text-gray-600 border border-gray-200 hover:border-[#2563eb]/40 hover:text-[#2563eb]"
                                }`}
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tab.icon} />
                            </svg>
                            {tab.label}
                        </button>
                    ))}
                </FadeInUp>

                {/* Content */}
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                    {/* Left: info */}
                    <ScaleIn key={active.id} className="lg:col-span-2 order-2 lg:order-1">
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${active.color} text-white text-xs font-semibold mb-4`}>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={active.icon} />
                            </svg>
                            {active.label}
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{active.headline}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{active.description}</p>
                        <ul className="space-y-2.5 mb-8">
                            {active.features.map((f) => (
                                <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                                    <span className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center shrink-0">
                                        <svg className="w-3 h-3 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <Link
                            href={active.href}
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5"
                        >
                            Explore {active.label}
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </ScaleIn>

                    {/* Right: screenshot */}
                    <ScaleIn key={`img-${active.id}`} delay={0.05} className="lg:col-span-3 order-1 lg:order-2">
                        <div className="relative">
                            {/* Browser chrome frame */}
                            <div className="bg-gray-100 rounded-t-xl border border-gray-200 border-b-0 px-4 py-3 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 ml-3 border border-gray-200">
                                    cad.spaceaiapp.com/kindora
                                </div>
                            </div>
                            {/* Screenshot */}
                            <div className="relative border border-gray-200 border-t-0 rounded-b-xl overflow-hidden shadow-2xl shadow-gray-900/10">
                                <Image
                                    src={active.image}
                                    alt={active.caption}
                                    width={1200}
                                    height={720}
                                    className="w-full h-auto object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 900px"
                                />
                                {/* Caption overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-3 pt-8">
                                    <p className="text-xs text-white/90 font-medium">{active.caption}</p>
                                </div>
                            </div>
                            {/* Glow effect */}
                            <div className={`absolute -inset-4 bg-gradient-to-r ${active.color} opacity-10 blur-2xl rounded-3xl -z-10`} />
                        </div>
                    </ScaleIn>
                </div>
            </div>
        </section>
    );
}
