"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  FileText,
  LayoutDashboard,
  Link2,
  LockKeyhole,
  Mic,
  Play,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Video,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: "goals",
    number: "01",
    label: "ASSIGNMENT DESIGN",
    title: "Define core learning goals & reference material",
    description:
      "Create a course assignment around a concise, 200-character learning objective and refine the prompt with built-in AI. Ground each session in curated lecture notes, textbook chapters, or talks such as TED.",
    icon: FileText,
  },
  {
    id: "modes",
    number: "02",
    label: "QUESTION CONFIGURATION",
    title: "Configure question modes",
    description:
      "Mix and match Adaptive questions that drill into weak spots, Hypothetical prompts that test real-world decisions, and Additive questions that assess fixed subject breadth. Set custom difficulty tiers for the assignment.",
    icon: SlidersHorizontal,
  },
  {
    id: "iterations",
    number: "03",
    label: "ITERATIVE MASTERY",
    title: "Enforce iteration and share access",
    description:
      "Set the minimum iterations per question. Students receive AI feedback on an initial spoken answer and refine their reasoning aloud before moving on. Distribute the assignment with one shareable link.",
    icon: Link2,
  },
  {
    id: "submissions",
    number: "04",
    label: "COURSE REVIEW",
    title: "Review holistic submissions",
    description:
      "Review every enrolled student's oral defense in one course dashboard. Inspect audio recordings, iteration progression, AI feedback logs, rubric results, and final grades.",
    icon: LayoutDashboard,
  },
] as const;

type WorkflowStep = (typeof steps)[number]["id"];

const dialogueWaveform = [
  10, 18, 30, 14, 24, 36, 20, 12, 28, 38, 21, 15, 32, 24, 12, 19, 34, 16, 27,
  38, 18, 12, 25, 33, 17, 29, 13, 22, 36, 18, 11, 25,
];

const submissionWaveform = [7, 12, 18, 10, 15, 20, 11, 16, 8, 14, 19, 9];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<WorkflowStep>("goals");
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const viewportCenter = window.innerHeight / 2;
            const aCenter = a.boundingClientRect.top + a.boundingClientRect.height / 2;
            const bCenter = b.boundingClientRect.top + b.boundingClientRect.height / 2;
            return Math.abs(aCenter - viewportCenter) - Math.abs(bCenter - viewportCenter);
          });

        const stepId = intersecting[0]?.target.getAttribute("data-step");
        if (
          stepId === "goals" ||
          stepId === "modes" ||
          stepId === "iterations" ||
          stepId === "submissions"
        ) {
          setActiveStep(stepId);
        }
      },
      {
        rootMargin: "-42% 0px -42% 0px",
        threshold: 0,
      },
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  const active = steps.find((step) => step.id === activeStep) ?? steps[0];

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative scroll-mt-24 py-12 md:scroll-mt-28 md:py-16 lg:py-20"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-10 max-w-3xl md:mb-14">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-[#1E4E8A]/40" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E4E8A]">
              Educator portal workflow
            </span>
          </div>
          <h2
            id="how-it-works-heading"
            className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-[#163460] sm:text-5xl md:text-6xl"
          >
            How It Works
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-slate-600 sm:text-xl">
            Design a grounded assignment, guide oral mastery, and review every
            submission from one educator workspace.
          </p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-10 lg:gap-16">
          <ol
            aria-label="Educator and administrator workflow"
            className="order-2 border-y border-[#163460]/20 md:order-1"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <li
                  key={step.id}
                  ref={(element) => {
                    stepRefs.current[index] = element;
                  }}
                  data-step={step.id}
                  aria-current={isActive ? "step" : undefined}
                  className={`flex min-h-[68vh] scroll-mt-24 items-center gap-4 border-b border-[#163460]/15 py-10 transition-opacity duration-300 last:border-b-0 sm:gap-6 md:min-h-[72vh] md:py-12 ${
                    isActive ? "opacity-100" : "opacity-55"
                  }`}
                >
                  <span className="w-10 shrink-0 self-start pt-1 font-mono text-lg font-bold tracking-tight text-[#E79636] sm:w-14 sm:text-xl">
                    {step.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1E4E8A]/70">
                      {step.label}
                    </span>
                    <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight text-[#163460] sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                      {step.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#1E4E8A]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span>{step.label}</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="order-1 md:order-2 md:sticky md:top-24">
            <div
              className="overflow-hidden rounded-xl border border-slate-200/80 bg-[#F8FAFC] text-slate-700 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl"
              role="region"
              aria-label="Educator portal UI preview"
            >
              <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3.5 sm:px-6">
                <div className="min-w-0">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-slate-500">
                    Educator portal
                  </p>
                  <p className="mt-1 text-xs font-semibold leading-snug tracking-tight text-[#112D5E] sm:text-sm">
                    Small Business Owners vs Entrepreneurs
                  </p>
                </div>
                <div className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1.5 text-[10px] font-medium text-slate-600 sm:text-xs">
                  admin@socraticmetric.ai
                </div>
              </div>

              <div
                key={activeStep}
                className="animate-workflow-enter min-h-[420px] bg-[#F8FAFC] p-4 sm:min-h-[450px] sm:p-6"
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Step {active.number} of 04
                  </p>
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    {steps.map((step) => (
                      <span
                        key={step.id}
                        className={`h-1.5 w-6 rounded-full transition-colors duration-300 ${
                          step.id === activeStep ? "bg-[#E79636]" : "bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {activeStep === "goals" ? (
                  <div className="flex min-h-[380px] flex-col">
                    <div className="mb-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Assignment setup
                      </p>
                      <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight text-[#112D5E] sm:text-lg">
                        Small Business Owners vs. Entrepreneurs
                      </h3>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                          Core objective
                        </p>
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-[#E79636]/40 bg-[#E79636]/10 px-2 py-1 text-[10px] font-medium text-[#163460]">
                          <Sparkles className="h-3 w-3" aria-hidden="true" />
                          AI Refine <span aria-hidden="true">✓</span>
                        </span>
                      </div>
                      <p className="mt-3 rounded-md border border-slate-300 bg-white p-3 text-xs leading-relaxed text-slate-700 focus:border-[#1E4E8A] sm:text-sm">
                        Assess understanding of key distinctions between entrepreneurs and small business owners, including goals, risk tolerance, and growth strategies.
                      </p>
                      <p className="mt-3 flex justify-end">
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-[10px] font-medium text-slate-600">
                        145 / 200 chars
                        </span>
                      </p>
                    </div>

                    <div className="mt-5">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Reference material
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-2.5 py-2 text-[10px] text-slate-700 shadow-sm">
                          <FileText className="h-3.5 w-3.5 shrink-0 text-[#1E4E8A]" aria-hidden="true" />
                          Textbook_Ch4_Notes.pdf
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-2.5 py-2 text-[10px] text-slate-700 shadow-sm">
                          <Video className="h-3.5 w-3.5 shrink-0 text-[#1E4E8A]" aria-hidden="true" />
                          TED_Talk_Operator_Mindset
                        </span>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center gap-2 border-t border-slate-200 pt-4 text-[10px] text-slate-500">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#1E4E8A]" aria-hidden="true" />
                      Prompts grounded in approved course materials
                    </div>
                  </div>
                ) : null}

                {activeStep === "modes" ? (
                  <div className="flex min-h-[380px] flex-col">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                          Assignment settings
                        </p>
                        <h3 className="mt-1.5 text-base font-semibold tracking-tight text-[#112D5E]">
                          Question Configuration
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-600 shadow-sm focus:border-[#1E4E8A]">
                        Difficulty <strong className="font-medium text-slate-800">Medium</strong>
                        <ChevronDown className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                      </span>
                    </div>

                    <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white px-3 shadow-sm">
                      <div className="flex items-start gap-3 py-4">
                        <span className="w-7 shrink-0 font-mono text-xs font-semibold text-slate-500">Q1</span>
                        <div className="min-w-0 flex-1">
                          <span className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-[10px] font-medium text-slate-800 focus:border-[#1E4E8A]">
                            Adaptive
                            <ChevronDown className="h-3 w-3 text-slate-500" aria-hidden="true" />
                          </span>
                          <p className="mt-2 text-xs leading-relaxed text-slate-600">
                            Follows up dynamically on the student's weak points.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 py-4">
                        <span className="w-7 shrink-0 font-mono text-xs font-semibold text-slate-500">Q2</span>
                        <div className="min-w-0 flex-1">
                          <span className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-[10px] font-medium text-slate-800 focus:border-[#1E4E8A]">
                            Adaptive
                            <ChevronDown className="h-3 w-3 text-slate-500" aria-hidden="true" />
                          </span>
                          <p className="mt-2 text-xs leading-relaxed text-slate-600">
                            Continues with progressive deep-dive questioning.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 py-4">
                        <span className="w-7 shrink-0 font-mono text-xs font-semibold text-slate-500">Q3</span>
                        <div className="min-w-0 flex-1">
                          <span className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-[10px] font-medium text-slate-800 focus:border-[#1E4E8A]">
                            Hypothetical
                            <ChevronDown className="h-3 w-3 text-slate-500" aria-hidden="true" />
                          </span>
                          <p className="mt-2 text-xs leading-relaxed text-slate-600">
                            Simulates a real-world scenario for the learner to solve.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center gap-2 pt-5 text-[10px] text-slate-500">
                      <SlidersHorizontal className="h-3.5 w-3.5 text-[#1E4E8A]" aria-hidden="true" />
                      Additive mode can be configured to test fixed subject breadth.
                    </div>
                  </div>
                ) : null}

                {activeStep === "iterations" ? (
                  <div className="flex min-h-[380px] flex-col">
                    <div className="mb-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Mastery requirements
                      </p>
                      <h3 className="mt-1.5 text-base font-semibold tracking-tight text-[#112D5E]">
                        Assignment Iteration Rules
                      </h3>
                    </div>

                    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-medium text-slate-700">
                          Minimum Iterations per Question
                        </p>
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-sm font-medium text-slate-600">
                          2
                        </span>
                      </div>
                      <div className="mt-4 h-1.5 rounded-full bg-slate-200">
                        <div className="relative h-full w-1/4 rounded-full bg-[#1E4E8A]">
                          <span className="absolute -right-1.5 -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#E79636] shadow-sm" />
                        </div>
                      </div>
                      <div className="mt-2 flex justify-between font-mono text-[9px] text-slate-500">
                        <span>1</span>
                        <span>5</span>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Feedback loop
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-[10px] font-medium">
                        <span className="rounded-md border border-slate-200 bg-white px-2.5 py-2 text-[#112D5E]">
                          Initial Answer
                        </span>
                        <ArrowRight className="h-3 w-3 text-[#1E4E8A]" aria-hidden="true" />
                        <span className="rounded-md border border-[#1E4E8A]/20 bg-[#1E4E8A]/10 px-2.5 py-2 text-[#1E4E8A]">
                          AI Critique
                        </span>
                        <ArrowRight className="h-3 w-3 text-[#1E4E8A]" aria-hidden="true" />
                        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-emerald-700">
                          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 align-middle" aria-hidden="true" />
                          Refined Defense
                        </span>
                      </div>
                    </div>

                    <div className="mt-auto flex min-h-11 items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs shadow-sm">
                      <span className="flex min-w-0 items-center gap-2 text-[#112D5E]">
                        <Link2 className="h-4 w-4 shrink-0 text-[#1E4E8A]" aria-hidden="true" />
                        <span className="truncate">Copy Student Assignment Link</span>
                      </span>
                      <span className="inline-flex shrink-0 items-center rounded-md bg-[#1E4E8A] px-3 py-2 text-sm font-medium text-white shadow-xs transition-colors hover:bg-[#163460]">
                        Copy Student Link
                      </span>
                    </div>
                  </div>
                ) : null}

                {activeStep === "submissions" ? (
                  <div className="flex min-h-[380px] flex-col">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                          BUS 204 · Entrepreneurship
                        </p>
                        <h3 className="mt-1.5 text-base font-semibold tracking-tight text-[#112D5E]">
                          Course Submissions
                        </h3>
                      </div>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                        24 students
                      </span>
                    </div>

                    <div
                      role="table"
                      aria-label="Course submissions with verified iterations and rubric scores"
                      className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
                    >
                      <div
                        role="row"
                        className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500"
                      >
                        <span role="columnheader">Student submission</span>
                        <span role="columnheader">Rubric</span>
                      </div>
                      {[
                        { name: "Jordan Lee", score: "94", marker: "A" },
                        { name: "Amira Patel", score: "88", marker: "A" },
                      ].map((student) => (
                        <div
                          key={student.name}
                          role="row"
                          className="border-b border-slate-200 px-3 py-3.5 last:border-b-0"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span
                              role="cell"
                              className="text-xs font-semibold text-[#112D5E]"
                            >
                              {student.name}
                            </span>
                            <span
                              role="cell"
                              className="font-mono text-sm font-semibold text-[#1E4E8A]"
                            >
                              {student.score}
                              <span className="ml-1 text-[9px] text-slate-500">
                                {student.marker}
                              </span>
                            </span>
                          </div>
                          <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span
                                className="flex h-6 items-center gap-[2px] rounded-md border border-[#1E4E8A]/20 bg-[#1E4E8A]/10 px-2"
                                role="img"
                                aria-label={`Audio response from ${student.name}`}
                              >
                                {submissionWaveform.map((height, index) => (
                                  <span
                                    key={index}
                                    className="w-0.5 bg-[#1E4E8A]"
                                    style={{ height: `${height}px` }}
                                    aria-hidden="true"
                                  />
                                ))}
                              </span>
                              <Play
                                className="h-3 w-3 text-[#1E4E8A]"
                                fill="currentColor"
                                aria-hidden="true"
                              />
                            </div>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                              2/2 Iterations Completed
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-2 pt-4 text-[10px] text-slate-500">
                      <LockKeyhole className="h-3.5 w-3.5 text-[#1E4E8A]" aria-hidden="true" />
                      Feedback logs and verified transcripts attached
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-6 md:mt-12 md:flex-row md:gap-8">
          <div className="inline-flex items-center gap-3 text-sm font-semibold text-[#163460]">
            <CheckCircle2
              className="h-5 w-5 text-[#1E4E8A]"
              strokeWidth={2.5}
              aria-hidden="true"
            />
            Seamless LMS integration available
          </div>
          <Link
            href="/education"
            className="group inline-flex min-h-12 items-center justify-center gap-2 border border-[#163460] bg-[#1E4E8A] px-6 text-sm font-bold text-white transition-colors hover:bg-[#163460] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E79636] focus-visible:ring-offset-2"
          >
            Learn more about education solutions
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
