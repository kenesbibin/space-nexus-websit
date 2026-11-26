"use client";

import { useState } from "react";
import Link from "next/link";
import { homeFaqs } from "../data/homeFaqs";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 lg:py-28 bg-white border-t border-gray-100" aria-labelledby="faq-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wider mb-3">
                        Got Questions?
                    </p>
                    <h2
                        id="faq-heading"
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Frequently asked questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Everything deal teams need to know about virtual data rooms and choosing the right provider.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-3">
                    {homeFaqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`rounded-xl border transition-all duration-200 ${openIndex === i
                                    ? "border-[#2563eb]/30 bg-blue-50/50 shadow-sm"
                                    : "border-gray-200 bg-white hover:border-gray-300"
                                }`}
                        >
                            <button
                                className="w-full flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 text-left gap-4 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                aria-expanded={openIndex === i}
                            >
                                <span className={`text-sm font-semibold ${openIndex === i ? "text-[#2563eb]" : "text-gray-900"}`}>
                                    {faq.question}
                                </span>
                                <span
                                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${openIndex === i
                                            ? "bg-[#2563eb] text-white rotate-45"
                                            : "bg-gray-100 text-gray-600"
                                        }`}
                                >
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                    </svg>
                                </span>
                            </button>
                            {openIndex === i && (
                                <div className="px-6 pb-6">
                                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4 text-sm">Still have questions?</p>
                    <Link
                        href="/demo"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-full transition-colors shadow-lg shadow-blue-500/20"
                    >
                        Talk to Our Team
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
