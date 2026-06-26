import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User, Tag, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogContent from "@/components/BlogContent";
import { blogPosts, defaultPost } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) {
    return { title: "Article Not Found" };
  }
  const description = post.content[0]?.replace(/^##\s*/, "").substring(0, 160) || post.title;
  return {
    title: post.title,
    description,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      authors: [post.author],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug] || defaultPost;

  if (!blogPosts[slug]) {
    return (
      <>
        <Navbar />
        <main className="flex-1">
          <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-primary/5">
            <div className="container-custom relative z-10 text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
                Article Not Found
              </h1>
              <p className="text-lg text-muted mb-8">
                The article you&apos;re looking for doesn&apos;t exist.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Progress Bar */}
        <div className="fixed top-20 left-0 right-0 z-40 h-1 bg-border">
          <div
            className="h-full bg-primary transition-all duration-150"
            style={{ width: "0%" }}
          />
        </div>

        {/* Hero */}
        <section className="relative pt-32 pb-12 bg-gradient-to-br from-white via-gray-50 to-primary/5">
          <div className="container-custom relative z-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-text text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-muted mb-4">
                <span className="flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
                <span>{post.date}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text leading-tight mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-light" />
                </div>
                <div>
                  <p className="text-text text-sm font-medium">{post.author}</p>
                  <p className="text-muted text-xs">Published on {post.date}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BlogContent post={post} slug={slug} />
      </main>
      <Footer />
    </>
  );
}
