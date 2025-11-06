import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import VideoSlideshow from "../components/VideoSlideshow";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import UseCasesOverview from "@/components/UseCasesOverview";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import StatsSection from "@/components/StatsSection";

export default function HomePage() {
  // Brand-style logos; use placeholders available in /public and fallbacks with initials
  const brandTicker = [
    { src: "/Openai.svg", name: "Open AI" },
    { src: "/figma.svg", name: "Figma" },
    { src: "/js.svg", name: "Js" },
    { src: "/react.svg", name: "React" },
    { src: "/python.svg", name: "Python" },
    { src: "/docker.svg", name: "Docker" },
    { src: "/flutter.svg", name: "Flutter" },
    { src: "/github.svg", name: "github" },
    { src: "/php.svg", name: "PHP" },
    { src: "/google.svg", name: "Google" },
    { src: "/laravel.svg", name: "Laravel" },
    { src: "/go.svg", name: "GO" },
    { src: "/node.svg", name: "Node" },
  ];

  // User reviews
  const testimonials = [
    {
      quote:
        "Synvey completely transformed the way we approach digital solutions. From understanding our unique business challenges to delivering a fully customized platform, their team demonstrated unmatched expertise and creativity. Their proactive approach and attention to detail ensured that every milestone was met with precision, making the entire experience smooth and rewarding.",
      name: "Alex Turner",
      title: "QuantumEdge Solutions",
    },
    {
      quote:
        "Working with Synvey has been a revelation for our organization. They not only delivered a high-quality product but also guided us through complex technical decisions with clarity and professionalism. The team’s innovative thinking and dedication to achieving excellence have truly set them apart in the IT industry",
      name: "Maya Li",
      title: "Nexora Systems",
    },
    {
      quote:
        "Synvey’s solutions exceeded our expectations in every way. Their deep understanding of modern technology, combined with a strategic approach to our business objectives, resulted in a scalable and efficient platform. The collaboration was seamless, and their responsiveness to feedback made the project incredibly smooth.",
      name: "Raj Patel",
      title: "VertexWave Corp.",
    },
    {
      quote:
        "From the first consultation to the final delivery, Synvey proved to be a trusted partner. They took the time to understand our business, proposed innovative solutions, and executed them flawlessly. The team’s professionalism, technical expertise, and commitment to quality ensured a final product that has positively impacted our operations and growth.",
      name: "Sofia Kim",
      title: "LuminaCore Solutions",
    },
    {
      quote:
        "Synvey has redefined what we thought was possible with IT solutions. Their ability to combine creativity with technical precision allowed us to implement systems that are not only functional but also future-proof. Every step of the project demonstrated their dedication, knowledge, and a genuine interest in helping our company succeed.",
      name: "Ethan Cole",
      title: "Solaris Innovations",
    },
  ];

  // Enhanced use cases data for sticky scroll reveal
  const stickyUseCases = [
    {
      title: "E-commerce Platform",
      description:
        "Build scalable online stores with AI-powered features that drive sales and enhance customer experience. Our solutions include intelligent product recommendations, real-time inventory management, and seamless payment processing.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <div className="relative h-full w-full">
            <Image src="/sticky/web.svg" alt="E-commerce Platform Demo" fill className="object-cover rounded-2xl" />
          </div>
        </div>
      ),
    },
    {
      title: "Healthcare Management",
      description:
        "Secure patient data and streamline medical workflows with HIPAA-compliant solutions. Our healthcare platforms provide patient portals, appointment scheduling, and comprehensive medical record management.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
          <div className="relative h-full w-full">
            <Image src="/sticky/health.svg" alt="Healthcare Management Demo" fill className="object-cover rounded-2xl" />
          </div>
        </div>
      ),
    },
    {
      title: "Financial Services",
      description:
        "Compliant fintech solutions with real-time analytics and fraud detection. Our financial platforms ensure PCI compliance while providing seamless transaction processing and advanced risk management.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
          <div className="relative h-full w-full">
            <Image src="/sticky/financial.svg" alt="Financial Services Demo" fill className="object-cover rounded-2xl" />
          </div>
        </div>
      ),
    },
    {
      title: "Education Technology",
      description:
        "Interactive learning platforms and comprehensive student management systems. Our EdTech solutions include learning management systems, virtual classrooms, and advanced assessment tools.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
          <div className="relative h-full w-full">
            <Image src="/gifs/education-technology.gif" alt="Education Technology Demo" fill className="object-cover rounded-2xl" />
          </div>
        </div>
      ),
    },
    {
      title: "Manufacturing IoT",
      description:
        "Smart factory solutions with predictive maintenance and quality control. Our IoT platforms integrate sensors, analytics, and supply chain management for optimized manufacturing operations.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
          <div className="relative h-full w-full">
            <Image src="/sticky/IOT.gif" alt="Manufacturing IoT Demo" fill className="object-cover rounded-2xl" />
          </div>
        </div>
      ),
    },
    {
      title: "Real Estate Portal",
      description:
        "Property listings with virtual tours and comprehensive market analytics. Our real estate platforms provide immersive property experiences, advanced search capabilities, and lead management systems.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
          <div className="relative h-full w-full">
            <Image src="/gifs/real-estate-portal.gif" alt="Real Estate Portal Demo" fill className="object-cover rounded-2xl" />
          </div>
        </div>
      ),
    },
  ];
  const solutions = [
    {
      slug: "ai-integration",
      title: "AI Integration",
      description:
        "We help businesses harness the power of Artificial Intelligence by integrating machine learning models, natural language processing, and automation into their existing systems. Our solutions optimize workflows, improve decision-making, and enhance customer experiences.",
      icon: "🤖",
      features: ["ML models", "NLP", "Predictive analytics", "Automation"],
    },
    {
      slug: "desktop-applications",
      title: "Desktop Applications",
      description:
        "Build robust desktop applications that deliver exceptional performance and user experience. Our platform supports multiple frameworks and technologies, enabling you to create applications that work seamlessly across Windows, macOS, and Linux.",
      icon: "🖥️",
      features: [
        "Cross-platform",
        "Native performance",
        "Modern UI",
        "Security",
      ],
    },
    {
      slug: "web-applications",
      title: "Web Applications",
      description:
        "We build modern, responsive, and secure web applications designed to boost business productivity and deliver smooth, intuitive user experiences. Our solutions combine performance, scalability, and user-friendly design to help your business thrive online.",
      icon: "🕸️",
      features: ["Responsive", "Performance", "SEO ready", "PWA"],
    },
    {
      slug: "mobile-applications",
      title: "Mobile Applications",
      description:
        "Our mobile app solutions turn your ideas into engaging, high-performance apps that run seamlessly across all platforms. We focus on intuitive user journeys and optimized performance to deliver a flawless mobile experience.",
      icon: "📱",
      features: [
        "Native iOS/Android",
        "Cross-platform",
        "Offline",
        "Push notifications",
      ],
    },
    {
      slug: "ui-ux-services",
      title: "UI/UX Services",
      description:
        "We craft digital products that prioritize user experience while maintaining a modern, visually engaging design. Our process ensures usability, accessibility, and a delightful experience for every user.",
      icon: "🎨",
      features: [
        "Research",
        "Prototyping",
        "Visual design",
        "Usability testing",
      ],
    },
    {
      slug: "cloud-devops",
      title: "Cloud & DevOps",
      description:
        "SWe help businesses scale faster with cloud infrastructure and DevOps automation, ensuring reliability, security, and seamless continuous delivery.",
      icon: "☁️",
      features: ["CI/CD", "IaC", "Kubernetes", "Monitoring"],
    },
  ];
  const solutionMediaBySlug: Record<string, { src: string; alt?: string }> = {
    "ai-integration": { src: "/aiIntegration.webm", alt: "AI Integration" },
    "desktop-applications": {
      src: "/Desktop.webm",
      alt: "Desktop Applications",
    },
    "web-applications": { src: "/videos/video4.webm", alt: "Web Applications" },
    "mobile-applications": { src: "/Mobile.webm", alt: "Mobile Applications" },
    "ui-ux-services": { src: "/videos/video3.webm", alt: "UI/UX Services" },
    "cloud-devops": { src: "/Devops.webm", alt: "Cloud & DevOps" },
  };

  return (
    <main className="bg-background">
      <section className="relative isolate min-h-[120vh] flex items-center w-full max-w-full overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 py-16 xl:max-w-[1400px] 2xl:max-w-[1600px] w-full">
          <div className="flex flex-col items-center gap-16">
            {/* Top: Text Content */}
            <Reveal className="text-center max-w-4xl">
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Innovate faster. <br />
                Deliver with{" "}
                <FlipWords
                  words={["precision.", "accuracy.", "efficiency."]}
                  className="inline-block text-primary px-1"
                  duration={3000}
                />
              </h1>

              <p className="mt-6 max-w-2xl mx-auto text-lg leading-7 text-zinc-400 sm:text-xl animate-on-load animate-fade-in-up animate-delay-200">
                Synvey empowers businesses with digital solutions that scale.
                From AI integration and custom apps to seamless mobile
                experiences and intuitive UI/UX design, we deliver technology
                that drives innovation and growth.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 animate-on-load animate-fade-in-up animate-delay-300">
                <Button asChild size="lg">
                  <Link href="/technologies">Our technologies</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact us</Link>
                </Button>
              </div>
            </Reveal>

            {/* Middle: Video Slideshow */}
            <Reveal delay={120} className="w-full">
              <div className="relative mx-auto w-full max-w-6xl border-10 border-[#171717] rounded-3xl">
                {/* <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 blur-2xl" /> */}
                <div className="relative w-full max-w-6xl mx-auto aspect-video sm:h-auto flex items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
                  <VideoSlideshow />
                </div>
              </div>
            </Reveal>

            {/* Gif Container */}
            <Reveal delay={120}>
              <div className="flex items-center justify-center px-4">
                <Image src="/gif.gif" alt="Animated GIF" width={800} height={450} className="w-full max-w-[800px] h-auto object-contain" />
              </div>
            </Reveal>
            <Reveal delay={240}>
              <StatsSection />
            </Reveal>

            {/* Bottom: Trust logos / Brand Ticker */}
            <Reveal delay={240} className="w-full">
              <div className="relative w-full max-w-5xl mx-auto">
                <p className="mb-6 text-center text-sm font-medium tracking-wide text-zinc-300 sm:text-base">
                  Proficient in 80+ modern tools and libraries across various
                  technologies
                </p>
                <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-800/60 bg-gradient-to-b from-black/0 via-zinc-900/30 to-black/0 px-4 py-4 sm:px-6 sm:py-5 mask-fade-x">
                  <div className="flex animate-scroll gap-4 sm:gap-6 whitespace-nowrap hover:pause-animation">
                    {brandTicker.map((brand, index) => (
                      <div key={index} className="shrink-0 flex items-center">
                        {brand.src ? (
                          <Image
                            src={brand.src}
                            alt={brand.name}
                            width={28}
                            height={28}
                            className="h-6 sm:h-7 w-auto opacity-80 saturate-0 contrast-125 hover:opacity-100 transition-opacity mx-6"
                          />
                        ) : (
                          <div className="flex items-center gap-3">
                            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-800/70 ring-1 ring-inset ring-zinc-700 text-[10px] font-semibold text-zinc-200">
                              {(brand.name || "").slice(0, 2).toUpperCase()}
                            </div>
                            <span className="text-zinc-300 text-sm sm:text-base font-medium opacity-90">
                              {brand.name}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
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

      {/* Use Cases Overview - Sticky Scroll Reveal */}
      <UseCasesOverview useCases={stickyUseCases} />

      {/* Customer reviews */}

      <section className="py-16 sm:py-20 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl 2xl:max-w-[1400px]">
            <div className="text-center mb-16">
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <TextGenerateEffect
                words="What our customer says"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-full text-center text-white leading-tight mb-4 sm:mb-6"
              />
          </div>
            <div className=" text-base sm:text-lg text-zinc-400  mx-auto">
              <TextGenerateEffect
                words="Trusted by teams worldwide to build and scale faster."
                className="text-base sm:text-lg md:text-xl text-center text-zinc-400 mx-auto"
              />
                </div>
              </div>

          <div className="w-full flex justify-center items-center overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              pauseOnHover
              direction="right"
              speed="slow"
            />
              </div>
          <div className="w-full flex justify-center items-center overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              pauseOnHover
              direction="left"
              speed="slow"
            />
            </div>
          </div>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 animate-on-load animate-fade-in-up animate-delay-300">
          <Button asChild size="lg">
            <Link href="">More reviews</Link>
          </Button>
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
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3 text-lg"
                >
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
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Stay Updated
            </h3>
            <p className="text-sm text-zinc-400 mb-6">
              Get the latest updates on new use cases, success stories, and
              industry insights.
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
