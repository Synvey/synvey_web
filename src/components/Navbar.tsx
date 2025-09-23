"use client";

import { useEffect, useState } from "react";
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
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./ui/sheet";
import { ModeToggle } from "./../components/ModeToggle";

type MenuItem = {
  label: string;
  href?: string;
  items?: { label: string; href: string; description?: string }[];
};

const NAV_ITEMS: MenuItem[] = [
  {
    label: "Solutions",
    items: [
      { label: "Overview", href: "/products", description: "Complete set of tools to accelerate innovation." },
      { label: "AI Integration", href: "/products/ai-integration", description: "Harness AI to build intelligent applications." },
      { label: "Desktop Applications", href: "/products/desktop-applications", description: "Create powerful native desktop apps." },
      { label: "Web Applications", href: "/products/web-applications", description: "Build scalable responsive web apps." },
      { label: "Mobile Applications", href: "/products/mobile-applications", description: "Develop engaging mobile experiences." },
      { label: "UI/UX Services", href: "/products/ui-ux-services", description: "Design intuitive user experiences." },
      { label: "Cloud & DevOps", href: "/products/cloud-devops", description: "Streamline deployment and operations." },
    ],
  },
  {
    label: "Use cases",
    items: [
      { label: "Overview", href: "/use-cases", description: "Real-world applications and success stories." },
      { label: "E-commerce Platform", href: "/use-cases/ecommerce-platform", description: "Build scalable online stores with AI-powered features." },
      { label: "Healthcare Management", href: "/use-cases/healthcare-management", description: "Secure patient data and streamline medical workflows." },
      { label: "Financial Services", href: "/use-cases/financial-services", description: "Compliant fintech solutions with real-time analytics." },
      { label: "Education Technology", href: "/use-cases/education-technology", description: "Interactive learning platforms and student management." },
      { label: "Manufacturing IoT", href: "/use-cases/manufacturing-iot", description: "Smart factory solutions and predictive maintenance." },
      { label: "Real Estate Portal", href: "/use-cases/real-estate-portal", description: "Property listings with virtual tours and analytics." },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Docs", href: "/docs" },
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

// ThemeToggle now provided by ModeToggle (shadcn/next-themes)

function getSubmenuIcon(label: string) {
  switch (label) {
    case "Overview":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M4 4h16v4H4zM4 10h16v10H4z"/>
        </svg>
      );
    case "AI Integration":
    case "AI Integration":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case "Desktop Applications":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "Web Applications":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      );
    case "Mobile Applications":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case "UI/UX Services":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      );
    case "Cloud & DevOps":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      );
    case "Solution Pillars":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M4 3h4v18H4zM10 8h4v13h-4zM16 13h4v8h-4z" />
        </svg>
      );
    case "Industries":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M3 13l7-5 7 5V5l7 5v9H3z" />
        </svg>
      );
    case "Get Started":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4.5L5 20l2.5-7L2 9h7z" />
        </svg>
      );
    case "Docs":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M6 2h9l5 5v15H6zM15 2v5h5" />
        </svg>
      );
    case "Blog":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z" />
        </svg>
      );
    case "Guides":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M4 5h8a4 4 0 014 4v10H8a4 4 0 00-4 4V5zM12 5h4v10h-4z" />
        </svg>
      );
    case "About":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9a7 7 0 0114 0H5z" />
        </svg>
      );
    case "Contact":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M2 4h20v12H2zM4 20l6-4h4l6 4" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <circle cx="12" cy="12" r="5" />
        </svg>
      );
  }
}

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
                  <NavigationMenuContent>
                    <div className="w-[680px] overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                      <div className="grid grid-cols-5">
                        <div className="col-span-2 hidden border-r border-zinc-200 p-5 dark:border-zinc-800 lg:block">
                          <div className="rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-50 p-4 dark:from-zinc-800 dark:to-zinc-900">
                            <div className="flex items-center gap-3">
                              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
                                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4.5L5 20l2.5-7L2 9h7z"/></svg>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{item.label}</div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">Explore our {item.label.toLowerCase()} offerings</div>
                              </div>
                            </div>
                            <div className="mt-4 rounded-md border border-dashed border-zinc-200 p-3 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                              Powerful tools to build, scale, and analyze your apps with ease.
                            </div>
                          </div>
                        </div>
                        <div className="col-span-5 lg:col-span-3">
                          <div className="grid grid-cols-1 gap-1 p-2 sm:grid-cols-2">
                            {item.items.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className="group flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/60"
                              >
                                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 transition-colors group-hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-300">
                                  {getSubmenuIcon(sub.label)}
                                </span>
                                <span>
                                  <div className="flex items-center gap-2">
                                    <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{sub.label}</div>
                                    <span className="rounded-md border border-zinc-200 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">New</span>
                                  </div>
                                  {sub.description && (
                                    <div className="mt-1 line-clamp-2 text-xs text-zinc-500 dark:text-zinc-400">{sub.description}</div>
                                  )}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink asChild>
                  <Link href={item.href || "#"} className="px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
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

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Sheet open={open} onOpenChange={(v) => (!v ? onClose() : void 0)}>
      <SheetContent side="right" className="p-0">
        <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800">
          <span className="text-base font-semibold">Menu</span>
          <SheetClose asChild>
            <button aria-label="Close menu" className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
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
                      <svg className="h-4 w-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </summary>
                    <div className="mt-1 space-y-1 pl-3">
                      {item.items.map((sub) => (
                        <Link key={sub.href} href={sub.href} onClick={onClose} className="block rounded-md px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link href={item.href || "#"} onClick={onClose} className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <ModeToggle />
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
    <header className={`sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${isScrolled ? "shadow-md shadow-zinc-900/40" : "shadow-none"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center animate-on-load animate-slide-in-left" aria-label="Home">
            <img src="/logo.png" alt="Synvey" className="h-5 w-auto" />
          </Link>
          <DesktopNav />
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <ModeToggle />
          <Button asChild className="animate-on-load animate-slide-in-right animate-delay-200">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ModeToggle />
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}


