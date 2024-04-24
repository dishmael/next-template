"use client";

import React from "react";
import { Brand } from "@/components/ui/brand";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ui/modeToggle";
import { useAppContext } from "../contexts/appContext";

const Header = () => {
  const { setSidebarOpen } = useAppContext();

  const handleClick = () => setSidebarOpen(true);

  return (
    <div>
      {/* Mobile View */}
      <div className="sm:hidden sticky top-0 z-50 border-b p-4 items-center bg-slate-50 dark:bg-inherit">
        <div className="flex h-8 items-center space-x-4">
          <Menu size={20} onClick={handleClick} />
          <div className="flex-grow"></div>
          <ModeToggle />
          <div>Mobile Header</div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block sticky top-0 z-50 border-b p-4 bg-slate-50 dark:bg-inherit">
        <div className="flex h-8 items-center space-x-4">
          <Brand />
          <div className="flex-grow"></div>
          <ModeToggle />
          <div>Desktop Header</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
