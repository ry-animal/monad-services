import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";
import PageHeader from '@/components/shared/PageHeader';
import PageFooter from '@/components/shared/PageFooter';
import WagmiProviders from '@/providers/WagmiProvider';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const APP_TITLE = "Monad Pulse";
const APP_DESCRIPTION = "Real-time on-chain activity visualizer and social feed for the Monad L1 blockchain.";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://monadpulse.io";
const APP_IMAGE = "/favicon.png";
const THEME_COLOR = "#6366f1";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create-next-app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content={THEME_COLOR} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={APP_URL} />
        <meta property="og:title" content={APP_TITLE} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:image" content={APP_IMAGE} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={APP_URL} />
        <meta name="twitter:title" content={APP_TITLE} />
        <meta name="twitter:description" content={APP_DESCRIPTION} />
        <meta name="twitter:image" content={APP_IMAGE} />
        {/* Manifest (optional, for PWA) */}
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WagmiProviders>
          <div className="min-h-screen flex flex-col bg-background">
            <header className="p-4 border-b flex gap-6 items-center">
              <Link href="/">Home</Link>
              <Link href="/wallet">Wallet Constellation</Link>
              <Link href="/tx/123">Transaction Detail (Demo)</Link>
              <Link href="/filter">Feed Filter (Demo)</Link>
            </header>
            <PageHeader />
            <main className="flex-1 container mx-auto py-8">{children}</main>
            <PageFooter />
          </div>
        </WagmiProviders>
        <Toaster />
      </body>
    </html>
  );
}
