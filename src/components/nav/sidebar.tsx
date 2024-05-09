"use client";

import { navLinks } from "@/config/site";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="hidden sm:block p-6 h-full min-w-60 border-r bg-white dark:bg-black dark:border-gray-800">
      {navLinks.map((link, index) => {
        const isActive = pathname === link.href;
        const Icon = link.icon;
        return (
          <Link
            key={link.title}
            href={link.href}
            className={clsx(
              "mx-[-0.65rem] flex items-center gap-4 rounded-lg px-3 py-2 hover:text-foreground",
              isActive && "bg-slate-100 dark:bg-gray-800",
              !isActive && "text-muted-foreground"
            )}
          >
            <Icon size={20} />
            <span className="">{link.title}</span>
          </Link>
        );
      })}
    </section>
  );
};

export default Sidebar;
