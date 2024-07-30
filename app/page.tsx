"use client";
import Image from "next/image";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/toggle";
import { Checkbox, CheckBoxCard } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon, Cross1Icon, Pencil1Icon, ShuffleIcon } from "@radix-ui/react-icons";
import { Textinput } from "./textinput";
import { Generator } from "@/lib/generate";
import Check from "./check";
import StrengthMeter from "./StrengthMeter";
import { Slider } from "@/components/ui/slider";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Home() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const [settings, setSettings] = React.useState({
    length: 16,
    uppercase: true,
    numbers: true,
    symbols: true,
  });

  const GeneratedPassword = Generator(settings);

  const [password, setPassword] = React.useState(GeneratedPassword);

  React.useEffect(() => {
    const GeneratedPassword = Generator(settings);
    setPassword(GeneratedPassword);
  }, [settings, settings.length]);

  return (
    <motion.section className="relative  min-h-screen place-content-center overflow-hidden  text-gray-200">
      <div className="relative h-[29.5rem] w-[39rem]   sm:mx-auto">
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          style={{
            boxShadow,
            borderRadius: '1rem', // Matches the rounded corners of the card
          }}
          className="absolute inset-0 z-0"
        />
        <Card className="relative z-10">
          <div className="flex flex-row justify-between">
            <CardHeader>
              <CardTitle>Password generator</CardTitle>
              <CardDescription>Generate strong password</CardDescription>
            </CardHeader>
            <div className="mt-[1.5rem] mr-[2rem]">
              <ModeToggle />
            </div>
          </div>

          <CardContent className="flex flex-col gap-4">
            <Textinput password={password} setPassword={setPassword} />
            <StrengthMeter password={password} />
            <Slider
              value={[settings.length]}
              min={4}
              max={20}
              step={1}
              onValueChange={(number) => setSettings({ ...settings, length: number[0] })}
            />
            <div>
              <CheckBoxCard
                label="Capital letters"
                id="uppercase"
                defaultChecked={settings.uppercase}
                onCheckedChange={() => setSettings({ ...settings, uppercase: !settings.uppercase })}
              />
              <CheckBoxCard
                label="Numbers"
                id="numbers"
                defaultChecked={true}
                onCheckedChange={() => setSettings({ ...settings, numbers: !settings.numbers })}
              />
              <CheckBoxCard
                label="Symbols"
                id="symbols"
                defaultChecked={true}
                onCheckedChange={() => setSettings({ ...settings, symbols: !settings.symbols })}
              />
            </div>
            <Button variant="outline" onClick={() => navigator.clipboard.writeText(password)}>
              <CopyIcon className="w-4 h-4 mr-2" />
              Copy
            </Button>
            <Button onClick={() => setPassword(GeneratedPassword)}>
              <ShuffleIcon className="w-4 h-4 mr-2" />
              Generate
            </Button>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
