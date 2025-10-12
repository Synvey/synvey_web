"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

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
          <TextGenerateEffect
            words="Reinventing Industries Through Solutions"
            className="text-[48px] font-bold w-full text-center text-white leading-tight mb-6"
          />
          <TextGenerateEffect
            words="Tailored solutions for every industry and business challenge"
            className="mt-3 text-xl text-center text-zinc-400 mx-auto"
          />
        </div>

        <StickyScroll content={useCases} contentClassName="rounded-2xl" />
      </div>
    </section>
  );
}
