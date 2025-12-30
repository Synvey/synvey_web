"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const isFeatured = index === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 flex flex-col justify-between transition-all duration-500 hover:border-blue-500/30 hover:bg-zinc-900/60 group",
        isFeatured ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-zinc-900/80 to-blue-900/10" : ""
      )}
    >
      <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote className={cn("text-blue-500", isFeatured ? "w-16 h-16" : "w-10 h-10")} />
      </div>

      <div className="relative z-10">
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
          ))}
        </div>
        
        <p className={cn(
          "text-zinc-300 leading-relaxed mb-8 font-medium",
          isFeatured ? "text-xl md:text-2xl lg:text-3xl" : "text-base"
        )}>
          "{testimonial.quote}"
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg border-2 border-zinc-800 group-hover:border-blue-500/50 transition-colors">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">{testimonial.name}</h4>
          </div>
        </div>
        
        {isFeatured && (
          <div className="hidden sm:block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
            Featured Story
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] -left-[10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-blue-500 mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-blue-500"></span>
              Testimonials
              <span className="w-8 h-[1px] bg-blue-500"></span>
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              What our customer says
            </h3>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Trusted by industry leaders to deliver exceptional digital experiences and innovative AI solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Button asChild variant="outline" size="lg" className="rounded-full border-zinc-800 hover:bg-zinc-900 text-zinc-300 hover:text-white group">
            <Link href="/reviews" className="flex items-center gap-2">
              Read all customer stories
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
