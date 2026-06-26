import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Target, Clock, DollarSign, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how we've helped businesses achieve remarkable growth through data-driven performance marketing strategies.",
};

const caseStudies = [
  {
    client: "TechVentures India",
    industry: "SaaS",
    logo: "TV",
    problem:
      "Struggling to generate qualified leads for their B2B SaaS platform with a high cost per acquisition.",
    strategy:
      "Implemented a multi-channel approach combining LinkedIn Ads, Google Search Ads, and content marketing to target decision-makers.",
    budget: "₹3,00,000/month",
    duration: "6 months",
    results: [
      { metric: "Leads", before: "100/month", after: "400/month", change: "+300%" },
      { metric: "CPL", before: "₹850", after: "₹320", change: "-62%" },
      { metric: "Conversion Rate", before: "2.1%", after: "5.8%", change: "+176%" },
    ],
    testimonial: {
      content: "ZapZoom transformed our lead generation. We're now filling our pipeline with qualified prospects at a fraction of the previous cost.",
      name: "Rajesh Kumar",
      role: "CEO, TechVentures India",
    },
  },
  {
    client: "StyleHub Fashion",
    industry: "E-commerce",
    logo: "SH",
    problem:
      "High cart abandonment rate and low return on ad spend from Meta Ads campaigns.",
    strategy:
      "Redesigned the entire Meta Ads funnel with dynamic product ads, carousel campaigns, and aggressive remarketing sequences.",
    budget: "₹8,00,000/month",
    duration: "4 months",
    results: [
      { metric: "ROAS", before: "2.1x", after: "6.3x", change: "+200%" },
      { metric: "Revenue", before: "₹16L/month", after: "₹50L/month", change: "+212%" },
      { metric: "Cart Abandonment", before: "72%", after: "45%", change: "-37%" },
    ],
    testimonial: {
      content: "The ROAS improvement was incredible. We went from barely breaking even to one of the most profitable channels in our business.",
      name: "Priya Sharma",
      role: "Marketing Director, StyleHub Fashion",
    },
  },
  {
    client: "GreenLeaf Organics",
    industry: "D2C",
    logo: "GL",
    problem:
      "Low organic visibility and heavy reliance on paid ads for customer acquisition.",
    strategy:
      "Implemented a comprehensive SEO strategy with content marketing, technical optimization, and local SEO for their store locations.",
    budget: "₹1,50,000/month",
    duration: "8 months",
    results: [
      { metric: "Organic Traffic", before: "5K/month", after: "45K/month", change: "+800%" },
      { metric: "Keywords in Top 10", before: "20", after: "350+", change: "+1650%" },
      { metric: "Organic Revenue", before: "₹2L/month", after: "₹18L/month", change: "+800%" },
    ],
    testimonial: {
      content: "ZapZoom helped us reduce our dependency on paid ads from 80% to 40% of our revenue. The organic growth has been transformational.",
      name: "Amit Patel",
      role: "Founder, GreenLeaf Organics",
    },
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-primary/5 overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text leading-tight mb-6">
                Results That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
                  Speak
                </span>
              </h1>
              <p className="text-lg text-muted">
                Real case studies from real clients. See the measurable impact of our
                performance marketing strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding bg-white">
          <div className="container-custom space-y-24">
            {caseStudies.map((study, i) => (
              <div key={i} className="border-b border-border pb-24 last:border-0 last:pb-0">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white font-heading font-bold text-xl">
                    {study.logo}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-text">
                      {study.client}
                    </h2>
                    <span className="text-sm text-primary font-medium">{study.industry}</span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left - Problem & Strategy */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-text mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-red-500" />
                        The Problem
                      </h3>
                      <p className="text-muted leading-relaxed">{study.problem}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-heading font-semibold text-text mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Our Strategy
                      </h3>
                      <p className="text-muted leading-relaxed">{study.strategy}</p>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <DollarSign className="w-4 h-4" />
                        Budget: <span className="font-semibold text-text">{study.budget}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <Clock className="w-4 h-4" />
                        Duration: <span className="font-semibold text-text">{study.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right - Results */}
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-text mb-4">
                      Results
                    </h3>
                    <div className="space-y-4">
                      {study.results.map((result, j) => (
                        <div key={j} className="bg-surface rounded-xl p-4 border border-border">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-text">{result.metric}</span>
                            <span className="text-sm font-bold text-accent">{result.change}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-muted">Before: {result.before}</span>
                            <span className="text-text font-semibold">→ {result.after}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="mt-8 bg-white rounded-xl p-6 text-text border border-border">
                      <Quote className="w-8 h-8 text-primary/40 mb-3" />
                      <p className="text-sm leading-relaxed mb-4 italic">
                        &ldquo;{study.testimonial.content}&rdquo;
                      </p>
                      <div>
                        <p className="font-heading font-semibold text-sm">{study.testimonial.name}</p>
                        <p className="text-xs text-muted">{study.testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Real Results Gallery */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <SectionHeader
              badge="Real Results"
              title="Campaign Performance"
              description="Actual Meta Ads dashboards from our client campaigns. No cherry-picking — real data, real results."
            />
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 mt-12 space-y-4">
              {[
                { src: "/case-studies/2.jpeg", alt: "106 leads at ₹36.56 CPL" },
                { src: "/case-studies/11.jpeg", alt: "₹79.64 vs ₹450.05 CPL - Before/After" },
                { src: "/case-studies/8.jpeg", alt: "253 leads at ₹16.35 CPL" },
                { src: "/case-studies/9.jpeg", alt: "₹551K total spend overview" },
                { src: "/case-studies/3.jpeg", alt: "Anglo Veda - 79 leads at ₹18.59 CPL" },
                { src: "/case-studies/14.jpeg", alt: "121 leads at ₹89.10 CPL" },
                { src: "/case-studies/4.jpeg", alt: "89 leads at ₹20.72 CPL" },
                { src: "/case-studies/10.jpeg", alt: "98 leads at ₹14.08 CPL" },
                { src: "/case-studies/6.jpeg", alt: "114 leads at ₹36.74 CPL" },
                { src: "/case-studies/13.jpeg", alt: "36 leads at ₹13.36 CPL" },
                { src: "/case-studies/5.jpeg", alt: "15 leads at ₹33.49 CPL" },
                { src: "/case-studies/12.jpeg", alt: "12 leads at ₹50.52 CPL" },
                { src: "/case-studies/7.jpeg", alt: "9 leads at ₹33.50 CPL" },
              ].map((img, i) => (
                <div key={i} className="break-inside-avoid relative group overflow-hidden rounded-xl border border-border hover:shadow-xl transition-all">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto block group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/5 text-text">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Want Similar Results?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help your business achieve measurable growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all hover:shadow-lg"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
