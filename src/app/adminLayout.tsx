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
        <div className="sticky top-0 bg-slate-50">Header</div>
        <div className="flex relative">
          <aside className="hidden lg:block h-screen w-64 overflow-y-auto bg-gray-300 sticky top-16 p-4">
            Sidebar
          </aside>
          <main className="p-4">Main</main>
        </div>
      </body>
    </html>
  );
}
