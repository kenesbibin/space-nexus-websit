"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const vdrNavLinks = [
  { name: "Features", href: "/features" },
  { name: "Solutions", href: "/solutions/mergers-and-acquisitions-vdr" },
  { name: "Pricing", href: "/pricing" },
  { name: "Security", href: "/security" },
  { name: "Tools", href: "/tools" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

const kindoraNavLinks = [
  { name: "Features", href: "/kindora/features" },
  { name: "Solutions", href: "/kindora/solutions" },
  { name: "Free Tools", href: "/kindora/free-tools" },
  { name: "Pricing", href: "/kindora/pricing" },
];

const kindoraFeatures = [
  {
    name: "Dashboard & Analytics",
    href: "/kindora/features/dashboard-analytics",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    description: "Real-time KPIs & insights",
  },
  {
    name: "Donor Management",
    href: "/kindora/features/donor-management",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    description: "Donor profiles & donations",
  },
  {
    name: "Campaign Management",
    href: "/kindora/features/campaign-management",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
    description: "Fundraising campaigns",
  },
  {
    name: "Grant Management",
    href: "/kindora/features/grant-management",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    description: "Grant lifecycle tracking",
  },
  {
    name: "Client & Programs",
    href: "/kindora/features/client-management",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    description: "Service enrollment",
  },
  {
    name: "Financial Management",
    href: "/kindora/features/financial-management",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    description: "Accounts & budgets",
  },
  {
    name: "Reporting & Export",
    href: "/kindora/features/reporting",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    description: "PDF & Excel exports",
  },
  {
    name: "Communications",
    href: "/kindora/features/communications",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    description: "Email & templates",
  },
];

const industries = [
  {
    name: "Private Equity",
    href: "/industries/private-equity",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    description: "Portfolio management & exits",
  },
  {
    name: "Investment Banking",
    href: "/industries/investment-banking",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    description: "M&A advisory & capital markets",
  },
  {
    name: "Law Firms",
    href: "/industries/law-firms",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
    description: "Legal due diligence & transactions",
  },
  {
    name: "Real Estate",
    href: "/industries/real-estate",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    description: "Property transactions & asset sales",
  },
  {
    name: "Life Sciences",
    href: "/industries/life-sciences",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    description: "Pharma, biotech & healthcare",
  },
  {
    name: "Technology",
    href: "/industries/technology",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    description: "Tech M&A & venture deals",
  },
  {
    name: "Energy & Infrastructure",
    href: "/industries/energy-infrastructure",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    description: "Power, utilities & infrastructure",
  },
  {
    name: "Corporate Development",
    href: "/industries/corporate-development",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    description: "Strategic acquisitions & divestitures",
  },
];

export default function Header() {
  const pathname = usePathname();
  const isKindora = pathname?.startsWith("/kindora");

  // All hooks must be declared before any early returns (React Rules of Hooks)
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [kindoraFeaturesOpen, setKindoraFeaturesOpen] = useState(false);
  const [mobileKindoraFeaturesOpen, setMobileKindoraFeaturesOpen] =
    useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);

  const scrollToPhone = () => {
    const phoneSection = document.getElementById('footer-phones');
    if (phoneSection) {
      phoneSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setIndustriesOpen(false);
    setKindoraFeaturesOpen(false);
    setProductsOpen(false);
    setContactOpen(false);
    setEcosystemOpen(false);
    setMobileContactOpen(false);
  }, [pathname]);

  // Kindora has its own KindoraNav rendered in kindora/layout.tsx
  if (isKindora) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
        : "bg-white"
        }`}
      role="banner"
    >
      {/* Premium top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563eb] to-transparent opacity-80" />

      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Context Aware */}
          {isKindora ? (
            <Link
              href="/kindora"
              className="flex items-center gap-2.5 group"
              aria-label="Kindora NGO OS Home"
            >
              <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/icononly_transparent_nobuffer.png"
                  alt="Kindora nonprofit management platform logo"
                  fill
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-black tracking-tight text-[#2563eb] transition-colors duration-300 group-hover:text-[#1d4ed8]">
                  KINDORA
                </span>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  NGO OS
                </span>
              </div>
            </Link>
          ) : (
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Space Nexus Home"
            >
              <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/icononly_transparent_nobuffer.png"
                  alt="SpaceNexus secure virtual data room logo"
                  fill
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-black tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-gray-700">
                  SPACE
                </span>
                <span className="text-xl font-black tracking-tight text-[#2563eb] transition-colors duration-300 group-hover:text-[#1d4ed8]">
                  NEXUS
                </span>
              </div>
            </Link>
          )}

          {/* Desktop Navigation - Context Aware */}
          <div className="hidden lg:flex items-center space-x-0.5">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-100 group min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto whitespace-nowrap">
                Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 pt-3 w-[calc(100vw-2rem)] sm:w-[340px] max-w-[340px]">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-200 p-4 animate-fade-in ring-1 ring-gray-100">
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider px-3 mb-2">
                      Our Products
                    </p>
                    <Link
                      href="/"
                      className={`flex items-start gap-3 p-3 rounded-xl transition-colors group ${!isKindora ? "bg-blue-50" : "hover:bg-gray-50"}`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                          Space Nexus VDR
                        </p>
                        <p className="text-xs text-gray-600">
                          Virtual Data Room for M&A & due diligence
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/kindora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-start gap-3 p-3 rounded-xl transition-colors group ${isKindora ? "bg-blue-50" : "hover:bg-gray-50"}`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                          Kindora NGO OS
                        </p>
                        <p className="text-xs text-gray-600">
                          Complete operating system for nonprofits
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {isKindora ? (
              <>
                {/* Kindora Features Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setKindoraFeaturesOpen(true)}
                  onMouseLeave={() => setKindoraFeaturesOpen(false)}
                >
                  <button className="relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-100 group min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto whitespace-nowrap">
                    Features
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${kindoraFeaturesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {kindoraFeaturesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[calc(100vw-2rem)] sm:w-[600px] max-w-[600px]">
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-200 p-6 animate-fade-in ring-1 ring-gray-100">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-semibold text-gray-900">
                            Platform Features
                          </h3>
                          <Link
                            href="/kindora/features"
                            className="text-xs font-medium text-[#2563eb] hover:text-[#1d4ed8] flex items-center gap-1"
                          >
                            View All
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {kindoraFeatures.map((feature) => (
                            <Link
                              key={feature.name}
                              href={feature.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#2563eb] flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                                {feature.icon}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900 group-hover:text-[#2563eb] transition-colors">
                                  {feature.name}
                                </p>
                                <p className="text-xs text-gray-600">
                                  {feature.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Kindora Nav Links */}
                {kindoraNavLinks
                  .filter((link) => link.name !== "Features")
                  .map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="relative px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-100 group whitespace-nowrap"
                    >
                      {link.name}
                      <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#2563eb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                    </Link>
                  ))}
              </>
            ) : (
              <>
                {/* VDR Nav Links */}
                {vdrNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-100 group whitespace-nowrap"
                  >
                    {link.name}
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#2563eb] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                  </Link>
                ))}

                {/* Industries Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIndustriesOpen(true)}
                  onMouseLeave={() => setIndustriesOpen(false)}
                >
                  <button className="relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-100 group min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto whitespace-nowrap">
                    Industries
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {industriesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[calc(100vw-2rem)] sm:w-[600px] max-w-[600px]">
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-200 p-6 animate-fade-in ring-1 ring-gray-100">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-semibold text-gray-900">
                            Industries We Serve
                          </h3>
                          <Link
                            href="/industries"
                            className="text-xs font-medium text-[#2563eb] hover:text-[#1d4ed8] flex items-center gap-1"
                          >
                            View All
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {industries.map((industry) => (
                            <Link
                              key={industry.name}
                              href={industry.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#2563eb] flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                                {industry.icon}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900 group-hover:text-[#2563eb] transition-colors">
                                  {industry.name}
                                </p>
                                <p className="text-xs text-gray-600">
                                  {industry.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              href={isKindora ? "/kindora/demo" : "/demo"}
              className="inline-flex items-center px-4 py-2.5 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Request a Demo
            </Link>

            <a
              href={isKindora ? "https://kindora.pmspace.ai/login?redirectTo=%2F" : "https://app.pmspace.ai/login?type=SpaceVDR&moduleId=add00f0c-0428-423e-bfa4-01032205ed46&invite=guest&orgName=SPACE+VDR"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2.5 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap"
            >
              Try for Free
            </a>

            {/* Phone & Ecosystem Icons */}
            <div className="flex items-center gap-2">
              {/* Phone Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setContactOpen(true)}
                onMouseLeave={() => setContactOpen(false)}
              >
                <button className="p-2.5 text-gray-600 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-colors min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto" aria-label="Contact Us">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>

              {contactOpen && (
                <div className="absolute top-full right-0 pt-3 w-[calc(100vw-2rem)] sm:w-[400px] max-w-[400px]">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-200 p-5 animate-fade-in ring-1 ring-gray-100">
                    <div className="grid grid-cols-2 gap-2.5">
                      <a href="tel:+16464215740" className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl px-3 py-2.5 transition-colors group min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                        <img src="https://flagcdn.com/w40/us.png" alt="USA" className="w-6 h-auto rounded-sm flex-shrink-0" loading="lazy" />
                        <div className="min-w-0">
                          <p className="text-gray-900 text-sm font-semibold group-hover:text-[#2563eb] transition-colors truncate">+1 646 421 5740</p>
                          <p className="text-gray-600 text-[11px]">USA</p>
                        </div>
                      </a>
                      <a href="tel:+19793269493" className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl px-3 py-2.5 transition-colors group min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                        <img src="https://flagcdn.com/w40/ca.png" alt="Canada" className="w-6 h-auto rounded-sm flex-shrink-0" loading="lazy" />
                        <div className="min-w-0">
                          <p className="text-gray-900 text-sm font-semibold group-hover:text-[#2563eb] transition-colors truncate">+1 (979) 326-9493</p>
                          <p className="text-gray-600 text-[11px]">Canada</p>
                        </div>
                      </a>
                      <a href="tel:+971562567509" className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl px-3 py-2.5 transition-colors group min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                        <img src="https://flagcdn.com/w40/ae.png" alt="UAE" className="w-6 h-auto rounded-sm flex-shrink-0" loading="lazy" />
                        <div className="min-w-0">
                          <p className="text-gray-900 text-sm font-semibold group-hover:text-[#2563eb] transition-colors truncate">+971 56 256 7509</p>
                          <p className="text-gray-600 text-[11px]">UAE</p>
                        </div>
                      </a>
                      <a href="tel:+966562081999" className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl px-3 py-2.5 transition-colors group min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                        <img src="https://flagcdn.com/w40/sa.png" alt="Saudi Arabia" className="w-6 h-auto rounded-sm flex-shrink-0" loading="lazy" />
                        <div className="min-w-0">
                          <p className="text-gray-900 text-sm font-semibold group-hover:text-[#2563eb] transition-colors truncate">+966 56 208 1999</p>
                          <p className="text-gray-600 text-[11px]">Saudi Arabia</p>
                        </div>
                      </a>
                      <a href="tel:+96597243755" className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl px-3 py-2.5 transition-colors group min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                        <img src="https://flagcdn.com/w40/kw.png" alt="Kuwait" className="w-6 h-auto rounded-sm flex-shrink-0" loading="lazy" />
                        <div className="min-w-0">
                          <p className="text-gray-900 text-sm font-semibold group-hover:text-[#2563eb] transition-colors truncate">+965 9724 3755</p>
                          <p className="text-gray-600 text-[11px]">Kuwait</p>
                        </div>
                      </a>
                      <a href="tel:+6586111900" className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl px-3 py-2.5 transition-colors group min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                        <img src="https://flagcdn.com/w40/sg.png" alt="Singapore" className="w-6 h-auto rounded-sm flex-shrink-0" loading="lazy" />
                        <div className="min-w-0">
                          <p className="text-gray-900 text-sm font-semibold group-hover:text-[#2563eb] transition-colors truncate">+65 86 111 900</p>
                          <p className="text-gray-600 text-[11px]">Singapore</p>
                        </div>
                      </a>
                      <a href="tel:+60106607357" className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl px-3 py-2.5 transition-colors group min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                        <img src="https://flagcdn.com/w40/my.png" alt="Malaysia" className="w-6 h-auto rounded-sm flex-shrink-0" loading="lazy" />
                        <div className="min-w-0">
                          <p className="text-gray-900 text-sm font-semibold group-hover:text-[#2563eb] transition-colors truncate">+60 10660 7357</p>
                          <p className="text-gray-600 text-[11px]">Malaysia</p>
                        </div>
                      </a>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <a href="tel:+16464215740" className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-[#2563eb] hover:bg-gray-50 rounded-xl transition-colors min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
                        Call main office
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
              </div>

              {/* Ecosystem Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setEcosystemOpen(true)}
                onMouseLeave={() => setEcosystemOpen(false)}
              >
                <button className="p-2.5 text-gray-600 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-colors min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto" aria-label="Ecosystem">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /></svg>
                </button>

                {ecosystemOpen && (
                  <div className="absolute top-full right-0 pt-3 w-[calc(100vw-2rem)] sm:w-[420px] max-w-[420px]">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-200 p-5 animate-fade-in ring-1 ring-gray-100">
                      <p className="text-[11px] font-semibold text-gray-600 uppercase tracking-widest px-1 mb-4">Space AI Ecosystem</p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { name: "PMSpace", desc: "Construction Management", href: "https://pmspace.ai/", icon: (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>
                          )},
                          { name: "Space Sign", desc: "E-Signature & Contracts", href: "https://space-sign.ai/", icon: (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                          )},
                          { name: "SpaceCapture", desc: "Field Inspection", href: "https://spacecapture.ai/", icon: (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" /></svg>
                          )},
                          { name: "SpaceLizit", desc: "Immigration AI", href: "https://spacelizit.com/", icon: (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                          )},
                          { name: "SpaceHR", desc: "HRMS & Payroll", href: "https://spacehr.net/", icon: (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                          )},
                          { name: "SpaceLean", desc: "Lean Scheduling", href: "https://spacelean.ai/", icon: (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                          )},
                          { name: "SpaceNexus", desc: "Virtual Data Room", href: "https://spacenexus.net/", icon: (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                          )},
                          { name: "SpaceCRM", desc: "CRM & Outreach", href: "https://spacecrm.net/", icon: (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                          )},
                        ].map((product) => (
                          <a
                            key={product.name}
                            href={product.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-600 group-hover:text-gray-700 group-hover:bg-gray-200 transition-colors">
                              {product.icon}
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors truncate">{product.name}</p>
                              <p className="text-xs text-gray-600 truncate">{product.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

          <a
            href={isKindora ? "https://kindora.pmspace.ai/login?redirectTo=%2F" : "https://app.pmspace.ai/login?type=SpaceVDR&moduleId=add00f0c-0428-423e-bfa4-01032205ed46&invite=guest&orgName=SPACE+VDR"}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex lg:hidden items-center px-3 py-2 text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-full transition-colors whitespace-nowrap"
          >
            Try for Free
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-700 rounded-lg hover:bg-gray-100 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - Slide-in Panel */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="lg:hidden fixed inset-0 bg-black/50 z-40 animate-fade-in"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Panel */}
            <div className="lg:hidden fixed top-0 right-0 h-full w-[85vw] max-w-[400px] bg-white z-50 shadow-2xl animate-slide-in-right overflow-y-auto">
              <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-bold text-gray-900">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-1">
                  {/* Mobile Products Accordion */}
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto"
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    >
                      Products
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileProductsOpen && (
                      <div className="pl-4 space-y-1 mt-1">
                        <Link
                          href="/"
                          className="flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium">Space Nexus VDR</span>
                        </Link>
                        <Link
                          href="/kindora"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium">Kindora NGO OS</span>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* VDR Mobile Nav Links */}
                  {vdrNavLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}

                  {/* Mobile Industries Accordion */}
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto"
                      onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                    >
                      Industries
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileIndustriesOpen && (
                      <div className="pl-4 space-y-1 mt-1">
                        {industries.map((industry) => (
                          <Link
                            key={industry.name}
                            href={industry.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {industry.name}
                          </Link>
                        ))}
                        <Link
                          href="/industries"
                          className="block px-4 py-2 text-sm font-medium text-[#2563eb] hover:bg-blue-100 rounded-lg transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All Industries →
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Mobile Contact Numbers Accordion */}
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors min-h-[44px]"
                      onClick={() => setMobileContactOpen(!mobileContactOpen)}
                    >
                      Contact Us
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobileContactOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileContactOpen && (
                      <div className="pl-4 pr-4 space-y-2 mt-1">
                        {[
                          { country: "USA", phone: "+1 646 421 5740", flag: "us", tel: "+16464215740" },
                          { country: "Canada", phone: "+1 (979) 326-9493", flag: "ca", tel: "+19793269493" },
                          { country: "UAE", phone: "+971 56 256 7509", flag: "ae", tel: "+971562567509" },
                          { country: "Saudi Arabia", phone: "+966 56 208 1999", flag: "sa", tel: "+966562081999" },
                          { country: "Kuwait", phone: "+965 9724 3755", flag: "kw", tel: "+96597243755" },
                          { country: "Singapore", phone: "+65 86 111 900", flag: "sg", tel: "+6586111900" },
                          { country: "Malaysia", phone: "+60 10660 7357", flag: "my", tel: "+60106607357" },
                        ].map((item) => (
                          <a
                            key={item.country}
                            href={`tel:${item.tel}`}
                            className="flex items-center gap-2 p-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors"
                          >
                            <img src={`https://flagcdn.com/w40/${item.flag}.png`} alt={item.country} className="w-5 h-auto rounded-sm flex-shrink-0" loading="lazy" />
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-gray-900 truncate">{item.phone}</p>
                              <p className="text-[10px] text-gray-500">{item.country}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <hr className="border-gray-200 my-4" />
                  <Link
                    href="/demo"
                    className="block mx-4 py-3 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full text-center transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Request a Demo
                  </Link>
                  <a
                    href={isKindora ? "https://kindora.pmspace.ai/login?redirectTo=%2F" : "https://app.pmspace.ai/login?type=SpaceVDR&moduleId=add00f0c-0428-423e-bfa4-01032205ed46&invite=guest&orgName=SPACE+VDR"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mx-4 mt-3 py-3 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-full text-center transition-colors"
                  >
                    Try for Free
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
