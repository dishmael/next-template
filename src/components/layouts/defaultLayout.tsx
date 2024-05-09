import React, { ReactNode } from "react";
import { Header, Main, Sidebar } from "@/components/nav";
import { Providers } from "@/components/contexts/providers";
import { AppContextProvider } from "@/components/contexts/appContext";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
      <AppContextProvider>
        <div className="flex flex-col h-screen overflow-hidden">
          <Header />
          <div className="flex flex-row flex-grow overflow-hidden">
            <Sidebar />
            <Main>{children}</Main>
          </div>
        </div>
      </AppContextProvider>
    </Providers>
  );
};
