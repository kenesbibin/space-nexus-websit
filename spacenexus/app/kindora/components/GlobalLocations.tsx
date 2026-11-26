"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, ExternalLink, Phone, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const locations = [
  {
    id: "usa",
    name: "USA",
    address: "2500 Marconi Ave, Ste 101,\nSacramento, CA 95821 USA",
    lat: 38.61512,
    lng: -121.38384,
    flag: "https://flagcdn.com/us.svg",
    phone: "+1 646 421 5740",
    mapUrl: "https://www.google.com/maps?q=38.61512,-121.38384",
  },
  {
    id: "singapore",
    name: "Singapore",
    address: "PMSPACE AI, #04-39,\n7 Soon Lee Street,\nSingapore 627608",
    lat: 1.32151,
    lng: 103.73999,
    flag: "https://flagcdn.com/sg.svg",
    phone: "+65 86 111 900",
    mapQuery: "PMSPACE AI, 7 Soon Lee Street, Singapore 627608",
    mapUrl: "https://www.google.com/maps?q=1.32151,103.73999",
  },
  {
    id: "dubai",
    name: "Dubai",
    address: "Dubai, United Arab Emirates",
    lat: 25.2048,
    lng: 55.2708,
    flag: "https://flagcdn.com/ae.svg",
    phone: "+971 56 256 7509",
    mapUrl: "https://www.google.com/maps?q=25.2048,55.2708",
  },
  {
    id: "india",
    name: "India",
    address: "New Delhi, India",
    lat: 28.6139,
    lng: 77.209,
    flag: "https://flagcdn.com/in.svg",
    phone: "+91 22 1234 5678",
    mapUrl: "https://www.google.com/maps?q=28.6139,77.209",
  },
  {
    id: "kuwait",
    name: "Kuwait",
    address: "Kuwait City, Kuwait",
    lat: 29.3759,
    lng: 47.9774,
    flag: "https://flagcdn.com/kw.svg",
    phone: "+965 9724 3755",
    mapUrl: "https://www.google.com/maps?q=29.3759,47.9774",
  },
  {
    id: "canada",
    name: "Canada",
    address: "Toronto, Ontario, Canada",
    lat: 43.6532,
    lng: -79.3832,
    flag: "https://flagcdn.com/ca.svg",
    phone: "+1 (979) 326-9493",
    mapUrl: "https://www.google.com/maps?q=43.6532,-79.3832",
  },
  {
    id: "hong-kong",
    name: "Hong Kong",
    address: "Hong Kong",
    lat: 22.3193,
    lng: 114.1694,
    flag: "https://flagcdn.com/hk.svg",
    phone: "+852 1234 5678",
    mapUrl: "https://www.google.com/maps?q=22.3193,114.1694",
  },
];

export default function GlobalLocations() {
  const [active, setActive] = useState(0);
  const loc = locations[active];

  const getMapQuery = (l: typeof loc) => {
    if (l.mapQuery) return encodeURIComponent(l.mapQuery);
    return encodeURIComponent(l.address.replace(/\n/g, ", "));
  };

  return (
    <section className="relative overflow-hidden bg-gray-900 py-16 sm:py-20 lg:py-24">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563eb]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-[#1d4ed8]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Find Kindora Around the World
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our global presence and discover where Kindora is helping businesses grow through innovative digital solutions.          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          <div className="flex-1 relative h-[500px] lg:h-[580px] rounded-xl overflow-hidden border border-gray-800 shadow-2xl shadow-[#2563eb]/10">
            <iframe
              key={loc.id}
              title={`Map showing ${loc.name} office location`}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${getMapQuery(loc)}&z=14&output=embed`}
              className="w-full h-full border-0"
              style={{ height: "100%", width: "100%", display: "block" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={loc.id}
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 80, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className="absolute top-3 right-3 z-20 w-72 bg-gray-900/80 backdrop-blur-2xl rounded-xl border border-gray-800 p-4 shadow-2xl"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={loc.flag}
                      alt={`Flag of ${loc.name}`}
                      width={64}
                      height={48}
                      loading="lazy"
                      className="w-8 h-6 rounded-sm object-cover shadow-sm"
                    />
                    <div>
                      <h3 className="text-white font-semibold text-sm">{loc.name}</h3>
                      {loc.phone && <p className="text-gray-500 text-[11px]">{loc.phone}</p>}
                    </div>
                  </div>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-[11px] font-medium hover:shadow-lg hover:shadow-[#2563eb]/30 transition-all duration-300 shrink-0"
                  >
                    <ExternalLink className="w-2.5 h-2.5" />
                    Maps
                  </a>
                </div>

                <div className="flex gap-2">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#2563eb]" />
                  <span className="leading-relaxed whitespace-pre-line text-gray-400 text-xs">{loc.address}</span>
                </div>

                {loc.phone && (
                  <a
                    href={`tel:${loc.phone.replace(/[^+\d]/g, "")}`}
                    className="inline-flex items-center gap-1.5 mt-3 text-[#2563eb] hover:text-[#1d4ed8] text-xs font-medium transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    {loc.phone}
                  </a>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-thin">
            {locations.map((l, i) => (
              <button
                key={l.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl backdrop-blur-xl border text-sm font-medium transition-all duration-300 whitespace-nowrap ${i === active
                    ? "bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] border-[#2563eb]/50 text-white shadow-lg shadow-[#2563eb]/20"
                    : "bg-gray-800/50 border-gray-700/50 text-gray-400 hover:bg-gray-700/50 hover:text-white hover:border-gray-600"
                  }`}
              >
                <Image
                  src={l.flag}
                  alt={`Flag of ${l.name}`}
                  width={48}
                  height={36}
                  loading="lazy"
                  className="w-6 h-[18px] rounded-sm object-cover shadow-sm"
                />
                <span>{l.name}</span>
                <ChevronRight className={`w-3.5 h-3.5 ml-auto hidden lg:block transition-transform duration-300 ${i === active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
