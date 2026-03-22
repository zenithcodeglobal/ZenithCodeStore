import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "TopUpZone – Instant Game Top-Ups",
    template: "%s | TopUpZone",
  },
  description:
    "Your trusted platform for instant game top-ups. Fast, secure, and affordable. Top up Mobile Legends, PUBG Mobile, Free Fire, Valorant, Genshin Impact and more.",
  keywords: [
    "game top-up",
    "mobile legends diamonds",
    "pubg uc",
    "free fire diamonds",
    "valorant points",
    "genshin impact",
    "instant top-up",
  ],
  openGraph: {
    title: "TopUpZone – Instant Game Top-Ups",
    description:
      "Your trusted platform for instant game top-ups. Fast, secure, and affordable.",
    type: "website",
    locale: "en_US",
    url: "https://topupzone.com",
    siteName: "TopUpZone",
  },
  twitter: {
    card: "summary_large_image",
    title: "TopUpZone – Instant Game Top-Ups",
    description:
      "Your trusted platform for instant game top-ups. Fast, secure, and affordable.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
