"use client";

import { BookOpen, Mic, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  SectorPortalPreview,
  type SectorPortalPreviewProps,
} from "@/components/industry/SectorPortalPreview";

type Principle = {
  label: string;
  description: string;
};

type SectorInteractiveStoryProps = {
  sector: string;
  science: {
    title: string;
    description: string;
    principles: Principle[];
  };
  product: {
    title: string;
    description: string;
  };
  demo: SectorPortalPreviewProps;
};

export function SectorInteractiveStory({
  sector,
  science,
  product,
  demo,
}: SectorInteractiveStoryProps) {
  const [activeStage, setActiveStage] = useState(0);
  const [activePrinciple, setActivePrinciple] = useState(0);
  const stageRefs = useRef<Array<HTMLLIElement | null>>([]);
  const sectionId = sector.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const stages = [
    { label: "Cognitive science", ...science },
    { label: "Interactive proof", ...product },
  ];

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const currentEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!currentEntry) return;
        const stageIndex = Number(
          currentEntry.target.getAttribute("data-stage-index"),
        );
        if (Number.isInteger(stageIndex)) setActiveStage(stageIndex);
      },
      {
        rootMargin: "-25% 0px -35% 0px",
        threshold: [0.1, 0.3, 0.55, 0.75],
      },
    );

    stageRefs.current.forEach((stage) => {
      if (stage) observer.observe(stage);
    });

    return () => observer.disconnect();
  }, []);

  function selectStage(index: number) {
    setActiveStage(index);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    stageRefs.current[index]?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
  }

  return (
    <section
      id="how-it-works"
      aria-labelledby={`${sectionId}-story-heading`}
      className="bg-[#F8F6F0] py-16 md:py-20"
    >
      <div className="container mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#1E4E8A]">
            {sector} · science to practice
          </p>
          <h2
            id={`${sectionId}-story-heading`}
            className="font-serif text-3xl font-bold leading-[1.1] tracking-tight text-[#163460] sm:text-4xl"
          >
            From learning science to observable proof.
          </h2>
          <ol className="mt-8 border-y border-slate-200">
            {stages.map((stage, index) => (
              <li
                key={stage.label}
                ref={(element) => {
                  stageRefs.current[index] = element;
                }}
                data-stage-index={index}
                className="flex min-h-[62vh] flex-col justify-center border-b border-slate-200 py-10 last:border-b-0 sm:min-h-[68vh] sm:py-14"
              >
                <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#1E4E8A]">
                  0{index + 1} · {stage.label}
                </p>
                <h3 className="max-w-xl font-serif text-2xl font-bold leading-[1.12] tracking-tight text-[#163460] sm:text-3xl">
                  {stage.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#65717D] sm:text-lg">
                  {stage.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-xl sm:p-5">
            <header className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1E4E8A]/15 bg-[#1E4E8A]/5 text-[#1E4E8A]">
                  {activeStage === 0 ? (
                    <BookOpen className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Mic className="h-4 w-4" aria-hidden="true" />
                  )}
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Interactive walkthrough
                  </p>
                  <p className="text-sm font-semibold text-[#112D5E]">
                    {activeStage === 0 ? "Why oral production?" : "Portal preview"}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700">
                <ShieldCheck className="h-3 w-3" aria-hidden="true" />
                Demo
              </span>
            </header>

            <div
              className="mt-4 grid grid-cols-2 gap-2"
              role="group"
              aria-label="Story stages"
            >
              {stages.map((stage, index) => (
                <button
                  key={stage.label}
                  type="button"
                  aria-pressed={activeStage === index}
                  onClick={() => selectStage(index)}
                  className={`min-h-10 rounded-lg border px-3 py-2 text-left text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4E8A] ${
                    activeStage === index
                      ? "border-[#1E4E8A] bg-[#F2F5F9] text-[#163460]"
                      : "border-slate-200 bg-white text-slate-500 hover:border-[#1E4E8A]/40 hover:text-[#163460]"
                  }`}
                >
                  {stage.label}
                </button>
              ))}
            </div>

            <div
              key={activeStage}
              className="mt-4 min-h-[390px] animate-workflow-enter"
              role="region"
              aria-live="polite"
              aria-label={`${stages[activeStage].label} interactive panel`}
            >
              {activeStage === 0 ? (
                <div className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Two complementary learning effects
                  </p>
                  <div
                    className="mt-3 grid grid-cols-2 gap-2"
                    role="group"
                    aria-label="Cognitive science principles"
                  >
                    {science.principles.map((principle, index) => (
                      <button
                        key={principle.label}
                        type="button"
                        aria-pressed={activePrinciple === index}
                        onClick={() => setActivePrinciple(index)}
                        className={`min-h-10 rounded-md border px-3 py-2 text-left text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4E8A] ${
                          activePrinciple === index
                            ? "border-[#1E4E8A] bg-white text-[#163460]"
                            : "border-slate-200 bg-transparent text-slate-500 hover:bg-white hover:text-[#163460]"
                        }`}
                      >
                        {principle.label}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3 min-h-44 rounded-lg border border-slate-200 bg-white p-4">
                    <p className="text-sm font-semibold tracking-tight text-[#163460]">
                      {science.principles[activePrinciple]?.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {science.principles[activePrinciple]?.description}
                    </p>
                    <p className="mt-4 border-t border-slate-100 pt-3 text-xs leading-relaxed text-slate-500">
                      These effects help explain why learners producing and
                      explaining information may retain it differently than
                      when they only review it. They support assessment design;
                      they do not prove comprehension on their own.
                    </p>
                  </div>
                </div>
              ) : (
                <SectorPortalPreview {...demo} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
