import React from "react";
import { Inter } from "next/font/google";
import {Providers} from "./(root)/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const dynamic = 'force-static';

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en" className="light">
      <body className={inter.className}>
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}
