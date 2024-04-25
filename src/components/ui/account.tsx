"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUserRound, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Account() {
  const [isOpen, setOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative size-10 rounded-full focus-visible:ring-0"
          onClick={() => setOpen(true)}
        >
          <Avatar className="size-10">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>DI</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1.5">
            <p className="text-sm font-medium leading-none">David Ishmael</p>
            <p className="text-xs leading-none text-muted-foreground">
              VP, Engineering
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              href="/profile"
              className="mx-[-0.65rem] flex items-center gap-2 rounded-xl px-3 hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              <CircleUserRound size={16} />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/settings"
              className="mx-[-0.65rem] flex items-center gap-2 rounded-xl px-3 hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              <Settings size={16} />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href="/api/auth/logout"
            className="mx-[-0.65rem] flex items-center gap-2 rounded-xl px-3 hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            <LogOut size={16} />
            <span>Log Out</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
