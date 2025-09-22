import Link from "next/link";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Build scalable online stores with AI-powered features",
    icon: "🛒",
    features: ["AI-powered recommendations", "Real-time inventory", "Secure payments", "Mobile optimization"],
    industry: "Retail & E-commerce"
  },
  {
    slug: "healthcare-management",
    title: "Healthcare Management",
    description: "Secure patient data and streamline medical workflows",
    icon: "🏥",
    features: ["HIPAA compliance", "Patient portals", "Appointment scheduling", "Medical records"],
    industry: "Healthcare"
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    description: "Compliant fintech solutions with real-time analytics",
    icon: "💳",
    features: ["PCI compliance", "Real-time transactions", "Fraud detection", "Risk management"],
    industry: "Financial Services"
  },
  {
    slug: "education-technology",
    title: "Education Technology",
    description: "Interactive learning platforms and student management",
    icon: "🎓",
    features: ["Learning management", "Student tracking", "Virtual classrooms", "Assessment tools"],
    industry: "Education"
  },
  {
    slug: "manufacturing-iot",
    title: "Manufacturing IoT",
    description: "Smart factory solutions and predictive maintenance",
    icon: "🏭",
    features: ["IoT sensors", "Predictive analytics", "Quality control", "Supply chain"],
    industry: "Manufacturing"
  },
  {
    slug: "real-estate-portal",
    title: "Real Estate Portal",
    description: "Property listings with virtual tours and analytics",
    icon: "🏠",
    features: ["Virtual tours", "Property search", "Market analytics", "Lead management"],
    industry: "Real Estate"
  }
];

export default function UseCasesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative isolate min-h-[70vh] flex items-center">
        <div className="mx-auto max-w-[90rem] px-3 py-16 sm:px-4 lg:px-6">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Real-World Use Cases & Success Stories
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-zinc-400 sm:text-xl">
              Discover how Synvey powers digital transformation across industries with proven solutions and measurable results.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Explore Your Use Case</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Industry-Specific Solutions
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Tailored solutions for every industry and business challenge
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <Link
                key={useCase.slug}
                href={`/use-cases/${useCase.slug}`}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-indigo-500/10 mb-6 text-3xl">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-white transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-zinc-300">Key Features:</div>
                  <ul className="text-sm text-zinc-400 space-y-1">
                    {useCase.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 text-sm text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 sm:py-20 bg-zinc-900/30">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Real results from real customers across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Success Story 1 */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-green-500/10 mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">E-commerce Platform</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                "Synvey helped us build a scalable e-commerce platform that handles 10x more traffic with 50% faster load times."
              </p>
              <div className="text-sm text-zinc-500">
                <strong className="text-foreground">TechRetail Inc.</strong> - 300% revenue growth
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/10 mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Healthcare Management</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                "Our patient management system now processes 5x more appointments with 99.9% uptime and full HIPAA compliance."
              </p>
              <div className="text-sm text-zinc-500">
                <strong className="text-foreground">MediCare Plus</strong> - 200% efficiency gain
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-500/10 mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Financial Services</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                "We reduced fraud by 80% and increased transaction processing speed by 3x with Synvey's fintech solutions."
              </p>
              <div className="text-sm text-zinc-500">
                <strong className="text-foreground">SecureBank</strong> - 80% fraud reduction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to build your success story?
            </h2>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
              Let's discuss how Synvey can help you achieve similar results for your specific use case and industry.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
