import type { Metadata } from "next";
import React from "react";
import { ReactLenis } from "lenis/react";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavigationFrame from "@/components/navigation";
import Footer from "@/components/footer";
import { TopBanner } from "@/components/top-banner";

export const metadata: Metadata = {
  title: "Canary | See every incident the instant it happens",
  description:
    "Canary lives behind the dash and tells you where your car is, how it's being driven, and the second anyone touches it. Built for rental hosts, fleets and owners. One car, or a thousand.",
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
            <TopBanner />
            <NavigationFrame />
            <main className="flex-grow">{children}</main>
            <Footer />
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
