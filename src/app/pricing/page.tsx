import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  X,
  Megaphone,
  Search,
  TrendingUp,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing plans for Meta Ads, Google Ads, SEO, and Video Editing services. Choose the plan that fits your business.",
};

const plans = [
  {
    name: "Starter",
    price: "₹25,000",
    period: "/month",
    description: "Perfect for small businesses starting with digital marketing.",
    popular: false,
    features: [
      "1 Platform (Meta OR Google)",
      "Up to ₹50,000 ad spend",
      "Monthly reporting",
      "Basic audience targeting",
      "2 ad creatives/month",
      "Email support",
    ],
    excluded: [
      "Dedicated account manager",
      "A/B testing",
      "Landing page optimization",
      "Remarketing campaigns",
    ],
  },
  {
    name: "Growth",
    price: "₹50,000",
    period: "/month",
    description: "For businesses ready to scale with multi-platform marketing.",
    popular: true,
    features: [
      "2 Platforms (Meta + Google)",
      "Up to ₹2,00,000 ad spend",
      "Weekly reporting",
      "Advanced audience targeting",
      "5 ad creatives/month",
      "Dedicated account manager",
      "A/B testing",
      "Remarketing campaigns",
    ],
    excluded: [
      "Landing page optimization",
      "Custom dashboard",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Full-scale marketing for established businesses and enterprises.",
    popular: false,
    features: [
      "All Platforms",
      "Unlimited ad spend",
      "Real-time dashboard",
      "Custom audience strategy",
      "Unlimited creatives",
      "Dedicated team",
      "A/B testing",
      "Landing page optimization",
      "Remarketing campaigns",
      "Monthly strategy calls",
    ],
    excluded: [],
  },
];

const comparisonFeatures = [
  { name: "Platforms", starter: "1", growth: "2", enterprise: "All" },
  { name: "Ad Spend Limit", starter: "₹50K", growth: "₹2L", enterprise: "Unlimited" },
  { name: "Reporting", starter: "Monthly", growth: "Weekly", enterprise: "Real-time" },
  { name: "Ad Creatives", starter: "2/month", growth: "5/month", enterprise: "Unlimited" },
  { name: "Dedicated Manager", starter: false, growth: true, enterprise: true },
  { name: "A/B Testing", starter: false, growth: true, enterprise: true },
  { name: "Remarketing", starter: false, growth: true, enterprise: true },
  { name: "Landing Page Optimization", starter: false, growth: false, enterprise: true },
  { name: "Custom Dashboard", starter: false, growth: false, enterprise: true },
  { name: "Strategy Calls", starter: false, growth: false, enterprise: true },
];

const faqs = [
  { question: "What's included in the management fee?", answer: "The management fee covers campaign strategy, setup, optimization, reporting, and ad creative production. Ad spend is separate and paid directly to the platform." },
  { question: "Is there a minimum contract period?", answer: "We work on a month-to-month basis with no long-term contracts. We believe in earning your business through results." },
  { question: "Can I upgrade or downgrade my plan?", answer: "Yes, you can change your plan at any time. Changes take effect from the next billing cycle." },
  { question: "What ad spend do you recommend?", answer: "For meaningful results, we recommend a minimum of ₹50,000/month for Meta Ads and ₹30,000/month for Google Ads." },
  { question: "Do you offer custom plans?", answer: "Yes, our Enterprise plan is fully customizable. Contact us to discuss your specific needs." },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-dark via-dark to-primary/20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10 mb-6">
                Pricing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Transparent{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
                  Pricing
                </span>{" "}
                for Every Business
              </h1>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                No hidden fees, no long-term contracts. Choose the plan that fits your goals and scale as you grow.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                    plan.popular
                      ? "border-primary bg-white shadow-xl scale-105"
                      : "border-border bg-surface hover:border-primary/30 hover:shadow-lg"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 bg-primary text-white text-xs font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-heading font-bold text-text mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-stat font-bold text-text">{plan.price}</span>
                    <span className="text-muted text-sm">{plan.period}</span>
                  </div>
                  <Link
                    href="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition-all ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-surface text-text border border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    Get Started
                  </Link>
                  <div className="mt-6 space-y-3">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-text">{feature}</span>
                      </div>
                    ))}
                    {plan.excluded.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <X className="w-4 h-4 text-muted/50 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted/50">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <SectionHeader
              badge="Compare Plans"
              title="Plan Comparison"
              description="See what's included in each plan at a glance."
            />
            <div className="mt-12 max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-heading font-semibold text-text">Feature</th>
                    <th className="text-center py-4 px-4 font-heading font-semibold text-text">Starter</th>
                    <th className="text-center py-4 px-4 font-heading font-semibold text-primary">Growth</th>
                    <th className="text-center py-4 px-4 font-heading font-semibold text-text">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="py-4 px-4 text-sm text-text">{feature.name}</td>
                      <td className="py-4 px-4 text-center text-sm">
                        {typeof feature.starter === "boolean" ? (
                          feature.starter ? (
                            <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted/50 mx-auto" />
                          )
                        ) : (
                          <span className="text-text">{feature.starter}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center text-sm">
                        {typeof feature.growth === "boolean" ? (
                          feature.growth ? (
                            <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted/50 mx-auto" />
                          )
                        ) : (
                          <span className="text-primary font-semibold">{feature.growth}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center text-sm">
                        {typeof feature.enterprise === "boolean" ? (
                          feature.enterprise ? (
                            <CheckCircle className="w-5 h-5 text-accent mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted/50 mx-auto" />
                          )
                        ) : (
                          <span className="text-text">{feature.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader
              badge="FAQ"
              title="Pricing Questions"
              description="Common questions about our pricing and plans."
            />
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-surface border border-border rounded-xl overflow-hidden group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="font-heading font-semibold text-text pr-4">{faq.question}</span>
                    <ArrowRight className="w-5 h-5 text-muted flex-shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-5 pb-5 text-muted leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-primary to-dark text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Book a free strategy call to discuss your goals and find the right plan for your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all hover:shadow-lg"
              >
                Book Strategy Call <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" /> Call Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
