import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { DefaultLayout } from "@/components/defaultLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App Template",
  description: "Template for creating NextJS sites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${inter.className}`}>
        <DefaultLayout>{children}</DefaultLayout></body>
    </html>
  );
}
