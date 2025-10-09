"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

interface UseCase {
  title: string;
  description: string;
  content: React.ReactNode;
}

interface UseCasesOverviewProps {
  useCases: UseCase[];
}

export default function UseCasesOverview({ useCases }: UseCasesOverviewProps) {
  return (
    <section className="py-20 sm:py-24 bg-zinc-900/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl 2xl:max-w-[1400px]">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Industry-Specific Solutions
          </h2>
          <p className="mt-6 text-xl text-zinc-400 max-w-3xl mx-auto">
            Tailored solutions for every industry and business challenge
          </p>
        </div>
        
        <StickyScroll 
          content={useCases}
          contentClassName="rounded-2xl"
        />
      </div>
    </section>
  );
}
