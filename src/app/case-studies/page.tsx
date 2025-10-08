"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedChallenge, setSelectedChallenge] = useState("all");

  const industries = [
    { id: "all", name: "All Industries", count: 12 },
    { id: "healthcare", name: "Healthcare", count: 3 },
    { id: "finance", name: "Finance", count: 2 },
    { id: "ecommerce", name: "E-commerce", count: 3 },
    { id: "education", name: "Education", count: 2 },
    { id: "manufacturing", name: "Manufacturing", count: 2 },
  ];

  const challenges = [
    { id: "all", name: "All Challenges" },
    { id: "scalability", name: "Scalability" },
    { id: "security", name: "Security" },
    { id: "performance", name: "Performance" },
    { id: "integration", name: "Integration" },
    { id: "automation", name: "Automation" },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "MediCare Plus: Transforming Patient Care with AI-Powered Healthcare Platform",
      company: "MediCare Plus",
      industry: "healthcare",
      challenge: "integration",
      description: "How we helped MediCare Plus build a comprehensive healthcare platform that reduced patient wait times by 60% and improved diagnosis accuracy through AI integration.",
      results: [
        "60% reduction in patient wait times",
        "40% improvement in diagnosis accuracy",
        "95% patient satisfaction rate",
        "50% reduction in administrative costs"
      ],
      technologies: ["AI/ML", "React", "Node.js", "PostgreSQL", "AWS"],
      duration: "6 months",
      teamSize: "8 developers",
      featured: true,
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "FinTech Solutions: Building a Secure Digital Banking Platform",
      company: "SecureBank",
      industry: "finance",
      challenge: "security",
      description: "A complete digital banking transformation that enabled SecureBank to serve 2M+ customers with enterprise-grade security and real-time transaction processing.",
      results: [
        "2M+ active users",
        "99.9% uptime achieved",
        "Zero security breaches",
        "300% increase in digital transactions"
      ],
      technologies: ["React", "Spring Boot", "Kubernetes", "Redis", "PostgreSQL"],
      duration: "8 months",
      teamSize: "12 developers",
      featured: true,
      image: "/api/placeholder/800/400"
    },
    {
      id: 3,
      title: "ShopEasy: Scaling E-commerce Platform to Handle Black Friday Traffic",
      company: "ShopEasy",
      industry: "ecommerce",
      challenge: "scalability",
      description: "Transformed ShopEasy's infrastructure to handle 10x traffic spikes during peak shopping seasons while maintaining sub-second response times.",
      results: [
        "10x traffic handling capacity",
        "Sub-second response times",
        "99.99% uptime during peak",
        "200% increase in conversion rate"
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "Redis", "AWS"],
      duration: "4 months",
      teamSize: "6 developers",
      image: "/api/placeholder/800/400"
    },
    {
      id: 4,
      title: "EduTech Academy: Revolutionizing Online Learning with Interactive Platform",
      company: "EduTech Academy",
      industry: "education",
      challenge: "performance",
      description: "Built an interactive learning platform that supports 100K+ concurrent students with real-time collaboration features and AI-powered personalized learning paths.",
      results: [
        "100K+ concurrent users",
        "85% improvement in learning outcomes",
        "90% student engagement rate",
        "60% reduction in course completion time"
      ],
      technologies: ["React", "WebRTC", "Node.js", "MongoDB", "AI/ML"],
      duration: "7 months",
      teamSize: "10 developers",
      image: "/api/placeholder/800/400"
    },
    {
      id: 5,
      title: "AutoManufacturing: IoT-Driven Smart Factory Implementation",
      company: "AutoManufacturing Inc.",
      industry: "manufacturing",
      challenge: "automation",
      description: "Implemented a comprehensive IoT solution that automated production monitoring, predictive maintenance, and quality control across 15 manufacturing facilities.",
      results: [
        "30% reduction in downtime",
        "25% increase in production efficiency",
        "40% reduction in maintenance costs",
        "99.5% quality control accuracy"
      ],
      technologies: ["IoT", "Python", "React", "PostgreSQL", "Kubernetes"],
      duration: "10 months",
      teamSize: "15 developers",
      image: "/api/placeholder/800/400"
    },
    {
      id: 6,
      title: "HealthTech Solutions: HIPAA-Compliant Telemedicine Platform",
      company: "HealthTech Solutions",
      industry: "healthcare",
      challenge: "security",
      description: "Developed a secure telemedicine platform that enables healthcare providers to conduct virtual consultations while maintaining full HIPAA compliance.",
      results: [
        "100% HIPAA compliance",
        "50K+ virtual consultations",
        "98% patient satisfaction",
        "40% reduction in no-show rates"
      ],
      technologies: ["React", "WebRTC", "Node.js", "PostgreSQL", "AWS"],
      duration: "5 months",
      teamSize: "7 developers",
      image: "/api/placeholder/800/400"
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === "all" || study.industry === selectedIndustry;
    const matchesChallenge = selectedChallenge === "all" || study.challenge === selectedChallenge;
    return matchesIndustry && matchesChallenge;
  });

  const getIndustryColor = (industry: string) => {
    switch (industry) {
      case "healthcare": return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "finance": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "ecommerce": return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      case "education": return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
      case "manufacturing": return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getChallengeColor = (challenge: string) => {
    switch (challenge) {
      case "scalability": return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400";
      case "security": return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "performance": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "integration": return "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400";
      case "automation": return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Success Stories
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                Discover how we've helped companies across industries transform their businesses 
                with innovative technology solutions and achieve remarkable results.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Filter Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Industry</label>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((industry) => (
                      <button
                        key={industry.id}
                        onClick={() => setSelectedIndustry(industry.id)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          selectedIndustry === industry.id
                            ? "bg-indigo-600 text-white"
                            : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-700"
                        }`}
                      >
                        {industry.name} ({industry.count})
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Challenge</label>
                  <div className="flex flex-wrap gap-2">
                    {challenges.map((challenge) => (
                      <button
                        key={challenge.id}
                        onClick={() => setSelectedChallenge(challenge.id)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          selectedChallenge === challenge.id
                            ? "bg-indigo-600 text-white"
                            : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-700"
                        }`}
                      >
                        {challenge.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Success Stories</h2>
              <p className="text-zinc-600 dark:text-zinc-400">Real results from real companies</p>
            </div>
          </Reveal>

          <div className="space-y-12">
            {filteredCaseStudies.filter(study => study.featured).map((study, index) => (
              <Reveal key={study.id} delay={index * 200}>
                <article className="group relative bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-500 opacity-90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold">Success Story</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400">
                          Featured
                        </span>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getIndustryColor(study.industry)}`}>
                          {study.industry.toUpperCase()}
                        </span>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getChallengeColor(study.challenge)}`}>
                          {study.challenge.toUpperCase()}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {study.title}
                      </h3>
                      
                      <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-lg leading-relaxed">
                        {study.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-sm">
                          <span className="text-zinc-500 dark:text-zinc-400">Duration:</span>
                          <span className="ml-2 font-medium text-foreground">{study.duration}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-zinc-500 dark:text-zinc-400">Team Size:</span>
                          <span className="ml-2 font-medium text-foreground">{study.teamSize}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.technologies.map((tech) => (
                          <span key={tech} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        <Button asChild size="lg" className="w-full sm:w-auto">
                          <Link href={`/case-studies/${study.id}`}>Read Full Case Study</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">All Case Studies</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {filteredCaseStudies.length} {filteredCaseStudies.length === 1 ? 'case study' : 'case studies'} available
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCaseStudies.map((study, index) => (
              <Reveal key={study.id} delay={index * 100}>
                <article className="group relative bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getIndustryColor(study.industry)}`}>
                        {study.industry.toUpperCase()}
                      </span>
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getChallengeColor(study.challenge)}`}>
                        {study.challenge.toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {study.title}
                    </h3>
                    
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3">
                      {study.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        <span className="font-medium">Key Results:</span>
                      </div>
                      <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1 h-1 bg-indigo-400 rounded-full mr-2"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        {study.duration} • {study.teamSize}
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/case-studies/${study.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
