import type { Metadata } from "next";
import { Poppins, Inter, Manrope } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_DESCRIPTION, CONTACT_INFO } from "@/lib/constants";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ZapZoom | Performance Marketing Agency",
    template: "%s | ZapZoom",
  },
  description:
    "ZapZoom is a performance marketing agency specializing in Meta Ads, Google Ads, SEO, and Video Editing. We drive measurable results for businesses.",
  keywords: [
    "performance marketing",
    "digital marketing agency",
    "Meta Ads",
    "Google Ads",
    "SEO",
    "video editing",
    "paid advertising",
    "lead generation",
    "ROI marketing",
  ],
  authors: [{ name: "ZapZoom" }],
  creator: "ZapZoom",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ZapZoom",
    url: SITE_URL,
    title: "ZapZoom | Performance Marketing Agency",
    description:
      "ZapZoom is a performance marketing agency specializing in Meta Ads, Google Ads, SEO, and Video Editing.",
    images: [
      {
        url: "/zapzoom-logo.svg",
        width: 1200,
        height: 630,
        alt: "ZapZoom - Performance Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZapZoom | Performance Marketing Agency",
    description:
      "ZapZoom is a performance marketing agency specializing in Meta Ads, Google Ads, SEO, and Video Editing.",
    images: ["/zapzoom-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ZapZoom",
            url: SITE_URL,
            logo: `${SITE_URL}/zapzoom-logo.svg`,
            description: SITE_DESCRIPTION,
            address: {
              "@type": "PostalAddress",
              streetAddress: `${CONTACT_INFO.address.line1}, ${CONTACT_INFO.address.line2}`,
              addressLocality: CONTACT_INFO.address.city,
              postalCode: CONTACT_INFO.address.pincode,
              addressCountry: CONTACT_INFO.address.country,
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: CONTACT_INFO.phone,
              contactType: "customer service",
              email: CONTACT_INFO.email,
            },
            sameAs: [
              CONTACT_INFO.social.facebook,
              CONTACT_INFO.social.instagram,
              CONTACT_INFO.social.linkedin,
              CONTACT_INFO.social.twitter,
              CONTACT_INFO.social.youtube,
            ],
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "ZapZoom",
            url: SITE_URL,
            logo: `${SITE_URL}/zapzoom-logo.svg`,
            description: SITE_DESCRIPTION,
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: `${CONTACT_INFO.address.line1}, ${CONTACT_INFO.address.line2}`,
              addressLocality: CONTACT_INFO.address.city,
              postalCode: CONTACT_INFO.address.pincode,
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 28.6368,
              longitude: 77.2929,
            },
            telephone: CONTACT_INFO.phone,
            email: CONTACT_INFO.email,
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "10:00",
              closes: "19:00",
            },
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
