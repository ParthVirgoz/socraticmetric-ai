import Image from "next/image";

const evidenceGaps = [
  {
    title: "Polished output can hide an understanding gap",
    description:
      "A report, answer, or analysis can be accurate and fluent without revealing who reasoned through it.",
  },
  {
    title: "Static checks show the result, not the reasoning",
    description:
      "When the work is consequential, a completed document alone cannot show whether its author can explain the underlying decisions.",
  },
  {
    title: "Readiness needs a human response",
    description:
      "A live explanation gives teams a chance to ask follow-up questions and see how a person applies what they know.",
  },
];

export function VerificationGap() {
  return (
    <section
      aria-labelledby="verification-gap-heading"
      className="border-y border-slate-200 bg-white py-16 md:py-24"
    >
      <div className="container mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#A5662C]">
            01 · The verification gap
          </p>
          <h2
            id="verification-gap-heading"
            className="font-serif text-3xl font-bold leading-[1.1] tracking-tight text-[#163460] sm:text-4xl"
          >
            An answer is not proof of understanding.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#65717D] sm:text-lg">
            Generative AI makes convincing documentation easy to produce. The
            risk is treating that output as evidence that a person can explain
            or apply the thinking behind it.
          </p>
          <figure className="group mt-8 overflow-hidden rounded-md border border-slate-200 bg-[#F8F6F0] p-3 transition-colors duration-300 hover:border-[#1E4E8A]/40 sm:p-4">
            <div className="relative aspect-[1045/677] overflow-hidden rounded-sm bg-white">
              <Image
                src="/img/sciencepage/challenge-solution.png"
                alt="A diagram tracing the shift from written output to oral engagement and verifiable learning."
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-relaxed text-[#65717D] sm:text-sm">
              The shift is from judging the finished answer to hearing the
              thinking behind it.
            </figcaption>
          </figure>
        </div>

        <ol className="border-y border-slate-200">
          {evidenceGaps.map((item, index) => (
            <li
              key={item.title}
              className="group grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-slate-200 py-6 last:border-b-0 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6 sm:py-7"
            >
              <span className="pt-0.5 font-mono text-sm font-semibold tracking-tight text-[#1E4E8A] transition-transform duration-300 group-hover:translate-x-1">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold leading-snug tracking-tight text-[#163460] sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
