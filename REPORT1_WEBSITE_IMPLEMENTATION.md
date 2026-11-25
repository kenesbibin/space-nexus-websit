# Report 1 — SpaceNexus Website Audit & Implementation Plan

**Scope:** SpaceNexus website only; Report 1, M&A GEO Visibility Action Plan (Prompts 1–4)  
**Audit date:** 2026-11-20  
**Status:** Website task execution in progress; product-claim tasks skipped per user direction.  
**Out of scope:** Backend, database, API, product functionality, commits, pushes, and deployment.

## Executive summary

The website already has an M&A VDR landing page and supporting pages for M&A document sharing, Q&A, due diligence, investment banking, private equity, checklists, integrations, and reports. The recommended approach is to improve these existing pages, not create competing pages.

The clearest gaps are: the primary page's short introductory copy and missing visible FAQ section despite FAQ structured data; insufficiently explicit coverage of diligence requests, document collection, spreadsheet alternatives, and findings/risk; unverified integration and product claims; and internal links that use legacy or redirected URLs. The primary M&A page, supporting content, metadata, structured data, sitemap, and LLM files can address these gaps within the current site.

Marketing copy and screenshots in this repository are not independent proof that product capabilities, integrations, certifications, or security claims are available. Any such claim must be confirmed before being retained or expanded. This audit does not verify claims against the live product.

## Existing M&A page audit

| Page / file | Current coverage | Recommended improvement |
|---|---|---|
| `/solutions/mergers-and-acquisitions-vdr` — `app/solutions/mergers-and-acquisitions-vdr/page.tsx` | Main M&A VDR page; metadata and canonical present; deal-stage workflow, capability cards, FAQs in JSON-LD, screenshot, CTA, and related links. | Keep as the primary M&A hub. Replace the short hero/answer copy with one clear 40–60-word introduction, identify intended users, and explain the workflow using only verified capabilities. Add visible FAQs matching the structured data. Clarify request management, collection/Q&A, spreadsheet alternatives, findings/risk, and cross-links. Review strong claims (including AI redaction, SOC 2, encryption, bidder controls, and 24-hour setup) before publication. |
| `/features/qa` — `app/features/qa/page.tsx` | Dedicated Q&A page with canonical, visible Q&A material, FAQ content/schema, and claims about assignment, categories, statuses, deadlines, alerts, and audit history. | Improve the distinction between buyer Q&A and seller-side document/request-list management. Retain only confirmed workflow details; link to the M&A hub and relevant due-diligence pages. |
| `/solutions/ma-document-sharing` — `app/solutions/ma-document-sharing/page.tsx` | Existing M&A document-sharing page with deal stages, collection/sharing language, FAQ, and metadata. | Strengthen document collection and Q&A explanations here and link back to the main hub. Do not create another M&A document-collection landing page. Review claims about checklists, permissions, e-signature, compliance, and setup time. |
| `/due-diligence-software` — `app/due-diligence-software/page.tsx` | Broad software comparison page; its summary already describes replacing email, file sharing, and spreadsheet-based diligence. | Improve the practical spreadsheet-alternatives content (where spreadsheets break down, what workflow to use instead, and when a tracker remains useful). Avoid a competing standalone alternatives page. Verify comparative and product capability claims. |
| `/data-room-due-diligence` — `app/data-room-due-diligence/page.tsx` | Existing setup guide with folder structure, best practices, security, FAQs, and M&A links. | Improve/align its request-list and document-collection guidance with the main hub. Avoid restating product capabilities not confirmed. |
| `/industries/investment-banking/ma-advisory` — `app/industries/investment-banking/ma-advisory/page.tsx` | Audience-specific M&A advisory page with metadata, workflow/FAQ content, and internal links. | Review overlapping M&A workflow and product claims; link users to the main hub rather than creating another M&A landing page. |
| `/industries/private-equity/buy-side-diligence` — `app/industries/private-equity/buy-side-diligence/page.tsx` | Buy-side diligence audience page with metadata and detailed workflow/FAQ claims. | Review any claims about multi-fund coordination, expert-network integrations, IC packages, and findings; cross-link to the central M&A page and relevant verified capabilities. |
| `/features/integrations` — `app/features/integrations/page.tsx` | Existing integrations page names Google Drive, Box, Salesforce, Adobe Sign, Okta, and Azure AD, among others, in page copy/metadata/FAQ. | Do not add named integrations until independently verified. Reconcile all visible copy, metadata, and FAQ/schema to an approved integration inventory; remove or qualify unsupported names and sync claims. |
| `/features/reports` — `app/features/reports/page.tsx` | Reporting page describes access/activity, Q&A, audit, and engagement reports. | Review for factual support and clarify that reporting is not automatically a findings or risk register. Link to it only for capabilities confirmed. |
| `/checklists/due-diligence-checklist` — `app/checklists/due-diligence-checklist/page.tsx` | Existing checklist resource for diligence workstreams. | Use as an educational resource for request-list and risk-review guidance; avoid implying checklist completion, findings tracking, or remediation workflows in the product without confirmation. |

### Notable on-page and content issues

- The main page has an FAQPage JSON-LD block, but no matching visible FAQ section was found in its rendered page component. Structured data should represent content users can see.
- The main page's hero/answer text is shorter than the requested 40–60-word introduction and mixes several capability and trust claims.
- The main page links to legacy-looking paths such as `/ma-document-sharing` and `/features/vdr-data-room`; prefer canonical destinations after confirming redirect behavior. The canonical document-sharing route is `/solutions/ma-document-sharing`.
- Existing M&A page metadata and canonical URLs are present, but metadata wording also contains product/security claims that need review. The M&A solution and due-diligence routes are already present in `app/sitemap.ts`; preserve valid canonical routes and check all changed target routes before altering coverage.
- Existing Q&A copy covers question handling, but that should not be presented as a full diligence request-management system unless the distinction and capability are verified.
- The repo contains marketing pages, metadata, screenshots, and static content. This audit cannot verify implementation or availability in the live product; do not treat website statements as proof.

## New pages

**No new pages are recommended for this phase.** The current routes cover the requested intent sufficiently to improve existing pages:

- Request management and document collection: expand the primary M&A page and the existing Q&A/document-sharing pages.
- Spreadsheet alternatives: expand `/due-diligence-software`.
- Integrations: correct `/features/integrations` after obtaining a verified inventory.
- Findings and risk: add accurate process guidance to existing content only; do not imply a product findings register, risk dashboard, or remediation workflow without verification.

Reconsider a separate page only if a later content review finds a distinct search intent that existing pages cannot satisfy without duplication.

## Proposed website files to modify (after approval)

### Core page content and on-page metadata

- `app/solutions/mergers-and-acquisitions-vdr/page.tsx`
- `app/features/qa/page.tsx`
- `app/solutions/ma-document-sharing/page.tsx`
- `app/due-diligence-software/page.tsx`
- `app/data-room-due-diligence/page.tsx`
- `app/industries/investment-banking/ma-advisory/page.tsx`
- `app/industries/private-equity/buy-side-diligence/page.tsx`
- `app/features/integrations/page.tsx`
- `app/features/reports/page.tsx`
- `app/checklists/due-diligence-checklist/page.tsx`

### Discovery and validation surfaces

- `app/sitemap.ts` — only if the audit of changed routes finds a valid, indexable canonical M&A route missing; current primary routes are already listed.
- `public/llms.txt`
- `public/llms-full.txt`

No backend, database, API, or product-application files are in the plan. No new route is planned. The scope may be narrowed after approval if verified content does not require changes to every supporting page.

## Work phases and status

| Phase | Work | Status |
|---|---|---|
| 1 | Audit existing M&A website pages and identify content/claim gaps | Complete |
| 2 | Approve the proposed scope and factual claims | Website scope approved; product-claim verification skipped per user direction |
| 3 | Improve the primary M&A page and existing supporting pages | T6 complete; product-specific content tasks skipped per user direction |
| 4 | Align metadata, visible FAQs, JSON-LD, internal links, sitemap, and LLM files | In progress: primary M&A hub links, sitemap check, and LLM page references complete |
| 5 | Validate changed routes, links, metadata, structured data, sitemap, LLM files, and production build | Blocked: webpack compile succeeded, but TypeScript failed on the nested Astro repository; Turbopack also failed while loading Lightning CSS |

## Detailed task register

Website scope is approved. Tasks are being handled one at a time; product-claim verification was skipped per user direction, so do not present unverified claims as SpaceNexus capabilities.

| Done | Task | Completion criteria | Depends on | Status |
|---|---|---|---|---|
| ✓ T1 | Audit existing M&A pages | Existing routes, content gaps, overlap, claims, metadata, and current sitemap coverage documented in this report. | — | Complete |
| ✓ T2 | Approve website scope | Confirm the proposed website-only file list and that no new pages are planned. | T1 | Complete — approved by user on 2026-11-20 |
| [ ] T3 | Verify product and trust claims | Obtain reliable confirmation for product workflows, integrations, setup times, security controls, certifications, and other claims to be used. Treat unknown claims as unverified. | T2 | Skipped per user; claims remain unverified |
| [ ] T4 | Improve the primary M&A VDR page | Add a 40–60-word introduction, clear target users, accurate workflow/capabilities, and useful links without unverified claims. | T2, T3 | Skipped per user; page capability claims not changed |
| [ ] T5 | Clarify request management, document collection, and Q&A | Improve the existing M&A, Q&A, and document-sharing pages; distinguish buyer Q&A from seller request-list management and only describe confirmed functionality. | T2, T3 | Skipped per user; product-workflow claims not changed |
| ✓ T6 | Improve spreadsheet-alternative guidance | Expand the existing due-diligence software page with practical guidance on spreadsheet limitations and alternatives, without adding a competing page. | T2 | Complete |
| [ ] T7 | Reconcile integration claims | Update integrations copy, metadata, FAQs, and structured data to include only verified CRM, legal DMS, and e-signature integrations. | T2, T3 | Skipped per user; integrations not verified or edited |
| [ ] T8 | Address findings and risk tracking accurately | Add only verified product capability statements; otherwise limit content to general process guidance and do not imply a product findings register or risk-management feature. | T2, T3 | Skipped per user; no product risk feature claims added |
| [ ] T9 | Align on-page SEO and structured data | Review titles, descriptions, headings, canonicals, and FAQs; make visible FAQ content agree with FAQ structured data. | T4–T8 | Pending |
| ✓ T10 | Improve M&A internal linking | Link the primary M&A hub to relevant M&A pages, VDR features, security, pricing, and demo using valid direct destinations. | T2 | Complete |
| ✓ T11 | Verify sitemap coverage | Ensure valid, indexable canonical M&A pages are represented; change the sitemap only if an eligible route is missing. | T2 | Complete — core M&A routes are listed; no sitemap edit needed |
| ✓ T12 | Update M&A information for AI discovery | Add links to existing M&A pages in both LLM files using neutral, page-topic descriptions and no unverified product claims. | T2 | Complete |
| [ ] T13 | Validate the website changes | Run the production build and check changed-page rendering, links, metadata, canonicals, structured data, sitemap, and LLM files. | T4–T12 | Blocked: webpack compiled, then TypeScript failed in `spacenexus/spacenexus/eGEOagents/site/src/content.config.ts`; Turbopack failed resolving a Lightning CSS module |
| [ ] T14 | Update this progress report | Record completed work, validation results, blockers, and any approved scope changes. | T4–T13 | Pending |

### Execution notes

- T2 is approved. Product-claim verification (T3) is skipped per user direction; keep unsupported product claims out of any new copy.
- T3 is a factual-claims gate. The website repository alone does not establish that product features or integrations work.
- If a claim cannot be verified, omit or clearly qualify it rather than delaying unrelated educational content.
- Keep all implementation within the SpaceNexus website. Do not modify backend, database, API, or Kindora functionality.
- Execute and tick website tasks one at a time. T6 adds educational guidance only and does not describe SpaceNexus product features. T10 updates direct links on the primary M&A hub. T12 adds existing-page references only, without product capability claims.

## Validation plan after approval

- Run the production build.
- Render-check changed pages and confirm unique titles, descriptions, and canonicals.
- Confirm each FAQ structured-data item is supported by visible page content.
- Check internal links for missing routes and avoidable redirects.
- Validate sitemap entries against existing canonical, indexable M&A routes.
- Review `llms.txt` and `llms-full.txt` for accurate, consistent M&A information and ensure no new unsupported claims.

## Worktree note

The repository already has many modified and untracked files, including several website files listed above. Those pre-existing changes were preserved. This phase added an educational section to `app/due-diligence-software/page.tsx`, updated internal links on `app/solutions/mergers-and-acquisitions-vdr/page.tsx`, and added references to existing M&A pages in `public/llms.txt` and `public/llms-full.txt`; pre-existing changes were retained. `app/sitemap.ts` was checked and did not need changes. Review the full diff before further edits so prior work remains attributable.

## Change log

- 2026-11-20: Audited the existing website M&A content and documented recommendations. No website source, backend, database, API, commit, push, or deployment changes made.
- 2026-11-20: Recorded user approval of the website-only scope. No backend, database, API, commit, push, or deployment changes made.
- 2026-11-20: User skipped product-claim tasks. Added an educational spreadsheet-alternatives section to the existing due-diligence software page (T6); no product capability claim or new route added. Targeted ESLint completed with 0 errors and 1 existing `<img>` warning.
- 2026-11-20: Updated primary M&A hub links to use direct destinations and added links to Q&A and security pages (T10). Targeted ESLint passed with no diagnostics.
- 2026-11-20: Verified that the core M&A, feature, pricing, demo, and security routes are included in sitemap arrays and are not listed as redirect sources (T11). No sitemap edit needed.
- 2026-11-20: Added links to existing M&A content in `public/llms.txt` and `public/llms-full.txt` using neutral descriptions only (T12). No product claims added.
- 2026-11-20: Production validation is blocked by repository/build issues outside the edited pages: the default Turbopack build failed loading a Lightning CSS helper; the webpack build compiled the application but TypeScript failed on missing `astro:content` in the nested repository. No dependency or nested-repository changes made.
