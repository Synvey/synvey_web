import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Reveal from "@/components/Reveal";
import MermaidDiagram from "@/components/MermaidDiagram";

const useCases = {
  "ecommerce-platform": {
    title: "Multimodal Product Search & Discovery",
    industry: "Retail & E-commerce",
    problemStatement: "Legacy keyword-based search systems fail to handle semantic queries across 10M+ SKU catalogs, resulting in 67% search relevance accuracy, poor product discovery, and suboptimal conversion rates.",
    architectureDiagram: `graph TB
      A[User Query] --> B[Vector Search Engine<br/>Sub-50ms latency]
      B --> C[Product Catalog<br/>10M+ SKUs]
      B --> D[Image Database<br/>Custom Embeddings]
      B --> E[Review Database<br/>Sentiment Analysis]
      F[AI Agents] --> G[Dynamic Pricing<br/>500K+ Products]
      F --> H[Inventory Management<br/>2M+ Units]
      F --> I[Customer Service<br/>78% Automation]
      G --> J[(ERP System)]
      H --> J
      I --> K[(CRM)]
      B --> L[Recommendation Engine<br/>2.5M Daily Interactions]
      L --> M[User Profiles<br/>Personalization]
      N[Distributed Infrastructure<br/>100K+ QPS] --> B
      N --> F
      N --> L
      
      style B fill:#6366f1,stroke:#4f46e5,color:#fff
      style F fill:#8b5cf6,stroke:#7c3aed,color:#fff
      style L fill:#3b82f6,stroke:#2563eb,color:#fff
      style N fill:#10b981,stroke:#059669,color:#fff`,
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
    architectureDiagram: `graph TB
      A[Clinician Query] --> B[Medical Vector Search<br/>Sub-800ms latency]
      B --> C[EHR System<br/>10M+ Records]
      B --> D[Medical Imaging<br/>DICOM Files]
      B --> E[Lab Results<br/>Real-time Data]
      B --> F[Research Papers<br/>Clinical Guidelines]
      G[AI Agents] --> H[Clinical Decision Support<br/>15+ Data Sources]
      G --> I[Care Coordination<br/>500+ Providers]
      G --> J[Medication Reconciliation<br/>50K+ Monthly]
      H --> K[(Patient Database)]
      I --> K
      J --> K
      L[HIPAA-Compliant<br/>On-Premise Hosting] --> B
      L --> G
      M[Custom Medical Embeddings<br/>1024-dimensional] --> B
      
      style B fill:#6366f1,stroke:#4f46e5,color:#fff
      style G fill:#8b5cf6,stroke:#7c3aed,color:#fff
      style L fill:#dc2626,stroke:#b91c1c,color:#fff
      style M fill:#10b981,stroke:#059669,color:#fff`,
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
    architectureDiagram: `graph TB
      A[Transaction Stream<br/>1.2M+ Daily] --> B[Real-time Anomaly Detection<br/>Sub-50ms p99]
      B --> C[Vector Search Engine<br/>512-dim Embeddings]
      C --> D[Historical Fraud Database<br/>50M+ Labeled Transactions]
      C --> E[Behavioral Patterns<br/>User Profiles]
      F[AI Agents] --> G[Compliance Automation<br/>12+ Jurisdictions]
      F --> H[Risk Assessment<br/>500K+ Profiles]
      F --> I[AML Screening<br/>800K+ Monthly]
      G --> J[(Regulatory Database)]
      H --> K[(Customer Database)]
      I --> K
      L[Distributed Inference<br/>99.99% Availability] --> B
      L --> F
      M[Alert System<br/>95.2% Precision] --> N[Fraud Analysts]
      B --> M
      
      style B fill:#6366f1,stroke:#4f46e5,color:#fff
      style F fill:#8b5cf6,stroke:#7c3aed,color:#fff
      style L fill:#10b981,stroke:#059669,color:#fff
      style M fill:#ef4444,stroke:#dc2626,color:#fff`,
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
    architectureDiagram: `graph TB
      A[Student Query] --> B[Content Discovery<br/>320ms Latency]
      B --> C[Course Materials<br/>5M+ Resources]
      B --> D[Video Lectures<br/>Transcripts]
      B --> E[Research Papers<br/>Academic Content]
      F[AI Agents] --> G[Automated Grading<br/>150K+ Monthly]
      F --> H[Learning Path Generation<br/>2.8M Weekly Interactions]
      F --> I[At-Risk Identification<br/>3.2 Weeks Early]
      G --> J[(Assignment Database)]
      H --> K[(Student Profiles)]
      I --> K
      L[Custom Educational Embeddings<br/>768-dim, 200+ Subjects] --> B
      M[Learning Gap Analysis] --> H
      K --> M
      
      style B fill:#6366f1,stroke:#4f46e5,color:#fff
      style F fill:#8b5cf6,stroke:#7c3aed,color:#fff
      style L fill:#10b981,stroke:#059669,color:#fff
      style M fill:#f59e0b,stroke:#d97706,color:#fff`,
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
    architectureDiagram: `graph TB
      A[IoT Sensors<br/>15K+ Devices] --> B[Data Ingestion<br/>100M+ Daily Readings]
      B --> C[Vector Search Engine<br/>512-dim Embeddings]
      C --> D[Historical Data<br/>3 Years Sensor Logs]
      C --> E[Maintenance Records<br/>Failure Patterns]
      F[AI Agents] --> G[Predictive Maintenance<br/>4-6 Weeks Advance]
      F --> H[Quality Control<br/>Computer Vision]
      F --> I[Supply Chain Optimization<br/>800K+ Transactions]
      G --> J[Maintenance Scheduler<br/>92% Accuracy]
      H --> K[Quality Database<br/>96.2% Detection]
      I --> L[(ERP/Inventory)]
      M[Real-time Analytics<br/>12 Facilities] --> B
      N[OEE Optimization<br/>68% to 88%] --> G
      
      style C fill:#6366f1,stroke:#4f46e5,color:#fff
      style F fill:#8b5cf6,stroke:#7c3aed,color:#fff
      style M fill:#10b981,stroke:#059669,color:#fff
      style N fill:#f59e0b,stroke:#d97706,color:#fff`,
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
    architectureDiagram: `graph TB
      A[Buyer Query<br/>Natural Language] --> B[Semantic Property Search<br/>280ms Latency]
      B --> C[Property Listings<br/>1.2M+ Properties]
      B --> D[Property Images<br/>Multimodal Search]
      B --> E[Neighborhood Data<br/>Schools, Amenities]
      B --> F[Market Analytics<br/>2.4M+ Data Points]
      G[AI Agents] --> H[Lead Qualification<br/>25K+ Monthly]
      G --> I[Automated Scheduling<br/>8,500+ Viewings]
      G --> J[Pricing Recommendations<br/>91% Accuracy]
      H --> K[(CRM System)]
      I --> K
      J --> L[(Property Database)]
      M[Custom Embeddings<br/>768-dim, Real Estate] --> B
      N[Agent Productivity<br/>2.3x Improvement] --> G
      
      style B fill:#6366f1,stroke:#4f46e5,color:#fff
      style G fill:#8b5cf6,stroke:#7c3aed,color:#fff
      style M fill:#10b981,stroke:#059669,color:#fff
      style N fill:#f59e0b,stroke:#d97706,color:#fff`,
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
        {/* Subtle gradient background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-10rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute right-[-18rem] bottom-[-12rem] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="mb-6 flex justify-center">
                <span className="text-sm font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
                  {useCase.industry}
                </span>
              </div>
            </Reveal>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl mb-8">
              <TextGenerateEffect words={useCase.title} />
            </h1>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/use-cases">View All Use Cases</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-12 sm:py-16 border-t border-zinc-800">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                <TextGenerateEffect words="Problem Statement" />
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
                <p className="text-lg leading-relaxed text-zinc-300">
                  {useCase.problemStatement}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Solution Description Section */}
      <section className="py-12 sm:py-16 bg-zinc-900/30">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="text-2xl font-semibold text-foreground mb-8">
                <TextGenerateEffect words="Solution Architecture" />
              </h2>
            </Reveal>
            
            {/* Architecture Diagram */}
            {useCase.architectureDiagram && (
              <div className="mb-10">
                <MermaidDiagram chart={useCase.architectureDiagram} />
              </div>
            )}
            
            {/* Text Description */}
            <Reveal delay={240}>
              <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <p className="text-lg leading-relaxed text-zinc-300">
                  {useCase.solutionDescription}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                <TextGenerateEffect words="Impact Metrics" />
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {useCase.impactMetrics.map((metric, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed text-zinc-300">{metric}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 bg-zinc-900/30 border-t border-zinc-800">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                <TextGenerateEffect words="Technology Stack" />
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-wrap gap-3 justify-center">
                {useCase.technologies.map((tech, index) => (
                  <span key={index} className="px-5 py-2.5 rounded-lg border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-sm font-medium hover:border-indigo-500/50 hover:bg-zinc-800 transition-all">
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="text-center">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to transform your {useCase.industry.toLowerCase()}?
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results for your specific needs.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/use-cases">Explore Other Use Cases</Link>
                </Button>
              </div>
            </Reveal>
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
