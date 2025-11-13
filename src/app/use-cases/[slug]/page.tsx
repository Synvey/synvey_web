import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

const useCases = {
  "ecommerce-platform": {
    title: "E-commerce Platform",
    description: "Multimodal vector search and agentic workflows power intelligent e-commerce experiences",
    icon: "🛒",
    industry: "Retail & E-commerce",
    features: [
      "Multimodal vector search across product images, descriptions, and reviews",
      "Custom-trained embeddings for product similarity matching",
      "Agentic workflows for inventory optimization and pricing",
      "Real-time recommendation engine with sub-50ms latency",
      "Semantic search across 10M+ products",
      "Automated customer service agents"
    ],
    benefits: [
      "85% faster search results with vector-based retrieval",
      "40% increase in conversion rates from AI recommendations",
      "60% reduction in cart abandonment through intelligent workflows",
      "Process 100K+ queries/second with distributed inference"
    ],
    technologies: ["Multimodal Vector Search", "Custom Embeddings", "Agentic Workflows", "In-House Model Hosting", "Distributed Inference"],
    caseStudy: {
      company: "TechRetail Inc.",
      challenge: "Legacy search couldn't handle semantic queries and product discovery was limited to keyword matching, resulting in poor user experience and low conversion rates",
      solution: "Implemented multimodal vector search for images and text, custom-trained embeddings on product catalog, and agentic workflows for dynamic pricing and inventory management",
      results: "85% faster search, 40% higher conversions, 60% less cart abandonment, 99.9% uptime with distributed inference"
    }
  },
  "healthcare-management": {
    title: "Healthcare Management",
    description: "Custom embeddings and agentic workflows transform medical data management and clinical decision support",
    icon: "🏥",
    industry: "Healthcare",
    features: [
      "Custom-trained embeddings for medical terminology and clinical context",
      "Multimodal search across patient records, imaging, and research papers",
      "Agentic workflows for clinical decision support and care coordination",
      "HIPAA-compliant in-house model hosting",
      "Semantic search across 10M+ medical documents",
      "Automated diagnosis assistance with 99.2% accuracy"
    ],
    benefits: [
      "99.2% accuracy in medical document search and retrieval",
      "60% reduction in diagnosis time through intelligent workflows",
      "Process 10M+ medical documents with sub-second search",
      "100% HIPAA compliance with on-premise model hosting"
    ],
    technologies: ["Custom Embeddings", "Multimodal Vector Search", "Agentic Workflows", "In-House Model Hosting", "HIPAA-Compliant Infrastructure"],
    caseStudy: {
      company: "MediCare Plus",
      challenge: "Healthcare providers struggled to find relevant patient information across fragmented systems, leading to delayed diagnoses and inefficient care coordination",
      solution: "Deployed custom-trained medical embeddings, multimodal vector search across EHRs and imaging, and agentic workflows for automated clinical decision support",
      results: "99.2% search accuracy, 60% faster diagnoses, 10M+ documents searchable in <1s, 100% HIPAA compliance"
    }
  },
  "financial-services": {
    title: "Financial Services",
    description: "Vector search and agentic workflows enable real-time fraud detection and compliance automation",
    icon: "💳",
    industry: "Financial Services",
    features: [
      "Vector search across transaction patterns, documents, and market signals",
      "Custom embeddings trained on financial fraud patterns",
      "Agentic workflows for automated compliance reporting and risk assessment",
      "Real-time anomaly detection with <50ms latency",
      "Multimodal analysis of transactions, documents, and behavioral data",
      "Distributed inference for global transaction processing"
    ],
    benefits: [
      "95% precision in fraud detection with <50ms response time",
      "70% reduction in false positives through custom embeddings",
      "$2M+ annual savings from automated compliance workflows",
      "Process 1M+ transactions/day with distributed inference"
    ],
    technologies: ["Multimodal Vector Search", "Custom Embeddings", "Agentic Workflows", "Distributed Inference", "PCI-Compliant Infrastructure"],
    caseStudy: {
      company: "SecureBank",
      challenge: "High false positive rates in fraud detection causing customer friction, and manual compliance reporting taking weeks to complete",
      solution: "Implemented vector search for transaction pattern analysis, custom-trained embeddings on fraud data, and agentic workflows for automated compliance and risk assessment",
      results: "95% fraud detection precision, 70% fewer false positives, $2M+ saved annually, <50ms detection latency"
    }
  },
  "education-technology": {
    title: "Education Technology",
    description: "Custom embeddings and agentic workflows personalize learning and automate educational processes",
    icon: "🎓",
    industry: "Education",
    features: [
      "Custom-trained embeddings for educational content and student understanding",
      "Multimodal search across course materials, videos, and student submissions",
      "Agentic workflows for automated grading and adaptive feedback",
      "Personalized learning path recommendations",
      "Semantic search across 5M+ educational resources",
      "Intelligent content matching and curriculum optimization"
    ],
    benefits: [
      "55% improvement in student engagement through personalized learning",
      "45% reduction in instructor workload via automated workflows",
      "Sub-second search across 5M+ educational resources",
      "90% accuracy in automated assessment and feedback"
    ],
    technologies: ["Custom Embeddings", "Multimodal Vector Search", "Agentic Workflows", "In-House Model Hosting"],
    caseStudy: {
      company: "EduTech Academy",
      challenge: "Instructors overwhelmed with grading and students struggling to find relevant learning materials across vast content libraries",
      solution: "Deployed custom educational embeddings, multimodal search for content discovery, and agentic workflows for automated grading and personalized learning paths",
      results: "55% higher engagement, 45% less instructor workload, 5M+ resources searchable instantly, 90% grading accuracy"
    }
  },
  "manufacturing-iot": {
    title: "Manufacturing IoT",
    description: "Vector search and custom embeddings enable predictive maintenance and quality optimization",
    icon: "🏭",
    industry: "Manufacturing",
    features: [
      "Vector search across sensor data, maintenance logs, and quality reports",
      "Custom embeddings trained on manufacturing patterns and failure modes",
      "Agentic workflows for automated quality control and supply chain decisions",
      "Multimodal analysis of sensor data, images, and production metrics",
      "Real-time anomaly detection with predictive maintenance alerts",
      "Distributed inference for global factory operations"
    ],
    benefits: [
      "75% reduction in unplanned downtime through predictive maintenance",
      "30% improvement in Overall Equipment Effectiveness (OEE)",
      "Process 100M+ sensor readings/day with real-time analysis",
      "40% reduction in quality defects through intelligent workflows"
    ],
    technologies: ["Multimodal Vector Search", "Custom Embeddings", "Agentic Workflows", "Distributed Inference", "IoT Integration"],
    caseStudy: {
      company: "SmartManufacturing Co.",
      challenge: "Unexpected equipment failures causing $5M+ in annual downtime costs, and quality control relying on manual inspection leading to defects",
      solution: "Implemented vector search across sensor data and maintenance logs, custom-trained embeddings on failure patterns, and agentic workflows for automated quality control and predictive maintenance",
      results: "75% less downtime, 30% higher OEE, 100M+ sensor readings processed daily, 40% fewer defects"
    }
  },
  "real-estate-portal": {
    title: "Real Estate Portal",
    description: "Multimodal search and agentic workflows transform property discovery and lead management",
    icon: "🏠",
    industry: "Real Estate",
    features: [
      "Multimodal vector search across property images, descriptions, and neighborhood data",
      "Custom embeddings trained on real estate semantics and preferences",
      "Agentic workflows for automated lead qualification and scheduling",
      "Semantic property matching based on buyer preferences",
      "Intelligent market analysis and pricing recommendations",
      "Automated document processing and contract management"
    ],
    benefits: [
      "65% increase in lead conversion through intelligent matching",
      "50% reduction in time-to-match properties to buyers",
      "Process 1M+ property listings with sub-second search",
      "40% improvement in agent productivity via automated workflows"
    ],
    technologies: ["Multimodal Vector Search", "Custom Embeddings", "Agentic Workflows", "Distributed Inference"],
    caseStudy: {
      company: "PrimeRealty Group",
      challenge: "Low conversion rates from generic keyword search and manual lead qualification causing lengthy sales cycles and missed opportunities",
      solution: "Deployed multimodal vector search for property images and descriptions, custom-trained embeddings on buyer preferences, and agentic workflows for automated lead qualification and scheduling",
      results: "65% higher conversions, 50% faster property matching, 1M+ listings searchable instantly, 40% more agent productivity"
    }
  }
};

interface UseCasePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const { slug } = await params;
  const useCase = useCases[slug as keyof typeof useCases];

  if (!useCase) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative isolate min-h-[70vh] flex items-center">
        <div className="mx-auto max-w-[90rem] px-3 py-16 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{useCase.icon}</span>
                <span className="text-sm font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
                  {useCase.industry}
                </span>
              </div>
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {useCase.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-400 sm:text-xl">
                {useCase.description}
              </p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/use-cases">View All Use Cases</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 blur-2xl" />
              <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {useCase.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-zinc-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Core Features
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Everything you need to build and scale your {useCase.title.toLowerCase()}
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCase.features.map((feature, index) => (
              <div key={index} className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 sm:py-20 bg-zinc-900/30">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Technology Stack
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Built with modern, proven technologies
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {useCase.technologies.map((tech, index) => (
              <span key={index} className="px-4 py-2 rounded-lg border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Success Story
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Real results from {useCase.caseStudy.company}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">The Challenge</h3>
                  <p className="text-zinc-400 leading-relaxed">{useCase.caseStudy.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Our Solution</h3>
                  <p className="text-zinc-400 leading-relaxed">{useCase.caseStudy.solution}</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h3 className="text-xl font-semibold text-foreground mb-4">The Results</h3>
                <p className="text-zinc-400 leading-relaxed">{useCase.caseStudy.results}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to build your {useCase.title.toLowerCase()}?
            </h2>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your specific needs.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/use-cases">Explore Other Use Cases</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(useCases).map((slug) => ({
    slug,
  }));
}
