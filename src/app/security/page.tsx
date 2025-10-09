"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

export default function Security() {
  const lastUpdated = "December 15, 2024";

  const securityMeasures = [
    {
      id: "encryption",
      title: "End-to-End Encryption",
      icon: "🔐",
      level: "Enterprise Grade",
      description: "All data is encrypted using AES-256 encryption both in transit and at rest",
      features: [
        "TLS 1.3 for data in transit",
        "AES-256 encryption at rest",
        "Zero-knowledge architecture",
        "Perfect forward secrecy"
      ],
      status: "Active"
    },
    {
      id: "access-control",
      title: "Identity & Access Management",
      icon: "🛡️",
      level: "Multi-Factor",
      description: "Comprehensive access controls with multi-factor authentication",
      features: [
        "Multi-factor authentication (MFA)",
        "Role-based access control (RBAC)",
        "Single sign-on (SSO)",
        "Regular access reviews"
      ],
      status: "Active"
    },
    {
      id: "monitoring",
      title: "24/7 Security Monitoring",
      icon: "👁️",
      level: "Real-time",
      description: "Continuous monitoring and threat detection across all systems",
      features: [
        "Real-time threat detection",
        "Automated incident response",
        "Security event logging",
        "Anomaly detection AI"
      ],
      status: "Active"
    },
    {
      id: "compliance",
      title: "Compliance & Auditing",
      icon: "📋",
      level: "Certified",
      description: "Regular audits and compliance with international security standards",
      features: [
        "SOC 2 Type II certified",
        "ISO 27001 compliant",
        "GDPR compliant",
        "Regular penetration testing"
      ],
      status: "Verified"
    }
  ];

  const incidentResponse = [
    {
      step: 1,
      title: "Detection",
      description: "Automated systems detect potential security threats",
      time: "< 1 minute",
      color: "red"
    },
    {
      step: 2,
      title: "Assessment",
      description: "Security team evaluates the threat severity",
      time: "< 5 minutes",
      color: "orange"
    },
    {
      step: 3,
      title: "Response",
      description: "Immediate containment and mitigation measures",
      time: "< 15 minutes",
      color: "yellow"
    },
    {
      step: 4,
      title: "Resolution",
      description: "Full resolution and system restoration",
      time: "< 1 hour",
      color: "green"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500";
      case "Verified":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Security Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Security Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 text-4xl opacity-30 animate-bounce" style={{ animationDuration: '3s' }}>🔒</div>
        <div className="absolute top-40 right-32 text-3xl opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>🛡️</div>
        <div className="absolute bottom-32 left-32 text-5xl opacity-25 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>🔐</div>
        <div className="absolute bottom-20 right-20 text-3xl opacity-30 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>⚡</div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-8">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-blue-200">Security Status: Protected</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Enterprise
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Security
              </span>
            </h1>
            
            <p className="text-xl text-blue-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Your data security is our top priority. We implement industry-leading security measures 
              to protect your information with military-grade encryption and continuous monitoring.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-blue-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                SOC 2 Type II Certified
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                ISO 27001 Compliant
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                Updated: {lastUpdated}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Security Measures Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Security Infrastructure</h2>
              <p className="text-lg text-blue-200 max-w-3xl mx-auto">
                Multi-layered security architecture designed to protect against evolving threats
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <Reveal key={measure.id} delay={index * 100}>
                <div className="group relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-3xl border border-blue-400/20 p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                  {/* Status Indicator */}
                  <div className="absolute top-6 right-6 flex items-center gap-2">
                    <span className={`w-3 h-3 ${getStatusColor(measure.status)} rounded-full animate-pulse`} />
                    <span className="text-xs text-blue-200 font-medium">{measure.status}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {measure.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{measure.title}</h3>
                      <span className="text-sm text-blue-300 bg-blue-600/20 px-3 py-1 rounded-full">
                        {measure.level}
                      </span>
                    </div>
                  </div>

                  <p className="text-blue-200 mb-6 leading-relaxed">{measure.description}</p>

                  <div className="space-y-3">
                    {measure.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0" />
                        <span className="text-blue-100 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response Timeline */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Incident Response Protocol</h2>
              <p className="text-lg text-blue-200">
                Our rapid response system ensures immediate threat containment
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {incidentResponse.map((step, index) => (
                <Reveal key={step.step} delay={index * 150}>
                  <div className="relative">
                    <div className={`w-16 h-16 bg-${step.color}-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg shadow-${step.color}-500/50 relative z-10`}>
                      {step.step}
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-blue-200 text-sm mb-3">{step.description}</p>
                      <span className={`inline-block px-3 py-1 bg-${step.color}-500/20 text-${step.color}-300 text-xs rounded-full`}>
                        {step.time}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Certifications */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-blue-400/20 p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-4">Security Certifications</h2>
                <p className="text-blue-200">
                  Verified by leading security organizations worldwide
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { name: "SOC 2 Type II", icon: "🏆", status: "Certified" },
                  { name: "ISO 27001", icon: "🛡️", status: "Compliant" },
                  { name: "GDPR", icon: "🔒", status: "Compliant" },
                  { name: "PenTest", icon: "🔍", status: "Verified" }
                ].map((cert, index) => (
                  <div key={cert.name} className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                    <span className="text-sm text-green-300">{cert.status}</span>
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
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-center shadow-2xl">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0">
                <div className="absolute top-4 left-4 w-24 h-24 bg-white/10 rounded-full animate-pulse" />
                <div className="absolute bottom-4 right-4 w-32 h-32 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              <div className="relative">
                <div className="text-6xl mb-6">🛡️🚀</div>
                <h2 className="text-4xl font-bold mb-6">Enterprise-Grade Security</h2>
                <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Trust in our commitment to security. Your data is protected by the same measures 
                  used by Fortune 500 companies and government institutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                    <Link href="/contact">Contact Security Team</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover:scale-105 transition-all duration-300">
                    <Link href="/compliance">View Compliance</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
