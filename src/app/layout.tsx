import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex. — Web Designer & Developer",
  description:
    "I craft digital experiences that make businesses unforgettable. Custom websites, e-commerce, and interactive experiences.",
  openGraph: {
    title: "Alex. — Web Designer & Developer",
    description:
      "I craft digital experiences that make businesses unforgettable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans noise">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
