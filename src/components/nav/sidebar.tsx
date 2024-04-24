"use client";

import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Home,
  LucideIcon,
  Menu,
  Settings,
  SquareGanttChart,
} from "lucide-react";
import { Brand } from "@/components/ui/brand";
import { useAppContext } from "../contexts/appContext";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type SidebarLink = {
  title: string;
  href: string;
  icon: LucideIcon;
};

const Sidebar = () => {
  const { isSidebarOpen, setSidebarOpen } = useAppContext();
  const pathname = usePathname();

  const sbLinks: SidebarLink[] = [
    { title: "Home", href: "/", icon: Home },
    { title: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden sm:block p-4 h-full w-60 border-r bg-slate-50 dark:bg-inherit">
        {sbLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.title}
              href={link.href}
              className={cn(
                "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground",
                isActive && "bg-muted text-primary",
                !isActive && "text-muted-foreground"
              )}
              onClick={() => setSidebarOpen(false)}
            >
              <Icon size={20} />
              <span className="">{link.title}</span>
            </Link>
          );
        })}
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={() => setSidebarOpen(false)}>
        <SheetContent side={"left"} className="flex flex-col w-64">
          <Brand />
          <Separator />
          <nav className="grid gap-2 text-md font-medium">
            {sbLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={cn(
                    "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground",
                    isActive && "bg-muted text-primary",
                    !isActive && "text-muted-foreground"
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon size={20} />
                  <span className="">{link.title}</span>
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
