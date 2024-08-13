import React from "react";
import { Inter } from "next/font/google";
import Header from "./components/header/Header";
import MiddleLine from "./components/middle-line/MiddleLine";
import "./globals.css";
import {Metadata} from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Компрессионное | kor2brand",
    description: "Компрессионное белье",
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
      <Header/>
      <MiddleLine />
      {children}
      {modal}
      </body>
    </html>
  );
}
