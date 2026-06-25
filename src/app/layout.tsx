import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FirstVisitDisclaimer } from "@/components/legal/FirstVisitDisclaimer";
import { StructuredData } from "@/components/seo/StructuredData";
import { ViewTransitionProvider } from "@/components/ui/ViewTransitionProvider";
import { rootMetadata } from "@/content/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <StructuredData />
        <ViewTransitionProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <FirstVisitDisclaimer />
        </ViewTransitionProvider>
      </body>
    </html>
  );
}
