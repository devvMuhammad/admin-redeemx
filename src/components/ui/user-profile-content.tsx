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
import { signOut, useSession } from "next-auth/react";
import { Button } from "./button";
import Link from "next/link";

export default function UserProfileContent() {
  const { data: session } = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none focus:ring-0">
        <div>
          <User2Icon className="h-10 w-10 rounded-full border" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2">
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {session ? (
          <>
            <DropdownMenuItem>Muhammad Amjad</DropdownMenuItem>
            <DropdownMenuItem>muhammadaljoufi@gmail.com</DropdownMenuItem>
            <DropdownMenuItem>
              <span className="font-bold mr-1">ID: </span>
              455527
            </DropdownMenuItem>
            <Button className="w-full" onClick={() => signOut()}>
              Logout
            </Button>
          </>
        ) : (
          <div className="flex flex-col gap-2">
            <span>You are not Logged In</span>
            <Link href="/login">
              <Button className="w-full">Login</Button>
            </Link>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
