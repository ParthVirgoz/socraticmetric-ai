import { Check, X } from "lucide-react";

type Comparison = {
  traditional: string;
  oralDefense: string;
};

type SectorRiskMatrixProps = {
  sector: string;
  title: string;
  description: string;
  comparisons: Comparison[];
};

export function SectorRiskMatrix({
  sector,
  title,
  description,
  comparisons,
}: SectorRiskMatrixProps) {
  const sectionId = sector.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <section
      id="risk"
      aria-labelledby={`${sectionId}-risk-heading`}
      className="bg-white py-16 md:py-20"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-8 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#A5662C]">
            {sector} · core vulnerability
          </p>
          <h2
            id={`${sectionId}-risk-heading`}
            className="font-serif text-3xl font-bold leading-[1.1] tracking-tight text-[#163460] sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#65717D] sm:text-lg">
            {description}
          </p>
        </div>

        <div
          role="table"
          aria-label={`${sector} traditional testing compared with oral verification`}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
        >
          <div role="rowgroup">
            <div role="row" className="grid grid-cols-2">
              <div
                role="columnheader"
                className="border-b border-r border-slate-200 bg-slate-50 px-3 py-4 text-xs font-semibold leading-snug text-slate-600 sm:px-6 sm:text-sm"
              >
                Traditional assessment
              </div>
              <div
                role="columnheader"
                className="border-b border-[#163460] bg-[#163460] px-3 py-4 text-xs font-semibold leading-snug text-white sm:px-6 sm:text-sm"
              >
                SocraticMetric oral defense
              </div>
            </div>
          </div>
          <div role="rowgroup">
            {comparisons.map((comparison) => (
              <div
                key={comparison.traditional}
                role="row"
                className="grid grid-cols-2"
              >
                <div className="group relative flex items-start gap-2 border-b border-r border-slate-200 bg-white px-3 py-4 transition-colors duration-300 hover:bg-[#FFF7F5] sm:gap-3 sm:px-6 sm:py-5">
                  <span
                    className="pointer-events-none absolute inset-y-0 left-0 w-1 origin-center scale-y-0 bg-[#C92A35] transition-transform duration-300 group-hover:scale-y-100"
                    aria-hidden="true"
                  />
                  <X
                    className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-[#C92A35] sm:h-5 sm:w-5"
                    aria-hidden="true"
                  />
                  <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {comparison.traditional}
                  </p>
                </div>
                <div className="group flex items-start gap-2 border-b border-slate-200 bg-[#F2F5F9] px-3 py-4 transition-colors duration-300 hover:bg-[#E9F0F8] sm:gap-3 sm:px-6 sm:py-5">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#1E4E8A] transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5"
                    aria-hidden="true"
                  />
                  <p className="text-xs leading-relaxed text-[#163460] sm:text-sm">
                    {comparison.oralDefense}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
