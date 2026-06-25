import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Building2,
  Calendar,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ZapZoom - a performance marketing agency driven by data, creativity, and a passion for results.",
};

const values = [
  { icon: Target, title: "Results-Driven", description: "Every decision is measured against its impact on your business goals." },
  { icon: Eye, title: "Transparency", description: "Full visibility into campaigns, spending, and performance at all times." },
  { icon: Heart, title: "Client-First", description: "Your success is our success. We treat your business as our own." },
  { icon: Award, title: "Excellence", description: "We never settle for good enough. Continuous improvement is in our DNA." },
];

const timeline = [
  { year: "2019", title: "Founded", description: "ZapZoom started with a vision to make performance marketing accessible to every business." },
  { year: "2020", title: "First 50 Clients", description: "Reached our first 50 clients milestone with a 95% retention rate." },
  { year: "2021", title: "Team Expansion", description: "Grew to a team of 25+ specialists across marketing, creative, and strategy." },
  { year: "2022", title: "100+ Clients", description: "Crossed 100 active clients and ₹10Cr+ in managed ad spend." },
  { year: "2023", title: "Industry Recognition", description: "Named among top performance marketing agencies in India." },
  { year: "2024", title: "Global Reach", description: "Expanded services to international markets across Southeast Asia." },
];

const stats = [
  { value: "150+", label: "Clients Served" },
  { value: "25+", label: "Team Members" },
  { value: "50Cr+", label: "Ad Spend Managed" },
  { value: "98%", label: "Client Retention" },
];

export default function AboutPage() {
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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10 mb-6">
                <Users className="w-4 h-4 text-primary-light" />
                About ZapZoom
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                We're on a Mission to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
                  Demystify
                </span>{" "}
                Digital Marketing
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-lg">
                Founded in 2019, ZapZoom has grown from a two-person startup to a 25+ member team
                serving 150+ businesses across India and Southeast Asia.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SectionHeader
                badge="Our Story"
                title="How It All Started"
                description="Born from a frustration with agencies that prioritized vanity metrics over real business results."
                centered={false}
              />
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  We saw businesses pouring money into digital marketing without understanding
                  where their money was going or what results it was driving. The industry was
                  filled with jargon, opaque reporting, and agencies that measured success by
                  likes and followers instead of revenue and profit.
                </p>
                <p>
                  ZapZoom was founded to change that. We believe every business deserves
                  transparent, data-driven marketing that delivers measurable ROI. No black boxes,
                  no vanity metrics — just results that matter.
                </p>
                <p>
                  Today, we're a team of 25+ passionate marketers, creatives, and strategists
                  who live and breathe performance marketing. Our clients trust us because we
                  treat their business as our own.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-heading font-semibold text-text mb-3">Our Mission</h3>
                <p className="text-muted leading-relaxed">
                  To empower businesses with transparent, data-driven marketing strategies
                  that deliver measurable growth and exceptional return on investment.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-heading font-semibold text-text mb-3">Our Vision</h3>
                <p className="text-muted leading-relaxed">
                  To become the most trusted performance marketing partner for businesses
                  across India and Southeast Asia, known for our integrity and results.
                </p>
              </div>
            </div>

            <SectionHeader
              badge="Values"
              title="What We Stand For"
              centered={false}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {values.map((value, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-2xl border border-border">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-text mb-2">{value.title}</h3>
                  <p className="text-muted text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader
              badge="Our Journey"
              title="Milestones"
              description="Key moments in our growth story."
            />
            <div className="mt-12 max-w-4xl mx-auto">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {item.year.slice(2)}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-sm text-primary font-semibold">{item.year}</span>
                    <h3 className="text-lg font-heading font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Founder */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-dark to-primary/30 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                        <Users className="w-12 h-12 text-white/60" />
                      </div>
                      <p className="text-white/60 text-sm">Founder & CEO</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                  <p className="text-sm text-muted italic leading-relaxed">
                    &quot;We started ZapZoom with a simple mission — to make performance marketing transparent and results-driven.&quot;
                  </p>
                </div>
              </div>
              <div>
                <SectionHeader
                  badge="Leadership"
                  title="Meet Our Founder"
                  description="Driving the vision behind ZapZoom's growth and success."
                  centered={false}
                />
                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-text">Arjun Mehta</h3>
                    <p className="text-primary font-medium text-sm">Founder & CEO</p>
                  </div>
                  <p className="text-muted leading-relaxed">
                    With over 10 years of experience in digital marketing, Arjun founded ZapZoom
                    to bridge the gap between businesses and measurable marketing results. His
                    data-first approach has helped over 150 businesses scale their digital presence.
                  </p>
                  <p className="text-muted leading-relaxed">
                    Previously, Arjun led marketing teams at top tech companies and has been
                    recognized as one of India&apos;s top young marketing leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <SectionHeader
              badge="Our Team"
              title="Meet the Experts"
              description="A passionate team of marketers, creatives, and strategists."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { name: "Arjun Mehta", role: "Founder & CEO", department: "Leadership" },
                { name: "Priya Nair", role: "Head of Performance", department: "Marketing" },
                { name: "Vikram Singh", role: "Creative Director", department: "Design" },
                { name: "Ananya Rao", role: "SEO Lead", department: "Organic Growth" },
              ].map((member, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-border text-center group hover:shadow-xl transition-all">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-text">{member.name}</h3>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
                  <p className="text-muted text-xs mt-1">{member.department}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SectionHeader
                badge="Our Space"
                title="Our Office"
                description="A creative workspace designed for collaboration and innovation."
                centered={false}
              />
              <div className="bg-gradient-to-br from-dark to-primary/30 rounded-3xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-white/40 mx-auto mb-4" />
                  <p className="text-white/60 text-sm">Koramangala, Bangalore</p>
                  <p className="text-white/40 text-xs mt-1">Where creativity meets strategy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <SectionHeader
              badge="Recognition"
              title="Awards & Achievements"
              description="Recognized for excellence in performance marketing."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { year: "2024", title: "Top Performance Agency", org: "India Marketing Awards" },
                { year: "2023", title: "Best Digital Campaign", org: "Digital Excellence Awards" },
                { year: "2023", title: "Fastest Growing Agency", org: "Business Today" },
                { year: "2022", title: "Innovation in Marketing", org: "Brand Impact Awards" },
              ].map((award, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-border text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs text-primary font-semibold">{award.year}</span>
                  <h3 className="text-lg font-heading font-semibold text-text mt-2">{award.title}</h3>
                  <p className="text-muted text-sm mt-1">{award.org}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Numbers */}
        <section className="section-padding bg-dark text-white">
          <div className="container-custom">
            <SectionHeader
              badge="By The Numbers"
              title="Our Impact"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-stat font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-primary to-dark text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Join Our Growing Family
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Ready to work with a team that's as invested in your success as you are?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all hover:shadow-lg"
              >
                Get in Touch <ArrowRight className="w-5 h-5" />
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
