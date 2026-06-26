import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ZapZoom for a free marketing audit. Contact us for Meta Ads, Google Ads, SEO, and Video Editing services in Delhi, India.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us | ZapZoom",
    description:
      "Get in touch with ZapZoom for a free marketing audit. Contact us for Meta Ads, Google Ads, SEO, and Video Editing services.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-12 bg-gradient-to-br from-white via-gray-50 to-primary/5 overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-text leading-tight mb-4">
                Let&apos;s Talk Growth
              </h1>
              <p className="text-lg text-muted">
                Ready to scale your business? Get in touch for a free marketing audit.
              </p>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
