import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import clsx from "clsx";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dazzle Mart | Home",
  description: "E-Commerce Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(poppins.className, "bg-light,text-dark")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
