import React from "react";
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
      <Header/>
      {children}
      {modal}
      </body>
    </html>
  );
}
