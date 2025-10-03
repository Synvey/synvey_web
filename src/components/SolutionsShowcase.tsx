"use client";

import { useMemo, useRef, useState } from "react";

type Solution = {
  id: string;
  title: string;
  blurb: string;
  ctaHref: string;
  icon?: string;
  mediaSrc?: string;
  mediaAlt?: string;
};

export default function SolutionsShowcase({ solutions }: { solutions: Solution[] }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<string>(solutions[0]?.id || "");

  const ids = useMemo(() => solutions.map((s) => s.id), [solutions]);

  const onTabClick = (id: string) => setActiveId(id);

  return (
    <div ref={sectionRef} className="bg-white text-[#0d0f28] min-h-[100vh] flex items-start sm:items-center">
      <div className="w-full mx-auto max-w-7xl xl:max-w-[1280px] 2xl:max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-10">Our Solutions</h2>

        {/* Tabs */}
        <div className="rounded-2xl bg-zinc-100 p-4 flex gap-4 whitespace-nowrap justify-center mb-12">
          {solutions.map((s) => {
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                onClick={() => onTabClick(s.id)}
                className={`shrink-0 rounded-xl px-6 py-4 text-base font-medium transition-colors ${
                  isActive ? "bg-[#0d0f28] text-white" : "bg-white text-[#0d0f28] hover:bg-zinc-200"
                }`}
                aria-selected={isActive}
                role="tab"
              >
                {s.title}
              </button>
            );
          })}
        </div>

        {/* Single active panel */}
        <div className="relative" aria-live="polite">
          {solutions.map((s) => {
            const isActive = s.id === activeId;
            return (
              <article
                key={s.id}
                aria-hidden={!isActive}
                className={`rounded-3xl bg-white ring-1 ring-zinc-200 shadow-md overflow-hidden transition-opacity duration-300 ${
                  isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none absolute inset-0"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 min-h-[560px]">
                  <div className="p-14 sm:p-16 lg:p-20">
                    <div className="text-xs font-semibold text-zinc-500 mb-3">{s.title.toUpperCase()}</div>
                    <h3 className="text-4xl font-semibold mb-6 text-[#0d0f28]">{s.title}</h3>
                    <p className="text-zinc-600 leading-relaxed mb-10 text-lg">{s.blurb}</p>
                    <a
                      href={s.ctaHref}
                      className="inline-flex items-center rounded-lg bg-[#0d0f28] text-white px-7 py-3.5 text-base font-medium hover:bg-[#0a0f1f]"
                    >
                      Explore {s.title}
                      <span className="ml-2" aria-hidden>→</span>
                    </a>
                  </div>
                  <div className="relative bg-zinc-100">
                    {s.mediaSrc ? (
                      <img
                        src={s.mediaSrc}
                        alt={s.mediaAlt || s.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-zinc-400">Media</div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}


