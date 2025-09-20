import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThreeDashedLines from "@/components/ThreeDashedLines";
import CapabilitiesCollapsible from "@/components/CapabilitiesCollapsible";

export default function HomePage() {
  const tickerItems = [
    "Faster releases",
    "Clear analytics",
    "Robust quality",
    "Easy integrations",
    "Enterprise-grade security",
    "Real-time monitoring",
    "Developer-first UX",
    "Scales with your traffic",
    "Zero-downtime deploys",
    "Smart automation",
    "API-ready by default",
    "SOC2-friendly practices",
    "Role-based access",
    "Powerful insights",
    "Global performance",
  ];
  return (
    <main>
      <section className="relative isolate min-h-[90vh] flex items-center">

        <div className="mx-auto max-w-[90rem] px-3 py-0 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
            {/* Left: Text */}
            <div className="animate-on-load animate-slide-in-left">
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Build faster. Ship securely.
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

              

              {/* Trust logos removed by request */}
            </div>

            {/* Right: Visual (Three.js dashed lines) */}
            <div className="animate-on-load animate-slide-in-right animate-delay-200">
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -inset-2 -z-10 rounded-full bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 blur-2xl" />
                <ThreeDashedLines />
              </div>
            </div>
          </div>
        </div>

        {/* Ticker anchored at bottom of hero */}
        <div className="pointer-events-auto absolute bottom-4 left-0 right-0 animate-on-load animate-fade-in-up animate-delay-500">
          <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
            <div className="overflow-hidden">
              <div className="flex animate-scroll gap-6 hover:pause-animation">
                {[0, 1].map((copy) => (
                  <div key={copy} className="flex gap-6 whitespace-nowrap">
                    {tickerItems.map((item, index) => (
                      <span
                        key={`${copy}-${index}`}
                        className="inline-flex items-center rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm font-medium text-zinc-200 shadow-sm transition-colors hover:bg-zinc-900/70 hover:text-zinc-100 sm:px-5 sm:py-2.5 sm:text-base"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform / Feature Highlights Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Comprehensive Platform Capabilities
            </h2>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
              From AI integration to cybersecurity, we provide end-to-end solutions that power your digital transformation.
            </p>
          </div>
          {/* Always visible: first two capabilities */}
          {/* Feature 1: AI Integration */}
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20 mb-32">
             <div className="order-2 lg:order-1">
               <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                 AI Integration
               </h3>
               <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
                 Harness the power of artificial intelligence with seamless integration capabilities. 
                 Build intelligent applications that learn, adapt, and deliver exceptional user experiences.
               </p>
             </div>
             <div className="order-1 lg:order-2">
               <div className="relative mx-auto w-full max-w-sm">
                 <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-2xl" />
                 <div className="aspect-square flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                   <svg className="w-20 h-20 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                   </svg>
                 </div>
               </div>
             </div>
           </div>
          {/* Feature 2: Desktop Applications */}
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20 mb-8">
            <div>
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-2xl" />
                <div className="aspect-square flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                  <svg className="w-20 h-20 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Desktop Applications
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
                Create powerful, native desktop applications that deliver exceptional performance. 
                Cross-platform compatibility with modern frameworks and enterprise-grade security.
              </p>
            </div>
          </div>
          {/* Collapsible: remaining capabilities */}
          <CapabilitiesCollapsible>
          {/* Feature 3: Web Applications */}
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20 mb-32">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Web Applications
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
                Build scalable, responsive web applications that work seamlessly across all devices. 
                Modern frameworks, optimized performance, and intuitive user interfaces.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-2xl" />
                <div className="aspect-square flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                  <svg className="w-20 h-20 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Mobile Applications */}
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20 mb-32">
            <div>
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 blur-2xl" />
                <div className="aspect-square flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                  <svg className="w-20 h-20 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Mobile Applications
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
                Develop native and cross-platform mobile apps that engage users and drive business growth. 
                iOS, Android, and hybrid solutions with offline capabilities.
              </p>
            </div>
          </div>

          {/* Feature 5: UI/UX Design */}
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20 mb-32">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                UI/UX Design
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
                Create intuitive, accessible user experiences that delight customers and drive engagement. 
                User-centered design principles with modern aesthetics and seamless interactions.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 blur-2xl" />
                <div className="aspect-square flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                  <svg className="w-20 h-20 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 6: Cloud & DevOps */}
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20 mb-32">
            <div>
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 blur-2xl" />
                <div className="aspect-square flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                  <svg className="w-20 h-20 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Cloud & DevOps
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
                Streamline deployment and operations with cloud-native solutions and DevOps best practices. 
                Automated CI/CD pipelines, infrastructure as code, and scalable cloud architectures.
              </p>
            </div>
          </div>
          </CapabilitiesCollapsible>
        </div>
      </section>

      {/* Customer Proof / Testimonials Section */}
      <section className="py-16 sm:py-20 bg-zinc-900/30">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
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
         <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
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
      </main>
   );
 }


