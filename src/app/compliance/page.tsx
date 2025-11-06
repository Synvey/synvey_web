"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

export default function Compliance() {
  const lastUpdated = "December 15, 2024";

  const complianceFrameworks = [
    {
      id: "gdpr",
      name: "GDPR",
      fullName: "General Data Protection Regulation",
      region: "European Union",
      icon: "🇪🇺",
      status: "Fully Compliant",
      certificationDate: "March 2024",
      description: "Comprehensive data protection and privacy regulation",
      keyFeatures: [
        "Right to access personal data",
        "Right to rectification and erasure",
        "Data portability rights",
        "Consent management",
        "Privacy by design implementation"
      ],
      auditFrequency: "Annual",
      nextAudit: "March 2025"
    },
    {
      id: "ccpa",
      name: "CCPA",
      fullName: "California Consumer Privacy Act",
      region: "California, USA",
      icon: "🇺🇸",
      status: "Fully Compliant",
      certificationDate: "January 2024",
      description: "Enhanced privacy rights for California residents",
      keyFeatures: [
        "Right to know about data collection",
        "Right to delete personal information",
        "Right to opt-out of data sales",
        "Non-discrimination protection",
        "Transparent privacy practices"
      ],
      auditFrequency: "Annual",
      nextAudit: "January 2025"
    },
    {
      id: "soc2",
      name: "SOC 2 Type II",
      fullName: "Service Organization Control 2",
      region: "United States",
      icon: "🏛️",
      status: "Certified",
      certificationDate: "June 2024",
      description: "Security, availability, and confidentiality controls",
      keyFeatures: [
        "Security management controls",
        "Availability monitoring",
        "Processing integrity verification",
        "Confidentiality protection",
        "Privacy safeguards"
      ],
      auditFrequency: "Annual",
      nextAudit: "June 2025"
    },
    {
      id: "iso27001",
      name: "ISO 27001",
      fullName: "Information Security Management",
      region: "International",
      icon: "🌍",
      status: "Certified",
      certificationDate: "August 2024",
      description: "International information security management standard",
      keyFeatures: [
        "Information security policy",
        "Risk assessment and treatment",
        "Security controls implementation",
        "Continuous monitoring",
        "Management review process"
      ],
      auditFrequency: "Annual",
      nextAudit: "August 2025"
    }
  ];

  const complianceStats = [
    {
      label: "Active Certifications",
      value: "4",
      icon: "📜",
      description: "Current compliance certifications"
    },
    {
      label: "Countries Covered",
      value: "27+",
      icon: "🌐",
      description: "Global compliance coverage"
    },
    {
      label: "Audit Success Rate",
      value: "100%",
      icon: "✅",
      description: "Perfect audit track record"
    },
    {
      label: "Response Time",
      value: "< 24h",
      icon: "⚡",
      description: "Compliance request response"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Fully Compliant":
      case "Certified":
        return {
          bg: "bg-green-500",
          text: "text-green-600",
          bgLight: "bg-green-50 dark:bg-green-900/20"
        };
      case "In Progress":
        return {
          bg: "bg-yellow-500",
          text: "text-yellow-600",
          bgLight: "bg-yellow-50 dark:bg-yellow-900/20"
        };
      default:
        return {
          bg: "bg-gray-500",
          text: "text-gray-600",
          bgLight: "bg-gray-50 dark:bg-gray-900/20"
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-cyan-900/20">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="compliance-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <polygon points="50,0 100,50 50,100 0,50" fill="currentColor" className="text-purple-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#compliance-pattern)" />
        </svg>
      </div>

      {/* Floating Compliance Icons */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 text-4xl opacity-20 animate-float">⚖️</div>
        <div className="absolute top-40 right-32 text-3xl opacity-15 animate-float" style={{ animationDelay: '2s' }}>📋</div>
        <div className="absolute bottom-32 left-32 text-5xl opacity-25 animate-float" style={{ animationDelay: '4s' }}>🛡️</div>
        <div className="absolute bottom-20 right-20 text-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>✅</div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full border border-purple-200 dark:border-purple-700 mb-8 shadow-lg">
              <span className="text-2xl">⚖️</span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Regulatory Excellence</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                Global
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Compliance
              </span>
            </h1>
            
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              We maintain the highest standards of regulatory compliance across multiple jurisdictions. 
              Our comprehensive approach ensures your data is protected according to the world's strictest privacy laws.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                4 Active Certifications
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                27+ Countries Covered
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                Updated: {lastUpdated}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Compliance Stats */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {complianceStats.map((stat) => (
                <div key={stat.label} className="group relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-purple-200 dark:border-purple-700 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                Compliance Frameworks
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                We adhere to the world's most stringent data protection and privacy regulations
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => {
              const statusColors = getStatusColor(framework.status);
              return (
                <Reveal key={framework.id} delay={index * 150}>
                  <div className="group relative overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl border border-purple-200 dark:border-purple-700 p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Status Badge */}
                    <div className="absolute top-6 right-6 flex items-center gap-2">
                      <span className={`w-3 h-3 ${statusColors.bg} rounded-full animate-pulse`} />
                      <span className={`text-xs font-medium ${statusColors.text}`}>{framework.status}</span>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                        {framework.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                          {framework.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                          {framework.fullName}
                        </p>
                        <span className="text-xs text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/20 px-2 py-1 rounded-full">
                          {framework.region}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                      {framework.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <h4 className="font-semibold text-slate-800 dark:text-slate-100">Key Features</h4>
                      <div className="space-y-2">
                        {framework.keyFeatures.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex-shrink-0" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Certified</div>
                        <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{framework.certificationDate}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Next Audit</div>
                        <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{framework.nextAudit}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Process */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl border border-purple-200 dark:border-purple-700 p-10 shadow-2xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                  Our Compliance Process
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Continuous monitoring and improvement cycle
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Assessment", description: "Regular compliance gap analysis", icon: "🔍" },
                  { step: "2", title: "Implementation", description: "Deploy required controls and processes", icon: "⚙️" },
                  { step: "3", title: "Monitoring", description: "Continuous compliance monitoring", icon: "📊" },
                  { step: "4", title: "Reporting", description: "Regular compliance reports and audits", icon: "📋" }
                ].map((step) => (
                  <div key={step.step} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 rounded-3xl p-12 text-center text-white shadow-2xl">
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0">
                <div className="absolute top-4 left-4 w-24 h-24 bg-white/10 rounded-full animate-pulse" />
                <div className="absolute bottom-4 right-4 w-32 h-32 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
              </div>
              
              <div className="relative">
                <div className="text-6xl mb-6">⚖️🌍</div>
                <h2 className="text-4xl font-bold mb-6">Compliance Questions?</h2>
                <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Our compliance team is here to answer your questions about data protection, 
                  privacy regulations, and how we keep your information secure and compliant.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50 hover:scale-105 transition-all duration-300">
                    <Link href="/contact">Contact Compliance Team</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover:scale-105 transition-all duration-300">
                    <Link href="/security">Security Overview</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
