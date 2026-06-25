import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Video,
  Film,
  Play,
  Palette,
  Music,
  Layers,
  Monitor,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Video Editing",
  description:
    "Professional video editing services that transform raw footage into compelling content that captivates your audience.",
};

const categories = [
  {
    icon: Film,
    title: "Instagram Reels",
    description: "Short-form content optimized for Instagram Reels, YouTube Shorts, and TikTok.",
  },
  {
    icon: Play,
    title: "YouTube",
    description: "Long-form YouTube content including vlogs, tutorials, and brand documentaries.",
  },
  {
    icon: Video,
    title: "Commercial Ads",
    description: "Scroll-stopping video ads that drive clicks, leads, and sales.",
  },
  {
    icon: Music,
    title: "Podcast Editing",
    description: "Professional podcast editing with multi-track audio, noise removal, and mastering.",
  },
  {
    icon: Layers,
    title: "Corporate Videos",
    description: "Professional brand storytelling, training videos, and company presentations.",
  },
  {
    icon: Palette,
    title: "Motion Graphics",
    description: "Animated graphics and visual effects that elevate your content.",
  },
];

const processSteps = [
  { step: 1, title: "Receive Footage", description: "Share your vision, brand guidelines, and raw footage with our team." },
  { step: 2, title: "Editing", description: "Our editors craft a compelling narrative from your raw footage." },
  { step: 3, title: "Color", description: "Professional color correction and grading for cinematic quality." },
  { step: 4, title: "Sound", description: "Audio mixing, sound effects, and music selection for immersive experiences." },
  { step: 5, title: "Review", description: "Collaborative review process with unlimited revisions." },
  { step: 6, title: "Delivery", description: "Export in your required formats optimized for each platform." },
];

const portfolio = [
  { category: "E-commerce", title: "Product Launch Campaign" },
  { category: "SaaS", title: "Explainer Video" },
  { category: "Fashion", title: "Brand Story" },
  { category: "Food", title: "Restaurant Promo" },
  { category: "Tech", title: "App Tutorial" },
  { category: "Health", title: "Wellness Series" },
];

export default function VideoEditingPage() {
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
                <Video className="w-4 h-4 text-primary-light" />
                Video Editing
              </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Professional Video Editing for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
                  Brands
                </span>
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-lg">
                Professional video editing that captivates audiences and drives
                engagement. From social media clips to brand films, we deliver excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all hover:shadow-lg hover:scale-105"
                >
                  Request Quote <ArrowRight className="w-5 h-5" />
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

        {/* Categories */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader
              badge="Services"
              title="Video Editing Services"
              description="End-to-end video production and editing for every platform and purpose."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {categories.map((cat, i) => (
                <div
                  key={i}
                  className="group bg-surface rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <cat.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-text mb-2">{cat.title}</h3>
                  <p className="text-muted text-sm">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Color Grading Animation Section */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  badge="Quality"
                  title="Cinematic Color Grading"
                  description="Every frame is professionally color-corrected and graded to create a consistent, cinematic look."
                  centered={false}
                />
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500" />
                    <span className="text-sm text-text">Warm tones for lifestyle content</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500" />
                    <span className="text-sm text-text">Cool tones for tech & corporate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500" />
                    <span className="text-sm text-text">Natural tones for health & wellness</span>
                  </div>
                </div>
              </div>
              <div className="bg-dark rounded-3xl p-8 relative overflow-hidden">
                <div className="grid grid-cols-3 gap-4">
                  {["Raw", "Corrected", "Graded"].map((stage, i) => (
                    <div key={i} className="text-center">
                      <div className={`aspect-video rounded-xl mb-2 ${
                        i === 0 ? "bg-gray-500" : i === 1 ? "bg-gray-700" : "bg-gradient-to-br from-primary to-accent"
                      }`} />
                      <span className="text-xs text-white/60">{stage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeader
              badge="Portfolio"
              title="Our Work"
              description="A showcase of our video editing capabilities across industries."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {portfolio.map((item, i) => (
                <div
                  key={i}
                  className="group relative aspect-video bg-gradient-to-br from-dark to-primary/30 rounded-2xl overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-xs text-white/60">{item.category}</span>
                    <h3 className="text-white font-heading font-semibold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-dark text-white">
          <div className="container-custom">
            <SectionHeader
              badge="Process"
              title="Our Editing Process"
              description="A streamlined 6-step process from raw footage to final delivery."
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
                    <p className="text-white/60 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-primary to-dark text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Create Stunning Videos?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Let's transform your raw footage into compelling content that captivates your audience.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all hover:shadow-lg"
            >
              Request Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
