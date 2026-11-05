"use client";

import { useState } from "react";
import Link from "next/link";

export default function VDRCostEstimatorPage() {
  const [dealSize, setDealSize] = useState(50);
  const [numBuyers, setNumBuyers] = useState(5);
  const [duration, setDuration] = useState(6);
  const [docVolume, setDocVolume] = useState(5000);

  const formatCurrency = (n: number) => `$${n.toLocaleString("en-US")}`;
  const formatNumber = (n: number) => n.toLocaleString("en-US");

  const legacyCost = Math.round(docVolume * 0.1 + docVolume * 0.02 * duration + 5000 + docVolume * 0.01 * numBuyers + 10000);
  const spaceNexusCost = Math.round(3499 + docVolume * 0.015 + 2000);
  const savings = legacyCost - spaceNexusCost;
  const savingsPercent = Math.round((savings / legacyCost) * 100);

  const legacyBreakdown = [
    { label: "Per-page fee", value: formatCurrency(docVolume * 0.1) },
    { label: "Storage (per month)", value: formatCurrency(docVolume * 0.02 * duration) },
    { label: "Setup fee", value: "$5,000" },
    { label: "Buyer access", value: formatCurrency(docVolume * 0.01 * numBuyers) },
    { label: "Additional admin costs", value: "$10,000" },
  ];

  const modernBreakdown = [
    { label: "Flat monthly rate", value: "$3,499" },
    { label: "Cloud storage", value: formatCurrency(docVolume * 0.015) },
    { label: "Onboarding & support", value: "$2,000" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/tools" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#2563eb] mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-[#14b8a6] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Free Cost Calculator
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Legacy VDR vs <span className="text-[#2563eb]">SpaceNexus</span> Cost Estimator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare the true cost of legacy data rooms vs. modern AI-powered VDRs. Adjust the sliders to match your deal parameters.
          </p>
        </div>

        {/* Sliders */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Your Deal Parameters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Deal Size</span>
                <span className="text-sm font-bold text-[#2563eb]">{formatCurrency(dealSize * 1000000)}</span>
              </div>
              <input type="range" min="1" max="500" value={dealSize} onChange={(e) => setDealSize(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563eb]" />
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>$1M</span><span>$500M</span></div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Number of Buyers / Bidders</span>
                <span className="text-sm font-bold text-[#2563eb]">{numBuyers}</span>
              </div>
              <input type="range" min="1" max="100" value={numBuyers} onChange={(e) => setNumBuyers(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563eb]" />
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1</span><span>100</span></div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Deal Duration</span>
                <span className="text-sm font-bold text-[#2563eb]">{duration} months</span>
              </div>
              <input type="range" min="1" max="24" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563eb]" />
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1 month</span><span>24 months</span></div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Document Volume</span>
                <span className="text-sm font-bold text-[#2563eb]">{formatNumber(docVolume)} pages</span>
              </div>
              <input type="range" min="100" max="100000" step="100" value={docVolume} onChange={(e) => setDocVolume(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563eb]" />
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>100</span><span>100,000</span></div>
            </div>
          </div>
        </div>

        {/* Savings Banner */}
        {savings > 0 && (
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl p-8 text-center text-white mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-100 mb-2">You Save</p>
            <div className="text-5xl sm:text-6xl font-black mb-2">{formatCurrency(savings)}</div>
            <p className="text-lg text-green-100">That's <span className="font-bold text-white">{savingsPercent}%</span> less than legacy VDRs</p>
          </div>
        )}

        {/* Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Legacy */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-red-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center"><svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></div>
              <div>
                <h3 className="font-bold text-gray-900">Legacy Data Room</h3>
                <p className="text-sm text-gray-500">Traditional per-page pricing</p>
              </div>
            </div>
            <div className="text-center mb-6">
              <div className="text-3xl font-black text-red-600">{formatCurrency(legacyCost)}</div>
              <p className="text-sm text-gray-500">estimated total cost</p>
            </div>
            <div className="space-y-3">
              {legacyBreakdown.map((item, i) => (
                <div key={i} className="flex justify-between text-sm py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-semibold text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Modern */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-[#2563eb] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center"><svg className="w-5 h-5 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
              <div>
                <h3 className="font-bold text-gray-900">SpaceNexus AI VDR</h3>
                <p className="text-sm text-gray-500">Flat-rate + smart pricing</p>
              </div>
            </div>
            <div className="text-center mb-6">
              <div className="text-3xl font-black text-[#2563eb]">{formatCurrency(spaceNexusCost)}</div>
              <p className="text-sm text-gray-500">estimated total cost</p>
            </div>
            <div className="space-y-3">
              {modernBreakdown.map((item, i) => (
                <div key={i} className="flex justify-between text-sm py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-semibold text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-2xl shadow-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Lock in Transparent Pricing</h3>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">No hidden per-page fees. No surprise invoices. Get the full power of AI-driven due diligence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-all shadow-lg">Request a Demo</Link>
            <a href="https://app.pmspace.ai/login?type=SpaceVDR&moduleId=add00f0c-0428-423e-bfa4-01032205ed46&invite=guest&orgName=SPACE+VDR" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all">Try for Free</a>
          </div>
        </div>
      </div>
    </main>
  );
}
