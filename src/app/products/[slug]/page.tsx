import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

const PRODUCTS = {
  "ai-integration": {
    name: "AI Integration",
    tagline: "Harness the power of artificial intelligence to build intelligent applications",
    overview: "We help businesses harness the power of Artificial Intelligence by integrating machine learning models, natural language processing, and automation into their existing systems. Our solutions optimize workflows, improve decision-making, and enhance customer experiences.",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "purple",
    features: [
      {
        title: "Machine Learning Models",
        description: "Integrate pre-trained and custom ML models seamlessly",
        icon: "🧠"
      },
      {
        title: "Natural Language Processing",
        description: "Add intelligent text analysis and language understanding",
        icon: "💬"
      },
      {
        title: "Predictive Analytics",
        description: "Make data-driven decisions with advanced analytics",
        icon: "📊"
      },
      {
        title: "Automated Workflows",
        description: "Streamline processes with intelligent automation",
        icon: "⚡"
      }
    ],
    benefits: [
      "Faster time-to-market for AI features",
      "Reduced development complexity",
      "Scalable AI infrastructure",
      "Enterprise-grade security"
    ]
  },
  "desktop-applications": {
    name: "Desktop Applications",
    tagline: "Create powerful, native desktop applications with cross-platform compatibility",
    overview: "Build robust desktop applications that deliver exceptional performance and user experience. Our platform supports multiple frameworks and technologies, enabling you to create applications that work seamlessly across Windows, macOS, and Linux.",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "blue",
    features: [
      {
        title: "Cross-Platform Development",
        description: "Build once, deploy everywhere with universal compatibility",
        icon: "🌐"
      },
      {
        title: "Native Performance",
        description: "Optimized for speed and resource efficiency",
        icon: "⚡"
      },
      {
        title: "Modern UI Framework",
        description: "Create beautiful, responsive user interfaces",
        icon: "🎨"
      },
      {
        title: "Enterprise Security",
        description: "Built-in security features and compliance support",
        icon: "🔒"
      }
    ],
    benefits: [
      "Reduced development time",
      "Consistent user experience",
      "Lower maintenance costs",
      "Future-proof architecture"
    ]
  },
  "web-applications": {
    name: "Web Applications",
    tagline: "Build scalable, responsive web applications that work seamlessly across all devices",
    overview: "We develop modern, responsive, and secure web applications that are tailored to enhance business productivity and deliver seamless user experiences.",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
      </svg>
    ),
    color: "emerald",
    features: [
      {
        title: "Responsive Design",
        description: "Perfect experience across all devices and screen sizes",
        icon: "📱"
      },
      {
        title: "Performance Optimization",
        description: "Fast loading times and smooth user interactions",
        icon: "🚀"
      },
      {
        title: "SEO Ready",
        description: "Built-in SEO optimization for better visibility",
        icon: "🔍"
      },
      {
        title: "Progressive Web Apps",
        description: "Modern PWA capabilities for enhanced user experience",
        icon: "📲"
      }
    ],
    benefits: [
      "Wider audience reach",
      "Lower deployment costs",
      "Easy maintenance and updates",
      "Mobile-first approach"
    ]
  },
  "mobile-applications": {
    name: "Mobile Applications",
    tagline: "Develop native and cross-platform mobile apps that engage users and drive growth",
    overview: "Our mobile app solutions bring your ideas to life with engaging, high-performing apps that work seamlessly across platforms. We ensure intuitive user journeys and optimized performance.",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: "orange",
    features: [
      {
        title: "Native Performance",
        description: "Optimized for iOS and Android platforms",
        icon: "📱"
      },
      {
        title: "Cross-Platform Development",
        description: "Single codebase for multiple platforms",
        icon: "🔄"
      },
      {
        title: "Offline Capabilities",
        description: "Apps that work even without internet connection",
        icon: "📡"
      },
      {
        title: "Push Notifications",
        description: "Engage users with targeted messaging",
        icon: "🔔"
      }
    ],
    benefits: [
      "Increased user engagement",
      "Faster development cycles",
      "Lower development costs",
      "Better user retention"
    ]
  },
  "ui-ux-services": {
    name: "UI/UX Services",
    tagline: "Create intuitive, accessible user experiences that delight customers and drive engagement",
    overview: "We design digital products that prioritize user experience while maintaining a modern, visually appealing aesthetic. Our design process ensures usability, accessibility, and delight.",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    ),
    color: "pink",
    features: [
      {
        title: "User Research",
        description: "Deep insights into user behavior and preferences",
        icon: "🔍"
      },
      {
        title: "Wireframing & Prototyping",
        description: "Visualize concepts before development begins",
        icon: "📐"
      },
      {
        title: "Visual Design",
        description: "Beautiful, modern interfaces that engage users",
        icon: "🎨"
      },
      {
        title: "Usability Testing",
        description: "Validate designs with real user feedback",
        icon: "✅"
      }
    ],
    benefits: [
      "Higher conversion rates",
      "Improved user satisfaction",
      "Reduced development rework",
      "Competitive advantage"
    ]
  },
  "cloud-devops": {
    name: "Cloud & DevOps",
    tagline: "Streamline deployment and operations with cloud-native solutions and DevOps best practices",
    overview: "We empower businesses to scale and deliver faster through cloud infrastructure and DevOps automation, ensuring reliability, security, and continuous delivery.",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: "indigo",
    features: [
      {
        title: "CI/CD Pipelines",
        description: "Automated build, test, and deployment processes",
        icon: "🔄"
      },
      {
        title: "Infrastructure as Code",
        description: "Manage infrastructure with version control",
        icon: "🏗️"
      },
      {
        title: "Container Orchestration",
        description: "Scale applications with Kubernetes and Docker",
        icon: "📦"
      },
      {
        title: "Monitoring & Logging",
        description: "Comprehensive observability and alerting",
        icon: "📊"
      }
    ],
    benefits: [
      "Faster deployment cycles",
      "Improved reliability",
      "Reduced operational overhead",
      "Better scalability"
    ]
  }
};

const getColorClasses = (color: string) => {
  const colors = {
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
  };
  return colors[color as keyof typeof colors] || colors.indigo;
};

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
            <div className="flex justify-center mb-6">
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${getColorClasses(product.color)}`}>
                {product.icon}
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-zinc-400 max-w-3xl mx-auto">
              {product.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">
                Overview
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                {product.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-zinc-900/30">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Key Features
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-zinc-800 bg-zinc-900/50"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">
                Benefits
              </h2>
              <div className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10">
                      <svg className="h-4 w-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-zinc-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-2xl">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                  Demo Video
                </h3>
                <div className="relative w-full overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900/60 pb-[56.25%]">
                  <div className="absolute inset-0 flex items-center justify-center gap-2 text-sm text-zinc-300">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    <span>Demo video placeholder ({product.name})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[90rem] px-3 sm:px-4 lg:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4">
              Get Started with {product.name}
            </h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              Ready to transform your business with {product.name.toLowerCase()}? Contact our team to learn more.
            </p>
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
