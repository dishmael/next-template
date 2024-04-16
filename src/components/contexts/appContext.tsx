"use client"

import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState
} from "react";

// This type defines the shape for our Sidebar Context
type TSidebarContext = {
    isSidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

// This type combines all the shapes
type TAppContext = {}
    & TSidebarContext;

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
        throw new Error(`useSidebarContext must be used inside AppContextProvider`)
    }

    // Extract and return the Sidebar Context
    const { isSidebarOpen, setSidebarOpen } = ctx;
    return { isSidebarOpen, setSidebarOpen }
}

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
        <AppContext.Provider value={{ isSidebarOpen, setSidebarOpen }}>
            {children}
        </AppContext.Provider>
    )
}