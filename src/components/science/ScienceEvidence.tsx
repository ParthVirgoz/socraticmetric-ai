import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const studies = [
  {
    author: "Hale et al. (2007)",
    finding:
      "Reported a comprehension benefit for reading aloud in their study context and highlighted that silent reading made it difficult for an examiner to know whether a passage had been read.",
  },
  {
    author: "Schiavo et al. (2021)",
    finding:
      "Studied attention-driven read-aloud support for students with reading disabilities and reported improved comprehension in that population.",
  },
  {
    author: "Forrin & MacLeod (2018)",
    finding:
      "Examined the production effect and found a memory advantage for self-produced words compared with words read silently in their experimental tasks.",
  },
];

export function ScienceEvidence() {
  return (
    <section
      id="science-evidence"
      aria-labelledby="science-evidence-heading"
      className="bg-white py-16 md:py-20"
    >
      <div className="container mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#1E4E8A]">
            Research evidence
          </p>
          <h2
            id="science-evidence-heading"
            className="font-serif text-3xl font-bold leading-[1.1] tracking-tight text-[#163460] sm:text-4xl"
          >
            What the research supports—and where it stops.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#65717D] sm:text-lg">
            Studies on read-aloud support and oral production inform assessment
            design. Their findings depend on task, learner, and context; they do
            not establish that oral assessment is superior in every situation.
          </p>
          <div className="mt-6 border-l-2 border-[#E79636] pl-4 text-sm leading-relaxed text-slate-600">
            Use oral defense when educators need observable explanation and
            reviewable evidence—not as a replacement for every form of
            assessment.
          </div>
        </div>

        <ol className="border-y border-slate-200">
          {studies.map((study) => (
            <li
              key={study.author}
              className="group grid gap-3 border-b border-slate-200 py-5 transition-colors duration-300 last:border-b-0 hover:bg-[#F8FAFC] sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-6 sm:py-6"
            >
              <div className="flex items-start justify-between gap-3 sm:block">
                <h3 className="text-sm font-semibold tracking-tight text-[#163460] sm:text-base">
                  {study.author}
                </h3>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-[#1E4E8A] opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#1E4E8A]"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {study.finding}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
