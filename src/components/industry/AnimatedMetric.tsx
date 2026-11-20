"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedMetricProps = {
  label: string;
  value: number;
  suffix?: string;
  zeroLabel?: string;
};

export function AnimatedMetric({
  label,
  value,
  suffix = "",
  zeroLabel = "0",
}: AnimatedMetricProps) {
  const metricRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = metricRef.current;
    if (!element) return;

    let hasStarted = false;
    let frameId = 0;
    let observer: IntersectionObserver | undefined;

    const startAnimation = () => {
      if (hasStarted) return;
      hasStarted = true;

      if (
        value === 0 ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        setCount(value);
        return;
      }

      const startTime = performance.now();
      const duration = 900;
      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(value * easedProgress));

        if (progress < 1) {
          frameId = window.requestAnimationFrame(animate);
        }
      };

      frameId = window.requestAnimationFrame(animate);
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer?.disconnect();
          }
        },
        { threshold: 0.4 },
      );
      observer.observe(element);
    } else {
      startAnimation();
    }

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [value]);

  const displayedValue =
    value === 0 ? zeroLabel : `${count.toLocaleString()}${suffix}`;
  const accessibleValue =
    value === 0 ? zeroLabel : `${value.toLocaleString()}${suffix}`;

  return (
    <div>
      <dt className="text-xs leading-relaxed text-slate-500">{label}</dt>
      <dd className="mt-1 text-2xl font-semibold leading-tight tracking-tight text-[#1E4E8A] sm:text-3xl">
        <span ref={metricRef} aria-hidden="true">
          {displayedValue}
        </span>
        <span className="sr-only">{accessibleValue}</span>
      </dd>
    </div>
  );
}
