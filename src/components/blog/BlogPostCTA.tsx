import Link from "next/link";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Oral verification at scale",
  "Audit-ready records",
  "Built for high-stakes scenarios",
];

export function BlogPostCTA() {
  return (
    <section className="mt-12 rounded-md border border-white/10 bg-[#163460] py-12 text-center sm:mt-16 md:py-16">
      <div className="mx-auto max-w-3xl space-y-5 px-6 sm:px-10 md:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8CA4C2]">
          Next step · live walkthrough
        </p>
        <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to verify{" "}
          <span className="text-[#E79636]">real understanding?</span>
        </h2>

        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Choose a time directly from the Cal.com calendar. We&apos;ll focus the
          conversation on your classroom, enterprise, or mission-critical
          workflow—no intake form first.
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-1">
          {benefits.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-[#E79636] shrink-0" />
              {b}
            </span>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Link
            href={REQUEST_DEMO_BOOKING_HREF}
            className="group inline-flex h-14 min-h-[48px] w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-[#E79636] px-8 font-bold text-[#163460] transition-colors duration-200 hover:bg-[#F3D09A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#163460] active:scale-[0.98] sm:w-auto"
          >
            Choose a time
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
