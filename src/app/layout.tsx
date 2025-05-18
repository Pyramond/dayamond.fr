import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import PageProvider from "@/context/page-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Bebas = Bebas_Neue({
    variable: "--font-bebas",
    subsets: ["latin"],
    weight: '400',
})

const SpaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Dayamond",
  description: "Dayamond's website",
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
        <PageProvider>
            {children}
        </PageProvider>
      </body>
    </html>
  );
}
