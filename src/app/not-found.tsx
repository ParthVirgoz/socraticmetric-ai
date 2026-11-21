import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  path: "/404",
  noIndex: true,
});

const helpfulLinks = [
  {
    title: "Why it matters",
    description:
      "Explore the gap between written output and real understanding.",
    href: "/why-it-matters",
  },
  {
    title: "Education",
    description: "See how oral verification supports authentic assessment.",
    href: "/education",
  },
  {
    title: "Enterprise",
    description: "Explore verification for workforce knowledge and compliance.",
    href: "/enterprise",
  },
  {
    title: "Government",
    description: "Learn about readiness assurance in high-stakes operations.",
    href: "/government",
  },
  {
    title: "Insights",
    description: "Read about learning, assessment, and AI-era verification.",
    href: "/blog",
  },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6F0] font-sans text-[#163460]">
      <Navbar />
      <main className="flex flex-1 items-center py-16 pt-32 md:py-24 md:pt-40">
        <div className="container mx-auto max-w-4xl px-6 md:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A5662C]">
              Error 404
            </p>
            <h1 className="animate-text-enter mt-4 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-[#163460] sm:text-5xl md:text-6xl">
              This page isn&apos;t here.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#65717D] sm:text-lg">
              The link may be outdated or the page may have moved. Start again
              from the homepage, or explore one of these paths.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex min-h-11 items-center gap-2 bg-[#1E4E8A] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1A4175] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4E8A] focus-visible:ring-offset-2"
              >
                <Home className="h-4 w-4" aria-hidden="true" />
                Back to home
              </Link>
              <Link
                href="/request-demo#book-demo"
                className="inline-flex min-h-11 items-center gap-2 border border-slate-300 bg-white px-5 text-sm font-semibold text-[#163460] transition-colors hover:border-[#1E4E8A] hover:text-[#1E4E8A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4E8A] focus-visible:ring-offset-2"
              >
                Book a demo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <nav
            aria-label="Helpful pages"
            className="mt-12 border-y border-slate-200"
          >
            {helpfulLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between gap-5 border-b border-slate-200 py-5 last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1E4E8A]"
              >
                <span>
                  <span className="block font-semibold text-[#163460] transition-colors group-hover:text-[#1E4E8A]">
                    {link.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-[#65717D]">
                    {link.description}
                  </span>
                </span>
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-[#1E4E8A] transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
}
