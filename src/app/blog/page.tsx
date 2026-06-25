import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, User, Tag, Search, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tips, and strategies for performance marketing, Meta Ads, Google Ads, SEO, and video content.",
};

const blogPosts = [
  {
    slug: "meta-ads-strategy-2024",
    title: "The Ultimate Meta Ads Strategy for 2024",
    excerpt:
      "Learn the proven framework we use to achieve 5x+ ROAS for our clients on Facebook and Instagram.",
    category: "Meta Ads",
    author: "ZapZoom Team",
    date: "Jun 15, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "google-ads-vs-meta-ads",
    title: "Google Ads vs Meta Ads: Which is Right for Your Business?",
    excerpt:
      "A comprehensive comparison to help you choose the right advertising platform for your goals.",
    category: "Performance Marketing",
    author: "ZapZoom Team",
    date: "Jun 10, 2024",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "seo-checklist-2024",
    title: "The Complete SEO Checklist for 2024",
    excerpt:
      "Everything you need to know to rank #1 on Google in 2024, from technical SEO to content strategy.",
    category: "SEO",
    author: "ZapZoom Team",
    date: "Jun 5, 2024",
    readTime: "15 min read",
    featured: false,
  },
  {
    slug: "video-marketing-trends",
    title: "Video Marketing Trends You Can't Ignore in 2024",
    excerpt:
      "Short-form content, AI editing, and interactive videos — the trends shaping video marketing.",
    category: "Video Marketing",
    author: "ZapZoom Team",
    date: "May 28, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "ecommerce-ad-strategy",
    title: "How to Build a Profitable E-commerce Ad Strategy",
    excerpt:
      "From product listing optimization to remarketing funnels — a complete guide.",
    category: "Case Studies",
    author: "ZapZoom Team",
    date: "May 20, 2024",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "local-seo-guide",
    title: "Local SEO: Dominate Your Local Market",
    excerpt:
      "Practical tips to improve your local search visibility and drive foot traffic.",
    category: "SEO",
    author: "ZapZoom Team",
    date: "May 15, 2024",
    readTime: "7 min read",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const posts = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-12 bg-gradient-to-br from-dark via-dark to-primary/20">
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Our Blog
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Insights, tips, and strategies for growing your business through performance marketing.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Search */}
                  <div>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                      <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <h3 className="font-heading font-semibold text-text mb-4">Categories</h3>
                    <div className="space-y-2">
                      {BLOG_CATEGORIES.map((cat) => (
                        <button
                          key={cat}
                          className="block w-full text-left px-4 py-2 text-sm text-muted hover:text-primary hover:bg-surface rounded-lg transition-colors"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-surface rounded-2xl p-6 border border-border">
                    <Mail className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-heading font-semibold text-text mb-2">
                      Newsletter
                    </h3>
                    <p className="text-sm text-muted mb-4">
                      Get weekly marketing insights delivered to your inbox.
                    </p>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 bg-white border border-border rounded-lg text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </aside>

              {/* Content */}
              <div className="lg:col-span-3">
                {/* Featured Post */}
                {featured && (
                  <Link href={`/blog/${featured.slug}`} className="block mb-8">
                    <div className="bg-surface rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all group">
                      <div className="h-64 bg-gradient-to-br from-primary to-dark flex items-center justify-center">
                        <span className="text-white/80 text-lg font-heading font-semibold">
                          Featured
                        </span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted mb-3">
                          <span className="flex items-center gap-1">
                            <Tag className="w-3 h-3" /> {featured.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {featured.readTime}
                          </span>
                        </div>
                        <h2 className="text-2xl font-heading font-bold text-text mb-2 group-hover:text-primary transition-colors">
                          {featured.title}
                        </h2>
                        <p className="text-muted">{featured.excerpt}</p>
                        <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                )}

                {/* Post Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {posts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="bg-surface rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all group"
                    >
                      <div className="h-40 bg-gradient-to-br from-dark to-primary/30 flex items-center justify-center">
                        <span className="text-white/60 text-sm">{post.category}</span>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-xs text-muted mb-2">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {post.readTime}
                          </span>
                          <span>{post.date}</span>
                        </div>
                        <h3 className="text-lg font-heading font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted line-clamp-2">{post.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
