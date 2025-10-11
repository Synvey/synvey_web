"use client";

import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

type Solution = {
  id: string;
  title: string;
  blurb: string;
  ctaHref: string;
  icon?: string;
  mediaSrc?: string;
  mediaAlt?: string;
};

const INTERVAL_MS = 5000; // Auto-cycle interval - same for all tabs

export default function SolutionsShowcase({
  solutions,
}: {
  solutions: Solution[];
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [activeId, setActiveId] = useState<string>(solutions[0]?.id || "");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [cycleKey, setCycleKey] = useState(0); // Key to force re-render of animation

  const ids = useMemo(() => solutions.map((s) => s.id), [solutions]);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Auto-cycling logic
  const stopCycling = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startCycling = useCallback(() => {
    stopCycling(); // ensure old timer cleared first
    if (prefersReducedMotion || solutions.length <= 1) return;

    setCycleKey((prev) => prev + 1); // restart animation key

    intervalRef.current = setInterval(() => {
      setActiveId((prevId) => {
        const currentIndex = ids.indexOf(prevId);
        const nextIndex = (currentIndex + 1) % ids.length;
        return ids[nextIndex];
      });
      setCycleKey((prev) => prev + 1);
    }, INTERVAL_MS);
  }, [ids, prefersReducedMotion, solutions.length, stopCycling]);

  // Start auto-cycling on mount
  useEffect(() => {
    if (!prefersReducedMotion) {
      startCycling();
      return () => {
        stopCycling();
      };
    }
  }, [startCycling, stopCycling, prefersReducedMotion]);

  const onTabClick = (id: string) => {
    setActiveId(id);
    stopCycling(); // stop old timer
    startCycling(); // start a fresh one (reset interval)
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      const currentIndex = ids.indexOf(activeId);
      let nextIndex;

      if (e.key === "ArrowLeft") {
        nextIndex = currentIndex === 0 ? ids.length - 1 : currentIndex - 1;
      } else {
        nextIndex = (currentIndex + 1) % ids.length;
      }

      setActiveId(ids[nextIndex]);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="bg-background text-foreground min-h-[100vh] flex items-start sm:items-center relative"
    >
      <div className="w-full mx-auto max-w-7xl xl:max-w-[1280px] 2xl:max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <TextGenerateEffect
          words="Revolutionizing the World with Our Solutions."
          className="text-[48px] font-bold w-full text-left text-white  leading-tight mb-12"
        />

        {/* Tabs */}
        <div
          ref={tabsRef}
          className="rounded-2xl bg-{slate-800/40} ring-1 ring-slate-600/40 p-4 flex gap-4 whitespace-nowrap justify-center mb-12 overflow-x-auto sm:overflow-x-visible scrollbar-hide backdrop-blur-sm"
          onKeyDown={handleKeyDown}
          role="tablist"
          aria-label="Solution categories"
        >
          {solutions.map((s, index) => {
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                onClick={() => onTabClick(s.id)}
                className={`shrink-0 rounded-xl px-6 py-4 text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black transform scale-105 shadow-lg shadow-blue-500/25"
                    : "bg-{slate-800/40} text-white hover:bg-slate-600/80 hover:text-white hover:scale-102"
                } ${prefersReducedMotion ? "transform-none" : ""}`}
                aria-selected={isActive}
                aria-controls={`panel-${s.id}`}
                tabIndex={isActive ? 0 : -1}
                role="tab"
              >
                {s.title}
              </button>
            );
          })}
        </div>

        {/* Single active panel */}
        <div ref={panelRef} className="relative" aria-live="polite">
          {solutions.map((s) => {
            const isActive = s.id === activeId;
            return (
              <article
                key={s.id}
                id={`panel-${s.id}`}
                aria-hidden={!isActive}
                role="tabpanel"
                aria-labelledby={`tab-${s.id}`}
                className={`rounded-3xl bg-{slate-800/40} ring-1 ring-slate-600/40 shadow-lg backdrop-blur-sm overflow-hidden transition-opacity duration-300 ${
                  isActive
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none absolute inset-0"
                } ${prefersReducedMotion ? "transition-none" : ""}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 min-h-[560px]">
                  <div className="p-14 sm:p-16 lg:p-20">
                    {/* <div className="text-xs font-semibold text-slate-400 mb-3">
                      {s.title.toUpperCase()}
                    </div> */}
                    <h3 className="text-4xl font-semibold mb-6 text-white">
                      {s.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-10 text-lg">
                      {s.blurb}
                    </p>
                    <a
                      href={s.ctaHref}
                      className={`inline-flex items-center rounded-lg bg-white text-black px-7 py-3.5 text-base font-medium hover:white transition-all shadow-lg shadow-blue-500/25 ${
                        prefersReducedMotion ? "" : "hover:scale-105"
                      }`}
                    >
                      Explore {s.title}
                      <span className="ml-2" aria-hidden>
                        →
                      </span>
                    </a>
                  </div>
                  <div className="relative bg-black">
                    {s.mediaSrc ? (
                      <video
                        key={s.id} // forces reload when activeId changes
                        src={s.mediaSrc}
                        ref={(el) => {
                          if (el) {
                            if (isActive) {
                              el.currentTime = 0;
                              el.play().catch(() => {});
                            } else {
                              el.pause();
                            }
                          }
                        }}
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                        Media
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <div className="flex gap-2">
            {solutions.map((s, index) => (
              <button
                key={`indicator-${s.id}`}
                onClick={() => onTabClick(s.id)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  s.id === activeId
                    ? "bg-white scale-125 shadow-lg shadow-blue-500/50"
                    : "bg-slate-600 hover:bg-slate-400"
                } ${prefersReducedMotion ? "transform-none" : ""}`}
                aria-label={`Go to ${s.title}`}
              >
                {/* Cycling progress ring for active tab */}
                {s.id === activeId && !prefersReducedMotion && (
                  <div
                    key={`progress-${cycleKey}`}
                    className="absolute inset-0 rounded-full border-5 border-blue-500/30 border-t-black animate-progress-ring"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Status indicator */}
          {/* <div className="text-xs text-slate-400 ml-2">
            {prefersReducedMotion ? (
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Manual
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Auto
              </span>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
