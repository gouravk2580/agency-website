import Link from "next/link";
import { Home, Search, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  const popularPages = [
    { label: "Home", href: "/" },
    { label: "Meta Ads", href: "/services/meta-ads" },
    { label: "Google Ads", href: "/services/google-ads" },
    { label: "SEO", href: "/services/seo" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center section-padding bg-white">
        <div className="container-custom text-center max-w-2xl">
          {/* Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-heading font-bold text-primary/20">404</div>
          </div>

          <h1 className="text-3xl md:text-4xl font-heading font-bold text-text mb-4">
            Page Not Found
          </h1>
          <p className="text-muted mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              type="text"
              placeholder="Search our website..."
              className="w-full pl-12 pr-4 py-4 bg-surface border border-border rounded-full text-text focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all hover:shadow-lg"
            >
              <Home className="w-5 h-5" /> Go Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface text-text rounded-full font-semibold border border-border hover:border-primary hover:text-primary transition-all"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Popular Pages */}
          <div>
            <p className="text-sm text-muted mb-4">Popular Pages</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {popularPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="px-4 py-2 text-sm text-muted bg-surface rounded-full border border-border hover:border-primary hover:text-primary transition-all"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
