# Kindora Competitor AI Citation Tracking

**Last checked:** 2026-10-29  
**Status:** In progress — platform access check and tracking matrix created; no AI citation observations have been captured yet.

## Scope and method

Track cited sources for Bloomerang, Bonterra, Salesforce Nonprofit Cloud, and Instrumentl on ChatGPT, Perplexity, Google AI Overviews, and Gemini. Run the same competitor-specific prompt on all four platforms, record the date and exact cited URLs, and distinguish a source citation from a competitor merely being named in an answer.

Use these prompts for the initial comparable snapshot:

- **Bloomerang:** "For a small or mid-sized nonprofit evaluating Bloomerang for donor management, what are its strengths and limitations? Cite the sources supporting each claim."
- **Bonterra:** "For a small or mid-sized nonprofit evaluating Bonterra software for donor management and nonprofit operations, what are its strengths and limitations? Cite the sources supporting each claim."
- **Salesforce Nonprofit Cloud:** "For a small or mid-sized nonprofit evaluating Salesforce Nonprofit Cloud, what are its strengths and limitations for donor management and nonprofit operations? Cite the sources supporting each claim."
- **Instrumentl:** "For a small or mid-sized nonprofit evaluating Instrumentl for grant discovery and grant tracking, what are its strengths and limitations? Cite the sources supporting each claim."

For each run, record the complete response, whether the competitor was mentioned, its recommendation position if applicable, each source URL and the claim it supports, and whether Kindora appeared. Keep query wording, locale, and logged-in/search mode consistent on subsequent checks.

## Initial platform access check

Checked on 2026-10-29 from the available browser environment. This was an access check only; no competitor prompt was submitted and no AI-generated answer or citation was observed.

| Platform | Access result | Notes |
|---|---|---|
| Google AI Overviews | Not available | The Google search URL failed to load (`ERR_FAILED`); no search results or AI Overview could be inspected. |
| Perplexity | Not available | The public search URL failed to load (`ERR_FAILED`); no answer or citations could be inspected. |
| ChatGPT | Not available | The ChatGPT homepage failed to load (`ERR_FAILED`); no prompt could be submitted. |
| Gemini | Sign-in required | The Gemini page loaded to a sign-in screen; no prompt could be submitted without an authenticated session. |

## Citation observation matrix

**Not run** means the platform prompt could not be submitted. It does not mean the competitor was absent or uncited.

| Checked (UTC date) | Platform | Competitor | Prompt | Mention / rank | Cited URLs and claim context | Kindora mentioned? | Observation |
|---|---|---|---|---|---|---|---|
| — | Google AI Overviews | Bloomerang | Bloomerang prompt above | — | — | — | Not run — Google search unavailable |
| — | Google AI Overviews | Bonterra | Bonterra prompt above | — | — | — | Not run — Google search unavailable |
| — | Google AI Overviews | Salesforce Nonprofit Cloud | Salesforce prompt above | — | — | — | Not run — Google search unavailable |
| — | Google AI Overviews | Instrumentl | Instrumentl prompt above | — | — | — | Not run — Google search unavailable |
| — | Perplexity | Bloomerang | Bloomerang prompt above | — | — | — | Not run — platform unavailable |
| — | Perplexity | Bonterra | Bonterra prompt above | — | — | — | Not run — platform unavailable |
| — | Perplexity | Salesforce Nonprofit Cloud | Salesforce prompt above | — | — | — | Not run — platform unavailable |
| — | Perplexity | Instrumentl | Instrumentl prompt above | — | — | — | Not run — platform unavailable |
| — | ChatGPT | Bloomerang | Bloomerang prompt above | — | — | — | Not run — platform unavailable |
| — | ChatGPT | Bonterra | Bonterra prompt above | — | — | — | Not run — platform unavailable |
| — | ChatGPT | Salesforce Nonprofit Cloud | Salesforce prompt above | — | — | — | Not run — platform unavailable |
| — | ChatGPT | Instrumentl | Instrumentl prompt above | — | — | — | Not run — platform unavailable |
| — | Gemini | Bloomerang | Bloomerang prompt above | — | — | — | Not run — sign-in required |
| — | Gemini | Bonterra | Bonterra prompt above | — | — | — | Not run — sign-in required |
| — | Gemini | Salesforce Nonprofit Cloud | Salesforce prompt above | — | — | — | Not run — sign-in required |
| — | Gemini | Instrumentl | Instrumentl prompt above | — | — | — | Not run — sign-in required |

## Follow-up needed

Run the prompt matrix in authenticated, accessible sessions for each platform and replace the "Not run" entries with dated observations and exact cited URLs. Recheck weekly or monthly using the same wording and locale; record platform mode changes because they can change sources and answers. Do not infer AI citations from ordinary web search rankings or from a brand being mentioned without a linked source.
