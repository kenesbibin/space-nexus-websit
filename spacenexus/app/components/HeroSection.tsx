import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#f8f9fa]"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-600">
                Virtual Data Room Software · Trusted by 500+ enterprises
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6"
            >
              AI-Powered Virtual Data Room Software
              <br />
              <span className="text-gradient">for M&A, Fundraising & Legal Deals</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg sm:text-xl text-gray-600 mb-10 max-w-xl"
            >
              Virtual data room software purpose-built for M&A, capital raising, and legal transactions. AI-powered document processing, SOC 2 certified, and live in under 24 hours.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row sm:flex-wrap items-start gap-4 mb-12"
            >
              <Link
                href="/demo"
                className="inline-flex items-center px-6 py-3.5 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                Talk to Founders
                <svg
                  className="ml-2 w-4 h-4"
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
              <Link
                href="/features"
                className="inline-flex items-center px-6 py-3.5 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-full transition-all duration-200"
              >
                Explore Features
              </Link>
              <a
                href="https://app.pmspace.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3.5 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-full transition-all duration-200"
              >
                Try for Free
              </a>
            </div>

            {/* Trust Indicator */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-sm text-gray-600 mb-3">
                Built by a team from:
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                <div className="text-gray-600 font-semibold text-xs sm:text-sm">
                  Fortune 500
                </div>
                <div className="text-gray-600 font-semibold text-xs sm:text-sm">
                  Big 4 Consulting
                </div>
                <div className="text-gray-600 font-semibold text-xs sm:text-sm">
                  Top Investment Banks
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - M&A Deal Flow Visualization */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Decorative Background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl" />

            {/* Main Card - Deal Flow Visualization */}
            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-5 sm:p-8 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    Active Deal Room
                  </span>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Live
                </span>
              </div>

              {/* Deal Parties Visualization */}
              <div className="relative">
                {/* Connecting Lines */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  style={{ zIndex: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                      <stop
                        offset="50%"
                        stopColor="#2563eb"
                        stopOpacity="0.6"
                      />
                      <stop
                        offset="100%"
                        stopColor="#2563eb"
                        stopOpacity="0.3"
                      />
                    </linearGradient>
                  </defs>
                  {/* Lines from Seller to Center */}
                  <path
                    d="M 60 60 Q 150 80 150 120"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4 4"
                  >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="8"
                        to="0"
                        dur="1s"
                        repeatCount="1"
                      />
                    </path>
                    {/* Lines from Buyer to Center */}
                    <path
                      d="M 240 60 Q 150 80 150 120"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="4 4"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="8"
                        to="0"
                        dur="1s"
                        repeatCount="1"
                      />
                    </path>
                    {/* Lines from Center to Advisors */}
                    <path
                      d="M 150 160 Q 80 180 60 200"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="4 4"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="8"
                        dur="1s"
                        repeatCount="1"
                      />
                    </path>
                    <path
                      d="M 150 160 Q 220 180 240 200"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="4 4"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="8"
                        dur="1s"
                        repeatCount="1"
                      />
                    </path>
                </svg>

                {/* Top Row - Seller & Buyer */}
                <div className="flex justify-between mb-6 relative z-10">
                  {/* Seller Side */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/25 mb-2">
                      <svg
                        className="w-7 h-7 text-white"
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
                    </div>
                    <span className="text-xs font-semibold text-gray-900">
                      Seller
                    </span>
                    <span className="text-[10px] text-gray-600">
                      Target Company
                    </span>
                  </div>

                  {/* Buyer Side */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 mb-2">
                      <svg
                        className="w-7 h-7 text-white"
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
                    </div>
                    <span className="text-xs font-semibold text-gray-900">
                      Buyer
                    </span>
                    <span className="text-[10px] text-gray-600">
                      Acquiring Party
                    </span>
                  </div>
                </div>

                {/* Center - Virtual Data Room */}
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center shadow-xl shadow-blue-500/30">
                      <svg
                        className="w-10 h-10 text-white"
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
                    {/* Pulsing Ring */}
                    <div
                      className="absolute -inset-2 rounded-2xl border-2 border-[#2563eb]/30 animate-ping"
                      style={{ animationDuration: "2s" }}
                    />
                    <div className="absolute -inset-1 rounded-2xl border border-[#2563eb]/20" />
                  </div>
                </div>

                {/* Center Label */}
                <div className="text-center mb-6 relative z-10">
                  <span className="text-sm font-bold text-gray-900">
                    Secure Data Room
                  </span>
                  <div className="flex items-center justify-center gap-3 mt-1">
                    <span className="text-[10px] text-gray-600 flex items-center gap-1">
                      <svg
                        className="w-3 h-3 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      256-bit Encrypted
                    </span>
                    <span className="text-[10px] text-gray-600 flex items-center gap-1">
                      <svg
                        className="w-3 h-3 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      Full Audit Trail
                    </span>
                  </div>
                </div>

                {/* Bottom Row - Advisors */}
                <div className="flex justify-between relative z-10">
                  {/* Legal Advisors */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/25 mb-2">
                      <svg
                        className="w-6 h-6 text-white"
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
                    </div>
                    <span className="text-xs font-semibold text-gray-900">
                      Legal
                    </span>
                    <span className="text-[10px] text-gray-600">Advisors</span>
                  </div>

                  {/* Financial Advisors */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-lg shadow-sky-500/25 mb-2">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-900">
                      Financial
                    </span>
                    <span className="text-[10px] text-gray-600">Advisors</span>
                  </div>
                </div>
              </div>

              {/* Activity Stats */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">2,847</div>
                    <div className="text-[10px] text-gray-600">Documents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">156</div>
                    <div className="text-[10px] text-gray-600">
                      Active Users
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">99.9%</div>
                    <div className="text-[10px] text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
