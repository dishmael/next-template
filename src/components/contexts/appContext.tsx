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
  isSidebarOpen: boolean;
  setSidebarOpen: BoolDispatch;
};

// This type combines all the shapes
type TAppContext = {} & TSidebarContext;

// The main context for our application
const AppContext = createContext<TAppContext | undefined>(undefined);

/**
 * This is a custom hook to fetch our context
 *
 * @returns
 */
export const useAppContext = (): TAppContext => {
  const ctx = useContext(AppContext);
  if (ctx === undefined) {
    throw new Error(`useAppContext must be used inside AppContextProvider`);
  }

  return ctx;
};

/**
 * This is our context wrapper, all components that need context should be a
 * child of this compoonent.
 *
 * @param param0
 * @returns
 */
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
