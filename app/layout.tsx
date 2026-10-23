import type { Metadata, Viewport } from "next";
import React from "react";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import BasicHeader from "@/components/basic/header";
import Footer from "@/components/footer";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({}),
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  applicationName: site.name,
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  // Pink is what Discord, Slack and iMessage use to tint the link card.
  themeColor: site.color,
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex min-h-screen flex-col bg-background">
        {/* Dark by default; the header toggle switches to light. */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#0c0a09] focus:px-4 focus:py-2 focus:text-[14px] focus:text-white"
          >
            Skip to content
          </a>
          <BasicHeader />
          <main id="main" className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
