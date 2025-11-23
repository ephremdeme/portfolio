import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ephrem.dev"),
  title: {
    default: "Ephrem Demelash | Backend & Web3 Engineer",
    template: "%s | Ephrem Demelash",
  },
  description:
    "Full Stack developer pivoting to Web3—Node.js, TypeScript, microservices, liquidity automation, and DeFi infrastructure.",
  openGraph: {
    title: "Ephrem Demelash",
    description: "Backend/Full-Stack Dev pivoting to Web3 | 6+ Yrs building scalable systems.",
    url: "https://ephrem.dev",
    siteName: "Ephrem Demelash Portfolio",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Ephrem Demelash",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ephrem Demelash",
    description: "Backend/Full-Stack Dev pivoting to Web3",
    creator: "@ephremdeme",
  },
  keywords: [
    "Ephrem Demelash",
    "Web3 engineer",
    "Node.js",
    "Uniswap automation",
    "Full stack developer",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased transition-colors`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen bg-slate-950 transition-colors">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
