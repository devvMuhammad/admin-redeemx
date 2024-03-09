"use client";
import Heading from "@/components/ui/Heading";
import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DarkThemePic, LightThemePic } from "../ui/dark-light-pic";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "next-themes";
import HrLine from "../ui/hr";

const appearanceFormSchema = z.object({
  font: z.enum(["inter", "manrope", "system"], {
    invalid_type_error: "Select a font",
    required_error: "Please select a font.",
  }),
  theme: z.enum(["light", "dark"], { required_error: "Please select a theme" }),
});

type TAppearanceFormSchema = z.infer<typeof appearanceFormSchema>;

export default function AppearanceForm() {
  const { theme, setTheme } = useTheme();
  const { register, control, handleSubmit } = useForm<TAppearanceFormSchema>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues: {
      font: "inter",
      theme: "light",
    },
  });

  function submitHandler(formData: any) {
    // c;
    // console.log(formData);
    setTheme(formData.theme);
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler, (err) => console.log(err))}
      className="space-y-4"
    >
      <div className="space-y-2">
        <Heading className="text-3xl">Appearance</Heading>
        <p className="text-sm md:text-base dark:text-zinc-400">
          Customize the appearance of the app. Select Font, Language and
          automatically switch between day and night themes
        </p>
      </div>
      <HrLine />
      <div className="space-y-2">
        <Label className="block">Font</Label>
        <select
          {...register("font")}
          className={`${buttonVariants({
            variant: "ghost",
          })} w-[200px] bg-transparent hover:bg-transparent text-black dark:text-white font-normal border border-zinc-800 rounded-lg`}
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
        <p className="text-sm md:text-base dark:text-zinc-400">
          Set the font you want to use in the dashboard
        </p>
      </div>
      {/* DARK AND LIGHT MODE */}
      <div className="space-y-2">
        <Label>Theme</Label>
        <p className="text-sm md:text-base dark:text-zinc-400 ">
          Select the theme for the dashboard
        </p>
        <Controller
          control={control}
          name="theme"
          render={({ field: { onChange, value } }) => (
            <RadioGroup value={value} onValueChange={onChange}>
              <div className="flex gap-8">
                <RadioGroupItem
                  className="border-white"
                  value="light"
                  id="light"
                />
                <Label htmlFor="light">
                  <LightThemePic />
                  {/* A */}
                </Label>
                <RadioGroupItem
                  className="border-white"
                  value="dark"
                  id="dark"
                />
                <Label htmlFor="dark">
                  <DarkThemePic />
                  {/* B */}
                </Label>
              </div>
            </RadioGroup>
          )}
        ></Controller>
      </div>
      <Button size="lg" className="text-base border-zinc-700">
        Update Preferences
      </Button>
    </form>
  );
}
