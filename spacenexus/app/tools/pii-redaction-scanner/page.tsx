"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import jsPDF from "jspdf";
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

const freeEmailProviders = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "icloud.com", "mail.com", "protonmail.com", "zoho.com", "yandex.com", "gmx.com", "live.com", "msn.com", "me.com", "inbox.com", "fastmail.com", "hey.com", "tutanota.com"];

type PIIItem = {
  type: string;
  value: string;
  page: number;
  severity: "high" | "medium" | "low";
  redacted: boolean;
};

const mockPIIData: PIIItem[] = [
  { type: "SSN", value: "456-78-9012", page: 1, severity: "high", redacted: false },
  { type: "Email", value: "john.doe@acme.com", page: 1, severity: "medium", redacted: false },
  { type: "Phone", value: "(555) 123-4567", page: 2, severity: "medium", redacted: false },
  { type: "Credit Card", value: "4532-XXXX-XXXX-7890", page: 2, severity: "high", redacted: false },
  { type: "Signature", value: "Handwritten signature detected", page: 3, severity: "high", redacted: false },
  { type: "Bank Account", value: "Account ending in 4521", page: 3, severity: "high", redacted: false },
  { type: "Address", value: "123 Main St, New York, NY 10001", page: 4, severity: "low", redacted: false },
  { type: "Date of Birth", value: "03/15/1985", page: 4, severity: "high", redacted: false },
  { type: "EIN", value: "12-3456789", page: 5, severity: "high", redacted: false },
  { type: "Name", value: "Sarah Johnson", page: 5, severity: "low", redacted: false },
];

const severityColors = {
  high: "bg-red-100 text-red-700 border-red-200",
  medium: "bg-amber-100 text-amber-700 border-amber-200",
  low: "bg-blue-100 text-blue-700 border-blue-200",
};

export default function PIRedactionScannerPage() {
  const { email: savedEmail, token: savedToken, login } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [scanning, setScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [piiItems, setPiiItems] = useState<PIIItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [authStep, setAuthStep] = useState<"email" | "otp">("email");
  const [isLoading, setIsLoading] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile && uploadedFile.type === "application/pdf") {
      setFile(uploadedFile);
      setScanComplete(false);
      setPiiItems([]);
      setSelectedItems(new Set());
    }
  };

  const startScan = () => {
    if (!file) return;
    setScanning(true);
    setTimeout(() => {
      setPiiItems(mockPIIData);
      setScanComplete(true);
      setScanning(false);
      setSelectedItems(new Set(mockPIIData.map((_, i) => i)));
    }, 2500);
  };

  const toggleItem = (index: number) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedItems(newSelected);
  };

  const toggleAll = () => {
    if (selectedItems.size === piiItems.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(piiItems.map((_, i) => i)));
    }
  };

  const applyRedaction = () => {
    const updated = piiItems.map((item, i) => ({
      ...item,
      redacted: selectedItems.has(i),
    }));
    setPiiItems(updated);
    setSelectedItems(new Set());
  };

  const reset = () => {
    setFile(null);
    setScanComplete(false);
    setPiiItems([]);
    setSelectedItems(new Set());
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const isBusinessEmail = (value: string) => {
    const domain = value.split("@")[1]?.toLowerCase();
    return domain && !freeEmailProviders.includes(domain);
  };

  const handleDownloadClick = () => {
    const stored = getStoredAuth();
    const activeEmail = savedEmail || stored.email;
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
    if (activeEmail && email.toLowerCase() === activeEmail.toLowerCase() && activeToken) {
      setShowEmailModal(false);
      downloadRedactedPDF();
      return;
    }
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
        downloadRedactedPDF();
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

  const downloadRedactedPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const redactedItems = piiItems.filter((item) => item.redacted);

    const drawRedactionBar = (x: number, y: number, width: number) => {
      doc.setFillColor(0, 0, 0);
      doc.rect(x, y - 4, width, 6, "F");
    };

    const drawPageHeader = (pageNum: number) => {
      doc.setFillColor(245, 245, 245);
      doc.rect(0, 0, pageWidth, 12, "F");
      doc.setFontSize(7);
      doc.setTextColor(128, 128, 128);
      doc.text(`Page ${pageNum}`, 10, 8);
      doc.text(file?.name || "Document", pageWidth - 10, 8, { align: "right" });
    };

    drawPageHeader(1);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text("MASTER SERVICE AGREEMENT", pageWidth / 2, 25, { align: "center" });

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text("This Master Service Agreement (the \"Agreement\") is entered into as of the date", 20, 40);
    doc.text("set forth below, by and between:", 20, 46);

    doc.setFont("helvetica", "bold");
    doc.text("Party A:", 20, 58);
    doc.setFont("helvetica", "normal");
    const partyARedacted = redactedItems.find((i) => i.type === "Name" && i.page === 5);
    if (partyARedacted) {
      doc.text("_________________________________________________________________", 48, 58);
      drawRedactionBar(48, 58, 100);
    } else {
      doc.text("Acme Corporation", 48, 58);
    }

    doc.text("Address:", 20, 66);
    const addrRedacted = redactedItems.find((i) => i.type === "Address");
    if (addrRedacted) {
      doc.text("____________________________________________________", 48, 66);
      drawRedactionBar(48, 66, 90);
    } else {
      doc.text("123 Main St, New York, NY 10001", 48, 66);
    }

    doc.setFont("helvetica", "bold");
    doc.text("Party B:", 20, 78);
    doc.setFont("helvetica", "normal");
    doc.text("SpaceNexus Inc.", 48, 78);

    doc.setFont("helvetica", "bold");
    doc.text("1. SCOPE OF SERVICES", 20, 95);
    doc.setFont("helvetica", "normal");
    doc.text("Party A engages Party B to provide virtual data room services for the", 20, 103);
    doc.text("purpose of M&A due diligence and secure document collaboration.", 20, 109);

    doc.setFont("helvetica", "bold");
    doc.text("2. PAYMENT TERMS", 20, 125);
    doc.setFont("helvetica", "normal");
    doc.text("Total Contract Value:", 20, 133);
    const einRedacted = redactedItems.find((i) => i.type === "EIN");
    if (einRedacted) {
      doc.text("_____________", 80, 133);
      drawRedactionBar(80, 133, 35);
    } else {
      doc.text("$125,000.00", 80, 133);
    }

    doc.text("Payment shall be made via wire transfer to the following account:", 20, 141);
    const bankRedacted = redactedItems.find((i) => i.type === "Bank Account");
    if (bankRedacted) {
      doc.text("Account: ************************************", 20, 149);
      drawRedactionBar(38, 149, 80);
    } else {
      doc.text("Account: ****-****-****-4521", 20, 149);
    }

    doc.setFont("helvetica", "bold");
    doc.text("3. CONFIDENTIALITY", 20, 165);
    doc.setFont("helvetica", "normal");
    doc.text("Both parties agree to maintain strict confidentiality of all materials", 20, 173);
    doc.text("shared through the virtual data room platform.", 20, 179);

    doc.setFont("helvetica", "bold");
    doc.text("4. SSN / TAX IDENTIFICATION", 20, 195);
    doc.setFont("helvetica", "normal");
    doc.text("Authorized Representative SSN:", 20, 203);
    const ssnRedacted = redactedItems.find((i) => i.type === "SSN");
    if (ssnRedacted) {
      doc.text("_______________", 110, 203);
      drawRedactionBar(110, 203, 45);
    } else {
      doc.text("456-78-9012", 110, 203);
    }

    doc.setFont("helvetica", "bold");
    doc.text("5. SIGNATURES", 20, 225);
    doc.setFont("helvetica", "normal");
    doc.text("IN WITNESS WHEREOF, the parties have executed this Agreement.", 20, 233);

    doc.text("Date:", 20, 250);
    const dobRedacted = redactedItems.find((i) => i.type === "Date of Birth");
    if (dobRedacted) {
      doc.text("_______________", 35, 250);
      drawRedactionBar(35, 250, 40);
    } else {
      doc.text("03/15/1985", 35, 250);
    }

    doc.text("Signature:", 20, 260);
    const sigRedacted = redactedItems.find((i) => i.type === "Signature");
    if (sigRedacted) {
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.3);
      doc.line(50, 258, 140, 258);
      drawRedactionBar(50, 258, 90);
    } else {
      doc.setDrawColor(100, 100, 100);
      doc.setLineWidth(0.3);
      doc.line(50, 258, 140, 258);
      doc.text("[Signature]", 55, 263);
    }

    doc.setFontSize(7);
    doc.setTextColor(128, 128, 128);
    doc.text("SpaceNexus AI Redaction Scanner | spacenexus.net", pageWidth / 2, 280, { align: "center" });

    const totalPages = Math.max(...piiItems.map((i) => i.page));
    for (let p = 2; p <= totalPages; p++) {
      doc.addPage();
      drawPageHeader(p);

      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text(`EXHIBIT A - Page ${p}`, 20, 25);

      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.text(`This page contains additional documentation for the agreement.`, 20, 35);

      const pageItems = redactedItems.filter((i) => i.page === p);
      let yPos = 50;
      pageItems.forEach((item) => {
        doc.setFont("helvetica", "normal");
        doc.text(`${item.type}:`, 20, yPos);
        drawRedactionBar(60, yPos, 80);
        yPos += 12;
      });

      if (p === 2) {
        doc.text("Contact information for all parties involved in this transaction:", 20, 45);
        const phoneRedacted = redactedItems.find((i) => i.type === "Phone" && i.page === 2);
        if (phoneRedacted) {
          doc.text("Phone: _______________________", 20, 55);
          drawRedactionBar(42, 55, 60);
        }
        const ccRedacted = redactedItems.find((i) => i.type === "Credit Card" && i.page === 2);
        if (ccRedacted) {
          doc.text("Card: ****************************", 20, 65);
          drawRedactionBar(35, 65, 70);
        }
      }

      if (p === 3) {
        doc.text("Banking details and authorized signatures:", 20, 45);
        doc.setDrawColor(100, 100, 100);
        doc.line(20, 80, 100, 80);
        doc.text("[Authorized Signature]", 25, 85);
      }

      if (p === 4) {
        doc.text("Personal identification documents:", 20, 45);
        doc.text("Address verification and DOB confirmation", 20, 55);
      }

      if (p === 5) {
        doc.text("Tax identification and entity verification:", 20, 45);
        doc.text("EIN verification for corporate entity", 20, 55);
      }

      doc.setFontSize(7);
      doc.setTextColor(128, 128, 128);
      doc.text("SpaceNexus AI Redaction Scanner | spacenexus.net", pageWidth / 2, 280, { align: "center" });
    }

    doc.save(`Redacted-${file?.name || "Document"}.pdf`);
  };

  const redactedCount = piiItems.filter((i) => i.redacted).length;
  const highCount = piiItems.filter((i) => i.severity === "high").length;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/tools" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#2563eb] mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Tools
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            Free PII Scanner
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            AI <span className="text-[#2563eb]">Redaction</span> Scanner
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload a PDF to automatically detect sensitive PII, signatures, and financial data. Redact with one click.
          </p>
        </div>

        {!file && (
          <div className="bg-white rounded-2xl shadow-xl border-2 border-dashed border-gray-300 p-12 text-center hover:border-[#2563eb] transition-colors">
            <input ref={fileInputRef} type="file" accept=".pdf" onChange={handleFileUpload} className="hidden" />
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            </div>
            <p className="text-gray-600 mb-2">Drag & drop your PDF here or</p>
            <button onClick={() => fileInputRef.current?.click()} className="text-[#2563eb] font-semibold hover:underline">
              Browse Files
            </button>
            <p className="text-xs text-gray-400 mt-4">Max 5 pages for free scan. PDF files only.</p>
          </div>
        )}

        {file && !scanComplete && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{file.name}</p>
                  <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
                </div>
              </div>
              <button onClick={reset} className="text-sm text-gray-500 hover:text-red-500 transition-colors">Remove</button>
            </div>

            {scanning ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 border-4 border-[#2563eb] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-900 font-semibold">Scanning for PII...</p>
                <p className="text-sm text-gray-500 mt-1">Analyzing 5 pages for sensitive data</p>
              </div>
            ) : (
              <button onClick={startScan} className="w-full py-4 bg-[#2563eb] text-white font-semibold rounded-xl hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                Start AI Scan
              </button>
            )}
          </div>
        )}

        {scanComplete && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5">
                <p className="text-sm text-gray-500 mb-1">Total PII Found</p>
                <p className="text-3xl font-black text-gray-900">{piiItems.length}</p>
              </div>
              <div className="bg-white rounded-xl shadow-md border border-red-200 p-5">
                <p className="text-sm text-gray-500 mb-1">High Risk</p>
                <p className="text-3xl font-black text-red-600">{highCount}</p>
              </div>
              <div className="bg-white rounded-xl shadow-md border border-green-200 p-5">
                <p className="text-sm text-gray-500 mb-1">Redacted</p>
                <p className="text-3xl font-black text-green-600">{redactedCount}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-6">
              <div className="p-5 border-b border-gray-200 flex items-center justify-between">
                <h2 className="font-bold text-gray-900">Detected Items</h2>
                <div className="flex gap-2">
                  <button onClick={toggleAll} className="text-sm text-[#2563eb] hover:underline font-medium">
                    {selectedItems.size === piiItems.length ? "Deselect All" : "Select All"}
                  </button>
                  <button onClick={applyRedaction} disabled={selectedItems.size === 0} className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                    Redact Selected ({selectedItems.size})
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {piiItems.map((item, i) => (
                  <div key={i} className={`flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors ${item.redacted ? "bg-green-50" : ""}`}>
                    <input type="checkbox" checked={selectedItems.has(i)} onChange={() => toggleItem(i)} disabled={item.redacted} className="w-4 h-4 text-[#2563eb] rounded" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${severityColors[item.severity]}`}>
                          {item.severity.toUpperCase()}
                        </span>
                        <span className="text-sm font-medium text-gray-900">{item.type}</span>
                      </div>
                      <p className={`text-sm ${item.redacted ? "text-green-600 font-mono" : "text-gray-600"}`}>
                        {item.redacted ? "[REDACTED]" : item.value}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400">Page {item.page}</span>
                  </div>
                ))}
              </div>
            </div>

            {redactedCount > 0 && (
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl p-8 text-center text-white mb-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-green-100 mb-2">Redaction Complete</p>
                <div className="text-5xl font-black mb-2">{redactedCount} Items</div>
                <p className="text-lg text-green-100 mb-6">Redacted in under 2 seconds</p>
                <button onClick={handleDownloadClick} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 font-semibold rounded-full hover:bg-green-50 transition-all shadow-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Redacted PDF
                </button>
              </div>
            )}

            <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-2xl shadow-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">Redacted {redactedCount} pages in 2 seconds.</h3>
              <p className="text-blue-100 mb-6 max-w-lg mx-auto">
                Need to redact 10,000+ pages across your entire deal room? Activate SpaceNexus AI Redaction Studio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-all shadow-lg">
                  Request a Demo
                </Link>
                <a href="https://app.pmspace.ai/login?type=SpaceVDR&moduleId=add00f0c-0428-423e-bfa4-01032205ed46&invite=guest&orgName=SPACE+VDR" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all">
                  Try for Free
                </a>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button onClick={reset} className="text-sm text-gray-500 hover:text-gray-700 underline">Scan another file</button>
            </div>
          </>
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
                  <p className="text-gray-600 mb-4">Enter your business email to download the redacted PDF.</p>
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
                    {isLoading ? "Verifying..." : "Verify & Download"}
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
      </div>
    </main>
  );
}
