"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import { Spotlight } from "@/components/ui/Spotlight";

const HeroSection = () => {
  // Example items for demonstration (assuming Spotlight uses them)
  const exampleItems = ["Item 1", "Item 2", "Item 3"]; 

  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="mt-20 p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Unleash Your Potential. Step with Adidas.
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Step into the world of Adidas and transform your athletic journey
          today. Whether you&apos;re just starting out or seeking to enhance your
          performance, join us to unlock your full potential and achieve
          greatness.
        </p>
        <div className="mt-4">
          <Link href={"/explore"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
