# Kindora AI visibility baseline

Status: **fixed baseline specification ready; live multi-engine collection pending**  
Created: **2026-11-26**  
Protocol version: **v1.1** (same prompts and URL set; Claude added before the first live baseline collection)  
Project log: [KINDORA-SEO-PROJECT-LOG.md](KINDORA-SEO-PROJECT-LOG.md)  
Brand: **Kindora** (alternate names: Space Kindora, Kindora NGO OS)  
Canonical product scope: **https://spacenexus.net/kindora**  
Market: **US English, nonprofit/NGO management software**

This is the fixed scope for KAI-01. Keep the URL set and prompt IDs stable for the post-implementation comparison. If a URL changes, record a version change instead of silently replacing it.

## Fixed URL set

### Core product and trust pages

| ID | Page | URL | Purpose |
|---|---|---|---|
| U01 | Kindora homepage | https://spacenexus.net/kindora | Product/category entity |
| U02 | About Kindora | https://spacenexus.net/kindora/about | E-E-A-T, company, team |
| U03 | Pricing | https://spacenexus.net/kindora/pricing | Commercial qualification |
| U04 | AI FAQ | https://spacenexus.net/kindora/faq | Direct answers and FAQ extraction |

### Six core feature pages

| ID | Page | URL | Primary intent |
|---|---|---|---|
| U05 | Donor management | https://spacenexus.net/kindora/features/donor-management | Donor CRM and stewardship |
| U06 | Grant management | https://spacenexus.net/kindora/features/grant-management | Grant lifecycle and compliance |
| U07 | Client/case management | https://spacenexus.net/kindora/features/client-management | Beneficiary and case workflows |
| U08 | Volunteer management | https://spacenexus.net/kindora/features/people-management | Volunteer records and coordination |
| U09 | Financials | https://spacenexus.net/kindora/features/financials | Nonprofit financial operations |
| U10 | Campaign management | https://spacenexus.net/kindora/features/campaign-management | Fundraising campaigns |

### Main solution pages

| ID | Page | URL |
|---|---|---|
| U11 | Small nonprofits | https://spacenexus.net/kindora/solutions/small-nonprofits |
| U12 | Social services | https://spacenexus.net/kindora/solutions/social-services |
| U13 | Youth nonprofits | https://spacenexus.net/kindora/solutions/youth-nonprofits |
| U14 | Community organizations | https://spacenexus.net/kindora/solutions/community-organizations |

### Comparison and alternatives pages

| ID | Page | URL |
|---|---|---|
| U15 | Kindora vs competitors | https://spacenexus.net/kindora/vs-competitors |
| U16 | Nonprofit software alternatives | https://spacenexus.net/kindora/alternatives |
| U17 | Salesforce Nonprofit Cloud alternative | https://spacenexus.net/kindora/salesforce-nonprofit-cloud-alternative |
| U18 | Bloomerang alternative | https://spacenexus.net/kindora/bloomerang-alternative |
| U19 | DonorPerfect alternative | https://spacenexus.net/kindora/donorperfect-alternative |

**Scope check:** Each URL must return 200, be indexable, and resolve to the canonical Kindora URL before collection. If a route is unavailable in production, mark it `blocked` in the run log and do not substitute another route without creating a new baseline version.

## Fixed neutral prompt set

These prompts are unbranded and must be submitted verbatim. They cover the required category, feature, commercial, and alternative intents.

| Prompt ID | Neutral prompt | Primary target URL |
|---|---|---|
| Q01 | What is nonprofit management software? | U01 |
| Q02 | What is the best nonprofit CRM for small nonprofits? | U01 |
| Q03 | What donor management software is best for a small nonprofit? | U05 |
| Q04 | What should nonprofits look for in donor management software? | U05 |
| Q05 | What is the best grant tracking software for nonprofits? | U06 |
| Q06 | How do nonprofits manage grants from application through reporting? | U06 |
| Q07 | What is nonprofit case management software? | U07 |
| Q08 | What software helps nonprofits track clients, services, and outcomes? | U07 |
| Q09 | What is the best volunteer management software for nonprofits? | U08 |
| Q10 | How should a nonprofit manage volunteer hours and schedules? | U08 |
| Q11 | What nonprofit accounting software supports cost allocation? | U09 |
| Q12 | What is the best fundraising campaign software for nonprofits? | U10 |
| Q13 | What all-in-one software can a small nonprofit use for donors, grants, programs, and finances? | U01 |
| Q14 | What nonprofit management software is best for social service organizations? | U12 |
| Q15 | What nonprofit software is best for youth-serving organizations? | U13 |
| Q16 | What is an affordable alternative to Salesforce Nonprofit Cloud? | U17 |
| Q17 | What are the best alternatives to Bloomerang for nonprofit donor management? | U18 |
| Q18 | What are the best alternatives to DonorPerfect? | U19 |
| Q19 | How much does nonprofit management software cost? | U03 |
| Q20 | What questions should I ask when evaluating nonprofit management software? | U04 |

## Fixed engine, market, and collection protocol

Run every prompt on all five engines where available, for **100 prompt/engine rows per run**:

1. ChatGPT — web search enabled where available; US English.
2. Google AI Overviews — US English Google Search; record whether an AI Overview was shown.
3. Google Gemini — web-grounded response where available; US English.
4. Perplexity — standard web search mode; US English.
5. Claude — web search enabled where available; US English. Record the specific search mode and account/session type.

If an engine or AI Overview is unavailable during collection, keep its rows and mark `not_available`; do not silently drop it or count it as a negative mention. Compare runs only when the prompt version and available engine set match. The first four-engine list was a specification only; no live baseline was collected before Claude was added.

For each observation, record:

- `run_id`, UTC timestamp, engine, prompt ID, market/locale, and account/search mode;
- `answered`, `brand_mentioned`, `brand_cited`, and recommendation/list position;
- exact cited URL(s), cited page type, and the claim supported by each citation;
- competitors named when Kindora is absent;
- answer summary and evidence link/screenshot/export;
- failure reason or `no_answer` separately from a successful answer that omitted Kindora.

Do not infer a trend from separate runs. A trend comparison is valid only when the prompt IDs, engine set, locale, and collection protocol match.

## Run record

| Field | Baseline value |
|---|---|
| Run ID | Pending collection |
| Collection date | Pending collection |
| Engines | ChatGPT; Google AI Overviews; Gemini; Claude where available; Perplexity |
| Market | US English |
| Protocol version | v1.1 |
| Prompt count | 20 |
| Expected rows | 100 (20 prompts × 5 engines) |
| URL coverage | U01–U19 |
| Mention rate | Pending collection |
| Citation rate | Pending collection |
| Competitor gap | Pending collection |
| Failed collections | Pending collection |
| No-answer collections | Pending collection |

## Pre-collection URL verification — 2026-11-26

The fixed URL set was checked against the live site before collection. All 19 URLs returned HTTP 200 and each returned the matching absolute canonical URL. This validates scope and canonical coverage; it is **not** an AI-engine visibility run.

| Check | Result |
|---|---|
| URLs checked | 19/19 |
| HTTP 200 | 19/19 |
| Matching canonical | 19/19 |
| Redirects or missing routes | 0 |
| AI observations collected | 0 — pending engine access/collection |

## Calculation rules

- **Mention rate:** answered observations with “Kindora” mentioned ÷ answered observations.
- **Citation rate:** answered observations that cite one of the fixed Kindora URLs ÷ answered observations.
- **Engine rate:** calculate the same measures per engine and per prompt cluster.
- **Competitor gap:** list the competitor named in an answered observation where Kindora is not mentioned; do not count failed or no-answer observations.
- Keep branded prompts out of the neutral rates. This baseline contains no branded prompts.

## Completion checklist

- [x] Brand and canonical product scope defined.
- [x] 20 neutral prompts defined across category, feature, pricing, and alternatives.
- [x] Core, trust, six feature, solution, and five comparison/alternative URL groups defined.
- [x] Four engines and US English market defined.
- [x] Mention, citation, competitor, citation URL, failure, and no-answer fields defined.
- [x] Live URL status and canonical checks completed.
- [ ] Baseline collection completed and run ID recorded.
- [ ] Export stored in the project log.
- [x] Same prompt/engine set reserved for the post-implementation comparison (protocol v1.1; use the same available engine set in both runs).

## Version history

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-11-26 | Initial fixed 20-prompt / four-engine specification; no live collection occurred. |
| v1.1 | 2026-11-26 | Added Claude before the first live baseline. Kept all prompt IDs/text and the U01–U19 URL set unchanged. Future comparisons must use the same prompt version and available engine set. |

