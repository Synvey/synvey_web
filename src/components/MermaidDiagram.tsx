"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { motion } from "framer-motion";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export default function MermaidDiagram({ chart, className = "" }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "dark",
      themeVariables: {
        primaryColor: "#6366f1",
        primaryTextColor: "#e4e4e7",
        primaryBorderColor: "#4f46e5",
        lineColor: "#6366f1",
        secondaryColor: "#3b82f6",
        tertiaryColor: "#8b5cf6",
        background: "#18181b",
        mainBkg: "#27272a",
        secondBkg: "#3f3f46",
        tertiaryBkg: "#52525b",
        textColor: "#e4e4e7",
        fontSize: "14px",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: "basis",
      },
    });

    const renderDiagram = async () => {
      try {
        const { svg } = await mermaid.render(`mermaid-${Date.now()}`, chart);
        setSvg(svg);
      } catch (error) {
        console.error("Error rendering Mermaid diagram:", error);
      }
    };

    renderDiagram();
  }, [chart]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex items-center justify-center overflow-x-auto ${className}`}
    >
      <div
        ref={ref}
        className="mermaid-container w-full flex items-center justify-center p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </motion.div>
  );
}

