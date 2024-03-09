import Heading from "@/components/ui/Heading";
import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DarkThemePic, LightThemePic } from "../ui/dark-light-pic";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function AppearanceForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Heading className="text-3xl">Appearance</Heading>
        <p className="text-sm md:text-base text-zinc-400">
          Customize the appearance of the app. Select Font, Language and
          automatically switch between day and night themes
        </p>
      </div>
      <div className="h-[1px] my-4 bg-zinc-800 w-full"></div>
      <div className="space-y-2">
        <Label className="block">Font</Label>
        <select
          className={`${buttonVariants({
            variant: "default",
          })} w-[200px] bg-transparent font-normal border border-zinc-800 rounded-lg`}
        >
          <option className="bg-transparent" value="inter">
            Inter
          </option>
          <option className="bg-transparent" value="manrope">
            Manrope
          </option>
          <option className="bg-transparent" value="system">
            System
          </option>
        </select>
        <p className="text-sm md:text-base text-zinc-400">
          Set the font you want to use in the dashboard
        </p>
      </div>
      {/* DARK AND LIGHT MODE */}
      <div className="space-y-2">
        <Label>Theme</Label>
        <p className="text-sm md:text-base text-zinc-400 ">
          Select the theme for the dashboard
        </p>
        <RadioGroup>
          <div className="flex gap-8">
            <RadioGroupItem className="border-white" value="light" id="light" />
            <Label htmlFor="light">
              <LightThemePic />
              {/* A */}
            </Label>
            <RadioGroupItem className="border-white" value="dark" id="dark" />
            <Label htmlFor="dark">
              <DarkThemePic />
              {/* B */}
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Button size="lg" className="text-base border-zinc-700">
        Update Preferences
      </Button>
    </form>
  );
}
