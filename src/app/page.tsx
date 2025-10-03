import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import SolutionsShowcase from "@/components/SolutionsShowcase";

export default function HomePage() {
  // Brand-style logos; use placeholders available in /public and fallbacks with initials
  const brandTicker = [
    { src: "/Open.png", name: "Open AI" },
    { src: "/Open.png", name: "Open AI" },

  ];
  const useCases = [
    {
      slug: "ecommerce-platform",
      title: "E-commerce Platform",
      description: "Build scalable online stores with AI-powered features",
      icon: "🛒",
      features: ["AI-powered recommendations", "Real-time inventory", "Secure payments", "Mobile optimization"],
    },
    {
      slug: "healthcare-management",
      title: "Healthcare Management",
      description: "Secure patient data and streamline medical workflows",
      icon: "🏥",
      features: ["HIPAA compliance", "Patient portals", "Appointment scheduling", "Medical records"],
    },
    {
      slug: "financial-services",
      title: "Financial Services",
      description: "Compliant fintech solutions with real-time analytics",
      icon: "💳",
      features: ["PCI compliance", "Real-time transactions", "Fraud detection", "Risk management"],
    },
    {
      slug: "education-technology",
      title: "Education Technology",
      description: "Interactive learning platforms and student management",
      icon: "🎓",
      features: ["Learning management", "Student tracking", "Virtual classrooms", "Assessment tools"],
    },
    {
      slug: "manufacturing-iot",
      title: "Manufacturing IoT",
      description: "Smart factory solutions and predictive maintenance",
      icon: "🏭",
      features: ["IoT sensors", "Predictive analytics", "Quality control", "Supply chain"],
    },
    {
      slug: "real-estate-portal",
      title: "Real Estate Portal",
      description: "Property listings with virtual tours and analytics",
      icon: "🏠",
      features: ["Virtual tours", "Property search", "Market analytics", "Lead management"],
    },
  ];
  const solutions = [
    {
      slug: "ai-integration",
      title: "AI Integration",
      description: "Harness AI to build intelligent applications",
      icon: "🤖",
      features: ["ML models", "NLP", "Predictive analytics", "Automation"],
    },
    {
      slug: "desktop-applications",
      title: "Desktop Applications",
      description: "Create powerful native desktop apps",
      icon: "🖥️",
      features: ["Cross-platform", "Native performance", "Modern UI", "Security"],
    },
    {
      slug: "web-applications",
      title: "Web Applications",
      description: "Build scalable responsive web apps",
      icon: "🕸️",
      features: ["Responsive", "Performance", "SEO ready", "PWA"],
    },
    {
      slug: "mobile-applications",
      title: "Mobile Applications",
      description: "Develop engaging mobile experiences",
      icon: "📱",
      features: ["Native iOS/Android", "Cross-platform", "Offline", "Push notifications"],
    },
    {
      slug: "ui-ux-services",
      title: "UI/UX Services",
      description: "Design intuitive user experiences",
      icon: "🎨",
      features: ["Research", "Prototyping", "Visual design", "Usability testing"],
    },
    {
      slug: "cloud-devops",
      title: "Cloud & DevOps",
      description: "Streamline deployment and operations",
      icon: "☁️",
      features: ["CI/CD", "IaC", "Kubernetes", "Monitoring"],
    },
  ];
  const solutionMediaBySlug: Record<string, { src: string; alt?: string }> = {
    "ai-integration": { src: "/ai-intergration.jpg", alt: "AI Integration" },
    "desktop-applications": { src: "", alt: "Desktop Applications" },
    "web-applications": { src: "", alt: "Web Applications" },
    "mobile-applications": { src: "", alt: "Mobile Applications" },
    "ui-ux-services": { src: "", alt: "UI/UX Services" },
    "cloud-devops": { src: "", alt: "Cloud & DevOps" },
  };
  return (
    <main>
      <section className="relative isolate min-h-[100vh] flex items-center">

        <div className="mx-auto max-w-7xl px-4 py-0 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-24 xl:gap-32">
            {/* Left: Text */}
            <Reveal className="lg:pr-8 xl:pr-12">
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-5xl">
                Innovate faster.<br/>Deliver with precision.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg animate-on-load animate-fade-in-up animate-delay-200">
                Synvey empowers businesses with digital solutions that scale. From AI integration and custom apps to seamless mobile experiences and intuitive UI/UX design, we deliver technology that drives innovation and growth.
              </p>
              <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4 animate-on-load animate-fade-in-up animate-delay-300">
                <Button asChild size="lg">
                  <Link href="/technologies">Our technologies</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact us</Link>
                </Button>
              </div>

              
              
              {/* Trust logos / Brand Ticker */}
              <div className="mt-25 w-full animate-on-load animate-fade-in-up animate-delay-500">
                <div className="relative w-full">
                  <p className="mb-4 text-center text-sm font-medium tracking-wide text-zinc-300 sm:text-base">
                    Used by 5000+ teams who value storytelling
                  </p>
                  <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-800/60 bg-gradient-to-b from-black/0 via-zinc-900/30 to-black/0 px-3 py-3 sm:px-4 sm:py-4 mask-fade-x">
                    <div className="flex animate-scroll gap-12 sm:gap-16 hover:pause-animation">
                      {[0, 1].map((copy) => (
                        <div key={copy} className="flex items-center gap-12 sm:gap-16 whitespace-nowrap">
                          {brandTicker.map((brand, index) => (
                            brand.src ? (
                              <img
                                key={`${copy}-${index}`}
                                src={brand.src}
                                alt={brand.name}
                                className="h-6 sm:h-7 w-auto opacity-80 saturate-0 contrast-125 hover:opacity-100 transition-opacity"
                              />
                            ) : (
                              <div key={`${copy}-${index}`} className="inline-flex items-center gap-3">
                                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-800/70 ring-1 ring-inset ring-zinc-700 text-[10px] font-semibold text-zinc-200">
                                  {(brand.name || "").slice(0, 2).toUpperCase()}
                                </div>
                                <span className="text-zinc-300 text-sm sm:text-base font-medium opacity-90">{brand.name}</span>
                              </div>
                            )
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Visual (After Effects video) */}
            <Reveal className="lg:ml-8 xl:ml-12" delay={120}>
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40">
                  <video
                    src="/ae-hero.mp4"
                    className="block w-full h-auto aspect-square object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

      </section>
      {/* Solutions Showcase - tabs + scroll sync, white background */}
      <SolutionsShowcase
        solutions={solutions.map((s) => ({
          id: s.slug,
          title: s.title,
          blurb: s.description,
          ctaHref: `/products/${s.slug}`,
          mediaSrc: solutionMediaBySlug[s.slug]?.src,
          mediaAlt: solutionMediaBySlug[s.slug]?.alt,
        }))}
      />

      {/* Use Cases Overview - matches use-cases overview */}
      <section className="py-16 sm:py-20 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl 2xl:max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Industry-Specific Solutions
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Tailored solutions for every industry and business challenge
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, idx) => (
              <Reveal key={useCase.slug} delay={idx * 60}>
                <div className="hover-card relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
                  <div className="w-16 h-16 rounded-xl bg-indigo-500/10 mb-6 text-3xl flex items-center justify-center">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    <Link href={`/use-cases/${useCase.slug}`} className="hover:underline">
                      {useCase.title}
                    </Link>
              </h3>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-zinc-300">Key Features:</div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      {useCase.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
            </div>
                  <div className="mt-4">
                    <Link href={`/use-cases/${useCase.slug}`} className="text-sm text-indigo-400 font-medium hover:text-indigo-300 transition-colors">
                      Learn more →
                    </Link>
          </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Proof / Testimonials Section */}
      <section className="py-16 sm:py-20 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl 2xl:max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
              Trusted by teams worldwide to build and scale faster.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {/* Testimonial 1 */}
              <div className="group relative aspect-square rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 transition-all hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-lg flex flex-col justify-between">
                <div>
                  <blockquote className="text-zinc-300 leading-relaxed mb-4 text-base">
                    "Reduced release time by 40% with Synvey."
                  </blockquote>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-red-500 mr-3 flex items-center justify-center shadow-xl border-4 border-white">
                    <span className="text-white font-black text-lg">SC</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">Sarah Chen</div>
                    <div className="text-xs text-zinc-400">CTO, TechCorp</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="group relative aspect-square rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 transition-all hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-lg flex flex-col justify-between">
                <div>
                  <blockquote className="text-zinc-300 leading-relaxed mb-4 text-base">
                    "Our team integrated AI features in weeks, not months."
                  </blockquote>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-500 mr-3 flex items-center justify-center shadow-xl border-4 border-white">
                    <span className="text-white font-black text-lg">MR</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">Marcus Rodriguez</div>
                    <div className="text-xs text-zinc-400">Lead Developer, InnovateLab</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="group relative aspect-square rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 transition-all hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-lg flex flex-col justify-between">
                <div>
                  <blockquote className="text-zinc-300 leading-relaxed mb-4 text-base">
                    "Synvey gave us enterprise security without the complexity."
                  </blockquote>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500 mr-3 flex items-center justify-center shadow-xl border-4 border-white">
                    <span className="text-white font-black text-lg">JP</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">Jennifer Park</div>
                    <div className="text-xs text-zinc-400">Security Director, SecureFlow</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
              </div>
              <button className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
         </div>
       </section>

       {/* Large CTA Banner */}
       <section className="py-20 sm:py-24">
         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl 2xl:max-w-[1400px]">
           <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 px-8 py-16 sm:px-12 sm:py-20">
             <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-indigo-500/90 to-indigo-400/90" />
             <div className="relative text-center">
               <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                 Ready to Transform Your Business?
               </h2>
               <div className="mt-8">
                 <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3 text-lg">
                   <Link href="/contact">Contact Us</Link>
                 </Button>
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* Newsletter Signup (moved from footer) - placed directly after CTA banner */}
      <section className="border-t border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-[90rem] px-3 py-12 sm:px-4 lg:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">Stay Updated</h3>
            <p className="text-sm text-zinc-400 mb-6">
              Get the latest updates on new use cases, success stories, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-zinc-700 bg-zinc-800/50 text-foreground placeholder-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
              />
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                Subscribe
              </button>
             </div>
           </div>
         </div>
       </section>
      </main>
   );
 }


