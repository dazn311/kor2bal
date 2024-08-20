import React from "react";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Компрессионное белье",
//   description: "Компрессионное белье 23",
// };
// export const dynamic = 'force-static';

export default function ProductsLayout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode,
  children: React.ReactNode
}>) {

  return (
    <div>
        {children}
        {modal}
    </div>
  );
}
