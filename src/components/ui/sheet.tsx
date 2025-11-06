"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "./cn";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;

function SheetContent({ className, side = "right", ...props }: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { side?: "right" | "left" | "top" | "bottom" }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-[70] bg-black/40" />
      <DialogPrimitive.Content
        className={cn(
          "fixed z-[75] grid gap-4 bg-white p-4 shadow-xl transition-transform dark:bg-zinc-900",
          side === "right" && "right-0 top-0 h-full w-[85%] max-w-sm translate-x-0",
          side === "left" && "left-0 top-0 h-full w-[85%] max-w-sm translate-x-0",
          side === "top" && "left-0 top-0 h-[85%] w-full",
          side === "bottom" && "left-0 bottom-0 h-[85%] w-full",
          className
        )}
        {...props}
      />
    </DialogPrimitive.Portal>
  );
}

export { Sheet, SheetTrigger, SheetClose, SheetContent };


