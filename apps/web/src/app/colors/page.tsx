"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import tailwindColors from "@/colors/color";

const ColorBlock = ({
    name,
    shade,
    value,
}: {
    name: string;
    shade: string;
    value: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
    };

    return (
        <div
            onClick={handleCopy}
            className="flex flex-col items-center space-y-2 group cursor-pointer"
        >
            <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border border-neutral-800 flex items-center justify-center relative transition-transform hover:scale-105"
                style={{ backgroundColor: value }}
            >
                {copied ? (
                    <Check className="w-5 h-5 text-white" />
                ) : (
                    <Copy className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
            </div>
            <p className="text-xs text-neutral-400">{`${name}-${shade}`}</p>
            <p className="text-xs text-neutral-500">{value}</p>
        </div>
    );
};

export default function ColorsPage() {
    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center py-16 pt-24 px-4">
            <div className="max-w-6xl w-full">
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-3">
                        Curv UI - Tailwind Colors
                    </h1>
                    <p className="text-neutral-400">
                        Explore Tailwind’s color palette. Click any color to
                        copy its hex code.
                    </p>
                </div>

                <div className="space-y-12">
                    {Object.entries(tailwindColors).map(([name, shades]) => (
                        <section key={name}>
                            <h2 className="text-lg font-semibold mb-4 capitalize">
                                {name}
                            </h2>
                            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-4">
                                {Object.entries(shades).map(
                                    ([shade, value]) => (
                                        <ColorBlock
                                            key={shade}
                                            name={name}
                                            shade={shade}
                                            value={value}
                                        />
                                    )
                                )}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}
