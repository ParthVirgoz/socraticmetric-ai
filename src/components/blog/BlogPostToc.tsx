"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ListTree, X } from "lucide-react";
import type { TocEntry } from "@/lib/blog/toc";
import { cn } from "@/lib/utils";

function TocList({
  items,
  activeId,
  onItemClick,
  className,
}: {
  items: TocEntry[];
  activeId: string;
  onItemClick?: () => void;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "m-0 list-none space-y-0.5 border-l-2 border-[#F5F1E8] pl-3",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item.id} className={item.level === 3 ? "pl-2" : ""}>
          <a
            href={`#${item.id}`}
            onClick={onItemClick}
            aria-current={activeId === item.id ? "location" : undefined}
            className={cn(
              "block rounded-r-md border-l-2 py-1.5 pl-2 pr-2 text-sm leading-snug transition-colors line-clamp-4",
              activeId === item.id
                ? "-ml-[0.875rem] border-[#1E4E8A] bg-[#F5F1E8] font-semibold text-[#163460]"
                : "-ml-[0.875rem] border-transparent text-[#69737D] hover:bg-[#F1F2EE] hover:text-[#1E4E8A]",
            )}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * Fixed bottom-left “On this page” control (stays visible while scrolling); opens a
 * left drawer to jump to sections.
 */
export function BlogPostToc({ items }: { items: TocEntry[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const fabRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const panelId = useId();

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => heading !== null);
    if (headings.length === 0) return;

    let frame = 0;
    const updateActiveHeading = () => {
      frame = 0;
      const threshold = window.innerHeight * 0.35;
      let current = headings[0];
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top > threshold) break;
        current = heading;
      }
      setActiveId(current.id);
    };
    const scheduleUpdate = () => {
      if (frame === 0)
        frame = window.requestAnimationFrame(updateActiveHeading);
    };

    updateActiveHeading();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, [items]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => closeRef.current?.focus(), 50);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        fabRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  if (items.length === 0) return null;

  const portalContent = (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            key="toc-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden
            className="fixed inset-0 z-[70] bg-[#163460]/40 backdrop-blur-[2px] md:hidden"
            onClick={close}
          />
          <motion.aside
            key="toc-panel"
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed bottom-0 left-0 top-0 z-[71] flex w-[min(100vw-1rem,20.5rem)] flex-col rounded-r-md border-r border-slate-200/90 bg-white/98 backdrop-blur-md sm:w-[min(100vw-2rem,22rem)] md:hidden"
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-200/80 px-4 py-4 sm:px-5">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[#F5F1E8] ring-1 ring-[#1E4E8A]/12">
                  <ListTree
                    className="h-4 w-4 text-[#1E4E8A]"
                    aria-hidden
                    strokeWidth={2}
                  />
                </span>
                <div className="min-w-0">
                  <p id={titleId} className="text-sm font-bold text-[#163460]">
                    On this page
                  </p>
                  <p className="text-xs text-[#69737D]">
                    {items.length}{" "}
                    {items.length === 1 ? "section" : "sections"}
                  </p>
                </div>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => {
                  close();
                  fabRef.current?.focus();
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200/90 bg-[#F5F5F2] text-[#163460] transition-colors hover:border-slate-300 hover:bg-slate-100"
                aria-label="Close table of contents"
              >
                <X className="h-5 w-5" strokeWidth={2} aria-hidden />
              </button>
            </div>
            <nav
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5"
              aria-label="Article sections"
            >
              <TocList
                items={items}
                activeId={activeId}
                onItemClick={() => {
                  close();
                  fabRef.current?.focus();
                }}
                className="border-l-[#1E4E8A]/25"
              />
            </nav>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      <aside className="hidden h-fit self-start md:sticky md:top-28 md:block">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#A5662C]">
          In this article
        </p>
        <nav
          aria-label="Article sections"
          className="max-h-[calc(100vh-14rem)] overflow-y-auto overscroll-contain pr-1"
        >
          <TocList
            items={items}
            activeId={activeId}
            className="border-l-[#1E4E8A]/20"
          />
        </nav>
        <p className="mt-5 border-t border-slate-200 pt-3 text-xs leading-relaxed text-[#69737D]">
          {items.length} {items.length === 1 ? "section" : "sections"}
        </p>
      </aside>

      <button
        ref={fabRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Toggle table of contents"
        className={cn(
          "fixed z-[65] flex items-center gap-2 rounded-md border border-white/10 bg-[#163460] px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#1A4175] active:scale-[0.98] sm:px-4 sm:py-3 sm:text-[11px] md:hidden",
          "left-[max(0.75rem,env(safe-area-inset-left,0px))] bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:left-5 sm:bottom-8 lg:left-6",
        )}
      >
        <ListTree
          className="h-4 w-4 shrink-0 text-[#8CA4C2]"
          aria-hidden
          strokeWidth={2}
        />
        <span className="max-w-[9.5rem] truncate sm:max-w-none">
          On this page
        </span>
      </button>
      {mounted ? createPortal(portalContent, document.body) : null}
    </>
  );
}
