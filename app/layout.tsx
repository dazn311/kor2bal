import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import Header from "./components/header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <Link href="/login"  style={{background:'blue', color:'white', fontWeight:'bold', paddingInline:4, paddingTop: 2, paddingBottom:2}} >
          Login
      </Link>
      <Header/>
      {children}
      {modal}
      </body>
    </html>
  );
}
