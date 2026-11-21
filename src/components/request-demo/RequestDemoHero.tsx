import Link from "next/link";
import { ArrowDown } from "lucide-react";

const features = [
  {
    title: "Your setting",
    description:
      "Start with the classroom, team, or operation you want to understand better.",
  },
  {
    title: "The conversation",
    description:
      "See how adaptive questions invite explanation instead of a rehearsed answer.",
  },
  {
    title: "The evidence",
    description:
      "Explore what a team can review after an oral verification session.",
  },
];

export function RequestDemoHero() {
  return (
    <section className="border-b border-slate-200 bg-[#F8F6F0] pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="container mx-auto grid max-w-7xl items-start gap-10 px-6 md:grid-cols-[minmax(0,1.05fr)_minmax(17rem,0.95fr)] md:px-12 lg:gap-20">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1E4E8A]">
            A conversation, not a sales form
          </p>
          <h1 className="animate-text-enter font-serif text-4xl font-bold leading-[1.08] tracking-tight text-[#163460] sm:text-5xl md:text-5xl lg:text-6xl">
            See how understanding can speak for itself.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#65717D] sm:text-xl">
            Choose a time to see how Socratic Metric helps teams move from
            trusting the document to hearing the reasoning behind it.
          </p>
          <Link
            href="#book-demo"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#1E4E8A] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1A4175] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4E8A] focus-visible:ring-offset-2"
          >
            Choose a time
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <aside
          aria-label="What to expect in the demonstration"
          className="border-y border-slate-300 py-5 lg:mt-3"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A5662C]">
                A useful conversation
              </p>
              <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-[#163460]">
                What we&apos;ll cover
              </h2>
            </div>
            <span className="pb-1 font-mono text-xs text-[#65717D]">
              01 — 03
            </span>
          </div>
          <ol className="mt-3 divide-y divide-slate-200">
            {features.map((feature, index) => (
              <li
                key={feature.title}
                className="group grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 py-4 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:gap-4"
              >
                <span className="pt-0.5 font-mono text-sm font-semibold text-[#1E4E8A] transition-transform duration-200 group-hover:translate-x-0.5">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-[#163460] transition-colors duration-200 group-hover:text-[#1E4E8A]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#65717D]">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="border-t border-slate-200 pt-4 text-xs leading-relaxed text-[#65717D]">
            The live Cal.com calendar is just below. No account or intake form
            required.
          </p>
        </aside>
      </div>
    </section>
  );
}
