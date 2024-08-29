import type { Metadata } from "next";
import Link from "next/link";
import { outfit } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "My blog post", template: "%s - Blog posts" },
  description: "Checkout some of my awesome posts!",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <nav className="flex items-center justify-center text-lg gap-4 mt-5">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
