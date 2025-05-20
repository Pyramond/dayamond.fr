import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import styles from "@/app/page.module.css";
import Profile from "@/components/profile/profile";
import Separator from "@/components/separator/separator";
import PageTransition from "@/components/PageTransition/PageTransition";

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
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Bebas.variable} ${SpaceGrotesk.variable} antialiased`}
      >
            <div className={styles.container}>
                <div className={styles.left}>
                    <Profile />
                    <Separator className={styles.separator} />
                </div>
                <div className={styles.right}>
                    <PageTransition>
                        {children}
                    </PageTransition>
                </div>
            </div>
      </body>
    </html>
  );
}
