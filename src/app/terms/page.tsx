"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

export default function TermsOfService() {
  const lastUpdated = "December 15, 2024";

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: "✓",
      content: [
        "By accessing and using Synvey's services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use our service."
      ]
    },
    {
      id: "use-license",
      title: "Use License",
      icon: "📄",
      content: [
        "Permission is granted to temporarily download one copy of Synvey's materials for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials.",
        "This license shall automatically terminate if you violate any of these restrictions and may be terminated by Synvey at any time."
      ]
    },
    {
      id: "user-accounts",
      title: "User Accounts",
      icon: "👤",
      content: [
        "You are responsible for safeguarding the password and for maintaining the confidentiality of your account.",
        "You agree not to disclose your password to any third party and to take sole responsibility for activities under your account.",
        "You must notify us immediately of any breach of security or unauthorized use of your account."
      ]
    },
    {
      id: "prohibited-uses",
      title: "Prohibited Uses",
      icon: "🚫",
      content: [
        "You may not use our service for any unlawful purpose or to solicit others to perform unlawful acts.",
        "You may not violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances.",
        "You may not transmit any worms, viruses, or any code of a destructive nature.",
        "You may not collect or track personal information of others without explicit consent."
      ]
    },
    {
      id: "service-availability",
      title: "Service Availability",
      icon: "🌐",
      content: [
        "We strive to maintain high service availability but do not guarantee uninterrupted access to our services.",
        "Scheduled maintenance and updates may temporarily affect service availability.",
        "We reserve the right to modify or discontinue our service with reasonable notice to users."
      ]
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      icon: "⚖️",
      content: [
        "Synvey shall not be liable for any damages that result from the use of, or the inability to use, our services.",
        "In no event shall Synvey be liable for any indirect, incidental, punitive, or consequential damages.",
        "Our total liability shall not exceed the amount paid by you for our services in the twelve months preceding the claim."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-cyan-900/20">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400 to-blue-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full border border-blue-200 dark:border-blue-700 mb-8 shadow-lg">
              <span className="text-2xl">📋</span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Legal Framework</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent mb-6 tracking-tight">
              Terms of Service
            </h1>
            
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              These terms and conditions outline the rules and regulations for the use of Synvey's services. 
              Please read them carefully before using our platform.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Last updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>Effective immediately</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span>Governs all users</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive Navigation */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl border border-blue-200 dark:border-blue-700 p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
                Navigate Our Terms
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections.map((section, index) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-6 border border-blue-100 dark:border-blue-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {section.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {section.content[0].substring(0, 80)}...
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {sections.map((section, index) => (
            <Reveal key={section.id} delay={index * 150}>
              <div id={section.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl border border-blue-200 dark:border-blue-700 p-10 hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {section.icon}
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    {section.content.map((paragraph, pIndex) => (
                      <div key={pIndex} className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-3 flex-shrink-0" />
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Agreement Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 rounded-3xl p-12 text-center text-white shadow-2xl">
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
              
              <div className="relative">
                <div className="text-6xl mb-6">🤝</div>
                <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
                  By using our services, you agree to these terms. Have questions about any section? 
                  Our legal team is here to help clarify any concerns.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                    <Link href="/contact">Contact Legal Team</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover:scale-105 transition-all duration-300">
                    <Link href="/privacy">Privacy Policy</Link>
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
