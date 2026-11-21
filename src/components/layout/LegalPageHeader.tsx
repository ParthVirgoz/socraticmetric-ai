import Link from "next/link";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";

type LegalPageHeaderProps = {
  title: string;
  description: string;
};

const links = [
  { label: "Home", href: "/" },
  { label: "Why it matters", href: "/why-it-matters" },
  { label: "Book a demo", href: REQUEST_DEMO_BOOKING_HREF },
];

export function LegalPageHeader({ title, description }: LegalPageHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white pb-10 pt-32 md:pb-12 md:pt-40">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#1E4E8A]">
          Legal
        </p>
        <h1 className="animate-text-enter font-serif text-3xl font-bold leading-[1.1] tracking-tight text-[#163460] sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#65717D] sm:text-base">
          {description}
        </p>
        <nav
          aria-label="Explore Socratic Metric"
          className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-200 pt-4"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#1E4E8A] transition-colors hover:text-[#163460] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4E8A] focus-visible:ring-offset-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
