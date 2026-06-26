import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ZapZoom's terms of service governing the use of our website and services.",
  alternates: {
    canonical: "https://zapzoom.in/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-primary/5">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text">
              Terms of Service
            </h1>
            <p className="text-muted mt-4">Last updated: June 2024</p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the ZapZoom website and services, you accept and agree
                to be bound by these Terms of Service. If you do not agree to these terms,
                please do not use our services.
              </p>

              <h2>2. Services</h2>
              <p>
                ZapZoom provides performance marketing services including but not limited to
                Meta Ads management, Google Ads management, SEO services, and video editing.
                The specific scope of services will be outlined in a separate service agreement.
              </p>

              <h2>3. Client Responsibilities</h2>
              <p>Clients are responsible for:</p>
              <ul>
                <li>Providing accurate and timely information required for service delivery</li>
                <li>Approving campaigns, creatives, and strategies within agreed timelines</li>
                <li>Maintaining adequate ad spend budgets as agreed upon</li>
                <li>Ensuring compliance with platform advertising policies</li>
              </ul>

              <h2>4. Payment Terms</h2>
              <p>
                Payment terms will be outlined in the service agreement. All payments are due
                as specified in the agreed invoice schedule. Late payments may incur additional
                charges.
              </p>

              <h2>5. Intellectual Property</h2>
              <p>
                All content, strategies, and deliverables created by ZapZoom remain the
                intellectual property of ZapZoom until full payment is received. Upon payment,
                clients receive a non-exclusive license to use deliverables.
              </p>

              <h2>6. Limitation of Liability</h2>
              <p>
                ZapZoom shall not be liable for any indirect, incidental, or consequential
                damages. Our total liability shall not exceed the fees paid for the specific
                service giving rise to the claim.
              </p>

              <h2>7. Termination</h2>
              <p>
                Either party may terminate the service agreement with 30 days written notice.
                Early termination fees may apply as specified in the service agreement.
              </p>

              <h2>8. Contact</h2>
              <p>
                For questions about these terms, contact us at zapzoomv@gmail.com or
                +91 9667169645.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
