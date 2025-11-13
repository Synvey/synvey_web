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
        "Deploy multimodal vector search across product catalogs containing 10M+ SKUs with sub-50ms query latency. Our custom-trained embeddings process product images, descriptions, reviews, and video content simultaneously, enabling semantic search that understands user intent beyond keyword matching. Vector similarity search achieves 94.3% relevance accuracy compared to 67% with traditional keyword search. Agentic workflows automate dynamic pricing optimization across 500K+ products, adjusting prices in real-time based on inventory levels (monitoring 2M+ inventory units), competitor analysis, and demand forecasting. Inventory management agents reduce stockouts by 42% and overstock situations by 38%, resulting in $3.2M annual cost savings. Customer service automation handles 78% of inquiries without human intervention, with 89% customer satisfaction scores. Recommendation engine processes 2.5M user interactions daily, generating personalized suggestions with 23% click-through rates and 40% conversion lift. Distributed inference infrastructure handles 100K+ queries per second during peak traffic, maintaining 99.97% uptime. Search result relevance improved from 67% to 94.3%, cart abandonment reduced by 60%, and average order value increased by 18%.",
      content: (
        <div className="h-full w-full bg-zinc-900/50 flex items-center justify-center rounded-2xl border border-zinc-800">
          <div className="text-center p-8">
            <div className="text-sm text-zinc-400 mb-2">E-commerce Platform</div>
            <div className="text-xs text-zinc-500">10M+ SKUs • 100K+ QPS • 94.3% Relevance</div>
          </div>
        </div>
      ),
    },
    {
      title: "Healthcare Management",
      description:
        "Custom-trained medical embeddings process 10M+ medical documents including EHRs, imaging reports, research papers, and clinical notes with 99.2% semantic search accuracy. Multimodal vector search enables cross-modal retrieval: query patient symptoms and retrieve relevant imaging studies, lab results, and treatment protocols in <800ms average response time. Clinical decision support agents analyze patient data across 15+ data sources, reducing diagnosis time from 4.2 hours to 1.7 hours (60% reduction) while maintaining 96.8% diagnostic accuracy. Care coordination workflows automate appointment scheduling across 500+ providers, reducing no-show rates by 34% and optimizing resource utilization by 28%. Medication reconciliation agents process 50K+ prescriptions monthly, identifying 1,200+ potential drug interactions that would have been missed manually. HIPAA-compliant in-house model hosting ensures zero data exfiltration risk, with all processing occurring on-premise infrastructure. Document search across 10M+ records completes in <1 second, compared to 12+ minutes with traditional database queries. Clinical workflow automation reduces administrative burden by 45 hours per provider per week, enabling focus on patient care. Patient outcome improvements: 23% reduction in readmission rates, 18% improvement in treatment adherence, and 31% faster time-to-treatment initiation.",
      content: (
        <div className="h-full w-full bg-zinc-900/50 flex items-center justify-center rounded-2xl border border-zinc-800">
          <div className="text-center p-8">
            <div className="text-sm text-zinc-400 mb-2">Healthcare Management</div>
            <div className="text-xs text-zinc-500">10M+ Documents • 99.2% Accuracy • 60% Faster Diagnosis</div>
          </div>
        </div>
      ),
    },
    {
      title: "Financial Services",
      description:
        "Real-time fraud detection processes 1.2M+ transactions daily with <50ms average latency using vector search across transaction patterns, behavioral data, and historical fraud cases. Custom embeddings trained on 50M+ labeled transactions achieve 95.2% fraud detection precision and 92.8% recall, reducing false positives by 70% compared to rule-based systems. This translates to $2.4M annual savings in reduced manual review costs and improved customer experience. Agentic compliance workflows automate regulatory reporting across 12+ jurisdictions, processing 15K+ compliance checks daily and generating reports that previously required 240 analyst-hours per month in just 8 hours. Risk assessment agents analyze 500K+ customer profiles, transaction histories, and market signals to generate real-time risk scores, enabling proactive intervention that reduces credit losses by 18%. Distributed inference infrastructure handles 5M+ API calls daily with 99.99% availability, processing transactions across 45 countries with regional data residency compliance. Transaction monitoring detects anomalies in real-time with 94.7% accuracy, flagging suspicious patterns that would take human analysts 3-5 days to identify. AML (Anti-Money Laundering) screening processes 800K+ transactions monthly, identifying 2,400+ suspicious activities with 88% true positive rate. Compliance automation reduces regulatory reporting time by 97%, from 240 hours to 8 hours monthly, while maintaining 100% accuracy in regulatory submissions.",
      content: (
        <div className="h-full w-full bg-zinc-900/50 flex items-center justify-center rounded-2xl border border-zinc-800">
          <div className="text-center p-8">
            <div className="text-sm text-zinc-400 mb-2">Financial Services</div>
            <div className="text-xs text-zinc-500">1.2M+ Transactions/Day • 95.2% Precision • $2.4M Saved</div>
          </div>
        </div>
      ),
    },
    {
      title: "Education Technology",
      description:
        "Multimodal vector search indexes 5M+ educational resources including course materials, video lectures, research papers, and student submissions, enabling semantic discovery with 91% relevance accuracy. Custom educational embeddings understand domain-specific terminology across 200+ subject areas, processing queries in 320ms average response time. Personalized learning path generation analyzes 2.8M student interactions weekly, creating adaptive curricula that improve engagement by 55% and learning outcomes by 38%. Agentic grading workflows process 150K+ student submissions monthly across 12+ assignment types, providing detailed feedback with 90.3% accuracy compared to human graders, while reducing instructor workload by 45 hours per week. Content recommendation engine suggests relevant materials based on learning gaps identified through vector similarity analysis, resulting in 42% improvement in concept mastery rates. Student progress tracking monitors 50K+ learners across 500+ courses, identifying at-risk students 3.2 weeks earlier than traditional methods, enabling intervention that reduces dropout rates by 28%. Automated assessment generation creates 2,400+ unique questions monthly from source materials, maintaining 94% validity scores. Learning analytics process 15M+ data points daily, generating insights that help institutions improve curriculum effectiveness by 31% and student satisfaction scores by 24%.",
      content: (
        <div className="h-full w-full bg-zinc-900/50 flex items-center justify-center rounded-2xl border border-zinc-800">
          <div className="text-center p-8">
            <div className="text-sm text-zinc-400 mb-2">Education Technology</div>
            <div className="text-xs text-zinc-500">5M+ Resources • 55% Engagement Lift • 90.3% Grading Accuracy</div>
          </div>
        </div>
      ),
    },
    {
      title: "Manufacturing IoT",
      description:
        "Vector search processes 100M+ sensor readings daily from 15K+ IoT devices across 12 manufacturing facilities, enabling real-time anomaly detection with 89.7% accuracy. Custom embeddings trained on 3 years of historical sensor data, maintenance logs, and quality reports identify failure patterns 4-6 weeks before equipment breakdown, reducing unplanned downtime by 75% and saving $5.8M annually in production losses. Predictive maintenance agents analyze vibration patterns, temperature fluctuations, and operational parameters across 2,400+ machines, scheduling maintenance with 92% precision, optimizing maintenance costs by 34% while extending equipment lifespan by 28%. Quality control automation processes 500K+ product inspections monthly using computer vision and vector similarity matching, detecting defects with 96.2% accuracy and reducing quality-related returns by 40%. Supply chain optimization agents analyze 800K+ inventory transactions, supplier performance metrics, and demand forecasts to optimize procurement, reducing inventory carrying costs by 27% and improving on-time delivery rates from 78% to 94%. Overall Equipment Effectiveness (OEE) improved from 68% to 88% (30% improvement), production throughput increased by 22%, and energy consumption reduced by 19% through intelligent process optimization. Real-time production monitoring provides visibility across all facilities, enabling data-driven decisions that reduce waste by 31% and improve first-pass yield from 87% to 94%.",
      content: (
        <div className="h-full w-full bg-zinc-900/50 flex items-center justify-center rounded-2xl border border-zinc-800">
          <div className="text-center p-8">
            <div className="text-sm text-zinc-400 mb-2">Manufacturing IoT</div>
            <div className="text-xs text-zinc-500">100M+ Readings/Day • 75% Downtime Reduction • $5.8M Saved</div>
          </div>
        </div>
      ),
    },
    {
      title: "Real Estate Portal",
      description:
        "Multimodal vector search indexes 1.2M+ property listings with high-resolution images, detailed descriptions, neighborhood data, and market analytics, enabling semantic property discovery with 93% match accuracy. Custom embeddings trained on real estate terminology, buyer preferences, and market trends process queries in 280ms, understanding natural language requests like 'family-friendly homes near good schools' and matching to relevant properties. Intelligent property matching analyzes 500K+ buyer profiles and preferences, generating personalized recommendations that increase lead conversion by 65% and reduce time-to-match from 14 days to 7 days (50% reduction). Agentic lead qualification workflows process 25K+ inquiries monthly, scoring and prioritizing leads with 87% accuracy, enabling agents to focus on high-value prospects and improving conversion rates by 42%. Automated scheduling agents coordinate 8,500+ property viewings monthly, optimizing agent calendars and reducing no-show rates by 38%. Market analysis agents process 2.4M+ data points including sales history, neighborhood trends, and economic indicators to generate pricing recommendations with 91% accuracy, helping sellers price properties optimally and reducing time-on-market by 31%. Document processing automation handles 12K+ contracts, inspections, and disclosures monthly, extracting key information with 96% accuracy and reducing processing time from 5 days to 8 hours. Agent productivity increased by 40%, enabling each agent to handle 2.3x more transactions, while customer satisfaction scores improved by 28% due to faster response times and better property matches.",
      content: (
        <div className="h-full w-full bg-zinc-900/50 flex items-center justify-center rounded-2xl border border-zinc-800">
          <div className="text-center p-8">
            <div className="text-sm text-zinc-400 mb-2">Real Estate Portal</div>
            <div className="text-xs text-zinc-500">1.2M+ Listings • 65% Conversion Lift • 50% Faster Matching</div>
          </div>
        </div>
      ),
    },
  ];
  const solutions = [
    {
      slug: "multimodal-vector-search",
      title: "Multimodal Vector Search",
      description:
        "High-performance vector search on large-scale datasets with efficient indexing and retrieval. Our solution enables fast, accurate search across text, images, audio, video, and other data modalities.",
      icon: "🔍",
      features: ["Large-scale datasets", "Efficient indexing", "Fast retrieval", "Multi-format support"],
    },
    {
      slug: "custom-agentic-workflows",
      title: "Custom Agentic Workflows",
      description:
        "Adaptive automation pipelines tailored to complex enterprise processes. Our agentic workflows automate decision-making, task orchestration, and complex business logic with intelligent AI agents.",
      icon: "🤖",
      features: [
        "Adaptive automation",
        "Task orchestration",
        "Decision-making",
        "Enterprise-ready",
      ],
    },
    {
      slug: "embedding-model-training",
      title: "Embedding Model Training",
      description:
        "Custom-trained embeddings optimized for domain-specific data and performance needs. We create specialized embedding models that understand your unique business context and data patterns.",
      icon: "🧠",
      features: ["Domain-specific", "Custom training", "Performance optimization", "Fine-tuning"],
    },
    {
      slug: "in-house-model-hosting",
      title: "In-House Model Hosting",
      description:
        "Secure, scalable infrastructure for managing and deploying proprietary AI models. Our hosting solutions ensure your models are accessible, reliable, and protected within your enterprise environment.",
      icon: "🏢",
      features: ["Secure infrastructure", "Scalable deployment", "Model management", "Enterprise security"],
    },
    {
      slug: "offshoring-inference",
      title: "Offshoring Inference",
      description:
        "Distributed inference setup optimized for performance, compliance, and cost efficiency. We help you deploy inference workloads across global infrastructure while maintaining data sovereignty and regulatory compliance.",
      icon: "🌐",
      features: ["Distributed setup", "Cost optimization", "Compliance", "Global infrastructure"],
    },
  ];
  const solutionMediaBySlug: Record<string, { src: string; alt?: string }> = {
    "multimodal-vector-search": { src: "/aiIntegration.webm", alt: "Multimodal Vector Search" },
    "custom-agentic-workflows": {
      src: "/Desktop.webm",
      alt: "Custom Agentic Workflows",
    },
    "embedding-model-training": { src: "/videos/video4.webm", alt: "Embedding Model Training" },
    "in-house-model-hosting": { src: "/Mobile.webm", alt: "In-House Model Hosting" },
    "offshoring-inference": { src: "/Devops.webm", alt: "Offshoring Inference" },
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
