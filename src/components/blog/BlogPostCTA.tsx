import Link from "next/link";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = ["Oral verification at scale", "Audit-ready records", "Built for high-stakes scenarios"];

export function BlogPostCTA() {
  return (
    <section className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#163460] py-14 text-center sm:mt-16 sm:rounded-3xl md:py-20">
      <div className="relative z-10 px-6 sm:px-10 md:px-12 max-w-3xl mx-auto space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight pt-2">
          Ready to verify <span className="text-[#E79636]">real understanding?</span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          See how Socratic Metric™ fits your classroom, enterprise, or mission-critical workflows.
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-1">
          {benefits.map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#E79636] shrink-0" />
              {b}
            </span>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Link
            href={REQUEST_DEMO_BOOKING_HREF}
            className="group inline-flex h-14 min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-[#E79636] px-8 font-bold text-[#163460] transition-colors duration-200 hover:bg-[#F3D09A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#163460] active:scale-[0.98] sm:w-auto"
          >
            Book a demo
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
