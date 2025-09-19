"use client";

import { useState } from "react";

type CapabilitiesCollapsibleProps = {
  children: React.ReactNode;
};

export default function CapabilitiesCollapsible({ children }: CapabilitiesCollapsibleProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-6">
      {!expanded && (
        <div className="flex justify-center">
          <button
            aria-expanded={expanded}
            aria-controls="more-capabilities"
            onClick={() => setExpanded(true)}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/60 bg-blue-600 px-5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 hover:border-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
            Show more
          </button>
        </div>
      )}
      <div id="more-capabilities" className={!expanded ? "hidden" : "block"}>
        {children}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setExpanded(false)}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/60 bg-blue-600 px-5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 hover:border-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 15l-6-6-6 6" />
            </svg>
            Show less
          </button>
        </div>
      </div>
    </div>
  );
}


