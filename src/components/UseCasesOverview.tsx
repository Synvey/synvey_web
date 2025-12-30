"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { 
  Search, 
  Stethoscope, 
  ShieldCheck, 
  GraduationCap, 
  Settings, 
  Home,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface UseCase {
  title: string;
  description: string;
  content?: React.ReactNode;
}

interface UseCasesOverviewProps {
  useCases: UseCase[];
}

const icons = [
  Search,
  Stethoscope,
  ShieldCheck,
  GraduationCap,
  Settings,
  Home,
];

const SpotlightCard = ({ 
  useCase, 
  index, 
  Icon, 
  className 
}: { 
  useCase: UseCase; 
  index: number; 
  Icon: any; 
  className?: string 
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1] 
      }}
      whileHover={{ 
        scale: 1.05,
        zIndex: 20,
      }}
      onMouseMove={onMouseMove}
      className={cn(
        "group relative rounded-3xl border border-zinc-800 bg-zinc-900/40 overflow-hidden flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-zinc-600/50 hover:shadow-2xl hover:shadow-blue-500/10",
        className
      )}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [xSpring, ySpring],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          ),
        }}
      />

      <div className="p-8 relative z-10 h-full flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-all duration-500">
            <Icon className="w-6 h-6 text-zinc-400 group-hover:text-blue-400" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 text-xl">
            {useCase.title}
          </h3>
          
          <div className="relative overflow-hidden">
            <p className="text-zinc-400 leading-relaxed text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-500 group-hover:text-zinc-300">
              {useCase.description}
            </p>
          </div>
        </div>

        <div className="mt-auto pt-8 flex items-center justify-between">
          <div className="flex items-center text-sm font-medium text-zinc-400 group-hover:text-blue-400 transition-colors">
            View Case Study
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function UseCasesOverview({ useCases }: UseCasesOverviewProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#030712] relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-600/20 blur-[140px] rounded-full" 
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-purple-600/20 blur-[140px] rounded-full" 
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-blue-500 mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-blue-500"></span>
                Industry Solutions
              </h2>
              <TextGenerateEffect
                words="Reinventing Industries Through Solutions"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:pb-2"
          >
            <p className="text-lg text-zinc-400 max-w-md">
              Tailored AI strategies and high-performance systems designed to solve the most complex business challenges across diverse sectors.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = icons[index % icons.length];
            
            return (
              <SpotlightCard 
                key={index}
                useCase={useCase}
                index={index}
                Icon={Icon}
                className="h-full min-h-[320px]"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
