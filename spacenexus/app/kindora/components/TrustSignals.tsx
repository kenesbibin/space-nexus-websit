import Link from "next/link";

interface TrustSignalsProps {
  variant?: "light" | "dark";
  compact?: boolean;
}

const trustSignals = [
  {
    title: "Data protection",
    description:
      "Sensitive nonprofit records are handled with access controls, encrypted connections, and organization-level permissions.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Controlled access",
    description:
      "Role-based permissions help teams limit who can view, change, approve, or export operational and donor information.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Operational reliability",
    description:
      "Cloud-hosted workflows, recovery processes, and regular product updates help keep nonprofit operations available and current.",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
];

export default function TrustSignals({ variant = "light", compact = false }: TrustSignalsProps) {
  const dark = variant === "dark";

  return (
    <div>
      <div className="text-center mb-8">
        <p className={`text-sm font-semibold uppercase tracking-wider mb-3 ${dark ? "text-blue-300" : "text-[#2563eb]"}`}>
          Security and reliability
        </p>
        <h2 className={`text-2xl sm:text-3xl font-bold ${dark ? "text-white" : "text-gray-900"}`}>
          Built to protect sensitive nonprofit work
        </h2>
        <p className={`mt-4 max-w-3xl mx-auto leading-relaxed ${dark ? "text-gray-300" : "text-gray-600"}`}>
          Kindora is designed to support responsible handling of donor, financial, and program information.
          Review the controls and requirements relevant to your organization before deployment.
        </p>
      </div>

      <div className={`grid md:grid-cols-3 gap-5 ${compact ? "max-w-5xl" : "max-w-6xl"} mx-auto`}>
        {trustSignals.map((signal) => (
          <div
            key={signal.title}
            className={`rounded-2xl border p-6 ${
              dark ? "border-white/10 bg-white/5" : "border-gray-200 bg-white shadow-sm"
            }`}
          >
            <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${dark ? "bg-blue-400/15" : "bg-blue-50"}`}>
              <svg className={`h-5 w-5 ${dark ? "text-blue-300" : "text-[#2563eb]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={signal.icon} />
              </svg>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${dark ? "text-white" : "text-gray-900"}`}>
              {signal.title}
            </h3>
            <p className={`text-sm leading-relaxed ${dark ? "text-gray-300" : "text-gray-600"}`}>
              {signal.description}
            </p>
          </div>
        ))}
      </div>

      <div className={`mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm ${dark ? "text-gray-300" : "text-gray-600"}`}>
        <Link href="/privacy" className={`font-semibold hover:underline ${dark ? "text-blue-300" : "text-[#2563eb]"}`}>
          Review data protection practices
        </Link>
        <span aria-hidden="true" className={dark ? "text-gray-600" : "text-gray-300"}>•</span>
        <Link href="/kindora/contact" className={`font-semibold hover:underline ${dark ? "text-blue-300" : "text-[#2563eb]"}`}>
          Request a security overview
        </Link>
      </div>
    </div>
  );
}
