import { AlertTriangle, Lightbulb } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ScienceChallengeSolution() {
  return (
    <section className="py-10 md:py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="mb-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#F5F1E8] border border-[#1E4E8A]/20 text-[#1E4E8A] font-bold text-xs tracking-widest uppercase">
              The Fundamental Shift
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#163460] leading-tight mb-6">
            From Static Output to Verified Cognition
          </h2>
          <p className="text-lg text-[#65717D] leading-relaxed">
            Generative AI has fundamentally broken traditional written assessments. To truly verify comprehension in high-stakes environments, we must move from silent reading to AI-moderated oral evaluation.
          </p>
        </div>

        <ScrollReveal className="mx-auto max-w-5xl">
          <div className="science-visual-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/sciencepage/challenge-solution.png"
              alt="The Challenge vs The Solution: Moving from static output to verified cognition"
              className="science-visual-image block h-auto w-full"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}