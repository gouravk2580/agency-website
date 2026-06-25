import type { Metadata } from "next";
import { Poppins, Inter, Manrope } from "next/font/google";
import "./globals.css";

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
    default: "DigiAero | Performance Marketing Agency",
    template: "%s | DigiAero",
  },
  description:
    "DigiAero is a performance marketing agency specializing in Meta Ads, Google Ads, SEO, and Video Editing. We drive measurable results for businesses.",
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
  authors: [{ name: "DigiAero" }],
  creator: "DigiAero",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DigiAero",
    title: "DigiAero | Performance Marketing Agency",
    description:
      "DigiAero is a performance marketing agency specializing in Meta Ads, Google Ads, SEO, and Video Editing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiAero | Performance Marketing Agency",
    description:
      "DigiAero is a performance marketing agency specializing in Meta Ads, Google Ads, SEO, and Video Editing.",
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
      className={`${poppins.variable} ${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
