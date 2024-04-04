import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "./globals.css";
import React from "react";
import QueryProvider from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Management App",
  description: "Manage your tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body className={inter.className}>
        <QueryProvider>

          {children}
        </QueryProvider>
      </body>

    </html>
  );
}
