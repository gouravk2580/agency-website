import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ZapZoom's privacy policy outlining how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-32 pb-20 bg-gradient-to-br from-dark via-dark to-primary/20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Privacy Policy
            </h1>
            <p className="text-white/60 mt-4">Last updated: June 2024</p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2>1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us when you fill out a contact form,
                subscribe to our newsletter, or engage our services. This may include your name,
                email address, phone number, company name, and marketing budget.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our services and website experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>3. Data Protection</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or
                destruction.
              </p>

              <h2>4. Third-Party Services</h2>
              <p>
                We may use third-party services such as Google Analytics, Google Tag Manager,
                Meta Pixel, and Microsoft Clarity to collect and analyze website usage data.
                These services have their own privacy policies governing the use of your information.
              </p>

              <h2>5. Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience, analyze site traffic,
                and personalize content. You can control cookie settings through your browser
                preferences.
              </p>

              <h2>6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. To
                exercise these rights, please contact us at hello@zapzoom.in.
              </p>

              <h2>7. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any
                changes by posting the new policy on this page with an updated effective date.
              </p>

              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us at
                hello@zapzoom.in or call us at +91 98765 43210.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
