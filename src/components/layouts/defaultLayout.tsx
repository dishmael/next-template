import React, { ReactNode } from "react";
import { Header, Main, Sidebar } from "@/components/nav";
import { ThemeProvider } from "@/components/contexts/themeProvider";
import { AppContextProvider } from "@/components/contexts/appContext";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AppContextProvider>
        <div className="flex flex-col h-screen overflow-hidden">
          <Header />
          <div className="flex flex-row flex-grow overflow-hidden">
            <Sidebar />
            <Main>{children}</Main>
          </div>
        </div>
      </AppContextProvider>
    </ThemeProvider>
  );
};
