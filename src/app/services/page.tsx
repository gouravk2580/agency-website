import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Target, TrendingUp, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive digital marketing services: Meta Ads, Google Ads, SEO, and Video Editing.",
};

const iconMap: Record<string, React.ElementType> = {
  Megaphone: Zap,
  Search: Target,
  TrendingUp: TrendingUp,
  Video: Eye,
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-dark via-dark to-primary/20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
                  Services
                </span>
              </h1>
              <p className="text-lg text-white/70">
                End-to-end digital marketing solutions designed to drive measurable
                growth for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {SERVICES.map((service, i) => {
                const Icon = iconMap[service.icon] || Zap;
                return (
                  <Link
                    key={i}
                    href={`/services/${service.slug}`}
                    className="group bg-surface rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                      <Icon className="w-7 h-7 text-primary group-hover:text-white" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-text mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted mb-6">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, j) => (
                        <div
                          key={j}
                          className="text-sm text-text/80 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
