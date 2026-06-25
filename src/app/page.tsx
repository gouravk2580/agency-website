"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Target,
  BarChart3,
  Eye,
  Users,
  Award,
  ChevronDown,
  Zap,
  Shield,
  Phone,
} from "lucide-react";
import {
  SERVICES,
  STATS,
  WHY_CHOOSE_US,
  PROCESS_STEPS,
  TESTIMONIALS,
  INDUSTRIES,
  FAQS,
} from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  Megaphone: Zap,
  Search: Target,
  TrendingUp: TrendingUp,
  Video: Eye,
  BarChart3: BarChart3,
  Eye: Eye,
  Users: Users,
  Award: Award,
  ShoppingBag: Zap,
  Cloud: Shield,
  Heart: Target,
  GraduationCap: Target,
  Building2: Target,
  DollarSign: Target,
  Hotel: Target,
  Car: Target,
};

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* ===== HERO ===== */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-primary/5">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          </div>

          <div className="container-custom relative z-10 pt-32 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="mb-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-sm text-primary font-medium border border-primary/20">
                    <Zap className="w-4 h-4 text-primary" />
                    Performance Marketing Agency
                  </span>
                </motion.div>
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text leading-tight mb-6"
                >
                  Grow Your Business with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
                    Data-Driven
                  </span>{" "}
                  Marketing
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-muted mb-8 max-w-lg"
                >
                  We help businesses scale through strategic Meta Ads, Google Ads,
                  SEO, and professional video editing. Real results, real growth.
                </motion.p>
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all hover:shadow-lg hover:scale-105"
                  >
                    Get Free Audit
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-text rounded-full font-semibold border border-border hover:bg-gray-200 transition-all"
                  >
                    View Case Studies
                  </Link>
                </motion.div>
              </motion.div>

              {/* Hero Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative hidden lg:block"
              >
                <div className="relative bg-white backdrop-blur-xl rounded-3xl p-8 border border-border shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    {STATS.slice(0, 4).map((stat, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 rounded-2xl p-6 text-center"
                      >
                        <div className="text-3xl font-stat font-bold text-primary mb-1">
                          ₹{stat.value}
                          {stat.suffix}
                        </div>
                        <div className="text-sm text-muted">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-2xl backdrop-blur-sm border border-accent/30 flex items-center justify-center animate-float">
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== TRUSTED COMPANIES ===== */}
        <section className="py-12 bg-surface border-y border-border">
          <div className="container-custom">
            <p className="text-center text-sm text-muted mb-8">
              Trusted by 150+ businesses across India
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
              {["TechVentures", "StyleHub", "GreenLeaf", "FinancePro", "EduLearn", "HealthFirst"].map(
                (name) => (
                  <div key={name} className="text-xl font-heading font-bold text-muted/60">
                    {name}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ===== STATISTICS ===== */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-stat font-bold text-primary mb-2">
                    ₹{stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-muted font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <SectionHeader
              badge="Our Services"
              title="What We Offer"
              description="Comprehensive digital marketing solutions tailored to your business goals."
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            >
              {SERVICES.map((service, i) => {
                const Icon = iconMap[service.icon] || Zap;
                return (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="group bg-white rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-text mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted text-sm mb-4">{service.description}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader
              badge="Why Choose Us"
              title="Why Businesses Trust Us"
              description="We combine data, creativity, and relentless optimization to deliver exceptional results."
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            >
              {WHY_CHOOSE_US.map((item, i) => {
                const Icon = iconMap[item.icon] || BarChart3;
                return (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="text-center p-6"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-text mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm">{item.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ===== OUR PROCESS ===== */}
        <section className="section-padding bg-dark text-white">
          <div className="container-custom">
            <SectionHeader
              badge="Our Process"
              title="How We Work"
              description="A proven 5-step process that turns your marketing investment into measurable growth."
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="mt-12 relative"
            >
              {/* Timeline Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2" />

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                {PROCESS_STEPS.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="relative text-center"
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold relative z-10">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-heading font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== CASE STUDIES ===== */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <SectionHeader
              badge="Case Studies"
              title="Proven Results"
              description="See how we've helped businesses like yours achieve remarkable growth."
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 mt-12"
            >
              {[
                {
                  client: "TechVentures India",
                  industry: "SaaS",
                  result: "300% Increase in Leads",
                  metric: "From 100 to 400 MQLs/month",
                },
                {
                  client: "StyleHub Fashion",
                  industry: "E-commerce",
                  result: "6x ROAS Achieved",
                  metric: "₹50L revenue from ₹8L ad spend",
                },
                {
                  client: "GreenLeaf Organics",
                  industry: "D2C",
                  result: "200% Revenue Growth",
                  metric: "Year-over-year organic traffic doubled",
                },
              ].map((study, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-primary to-dark flex items-center justify-center">
                    <span className="text-white/80 text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-semibold text-text mb-1">
                      {study.client}
                    </h3>
                    <p className="text-primary font-semibold text-xl mb-2">
                      {study.result}
                    </p>
                    <p className="text-muted text-sm">{study.metric}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center mt-8">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all"
              >
                View All Case Studies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader
              badge="Testimonials"
              title="What Our Clients Say"
              description="Don't just take our word for it. Here's what our clients have to say."
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 mt-12"
            >
              {TESTIMONIALS.map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="bg-surface rounded-2xl p-6 border border-border"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <span key={j} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-text mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div>
                    <p className="font-heading font-semibold text-text">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== INDUSTRIES ===== */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <SectionHeader
              badge="Industries"
              title="Industries We Serve"
              description="Tailored strategies for every industry."
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {INDUSTRIES.map((industry, i) => {
                const Icon = iconMap[industry.icon] || Target;
                return (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="bg-white rounded-2xl p-6 text-center border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="font-heading font-semibold text-text">
                      {industry.name}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader
              badge="FAQ"
              title="Frequently Asked Questions"
              description="Got questions? We've got answers."
            />
            <div className="max-w-3xl mx-auto mt-12 space-y-4">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-heading font-semibold text-text pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted flex-shrink-0 transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="section-padding bg-gradient-to-br from-primary to-dark text-white">
          <div className="container-custom text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6"
              >
                Ready to Grow Your Business?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-white/70 mb-8 max-w-2xl mx-auto"
              >
                Get a free marketing audit and discover how we can help you
                achieve 3-5x ROAS on your ad spend.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all hover:shadow-lg"
                >
                  Get Free Audit <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+919667169645"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" /> Call Us Now
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
