export type TransactionTypeId = "ma" | "fundraising" | "realestate" | "acquisition";

export type ExpectedDocument = {
  id: string;
  name: string;
  category: string;
  aliases?: string[];
};

export type TransactionType = {
  id: TransactionTypeId;
  name: string;
  description: string;
  icon: string;
};

export const transactionTypes: TransactionType[] = [
  {
    id: "ma",
    name: "M&A",
    description: "Mergers and acquisitions, sell-side or buy-side diligence.",
    icon: "🤝",
  },
  {
    id: "fundraising",
    name: "Fundraising",
    description: "Seed to pre-IPO equity and convertible fundraising rounds.",
    icon: "🚀",
  },
  {
    id: "realestate",
    name: "Real Estate",
    description: "Property acquisitions, dispositions and portfolio deals.",
    icon: "🏢",
  },
  {
    id: "acquisition",
    name: "Business Acquisition",
    description: "Buying a company or its operating assets.",
    icon: "📈",
  },
];

let docCounter = 0;
const doc = (category: string, name: string, aliases: string[] = []): ExpectedDocument => ({
  id: `${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${++docCounter}`,
  name,
  category,
  aliases,
});

const maDocs: ExpectedDocument[] = [
  doc("Financial", "Annual financial statements", ["audited financials", "annual accounts", "financial statements"]),
  doc("Financial", "Profit and loss statements", ["p&l", "profit and loss", "income statement"]),
  doc("Financial", "Balance sheets", ["balance sheet"]),
  doc("Financial", "Cash flow statements", ["cash flow", "cashflow statement"]),
  doc("Financial", "Tax returns", ["tax return", "tax filings"]),
  doc("Financial", "Audit reports", ["audit report", "auditor report"]),
  doc("Legal", "Articles of incorporation", ["certificate of incorporation", "articles of association"]),
  doc("Legal", "Shareholder agreements", ["stockholder agreement", "shareholders agreement"]),
  doc("Legal", "Business contracts", ["material contracts", "commercial contracts"]),
  doc("Legal", "Litigation records", ["litigation", "legal proceedings"]),
  doc("Legal", "Intellectual property agreements", ["ip agreements", "ip assignment"]),
  doc("HR", "Employee agreements", ["employment agreements", "employment contract"]),
  doc("HR", "Employee benefits information", ["benefits plan", "employee benefits"]),
  doc("HR", "Organization structure", ["org chart", "organizational chart"]),
  doc("Corporate", "Board meeting minutes", ["board minutes", "minutes of meetings"]),
  doc("Corporate", "Corporate resolutions", ["board resolutions", "written resolutions"]),
  doc("Corporate", "Company ownership records", ["cap table", "capitalization table", "ownership register"]),
];

const fundraisingDocs: ExpectedDocument[] = [
  doc("Financial", "Annual financial statements", ["audited financials", "financial statements"]),
  doc("Financial", "Management accounts", ["monthly financials", "interim financials"]),
  doc("Financial", "Financial projections", ["forecast model", "financial model", "projections"]),
  doc("Financial", "Cap table", ["capitalization table", "ownership records"]),
  doc("Legal", "Articles of incorporation", ["certificate of incorporation", "articles of association"]),
  doc("Legal", "Shareholder agreements", ["stockholder agreement"]),
  doc("Legal", "Material contracts", ["business contracts", "key contracts"]),
  doc("Legal", "Intellectual property documents", ["ip portfolio", "patents", "trademarks"]),
  doc("Corporate", "Board meeting minutes", ["board minutes"]),
  doc("Corporate", "Corporate resolutions", ["board resolutions"]),
  doc("Product & Technology", "Product overview", ["product summary", "product deck"]),
  doc("Product & Technology", "Technology architecture", ["system architecture", "tech stack"]),
  doc("Product & Technology", "Security certifications", ["soc 2", "iso 27001", "security report"]),
  doc("Commercial", "Customer list", ["customer base", "customer roster"]),
  doc("Commercial", "Revenue metrics", ["mrr", "arr", "revenue report"]),
  doc("Commercial", "Sales pipeline", ["pipeline report", "sales forecast"]),
  doc("HR", "Employee census", ["employee list", "headcount"]),
  doc("HR", "Employee agreements", ["employment agreements"]),
  doc("HR", "Equity incentive plan", ["option plan", "stock option plan", "esop"]),
];

const realEstateDocs: ExpectedDocument[] = [
  doc("Legal & Title", "Title reports", ["title report", "title search", "title commitment"]),
  doc("Legal & Title", "Deed history", ["deeds", "property deed"]),
  doc("Legal & Title", "Zoning compliance", ["zoning report", "zoning certificate"]),
  doc("Legal & Title", "Building permits", ["permits", "construction permits"]),
  doc("Legal & Title", "Certificate of occupancy", ["occupancy certificate"]),
  doc("Financial", "Historical operating statements", ["operating statement", "income statement"]),
  doc("Financial", "Rent roll", ["rental roll", "tenant rent roll"]),
  doc("Financial", "Tax bills and assessments", ["property tax", "tax assessment"]),
  doc("Financial", "Capital expenditure history", ["capex report", "capital improvements"]),
  doc("Leases & Tenants", "Lease agreements", ["leases", "master lease"]),
  doc("Leases & Tenants", "Lease amendments", ["lease addendum", "lease modification"]),
  doc("Leases & Tenants", "Tenant estoppels", ["estoppel certificates", "estoppels"]),
  doc("Leases & Tenants", "Lease expiration schedule", ["lease schedule", "expiration schedule"]),
  doc("Property & Environmental", "Environmental site assessments", ["phase i esa", "phase 1 environmental", "environmental report"]),
  doc("Property & Environmental", "Physical condition reports", ["property condition report", "pcr", "inspection report"]),
  doc("Property & Environmental", "Appraisal reports", ["appraisal", "valuation report"]),
  doc("Property & Environmental", "Insurance policies", ["property insurance", "insurance certificates"]),
  doc("Corporate", "Entity formation documents", ["operating agreement", "llc agreement", "formation documents"]),
  doc("Corporate", "Ownership agreements", ["partnership agreement", "joint venture agreement"]),
];

const acquisitionDocs: ExpectedDocument[] = [
  doc("Financial", "Annual financial statements", ["audited financials", "financial statements"]),
  doc("Financial", "Profit and loss statements", ["p&l", "income statement"]),
  doc("Financial", "Balance sheets", ["balance sheet"]),
  doc("Financial", "Tax returns", ["tax return", "tax filings"]),
  doc("Financial", "Accounts receivable and payable", ["ar aging", "ap aging", "receivables"]),
  doc("Legal", "Articles of incorporation", ["certificate of incorporation"]),
  doc("Legal", "Business contracts", ["material contracts", "customer contracts"]),
  doc("Legal", "Litigation records", ["litigation", "legal proceedings"]),
  doc("Legal", "Licenses and permits", ["business licenses", "permits"]),
  doc("HR", "Employee agreements", ["employment agreements"]),
  doc("HR", "Employee benefits information", ["benefits plan"]),
  doc("HR", "Organization structure", ["org chart", "organizational chart"]),
  doc("Corporate", "Board meeting minutes", ["board minutes"]),
  doc("Corporate", "Corporate resolutions", ["board resolutions"]),
  doc("Corporate", "Company ownership records", ["cap table", "ownership register"]),
  doc("Operations & Assets", "Asset register", ["fixed asset register", "equipment list"]),
  doc("Operations & Assets", "Supplier agreements", ["vendor agreements", "supplier contracts"]),
  doc("Operations & Assets", "Inventory records", ["inventory report", "stock list"]),
  doc("Commercial", "Customer list", ["customer base", "customer roster"]),
  doc("Commercial", "Sales and marketing materials", ["sales report", "marketing plan"]),
  doc("Commercial", "Competitive analysis", ["market analysis", "competitor analysis"]),
];

export const checklists: Record<TransactionTypeId, ExpectedDocument[]> = {
  ma: maDocs,
  fundraising: fundraisingDocs,
  realestate: realEstateDocs,
  acquisition: acquisitionDocs,
};

export function getChecklist(type: TransactionTypeId): ExpectedDocument[] {
  return checklists[type].map((item) => ({ ...item, aliases: item.aliases ? [...item.aliases] : undefined }));
}

const sampleExtensions = ["pdf", "docx", "xlsx"];

const unmatchedSamples: Record<TransactionTypeId, string[]> = {
  ma: ["Project_Aurora_Teaser.pptx", "Management_Presentation.pdf", "Site_Visit_Photos.zip"],
  fundraising: ["Pitch_Deck_v3.pptx", "Investor_FAQ.docx", "Demo_Video_Link.txt"],
  realestate: ["Property_Brochure.pdf", "Aerial_Photos.zip", "Floor_Plans.pdf"],
  acquisition: ["Buyer_Teaser.pptx", "Integration_Plan.docx", "Due_Diligence_Request_List.xlsx"],
};

function sampleFilename(document: ExpectedDocument, index: number): string {
  const extension = sampleExtensions[index % sampleExtensions.length];
  const aliases = document.aliases || [];
  const useAlias = index % 5 === 2 && aliases.length > 0;
  const base = useAlias ? aliases[index % aliases.length] : document.name;
  const normalized = base
    .replace(/[^a-z0-9]+/gi, "_")
    .replace(/^_+|_+$/g, "");
  if (index % 7 === 1) return `${normalized}_2024.${extension}`;
  if (index % 5 === 0) return `${normalized.toLowerCase()}.${extension}`;
  return `${normalized}.${extension}`;
}

export function getSampleFilenames(type: TransactionTypeId): string[] {
  const files: string[] = [];
  checklists[type].forEach((document, index) => {
    if (index % 4 === 3) return;
    files.push(sampleFilename(document, index));
  });
  return [...files, ...unmatchedSamples[type]];
}

export function buildSampleCsv(type: TransactionTypeId): string {
  const rows = ["Filename", ...getSampleFilenames(type)];
  return rows.map((row) => `"${row.replace(/"/g, '""')}"`).join("\r\n");
}

const FILE_EXTENSION = /\.(pdf|docx?|xlsx?|csv|pptx?|txt|rtf|png|jpe?g|gif|zip|rar|7z|msg|eml|odt|ods|odp|pages|numbers|key)$/i;

export function stripExtension(name: string): string {
  const base = name.split(/[\\/]/).pop() || name;
  return base.replace(FILE_EXTENSION, "");
}

export function normalizeName(name: string): string {
  return stripExtension(name.trim())
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[_\-]+/g, " ")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(normalized: string): string[] {
  return normalized.split(" ").filter((token) => token.length > 1);
}

function tokenSimilarity(a: string, b: string): number {
  const ta = new Set(tokens(a));
  const tb = new Set(tokens(b));
  if (ta.size === 0 || tb.size === 0) return 0;
  let intersection = 0;
  ta.forEach((token) => {
    if (tb.has(token)) intersection += 1;
  });
  return intersection / (ta.size + tb.size - intersection);
}

export type MatchLevel = "matched" | "uncertain" | "none";

export type BestMatch = {
  file: string | null;
  score: number;
  level: MatchLevel;
};

const AUTO_MATCH_THRESHOLD = 0.8;
const UNCERTAIN_THRESHOLD = 0.45;

export function scoreDocument(expected: ExpectedDocument, fileName: string): number {
  const fileNorm = normalizeName(fileName);
  if (!fileNorm) return 0;
  const candidates = [expected.name, ...(expected.aliases || [])].map(normalizeName);

  let best = 0;
  for (const candidate of candidates) {
    if (!candidate) continue;
    if (candidate === fileNorm) return 1;
    const shorter = candidate.length < fileNorm.length ? candidate : fileNorm;
    const longer = candidate.length < fileNorm.length ? fileNorm : candidate;
    if (shorter.length >= 4 && longer.includes(shorter)) {
      const ratio = shorter.length / longer.length;
      if (ratio >= 0.5) {
        best = Math.max(best, 0.82 + ratio * 0.12);
        continue;
      }
    }
    best = Math.max(best, tokenSimilarity(candidate, fileNorm));
  }
  return best;
}

export function classifyScore(score: number): MatchLevel {
  if (score >= AUTO_MATCH_THRESHOLD) return "matched";
  if (score >= UNCERTAIN_THRESHOLD) return "uncertain";
  return "none";
}

export type MatchResult = {
  document: ExpectedDocument;
  status: "matched" | "missing" | "uncertain";
  fileName: string | null;
  score: number;
  manual: boolean;
};

export function matchDocuments(
  documents: ExpectedDocument[],
  files: string[],
  confirmed: Record<string, string>,
  rejected: string[]
): MatchResult[] {
  const available = new Set(files);
  const assigned = new Set<string>();
  const results = new Map<string, MatchResult>();

  for (const document of documents) {
    const manualFile = confirmed[document.id];
    if (manualFile && available.has(manualFile)) {
      results.set(document.id, {
        document,
        status: "matched",
        fileName: manualFile,
        score: 1,
        manual: true,
      });
      assigned.add(manualFile);
    }
  }

  const scored: { document: ExpectedDocument; file: string; score: number }[] = [];
  for (const document of documents) {
    if (results.has(document.id)) continue;
    for (const file of files) {
      if (assigned.has(file)) continue;
      const score = scoreDocument(document, file);
      if (score >= UNCERTAIN_THRESHOLD) {
        scored.push({ document, file, score });
      }
    }
  }

  scored.sort((a, b) => b.score - a.score);

  for (const entry of scored) {
    if (entry.score < AUTO_MATCH_THRESHOLD) continue;
    if (results.has(entry.document.id)) continue;
    if (assigned.has(entry.file)) continue;
    if (rejected.includes(entry.document.id)) continue;
    results.set(entry.document.id, {
      document: entry.document,
      status: "matched",
      fileName: entry.file,
      score: entry.score,
      manual: false,
    });
    assigned.add(entry.file);
  }

  for (const document of documents) {
    if (results.has(document.id)) continue;
    if (rejected.includes(document.id)) {
      results.set(document.id, { document, status: "missing", fileName: null, score: 0, manual: false });
      continue;
    }
    const best = scored
      .filter((entry) => entry.document.id === document.id)
      .sort((a, b) => b.score - a.score)[0];
    if (best) {
      results.set(document.id, {
        document,
        status: "uncertain",
        fileName: best.file,
        score: best.score,
        manual: false,
      });
    } else {
      results.set(document.id, { document, status: "missing", fileName: null, score: 0, manual: false });
    }
  }

  return documents.map((document) => results.get(document.id) as MatchResult);
}

export function getUnmatchedFiles(files: string[], results: MatchResult[]): string[] {
  const used = new Set<string>();
  results.forEach((result) => {
    if (result.status === "matched" && result.fileName) used.add(result.fileName);
  });
  return files.filter((file) => !used.has(file));
}

export function parseFilenameList(raw: string): string[] {
  return raw
    .split(/\r?\n|,|;/)
    .map((value) => value.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}
