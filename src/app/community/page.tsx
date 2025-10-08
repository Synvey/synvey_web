"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Discussions", count: 1247 },
    { id: "general", name: "General", count: 456 },
    { id: "help", name: "Help & Support", count: 234 },
    { id: "showcase", name: "Showcase", count: 189 },
    { id: "feedback", name: "Feedback", count: 156 },
    { id: "announcements", name: "Announcements", count: 89 },
    { id: "jobs", name: "Jobs", count: 123 },
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "Welcome to the Synvey Community! 🎉",
      content: "We're excited to have you here! This is your space to connect with fellow developers, share knowledge, and get support from our team and community members.",
      author: {
        name: "Synvey Team",
        avatar: "/api/placeholder/40/40",
        role: "Community Manager",
        isVerified: true
      },
      category: "announcements",
      replies: 47,
      likes: 89,
      views: 1234,
      createdAt: "2024-01-15",
      isPinned: true,
      isFeatured: true
    },
    {
      id: 2,
      title: "Showcase: Built an AI-powered E-commerce Platform with Synvey",
      content: "Just finished building an amazing e-commerce platform using Synvey's AI integration features. The recommendation engine is working perfectly and conversion rates are up 40%!",
      author: {
        name: "Sarah Chen",
        avatar: "/api/placeholder/40/40",
        role: "Full Stack Developer",
        isVerified: false
      },
      category: "showcase",
      replies: 23,
      likes: 67,
      views: 456,
      createdAt: "2024-01-14",
      isPinned: false,
      isFeatured: true
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: "Getting Started with Synvey API - Need Help",
      content: "I'm new to Synvey and trying to integrate the API into my React app. Can someone help me with the authentication setup?",
      author: {
        name: "Mike Johnson",
        avatar: "/api/placeholder/40/40",
        role: "Frontend Developer",
        isVerified: false
      },
      category: "help",
      replies: 8,
      likes: 12,
      views: 89,
      createdAt: "2024-01-20",
      isPinned: false,
      isFeatured: false
    },
    {
      id: 4,
      title: "Best Practices for Mobile App Performance",
      content: "Sharing some tips I've learned about optimizing mobile app performance. What are your favorite techniques?",
      author: {
        name: "Alex Rodriguez",
        avatar: "/api/placeholder/40/40",
        role: "Mobile Developer",
        isVerified: true
      },
      category: "general",
      replies: 15,
      likes: 34,
      views: 234,
      createdAt: "2024-01-19",
      isPinned: false,
      isFeatured: false
    },
    {
      id: 5,
      title: "Feature Request: Enhanced Analytics Dashboard",
      content: "Would love to see more detailed analytics in the dashboard. Anyone else interested in this feature?",
      author: {
        name: "Emma Wilson",
        avatar: "/api/placeholder/40/40",
        role: "Product Manager",
        isVerified: false
      },
      category: "feedback",
      replies: 12,
      likes: 28,
      views: 156,
      createdAt: "2024-01-18",
      isPinned: false,
      isFeatured: false
    },
    {
      id: 6,
      title: "Looking for Senior React Developer - Remote Position",
      content: "Our team is growing and we're looking for an experienced React developer to join us. Full remote, competitive salary, great benefits!",
      author: {
        name: "David Kim",
        avatar: "/api/placeholder/40/40",
        role: "Tech Lead",
        isVerified: true
      },
      category: "jobs",
      replies: 5,
      likes: 19,
      views: 78,
      createdAt: "2024-01-17",
      isPinned: false,
      isFeatured: false
    }
  ];

  const allPosts = [...featuredPosts, ...recentPosts];

  const filteredPosts = allPosts.filter(post => {
    return selectedCategory === "all" || post.category === selectedCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return "Yesterday";
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "announcements": return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "help": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "showcase": return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      case "feedback": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "jobs": return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
      case "general": return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
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
                Community
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                Connect with developers, share your projects, get help, and be part of a growing 
                community of innovators building the future with Synvey.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">2,847</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Community Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">1,247</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Discussions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">5,432</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Replies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">189</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Projects Shared</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap gap-2">
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

      {/* Quick Actions */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="flex-1">
                <Link href="/community/new-post">Start a Discussion</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex-1">
                <Link href="/community/showcase">Share Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex-1">
                <Link href="/community/help">Get Help</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Discussions</h2>
              <p className="text-zinc-600 dark:text-zinc-400">Popular and important community posts</p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {filteredPosts.filter(post => post.isFeatured).map((post, index) => (
              <Reveal key={post.id} delay={index * 100}>
                <article className="group relative bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center">
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg">
                          {post.author.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400">
                          Featured
                        </span>
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                          {post.category.toUpperCase()}
                        </span>
                        {post.isPinned && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                            Pinned
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
                        {post.content}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-zinc-500 dark:text-zinc-400">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            {post.replies} replies
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            {post.likes} likes
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            {post.views} views
                          </span>
                        </div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">
                          {formatDate(post.createdAt)}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Recent Discussions</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {filteredPosts.filter(post => !post.isFeatured).length} recent posts
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {filteredPosts.filter(post => !post.isFeatured).map((post, index) => (
              <Reveal key={post.id} delay={index * 50}>
                <article className="group relative bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center">
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                          {post.author.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                          {post.category.toUpperCase()}
                        </span>
                        {post.author.isVerified && (
                          <span className="inline-flex items-center">
                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                        {post.title}
                      </h3>
                      
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2 line-clamp-1">
                        {post.content}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-xs text-zinc-500 dark:text-zinc-400">
                          <span className="flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            {post.replies}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            {post.likes}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            {post.views}
                          </span>
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">
                          {formatDate(post.createdAt)}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Community Guidelines
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Help us maintain a welcoming and productive environment for everyone
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Be Respectful</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Treat everyone with kindness and respect</p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Share Knowledge</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Help others learn and grow</p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Stay On Topic</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Keep discussions relevant and focused</p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Follow Rules</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Adhere to community guidelines</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
