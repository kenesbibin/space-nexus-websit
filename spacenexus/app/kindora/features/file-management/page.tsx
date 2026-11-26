import Link from "next/link";
import type { Metadata } from "next";
import LastUpdated from "../../components/LastUpdated";
import FeatureIntentContent from "../FeatureIntentContent";

export const metadata: Metadata = {
  title: "File Management - Secure Document Organization",
  description:
    "Store, organize, and attach files to records throughout Kindora. Maintain receipts, contracts, reports, and documents in one secure location.",
  keywords: [
    "nonprofit document management",
    "secure file storage NGO",
    "nonprofit file organization",
    "document management for nonprofits",
    "NGO record keeping",
  ],
  alternates: {
    canonical: "/kindora/features/file-management",
  },
  openGraph: {
    title: "File Management - Secure Document Organization",
    description:
      "Store, organize, and attach files to records throughout Kindora. Maintain receipts, contracts, reports, and documents in one secure location.",
    url: "https://spacenexus.net/kindora/features/file-management",
    type: "website",
  },
};

const attachmentPoints = [
  { area: "Donors", examples: "Gift agreements, pledge cards, correspondence" },
  { area: "Grants", examples: "Proposals, award letters, reports, budgets" },
  { area: "Expenses", examples: "Receipts, invoices, approvals" },
  { area: "Clients", examples: "Intake forms, assessments, case notes" },
  { area: "People", examples: "Applications, certifications, agreements" },
];

const features = [
  {
    title: "Contextual Attachments",
    description:
      "Attach files directly to relevant records—donors, grants, expenses, clients, and more. Documents stay connected to their context.",
    icon: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13",
  },
  {
    title: "Multiple File Types",
    description:
      "Upload PDFs, images, spreadsheets, Word documents, and more. Support for the file types nonprofits use most.",
    icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Quick Upload",
    description:
      "Drag and drop files or use the upload button. Simple, fast file attachment without leaving the record you&apos;re working on.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
  },
  {
    title: "File Preview",
    description:
      "Preview attached files without downloading. Quick access to receipts, documents, and images right in the interface.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    title: "Secure Storage",
    description:
      "Files are stored securely with access controlled by user permissions. Only authorized users can view attachments.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Download & Share",
    description:
      "Download files when needed for reporting, sharing with stakeholders, or offline access. Easy export capabilities.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kindora — File Management",
  description:
    "Store, organize, and attach files to records throughout Kindora. Maintain receipts, contracts, reports, and documents in one secure location.",
  url: "https://spacenexus.net/kindora/features/file-management",
  serviceType: "Nonprofit Document Management Software",
  provider: {
    "@id": "https://spacenexus.net/kindora/#organization",
  },
  areaServed: { "@type": "Place", name: "Worldwide" },
  offers: {
    "@type": "Offer",
    url: "https://spacenexus.net/kindora/pricing",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
  },
};

export default function FileManagementPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/kindora/features"
                className="inline-flex mr-7 items-center text-sm text-gray-500 hover:text-[#2563eb] mb-6 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Features
              </Link>

              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium mb-4">
                Administration
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Nonprofit Document Management Software
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Keep all your documents organized and connected. Attach files to
                any record—from donation receipts to grant proposals—and access
                them whenever you need.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kindora/contact"
                  className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/25"
                >
                  Request a Demo
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Attachments</h3>
                <button className="text-sm text-[#2563eb] font-medium flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Upload
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Grant_Proposal_2024.pdf", type: "PDF", icon: "📄" },
                  { name: "Award_Letter.pdf", type: "PDF", icon: "📄" },
                  { name: "Budget_Worksheet.xlsx", type: "Excel", icon: "📊" },
                  { name: "Site_Photo.jpg", type: "Image", icon: "🖼️" },
                ].map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <span className="text-2xl">{file.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">{file.type}</p>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attachment Points */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Attach Files Anywhere
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect documents to the records they relate to throughout the
              system.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attachmentPoints.map((point) => (
              <div
                key={point.area}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 mb-4">
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
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {point.area}
                </h3>
                <p className="text-sm text-gray-600">{point.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              File Management Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, secure document management integrated throughout the
              platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-4">
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
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Flow */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple Upload Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Attaching files is quick and intuitive. No complicated folder
              structures to navigate.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  step: "1",
                  label: "Open Record",
                  desc: "Navigate to donor, grant, or other record",
                },
                {
                  step: "2",
                  label: "Click Attach",
                  desc: "Select the attachment option",
                },
                {
                  step: "3",
                  label: "Upload File",
                  desc: "Drag & drop or browse to select",
                },
                {
                  step: "4",
                  label: "Done",
                  desc: "File is linked to the record",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col items-center text-center max-w-[140px]"
                >
                  <div className="w-14 h-14 rounded-full bg-[#2563eb] flex items-center justify-center text-white font-bold text-xl mb-3">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FeatureIntentContent feature="file-management" />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to organize your documents?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how Kindora&apos;s file management keeps your documents
            connected and accessible.
          </p>
          <Link
            href="/kindora/contact"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full shadow-lg shadow-blue-500/25"
          >
            Request a Demo
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        
            {/* Last Updated */}
            <div className="py-6 text-center border-t border-gray-100 mt-8">
                <LastUpdated date="2026-07-19" />
            </div></div>
      </section>
    </main>
  );
}
