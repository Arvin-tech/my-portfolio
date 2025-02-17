import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arvs Portfolio",
  description: "Showcasing my software testing skills and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navbar */}
        <nav className="bg-gray-800 text-white p-4">
          <div className="max-w-4xl mx-auto flex justify-between">
            <Link href="/" className="text-lg font-bold">
              Arvs
            </Link>
            <div className="space-x-10">
              <Link href="/" className="space-x-10 hover:text-green-300">Home</Link>
              <Link href="/about" className="space-x-10 hover:text-green-300">About</Link>
              <Link href="/projects" className="space-x-10 hover:text-green-300">Projects</Link>
              <Link href="/blog" className="space-x-10 hover:text-green-300">Blog</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="p-4 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
