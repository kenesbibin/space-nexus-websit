"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const quickLinks = [
  {
    label: "Features",
    href: "/kindora/features",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    label: "Solutions",
    href: "/kindora/solutions",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055zM20.45 11A9.06 9.06 0 0013 3.55V11h7.45z",
  },
  {
    label: "Pricing",
    href: "/kindora/pricing",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    label: "Blog",
    href: "/kindora/blog",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    label: "Reviews",
    href: "/kindora/consumer-review",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
  {
    label: "About",
    href: "/kindora/about",
    icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const offices = [
  { flag: "🇺🇸", country: "USA", phone: "+1 646 421 5740", tel: "+16464215740", email: "usa@pmspace.ai", address: "2500 Marconi Ave, Ste 101, Sacramento, CA 95821" },
  { flag: "🇨🇦", country: "Canada", phone: "+1 (979) 326-9493", tel: "+19793269493", email: "ca@pmspace.ai", address: "North America Regional Office, Toronto, ON" },
  { flag: "🇦🇪", country: "UAE", phone: "+971 56 256 7509", tel: "+971562567509", email: "uae@pmspace.ai", address: "Middle East Regional Office, Dubai" },
  { flag: "🇸🇦", country: "Saudi Arabia", phone: "+966 56 208 1999", tel: "+966562081999", email: "sa@pmspace.ai", address: "Riyadh, Kingdom of Saudi Arabia" },
  { flag: "🇰🇼", country: "Kuwait", phone: "+965 9724 3755", tel: "+96597243755", email: "kw@pmspace.ai", address: "Kuwait City, Gulf Region Partner" },
  { flag: "🇸🇬", country: "Singapore", phone: "+65 86 111 900", tel: "+6586111900", email: "sg@pmspace.ai", address: "7 Soon Lee St, #04-39 ISPACE Building" },
];

export default function KindoraNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setProductsOpen(false);
    setContactOpen(false);
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) {
        setContactOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
          : "bg-gradient-to-b from-white via-white to-white/95"
      }`}
    >
      {/* Premium top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563eb] to-transparent opacity-80" />

      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/kindora"
            className="flex items-center gap-2.5 group"
            aria-label="Kindora Home"
          >
            <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
              <Image
                src="/icononly_transparent_nobuffer.png"
                alt="Kindora nonprofit management platform logo"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-black tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-gray-700">
                SPACE
              </span>
              <span className="text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed] transition-opacity duration-300 group-hover:opacity-80">
                KINDORA
              </span>
            </div>
          </Link>
          

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-0.5 flex-shrink-0">
            {/* Products Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              onBlurCapture={(e) => {
                if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget as Node)) {
                  setProductsOpen(false);
                }
              }}
            >
              <button
                onFocus={() => setProductsOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") { e.stopPropagation(); setProductsOpen(false); }
                }}
                className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  productsOpen
                    ? "text-[#2563eb] bg-blue-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
                }`}
              >
                Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              

              {productsOpen && (
                <div className="absolute top-full left-0 pt-3 w-[340px]">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 p-4 animate-fade-in ring-1 ring-black/5">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
                      Our Products
                    </p>

                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                      onClick={() => setProductsOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                          Space Nexus VDR
                        </p>
                        <p className="text-xs text-gray-500">
                          Virtual Data Room for M&A & due diligence
                        </p>
                      </div>
                    </a>
                    <a
                      href="/kindora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                      onClick={() => setProductsOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                          Kindora
                        </p>
                        <p className="text-xs text-gray-500">
                          Complete operating system for nonprofits
                        </p>
                        
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {quickLinks.filter((link) => link.label !== "Reviews").map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  isActive(link.href)
                    ? "text-[#2563eb]"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
                }`}
              >
                {link.label}
                
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] transition-transform duration-300 origin-left rounded-full ${
                    isActive(link.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
              
            ))}

            <Link
              href="/kindora/free-tools"
              className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                isActive("/kindora/free-tools")
                  ? "text-[#2563eb]"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
              }`}
            >
              Tools
              <span
                className={`absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] transition-transform duration-300 origin-left rounded-full ${
                  isActive("/kindora/free-tools")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>

            {/* Contact Dropdown */}
            <div
              className="relative"
              ref={contactRef}
              onMouseEnter={() => setContactOpen(true)}
              onMouseLeave={() => setContactOpen(false)}
              onBlurCapture={(e) => {
                if (contactRef.current && !contactRef.current.contains(e.relatedTarget as Node)) {
                  setContactOpen(false);
                }
              }}
            >
              <button
                onFocus={() => setContactOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") { e.stopPropagation(); setContactOpen(false); }
                }}
                className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  contactOpen
                    ? "text-[#2563eb] bg-blue-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
                }`}
              >
                Contact
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${contactOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {contactOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[700px]">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 p-5 animate-fade-in ring-1 ring-black/5">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1 mb-3">
                      Global Offices
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {offices.map((office) => (
                        <div key={office.flag} className="p-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-50">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-lg leading-none">{office.flag}</span>
                            <a href={`tel:${office.tel}`} className="text-sm font-semibold text-gray-900 hover:text-[#2563eb] transition-colors">
                              {office.phone}
                            </a>
                          </div>
                          <a href={`mailto:${office.email}`} className="text-xs text-[#2563eb] hover:text-[#1d4ed8] transition-colors block mb-0.5">
                            {office.email}
                          </a>
                          <p className="text-xs text-gray-500 leading-tight">{office.address}</p>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 mt-3 pt-3 px-1">
                      <Link
                        href="/kindora/contact"
                        onClick={() => setContactOpen(false)}
                        className="flex items-center justify-between w-full py-1.5 text-sm font-medium text-[#2563eb] hover:text-[#1d4ed8] transition-colors"
                      >
                        Send us a message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden xl:flex items-center space-x-2 flex-shrink-0">
            <Link
              href="/kindora/demo"
              className="inline-flex items-center whitespace-nowrap px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Request a Demo
              <svg className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <a
              href="https://kindora.pmspace.ai/login?redirectTo=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center whitespace-nowrap px-4 py-2 text-sm font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Try for Free
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="xl:hidden flex items-center justify-center w-12 h-12 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer — sibling of <nav> to avoid WebKit backdrop-filter compositing bug */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 xl:hidden animate-fade-in"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={mobileRef}
            className="xl:hidden fixed inset-y-0 right-0 w-full max-w-sm z-50 bg-white shadow-2xl border-l border-gray-100 overflow-y-auto animate-slide-in-right"
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100 bg-gradient-to-r from-white to-blue-50/60">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8">
                  <Image
                    src="/icononly_transparent_nobuffer.png"
                    alt="Kindora nonprofit management platform logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-[#2563eb] to-[#7c3aed] bg-clip-text text-transparent">
                  Kindora
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="px-4 py-6 space-y-1">
              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen((v) => !v)}
                  className={`flex items-center justify-between w-full py-3.5 px-4 text-base font-medium rounded-xl transition-colors ${
                    mobileProductsOpen
                      ? "text-[#2563eb] bg-blue-50"
                      : "text-gray-700 hover:text-[#2563eb] hover:bg-blue-50"
                  }`}
                  aria-expanded={mobileProductsOpen}
                >
                  <span className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#7c3aed] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </span>
                    <span>Products</span>
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileProductsOpen && (
                  <div className="ml-6 pl-5 mt-1 border-l-2 border-blue-100 space-y-1">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:text-[#2563eb] hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Space Nexus VDR</p>
                        <p className="text-xs text-gray-500">Virtual Data Room for M&A & due diligence</p>
                      </div>
                    </a>
                    <Link
                      href="/kindora"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:text-[#2563eb] hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Kindora NGO OS</p>
                        <p className="text-xs text-gray-500">Complete operating system for nonprofits</p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

<Link
                href="/kindora/free-tools"
                onClick={() => setMobileOpen(false)}
                className={`group flex items-center gap-4 py-3.5 px-4 text-base font-medium rounded-xl transition-colors ${
                  isActive("/kindora/free-tools")
                    ? "text-[#2563eb] bg-blue-50"
                    : "text-gray-700 hover:text-[#2563eb] hover:bg-blue-50"
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    isActive("/kindora/free-tools")
                      ? "bg-gradient-to-br from-[#2563eb] to-[#7c3aed] text-white"
                      : "bg-blue-50 text-[#2563eb] group-hover:bg-gradient-to-br group-hover:from-[#2563eb] group-hover:to-[#7c3aed] group-hover:text-white"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </span>
                <span>Tools</span>
                <svg
                  className="ml-auto w-4 h-4 text-gray-300 group-hover:text-[#2563eb] group-hover:translate-x-0.5 transition-all"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {quickLinks.filter((link) => link.label !== "Reviews").map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`group flex items-center gap-4 py-3.5 px-4 text-base font-medium rounded-xl transition-colors ${
                    isActive(link.href)
                      ? "text-[#2563eb] bg-blue-50"
                      : "text-gray-700 hover:text-[#2563eb] hover:bg-blue-50"
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive(link.href)
                        ? "bg-gradient-to-br from-[#2563eb] to-[#7c3aed] text-white"
                        : "bg-blue-50 text-[#2563eb] group-hover:bg-gradient-to-br group-hover:from-[#2563eb] group-hover:to-[#7c3aed] group-hover:text-white"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                    </svg>
                  </span>
                  <span>{link.label}</span>
                  <svg
                    className="ml-auto w-4 h-4 text-gray-300 group-hover:text-[#2563eb] group-hover:translate-x-0.5 transition-all"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </nav>
            <div className="px-4 pb-6 space-y-3">
              <div className="border-t border-gray-100 pt-4">
                <a
                  href="tel:+16464215740"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 text-sm font-medium text-gray-600 hover:text-[#2563eb] hover:bg-blue-50 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 646 421 5740
                </a>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/kindora/demo"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300"
                >
                  Request a Demo
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="https://kindora.pmspace.ai/login?redirectTo=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 inline-flex items-center justify-center py-3.5 px-4 text-sm font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300"
                >
                  Try for Free
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
