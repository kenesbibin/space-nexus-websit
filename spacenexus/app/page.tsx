import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";
import ProductEcosystem from "./components/ProductEcosystem";
import VDRScreenshotGallery from "./components/VDRScreenshotGallery";
import IDPSection from "./components/IDPSection";
import SmartFeaturesSection from "./components/SmartFeaturesSection";
import TransformationTable from "./components/TransformationTable";
import BenefitsSection from "./components/BenefitsSection";
import FAQSection from "./components/FAQSection";
import VeritasGraphFAQ from "./components/VeritasGraphFAQ";
import KindoraCallout from "./components/KindoraCallout";
import GlobalPresence from "./components/GlobalPresence";
import LastUpdated from "./components/LastUpdated";
import AnswerBlock from "./components/AnswerBlock";
import { homeFaqs } from "./data/homeFaqs";

export const metadata: Metadata = {
  title: { absolute: "Virtual Data Room Software for M&A | SpaceNexus" },
  description:
    "Organize and share documents for M&A due diligence, fundraising, and legal transactions in a virtual data room. Explore SpaceNexus features and plans.",
  alternates: {
    canonical: "https://spacenexus.net",
  },
  openGraph: {
    type: "website",
    url: "https://spacenexus.net",
    siteName: "SpaceNexus",
    title: "Virtual Data Room Software for M&A | SpaceNexus",
    description:
      "Organize and share documents for M&A due diligence, fundraising, and legal transactions in a virtual data room. Explore SpaceNexus features and plans.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SpaceNexus - Virtual Data Room Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Data Room Software for M&A | SpaceNexus",
    description:
      "Organize and share documents for M&A due diligence, fundraising, and legal transactions in a virtual data room. Explore SpaceNexus features and plans.",
    images: ["/og-image.png"],
    creator: "@spacenexus111",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://spacenexus.net/#software",
  name: "SpaceNexus Virtual Data Room",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Virtual Data Room",
  operatingSystem: "Web browser",
  url: "https://spacenexus.net",
  description:
    "AI-powered virtual data room software for M&A, fundraising, and legal deals.",
  publisher: { "@id": "https://spacenexus.net/#organization" },
  isPartOf: { "@id": "https://spacenexus.net/#website" },
  author: { "@id": "https://spacenexus.net/#organization" },
};

export default function Home() {
  return (
    <>
      <script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* AI Answer Block */}
      <AnswerBlock text="SpaceNexus is a virtual data room for M&A due diligence, capital raising, and secure document sharing. Its product pages describe document organization, AI-assisted redaction, structured Q&A, and buyer activity analytics. See the feature pages for product details; contact SpaceNexus for current plan pricing." />

      {/* Trust Bar - Security Features */}
      <TrustBar />

      {/* Core Product Ecosystem - 12 Modules */}
      <div className="content-auto">
        <ProductEcosystem />
      </div>

      {/* Real Product Screenshots - Interactive Gallery */}
      <div className="content-auto">
        <VDRScreenshotGallery />
      </div>

      {/* Intelligent Document Processing Feature */}
      <div className="content-auto">
        <IDPSection />
      </div>

      {/* Before/After Transformation Table */}
      <div className="content-auto">
        <TransformationTable />
      </div>

      {/* Smart Deal Rooms & AI Insights (XEBO-style bento section) */}
      <div className="content-auto">
        <SmartFeaturesSection />
      </div>

      {/* Benefits & ROI Section */}
      <div className="content-auto">
        <BenefitsSection />
      </div>

      {/* Kindora — Nonprofit Management Platform (cross-product + link equity) */}
      <div className="content-auto">
        <KindoraCallout />
      </div>

      {/* FAQ Section */}
      <div className="content-auto">
        <FAQSection />
      </div>

      {/* VeritasGraph FAQ / GEO Section */}
      <div className="content-auto">
        <VeritasGraphFAQ />
      </div>

      {/* Global Presence - Office Locations */}
      <div className="content-auto">
        <GlobalPresence />
      </div>

      {/* SEO Content Block - Virtual Data Room Software Focus */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Virtual Data Room Software for Enterprise M&amp;A, Capital Raising &amp; Legal Transactions
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            SpaceNexus is a{" "}
            <strong>virtual data room software</strong>
            {" "}platform for secure document collaboration during high-stakes business transactions. Our advanced{" "}
            <a href="/features/data-room" className="text-[#2563eb] hover:underline min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              virtual data room software
            </a>{" "}
            features AI-powered document processing, real-time buyer analytics, granular permission controls, and tamper-evident audit trails. Unlike legacy{" "}
            <a href="/competitors/vdr-alternatives" className="text-[#2563eb] hover:underline min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              virtual data room providers
            </a>
            , our software delivers{" "}
            <a href="/features/security-compliance" className="text-[#2563eb] hover:underline min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              encryption
            </a>
            , granular access controls, and transparent published pricing with no per-page fees.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The SpaceNexus <strong>virtual data room software</strong> is purpose-built for deal teams across investment banking, private equity, law firms, and corporate development. Our{" "}
            <a href="/features/data-room" className="text-[#2563eb] hover:underline min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              secure document sharing software
            </a>{" "}
            eliminates the friction of traditional VDR platforms — quick to set up, with no installation required, and accessible from any browser. Whether you need{" "}
            <a href="/solutions/mergers-and-acquisitions-vdr" className="text-[#2563eb] hover:underline min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              M&amp;A data room software
            </a>
            ,{" "}
            <a href="/solutions/series-a-fundraising-data-room" className="text-[#2563eb] hover:underline min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              fundraising platform software
            </a>
            , or{" "}
            <a href="/industries/law-firms" className="text-[#2563eb] hover:underline min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              legal document management software
            </a>
            , SpaceNexus delivers enterprise-grade security, deal-specific workflows, and competitive advantages that close deals faster. See how law firms, investment banks, and PE firms use SpaceNexus virtual data room software.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="/virtual-data-room-providers" className="text-[#2563eb] hover:underline font-medium min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              Virtual Data Room Providers →
            </a>
            <a href="/data-room-providers" className="text-[#2563eb] hover:underline font-medium min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              Data Room Providers →
            </a>
            <a href="/competitors/vdr-alternatives" className="text-[#2563eb] hover:underline font-medium min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              VDR Comparison 2026 →
            </a>
            <a href="/competitors/datasite-alternative" className="text-[#2563eb] hover:underline font-medium min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              Datasite Alternative →
            </a>
            <a href="/competitors/intralinks-alternative" className="text-[#2563eb] hover:underline font-medium min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto">
              Intralinks Alternative →
            </a>
          </div>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-11-25" />
            </div></div>
      </section>
    </>
  );
}
