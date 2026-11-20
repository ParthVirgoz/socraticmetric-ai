import Link from "next/link";
import { SectorPortalPreview } from "@/components/industry/SectorPortalPreview";

export function GovernmentHero() {
  return (
    <div className="relative overflow-hidden bg-[#F8F6F0] pt-32 pb-20 md:pt-40 md:pb-32">

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className="space-y-6 max-w-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-[#1E4E8A]" />
              <span className="text-[#1E4E8A] font-bold text-sm tracking-widest uppercase">Government & Defense</span>
              <div className="h-px w-8 bg-[#1E4E8A]" />
            </div>

            <h1 className="animate-text-enter font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#163460] leading-[1.15]">
              Mission readiness cannot be inferred from{" "}
              <span className="text-[#1E4E8A]">
                completed training.
              </span>
            </h1>

            <div className="space-y-4 text-lg md:text-xl text-[#65717D] leading-relaxed max-w-lg">
              <p>
                For agency directors and defense contractors, assess whether
                personnel can explain approved clearance protocols and reason
                through operational scenarios.
              </p>
              <p>
                Use only material authorized for the deployment. Classified
                information must remain in systems explicitly approved for its
                classification.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex h-14 w-full items-center justify-center rounded-xl border border-white/10 bg-[#1E4E8A] px-8 text-base font-bold text-white transition-colors hover:bg-[#2663A5] active:scale-95 sm:w-auto"
              >
                Book a tailored demo
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex h-14 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-8 text-base font-bold text-[#163460] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1E4E8A]/30 hover:bg-[#F5F1E8]/50 hover:text-[#1E4E8A] active:scale-95 sm:w-auto"
              >
                See how it works
              </Link>
            </div>
          </div>

          <div
            className="relative perspective-1000 flex flex-col items-center"
          >
            <div
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-[#1E4E8A] text-xs font-bold tracking-wide uppercase z-20"
            >
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1E4E8A]" />
              </span>
              Pre-mission oral check preview
            </div>

            <div className="w-full max-w-full mx-auto">
              <SectorPortalPreview
                sector="Government & Defense"
                context="Personnel readiness · Unclassified demo"
                title="Clearance Protocol Assessment"
                status="Demo protocol"
                objectiveLabel="Readiness objective"
                objective="Explain approved access-control and incident-response steps using authorized training material."
                details={[
                  { label: "Reference material", value: "Approved unclassified directive" },
                  { label: "Question mode", value: "Scenario · Oral defense" },
                ]}
                verification="Reason through an approved scenario"
                evidence="Transcript · rubric · immutable session log"
                studentPrompt="A badge fails at a controlled entry point. What is the approved first action, and who should be notified?"
                followUpQuestion="How should the response change if a tailgating attempt is reported?"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
