import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Navbar from "@/components/header/Nav";
import Footer from "@/components/footer/footer";
const inter = Inter({
  subsets: ["latin"], variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("bg-background antialiased main-h-screen font-sans", 
          inter.variable)}
        >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
