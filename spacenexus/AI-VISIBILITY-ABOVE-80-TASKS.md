# Space Kindora — AI visibility backlog to exceed 80/100

## Baseline and operating assumptions

- **Reported baseline:** 69/100 overall AI Visibility Score; 72% AI Citability Score.
- **Report date:** November 26, 2026.
- **Coverage limitation:** the supplied report analyzed only `spacenexus.net/`. It is directional for Space Kindora and must be re-run against `https://spacenexus.net/kindora` and its key pages before treating the score as a product-specific baseline.
- **Main gaps:** Structured Data & AI Schema 16/30 (Partial), E-E-A-T Signals 12/20 (Partial), AI Citability 19/25 (Good).
- **Already present in the repository:** Kindora homepage FAQ JSON-LD and SoftwareApplication/Organization JSON-LD in `app/kindora/page.tsx`, reusable Organization/WebSite/SoftwareApplication JSON-LD in `app/kindora/components/KindoraJsonLd.tsx`, generated Kindora robots and sitemap routes, and `public/kindora/llms.txt`. These assets need production verification and consistency checks.
- **Score caveat:** the report’s point gains are estimates, not guaranteed additive points. The acceptance gate is a verified score above 80 on a fresh, comparable audit plus passing technical checks.

**Current objective status (2026-11-26): Target not yet verified.** The supplied screenshot reports 69/100 for `spacenexus.net` with the `/kindora` URL parameter, but the detailed Aibizmod report endpoint returned a 404 when inspected and the screenshot does not expose category findings, engine/prompt set, or product-specific URL coverage. Do not report this as a confirmed Kindora baseline or claim the >80 goal is achieved. Source updates have corrected the homepage's stale trial/setup/date copy, removed unsupported homepage comparison superlatives, made the global AI-summary prompt Kindora-aware, disabled simulated site-wide uptime, and normalized recurring Kindora Starter-plan/setup language. Remaining route-level claims about quantified outcomes, uptime, security certifications, unlimited access, and competitor prices/comparisons need documented evidence or removal; several depend on founder/product/legal approval. Production deployment and the comparable post-change audit/AI-answer collection are still required to establish the score.

## Priority order

| Priority | Workstream | Why it comes first | Report signal |
|---|---|---|---|
| P0 | Establish the correct baseline and crawl access | Prevents optimizing the wrong URL and removes a machine-access blocker | One-page scan; robots.txt missing; crawlability otherwise high |
| P1 | Make the homepage and key pages answer-ready | Highest direct lift for extraction and citations | FAQ schema missing in report; +8 estimated; Q&A 5/10 |
| P1 | Complete entity, service, breadcrumb, and trust schema | Improves disambiguation and structured extraction across engines | Services confidence 70%; location 65%; no BreadcrumbList/Review/Product findings |
| P1 | Publish evidence for experience and expertise | Largest non-technical gap | E-E-A-T 12/20; no quantified experience signals; incomplete Team/About |
| P2 | Build external corroboration and citation authority | On-site signals alone cannot establish durable brand authority | Report says on-site authority is strong but external verification is not covered |
| P2 | Monitor and iterate against real AI answers | Confirms whether implementation changes visibility, not just audit hygiene | Report is a static, homepage-only snapshot |

## Actionable tasks

### P0 — Correct scope and access

#### KAI-01 — Re-run the audit on the actual Kindora URL set

**Owner:** SEO/analytics lead. **Effort:** 0.5 day.

**Do:** Create a fixed audit set containing `/kindora`, `/kindora/about`, `/kindora/pricing`, `/kindora/faq`, the six core feature pages, the main solution pages, and 3–5 comparison pages. Record the same engines, prompts, market, and date for every run.

**Acceptance criteria**

- The baseline report identifies Kindora as the brand and uses `/kindora` as the canonical product scope.
- At least 10 neutral prompts cover nonprofit CRM, donor management, grant management, case management, volunteer management, pricing, and alternatives.
- The run records mention rate, citation rate, competitors, cited URLs, failed collections, and no-answer collections separately.

**Verification**

- Export the run and store the run ID, prompt list, engine list, and URL coverage in the SEO project log.
- Do not count the score as “above 80” until the same prompt/engine set is used for the post-implementation run.

#### KAI-02 — Publish one canonical robots.txt policy for AI crawlers

**Owner:** Web platform. **Effort:** 0.5–1 day.

**Status (2026-11-26):** **Blocked on production deployment** — root policy is updated in source; live verification must be repeated after deployment before KAI-02 can be marked complete.

**Do:** Make the root `/robots.txt` the single source of truth. Permit public Kindora pages to `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, and `Google-Extended` unless legal/content policy explicitly requires a restriction. Keep private, API, admin, preview, and tracking routes blocked. Include the production sitemap URL. Reconcile `app/robots.ts` with any static `public/robots.txt`; remove conflicting behavior.

**Acceptance criteria**

- `https://spacenexus.net/robots.txt` returns 200, valid plain text, and one intentional rule set.
- `/kindora`, `/kindora/sitemap.xml`, public feature pages, and public blog pages are not disallowed.
- `/api/`, `/admin/`, `/private/`, preview routes, and email-click tracking remain disallowed.
- The sitemap URL is present and resolves successfully.

**Verification**

- Fetch the live file with `curl -I` and `curl` and test it with a robots parser.
- Check each named crawler rule and compare the live result to the source in `app/robots.ts` and `public/robots.txt`.
- Re-run the AI citability/crawler-access checks; the report’s “robots.txt missing” finding must clear.

**Production check (2026-11-26):** `https://spacenexus.net/robots.txt` returned `200 OK` with `Content-Type: text/plain`; the six requested user agents were allowed and both sitemap URLs were listed. `https://spacenexus.net/kindora/sitemap.xml` returned `200 OK` with `Content-Type: application/xml`. Production still serves the earlier policy, which does not yet disallow preview paths. Do not mark KAI-02 complete until the updated policy is deployed and these checks are repeated.

#### KAI-03 — Validate the public sitemap and canonical URL graph

**Owner:** Web platform. **Effort:** 1 day.

**Status (2026-11-26):** Production sitemap crawl passed for all 184 URLs; Google Search Console submission and coverage result remain pending because no Search Console session is connected. See [KINDORA-SITEMAP-CANONICAL-AUDIT.md](KINDORA-SITEMAP-CANONICAL-AUDIT.md).

**Do:** Ensure the Kindora sitemap contains only indexable canonical URLs, including the homepage, About, FAQ, pricing, feature, solution, comparison, and high-value blog pages. Remove redirects, duplicates, tracking URLs, and stale URLs. Ensure every included URL has an absolute canonical link.

**Acceptance criteria**

- `https://spacenexus.net/kindora/sitemap.xml` returns 200 and valid XML.
- Every sitemap URL returns 200, is indexable, and has a matching absolute canonical.
- No URL in the sitemap points to `/templates/`, email-click routes, a non-canonical host, or a redirect.

**Verification**

- Run a sitemap crawl and sample at least 20 URLs across page types.
- Submit/refresh the sitemap in Google Search Console and retain the coverage result.

### P1 — Make pages answer-ready and schema-complete

#### KAI-04 — Consolidate and validate homepage FAQPage JSON-LD

**Owner:** SEO/content + frontend. **Effort:** 0.5–1 day.

**Status (2026-11-26):** Source consolidated and locally verified in server-rendered HTML: one FAQPage graph, seven unique Q&As, all answers visible and direct. Schema Markup Validator, Rich Results Test, and the live AI-readable-content audit remain pending deployment of the change.

**Do:** Keep 5–8 high-value, visible Q&A pairs on `/kindora` covering what Kindora is, who it serves, donor/grant/case workflows, pricing/trial, integrations, data/security, and migration. Ensure the JSON-LD exactly mirrors the visible wording. The existing FAQ schema in `app/kindora/page.tsx` is the starting point; do not create a second conflicting FAQ graph.

**Acceptance criteria**

- The page has one valid `FAQPage` graph with at least five `Question`/`Answer` pairs.
- Every answer is visible in rendered HTML, specific to Kindora, and starts with a direct answer.
- No unsupported claims, duplicate questions, or schema-only content exists.

**Verification**

- Validate the rendered page with Schema Markup Validator and Rich Results Test.
- Fetch the HTML without JavaScript and confirm the Q&A text and JSON-LD are present.
- Re-run the audit’s FAQ/AI-readable-content checks; the “missing FAQPage schema” issue must clear.

#### KAI-05 — Add citation-ready answer blocks to priority pages

**Owner:** Content + product marketing. **Effort:** 2–4 days for the first 10 pages.

**Status (2026-11-26):** Answer blocks and local rendered-page review complete for all 10 pages. Tracked-prompt citation comparison is pending the KAI-01 baseline run; see [KINDORA-ANSWER-READY-REVIEW.md](KINDORA-ANSWER-READY-REVIEW.md).

**Do:** Add a concise definition, “best for,” workflow, limitations, and measurable facts near the top of `/kindora`, `/kindora/donor-crm`, `/kindora/grant-management-software`, `/kindora/case-management`, `/kindora/volunteer-management`, `/kindora/nonprofit-financials`, `/kindora/pricing`, `/kindora/faq`, `/kindora/about`, and the primary comparison page. Use question-led H2/H3 sections and short paragraphs that can stand alone when quoted.

**Acceptance criteria**

- Each page answers its primary intent in the first 150–250 words.
- Each page has at least three question-led sections and one concise comparison, process, or feature table where appropriate.
- Facts include scope, date/context, and a source or methodology when they are not self-evident.
- Claims do not rely on the email template [Spacekindora.html](public/templates/Spacekindora.html) as the canonical product page.

**Verification**

- Render each page, copy the first viewport and headings, and confirm the answers are present without interaction.
- Run an extraction review: a reviewer must be able to answer the page’s primary question using only the first 400 words.
- Compare post-change cited URLs and answer snippets for the tracked prompts.

#### KAI-06 — Add Article/BlogPosting schema to every indexable blog post

**Owner:** Content platform. **Effort:** 1–2 days.

**Do:** Add `Article` or `BlogPosting` JSON-LD with headline, description, author, `datePublished`, `dateModified`, image, publisher, mainEntityOfPage, and canonical URL. Use stable Person/Organization IDs for authors and publisher.

**Acceptance criteria**

- Every published Kindora blog post has exactly one applicable article graph.
- Metadata matches the visible title, author, publication date, modification date, and canonical URL.
- Draft, preview, and duplicate routes are not indexable.

**Verification**

- Crawl all blog post routes and fail CI when required fields are missing or malformed.
- Validate representative posts in Schema Markup Validator and inspect Google Search Console enhancements.

**Status (2026-11-26):** Implementation complete; local CI validation and rendered-route crawl passed for all 17 published post records. Production Schema Markup Validator and Search Console enhancement checks remain pending deployment and access to the verified Search Console property.

#### KAI-07 — Add BreadcrumbList schema site-wide for Kindora interior pages

**Owner:** Frontend platform. **Effort:** 1 day.

**Do:** Extend the existing breadcrumb component so every indexable interior page emits a valid breadcrumb trail: Home → Kindora → section → page. Use absolute canonical URLs and visible breadcrumbs where useful.

**Acceptance criteria**

- All interior Kindora pages have one `BreadcrumbList` with correct ordered positions and URLs.
- No breadcrumb points to a 404, redirect, tracking URL, or email template.

**Verification**

- Run a route-level schema crawl and validate samples from feature, solution, blog, pricing, and comparison sections.

**Status (2026-11-26):** Implemented one server-rendered Kindora breadcrumb graph in the shared layout and removed competing page-level graphs, including the unrelated global SpaceNexus trail. Static route validation passed for 186 Kindora routes; rendered samples passed for feature, solution, blog, pricing, and comparison pages.

#### KAI-08 — Add truthful Service and Product schema to the relevant pages

**Owner:** Product marketing + frontend. **Effort:** 1–2 days.

**Do:** Use `Service` for donor, grants, case management, volunteer, and nonprofit financial management pages. Use `SoftwareApplication`/`Product` only where the page genuinely describes the purchasable Kindora software. Include name, description, provider, URL, category, audience, and valid offer/pricing data. Do not add Product schema to generic educational articles.

**Acceptance criteria**

- Every service page has one matching service entity linked to the Kindora Organization ID.
- Pricing values, trial language, and availability match the visible pricing page and current commercial terms.
- No fabricated ratings, reviews, availability, or price claims are introduced.

**Verification**

- Validate JSON-LD and compare each structured claim with rendered page copy and `/kindora/pricing`.
- Check entity IDs and `sameAs` consistency across all graphs.

**Status (2026-11-26):** Implemented truthful `Service` entities for donor CRM, grant management, case management, volunteer management, and nonprofit financial management, all linked to the stable Kindora Organization ID. The pricing page now has a single `SoftwareApplication`/`Product` graph with a free Starter offer and custom-price Professional and Enterprise offers; no trial, availability, rating, or review claims were added. Static schema checks and a local rendered crawl of all six pages passed, including visible-copy and provider-ID checks.

#### KAI-09 — Add Review/AggregateRating schema only after collecting verifiable reviews

**Owner:** Customer marketing + legal + SEO. **Effort:** 2–6 weeks.

**Do:** Collect first-party-permitted, attributable customer reviews and publish reviewer name/organization, review date, product context, and consent. Add `Review`/`AggregateRating` only when the rating is based on a documented, visible set of reviews and meets Google’s guidelines.

**Acceptance criteria**

- At least five attributable reviews are publicly visible with dates and reviewer context, or this task is explicitly marked not applicable.
- Aggregate values are reproducible from the visible review set.
- No self-serving or fabricated rating markup is published.

**Verification**

- Recalculate the aggregate from the published reviews.
- Validate schema and run a manual policy review before deployment.

**Status (2026-11-26): Not applicable.** The existing `/kindora/consumer-review` page listed six named/rated testimonials but supplied no review dates, attribution sources, or consent records, so they could not qualify as verifiable reviews. The unverified testimonials and the inherited SpaceNexus rating/review graph were removed; the Kindora review page is noindex and excluded from the sitemap. No `Review` or `AggregateRating` schema is published for Kindora. Revisit this task only after at least five attributable, dated, permitted reviews are documented.

### P1 — Strengthen experience, expertise, authority, and trust

#### KAI-10 — Publish a complete About/Team/Contact entity profile

**Owner:** Founder/marketing + legal. **Effort:** 2–4 days.

**Do:** Expand `/kindora/about` with named leadership/team members, roles, relevant nonprofit/product experience, company history, location or service area, contact method, editorial/product ownership, and links to professional profiles. Link the page from the homepage and footer.

**Acceptance criteria**

- The page answers who owns Kindora, who builds it, when it was founded, where it operates, and how to contact the team.
- Every named person has a consistent bio and professional profile link.
- Organization schema contains consistent name, URL, logo, `sameAs`, contactPoint, and—where legally appropriate—address/founding data.

**Verification**

- Cross-check every fact against internal source records and public profiles.
- Validate Organization and Person entities; re-run the E-E-A-T and entity-confidence checks.

**Status (2026-11-26): Partially complete; individual leadership profiles need approved source records.** The About page now identifies SpaceNexus Inc. as Kindora's developer/product owner, distinguishes the 2022 parent-company founding from Kindora's 2024 launch, lists the published Sacramento location and contact methods, links the public organization profiles, and explains that the geographic service territory is not specified. The Organization graph now has one stable ID, the canonical Kindora URL/logo, matching `sameAs` links, a contact point, and a parent-organization reference; unsupported founding/address fields were removed from the product Organization entity. The About page is linked from the homepage and footer. I did not reuse the four general SpaceNexus blog-author profiles as Kindora leaders: available public LinkedIn results for those names do not reliably match the bios/roles in the local records. No verified individual Kindora leadership/editorial bios or professional links were available in the repo. Add them only after founder/legal supplies approved names, roles, bios, and profile URLs; then rerun the E-E-A-T/entity review.

#### KAI-11 — Add quantified, evidenced experience signals

**Owner:** Founder + customer marketing. **Effort:** 1–2 weeks.

**Do:** Replace generic claims with approved, dated facts such as years of experience, number/type of organizations served, implementations, team background, response times, or workflow outcomes. Attach evidence: case study, methodology, customer quote, or source link.

**Acceptance criteria**

- At least three quantitative claims appear on About, homepage, or relevant feature pages.
- Each claim has an owner, date/context, and evidence; unsupported “best” or “leading” language is removed.
- Customer results are clearly labeled as customer-specific, not universal guarantees.

**Verification**

- Legal/founder sign-off on every number.
- Re-run the E-E-A-T sub-check and confirm quantified experience signals are detected.

**Status (2026-11-26): In progress; founder/legal approval required before acceptance.** The About page now presents four dated, owned facts with links to public evidence: SpaceNexus founded (2022), Kindora launched (2024), four access roles, and plan member limits (5 / 25 / unlimited). Removed unsupported quantified outcome claims from the About, charity-management, client-case-management, and donor-stewardship presentations; changed illustrative client names to “Sample participant”; removed unsupported “leading” and “trusted nationwide” wording from the charity and client-case pages. These edits do not constitute founder/legal sign-off. Product must confirm the current role and plan figures; founder/legal must approve each number and evidence source. Remaining duplicate SEO copy and mock dashboards across the wider Kindora route set still need a full claim inventory. Re-run the E-E-A-T sub-check only after approvals and the remaining route review.

#### KAI-12 — Publish evidence-led customer stories and use cases

**Owner:** Customer marketing. **Effort:** 2–4 weeks for three stories.

**Do:** Publish three crawlable case studies for distinct nonprofit types (for example social services, youth/community organizations, and grant-funded programs). Include problem, implementation, modules used, measured outcome, customer identity/permission, date, and methodology.

**Acceptance criteria**

- Three indexable case studies exist, each with a named organization or clearly disclosed anonymized status and permission.
- Each includes at least one concrete before/after metric or operational result and an attributable quote.
- Each has Article schema, author/publisher, dateModified, and links to the relevant Kindora feature pages.

**Verification**

- Validate rendered HTML and schema.
- Ask an independent reviewer to extract the customer, problem, solution, and result from each page without opening other pages.

**Status (2026-11-26): Not publishable yet; customer evidence and permissions are missing.** No verified customer permission, attributable quote, or before/after outcome records were found in the project materials. No case-study pages have been published and no outcomes have been fabricated. Use [KINDORA-CUSTOMER-STORY-EVIDENCE-REGISTER.md](KINDORA-CUSTOMER-STORY-EVIDENCE-REGISTER.md) to collect the approvals and source records for three distinct nonprofit use cases. Publish each story only after the customer identity/anonymization, quote, metric, methodology, and publication permission are documented; then add Article schema and run the requested independent review.

### P2 — Build external corroboration and ongoing measurement

#### KAI-13 — Create a third-party authority and profile plan

**Owner:** PR/partnerships. **Effort:** 2–6 weeks, then monthly.

**Do:** Ensure consistent Kindora profiles and factual descriptions on relevant nonprofit software directories, review platforms, partner pages, conference/event profiles, and social profiles. Prioritize sources that AI answers already cite for nonprofit software recommendations. Request editorial listings and customer reviews; do not mass-submit low-quality directories.

**Acceptance criteria**

- A source inventory records URL, owner, profile status, canonical brand name, description, logo, product URL, and last verification date.
- At least five relevant, reputable third-party profiles are complete and consistent.
- At least three independent editorial/customer references mention Kindora accurately.

**Verification**

- Quarterly citation-source review records whether each page is indexed, live, accurate, and linked.
- Compare brand mentions and cited third-party URLs in the AI tracker before and after outreach.

**Status (2026-11-26): Inventory and outreach plan complete; publication and corroboration criteria remain open.** Added [KINDORA-THIRD-PARTY-AUTHORITY-PLAN.md](KINDORA-THIRD-PARTY-AUTHORITY-PLAN.md) with the canonical profile facts, owners, URLs, status, and verification date for source prospects and existing listings. Search identified an iTechGuides listing that links to `spacenexus.net` and an Inferse directory listing; the latter discloses that top placements can be paid, so neither is counted as a customer reference. Search also surfaced a significant name collision: Software Advice and an Applied case study describe a different Kindora product at `kindora.co`, while an App Store result describes an unrelated volunteer app. These are expressly excluded from SpaceNexus evidence. Five complete reputable profiles and three independent editorial/customer references are not yet present. External profiles, review solicitation, and editorial outreach require team ownership, approvals, and customer participation; no listings or reviews have been created or represented as complete.

#### KAI-14 — Normalize the Kindora knowledge graph across every page type

**Owner:** SEO platform. **Effort:** 1–2 days.

**Do:** Use one stable Organization `@id`, one canonical Kindora URL, one logo URL, and the same verified `sameAs` set in homepage, layout, About, feature, blog, and pricing schema. Link services and articles to the organization entity.

**Acceptance criteria**

- No page describes Kindora as SpaceNexus, Space Kindora, and Kindora NGO OS inconsistently without an explicit `alternateName` relationship.
- All pages use the same verified name, URL, logo, contact, and social profile values.
- Parent-company relationship is intentional and consistent.

**Verification**

- Crawl JSON-LD and produce a diff of entity names, IDs, URLs, and `sameAs` values.
- Fix every unexplained mismatch before the audit rerun.

**Status (2026-11-26): Complete in source; production crawl can follow deployment.** Added one shared Kindora Organization source with ID `https://spacenexus.net/kindora/#organization`, canonical URL `https://spacenexus.net/kindora`, one logo/contact record, alternate name `Kindora NGO OS`, and parent `SpaceNexus` ID. Homepage, About, shared layout, feature/service, blog/article, and pricing graphs now reference that node. Duplicate homepage software data was removed; legacy service/article and careers graphs were changed to stable Organization references; SpaceNexus's product catalog points to the canonical Kindora software ID. No social profile URL was verified by an account owner, so the Organization `sameAs` property is omitted consistently rather than populated with unconfirmed links. The local JSON-LD crawl passed for 14 representative rendered routes and wrote [KINDORA-ENTITY-CONSISTENCY-AUDIT.md](KINDORA-ENTITY-CONSISTENCY-AUDIT.md); commercial-schema checks, the 186-route breadcrumb check, lint, and diff whitespace checks passed. Repeat the rendered crawl against production after deployment.

#### KAI-15 — Add machine-readable comparison and pricing facts

**Owner:** Product marketing + frontend. **Effort:** 2–3 days.

**Do:** Make `/kindora/pricing` and comparison pages expose plan names, price model, user limits, included modules, trial terms, implementation constraints, and “best for” guidance as server-rendered text and tables. Keep structured data synchronized with visible copy.

**Acceptance criteria**

- A user or crawler can extract the pricing model and plan differences without JavaScript interaction or a form submission.
- Comparison pages state methodology, update date, criteria, and limitations.
- No “free,” “starting at,” or competitor comparison claim conflicts with the current commercial terms.

**Verification**

- Fetch pages with JavaScript disabled and inspect extracted text.
- Run a structured-data and content diff against the pricing source of truth.

**Status (2026-11-26): Complete in source; rendered verification passed locally.** Added a server-rendered `/kindora/pricing` plan facts table for Starter, Professional, and Enterprise with price model, member limits, included modules, trial/access terms, onboarding and support scope, and best-for guidance. Updated the commercial Offer descriptions and pricing FAQs to identify Starter as the ongoing free plan, distinguish custom-priced paid plans, and remove unsupported cancellation, discount, and fixed setup-time claims. Added a shared dated comparison methodology section to all 15 comparison routes, including criteria, source approach, caveats, and limits; removed stale competitor price amounts and time-limited-trial claims. Updated `scripts/validate-kindora-commercial-schema.cjs` to check current offer terms, pricing-table text, and rendered methodology content. Targeted ESLint passed. The local rendered crawl passed for the pricing and five service pages plus all 15 comparison routes at `http://localhost:3000`; the pricing table and comparison methodology were present in initial server HTML without executing client JavaScript. Repeat the crawl against production after deployment.

#### KAI-16 — Establish a recurring AI visibility measurement loop

**Owner:** SEO/analytics lead. **Effort:** 1 day setup, 1–2 hours/week.

**Do:** Track the fixed prompt set monthly across ChatGPT, Google AI Overviews, Gemini, Claude, and Perplexity where available. Record brand mention, citation, competitor, cited URL, answer quality, and changed pages. Annotate releases and external placements.

**Acceptance criteria**

- A dashboard or CSV has one row per prompt/engine/run and separates no-answer/failure from “not mentioned.”
- The same baseline prompt set is preserved; additions are versioned.
- The success gate is: comparable overall score >80, no P0 crawl/schema failures, and improvement in both mention and citation rates for the priority prompt cluster.

**Verification**

- Run a pre-release and 30-day post-release check.
- Inspect at least three answers per priority topic and confirm citations point to the intended canonical pages.

**Status (2026-11-26): Tracker and protocol set up; live measurement remains pending.** Preserved Q01–Q20 and U01–U19 and versioned the engine protocol to v1.1 before the first collection, adding Claude to ChatGPT, Google AI Overviews, Gemini, and Perplexity. Added a 100-row pre-release CSV template, a release/external-placement changelog, a runbook, and `scripts/kindora-ai-visibility.mjs` to generate templates and validate/summarize each run. The initial summary correctly reports 100 pending rows, 0 observations, and n/a mention/citation rates. The prior platform-access check documented in the runbook found ChatGPT/Perplexity unavailable in that browser environment and Gemini sign-in required; no baseline or answers have been fabricated. Pre-release collection, the recorded audit score, and the 30-day post-release run remain outstanding until authenticated engine access and a production release date are available.

## Suggested delivery sequence

1. **Week 1:** KAI-01 through KAI-03; establish the correct baseline, robots policy, sitemap, and canonical graph.
2. **Weeks 2–3:** KAI-04 through KAI-08 and KAI-14; consolidate existing schema and make priority pages answer-ready.
3. **Weeks 3–6:** KAI-10 through KAI-12 and KAI-15; add trust, evidence, use cases, and machine-readable commercial facts.
4. **Weeks 4–8:** KAI-09 and KAI-13; collect legitimate reviews and external corroboration.
5. **Every month:** KAI-16; rerun the comparable audit, inspect answers, and reprioritize based on observed citations.

## Definition of done for “above 80”

- A fresh audit of the Kindora URL set scores **81 or higher** using the same engines, market, and prompt version as KAI-01.
- `robots.txt`, sitemap, canonical, JSON-LD, and rendered-content checks all pass.
- FAQPage, Organization, SoftwareApplication/Product, Service, BreadcrumbList, and Article schemas are present only where truthful and validate without errors.
- About/team, quantified experience, customer evidence, pricing, and core feature answers are crawlable without login or JavaScript-only interaction.
- The report no longer flags missing FAQPage schema, missing AI crawler rules, incomplete About/Team evidence, or missing BreadcrumbList on applicable pages.
- The team records the new score, mention rate, citation rate, competitor gaps, and the exact URLs cited by each engine; the score is not accepted from an uncomparable or homepage-only scan.

