import React from "react";
import type { Metadata } from "next";
import MiddleLine from "../components/middle-line/MiddleLine";

export const metadata: Metadata = {
  title: "Компрессионное белье",
  description: "Компрессионное белье 23",
};

export default function ProductsLayout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode,
  children: React.ReactNode
}>) {

  return (
    <div>
        <MiddleLine />
        {children}
        {modal}
    </div>
  );
}
