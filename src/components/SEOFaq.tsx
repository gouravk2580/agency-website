"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "How long does SEO take to show results?", answer: "SEO is a long-term strategy. Most clients see noticeable improvements in 3-6 months, with significant results in 6-12 months." },
  { question: "Do you guarantee first-page rankings?", answer: "No ethical SEO agency can guarantee rankings. However, our proven strategies have consistently placed clients on page 1 for their target keywords." },
  { question: "What industries do you specialize in?", answer: "We work across e-commerce, SaaS, healthcare, education, real estate, and more. Our strategies are adaptable to any industry." },
  { question: "How do you measure SEO success?", answer: "We track organic traffic, keyword rankings, conversion rates, backlink growth, and domain authority." },
  { question: "Do you provide content creation?", answer: "Yes, our SEO service includes content strategy, creation, and optimization for target keywords." },
  { question: "What is technical SEO?", answer: "Technical SEO involves optimizing your website's infrastructure to help search engines crawl, index, and render your content effectively. This includes site speed, mobile-friendliness, structured data, and security." },
  { question: "How often do you report on SEO performance?", answer: "We provide comprehensive monthly reports with detailed insights on rankings, traffic, conversions, and recommendations. You also get access to a real-time dashboard." },
  { question: "Do you offer local SEO services?", answer: "Yes, we specialize in local SEO including Google Business Profile optimization, local citation building, review management, and local keyword targeting." },
  { question: "What is link building and why is it important?", answer: "Link building is the process of acquiring high-quality backlinks from other websites. It's crucial because search engines use backlinks as a signal of your website's authority and trustworthiness." },
  { question: "How do you stay updated with Google algorithm changes?", answer: "Our team continuously monitors industry updates, Google announcements, and algorithm changes. We adapt strategies proactively to maintain and improve rankings." },
];

export default function SEOFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white border border-border rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <span className="font-heading font-semibold text-text pr-4">{faq.question}</span>
            <ChevronDown className={`w-5 h-5 text-muted flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
          </button>
          {openFaq === i && (
            <div className="px-5 pb-5 text-muted leading-relaxed">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
