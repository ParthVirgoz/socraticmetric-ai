import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";

const stakes = [
  {
    context: "Education",
    need: "Know whether a learner can explain the work behind an assignment.",
  },
  {
    context: "Enterprise",
    need: "Check whether a team member can apply a policy, procedure, or standard.",
  },
  {
    context: "Government",
    need: "Understand how an operator reasons through decisions with mission impact.",
  },
];

export function WhoNeedsIt() {
  return (
    <section
      aria-labelledby="real-world-stakes-heading"
      className="border-t border-slate-200 bg-white py-16 md:py-24"
    >
      <div className="container mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#A5662C]">
            03 · Why the stakes are real
          </p>
          <h2
            id="real-world-stakes-heading"
            className="font-serif text-3xl font-bold leading-[1.1] tracking-tight text-[#163460] sm:text-4xl"
          >
            When decisions matter, understanding has to be visible.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#65717D] sm:text-lg">
            The gap between a polished answer and a person&apos;s actual
            readiness can affect a grade, a compliance decision, or an
            operational choice. Oral verification gives teams a clearer basis
            for those decisions.
          </p>
          <Link
            href={REQUEST_DEMO_BOOKING_HREF}
            className="group mt-7 inline-flex min-h-11 items-center gap-2 border-b border-[#1E4E8A]/30 pb-1 text-sm font-semibold text-[#1E4E8A] transition-colors hover:border-[#1E4E8A] hover:text-[#163460] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4E8A] focus-visible:ring-offset-4"
          >
            See how it works
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <ul className="border-y border-slate-200">
          {stakes.map((item, index) => (
            <li
              key={item.context}
              className="group grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-slate-200 py-6 last:border-b-0 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6 sm:py-7"
            >
              <span className="pt-0.5 font-mono text-sm font-semibold text-[#1E4E8A] transition-transform duration-300 group-hover:translate-x-1">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-[#163460] sm:text-xl">
                  {item.context}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {item.need}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
