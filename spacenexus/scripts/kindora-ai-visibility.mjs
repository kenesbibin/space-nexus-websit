import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const baselinePath = path.join(root, "KINDORA-AI-VISIBILITY-BASELINE.md");
const engines = ["ChatGPT", "Google AI Overviews", "Gemini", "Claude", "Perplexity"];
const priorityTopics = {
  donor_management: ["Q03", "Q04"],
  grant_management: ["Q05", "Q06"],
  case_management: ["Q07", "Q08"],
  volunteer_management: ["Q09", "Q10"],
  pricing: ["Q19"],
  alternatives: ["Q16", "Q17", "Q18"],
};
const headers = [
  "run_id", "run_type", "protocol_version", "collection_date_local", "collection_timestamp_utc",
  "engine", "prompt_id", "prompt_text", "primary_target_url", "market", "locale", "search_mode",
  "collection_status", "answer_status", "kindora_mentioned", "kindora_cited", "recommendation_position",
  "competitors_named", "cited_urls", "cited_page_types", "citation_claims", "answer_quality_1_5",
  "canonical_target_match", "answer_reviewed", "reviewer", "changed_pages", "answer_summary", "evidence_ref",
  "failure_reason", "no_answer_reason", "ai_overview_shown", "collector", "reviewer_notes",
];

function readBaseline() {
  const markdown = fs.readFileSync(baselinePath, "utf8");
  const urlSection = markdown.split("## Fixed URL set")[1]?.split("**Scope check:**")[0] ?? "";
  const promptSection = markdown.split("## Fixed neutral prompt set")[1]?.split("## Fixed engine")[0] ?? "";
  const urls = new Map();
  for (const line of urlSection.split(/\r?\n/)) {
    const match = line.match(/^\|\s*(U\d+)\s*\|[^|]*\|\s*(https?:\/\/[^|]+)\|/);
    if (match) urls.set(match[1], match[2].trim());
  }
  const prompts = [];
  for (const line of promptSection.split(/\r?\n/)) {
    const match = line.match(/^\|\s*(Q\d+)\s*\|\s*([^|]+)\|\s*(U\d+)\s*\|/);
    if (match) {
      const primaryTargetUrl = urls.get(match[3]);
      if (!primaryTargetUrl) throw new Error(`No baseline URL found for ${match[3]}`);
      prompts.push({ id: match[1], text: match[2].trim(), target: primaryTargetUrl });
    }
  }
  if (prompts.length !== 20 || urls.size !== 19) throw new Error(`Expected 20 prompts and 19 URLs, found ${prompts.length} and ${urls.size}`);
  return prompts;
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function toCsv(rows) {
  return [headers.join(","), ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(","))].join("\r\n") + "\r\n";
}

function template(runId, runType, outputPath) {
  const prompts = readBaseline();
  const rows = prompts.flatMap((prompt) => engines.map((engine) => ({
    run_id: runId,
    run_type: runType,
    protocol_version: "v1.1",
    engine,
    prompt_id: prompt.id,
    prompt_text: prompt.text,
    primary_target_url: prompt.target,
    market: "US",
    locale: "en-US",
    collection_status: "pending",
    answer_status: "pending",
    kindora_mentioned: "pending",
    kindora_cited: "pending",
    canonical_target_match: "pending",
    answer_reviewed: "pending",
    ai_overview_shown: engine === "Google AI Overviews" ? "pending" : "not_applicable",
  })));
  fs.writeFileSync(outputPath, toCsv(rows), "utf8");
  console.log(`Created ${rows.length} pending prompt/engine rows (${prompts.length} prompts × ${engines.length} engines): ${outputPath}`);
}

function parseCsv(source) {
  const records = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];
    if (quoted) {
      if (char === '"' && source[i + 1] === '"') { cell += '"'; i += 1; }
      else if (char === '"') quoted = false;
      else cell += char;
    } else if (char === '"' && cell === "") quoted = true;
    else if (char === ",") { row.push(cell); cell = ""; }
    else if (char === "\n") { row.push(cell.replace(/\r$/, "")); records.push(row); row = []; cell = ""; }
    else cell += char;
  }
  if (cell || row.length) { row.push(cell.replace(/\r$/, "")); records.push(row); }
  const [columns, ...values] = records;
  return values.filter((record) => record.some((value) => value !== "")).map((record) => Object.fromEntries(columns.map((column, index) => [column, record[index] ?? ""])));
}

function summarize(inputPath) {
  const rows = parseCsv(fs.readFileSync(inputPath, "utf8"));
  const expectedPrompts = readBaseline();
  const expectedKeys = new Set(expectedPrompts.flatMap((prompt) => engines.map((engine) => `${prompt.id}|${engine}`)));
  const keys = new Set();
  const issues = [];
  const runId = rows[0]?.run_id;
  const protocolVersion = rows[0]?.protocol_version;
  for (const row of rows) {
    const key = `${row.prompt_id}|${row.engine}`;
    if (keys.has(key)) issues.push(`Duplicate prompt/engine: ${key}`);
    keys.add(key);
    const prompt = expectedPrompts.find((entry) => entry.id === row.prompt_id);
    if (!prompt || row.prompt_text !== prompt.text || row.primary_target_url !== prompt.target) issues.push(`Prompt or target changed for ${key}`);
    if (!engines.includes(row.engine)) issues.push(`Unexpected engine: ${row.engine}`);
    if (row.run_id !== runId || row.protocol_version !== protocolVersion) issues.push(`Mixed run IDs or protocol versions at ${key}`);
    if (!new Set(["pending", "collected", "failed", "not_available"]).has(row.collection_status)) issues.push(`Invalid collection_status for ${key}`);
    if (!new Set(["pending", "answered", "no_answer", "not_applicable"]).has(row.answer_status)) issues.push(`Invalid answer_status for ${key}`);
    if (row.collection_status === "failed" && !row.failure_reason) issues.push(`Missing failure_reason for ${key}`);
    if (row.answer_status === "no_answer" && !row.no_answer_reason) issues.push(`Missing no_answer_reason for ${key}`);
    if (row.collection_status === "collected" && !["answered", "no_answer"].includes(row.answer_status)) issues.push(`Collected row must be answered or no_answer: ${key}`);
    if (row.answer_status === "answered" && (!new Set(["yes", "no"]).has(row.kindora_mentioned) || !new Set(["yes", "no"]).has(row.kindora_cited))) issues.push(`Answered row must distinguish mention and citation: ${key}`);
  }
  for (const key of expectedKeys) if (!keys.has(key)) issues.push(`Missing prompt/engine: ${key}`);
  if (rows.length !== expectedKeys.size) issues.push(`Expected ${expectedKeys.size} rows, found ${rows.length}`);
  if (issues.length) throw new Error(issues.join("\n"));

  const answered = rows.filter((row) => row.collection_status === "collected" && row.answer_status === "answered");
  const count = (predicate) => answered.filter(predicate).length;
  const pct = (numerator, denominator) => denominator ? `${(100 * numerator / denominator).toFixed(1)}%` : "n/a";
  const collectionCounts = Object.fromEntries(["pending", "collected", "failed", "not_available"].map((status) => [status, rows.filter((row) => row.collection_status === status).length]));
  const noAnswers = rows.filter((row) => row.collection_status === "collected" && row.answer_status === "no_answer").length;
  const mentioned = count((row) => row.kindora_mentioned === "yes");
  const cited = count((row) => row.kindora_cited === "yes");
  const splitValues = (field) => rows.flatMap((row) => row[field].split("|").map((value) => value.trim()).filter(Boolean));
  const frequencies = (values) => Object.fromEntries([...new Set(values)].sort().map((value) => [value, values.filter((entry) => entry === value).length]));
  const byEngine = Object.fromEntries(engines.map((engine) => {
    const sample = answered.filter((row) => row.engine === engine);
    return [engine, {
      answered: sample.length,
      mentioned: sample.filter((row) => row.kindora_mentioned === "yes").length,
      cited: sample.filter((row) => row.kindora_cited === "yes").length,
      mention_rate: pct(sample.filter((row) => row.kindora_mentioned === "yes").length, sample.length),
      citation_rate: pct(sample.filter((row) => row.kindora_cited === "yes").length, sample.length),
    }];
  }));
  const byPriorityTopic = Object.fromEntries(Object.entries(priorityTopics).map(([topic, promptIds]) => {
    const sample = answered.filter((row) => promptIds.includes(row.prompt_id));
    return [topic, {
      answered: sample.length,
      mentioned: sample.filter((row) => row.kindora_mentioned === "yes").length,
      cited: sample.filter((row) => row.kindora_cited === "yes").length,
      mention_rate: pct(sample.filter((row) => row.kindora_mentioned === "yes").length, sample.length),
      citation_rate: pct(sample.filter((row) => row.kindora_cited === "yes").length, sample.length),
    }];
  }));
  const priorityPromptIds = new Set(Object.values(priorityTopics).flat());
  const priorityRows = answered.filter((row) => priorityPromptIds.has(row.prompt_id));
  const priorityMentioned = priorityRows.filter((row) => row.kindora_mentioned === "yes").length;
  const priorityCited = priorityRows.filter((row) => row.kindora_cited === "yes").length;
  console.log(JSON.stringify({
    run_id: rows[0]?.run_id ?? "",
    protocol_version: rows[0]?.protocol_version ?? "",
    rows: rows.length,
    collection_status: collectionCounts,
    no_answer_collections: noAnswers,
    answered_observations: answered.length,
    successful_not_mentioned: count((row) => row.kindora_mentioned === "no"),
    mention_rate: pct(mentioned, answered.length),
    citation_rate: pct(cited, answered.length),
    mean_answer_quality_1_5: answered.filter((row) => Number(row.answer_quality_1_5) > 0).length
      ? (answered.reduce((total, row) => total + (Number(row.answer_quality_1_5) || 0), 0) / answered.filter((row) => Number(row.answer_quality_1_5) > 0).length).toFixed(2)
      : "n/a",
    by_engine: byEngine,
    by_priority_topic: byPriorityTopic,
    priority_cluster: {
      answered: priorityRows.length,
      mentioned: priorityMentioned,
      cited: priorityCited,
      mention_rate: pct(priorityMentioned, priorityRows.length),
      citation_rate: pct(priorityCited, priorityRows.length),
    },
    competitors_named: frequencies(splitValues("competitors_named")),
    cited_urls: frequencies(splitValues("cited_urls")),
    failed_collections: rows.filter((row) => row.collection_status === "failed").map((row) => ({ engine: row.engine, prompt_id: row.prompt_id, reason: row.failure_reason })),
  }, null, 2));
}

const [command, ...args] = process.argv.slice(2);
if (command === "template") {
  const [runId, runType, output] = args;
  if (!runId || !["pre_release", "monthly", "post_release_30d"].includes(runType) || !output) {
    throw new Error("Usage: node scripts/kindora-ai-visibility.mjs template <run-id> <pre_release|monthly|post_release_30d> <output.csv>");
  }
  template(runId, runType, path.resolve(root, output));
} else if (command === "summary") {
  if (!args[0]) throw new Error("Usage: node scripts/kindora-ai-visibility.mjs summary <observations.csv>");
  summarize(path.resolve(root, args[0]));
} else {
  throw new Error("Commands: template, summary");
}
