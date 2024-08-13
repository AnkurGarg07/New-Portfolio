import type { Metadata } from "next";
import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const poppins=Poppins({subsets: ['latin'],
  weight: ['400'],})

export const metadata: Metadata = {
  title: "Ankur Garg | Developer & Educator",
  description: "Ankur Garg's personal portfolio showcasing expertise in web development, programming, and education. Explore projects, tutorials, and contributions to the tech community. Available for freelance opportunities and collaborations.",
  icons:{
    icon:"/favicon.png"
  },
  openGraph: {
    title: "Ankur Garg | Developer & Educator",
    description: "Ankur Garg's personal portfolio showcasing expertise in web development, programming, and education. Explore projects, tutorials, and contributions to the tech community. Available for freelance opportunities and collaborations.",
    url: "https://portfolio-ankur07.vercel.app/",
    siteName: "Ankur Garg",
images: [
      {
        url: "https://portfolio-ankur07.vercel.app/myimage.jpg",
        width: 1200,
        height: 630,
        alt: "Ankur Garg",
      },
    ],
    locale: "en-IN",
    type: "website",
  }
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
