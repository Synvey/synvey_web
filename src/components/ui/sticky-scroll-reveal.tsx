"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref, // Track the scroll position of the section itself
    offset: ["start center", "end center"], // start when section enters viewport, end when it leaves
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map(
      (_, index) => (index * 1.1) / cardLength
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#090c15", // slate-900
    "#090c15", // black
    "#090c15", // neutral-900
  ];
  const linearGradients = useMemo(
    () => [
      "#000000", // cyan-500 to emerald-500
      "#000000", // pink-500 to indigo-500
      "#000000", // orange-500 to yellow-500
    ],
    []
  );

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      ref={ref}
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex min-h-[200vh] justify-center space-x-60 rounded-2xl p-12 sticky-scroll-section"
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  filter: activeCard === index ? "blur(0px)" : "blur(6px)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-4xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  filter: activeCard === index ? "blur(0px)" : "blur(6px)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-xl mt-6 max-w-md text-slate-300 leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-10" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-30 hidden h-120 w-120 overflow-hidden rounded-2xl bg-white lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
