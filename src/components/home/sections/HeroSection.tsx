"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

import { Cover } from "@/components/ui/cover";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { youtubeEmbedSrc } from "@/lib/youtubeEmbed";

export function HeroSection() {
  const YOUTUBE_VIDEO_ID = "B1LGkF_4vHA";
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden pt-28 pb-14 selection:bg-[#E79636]/20 selection:text-[#163460] md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
      {/* Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_55%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div
            className="flex w-full flex-col items-center text-center"
          >
            <div
              className="animate-text-enter mb-6 inline-flex items-center gap-2 rounded-full border border-[#1E4E8A]/20 bg-white/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#1E4E8A] shadow-sm backdrop-blur-md sm:text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 hidden animate-ping rounded-full bg-[#E79636]/70 lg:block" />
                <span className="relative h-2 w-2 rounded-full bg-[#E79636]" />
              </span>
              <span>
                <span className="font-bold">#1</span> in Live Cognitive Verification
              </span>
            </div>

            <h1
              className="animate-text-enter animate-text-enter-delay-1 max-w-4xl font-serif text-[2.35rem] font-bold leading-[1.08] tracking-tight text-[#163460] sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[1.04]"
            >
              AI-Moderated Oral
              <br className="hidden sm:block" /> Assessment Platform
            </h1>

            <div
              className="animate-text-enter animate-text-enter-delay-2 mt-5 max-w-2xl text-lg font-medium leading-relaxed text-slate-600 sm:mt-6 sm:text-xl md:text-2xl"
            >
              Where True Understanding Is{" "}
              <Cover className="mt-1">Spoken, Not Just Submitted.</Cover>
            </div>

            <div
              className="mt-8 flex w-full flex-col items-center justify-center gap-3.5 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4"
            >
              <Link
                href={REQUEST_DEMO_BOOKING_HREF}
                className="group inline-flex h-14 w-full min-w-[220px] items-center justify-center gap-2 rounded-full bg-[#1E4E8A] px-8 text-base font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#163460] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E79636] focus-visible:ring-offset-2 active:scale-[0.98] sm:w-auto"
              >
                Book a demo
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex h-14 w-full min-w-[180px] items-center justify-center gap-2 rounded-full border border-slate-200/90 bg-white/80 px-8 text-base font-bold text-[#163460] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md active:scale-95 sm:w-auto"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Demo video */}
          <div
            className="relative mt-12 w-full max-w-4xl md:mt-16"
          >

            <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/40 p-1.5 shadow-[0_24px_56px_-28px_rgba(22,52,96,0.18)] backdrop-blur-sm sm:rounded-3xl sm:p-2">
              <div className="relative isolate aspect-video overflow-hidden rounded-xl bg-[#163460] sm:rounded-2xl">
                {playing ? (
                  <iframe
                    src={youtubeEmbedSrc(YOUTUBE_VIDEO_ID)}
                    title="Socratic Metric — Evaluate Live demo on YouTube"
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="group absolute inset-0 z-10 flex cursor-pointer items-center justify-center border-0 bg-black p-0 text-left outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-[#1E4E8A]"
                    aria-label="Play Socratic Metric demo video inline"
                  >
                    <Image
                      src="/img/homepage/whatissmai.png"
                      alt="Socratic Metric AI oral assessment platform — demo video preview"
                      fill
                      priority
                      sizes="(max-width: 896px) 100vw, 896px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <span
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#163460]/55 via-[#163460]/10 to-transparent transition-opacity duration-300 group-hover:from-[#163460]/65"
                      aria-hidden
                    />

                    <span className="relative flex flex-col items-center gap-3">
                      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1E4E8A] text-white shadow-lg shadow-[#163460]/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#2663A5] group-hover:shadow-xl sm:h-16 sm:w-16">
                        <span
                          className="absolute inset-0 hidden animate-ping rounded-full bg-[#1E4E8A] opacity-25 lg:block"
                          aria-hidden
                        />
                        <Play
                          className="relative ml-0.5 h-6 w-6 fill-current sm:h-7 sm:w-7"
                          aria-hidden
                        />
                      </span>
                      <span className="rounded-full border border-white/20 bg-black/35 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md sm:text-xs">
                        Watch demo
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
