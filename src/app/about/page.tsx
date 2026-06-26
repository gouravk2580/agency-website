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
  { icon: Target, title: "Customized Marketing Strategies", description: "Tailored campaigns designed specifically for your business goals and target audience." },
  { icon: Eye, title: "Lead Generation Focused", description: "Every campaign is optimized to generate high-quality leads that convert into customers." },
  { icon: Heart, title: "Data-Driven Decision Making", description: "We use analytics and insights to drive every strategy, ensuring maximum ROI." },
  { icon: Award, title: "Creative Content & Ad Design", description: "Eye-catching creatives and compelling content that captures attention and drives action." },
  { icon: ArrowRight, title: "Transparent Reporting", description: "Full visibility into campaigns, spending, and performance at all times." },
  { icon: Users, title: "Dedicated Support", description: "A dedicated account manager for every client, ensuring personalized attention and quick responses." },
  { icon: Target, title: "ROI-Oriented Approach", description: "We don't just run campaigns — we build growth systems that deliver measurable results." },
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
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-primary/5 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-muted border border-white/10 mb-6">
                <Users className="w-4 h-4 text-primary-light" />
                About ZapZoom
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text leading-tight mb-6">
                We Help Businesses{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
                  Grow Faster
                </span>{" "}
                Through Result-Driven Digital Marketing
              </h1>
              <p className="text-lg text-muted mb-8 max-w-lg">
                Our mission is simple: generate more leads, increase brand visibility, and maximize revenue for our clients.
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
                title="What We Do"
                description="End-to-end digital marketing solutions tailored to your business."
                centered={false}
              />
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  We specialize in end-to-end digital marketing solutions, including Meta Ads (Facebook & Instagram), Google Ads, Social Media Marketing, Search Engine Optimization (SEO), Content Marketing, Lead Generation, Website Optimization, Creative Design, Video Editing, Animation, and Performance Marketing.
                </p>
                <p>
                  Our team focuses on understanding each client&apos;s business goals and creating customized marketing campaigns that deliver measurable results. Whether you&apos;re a real estate company, startup, local business, e-commerce brand, or service provider, we develop data-driven strategies that help you attract the right audience and convert them into customers.
                </p>
                <p>
                  What sets us apart is our commitment to transparency, creativity, and performance. We continuously monitor, optimize, and improve campaigns to ensure maximum return on investment (ROI).
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
              badge="Why Choose Us"
              title="Why Choose ZapZoom"
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
            <p className="text-center text-muted mt-8 text-lg">
              We don&apos;t just run campaigns — we build growth systems that help businesses scale and succeed in today&apos;s competitive digital landscape.
            </p>
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
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                        <Users className="w-12 h-12 text-muted" />
                      </div>
                      <p className="text-muted text-sm">Founder & CEO</p>
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
                    <h3 className="text-xl font-heading font-bold text-text">Ankit Panchal</h3>
                    <p className="text-primary font-medium text-sm">Founder & CEO</p>
                  </div>
                  <p className="text-muted leading-relaxed">
                    With over 10 years of experience in digital marketing, Ankit founded ZapZoom
                    to bridge the gap between businesses and measurable marketing results. His
                    data-first approach has helped over 150 businesses scale their digital presence.
                  </p>
                  <p className="text-muted leading-relaxed">
                    Previously, Ankit led marketing teams at top tech companies and has been
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
                { name: "Ankit Panchal", role: "Founder & CEO", department: "Leadership" },
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
              <div className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-muted mx-auto mb-4" />
                  <p className="text-muted text-sm">Shakarpur, East Delhi, New Delhi</p>
                  <p className="text-muted text-xs mt-1">Where creativity meets strategy</p>
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
        <section className="section-padding bg-gray-50 text-text">
          <div className="container-custom">
            <SectionHeader
              badge="By The Numbers"
              title="Our Impact"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-stat font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/5 text-text">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Let&apos;s Grow Your Business Together
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Contact us today for a FREE Digital Marketing Audit and Growth Consultation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all hover:shadow-lg"
              >
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919667169645"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-text rounded-full font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
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
