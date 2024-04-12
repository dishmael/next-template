import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Next App Template",
  description: "Template for creating NextJS sites",
};

/**
 * The admin layout includes a Header, Sidebar, and Main area
 * 
 * @param param0 
 * @returns 
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}
      >
        <div className="flex flex-col h-screen overflow-hidden">
          <div className="sticky top-0 z-50 bg-white shadow-md p-4">Header</div>
          <div className="flex flex-row flex-grow overflow-hidden">
            <div className="sticky top-0 h-full w-48 overflow-y-auto bg-gray-100 p-4">
              Sidebar
            </div>
            <div className="flex-grow overflow-x-auto overflow-y-auto p-4">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
