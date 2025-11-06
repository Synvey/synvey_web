import Link from "next/link";
import Image from "next/image";

const solutionLinks = [
  { label: "AI Integration", href: "/products/ai-integration" },
  { label: "Desktop Applications", href: "/products/desktop-applications" },
  { label: "Web Applications", href: "/products/web-applications" },
  { label: "Mobile Applications", href: "/products/mobile-applications" },
  { label: "UI/UX Services", href: "/products/ui-ux-services" },
  { label: "Cloud & DevOps", href: "/products/cloud-devops" },
];

const useCaseLinks = [
  { label: "E-commerce Platform", href: "/use-cases/ecommerce-platform" },
  { label: "Healthcare Management", href: "/use-cases/healthcare-management" },
  { label: "Financial Services", href: "/use-cases/financial-services" },
  { label: "Education Technology", href: "/use-cases/education-technology" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "News & Updates", href: "/news" },
  { label: "Partnerships", href: "/partnerships" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Security", href: "/security" },
  { label: "Compliance", href: "/compliance" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900/50 text-foreground w-full max-w-full overflow-x-hidden">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Company Info & Social */}
          <div className="lg:col-span-2 space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col items-center lg:items-start w-full">
              <Link
                href="/"
                className="inline-flex items-center hover:opacity-80 transition-opacity mx-auto lg:mx-0"
                aria-label="Home"
              >
                <Image src="/logo.png" alt="Synvey" width={96} height={32} />
              </Link>
              <p className="mt-4 text-sm text-zinc-400 leading-relaxed max-w-sm text-center lg:text-left mx-auto lg:mx-0">
                Building real-world solutions across industries. From e-commerce
                to healthcare, we help businesses transform their digital
                presence with proven technology.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 flex flex-col items-center lg:items-start w-full">
              <h4 className="text-sm font-semibold text-foreground text-center lg:text-left">
                Get in Touch
              </h4>
              <div className="space-y-2 text-sm text-zinc-400 text-center lg:text-left">
                <p>
                  📧{" "}
                  <a
                    href="mailto:hello@synvey.com"
                    className="hover:text-white transition-colors"
                  >
                    hello@synvey.com
                  </a>
                </p>
                <p>
                  📞{" "}
                  <a
                    href="tel:+15551234567"
                    className="hover:text-white transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </p>
                <p>
                  📍{" "}
                  <a
                    href="https://maps.google.com/?q=San%20Francisco%2C%20CA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    San Francisco, CA
                  </a>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center lg:items-start w-full">
              <h4 className="text-sm font-semibold text-foreground mb-3 text-center lg:text-left">
                Follow Us
              </h4>
              <div className="flex gap-3 justify-center lg:justify-start">
                <a
                  aria-label="LinkedIn"
                  href="https://linkedin.com/company/synvey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white hover:border-zinc-600"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.2 2.4-2.4 5-2.4C21.4 7.8 24 10 24 14.3V24h-5v-8.6c0-2.1-.8-3.6-2.8-3.6-1.5 0-2.3 1-2.7 2 .1.4.1.9.1 1.5V24H8V8z" />
                  </svg>
                </a>
                <a
                  aria-label="Twitter"
                  href="https://twitter.com/synvey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white hover:border-zinc-600"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M24 4.6a9.8 9.8 0 0 1-2.8.8 4.8 4.8 0 0 0 2.1-2.7 9.6 9.6 0 0 1-3 1.2A4.8 4.8 0 0 0 16.6 3c-2.7 0-4.8 2.2-4.8 4.8 0 .4 0 .8.1 1.2C7.8 8.8 4.1 6.9 1.7 3.9c-.4.7-.6 1.5-.6 2.4 0 1.6.8 3 2 3.8a4.8 4.8 0 0 1-2.2-.6v.1c0 2.3 1.7 4.2 3.9 4.7a4.9 4.9 0 0 1-2.2.1c.6 1.9 2.4 3.3 4.5 3.3A9.7 9.7 0 0 1 0 19.5a13.7 13.7 0 0 0 7.4 2.2c8.9 0 13.8-7.5 13.8-13.9v-.6A9.7 9.7 0 0 0 24 4.6z" />
                  </svg>
                </a>
                <a
                  aria-label="GitHub"
                  href="https://github.com/synvey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white hover:border-zinc-600"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.9 3.2 9 7.6 10.4.6.1.9-.3.9-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2 .8 2 1.6.9 3.1.7 3.9.5.1-.8.4-1.3.7-1.6-2.5-.3-5.1-1.2-5.1-5.6 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .9.9-.3 1.9-.5 2.9-.5s2 .2 2.9.5c2.1-1.2 3-.9 3-.9.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.5-2.6 5.3-5.1 5.6.4.3.7.9.7 1.9v2.8c0 .4.3.8.9.6 4.4-1.5 7.6-5.6 7.6-10.4C23.1 5.3 18.3.5 12 .5z" />
                  </svg>
                </a>
                <a
                  aria-label="YouTube"
                  href="https://youtube.com/@synvey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white hover:border-zinc-600"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-sm font-semibold text-foreground mb-4 text-center lg:text-left">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400 text-center lg:text-left">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-sm font-semibold text-foreground mb-4 text-center lg:text-left">
              Use Cases
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400 text-center lg:text-left">
              {useCaseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Company */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-sm font-semibold text-foreground mb-4 text-center lg:text-left">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400 text-center lg:text-left">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-[90rem] px-3 py-6 sm:px-4 lg:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-col items-center gap-4 text-xs text-zinc-400 sm:flex-row sm:items-center">
              <p className="text-center sm:text-left">© {year} Synvey. All rights reserved.</p>
              <div className="flex flex-wrap gap-4 justify-center sm:gap-6 sm:justify-start">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 text-xs text-zinc-400 sm:flex-row sm:items-center">
              <span className="text-center">Made with ❤️ in San Francisco</span>
              <div className="flex items-center gap-2 justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>All systems operational</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span>🏆 Trusted by 500+ companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
