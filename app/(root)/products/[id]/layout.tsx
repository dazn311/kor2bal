import React from "react";
// import type { Metadata } from "next";

export default function ProductItemLayout({
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
