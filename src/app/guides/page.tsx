"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const categories = [
    { id: "all", name: "All Guides", count: 15 },
    { id: "getting-started", name: "Getting Started", count: 4 },
    { id: "development", name: "Development", count: 5 },
    { id: "deployment", name: "Deployment", count: 3 },
    { id: "integration", name: "Integration", count: 3 },
  ];

  const difficulties = [
    { id: "all", name: "All Levels" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" },
  ];

  const guides = [
    {
      id: 1,
      title: "Complete Setup Guide: From Zero to Production",
      description: "A comprehensive walkthrough that takes you from initial setup to deploying your first application in production.",
      category: "getting-started",
      difficulty: "beginner",
      readTime: "45 min",
      steps: 12,
      tags: ["setup", "deployment", "production"],
      featured: true,
      icon: "🚀"
    },
    {
      id: 2,
      title: "Building Your First AI-Powered Application",
      description: "Learn how to integrate AI capabilities into your applications using modern frameworks and best practices.",
      category: "development",
      difficulty: "intermediate",
      readTime: "60 min",
      steps: 15,
      tags: ["AI", "machine learning", "integration"],
      featured: true,
      icon: "🤖"
    },
    {
      id: 3,
      title: "Mobile App Development with React Native",
      description: "Create cross-platform mobile applications that work seamlessly on both iOS and Android devices.",
      category: "development",
      difficulty: "intermediate",
      readTime: "90 min",
      steps: 20,
      tags: ["mobile", "react native", "cross-platform"],
      icon: "📱"
    },
    {
      id: 4,
      title: "API Design and Development Best Practices",
      description: "Master the art of creating robust, scalable, and maintainable APIs that developers love to use.",
      category: "development",
      difficulty: "advanced",
      readTime: "75 min",
      steps: 18,
      tags: ["API", "design", "best practices"],
      icon: "🔌"
    },
    {
      id: 5,
      title: "Docker and Kubernetes Deployment Guide",
      description: "Containerize your applications and deploy them at scale using Docker and Kubernetes orchestration.",
      category: "deployment",
      difficulty: "advanced",
      readTime: "120 min",
      steps: 25,
      tags: ["docker", "kubernetes", "containers"],
      icon: "🐳"
    },
    {
      id: 6,
      title: "Database Design and Optimization",
      description: "Learn how to design efficient databases and optimize queries for better performance and scalability.",
      category: "development",
      difficulty: "intermediate",
      readTime: "50 min",
      steps: 12,
      tags: ["database", "optimization", "performance"],
      icon: "🗄️"
    },
    {
      id: 7,
      title: "Authentication and Authorization Implementation",
      description: "Implement secure authentication and authorization systems using industry-standard protocols and practices.",
      category: "integration",
      difficulty: "intermediate",
      readTime: "40 min",
      steps: 10,
      tags: ["authentication", "security", "JWT"],
      icon: "🔐"
    },
    {
      id: 8,
      title: "CI/CD Pipeline Setup and Automation",
      description: "Set up continuous integration and deployment pipelines to automate your development workflow.",
      category: "deployment",
      difficulty: "advanced",
      readTime: "80 min",
      steps: 16,
      tags: ["CI/CD", "automation", "devops"],
      icon: "⚙️"
    },
    {
      id: 9,
      title: "Frontend Performance Optimization",
      description: "Optimize your frontend applications for speed, accessibility, and better user experience.",
      category: "development",
      difficulty: "intermediate",
      readTime: "55 min",
      steps: 14,
      tags: ["frontend", "performance", "optimization"],
      icon: "⚡"
    },
    {
      id: 10,
      title: "Third-Party Service Integration",
      description: "Learn how to integrate popular third-party services like payment gateways, email providers, and analytics tools.",
      category: "integration",
      difficulty: "beginner",
      readTime: "35 min",
      steps: 8,
      tags: ["integration", "third-party", "services"],
      icon: "🔗"
    }
  ];

  const filteredGuides = guides.filter(guide => {
    const matchesCategory = selectedCategory === "all" || guide.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || guide.difficulty === selectedDifficulty;
    return matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "advanced": return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "getting-started": return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "development": return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      case "deployment": return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
      case "integration": return "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400";
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
                Step-by-Step Guides
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                Master new technologies and best practices with our comprehensive, 
                hands-on guides designed for developers of all skill levels.
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
              <h2 className="text-xl font-semibold text-foreground mb-4">Filter Guides</h2>
              <div className="flex flex-wrap gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          selectedCategory === category.id
                            ? "bg-indigo-600 text-white"
                            : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-700"
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Difficulty Level</label>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty.id}
                    onClick={() => setSelectedDifficulty(difficulty.id)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      selectedDifficulty === difficulty.id
                        ? "bg-indigo-600 text-white"
                        : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-700"
                    }`}
                  >
                    {difficulty.name}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Guides</h2>
              <p className="text-zinc-600 dark:text-zinc-400">Start with these comprehensive guides</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {filteredGuides.filter(guide => guide.featured).map((guide, index) => (
              <Reveal key={guide.id} delay={index * 100}>
                <div className="group relative bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{guide.icon}</div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400">
                            Featured
                          </span>
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getDifficultyColor(guide.difficulty)}`}>
                            {guide.difficulty.charAt(0).toUpperCase() + guide.difficulty.slice(1)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-zinc-500 dark:text-zinc-400">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {guide.readTime}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            {guide.steps} steps
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {guide.title}
                  </h3>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {guide.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button asChild size="lg" className="w-full group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Link href={`/guides/${guide.id}`}>Start Guide</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">All Guides</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {filteredGuides.length} {filteredGuides.length === 1 ? 'guide' : 'guides'} available
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGuides.map((guide, index) => (
              <Reveal key={guide.id} delay={index * 50}>
                <div className="group relative bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{guide.icon}</div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(guide.category)}`}>
                            {guide.category.replace('-', ' ').toUpperCase()}
                          </span>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(guide.difficulty)}`}>
                            {guide.difficulty.charAt(0).toUpperCase() + guide.difficulty.slice(1)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 text-xs text-zinc-500 dark:text-zinc-400">
                          <span className="flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {guide.readTime}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            {guide.steps} steps
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {guide.title}
                  </h3>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3">
                    {guide.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {guide.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2 py-1 rounded text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button asChild variant="outline" className="w-full group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 group-hover:border-indigo-300 dark:group-hover:border-indigo-700">
                    <Link href={`/guides/${guide.id}`}>Start Guide</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Recommended Learning Paths
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Follow these structured paths to master specific technologies and skills
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Reveal delay={100}>
              <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Beginner Path</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">4 guides • 3 hours</p>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                  Perfect for newcomers. Learn the fundamentals and build your first application.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/guides/path/beginner">Start Path</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Developer Path</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">6 guides • 5 hours</p>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                  For experienced developers. Master advanced concepts and best practices.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/guides/path/developer">Start Path</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">AI Integration Path</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">5 guides • 4 hours</p>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                  Specialized path for integrating AI capabilities into your applications.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/guides/path/ai-integration">Start Path</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
