# Space Kindora - AI Visibility Improvement Tasks (Filtered & Relevant)

**Generated:** 2026-10-27  
**Status reviewed:** 2026-10-29  
**Reference:** https://spacenexus.net/kindora (public marketing site)  
**Skills Used:** `kindora-seo`, `kindora-seo-page`, `kindora-seo-content`, `kindora-seo-schema`, `kindora-seo-geo`, `kindora-seo-brief`, `kindora-seo-competitors`, `kindora-seo-plan`  
**Scope:** Original audit recommendations; implementation status is tracked inline below.


---


## Executive Summary

This list focuses on the public marketing surface of Space Kindora. Since the majority of the app is auth-gated, these tasks are tailored towards improving discoverability and AI citability on Google, ChatGPT, Perplexity, Google AI Overviews, and Gemini. 


---


## Prioritized Task List (33 Tasks, Sequentially Numbered)


### 1. FOUNDATIONS & BASELINE (P0 | Impact: Very High | Effort: Low)
1. **Establish AI visibility baseline** - Track Kindora citations for 10 core queries (e.g "nonprofit donor management software", "grant tracking software for nonprofits", "nonprofit case management software") across ChatGPT, Perplexity, Google AI Overviews, and Gemini. Log cited URLs and context. **Status: Pending** — no baseline results or citation log are recorded.
2. **Set measurable AI goals** - Create 90-day goals based off of the baseline. (e.g. +25% citations, ranking in top 3 for 5 core queries) **Status: In Progress** — proposed measurement plan documented; exact baseline values and the 90-day measurement window must be set after Task 1 is collected. Compare the same query/platform pairs with valid observations: increase Kindora's citation rate by at least 25% relative to baseline (if baseline is zero, reach at least a 12.5% citation rate); achieve a top-three recommendation position for at least 5 of the 10 queries on platforms that report meaningful recommendation order; and report result coverage separately, treating inaccessible platforms as unavailable rather than uncited. Start the 90-day window on the completed baseline date and record final rates and query-level outcomes at day 90.
3. **Audit crawlability** - Verify `robots.txt` and `sitemap.xml` for `spacenexus.net`. Ensure all indexable `/kindora/*` pages are discoverable and no public marketing pages are accidentally blocked. **Status: In Progress** — root robots rules allow public crawling and Kindora has a sitemap, but full route coverage and crawlability have not been verified.
4. **Verify indexation** - Utilize Google Search Console to check for any pages from `/kindora/*` that are excluded or blocked and remedy any issues. **Status: In Progress** — checked 2026-10-30: the public robots file allows general crawling and references `https://spacenexus.net/kindora/sitemap.xml`, and the Kindora sitemap is publicly accessible. Google Search Console redirected to its public landing page and required sign-in, so the property’s Pages/indexation report could not be inspected; no indexation issues are confirmed or claimed. Complete the task by reviewing the property in an authorized Search Console session and resolving any reported exclusions or blocks.


### 2. ON-PAGE OPTIMIZATION (P0 | Impact: Very High | Effort: Low-Medium)
5. **Homepage metadata overhaul** - Optimize the title tag (50-60 chars), meta description (150-160), canonical URL, OpenGraph, and Twitter cards. Prioritize "Kindora" as the primary entity whilst disambiguating from "SpaceNexus". **Status: Completed** — the homepage title, canonical URL, OpenGraph, and Twitter metadata are present; the meta description was revised to 158 characters and identifies Kindora as nonprofit management software.
6. **Add "What is Kindora?" definition** - Add a self-contained definition (40-80 words) above the fold onto the homepage to allow for easy extraction for AI systems. **Status: Completed** — the homepage includes a concise, standalone product definition.
7. **H1/H2 hierarchy audit** - Audit and fix heading structure across the homepage, features, solutions, pricing, and blog. Ensure only 1 H1 per page with a logical hierarchy. **Status: Completed** — audited target page groups and corrected heading levels.
8. **Optimize feature pages** - Optimize each `/kindora/features/*` page to target a specific intent (e.g. "nonprofit donor management software"). Include a problem, solution, benefits, and a call to action. **Status: Completed** — all 14 feature routes use intent-specific content and a shared problem/solution/benefits/CTA structure.
9. **Internal linking improvements** - Add contextual links from blog posts and feature pages to high value pages (Features, Pricing, Comparisons) with descriptive anchor text. **Status: Completed** — contextual links were added to feature pages and blog posts.
10. **Image alt-text pass** - Add descriptive and functional alt-text to all screenshots and diagrams on public pages. **Status: Completed** — audited 105 public-page image instances and verified each has an `alt` attribute; generic alternatives were improved.


### 3. CONTENT QUALITY & E-E-A-T (P0 | Impact: Very High | Effort: Medium)
11. **E-E-A-T audit** - Utilize the `kindora-seo-content` framework to audit Experience, Expertise, Authoritativeness, and Trustworthiness for the homepage, features, and top blog posts. Document all gaps. **Status: Completed** — findings and prioritized gaps are documented in `kindora-eeat-audit.md`.
12. **Strengthen the About page** - Enhance `/kindora/about` with Kindora's mission, purpose for nonprofits, and any public team information. Tie this directly back to the organization. **Status: Completed** — the page presents Kindora's mission, nonprofit purpose, and public organization/team context.
13. **Add first-hand use cases** - Add real, specific use cases to feature pages based off of Kindora's capabilities (Donors, Grants, Case Management, Accounting, and Cost Allocation). **Status: Completed** — capability-based scenarios for all five areas are included and clearly labeled as illustrative, not customer-result claims.
14. **Implement content freshness** - Update any outdated claims and add `dateModified` to blog posts that have been updated. Ensure all statistics are up to date. **Status: Completed** — reviewed all 17 published Kindora blog posts, updated their modification dates, and removed unsupported quantitative claims, including an unverified purported platform benchmark, donor-retention and fundraising statistics, pricing ranges, and numerical author credentials. Replaced general performance claims with organization-specific measurement guidance and labeled sample outcome figures as illustrative, not reported results or sector benchmarks. Updated volunteer and grant compliance wording to defer to applicable award requirements. BlogPosting/Open Graph metadata and the sitemap use each post's `dateModified`.
15. **Trust signals** - Add relevant security, data protection, and reliability notes onto applicable public pages to build credibility for a B2B SaaS product. **Status: Completed** — reusable trust content appears on the homepage, pricing page, and feature pages; unsupported absolute reliability claims were removed.


### 4. STRUCTURED DATA & SCHEMA (P0 | Impact: Very High | Effort: Low-Medium)
16. **Organization schema** - Add `Organization` JSON-LD to the homepage with name, url, logo, description, sameAs, and contact information. **Status: Completed** — Kindora Organization JSON-LD includes identity, logo, social profiles, and contact details.
17. **SoftwareApplication schema** - Add `SoftwareApplication` JSON-LD to the homepage to classify Kindora as a web based nonprofit management software. Include application category and description. **Status: Completed** — implemented in `app/kindora/page.tsx` with `BusinessApplication` category, web operating system, and nonprofit management description.
18. **BreadcrumbList schema** - Add breadcrumbs to nested pages (`/kindora/features/*`, `/kindora/solutions/*`, and blog posts) to improve SERP display. **Status: Completed** — shared breadcrumb JSON-LD is used on nested feature, solution, and blog pages.
19. **FAQPage schema** - Add `FAQPage` JSON-LD to pages with visible FAQs (Homepage, Features, and any FAQ sections). Only mark visible questions and answers. **Status: Completed** — audited all 131 Kindora FAQPage schemas against their visible FAQ content, synchronized mismatched questions and answers, corrected malformed answer properties, and ensured the demo FAQ schema is rendered. The pricing page now shares Q&A data between both visible FAQ sections and its schema. Feature routes were checked and have no visible FAQs, so no FAQ schema was added there.
20. **Article schema** - Add `Article` schema to blog posts with headline, author, datePublished, dateModified, publisher, and image. **Status: Completed** — Kindora blog posts emit `BlogPosting` data with article identity, author, dates, publisher, and image.
21. **ItemList schema for comparisons** - Add `ItemList` schema to `/kindora/vs-competitors` to allow for search engines to properly parse the comparison table. **Status: Completed** — comparison list markup is generated from the page's comparison data.
22. **Schema validation** - Validate all added schema through Google's Rich Results Test and Schema Markup Validator, fixing any errors. **Status: In Progress** — local Schema Markup Validator checks reported 0 errors and 0 warnings for the checked schema; Google's URL test used the deployed version, so post-deployment live revalidation is still needed.


### 5. AI SEARCH & GEO OPTIMIZATION (P0 | Impact: Very High | Effort: Medium)
23. **Create AI-citable answer blocks** - Create self-contained answer blocks (40-90 words) for "What is Kindora?", "What is nonprofit donor management?", and "What is grant tracking?". Place them onto the homepage and their respective feature pages. **Status: Completed** — added standalone, question-led definition sections to the homepage, donor management feature page, and grant management feature page. Each definition is within the requested 40–90-word range.
24. **Convert to question-based headings** - Change relevant H2's to natural questions (e.g. "How does Kindora help nonprofits track grants?") to better match AI query patterns. **Status: In Progress** — question headings appear in some content, but a full pass converting relevant H2s across the target pages is not documented.
25. **Passage-level optimization** - Restructure key sections to be able to stand alone as citable passages with context and specific facts. **Status: Completed** — homepage and feature content include self-contained definitions, intent-specific explanations, benefits, and workflows.
26. **llms.txt implementation** - Add a minimal `/llms.txt` to `spacenexus.net` listing public Kindora pages. Do not claim ranking benefit, only treat as optionality for non-Google AI tools. **Status: Completed** — a root `llms.txt` links to the Kindora-specific index of public pages.
27. **AI crawler access check** - Audit `robots.txt` to ensure key AI crawlers (GPTBot, OAI-SearchBot, PerplexityBot, Claude-SearchBot) are not unintentionally blocked. **Status: Completed** — root robots rules allow crawling generally and contain no AI-crawler-specific blocks.
28. **AI visibility testing** - Test Kindora for 5 of the baseline queries across ChatGPT, Perplexity, Google AI Overviews, and Gemini. Document any citations and adjust accordingly. **Status: Pending** — no cross-platform test results or citation log are recorded.


### 6. COMPETITIVE & CONTENT BRIEFS (P1 | Impact: High | Effort: Medium)
29. **Competitor AI citation tracking** - Monitor Bloomerang, Bonterra, Salesforce Nonprofit Cloud, and Instrumentl for citations across the 4 AI platforms. Record when and where they are cited. **Status: In Progress** — tracking prompts and a 16-cell observation matrix are documented in `kindora-competitor-ai-citation-tracking.md`; the platform access check found Google, Perplexity, and ChatGPT unavailable and Gemini sign-in-gated, so no answer or citation data is claimed. Complete the matrix in accessible authenticated sessions.
30. **Strengthen the comparison page** - Enhance `/kindora/vs-competitors` with factual differentiators, specifically leaning into Kindora's all-in-one approach (Donors, Grants, Case Management, Accounting, and Cost Allocation) for small to mid-sized nonprofits. **Status: Completed** — reviewed the official Bloomerang, Salesforce Nonprofit Cloud, Bonterra Apricot, Keela, Microsoft Excel, Google Sheets/Workspace, and Kindora product/pricing pages; added visible source links and a review date; reframed table marks as features documented (or not found) in the reviewed sources rather than claims of product absence; removed unreferenced statistics and unsupported cost/setup comparisons; and synchronized visible FAQ answers with FAQ JSON-LD.
31. **Create "Alternative to [Competitor]" content** - Create optimized content for "Bloomerang alternative" and "Instrumentl alternative". Be factual, showcase differentiation, and internally link to relevant features. **Status: Completed** — fact-checked and revised the Bloomerang alternative page against Bloomerang's public CRM and pricing pages; created a dedicated Instrumentl alternative page with balanced positioning, plan-aware claims, FAQ schema matching visible answers, and links to Kindora's donor, grant, client-program, financial, and reporting features. Added both competitor sources, sitemap coverage and last-modified dates, and a cross-link from the Kindora-vs-Instrumentl comparison. Also reframed that comparison's unsupported feature absences and scores as documented-source coverage rather than product-absence claims.
32. **Execute top content brief** - Using `kindora-seo-brief`, create or optimize content for "donor management software for small nonprofits". Focus on affordability, ease of use, and link directly to `/kindora/features/donor-management`. **Status: Completed** — optimized `/kindora/donor-management-software` for the target query with a matching title/H1, small-team workflow explanations, and links to `/kindora/features/donor-management`. Affordability claims now match the published Starter plan (free for up to five team members with donor/donation management and basic reporting); paid plans are identified as custom-priced. Replaced unsubstantiated performance, migration, and setup claims with documented donor workflows and a practical demo checklist; FAQ JSON-LD uses the visible answers. Updated the sitemap last-modified date.


### 7. TRACKING & ITERATION (P1 | Impact: High | Effort: Low)
33. **Create AI visibility tracking dashboard** - Create a tracking sheet to log citations weekly for the baseline queries across all 4 platforms. Review and iterate on a weekly basis based off of findings. **Status: Completed** — `kindora-ai-visibility-weekly-tracker.csv` is the weekly log template, with 10 core Kindora queries mapped to target pages and all four requested platforms (40 query/platform rows). It captures checked dates, mentions/citations, recommendation position, exact cited URLs and context, locale/mode, evidence, and follow-up actions. For each weekly run, copy the 40-row block, set the Monday week-start date, preserve query wording and locale/mode, then record observed results only; mark unavailable platforms or missing Google AI Overviews distinctly rather than as uncited. Review the log weekly for citation coverage, cited-page gaps, and content follow-ups. The template is intentionally unpopulated: baseline collection (Task 1) remains Pending, and no AI citations or observations are claimed.

---


## Quick Implementation Order

| Order | Tasks | Goal |
| :-- | :-- | :-- |
| **1. Baseline** | 1 - 4 | Get a starting point, ensure crawlability and indexation. |
| **2. On-Page & Schema** | 5 - 22 | Fix metadata, structure, and add all structured data. This is the largest unlock for discoverability. |
| **3. GEO & AI** | 23 - 28 | Optimize for AI extraction and test citations. |
| **4. Competitive & Content** | 29 - 32 | Fill gaps found within AI answers, and capitalize off of Kindora's differentiators. |
| **5. Track** | 33 | Continuously measure and iterate off of data. |


## Notes
- **Entity Clarity:** Consistently portray Kindora as the primary entity on `/kindora/*` pages to combat confusion with the parent brand, SpaceNexus. 
- **GEO Reality:** Google ignores `llms.txt` for ranking. Prioritize citable content, schema, and entity clarity over relying on it.
- **No Code Changes:** All tasks are recommendations to be implemented onto the public marketing site. The auth-gated app does not need to be modified for these tasks. 
- **Measure Everything:** Track both traditional SEO (Search Console) and GEO (AI Citations) to accurately measure success.