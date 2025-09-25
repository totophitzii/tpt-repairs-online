import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
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
  title: "TPT ระบบแจ้งซ่อมออนไลน์ ",
  description: "ระบบแจ้งซ่อมออนไลน์ บริษัท ท่าพระแทรคเตอร์และก่อสร้าง จำกัด ",
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
        <head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </head>
        {children}
      </body>
    </html>
  );
}
