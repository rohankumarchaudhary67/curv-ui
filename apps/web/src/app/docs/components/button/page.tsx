"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/code-block";
import NavigationButtons from "@/components/buttons/navigation-button";

// Explicitly type your variants
type ButtonVariant =
    | "default"
    | "gradient"
    | "glass"
    | "outline"
    | "destructive"
    | "soft"
    | "ghost"
    | "neon"
    | "link";

const variants: { name: string; value: ButtonVariant }[] = [
    { name: "Default", value: "default" },
    { name: "Gradient", value: "gradient" },
    { name: "Glass", value: "glass" },
    { name: "Outline", value: "outline" },
    { name: "Destructive", value: "destructive" },
    { name: "Soft", value: "soft" },
    { name: "Ghost", value: "ghost" },
    { name: "Neon", value: "neon" },
    { name: "Link", value: "link" },
];

export default function ButtonDocs() {
    const [activeVariant, setActiveVariant] = useState<
        (typeof variants)[number]
    >(variants[0]);

    return (
        <div className="max-w-3xl ml-0 md:ml-24 p-4 pt-12 md:p-8 text-white bg-black min-h-screen">
            <h1 className="text-4xl font-bold mb-3">Button</h1>
            <p className="text-neutral-400 mb-6">
                Displays a button or a component that looks like a button.
            </p>

            <section className="mb-6">
                <div className="border border-gray-700/50 rounded-lg md:py-48 py-24 flex justify-center items-center">
                    <Button variant={"gradient"} size={"xl"}>
                        Button
                    </Button>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Installation</h2>
                <CodeBlock code="npx curv-ui add button" language="npm" />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Usage</h2>
                <CodeBlock
                    code={`import { Button } from "@/components/ui/button"`}
                    language="ts"
                />
                <div className="h-4" />
                <CodeBlock
                    code={`<Button variant="gradient">Button</Button>`}
                    language="tsx"
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-6">Variants</h2>

                {/* Variant Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {variants.map((variant) => (
                        <button
                            key={variant.value}
                            onClick={() => setActiveVariant(variant)}
                            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                                activeVariant.value === variant.value
                                    ? "bg-neutral-800 text-white"
                                    : "text-neutral-300 hover:underline underline-offset-4"
                            }`}
                        >
                            {variant.name}
                        </button>
                    ))}
                </div>

                {/* Preview Area */}
                <div className="p-8 border bg-neutral-950 border-neutral-800 rounded-2xl flex items-center justify-center mb-4">
                    <Button variant={activeVariant.value}>Button</Button>
                </div>

                {/* Code Display */}
                <CodeBlock
                    code={`<Button variant="${activeVariant.value}">Button</Button>`}
                    language="tsx"
                />
            </section>

            <NavigationButtons
                previousHref="/docs/components/alert"
                previousLabel="Alert"
                nextHref="/docs/components/checkbox"
                nextLabel="Checkbox"
            />
        </div>
    );
}
