import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Space_Mono } from "next/font/google";
import ConstellationCanvas from "@/components/interactive/constellation-canvas";
import CursorCometTrail from "@/components/interactive/cursor-comet-trail";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Cassandra Nguyen | Frontend Developer",
  description:
    "Creative frontend developer specializing in interactive UIs, design systems, and web animations. Building beautiful, accessible experiences.",
  openGraph: {
    title: "Cassandra Nguyen | Frontend Developer",
    description:
      "Creative frontend developer specializing in interactive UIs, design systems, and web animations.",
    type: "website",
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
        className={`${spaceGrotesk.variable} ${manrope.variable} ${spaceMono.variable} antialiased`}
      >
        {/* Skip-to-content for a11y */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {/* Interactive background layers */}
        <ConstellationCanvas />
        <CursorCometTrail />
        {/* Shooting stars — CSS-only ambient effect */}
        <div className="shooting-stars" aria-hidden="true">
          <span className="shooting-star" />
          <span className="shooting-star" />
          <span className="shooting-star" />
          <span className="shooting-star" />
        </div>
        {children}
      </body>
    </html>
  );
}
