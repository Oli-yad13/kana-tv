import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import LoadingSplash from "@/components/LoadingSplash";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kana TV",
  description:
    "Kana TV – Ethiopia's only full-spectrum TV: entertain, engage, inspire.",
  icons: {
    icon: "/Kana_TV.png",
    shortcut: "/Kana_TV.png",
    apple: "/Kana_TV.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingSplash />
        {children}
        <Footer />
      </body>
    </html>
  );
}
