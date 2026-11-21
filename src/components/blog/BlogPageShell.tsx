import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export function BlogPageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-[#F8F6F0] font-sans text-[#163460] selection:bg-[#E79636]/20 selection:text-[#163460]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function BlogHero() {
  return (
    <header className="border-b border-slate-200 bg-white pb-12 pt-32 md:pb-16 md:pt-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-xs font-semibold text-[#65717D]"
        >
          <Link href="/" className="transition-colors hover:text-[#1E4E8A]">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-[#163460]">
            Blog
          </span>
        </nav>
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#1E4E8A]">
            Insights
          </p>
          <h1 className="animate-text-enter font-serif text-4xl font-bold leading-[1.08] tracking-tight text-[#163460] sm:text-5xl md:text-6xl">
            Ideas on assessment in the age of AI.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#65717D] sm:text-lg">
            Perspectives on oral verification, cognitive science, and what proof
            of understanding means when written output is no longer enough.
          </p>
        </div>
      </div>
    </header>
  );
}
