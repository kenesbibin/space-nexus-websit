const answerBlocks = {
  home: {
    topic: "nonprofit management software",
    definition: "Kindora is an all-in-one nonprofit management platform that brings donor and donation records, grant tracking, client and program management, volunteer coordination, and financial workflows together.",
    bestFor: "Small and mid-sized nonprofits that want these operational records in one system, including community, social-service, and youth-serving organizations.",
    workflow: "Teams keep donor and gift records, track grant milestones, organize client enrollment and services, coordinate volunteers, and review financial and program reports.",
    limitations: "Plan scope varies. Starter includes core donor and client tools; Professional adds operational modules; Enterprise includes custom integrations and migration assistance. Confirm current limits before choosing.",
    facts: [{ fact: "Published plans", detail: "Starter is free; Professional and Enterprise are custom-priced." }, { fact: "Team limits", detail: "Starter: up to 5; Professional: up to 25; Enterprise: unlimited." }, { fact: "Product scope", detail: "Donors, grants, clients and programs, volunteers, and nonprofit finances." }],
    sourceNote: "Plan limits and prices are from Kindora Pricing; product scope summarizes listed Kindora modules. Reviewed 26 Nov 2026.",
  },
  donor: {
    topic: "nonprofit donor CRM",
    definition: "A nonprofit donor CRM organizes supporter profiles, giving history, communications, and campaign activity so a team can manage donor relationships from one record system.",
    bestFor: "Nonprofit development teams that need a shared view of donor contacts, gifts, interactions, and fundraising campaigns.",
    workflow: "Staff update donor profiles and gifts, log calls or messages, group supporters for outreach, and review campaign and donor reports.",
    limitations: "A CRM organizes records and follow-ups; it does not replace a fundraising strategy or donor consent practices. Check plan packaging before relying on campaign or communication features.",
    facts: [{ fact: "Donor record", detail: "Contact details, giving history, notes, and communication activity." }, { fact: "Fundraising work", detail: "Campaigns, donor segments, and gift tracking." }, { fact: "Plan fit", detail: "Kindora lists donor management in Starter; verify feature availability by plan." }],
    sourceNote: "Based on Kindora's donor CRM and donor management feature descriptions; plan packaging is listed on /kindora/pricing. Reviewed 26 Nov 2026.",
  },
  grant: {
    topic: "nonprofit grant management software",
    definition: "Grant management software helps nonprofits organize funder relationships, applications, awards, deadlines, budgets, and reporting in a shared workflow.",
    bestFor: "Nonprofits responsible for grant opportunities, awards, and funder reporting deadlines.",
    workflow: "Kindora describes a grant workflow from discovery and application through award, reporting, and closeout, with deadlines and budgets tracked alongside each grant.",
    limitations: "Software can organize grant work and records; it cannot determine a funder's eligibility rules or guarantee an award. Confirm reporting requirements with each funder.",
    facts: [{ fact: "Workflow scope", detail: "Discovery, application, award, reporting, and closeout." }, { fact: "Deadline scope", detail: "Application and reporting dates can be organized in a shared calendar." }, { fact: "Financial scope", detail: "Grant budgets, expenses, and remaining funds are tracked with grant records." }],
    sourceNote: "Workflow and feature scope are summarized from Kindora's grant management page and feature descriptions, reviewed 26 Nov 2026.",
  },
  case: {
    topic: "nonprofit case management software",
    definition: "Nonprofit case management software organizes client intake, eligibility and enrollment, service history, and outcomes for organizations that deliver direct services.",
    bestFor: "Social-service, housing, youth, and community organizations that coordinate client services across programs.",
    workflow: "Teams record client intake, enroll people in services, log participation, and review progress and program outcomes for reporting.",
    limitations: "A system can organize case records and reporting, but each organization must define appropriate access, consent, retention, and professional service practices.",
    facts: [{ fact: "Client record", detail: "Intake details, service needs, eligibility, and status." }, { fact: "Program workflow", detail: "Service catalog, enrollment, capacity, and participation." }, { fact: "Outcome reporting", detail: "Program activity and participant outcomes for review." }],
    sourceNote: "Workflow scope summarizes Kindora's case and program management descriptions, reviewed 26 Nov 2026; configure it to organizational policies.",
  },
  volunteer: {
    topic: "nonprofit volunteer management software",
    definition: "Volunteer management software keeps volunteer profiles, skills, availability, schedules, participation hours, and program assignments organized.",
    bestFor: "Nonprofits coordinating volunteers across recurring shifts, events, or multiple programs.",
    workflow: "Teams maintain volunteer profiles, match availability and skills to opportunities, record participation hours, and review activity by program.",
    limitations: "Volunteer coordination tools do not replace an organization's screening, safety, or supervision requirements. Check plan packaging before relying on a specific portal or scheduling feature.",
    facts: [{ fact: "Volunteer profile", detail: "Contact details, skills, availability, and participation history." }, { fact: "Coordination", detail: "Opportunities, schedules, hours, and program assignments." }, { fact: "Plan scope", detail: "Kindora lists volunteer management among Professional plan modules." }],
    sourceNote: "Feature scope is from Kindora's volunteer management page; plan availability is from /kindora/pricing. Reviewed 26 Nov 2026.",
  },
  financial: {
    topic: "nonprofit financial management software",
    definition: "Nonprofit financial management software helps teams organize budgets, expenses, funding sources, cost allocation, and financial reports by program or grant.",
    bestFor: "Nonprofit finance teams that review spending against budgets and prepare financial information for managers, boards, or funders.",
    workflow: "Teams set budgets, record and categorize expenses, allocate shared costs across programs or grants, and produce financial reports for review.",
    limitations: "Organizations should confirm account setup, accounting controls, and report requirements with their finance lead or accountant; software does not replace accounting judgment or an audit.",
    facts: [{ fact: "Financial records", detail: "Budgets, expenses, accounts, funding sources, and allocations." }, { fact: "Reporting scope", detail: "Budget-versus-actual and program or grant financial reporting." }, { fact: "Plan scope", detail: "Kindora lists nonprofit accounting and cost allocation in Professional and Enterprise." }],
    sourceNote: "Capabilities are summarized from Kindora's financial management and pricing pages, reviewed 26 Nov 2026; this is not an independent accounting review.",
  },
  pricing: {
    topic: "Kindora pricing",
    definition: "Kindora pricing has three tiers: a free Starter plan, a custom-priced Professional plan, and a custom-priced Enterprise plan.",
    bestFor: "Nonprofits comparing team size and required modules before choosing a plan.",
    workflow: "Compare included users and modules, confirm required exports or integrations, then start Starter or contact Kindora about a paid plan.",
    limitations: "Professional and Enterprise prices are custom, so the page does not give a fixed monthly amount for those tiers. Confirm the quote, limits, and included services before purchase.",
    facts: [{ fact: "Starter", detail: "Free, with up to 5 team members." }, { fact: "Professional", detail: "Custom-priced, with up to 25 team members." }, { fact: "Enterprise", detail: "Custom-priced, with unlimited team members and listed migration assistance and custom integrations." }],
    sourceNote: "Plan and seat details are from Kindora's published pricing page, reviewed 26 Nov 2026; paid prices are quote-based.",
  },
  faq: {
    topic: "Kindora's AI answer system",
    definition: "Kindora's AI answer system uses an organization's records in a knowledge graph to answer operational questions and show the records used as sources.",
    bestFor: "Kindora users who ask questions across donor, grant, program, volunteer, or finance records and need to inspect the evidence behind an answer.",
    workflow: "A user asks an operational question; Kindora reasons across connected workspace records and presents an answer with source attribution that can be opened for review.",
    limitations: "Answers depend on records and permissions in the workspace. Review underlying records and use organizational judgment before acting on an answer.",
    facts: [{ fact: "Record scope", detail: "Donors, grants, programs, volunteers, and finances described on the page." }, { fact: "Answer evidence", detail: "The page describes links from answers to underlying workspace records." }, { fact: "Review step", detail: "Users can inspect source records before relying on an answer." }],
    sourceNote: "This summary reflects the FAQ page's description of Kindora AI and VeritasGraph, reviewed 26 Nov 2026; it is not an independent accuracy benchmark.",
  },
  about: {
    topic: "Kindora",
    definition: "Kindora is a nonprofit management platform for donor and grant tracking, program delivery, financial workflows, volunteer coordination, and reporting.",
    bestFor: "Small and mid-sized nonprofits, NGOs, charities, and community organizations seeking software organized around nonprofit operations.",
    workflow: "Teams use shared modules to manage supporters, grants, clients and programs, finances, and volunteers, then review operational and impact reports.",
    limitations: "Kindora's About page describes the product and its intended audience; evaluate current plan limits, security details, integrations, and support terms before procurement.",
    facts: [{ fact: "Published module count", detail: "Kindora's About page states 12+ integrated modules; this is a company-published figure." }, { fact: "Product scope", detail: "Donors, grants, programs, finances, volunteers, and reporting." }, { fact: "Pricing", detail: "A free Starter tier and custom-priced Professional and Enterprise tiers are listed on /kindora/pricing." }],
    sourceNote: "Product and module details are company-published on Kindora's About and Pricing pages, reviewed 26 Nov 2026; not independently audited.",
  },
  comparison: {
    topic: "nonprofit software comparison",
    definition: "A nonprofit software comparison helps buyers compare the workflows and capabilities each vendor describes before shortlisting products.",
    bestFor: "Nonprofit teams deciding whether they need donor-only tools, case management, or a broader platform spanning donors, grants, programs, and finance.",
    workflow: "Define required workflows, compare public feature descriptions, then verify plan packaging, price, implementation, and fit with each provider.",
    limitations: "This page is a feature-scope guide, not an independent product test. Its comparison notes say sources were reviewed October 29, 2026; a dash or question mark does not prove a product lacks a feature.",
    facts: [{ fact: "Comparison scope", detail: "12 capabilities compared across six options, as stated on this page." }, { fact: "Method", detail: "A check means a reviewed public source describes the capability; partial and unconfirmed entries are shown separately." }, { fact: "Source date", detail: "The comparison page states sources were reviewed October 29, 2026." }],
    sourceNote: "Comparison scope and methodology are stated on the page; vendor source links and the October 29, 2026 review date appear with the comparison table.",
  },
} as const;

type AnswerReadyBlockProps = { page: keyof typeof answerBlocks };

export default function AnswerReadyBlock({ page }: AnswerReadyBlockProps) {
  const { topic, definition, bestFor, workflow, limitations, facts, sourceNote } = answerBlocks[page];

  return (
    <section className="border-y border-gray-100 bg-slate-50 py-12 sm:py-14" aria-label={`${topic} quick answers`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">What is {topic}?</h2>
          <p className="mt-3 text-base leading-7 text-gray-700">{definition}</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article>
            <h3 className="text-base font-semibold text-gray-900">Who is it best for?</h3>
            <p className="mt-2 text-sm leading-6 text-gray-700">{bestFor}</p>
          </article>
          <article>
            <h3 className="text-base font-semibold text-gray-900">How does it work?</h3>
            <p className="mt-2 text-sm leading-6 text-gray-700">{workflow}</p>
          </article>
          <article>
            <h3 className="text-base font-semibold text-gray-900">What should teams consider?</h3>
            <p className="mt-2 text-sm leading-6 text-gray-700">{limitations}</p>
          </article>
        </div>
        <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white">
          <table className="w-full text-left text-sm">
            <caption className="px-4 py-3 text-left font-semibold text-gray-900">Quick scope and product facts</caption>
            <tbody>
              {facts.map((item) => (
                <tr key={item.fact} className="border-t border-gray-100">
                  <th scope="row" className="w-1/3 px-4 py-3 align-top font-medium text-gray-700">{item.fact}</th>
                  <td className="px-4 py-3 leading-6 text-gray-600">{item.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs leading-5 text-gray-500">Basis: {sourceNote}</p>
      </div>
    </section>
  );
}
