import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

const useCases = {
  "ecommerce-platform": {
    title: "Multimodal Product Search & Discovery",
    industry: "Retail & E-commerce",
    problemStatement: "Legacy keyword-based search systems fail to handle semantic queries across 10M+ SKU catalogs, resulting in 67% search relevance accuracy, poor product discovery, and suboptimal conversion rates.",
    solutionDescription: "Deployed multimodal vector search architecture processing product images, descriptions, reviews, and video content through custom-trained embeddings (768-dimensional vectors) optimized for e-commerce semantics. Agentic workflows orchestrate dynamic pricing optimization across 500K+ products using real-time inventory monitoring (2M+ units), competitor analysis, and demand forecasting. Distributed inference infrastructure handles 100K+ queries/second with sub-50ms p95 latency, maintaining 99.97% uptime through multi-region deployment.",
    impactMetrics: [
      "Search relevance accuracy improved from 67% to 94.3% (41% absolute increase) with vector-based semantic retrieval",
      "Conversion rates increased 40% through AI-driven recommendations processing 2.5M daily user interactions with 23% CTR",
      "Cart abandonment reduced 60% via intelligent inventory and pricing workflows, generating $3.2M annual cost savings",
      "Query throughput scaled to 100K+ QPS with distributed inference, supporting 10x traffic spikes during peak events",
      "Average order value increased 18% through personalized recommendations, while inventory optimization reduced stockouts by 42% and overstock by 38%",
      "Customer service automation handles 78% of inquiries autonomously with 89% satisfaction scores, reducing support costs by $1.8M annually"
    ],
    technologies: ["Multimodal Vector Search", "Custom Embeddings", "Agentic Workflows", "In-House Model Hosting", "Distributed Inference"]
  },
  "healthcare-management": {
    title: "Clinical Intelligence & Medical Document Search",
    industry: "Healthcare",
    problemStatement: "Fragmented healthcare systems with 10M+ medical documents across EHRs, imaging, and research papers require 12+ minutes for traditional database queries, causing delayed diagnoses (4.2 hours average) and inefficient care coordination.",
    solutionDescription: "Implemented custom-trained medical embeddings (1024-dimensional vectors) fine-tuned on clinical terminology, enabling multimodal vector search across patient records, imaging studies, lab results, and research papers with <800ms average response time. Agentic workflows automate clinical decision support by analyzing patient data across 15+ sources, while care coordination agents optimize appointment scheduling across 500+ providers. HIPAA-compliant on-premise model hosting ensures zero data exfiltration risk with all inference occurring within enterprise infrastructure.",
    impactMetrics: [
      "Document search latency reduced from 12+ minutes to <1 second (99.9% improvement) across 10M+ records with 99.2% semantic accuracy",
      "Diagnosis time decreased from 4.2 hours to 1.7 hours (60% reduction) while maintaining 96.8% diagnostic accuracy through intelligent workflows",
      "Administrative burden reduced by 45 hours per provider per week, enabling focus on patient care and improving provider satisfaction by 34%",
      "Appointment no-show rates reduced 34% through automated scheduling optimization, improving resource utilization by 28%",
      "Medication reconciliation agents process 50K+ prescriptions monthly, identifying 1,200+ potential drug interactions (96% detection rate) that would be missed manually",
      "Patient outcomes improved: 23% reduction in readmission rates, 18% improvement in treatment adherence, 31% faster time-to-treatment initiation"
    ],
    technologies: ["Custom Embeddings", "Multimodal Vector Search", "Agentic Workflows", "In-House Model Hosting", "HIPAA-Compliant Infrastructure"]
  },
  "financial-services": {
    title: "Real-Time Fraud Detection & Compliance Automation",
    industry: "Financial Services",
    problemStatement: "Rule-based fraud detection systems generate 70% false positives on 1.2M+ daily transactions, causing customer friction, while manual compliance reporting requires 240 analyst-hours monthly across 12+ jurisdictions.",
    solutionDescription: "Deployed vector search architecture analyzing transaction patterns, behavioral data, and historical fraud cases using custom embeddings trained on 50M+ labeled transactions (512-dimensional vectors). Real-time anomaly detection operates at <50ms p99 latency through distributed inference infrastructure processing 5M+ API calls daily with 99.99% availability. Agentic compliance workflows automate regulatory reporting across multiple jurisdictions, generating reports in 8 hours that previously required 240 hours, while risk assessment agents analyze 500K+ customer profiles to generate real-time risk scores.",
    impactMetrics: [
      "Fraud detection precision improved to 95.2% with 92.8% recall, reducing false positives by 70% compared to rule-based systems",
      "Compliance reporting time reduced from 240 hours to 8 hours monthly (97% reduction) while maintaining 100% regulatory accuracy across 12+ jurisdictions",
      "Annual cost savings of $2.4M from reduced manual review costs ($1.2M) and improved customer experience ($1.2M retention value)",
      "Transaction monitoring detects anomalies in real-time with 94.7% accuracy, flagging suspicious patterns 3-5 days faster than human analysts",
      "AML screening processes 800K+ transactions monthly, identifying 2,400+ suspicious activities with 88% true positive rate",
      "Credit losses reduced 18% through proactive risk intervention enabled by real-time risk scoring across 500K+ customer profiles",
      "Distributed inference infrastructure handles 1.2M+ transactions daily across 45 countries with regional data residency compliance"
    ],
    technologies: ["Multimodal Vector Search", "Custom Embeddings", "Agentic Workflows", "Distributed Inference", "PCI-Compliant Infrastructure"]
  },
  "education-technology": {
    title: "Personalized Learning & Educational Content Discovery",
    industry: "Education",
    problemStatement: "Instructors spend 45+ hours weekly on manual grading across 150K+ monthly submissions, while students struggle to discover relevant materials across 5M+ educational resources using traditional search methods.",
    solutionDescription: "Implemented custom educational embeddings (768-dimensional vectors) fine-tuned on domain-specific terminology across 200+ subject areas, enabling multimodal vector search across course materials, video lectures, research papers, and student submissions with 320ms average query latency. Agentic grading workflows process 12+ assignment types using rubric-based evaluation with 90.3% accuracy compared to human graders. Personalized learning path generation analyzes 2.8M weekly student interactions to create adaptive curricula, while content recommendation engines identify learning gaps through vector similarity analysis.",
    impactMetrics: [
      "Student engagement increased 55% through personalized learning paths, with learning outcomes improving 38% as measured by concept mastery rates",
      "Instructor workload reduced by 45 hours per week via automated grading workflows processing 150K+ submissions monthly with 90.3% accuracy",
      "Content discovery latency reduced to sub-second across 5M+ resources with 91% relevance accuracy, compared to 3-5 minute manual searches",
      "At-risk student identification improved by 3.2 weeks earlier than traditional methods, reducing dropout rates by 28% through proactive intervention",
      "Concept mastery rates improved 42% through intelligent content recommendations based on learning gap analysis",
      "Automated assessment generation creates 2,400+ unique questions monthly from source materials with 94% validity scores",
      "Curriculum effectiveness improved 31% and student satisfaction scores increased 24% through data-driven insights from 15M+ daily data points"
    ],
    technologies: ["Custom Embeddings", "Multimodal Vector Search", "Agentic Workflows", "In-House Model Hosting"]
  },
  "manufacturing-iot": {
    title: "Predictive Maintenance & Industrial IoT Analytics",
    industry: "Manufacturing",
    problemStatement: "Unexpected equipment failures across 2,400+ machines in 12 facilities cause $5.8M annual downtime costs, while manual quality control processes 500K+ monthly inspections with inconsistent defect detection rates.",
    solutionDescription: "Deployed vector search architecture processing 100M+ daily sensor readings from 15K+ IoT devices, using custom embeddings (512-dimensional vectors) trained on 3 years of historical sensor data, maintenance logs, and quality reports. Predictive maintenance agents analyze vibration patterns, temperature fluctuations, and operational parameters to identify failure patterns 4-6 weeks before breakdown with 89.7% accuracy. Agentic workflows automate quality control through computer vision and vector similarity matching, while supply chain optimization agents analyze 800K+ inventory transactions to optimize procurement decisions.",
    impactMetrics: [
      "Unplanned downtime reduced 75% through predictive maintenance, saving $5.8M annually in production losses and extending equipment lifespan by 28%",
      "Overall Equipment Effectiveness (OEE) improved from 68% to 88% (30% absolute increase) through intelligent process optimization",
      "Quality defect detection accuracy improved to 96.2%, reducing quality-related returns by 40% and improving first-pass yield from 87% to 94%",
      "Maintenance costs optimized by 34% through precision scheduling (92% accuracy) while processing 100M+ sensor readings daily in real-time",
      "Inventory carrying costs reduced 27% and on-time delivery rates improved from 78% to 94% through supply chain optimization workflows",
      "Production throughput increased 22% and energy consumption reduced 19% through data-driven process optimization across all facilities",
      "Waste reduction of 31% achieved through real-time production monitoring and intelligent decision-making across 12 manufacturing facilities"
    ],
    technologies: ["Multimodal Vector Search", "Custom Embeddings", "Agentic Workflows", "Distributed Inference", "IoT Integration"]
  },
  "real-estate-portal": {
    title: "Intelligent Property Matching & Lead Qualification",
    industry: "Real Estate",
    problemStatement: "Generic keyword search across 1.2M+ property listings yields low conversion rates, while manual lead qualification processes 25K+ monthly inquiries inefficiently, resulting in 14-day average time-to-match and missed opportunities.",
    solutionDescription: "Implemented multimodal vector search indexing property images, descriptions, neighborhood data, and market analytics using custom embeddings (768-dimensional vectors) trained on real estate terminology and buyer preferences. Semantic property matching processes natural language queries in 280ms average latency, understanding intent like 'family-friendly homes near good schools' and matching to relevant properties with 93% accuracy. Agentic lead qualification workflows score and prioritize 25K+ monthly inquiries with 87% accuracy, while automated scheduling agents coordinate 8,500+ property viewings monthly, optimizing agent calendars and reducing no-show rates.",
    impactMetrics: [
      "Lead conversion increased 65% through intelligent property matching analyzing 500K+ buyer profiles and preferences with 93% match accuracy",
      "Time-to-match reduced from 14 days to 7 days (50% reduction) through automated lead qualification and scheduling workflows",
      "Agent productivity increased 40%, enabling each agent to handle 2.3x more transactions through workflow automation",
      "Property search latency reduced to sub-second across 1.2M+ listings with 93% relevance accuracy, compared to 5-10 minute manual searches",
      "Pricing recommendation accuracy of 91% based on analysis of 2.4M+ data points, reducing time-on-market by 31%",
      "Document processing automation handles 12K+ contracts monthly with 96% extraction accuracy, reducing processing time from 5 days to 8 hours",
      "Customer satisfaction scores improved 28% due to faster response times and better property matches, while no-show rates reduced 38%"
    ],
    technologies: ["Multimodal Vector Search", "Custom Embeddings", "Agentic Workflows", "Distributed Inference"]
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
      <section className="relative isolate py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="text-sm font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
                {useCase.industry}
              </span>
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl mb-8">
              {useCase.title}
            </h1>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/use-cases">View All Use Cases</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-12 sm:py-16 border-t border-zinc-800">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Problem Statement</h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              {useCase.problemStatement}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Description Section */}
      <section className="py-12 sm:py-16 bg-zinc-900/30">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Solution Architecture</h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              {useCase.solutionDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Impact Metrics</h2>
            <ul className="space-y-4">
              {useCase.impactMetrics.map((metric, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-base leading-relaxed text-zinc-300">{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 bg-zinc-900/30 border-t border-zinc-800">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {useCase.technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 rounded-lg border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-sm font-medium">
                  {tech}
                </span>
              ))}
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
