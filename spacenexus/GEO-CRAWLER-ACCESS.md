# AI Crawler Access Report: spacenexus.net (Kindora)

## KAI-02 production verification — 2026-11-26

- `curl -I https://spacenexus.net/robots.txt`: **200 OK**, `Content-Type: text/plain`.
- `curl https://spacenexus.net/robots.txt`: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, and Google-Extended are allowed. The live rules disallow `/api/`, `/admin/`, `/private/`, and `/kindora/email-click`; the sitemap directives include the root and Kindora sitemap URLs.
- `curl -I https://spacenexus.net/kindora/sitemap.xml`: **200 OK**, `Content-Type: application/xml`.
- Production is still serving the earlier policy and does not disallow preview paths. The updated `app/robots.ts` policy has not been deployed, so KAI-02 remains in progress pending deployment and repeat verification.

**Analysis Date:** 2026-10-08
**Domain:** spacenexus.net
**Kindora scope:** /kindora/* shares the same `<root>` robots.txt, meta robots, and headers — this map applies to every Kindora page.
**robots.txt Status:** Found (200, valid)

---

## Crawler Access Summary

| Crawler | Operator | Tier | Status | Impact |
|---|---|---|---|---|
| GPTBot | OpenAI | 1 | **Allowed** (explicit `Allow: /`) | Appears in ChatGPT search/browsing |
| OAI-SearchBot | OpenAI | 1 | **Allowed** (inherits `*` allow) | Appears in ChatGPT Search live results |
| ChatGPT-User | OpenAI | 1 | **Allowed** (explicit `Allow: /`) | Users can ask ChatGPT to visit Kindora |
| ClaudeBot | Anthropic | 1 | **Allowed** (explicit `Allow: /`) | Fetchable for Claude web search/citations |
| PerplexityBot | Perplexity | 1 | **Allowed** (explicit `Allow: /`) | Appears in Perplexity answers with source links |
| Google-Extended | Google | 2 | **Allowed** (explicit `Allow: /`) | Feeds Gemini training + AI Overviews |
| GoogleOther | Google | 2 | **Allowed** (inherits `*` allow) | Google AI research/experimental features |
| Applebot-Extended | Apple | 2 | **Allowed** (inherits `*` allow) | Apple Intelligence on 2B+ devices |
| Amazonbot | Amazon | 2 | **Allowed** (inherits `*` allow) | Alexa answers + Amazon AI |
| FacebookBot | Meta | 2 | **Allowed** (inherits `*` allow) | Meta AI across FB/IG/WhatsApp |
| CCBot | Common Crawl | 3 | **Allowed** (inherits `*` allow) | Common Crawl dataset (training) |
| anthropic-ai | Anthropic | 3 | **Allowed** (explicit `Allow: /`) | Claude training + safety research |
| Bytespider | ByteDance | 3 | **Allowed** (inherits `*` allow) | TikTok/Doubao AI (prioritized by skill) |
| cohere-ai | Cohere | 3 | **Allowed** (inherits `*` allow) | Cohere model training |

## AI Visibility Score: 100/100

**Tier 1 Access:** 5/5 crawlers allowed
**Tier 2 Access:** 5/5 crawlers allowed
**Tier 3 Access:** 4/4 crawlers allowed

| Component | Weight | Score |
|---|---|---|
| Tier 1 crawlers allowed | 50% | 50 |
| Tier 2 crawlers allowed | 25% | 25 |
| No blanket AI blocks (`*` = Allow /, no `Disallow: /`) | 15% | 15 |
| AI-specific files present (llms.txt + sitemap x2) | 10% | 10 |
| **Total** | | **100** |

---

## Critical Issues

None. No Tier 1 crawler is blocked. The `User-Agent: *` block is a pure allow with a small set of admin/internal path disallows (`/api/ /admin/ /private/ /seo/ /templates/ /_next/`).

## Recommendations

### Immediate Actions
No robots.txt changes required for AI access. All 14 tracked crawlers can already reach Kindora.

### Hardening (optional, this quarter)
The following crawlers currently rely on the wildcard allow rather than their own directive. Not a defect, but explicit rules future-proof against an accidental blanket-block regression and make the intent self-documenting:

```
# Explicit AI crawler rules (hardening — all currently allowed via wildcard)
User-agent: OAI-SearchBot
Allow: /

User-agent: GoogleOther
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: FacebookBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: Bytespider
Allow: /
```

### Additional Technical Findings
- **Meta Robots Tags:** `/kindora`, `/kindora/features`, `/kindora/pricing` all emit `<meta name="robots" content="index, follow">`. No `noindex`, `nofollow`, `noai`, or `noimageai` anywhere observed. Googlebot-specific tag also present (`index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1`).
- **X-Robots-Tag Headers:** Absent on sampled pages (no HTTP-level indexing override). Clean.
- **JavaScript Rendering:** Site is server-side rendered (Next.js, `X-Nextjs-Prerender`). H1, H2s, article text, nav, JSON-LD all present in raw HTML — no JS required for AI extraction. One caveat: the four homepage stat counters hydrate client-side and render as zeros in raw HTML (already flagged in Task 15 / GEO-AUDIT-REPORT; affects content accuracy, not access).
- **llms.txt:** Present (root `/llms.txt` 200 + `/kindora/llms.txt`, `/llms-full.txt`). Valid H1/H2/blockquote structure, 54 links (10 known broken URLs — see GEO-LLMSTXT-ANALYSIS.md).
- **Sitemap Accessibility:** Two sitemaps declared and both 200 — `/sitemap.xml` (151 VDR URLs) + `/kindora/sitemap.xml` (184 Kindora URLs). Discoverable by all crawlers.
- **ai-plugin.json / ai.txt:** Both absent (404). Optional; no OpenAI plugin is published — absence is expected, not a defect.
- **IndexNow:** Not implemented (`.well-known/indexnow-key.txt` and `indexnow.txt` both 404). Would speed Bing/Copilot pickup of Kindora changes — see Task 15 report.

### Content Signals (IETF Draft `draft-romm-aipref-contentsignals`)

**Status:** Absent — no `Content-Signal:` directives in robots.txt.

**Recommendation:** Add a line to robots.txt to explicitly declare AI usage preferences (declarative, no downside):

`Content-Signal: ai-train=yes, search=yes, ai-retrieval=yes, ai-personalization=yes`

See https://contentsignals.org/ for the spec.
