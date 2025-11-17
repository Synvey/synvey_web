import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative isolate min-h-[80vh] flex items-center">
        <div className="mx-auto max-w-7xl px-4 py-0 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 items-center gap-8">
            {/* Left: Text */}
            <div className="animate-on-load animate-slide-in-left text-center">
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Building the future of software development
              </h1>
              <p className="mt-4 max-w-xl mx-auto text-base leading-7 text-zinc-400 sm:text-lg animate-on-load animate-fade-in-up animate-delay-200">
                We're a team of passionate developers, designers, and innovators dedicated to creating tools that accelerate innovation and empower teams to build better software.
              </p>
              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4 sm:justify-center animate-on-load animate-fade-in-up animate-delay-300">
                <Button asChild size="lg">
                  <Link href="/contact">Join our mission</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/solutions">Our solutions</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl 2xl:max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
              From a small team with big dreams to a platform trusted by developers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">
                Founded on a simple principle
              </h3>
              <p className="text-base leading-7 text-zinc-400 sm:text-lg mb-6">
                Synvey was born from the frustration of complex development workflows and the belief that building great software shouldn't be unnecessarily difficult. Our founders, having experienced the pain points of modern development firsthand, set out to create tools that would make developers' lives easier.
              </p>
              <p className="text-base leading-7 text-zinc-400 sm:text-lg mb-6">
                What started as a small team of passionate developers has grown into a comprehensive platform that serves thousands of teams worldwide. We've never lost sight of our original mission: to accelerate innovation through reliable, secure, and intuitive development tools.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400">2019</div>
                  <div className="text-sm text-zinc-400">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400">50K+</div>
                  <div className="text-sm text-zinc-400">Active Users</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-2xl" />
              <div className="aspect-square flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Innovation First</h4>
                  <p className="text-sm text-zinc-400">Always pushing the boundaries of what's possible in software development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 sm:py-20 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl 2xl:max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Mission */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-lg">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-zinc-400 leading-relaxed">
                  To accelerate innovation by providing developers with reliable, secure, and intuitive tools that streamline the entire software development lifecycle.
                </p>
              </div>
            </div>

            {/* Value 1 */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-lg">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Quality First</h3>
                <p className="text-zinc-400 leading-relaxed">
                  We believe in building robust, reliable solutions that developers can trust. Every feature is crafted with attention to detail and tested thoroughly.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-lg">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Developer-Centric</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Our tools are built by developers, for developers. We understand the challenges you face and design solutions that truly make your work easier.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-lg">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  We're constantly exploring new technologies and methodologies to stay ahead of the curve and provide cutting-edge solutions.
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-lg">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Security</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Security is built into every aspect of our platform. We follow industry best practices and maintain the highest standards of data protection.
                </p>
              </div>
            </div>

            {/* Value 5 */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-lg">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Community</h3>
                <p className="text-zinc-400 leading-relaxed">
                  We believe in the power of community and actively contribute to open source projects while fostering a supportive developer ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl 2xl:max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
              The passionate individuals behind Synvey's success.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="group text-center">
              <div className="relative mx-auto mb-4 w-48 h-48">
                <div className="absolute -inset-2 -z-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl" />
                <Image 
                  src="/aboutus/ishfaque.png" 
                  alt="Alex Chen" 
                  width={192} 
                  height={192} 
                  className="w-48 h-48 rounded-full object-cover shadow-xl ring-2 ring-zinc-800"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Ishfaque Ahamed</h3>
              <p className="text-indigo-400 font-medium mb-2">CEO & Co-Founder</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Leads the company vision, strategy, partnerships, and overall business growth, with experience managing multiple tech initiatives and guiding teams through successful project launches.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="group text-center">
              <div className="relative mx-auto mb-4 w-48 h-48">
                <div className="absolute -inset-2 -z-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-xl" />
                <Image 
                  src="/aboutus/adheeb.jpg" 
                  alt="Sarah Martinez" 
                  width={192} 
                  height={192} 
                  className="w-48 h-48 rounded-full object-cover shadow-xl ring-2 ring-zinc-800"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Adheeb Ahamed</h3>
              <p className="text-emerald-400 font-medium mb-2">CTO & Co-Founder</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Oversees all technical decisions, architecture, and product development, backed by hands on experience engineering high impact software systems across various projects.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="group text-center">
              <div className="relative mx-auto mb-4 w-48 h-48">
                <div className="absolute -inset-2 -z-10 rounded-full bg-gradient-to-br from-pink-500/20 to-rose-500/20 blur-xl" />
                <Image 
                  src="/aboutus/sarose.png" 
                  alt="David Johnson" 
                  width={192} 
                  height={192} 
                  className="w-48 h-48 rounded-full object-cover shadow-xl ring-2 ring-zinc-800"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Rahfath Sarose</h3>
              <p className="text-pink-400 font-medium mb-2">COO & Co Founder</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Manages daily operations, workflow, and team coordination, bringing strong experience handling cross-functional projects and ensuring smooth execution of plans.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="group text-center">
              <div className="relative mx-auto mb-4 w-48 h-48">
                <div className="absolute -inset-2 -z-10 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 blur-xl" />
                <Image 
                  src="/aboutus/musfir.jpg" 
                  alt="Lisa Wang" 
                  width={192} 
                  height={192} 
                  className="w-48 h-48 rounded-full object-cover shadow-xl ring-2 ring-zinc-800"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Musfir</h3>
              <p className="text-orange-400 font-medium mb-2">Product Designer</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Designs user interfaces, creates product visuals, and enhances usability, strengthened by experience designing engaging digital experiences for web and mobile projects.
              </p>
            </div>

            {/* Team Member 5 */}
            <div className="group text-center">
              <div className="relative mx-auto mb-4 w-48 h-48">
                <div className="absolute -inset-2 -z-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-xl" />
                <Image 
                  src="/aboutus/iflal.png" 
                  alt="Michael Rodriguez" 
                  width={192} 
                  height={192} 
                  className="w-48 h-48 rounded-full object-cover shadow-xl ring-2 ring-zinc-800"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Iflal</h3>
              <p className="text-cyan-400 font-medium mb-2">Machine Learning Engineer</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Develops and optimizes AI/ML models, data pipelines, and intelligent product features, with proven experience working on multiple data-driven machine learning projects.
              </p>
            </div>

            {/* Team Member 6 */}
            <div className="group text-center">
              <div className="relative mx-auto mb-4 w-48 h-48">
                <div className="absolute -inset-2 -z-10 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 blur-xl" />
                <Image 
                  src="/aboutus/saiyaf.png" 
                  alt="Emma Thompson" 
                  width={192} 
                  height={192} 
                  className="w-48 h-48 rounded-full object-cover shadow-xl ring-2 ring-zinc-800"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Saiyaf</h3>
              <p className="text-purple-400 font-medium mb-2">Software Engineer</p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Builds and maintains both frontend and backend applications, supported by experience developing full web solutions across different technologies and project environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl 2xl:max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Impact
            </h2>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
              Numbers that tell our story of growth and success.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">10+</div>
              <div className="text-sm text-zinc-400">Active Developers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-sm text-zinc-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-sm text-zinc-400">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-sm text-zinc-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl 2xl:max-w-[1400px]">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 px-8 py-16 sm:px-12 sm:py-20">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-indigo-500/90 to-indigo-400/90" />
            <div className="relative text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Ready to build the future with us?
              </h2>
              <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
                Join thousands of developers who trust Synvey to accelerate their innovation journey.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3 text-lg">
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-600 font-semibold px-8 py-3 text-lg">
                  <Link href="/solutions">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
