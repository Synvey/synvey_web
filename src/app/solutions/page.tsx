import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative isolate min-h-[70vh] flex items-center">
        <div className="mx-auto max-w-[90rem] px-3 py-16 sm:px-4 lg:px-6">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Foundational Technology for Your Digital Success
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-zinc-400 sm:text-xl">
              Synvey provides the building blocks to accelerate innovation, ensure reliability, and simplify digital transformation at scale.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Pillars */}
      <section id="pillars" className="py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Comprehensive Solution Pillars
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Everything you need to build, deploy, and scale modern applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Integration & APIs */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-500/10 mb-6">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Integration & APIs</h3>
              <p className="text-zinc-400 leading-relaxed">
                Seamlessly connect systems and services with robust API management and integration capabilities that scale with your business needs.
              </p>
            </div>

            {/* Analytics & Insights */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/10 mb-6">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Analytics & Insights</h3>
              <p className="text-zinc-400 leading-relaxed">
                Transform data into actionable insights with powerful analytics tools that help you make informed decisions and optimize performance.
              </p>
            </div>

            {/* Automation & Workflows */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/10 mb-6">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Automation & Workflows</h3>
              <p className="text-zinc-400 leading-relaxed">
                Streamline operations with intelligent automation that reduces manual work and accelerates your development and deployment processes.
              </p>
            </div>

            {/* Security & Compliance */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-500/10 mb-6">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Security & Compliance</h3>
              <p className="text-zinc-400 leading-relaxed">
                Protect your digital assets with enterprise-grade security features and compliance frameworks that meet the highest industry standards.
              </p>
            </div>

            {/* Cloud-Native Development */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Cloud-Native Development</h3>
              <p className="text-zinc-400 leading-relaxed">
                Build and deploy applications using modern cloud-native architectures that are scalable, resilient, and cost-effective.
              </p>
            </div>

            {/* DevOps & Observability */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/10 mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">DevOps & Observability</h3>
              <p className="text-zinc-400 leading-relaxed">
                Accelerate delivery with comprehensive DevOps tools and observability features that provide deep insights into your applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16 sm:py-20 bg-zinc-900/30">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted Across Industries
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Synvey solutions power digital transformation across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Finance */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-green-500/10 mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Finance</h3>
              <p className="text-zinc-400 leading-relaxed">
                Secure, compliant financial services platforms with real-time transaction processing, fraud detection, and regulatory compliance built-in.
              </p>
            </div>

            {/* Retail */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-orange-500/10 mb-6">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Retail</h3>
              <p className="text-zinc-400 leading-relaxed">
                Omnichannel commerce solutions that deliver seamless customer experiences across online and offline touchpoints with real-time inventory management.
              </p>
            </div>

            {/* Public Sector */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/10 mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Public Sector</h3>
              <p className="text-zinc-400 leading-relaxed">
                Citizen-centric digital services with robust security, accessibility compliance, and scalable infrastructure for government operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to simplify your digital platform with Synvey solutions?
            </h2>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
              Let's get started on your digital transformation journey with our comprehensive suite of enterprise-grade solutions.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
