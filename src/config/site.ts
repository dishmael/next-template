import { Home, User } from "lucide-react";

export type SiteConfig = typeof siteConfig;
export type NavLinks = typeof navLinks;

export const siteConfig = {
  name: "Next.js + NextUI Template",
  description: "A site template built with Next.js and NextUI",
};

export const navLinks = [
  { title: "Home", href: "/", icon: Home },
  { title: "Resources", href: "/resources", icon: User },
];
