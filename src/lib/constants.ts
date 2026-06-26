// ===== Site Info =====
export const SITE_NAME = "ZapZoom";
export const SITE_URL = "https://zapzoom.in";
export const SITE_DESCRIPTION =
  "ZapZoom is a performance marketing agency specializing in Meta Ads, Google Ads, SEO, and Video Editing. We drive measurable results for businesses.";

// ===== Navigation =====
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "SEO", href: "/services/seo" },
      { label: "Video Editing", href: "/services/video-editing" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ===== Services =====
export const SERVICES = [
  {
    title: "Meta Ads",
    slug: "meta-ads",
    description:
      "Strategic Facebook & Instagram advertising campaigns that deliver measurable results and maximize your return on ad spend.",
    icon: "Megaphone",
    features: [
      "Facebook & Instagram Ads",
      "Lead Generation",
      "Remarketing Campaigns",
      "Conversion Optimization",
      "E-commerce Ads",
      "A/B Testing",
    ],
  },
  {
    title: "Google Ads",
    slug: "google-ads",
    description:
      "Data-driven Google Ads campaigns that put your business in front of high-intent customers ready to buy.",
    icon: "Search",
    features: [
      "Search Ads",
      "Display Ads",
      "Shopping Ads",
      "YouTube Ads",
      "App Campaigns",
      "Performance Max",
    ],
  },
  {
    title: "SEO",
    slug: "seo",
    description:
      "Comprehensive SEO strategies that improve your organic visibility and drive sustainable long-term traffic growth.",
    icon: "TrendingUp",
    features: [
      "Technical SEO",
      "On-Page Optimization",
      "Link Building",
      "Content Strategy",
      "Local SEO",
      "Analytics & Reporting",
    ],
  },
  {
    title: "Video Editing",
    slug: "video-editing",
    description:
      "Professional video editing services that transform raw footage into compelling content that captivates your audience.",
    icon: "Video",
    features: [
      "Social Media Videos",
      "Ad Creatives",
      "Brand Videos",
      "Motion Graphics",
      "Color Grading",
      "Sound Design",
    ],
  },
];

// ===== Statistics =====
export const STATS = [
  { value: 150, suffix: "+", label: "Clients Served" },
  { value: 50, prefix: "₹", suffix: "L+", label: "Ad Spend Managed" },
  { value: 10, suffix: "M+", label: "Leads Generated" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

// ===== Why Choose Us =====
export const WHY_CHOOSE_US = [
  {
    title: "Data-Driven Approach",
    description:
      "Every decision is backed by data. We analyze, test, and optimize continuously to maximize your ROI.",
    icon: "BarChart3",
  },
  {
    title: "Transparent Reporting",
    description:
      "Real-time dashboards and detailed monthly reports keep you informed about every aspect of your campaigns.",
    icon: "Eye",
  },
  {
    title: "Dedicated Team",
    description:
      "A dedicated account manager and specialist team work exclusively on your brand's success.",
    icon: "Users",
  },
  {
    title: "Proven Results",
    description:
      "Track record of delivering 3-5x ROAS across industries with our performance marketing strategies.",
    icon: "Award",
  },
];

// ===== Process Steps =====
export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery & Audit",
    description:
      "We deep-dive into your business, competitors, and current marketing efforts to identify opportunities.",
  },
  {
    step: 2,
    title: "Strategy Development",
    description:
      "Custom marketing strategy tailored to your goals, budget, and target audience.",
  },
  {
    step: 3,
    title: "Campaign Setup",
    description:
      "Expert campaign setup with proper tracking, audiences, and creative assets.",
  },
  {
    step: 4,
    title: "Launch & Optimize",
    description:
      "Launch campaigns and continuously optimize for better performance and lower costs.",
  },
  {
    step: 5,
    title: "Scale & Report",
    description:
      "Scale winning campaigns and provide detailed reports with actionable insights.",
  },
];

// ===== Testimonials =====
export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    company: "TechVentures India",
    role: "CEO",
    content:
      "ZapZoom transformed our digital presence. Our leads increased by 300% in just 3 months. Their data-driven approach is unmatched.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "StyleHub Fashion",
    role: "Marketing Director",
    content:
      "The ROI on our Meta Ads campaigns went from 2x to 6x within the first quarter. Highly recommend their team.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "GreenLeaf Organics",
    role: "Founder",
    content:
      "Professional, transparent, and results-oriented. ZapZoom helped us scale from a small startup to a recognized brand.",
    rating: 5,
  },
];

// ===== Industries =====
export const INDUSTRIES = [
  { name: "E-commerce", icon: "ShoppingBag" },
  { name: "SaaS", icon: "Cloud" },
  { name: "Healthcare", icon: "Heart" },
  { name: "Education", icon: "GraduationCap" },
  { name: "Real Estate", icon: "Building2" },
  { name: "Finance", icon: "DollarSign" },
  { name: "Hospitality", icon: "Hotel" },
  { name: "Automotive", icon: "Car" },
];

// ===== FAQ =====
export const FAQS = [
  {
    question: "What is performance marketing?",
    answer:
      "Performance marketing is a digital marketing strategy where advertisers pay only when a specific action is completed, such as a click, lead, or sale. It's results-focused and measurable.",
  },
  {
    question: "How quickly can I see results?",
    answer:
      "Most clients see initial results within the first 2-4 weeks. However, optimal results typically take 3-6 months of consistent optimization and scaling.",
  },
  {
    question: "What is your minimum ad spend?",
    answer:
      "We recommend a minimum monthly ad spend of ₹50,000 for Meta Ads and ₹30,000 for Google Ads to achieve meaningful results.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes! We work with businesses of all sizes, from startups to enterprises. Our strategies are customized to fit your budget and goals.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We track key metrics including ROAS, CPA, CTR, conversion rates, and lifetime value. You'll have access to real-time dashboards for full transparency.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have experience across e-commerce, SaaS, healthcare, education, real estate, finance, and more. Our strategies are adaptable to any industry.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "We work on a month-to-month basis with no long-term contracts. We believe in earning your business through results, not binding agreements.",
  },
  {
    question: "Do you provide content creation?",
    answer:
      "Yes, we offer comprehensive creative services including ad copy, graphic design, video editing, and landing page design as part of our packages.",
  },
];

// ===== Footer Links =====
export const FOOTER_SERVICES = [
  { label: "Meta Ads", href: "/services/meta-ads" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "SEO", href: "/services/seo" },
  { label: "Video Editing", href: "/services/video-editing" },
];

export const FOOTER_COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export const FOOTER_LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

// ===== Contact Info =====
export const CONTACT_INFO = {
  email: "zapzoomv@gmail.com",
  phone: "+91 9667169645",
  whatsapp: "+91 9667169645",
  address: {
    line1: "R-23, Office No 1, Block-R",
    line2: "Shakarpur, Main Market, East Delhi",
    city: "New Delhi, Delhi",
    pincode: "110092",
    country: "India",
  },
  social: {
    facebook: "https://facebook.com/zapzoom",
    instagram: "https://instagram.com/zapzoom",
    linkedin: "https://linkedin.com/company/zapzoom",
    twitter: "https://twitter.com/zapzoom",
    youtube: "https://youtube.com/@zapzoom",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.2929!3d28.6368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sShakarpur%2C%20New%20Delhi%2C%20Delhi%20110092!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

// ===== Blog Categories =====
export const BLOG_CATEGORIES = [
  "All",
  "Performance Marketing",
  "Meta Ads",
  "Google Ads",
  "SEO",
  "Video Marketing",
  "Case Studies",
  "Industry Insights",
];

// ===== Budget Options =====
export const BUDGET_OPTIONS = [
  "Less than ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹5,00,000",
  "₹5,00,000 - ₹10,00,000",
  "More than ₹10,00,000",
];
