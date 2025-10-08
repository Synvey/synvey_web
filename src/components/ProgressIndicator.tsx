"use client";

import { useState, useEffect } from "react";

interface ProgressIndicatorProps {
  steps: number;
  currentStep: number;
  className?: string;
}

export default function ProgressIndicator({ 
  steps, 
  currentStep, 
  className = "" 
}: ProgressIndicatorProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const percentage = (currentStep / steps) * 100;
    setProgress(percentage);
  }, [currentStep, steps]);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">
          Step {currentStep} of {steps}
        </span>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
        <div
          className="bg-indigo-600 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
