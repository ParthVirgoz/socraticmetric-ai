import Link from "next/link";
import { CheckCircle2, Play } from "lucide-react";
import { Cover } from "@/components/ui/cover";

export function RequestDemoHero() {
  const features = [
    "Verify authentic comprehension beyond AI-generated content",
    "Create defensible evidence of real understanding for high-stakes decisions",
    "Standardize oral assessments and reviews at scale"
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#EEF1EF] to-[#F5F5F2]">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-[#1E4E8A]" />
              <span className="text-[#1E4E8A] font-bold text-sm tracking-widest uppercase">Why Socratic Metric Matters</span>
              <div className="h-px w-8 bg-[#1E4E8A]" />
            </div>

            <h1 className="animate-text-enter font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#163460] leading-[1.15]">
              See how Socratic Metric verifies real <Cover className="mt-1">understanding.</Cover>
            </h1>

            <p className="text-lg md:text-xl text-[#65717D] leading-relaxed">
              Socratic Metric turns high-stakes documentation into oral verification. Our platform helps teams confirm that people can explain, reason through, and defend the work they sign off on.
            </p>

            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-blue-50 rounded-full p-1 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#1E4E8A]" />
                  </div>
                  <span className="text-[#163460] font-medium text-lg leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Interactive Glass Card */}
          <div className="relative perspective-1000 group">
            
            <div className="aspect-[4/3] w-full bg-white rounded-3xl border border-slate-200 relative overflow-hidden flex flex-col transition-all duration-300 md:bg-white/90 md:backdrop-blur-md">

               {/* MacOS Style Header */}
               <div className="h-14 bg-white/60 border-b border-slate-100 flex items-center px-6 relative z-10 backdrop-blur-md">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-red-400 transition-colors duration-300"></div>
                   <div className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-amber-400 transition-colors duration-300 delay-75"></div>
                   <div className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-green-400 transition-colors duration-300 delay-150"></div>
                 </div>
                 <div className="mx-auto flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-100 text-xs font-bold tracking-wide text-[#1E4E8A] uppercase shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E4E8A]"></span>
                    Live Simulation
                 </div>
               </div>

               {/* Card Body */}
               <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10 bg-gradient-to-b from-transparent to-white/40">
                 
                 {/* Floating Play Button */}
                 <Link
                   href="#book-demo"
                   scroll
                   className="group/play relative mb-8 inline-flex cursor-pointer flex-col items-center outline-none"
                 >
                    <span className="relative inline-flex h-24 w-24 items-center justify-center rounded-full border border-[#1E4E8A]/20 bg-white outline-none transition-transform duration-300 hover:scale-[1.05] active:scale-95 focus-visible:ring-2 focus-visible:ring-[#1E4E8A] focus-visible:ring-offset-2">
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1E4E8A] pl-2">
                          <Play className="h-8 w-8 fill-current text-white drop-shadow-md" aria-hidden />
                      </span>
                    </span>
                    <span className="sr-only">Jump to live scheduling</span>
                 </Link>

                 <h3 className="text-[#163460] font-serif font-bold text-3xl mb-3 text-center tracking-tight">Interactive Platform Demo</h3>
                 <p className="text-[#65717D] text-lg text-center max-w-sm">
                   Discover how AI-moderated dialogue can transform your high-stakes verification process.
                 </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
