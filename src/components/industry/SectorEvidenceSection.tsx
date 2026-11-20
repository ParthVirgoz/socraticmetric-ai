import { AnimatedMetric } from "@/components/industry/AnimatedMetric";

type EvidencePoint = {
  title: string;
  description: string;
};

type SectorEvidenceSectionProps = {
  sector: string;
  title: string;
  description: string;
  points: EvidencePoint[];
};

export function SectorEvidenceSection({
  sector,
  title,
  description,
  points,
}: SectorEvidenceSectionProps) {
  const sectionId = sector.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <section
      aria-labelledby={`${sectionId}-evidence-heading`}
      className="bg-[#F8FAFC] py-16 md:py-20"
    >
      <div className="container mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#1E4E8A]">
            {sector} · enterprise return
          </p>
          <h2
            id={`${sectionId}-evidence-heading`}
            className="font-serif text-3xl font-bold leading-[1.1] tracking-tight text-[#163460] sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#65717D] sm:text-lg">
            {description}
          </p>
        </div>

        <div>
          <ul className="border-y border-slate-200">
            {points.map((point, index) => (
              <li
                key={point.title}
                className="group grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-slate-200 py-6 transition-colors duration-300 last:border-b-0 hover:bg-white sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6 sm:py-7"
              >
                <span className="pt-0.5 font-mono text-sm font-semibold tracking-tight text-[#1E4E8A] transition-transform duration-300 group-hover:translate-x-1">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-[#163460] sm:text-xl">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <dl className="mt-8 grid grid-cols-3 gap-3 border-y border-slate-200 py-5 sm:gap-6">
            <AnimatedMetric label="Concurrent users" value={3000} suffix="+" />
            <AnimatedMetric label="Issued U.S. AI patents" value={4} />
            <AnimatedMetric
              label="Reported AI bypass rate"
              value={0}
              zeroLabel="Zero"
            />
          </dl>
        </div>
      </div>
    </section>
  );
}
