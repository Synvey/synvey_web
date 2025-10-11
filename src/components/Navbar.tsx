"use client";

import { useEffect, useState } from "react";
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
import { Sheet, SheetContent, SheetClose } from "./ui/sheet";

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
        label: "AI Integration",
        href: "/products/ai-integration",
        description: "Harness AI to build intelligent applications.",
      },
      {
        label: "Desktop Applications",
        href: "/products/desktop-applications",
        description: "Create powerful native desktop apps.",
      },
      {
        label: "Web Applications",
        href: "/products/web-applications",
        description: "Build scalable responsive web apps.",
      },
      {
        label: "Mobile Applications",
        href: "/products/mobile-applications",
        description: "Develop engaging mobile experiences.",
      },
      {
        label: "UI/UX Services",
        href: "/products/ui-ux-services",
        description: "Design intuitive user experiences.",
      },
      {
        label: "Cloud & DevOps",
        href: "/products/cloud-devops",
        description: "Streamline deployment and operations.",
      },
    ],
  },
  {
    label: "Use cases",
    items: [
      {
        label: "E-commerce Platform",
        href: "/use-cases/ecommerce-platform",
        description: "Build scalable online stores with AI-powered features.",
      },
      {
        label: "Healthcare Management",
        href: "/use-cases/healthcare-management",
        description: "Secure patient data and streamline medical workflows.",
      },
      {
        label: "Financial Services",
        href: "/use-cases/financial-services",
        description: "Compliant fintech solutions with real-time analytics.",
      },
      {
        label: "Education Technology",
        href: "/use-cases/education-technology",
        description: "Interactive learning platforms and student management.",
      },
      {
        label: "Manufacturing IoT",
        href: "/use-cases/manufacturing-iot",
        description: "Smart factory solutions and predictive maintenance.",
      },
      {
        label: "Real Estate Portal",
        href: "/use-cases/real-estate-portal",
        description: "Property listings with virtual tours and analytics.",
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        label: "Documentation",
        href: "/docs",
        description: "Complete API reference and guides.",
      },
      {
        label: "Blog",
        href: "/blog",
        description: "Latest insights and industry trends.",
      },
      {
        label: "Guides",
        href: "/guides",
        description: "Step-by-step tutorials and best practices.",
      },
      {
        label: "Case Studies",
        href: "/case-studies",
        description: "Real-world success stories and implementations.",
      },
      {
        label: "Webinars",
        href: "/webinars",
        description: "Live sessions and recorded presentations.",
      },
      {
        label: "Community",
        href: "/community",
        description: "Connect with developers and get support.",
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
  return (
    <Sheet open={open} onOpenChange={(v) => (!v ? onClose() : void 0)}>
      <SheetContent side="right" className="p-0">
        <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800">
          <span className="text-base font-semibold">Menu</span>
          <SheetClose asChild>
            <button
              aria-label="Close menu"
              className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </SheetClose>
        </div>
        <div className="overflow-y-auto p-4">
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.items ? (
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800">
                      <span>{item.label}</span>
                      <svg
                        className="h-4 w-4 transition-transform group-open:rotate-180"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </summary>
                    <div className="mt-1 space-y-1 pl-3">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={onClose}
                          className="block rounded-md px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href || "#"}
                    onClick={onClose}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Button asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
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
    <header
      className={`sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-gray-300/30 dark:border-gray-700/30" ${
        isScrolled ? "shadow-md shadow-zinc-900/40" : "shadow-none"
      }`}
    >
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-3 items-center px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
        {/* Left: Desktop navigation */}
        <div className="hidden lg:flex">
          <DesktopNav />
        </div>

        {/* Center: Logo */}
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center relative"
            aria-label="Home"
          >
            {/* Flash backdrop - hidden when scrolled */}
            {!isScrolled && (
              <span className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
                <span className="block h-22 w-25 rounded-full bg-white/70 blur-[55px] animate-logo-flash" />
              </span>
            )}
            <img src="/logo.png" alt="Synvey" className="h-5 w-auto" />
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
              className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
