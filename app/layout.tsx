import type { Metadata, Viewport } from "next";
import React from "react";
import { ReactLenis } from "lenis/react";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavigationFrame from "@/components/navigation";
import Footer from "@/components/footer";
import { TopBanner } from "@/components/top-banner";
import { site } from "@/lib/site";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const metadata: Metadata = {
  metadataBase: new URL(productionHost ? `https://${productionHost}` : "http://localhost:3000"),
  title: {
    default: "Canary — Real-time vehicle abuse detection",
    template: "%s — Canary",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Canary — Real-time vehicle abuse detection",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Canary — Real-time vehicle abuse detection",
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex min-h-screen flex-col bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactLenis root>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-foreground focus:px-4 focus:py-2 focus:text-[14px] focus:text-background"
            >
              Skip to content
            </a>
            <TopBanner />
            <NavigationFrame />
            <main id="main" className="flex-grow">
              {children}
            </main>
            <Footer />
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
