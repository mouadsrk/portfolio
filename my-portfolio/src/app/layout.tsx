import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mouad Serroukh",
  description: "I craft modern, responsive, and user-focused web applications, combining clean code with thoughtful design and seamless user experience.",
  openGraph: {
    title: 'Mouad Serroukh - Full-Stack Developer',
    description: 'I craft modern, responsive, and user-focused web applications, combining clean code with thoughtful design and seamless user experience.',
    url: 'https://portfolio-2nhj.vercel.app/',
    siteName: 'Mouad Serroukh Portfolio',
    type: 'website',
  }
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
        {children}
      </body>
    </html>
  );
}
