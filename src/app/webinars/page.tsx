"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

export default function WebinarsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const categories = [
    { id: "all", name: "All Topics", count: 24 },
    { id: "ai-ml", name: "AI & Machine Learning", count: 8 },
    { id: "development", name: "Development", count: 6 },
    { id: "architecture", name: "Architecture", count: 4 },
    { id: "security", name: "Security", count: 3 },
    { id: "devops", name: "DevOps", count: 3 },
  ];

  const types = [
    { id: "all", name: "All Types" },
    { id: "live", name: "Live Sessions" },
    { id: "recorded", name: "Recorded" },
    { id: "upcoming", name: "Upcoming" },
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: "Building Scalable AI Applications with Modern Frameworks",
      description: "Join our expert panel as they demonstrate how to build production-ready AI applications using the latest frameworks and best practices.",
      speaker: {
        name: "Dr. Sarah Chen",
        title: "Lead AI Engineer",
        company: "Synvey",
        avatar: "/api/placeholder/60/60"
      },
      date: "2024-02-15",
      time: "2:00 PM EST",
      duration: "60 minutes",
      category: "ai-ml",
      type: "upcoming",
      attendees: 0,
      maxAttendees: 500,
      tags: ["AI", "Machine Learning", "Frameworks", "Production"],
      featured: true,
      thumbnail: undefined,
      views: 0
    },
    {
      id: 2,
      title: "Microservices Architecture: Design Patterns and Best Practices",
      description: "Learn how to design and implement microservices architectures that scale, with real-world examples and common pitfalls to avoid.",
      speaker: {
        name: "Marcus Rodriguez",
        title: "Senior Solutions Architect",
        company: "Synvey",
        avatar: "/api/placeholder/60/60"
      },
      date: "2024-02-22",
      time: "3:00 PM EST",
      duration: "45 minutes",
      category: "architecture",
      type: "upcoming",
      attendees: 0,
      maxAttendees: 300,
      tags: ["Microservices", "Architecture", "Design Patterns", "Scalability"],
      featured: true,
      thumbnail: undefined,
      views: 0
    }
  ];

  const liveWebinars = [
    {
      id: 3,
      title: "Real-time Data Processing with Apache Kafka",
      description: "Currently live! Learn how to implement real-time data streaming solutions using Apache Kafka and related technologies.",
      speaker: {
        name: "Jennifer Park",
        title: "Data Engineering Lead",
        company: "Synvey",
        avatar: "/api/placeholder/60/60"
      },
      date: "2024-01-20",
      time: "1:00 PM EST",
      duration: "50 minutes",
      category: "development",
      type: "live",
      attendees: 247,
      maxAttendees: 500,
      tags: ["Kafka", "Real-time", "Data Streaming", "Apache"],
      isLive: true,
      thumbnail: undefined,
      views: 0
    }
  ];

  const recordedWebinars = [
    {
      id: 4,
      title: "Zero-Trust Security Implementation in Modern Applications",
      description: "Comprehensive guide to implementing zero-trust security principles in your applications, including authentication, authorization, and monitoring.",
      speaker: {
        name: "David Kim",
        title: "Security Expert",
        company: "Synvey",
        avatar: "/api/placeholder/60/60"
      },
      date: "2024-01-10",
      time: "2:00 PM EST",
      duration: "55 minutes",
      category: "security",
      type: "recorded",
      attendees: 0,
      maxAttendees: 0,
      views: 1247,
      tags: ["Security", "Zero Trust", "Authentication", "Authorization"],
      thumbnail: "/api/placeholder/400/225",
      isLive: false
    },
    {
      id: 5,
      title: "Kubernetes Deployment Strategies for Production Workloads",
      description: "Master Kubernetes deployment patterns, including blue-green, canary, and rolling updates for production environments.",
      speaker: {
        name: "Alex Thompson",
        title: "DevOps Engineer",
        company: "Synvey",
        avatar: "/api/placeholder/60/60"
      },
      date: "2024-01-05",
      time: "3:00 PM EST",
      duration: "65 minutes",
      category: "devops",
      type: "recorded",
      attendees: 0,
      maxAttendees: 0,
      views: 892,
      tags: ["Kubernetes", "Deployment", "Production", "DevOps"],
      thumbnail: "/api/placeholder/400/225",
      isLive: false
    },
    {
      id: 6,
      title: "React Performance Optimization: Advanced Techniques",
      description: "Deep dive into React performance optimization techniques, including code splitting, lazy loading, and memory management.",
      speaker: {
        name: "Lisa Wang",
        title: "Frontend Lead",
        company: "Synvey",
        avatar: "/api/placeholder/60/60"
      },
      date: "2024-01-01",
      time: "2:30 PM EST",
      duration: "70 minutes",
      category: "development",
      type: "recorded",
      attendees: 0,
      maxAttendees: 0,
      views: 1563,
      tags: ["React", "Performance", "Optimization", "Frontend"],
      thumbnail: "/api/placeholder/400/225",
      isLive: false
    }
  ];

  const allWebinars = [...upcomingWebinars, ...liveWebinars, ...recordedWebinars];

  const filteredWebinars = allWebinars.filter(webinar => {
    const matchesCategory = selectedCategory === "all" || webinar.category === selectedCategory;
    const matchesType = selectedType === "all" || webinar.type === selectedType;
    return matchesCategory && matchesType;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "ai-ml": return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      case "development": return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "architecture": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "security": return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "devops": return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "live": return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "upcoming": return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "recorded": return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
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
                Webinars & Sessions
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                Join our expert-led sessions to learn about the latest technologies, 
                best practices, and industry insights from our team of specialists.
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
              <h2 className="text-xl font-semibold text-foreground mb-4">Filter Sessions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Topic</label>
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
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Type</label>
                  <div className="flex flex-wrap gap-2">
                    {types.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          selectedType === type.id
                            ? "bg-indigo-600 text-white"
                            : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-300 dark:border-zinc-700"
                        }`}
                      >
                        {type.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Live Webinar Alert */}
      {liveWebinars.length > 0 && (
        <section className="py-8 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></div>
                    <span className="text-red-800 dark:text-red-400 font-semibold">LIVE NOW</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-red-700 dark:text-red-300">
                    {liveWebinars[0].title} - Join {liveWebinars[0].attendees} other attendees
                  </p>
                </div>
                <div className="ml-auto">
                  <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    <Link href={`/webinars/${liveWebinars[0].id}`}>Join Now</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Featured Upcoming Webinars */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Sessions</h2>
              <p className="text-zinc-600 dark:text-zinc-400">Don't miss these expert-led sessions</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {upcomingWebinars.filter(webinar => webinar.featured).map((webinar, index) => (
              <Reveal key={webinar.id} delay={index * 100}>
                <div className="group relative bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-700 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400">
                            Featured
                          </span>
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getTypeColor(webinar.type)}`}>
                            {webinar.type.toUpperCase()}
                          </span>
                        </div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">
                          {formatDate(webinar.date)} • {webinar.time} • {webinar.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                    {webinar.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {webinar.speaker.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-foreground text-sm">{webinar.speaker.name}</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">{webinar.speaker.title}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {webinar.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                      {webinar.attendees} / {webinar.maxAttendees} registered
                    </div>
                    <Button asChild size="lg" className="group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Link href={`/webinars/${webinar.id}`}>Register Now</Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Webinars */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">All Sessions</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {filteredWebinars.length} {filteredWebinars.length === 1 ? 'session' : 'sessions'} available
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredWebinars.map((webinar, index) => (
              <Reveal key={webinar.id} delay={index * 50}>
                <div className="group relative bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {webinar.thumbnail && (
                    <div className="relative h-48 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      {webinar.isLive && (
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-1"></div>
                            LIVE
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getCategoryColor(webinar.category)}`}>
                        {webinar.category.replace('-', ' ').toUpperCase()}
                      </span>
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getTypeColor(webinar.type)}`}>
                        {webinar.type.toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-xs">
                          {webinar.speaker.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-foreground text-xs">{webinar.speaker.name}</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">{webinar.speaker.title}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        {webinar.type === 'recorded' ? `${webinar.views} views` : `${webinar.attendees} registered`}
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/webinars/${webinar.id}`}>
                          {webinar.type === 'recorded' ? 'Watch' : webinar.type === 'live' ? 'Join' : 'Register'}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
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
                Never Miss a Session
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
                Get notified about upcoming webinars, new recordings, and exclusive content from our experts.
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
