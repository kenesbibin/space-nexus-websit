export type MilestoneStatus = "Not Started" | "In Progress" | "Completed" | "Delayed";

export type Milestone = {
  id: string;
  name: string;
  description: string;
  team: string;
  dependencies: string[];
  startDate: string;
  endDate: string;
  status: MilestoneStatus;
  custom: boolean;
  startPercent: number;
  endPercent: number;
};

export type MilestoneTemplate = {
  name: string;
  description: string;
  team: string;
  dependencies: string[];
  startPercent: number;
  endPercent: number;
};

export const statuses: MilestoneStatus[] = ["Not Started", "In Progress", "Completed", "Delayed"];

export const teamOptions = [
  "Deal Team",
  "Corporate Development",
  "Finance",
  "Legal",
  "HR",
  "Operations",
  "Executive Team",
  "Integration Team",
  "External Advisors",
];

export const dealStages = [
  { id: "planning", name: "Initial Planning", completed: 1 },
  { id: "setup", name: "NDA & VDR Setup", completed: 3 },
  { id: "diligence", name: "Due Diligence", completed: 5 },
  { id: "negotiation", name: "Negotiation", completed: 8 },
  { id: "signing", name: "Signing & Closing", completed: 10 },
  { id: "post-closing", name: "Post-Closing", completed: 12 },
];

export const milestoneTemplates: MilestoneTemplate[] = [
  {
    name: "Initial Planning and Preparation",
    description: "Define deal objectives, assemble the deal team, agree the target profile and prepare the initial transaction plan.",
    team: "Corporate Development",
    dependencies: [],
    startPercent: 0,
    endPercent: 8,
  },
  {
    name: "NDA Signing",
    description: "Negotiate and execute the non-disclosure agreement with the counterparty before sharing confidential information.",
    team: "Legal",
    dependencies: ["Initial Planning and Preparation"],
    startPercent: 8,
    endPercent: 15,
  },
  {
    name: "VDR Setup and Document Sharing",
    description: "Configure the virtual data room, set permissions, upload the document index and grant access to the deal parties.",
    team: "Legal",
    dependencies: ["NDA Signing"],
    startPercent: 15,
    endPercent: 25,
  },
  {
    name: "Initial Due Diligence",
    description: "Run the first-pass review of corporate, commercial and financial information and prepare the diligence question list.",
    team: "Deal Team",
    dependencies: ["VDR Setup and Document Sharing"],
    startPercent: 25,
    endPercent: 40,
  },
  {
    name: "Financial Due Diligence",
    description: "Analyse historical financials, quality of earnings, working capital, debt and tax position of the target.",
    team: "Finance",
    dependencies: ["Initial Due Diligence"],
    startPercent: 35,
    endPercent: 55,
  },
  {
    name: "Legal Due Diligence",
    description: "Review corporate structure, material contracts, litigation, intellectual property and regulatory compliance.",
    team: "Legal",
    dependencies: ["Initial Due Diligence"],
    startPercent: 40,
    endPercent: 62,
  },
  {
    name: "HR and Operational Due Diligence",
    description: "Assess employment arrangements, benefits, organisation structure, operational capacity and integration risks.",
    team: "HR",
    dependencies: ["Initial Due Diligence"],
    startPercent: 45,
    endPercent: 65,
  },
  {
    name: "Valuation and Negotiation",
    description: "Finalise the valuation model, agree the headline price, earn-out structure and key commercial terms.",
    team: "Finance",
    dependencies: ["Financial Due Diligence", "Legal Due Diligence"],
    startPercent: 62,
    endPercent: 78,
  },
  {
    name: "Purchase Agreement Preparation",
    description: "Draft and negotiate the purchase agreement, disclosure schedules, warranties and indemnities.",
    team: "Legal",
    dependencies: ["Valuation and Negotiation"],
    startPercent: 75,
    endPercent: 88,
  },
  {
    name: "Final Approvals and Signing",
    description: "Obtain board and regulatory approvals, complete final checks and execute the transaction documents.",
    team: "Executive Team",
    dependencies: ["Purchase Agreement Preparation"],
    startPercent: 86,
    endPercent: 94,
  },
  {
    name: "Deal Closing",
    description: "Satisfy closing conditions, release funds, transfer ownership and complete the closing checklist.",
    team: "Finance",
    dependencies: ["Final Approvals and Signing"],
    startPercent: 94,
    endPercent: 97,
  },
  {
    name: "Post-Closing Activities",
    description: "Complete purchase price adjustments, integration handover, document archiving and post-closing covenants.",
    team: "Integration Team",
    dependencies: ["Deal Closing"],
    startPercent: 97,
    endPercent: 100,
  },
];

export function toUtcDate(value: string): number {
  const [year, month, day] = value.split("-").map(Number);
  return Date.UTC(year, (month || 1) - 1, day || 1);
}

export function formatDate(utc: number): string {
  return new Date(utc).toISOString().slice(0, 10);
}

export function isValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const time = toUtcDate(value);
  return Number.isFinite(time) && formatDate(time) === value;
}

export function daysBetween(start: string, end: string): number {
  return Math.round((toUtcDate(end) - toUtcDate(start)) / 86400000);
}

export function addDays(start: string, days: number): string {
  return formatDate(toUtcDate(start) + days * 86400000);
}

export function dateForPercent(start: string, end: string, percent: number): string {
  const totalDays = Math.max(daysBetween(start, end), 0);
  return addDays(start, Math.round((totalDays * percent) / 100));
}

export function percentForDate(start: string, end: string, date: string): number {
  const totalDays = daysBetween(start, end);
  if (totalDays <= 0) return 0;
  const offset = daysBetween(start, date);
  return Math.min(100, Math.max(0, Math.round((offset / totalDays) * 100)));
}

export function createMilestones(
  dealStart: string,
  dealEnd: string,
  completedCount: number
): Milestone[] {
  return milestoneTemplates.map((template, index) => {
    const startDate = dateForPercent(dealStart, dealEnd, template.startPercent);
    let endDate = dateForPercent(dealStart, dealEnd, template.endPercent);
    if (daysBetween(startDate, endDate) < 0) endDate = startDate;
    const status: MilestoneStatus =
      index < completedCount ? "Completed" : index === completedCount ? "In Progress" : "Not Started";
    return {
      id: `milestone-${index + 1}`,
      name: template.name,
      description: template.description,
      team: template.team,
      dependencies: [...template.dependencies],
      startDate,
      endDate,
      status,
      custom: false,
      startPercent: template.startPercent,
      endPercent: template.endPercent,
    };
  });
}

export function recalculateDates(milestones: Milestone[], dealStart: string, dealEnd: string): Milestone[] {
  return milestones.map((milestone) => {
    const startDate = dateForPercent(dealStart, dealEnd, milestone.startPercent);
    let endDate = dateForPercent(dealStart, dealEnd, milestone.endPercent);
    if (daysBetween(startDate, endDate) < 0) endDate = startDate;
    return { ...milestone, startDate, endDate };
  });
}

export function statusColorClasses(status: MilestoneStatus): { badge: string; bar: string; dot: string } {
  switch (status) {
    case "Completed":
      return {
        badge: "bg-green-100 text-green-700 border-green-200",
        bar: "bg-green-500",
        dot: "bg-green-500",
      };
    case "In Progress":
      return {
        badge: "bg-blue-100 text-blue-700 border-blue-200",
        bar: "bg-[#2563eb]",
        dot: "bg-[#2563eb]",
      };
    case "Delayed":
      return {
        badge: "bg-red-100 text-red-700 border-red-200",
        bar: "bg-red-500",
        dot: "bg-red-500",
      };
    default:
      return {
        badge: "bg-gray-100 text-gray-600 border-gray-200",
        bar: "bg-gray-400",
        dot: "bg-gray-400",
      };
  }
}

export function formatDisplayDate(value: string): string {
  if (!isValidDate(value)) return value;
  return new Date(toUtcDate(value)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
