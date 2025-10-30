import CodeBlock from "@/components/code-block";
import NavigationButtons from "@/components/buttons/navigation-button";
import InstallationSection from "@/components/installation-section";

export default function ManualDocs() {
    return (
        <div className="py-6 min-h-screen bg-black text-white max-w-3xl pt-12 md:pt-6 md:ml-24 px-6">
            <div>
                <h1 className="text-4xl font-bold mb-2">Manual Installation</h1>
                <p className="text-zinc-400 mb-12 text-lg">
                    Add dependencies to your project manually.
                </p>

                <InstallationSection
                    title="Add Tailwind CSS"
                    description="Components are styled using Tailwind CSS. You need to install Tailwind CSS in your project."
                    code="npm install class-variance-authority clsx tailwind-merge lucide-react tw-animate-css"
                    className="mb-16"
                />

                <InstallationSection
                    title="Configure path aliases"
                    description="Configure the path aliases in your <span class='bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300'>tsconfig.json</span> file."
                    code={`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}`}
                    language="json"
                    filename="tsconfig.json"
                />

                <InstallationSection
                    title="Add a cn helper"
                    code={`import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
                    language="ts"
                    filename="lib/utils.ts"
                />

                <InstallationSection
                    title="Create a components.json file"
                    description="Create a components.json file in the root of your project."
                    className="mb-12"
                >
                    <div className="mt-6">
                        <CodeBlock
                            code={`{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}`}
                            language="ts"
                            filename="vite.config.ts"
                        />
                    </div>
                </InstallationSection>

                <NavigationButtons
                    previousHref="/docs/installation/vite"
                    previousLabel="Next.js"
                    nextHref="/docs/components"
                    nextLabel="Components"
                />
            </div>
        </div>
    );
}
