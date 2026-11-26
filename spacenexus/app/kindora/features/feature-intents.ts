export type FeatureUseCase = {
  title: string;
  organization: string;
  challenge: string;
  workflow: string[];
  outcome: string;
};

export type FeatureIntent = {
  intent: string;
  problem: string;
  solution: string;
  benefits: string[];
  useCase?: FeatureUseCase;
};

export const featureIntents: Record<string, FeatureIntent> = {
  "campaign-management": {
    intent: "nonprofit campaign management software",
    problem: "Fundraising campaigns often span spreadsheets, disconnected payment tools, email lists, and manual reports, making it difficult to see progress or understand which activities create donations.",
    solution: "Kindora connects campaign goals, donors, donations, communications, and outcomes in one campaign workspace, giving teams a clear view from planning through attribution.",
    benefits: ["Track campaign goals and progress in real time", "Attribute gifts and engagement to each campaign", "Coordinate outreach and follow-up from one system", "Produce campaign reports for boards and funders"],
  },
  "client-management": {
    intent: "nonprofit client and program management software",
    problem: "Community organizations lose time when client intake, service enrollment, case notes, capacity, and outcomes live in separate systems that cannot provide a reliable program-wide view.",
    solution: "Kindora brings client records, service catalogs, enrollments, appointments, and outcome tracking into a single nonprofit program workflow.",
    benefits: ["Create consistent client intake records", "Track enrollments and service delivery", "Monitor capacity and program performance", "Report outcomes with auditable source data"],
    useCase: {
      title: "Coordinate housing-support intake and referral services",
      organization: "A housing nonprofit serving families referred by schools and local agencies",
      challenge: "Intake, eligibility follow-up, service enrollment, and completed referrals are recorded differently by caseworkers, making it difficult to confirm capacity or demonstrate outcomes.",
      workflow: ["Create a consistent client intake record with contact, referral source, household need, and consent information.", "Identify an appropriate housing-support program and check open capacity before enrollment.", "Record the assigned caseworker, planned services, appointment status, and required next action.", "Update participation and completion status as services are delivered, then summarize outcomes for program reporting."],
      outcome: "Caseworkers can see the client's current status and next step while Program leads can distinguish scheduled, active, completed, and unavailable services.",
    },
  },
  communications: {
    intent: "nonprofit communication management software",
    problem: "Important donor, volunteer, and client conversations become fragmented across personal inboxes and tools, creating duplicate outreach and missing context when staff change.",
    solution: "Kindora organizes reusable templates, direct email, and stakeholder communication history alongside the constituent records they belong to.",
    benefits: ["Keep every interaction attached to a constituent", "Reuse approved, mission-aligned messages", "Coordinate team outreach without duplicate sends", "Improve follow-through and relationship context"],
  },
  "dashboard-analytics": {
    intent: "nonprofit dashboard and analytics software",
    problem: "Nonprofit leaders cannot act quickly when financial, fundraising, program, and client data is scattered across exports or requires staff to assemble reports manually.",
    solution: "Kindora combines operational dashboards and role-ready analytics so leaders can monitor the indicators that matter across the organization.",
    benefits: ["View mission and financial indicators together", "Spot trends without rebuilding reports", "Give board and leadership audiences clear summaries", "Make faster decisions with consistent data"],
  },
  "donor-management": {
    intent: "nonprofit donor management software",
    problem: "When donor profiles, gift history, communication records, and receipts live in separate tools, staff miss stewardship opportunities and risk inconsistent records.",
    solution: "Kindora connects complete donor profiles, giving history, recurring gifts, acknowledgments, and communication in one donor relationship workspace.",
    benefits: ["Maintain one trusted donor record", "Identify recurring, lapsed, and major-gift prospects", "Personalize outreach with complete giving context", "Track acknowledgments and receipt status consistently"],
    useCase: {
      title: "Re-engage lapsed recurring donors before a year-end appeal",
      organization: "A regional food bank with individual, corporate, and recurring donors",
      challenge: "Development staff notice that several monthly donors stopped giving, but the lapsed-donor list, gift history, and previous outreach notes are maintained by different team members.",
      workflow: ["Review the donor profile and filter for recurring gifts with an interrupted payment history.", "Check prior communications and identify the last completed appeal or stewardship message.", "Record a follow-up task, send a personalized acknowledgment or renewal request, and attach the resulting interaction to the donor record.", "Group responsive donors for ongoing stewardship and retain the complete next-step history."],
      outcome: "The development team begins every outreach conversation with the same gift, communication, and renewal context instead of relying on a shared spreadsheet or personal inbox.",
    },
  },
  "expense-management": {
    intent: "nonprofit expense management software",
    problem: "Manual approvals and disconnected receipts make it difficult for nonprofits to enforce spending policies, allocate costs, and prepare accurate financial reports.",
    solution: "Kindora records expenses, bills, approvals, receipts, and cost allocations alongside nonprofit budgets and financial reporting workflows.",
    benefits: ["Control and document organizational spending", "Allocate expenses to programs and grants", "Reduce missing receipts and approval delays", "Create a cleaner audit-ready trail"],
    useCase: {
      title: "Allocate shared program and grant expenses without a manual month-end rework",
      organization: "A nonprofit education provider sharing rent, training, and administrative costs across two grants and a direct-service program",
      challenge: "Staff pay for legitimate expenses with cards or reimbursements, but shared-cost allocations are added later in spreadsheets and receipt evidence is easy to lose.",
      workflow: ["Record the expense and attach the invoice or receipt before submitting it for approval.", "Choose the applicable program, grant, cost category, and allocation basis while the expense is still fresh.", "Review and approve the expense according to the organization's policy and available budget.", "Export the documented allocation into the monthly financial and grant reporting process."],
      outcome: "Shared costs have a visible basis and supporting receipt, reducing month-end spreadsheet reconstruction and making the final allocation easier to audit.",
    },
  },
  "file-management": {
    intent: "nonprofit document management software",
    problem: "Mission-critical proposals, grant documents, reports, and client files become difficult to secure or find when teams rely on email attachments and unstructured shared drives.",
    solution: "Kindora keeps important documents connected to the grants, organizations, programs, or workflows they support with controlled access and structured organization.",
    benefits: ["Find important records faster", "Protect access to sensitive documents", "Keep files tied to the relevant mission activity", "Reduce version confusion and duplicate uploads"],
  },
  "financial-management": {
    intent: "nonprofit financial management software",
    problem: "Generic accounting structures do not always reflect restricted funds, grant budgets, program costs, or nonprofit reporting requirements, forcing teams into manual workarounds.",
    solution: "Kindora aligns budgets, chart-of-account categories, cost allocation, and financial workflows for the way nonprofit organizations operate.",
    benefits: ["Organize funds by nonprofit purpose", "Link spending to programs and grants", "Plan budgets with operational context", "Produce clearer board-ready financial views"],
    useCase: {
      title: "Prepare an operating and restricted-fund budget for a new program year",
      organization: "A youth-services nonprofit with staff payroll, a restricted grant, and three program areas",
      challenge: "Program leads submit spending requests in separate spreadsheets, while Finance must determine whether the proposed costs fit unrestricted revenue, the operating budget, or a grant restriction.",
      workflow: ["Build a chart-of-account structure for payroll, program supplies, travel, restricted grants, and overhead.", "Create a program budget and enter approved amounts by category and accounting period.", "Review actual spending against budgeted amounts and route changes or additions for approval.", "Produce a board-ready financial view that separates operating activity from restricted-fund activity."],
      outcome: "Finance and Program leads use the same budget categories and operating assumptions, making variance review and funder reporting easier to explain.",
    },
  },
  financials: {
    intent: "nonprofit financials and accounting software",
    problem: "Donations, grants, vendors, expenses, budgets, and reports are often reconciled across separate products, increasing errors and slowing month-end work.",
    solution: "Kindora brings nonprofit financial records into a connected workspace that supports donors, grants, expenses, budgets, and financial reporting.",
    benefits: ["Connect revenue and spending to their source", "Reduce manual reconciliation", "Improve visibility across restricted and unrestricted funds", "Support consistent reporting to funders and boards"],
  },
  "grant-management": {
    intent: "nonprofit grant management software",
    problem: "Grant opportunities, applications, award conditions, receipts, deadlines, and reports frequently live across inboxes and spreadsheets, creating missed requirements and weak forecasts.",
    solution: "Kindora manages the complete grant lifecycle, from prospect and application through award, receipts, reporting, and close-out.",
    benefits: ["Track every grant stage and deadline", "Forecast award and received funding", "Connect grant costs and documentation", "Prepare compliance-ready reporting from one record"],
    useCase: {
      title: "Run a municipal grant from application through close-out",
      organization: "A community services nonprofit operating an employment program",
      challenge: "The grant manager must coordinate an application, award conditions, receipts, program expenses, and a quarterly funder report while Program and Finance teams use separate records.",
      workflow: ["Create the grant prospect, assigned owner, expected decision date, and required application documents.", "When awarded, record the grant award, reporting calendar, budget, and eligible cost categories.", "Associate approved expenses and program receipts with the grant and set status reminders for each deliverable.", "Prepare a progress and financial review from the same grant record before the quarterly reporting deadline."],
      outcome: "Each requirement has an owner and source record, allowing the grant manager to verify deadlines, costs, and reporting status without reconstructing the grant from email threads.",
    },
  },
  "people-management": {
    intent: "nonprofit people and volunteer management software",
    problem: "Volunteer availability, staff assignments, engagement, hours, and communications are often recorded in different places, leaving coordinators without reliable capacity information.",
    solution: "Kindora centralizes people records and activities so nonprofit teams can coordinate staff, volunteers, and engagement in one connected system.",
    benefits: ["Coordinate volunteers and staff from shared records", "Track participation and hours consistently", "Improve scheduling and capacity planning", "Keep communication history with each person"],
  },
  reporting: {
    intent: "nonprofit reporting and analytics software",
    problem: "Leadership, boards, and funders expect accurate impact and financial reports, yet staff often spend days rebuilding data from multiple systems and formats.",
    solution: "Kindora turns connected nonprofit financial and program data into consistent dashboards and report-ready exports for stakeholders.",
    benefits: ["Create board and funder reporting faster", "Combine financial and program context", "Reduce spreadsheet consolidation work", "Trace reported results to operational records"],
  },
  settings: {
    intent: "nonprofit organization management and settings software",
    problem: "Permissions, organization preferences, integrations, exports, and account controls can become inconsistent when they are configured by separate tools or undocumented processes.",
    solution: "Kindora provides an organization-level administration workspace for controlled configuration, users, roles, preferences, and data portability.",
    benefits: ["Standardize organization-wide configuration", "Control access through assigned roles", "Reduce admin handoff and setup risk", "Maintain portable, exportable organization data"],
  },
  "user-management": {
    intent: "nonprofit user access and role management software",
    problem: "Growing nonprofits need to add staff, protect sensitive records, and remove access quickly, but scattered accounts and informal permissions increase operational and security risk.",
    solution: "Kindora manages nonprofit team accounts and role-based access from the organization workspace so the right people have appropriate permissions.",
    benefits: ["Apply least-privilege access consistently", "Onboard and deactivate users in fewer steps", "Protect donor and client information", "Maintain a clearer team access trail"],
  },
};
