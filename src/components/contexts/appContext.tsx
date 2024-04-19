"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type BoolDispatch = Dispatch<SetStateAction<boolean>>;

// This type defines the shape for our Sidebar Context
type TSidebarContext = {
  drawerWidth: number;
  isClosing: boolean;
  isMobileOpen: boolean;
  setIsClosing: BoolDispatch;
  setMobileOpen: BoolDispatch;
};

// This type combines all the shapes
type TAppContext = {} & TSidebarContext;

// The main context for our application
const AppContext = createContext<TAppContext | undefined>(undefined);

/**
 * This is a custom hook to use the Sidebar Context
 *
 * @returns
 */
export const useSidebarContext = (): TSidebarContext => {
  const ctx = useContext(AppContext);
  if (ctx === undefined) {
    throw new Error(`useSidebarContext must be used inside AppContextProvider`);
  }

  // Destructure the context and return the values
  const { drawerWidth, isClosing, isMobileOpen, setIsClosing, setMobileOpen } =
    ctx;

  return {
    drawerWidth,
    isClosing,
    isMobileOpen,
    setIsClosing,
    setMobileOpen,
  };
};

/**
 * This is our context wrapper, all components that need context should be a
 * child of this compoonent.
 *
 * @param param0
 * @returns
 */
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMobileOpen, setMobileOpen] = useState<boolean>(false);
  const drawerWidth = 240;

  return (
    <AppContext.Provider
      value={{
        drawerWidth,
        isClosing,
        isMobileOpen,
        setIsClosing,
        setMobileOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
