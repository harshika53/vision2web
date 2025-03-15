import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vision To Web",
  description: "Converting Wireframe into Code",
};
const outift = Outfit({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={outift.className}
      >
        <Provider>
          {children}
          <Toaster />
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
