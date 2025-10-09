"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

export default function CookiePolicy() {
  const lastUpdated = "December 15, 2024";

  const cookieTypes = [
    {
      id: "essential",
      name: "Essential Cookies",
      icon: "🔑",
      color: "emerald",
      description: "Required for basic site functionality",
      purpose: "Authentication, security, and core features",
      examples: ["Login sessions", "Shopping cart", "Security tokens"],
      canDisable: false,
      retention: "Session or until logout"
    },
    {
      id: "analytics",
      name: "Analytics Cookies",
      icon: "📊",
      color: "blue",
      description: "Help us understand how you use our site",
      purpose: "Performance monitoring and usage analytics",
      examples: ["Page views", "User behavior", "Error tracking"],
      canDisable: true,
      retention: "Up to 2 years"
    },
    {
      id: "functional",
      name: "Functional Cookies",
      icon: "⚙️",
      color: "purple",
      description: "Enhance your experience with personalized features",
      purpose: "Personalization and enhanced functionality",
      examples: ["Language preferences", "Theme settings", "Personalized content"],
      canDisable: true,
      retention: "Up to 1 year"
    },
    {
      id: "marketing",
      name: "Marketing Cookies",
      icon: "🎯",
      color: "orange",
      description: "Show you relevant ads and measure campaign effectiveness",
      purpose: "Targeted advertising and campaign measurement",
      examples: ["Ad targeting", "Conversion tracking", "Social media integration"],
      canDisable: true,
      retention: "Up to 2 years"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: "from-emerald-500 to-green-500",
        border: "border-emerald-200 dark:border-emerald-700",
        text: "text-emerald-600 dark:text-emerald-400",
        bgLight: "bg-emerald-50 dark:bg-emerald-900/20"
      },
      blue: {
        bg: "from-blue-500 to-cyan-500",
        border: "border-blue-200 dark:border-blue-700",
        text: "text-blue-600 dark:text-blue-400",
        bgLight: "bg-blue-50 dark:bg-blue-900/20"
      },
      purple: {
        bg: "from-purple-500 to-indigo-500",
        border: "border-purple-200 dark:border-purple-700",
        text: "text-purple-600 dark:text-purple-400",
        bgLight: "bg-purple-50 dark:bg-purple-900/20"
      },
      orange: {
        bg: "from-orange-500 to-red-500",
        border: "border-orange-200 dark:border-orange-700",
        text: "text-orange-600 dark:text-orange-400",
        bgLight: "bg-orange-50 dark:bg-orange-900/20"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-slate-900 dark:via-emerald-900/10 dark:to-teal-900/10">
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-teal-400/20 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-400/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full border border-emerald-200 dark:border-emerald-700 mb-8 shadow-lg">
              <span className="text-2xl animate-spin" style={{ animationDuration: '8s' }}>🍪</span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Cookie Management</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
                Cookie
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              Learn about the different types of cookies we use and how you can control them.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Last updated: {lastUpdated}
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                GDPR Compliant
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                User Controlled
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cookie Types Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Each type of cookie serves a different purpose. You can control which ones you accept.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((cookie, index) => {
              const colors = getColorClasses(cookie.color);
              return (
                <Reveal key={cookie.id} delay={index * 100}>
                  <div className={`group relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl border ${colors.border} p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`text-5xl group-hover:scale-110 transition-transform duration-300`}>
                          {cookie.icon}
                        </div>
                        <div>
                          <h3 className={`text-2xl font-bold ${colors.text} mb-2`}>
                            {cookie.name}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400">
                            {cookie.description}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className={`${colors.bgLight} rounded-xl p-4`}>
                          <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Purpose</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{cookie.purpose}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Examples</h4>
                          <div className="flex flex-wrap gap-2">
                            {cookie.examples.map((example, i) => (
                              <span key={i} className={`px-3 py-1 ${colors.bgLight} ${colors.text} text-xs rounded-full`}>
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                          <div>
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Can be disabled: </span>
                            <span className={`text-sm font-bold ${cookie.canDisable ? 'text-green-600' : 'text-red-600'}`}>
                              {cookie.canDisable ? 'Yes' : 'No'}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-slate-500 dark:text-slate-400">Retention</div>
                            <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{cookie.retention}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl border border-emerald-200 dark:border-emerald-700 p-10 shadow-2xl">
              <div className="text-center mb-10">
                <div className="text-5xl mb-4">🛠️</div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                  How to Manage Your Cookies
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  You have full control over your cookie preferences
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                    🌐
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Browser Settings</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Configure cookie preferences directly in your browser's privacy settings
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                    ⚙️
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Cookie Banner</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Use our cookie consent banner to customize your preferences when visiting our site
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                    📧
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Contact Us</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Reach out to our privacy team for personalized cookie management assistance
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 rounded-3xl p-12 text-center text-white shadow-2xl">
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0">
                <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full animate-ping" />
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              </div>
              
              <div className="relative">
                <div className="text-6xl mb-6">🍪✨</div>
                <h2 className="text-4xl font-bold mb-6">Take Control of Your Privacy</h2>
                <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Your privacy matters to us. Customize your cookie preferences to create the perfect 
                  balance between functionality and privacy protection.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 hover:scale-105 transition-all duration-300">
                    <Link href="#cookie-settings">Manage Cookie Settings</Link>
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
