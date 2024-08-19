import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Компрессионное 222",
  description: "Компрессионное белье 23",
};

export default function ProductItem2Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <div>
        {children}
    </div>
  );
}
