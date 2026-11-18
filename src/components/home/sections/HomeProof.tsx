import { ArrowRight, Check, X } from "lucide-react";
import Link from "next/link";

const comparisons = [
  {
    traditional: {
      title: "Easily bypassed by LLMs",
      description:
        "Generated prose can look convincing without showing what the learner understands.",
    },
    socratic: {
      title: "Adaptive oral defense resists prompt injection",
      description:
        "Follow-up questions probe the learner's own reasoning in real time.",
    },
  },
  {
    traditional: {
      title: "No proof of semantic retention",
      description:
        "Selecting or submitting an answer shows recognition, not recall.",
    },
    socratic: {
      title: "Grounded in the Production Effect",
      description:
        "Speaking and explaining aloud actively engage recall and retention.",
    },
  },
  {
    traditional: {
      title: "High audit risk",
      description:
        "A written result leaves little evidence of how the learner reached it.",
    },
    socratic: {
      title: "Audit-ready, immutable session logs",
      description:
        "Identity-linked transcripts and evaluation records create a reviewable trail.",
    },
  },
];

export function HomeProof() {
  return (
    <section
      id="challenge"
      aria-labelledby="challenge-heading"
      className="relative z-10 overflow-hidden px-6 py-14 md:py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1E4E8A]">
            The proof gap
          </p>
          <h2
            id="challenge-heading"
            className="font-serif text-3xl font-bold leading-[1.08] tracking-tight text-[#163460] sm:text-4xl md:text-5xl"
          >
            An answer is not proof of understanding.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4D5C6E] sm:text-lg">
            Written work can be generated, guessed, or copied. Oral defense
            makes reasoning observable.
          </p>
        </div>

        <div
          role="table"
          aria-label="Traditional assessment compared with SocraticMetric oral defense"
          className="overflow-hidden border-2 border-[#163460] bg-white shadow-[8px_8px_0_0_#163460]"
        >
          <div role="rowgroup">
            <div role="row" className="grid grid-cols-2">
              <div
                role="columnheader"
                className="border-b border-r border-[#163460]/20 bg-[#F8F6F0] px-3 py-4 text-xs font-bold leading-snug text-[#4D5C6E] sm:px-6 sm:py-5 sm:text-sm"
              >
                Traditional Written / Multiple-Choice
              </div>
              <div
                role="columnheader"
                className="border-b border-[#163460] bg-[#163460] px-3 py-4 text-xs font-bold leading-snug text-white sm:px-6 sm:py-5 sm:text-sm"
              >
                SocraticMetric AI Oral Defense
              </div>
            </div>
          </div>

          <div role="rowgroup">
            {comparisons.map((comparison, index) => (
              <div
                key={comparison.traditional.title}
                role="row"
                className="grid grid-cols-2"
              >
                <div
                  role="cell"
                  className={`group relative border-b border-r border-[#163460]/15 px-3 py-5 transition-colors sm:px-6 sm:py-6 ${
                    index === 0
                      ? "hover:bg-[#FFF7F5]"
                      : "bg-white"
                  }`}
                >
                  {index === 0 ? (
                    <span
                      className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-center scale-y-0 bg-[#C92A35] transition-transform duration-200 group-hover:scale-y-100"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="flex items-start gap-2 sm:gap-3">
                    <X
                      className={`mt-0.5 h-4 w-4 shrink-0 text-[#7C8795] transition-colors sm:h-5 sm:w-5 ${
                        index === 0 ? "group-hover:text-[#C92A35]" : ""
                      }`}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        className={`text-xs font-bold leading-snug text-[#163460] sm:text-base ${
                          index === 0 ? "transition-colors group-hover:text-[#A51D29]" : ""
                        }`}
                      >
                        {comparison.traditional.title}
                      </p>
                      <p className="mt-2 text-[11px] leading-relaxed text-[#4D5C6E] sm:text-sm">
                        {comparison.traditional.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  role="cell"
                  className="border-b border-[#163460]/15 bg-[#F2F5F9] px-3 py-5 sm:px-6 sm:py-6"
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#1E4E8A] sm:h-5 sm:w-5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-bold leading-snug text-[#163460] sm:text-base">
                        {comparison.socratic.title}
                      </p>
                      <p className="mt-2 text-[11px] leading-relaxed text-[#4D5C6E] sm:text-sm">
                        {comparison.socratic.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-[#4D5C6E]">
            Built for education, enterprise, and government teams that need
            defensible evidence of authentic understanding.
          </p>
          <Link
            href="/request-demo"
            className="group inline-flex min-h-12 shrink-0 cursor-pointer items-center justify-center gap-2 border border-[#163460] bg-[#E79636] px-5 text-sm font-bold text-[#163460] transition-all duration-200 hover:scale-[1.02] hover:bg-[#F3D09A] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#163460] focus-visible:ring-offset-2"
          >
            Book a demo
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
