"use client";
import { User2Icon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export default function UserProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none focus:ring-0">
        <div>
          <User2Icon className="h-10 w-10 rounded-full border" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Muhammad Amjad</DropdownMenuItem>
        <DropdownMenuItem>muhammadaljoufi@gmail.com</DropdownMenuItem>
        <DropdownMenuItem>
          <span className="font-bold mr-1">ID: </span>
          455527
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
