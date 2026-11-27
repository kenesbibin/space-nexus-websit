# Kindora SEO project log

## KAI-01 baseline run

| Field | Value |
|---|---|
| Brand | Kindora |
| Canonical product scope | https://spacenexus.net/kindora |
| Fixed scope and prompts | [KINDORA-AI-VISIBILITY-BASELINE.md](KINDORA-AI-VISIBILITY-BASELINE.md) |
| Market | US English, nonprofit/NGO management software |
| Required engines | Protocol v1.1: ChatGPT web search; Google AI Overviews; Google Gemini web-grounded; Claude web search where available; Perplexity standard web search |
| Fixed prompt set | Q01–Q20, verbatim in baseline specification |
| URL coverage | U01–U19, listed in baseline specification |
| Run ID | **Not created — collection pending** |
| Collection date | Pending live collection |
| Export | Pending live collection |
| Mention rate | Pending; do not infer |
| Citation rate | Pending; do not infer |
| Competitors named | Pending; collect separately |
| Cited URLs | Pending; collect exact URLs separately |
| Failed collections | Pending; report count and reasons separately |
| No-answer collections | Pending; report separately from failed collections |
| Observation count | 0 recorded in this project log |

### Collection handoff

The repository contains the fixed 20 neutral prompts, five-engine protocol v1.1, 19-URL coverage set, and per-observation fields. A real baseline still needs to be run and exported through authenticated engine sessions or a connected multi-engine visibility service. No visibility values or completed run ID are recorded until actual answers are collected.

For a valid follow-up comparison, reuse Q01–Q20, the same four engines, US English market, and the same collection protocol and URL set. Do not describe a score as “above 80” until both runs are comparable.

## KAI-15 pricing and comparison facts

| Field | Value |
|---|---|
| Source of truth | `/kindora/pricing` server-rendered plan cards and “Plan facts at a glance” table; structured Offers in `app/kindora/components/commercial-schema.ts` |
| Kindora price model | Starter is an ongoing free plan for up to 5 members; Professional is custom-quoted for up to 25; Enterprise is custom volume quoted with unlimited team members |
| Trial and implementation | No time-limited trial is advertised; demo available by request. Starter signup is self-service. Enterprise includes migration assistance, training, dedicated support, and SLA; confirm quote scope. |
| Comparison coverage | 15 Kindora comparison routes; methodology includes review date (November 26, 2026), criteria, cited-public-source approach, and limitations |
| Verification | Targeted ESLint passed. `node scripts/validate-kindora-commercial-schema.cjs` passed source checks and a local SSR crawl: 6 commercial routes and all 15 comparison routes at `http://localhost:3000`. Initial HTML included pricing table and comparison methodology without executing JavaScript. |
| Production status | Source verification complete; repeat crawl after deployment. |

## KAI-16 recurring visibility measurement

| Field | Value |
|---|---|
| Protocol | v1.1; Q01–Q20 and U01–U19 unchanged; Claude added before the first live collection |
| Pre-release tracker | `KINDORA-AI-VISIBILITY-PRE-RELEASE.csv`; reserved template ID `KAI16-PRE-RELEASE-2026-11` is not a completed run ID |
| Template state | 100 rows pending; 0 collected, 0 failed, 0 not available, 0 no-answer; mention/citation rates n/a |
| Cadence and method | Monthly; full procedure, answer-quality rubric, priority-topic sample requirements, changelog and success gate: `KINDORA-AI-VISIBILITY-RUNBOOK.md` |
| Release/placement annotations | `KINDORA-AI-VISIBILITY-CHANGELOG.csv`; KAI-01–KAI-15 source batch recorded as pending deployment, not as a production release |
| Validation | `node scripts/kindora-ai-visibility.mjs summary KINDORA-AI-VISIBILITY-PRE-RELEASE.csv` validated all 100 prompt/engine pairs and preserved the exact baseline prompts and targets |
| Live verification | Not yet collected. Prior browser access check (2026-10-29) recorded ChatGPT/Perplexity unavailable and Gemini sign-in required. No answer, mention, citation, or audit score is inferred. The 30-day post-release run date depends on confirmed production release. |
| Status | Tracker and protocol ready; pre-release data collection, audit score, and 30-day post-release verification remain pending. |

## 2026-11-27 source cleanup follow-up

Removed unsupported customer-count, setup-time, uptime, certification, security, and quantified outcome claims from reviewed Kindora page content; updated the Kindora FAQ and VeritasGraph deployment/data-handling wording; and clarified plan and product facts in both Kindora LLM files. Added a site-wide disclosure that sample dashboard figures are illustrative unless cited. This is a source change only. The production release, authenticated AI engine observations, and comparable post-release audit remain pending; no score above 80 is claimed.
