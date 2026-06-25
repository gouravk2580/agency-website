import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Search,
  Code,
  LinkIcon,
  FileText,
  MapPin,
  BarChart3,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import SEOFaq from "@/components/SEOFaq";

export const metadata: Metadata = {
  title: "SEO Services",
  description:
    "Comprehensive SEO strategies that improve your organic visibility and drive sustainable long-term traffic growth.",
};

const services = [
  {
    icon: Code,
    title: "Technical SEO",
    description: "Site speed optimization, crawlability fixes, and structured data implementation.",
  },
  {
    icon: FileText,
    title: "On-Page Optimization",
    description: "Keyword-optimized content, meta tags, headers, and internal linking strategies.",
  },
  {
    icon: LinkIcon,
    title: "Link Building",
    description: "High-quality backlink acquisition through outreach and content marketing.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description: "SEO-driven content planning, creation, and optimization for target keywords.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Google Business Profile optimization and local citation building.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive SEO reporting with rankings, traffic, and conversion tracking.",
  },
  {
    icon: Search,
    title: "Keyword Research",
    description: "In-depth keyword analysis to identify high-value ranking opportunities.",
  },
];

const processSteps = [
  { step: 1, title: "SEO Audit", description: "Comprehensive audit of your website's technical health, content, and backlink profile." },
  { step: 2, title: "Keyword Strategy", description: "Research and select high-impact keywords aligned with your business goals." },
  { step: 3, title: "Technical Fixes", description: "Resolve technical issues affecting crawlability, indexing, and page speed." },
  { step: 4, title: "Content Optimization", description: "Optimize existing content and create new SEO-driven pages." },
  { step: 5, title: "Link Building", description: "Build high-quality backlinks to increase domain authority." },
  { step: 6, title: "Monitor & Scale", description: "Track rankings, analyze results, and continuously optimize for growth." },
];

const results = [
  { value: "300%", label: "Organic Traffic Increase" },
  { value: "500+", label: "Keywords Ranked" },
  { value: "150+", label: "Qualified Leads/Month" },
  { value: "Top 3", label: "Rankings for Target Keywords" },
];

export default function SEOPage() {

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-dark via-dark to-accent/20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10 mb-6">
                <TrendingUp className="w-4 h-4 text-accent" />
                SEO Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Grow{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-light">
                  Organically
                </span>{" "}
                & Dominate Search
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-lg">
                Data-driven SEO strategies that drive sustainable organic traffic
                and qualified leads. No shortcuts, just proven results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition-all hover:shadow-lg hover:scale-105"
                >
                  Get Free SEO Audit <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" /> Call Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader
              badge="Our Services"
              title="Complete SEO Solutions"
              description="From technical audits to content strategy, we cover every aspect of SEO."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group bg-surface rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <service.icon className="w-6 h-6 text-accent group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-text mb-2">{service.title}</h3>
                  <p className="text-muted text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-dark text-white">
          <div className="container-custom">
            <SectionHeader
              badge="Our Process"
              title="6-Step SEO Framework"
              description="A proven process that delivers consistent organic growth."
            />
            <div className="mt-12 max-w-4xl mx-auto">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-white/10 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-heading font-semibold mb-1">{step.title}</h3>
                    <p className="text-white/60 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader
              badge="Results"
              title="SEO Performance"
              description="Our strategies deliver measurable organic growth."
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {results.map((result, i) => (
                <div key={i} className="text-center p-6 bg-surface rounded-2xl border border-border">
                  <div className="text-4xl font-stat font-bold text-accent mb-2">{result.value}</div>
                  <div className="text-muted text-sm">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <SectionHeader
              badge="FAQ"
              title="SEO Questions"
              description="Common questions about our SEO services."
            />
            <div className="mt-12">
              <SEOFaq />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-accent to-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Grow Organically?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Get a free SEO audit and discover untapped organic growth opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent rounded-full font-semibold hover:bg-white/90 transition-all hover:shadow-lg"
            >
              Get Free SEO Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
