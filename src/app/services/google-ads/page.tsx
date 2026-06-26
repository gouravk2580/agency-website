import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Search,
  Globe,
  ShoppingBag,
  Play,
  RefreshCw,
  Target,
  TrendingUp,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Google Ads",
  description:
    "Data-driven Google Ads campaigns that put your business in front of high-intent customers ready to buy.",
  alternates: {
    canonical: "https://zapzoom.in/services/google-ads",
  },
};

const adTypes = [
  {
    icon: Search,
    title: "Search Ads",
    description: "Appear at the top of Google when customers search for your products or services.",
  },
  {
    icon: Globe,
    title: "Display Ads",
    description: "Build brand awareness with visually compelling ads across Google's network.",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Ads",
    description: "Showcase your products directly in search results with rich product information.",
  },
  {
    icon: Target,
    title: "Performance Max",
    description: "Access all Google Ads channels from a single campaign powered by AI.",
  },
  {
    icon: RefreshCw,
    title: "Remarketing",
    description: "Re-engage website visitors and convert warm prospects into paying customers.",
  },
  {
    icon: Play,
    title: "YouTube Ads",
    description: "Engage audiences with video ads before, during, or after YouTube content.",
  },
];

const benefits = [
  "Increase Quality Leads",
  "Higher ROI",
  "Keyword Research",
  "Competitor Analysis",
  "Weekly Optimization",
  "Landing Page Optimization",
];

const caseStudies = [
  {
    client: "TechVentures India",
    metric1: { label: "CTR", value: "8.5%" },
    metric2: { label: "CPC", value: "₹12" },
    metric3: { label: "Conversions", value: "450/mo" },
    metric4: { label: "ROAS", value: "5.2x" },
  },
  {
    client: "StyleHub Fashion",
    metric1: { label: "CTR", value: "6.2%" },
    metric2: { label: "CPC", value: "₹18" },
    metric3: { label: "Conversions", value: "320/mo" },
    metric4: { label: "ROAS", value: "7.1x" },
  },
  {
    client: "HealthFirst Clinics",
    metric1: { label: "CTR", value: "11.3%" },
    metric2: { label: "CPC", value: "₹25" },
    metric3: { label: "Conversions", value: "180/mo" },
    metric4: { label: "ROAS", value: "4.8x" },
  },
];

export default function GoogleAdsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-primary/5 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-muted border border-white/10 mb-6">
                <Search className="w-4 h-4 text-accent" />
                Google Ads
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text leading-tight mb-6">
                Put Your Business{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
                  Front & Center
                </span>{" "}
                on Google
              </h1>
              <p className="text-lg text-muted mb-8 max-w-lg">
                Data-driven Google Ads campaigns that capture high-intent customers
                ready to buy. From search to shopping, we cover it all.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all hover:shadow-lg hover:scale-105"
                >
              Book Consultation <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+919667169645"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-text rounded-full font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" /> Call Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Types */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader
              badge="Ad Types"
              title="Google Ads Solutions"
              description="We leverage every Google Ads format to maximize your reach and conversions."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {adTypes.map((type, i) => (
                <div
                  key={i}
                  className="group bg-surface rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <type.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-text mb-2">{type.title}</h3>
                  <p className="text-muted text-sm">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SectionHeader
                badge="Benefits"
                title="Why Google Ads?"
                centered={false}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-text text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies with Metrics */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader
              badge="Case Studies"
              title="Real Results, Real Numbers"
              description="See the performance metrics from our Google Ads campaigns."
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {caseStudies.map((study, i) => (
                <div key={i} className="bg-surface rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-heading font-semibold text-text mb-4">{study.client}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[study.metric1, study.metric2, study.metric3, study.metric4].map((m, j) => (
                      <div key={j} className="bg-white rounded-xl p-3 text-center">
                        <div className="text-xl font-stat font-bold text-primary">{m.value}</div>
                        <div className="text-xs text-muted">{m.label}</div>
                      </div>
                    ))}
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
              Ready to Dominate Google?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Get a free Google Ads audit and see how much revenue you're leaving on the table.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all hover:shadow-lg"
            >
              Get Free Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
