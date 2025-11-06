"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

export default function PrivacyPolicy() {
  const lastUpdated = "December 15, 2024";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      content: [
        "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.",
        "We automatically collect certain information about your device and usage patterns when you access our services through cookies and similar technologies.",
        "We may receive information about you from third-party services you choose to connect with our platform."
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      content: [
        "To provide, maintain, and improve our services and customer support",
        "To process transactions and send related information including confirmations and receipts",
        "To send you technical notices, updates, security alerts, and administrative messages",
        "To respond to your comments, questions, and provide customer service",
        "To communicate with you about products, services, offers, and events"
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.",
        "We may share your information with service providers who assist us in operating our platform and conducting business.",
        "We may disclose your information if required by law or to protect our rights, property, or safety."
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        "We use industry-standard encryption protocols and regularly update our security practices.",
        "While we strive to protect your information, no method of transmission over the internet is 100% secure."
      ]
    },
    {
      id: "your-rights",
      title: "Your Rights and Choices",
      content: [
        "You have the right to access, update, or delete your personal information at any time.",
        "You can opt out of receiving promotional communications from us by following the unsubscribe instructions in those messages.",
        "You may disable cookies in your browser settings, though this may affect the functionality of our services."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-blue-200 dark:border-slate-700 mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Privacy & Data Protection</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-600 dark:from-slate-100 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Your privacy is fundamental to how we build our products. This policy explains how we collect, 
              use, and protect your information when you use Synvey's services.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <span>Last updated: {lastUpdated}</span>
              <span className="w-1 h-1 bg-slate-400 rounded-full" />
              <span>Effective immediately</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 p-8">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Quick Navigation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sections.map((section, index) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center gap-3 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-all duration-200"
                  >
                    <span className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-semibold group-hover:scale-110 transition-transform">
                      {index + 1}
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {section.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {sections.map((section, index) => (
            <Reveal key={section.id} delay={index * 100}>
              <div id={section.id} className="group">
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 p-8 hover:shadow-xl transition-all duration-300">
                  <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
              <div className="relative">
                <h2 className="text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Our privacy team is here to help. Reach out if you have any questions about how we handle your data.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    <Link href="/contact">Contact Privacy Team</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link href="/security">Security Information</Link>
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
