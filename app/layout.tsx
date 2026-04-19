import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/theme-script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miro Bayawa — Software Developer",
  description:
    "Software developer with 5+ years shipping web, desktop, and mobile products for teams in New Zealand, Sweden, and the United States.",
  authors: [{ name: "Miro Bayawa" }],
  openGraph: {
    title: "Miro Bayawa — Software Developer",
    description:
      "Software developer shipping for teams in New Zealand, Sweden, and the United States.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
