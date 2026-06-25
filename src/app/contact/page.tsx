"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  Building2,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT_INFO, BUDGET_OPTIONS, SERVICES } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  budget: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consent: z.boolean().refine((val) => val === true, "You must agree to our privacy policy"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "362982fa-ab00-4d1f-86dc-da4e036026c0",
        subject: `New Contact Form Submission from ${data.name}`,
        from_name: "ZapZoom Website",
        ...data,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-12 bg-gradient-to-br from-dark via-dark to-primary/20 overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-4">
                Let&apos;s Talk Growth
              </h1>
              <p className="text-lg text-white/70">
                Ready to scale your business? Get in touch for a free marketing audit.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info Card */}
              <div className="lg:col-span-1">
                <div className="bg-dark text-white rounded-2xl p-8 sticky top-24">
                  <h2 className="text-xl font-heading font-semibold mb-6">Contact Info</h2>

                  <div className="space-y-6">
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="flex items-center gap-4 text-white/80 hover:text-white transition-colors"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Email</p>
                        <p className="text-sm">{CONTACT_INFO.email}</p>
                      </div>
                    </a>

                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-4 text-white/80 hover:text-white transition-colors"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Phone</p>
                        <p className="text-sm">{CONTACT_INFO.phone}</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 text-white/80">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Address</p>
                        <p className="text-sm">
                          {CONTACT_INFO.address.line1}, {CONTACT_INFO.address.line2},{" "}
                          {CONTACT_INFO.address.city} - {CONTACT_INFO.address.pincode}
                        </p>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[\s+]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-white/80 hover:text-white transition-colors"
                    >
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">WhatsApp</p>
                        <p className="text-sm">{CONTACT_INFO.whatsapp}</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 text-white/80">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Working Hours</p>
                        <p className="text-sm">Mon - Sat: 10:00 AM - 7:00 PM</p>
                        <p className="text-xs text-white/40">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <div className="bg-surface rounded-2xl p-12 text-center border border-border">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-text mb-3">
                      Thank You!
                    </h2>
                    <p className="text-muted mb-6">
                      We&apos;ve received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          {...register("name")}
                          className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          {...register("email")}
                          className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          {...register("phone")}
                          className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="+91 9667169645"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                        )}
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          {...register("company")}
                          className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Your Company"
                        />
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          Monthly Budget
                        </label>
                        <select
                          {...register("budget")}
                          className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        >
                          <option value="">Select budget range</option>
                          {BUDGET_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Service */}
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          Service Interested In
                        </label>
                        <select
                          {...register("service")}
                          className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        >
                          <option value="">Select a service</option>
                          {SERVICES.map((s) => (
                            <option key={s.slug} value={s.slug}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your project and goals..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Consent */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        {...register("consent")}
                        className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
                      />
                      <label className="text-sm text-muted">
                        I agree to the{' '}
                        <a href="/privacy-policy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>{' '}
                        and consent to being contacted regarding my inquiry. *
                      </label>
                    </div>
                    {errors.consent && (
                      <p className="text-sm text-red-500">{errors.consent.message}</p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="h-96 bg-surface">
          <iframe
            src={CONTACT_INFO.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </section>

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[\s+]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>

        {/* Sticky Call Button */}
        <a
          href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors hover:scale-110"
          aria-label="Call us"
        >
          <Phone className="w-7 h-7 text-white" />
        </a>
      </main>
      <Footer />
    </>
  );
}
