import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Alex | Web Designer & Developer — Modern Websites That Convert",
  description:
    "I design and build modern, fast, beautiful websites for businesses that want to stand out. Custom websites, e-commerce, 3D/interactive sites, and redesigns. 50+ projects delivered.",
  keywords: [
    "web designer",
    "web developer",
    "freelance web designer",
    "custom website design",
    "modern web design",
    "business website",
    "e-commerce development",
    "3D web experiences",
    "website redesign",
    "Next.js developer",
  ],
  authors: [{ name: "Alex" }],
  openGraph: {
    title: "Alex | Web Designer & Developer",
    description:
      "Modern, fast, beautiful websites for businesses that want to stand out. 50+ projects delivered.",
    type: "website",
    locale: "en_US",
    siteName: "Alex — Web Designer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex | Web Designer & Developer",
    description:
      "Modern, fast, beautiful websites for businesses that want to stand out.",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>A</text></svg>"
        />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
