"use client";

import { getCalApi } from "@calcom/embed-react";
import { ArrowRight, Check, ShieldCheck, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { buildCalcomRoutingUrl } from "@/lib/calcom";

const CALCOM_LINK = (process.env.NEXT_PUBLIC_CALCOM_BOOKING_URL ?? "")
  .trim()
  .replace(/^https?:\/\/(?:www\.)?cal\.com\//i, "")
  .replace(/^\/+/, "");

const useCases = [
  { value: "higher-education", label: "Higher Education" },
  { value: "corporate-compliance", label: "Corporate Compliance" },
  { value: "government-defense", label: "Government & Defense" },
] as const;

const assessmentVolumes = [
  "Under 250",
  "250–999",
  "1,000–4,999",
  "5,000+",
] as const;

export function ContactSection() {
  const [primaryUseCase, setPrimaryUseCase] = useState<string | null>(
    useCases[0].value,
  );
  const [assessmentVolume, setAssessmentVolume] = useState<string | null>(
    assessmentVolumes[0],
  );
  const [routingUrl, setRoutingUrl] = useState<string | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const [schedulingError, setSchedulingError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const selectedUseCase = useCases.find(
    (useCase) => useCase.value === primaryUseCase,
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (routingUrl && !dialog.open) {
      dialog.showModal();
    } else if (!routingUrl && dialog.open) {
      dialog.close();
    }
  }, [routingUrl]);

  async function handleSchedule() {
    if (!selectedUseCase || !assessmentVolume) return;

    setSchedulingError(null);
    let routedUrl: string | null;
    try {
      routedUrl = buildCalcomRoutingUrl({
        primaryUseCase: selectedUseCase.label,
        assessmentVolume,
      });
    } catch (error) {
      console.error("Could not build the Cal.com routing URL.", error);
      setSchedulingError(
        "We couldn't prepare scheduling. Please contact support@socraticmetric.ai.",
      );
      return;
    }

    if (routedUrl) {
      setRoutingUrl(routedUrl);
      return;
    }

    if (!CALCOM_LINK) {
      setSchedulingError(
        "Scheduling is not configured right now. Please contact support@socraticmetric.ai.",
      );
      return;
    }

    setIsOpening(true);
    try {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("modal", {
        calLink: CALCOM_LINK,
        config: {
          theme: "light",
          layout: "month_view",
          notes: `Primary use case: ${selectedUseCase.label}\nAssessment volume: ${assessmentVolume}`,
        },
      });
    } catch (error) {
      console.error("Could not open the Cal.com scheduling modal.", error);
      setSchedulingError(
        "We couldn't open scheduling. Please contact support@socraticmetric.ai.",
      );
    } finally {
      setIsOpening(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#101728] py-20 sm:py-24 md:py-32"
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-14 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-10">
          <div className="flex items-center gap-4">
            <div className="shrink-0 rounded-lg bg-white px-3 py-2">
              <Image
                src="/img/showcase/WestcliffULogo.png"
                alt="Westcliff University"
                width={220}
                height={60}
                className="h-10 w-auto object-contain sm:h-12"
              />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Institutional partner
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Westcliff University
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-3 border-t border-white/10 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <div>
              <dd className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                3,000+
              </dd>
              <dt className="mt-1 text-xs text-slate-400">Concurrent users</dt>
            </div>
            <div>
              <dd className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Zero
              </dd>
              <dt className="mt-1 text-xs text-slate-400">AI bypass rate</dt>
            </div>
          </dl>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E79636]/30 bg-[#E79636]/10 px-3 py-1.5 text-xs font-semibold text-[#F3D09A]">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Protected by issued U.S. AI patents
            </div>
            <h2 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Start with one
              <br />
              session.
              <br />
              <em className="font-serif italic text-[#8CA4C2]">
                See the proof for yourself.
              </em>
            </h2>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-slate-300 sm:text-base">
              Choose your use case and approximate annual assessment volume.
              We&apos;ll route you to a focused conversation about your
              organization&apos;s needs.
            </p>
          </div>

          <div className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
            <fieldset>
              <legend className="text-sm font-semibold text-white">
                <span className="mr-2 font-mono text-[#E79636]">01</span>
                Primary Use Case
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {useCases.map((useCase) => {
                  const isSelected = primaryUseCase === useCase.value;
                  return (
                    <button
                      key={useCase.value}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => {
                        setPrimaryUseCase(useCase.value);
                        setSchedulingError(null);
                      }}
                      className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                        isSelected
                          ? "border-[#E79636] bg-[#E79636]/10 text-white"
                          : "border-white/15 bg-white/[0.03] text-slate-300 hover:border-white/30 hover:text-white"
                      } cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E79636]`}
                    >
                      {isSelected ? (
                        <Check className="h-3.5 w-3.5 text-[#E79636]" aria-hidden="true" />
                      ) : null}
                      {useCase.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="mt-7">
              <legend className="text-sm font-semibold text-white">
                <span className="mr-2 font-mono text-[#E79636]">02</span>
                Estimated learners per year
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {assessmentVolumes.map((volume) => {
                  const isSelected = assessmentVolume === volume;
                  return (
                    <button
                      key={volume}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => {
                        setAssessmentVolume(volume);
                        setSchedulingError(null);
                      }}
                      className={`inline-flex min-h-10 items-center rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                        isSelected
                          ? "border-[#E79636] bg-[#E79636]/10 text-white"
                          : "border-white/15 bg-white/[0.03] text-slate-300 hover:border-white/30 hover:text-white"
                      } cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E79636]`}
                    >
                      {volume}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-7">
              <button
                type="button"
                onClick={handleSchedule}
                disabled={!selectedUseCase || !assessmentVolume || isOpening}
                className="group inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#E79636] px-5 py-3 text-sm font-semibold text-[#163460] transition-all duration-200 hover:scale-[1.02] hover:bg-[#F3D09A] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:scale-100"
              >
                {isOpening ? "Opening scheduler…" : "Continue to scheduling"}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
              <p className="mt-2 text-center text-xs text-slate-400" aria-live="polite">
                {schedulingError ??
                  (!selectedUseCase || !assessmentVolume
                    ? "Select a use case and volume to continue."
                    : "Your selections will guide the scheduling experience.")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="calcom-modal-heading"
        onCancel={(event) => {
          event.preventDefault();
          setRoutingUrl(null);
        }}
        onClose={() => setRoutingUrl(null)}
        className="m-auto max-h-[92dvh] w-[calc(100%-2rem)] max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-[#101728]/75"
      >
        {routingUrl ? (
          <div className="flex h-[min(82dvh,760px)] flex-col">
            <header className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6">
              <div>
                <h2
                  id="calcom-modal-heading"
                  className="text-base font-semibold tracking-tight text-[#163460]"
                >
                  Choose a time for your tailored demo
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  {selectedUseCase?.label} · {assessmentVolume} learners per year
                </p>
              </div>
              <button
                type="button"
                onClick={() => setRoutingUrl(null)}
                aria-label="Close scheduling"
                className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4E8A]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </header>
            <iframe
              key={routingUrl}
              src={routingUrl}
              title="Cal.com demo scheduling"
              className="min-h-0 flex-1 border-0"
              loading="eager"
            />
            <p className="border-t border-slate-100 px-5 py-2 text-center text-xs text-slate-500">
              Having trouble?{" "}
              <a
                href={routingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#1E4E8A] underline underline-offset-2"
              >
                Open scheduling in a new tab
              </a>
              .
            </p>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
