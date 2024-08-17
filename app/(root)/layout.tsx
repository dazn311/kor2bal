import React from "react";
import Header from "../components/header/Header";
import MiddleLine from "../components/middle-line/MiddleLine";
import {Metadata} from "next";
import DescriptionSection from "../components/descriptionSection/DescriptionSection";
import Footer from "../components/footer/Footer";

export const metadata: Metadata = {
    title: "Home | kor2brand",
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
    <>
      <Header/>
      <MiddleLine />
      {children}
      {modal}
      <DescriptionSection />
      <Footer />
    </>
  );
}
