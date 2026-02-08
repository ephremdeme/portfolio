import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ephrem.dev"),
  title: {
    default: "Ephrem Demelash | Backend Engineer",
    template: "%s | Ephrem Demelash",
  },
  description:
    "Backend engineer building distributed systems, APIs, and Web3 infrastructure. 6+ years with Node.js, Go, and Rust.",
  openGraph: {
    title: "Ephrem Demelash",
    description: "Backend engineer | Distributed systems, APIs, Web3",
    url: "https://ephrem.dev",
    siteName: "Ephrem Demelash",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Ephrem Demelash - Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ephrem Demelash",
    description: "Backend engineer | Distributed systems, APIs, Web3",
    creator: "@ephremdeme",
  },
  keywords: [
    "Ephrem Demelash",
    "Backend engineer",
    "Node.js",
    "Go",
    "Rust",
    "Distributed systems",
    "Web3",
    "API development",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
