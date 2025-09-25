import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

const useCases = {
  "ecommerce-platform": {
    title: "E-commerce Platform",
    description: "Build scalable online stores with AI-powered features",
    icon: "🛒",
    industry: "Retail & E-commerce",
    features: [
      "AI-powered product recommendations",
      "Real-time inventory management",
      "Secure payment processing",
      "Mobile-first responsive design",
      "Advanced analytics dashboard",
      "Multi-channel integration"
    ],
    benefits: [
      "Increase conversion rates by up to 40%",
      "Reduce cart abandonment by 25%",
      "Scale to handle 10x traffic spikes",
      "Improve customer satisfaction scores"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Stripe API"],
    caseStudy: {
      company: "TechRetail Inc.",
      challenge: "Legacy e-commerce platform couldn't handle Black Friday traffic spikes",
      solution: "Built modern, scalable platform with AI recommendations",
      results: "300% revenue growth, 50% faster load times, 99.9% uptime"
    }
  },
  "healthcare-management": {
    title: "Healthcare Management",
    description: "Secure patient data and streamline medical workflows",
    icon: "🏥",
    industry: "Healthcare",
    features: [
      "HIPAA-compliant patient portals",
      "Appointment scheduling system",
      "Electronic health records (EHR)",
      "Telemedicine integration",
      "Prescription management",
      "Insurance verification"
    ],
    benefits: [
      "Reduce administrative overhead by 60%",
      "Improve patient satisfaction by 45%",
      "Ensure 100% HIPAA compliance",
      "Streamline appointment scheduling"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "HIPAA-compliant hosting", "FHIR API"],
    caseStudy: {
      company: "MediCare Plus",
      challenge: "Manual patient management causing delays and errors",
      solution: "Digital patient portal with automated workflows",
      results: "200% efficiency gain, 99.9% uptime, 5x more appointments processed"
    }
  },
  "financial-services": {
    title: "Financial Services",
    description: "Compliant fintech solutions with real-time analytics",
    icon: "💳",
    industry: "Financial Services",
    features: [
      "PCI DSS compliant payment processing",
      "Real-time fraud detection",
      "Risk management dashboard",
      "Regulatory compliance reporting",
      "Multi-currency support",
      "Advanced security protocols"
    ],
    benefits: [
      "Reduce fraud by up to 80%",
      "Increase transaction processing speed by 3x",
      "Ensure regulatory compliance",
      "Improve customer trust and retention"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "PCI-compliant infrastructure"],
    caseStudy: {
      company: "SecureBank",
      challenge: "High fraud rates and slow transaction processing",
      solution: "AI-powered fraud detection with real-time processing",
      results: "80% fraud reduction, 3x faster transactions, 100% compliance"
    }
  },
  "education-technology": {
    title: "Education Technology",
    description: "Interactive learning platforms and student management",
    icon: "🎓",
    industry: "Education",
    features: [
      "Learning management system (LMS)",
      "Student progress tracking",
      "Virtual classroom integration",
      "Assessment and grading tools",
      "Parent-teacher communication",
      "Content management system"
    ],
    benefits: [
      "Improve student engagement by 50%",
      "Reduce administrative workload by 40%",
      "Enable remote learning capabilities",
      "Provide real-time progress insights"
    ],
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS", "LTI integration"],
    caseStudy: {
      company: "EduTech Academy",
      challenge: "Traditional learning methods not engaging students",
      solution: "Interactive digital learning platform with real-time tracking",
      results: "50% higher engagement, 40% less admin work, 90% student satisfaction"
    }
  },
  "manufacturing-iot": {
    title: "Manufacturing IoT",
    description: "Smart factory solutions and predictive maintenance",
    icon: "🏭",
    industry: "Manufacturing",
    features: [
      "IoT sensor integration",
      "Predictive maintenance algorithms",
      "Quality control automation",
      "Supply chain optimization",
      "Real-time production monitoring",
      "Energy consumption tracking"
    ],
    benefits: [
      "Reduce downtime by 70%",
      "Improve product quality by 35%",
      "Optimize energy consumption by 25%",
      "Increase overall equipment effectiveness"
    ],
    technologies: ["React", "Node.js", "InfluxDB", "MQTT", "AWS IoT", "Machine Learning"],
    caseStudy: {
      company: "SmartManufacturing Co.",
      challenge: "Unexpected equipment failures causing production delays",
      solution: "IoT-based predictive maintenance system",
      results: "70% less downtime, 35% better quality, 25% energy savings"
    }
  },
  "real-estate-portal": {
    title: "Real Estate Portal",
    description: "Property listings with virtual tours and analytics",
    icon: "🏠",
    industry: "Real Estate",
    features: [
      "Virtual property tours",
      "Advanced property search",
      "Market analytics dashboard",
      "Lead management system",
      "Document management",
      "Mobile app integration"
    ],
    benefits: [
      "Increase lead conversion by 60%",
      "Reduce time-to-sale by 30%",
      "Improve customer experience",
      "Streamline property management"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "3D rendering", "AWS", "CRM integration"],
    caseStudy: {
      company: "PrimeRealty Group",
      challenge: "Low conversion rates and lengthy sales cycles",
      solution: "Interactive portal with virtual tours and analytics",
      results: "60% higher conversions, 30% faster sales, 95% customer satisfaction"
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
