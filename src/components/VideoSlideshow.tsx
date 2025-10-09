"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  "/videos/video1.webm",
  "/videos/video2.webm",
  "/videos/video3.webm",
  "/videos/video4.webm",
];

export default function VideoSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 10000); // 10 s per video
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  return (
    <div className="relative w-full h-full aspect-video overflow-hidden rounded-3xl bg-black/60 shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.video
          key={current}
          src={videos[current]}
          autoPlay
          muted
          playsInline
          preload="auto"
          // object-contain keeps the whole frame visible (letter-box effect)
          className="absolute inset-0 w-full h-full object-contain bg-black/60"
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
}
