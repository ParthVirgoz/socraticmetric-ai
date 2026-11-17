import Link from "next/link";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { LazyHeroPreview } from "@/components/ui/LazyHeroPreview";

export function GovernmentHero() {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#EEF1EF] to-[#F5F5F2]">

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
              When AI can generate the procedure,{" "}
              <span className="text-[#1E4E8A]">
                written output no longer guarantees operational readiness.
              </span>
            </h1>

            <div className="space-y-4 text-lg md:text-xl text-[#65717D] leading-relaxed max-w-lg">
              <p>
                Generative AI can produce flawless mission plans, safety analyses, and operational
                procedures, creating a dangerous false assurance of competence.
              </p>
              <p>
                Socratic Metric™ evaluates live cognition, verifying that your operators can reason
                through cascading failures, articulate redundancy logic, and execute under pressure.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                href={REQUEST_DEMO_BOOKING_HREF}
                className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-[#1E4E8A] px-8 text-base font-bold text-white shadow-lg shadow-[#163460]/10 transition-all hover:-translate-y-0.5 hover:bg-[#2663A5] hover:shadow-xl active:scale-95 sm:w-auto"
              >
                Talk to our team
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E4E8A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1E4E8A]" />
              </span>
              Pre-mission oral check preview
            </div>

            <div className="w-full max-w-full mx-auto">
              <LazyHeroPreview
                src="/animation/hero-government-voice.html"
                title="SocraticMetric government pre-mission oral check — live preview"
                messageType="sm-gov-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
