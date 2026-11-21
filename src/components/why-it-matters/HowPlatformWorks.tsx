const steps = [
  {
    title: "Explain",
    description:
      "A person responds aloud to questions grounded in the material or standards they are expected to know.",
  },
  {
    title: "Reason",
    description:
      "Adaptive follow-ups invite them to clarify, connect ideas, and apply their knowledge to a new prompt.",
  },
  {
    title: "Review",
    description:
      "Teams can review the conversation and its evaluation as evidence of how the person reached an answer.",
  },
];

const patents = [
  { number: "11,990,139", date: "May 21, 2024" },
  { number: "12,165,655", date: "December 10, 2024" },
  { number: "12,211,511", date: "February 4, 2025" },
  { number: "12,586,589", date: "March 24, 2026" },
];

export function HowPlatformWorks() {
  return (
    <section
      aria-labelledby="cognitive-proof-heading"
      className="bg-[#F8F6F0] py-16 md:py-24"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#1E4E8A]">
              02 · From recall to reasoning
            </p>
            <h2
              id="cognitive-proof-heading"
              className="font-serif text-3xl font-bold leading-[1.1] tracking-tight text-[#163460] sm:text-4xl"
            >
              Make cognition observable.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#65717D] sm:text-lg">
              Speaking and generating an explanation can support recall and
              retention. Those cognitive effects inform the experience; the
              evidence comes from hearing a person explain, reason, and respond
              to follow-up questions.
            </p>
          </div>

          <ol className="divide-y divide-slate-200 border-y border-slate-200">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="group grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 py-6 first:pt-5 last:pb-5 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6 sm:py-7"
              >
                <span className="pt-0.5 font-mono text-sm font-semibold text-[#1E4E8A]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#163460] sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 border-t border-[#163460]/15 pt-8 md:mt-16 md:grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A5662C]">
              Issued U.S. patents
            </p>
            <h3 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#163460] sm:text-3xl">
              A method built for oral verification.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#65717D] sm:text-base">
              Four issued U.S. patents back the platform&apos;s adaptive,
              AI-mediated oral assessment approach.
            </p>
          </div>
          <ul className="mt-6 grid gap-x-8 sm:grid-cols-2 md:mt-0">
            {patents.map((patent, index) => (
              <li
                key={patent.number}
                className="flex items-center justify-between gap-4 border-b border-slate-200 py-4"
              >
                <span className="flex items-center gap-3 text-sm font-semibold text-[#163460]">
                  <span className="font-mono text-xs text-[#1E4E8A]">
                    0{index + 1}
                  </span>
                  No. {patent.number}
                </span>
                <span className="shrink-0 text-xs text-[#65717D]">
                  {patent.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
