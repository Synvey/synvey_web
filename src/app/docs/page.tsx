"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All", count: 24 },
    { id: "getting-started", name: "Getting Started", count: 6 },
    { id: "api-reference", name: "API Reference", count: 8 },
    { id: "tutorials", name: "Tutorials", count: 5 },
    { id: "examples", name: "Examples", count: 5 },
  ];

  const docs = [
    {
      id: 1,
      title: "Quick Start Guide",
      description: "Get up and running with Synvey in under 5 minutes",
      category: "getting-started",
      readTime: "3 min read",
      difficulty: "Beginner",
      tags: ["setup", "basics"],
      featured: true,
    },
    {
      id: 2,
      title: "Authentication & Security",
      description: "Learn how to implement secure authentication in your applications",
      category: "getting-started",
      readTime: "8 min read",
      difficulty: "Intermediate",
      tags: ["auth", "security", "jwt"],
    },
    {
      id: 3,
      title: "API Endpoints Reference",
      description: "Complete reference for all available API endpoints",
      category: "api-reference",
      readTime: "15 min read",
      difficulty: "Advanced",
      tags: ["api", "reference", "endpoints"],
    },
    {
      id: 4,
      title: "Building Your First App",
      description: "Step-by-step tutorial to build a complete application",
      category: "tutorials",
      readTime: "25 min read",
      difficulty: "Beginner",
      tags: ["tutorial", "app", "beginner"],
    },
    {
      id: 5,
      title: "AI Integration Patterns",
      description: "Best practices for integrating AI features into your applications",
      category: "examples",
      readTime: "12 min read",
      difficulty: "Advanced",
      tags: ["ai", "integration", "patterns"],
    },
    {
      id: 6,
      title: "Deployment Guide",
      description: "Deploy your applications to production with confidence",
      category: "getting-started",
      readTime: "10 min read",
      difficulty: "Intermediate",
      tags: ["deployment", "production", "devops"],
    },
    {
      id: 7,
      title: "Error Handling",
      description: "Comprehensive guide to error handling and debugging",
      category: "tutorials",
      readTime: "7 min read",
      difficulty: "Intermediate",
      tags: ["errors", "debugging", "troubleshooting"],
    },
    {
      id: 8,
      title: "Performance Optimization",
      description: "Tips and techniques to optimize your application performance",
      category: "examples",
      readTime: "18 min read",
      difficulty: "Advanced",
      tags: ["performance", "optimization", "speed"],
    },
  ];

  const filteredDocs = docs.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
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
                Documentation
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                Everything you need to build amazing applications with Synvey. 
                From quick start guides to advanced API references.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-foreground placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-indigo-600 text-white"
                      : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-700"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Documentation */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Guides</h2>
              <p className="text-zinc-600 dark:text-zinc-400">Start here to get the most out of Synvey</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDocs.filter(doc => doc.featured).map((doc, index) => (
              <Reveal key={doc.id} delay={index * 100}>
                <div className="group relative bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400">
                        Featured
                      </span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(doc.difficulty)}`}>
                        {doc.difficulty}
                      </span>
                    </div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">{doc.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {doc.title}
                  </h3>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
                    {doc.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {doc.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2 py-1 rounded text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button asChild variant="outline" className="w-full group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 group-hover:border-indigo-300 dark:group-hover:border-indigo-700">
                    <Link href={`/docs/${doc.id}`}>Read Guide</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Documentation */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">All Documentation</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {filteredDocs.length} {filteredDocs.length === 1 ? 'article' : 'articles'} found
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDocs.map((doc, index) => (
              <Reveal key={doc.id} delay={index * 50}>
                <div className="group relative bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(doc.difficulty)}`}>
                        {doc.difficulty}
                      </span>
                    </div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">{doc.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {doc.title}
                  </h3>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
                    {doc.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {doc.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2 py-1 rounded text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button asChild variant="outline" className="w-full group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 group-hover:border-indigo-300 dark:group-hover:border-indigo-700">
                    <Link href={`/docs/${doc.id}`}>Read Guide</Link>
                  </Button>
                </div>
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
                Can't find what you're looking for?
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
                Our support team is here to help. Get in touch and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/community">Join Community</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
