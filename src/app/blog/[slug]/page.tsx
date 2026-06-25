"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  User,
  Tag,
  Share2,
  LinkIcon,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Blog post data (in production, this would come from a CMS)
const blogPosts: Record<
  string,
  {
    title: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    content: string[];
    tableOfContents: string[];
  }
> = {
  "meta-ads-strategy-2024": {
    title: "The Ultimate Meta Ads Strategy for 2024",
    category: "Meta Ads",
    author: "ZapZoom Team",
    date: "Jun 15, 2024",
    readTime: "8 min read",
    tableOfContents: [
      "Understanding the Meta Ads Landscape",
      "Setting Up Your Campaign Structure",
      "Audience Targeting Strategies",
      "Creative Best Practices",
      "Budget Allocation & Bidding",
      "Measuring & Optimizing Performance",
    ],
    content: [
      "## Understanding the Meta Ads Landscape",
      "The Meta advertising ecosystem has evolved significantly in 2024. With the rise of AI-powered targeting and creative optimization, businesses have more opportunities than ever to reach their ideal customers. However, the competition has also intensified, making it crucial to have a well-defined strategy.",
      "Meta's advertising platform now includes Facebook, Instagram, Messenger, and the Audience Network. Each platform offers unique opportunities for reaching different audience segments. Understanding where your audience spends their time is the first step to creating an effective campaign.",
      "## Setting Up Your Campaign Structure",
      "A well-organized campaign structure is the foundation of successful Meta Ads. We recommend using the following hierarchy:",
      "**Campaign Level**: Define your objective (awareness, consideration, or conversion). Each campaign should have a single, clear objective.",
      "**Ad Set Level**: Target specific audience segments, set budgets, and choose placements. Each ad set should target one distinct audience.",
      "**Ad Level**: Create your ad creatives and copy. Test multiple variations within each ad set.",
      "This structure allows Meta's algorithm to optimize effectively while giving you clear insights into what's working.",
      "## Audience Targeting Strategies",
      "Meta offers powerful targeting options that allow you to reach precisely the right people:",
      "**Core Audiences**: Target based on demographics, interests, and behaviors. Start broad and narrow down based on performance data.",
      "**Custom Audiences**: Retarget website visitors, app users, or existing customers. These warm audiences typically convert at 3-5x higher rates.",
      "**Lookalike Audiences**: Find new people who resemble your best customers. We recommend starting with 1-2% lookalikes for the best balance of reach and relevance.",
      "The key is to layer your targeting strategically. Don't over-segment too early — give Meta's algorithm room to optimize.",
      "## Creative Best Practices",
      "In 2024, creative quality is the #1 factor determining ad success. Here are our proven guidelines:",
      "**Video First**: Video ads consistently outperform static images. Aim for 15-30 second videos with captions (85% of users watch without sound).",
      "**Hook in 3 Seconds**: The first 3 seconds determine whether someone keeps watching. Start with a bold statement, question, or visual hook.",
      "**Social Proof**: Include testimonials, reviews, or user-generated content. Authenticity drives trust and conversions.",
      "**Clear CTA**: Every ad should have one clear call-to-action. Don't confuse users with multiple asks.",
      "**Mobile-Optimized**: Design for vertical format (4:5 or 9:16). Most Meta usage is on mobile devices.",
      "## Budget Allocation & Bidding",
      "Smart budget allocation can make or break your campaigns:",
      "**Start with Testing**: Allocate 20-30% of your budget to testing new audiences, creatives, and strategies.",
      "**Scale Winners**: Once you identify winning combinations, gradually increase budgets by 20-30% every 3-5 days.",
      "**Use Campaign Budget Optimization (CBO)**: Let Meta distribute budget across ad sets based on performance potential.",
      "**Set Proper Bid Strategies**: Use lowest cost for broad campaigns and cost caps for performance-guaranteed campaigns.",
      "## Measuring & Optimizing Performance",
      "Data-driven optimization is what separates good campaigns from great ones:",
      "**Key Metrics to Track**: ROAS (Return on Ad Spend), CPA (Cost per Acquisition), CTR (Click-Through Rate), and Conversion Rate.",
      "**Attribution Windows**: Use 7-day click, 1-day view attribution for most e-commerce campaigns. Adjust based on your sales cycle.",
      "**A/B Testing**: Test one variable at a time — creative, audience, placement, or copy. Run tests for at least 7 days before drawing conclusions.",
      "**Weekly Optimization**: Review performance weekly, pause underperformers, scale winners, and test new variations continuously.",
      "By following this framework, you'll be well on your way to building a high-performing Meta Ads strategy in 2024. Remember, the key is consistent testing, learning, and optimizing.",
    ],
  },
  "google-ads-vs-meta-ads": {
    title: "Google Ads vs Meta Ads: Which is Right for Your Business?",
    category: "Performance Marketing",
    author: "ZapZoom Team",
    date: "Jun 10, 2024",
    readTime: "12 min read",
    tableOfContents: [
      "Understanding the Platforms",
      "Targeting Capabilities Compared",
      "Ad Formats & Creatives",
      "Cost Structure & Budgeting",
      "When to Use Google Ads",
      "When to Use Meta Ads",
      "The Combined Strategy Approach",
    ],
    content: [
      "## Understanding the Platforms",
      "Google Ads and Meta Ads are the two giants of digital advertising. While both can drive incredible results, they work fundamentally differently. Google Ads captures **existing demand** — people actively searching for solutions. Meta Ads creates **new demand** — reaching people who didn't know they needed your product.",
      "Understanding this core difference is the key to choosing the right platform. A business selling emergency plumbing services needs Google Ads. A DTC fashion brand building awareness needs Meta Ads. Most businesses benefit from both, but the ratio depends on your goals.",
      "## Targeting Capabilities Compared",
      "**Google Ads Targeting** focuses on intent. You target people based on what they're searching for right now. Keywords, search terms, and audience signals drive your targeting. It's like putting up a billboard on the exact highway your customers are driving on.",
      "**Meta Ads Targeting** focuses on demographics, interests, and behaviors. You can target 25-34 year old women in Bangalore who are interested in sustainable fashion and have engaged with competitor pages. The granularity is unmatched.",
      "For B2B companies, Google Ads often wins because purchase intent is clearer. For consumer brands, Meta Ads excels at building awareness and reaching niche audiences at scale.",
      "## Ad Formats & Creatives",
      "Google Ads offers **Search** (text ads), **Display** (banner ads across websites), **Shopping** (product listings), and **YouTube** (video ads). Search ads are high-intent but limited in visual appeal. Display ads offer creative freedom but lower conversion rates.",
      "Meta Ads offers **Feed ads**, **Stories**, **Reels**, **Carousel**, and **Collection** ads. The visual-first approach means creative quality directly impacts performance. A single Reel ad can reach millions at a fraction of TV advertising costs.",
      "Winner for visual brands: Meta Ads. Winner for intent-driven services: Google Ads.",
      "## Cost Structure & Budgeting",
      "**Google Ads** typically has a higher CPC (Cost Per Click) because you're competing for high-intent keywords. Average CPC in India ranges from ₹5-50 for most industries. However, conversion rates are often higher because users are actively searching.",
      "**Meta Ads** generally has lower CPC (₹1-15) but may need more budget for testing creatives and audiences. The cost per result can be significantly lower for awareness campaigns, but direct conversion campaigns often need ₹50,000+ monthly to see consistent results.",
      "For tight budgets under ₹30,000/month, Google Search Ads usually deliver the best immediate ROI. For budgets above ₹1,00,000/month, splitting between both platforms maximizes results.",
      "## When to Use Google Ads",
      "Choose Google Ads when you have **high-intent keywords** in your industry. Local businesses (plumbers, lawyers, clinics) should start here. E-commerce businesses should use Shopping ads. B2B companies targeting specific solutions benefit enormously.",
      "Google Ads is also essential for **brand protection** — bidding on your own brand name prevents competitors from stealing your traffic. It's also the fastest channel for time-sensitive promotions and product launches.",
      "## When to Use Meta Ads",
      "Choose Meta Ads when you need to **build awareness** for a new product or brand. DTC brands, lifestyle products, and visual businesses thrive here. Retargeting website visitors with Meta pixel creates powerful remarketing funnels.",
      "Meta Ads is also superior for **Lookalike Audiences** — finding new customers who resemble your best existing ones. If your product benefits from visual storytelling, demonstrations, or social proof, Meta is your platform.",
      "## The Combined Strategy Approach",
      "The most successful brands use both platforms together. Here's our recommended split: use **Google Ads for bottom-funnel** (high-intent searches, brand protection, remarketing) and **Meta Ads for top and mid-funnel** (awareness, consideration, retargeting).",
      "Start with 70/30 split favoring whichever platform aligns with your immediate goal. If you need leads now, lean Google. If you're building for the future, lean Meta. Review monthly and adjust based on actual ROAS data from both platforms.",
    ],
  },
  "seo-checklist-2024": {
    title: "The Complete SEO Checklist for 2024",
    category: "SEO",
    author: "ZapZoom Team",
    date: "Jun 5, 2024",
    readTime: "15 min read",
    tableOfContents: [
      "Technical SEO Foundation",
      "On-Page Optimization",
      "Content Strategy & Planning",
      "Link Building Strategies",
      "Local SEO Essentials",
      "Core Web Vitals & Page Experience",
      "AI's Impact on Search Rankings",
    ],
    content: [
      "## Technical SEO Foundation",
      "Before creating a single piece of content, ensure your technical SEO foundation is solid. Start with a comprehensive **site audit** using tools like Screaming Frog or Ahrefs. Check for crawl errors, broken links, redirect chains, and duplicate content.",
      "Ensure your **XML sitemap** is submitted to Google Search Console and Bing Webmaster Tools. Your robots.txt should allow crawling of important pages while blocking thin or duplicate content. Implement **canonical tags** on every page to avoid duplicate content issues.",
      "Structure your site with a logical **URL hierarchy**: homepage → category pages → individual pages. Use descriptive, keyword-rich URLs without parameters or excessive folders. Each page should be reachable within 3 clicks from the homepage.",
      "## On-Page Optimization",
      "Every page needs a unique **title tag** (50-60 characters) and **meta description** (150-160 characters) containing your primary keyword. Title tags are the single most important on-page ranking factor.",
      "Use **header tags** (H1, H2, H3) in a logical hierarchy. Your H1 should contain the primary keyword and match user search intent. H2s cover subtopics, H3s provide detail. This structure helps both users and search engines understand your content.",
      "Optimize images with **descriptive file names** (blue-running-shoes.jpg not IMG_001.jpg), **alt text** that describes the image, and compress all images to under 100KB without visible quality loss. Use WebP format where supported.",
      "Internal linking is crucial. Link to 3-5 relevant pages from every article using **descriptive anchor text**. This distributes page authority and helps search engines understand the relationship between your pages.",
      "## Content Strategy & Planning",
      "Google's Helpful Content Update rewards content written for humans first, algorithms second. Create **comprehensive, expert-level content** that answers every question a searcher might have about your topic.",
      "Use the **topic cluster model**: create a pillar page (comprehensive guide) and link it to cluster pages (specific subtopics). For example, a pillar page on \"Digital Marketing\" links to clusters on \"Meta Ads,\" \"Google Ads,\" \"SEO,\" and \"Video Marketing.\"",
      "Research **search intent** for every keyword you target. Is the searcher looking to buy (transactional), learn (informational), compare (commercial), or navigate (navigational)? Match your content format to the intent.",
      "Update existing content quarterly. Add new sections, refresh statistics, and improve outdated advice. Google favors **fresh, accurate content** — regularly updated pages often outrank newer competitors.",
      "## Link Building Strategies",
      "Backlinks remain a top-3 ranking factor. Focus on **quality over quantity** — one link from a high-authority industry site is worth more than 100 low-quality directory links.",
      "**Guest posting** on reputable industry blogs builds authority and referral traffic. Pitch unique, data-driven angles rather than generic content. Include a natural link back to a relevant page on your site.",
      "**Digital PR** is the most scalable link building strategy. Create original research, surveys, or data studies that journalists want to cite. A well-executed PR campaign can generate 50+ high-quality backlinks in a single week.",
      "Monitor your **backlink profile** monthly using Ahrefs or SEMrush. Disavow toxic links from spammy sites that could harm your rankings. Reclaim unlinked brand mentions by reaching out and requesting a link.",
      "## Local SEO Essentials",
      "For businesses serving specific geographic areas, **Google Business Profile** optimization is non-negotiable. Complete every field, add high-quality photos weekly, and post updates regularly.",
      "Collect and respond to **Google reviews** consistently. Businesses with 50+ reviews with 4.5+ rating dominate the local map pack. Respond to every review — positive and negative — to show engagement.",
      "Build **local citations** on platforms like JustDial, Sulekha, IndiaMART, and Yellow Pages. Ensure your NAP (Name, Address, Phone) is identical across every listing. Inconsistencies confuse search engines and hurt rankings.",
      "## Core Web Vitals & Page Experience",
      "Google uses **Core Web Vitals** as a ranking signal. Focus on these three metrics: **LCP** (Largest Contentful Paint) under 2.5 seconds, **FID** (First Input Delay) under 100ms, and **CLS** (Cumulative Layout Shift) under 0.1.",
      "Improve LCP by optimizing images, using a CDN, and enabling server-side caching. Reduce FID by minimizing JavaScript execution time and deferring non-critical scripts. Fix CLS by setting explicit dimensions on images and ads.",
      "Use Google PageSpeed Insights and Lighthouse to measure your scores. Aim for **90+ on mobile** — mobile performance matters more since Google uses mobile-first indexing for all websites.",
      "## AI's Impact on Search Rankings",
      "Google's AI algorithms (RankBrain, BERT, MUM) are getting smarter at understanding context and nuance. **Keyword stuffing** is dead. Focus on natural, comprehensive content that genuinely helps users.",
      "AI Overviews (SGE) are changing how search results appear. Optimize for **featured snippets** by providing clear, concise answers at the top of your content. Use FAQ sections and structured data to increase your chances of appearing in AI-generated summaries.",
      "The future of SEO is about **building topical authority**. Become the definitive source for your niche by creating deep, interconnected content. Brands that establish expertise will thrive; generic content farms will continue to decline.",
    ],
  },
  "video-marketing-trends": {
    title: "Video Marketing Trends You Can't Ignore in 2024",
    category: "Video Marketing",
    author: "ZapZoom Team",
    date: "May 28, 2024",
    readTime: "6 min read",
    tableOfContents: [
      "Short-Form Content Dominance",
      "AI-Powered Video Editing",
      "Interactive & Shoppable Videos",
      "Live Commerce & Streaming",
      "Content Repurposing Strategy",
      "Measuring Video Performance",
    ],
    content: [
      "## Short-Form Content Dominance",
      "Short-form video is no longer optional. Instagram Reels, YouTube Shorts, and TikTok have redefined how brands communicate. Videos under 60 seconds generate **2.5x more engagement** than longer formats across platforms.",
      "The key to short-form success is the **3-second hook**. Viewers decide instantly whether to keep watching or scroll. Start with a bold statement, surprising visual, or relatable problem statement. Skip the branded intro — earn attention before asking for it.",
      "For Indian brands, short-form video is especially powerful. India has the highest short-form video consumption globally, with users spending an average of 45 minutes daily on Reels and Shorts. If you're not creating short-form content, you're invisible to millions of potential customers.",
      "## AI-Powered Video Editing",
      "AI tools are transforming video production. Platforms like **CapCut**, **Descript**, and **Runway** can auto-generate captions, remove background noise, cut filler words, and even create rough edits from raw footage.",
      "AI-generated subtitles are essential — **85% of social media videos are watched without sound**. Tools can now generate accurate captions in Hindi, English, and regional languages in seconds, making your content accessible to India's multilingual audience.",
      "Budget video production that once cost ₹50,000 can now be done for ₹5,000-10,000 with AI assistance. This democratization means even small businesses can produce professional-quality video content consistently.",
      "## Interactive & Shoppable Videos",
      "Interactive video features — polls, quizzes, clickable hotspots, and choose-your-own-adventure formats — are driving **2x higher engagement** rates than passive viewing. Instagram's product tagging in Reels lets viewers shop directly from videos.",
      "**Shoppable videos** are transforming e-commerce. Viewers can tap on products in a video to see pricing, reviews, and purchase without leaving the app. This reduces friction between discovery and purchase, boosting conversion rates by 30-40%.",
      "YouTube's new shopping features allow creators to tag products directly in videos, creating a seamless path from content to commerce. Brands that integrate shoppable video into their strategy will capture impulse purchases at unprecedented scale.",
      "## Live Commerce & Streaming",
      "Live commerce is projected to reach ₹30,000 crore in India by 2025. **Instagram Live Shopping** and **YouTube Live** allow brands to showcase products in real-time, answer questions, and drive immediate purchases.",
      "The secret to successful live commerce is **preparation and promotion**. Announce your live session 48 hours in advance across all channels. Have a clear agenda, product lineup, and exclusive live-only offers to incentivize viewership.",
      "Even if live commerce isn't your primary channel, regular live streams build **community and trust**. Behind-the-scenes tours, Q&A sessions, and product reveals humanize your brand in ways pre-recorded content cannot.",
      "## Content Repurposing Strategy",
      "Smart brands create once and distribute everywhere. A single **30-minute YouTube video** can become: 5-8 short-form clips, 10+ quote graphics, 1 blog post, a podcast episode, 5 tweet threads, and an email newsletter.",
      "The **repurposing pyramid** works like this: start with long-form content (webinar, podcast, YouTube video), extract key insights for short-form clips, pull quotes for social graphics, and compile takeaways for blog posts and newsletters.",
      "This approach maximizes ROI on content production while maintaining a consistent presence across platforms. A single content shoot can fuel your entire month's marketing across all channels.",
      "## Measuring Video Performance",
      "Stop obsessing over view counts. **Watch time and completion rate** are the metrics that matter. A video with 1,000 views and 80% completion rate outperforms one with 10,000 views and 10% completion.",
      "Track **saves and shares** as your primary engagement metrics. Saves indicate high-value content that users want to revisit. Shares extend your organic reach exponentially — each share exposes your brand to an entirely new audience.",
      "Set up proper **UTM tracking** on all video CTAs to measure downstream conversions. The true value of video marketing isn't just in engagement — it's in the leads, signups, and sales it drives to your business.",
    ],
  },
  "ecommerce-ad-strategy": {
    title: "How to Build a Profitable E-commerce Ad Strategy",
    category: "Case Studies",
    author: "ZapZoom Team",
    date: "May 20, 2024",
    readTime: "10 min read",
    tableOfContents: [
      "Product Feed Optimization",
      "Full-Funnel Campaign Structure",
      "Dynamic Remarketing Campaigns",
      "Creative Strategy for E-commerce",
      "Scaling Profitably",
      "Measurement & Attribution",
    ],
    content: [
      "## Product Feed Optimization",
      "Your product feed is the foundation of e-commerce advertising. A well-optimized feed with **high-quality images, accurate titles, and detailed descriptions** can improve your ROAS by 30-50% without spending an extra rupee on ads.",
      "For Google Shopping, include **primary and secondary keywords** in your product titles. Format: [Brand] + [Product Type] + [Key Attribute] + [Color/Size]. Example: \"Nike Air Max Running Shoes - Black - Size 10\".",
      "On Meta, use **Catalog Sales campaigns** with a properly configured product catalog. Enable dynamic product ads to automatically show users the exact products they viewed on your website. This retargeting format consistently delivers 4-8x ROAS for our clients.",
      "Update your feed daily. Out-of-stock products, wrong prices, or inaccurate descriptions erode trust and waste ad spend. Use feed management tools like **DataFeedWatch** or **GoDataFeed** for automated optimization.",
      "## Full-Funnel Campaign Structure",
      "A profitable e-commerce ad strategy requires **three funnel layers** working together. Each layer targets users at different stages of the buying journey.",
      "**Top of Funnel (TOF)**: Build awareness with broad audience targeting, video ads, and carousel showcasing your best sellers. Budget allocation: 20-30% of total spend. Goal: reach and website traffic.",
      "**Middle of Funnel (MOF)**: Retarget website visitors, product page viewers, and social media engagers. Use dynamic product ads showing exactly what they viewed. Budget: 30-40%. Goal: add to cart and initiate checkout.",
      "**Bottom of Funnel (BOF)**: Retarget cart abandoners and high-intent users with urgency-driven ads — limited stock, discount codes, free shipping. Budget: 30-40%. Goal: purchases and upsells.",
      "## Dynamic Remarketing Campaigns",
      "Dynamic remarketing is the **highest-ROI campaign type** in e-commerce advertising. It automatically shows users the exact products they browsed, along with similar items they might like.",
      "Set up **audience segments** based on user behavior: product viewers (1-7 day window), cart abandoners (1-3 day window), and past purchasers (30-90 day window for cross-sell). Each segment needs different messaging and offers.",
      "Cart abandoners respond best to **incentive-based messaging**: \"Still thinking about it? Get 10% off today only.\" Product viewers respond to social proof: \"See why 500+ customers love this product.\" Past purchasers respond to new arrivals and complementary products.",
      "Allocate at least 40% of your Meta Ads budget to dynamic remarketing. Our clients consistently see **6-10x ROAS** on these campaigns compared to 2-3x on prospecting campaigns.",
      "## Creative Strategy for E-commerce",
      "**User-generated content (UGC)** outperforms polished brand creative by 40% in e-commerce ads. Invest in customer review videos, unboxing content, and real customer testimonials.",
      "Create a **creative testing framework**: test 3-5 new creatives every week. Rotate between formats — static images, carousels, short-form video, and UGC-style content. Kill underperformers within 3-5 days and scale winners.",
      "Product photography matters enormously. Invest in **lifestyle shots** (product in use), **flat lay compositions**, and **360-degree views**. For fashion and accessories, model shots outperform product-only shots by 25%.",
      "## Scaling Profitably",
      "The biggest mistake in e-commerce advertising is **scaling too fast**. Increasing budgets by more than 20% every 3-5 days disrupts Meta's learning phase and can tank your ROAS.",
      "Use the **20% rule**: never increase a campaign budget by more than 20% at a time. After each increase, wait 3-5 days to assess impact before scaling further. This gradual approach maintains algorithmic stability.",
      "Expand horizontally once you've maximized vertical scaling. Launch campaigns targeting new audiences, new geographies, or new product categories rather than pumping more money into saturated campaigns.",
      "## Measurement & Attribution",
      "**Multi-touch attribution** is essential for e-commerce. A customer might discover you on Instagram, research on Google, and purchase after a retargeting ad. Last-click attribution undervalues your upper-funnel campaigns.",
      "Set up **Google Analytics 4** with proper e-commerce tracking, Meta Pixel with Conversions API (server-side tracking), and Google Ads conversion tracking. Cross-reference data weekly to identify discrepancies.",
      "Focus on **Customer Lifetime Value (CLV)**, not just first-purchase ROAS. A customer acquired at ₹500 CPA who makes 5 purchases worth ₹10,000 is far more valuable than one acquired at ₹200 who never returns. Optimize for long-term profitability, not just initial ROAS.",
    ],
  },
  "local-seo-guide": {
    title: "Local SEO: Dominate Your Local Market",
    category: "SEO",
    author: "ZapZoom Team",
    date: "May 15, 2024",
    readTime: "7 min read",
    tableOfContents: [
      "Google Business Profile Mastery",
      "Local Citations & Directory Listings",
      "Review Generation Strategy",
      "Local Content & Landing Pages",
      "Map Pack Ranking Factors",
      "Measuring Local SEO Success",
    ],
    content: [
      "## Google Business Profile Mastery",
      "Your **Google Business Profile** (GBP) is the most important asset in local SEO. It determines whether you appear in the Local Pack (the map with 3 businesses) — which captures **42% of all local searches**.",
      "Complete every section of your profile: business name, category (primary + secondary), description (750 characters with keywords), hours, attributes, services, and products. Businesses with complete profiles get **7x more clicks** than incomplete ones.",
      "Post weekly updates on your GBP — offers, events, news, or tips. Google rewards active profiles with better visibility. Add new photos every week: storefront, interior, team, products. Profiles with 100+ photos get **520% more calls** than average.",
      "Use **Google Posts** to share offers and updates directly in search results. These posts appear alongside your listing and can drive immediate action — book, call, or visit your website.",
      "## Local Citations & Directory Listings",
      "Local citations are online mentions of your business on directories, websites, and apps. They confirm your business exists and help search engines verify your location and contact information.",
      "In India, prioritize these platforms: **JustDial**, **Sulekha**, **IndiaMART**, **Yellow Pages**, **Google Business Profile**, and **Facebook Business**. Ensure your NAP (Name, Address, Phone number) is **identical** across every listing — even small differences (\"St.\" vs \"Street\") can confuse search engines.",
      "Aim for **50+ consistent citations** across relevant platforms. Use tools like **Moz Local** or **BrightLocal** to audit your citations and identify inconsistencies. Fix any duplicates or incorrect listings immediately.",
      "Industry-specific directories matter too. A restaurant should be on Zomato and Swiggy. A clinic should be on Practo. A real estate business should be on 99acres and MagicBricks. These niche citations carry more weight than general directories.",
      "## Review Generation Strategy",
      "Reviews are the **#1 local SEO ranking factor** and the #1 factor influencing consumer choice. Businesses with 50+ reviews and 4.5+ star rating dominate their local markets.",
      "Create a **systematic review request process**: send a follow-up email or WhatsApp message 24 hours after service delivery with a direct link to your Google review page. Make it easy — one click to leave a review.",
      "Respond to **every review** within 24 hours. Thank positive reviewers by name and mention specific details of their experience. For negative reviews, acknowledge the issue, apologize, and offer to resolve it offline. This shows potential customers you care.",
      "Never buy fake reviews. Google's algorithm detects patterns and penalizes businesses with suspicious review activity. **Authentic reviews** at a slower pace are far more valuable than a sudden flood of 5-star reviews.",
      "## Local Content & Landing Pages",
      "Create **location-specific landing pages** for each area you serve. A plumber in Bangalore should have pages for \"Plumber in Koramangala,\" \"Plumber in HSR Layout,\" \"Plumber in Indiranagar,\" etc.",
      "Include **locally relevant content** on these pages: nearby landmarks, area-specific services, local customer testimonials, and Google Maps embed. This signals to Google that you're genuinely relevant to that specific location.",
      "Blog about **local topics**: community events, area guides, local business partnerships, and neighborhood news. This content builds topical authority for your geographic area and attracts local backlinks naturally.",
      "## Map Pack Ranking Factors",
      "The Local Pack ranking is determined by three primary factors: **Relevance** (how well your business matches the search), **Distance** (how close you are to the searcher), and **Prominence** (how well-known and trusted your business is).",
      "While you can't control distance, you can maximize **relevance** (optimize your GBP categories, services, and content) and **prominence** (build reviews, citations, and backlinks). Consistency in all three areas determines your position.",
      "Businesses that appear in the top 3 of the Local Pack receive **70% of all local clicks**. Positions 4-10 receive just 20%. This makes local SEO one of the highest-ROI marketing investments for any location-based business.",
      "## Measuring Local SEO Success",
      "Track these metrics monthly: **GBP impressions** (how many times you appeared in search), **GBP actions** (calls, directions, website clicks), **local keyword rankings**, and **review velocity** (new reviews per month).",
      "Use **Google Search Console** to monitor which local keywords drive traffic. Use **Google Business Profile Insights** to understand how customers find you and what actions they take. Use **call tracking** to attribute phone calls to specific channels.",
      "Set quarterly benchmarks: increase GBP views by 20%, generate 10+ new reviews, and rank in the top 3 for 5 additional local keywords. Local SEO is a long-term investment — expect to see significant results within 3-6 months of consistent effort.",
    ],
  },
};

const defaultPost = {
  title: "Article Not Found",
  category: "General",
  author: "ZapZoom Team",
  date: "Jan 1, 2024",
  readTime: "5 min read",
  tableOfContents: [],
  content: ["This article could not be found. Please return to the blog to browse other articles."],
};

export default function BlogArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug] || defaultPost;
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [commentName, setCommentName] = useState("");
  const [commentMessage, setCommentMessage] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(Math.min(currentProgress, 100));

      // Update active TOC section
      const sections = document.querySelectorAll("h2");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Progress Bar */}
        <div className="fixed top-20 left-0 right-0 z-40 h-1 bg-border">
          <div
            className="h-full bg-primary transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Hero */}
        <section className="relative pt-32 pb-12 bg-gradient-to-br from-white via-gray-50 to-primary/5">
          <div className="container-custom relative z-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-text text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-sm text-muted mb-4">
                <span className="flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
                <span>{post.date}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text leading-tight mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-light" />
                </div>
                <div>
                  <p className="text-text text-sm font-medium">{post.author}</p>
                  <p className="text-muted text-xs">Published on {post.date}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Sidebar - Table of Contents */}
              <aside className="lg:col-span-1 hidden lg:block">
                <div className="sticky top-28 space-y-6">
                  {/* Table of Contents */}
                  <div className="bg-surface rounded-2xl p-6 border border-border">
                    <h3 className="font-heading font-semibold text-text mb-4 text-sm">Table of Contents</h3>
                    <nav className="space-y-2">
                      {post.tableOfContents.map((item, i) => (
                        <a
                          key={i}
                          href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          className={`block text-sm py-1 transition-colors ${
                            activeSection === i
                              ? "text-primary font-medium"
                              : "text-muted hover:text-text"
                          }`}
                        >
                          {item}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Share */}
                  <div className="bg-surface rounded-2xl p-6 border border-border">
                    <h3 className="font-heading font-semibold text-text mb-4 text-sm">Share Article</h3>
                    <div className="flex gap-3">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== "undefined" ? window.location.href : ""}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
                      >
                        <span className="text-xs font-bold">FB</span>
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${typeof window !== "undefined" ? window.location.href : ""}&text=${post.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
                      >
                        <span className="text-xs font-bold">X</span>
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== "undefined" ? window.location.href : ""}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
                      >
                        <span className="text-xs font-bold">IN</span>
                      </a>
                      <button
                        onClick={handleCopyLink}
                        className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
                      >
                        <LinkIcon className="w-4 h-4" />
                      </button>
                    </div>
                    {copied && (
                      <p className="text-xs text-accent mt-2">Link copied!</p>
                    )}
                  </div>

                  {/* Author Card */}
                  <div className="bg-surface rounded-2xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text">{post.author}</p>
                        <p className="text-xs text-muted">Marketing Team</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Expert insights from the ZapZoom marketing team on performance marketing, advertising, and growth strategies.
                    </p>
                  </div>
                </div>
              </aside>

              {/* Article Content */}
              <article className="lg:col-span-3">
                <div className="prose prose-lg max-w-none">
                  {post.content.map((block, i) => {
                    if (block.startsWith("## ")) {
                      const id = block.slice(3).toLowerCase().replace(/[^a-z0-9]+/g, "-");
                      return (
                        <h2
                          key={i}
                          id={id}
                          className="text-2xl font-heading font-bold text-text mt-12 mb-4 scroll-mt-28"
                        >
                          {block.slice(3)}
                        </h2>
                      );
                    }
                    if (block.startsWith("**") && block.endsWith("**")) {
                      return (
                        <h3 key={i} className="text-lg font-heading font-semibold text-text mt-8 mb-3">
                          {block.slice(2, -2)}
                        </h3>
                      );
                    }
                    // Handle inline bold
                    const parts = block.split(/(\*\*[^*]+\*\*)/g);
                    return (
                      <p key={i} className="text-muted leading-relaxed mb-4">
                        {parts.map((part, j) => {
                          if (part.startsWith("**") && part.endsWith("**")) {
                            return (
                              <strong key={j} className="text-text font-semibold">
                                {part.slice(2, -2)}
                              </strong>
                            );
                          }
                          return part;
                        })}
                      </p>
                    );
                  })}
                </div>

                {/* Share Buttons (Mobile) */}
                <div className="lg:hidden mt-8 pt-8 border-t border-border">
                  <h3 className="font-heading font-semibold text-text mb-4 text-sm">Share Article</h3>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== "undefined" ? window.location.href : ""}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
                    >
                      <span className="text-xs font-bold">FB</span>
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${typeof window !== "undefined" ? window.location.href : ""}&text=${post.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
                    >
                      <span className="text-xs font-bold">X</span>
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== "undefined" ? window.location.href : ""}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
                    >
                      <span className="text-xs font-bold">IN</span>
                    </a>
                    <button
                      onClick={handleCopyLink}
                      className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-muted"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="text-xl font-heading font-bold text-text mb-6 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" /> Comments
                  </h3>

                  {/* Comment Form */}
                  <div className="bg-surface rounded-2xl p-6 border border-border mb-8">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        value={commentName}
                        onChange={(e) => setCommentName(e.target.value)}
                        placeholder="Your name"
                        className="px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="email"
                        placeholder="Your email (not published)"
                        className="px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <textarea
                      value={commentMessage}
                      onChange={(e) => setCommentMessage(e.target.value)}
                      rows={4}
                      placeholder="Write your comment..."
                      className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none mb-4"
                    />
                    <button className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors">
                      Post Comment
                    </button>
                  </div>

                  {/* Sample Comments */}
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-muted" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-text">Rahul M.</span>
                          <span className="text-xs text-muted">2 days ago</span>
                        </div>
                        <p className="text-sm text-muted leading-relaxed">
                          Great article! The section on creative best practices was especially helpful. We&apos;ve been underinvesting in video content for our Meta Ads.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-muted" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-text">Sneha K.</span>
                          <span className="text-xs text-muted">5 days ago</span>
                        </div>
                        <p className="text-sm text-muted leading-relaxed">
                          Very practical tips! Would love to see a follow-up article on how to set up the campaign structure in Meta Business Suite.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="text-xl font-heading font-bold text-text mb-6">Related Articles</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Link
                      href="/blog/google-ads-vs-meta-ads"
                      className="bg-surface rounded-xl p-5 border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
                    >
                      <span className="text-xs text-muted">Performance Marketing</span>
                      <h4 className="text-lg font-heading font-semibold text-text mt-2 mb-2 group-hover:text-primary transition-colors">
                        Google Ads vs Meta Ads: Which is Right for Your Business?
                      </h4>
                      <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        Read More <ChevronRight className="w-4 h-4" />
                      </span>
                    </Link>
                    <Link
                      href="/blog/seo-checklist-2024"
                      className="bg-surface rounded-xl p-5 border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
                    >
                      <span className="text-xs text-muted">SEO</span>
                      <h4 className="text-lg font-heading font-semibold text-text mt-2 mb-2 group-hover:text-primary transition-colors">
                        The Complete SEO Checklist for 2024
                      </h4>
                      <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        Read More <ChevronRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/5 text-text">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our strategies can help you achieve similar results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all hover:shadow-lg"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
