"use client";

import {
  CheckCircle2,
  FileText,
  Mic,
  RotateCcw,
  ShieldCheck,
  Square,
} from "lucide-react";
import { useState } from "react";

export type SectorPortalPreviewProps = {
  sector: string;
  context: string;
  title: string;
  status: string;
  objectiveLabel: string;
  objective: string;
  details: { label: string; value: string }[];
  verification: string;
  evidence: string;
  studentPrompt?: string;
  followUpQuestion?: string;
};

const waveformHeights = [
  10, 20, 13, 27, 16, 30, 18, 12, 24, 15, 28, 17, 22, 12, 26, 15,
];
const transcriptWidths = [28, 42, 24, 36, 31, 45, 28];

export function SectorPortalPreview({
  sector,
  context,
  title,
  status,
  objectiveLabel,
  objective,
  details,
  verification,
  evidence,
  studentPrompt = objective,
  followUpQuestion = verification,
}: SectorPortalPreviewProps) {
  const [view, setView] = useState<"educator" | "student">("educator");
  const [sessionState, setSessionState] = useState<
    "ready" | "recording" | "complete"
  >("ready");

  function advanceSession() {
    setSessionState((currentState) =>
      currentState === "ready"
        ? "recording"
        : currentState === "recording"
          ? "complete"
          : "ready",
    );
  }

  return (
    <div
      role="region"
      aria-label={`${sector} interactive portal preview`}
      className="w-full overflow-hidden rounded-xl border border-slate-200 bg-[#F8FAFC] text-[#112D5E] shadow-xl"
    >
      <header className="flex items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3.5 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1E4E8A]/15 bg-[#1E4E8A]/5">
            <ShieldCheck className="h-4 w-4 text-[#1E4E8A]" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
              SocraticMetric portal
            </p>
            <p className="truncate text-xs font-medium text-[#112D5E]">{context}</p>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
          {status}
        </span>
      </header>

      <div
        className="grid grid-cols-2 gap-2 border-b border-slate-200 bg-white px-4 py-3 sm:px-5"
        role="group"
        aria-label={`${sector} portal view`}
      >
        <button
          type="button"
          aria-pressed={view === "educator"}
          onClick={() => setView("educator")}
          className={`min-h-9 rounded-md border px-3 py-2 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4E8A] ${
            view === "educator"
              ? "border-[#1E4E8A] bg-[#F2F5F9] text-[#163460]"
              : "border-slate-200 bg-white text-slate-500 hover:border-[#1E4E8A]/40 hover:text-[#163460]"
          }`}
        >
          Educator setup
        </button>
        <button
          type="button"
          aria-pressed={view === "student"}
          onClick={() => setView("student")}
          className={`min-h-9 rounded-md border px-3 py-2 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4E8A] ${
            view === "student"
              ? "border-[#1E4E8A] bg-[#F2F5F9] text-[#163460]"
              : "border-slate-200 bg-white text-slate-500 hover:border-[#1E4E8A]/40 hover:text-[#163460]"
          }`}
        >
          Student session
        </button>
      </div>

      <div key={view} className="animate-workflow-enter p-4 sm:p-5">
        {view === "educator" ? (
          <>
            <div className="mb-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                {sector} workflow
              </p>
              <h2 className="mt-1.5 text-lg font-semibold leading-snug tracking-tight text-[#112D5E] sm:text-xl">
                {title}
              </h2>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  {objectiveLabel}
                </p>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-md border border-[#E79636]/30 bg-[#E79636]/10 px-2 py-1 text-[10px] font-medium text-[#163460]">
                  <CheckCircle2 className="h-3 w-3 text-[#A5662C]" aria-hidden="true" />
                  Configured
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-700 sm:text-sm">
                {objective}
              </p>
              <div className="mt-4 divide-y divide-slate-100 border-t border-slate-100">
                {details.map((detail) => (
                  <div
                    key={detail.label}
                    className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-3 py-2.5 text-xs"
                  >
                    <span className="text-slate-500">{detail.label}</span>
                    <span className="text-right font-medium text-slate-700">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Verification
                </p>
                <p className="mt-1.5 text-xs font-medium leading-snug text-[#112D5E]">
                  {verification}
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Evidence record
                </p>
                <p className="mt-1.5 flex items-start gap-1.5 text-xs font-medium leading-snug text-[#112D5E]">
                  <FileText
                    className="mt-0.5 h-3 w-3 shrink-0 text-[#1E4E8A]"
                    aria-hidden="true"
                  />
                  {evidence}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setView("student")}
              className="mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-md bg-[#1E4E8A] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#163460] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E79636] focus-visible:ring-offset-2"
            >
              Preview student session
            </button>
          </>
        ) : (
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Learner view · simulated session
                </p>
                <h2 className="mt-1 text-base font-semibold leading-snug tracking-tight text-[#112D5E]">
                  {title}
                </h2>
              </div>
              <span
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium ${
                  sessionState === "recording"
                    ? "border-amber-200 bg-amber-50 text-amber-800"
                    : sessionState === "complete"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-slate-200 bg-slate-100 text-slate-600"
                }`}
                aria-live="polite"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    sessionState === "recording"
                      ? "bg-amber-500 motion-safe:animate-pulse"
                      : sessionState === "complete"
                        ? "bg-emerald-500"
                        : "bg-slate-400"
                  }`}
                  aria-hidden="true"
                />
                {sessionState === "recording"
                  ? "Recording demo"
                  : sessionState === "complete"
                    ? "Ready for review"
                    : "Session ready"}
              </span>
            </div>

            <div className="mt-4 rounded-md border border-slate-200 bg-[#F8FAFC] p-3 sm:p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                Read and explain
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#163460]">
                {studentPrompt}
              </p>
            </div>

            {sessionState === "recording" ? (
              <div className="mt-3 rounded-md border border-slate-200 bg-[#F8FAFC] p-3">
                <div
                  className="flex h-10 items-center justify-between gap-1"
                  role="img"
                  aria-label="Simulated speech waveform; no audio is being captured"
                >
                  {waveformHeights.map((height, index) => (
                    <span
                      key={index}
                      className="w-1 rounded-full bg-[#1E4E8A] motion-safe:animate-audio-wave"
                      style={{
                        height: `${height}px`,
                        animationDelay: `${index * 45}ms`,
                      }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div
                  className="mt-3 flex min-h-7 flex-wrap items-center gap-1.5 rounded border border-slate-200 bg-white px-2 py-1.5"
                  role="img"
                  aria-label="Masked transcript preview"
                >
                  {transcriptWidths.map((width, index) => (
                    <span
                      key={index}
                      className="h-2 rounded-sm bg-[#163460]/65 opacity-50 blur-[3px] select-none"
                      style={{ width: `${width}px` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            ) : sessionState === "complete" ? (
              <div className="mt-3 rounded-md border border-emerald-200 bg-emerald-50 p-3">
                <p className="text-xs leading-relaxed text-emerald-800">
                  <strong>Response complete.</strong> The educator can review
                  the response and feedback in this demo.
                </p>
                <p className="mt-2 text-xs leading-relaxed text-emerald-800">
                  Follow-up: {followUpQuestion}
                </p>
              </div>
            ) : null}

            <button
              type="button"
              onClick={advanceSession}
              className={`mt-4 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4E8A] focus-visible:ring-offset-2 ${
                sessionState === "recording"
                  ? "bg-[#C92A35] text-white hover:bg-[#A51D29]"
                  : "bg-[#1E4E8A] text-white hover:bg-[#163460]"
              }`}
            >
              {sessionState === "ready" ? (
                <>
                  <Mic className="h-3.5 w-3.5" aria-hidden="true" />
                  Start simulated response
                </>
              ) : sessionState === "recording" ? (
                <>
                  <Square className="h-3.5 w-3.5" aria-hidden="true" />
                  Stop demo recording
                </>
              ) : (
                <>
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  Replay demo
                </>
              )}
            </button>
            <p className="mt-2 text-center text-[10px] leading-relaxed text-slate-500">
              Interactive simulation only. This preview does not request
              microphone access or capture audio.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
