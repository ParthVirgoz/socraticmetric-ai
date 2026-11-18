"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Mic,
  Pause,
  Play,
  RotateCcw,
  ShieldCheck,
  Square,
  X,
} from "lucide-react";

import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";

const waveformBarCount = 32;
const transcriptBlockWidths = [24, 36, 28, 44, 32, 26, 40, 30];

type WorkflowStep = "read" | "check" | "failed" | "success";

const workflowTimeline: WorkflowStep[] = [
  "read",
  "check",
  "failed",
  "read",
  "check",
  "success",
];

const workflowSteps: { id: WorkflowStep; label: string; manualLabel: string }[] = [
  { id: "read", label: "Read aloud", manualLabel: "Read aloud" },
  { id: "check", label: "Similarity check", manualLabel: "Similarity check" },
  { id: "failed", label: "Failed attempt", manualLabel: "See failed attempt" },
  { id: "success", label: "Successful read", manualLabel: "See successful read" },
];

function OralVerificationPreview() {
  const [timelineIndex, setTimelineIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [manualStep, setManualStep] = useState<WorkflowStep>("read");
  const [responseSeconds, setResponseSeconds] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingSeconds, setProcessingSeconds] = useState(3);
  const [waveformHeights, setWaveformHeights] = useState<number[]>(() =>
    Array.from({ length: waveformBarCount }, () => 6),
  );
  const activeStep = isAutoPlaying ? workflowTimeline[timelineIndex] : manualStep;

  useEffect(() => {
    if (!isAutoPlaying || isProcessing || activeStep === "success") return;
    const timerId = window.setTimeout(() => {
      setTimelineIndex((index) => (index + 1) % workflowTimeline.length);
    }, 4500);
    return () => window.clearTimeout(timerId);
  }, [activeStep, isAutoPlaying, isProcessing]);

  useEffect(() => {
    if (activeStep !== "success" || isProcessing) return;
    if (responseSeconds >= 60) {
      setIsProcessing(true);
      setProcessingSeconds(3);
      return;
    }
    const timerId = window.setTimeout(() => {
      setResponseSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => window.clearTimeout(timerId);
  }, [activeStep, isProcessing, responseSeconds]);

  useEffect(() => {
    if (activeStep !== "success" || isProcessing) return;
    let phase = 0;
    const timerId = window.setInterval(() => {
      phase += 0.38;
      setWaveformHeights((heights) =>
        heights.map((height, index) => {
          const voiceEnvelope = Math.abs(Math.sin(phase + index * 0.23));
          const randomEmphasis = Math.random() ** 1.7 * 18;
          const nextHeight = 5 + voiceEnvelope * 16 + randomEmphasis;
          return Math.round(height * 0.35 + nextHeight * 0.65);
        }),
      );
    }, 130);
    return () => window.clearInterval(timerId);
  }, [activeStep, isProcessing]);

  useEffect(() => {
    if (!isProcessing) return;
    if (processingSeconds === 0) {
      setIsProcessing(false);
      setResponseSeconds(0);
      setManualStep("read");
      setTimelineIndex(0);
      setIsAutoPlaying(true);
      return;
    }

    const timerId = window.setTimeout(() => {
      setProcessingSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => window.clearTimeout(timerId);
  }, [isProcessing, processingSeconds]);

  useEffect(() => {
    setResponseSeconds(0);
  }, [activeStep]);

  const selectStep = (step: WorkflowStep) => {
    setManualStep(step);
    setResponseSeconds(0);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    if (isAutoPlaying) {
      setManualStep(activeStep);
      setIsAutoPlaying(false);
      return;
    }

    const nextIndex = workflowTimeline.lastIndexOf(manualStep);
    setTimelineIndex(nextIndex >= 0 ? nextIndex : 0);
    setIsAutoPlaying(true);
  };

  const stopRecording = () => {
    setProcessingSeconds(3);
    setIsProcessing(true);
  };
  const timeLabel = `${String(Math.floor(responseSeconds / 60)).padStart(2, "0")}:${String(responseSeconds % 60).padStart(2, "0")}`;
  const recordingProgress = Math.min((responseSeconds / 60) * 100, 100);
  const visibleTranscriptBlocks = Math.min(
    transcriptBlockWidths.length,
    responseSeconds + 1,
  );

  return (
    <>
      <div
        className="mx-auto w-full max-w-[34rem] rounded-3xl border border-white/10 bg-indigo-900/80 p-5 text-white backdrop-blur-md sm:p-7"
        role="group"
        aria-label="Interactive SocraticMetric verification workflow"
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#F3D09A]">
              <Mic className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">SocraticMetric verification</p>
              <p className="mt-0.5 text-xs text-white/60">Interactive workflow demo</p>
            </div>
          </div>
          <button
            type="button"
            onClick={toggleAutoPlay}
            aria-pressed={isAutoPlaying}
            disabled={isProcessing}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white/70 transition-colors hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D09A] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isAutoPlaying ? (
              <Pause className="h-3 w-3" aria-hidden />
            ) : (
              <Play className="h-3 w-3" aria-hidden />
            )}
            {isAutoPlaying ? "Pause AutoPlay" : "Resume AutoPlay"}
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4" role="group" aria-label="Verification steps">
          {workflowSteps.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => selectStep(step.id)}
                aria-pressed={isActive}
                disabled={isProcessing}
                className={`min-w-0 rounded-lg border px-2 py-2 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D09A] disabled:cursor-not-allowed disabled:opacity-40 sm:px-2.5 ${
                  isActive
                    ? "border-white/25 bg-white/10 text-white"
                    : "border-white/10 bg-black/10 text-white/55 hover:border-white/20 hover:text-white/80"
                }`}
              >
                <span className="block truncate text-[10px] font-semibold sm:text-[11px]">
                  {step.manualLabel}
                </span>
                <span className="mt-0.5 block truncate text-[9px] text-white/45">
                  {step.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 min-h-[260px]">
          <div key={activeStep} className="animate-workflow-enter">
            {activeStep === "read" ? (
              <div className="flex min-h-[260px] flex-col rounded-2xl border border-white/10 bg-black/15 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
                    Read this question aloud
                  </p>
                  <span className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-2.5 py-1 text-[10px] font-medium text-teal-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-300 motion-safe:animate-pulse" aria-hidden />
                    Listening to voice...
                  </span>
                </div>

                <p className="mt-5 max-w-sm text-lg font-medium leading-snug tracking-tight text-white sm:text-xl">
                  Which evidence supports your conclusion?
                </p>

                <button
                  type="button"
                  onClick={() => selectStep("check")}
                  className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-lg border border-white/10 bg-[#1E4E8A] px-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-[#2663A5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D09A] motion-safe:animate-mic-pulse"
                >
                  <Mic className="h-4 w-4" aria-hidden />
                  Reading Question
                </button>
              </div>
            ) : null}

            {activeStep === "check" ? (
              <div className="flex min-h-[260px] flex-col justify-center rounded-2xl border border-white/10 bg-black/15 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">Similarity Check</p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-medium text-[#F3D09A]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F3D09A] motion-safe:animate-pulse" aria-hidden />
                    Calculating
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-white/55">
                  Comparing the spoken reading with the question prompt.
                </p>
                <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="animate-similarity-scan h-full w-0 rounded-full bg-indigo-200" />
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px] text-white/45">
                  <span>Voice input</span>
                  <span>Prompt match</span>
                </div>
              </div>
            ) : null}

            {activeStep === "failed" ? (
              <div className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-orange-300/25 bg-orange-300/[0.06] p-5 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-300/25 bg-orange-300/10 text-orange-200">
                  <X className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-4 text-lg font-semibold tracking-tight text-white">
                  Reading Not Matched
                </p>
                <p className="mt-2 text-sm text-white/65">
                  Similarity Score: <span className="font-semibold text-orange-100">9.6%</span>
                </p>
                <p className="mt-1 max-w-xs text-xs leading-relaxed text-white/50">
                  A score above 70% is required to proceed.
                </p>
                <button
                  type="button"
                  onClick={() => selectStep("read")}
                  className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 text-xs font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D09A]"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden />
                  Try Again
                </button>
              </div>
            ) : null}

            {activeStep === "success" ? (
              <div className="min-h-[260px] rounded-2xl border border-teal-300/20 bg-teal-300/[0.05] p-4 sm:p-5">
                {isProcessing ? (
                  <div className="flex min-h-[260px] flex-col items-center justify-center text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-teal-300/25 bg-teal-300/10 text-teal-100">
                      <ShieldCheck className="h-6 w-6 motion-safe:animate-pulse" aria-hidden />
                    </span>
                    <p className="mt-4 text-sm font-semibold text-white">
                      Processing voice verification...
                    </p>
                    <p className="mt-1 text-xs text-white/55">
                      Restarting the demo in {processingSeconds}s
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2 text-sm font-semibold text-teal-100">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-teal-300/25 bg-teal-300/10">
                        <Check className="h-4 w-4" aria-hidden />
                      </span>
                      Question Read
                    </div>
                    <p className="mt-2 text-xs text-white/55">
                      Similarity Score: <span className="font-semibold text-teal-100">94.2% · Match Verified</span>
                    </p>

                    <div className="mt-4 rounded-xl border border-white/10 bg-indigo-950/55 p-3">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="text-xs font-semibold text-white">Record Your Response</span>
                        <span className="tabular-nums text-[10px] text-white/60">{timeLabel} / 01:00</span>
                      </div>
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 text-[10px] font-medium text-amber-100">
                          <span className="animate-recording-pulse flex h-6 w-6 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10">
                            <Mic className="h-3 w-3" aria-hidden />
                          </span>
                          <span>Recording live student response...</span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wide text-amber-100">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-300 motion-safe:animate-pulse" aria-hidden />
                          Live
                        </span>
                      </div>
                      <div
                        className="flex h-12 items-center justify-between gap-1 rounded-lg border border-white/10 bg-black/10 px-2"
                        role="img"
                        aria-label="Live student speech waveform simulation"
                      >
                        {waveformHeights.map((height, index) => (
                          <span
                            key={index}
                            className="w-1 shrink-0 rounded-full bg-indigo-200 transition-[height] duration-150 ease-out"
                            style={{
                              height: `${height}px`,
                              opacity: 0.45 + Math.min(height / 80, 0.45),
                            }}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <div
                        className="mt-3 flex min-h-8 flex-wrap items-center gap-1.5 rounded-lg border border-white/10 bg-black/10 px-2 py-1.5"
                        role="img"
                        aria-label="Live speech-to-text transcript simulation; answer content is masked"
                      >
                        {transcriptBlockWidths.map((width, index) =>
                          index < visibleTranscriptBlocks ? (
                            <span
                              key={index}
                              className="animate-workflow-enter h-2 rounded-sm bg-white/70 opacity-40 blur-[5px] select-none"
                              style={{
                                width: `${width}px`,
                                animationDelay: `${index * 70}ms`,
                              }}
                              aria-hidden="true"
                            />
                          ) : null,
                        )}
                      </div>
                      <div
                        className="mt-3 h-1 overflow-hidden rounded-full bg-white/10"
                        role="progressbar"
                        aria-label="Recording time progress"
                        aria-valuemin={0}
                        aria-valuemax={60}
                        aria-valuenow={Math.min(responseSeconds, 60)}
                      >
                        <div
                          className="h-full rounded-full bg-amber-300 transition-[width] duration-500"
                          style={{ width: `${recordingProgress}%` }}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={stopRecording}
                        className="mt-3 inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-[#E79636] bg-[#E79636] px-3 text-xs font-semibold text-[#1E1B4B] transition-colors hover:border-[#F3D09A] hover:bg-[#F3D09A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D09A]"
                      >
                        <Square className="h-3 w-3 fill-current" aria-hidden />
                        Stop Recording
                      </button>
                    </div>
                    <p className="mt-2 text-[10px] text-white/40">
                      Live speech-to-text · response content masked in demo
                    </p>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-white/55">
          <span>
            {isAutoPlaying
              ? "Auto demo · read/check 4.5s · response up to 1 min"
              : "Manual exploration · auto loop paused"}
          </span>
          <ShieldCheck className="h-4 w-4 shrink-0 text-[#F3D09A]" aria-hidden />
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-[34rem] text-center text-xs italic text-[#163460]/70">
        Zero AI bypass rate. 100% verified human cognition.
      </p>
    </>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 selection:bg-[#E79636]/20 selection:text-[#163460] md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="max-w-2xl text-left">
            <div className="animate-text-enter mb-6 inline-flex items-center gap-2 rounded-full border border-[#1E4E8A]/20 bg-white/70 px-3.5 py-1.5 text-xs font-semibold tracking-tight text-[#1E4E8A] backdrop-blur-md sm:text-sm">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              <span>Patented AI Oral Verification System</span>
            </div>

            <h1 className="animate-text-enter animate-text-enter-delay-1 max-w-[15ch] font-serif text-4xl font-bold leading-[1.08] tracking-tight text-[#163460] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              AI can write the essay. It can’t defend it out loud.
            </h1>

            <p className="animate-text-enter animate-text-enter-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Prove what people understand through live, AI-moderated dialogue—not what automated text generation can produce.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={REQUEST_DEMO_BOOKING_HREF}
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-[#1E4E8A] bg-[#1E4E8A] px-6 text-center text-sm font-bold text-white transition-colors hover:bg-[#163460] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E79636] focus-visible:ring-offset-2 active:scale-[0.98] sm:px-7 sm:text-base"
              >
                Book a Live 15-Min Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-[#163460]/20 bg-white/60 px-6 text-center text-sm font-semibold text-[#163460] transition-colors hover:border-[#1E4E8A]/50 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4E8A] focus-visible:ring-offset-2 active:scale-[0.98] sm:px-7 sm:text-base"
              >
                See How It Works
                <ArrowDown className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="w-full lg:pl-2">
            <OralVerificationPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
