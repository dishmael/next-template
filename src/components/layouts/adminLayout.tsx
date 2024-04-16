import React from "react";
import { Sidebar } from "@/components/nav/sidebar";
import { Header } from "@/components/nav/header";
import { AppContextProvider } from "../contexts/appContext";

/**
 * AdminLayout provides a layout consisting of a Header, Sidebar, and Main area
 * @param param0 
 * @returns 
 */
export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppContextProvider>
      <div className="flex flex-col h-screen overflow-hidden">
        <Header />

        <SidebarMainContainer>
          <Sidebar />
          <MainContentContainer>{children}</MainContentContainer>
        </SidebarMainContainer>

        {/* <Footer /> */}
      </div>
    </AppContextProvider>
  );
};

/**
 * SidebarMainContainer is the wrapper for the Sidebar and MainContent.
 * 
 * @param param0 
 * @returns 
 */
const SidebarMainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row flex-grow overflow-hidden">{children}</div>
  );
};

/**
 * Main content section should be to the right of the Sidebar aside and fill the
 * remaining screen. This is where your pages will render.
 * 
 * @param param0 
 * @returns 
 */
const MainContentContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-grow overflow-x-auto overflow-y-auto p-4">
      {children}
    </div>
  );
};