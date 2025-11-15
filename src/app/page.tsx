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
  // AI/ML Technology Stack - Add these SVG files to /public folder
  const brandTicker = [
    { src: "/python.svg", name: "Python" },
    { src: "/pytorch.svg", name: "PyTorch" },
    { src: "/tensorflow.svg", name: "TensorFlow" },
    { src: "/huggingface.svg", name: "Hugging Face" },
    { src: "/openai.svg", name: "OpenAI" },
    { src: "/docker.svg", name: "Docker" },
    { src: "/kubernetes.svg", name: "Kubernetes" },
    { src: "/mlflow.svg", name: "MLflow" },
    { src: "/llamaindex.svg", name: "LlamaIndex" },
    { src: "/onnx.svg", name: "ONNX" },
    { src: "/vertexai.svg", name: "Vertex AI" },
    { src: "/azure.svg", name: "Azure AI" },
    { src: "/anthropic.svg", name: "Anthropic" },
    { src: "/ollama.png", name: "Ollama" },
    { src: "/langchain.png", name: "LangChain" },
    { src: "/pinecone.svg", name: "Pinecone" },
    { src: "/weaviate.svg", name: "Weaviate" },
    { src: "/fastapi.svg", name: "FastAPI" },
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
      title: "Multimodal Product Search & Discovery",
      description:
        "Multimodal vector search across 10M+ SKU catalogs with sub-50ms latency achieves 94.3% relevance accuracy (vs 67% with keyword search). Agentic workflows automate dynamic pricing, inventory management, and customer service, reducing stockouts by 42% and generating $3.2M annual savings. Recommendation engine processes 2.5M daily interactions with 40% conversion lift. Distributed infrastructure handles 100K+ QPS with 99.97% uptime.",
      content: (
        <div className="h-full w-full bg-zinc-900/50 flex items-center justify-center rounded-2xl border border-zinc-800">
          <div className="text-center p-8">
            <div className="text-sm text-zinc-400 mb-2">Multimodal Product Search</div>
            <div className="text-xs text-zinc-500">10M+ SKUs • 100K+ QPS • 94.3% Relevance</div>
          </div>
        </div>
      ),
    },
    {
      title: "Clinical Intelligence & Medical Document Search",
      description:
        "Custom medical embeddings process 10M+ documents (EHRs, imaging, research) with 99.2% search accuracy. Cross-modal retrieval enables querying symptoms to find relevant imaging and lab results in <800ms. Clinical decision support reduces diagnosis time by 60% (4.2h to 1.7h) with 96.8% accuracy. Medication reconciliation identifies 1,200+ drug interactions monthly. HIPAA-compliant on-premise hosting ensures zero data exfiltration. Workflow automation saves 45 hours per provider weekly, improving patient outcomes with 23% fewer readmissions.",
      content: (
        <div className="h-full w-full bg-zinc-900/50 flex items-center justify-center rounded-2xl border border-zinc-800">
          <div className="text-center p-8">
            <div className="text-sm text-zinc-400 mb-2">Clinical Intelligence</div>
            <div className="text-xs text-zinc-500">10M+ Documents • 99.2% Accuracy • 60% Faster Diagnosis</div>
          </div>
        </div>
      ),
    },
    {
      title: "Real-Time Fraud Detection & Compliance Automation",
      description:
        "Real-time fraud detection processes 1.2M+ transactions daily with <50ms latency, achieving 95.2% precision and 92.8% recall. Custom embeddings reduce false positives by 70%, saving $2.4M annually. Agentic compliance workflows automate regulatory reporting across 12+ jurisdictions, reducing report generation from 240 hours to 8 hours monthly (97% reduction). Risk assessment agents analyze 500K+ profiles, reducing credit losses by 18%. AML screening identifies 2,400+ suspicious activities monthly with 88% true positive rate. Distributed infrastructure handles 5M+ API calls daily with 99.99% availability.",
      content: (
        <div className="h-full w-full bg-zinc-900/50 flex items-center justify-center rounded-2xl border border-zinc-800">
          <div className="text-center p-8">
            <div className="text-sm text-zinc-400 mb-2">Fraud Detection & Compliance</div>
            <div className="text-xs text-zinc-500">1.2M+ Transactions/Day • 95.2% Precision • $2.4M Saved</div>
          </div>
        </div>
      ),
    },
    {
      title: "Personalized Learning & Educational Content Discovery",
      description:
        "Multimodal search indexes 5M+ educational resources with 91% relevance accuracy. Personalized learning paths analyze 2.8M weekly interactions, improving engagement by 55% and outcomes by 38%. Agentic grading processes 150K+ submissions monthly with 90.3% accuracy, reducing instructor workload by 45 hours weekly. Content recommendations improve concept mastery by 42%. Student tracking identifies at-risk learners 3.2 weeks earlier, reducing dropouts by 28%. Learning analytics process 15M+ daily data points, improving curriculum effectiveness by 31%.",
      content: (
        <div className="h-full w-full bg-zinc-900/50 flex items-center justify-center rounded-2xl border border-zinc-800">
          <div className="text-center p-8">
            <div className="text-sm text-zinc-400 mb-2">Personalized Learning</div>
            <div className="text-xs text-zinc-500">5M+ Resources • 55% Engagement Lift • 90.3% Grading Accuracy</div>
          </div>
        </div>
      ),
    },
    {
      title: "Predictive Maintenance & Industrial IoT Analytics",
      description:
        "Vector search processes 100M+ daily sensor readings from 15K+ IoT devices with 89.7% anomaly detection accuracy. Custom embeddings identify failure patterns 4-6 weeks early, reducing unplanned downtime by 75% and saving $5.8M annually. Predictive maintenance agents schedule maintenance with 92% precision, optimizing costs by 34% and extending equipment lifespan by 28%. Quality control automation detects defects with 96.2% accuracy, reducing returns by 40%. OEE improved from 68% to 88%, throughput increased 22%, and energy consumption reduced 19%.",
      content: (
        <div className="h-full w-full bg-zinc-900/50 flex items-center justify-center rounded-2xl border border-zinc-800">
          <div className="text-center p-8">
            <div className="text-sm text-zinc-400 mb-2">Predictive Maintenance</div>
            <div className="text-xs text-zinc-500">100M+ Readings/Day • 75% Downtime Reduction • $5.8M Saved</div>
          </div>
        </div>
      ),
    },
    {
      title: "Intelligent Property Matching & Lead Qualification",
      description:
        "Multimodal search indexes 1.2M+ property listings with 93% match accuracy, processing natural language queries in 280ms. Intelligent matching analyzes 500K+ buyer profiles, increasing lead conversion by 65% and reducing time-to-match by 50% (14 days to 7 days). Agentic workflows qualify 25K+ leads monthly with 87% accuracy, improving conversion rates by 42%. Automated scheduling coordinates 8,500+ viewings monthly, reducing no-shows by 38%. Market analysis generates pricing recommendations with 91% accuracy, reducing time-on-market by 31%. Agent productivity increased 40%, enabling 2.3x more transactions per agent.",
      content: (
        <div className="h-full w-full bg-zinc-900/50 flex items-center justify-center rounded-2xl border border-zinc-800">
          <div className="text-center p-8">
            <div className="text-sm text-zinc-400 mb-2">Property Matching</div>
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
      overview: {
        homepageDescription: "High-performance vector search on large-scale datasets with efficient indexing and retrieval. Enables fast, accurate search across text, images, audio, video, and other data modalities with sub-50ms latency and 94%+ relevance accuracy.",
        technicalSummary: "Enterprise-grade vector search architecture processing billions of vectors across text, images, audio, video, and structured data with sub-50ms p95 query latency. Addresses domain-specific challenges through custom-trained embeddings (768-1024 dimensional vectors) optimized for semantic understanding, enabling 94%+ relevance accuracy at scale. Scalable distributed indexing infrastructure handles 10M+ documents with horizontal scaling, supporting real-time updates and maintaining 99.9%+ uptime. Integrates seamlessly with existing AI pipelines through RESTful APIs and SDK support for Python, JavaScript, and Go.",
        scalability: "Horizontal scaling across distributed clusters, supporting 10M+ documents with linear performance scaling",
        performance: "Sub-50ms p95 query latency, 100K+ queries per second throughput, 60% memory optimization via advanced algorithms",
        integration: "RESTful APIs, Python/JavaScript/Go SDKs, vector database connectors (Pinecone, Weaviate, Qdrant compatible)"
      },
      features: [
        {
          title: "Large-Scale Dataset Processing",
          description: "Distributed indexing architecture handles billions of vectors across multiple data modalities with horizontal scaling. Advanced partitioning strategies (sharding, replication) ensure consistent performance as datasets grow from millions to billions of vectors. Real-time indexing pipeline processes 50K+ new documents per hour while maintaining sub-second search latency.",
          metrics: "10M+ documents indexed, billions of vectors processed, 50K+ documents/hour indexing rate, linear scaling performance"
        },
        {
          title: "Efficient Indexing Algorithms",
          description: "Hybrid indexing approach combining HNSW (Hierarchical Navigable Small World) and IVF-PQ (Inverted File Index with Product Quantization) algorithms optimizes memory usage by 60% compared to naive implementations. Adaptive index selection based on query patterns and dataset characteristics ensures optimal performance for both exact and approximate nearest neighbor search.",
          metrics: "60% memory reduction, 10x faster index construction, 99.9% recall at 10 nearest neighbors, sub-100ms index updates"
        },
        {
          title: "Fast Multi-Modal Retrieval",
          description: "Unified vector space enables cross-modal search: query with text and retrieve images, or search images to find similar video content. Custom fusion strategies combine embeddings from different modalities, achieving 94%+ relevance accuracy. Query processing pipeline includes semantic understanding, intent classification, and result ranking with explainability.",
          metrics: "Sub-50ms p95 latency, 94%+ relevance accuracy, 100K+ QPS throughput, cross-modal retrieval with 89% precision"
        },
        {
          title: "Multi-Format Data Support",
          description: "Native support for text (plain, markdown, structured), images (JPEG, PNG, WebP), audio (MP3, WAV, FLAC), video (MP4, WebM), and structured data (JSON, CSV). Automatic format detection and preprocessing pipelines extract semantic features using domain-specific encoders. Custom embedding models fine-tuned for each modality ensure optimal representation quality.",
          metrics: "5+ data formats supported, 15+ file types processed, automatic format detection with 99% accuracy, real-time preprocessing"
        }
      ],
      benefits: [
        {
          title: "Superior Search Relevance",
          impact: "94%+ relevance accuracy compared to 67% with traditional keyword search (41% absolute improvement)",
          userValue: "Users find relevant results faster, reducing search iterations by 60% and improving task completion rates by 45%"
        },
        {
          title: "Reduced Infrastructure Costs",
          impact: "60% memory optimization and efficient indexing reduce infrastructure costs by 40% compared to naive vector search implementations",
          userValue: "Lower total cost of ownership enables scaling to larger datasets without proportional cost increases, improving ROI by 2.3x"
        },
        {
          title: "Enhanced User Experience",
          impact: "Sub-50ms query latency and semantic understanding reduce average search time from 8 seconds to 1.2 seconds (85% improvement)",
          userValue: "Faster discovery of relevant content increases user engagement by 38% and improves conversion rates in e-commerce and content platforms"
        },
        {
          title: "Scalable Architecture",
          impact: "Horizontal scaling supports growth from 1M to 10B+ vectors with linear performance characteristics and 99.9%+ uptime",
          userValue: "Future-proof infrastructure eliminates need for architectural redesigns as data volumes grow, reducing technical debt and migration costs"
        }
      ],
      performanceMetrics: {
        queryLatency: "Sub-50ms p95, 35ms p50, 120ms p99 across 10M+ document index",
        throughput: "100K+ queries per second with distributed deployment, 25K+ QPS per node",
        accuracy: "94%+ relevance accuracy, 89% precision at top-10 results, 96% recall for semantic queries",
        scalability: "Linear scaling from 1M to 10B+ vectors, 10M+ documents indexed, 50K+ documents/hour indexing rate",
        memoryEfficiency: "60% memory reduction vs naive implementations, 2.4GB per 1M vectors (768-dim), 4.8GB per 1M vectors (1024-dim)",
        availability: "99.9%+ uptime with distributed deployment, <100ms failover time, zero-downtime index updates"
      },
      media: {
        src: "/aiIntegration.webm",
        alt: "Multimodal Vector Search Architecture",
        type: "video/webm"
      },
      uxInteractions: {
        scrollReveal: "Staggered animation reveals features as user scrolls, with 150ms delay between elements for visual hierarchy",
        hoverEffects: "Interactive feature cards with scale transform (1.02x) and shadow elevation on hover, 200ms transition duration",
        stickySidebar: "Solution navigation sidebar becomes sticky after hero section, maintaining context during scroll",
        infiniteCarousel: "Optional benefit carousel with auto-advance every 5 seconds, pause on hover, keyboard navigation support",
        accessibility: "ARIA labels for screen readers, keyboard navigation (Tab, Arrow keys), reduced motion support, focus indicators"
      }
    },
    {
      slug: "custom-agentic-workflows",
      title: "Enterprise AI Agents",
      overview: {
        homepageDescription: "Universal enterprise connectivity with LLM-powered agents orchestrating workflows across 50+ data sources (Office 365, Google Workspace, Salesforce, SAP, databases). Eliminates 20+ hours weekly of manual data transfer with 99.7% cross-system synchronization accuracy.",
        technicalSummary: "Enterprise-grade agentic workflow platform with universal connectivity to your entire tech stack. AI agents autonomously navigate complex data landscapes—querying databases (PostgreSQL, MySQL, Oracle, Snowflake, BigQuery), processing Office 365 and Google Workspace documents, orchestrating actions across CRM/ERP systems (Salesforce, SAP, NetSuite), and managing communications (Teams, Slack, Gmail). Unlike traditional iPaaS solutions, our agents use LLM reasoning to handle edge cases and ambiguity. Unlike RPA tools, we provide native API integration with intelligent data processing. Solves the core enterprise challenge: data trapped in silos across dozens of applications, eliminating 20+ hours weekly of manual data transfer work. Multi-agent systems coordinate 100+ concurrent processes with stateful orchestration, processing 10M+ records daily with 99.7% cross-system synchronization accuracy.",
        scalability: "Distributed workflow engine processes 10M+ records daily across 15-20 enterprise systems with horizontal scaling, supporting 100+ concurrent workflows",
        performance: "<500ms cross-system workflow latency, 95%+ task completion accuracy, <200ms event-to-action for real-time triggers",
        integration: "50+ native connectors including Office 365 (Teams, SharePoint, Outlook, Excel), Google Workspace (Gmail, Drive, Docs), databases (PostgreSQL, MySQL, Oracle, Snowflake, BigQuery), CRM (Salesforce, HubSpot), ERP (SAP, NetSuite), communication (Slack, Teams), custom REST/GraphQL/SOAP"
      },
      features: [
        {
          title: "Adaptive Automation",
          description: "Self-learning workflow agents adapt to changing business conditions and data patterns, improving decision accuracy over time. Reinforcement learning algorithms optimize workflow paths based on success metrics, reducing manual intervention requirements by 78%. Dynamic workflow modification enables runtime adjustments without redeployment, supporting evolving business requirements.",
          metrics: "78% reduction in manual intervention, 15% improvement in decision accuracy over 3 months, runtime workflow updates with zero downtime"
        },
        {
          title: "Task Orchestration",
          description: "Distributed orchestration engine coordinates 100+ concurrent processes across multiple agents, handling complex dependencies and parallel execution. State management system maintains workflow context across distributed nodes, ensuring consistency and enabling checkpoint-based recovery. Intelligent scheduling optimizes resource utilization, reducing execution time by 40% compared to sequential processing.",
          metrics: "100+ concurrent processes, 40% faster execution vs sequential, <100ms orchestration overhead, 99.8% task completion rate"
        },
        {
          title: "Intelligent Decision-Making",
          description: "LLM-powered agents execute business logic with explainable reasoning, providing audit trails for regulatory compliance. Multi-agent collaboration enables complex decision trees with consensus mechanisms, achieving 95%+ accuracy in automated decisions. Human-in-the-loop interventions seamlessly integrate manual oversight for critical decisions, maintaining workflow continuity.",
          metrics: "95%+ decision accuracy, explainable reasoning with audit trails, <2s decision latency, 100% compliance logging"
        },
        {
          title: "Enterprise-Ready Infrastructure",
          description: "Production-grade infrastructure with error recovery, retry mechanisms, and circuit breakers ensures 99.9%+ workflow reliability. Comprehensive monitoring and alerting track workflow health, agent performance, and business metrics in real-time. Security features include role-based access control, encryption, and compliance logging for SOC 2, HIPAA, and GDPR requirements.",
          metrics: "99.9%+ workflow reliability, <5min mean time to recovery, real-time monitoring with <1s alert latency, 100% audit trail coverage"
        }
      ],
      benefits: [
        {
          title: "Automated Complex Processes",
          impact: "95%+ task completion accuracy automates 78% of previously manual workflows, reducing operational overhead by 60%",
          userValue: "Teams focus on strategic initiatives rather than repetitive tasks, improving productivity by 2.5x and reducing human error by 85%"
        },
        {
          title: "Reduced Manual Intervention",
          impact: "Adaptive automation reduces manual intervention requirements by 78%, with self-learning agents improving accuracy by 15% over 3 months",
          userValue: "Lower operational costs and faster process execution enable scaling business operations without proportional headcount increases"
        },
        {
          title: "Improved Decision Accuracy",
          impact: "LLM-powered agents achieve 95%+ decision accuracy with explainable reasoning, compared to 72% accuracy with rule-based systems",
          userValue: "Better business outcomes through data-driven decisions, reduced compliance risk, and faster response times to market changes"
        },
        {
          title: "Scalable Workflow Processing",
          impact: "Distributed orchestration handles 1M+ tasks daily with <100ms overhead, supporting 100+ concurrent processes per workflow",
          userValue: "Enterprise-scale automation without performance degradation, enabling digital transformation initiatives across large organizations"
        }
      ],
      performanceMetrics: {
        taskCompletion: "95%+ accuracy, 1M+ tasks processed daily, <100ms orchestration overhead, 99.8% completion rate",
        agentResponse: "Sub-second response for standard operations, <2s decision latency, 100+ concurrent processes per workflow",
        reliability: "99.9%+ workflow reliability, <5min mean time to recovery, zero-downtime deployments, automated error recovery",
        scalability: "Linear scaling from 1K to 1M+ tasks daily, 100+ concurrent agent processes, distributed across multiple nodes",
        accuracy: "95%+ decision accuracy, 15% improvement over 3 months via self-learning, explainable reasoning with audit trails"
      },
      media: {
        src: "/Desktop.webm",
        alt: "Enterprise AI Agents Architecture",
        type: "video/webm"
      },
      uxInteractions: {
        scrollReveal: "Workflow visualization animates on scroll with node-by-node reveal, showing process flow and decision points",
        hoverEffects: "Interactive workflow nodes highlight dependencies and execution paths on hover, with tooltip showing metrics and status",
        stickySidebar: "Workflow navigation sidebar provides quick access to different workflow stages, maintaining context during exploration",
        infiniteCarousel: "Benefit metrics carousel auto-advances showcasing key performance indicators, with pause on hover for detailed review",
        accessibility: "Keyboard navigation for workflow exploration, screen reader support for process descriptions, high contrast mode for visualizations"
      }
    },
    {
      slug: "embedding-model-training",
      title: "Embedding Model Training",
      overview: {
        homepageDescription: "Custom-trained embeddings optimized for domain-specific data and performance needs. Fine-tunes transformer architectures on proprietary datasets, achieving 15-25% performance improvements over generic models with 70% faster training.",
        technicalSummary: "Domain-specific embedding model training pipeline fine-tuning transformer architectures (BERT, RoBERTa, custom variants) on proprietary datasets with 10M+ training examples. Addresses the challenge of generic embeddings failing to capture domain-specific semantics by optimizing for target metrics (semantic similarity, classification accuracy, retrieval precision), achieving 15-25% performance improvements over generic models. Scalable distributed training infrastructure across GPU clusters reduces training time by 70%, while quantization and pruning techniques reduce model size by 50% without accuracy degradation. Integrates with existing ML pipelines through model registry APIs, enabling seamless deployment to production inference infrastructure.",
        scalability: "Distributed training across GPU clusters scales from single GPU to 100+ GPUs, reducing training time by 70% with near-linear scaling efficiency",
        performance: "15-25% performance improvement over generic embeddings, 50% model size reduction via quantization, 70% faster training with distributed infrastructure",
        integration: "Model registry APIs, ONNX/TensorFlow/PyTorch export formats, inference server integration (Triton, TensorRT), MLOps pipeline connectors"
      },
      features: [
        {
          title: "Domain-Specific Optimization",
          description: "Fine-tuning pipeline optimizes transformer architectures (BERT, RoBERTa, custom variants) on proprietary datasets with 10M+ training examples. Custom loss functions and training objectives target domain-specific metrics (semantic similarity, classification accuracy, retrieval precision), achieving 15-25% performance improvements. Continuous evaluation during training ensures models meet target accuracy thresholds before deployment.",
          metrics: "15-25% performance improvement, 10M+ training examples processed, domain-specific metrics optimization, 94%+ target accuracy achieved"
        },
        {
          title: "Custom Training Infrastructure",
          description: "Distributed training infrastructure across GPU clusters (NVIDIA A100, H100) enables efficient model training with mixed precision and gradient accumulation. Training pipeline includes data preprocessing, augmentation, and validation splits optimized for embedding quality. Automated hyperparameter tuning using Bayesian optimization reduces manual experimentation time by 80%.",
          metrics: "70% faster training with distributed clusters, 80% reduction in hyperparameter tuning time, mixed precision training with 2x speedup, 100+ GPU cluster support"
        },
        {
          title: "Performance Optimization",
          description: "Model optimization techniques including quantization (INT8, FP16) and pruning reduce model size by 50% without accuracy degradation. Knowledge distillation enables smaller, faster models while maintaining 95%+ of original accuracy. Compression algorithms reduce embedding storage requirements by 60%, enabling deployment on resource-constrained environments.",
          metrics: "50% model size reduction, 60% storage reduction, 95%+ accuracy retention, 2x inference speedup with quantization"
        },
        {
          title: "Continuous Fine-Tuning",
          description: "Continuous learning pipelines enable model updates with minimal retraining overhead, incorporating new data and adapting to evolving domain requirements. Incremental training strategies update models with 10-20% of original training data, reducing compute costs by 85%. Model versioning and A/B testing frameworks ensure safe deployment of improved models.",
          metrics: "85% reduction in retraining costs, 10-20% data required for updates, automated model versioning, A/B testing with traffic splitting"
        }
      ],
      benefits: [
        {
          title: "Superior Domain Accuracy",
          impact: "15-25% performance improvement over generic embeddings, achieving 94%+ accuracy on domain-specific tasks",
          userValue: "Better semantic understanding improves search relevance, recommendation quality, and classification accuracy, directly impacting user satisfaction and business metrics"
        },
        {
          title: "Reduced Inference Costs",
          impact: "50% model size reduction and 2x inference speedup reduce infrastructure costs by 40% while maintaining accuracy",
          userValue: "Lower operational costs enable scaling to larger user bases and higher query volumes without proportional cost increases"
        },
        {
          title: "Better Semantic Understanding",
          impact: "Domain-specific embeddings capture nuanced semantics with 15-25% better performance on domain tasks compared to generic models",
          userValue: "Improved understanding of business context enables more accurate automation, better user experiences, and higher-quality AI-driven decisions"
        },
        {
          title: "Competitive Advantage",
          impact: "Custom embeddings provide unique competitive differentiation with domain-specific knowledge not available in generic models",
          userValue: "Proprietary models create moats through superior performance on specific use cases, enabling premium pricing and customer retention"
        }
      ],
      performanceMetrics: {
        trainingTime: "70% reduction with distributed training, 24-48 hours for 10M+ examples on 32 GPU cluster, 80% faster hyperparameter tuning",
        modelPerformance: "15-25% improvement over generic embeddings, 94%+ accuracy on domain tasks, 95%+ accuracy retention after optimization",
        modelSize: "50% reduction via quantization/pruning, 60% storage reduction, 2x inference speedup, deployment on resource-constrained devices",
        scalability: "Linear scaling from 1 to 100+ GPUs, 10M+ training examples, distributed training with 70% efficiency, continuous learning pipelines"
      },
      media: {
        src: "/videos/video4.webm",
        alt: "Embedding Model Training Pipeline",
        type: "video/webm"
      },
      uxInteractions: {
        scrollReveal: "Training pipeline visualization reveals stages sequentially (data prep, training, optimization, deployment) with smooth transitions",
        hoverEffects: "Interactive model architecture diagram highlights layers and connections on hover, showing parameter counts and performance metrics",
        stickySidebar: "Training metrics sidebar tracks progress in real-time, showing loss curves, accuracy metrics, and training time remaining",
        infiniteCarousel: "Performance comparison carousel showcases before/after metrics, auto-advancing through different evaluation benchmarks",
        accessibility: "Screen reader descriptions for training stages, keyboard navigation for model exploration, high contrast mode for visualizations"
      }
    },
    {
      slug: "in-house-model-hosting",
      title: "In-House Model Hosting",
      overview: {
        homepageDescription: "Secure, scalable infrastructure for managing and deploying proprietary AI models. On-premise and private cloud hosting with auto-scaling, handling 10-100K requests/second with <20ms latency and 99.95% availability.",
        technicalSummary: "On-premise and private cloud model serving infrastructure with auto-scaling capabilities handling variable inference workloads (10-100K requests/second) with <20ms p99 latency. Addresses enterprise requirements for data sovereignty, security, and compliance by providing dedicated infrastructure within enterprise environments. Kubernetes-based orchestration ensures 99.95% availability with zero-downtime deployments, A/B testing support, and comprehensive monitoring. Integrates with existing enterprise infrastructure through standard protocols, supporting model versioning, rollback systems, and real-time metrics dashboards compliant with SOC 2, HIPAA, and GDPR requirements.",
        scalability: "Auto-scaling from 10 to 100K+ requests/second with Kubernetes horizontal pod autoscaling, supporting variable workloads with <30s scale-up time",
        performance: "<20ms p99 latency, 99.95% availability, zero-downtime deployments, real-time monitoring with <1s metric collection latency",
        integration: "Kubernetes operators, Prometheus/Grafana monitoring, enterprise SSO (SAML, LDAP), API gateways (Kong, Istio), CI/CD pipeline integration"
      },
      features: [
        {
          title: "Secure Infrastructure",
          description: "Enterprise-grade security with encryption at rest (AES-256) and in transit (TLS 1.3), role-based access control (RBAC), and comprehensive audit logging. Network isolation and private networking ensure models and data remain within enterprise boundaries. Security hardening includes vulnerability scanning, penetration testing, and compliance certifications (SOC 2, HIPAA, GDPR).",
          metrics: "AES-256 encryption at rest, TLS 1.3 in transit, 100% audit trail coverage, SOC 2/HIPAA/GDPR compliant, zero security incidents"
        },
        {
          title: "Scalable Deployment",
          description: "Kubernetes-based orchestration with horizontal pod autoscaling handles variable workloads from 10 to 100K+ requests/second. Auto-scaling policies based on CPU, memory, and custom metrics ensure optimal resource utilization. Load balancing and request routing distribute traffic across model replicas, maintaining consistent latency under load.",
          metrics: "10-100K+ requests/second, <30s scale-up time, 99.95% availability, horizontal pod autoscaling, intelligent load balancing"
        },
        {
          title: "Model Management",
          description: "Comprehensive model versioning system enables A/B testing, gradual rollouts, and instant rollbacks. Model registry tracks versions, metadata, and performance metrics, enabling data scientists to compare and select optimal models. Deployment pipelines support canary releases and blue-green deployments with zero downtime.",
          metrics: "Zero-downtime deployments, A/B testing with traffic splitting, <5s rollback time, model versioning with full history, canary releases"
        },
        {
          title: "Enterprise Security & Compliance",
          description: "Security hardening includes network isolation, encryption, access controls, and audit logging compliant with SOC 2, HIPAA, and GDPR. Compliance features include data residency controls, retention policies, and automated compliance reporting. Enterprise SSO integration (SAML, LDAP) enables seamless authentication with existing identity providers.",
          metrics: "SOC 2/HIPAA/GDPR compliant, 100% audit logging, enterprise SSO integration, data residency controls, automated compliance reporting"
        }
      ],
      benefits: [
        {
          title: "Full Infrastructure Control",
          impact: "On-premise deployment provides complete control over infrastructure, data, and models, ensuring zero data exfiltration risk",
          userValue: "Compliance with strict data sovereignty requirements, reduced regulatory risk, and ability to customize infrastructure for specific needs"
        },
        {
          title: "Data Stays Within Environment",
          impact: "100% of data and model processing occurs within enterprise infrastructure, eliminating cloud data transfer and storage costs",
          userValue: "Enhanced security posture, reduced data transfer costs, and compliance with regulations requiring on-premise data processing"
        },
        {
          title: "Reduced Latency and Costs",
          impact: "<20ms p99 latency with on-premise deployment, 40% cost reduction compared to cloud inference at scale",
          userValue: "Faster response times improve user experience, while lower costs enable higher query volumes and better ROI"
        },
        {
          title: "Regulatory Compliance",
          impact: "100% compliance with SOC 2, HIPAA, GDPR through dedicated infrastructure with comprehensive audit logging and access controls",
          userValue: "Reduced compliance risk, faster regulatory approvals, and ability to serve regulated industries (healthcare, finance, government)"
        }
      ],
      performanceMetrics: {
        latency: "<20ms p99, 12ms p50, 35ms p99.9 across variable workloads, consistent performance under load",
        throughput: "10-100K+ requests/second with auto-scaling, 5K+ requests/second per pod, horizontal scaling with <30s scale-up",
        availability: "99.95% uptime SLA, zero-downtime deployments, <5s rollback time, automated failover with <10s recovery",
        scalability: "Linear scaling from 10 to 100K+ requests/second, auto-scaling based on metrics, support for 100+ concurrent model versions"
      },
      media: {
        src: "/Mobile.webm",
        alt: "In-House Model Hosting Infrastructure",
        type: "video/webm"
      },
      uxInteractions: {
        scrollReveal: "Infrastructure architecture diagram reveals components progressively (load balancer, API gateway, model servers, monitoring)",
        hoverEffects: "Interactive infrastructure nodes show real-time metrics on hover (CPU, memory, request rate, latency), with color-coded health status",
        stickySidebar: "Monitoring dashboard sidebar displays real-time metrics (requests/sec, latency, error rate) while scrolling through documentation",
        infiniteCarousel: "Compliance badges and certifications carousel showcases security credentials and audit reports",
        accessibility: "Screen reader support for infrastructure descriptions, keyboard navigation for monitoring dashboards, high contrast mode for metrics"
      }
    },
    {
      slug: "offshoring-inference",
      title: "Distributed Inference",
      overview: {
        homepageDescription: "Distributed inference setup optimized for performance, compliance, and cost efficiency. Global deployment across 15+ regions reduces costs by 40-60% while maintaining <50ms latency SLAs and 99.99% availability.",
        technicalSummary: "Global distributed inference architecture optimizing cost-performance tradeoffs across 15+ regions with intelligent request routing and load balancing, powered by strategic partnerships with Azure AI and Google Cloud Vertex AI. Addresses enterprise needs for cost optimization, global scale, and regulatory compliance through multi-cloud deployment with intelligent request routing. Cost optimization strategies including spot instances, reserved capacity, and model quantization reduce inference costs by 40-60% while maintaining <50ms latency SLAs. Regional data residency compliance ensures processing occurs within required jurisdictions, with automated failover and disaster recovery enabling 99.99% global availability.",
        scalability: "Distributed architecture across 15+ regions scales from single region to global deployment, handling 1M+ requests daily with intelligent load distribution",
        performance: "<50ms latency SLAs maintained globally, 40-60% cost reduction, 99.99% availability with multi-region failover, <10s failover time",
        integration: "Multi-cloud APIs (AWS, GCP, Azure), CDN integration (Cloudflare, Fastly), global load balancers, regional data residency controls"
      },
      features: [
        {
          title: "Distributed Global Setup",
          description: "Multi-region deployment across 15+ geographic locations powered by partnerships with Azure AI and Google Cloud Vertex AI, with intelligent request routing based on latency, cost, and data residency requirements. Global load balancing distributes traffic optimally, reducing latency by 40% compared to single-region deployment. Automated failover ensures 99.99% availability even during regional outages.",
          metrics: "15+ regions deployed, 40% latency reduction, 99.99% global availability, <10s failover time, intelligent request routing"
        },
        {
          title: "Cost Optimization Strategies",
          description: "Multi-tier cost optimization combining spot instances (60% savings), reserved capacity (40% savings), and model quantization (30% savings) reduces total inference costs by 40-60%. Dynamic instance selection based on workload patterns optimizes cost-performance tradeoffs. Cost analytics dashboards provide real-time visibility into spending across regions and instance types.",
          metrics: "40-60% cost reduction, spot instance utilization (60% savings), reserved capacity optimization (40% savings), real-time cost analytics"
        },
        {
          title: "Regional Compliance",
          description: "Data residency controls ensure processing occurs within required jurisdictions, with automated routing based on data origin and regulatory requirements. Compliance features include regional data isolation, audit logging per region, and automated compliance reporting. Support for GDPR, CCPA, and country-specific regulations enables global deployment.",
          metrics: "100% data residency compliance, automated routing by jurisdiction, regional audit logging, GDPR/CCPA compliant, 15+ regulatory frameworks"
        },
        {
          title: "Global Infrastructure",
          description: "Multi-cloud deployment (AWS, GCP, Azure) provides vendor diversification, reducing single-point-of-failure risk. Intelligent request routing considers latency, cost, availability, and compliance requirements. Disaster recovery and automated failover ensure business continuity with <10s recovery time objective (RTO).",
          metrics: "Multi-cloud deployment (3+ providers), <10s RTO, 99.99% availability, vendor diversification, automated disaster recovery"
        }
      ],
      benefits: [
        {
          title: "Significant Cost Savings",
          impact: "40-60% reduction in inference costs through spot instances, reserved capacity, and model quantization strategies",
          userValue: "Lower operational costs enable scaling to higher query volumes and larger user bases, improving unit economics and profitability"
        },
        {
          title: "Improved Global Latency",
          impact: "40% latency reduction for global users through regional deployment and intelligent request routing, maintaining <50ms SLAs",
          userValue: "Faster response times improve user experience globally, increasing engagement and conversion rates in international markets"
        },
        {
          title: "Regulatory Compliance",
          impact: "100% compliance with regional data residency requirements across 15+ jurisdictions, supporting GDPR, CCPA, and country-specific regulations",
          userValue: "Ability to serve global markets without compliance risk, faster market entry, and reduced legal/compliance overhead"
        },
        {
          title: "Flexible Deployment Options",
          impact: "Multi-cloud deployment provides vendor diversification and flexibility, reducing lock-in risk and enabling optimal cost-performance tradeoffs",
          userValue: "Reduced vendor dependency, better negotiation leverage, and ability to optimize costs and performance across different cloud providers"
        }
      ],
      performanceMetrics: {
        costOptimization: "40-60% cost reduction, spot instance savings (60%), reserved capacity (40%), model quantization (30%)",
        latency: "<50ms latency SLAs globally, 40% reduction vs single-region, p95 latency <45ms across 15+ regions",
        availability: "99.99% global availability, <10s failover time, multi-region redundancy, automated disaster recovery",
        scalability: "1M+ requests daily, 15+ regions, linear scaling, intelligent load distribution, multi-cloud deployment"
      },
      media: {
        src: "/Devops.webm",
        alt: "Distributed Inference Global Architecture",
        type: "video/webm"
      },
      uxInteractions: {
        scrollReveal: "Global infrastructure map reveals regions progressively with connection lines showing request routing and data flow",
        hoverEffects: "Interactive region markers show real-time metrics (requests, latency, cost) on hover, with color coding for health status",
        stickySidebar: "Global metrics dashboard displays real-time statistics (total requests, average latency, cost savings) while exploring regions",
        infiniteCarousel: "Cost savings metrics carousel showcases regional optimization results and total savings achieved",
        accessibility: "Screen reader descriptions for global infrastructure, keyboard navigation for region exploration, high contrast mode for maps"
      }
    }
  ];
  const solutionMediaBySlug: Record<string, { src: string; alt?: string }> = {
    "multimodal-vector-search": { src: "/aiIntegration.webm", alt: "Multimodal Vector Search" },
    "custom-agentic-workflows": {
      src: "/Desktop.webm",
      alt: "Enterprise AI Agents",
    },
    "embedding-model-training": { src: "/videos/video4.webm", alt: "Embedding Model Training" },
    "in-house-model-hosting": { src: "/Mobile.webm", alt: "In-House Model Hosting" },
    "offshoring-inference": { src: "/Devops.webm", alt: "Distributed Inference" },
  };

  return (
    <main className="bg-background">
      <section className="relative isolate min-h-[120vh] flex items-center w-full max-w-full overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 py-16 xl:max-w-[1400px] 2xl:max-w-[1600px] w-full">
          <div className="flex flex-col items-center gap-16">
            {/* Top: Text Content */}
            <Reveal className="text-center max-w-4xl">
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Enterprise AI that{" "}
                <FlipWords
                  words={["understands.", "automates.", "scales."]}
                  className="inline-block text-primary px-1"
                  duration={3000}
                />
              </h1>

              <p className="mt-6 max-w-2xl mx-auto text-lg leading-7 text-zinc-400 sm:text-xl animate-on-load animate-fade-in-up animate-delay-200">
                Synvey builds production-ready AI infrastructure for enterprises. 
                From multimodal vector search processing billions of vectors to 
                enterprise AI agents automating complex operations, we deliver 
                intelligent systems that transform how organizations leverage data and AI.
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
          blurb: s.overview.homepageDescription || s.overview.technicalSummary,
          ctaHref: `/products/${s.slug}`,
          mediaSrc: s.media?.src || solutionMediaBySlug[s.slug]?.src,
          mediaAlt: s.media?.alt || solutionMediaBySlug[s.slug]?.alt,
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
