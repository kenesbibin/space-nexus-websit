"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import type { Milestone, MilestoneStatus } from "./data";
import {
  createMilestones,
  daysBetween,
  dealStages,
  formatDisplayDate,
  isValidDate,
  percentForDate,
  recalculateDates,
  statusColorClasses,
  statuses,
  teamOptions,
} from "./data";

type DealType = "Buy-side" | "Sell-side";
type Filter = "All" | MilestoneStatus;

const inputClass =
  "w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent bg-white";
const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

function statusBadgeClass(status: MilestoneStatus): string {
  return statusColorClasses(status).badge;
}

export default function MADealTimelinePlanner() {
  const [step, setStep] = useState<"form" | "timeline">("form");

  const [dealName, setDealName] = useState("");
  const [dealType, setDealType] = useState<DealType>("Buy-side");
  const [startDate, setStartDate] = useState("");
  const [closingDate, setClosingDate] = useState("");
  const [industry, setIndustry] = useState("");
  const [dealSize, setDealSize] = useState("");
  const [stageId, setStageId] = useState(dealStages[0].id);

  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [timelineStart, setTimelineStart] = useState("");
  const [timelineEnd, setTimelineEnd] = useState("");
  const [error, setError] = useState("");
  const [timelineError, setTimelineError] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newTeam, setNewTeam] = useState(teamOptions[0]);
  const [newStart, setNewStart] = useState("");
  const [newEnd, setNewEnd] = useState("");
  const [newDependencies, setNewDependencies] = useState("");
  const [addError, setAddError] = useState("");

  const selectedStage = dealStages.find((stage) => stage.id === stageId) || dealStages[0];

  const stats = useMemo(() => {
    const total = milestones.length;
    const completed = milestones.filter((milestone) => milestone.status === "Completed").length;
    const inProgress = milestones.filter((milestone) => milestone.status === "In Progress").length;
    const delayed = milestones.filter((milestone) => milestone.status === "Delayed").length;
    const pending = milestones.filter((milestone) => milestone.status === "Not Started").length;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
    return { total, completed, inProgress, delayed, pending, percentage };
  }, [milestones]);

  const filteredMilestones = useMemo(() => {
    if (filter === "All") return milestones;
    return milestones.filter((milestone) => milestone.status === filter);
  }, [milestones, filter]);

  const dealLength = useMemo(() => {
    if (!timelineStart || !timelineEnd) return 0;
    return Math.max(daysBetween(timelineStart, timelineEnd), 0);
  }, [timelineStart, timelineEnd]);

  const generateTimeline = () => {
    setError("");
    if (!startDate || !closingDate) {
      setError("Enter both a planned start date and an expected closing date.");
      return;
    }
    if (!isValidDate(startDate) || !isValidDate(closingDate)) {
      setError("Please enter valid dates for the deal period.");
      return;
    }
    if (daysBetween(startDate, closingDate) <= 0) {
      setError("The expected closing date must be after the planned start date.");
      return;
    }
    setTimelineStart(startDate);
    setTimelineEnd(closingDate);
    setMilestones(createMilestones(startDate, closingDate, selectedStage.completed));
    setFilter("All");
    setShowAddForm(false);
    setStep("timeline");
  };

  const applyDealDates = (nextStart: string, nextEnd: string) => {
    setTimelineStart(nextStart);
    setTimelineEnd(nextEnd);
    if (!isValidDate(nextStart) || !isValidDate(nextEnd)) {
      setTimelineError("Please enter valid deal dates.");
      return;
    }
    if (daysBetween(nextStart, nextEnd) <= 0) {
      setTimelineError("The closing date must be after the start date.");
      return;
    }
    setTimelineError("");
    setMilestones((previous) => recalculateDates(previous, nextStart, nextEnd));
    setStartDate(nextStart);
    setClosingDate(nextEnd);
  };

  const updateStatus = (id: string, status: MilestoneStatus) => {
    setMilestones((previous) =>
      previous.map((milestone) => (milestone.id === id ? { ...milestone, status } : milestone))
    );
  };

  const updateTeam = (id: string, team: string) => {
    setMilestones((previous) =>
      previous.map((milestone) => (milestone.id === id ? { ...milestone, team } : milestone))
    );
  };

  const updateDate = (id: string, field: "startDate" | "endDate", value: string) => {
    const current = milestones.find((milestone) => milestone.id === id);
    if (!current) return;
    if (!isValidDate(value)) {
      setTimelineError("Milestone dates must be valid dates.");
      return;
    }
    if (value < timelineStart || value > timelineEnd) {
      setTimelineError("Milestone dates must stay within the selected deal period.");
      return;
    }
    const nextDates = { startDate: current.startDate, endDate: current.endDate, [field]: value };
    if (daysBetween(nextDates.startDate, nextDates.endDate) < 0) {
      setTimelineError("A milestone start date cannot be after its end date.");
      return;
    }
    setTimelineError("");
    setMilestones((previous) =>
      previous.map((milestone) =>
        milestone.id === id
          ? {
              ...milestone,
              ...nextDates,
              startPercent: percentForDate(timelineStart, timelineEnd, nextDates.startDate),
              endPercent: percentForDate(timelineStart, timelineEnd, nextDates.endDate),
            }
          : milestone
      )
    );
  };

  const addCustomMilestone = () => {
    setAddError("");
    if (!newName.trim()) {
      setAddError("Enter a milestone name.");
      return;
    }
    if (!newStart || !newEnd) {
      setAddError("Enter both a start date and an end date.");
      return;
    }
    if (!isValidDate(newStart) || !isValidDate(newEnd)) {
      setAddError("Please enter valid dates for the milestone.");
      return;
    }
    if (newStart < timelineStart || newEnd > timelineEnd) {
      setAddError("Milestone dates must stay within the selected deal period.");
      return;
    }
    if (daysBetween(newStart, newEnd) < 0) {
      setAddError("The milestone end date must be on or after its start date.");
      return;
    }
    const milestone: Milestone = {
      id: `custom-${Date.now()}`,
      name: newName.trim(),
      description: newDescription.trim() || "Custom milestone added by the deal team.",
      team: newTeam,
      dependencies: newDependencies
        .split(",")
        .map((dependency) => dependency.trim())
        .filter(Boolean),
      startDate: newStart,
      endDate: newEnd,
      status: "Not Started",
      custom: true,
      startPercent: percentForDate(timelineStart, timelineEnd, newStart),
      endPercent: percentForDate(timelineStart, timelineEnd, newEnd),
    };
    setMilestones((previous) => [...previous, milestone].sort((a, b) => a.startDate.localeCompare(b.startDate)));
    setNewName("");
    setNewDescription("");
    setNewTeam(teamOptions[0]);
    setNewStart("");
    setNewEnd("");
    setNewDependencies("");
    setShowAddForm(false);
  };

  const deleteMilestone = (id: string) => {
    setMilestones((previous) => previous.filter((milestone) => milestone.id !== id));
  };

  const resetTimeline = () => {
    setMilestones(createMilestones(timelineStart, timelineEnd, selectedStage.completed));
    setTimelineError("");
    setFilter("All");
    setShowAddForm(false);
  };

  const startOver = () => {
    setStep("form");
    setMilestones([]);
    setDealName("");
    setIndustry("");
    setDealSize("");
    setStartDate("");
    setClosingDate("");
    setStageId(dealStages[0].id);
    setTimelineStart("");
    setTimelineEnd("");
    setError("");
    setTimelineError("");
    setFilter("All");
    setShowAddForm(false);
  };

  const reportTitle = dealName.trim() || "M&A Deal Timeline";
  const safeFileName = reportTitle.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "ma-deal-timeline";

  const exportExcel = () => {
    const summary = [
      ["SpaceNexus M&A Deal Timeline Planner"],
      ["Deal name", reportTitle],
      ["Deal type", dealType],
      ["Industry", industry || "Not specified"],
      ["Deal size", dealSize || "Not specified"],
      ["Current stage", selectedStage.name],
      ["Planned start", timelineStart],
      ["Expected closing", timelineEnd],
      ["Report date", new Date().toLocaleString()],
      [],
      ["Total milestones", stats.total],
      ["Completed", stats.completed],
      ["In progress", stats.inProgress],
      ["Pending", stats.pending],
      ["Delayed", stats.delayed],
      ["Completion", `${stats.percentage}%`],
    ];

    const rows = [
      ["#", "Milestone", "Description", "Start date", "End date", "Status", "Responsible team", "Dependencies", "Custom"],
      ...milestones.map((milestone, index) => [
        index + 1,
        milestone.name,
        milestone.description,
        milestone.startDate,
        milestone.endDate,
        milestone.status,
        milestone.team,
        milestone.dependencies.join("; "),
        milestone.custom ? "Yes" : "No",
      ]),
    ];

    const workbook = XLSX.utils.book_new();
    const summarySheet = XLSX.utils.aoa_to_sheet(summary);
    const timelineSheet = XLSX.utils.aoa_to_sheet(rows);
    summarySheet["!cols"] = [{ wch: 24 }, { wch: 42 }];
    timelineSheet["!cols"] = [
      { wch: 5 },
      { wch: 40 },
      { wch: 60 },
      { wch: 13 },
      { wch: 13 },
      { wch: 14 },
      { wch: 22 },
      { wch: 40 },
      { wch: 9 },
    ];
    XLSX.utils.book_append_sheet(workbook, summarySheet, "Summary");
    XLSX.utils.book_append_sheet(workbook, timelineSheet, "Timeline");
    XLSX.writeFile(workbook, `SpaceNexus-${safeFileName}.xlsx`);
  };

  const exportPdf = () => {
    const pdf = new jsPDF({ unit: "pt", format: "a4" });
    const margin = 40;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const maxWidth = pageWidth - margin * 2;
    let y = margin;

    const ensureSpace = (needed: number) => {
      if (y + needed > pageHeight - margin) {
        pdf.addPage();
        y = margin;
      }
    };

    const write = (
      text: string,
      options: { size?: number; bold?: boolean; color?: [number, number, number]; gap?: number } = {}
    ) => {
      const { size = 10, bold = false, color = [31, 41, 55], gap = 4 } = options;
      pdf.setFont("helvetica", bold ? "bold" : "normal");
      pdf.setFontSize(size);
      pdf.setTextColor(color[0], color[1], color[2]);
      const lines = pdf.splitTextToSize(text, maxWidth);
      ensureSpace(lines.length * (size + 2) + gap);
      pdf.text(lines, margin, y);
      y += lines.length * (size + 2) + gap;
    };

    write("SpaceNexus M&A Deal Timeline", { size: 18, bold: true, color: [37, 99, 235], gap: 10 });
    write(`Deal name: ${reportTitle}`, { bold: true });
    write(`Deal type: ${dealType}   |   Current stage: ${selectedStage.name}`);
    if (industry) write(`Industry: ${industry}`);
    if (dealSize) write(`Deal size: ${dealSize}`);
    write(`Planned start: ${formatDisplayDate(timelineStart)}   |   Expected closing: ${formatDisplayDate(timelineEnd)}`);
    write(`Report date: ${new Date().toLocaleString()}`, { gap: 10 });
    write(`Completion: ${stats.percentage}%`, { size: 12, bold: true, color: [37, 99, 235] });
    write(
      `Total: ${stats.total}   |   Completed: ${stats.completed}   |   In progress: ${stats.inProgress}   |   Pending: ${stats.pending}   |   Delayed: ${stats.delayed}`,
      { gap: 12 }
    );

    write("Milestones", { size: 13, bold: true, color: [37, 99, 235], gap: 6 });
    milestones.forEach((milestone, index) => {
      write(`${index + 1}. ${milestone.name}`, { bold: true, size: 10, gap: 1 });
      write(
        `${formatDisplayDate(milestone.startDate)} to ${formatDisplayDate(milestone.endDate)}   |   ${milestone.status}   |   ${milestone.team}`,
        { size: 9, color: [75, 85, 99], gap: 1 }
      );
      write(milestone.description, { size: 9, color: [75, 85, 99], gap: 1 });
      if (milestone.dependencies.length > 0) {
        write(`Depends on: ${milestone.dependencies.join(", ")}`, { size: 9, color: [75, 85, 99], gap: 6 });
      } else {
        y += 5;
      }
    });

    write("Plan and manage your deal timeline with SpaceNexus Virtual Data Room.", {
      size: 9,
      color: [37, 99, 235],
    });
    write("https://spacenexus.net/data-room-due-diligence", { size: 9, color: [37, 99, 235] });

    pdf.save(`SpaceNexus-${safeFileName}.pdf`);
  };

  const filterOptions: Filter[] = ["All", ...statuses];

  return (
    <div>
      {step === "form" && (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Deal details</h2>
          <p className="text-sm text-gray-600 mb-6">Enter your deal dates and current stage to generate a suggested milestone timeline.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass} htmlFor="deal-name">Deal name <span className="text-gray-400 font-normal">(optional)</span></label>
              <input id="deal-name" type="text" value={dealName} onChange={(event) => setDealName(event.target.value)} placeholder="Project Falcon" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="deal-type">Deal type</label>
              <select id="deal-type" value={dealType} onChange={(event) => setDealType(event.target.value as DealType)} className={inputClass}>
                <option value="Buy-side">Buy-side</option>
                <option value="Sell-side">Sell-side</option>
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="start-date">Planned start date <span className="text-red-500">*</span></label>
              <input id="start-date" type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="closing-date">Expected closing date <span className="text-red-500">*</span></label>
              <input id="closing-date" type="date" value={closingDate} onChange={(event) => setClosingDate(event.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="industry">Industry <span className="text-gray-400 font-normal">(optional)</span></label>
              <input id="industry" type="text" value={industry} onChange={(event) => setIndustry(event.target.value)} placeholder="Software, Healthcare, Manufacturing…" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="deal-size">Deal size <span className="text-gray-400 font-normal">(optional)</span></label>
              <input id="deal-size" type="text" value={dealSize} onChange={(event) => setDealSize(event.target.value)} placeholder="$50M" className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="deal-stage">Current deal stage</label>
              <select id="deal-stage" value={stageId} onChange={(event) => setStageId(event.target.value)} className={inputClass}>
                {dealStages.map((stage) => (
                  <option key={stage.id} value={stage.id}>{stage.name}</option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-2">Milestones up to your current stage are pre-marked as completed.</p>
            </div>
          </div>

          {error && (
            <div className="mt-5 flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error}</span>
            </div>
          )}

          <button
            onClick={generateTimeline}
            className="mt-6 w-full sm:w-auto px-8 py-3.5 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-all shadow-lg inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            Generate timeline
          </button>
        </div>
      )}

      {step === "timeline" && (
        <>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Deal timeline</p>
                <h2 className="text-2xl font-bold text-gray-900">{reportTitle}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {dealType} · {selectedStage.name}
                  {industry ? ` · ${industry}` : ""}
                  {dealSize ? ` · ${dealSize}` : ""}
                </p>
              </div>
              <button onClick={startOver} className="text-sm font-medium text-gray-500 hover:text-red-500 transition-colors self-start">
                Start over
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass} htmlFor="timeline-start">Planned start date</label>
                <input
                  id="timeline-start"
                  type="date"
                  value={timelineStart}
                  onChange={(event) => applyDealDates(event.target.value, timelineEnd)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="timeline-end">Expected closing date</label>
                <input
                  id="timeline-end"
                  type="date"
                  value={timelineEnd}
                  onChange={(event) => applyDealDates(timelineStart, event.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
            {timelineError && <p className="text-sm text-red-600 mt-3">{timelineError}</p>}
            <p className="text-xs text-gray-500 mt-3">Changing the deal dates recalculates milestone dates automatically. Deal period: {dealLength} days.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Total</p>
              <p className="text-3xl font-black text-gray-900">{stats.total}</p>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-green-200 p-5">
              <p className="text-xs uppercase tracking-wider text-green-600 font-semibold mb-1">Completed</p>
              <p className="text-3xl font-black text-green-600">{stats.completed}</p>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-blue-200 p-5">
              <p className="text-xs uppercase tracking-wider text-[#2563eb] font-semibold mb-1">In progress</p>
              <p className="text-3xl font-black text-[#2563eb]">{stats.inProgress}</p>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Pending</p>
              <p className="text-3xl font-black text-gray-600">{stats.pending}</p>
            </div>
            <div className="bg-white rounded-xl shadow-md border border-red-200 p-5">
              <p className="text-xs uppercase tracking-wider text-red-600 font-semibold mb-1">Delayed</p>
              <p className="text-3xl font-black text-red-600">{stats.delayed}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
              <h2 className="text-xl font-bold text-gray-900">Overall completion</h2>
              <p className="text-4xl font-black text-[#2563eb]">{stats.percentage}%</p>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-8">
              <div className="h-full bg-gradient-to-r from-[#14b8a6] to-[#2563eb] transition-all duration-500" style={{ width: `${stats.percentage}%` }} />
            </div>

            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Visual timeline</h3>
            <div className="space-y-3">
              {milestones.map((milestone, index) => {
                const colors = statusColorClasses(milestone.status);
                const left = Math.min(100, Math.max(0, milestone.startPercent));
                const width = Math.max(2, Math.min(100 - left, milestone.endPercent - milestone.startPercent));
                return (
                  <div key={milestone.id} className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-2 sm:gap-4 items-center">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                      <p className="text-sm font-medium text-gray-800 truncate" title={milestone.name}>
                        {index + 1}. {milestone.name}
                      </p>
                    </div>
                    <div className="relative h-7 bg-gray-100 rounded-lg overflow-hidden">
                      <div
                        className={`absolute top-0 h-full rounded-lg ${colors.bar} opacity-90`}
                        style={{ left: `${left}%`, width: `${width}%` }}
                        title={`${formatDisplayDate(milestone.startDate)} – ${formatDisplayDate(milestone.endDate)}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-4 pt-3 border-t border-gray-100">
              <span>{formatDisplayDate(timelineStart)}</span>
              <span>{formatDisplayDate(timelineEnd)}</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <h2 className="text-xl font-bold text-gray-900">Milestones</h2>
              <button
                onClick={() => setShowAddForm((previous) => !previous)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors self-start sm:self-auto"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                Add custom milestone
              </button>
            </div>

            {showAddForm && (
              <div className="border border-blue-200 bg-blue-50/40 rounded-xl p-4 sm:p-5 mb-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="new-name">Milestone name <span className="text-red-500">*</span></label>
                    <input id="new-name" type="text" value={newName} onChange={(event) => setNewName(event.target.value)} placeholder="Regulatory approval" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="new-start">Start date <span className="text-red-500">*</span></label>
                    <input id="new-start" type="date" value={newStart} min={timelineStart} max={timelineEnd} onChange={(event) => setNewStart(event.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="new-end">End date <span className="text-red-500">*</span></label>
                    <input id="new-end" type="date" value={newEnd} min={timelineStart} max={timelineEnd} onChange={(event) => setNewEnd(event.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="new-team">Responsible team</label>
                    <select id="new-team" value={newTeam} onChange={(event) => setNewTeam(event.target.value)} className={inputClass}>
                      {teamOptions.map((team) => (
                        <option key={team} value={team}>{team}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="new-dependencies">Dependencies <span className="text-gray-400 font-normal">(comma separated)</span></label>
                    <input id="new-dependencies" type="text" value={newDependencies} onChange={(event) => setNewDependencies(event.target.value)} placeholder="Legal Due Diligence" className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="new-description">Description <span className="text-gray-400 font-normal">(optional)</span></label>
                    <input id="new-description" type="text" value={newDescription} onChange={(event) => setNewDescription(event.target.value)} placeholder="Short description of the milestone" className={inputClass} />
                  </div>
                </div>
                {addError && <p className="text-sm text-red-600 mt-3">{addError}</p>}
                <div className="flex gap-3 mt-4">
                  <button onClick={addCustomMilestone} className="px-5 py-2 bg-[#2563eb] text-white text-sm font-semibold rounded-xl hover:bg-[#1d4ed8] transition-colors">Add milestone</button>
                  <button onClick={() => { setShowAddForm(false); setAddError(""); }} className="px-5 py-2 bg-white text-gray-700 text-sm font-semibold rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors">Cancel</button>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              {filterOptions.map((option) => {
                const count =
                  option === "All" ? milestones.length : milestones.filter((milestone) => milestone.status === option).length;
                return (
                  <button
                    key={option}
                    onClick={() => setFilter(option)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                      filter === option
                        ? "bg-[#2563eb] text-white border-[#2563eb]"
                        : "bg-white text-gray-600 border-gray-200 hover:border-[#2563eb]/40"
                    }`}
                  >
                    {option} ({count})
                  </button>
                );
              })}
            </div>

            <div className="space-y-3">
              {filteredMilestones.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-6">No milestones match this filter.</p>
              )}
              {filteredMilestones.map((milestone) => {
                const index = milestones.findIndex((item) => item.id === milestone.id);
                return (
                  <div key={milestone.id} className="border border-gray-200 rounded-xl p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-gray-900">
                          {index + 1}. {milestone.name}
                          {milestone.custom && <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full">Custom</span>}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">{milestone.description}</p>
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border whitespace-nowrap self-start ${statusBadgeClass(milestone.status)}`}>
                        {milestone.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-gray-500 font-semibold mb-1" htmlFor={`status-${milestone.id}`}>Status</label>
                        <select
                          id={`status-${milestone.id}`}
                          value={milestone.status}
                          onChange={(event) => updateStatus(milestone.id, event.target.value as MilestoneStatus)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                        >
                          {statuses.map((status) => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-gray-500 font-semibold mb-1" htmlFor={`team-${milestone.id}`}>Responsible team</label>
                        <select
                          id={`team-${milestone.id}`}
                          value={milestone.team}
                          onChange={(event) => updateTeam(milestone.id, event.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                        >
                          {[...new Set([milestone.team, ...teamOptions])].map((team) => (
                            <option key={team} value={team}>{team}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-gray-500 font-semibold mb-1" htmlFor={`start-${milestone.id}`}>Start date</label>
                        <input
                          id={`start-${milestone.id}`}
                          type="date"
                          value={milestone.startDate}
                          min={timelineStart}
                          max={timelineEnd}
                          onChange={(event) => updateDate(milestone.id, "startDate", event.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-gray-500 font-semibold mb-1" htmlFor={`end-${milestone.id}`}>End date</label>
                        <input
                          id={`end-${milestone.id}`}
                          type="date"
                          value={milestone.endDate}
                          min={timelineStart}
                          max={timelineEnd}
                          onChange={(event) => updateDate(milestone.id, "endDate", event.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-3">
                      <p className="text-xs text-gray-500">
                        Dependencies: {milestone.dependencies.length > 0 ? milestone.dependencies.join(", ") : "None"}
                      </p>
                      {milestone.custom && (
                        <button onClick={() => deleteMilestone(milestone.id)} className="text-xs font-semibold text-red-600 hover:text-red-700 self-start sm:self-auto">
                          Delete milestone
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button onClick={exportPdf} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-all shadow-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download PDF
            </button>
            <button onClick={exportExcel} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all shadow-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download Excel
            </button>
            <button onClick={resetTimeline} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-full border border-gray-300 hover:border-gray-400 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              Reset timeline
            </button>
          </div>

          <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-2xl shadow-xl p-8 text-center text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Ready to run your deal in one secure workspace?</h3>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Plan and track every milestone, then manage your due diligence documents securely with SpaceNexus Virtual Data Room.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/data-room-due-diligence" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2563eb] font-semibold rounded-full hover:bg-blue-50 transition-all shadow-lg">
                Explore SpaceNexus VDR
              </Link>
              <Link href="/demo" className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all">
                Request a Demo
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
