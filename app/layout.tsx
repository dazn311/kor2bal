import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  modal: React.ReactNode,
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Link href="/login">
        <button className="bg-blue-500 hover:bg-blue-700 rounded"
                style={{background:'blue', color:'white', fontWeight:'bold', paddingInline:4, paddingTop: 2, paddingBottom:2}}
        >
          Login
        </button>
      </Link>
      {children}
      {modal}
      </body>
    </html>
  );
}
