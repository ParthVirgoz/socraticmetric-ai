import Link from "next/link";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { Check, FileText, Mic } from "lucide-react";

const waveHeights = [4, 10, 6, 14, 8, 16, 10, 18, 7, 12, 9, 15, 6, 11, 8, 14, 5, 12];

function Waveform() {
  return (
    <div className="flex h-11 flex-1 items-end justify-center gap-px sm:gap-0.5" aria-hidden>
      {waveHeights.map((h, i) => (
        <div
          key={i}
          className="w-[3px] shrink-0 rounded-full bg-[#1E4E8A]/90 sm:w-1"
          style={{ height: `${Math.min(h, 18)}px`, opacity: 0.35 + (i / waveHeights.length) * 0.55 }}
        />
      ))}
    </div>
  );
}

function VerificationJourneyVisual() {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xl shadow-slate-300/25 sm:max-w-lg sm:p-6">
      {/* Unverified documentation */}
      <div
        className="rounded-xl border border-slate-100 bg-slate-50/90 p-4 sm:p-5"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F1E8] text-[#1E4E8A]">
              <FileText className="h-5 w-5" strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-[#163460]">Documentation</p>
              <p className="text-sm text-[#65717D]">AI-generated report</p>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-700 sm:text-xs">
            Unverified
          </span>
        </div>
        <div className="mt-4 space-y-2.5">
          <div className="h-2 rounded-full bg-slate-200" />
          <div className="h-2 w-[92%] rounded-full bg-slate-200" />
          <div className="h-2 w-[78%] rounded-full bg-slate-200" />
        </div>
      </div>

      {/* Mic + waveform bridge */}
      <div
        className="flex items-center gap-3 py-4 sm:gap-4 sm:py-5"
      >
        <div className="relative flex h-[4.5rem] w-14 shrink-0 justify-center sm:h-[5rem] sm:w-16">
          <div className="absolute left-1/2 top-0 h-full w-0 -translate-x-1/2 border-l-2 border-dashed border-slate-300" />
          <div className="relative z-10 my-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1E4E8A] shadow-lg shadow-[#1E4E8A]/35 ring-4 ring-white sm:h-14 sm:w-14">
            <Mic className="h-5 w-5 text-white sm:h-6 sm:w-6" strokeWidth={2} />
          </div>
        </div>
        <Waveform />
      </div>

      {/* Verified understanding */}
      <div
        className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50/90"
      >
        <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-[#1E4E8A]" />
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 flex-1 items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-1 ring-emerald-200/80">
                <Check className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-[#163460]">Authentic Cognition Verified</p>
                <p className="text-sm text-[#65717D]">Oral defense completed successfully</p>
              </div>
            </div>
            <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700 sm:text-xs">
              Verified
            </span>
          </div>

          <div className="mt-5 space-y-3.5">
            {[
              { label: "Comprehension", value: 92, color: "bg-emerald-500" },
              { label: "Reasoning", value: 88, color: "bg-[#1E4E8A]" },
              { label: "Defense", value: 95, color: "bg-emerald-500" },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-3">
                <span className="w-[7.5rem] shrink-0 text-xs font-medium text-[#65717D] sm:text-sm">{row.label}</span>
                <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full ${row.color}`}
                   
                   
                   
                  />
                </div>
                <span className="w-7 shrink-0 text-right text-sm font-bold tabular-nums text-[#163460]">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhyItMattersHero() {

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF1EF] to-[#F5F5F2] pb-20 pt-32 md:pb-32 md:pt-40">

      <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div
            className="max-w-2xl space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-[#1E4E8A]" />
              <span className="text-sm font-bold uppercase tracking-widest text-[#1E4E8A]">The Threat of False Assurance</span>
              <div className="h-px w-8 bg-[#1E4E8A]" />
            </div>

            <h1 className="animate-text-enter font-serif text-4xl font-bold leading-[1.15] tracking-tight text-[#163460] sm:text-5xl md:text-6xl">
              Verify True Comprehension When <br />
              <span className="text-[#1E4E8A]">AI Can Generate the Output</span>
            </h1>

            <p className="text-lg leading-relaxed text-[#65717D] md:text-xl">
              Generative AI creates a dangerous false assurance of competence by producing flawless
              documentation. Socratic Metric™ evaluates live cognition, providing defensible,
              identity-verified proof that your team can articulate, refine, and defend high-stakes
              decisions before operations go live.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                href={REQUEST_DEMO_BOOKING_HREF}
                className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-[#1E4E8A] px-8 text-base font-bold text-white shadow-lg shadow-[#163460]/10 transition-all hover:-translate-y-0.5 hover:bg-[#2663A5] hover:shadow-xl active:scale-95 sm:w-auto"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          <div
            className="relative flex w-full flex-col items-center lg:items-end"
          >
            <VerificationJourneyVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
