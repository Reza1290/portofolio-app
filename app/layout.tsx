import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fredoka } from "next/font/google";
import "./globals.css";

import { profile } from "@/lib/data";

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

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
});

const description = profile.summary;

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: {
    default: `${profile.name} - ${profile.roles[0]}`,
    template: `%s - ${profile.name}`,
  },
  description,
  keywords: [
    "Fullstack Engineer",
    "Software Engineer",
    "Backend Engineer",
    "Node.js",
    "TypeScript",
    "Next.js",
    profile.name,
  ],
  authors: [{ name: profile.name, url: profile.website }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: profile.website,
    title: `${profile.name} - ${profile.roles[0]}`,
    description,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - ${profile.roles[0]}`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#071426",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-night text-white">
        {children}
      </body>
    </html>
  );
}
