import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Megaphone,
  Users,
  Target,
  ShoppingCart,
  RefreshCw,
  TrendingUp,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Meta Ads",
  description:
    "Strategic Facebook & Instagram advertising campaigns that deliver measurable results and maximize your return on ad spend.",
  alternates: {
    canonical: "https://zapzoom.in/services/meta-ads",
  },
};

const services = [
  {
    icon: Megaphone,
    title: "Facebook Ads",
    description:
      "Reach your ideal audience on the world's largest social platform with precision targeting.",
  },
  {
    icon: Users,
    title: "Instagram Ads",
    description:
      "Visual storytelling that drives engagement and conversions through stunning creative campaigns.",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description:
      "High-quality leads delivered straight to your CRM with optimized funnel strategies.",
  },
  {
    icon: RefreshCw,
    title: "Remarketing",
    description:
      "Re-engage website visitors and convert warm prospects into paying customers.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description:
      "Maximize every rupee spent with data-driven A/B testing and funnel optimization.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Ads",
    description:
      "Drive product sales with Dynamic Product Ads and catalog campaigns.",
  },
];

const benefits = [
  "Increase Leads",
  "Reduce Cost Per Lead",
  "Target Correct Audience",
  "Increase Sales",
  "Weekly Optimization",
  "Transparent Reporting",
];

const processSteps = [
  { step: 1, title: "Discovery Call", description: "We learn about your business goals, target audience, and current marketing efforts." },
  { step: 2, title: "Business Research", description: "Deep analysis of your industry, competitors, and market landscape." },
  { step: 3, title: "Audience Research", description: "Identify ideal customer profiles and build custom & lookalike audiences." },
  { step: 4, title: "Campaign Strategy", description: "Define campaign objectives, budget allocation, and funnel structure." },
  { step: 5, title: "Creative Design", description: "Design scroll-stopping ad creatives and write compelling copy." },
  { step: 6, title: "Campaign Launch", description: "Set up campaigns with proper tracking, pixels, and conversion events." },
  { step: 7, title: "Optimization", description: "Monitor performance daily, adjust bids, test audiences, and refine targeting." },
  { step: 8, title: "Scaling", description: "Scale winning campaigns strategically to maximize ROAS." },
];

const results = [
  { value: "₹5.5L+", label: "Monthly Ad Spend Managed" },
  { value: "1000+", label: "Leads Generated Monthly" },
  { value: "₹11", label: "Average Cost Per Lead" },
  { value: "82%", label: "Lower Cost Than Industry Avg" },
];

export default function MetaAdsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero - 60/40 Layout */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-primary/5 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          </div>
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-muted border border-white/10 mb-6">
                  <Megaphone className="w-4 h-4 text-primary-light" />
                  Meta Ads
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text leading-tight mb-6">
                  Scale Your Business with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
                    High-Converting
                  </span>{" "}
                  Facebook & Instagram Ads
                </h1>
                <p className="text-lg text-muted mb-8 max-w-lg">
                  Data-driven Meta Ads campaigns that help businesses generate quality leads
                  and increase sales through precise audience targeting and optimization.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all hover:shadow-lg hover:scale-105"
                  >
                    Book Free Strategy Call <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-text rounded-full font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                  >
                    Get Free Ads Audit
                  </Link>
                </div>
                {/* Trust Badges */}
                <div className="flex flex-wrap gap-6 mt-8">
                  {["ROI Focused", "Weekly Reports", "Dedicated Manager"].map((badge) => (
                    <div key={badge} className="flex items-center gap-2 text-muted text-sm">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard Mockup */}
              <div className="lg:col-span-2 hidden lg:block">
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
                  <div className="bg-gray-100 rounded-2xl p-4 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-primary/30 rounded w-3/4" />
                      <div className="h-2 bg-accent/30 rounded w-1/2" />
                      <div className="h-2 bg-primary/30 rounded w-2/3" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {results.map((r, i) => (
                      <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
                        <div className="text-xl font-stat font-bold text-text">{r.value}</div>
                        <div className="text-xs text-muted">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  {/* Floating Cards */}
                  <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg p-3 animate-float">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-accent" />
                      <span className="text-sm font-semibold text-text">+147% ROAS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader
              badge="Our Services"
              title="Complete Meta Ads Solutions"
              description="End-to-end Facebook and Instagram advertising services tailored to your business goals."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group bg-surface rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-text mb-2">{service.title}</h3>
                  <p className="text-muted text-sm">{service.description}</p>
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
                badge="Why Meta Ads"
                title="Benefits of Our Meta Ads Service"
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

        {/* Process Timeline */}
        <section className="section-padding bg-gray-50 text-text">
          <div className="container-custom">
            <SectionHeader
              badge="Our Process"
              title="8-Step Meta Ads Framework"
              description="A proven process that turns ad spend into measurable business growth."
              dark
            />
            <div className="mt-12 max-w-4xl mx-auto">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-white/10 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-heading font-semibold mb-1">{step.title}</h3>
                    <p className="text-muted text-sm">{step.description}</p>
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
              title="Performance That Speaks"
              description="Our Meta Ads campaigns consistently outperform industry benchmarks."
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {results.map((result, i) => (
                <div key={i} className="text-center p-6 bg-surface rounded-2xl border border-border">
                  <div className="text-4xl font-stat font-bold text-primary mb-2">{result.value}</div>
                  <div className="text-muted text-sm">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/5 text-text">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Scale with Meta Ads?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Get a free audit of your current Meta Ads campaigns and discover opportunities for growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all hover:shadow-lg"
            >
              Book Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
