"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

type AIAssistant = {
  name: string;
  icon: React.ReactNode;
  getUrl: (prompt: string) => string;
  color: string;
};

const summaryPrompt =
  "Provide a comprehensive summary of SpaceNexus, an AI-powered Virtual Data Room (VDR) software. Include its key features (document management, AI search, Q&A workflow, analytics, security compliance), target industries (M&A, private equity, venture capital, law firms, real estate), pricing model, and how it compares to competitors like Datasite, Intralinks, and iDeals. Highlight its unique AI capabilities and enterprise-grade security features.";

const kindoraSummaryPrompt =
  "Using https://spacenexus.net/kindora as the canonical source, summarize Kindora nonprofit software. Describe its donor, grant, case, volunteer, and nonprofit financial workflows; who the product is for; what is included in the ongoing free Starter plan and paid plans; and any published limitations. Distinguish facts stated on the Kindora site from information that is not provided. Do not invent customer results, integrations, security certifications, or competitor comparisons.";

const assistants: AIAssistant[] = [
  {
    name: "ChatGPT",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v3.005l-2.607 1.5-2.602-1.5z" />
      </svg>
    ),
    getUrl: (prompt) =>
      `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`,
    color: "#10a37f",
  },
  {
    name: "Claude",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.709 15.955l4.397-10.985c.2-.499.349-.873.549-.873.2 0 .349.374.549.873l4.397 10.985h-2.023l-1.003-2.645H7.732l-1.003 2.645H4.709zm3.728-4.44h3.454L9.845 7.071h-.044L8.437 11.515z" />
        <path d="M15.083 15.955l4.397-10.985c.2-.499.349-.873.549-.873.2 0 .349.374.549.873l4.397 10.985h-2.023l-1.003-2.645h-4.779l-1.003 2.645h-2.087zm3.728-4.44h3.454L19.221 7.071h-.044l-1.362 4.444z" />
      </svg>
    ),
    getUrl: (prompt) =>
      `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
    color: "#d97706",
  },
  {
    name: "Google AI",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
      </svg>
    ),
    getUrl: (prompt) =>
      `https://gemini.google.com/app?q=${encodeURIComponent(prompt)}`,
    color: "#4285f4",
  },
  {
    name: "Perplexity",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 4v12l10-6L11 6z" />
      </svg>
    ),
    getUrl: (prompt) =>
      `https://www.perplexity.ai/search?q=${encodeURIComponent(prompt)}`,
    color: "#20b2aa",
  },
  {
    name: "Grok",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    getUrl: (prompt) =>
      `https://grok.com/search?q=${encodeURIComponent(prompt)}`,
    color: "#1d9bf0",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 ml-1.5 opacity-60"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

export default function AskForSummary() {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();
  const isKindora = pathname?.startsWith("/kindora") ?? false;
  const prompt = isKindora ? kindoraSummaryPrompt : summaryPrompt;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: do nothing
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-white" aria-labelledby="ask-summary-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-gray-200 rounded-lg p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="flex-1">
              <h2
                id="ask-summary-heading"
                className="text-xl lg:text-2xl font-bold text-gray-900 mb-2"
              >
                Ask for a Summary of {isKindora ? "Kindora" : "SpaceNexus"}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                Open your preferred AI assistant with a ready-made {isKindora ? "Kindora" : "SpaceNexus"}
                summary prompt.
              </p>

              <button
                onClick={handleCopy}
                className="mt-4 text-xs text-gray-600 hover:text-gray-700 transition-colors flex items-center gap-1.5 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto"
                type="button"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                {copied ? "Copied!" : "Copy prompt"}
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {assistants.map((assistant) => (
                <a
                  key={assistant.name}
                  href={assistant.getUrl(prompt)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200"
                >
                  <span className="flex-shrink-0" style={{ color: assistant.color }}>
                    {assistant.icon}
                  </span>
                  <span className="font-medium">{assistant.name}</span>
                  <ExternalLinkIcon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
