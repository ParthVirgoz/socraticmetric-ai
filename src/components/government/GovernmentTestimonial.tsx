import { Quote } from "lucide-react";

export function GovernmentTestimonial() {
  return (
    <section className="relative py-20 md:py-32 bg-[#EEF1EF] overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#1E4E8A]" />
            <span className="text-[#1E4E8A] font-bold text-sm tracking-widest uppercase">Voices</span>
            <div className="h-px w-12 bg-[#1E4E8A]" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#163460]">
            What mission leaders are saying
          </h2>
        </div>

        <div
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl p-8 md:p-16 bg-white border border-slate-100 shadow-xl shadow-[#1E4E8A]/5 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E79636] to-transparent" />

            <Quote
              className="w-12 h-12 text-[#A5662C]/20 mx-auto mb-8"
              strokeWidth={1.5}
            />

            <blockquote className="font-serif text-2xl md:text-3xl font-medium text-[#163460] leading-relaxed mb-10 relative z-10">
              &ldquo;When AI can generate procedures, Socratic Metric verifies human understanding. We can
              now confirm that the operators responsible for mission-critical systems genuinely
              comprehend them before authorization.&rdquo;
            </blockquote>

            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E79636] to-[#C27B2E] flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-white">
                MOL
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-[#163460]">Mission Operations Lead</div>
                <div className="text-sm font-medium text-[#65717D] mt-1">
                  Government or aerospace agency (placeholder)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
