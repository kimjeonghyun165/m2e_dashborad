import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    title: "슈퍼워크 신발 거래량",
    description:
      "슈퍼워크 신발 거래량/민팅 정보(비공식 데이터)\nSuperwalk Shoe Transaction Volume/Minting Information (Unofficial Data)",
    images: "https://i.ibb.co/tCJKSJM/2024-02-12-11-11-05.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <Analytics />
      <SpeedInsights />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
