// packages/components/ui/button.tsx
"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] relative overflow-hidden cursor-pointer",
    {
        variants: {
            variant: {
                // Default – theme adaptive primary button
                default: `
                    bg-primary text-primary-foreground shadow hover:bg-primary/90
                    dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-500
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                    before:translate-x-[-200%] hover:before:translate-x-[200%]
                    before:transition-transform before:duration-700
                `,

                // Gradient – balanced between light/dark modes
                gradient: `
                    bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-indigo-500/30
                    hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-[1.02]
                    dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                    before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700
                `,

                // Glass morphism – subtle light/dark background
                glass: `
                    bg-white/10 backdrop-blur-md border border-white/20 text-gray-400 shadow-xl
                    hover:bg-white/20 hover:border-white/30 hover:shadow-2xl
                    dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-white/20
                `,

                // Outline – adaptive glow
                outline: `
                    border-2 border-indigo-500 bg-background text-foreground
                    hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-600 hover:-translate-y-0.5
                    dark:border-indigo-400 dark:text-white dark:hover:border-indigo-300
                `,

                // Destructive – red-themed gradient
                destructive: `
                    bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-500/30
                    hover:shadow-xl hover:shadow-red-500/40 hover:from-red-700 hover:to-rose-700
                    dark:from-red-700 dark:to-rose-800 dark:hover:from-red-800 dark:hover:to-rose-900
                `,

                // Soft – gentle theme-aware color
                soft: `
                    bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 shadow-sm
                    dark:bg-indigo-950 dark:text-indigo-300 dark:hover:bg-indigo-900
                `,

                // Ghost – elegant transparent button
                ghost: `
                    text-gray-400 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700
                    dark:hover:from-indigo-950 dark:hover:to-purple-950 dark:hover:text-indigo-300
                `,

                // Neon – works on both black and white themes
                neon: `
                    bg-black text-cyan-400 border-2 border-cyan-400
                    shadow-[0_0_10px_rgba(34,211,238,0.5)] hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]
                    hover:bg-cyan-400/10 hover:scale-[1.02]
                    dark:bg-transparent dark:text-cyan-300 dark:border-cyan-300
                `,

                // Link – refined underline animation
                link: `
                    text-indigo-600 hover:text-indigo-700 underline-offset-4
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px]
                    after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full relative pb-1
                    dark:text-indigo-400 dark:hover:text-indigo-300 dark:after:bg-indigo-400
                `,
            },
            size: {
                default: "h-10 px-6 py-2.5",
                sm: "h-8 rounded-md px-4 text-xs",
                lg: "h-12 rounded-xl px-10 text-base",
                xl: "h-14 rounded-xl px-12 text-lg",
                icon: "h-10 w-10",
                iconSm: "h-8 w-8",
                iconLg: "h-12 w-12",
            },
            elevation: {
                flat: "",
                raised: "shadow-md hover:shadow-lg",
                floating: "shadow-xl hover:shadow-2xl",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            elevation: "flat",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    shimmer?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            elevation,
            asChild = false,
            shimmer,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                className={cn(
                    buttonVariants({ variant, size, elevation, className }),
                    shimmer && "animate-shimmer"
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export { Button, buttonVariants };
