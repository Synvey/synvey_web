import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "./cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const variantClass: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white",
  secondary:
    "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700",
  ghost: "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800",
  outline:
    "border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800",
};

const sizeClass: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-9 px-4 text-sm",
  lg: "h-10 px-5 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref as any}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-zinc-600",
          variantClass[variant],
          sizeClass[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
