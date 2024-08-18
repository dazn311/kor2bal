import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Компрессионное белье",
  description: "Компрессионное белье 23",
};

export default function CatalogLayout({
  children,
}: Readonly<{
  modal: React.ReactNode,
  children: React.ReactNode
}>) {

  return (
    <div>
        {children}
    </div>
  );
}
