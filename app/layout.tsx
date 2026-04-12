import type { Metadata } from "next";
import { Exo_2, Luckiest_Guy, Manrope } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });
const luckiest = Luckiest_Guy({ weight: "400", subsets: ["latin"], variable: "--font-luckiest" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LaunchingSoonOverlay from "./components/LaunchingSoonOverlay";
import AuthProvider from "./components/AuthProvider";
import LayoutShell from "./components/LayoutShell";

export const metadata: Metadata = {
  title: {
    default: "ZenithCodeStore – Instant Game Top-Ups",
    template: "%s | ZenithCodeStore",
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
    title: "ZenithCodeStore – Instant Game Top-Ups",
    description:
      "Your trusted platform for instant game top-ups. Fast, secure, and affordable.",
    type: "website",
    locale: "en_US",
    url: "https://zenithcodestore.com",
    siteName: "ZenithCodeStore",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZenithCodeStore – Instant Game Top-Ups",
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
      <body className={`${exo2.variable} ${luckiest.variable} ${manrope.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <AuthProvider>
          <LayoutShell
            navbar={<Navbar />}
            footer={<Footer />}
            overlay={<LaunchingSoonOverlay />}
          >
            {children}
          </LayoutShell>
        </AuthProvider>
      </body>
    </html>
  );
}
