import Image from "next/image";
import Link from "next/link";

function WaveformIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="2" y="9" width="2.5" height="6" rx="1.25" />
      <rect x="6.5" y="5" width="2.5" height="14" rx="1.25" />
      <rect x="11" y="7.5" width="2.5" height="9" rx="1.25" />
      <rect x="15.5" y="3.5" width="2.5" height="17" rx="1.25" />
      <rect x="20" y="9.5" width="2.5" height="5" rx="1.25" />
    </svg>
  );
}

function BrandMark() {
  return (
    <span
      className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#2563eb] text-white shrink-0"
      aria-hidden="true"
    >
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    </span>
  );
}

const roomStructure = [
  { label: "1. Company Overview & Pitch Deck", files: "8 files" },
  { label: "2. Financial Statements (FY23–FY25)", files: "14 files" },
  { label: "3. Cap Table & Equity Agreements", files: "6 files" },
];

const trustItems = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    title: "Local Data Servers",
    description:
      "Deal data is locally hosted in the USA, EU, UAE & India.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "On-premise Setup",
    description:
      "Take control of your data with enterprise on-premise deployment.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18 8a6 6 0 10-12 0v7a3 3 0 003 3h1a1 1 0 001-1v-4a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 001 1h1a3 3 0 003-3V8z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 14v-2a8 8 0 0116 0v2"
        />
      </svg>
    ),
    title: "24/7 Support",
    description:
      "Get 24/7 localised support for any platform related queries.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.918 13.918 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.131c-.645-2.264-2.867-3.904-5.839-3.904S9.473 6.504 8.828 8.768M15 6.25a2.75 2.75 0 11-5.5 0 2.75 2.75 0 015.5 0z"
        />
      </svg>
    ),
    title: "Top-notch Security",
    description:
      "SpaceNexus is audited and certified by industry-leading standards.",
  },
];

export default function SmartFeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="smart-features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10 lg:mb-12">
          <h2
            id="smart-features-heading"
            className="text-3xl sm:text-4xl font-bold leading-tight"
          >
            <span className="text-[#2563eb] block">Smarter Deal Rooms,</span>
            <span className="text-gray-900 block">Action-ready Insights</span>
          </h2>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center self-start px-6 py-3.5 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 min-h-[44px] sm:mt-2"
          >
            Get a personalized Demo
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Card — Deal Room Builder */}
          <div className="rounded-2xl border border-gray-200 p-6 lg:p-8 flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center">
              Build smarter Deal Rooms
            </h3>
            <p className="text-gray-600 text-center mt-3 mb-8 max-w-md mx-auto">
              Generate a complete data room with folders, index and permissions
              from a single prompt.
            </p>

            <div className="flex-1 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-start justify-end gap-3">
                  <p className="text-sm sm:text-base text-gray-800 text-right max-w-xs">
                    Set up a Series A data room for our fintech startup.
                  </p>
                  <WaveformIcon className="w-5 h-5 text-gray-900 shrink-0 mt-1" />
                </div>

                <div className="flex items-center gap-2">
                  <BrandMark />
                  <p className="text-sm sm:text-base text-[#2563eb]">
                    Sure, here&apos;s your deal room structure.
                  </p>
                </div>

                <div className="relative border border-[#2563eb] rounded-xl p-4 sm:p-5 pb-12 bg-white">
                  <ul className="space-y-3">
                    {roomStructure.map((item) => (
                      <li
                        key={item.label}
                        className="flex items-center gap-3 text-sm sm:text-base text-gray-800 border border-gray-200 rounded-lg px-4 py-3 bg-white"
                      >
                        <svg
                          className="w-4 h-4 text-[#2563eb] shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          />
                        </svg>
                        <span className="flex-1 min-w-0">{item.label}</span>
                        <span className="text-xs text-gray-400 shrink-0">
                          {item.files}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <span className="absolute -bottom-3 right-4 inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-[#2563eb] rounded-lg shadow-md">
                    + Add Folders
                  </span>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-400 bg-white">
                what type of deal room do you want to create?
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Insights Card */}
            <div className="rounded-2xl border border-gray-200 p-6 lg:p-8 flex flex-col flex-1">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center">
                Get action-ready Insights
              </h3>
              <p className="text-gray-600 text-center mt-3 mb-8 max-w-md mx-auto">
                Ask questions and get powerful insights into buyer behaviour,
                engagement and deal readiness, powered by AI.
              </p>

              <div className="flex-1 flex flex-col gap-5">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm sm:text-base text-gray-800">
                    Which buyers viewed my{" "}
                    <span className="text-orange-600">
                      Financial Model
                    </span>{" "}
                    the most and how can I boost my{" "}
                    <span className="text-[#2563eb]">Deal Value</span>?
                  </p>
                  <WaveformIcon className="w-5 h-5 text-gray-900 shrink-0 mt-1" />
                </div>

                <div className="flex items-start gap-2">
                  <BrandMark />
                  <p className="text-sm sm:text-base text-[#2563eb]">
                    Acme Corp leads with 85% engagement — answer their open Q&amp;A
                    on the financial model to move the deal forward.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm bg-[#f8f9fa]">
                  <Image
                    src="/spacenexus/screenshots/vdr-analytics.png"
                    alt="SpaceNexus buyer engagement analytics dashboard"
                    width={1309}
                    height={655}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto"
                  />
                </div>

                <div className="mt-auto border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-400 bg-white">
                  ask for insights
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Row */}
        <div className="mt-16 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {trustItems.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#2563eb] mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#2563eb] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
