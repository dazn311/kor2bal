import React from "react";
import { Inter } from "next/font/google";
import Header from "./components/header/Header";
import MiddleLine from "./components/middle-line/MiddleLine";
import {Metadata} from "next";
import DescriptionSection from "./components/descriptionSection/DescriptionSection";
import Footer from "./components/Footer/Footer";
import "./globals.css";

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
      <DescriptionSection />
      <Footer />
      </body>
    </html>
  );
}
