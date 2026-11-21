import Link from "next/link";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { ArrowDown, Check, FileText, Mic } from "lucide-react";

function VerificationJourneyVisual() {
  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-md border border-slate-200 bg-white transition-colors duration-300 hover:border-[#1E4E8A]/40 sm:max-w-lg">
      <div className="grid sm:grid-cols-2">
        <div className="p-5 sm:p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-slate-200 bg-[#F8F6F0] text-[#1E4E8A]">
            <FileText className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#65717D]">
            Written output
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-[#163460]">
            What was submitted
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#65717D]">
            A finished document can show the result without showing who
            understands it.
          </p>
        </div>

        <div className="border-t border-slate-200 p-5 sm:border-l sm:border-t-0 sm:p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#1E4E8A]/20 bg-[#1E4E8A] text-white">
            <Mic className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#1E4E8A]">
            Oral dialogue
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-[#163460]">
            How a person reasons
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#65717D]">
            A live explanation makes it possible to ask what sits behind an
            answer.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-[#F8F6F0] px-5 py-5 sm:px-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#163460]">
          <ArrowDown className="h-4 w-4 text-[#1E4E8A]" aria-hidden="true" />
          Evidence to review
        </div>
        <ul className="mt-3 grid gap-2 sm:grid-cols-3">
          {["Explanation", "Adaptive follow-up", "Session record"].map(
            (item) => (
              <li
                key={item}
                className="group flex items-center gap-2 text-sm text-[#40566F]"
              >
                <Check
                  className="h-4 w-4 shrink-0 text-[#1E4E8A] transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
                {item}
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

export function WhyItMattersHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F0] pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-[#1E4E8A]" />
              <span className="text-sm font-bold uppercase tracking-widest text-[#1E4E8A]">
                The Threat of False Assurance
              </span>
              <div className="h-px w-8 bg-[#1E4E8A]" />
            </div>

            <h1 className="animate-text-enter font-serif text-4xl font-bold leading-[1.08] tracking-tight text-[#163460] sm:text-5xl md:text-5xl lg:text-6xl">
              Verify true comprehension when{" "}
              <span className="text-[#1E4E8A]">AI can generate the output</span>
            </h1>

            <p className="text-lg leading-relaxed text-[#65717D] md:text-xl">
              Generative AI creates a dangerous false assurance of competence by
              producing flawless documentation. Socratic Metric™ evaluates live
              cognition, providing defensible, identity-verified proof that your
              team can articulate, refine, and defend high-stakes decisions
              before operations go live.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                href={REQUEST_DEMO_BOOKING_HREF}
                className="inline-flex h-14 w-full items-center justify-center rounded-md border border-white/10 bg-[#1E4E8A] px-8 text-base font-bold text-white transition-colors hover:bg-[#2663A5] active:scale-95 sm:w-auto"
              >
                Choose a time
              </Link>
            </div>
          </div>

          <div className="relative flex w-full flex-col items-center lg:items-end">
            <VerificationJourneyVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
