"use client";

import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Avatar } from "@nextui-org/avatar";
import { Brand } from "@/components/ui/brand";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { ThemeSwitch } from "../themes/theme-switch";
import { Divider } from "@nextui-org/divider";
import { navLinks } from "@/config/site";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Navbar
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBordered
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarItem>
          <Brand />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <ThemeSwitch />
        <Divider orientation="vertical" />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="John Doe"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem
              key="session"
              className="h-14 gap-2"
              textValue="Session"
            >
              <p className="font-semibold text-sm">John Doe</p>
              <p className="font-light text-xs">john.doe@example.com</p>
            </DropdownItem>
            <DropdownSection>
              <DropdownItem textValue="Divider">
                <Divider />
              </DropdownItem>
              <DropdownItem key="profile" href="/profile" textValue="Profile">
                Profile
              </DropdownItem>
              <DropdownItem
                key="settings"
                href="/settings"
                textValue="Settings"
              >
                Settings
              </DropdownItem>
            </DropdownSection>
            <DropdownSection>
              <DropdownItem textValue="Divider">
                <Divider />
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                textValue="Log Out"
                href="#"
              >
                Log Out
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu>
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <NavbarMenuItem key={`${link.title}-${index}`}>
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={clsx(
                  "mx-[-0.65rem] flex items-center gap-4 rounded-lg px-3 py-2 hover:text-foreground",
                  isActive && "bg-slate-100 dark:bg-slate-800",
                  !isActive && "text-muted-foreground"
                )}
              >
                <Icon size={20} />
                <span className="">{link.title}</span>
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
