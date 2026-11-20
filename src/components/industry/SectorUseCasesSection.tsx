type UseCase = {
  title: string;
  description: string;
};

type SectorUseCasesSectionProps = {
  sector: string;
  title: string;
  description: string;
  useCases: UseCase[];
};

export function SectorUseCasesSection({
  sector,
  title,
  description,
  useCases,
}: SectorUseCasesSectionProps) {
  const sectionId = sector.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <section
      aria-labelledby={`${sectionId}-use-cases-heading`}
      className="bg-white py-16 md:py-20"
    >
      <div className="container mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#1E4E8A]">
            {sector} applications
          </p>
          <h2
            id={`${sectionId}-use-cases-heading`}
            className="font-serif text-3xl font-bold leading-[1.1] tracking-tight text-[#163460] sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#65717D] sm:text-lg">
            {description}
          </p>
        </div>

        <ol className="border-y border-slate-200">
          {useCases.map((useCase, index) => (
            <li
              key={useCase.title}
              className="group grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-slate-200 py-5 transition-colors duration-300 last:border-b-0 hover:bg-slate-50 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6 sm:py-6"
            >
              <span className="pt-0.5 font-mono text-sm font-semibold tracking-tight text-[#E79636] transition-transform duration-300 group-hover:translate-x-1">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold leading-snug tracking-tight text-[#163460] sm:text-lg">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {useCase.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
