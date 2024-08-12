import type { Metadata } from "next";
import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const poppins=Poppins({subsets: ['latin'],
  weight: ['400'],})

export const metadata: Metadata = {
  title: "Ankur Garg",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en dark">
      <body className={`${poppins.className} bg-primaryDark scroll-smooth`}  >{children}</body>
    </html>
  );
}
