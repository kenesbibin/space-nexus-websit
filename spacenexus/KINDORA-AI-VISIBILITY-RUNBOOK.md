# Kindora AI visibility measurement loop

Status: **tracker and protocol ready; live collection not yet recorded**  
Prompt and URL source: [KINDORA-AI-VISIBILITY-BASELINE.md](KINDORA-AI-VISIBILITY-BASELINE.md)  
Observation template: [KINDORA-AI-VISIBILITY-PRE-RELEASE.csv](KINDORA-AI-VISIBILITY-PRE-RELEASE.csv)  
Release/external placement annotations: [KINDORA-AI-VISIBILITY-CHANGELOG.csv](KINDORA-AI-VISIBILITY-CHANGELOG.csv)

## Monthly collection procedure

1. Use the verbatim Q01–Q20 text from the baseline. The prompt set and U01–U19 coverage are versioned; do not silently rewrite them.
2. Run every prompt on ChatGPT, Google AI Overviews, Gemini, Claude, and Perplexity in US English. Record web/search mode, account/session type, and collection timestamp. For Google, separately record whether an AI Overview appeared.
3. Fill one row per prompt and engine in the CSV. `collection_status=failed` is a technical/access failure and requires `failure_reason`. `collection_status=collected` with `answer_status=no_answer` is a successful collection that returned no answer and requires `no_answer_reason`. An answered response with `kindora_mentioned=no` is a true “not mentioned” result. A missing AI Overview is recorded as no answer with `ai_overview_shown=no`, not as a failure.
4. Record every competitor name, exact cited URL, citation claim/context, answer summary, evidence reference, and affected Kindora URLs. `kindora_cited=yes` only when an answer links to a Kindora URL; review the URL and its canonical target before marking `canonical_target_match=yes`.
5. Rate answer quality 1–5: factual accuracy, direct relevance to the prompt, usefulness/actionability, and whether citations substantiate the claims. Put specific issues in reviewer notes. Inspect at least three answered observations for each priority topic cluster: donor management (Q03–Q04), grants (Q05–Q06), case management (Q07–Q08), volunteer management (Q09–Q10), pricing (Q19), and alternatives (Q16–Q18). Record reviewer and review outcome on those rows.
6. Add each site release or external placement to the changelog with its date, source, status, and impacted URLs. The source-change batch from KAI-01–KAI-15 is not assumed to be deployed; annotate its actual deployment date when confirmed.
7. Run `node scripts/kindora-ai-visibility.mjs summary <observations.csv>`. Keep the generated console summary with the monthly run record. The script validates the 100-row matrix and fixed prompt text/targets; it reports failures, no answers, and successful non-mentions separately. Mention and citation rates use answered observations as denominator; never treat failures or no answers as non-mentions.

## Comparability and success gate

- The fixed set is 20 prompts × 5 engines = 100 rows. Protocol v1.1 adds Claude before the first actual baseline; v1.0 was only an uncollected specification. If an engine is genuinely unavailable, mark its rows `not_available`. Compare only runs with the same prompt version, market, prompt text, and available engine set; do not normalize missing engines into negative results.
- At the pre-release baseline, save the run CSV, evidence exports/screenshots, collection date, actual run ID, market/mode, URL coverage report, and the audit tool's overall score in the SEO project log. The template ID is only a reservation and is not evidence of a completed run.
- Schedule the 30-day post-release run from the confirmed production release date. Reuse the same protocol and prompts; retain the same available engine set. Inspect the same priority topics and compare citations to the intended canonical pages.
- The success gate is an overall score above 80 from the same audit source and scoring method, no P0 crawler/schema failures, and higher mention **and** citation rates in the priority cluster than the comparable baseline. Report all three conditions; do not substitute the internal rates for the audit tool's score.

## Current access and run status

The 2026-10-29 access check in [kindora-competitor-ai-citation-tracking.md](kindora-competitor-ai-citation-tracking.md) found the ChatGPT and Perplexity pages unavailable in that browser environment and Gemini sign-in required; no prompts were submitted. No live answers are recorded in this tracker. The prepared pre-release CSV is 100 pending rows, not a run export. Authenticated collection access and a confirmed production release date are needed to complete the pre-release and 30-day post-release verification.
