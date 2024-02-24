"use client";
import React from "react";
import { Boxes } from "@/components/ui/BoxesCore";
import { cn } from "@/utils/cn";

function BackgroundBoxesDemo() {
  return (
    <div>
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes>
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Tailwind is Awesome
        </h1>
      </Boxes>
    </div>
  );
}

export default BackgroundBoxesDemo;
