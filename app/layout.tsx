import type { Metadata } from "next";
import {  Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import {ViewTransitions} from "next-view-transitions";
import Nav from "@/app/components/Nav";

const geistSans = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "NextJS Page Transitions ",
    description: "NextJS Page Transitions ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ViewTransitions>
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
      <Nav/>
        {children}
      </body>
    </html>
      </ViewTransitions>
  );
}
