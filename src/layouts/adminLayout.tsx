import React from "react";

/**
 * AdminLayout provides a layout consisting of a Header, Sidebar, and Main area
 * @param param0 
 * @returns 
 */
export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />

      <SidebarMainContainer>
        <Sidebar />
        <MainContent>{children}</MainContent>
      </SidebarMainContainer>

      {/* <Footer /> */}
    </div>
  );
};

/**
 * Header is a section fixed to the top of the window above everything else.
 * 
 * @returns 
 */
const Header = () => {
  return <div className="sticky top-0 z-50 border-b shadow-md p-4">Header</div>;
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
 * Sidebar aside should be sticky to the left-hand side of the screen and below
 * the Header.
 * @returns 
 */
const Sidebar = () => {
  return (
    <div className="sticky top-0 h-full w-48 overflow-y-auto border-r shadow-md p-4">
      Sidebar
    </div>
  );
};

/**
 * Main content section should be to the right of the Sidebar aside and fill the
 * remaining screen. This is where your pages will render.
 * 
 * @param param0 
 * @returns 
 */
const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-grow overflow-x-auto overflow-y-auto p-4">
      {children}
    </div>
  );
};

/**
 * Footer section should be below the Sidebar and MainContent areas.
 * 
 * @returns 
 */
const Footer = () => {
  return (
    <div className="sticky bottom-0 z-50 border-t shadow-md p-4">Footer</div>
  );
};
