import { Brain, Focus, Ear } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function SciencePrinciples() {

  return (
    <section className="py-10 md:py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="mb-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-orange-50 border border-orange-200 text-[#A5662C] font-bold text-xs tracking-widest uppercase">
              Cognitive Neuroscience
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#163460] leading-tight mb-6">
            The Science Behind Oral Learning
          </h2>
        </div>

        <ScrollReveal className="mx-auto max-w-5xl">
          <div className="science-visual-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/sciencepage/oral-learning.png"
              alt="The Science Behind Oral Learning"
              className="science-visual-image block h-auto w-full"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}