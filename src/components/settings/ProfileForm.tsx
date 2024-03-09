"use client";
import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import HrLine from "../ui/hr";

export default function ProfileForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-2">
        <Heading className="text-3xl">Profile</Heading>
        <p className="text-sm md:text-base dark:text-zinc-400">
          This is what your profile info looks like. You can edit it
        </p>
      </div>
      {/* <div className="h-[3px] my-4 bg-zinc-800 w-full"></div> */}
      <HrLine className="h-[3px]" />
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          className="border-2 border-zinc-800 max-w-[600px]"
        />
        <p className="text-sm md:text-base dark:text-zinc-400">
          This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days.
        </p>
      </div>
      <div className=" mt-4 space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          className="border-2 border-zinc-800 max-w-[600px]"
        />
        <p className="text-sm md:text-base dark:text-zinc-400">
          You can change your current email and change it to a valid one
        </p>
      </div>
      <Button size="lg" className="text-base border-zinc-700">
        Change Profile
      </Button>
    </form>
  );
}
