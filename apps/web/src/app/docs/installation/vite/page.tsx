import CodeBlock from "@/components/code-block";
import NavigationButtons from "@/components/buttons/navigation-button";
import InstallationSection, {
    InlineCode,
} from "@/components/installation-section";

export default function ViteDocs() {
    return (
        <div className="py-6 min-h-screen bg-black text-white max-w-3xl pt-12 md:pt-6 md:ml-24 px-6">
            <div>
                <h1 className="text-4xl font-bold mb-2">Vite</h1>
                <p className="text-zinc-400 mb-12 text-lg">
                    Install and configure curv-ui for Vite.
                </p>

                <InstallationSection
                    title="Create project"
                    description="Start by creating a new React project using <span class='bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300'>init</span>. Select the React + TypeScript template:"
                    code="npm create vite@latest"
                    className="mb-16"
                />

                <InstallationSection title="Add tailwind CSS" className="mb-6">
                    <CodeBlock
                        code="npm install tailwindcss @tailwindcss/vite"
                        language="npm"
                    />
                    <p className="text-zinc-400 mb-6 mt-6">
                        Replace everything in{" "}
                        <InlineCode>src/index.css</InlineCode> with the
                        following:
                    </p>
                    <CodeBlock
                        code={`@import "tailwindcss";`}
                        language="css"
                        filename="src/index.css"
                    />
                </InstallationSection>

                <InstallationSection
                    title="Edit tsconfig.json file"
                    description="The current version of Vite splits TypeScript configuration into three files, two of which need to be edited. Add the <span class='bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300'>baseURl</span> and <span class='bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300'>paths</span> properties to the <span class='bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300'>compilerOptions</span> section of the <span class='bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300'>tsconfig.json</span> and <span class='bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300'>tsconfig.app.json</span> files:"
                    code={`{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
                    language="json"
                    filename="tsconfig.json"
                />

                <InstallationSection
                    title="Edit tsconfig.app.json file"
                    description="Add the following code to the <span class='bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300'>tsconfig.app.json</span> file to resolve paths, for your IDE:"
                    code={`{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}`}
                    language="json"
                    filename="tsconfig.app.json"
                />

                <InstallationSection
                    title="Update vite.config.ts"
                    description="Add the following code to the vite.config.ts so your app can resolve paths without error:"
                >
                    <CodeBlock
                        code="npm install -D @types/node"
                        language="npm"
                    />
                    <div className="mt-6">
                        <CodeBlock
                            code={`import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`}
                            language="ts"
                            filename="vite.config.ts"
                        />
                    </div>
                </InstallationSection>

                <InstallationSection
                    title="Run the CLI"
                    description="Run the curv-ui init command to setup your project:"
                    code="npx curv-ui init"
                />

                <InstallationSection
                    title="Add Components"
                    description="You can now start adding components to your project."
                    className="mb-6 mt-16"
                >
                    <CodeBlock code="npx curv-ui add button" language="npm" />
                    <p className="text-zinc-400 mb-6 mt-6">
                        The command above will add the{" "}
                        <InlineCode>Button</InlineCode> component to your
                        project. You can then import it like this:
                    </p>
                    <CodeBlock
                        code={`import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}

export default App`}
                        language="tsx"
                        filename="src/App.tsx"
                    />
                </InstallationSection>

                <NavigationButtons
                    previousHref="/docs/installation/next"
                    previousLabel="Next.js"
                    nextHref="/docs/installation/manual"
                    nextLabel="Manual"
                />
            </div>
        </div>
    );
}
