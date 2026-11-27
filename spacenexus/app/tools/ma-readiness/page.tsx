"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth, getStoredAuth } from "../../../lib/auth-context";

const WEBSITE_ID = "0173d57b-13e0-47e8-aefc-33f65f9995fc";

const REQUEST_OTP_MUTATION = `
  mutation WebsiteRequestLoginOtp($websiteId: String!, $email: String!) {
    websiteRequestLoginOtp(websiteId: $websiteId, email: $email) {
      otpSent
      message
      email
    }
  }
`;

const VERIFY_OTP_MUTATION = `
  mutation WebsiteVerifyLoginOtp($websiteId: String!, $email: String!, $otp: String!) {
    websiteVerifyLoginOtp(websiteId: $websiteId, email: $email, otp: $otp) {
      token
      userId
      email
      firstName
      lastName
      role
      websiteId
    }
  }
`;

const maQuestions = [
  { id: 1, category: "Financial Records", question: "How organized are your financial statements (P&L, balance sheet, cash flow)?", options: [{ text: "Fully audited and up-to-date", score: 10 }, { text: "Current but not audited", score: 7 }, { text: "Partially updated, some gaps", score: 4 }, { text: "Outdated or missing", score: 1 }] },
  { id: 2, category: "Financial Records", question: "Do you have a clean cap table with all equity holders documented?", options: [{ text: "Yes, fully updated with all 409A valuations", score: 10 }, { text: "Yes, but missing recent rounds", score: 7 }, { text: "Rough version exists", score: 4 }, { text: "No formal cap table", score: 1 }] },
  { id: 3, category: "Legal Compliance", question: "Are all your corporate formation documents (articles, bylaws, board minutes) organized?", options: [{ text: "Yes, all in a virtual data room", score: 10 }, { text: "Yes, but in scattered locations", score: 7 }, { text: "Some documents exist", score: 4 }, { text: "Missing or disorganized", score: 1 }] },
  { id: 4, category: "Legal Compliance", question: "Do you have signed NDAs and confidentiality agreements for all employees and contractors?", options: [{ text: "Yes, 100% coverage", score: 10 }, { text: "Mostly, a few gaps", score: 7 }, { text: "Only for senior team", score: 4 }, { text: "No formal NDA program", score: 1 }] },
  { id: 5, category: "IP & Contracts", question: "Are all IP assignments (code, trademarks, patents) properly documented and signed?", options: [{ text: "Yes, all IP assigned to the company", score: 10 }, { text: "Most IP assigned, some gaps", score: 7 }, { text: "IP exists but assignments unclear", score: 4 }, { text: "No IP assignment documentation", score: 1 }] },
  { id: 6, category: "IP & Contracts", question: "How complete is your customer contract repository?", options: [{ text: "All contracts indexed with key terms extracted", score: 10 }, { text: "All contracts stored, not indexed", score: 7 }, { text: "Most contracts exist, some missing", score: 4 }, { text: "Contracts scattered or missing", score: 1 }] },
  { id: 7, category: "Employee & HR", question: "Are employment agreements, offer letters, and equity grants fully documented?", options: [{ text: "Yes, all signed and stored digitally", score: 10 }, { text: "Most documents exist", score: 7 }, { text: "Partial documentation", score: 4 }, { text: "Missing or informal", score: 1 }] },
  { id: 8, category: "Employee & HR", question: "Do you have an up-to-date org chart and list of key personnel?", options: [{ text: "Yes, with roles and reporting lines", score: 10 }, { text: "Basic org chart exists", score: 7 }, { text: "Informal understanding", score: 4 }, { text: "No documentation", score: 1 }] },
  { id: 9, category: "Governance", question: "Do you have board meeting minutes and shareholder resolutions on file?", options: [{ text: "Yes, complete and current", score: 10 }, { text: "Some records, not complete", score: 7 }, { text: "Minimal records", score: 4 }, { text: "No formal governance records", score: 1 }] },
  { id: 10, category: "Governance", question: "Are your insurance policies (D&O, E&O, cyber) documented and current?", options: [{ text: "Yes, all active with certificates on file", score: 10 }, { text: "Policies exist, not all documented", score: 7 }, { text: "Some coverage, gaps exist", score: 4 }, { text: "No insurance documentation", score: 1 }] },
  { id: 11, category: "Tax & Financial", question: "Are your tax filings (federal, state, international) up to date?", options: [{ text: "Yes, all filed with receipts documented", score: 10 }, { text: "Current, but not fully organized", score: 7 }, { text: "Mostly current, some delays", score: 4 }, { text: "Outstanding filings or gaps", score: 1 }] },
  { id: 12, category: "Data & Security", question: "Do you have documented data security policies and compliance certifications?", options: [{ text: "SOC 2 / ISO 27001 certified with policies", score: 10 }, { text: "Security policies exist, no certification", score: 7 }, { text: "Basic security practices", score: 4 }, { text: "No formal security documentation", score: 1 }] },
];

const categoryIcons: Record<string, string> = { "Financial Records": "💰", "Legal Compliance": "⚖️", "IP & Contracts": "📄", "Employee & HR": "👥", Governance: "🏛️", "Tax & Financial": "📊", "Data & Security": "🔒" };

const improvementTips: Record<number, { title: string; tips: string[] }> = {
  1: {
    title: "Financial Records",
    tips: [
      "Hire a CPA firm to audit your last 2-3 years of financial statements",
      "Standardize your P&L, balance sheet, and cash flow statements using GAAP/IFRS",
      "Use accounting software (QuickBooks, Xero, NetSuite) with real-time reporting",
      "Reconcile all bank accounts monthly and document any discrepancies",
      "Prepare monthly financial packages for the last 12-24 months",
    ],
  },
  2: {
    title: "Cap Table & Equity",
    tips: [
      "Use a cap table platform (Carta, Pulley, AngelList) to track all equity holders",
      "Get a fresh 409A valuation from an independent appraiser",
      "Document all stock option grants, exercises, and vesting schedules",
      "Reconcile your cap table against your corporate ledger and board approvals",
      "Ensure all convertible notes and SAFEs are tracked with conversion terms",
    ],
  },
  3: {
    title: "Corporate Formation Documents",
    tips: [
      "Organize all incorporation documents (Certificate of Incorporation, Bylaws, Operating Agreement)",
      "Create a virtual data room with indexed folders for all legal documents",
      "Collect and organize all board meeting minutes and shareholder resolutions",
      "Ensure all foreign qualifications and state registrations are current",
      "Document all amendments to your articles of incorporation",
    ],
  },
  4: {
    title: "NDAs & Confidentiality",
    tips: [
      "Draft a standard NDA template reviewed by legal counsel",
      "Require signed NDAs from all employees, contractors, and vendors before onboarding",
      "Track NDA expiration dates and renewal requirements",
      "Implement a confidentiality agreement tracking system",
      "Include non-compete and non-solicitation clauses where appropriate",
    ],
  },
  5: {
    title: "IP Assignments",
    tips: [
      "Execute IP assignment agreements for all code, designs, and inventions",
      "Ensure all employees and contractors sign invention assignment clauses",
      "File provisional patents for any unpatented but valuable IP",
      "Register trademarks for your brand names, logos, and slogans",
      "Document the chain of title for all IP assets",
    ],
  },
  6: {
    title: "Contract Repository",
    tips: [
      "Centralize all customer contracts in a searchable repository",
      "Extract and index key terms (pricing, renewal dates, termination clauses)",
      "Flag any contracts with change-of-control provisions",
      "Track all amendments, addendums, and side letters",
      "Identify contracts requiring consent for assignment in an M&A transaction",
    ],
  },
  7: {
    title: "Employment Agreements",
    tips: [
      "Digitize and organize all employment agreements and offer letters",
      "Document all equity grants and vesting schedules for each employee",
      "Ensure all employees have signed IP assignment and non-compete agreements",
      "Compile a complete list of contractors with their agreement terms",
      "Review and update compensation and benefits documentation",
    ],
  },
  8: {
    title: "Org Chart & Personnel",
    tips: [
      "Create a detailed org chart with reporting lines and department structure",
      "Document key personnel roles, responsibilities, and tenure",
      "Identify key person dependencies and succession plans",
      "Compile a list of all team members with their titles, locations, and start dates",
      "Document any employment agreements with special terms or retention bonuses",
    ],
  },
  9: {
    title: "Board Governance",
    tips: [
      "Establish a regular board meeting cadence (at least quarterly)",
      "Take detailed minutes for every board meeting and shareholder meeting",
      "Document all board resolutions and corporate actions formally",
      "Maintain a corporate governance manual with policies and procedures",
      "Ensure all director and officer conflicts of interest are disclosed and documented",
    ],
  },
  10: {
    title: "Insurance Policies",
    tips: [
      "Obtain or update D&O (Directors & Officers) liability insurance",
      "Ensure E&O (Errors & Omissions) coverage is current and adequate",
      "Add or renew cyber liability insurance given increasing data risks",
      "Compile all insurance certificates and policy summaries in one location",
      "Review coverage limits and deductibles with your insurance broker",
    ],
  },
  11: {
    title: "Tax Filings",
    tips: [
      "File all outstanding federal, state, and local tax returns immediately",
      "Engage a tax professional to review filings for the last 3-5 years",
      "Document all tax credits, exemptions, and special filings (R&D credits, etc.)",
      "Prepare a tax provision and identify any potential tax liabilities",
      "Organize all receipts and supporting documentation for major deductions",
    ],
  },
  12: {
    title: "Data Security & Compliance",
    tips: [
      "Begin SOC 2 Type I or Type II certification process with a qualified auditor",
      "Document all data security policies (access control, encryption, incident response)",
      "Conduct a penetration test and address any critical vulnerabilities",
      "Create a data processing agreement (DPA) template for customer contracts",
      "Review GDPR, CCPA, and other applicable data privacy regulations for compliance gaps",
    ],
  },
};

const freeEmailProviders = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "icloud.com", "mail.com", "protonmail.com", "zoho.com", "yandex.com", "gmx.com", "live.com", "msn.com", "me.com", "inbox.com", "fastmail.com", "hey.com", "tutanota.com"];

export default function MAReadinessPage() {
  const { email: savedEmail, token: savedToken, login } = useAuth();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showImprovements, setShowImprovements] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [authStep, setAuthStep] = useState<"email" | "otp">("email");
  const [isLoading, setIsLoading] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxScore = maQuestions.length * 10;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const getGrade = () => {
    if (percentage >= 90) return { label: "Deal Ready", color: "text-green-600", bg: "bg-green-50", border: "border-green-200" };
    if (percentage >= 70) return { label: "Near Ready", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" };
    if (percentage >= 50) return { label: "Needs Work", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" };
    return { label: "At Risk", color: "text-red-600", bg: "bg-red-50", border: "border-red-200" };
  };

  const getMissingDocs = () => {
    const missing: string[] = [];
    if (answers[1] !== undefined && answers[1] < 7) missing.push("Audited financial statements");
    if (answers[2] !== undefined && answers[2] < 7) missing.push("Clean cap table with 409A valuation");
    if (answers[3] !== undefined && answers[3] < 7) missing.push("Corporate formation documents");
    if (answers[4] !== undefined && answers[4] < 7) missing.push("Signed NDAs for all employees/contractors");
    if (answers[5] !== undefined && answers[5] < 7) missing.push("IP assignment agreements");
    if (answers[6] !== undefined && answers[6] < 7) missing.push("Indexed customer contract repository");
    if (answers[7] !== undefined && answers[7] < 7) missing.push("Employment agreements & equity grants");
    if (answers[8] !== undefined && answers[8] < 7) missing.push("Org chart & key personnel list");
    if (answers[9] !== undefined && answers[9] < 7) missing.push("Board minutes & shareholder resolutions");
    if (answers[10] !== undefined && answers[10] < 7) missing.push("Insurance policy certificates");
    if (answers[11] !== undefined && answers[11] < 7) missing.push("Up-to-date tax filings");
    if (answers[12] !== undefined && answers[12] < 7) missing.push("Data security policies & compliance certs");
    return missing;
  };

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const isBusinessEmail = (value: string) => {
    const domain = value.split("@")[1]?.toLowerCase();
    return domain && !freeEmailProviders.includes(domain);
  };

  const handleSeeScore = () => {
    const stored = getStoredAuth();
    const activeEmail = savedEmail || stored.email;
    const activeToken = savedToken || stored.token;
    setShowEmailModal(true);
    setAuthStep("email");
    setEmail(activeEmail || "");
    setOtp("");
    setEmailError("");
    setOtpError("");
  };

  const handleRequestOtp = async () => {
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    if (!isBusinessEmail(email)) {
      setEmailError("Please use your business email (no free email providers)");
      return;
    }
    const stored = getStoredAuth();
    const activeEmail = savedEmail || stored.email;
    const activeToken = savedToken || stored.token;
    console.log("[MA] handleRequestOtp:", { activeEmail, activeToken, email });
    if (activeEmail && email.toLowerCase() === activeEmail.toLowerCase() && activeToken) {
      console.log("[MA] Auto-login triggered — skipping OTP");
      setShowEmailModal(false);
      setShowResult(true);
      return;
    }
    console.log("[MA] No auto-login — sending OTP");
    setEmailError("");
    setIsLoading(true);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL || "https://spaceaiapp.com/backend/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: REQUEST_OTP_MUTATION,
          variables: { websiteId: WEBSITE_ID, email },
        }),
      });
      const json = await res.json();
      if (json.errors?.length) {
        setEmailError(json.errors[0].message || "Failed to send OTP. Please try again.");
      } else if (json.data?.websiteRequestLoginOtp?.otpSent) {
        setAuthStep("otp");
      } else {
        setEmailError(json.data?.websiteRequestLoginOtp?.message || "Failed to send OTP. Please try again.");
      }
    } catch {
      setEmailError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      setOtpError("OTP is required");
      return;
    }
    setOtpError("");
    setIsLoading(true);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL || "https://spaceaiapp.com/backend/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: VERIFY_OTP_MUTATION,
          variables: { websiteId: WEBSITE_ID, email, otp },
        }),
      });
      const json = await res.json();
      if (json.errors?.length) {
        setOtpError(json.errors[0].message || "Invalid OTP. Please try again.");
      } else if (json.data?.websiteVerifyLoginOtp?.token) {
        const data = json.data.websiteVerifyLoginOtp;
        setAuthToken(data.token);
        login(email, data.token, {
          userId: data.userId,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          role: data.role,
          websiteId: data.websiteId,
        });
        setShowEmailModal(false);
        setShowResult(true);
      } else {
        setOtpError("Invalid OTP. Please try again.");
      }
    } catch {
      setOtpError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setOtpError("");
    setOtp("");
    setIsLoading(true);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL || "https://spaceaiapp.com/backend/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: REQUEST_OTP_MUTATION,
          variables: { websiteId: WEBSITE_ID, email },
        }),
      });
      const json = await res.json();
      if (json.errors?.length) {
        setOtpError("Failed to resend OTP. Please try again.");
      }
    } catch {
      setOtpError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers({ ...answers, [questionId]: score });
    if (currentQ < maQuestions.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 300);
    }
  };

  const grade = getGrade();
  const missingDocs = getMissingDocs();
  const answeredCount = Object.keys(answers).length;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/tools" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#2563eb] mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#2563eb] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
            Free Assessment Tool
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            M&A Due Diligence <span className="text-[#2563eb]">Readiness Grader</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Answer 12 quick questions to get your Deal Readiness Score. Find out exactly which documents you need before entering a deal.</p>
        </div>

        {!showResult && (
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQ + 1} of {maQuestions.length}</span>
              <span>{answeredCount} answered</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-[#2563eb] h-2.5 rounded-full transition-all duration-500" style={{ width: `${((currentQ + 1) / maQuestions.length) * 100}%` }} />
            </div>
          </div>
        )}

        {!showResult && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{categoryIcons[maQuestions[currentQ].category]}</span>
              <span className="text-sm font-semibold text-[#2563eb] bg-blue-50 px-3 py-1 rounded-full">{maQuestions[currentQ].category}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">{maQuestions[currentQ].question}</h2>
            <div className="grid gap-3">
              {maQuestions[currentQ].options.map((opt, i) => (
                <button key={i} onClick={() => handleAnswer(maQuestions[currentQ].id, opt.score)} className={`text-left p-4 rounded-xl border-2 transition-all duration-200 hover:border-[#2563eb] hover:bg-blue-50 ${answers[maQuestions[currentQ].id] === opt.score ? "border-[#2563eb] bg-blue-50" : "border-gray-200 bg-white"}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${answers[maQuestions[currentQ].id] === opt.score ? "border-[#2563eb] bg-[#2563eb]" : "border-gray-300"}`}>
                      {answers[maQuestions[currentQ].id] === opt.score && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className="text-gray-800 font-medium">{opt.text}</span>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-8">
              <button onClick={() => setCurrentQ(Math.max(0, currentQ - 1))} disabled={currentQ === 0} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">← Previous</button>
              {currentQ === maQuestions.length - 1 && answeredCount === maQuestions.length ? (
                <button onClick={handleSeeScore} className="px-6 py-2.5 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-all shadow-lg shadow-blue-500/20">See My Score →</button>
              ) : (
                <button onClick={() => setCurrentQ(Math.min(maQuestions.length - 1, currentQ + 1))} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Skip →</button>
              )}
            </div>
          </div>
        )}

        {showEmailModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {authStep === "email" ? "Verify Your Email" : "Enter OTP"}
                </h3>
                <button onClick={() => setShowEmailModal(false)} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {authStep === "email" ? (
                <>
                  <p className="text-gray-600 mb-4">Enter your business email to receive a verification code.</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent mb-2"
                    onKeyDown={(e) => e.key === "Enter" && handleRequestOtp()}
                    disabled={isLoading}
                  />
                  {emailError && <p className="text-red-500 text-sm mb-2">{emailError}</p>}
                  <button
                    onClick={handleRequestOtp}
                    disabled={isLoading}
                    className="w-full py-3 bg-[#2563eb] text-white font-semibold rounded-xl hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Sending OTP..." : "Send Verification Code"}
                  </button>
                </>
              ) : (
                <>
                  <p className="text-gray-600 mb-2">We sent a 6-digit code to <span className="font-semibold text-gray-900">{email}</span></p>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="Enter 6-digit code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent mb-2 text-center text-2xl tracking-[0.5em] font-mono"
                    onKeyDown={(e) => e.key === "Enter" && handleVerifyOtp()}
                    disabled={isLoading}
                    autoFocus
                    maxLength={6}
                  />
                  {otpError && <p className="text-red-500 text-sm mb-2">{otpError}</p>}
                  <button
                    onClick={handleVerifyOtp}
                    disabled={isLoading || otp.length !== 6}
                    className="w-full py-3 bg-[#2563eb] text-white font-semibold rounded-xl hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-3"
                  >
                    {isLoading ? "Verifying..." : "Verify & View Score"}
                  </button>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <button onClick={() => setAuthStep("email")} className="text-gray-600 hover:text-[#2563eb] transition-colors">
                      ← Change email
                    </button>
                    <span className="text-gray-300">|</span>
                    <button onClick={handleResendOtp} disabled={isLoading} className="text-gray-600 hover:text-[#2563eb] transition-colors disabled:opacity-50">
                      Resend code
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {showResult && (
          <div className="space-y-6">
            <div className={`rounded-2xl shadow-xl border-2 p-8 text-center ${grade.bg} ${grade.border}`}>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">Your Deal Readiness Score</p>
              <div className="text-7xl sm:text-8xl font-black mb-2"><span className={grade.color}>{percentage}</span><span className="text-3xl text-gray-400">%</span></div>
              <p className={`text-2xl font-bold ${grade.color} mb-4`}>{grade.label}</p>
              <div className="w-full bg-white/50 rounded-full h-4 max-w-md mx-auto">
                <div className={`h-4 rounded-full transition-all duration-1000 ${percentage >= 90 ? "bg-green-500" : percentage >= 70 ? "bg-blue-500" : percentage >= 50 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${percentage}%` }} />
              </div>
            </div>
            {missingDocs.length > 0 && (
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center"><svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg></div>
                  <h3 className="text-lg font-bold text-gray-900">Missing Critical Documents ({missingDocs.length})</h3>
                </div>
                <ul className="space-y-3">
                  {missingDocs.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {percentage < 90 && (
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setShowImprovements(!showImprovements)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">How to Improve Your Score</h3>
                      <p className="text-sm text-gray-500">Get actionable steps to reach Deal Ready status</p>
                    </div>
                  </div>
                  <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${showImprovements ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {showImprovements && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-5 border-t border-gray-100">
                    {Object.entries(answers)
                      .filter(([, score]) => score < 10)
                      .sort(([, a], [, b]) => a - b)
                      .map(([qId]) => {
                        const numId = Number(qId);
                        const tip = improvementTips[numId];
                        if (!tip) return null;
                        return (
                          <div key={numId} className="mt-5 first:mt-6">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-lg">{categoryIcons[tip.title] || "📌"}</span>
                              <h4 className="font-bold text-gray-900">{tip.title}</h4>
                              <span className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                                Score: {answers[numId]}/10
                              </span>
                            </div>
                            <ul className="space-y-2 ml-9">
                              {tip.tips.map((t, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                  <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                  {t}
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            )}
            <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-2xl shadow-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">Ready to Close Your Gaps?</h3>
              <p className="text-blue-100 mb-6 max-w-lg mx-auto">Auto-index and store your files securely in a SpaceNexus AI Data Room.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-all shadow-lg">Request a Demo</Link>
                <a href="https://app.pmspace.ai/login?type=SpaceVDR&moduleId=add00f0c-0428-423e-bfa4-01032205ed46&invite=guest&orgName=SPACE+VDR" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all">Try for Free</a>
              </div>
            </div>
            <div className="text-center">
              <button onClick={() => { setCurrentQ(0); setAnswers({}); setShowResult(false); setEmail(""); setAuthToken(null); setAuthStep("email"); setShowImprovements(false); }} className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors">← Retake Assessment</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}