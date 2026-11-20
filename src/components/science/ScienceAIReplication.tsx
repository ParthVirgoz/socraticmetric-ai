import { AnimatedMetric } from "@/components/industry/AnimatedMetric";
import { LockKeyhole, ScrollText, ShieldCheck } from "lucide-react";

export function ScienceAIReplication() {
  return (
    <section
      aria-labelledby="science-enterprise-return-heading"
      className="bg-[#F8FAFC] py-16 md:py-20"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#1E4E8A]">
              The enterprise return
            </p>
            <h2
              id="science-enterprise-return-heading"
              className="font-serif text-3xl font-bold leading-[1.1] tracking-tight text-[#163460] sm:text-4xl md:text-5xl"
            >
              Make the explanation—not just the answer—available for review.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#65717D] sm:text-lg">
              Oral assessment raises the evidence bar by asking learners to
              explain and respond to follow-up questions. It is not a claim that
              AI cannot imitate speech; it is a structured way to examine
              comprehension and preserve an audit trail.
            </p>
          </div>

          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            <li className="flex items-start gap-3 py-5">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#1E4E8A]" aria-hidden="true" />
              <div>
                <h3 className="font-semibold tracking-tight text-[#163460]">
                  Identity-aware assessment records
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Keep verification context with each learner&apos;s response.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 py-5">
              <ScrollText className="mt-0.5 h-5 w-5 shrink-0 text-[#1E4E8A]" aria-hidden="true" />
              <div>
                <h3 className="font-semibold tracking-tight text-[#163460]">
                  Immutable, transcript-backed logs
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Preserve the response, evaluation, and feedback history for
                  authorized review.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 py-5">
              <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-[#1E4E8A]" aria-hidden="true" />
              <div>
                <h3 className="font-semibold tracking-tight text-[#163460]">
                  Reviewable compliance evidence
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Give institutional and enterprise reviewers access to
                  rubric-aligned session details.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <dl className="mt-10 grid grid-cols-3 gap-3 border-y border-slate-200 py-5 sm:gap-6">
          <AnimatedMetric label="Concurrent users" value={3000} suffix="+" />
          <AnimatedMetric label="Issued U.S. AI patents" value={4} />
          <AnimatedMetric
            label="Reported AI bypass rate"
            value={0}
            zeroLabel="Zero"
          />
        </dl>
      </div>
    </section>
  );
}
