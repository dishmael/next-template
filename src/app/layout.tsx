import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { DefaultLayout } from "@/components/layouts/defaultLayout";
import { AdminLayout } from "@/components/layouts/adminLayout";

const inter = Inter({ subsets: ["latin"] });

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
      <body className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}>
        <AdminLayout>{children}</AdminLayout>
      </body>
    </html>
  );
}
