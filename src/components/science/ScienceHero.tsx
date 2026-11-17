export function ScienceHero() {

  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl text-center">
        <div
          className="space-y-6"
        >
          <div className="mb-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#F5F1E8] border border-[#1E4E8A]/20 text-[#1E4E8A] font-bold text-xs tracking-widest uppercase">
              Executive Summary
            </span>
          </div>

          <h1 className="animate-text-enter font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#163460] leading-[1.15]">
            Oral Assessment in the <br />
            <span className="text-[#1E4E8A]">Age of AI</span>
          </h1>

          <p className="text-lg md:text-xl text-[#65717D] leading-relaxed max-w-3xl mx-auto">
            Socratic Metric™ addresses the profound challenge of AI-generated content by evaluating live cognition. By requiring users to read questions aloud and respond orally, the platform leverages decades of cognitive neuroscience research to measure genuine comprehension, not just written output.
          </p>
        </div>
      </div>
    </section>
  );
}