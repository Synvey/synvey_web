"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="animate-scale-in animate-delay-200">
            <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
          </div>
        </div>

        {/* Company Name */}
        <div className="animate-fade-in-up animate-delay-300">
          <h1 className="text-2xl font-bold text-foreground mb-2">Synvey</h1>
          <p className="text-zinc-400">Accelerating Innovation</p>
        </div>

        {/* Loading Bar */}
        <div className="mt-8 animate-fade-in animate-delay-500">
          <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
