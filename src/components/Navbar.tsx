"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
  NavigationMenuLink,
} from "./ui/navigation-menu";

type MenuItem = {
  label: string;
  href?: string;
  items?: { label: string; href: string; description?: string }[];
};

const NAV_ITEMS: MenuItem[] = [
  {
    label: "Solutions",
    items: [
      {
        label: "Multimodal Vector Search",
        href: "/products/multimodal-vector-search",
        description: "High-performance vector search on large-scale datasets.",
      },
      {
        label: "Enterprise AI Agents",
        href: "/products/custom-agentic-workflows",
        description: "AI agents orchestrating workflows across 50+ enterprise systems (Office 365, Salesforce, SAP, databases).",
      },
      {
        label: "Embedding Model Training",
        href: "/products/embedding-model-training",
        description: "Custom-trained embeddings for domain-specific data.",
      },
      {
        label: "In-House Model Hosting",
        href: "/products/in-house-model-hosting",
        description: "Secure, scalable infrastructure for AI models.",
      },
      {
        label: "Distributed Inference",
        href: "/products/offshoring-inference",
        description: "Global inference infrastructure optimized for performance and compliance.",
      },
    ],
  },
  {
    label: "Use cases",
    items: [
      {
        label: "E-commerce",
        href: "/use-cases/ecommerce-platform",
        description: "AI-powered search and automation that helps customers find products faster and increases sales.",
      },
      {
        label: "Healthcare",
        href: "/use-cases/healthcare-management",
        description: "Intelligent systems that help doctors find patient information instantly and improve care quality.",
      },
      {
        label: "Financial Services",
        href: "/use-cases/financial-services",
        description: "Smart fraud detection and automated compliance that protects customers and reduces costs.",
      },
      {
        label: "Education",
        href: "/use-cases/education-technology",
        description: "Personalized learning experiences that adapt to each student and save teachers time.",
      },
      {
        label: "Manufacturing",
        href: "/use-cases/manufacturing-iot",
        description: "Predictive systems that prevent equipment failures and optimize production efficiency.",
      },
      {
        label: "Real Estate",
        href: "/use-cases/real-estate-portal",
        description: "Smart property matching that connects buyers with their ideal homes faster.",
      },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

// Theme toggle removed

function DesktopNav() {
  return (
    <div className="hidden lg:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {NAV_ITEMS.map((item) => (
            <NavigationMenuItem key={item.label} className="relative">
              {item.items ? (
                <>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <AnimatePresence>
                    <NavigationMenuContent asChild>
                      <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={`overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900 ${
                          item.label === "Company" ? "w-[240px]" : "w-[680px]"
                        }`}
                      >
                        <div className="p-2">
                          <div
                            className={`grid gap-1 ${
                              item.label === "Company"
                                ? "grid-cols-1"
                                : "grid-cols-1 sm:grid-cols-2"
                            }`}
                          >
                            {item.items.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={`group flex items-start rounded-md transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/60 ${
                                  sub.description ? "p-3" : "px-3 py-2"
                                }`}
                              >
                                <span>
                                  <div className="flex items-center gap-2">
                                    <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                      {sub.label}
                                    </div>
                                    {sub.description && (
                                      <span className="rounded-md border border-zinc-200 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
                                        New
                                      </span>
                                    )}
                                  </div>
                                  {sub.description && (
                                    <div className="mt-1 line-clamp-2 text-xs text-zinc-500 dark:text-zinc-400">
                                      {sub.description}
                                    </div>
                                  )}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </NavigationMenuContent>
                  </AnimatePresence>
                </>
              ) : (
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href || "#"}
                    className="px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  );
}

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm">
        <div className="h-full bg-slate-950 shadow-2xl rounded-l-3xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
            <h2 className="text-lg font-semibold tracking-tight text-white">
              Menu
            </h2>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.items ? (
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 text-white/90 hover:bg-white/5 transition-colors">
                        <span className="text-sm font-medium">{item.label}</span>
                        <svg
                          className="h-4 w-4 text-white/40 transition-transform group-open:rotate-180"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </summary>
                      <div className="mt-1 space-y-1 pl-2">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={onClose}
                            className="flex flex-col rounded-lg px-4 py-2.5 hover:bg-white/5 transition-colors group/item"
                          >
                            <span className="text-sm font-medium text-white/80 group-hover/item:text-white">
                              {sub.label}
                            </span>
                            {sub.description && (
                              <span className="mt-0.5 text-xs text-white/40 line-clamp-1">
                                {sub.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      onClick={onClose}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* CTA Button at Bottom */}
          <div className="border-t border-white/5 px-6 py-5">
            <Button
              asChild
              className="w-full bg-white text-slate-900 font-semibold py-3 rounded-xl shadow-lg hover:bg-slate-100 transition-colors"
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-300/30 dark:border-gray-700/30 transition-all duration-200 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-md shadow-zinc-900/40" 
            : "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        }`}
      >
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-3 items-center px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
          {/* Left: Desktop navigation */}
          <div className="hidden lg:flex">
            <DesktopNav />
          </div>

          {/* Left (mobile): empty to keep grid balance */}
          <div className="flex lg:hidden" />

          {/* Center: Logo */}
          <div className="flex items-center justify-center">
            <Link
              href="/"
              className="inline-flex items-center relative mx-auto"
              aria-label="Home"
            >
              {/* Flash backdrop - hidden when scrolled */}
              {!isScrolled && (
                <span className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
                  <span className="block h-22 w-25 rounded-full bg-white/70 blur-[55px] animate-logo-flash" />
                </span>
              )}
              <Image src="/logo.png" alt="Synvey" width={80} height={20} />
            </Link>
          </div>

          {/* Right: CTA / Mobile menu */}
          <div className="flex items-center justify-end gap-2">
            <div className="hidden lg:flex">
              <Button
                asChild
                className="animate-on-load animate-slide-in-right animate-delay-200"
              >
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
            <div className="flex lg:hidden">
              <button
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white ring-1 ring-white/15 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 shadow-sm transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Drawer - rendered outside header to avoid overflow constraints */}
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
