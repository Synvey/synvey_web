import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Reveal from "@/components/Reveal";

const PRODUCTS = {
  "multimodal-vector-search": {
    name: "Multimodal Vector Search",
    tagline:
      "High-performance vector search on large-scale datasets with efficient indexing and retrieval",
    overview:
      "High-performance vector search on large-scale datasets with efficient indexing and retrieval. Our solution enables fast, accurate search across text, images, audio, video, and other data modalities, helping enterprises unlock insights from their diverse data sources.",
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    color: "purple",
    features: [
      {
        title: "Large-Scale Datasets",
        description: "Handle billions of vectors with efficient indexing",
        icon: "📊",
      },
      {
        title: "Efficient Indexing",
        description: "Optimized data structures for fast retrieval",
        icon: "⚡",
      },
      {
        title: "Fast Retrieval",
        description: "Sub-millisecond search across multiple modalities",
        icon: "🚀",
      },
      {
        title: "Multi-Format Support",
        description: "Search across text, images, audio, video, and more",
        icon: "🎯",
      },
    ],
    benefits: [
      "Unlock insights from diverse data sources",
      "Sub-millisecond search performance",
      "Scalable to billions of vectors",
      "Enterprise-grade reliability",
    ],
    video: "/aiIntegration.webm",
  },
  "custom-agentic-workflows": {
    name: "Custom Agentic Workflows",
    tagline:
      "Adaptive automation pipelines tailored to complex enterprise processes",
    overview:
      "Adaptive automation pipelines tailored to complex enterprise processes. Our agentic workflows automate decision-making, task orchestration, and complex business logic with intelligent AI agents that learn and adapt to your organization's unique needs.",
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    color: "blue",
    features: [
      {
        title: "Adaptive Automation",
        description: "Workflows that learn and improve over time",
        icon: "🧠",
      },
      {
        title: "Task Orchestration",
        description: "Coordinate complex multi-step processes seamlessly",
        icon: "🔄",
      },
      {
        title: "Decision-Making",
        description: "Intelligent agents that make context-aware decisions",
        icon: "🎯",
      },
      {
        title: "Enterprise-Ready",
        description: "Built for scale, security, and compliance",
        icon: "🏢",
      },
    ],
    benefits: [
      "Automate complex business processes",
      "Reduce manual intervention",
      "Improve decision accuracy",
      "Scale with your organization",
    ],
    video: "/Desktop.webm",
  },
  "embedding-model-training": {
    name: "Embedding Model Training",
    tagline:
      "Custom-trained embeddings optimized for domain-specific data and performance needs",
    overview:
      "Custom-trained embeddings optimized for domain-specific data and performance needs. We create specialized embedding models that understand your unique business context and data patterns, delivering superior performance compared to generic models.",
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    color: "emerald",
    features: [
      {
        title: "Domain-Specific",
        description: "Models trained on your industry-specific data",
        icon: "🎯",
      },
      {
        title: "Custom Training",
        description: "Tailored training pipelines for your use case",
        icon: "🔧",
      },
      {
        title: "Performance Optimization",
        description: "Fine-tuned for accuracy and speed",
        icon: "⚡",
      },
      {
        title: "Fine-Tuning",
        description: "Continuous improvement based on feedback",
        icon: "📈",
      },
    ],
    benefits: [
      "Superior accuracy for your domain",
      "Reduced inference costs",
      "Better semantic understanding",
      "Competitive advantage",
    ],
    video: "/videos/video4.webm",
  },
  "in-house-model-hosting": {
    name: "In-House Model Hosting",
    tagline:
      "Secure, scalable infrastructure for managing and deploying proprietary AI models",
    overview:
      "Secure, scalable infrastructure for managing and deploying proprietary AI models. Our hosting solutions ensure your models are accessible, reliable, and protected within your enterprise environment, giving you full control over your AI infrastructure.",
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    color: "orange",
    features: [
      {
        title: "Secure Infrastructure",
        description: "Enterprise-grade security and compliance",
        icon: "🔒",
      },
      {
        title: "Scalable Deployment",
        description: "Auto-scaling to handle variable workloads",
        icon: "📈",
      },
      {
        title: "Model Management",
        description: "Version control and lifecycle management",
        icon: "📦",
      },
      {
        title: "Enterprise Security",
        description: "Data sovereignty and access controls",
        icon: "🛡️",
      },
    ],
    benefits: [
      "Full control over your AI infrastructure",
      "Data stays within your environment",
      "Reduced latency and costs",
      "Compliance with regulations",
    ],
    video: "/Mobile.webm",
  },
  "offshoring-inference": {
    name: "Offshoring Inference",
    tagline:
      "Distributed inference setup optimized for performance, compliance, and cost efficiency",
    overview:
      "Distributed inference setup optimized for performance, compliance, and cost efficiency. We help you deploy inference workloads across global infrastructure while maintaining data sovereignty and regulatory compliance, ensuring optimal performance at the lowest cost.",
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: "indigo",
    features: [
      {
        title: "Distributed Setup",
        description: "Global infrastructure for optimal performance",
        icon: "🌐",
      },
      {
        title: "Cost Optimization",
        description: "Reduce inference costs by up to 60%",
        icon: "💰",
      },
      {
        title: "Compliance",
        description: "Maintain data sovereignty and regulatory compliance",
        icon: "✅",
      },
      {
        title: "Global Infrastructure",
        description: "Deploy closer to your users worldwide",
        icon: "🚀",
      },
    ],
    benefits: [
      "Significant cost savings",
      "Improved latency for global users",
      "Regulatory compliance",
      "Flexible deployment options",
    ],
    video: "/Devops.webm",
  },
};

// getColorClasses removed as it was unused

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS[slug as keyof typeof PRODUCTS];

  if (!product) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative isolate py-16 sm:py-20">
        {/* Subtle gradient background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-10rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute right-[-18rem] bottom-[-12rem] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              <TextGenerateEffect words={product.name} />
            </h1>
            <Reveal delay={240}>
              <p className="mt-4 text-lg text-zinc-400 max-w-3xl mx-auto">
                {product.tagline}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">
                <TextGenerateEffect words="Overview" className="" />
              </h2>

              <Reveal delay={240}>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  {product.overview}
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Demovideo Container */}
        <div className="flex items-center justify-center mt-12 ">
          <div className="relative w-full max-w-6xl mx-auto h-[650px] flex items-center justify-center overflow-hidden border-10 border-[#171717] rounded-3xl bg-zinc-900/40">
            <Reveal delay={240}>
              {product.video && (
                <div className="my-8">
                  <video
                    src={product.video}
                    autoPlay
                    loop
                    className="w-full  mx-auto rounded-2xl shadow-lg"
                  />
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-zinc-900/30">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <Reveal className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              <TextGenerateEffect words="Key Features" className="" />
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.features.map((feature, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="text-center p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 flex justify-center  bg-zinc-900/30">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">
            <TextGenerateEffect words="Benefits" className="" />
          </h2>
          <Reveal delay={360}>
            <div className="space-y-4">
              {product.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10">
                    <svg
                      className="h-4 w-4 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-zinc-300">{benefit}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4">
              <TextGenerateEffect
                words={`Get Started with ${product.name}`}
                className=""
              />
            </h2>
            <Reveal delay={240}>
              <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
                Ready to transform your business with{" "}
                {product.name.toLowerCase()}? Contact our team to learn more.
              </p>
            </Reveal>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
