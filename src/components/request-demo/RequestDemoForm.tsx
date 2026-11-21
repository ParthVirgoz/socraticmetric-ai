"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef, useState } from "react";

const CALCOM_LINK = (process.env.NEXT_PUBLIC_CALCOM_BOOKING_URL || "")
  .trim()
  .replace(/^https?:\/\/(?:www\.)?cal\.com\//i, "")
  .replace(/^\/+/, "");

export function RequestDemoForm() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [schedulerError, setSchedulerError] = useState(false);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || !CALCOM_LINK) return;

    let active = true;
    getCalApi()
      .then((cal) => {
        if (!active) return;
        cal("ui", {
          theme: "light",
          hideEventTypeDetails: false,
          layout: "month_view",
          cssVarsPerTheme: {
            light: {
              "cal-brand": "#1E4E8A",
              "cal-text": "#163460",
              "cal-text-emphasis": "#163460",
              "cal-border-subtle": "#E5E7E4",
            },
            dark: {
              "cal-brand": "#1E4E8A",
              "cal-text": "#163460",
              "cal-text-emphasis": "#163460",
              "cal-border-subtle": "#E5E7E4",
            },
          },
        });
      })
      .catch((error: unknown) => {
        console.error("Could not initialize the Cal.com scheduler.", error);
        if (active) setSchedulerError(true);
      });

    return () => {
      active = false;
    };
  }, [visible]);

  return (
    <section
      id="book-demo"
      aria-labelledby="book-demo-heading"
      className="scroll-mt-28 border-t border-slate-200 bg-white py-16 md:scroll-mt-32 md:py-24"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E4E8A]">
            Live scheduling
          </p>
          <h2
            id="book-demo-heading"
            className="font-serif text-3xl font-bold leading-[1.1] tracking-tight text-[#163460] sm:text-4xl md:text-5xl"
          >
            Choose a time to talk.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#65717D] sm:text-lg">
            Use the calendar below to book directly. We&apos;ll focus the
            conversation on your goals and how oral verification could fit your
            workflow.
          </p>
        </div>

        <div
          ref={mountRef}
          className="mx-auto max-w-5xl border border-slate-200 bg-white p-3 sm:p-5 md:p-8"
        >
          {!CALCOM_LINK ? (
            <div className="flex min-h-72 flex-col items-center justify-center px-5 text-center">
              <p className="font-semibold text-[#163460]">
                Online scheduling is temporarily unavailable.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#65717D]">
                Contact{" "}
                <a
                  href="mailto:support@socraticmetric.ai"
                  className="font-semibold text-[#1E4E8A] underline decoration-[#1E4E8A]/30 underline-offset-2 hover:decoration-[#1E4E8A]"
                >
                  support@socraticmetric.ai
                </a>{" "}
                and we&apos;ll arrange a time.
              </p>
            </div>
          ) : schedulerError ? (
            <div className="flex min-h-72 flex-col items-center justify-center px-5 text-center">
              <p className="font-semibold text-[#163460]">
                We couldn&apos;t load the scheduler.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#65717D]">
                Please try again later or contact{" "}
                <a
                  href="mailto:support@socraticmetric.ai"
                  className="font-semibold text-[#1E4E8A] underline decoration-[#1E4E8A]/30 underline-offset-2 hover:decoration-[#1E4E8A]"
                >
                  support@socraticmetric.ai
                </a>
                .
              </p>
            </div>
          ) : visible ? (
            <Cal
              calLink={CALCOM_LINK}
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              config={{
                layout: "month_view",
                theme: "light",
              }}
            />
          ) : (
            <div
              className="flex h-[520px] items-center justify-center text-sm font-medium text-slate-500"
              role="status"
            >
              Loading the booking calendar…
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
