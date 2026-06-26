"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  LinkIcon,
  User,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

export default function BlogContent({
  post,
  slug,
}: {
  post: BlogPost;
  slug: string;
}) {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [commentName, setCommentName] = useState("");
  const [commentMessage, setCommentMessage] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(Math.min(currentProgress, 100));

      const sections = document.querySelectorAll("h2");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-20 left-0 right-0 z-40 h-1 bg-border">
        <div
          className="h-full bg-primary transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar - Table of Contents */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-28 space-y-6">
                {/* Table of Contents */}
                <div className="bg-surface rounded-2xl p-6 border border-border">
                  <h3 className="font-heading font-semibold text-text mb-4 text-sm">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {post.tableOfContents.map((item, i) => (
                      <a
                        key={i}
                        href={`#${item
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")}`}
                        className={`block text-sm py-1 transition-colors ${
                          activeSection === i
                            ? "text-primary font-medium"
                            : "text-muted hover:text-text"
                        }`}
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Share */}
                <div className="bg-surface rounded-2xl p-6 border border-border">
                  <h3 className="font-heading font-semibold text-text mb-4 text-sm">
                    Share Article
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== "undefined" ? window.location.href : ""}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
                    >
                      <span className="text-xs font-bold">FB</span>
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${typeof window !== "undefined" ? window.location.href : ""}&text=${post.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
                    >
                      <span className="text-xs font-bold">X</span>
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== "undefined" ? window.location.href : ""}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
                    >
                      <span className="text-xs font-bold">IN</span>
                    </a>
                    <button
                      onClick={handleCopyLink}
                      className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </button>
                  </div>
                  {copied && (
                    <p className="text-xs text-accent mt-2">Link copied!</p>
                  )}
                </div>

                {/* Author Card */}
                <div className="bg-surface rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text">
                        {post.author}
                      </p>
                      <p className="text-xs text-muted">Marketing Team</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    Expert insights from the ZapZoom marketing team on performance
                    marketing, advertising, and growth strategies.
                  </p>
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                {post.content.map((block, i) => {
                  if (block.startsWith("## ")) {
                    const id = block
                      .slice(3)
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-");
                    return (
                      <h2
                        key={i}
                        id={id}
                        className="text-2xl font-heading font-bold text-text mt-12 mb-4 scroll-mt-28"
                      >
                        {block.slice(3)}
                      </h2>
                    );
                  }
                  if (block.startsWith("**") && block.endsWith("**")) {
                    return (
                      <h3
                        key={i}
                        className="text-lg font-heading font-semibold text-text mt-8 mb-3"
                      >
                        {block.slice(2, -2)}
                      </h3>
                    );
                  }
                  const parts = block.split(/(\*\*[^*]+\*\*)/g);
                  return (
                    <p
                      key={i}
                      className="text-muted leading-relaxed mb-4"
                    >
                      {parts.map((part, j) => {
                        if (
                          part.startsWith("**") &&
                          part.endsWith("**")
                        ) {
                          return (
                            <strong
                              key={j}
                              className="text-text font-semibold"
                            >
                              {part.slice(2, -2)}
                            </strong>
                          );
                        }
                        return part;
                      })}
                    </p>
                  );
                })}
              </div>

              {/* Share Buttons (Mobile) */}
              <div className="lg:hidden mt-8 pt-8 border-t border-border">
                <h3 className="font-heading font-semibold text-text mb-4 text-sm">
                  Share Article
                </h3>
                <div className="flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== "undefined" ? window.location.href : ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
                  >
                    <span className="text-xs font-bold">FB</span>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${typeof window !== "undefined" ? window.location.href : ""}&text=${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
                  >
                    <span className="text-xs font-bold">X</span>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== "undefined" ? window.location.href : ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
                  >
                    <span className="text-xs font-bold">IN</span>
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
                  >
                    <LinkIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-xl font-heading font-bold text-text mb-6 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Comments
                </h3>

                {/* Comment Form */}
                <div className="bg-surface rounded-2xl p-6 border border-border mb-8">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      value={commentName}
                      onChange={(e) => setCommentName(e.target.value)}
                      placeholder="Your name"
                      className="px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="email"
                      placeholder="Your email (not published)"
                      className="px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <textarea
                    value={commentMessage}
                    onChange={(e) => setCommentMessage(e.target.value)}
                    rows={4}
                    placeholder="Write your comment..."
                    className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none mb-4"
                  />
                  <button className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors">
                    Post Comment
                  </button>
                </div>

                {/* Sample Comments */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-muted" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-text">
                          Rahul M.
                        </span>
                        <span className="text-xs text-muted">2 days ago</span>
                      </div>
                      <p className="text-sm text-muted leading-relaxed">
                        Great article! The section on creative best practices was
                        especially helpful. We&apos;ve been underinvesting in video
                        content for our Meta Ads.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-muted" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-text">
                          Sneha K.
                        </span>
                        <span className="text-xs text-muted">5 days ago</span>
                      </div>
                      <p className="text-sm text-muted leading-relaxed">
                        Very practical tips! Would love to see a follow-up article
                        on how to set up the campaign structure in Meta Business
                        Suite.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-xl font-heading font-bold text-text mb-6">
                  Related Articles
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    href="/blog/google-ads-vs-meta-ads"
                    className="bg-surface rounded-xl p-5 border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
                  >
                    <span className="text-xs text-muted">
                      Performance Marketing
                    </span>
                    <h4 className="text-lg font-heading font-semibold text-text mt-2 mb-2 group-hover:text-primary transition-colors">
                      Google Ads vs Meta Ads: Which is Right for Your Business?
                    </h4>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      Read More <ChevronRight className="w-4 h-4" />
                    </span>
                  </Link>
                  <Link
                    href="/blog/seo-checklist-2024"
                    className="bg-surface rounded-xl p-5 border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
                  >
                    <span className="text-xs text-muted">SEO</span>
                    <h4 className="text-lg font-heading font-semibold text-text mt-2 mb-2 group-hover:text-primary transition-colors">
                      The Complete SEO Checklist for 2024
                    </h4>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      Read More <ChevronRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
