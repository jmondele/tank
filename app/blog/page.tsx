"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "The $53 Million Tank Failure That Changed API 653 Standards",
    excerpt: "How a Louisiana chemical plant's ignored inspection schedule led to catastrophic failure and new industry regulations.",
    category: "API 653",
    readTime: "8 min read",
    publishDate: "2024-12-15",
    featured: true,
    image: "/blog-tank-failure.jpg",
    slug: "53-million-tank-failure-api-653"
  },
  {
    id: 2, 
    title: "Olympus X3 vs MX2: Which Ultrasonic System Is Right for Your Facility?",
    excerpt: "Deep dive comparison of the two most advanced ultrasonic testing systems for tank inspection professionals.",
    category: "Equipment",
    readTime: "12 min read",
    publishDate: "2024-12-10",
    featured: true,
    image: "/blog-olympus-comparison.jpg", 
    slug: "olympus-x3-vs-mx2-comparison"
  },
  {
    id: 3,
    title: "API 570 Piping Inspection Schedules: What Most Engineers Get Wrong",
    excerpt: "The three critical mistakes that lead to expensive pipeline failures and how to avoid them.",
    category: "API 570",
    readTime: "6 min read", 
    publishDate: "2024-12-05",
    featured: false,
    image: "/blog-piping-inspection.jpg",
    slug: "api-570-inspection-schedules-mistakes"
  },
  {
    id: 4,
    title: "Emergency Pressure Vessel Inspection: When Every Hour Counts",
    excerpt: "Real case study of a chemical plant emergency and how rapid API 510 inspection saved millions.",
    category: "API 510",
    readTime: "10 min read",
    publishDate: "2024-11-28", 
    featured: false,
    image: "/blog-emergency-inspection.jpg",
    slug: "emergency-pressure-vessel-inspection-case-study"
  },
  {
    id: 5,
    title: "NDT Testing Methods: Which One Will Actually Find Your Hidden Problems?",
    excerpt: "Practical guide to choosing between ultrasonic, magnetic particle, and liquid penetrant testing.",
    category: "NDT",
    readTime: "14 min read",
    publishDate: "2024-11-20",
    featured: false,
    image: "/blog-ndt-methods.jpg", 
    slug: "ndt-testing-methods-comparison"
  },
  {
    id: 6,
    title: "The Welder Qualification Mistake That Cost $40 Million",
    excerpt: "How improper welder qualification led to offshore platform disaster and what it means for your facility.",
    category: "Welding",
    readTime: "9 min read",
    publishDate: "2024-11-15",
    featured: false,
    image: "/blog-welder-qualification.jpg",
    slug: "welder-qualification-40-million-mistake"
  }
];

const categories = ["All", "API 653", "API 570", "API 510", "NDT", "Equipment", "Welding"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-500/20 border border-blue-400/30 text-blue-300 px-8 py-3 rounded-full text-lg font-semibold mb-8 backdrop-blur-sm">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Industry Insights & Knowledge
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                <span className="text-blue-400">Tank Inspection</span>
                <span className="block text-white">Knowledge Base</span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-4xl mx-auto">
                **Real stories, practical insights, and hard-earned lessons** from 10+ years of preventing tank disasters. No fluff, no theory - just actionable knowledge that keeps your operations running safely.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Featured Articles</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-all duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center relative overflow-hidden">
                      <div className="text-center text-white p-8">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                          </svg>
                        </div>
                        <p className="text-blue-100">Featured Article</p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                        <span className="text-gray-500 text-sm">{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                      >
                        Read Full Article
                        <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">All Articles</h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center relative">
                      <div className="text-center text-white p-6">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                          </svg>
                        </div>
                        <p className="text-gray-200 text-sm">{post.category}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                          {post.readTime}
                        </span>
                        <span className="text-gray-500 text-xs">{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors text-sm"
                      >
                        Read More
                        <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-blue-900">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated on Tank Safety
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                **Get notified when we publish new articles** about tank inspection, equipment reviews, and industry insights. No spam, just valuable content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-blue-300 text-gray-900"
                />
                <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                Unsubscribe anytime. We respect your inbox.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}