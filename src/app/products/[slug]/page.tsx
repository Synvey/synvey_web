import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Reveal from "@/components/Reveal";
import MermaidDiagram from "@/components/MermaidDiagram";

const PRODUCTS = {
  "multimodal-vector-search": {
    name: "Multimodal Vector Search",
    tagline:
      "Enterprise-grade vector search architecture processing billions of vectors with sub-50ms p95 query latency",
    overview:
      "Enterprise-grade vector search architecture processing billions of vectors across text, images, audio, video, and structured data with sub-50ms p95 query latency. Advanced document parsing engine handles complex file structures (PDFs, Office documents, HTML, Markdown) with 98%+ extraction accuracy, including OCR for scanned documents with 50+ language support. Structure-aware chunking preserves semantic boundaries optimizing embedding quality. Addresses domain-specific challenges through custom-trained embeddings (768-1024 dimensional vectors) optimized for semantic understanding, enabling 94%+ relevance accuracy at scale. Intelligent document versioning with delta indexing reduces overhead by 90% through incremental updates, tracking changes with <100ms detection latency and enabling temporal search queries across document history. Scalable distributed indexing infrastructure handles 10M+ documents with horizontal scaling, supporting real-time updates and maintaining 99.9%+ uptime. Integrates seamlessly with existing AI pipelines through RESTful APIs and SDK support for Python, JavaScript, and Go.",
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
        title: "Large-Scale Dataset Processing",
        description: "Distributed indexing architecture handles billions of vectors across multiple data modalities with horizontal scaling. Advanced partitioning strategies (sharding, replication) ensure consistent performance as datasets grow from millions to billions of vectors. Real-time indexing pipeline processes 50K+ new documents per hour while maintaining sub-second search latency.",
        metrics: "10M+ documents indexed | Billions of vectors processed | 50K+ documents/hour indexing rate | Linear scaling performance"
      },
      {
        title: "Efficient Indexing Algorithms",
        description: "Hybrid indexing approach combining HNSW (Hierarchical Navigable Small World) and IVF-PQ (Inverted File Index with Product Quantization) algorithms optimizes memory usage by 60% compared to naive implementations. Adaptive index selection based on query patterns and dataset characteristics ensures optimal performance for both exact and approximate nearest neighbor search.",
        metrics: "60% memory reduction | 10x faster index construction | 99.9% recall at 10 nearest neighbors | Sub-100ms index updates"
      },
      {
        title: "Fast Multi-Modal Retrieval",
        description: "Unified vector space enables cross-modal search: query with text and retrieve images, or search images to find similar video content. Custom fusion strategies combine embeddings from different modalities, achieving 94%+ relevance accuracy. Query processing pipeline includes semantic understanding, intent classification, and result ranking with explainability.",
        metrics: "Sub-50ms p95 latency | 94%+ relevance accuracy | 100K+ QPS throughput | Cross-modal retrieval with 89% precision"
      },
      {
        title: "Multi-Format Data Support",
        description: "Native support for text (plain, markdown, structured), images (JPEG, PNG, WebP), audio (MP3, WAV, FLAC), video (MP4, WebM), and structured data (JSON, CSV). Automatic format detection and preprocessing pipelines extract semantic features using domain-specific encoders. Custom embedding models fine-tuned for each modality ensure optimal representation quality.",
        metrics: "5+ data formats supported | 15+ file types processed | 99% format detection accuracy | Real-time preprocessing"
      },
      {
        title: "Advanced Document Parsing & Extraction",
        description: "Intelligent document parsing engine handles complex file structures including PDFs (text, scanned, forms), Office documents (Word, Excel, PowerPoint), HTML, and markdown with 98%+ extraction accuracy. OCR capabilities process scanned documents and images with multi-language support (50+ languages). Document structure extraction identifies headers, sections, tables, lists, and metadata automatically. Smart chunking strategies preserve semantic boundaries (sentence, paragraph, section-level) optimizing embedding quality. Entity extraction identifies key information (dates, names, locations, organizations) from unstructured text. Language detection and normalization ensure consistent processing across multilingual documents.",
        metrics: "98%+ extraction accuracy | 50+ languages supported | OCR for scanned documents | Structure-aware chunking | Entity extraction | Multi-format parsing (PDF, Office, HTML, Markdown)"
      },
      {
        title: "Document Versioning & Change Tracking",
        description: "Intelligent version control system tracks document changes with delta indexing, re-indexing only modified content to reduce overhead by 90%. Change detection monitors file modifications, additions, and deletions in real-time across connected data sources. Version history enables temporal search queries ('find version from last month'), with automatic retention policies and archival. Document lineage tracking maintains relationships between versions, supporting audit requirements and compliance workflows. Incremental updates process only changed documents, reducing indexing costs while maintaining search accuracy.",
        metrics: "90% indexing overhead reduction via delta updates | Real-time change detection across all sources | Temporal search with version history | <100ms change detection latency | Full document lineage tracking"
      },
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
      },
    ],
    performanceMetrics: {
      queryLatency: "Sub-50ms p95, 35ms p50, 120ms p99 across 10M+ document index",
      throughput: "100K+ queries per second with distributed deployment, 25K+ QPS per node",
      accuracy: "94%+ relevance accuracy, 89% precision at top-10 results, 96% recall for semantic queries",
      scalability: "Linear scaling from 1M to 10B+ vectors, 10M+ documents indexed, 50K+ documents/hour indexing rate",
      memoryEfficiency: "60% memory reduction vs naive implementations, 2.4GB per 1M vectors (768-dim), 4.8GB per 1M vectors (1024-dim)",
      availability: "99.9%+ uptime with distributed deployment, <100ms failover time, zero-downtime index updates"
    },
    technicalSpecs: {
      architecture: "Distributed vector database with HNSW and IVF-PQ indexing, horizontal sharding across compute nodes, delta indexing for incremental updates",
      architectureDiagram: `graph TB
        subgraph "Client Layer"
          A[Query API<br/>REST/gRPC] --> B[Load Balancer]
        end
        
        subgraph "Distributed Compute Nodes"
          B --> C[Node 1<br/>Shard A]
          B --> D[Node 2<br/>Shard B]
          B --> E[Node 3<br/>Shard C]
          B --> F[Node N<br/>Shard N]
        end
        
        subgraph "Indexing Layer"
          C --> G[HNSW Index<br/>Hierarchical Navigable<br/>Small World]
          D --> H[IVF-PQ Index<br/>Inverted File Index<br/>Product Quantization]
          E --> G
          F --> H
        end
        
        subgraph "Delta Indexing"
          I[Change Detector<br/><100ms Latency] --> J[Delta Processor<br/>90% Overhead Reduction]
          J --> G
          J --> H
        end
        
        subgraph "Vector Storage"
          G --> K[(Vector Store<br/>768-1024 dim)]
          H --> K
          K --> L[Horizontal Sharding<br/>10M+ Documents]
        end
        
        subgraph "Data Sources"
          M[Documents<br/>Text/Image/Audio/Video] --> I
          M --> N[Ingestion Pipeline<br/>50K+ docs/hour]
          N --> K
        end
        
        style A fill:#6366f1,stroke:#4f46e5,color:#fff
        style G fill:#8b5cf6,stroke:#7c3aed,color:#fff
        style H fill:#3b82f6,stroke:#2563eb,color:#fff
        style I fill:#10b981,stroke:#059669,color:#fff
        style J fill:#f59e0b,stroke:#d97706,color:#fff
        style K fill:#ef4444,stroke:#dc2626,color:#fff`,
      embeddingDimensions: "768-1024 dimensional vectors with quantization support (INT8, FP16, FP32)",
      supportedModalities: "Text, images (JPEG/PNG/WebP), audio (MP3/WAV/FLAC), video (MP4/WebM), structured data (JSON/CSV)",
      documentParsing: "PDF parsing (text, scanned, forms), Office documents (Word, Excel, PowerPoint), HTML, Markdown | OCR with 50+ language support | Structure extraction (headers, sections, tables, lists) | Smart chunking (sentence, paragraph, section-level) | Entity extraction (dates, names, locations, organizations) | 98%+ extraction accuracy",
      versionControl: "Document versioning with temporal search, delta indexing with 90% overhead reduction, real-time change detection (<100ms), automatic retention policies, full document lineage tracking",
      apiInterfaces: "RESTful HTTP API, gRPC for high-throughput, Python/JavaScript/Go SDKs with async support",
      integration: "Vector database connectors (Pinecone, Weaviate, Qdrant), Elasticsearch/OpenSearch compatibility layer, webhook support for change notifications"
    },
    video: "/aiIntegration.webm",
  },
  "custom-agentic-workflows": {
    name: "Enterprise AI Agents",
    tagline:
      "Universal enterprise connectivity with LLM-powered agents autonomously orchestrating workflows across 50+ integrated data sources, processing 10M+ records daily with 99.7% accuracy",
    overview:
      "Enterprise-grade agentic workflow platform with universal connectivity to your entire tech stack. AI agents autonomously navigate complex data landscapes—querying databases (PostgreSQL, MySQL, Oracle, Snowflake, BigQuery), processing Office 365 and Google Workspace documents, orchestrating actions across CRM/ERP systems (Salesforce, SAP, NetSuite), and managing communications (Teams, Slack, Gmail). Unlike traditional iPaaS solutions, our agents use LLM reasoning to handle edge cases and ambiguity. Unlike RPA tools, we provide native API integration with intelligent data processing. Solves the core enterprise challenge: data trapped in silos across dozens of applications, eliminating 20+ hours weekly of manual data transfer work. Multi-agent systems coordinate 100+ concurrent processes with stateful orchestration, processing 10M+ records daily with 99.7% cross-system synchronization accuracy. Production-grade reliability (99.9%+ uptime) with comprehensive audit trails for SOC 2, HIPAA, and GDPR compliance.",
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
        title: "Universal Enterprise Connectivity",
        description: "Native connectors for 50+ enterprise applications including databases (PostgreSQL, MySQL, Oracle, SQL Server, Snowflake, BigQuery, Redshift), productivity suites (Office 365, Google Workspace), CRM systems (Salesforce, HubSpot, Dynamics 365), ERP platforms (SAP, Oracle ERP, NetSuite), and communication tools (Teams, Slack, Gmail). Custom connector framework supports REST/GraphQL/SOAP for any enterprise API. Intelligent credential management with vault integration (HashiCorp Vault, AWS Secrets Manager) ensures secure multi-tenant access. Connection health monitoring with automatic failover and rate limiting per data source maintains 99.9%+ connectivity uptime.",
        metrics: "50+ native connectors | <2 hours new data source integration | 99.9%+ connectivity uptime | Multi-tenant credential isolation | Automatic failover with <10s recovery"
      },
      {
        title: "Office 365 & Microsoft Ecosystem Deep Integration",
        description: "Comprehensive Microsoft integration via Graph API with OAuth 2.0 tenant-level permissions. Agents monitor Teams channels, post messages with @mentions, manage SharePoint document libraries with metadata extraction and version control, process Outlook emails with calendar management, extract data from Excel Online with formula evaluation, and trigger Power Automate workflows. Real-time event subscriptions enable instant workflow triggers. Automated document processing with OCR extracts entities from uploaded files. Meeting transcription analysis generates action items automatically. Cross-application workflows (SharePoint → Teams → Outlook) eliminate manual handoffs.",
        metrics: "Real-time event subscriptions | OCR + entity extraction on documents | Automated meeting transcription analysis | Cross-app workflow automation | <200ms event-to-action latency"
      },
      {
        title: "Google Workspace Integration",
        description: "Service account authentication provides organization-wide access to Gmail (email classification, smart replies, attachment processing), Google Drive (file management, folder navigation, sharing controls), Docs/Sheets/Slides (content extraction, collaborative editing, template generation), Calendar (event management, scheduling optimization), and Chat/Spaces (message monitoring, bot interactions). Real-time change detection via push notifications triggers workflows instantly. Batch processing handles high-volume document operations (10K+ files per hour). Advanced search across all Workspace applications with semantic understanding. Automated content generation based on Workspace data using LLM-powered templates.",
        metrics: "10K+ files/hour batch processing | Real-time push notifications | Organization-wide access via service accounts | Advanced semantic search | Automated content generation"
      },
      {
        title: "Database & Data Warehouse Integration",
        description: "Real-time query execution with natural language to SQL translation across PostgreSQL, MySQL, Oracle, SQL Server, MS SQL, Snowflake, BigQuery, Redshift, and Azure Synapse. Automated schema discovery and relationship mapping enables intelligent query generation. Multi-database federated queries join data across siloed systems without manual ETL. Read/write operations with transaction management and rollback support ensure data integrity. Intelligent caching for frequently accessed datasets reduces query latency by 60%. Connection pooling optimizes concurrent agent access, supporting 1000+ simultaneous database connections.",
        metrics: "Natural language to SQL translation | Multi-database federated queries | 60% latency reduction via intelligent caching | 1000+ concurrent connections | Transaction management with rollback"
      },
      {
        title: "Cross-System Workflow Orchestration",
        description: "Distributed orchestration engine coordinates workflows across 15-20 enterprise systems simultaneously, handling complex dependencies and parallel execution. Example workflows: extract data from incoming emails (Outlook/Gmail), validate against ERP records (SAP), update project status (Jira), notify stakeholders (Teams/Slack). State management maintains workflow context across distributed nodes with checkpoint-based recovery. Intelligent scheduling optimizes execution order based on data dependencies and system load. Workflow templates for common enterprise patterns (document approval, data reconciliation, compliance reporting) accelerate deployment.",
        metrics: "15-20 systems orchestrated per workflow | <500ms cross-system latency | Checkpoint-based recovery | 100+ concurrent workflows | Pre-built templates for common patterns"
      },
      {
        title: "Intelligent Data Processing & Security",
        description: "Streaming data ingestion with <200ms latency processes 10M+ records daily. Automatic schema validation, type conversion, and data quality checks with anomaly detection ensure data integrity. PII detection with automatic masking/redaction maintains privacy compliance. Cross-source entity resolution correlates data across systems. End-to-end encryption for data in transit and at rest. Granular RBAC mapped to enterprise identity providers (Okta, Azure AD, LDAP). Audit logging for all data access operations with compliance certifications (SOC 2 Type II, ISO 27001, GDPR, HIPAA). Automated compliance reporting and evidence collection.",
        metrics: "<200ms streaming ingestion | 10M+ records/day processing | Automatic PII detection/masking | End-to-end encryption | SOC 2, ISO 27001, GDPR, HIPAA certified"
      },
    ],
    benefits: [
      {
        title: "Eliminate Data Silos Across Enterprise Systems",
        impact: "Automated workflows across 15-20 enterprise systems eliminate 20+ hours weekly of manual data transfer, achieving 99.7% cross-system synchronization accuracy",
        userValue: "Teams access unified data views without switching between applications, reducing task completion time by 65% and eliminating 85% of data entry errors"
      },
      {
        title: "Accelerate Business Processes with Universal Connectivity",
        impact: "Native integration with 50+ enterprise applications enables end-to-end automation from data ingestion to action, reducing process cycle time by 78%",
        userValue: "Cross-system workflows (e.g., Email → ERP → CRM → Notification) complete in minutes instead of hours, improving customer response time and operational agility"
      },
      {
        title: "Reduce Integration Complexity and Cost",
        impact: "Pre-built connectors and LLM-powered data transformation reduce integration development time from weeks to <2 hours per data source, lowering TCO by 60%",
        userValue: "IT teams focus on strategic initiatives rather than maintaining brittle integrations, while business users configure workflows without engineering support"
      },
      {
        title: "Maintain Compliance Across Distributed Systems",
        impact: "Automated audit logging across all data sources with comprehensive compliance reporting (SOC 2, HIPAA, GDPR) reduces audit preparation time by 80%",
        userValue: "Complete visibility into cross-system data flows with automated evidence collection ensures regulatory compliance and reduces risk exposure"
      },
      {
        title: "Scale Operations Without Proportional Headcount",
        impact: "Processing 10M+ records daily with 95%+ accuracy automates 78% of previously manual cross-system workflows, reducing operational overhead by 60%",
        userValue: "Organizations scale business operations 3x without increasing headcount, improving unit economics and enabling rapid market expansion"
      },
      {
        title: "Intelligent Automation with LLM Reasoning",
        impact: "Unlike rule-based systems (72% accuracy), LLM-powered agents achieve 95%+ decision accuracy by understanding context and handling edge cases",
        userValue: "Workflows adapt to changing data formats and business rules without reprogramming, reducing maintenance burden by 70% compared to traditional RPA"
      },
    ],
    performanceMetrics: {
      dataProcessing: "10M+ records processed daily, <200ms streaming ingestion latency, 99.7% cross-system synchronization accuracy, 10K+ files/hour batch processing",
      enterpriseConnectivity: "50+ native connectors, <2 hours new data source integration, 99.9%+ connectivity uptime, 15-20 systems orchestrated per workflow",
      crossSystemLatency: "<500ms multi-system workflow latency, <200ms event-to-action for real-time triggers, 1000+ concurrent database connections",
      taskCompletion: "95%+ accuracy, 1M+ tasks processed daily, <100ms orchestration overhead, 99.8% completion rate, 100+ concurrent workflows",
      reliability: "99.9%+ workflow reliability, <5min mean time to recovery, <10s automatic failover, zero-downtime deployments"
    },
    technicalSpecs: {
      architecture: "Distributed workflow engine with stateful orchestration, event-driven agent coordination, message queue integration (RabbitMQ, Kafka, Azure Service Bus)",
      enterpriseConnectors: "Native: PostgreSQL, MySQL, Oracle, SQL Server, Snowflake, BigQuery, Redshift, Azure Synapse, Salesforce, SAP, NetSuite, Office 365 (Teams, SharePoint, Outlook, Excel), Google Workspace (Gmail, Drive, Docs, Calendar), Slack, Jira, Confluence, Workday | Custom connector framework: REST/GraphQL/SOAP",
      llmIntegration: "OpenAI GPT-4, Anthropic Claude, Azure OpenAI, custom fine-tuned models | Natural language to SQL translation, semantic search, entity extraction, content generation",
      dataProcessing: "Streaming ingestion (<200ms), batch processing (10K+ files/hour), automatic schema validation, PII detection/masking, cross-source entity resolution",
      security: "End-to-end encryption (AES-256), vault integration (HashiCorp Vault, AWS Secrets Manager), granular RBAC, enterprise SSO (Okta, Azure AD, LDAP, SAML, OAuth), audit logging",
      compliance: "SOC 2 Type II, ISO 27001, GDPR, HIPAA certified | Automated compliance reporting, evidence collection, data residency controls",
      stateManagement: "Distributed state store (Redis, PostgreSQL), checkpoint-based recovery, workflow versioning and rollback, multi-tenant isolation"
    },
    video: "/Desktop.webm",
  },
  "embedding-model-training": {
    name: "Embedding Model Training",
    tagline:
      "Domain-specific embedding training pipeline achieving 15-25% performance improvements over generic models with 70% faster training",
    overview:
      "Domain-specific embedding model training pipeline fine-tuning transformer architectures (BERT, RoBERTa, custom variants) on proprietary datasets with 10M+ training examples. Addresses the challenge of generic embeddings failing to capture domain-specific semantics by optimizing for target metrics (semantic similarity, classification accuracy, retrieval precision), achieving 15-25% performance improvements over generic models. Scalable distributed training infrastructure across GPU clusters reduces training time by 70%, while quantization and pruning techniques reduce model size by 50% without accuracy degradation. Integrates with existing ML pipelines through model registry APIs, enabling seamless deployment to production inference infrastructure.",
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
        title: "Domain-Specific Optimization",
        description: "Fine-tuning pipeline optimizes transformer architectures (BERT, RoBERTa, custom variants) on proprietary datasets with 10M+ training examples. Custom loss functions and training objectives target domain-specific metrics (semantic similarity, classification accuracy, retrieval precision), achieving 15-25% performance improvements. Continuous evaluation during training ensures models meet target accuracy thresholds before deployment.",
        metrics: "15-25% performance improvement | 10M+ training examples processed | Domain-specific metrics optimization | 94%+ target accuracy achieved"
      },
      {
        title: "Custom Training Infrastructure",
        description: "Distributed training infrastructure across GPU clusters (NVIDIA A100, H100) enables efficient model training with mixed precision and gradient accumulation. Training pipeline includes data preprocessing, augmentation, and validation splits optimized for embedding quality. Automated hyperparameter tuning using Bayesian optimization reduces manual experimentation time by 80%.",
        metrics: "70% faster training with distributed clusters | 80% reduction in hyperparameter tuning time | Mixed precision training with 2x speedup | 100+ GPU cluster support"
      },
      {
        title: "Performance Optimization",
        description: "Model optimization techniques including quantization (INT8, FP16) and pruning reduce model size by 50% without accuracy degradation. Knowledge distillation enables smaller, faster models while maintaining 95%+ of original accuracy. Compression algorithms reduce embedding storage requirements by 60%, enabling deployment on resource-constrained environments.",
        metrics: "50% model size reduction | 60% storage reduction | 95%+ accuracy retention | 2x inference speedup with quantization"
      },
      {
        title: "Continuous Fine-Tuning",
        description: "Continuous learning pipelines enable model updates with minimal retraining overhead, incorporating new data and adapting to evolving domain requirements. Incremental training strategies update models with 10-20% of original training data, reducing compute costs by 85%. Model versioning and A/B testing frameworks ensure safe deployment of improved models.",
        metrics: "85% reduction in retraining costs | 10-20% data required for updates | Automated model versioning | A/B testing with traffic splitting"
      },
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
      },
    ],
    performanceMetrics: {
      trainingTime: "70% reduction with distributed training, 24-48 hours for 10M+ examples on 32 GPU cluster, 80% faster hyperparameter tuning",
      modelPerformance: "15-25% improvement over generic embeddings, 94%+ accuracy on domain tasks, 95%+ accuracy retention after optimization",
      modelSize: "50% reduction via quantization/pruning, 60% storage reduction, 2x inference speedup, deployment on resource-constrained devices",
      scalability: "Linear scaling from 1 to 100+ GPUs, 10M+ training examples, distributed training with 70% efficiency, continuous learning pipelines"
    },
    technicalSpecs: {
      modelArchitectures: "BERT, RoBERTa, DistilBERT, custom transformer variants, sentence transformers for embedding generation",
      trainingFrameworks: "PyTorch with DeepSpeed/Megatron for distributed training, Hugging Face Transformers for model fine-tuning",
      optimization: "Mixed precision training (FP16/BF16), gradient accumulation, learning rate scheduling, early stopping with patience",
      deployment: "ONNX/TensorFlow/PyTorch export, quantization (INT8/FP16), model serving via Triton/TensorRT, MLOps pipeline integration"
    },
    video: "/videos/video4.webm",
  },
  "in-house-model-hosting": {
    name: "In-House Model Hosting",
    tagline:
      "On-premise and private cloud model serving infrastructure handling 10-100K requests/second with <20ms p99 latency and 99.95% availability",
    overview:
      "On-premise and private cloud model serving infrastructure with auto-scaling capabilities handling variable inference workloads (10-100K requests/second) with <20ms p99 latency. Addresses enterprise requirements for data sovereignty, security, and compliance by providing dedicated infrastructure within enterprise environments. Kubernetes-based orchestration ensures 99.95% availability with zero-downtime deployments, A/B testing support, and comprehensive monitoring. Integrates with existing enterprise infrastructure through standard protocols, supporting model versioning, rollback systems, and real-time metrics dashboards compliant with SOC 2, HIPAA, and GDPR requirements.",
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
        description: "Enterprise-grade security with encryption at rest (AES-256) and in transit (TLS 1.3), role-based access control (RBAC), and comprehensive audit logging. Network isolation and private networking ensure models and data remain within enterprise boundaries. Security hardening includes vulnerability scanning, penetration testing, and compliance certifications (SOC 2, HIPAA, GDPR).",
        metrics: "AES-256 encryption at rest | TLS 1.3 in transit | 100% audit trail coverage | SOC 2/HIPAA/GDPR compliant | Zero security incidents"
      },
      {
        title: "Scalable Deployment",
        description: "Kubernetes-based orchestration with horizontal pod autoscaling handles variable workloads from 10 to 100K+ requests/second. Auto-scaling policies based on CPU, memory, and custom metrics ensure optimal resource utilization. Load balancing and request routing distribute traffic across model replicas, maintaining consistent latency under load.",
        metrics: "10-100K+ requests/second | <30s scale-up time | 99.95% availability | Horizontal pod autoscaling | Intelligent load balancing"
      },
      {
        title: "Model Management",
        description: "Comprehensive model versioning system enables A/B testing, gradual rollouts, and instant rollbacks. Model registry tracks versions, metadata, and performance metrics, enabling data scientists to compare and select optimal models. Deployment pipelines support canary releases and blue-green deployments with zero downtime.",
        metrics: "Zero-downtime deployments | A/B testing with traffic splitting | <5s rollback time | Model versioning with full history | Canary releases"
      },
      {
        title: "Enterprise Security & Compliance",
        description: "Security hardening includes network isolation, encryption, access controls, and audit logging compliant with SOC 2, HIPAA, and GDPR. Compliance features include data residency controls, retention policies, and automated compliance reporting. Enterprise SSO integration (SAML, LDAP) enables seamless authentication with existing identity providers.",
        metrics: "SOC 2/HIPAA/GDPR compliant | 100% audit logging | Enterprise SSO integration | Data residency controls | Automated compliance reporting"
      },
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
      },
    ],
    performanceMetrics: {
      latency: "<20ms p99, 12ms p50, 35ms p99.9 across variable workloads, consistent performance under load",
      throughput: "10-100K+ requests/second with auto-scaling, 5K+ requests/second per pod, horizontal scaling with <30s scale-up",
      availability: "99.95% uptime SLA, zero-downtime deployments, <5s rollback time, automated failover with <10s recovery",
      scalability: "Linear scaling from 10 to 100K+ requests/second, auto-scaling based on metrics, support for 100+ concurrent model versions"
    },
    technicalSpecs: {
      orchestration: "Kubernetes with Helm charts, horizontal pod autoscaling (HPA), custom metrics-based scaling",
      modelServing: "Triton Inference Server, TensorFlow Serving, TorchServe, custom FastAPI/Flask endpoints",
      monitoring: "Prometheus metrics collection, Grafana dashboards, distributed tracing with Jaeger, log aggregation with ELK stack",
      security: "Network policies, pod security policies, secrets management (Vault/Sealed Secrets), RBAC, SSO integration (SAML/LDAP/OAuth)"
    },
    video: "/Mobile.webm",
  },
  "offshoring-inference": {
    name: "Distributed Inference",
    tagline:
      "Global distributed inference architecture across 15+ regions reducing costs by 40-60% while maintaining <50ms latency SLAs and 99.99% availability",
      overview:
        "Global distributed inference architecture optimizing cost-performance tradeoffs across 15+ regions with intelligent request routing and load balancing, powered by strategic partnerships with Azure AI and Google Cloud Vertex AI. Addresses enterprise needs for cost optimization, global scale, and regulatory compliance through multi-cloud deployment with intelligent request routing. Cost optimization strategies including spot instances, reserved capacity, and model quantization reduce inference costs by 40-60% while maintaining <50ms latency SLAs. Regional data residency compliance ensures processing occurs within required jurisdictions, with automated failover and disaster recovery enabling 99.99% global availability.",
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
        title: "Distributed Global Setup",
        description: "Multi-region deployment across 15+ geographic locations powered by partnerships with Azure AI and Google Cloud Vertex AI, with intelligent request routing based on latency, cost, and data residency requirements. Global load balancing distributes traffic optimally, reducing latency by 40% compared to single-region deployment. Automated failover ensures 99.99% availability even during regional outages.",
        metrics: "15+ regions deployed | 40% latency reduction | 99.99% global availability | <10s failover time | Intelligent request routing"
      },
      {
        title: "Cost Optimization Strategies",
        description: "Multi-tier cost optimization combining spot instances (60% savings), reserved capacity (40% savings), and model quantization (30% savings) reduces total inference costs by 40-60%. Dynamic instance selection based on workload patterns optimizes cost-performance tradeoffs. Cost analytics dashboards provide real-time visibility into spending across regions and instance types.",
        metrics: "40-60% cost reduction | Spot instance utilization (60% savings) | Reserved capacity optimization (40% savings) | Real-time cost analytics"
      },
      {
        title: "Regional Compliance",
        description: "Data residency controls ensure processing occurs within required jurisdictions, with automated routing based on data origin and regulatory requirements. Compliance features include regional data isolation, audit logging per region, and automated compliance reporting. Support for GDPR, CCPA, and country-specific regulations enables global deployment.",
        metrics: "100% data residency compliance | Automated routing by jurisdiction | Regional audit logging | GDPR/CCPA compliant | 15+ regulatory frameworks"
      },
      {
        title: "Global Infrastructure",
        description: "Multi-cloud deployment through partnerships with Azure AI and Google Cloud Vertex AI provides vendor diversification, reducing single-point-of-failure risk. Intelligent request routing considers latency, cost, availability, and compliance requirements. Disaster recovery and automated failover ensure business continuity with <10s recovery time objective (RTO).",
        metrics: "Multi-cloud deployment (3+ providers) | <10s RTO | 99.99% availability | Vendor diversification | Automated disaster recovery"
      },
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
      },
    ],
    performanceMetrics: {
      costOptimization: "40-60% cost reduction, spot instance savings (60%), reserved capacity (40%), model quantization (30%)",
      latency: "<50ms latency SLAs globally, 40% reduction vs single-region, p95 latency <45ms across 15+ regions",
      availability: "99.99% global availability, <10s failover time, multi-region redundancy, automated disaster recovery",
      scalability: "1M+ requests daily, 15+ regions, linear scaling, intelligent load distribution, multi-cloud deployment"
    },
    technicalSpecs: {
      cloudProviders: "AWS (EC2, Lambda, ECS), GCP (Compute Engine, Cloud Run), Azure (VMs, Container Instances), multi-cloud orchestration",
      costOptimization: "Spot instance management, reserved capacity planning, auto-scaling policies, model quantization (INT8/FP16)",
      routing: "GeoDNS-based routing, latency-based routing, weighted routing, failover routing, health checks with automatic failover",
      compliance: "Regional data residency enforcement, per-region encryption, audit logging per jurisdiction, automated compliance reporting"
    },
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

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {product.features.map((feature, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-300 mb-4 leading-relaxed">{feature.description}</p>
                  {feature.metrics && (
                    <div className="pt-4 border-t border-zinc-800">
                      <p className="text-xs text-zinc-500 font-mono">{feature.metrics}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <Reveal className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              <TextGenerateEffect words="Business Impact" className="" />
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-6xl mx-auto">
            {product.benefits.map((benefit, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs text-zinc-500 uppercase tracking-wide">Impact</span>
                      <p className="text-sm text-zinc-300 mt-1">{benefit.impact}</p>
                    </div>
                    <div>
                      <span className="text-xs text-zinc-500 uppercase tracking-wide">Business Value</span>
                      <p className="text-sm text-zinc-300 mt-1">{benefit.userValue}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      {product.performanceMetrics && (
        <section className="py-16 bg-zinc-900/30">
          <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
            <Reveal className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                <TextGenerateEffect words="Performance Metrics" className="" />
              </h2>
            </Reveal>

            <div className="max-w-4xl mx-auto">
              <Reveal delay={240}>
                <div className="grid grid-cols-1 gap-6">
                  {Object.entries(product.performanceMetrics).map(([key, value], index) => (
                    <div key={index} className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/50">
                      <h4 className="text-sm font-medium text-zinc-400 mb-2 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <p className="text-sm text-zinc-300 font-mono">{value}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Technical Specifications */}
      {product.technicalSpecs && (
        <section className="py-16">
          <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
            <Reveal className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                <TextGenerateEffect words="Technical Specifications" className="" />
              </h2>
            </Reveal>

            <div className="max-w-6xl mx-auto">
              <Reveal delay={240}>
                <div className="grid grid-cols-1 gap-6">
                  {Object.entries(product.technicalSpecs).map(([key, value], index) => {
                    // Special handling for architecture diagram
                    if (key === 'architectureDiagram' && typeof value === 'string') {
                      return (
                          <MermaidDiagram key={key} chart={value} />
                      );
                    }
                    
                    // Skip architectureDiagram if we're showing the diagram separately
                    if (key === 'architectureDiagram') {
                      return null;
                    }
                    
                    return (
                      <div key={index} className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30">
                        <h4 className="text-sm font-medium text-zinc-400 mb-2 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <p className="text-sm text-zinc-300">{value}</p>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

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
