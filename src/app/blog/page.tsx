"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Posts", count: 18 },
    { id: "technology", name: "Technology", count: 8 },
    { id: "ai", name: "AI & Machine Learning", count: 5 },
    { id: "business", name: "Business", count: 3 },
    { id: "tutorials", name: "Tutorials", count: 2 },
  ];

  const featuredPost = {
    id: 1,
    title: "The Future of AI in Software Development: Trends and Predictions for 2024",
    excerpt: "Explore how artificial intelligence is revolutionizing software development, from automated code generation to intelligent debugging tools that are changing the way we build applications.",
    author: {
      name: "Sarah Chen",
      avatar: "/api/placeholder/40/40",
      role: "Lead AI Engineer"
    },
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "ai",
    tags: ["AI", "Machine Learning", "Development", "Future"],
    image: "/api/placeholder/800/400",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "Building Scalable Web Applications with Modern Architecture Patterns",
      excerpt: "Learn about microservices, serverless architecture, and other modern patterns that help you build applications that can handle millions of users.",
      author: {
        name: "Marcus Rodriguez",
        avatar: "/api/placeholder/40/40",
        role: "Senior Architect"
      },
      publishedAt: "2024-01-12",
      readTime: "12 min read",
      category: "technology",
      tags: ["Architecture", "Scalability", "Web Development"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "The Complete Guide to Mobile App Performance Optimization",
      excerpt: "Discover proven techniques to make your mobile apps faster, more responsive, and more efficient across different devices and network conditions.",
      author: {
        name: "Jennifer Park",
        avatar: "/api/placeholder/40/40",
        role: "Mobile Lead"
      },
      publishedAt: "2024-01-10",
      readTime: "15 min read",
      category: "technology",
      tags: ["Mobile", "Performance", "Optimization"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "How to Implement Zero-Trust Security in Your Applications",
      excerpt: "A comprehensive guide to implementing zero-trust security principles in modern applications, including authentication, authorization, and monitoring strategies.",
      author: {
        name: "David Kim",
        avatar: "/api/placeholder/40/40",
        role: "Security Expert"
      },
      publishedAt: "2024-01-08",
      readTime: "10 min read",
      category: "technology",
      tags: ["Security", "Zero Trust", "Authentication"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Machine Learning Model Deployment: From Development to Production",
      excerpt: "Learn the best practices for deploying machine learning models in production environments, including monitoring, versioning, and scaling strategies.",
      author: {
        name: "Alex Thompson",
        avatar: "/api/placeholder/40/40",
        role: "ML Engineer"
      },
      publishedAt: "2024-01-05",
      readTime: "14 min read",
      category: "ai",
      tags: ["Machine Learning", "Deployment", "Production"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "The Business Case for Digital Transformation in 2024",
      excerpt: "Understand how digital transformation can drive business growth, improve customer experience, and create competitive advantages in today's market.",
      author: {
        name: "Lisa Wang",
        avatar: "/api/placeholder/40/40",
        role: "Business Strategist"
      },
      publishedAt: "2024-01-03",
      readTime: "7 min read",
      category: "business",
      tags: ["Digital Transformation", "Business Strategy", "Growth"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 7,
      title: "Step-by-Step: Building Your First React Native App",
      excerpt: "A beginner-friendly tutorial that walks you through creating a complete React Native application from scratch, including navigation, state management, and deployment.",
      author: {
        name: "Ryan O'Connor",
        avatar: "/api/placeholder/40/40",
        role: "Mobile Developer"
      },
      publishedAt: "2024-01-01",
      readTime: "20 min read",
      category: "tutorials",
      tags: ["React Native", "Tutorial", "Mobile Development"],
      image: "/api/placeholder/400/250"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Blog & Insights
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                Stay updated with the latest trends, insights, and best practices in software development, 
                AI, and digital transformation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-foreground placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap justify-center gap-2">
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

      {/* Featured Post */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Article</h2>
              <p className="text-zinc-600 dark:text-zinc-400">Our latest insights and deep dives</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <article className="group relative bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-500 opacity-90"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Featured Article</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400">
                      {featuredPost.category.toUpperCase()}
                    </span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">{featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {featuredPost.author.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-foreground text-sm">{featuredPost.author.name}</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">{featuredPost.author.role}</div>
                      </div>
                    </div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                      {formatDate(featuredPost.publishedAt)}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <Link href={`/blog/${featuredPost.id}`}>Read Full Article</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <Reveal key={post.id} delay={index * 100}>
                <article className="group relative bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400">
                        {post.category.toUpperCase()}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="inline-flex items-center px-2 py-1 rounded text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">
                            {post.author.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-foreground text-xs">{post.author.name}</div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">{formatDate(post.publishedAt)}</div>
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/blog/${post.id}`}>Read</Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
                Get the latest articles, insights, and industry updates delivered straight to your inbox.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-foreground placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <Button size="lg" className="sm:w-auto">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                  No spam, unsubscribe at any time.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
