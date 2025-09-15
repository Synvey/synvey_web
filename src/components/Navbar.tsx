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
    label: "Products",
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
    label: "Solutions",
    items: [
      { label: "Overview", href: "/solutions", description: "Foundational technology for digital success." },
      { label: "Solution Pillars", href: "/solutions#pillars", description: "Integration, Analytics, Security & more." },
      { label: "Industries", href: "/solutions#industries", description: "Finance, Retail, Public Sector solutions." },
      { label: "Get Started", href: "/solutions#cta", description: "Ready to transform your platform?" },
    ],
  },
  { label: "Customers", href: "/customers" },
  {
    label: "Resources",
    items: [
      { label: "Docs", href: "/docs" },
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

// ThemeToggle now provided by ModeToggle (shadcn/next-themes)

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
                                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M4 4h16v4H4zM4 10h16v10H4z"/></svg>
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
                          <div className="border-t border-zinc-200 p-3 text-right text-xs dark:border-zinc-800">
                            <Link href={item.label === "Products" ? "/products" : ((item.items[0] && item.items[0].href) || '#')} className="text-zinc-600 underline-offset-2 hover:underline dark:text-zinc-400">
                              View all {item.label.toLowerCase()}
                            </Link>
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
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-3 sm:px-4 lg:px-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-lg font-bold tracking-tight text-foreground animate-on-load animate-slide-in-left">Synvey</Link>
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


