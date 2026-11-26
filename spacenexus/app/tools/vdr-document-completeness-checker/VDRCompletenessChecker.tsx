"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import type { ExpectedDocument, TransactionTypeId } from "./data";
import {
  buildSampleCsv,
  getChecklist,
  getSampleFilenames,
  getUnmatchedFiles,
  matchDocuments,
  normalizeName,
  parseFilenameList,
  stripExtension,
  transactionTypes,
} from "./data";

type Filter = "all" | "matched" | "missing" | "uncertain" | "unmatched";

const MAX_FILE_BYTES = 10 * 1024 * 1024;

function statusStyles(status: "matched" | "missing" | "uncertain") {
  if (status === "matched") return "bg-green-100 text-green-700 border-green-200";
  if (status === "uncertain") return "bg-amber-100 text-amber-700 border-amber-200";
  return "bg-red-100 text-red-700 border-red-200";
}

function statusLabel(status: "matched" | "missing" | "uncertain") {
  if (status === "matched") return "Matched";
  if (status === "uncertain") return "Needs review";
  return "Missing";
}

function extractFilenames(workbook: XLSX.WorkBook): string[] {
  const collected: string[] = [];

  workbook.SheetNames.forEach((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) return;
    const rows = XLSX.utils.sheet_to_json<unknown[]>(sheet, { header: 1, blankrows: false, defval: "" });
    if (rows.length === 0) return;

    const columnCount = rows.reduce((max, row) => Math.max(max, row.length), 0);
    let bestColumn = 0;
    let bestScore = -1;

    for (let column = 0; column < columnCount; column += 1) {
      let score = 0;
      for (const row of rows) {
        const value = String(row[column] ?? "").trim();
        if (!value) continue;
        if (/\.(pdf|docx?|xlsx?|csv|pptx?|txt|rtf|png|jpe?g|zip|msg|eml)$/i.test(value)) score += 3;
        else if (/[a-z]/i.test(value) && value.length > 2) score += 1;
      }
      if (score > bestScore) {
        bestScore = score;
        bestColumn = column;
      }
    }

    for (const row of rows) {
      const value = String(row[bestColumn] ?? "").trim().replace(/^["']|["']$/g, "");
      if (!value) continue;
      if (/^(file ?name|document|document name|name|title)$/i.test(value)) continue;
      collected.push(value);
    }
  });

  const seen = new Set<string>();
  return collected.filter((name) => {
    const key = name.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export default function VDRCompletenessChecker() {
  const [selectedType, setSelectedType] = useState<TransactionTypeId | null>(null);
  const [documents, setDocuments] = useState<ExpectedDocument[]>([]);
  const [customName, setCustomName] = useState("");
  const [customCategory, setCustomCategory] = useState("Custom");
  const [files, setFiles] = useState<string[]>([]);
  const [manualInput, setManualInput] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [confirmed, setConfirmed] = useState<Record<string, string>>({});
  const [rejected, setRejected] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const typeInfo = transactionTypes.find((type) => type.id === selectedType);

  const results = useMemo(
    () => (selectedType ? matchDocuments(documents, files, confirmed, rejected) : []),
    [selectedType, documents, files, confirmed, rejected]
  );

  const unmatchedFiles = useMemo(() => getUnmatchedFiles(files, results), [files, results]);

  const stats = useMemo(() => {
    const matched = results.filter((result) => result.status === "matched").length;
    const uncertain = results.filter((result) => result.status === "uncertain").length;
    const missing = results.filter((result) => result.status === "missing").length;
    const total = documents.length;
    const percentage = total === 0 ? 0 : Math.round((matched / total) * 100);
    return { matched, uncertain, missing, total, percentage };
  }, [results, documents.length]);

  const categoryStats = useMemo(() => {
    const map = new Map<string, { total: number; matched: number }>();
    results.forEach((result) => {
      const entry = map.get(result.document.category) || { total: 0, matched: 0 };
      entry.total += 1;
      if (result.status === "matched") entry.matched += 1;
      map.set(result.document.category, entry);
    });
    return Array.from(map.entries()).map(([category, value]) => ({
      category,
      ...value,
      percentage: value.total === 0 ? 0 : Math.round((value.matched / value.total) * 100),
    }));
  }, [results]);

  const visibleResults = useMemo(() => {
    if (filter === "matched") return results.filter((result) => result.status === "matched");
    if (filter === "missing") return results.filter((result) => result.status === "missing");
    if (filter === "uncertain") return results.filter((result) => result.status === "uncertain");
    if (filter === "all") return results;
    return [];
  }, [results, filter]);

  const selectType = (id: TransactionTypeId) => {
    setSelectedType(id);
    setDocuments(getChecklist(id));
    setFiles([]);
    setConfirmed({});
    setRejected([]);
    setShowResults(false);
    setFilter("all");
    setError("");
    setNotice("");
    setCustomName("");
    setCustomCategory("Custom");
    setManualInput("");
  };

  const addCustomDocument = () => {
    const name = customName.trim();
    if (!name) return;
    setDocuments((previous) => [
      ...previous,
      {
        id: `custom-${Date.now()}-${previous.length}`,
        name,
        category: customCategory.trim() || "Custom",
      },
    ]);
    setCustomName("");
    setShowResults(false);
  };

  const removeDocument = (id: string) => {
    setDocuments((previous) => previous.filter((document) => document.id !== id));
    setConfirmed((previous) => {
      const next = { ...previous };
      delete next[id];
      return next;
    });
    setShowResults(false);
  };

  const resetChecklist = () => {
    if (!selectedType) return;
    setDocuments(getChecklist(selectedType));
    setConfirmed({});
    setRejected([]);
    setShowResults(false);
  };

  const addFiles = (incoming: string[]) => {
    if (incoming.length === 0) return;
    setFiles((previous) => {
      const seen = new Set(previous.map((file) => normalizeName(file)));
      const next = [...previous];
      incoming.forEach((file) => {
        const clean = file.trim();
        if (!clean) return;
        const key = normalizeName(clean);
        if (!key || seen.has(key)) return;
        seen.add(key);
        next.push(clean);
      });
      return next;
    });
    setShowResults(false);
  };

  const handleFileUpload = async (fileList: FileList | null) => {
    setError("");
    setNotice("");
    if (!fileList || fileList.length === 0) return;

    const all: string[] = [];
    for (const file of Array.from(fileList)) {
      if (!/\.(csv|xlsx|xls)$/i.test(file.name)) {
        setError(`"${file.name}" is not supported. Please upload an Excel (.xlsx, .xls) or CSV (.csv) file.`);
        continue;
      }
      if (file.size > MAX_FILE_BYTES) {
        setError(`"${file.name}" is larger than 10 MB. Please upload a smaller file.`);
        continue;
      }
      try {
        let workbook: XLSX.WorkBook;
        if (/\.csv$/i.test(file.name)) {
          const text = (await file.text()).replace(/^\uFEFF/, "");
          workbook = XLSX.read(text, { type: "string" });
        } else {
          const buffer = await file.arrayBuffer();
          workbook = XLSX.read(new Uint8Array(buffer), { type: "array" });
        }
        const names = extractFilenames(workbook);
        if (names.length === 0) {
          setError(`No document filenames were found in "${file.name}". Add a "Filename" column or list one document per row.`);
          continue;
        }
        all.push(...names);
        setNotice(`Imported ${names.length} filename${names.length === 1 ? "" : "s"} from "${file.name}".`);
      } catch {
        setError(`We could not read "${file.name}". Make sure it is a valid Excel or CSV file.`);
      }
    }

    if (all.length > 0) addFiles(all);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const loadSample = () => {
    if (!selectedType) return;
    const names = getSampleFilenames(selectedType);
    setError("");
    addFiles(names);
    setNotice(`Loaded ${names.length} sample filenames. Run the check to see matched, missing and unmatched documents.`);
  };

  const downloadSample = () => {
    if (!selectedType) return;
    const csv = buildSampleCsv(selectedType);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `SpaceNexus-Sample-Document-List-${selectedType}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const addManualFiles = () => {
    const names = parseFilenameList(manualInput);
    if (names.length === 0) {
      setError("Enter at least one filename (one per line).");
      return;
    }
    setError("");
    addFiles(names);
    setNotice(`Added ${names.length} filename${names.length === 1 ? "" : "s"}.`);
    setManualInput("");
  };

  const removeFile = (file: string) => {
    setFiles((previous) => previous.filter((item) => item !== file));
    setConfirmed((previous) => {
      const next: Record<string, string> = {};
      Object.entries(previous).forEach(([key, value]) => {
        if (value !== file) next[key] = value;
      });
      return next;
    });
    setShowResults(false);
  };

  const runCheck = () => {
    if (!selectedType) {
      setError("Select a transaction type first.");
      return;
    }
    if (documents.length === 0) {
      setError("Your checklist is empty. Add at least one expected document.");
      return;
    }
    if (files.length === 0) {
      setError("Add your document list by uploading a file or entering filenames manually.");
      return;
    }
    setError("");
    setShowResults(true);
    setFilter("all");
  };

  const confirmMatch = (documentId: string, file: string) => {
    setConfirmed((previous) => ({ ...previous, [documentId]: file }));
    setRejected((previous) => previous.filter((id) => id !== documentId));
  };

  const rejectMatch = (documentId: string) => {
    setRejected((previous) => (previous.includes(documentId) ? previous : [...previous, documentId]));
    setConfirmed((previous) => {
      const next = { ...previous };
      delete next[documentId];
      return next;
    });
  };

  const clearDecision = (documentId: string) => {
    setRejected((previous) => previous.filter((id) => id !== documentId));
    setConfirmed((previous) => {
      const next = { ...previous };
      delete next[documentId];
      return next;
    });
  };

  const resetAll = () => {
    setSelectedType(null);
    setDocuments([]);
    setFiles([]);
    setManualInput("");
    setConfirmed({});
    setRejected([]);
    setShowResults(false);
    setFilter("all");
    setError("");
    setNotice("");
    setCustomName("");
    setCustomCategory("Custom");
  };

  const buildReportRows = () => {
    return results.map((result) => [
      result.document.category,
      result.document.name,
      statusLabel(result.status),
      result.fileName || "",
      result.status === "matched" ? `${Math.round(result.score * 100)}%` : "",
      result.manual ? "Manual" : result.status === "matched" ? "Automatic" : "",
    ]);
  };

  const exportExcel = () => {
    if (!showResults) return;
    const summary = [
      ["SpaceNexus VDR Document Completeness Report"],
      ["Transaction type", typeInfo?.name || ""],
      ["Report date", new Date().toLocaleString()],
      ["Total expected documents", stats.total],
      ["Matched documents", stats.matched],
      ["Missing documents", stats.missing],
      ["Needs review", stats.uncertain],
      ["Unmatched uploaded files", unmatchedFiles.length],
      ["Completeness", `${stats.percentage}%`],
      [],
    ];

    const detail = [
      ["Category", "Expected document", "Status", "Matched file", "Confidence", "Match type"],
      ...buildReportRows(),
    ];

    const unmatchedSheet = [
      ["Unmatched uploaded files"],
      ...unmatchedFiles.map((file) => [file]),
    ];

    const workbook = XLSX.utils.book_new();
    const summarySheet = XLSX.utils.aoa_to_sheet(summary);
    const detailSheet = XLSX.utils.aoa_to_sheet(detail);
    const unmatchedSheetData = XLSX.utils.aoa_to_sheet(unmatchedSheet);

    summarySheet["!cols"] = [{ wch: 34 }, { wch: 34 }];
    detailSheet["!cols"] = [{ wch: 22 }, { wch: 48 }, { wch: 14 }, { wch: 48 }, { wch: 12 }, { wch: 14 }];
    unmatchedSheetData["!cols"] = [{ wch: 60 }];

    XLSX.utils.book_append_sheet(workbook, summarySheet, "Summary");
    XLSX.utils.book_append_sheet(workbook, detailSheet, "Document Comparison");
    XLSX.utils.book_append_sheet(workbook, unmatchedSheetData, "Unmatched Files");
    XLSX.writeFile(workbook, `SpaceNexus-Document-Completeness-${typeInfo?.id || "report"}.xlsx`);
  };

  const exportPdf = () => {
    if (!showResults) return;
    const pdf = new jsPDF({ unit: "pt", format: "a4" });
    const margin = 40;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const maxWidth = pageWidth - margin * 2;
    let y = margin;

    const ensureSpace = (needed: number) => {
      if (y + needed > pageHeight - margin) {
        pdf.addPage();
        y = margin;
      }
    };

    const write = (text: string, options: { size?: number; bold?: boolean; color?: [number, number, number]; gap?: number } = {}) => {
      const { size = 10, bold = false, color = [31, 41, 55], gap = 4 } = options;
      pdf.setFont("helvetica", bold ? "bold" : "normal");
      pdf.setFontSize(size);
      pdf.setTextColor(color[0], color[1], color[2]);
      const lines = pdf.splitTextToSize(text, maxWidth);
      ensureSpace(lines.length * (size + 2) + gap);
      pdf.text(lines, margin, y);
      y += lines.length * (size + 2) + gap;
    };

    write("SpaceNexus VDR Document Completeness Report", { size: 18, bold: true, color: [37, 99, 235], gap: 10 });
    write(`Transaction type: ${typeInfo?.name || ""}`, { bold: true });
    write(`Report date: ${new Date().toLocaleString()}`);
    write(`Completeness: ${stats.percentage}%`, { bold: true, size: 12, gap: 10 });
    write(
      `Total expected: ${stats.total}   |   Matched: ${stats.matched}   |   Missing: ${stats.missing}   |   Needs review: ${stats.uncertain}   |   Unmatched files: ${unmatchedFiles.length}`,
      { gap: 12 }
    );

    write("Category Completion", { size: 13, bold: true, color: [37, 99, 235], gap: 6 });
    categoryStats.forEach((category) => {
      write(`${category.category}: ${category.matched}/${category.total} (${category.percentage}%)`);
    });
    y += 6;

    write("Document Comparison", { size: 13, bold: true, color: [37, 99, 235], gap: 6 });
    results.forEach((result) => {
      write(`${result.document.category} — ${result.document.name}`, { bold: true, size: 10, gap: 1 });
      write(
        `Status: ${statusLabel(result.status)}${result.fileName ? `   |   File: ${result.fileName}` : ""}`,
        { size: 9, color: [75, 85, 99], gap: 6 }
      );
    });

    if (unmatchedFiles.length > 0) {
      write("Unmatched Uploaded Files", { size: 13, bold: true, color: [37, 99, 235], gap: 6 });
      unmatchedFiles.forEach((file) => write(`• ${file}`, { size: 9, color: [75, 85, 99], gap: 1 }));
    }

    y += 8;
    write("Organize and manage your transaction documents securely with SpaceNexus Virtual Data Room.", {
      size: 9,
      color: [37, 99, 235],
    });
    write("https://spacenexus.net/data-room-due-diligence", { size: 9, color: [37, 99, 235] });

    pdf.save(`SpaceNexus-Document-Completeness-${typeInfo?.id || "report"}.pdf`);
  };

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All", count: documents.length },
    { id: "matched", label: "Matched", count: stats.matched },
    { id: "missing", label: "Missing", count: stats.missing },
    { id: "uncertain", label: "Needs review", count: stats.uncertain },
    { id: "unmatched", label: "Unmatched files", count: unmatchedFiles.length },
  ];

  return (
    <div>
      {!selectedType && (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">1. Select your transaction type</h2>
          <p className="text-sm text-gray-600 mb-6">We will load a standard due diligence checklist that you can edit before checking your document list.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {transactionTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => selectType(type.id)}
                className="p-5 rounded-xl border-2 border-gray-200 hover:border-[#2563eb] hover:bg-blue-50/50 text-left transition-all group"
              >
                <span className="text-2xl mb-2 block">{type.icon}</span>
                <span className="text-base font-bold text-gray-900 group-hover:text-[#2563eb] block mb-1">{type.name}</span>
                <span className="text-sm text-gray-600">{type.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedType && (
        <>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{typeInfo?.icon}</span>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Transaction type</p>
                <p className="text-lg font-bold text-gray-900">{typeInfo?.name}</p>
              </div>
            </div>
            <button onClick={resetAll} className="text-sm font-medium text-gray-500 hover:text-red-500 transition-colors self-start sm:self-auto">
              Change transaction type
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 mb-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">2. Review the document checklist</h2>
                <p className="text-sm text-gray-600 mt-1">{documents.length} expected documents. Remove items that do not apply or add your own.</p>
              </div>
              <button onClick={resetChecklist} className="text-xs font-medium text-gray-500 hover:text-[#2563eb] whitespace-nowrap">
                Reset list
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {Array.from(new Set(documents.map((document) => document.category))).map((category) => (
                <span key={category} className="text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                  {category} ({documents.filter((document) => document.category === category).length})
                </span>
              ))}
            </div>

            <div className="max-h-72 overflow-y-auto border border-gray-100 rounded-xl divide-y divide-gray-100 mb-4">
              {documents.map((document) => (
                <div key={document.id} className="flex items-center justify-between gap-3 px-4 py-2.5">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{document.name}</p>
                    <p className="text-xs text-gray-500">{document.category}</p>
                  </div>
                  <button onClick={() => removeDocument(document.id)} className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0" aria-label={`Remove ${document.name}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              ))}
              {documents.length === 0 && <p className="px-4 py-6 text-sm text-gray-500 text-center">Your checklist is empty. Add documents below.</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_180px_auto] gap-3">
              <input
                type="text"
                value={customName}
                onChange={(event) => setCustomName(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && addCustomDocument()}
                placeholder="Add a custom document (e.g. Insurance policies)"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
              />
              <input
                type="text"
                value={customCategory}
                onChange={(event) => setCustomCategory(event.target.value)}
                placeholder="Category"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
              />
              <button
                onClick={addCustomDocument}
                disabled={!customName.trim()}
                className="px-5 py-2.5 bg-[#2563eb] text-white text-sm font-semibold rounded-xl hover:bg-[#1d4ed8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
              >
                Add document
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">3. Upload your document list</h2>
            <p className="text-sm text-gray-600 mb-6">Upload an Excel or CSV file, or type filenames manually. Only filenames are compared — no confidential documents are uploaded or sent anywhere.</p>

            <div className="mb-5 rounded-xl border border-teal-200 bg-teal-50/60 p-4">
              <p className="text-sm font-semibold text-gray-900 mb-1">Want to try it first?</p>
              <p className="text-xs text-gray-600 mb-3">
                Load a sample document list for this transaction type, or download the sample CSV and re-upload it to test the import flow.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={loadSample}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#14b8a6] text-white text-sm font-semibold rounded-lg hover:bg-teal-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Load sample list
                </button>
                <button
                  onClick={downloadSample}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-700 text-sm font-semibold rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Download sample CSV
                </button>
              </div>
            </div>

            <div
              className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#2563eb] transition-colors cursor-pointer mb-4"
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault();
                handleFileUpload(event.dataTransfer.files);
              }}
            >
              <svg className="w-8 h-8 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
              <p className="text-sm font-semibold text-gray-700">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500 mt-1">Excel (.xlsx, .xls) or CSV (.csv), up to 10 MB</p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".xlsx,.xls,.csv"
                multiple
                onChange={(event) => handleFileUpload(event.target.files)}
                className="hidden"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Or enter filenames manually (one per line)</label>
              <textarea
                value={manualInput}
                onChange={(event) => setManualInput(event.target.value)}
                rows={3}
                placeholder={"Annual_Financial_Statements_2025.pdf\nShareholder-Agreements.docx\nTax Returns 2024.xlsx"}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
              />
              <button
                onClick={addManualFiles}
                disabled={!manualInput.trim()}
                className="mt-2 px-5 py-2 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Add filenames
              </button>
            </div>

            {error && (
              <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-4">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error}</span>
              </div>
            )}
            {notice && !error && <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-2 mb-4">{notice}</p>}

            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-gray-900">Document list ({files.length})</p>
              {files.length > 0 && (
                <button onClick={() => { setFiles([]); setConfirmed({}); setRejected([]); setShowResults(false); }} className="text-xs text-gray-500 hover:text-red-500">
                  Clear list
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {files.map((file) => (
                <span key={file} className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 text-xs font-medium px-3 py-1.5 rounded-full">
                  <span className="max-w-[220px] truncate" title={file}>{stripExtension(file)}</span>
                  <button onClick={() => removeFile(file)} aria-label={`Remove ${file}`} className="text-blue-400 hover:text-red-500">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </span>
              ))}
              {files.length === 0 && <p className="text-sm text-gray-500">No filenames added yet.</p>}
            </div>

            <button
              onClick={runCheck}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Check completeness
            </button>
          </div>

          {showResults && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Expected</p>
                  <p className="text-3xl font-black text-gray-900">{stats.total}</p>
                </div>
                <div className="bg-white rounded-xl shadow-md border border-green-200 p-5">
                  <p className="text-xs uppercase tracking-wider text-green-600 font-semibold mb-1">Matched</p>
                  <p className="text-3xl font-black text-green-600">{stats.matched}</p>
                </div>
                <div className="bg-white rounded-xl shadow-md border border-red-200 p-5">
                  <p className="text-xs uppercase tracking-wider text-red-600 font-semibold mb-1">Missing</p>
                  <p className="text-3xl font-black text-red-600">{stats.missing}</p>
                </div>
                <div className="bg-white rounded-xl shadow-md border border-amber-200 p-5">
                  <p className="text-xs uppercase tracking-wider text-amber-600 font-semibold mb-1">Unmatched files</p>
                  <p className="text-3xl font-black text-amber-600">{unmatchedFiles.length}</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Completeness report</h2>
                    <p className="text-sm text-gray-600 mt-1">{stats.uncertain} document{stats.uncertain === 1 ? "" : "s"} need manual review before they count as complete.</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-4xl font-black text-[#2563eb]">{stats.percentage}%</p>
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Overall completeness</p>
                  </div>
                </div>

                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-8">
                  <div className="h-full bg-gradient-to-r from-[#14b8a6] to-[#2563eb] transition-all duration-500" style={{ width: `${stats.percentage}%` }} />
                </div>

                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Category-wise completion</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {categoryStats.map((category) => (
                    <div key={category.category} className="border border-gray-100 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-semibold text-gray-900">{category.category}</p>
                        <p className="text-xs font-bold text-gray-600">{category.matched}/{category.total} · {category.percentage}%</p>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#2563eb]" style={{ width: `${category.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {filters.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setFilter(item.id)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                        filter === item.id
                          ? "bg-[#2563eb] text-white border-[#2563eb]"
                          : "bg-white text-gray-600 border-gray-200 hover:border-[#2563eb]/40"
                      }`}
                    >
                      {item.label} ({item.count})
                    </button>
                  ))}
                </div>

                {filter === "unmatched" ? (
                  <div className="border border-gray-100 rounded-xl divide-y divide-gray-100">
                    {unmatchedFiles.length === 0 && <p className="px-4 py-6 text-sm text-gray-500 text-center">Every uploaded file is matched to an expected document.</p>}
                    {unmatchedFiles.map((file) => (
                      <div key={file} className="flex items-center justify-between gap-3 px-4 py-3">
                        <p className="text-sm text-gray-800 break-all">{file}</p>
                        <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded-full whitespace-nowrap">Unmatched</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="border border-gray-100 rounded-xl divide-y divide-gray-100">
                    {visibleResults.length === 0 && <p className="px-4 py-6 text-sm text-gray-500 text-center">No documents in this view.</p>}
                    {visibleResults.map((result) => (
                      <div key={result.document.id} className="px-4 py-3.5">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-900 break-words">{result.document.name}</p>
                            <p className="text-xs text-gray-500">
                              {result.document.category}
                              {result.fileName ? <> · <span className="text-gray-700">{result.fileName}</span></> : null}
                            </p>
                          </div>
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full border whitespace-nowrap self-start sm:self-auto ${statusStyles(result.status)}`}>
                            {statusLabel(result.status)}{result.status === "matched" && !result.manual ? "" : ""}
                          </span>
                        </div>

                        {result.status === "uncertain" && result.fileName && (
                          <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2.5">
                            <p className="text-xs text-amber-800 flex-1">
                              Possible match: <span className="font-semibold">{result.fileName}</span> ({Math.round(result.score * 100)}% confidence). Confirm only if this is the correct document.
                            </p>
                            <div className="flex gap-2">
                              <button onClick={() => confirmMatch(result.document.id, result.fileName as string)} className="px-3 py-1.5 text-xs font-semibold bg-green-600 text-white rounded-lg hover:bg-green-700">Confirm match</button>
                              <button onClick={() => rejectMatch(result.document.id)} className="px-3 py-1.5 text-xs font-semibold bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">Not this file</button>
                            </div>
                          </div>
                        )}

                        {result.status === "missing" && (
                          <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2">
                            <p className="text-xs text-red-700 flex-1">No uploaded filename matches this document.</p>
                            {unmatchedFiles.length > 0 && (
                              <select
                                defaultValue=""
                                onChange={(event) => event.target.value && confirmMatch(result.document.id, event.target.value)}
                                className="text-xs px-3 py-1.5 border border-gray-300 rounded-lg bg-white text-gray-700 max-w-full"
                              >
                                <option value="">Manually match an uploaded file…</option>
                                {unmatchedFiles.map((file) => (
                                  <option key={file} value={file}>{file}</option>
                                ))}
                              </select>
                            )}
                          </div>
                        )}

                        {result.status === "matched" && result.manual && (
                          <div className="mt-2">
                            <button onClick={() => clearDecision(result.document.id)} className="text-xs text-gray-500 hover:text-red-500">Undo manual match</button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button onClick={exportPdf} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-all shadow-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Download PDF report
                </button>
                <button onClick={exportExcel} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all shadow-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Download Excel report
                </button>
                <button onClick={resetAll} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-full border border-gray-300 hover:border-gray-400 transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                  Reset and start again
                </button>
              </div>

              <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-2xl shadow-xl p-8 text-center text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Your document checklist is ready.</h3>
                <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                  Organize and manage your transaction documents securely with SpaceNexus Virtual Data Room.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/data-room-due-diligence" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-all shadow-lg">
                    Explore SpaceNexus VDR
                  </Link>
                  <Link href="/demo" className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all">
                    Request a Demo
                  </Link>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
