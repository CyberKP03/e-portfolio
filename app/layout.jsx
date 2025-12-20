"use client";

import { JetBrains_Mono, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import PageLoader from "@/components/PageLoader";
import { LoaderProvider, useLoader } from "@/contexts/LoaderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// Inner component to handle route changes
function LayoutContent({ children }) {
  const pathname = usePathname();
  const { stopLoading, isLoading } = useLoader();

  useEffect(() => {
    // Stop loading when route changes
    if (isLoading) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        stopLoading();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <>
      {isLoading && <PageLoader />}
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono?.variable} ${geistSans?.variable} ${geistMono?.variable} antialiased`}
      >
        <LoaderProvider>
          <LayoutContent>{children}</LayoutContent>
        </LoaderProvider>
      </body>
    </html>
  );
}
