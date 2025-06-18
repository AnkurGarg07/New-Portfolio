import type { Metadata } from "next";
import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const poppins=Poppins({subsets: ['latin'],
  weight: ['400'],})

export const metadata: Metadata = {
  title: "Ankur Garg | Developer & Educator",
  description:
    "Ankur Garg's personal portfolio showcasing expertise in web development, programming, and education. Explore projects, tutorials, and contributions to the tech community. Available for freelance opportunities and collaborations.",
  icons: {
    icon: "/icon.ico",
  },
  openGraph: {
    title: "Ankur Garg | Developer & Educator",
    description:
      "Ankur Garg's personal portfolio showcasing expertise in web development, programming, and education. Explore projects, tutorials, and contributions to the tech community. Available for freelance opportunities and collaborations.",
    url: "https://ankur07.vercel.app",
    siteName: "Ankur Garg",
    images: [
      {
        url: "https://ankur07.vercel.app/myimage.jpg",
        width: 1200,
        height: 630,
        alt: "Ankur Garg",
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankur Garg | Developer & Educator",
    description:
      "Explore Ankur Garg's portfolio: web development, tutorials, open-source projects, and education. Available for freelance and collaborations.",
    images: ["https://ankur07.vercel.app/myimage.jpg"],
   },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ankur07.vercel.app",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${poppins.className} bg-primary-dark scroll-smooth`}  >{children}</body>
    </html>
  );
}
