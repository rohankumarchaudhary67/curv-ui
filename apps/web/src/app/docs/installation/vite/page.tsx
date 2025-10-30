import CodeBlock from "@/components/code-block";
import NavigationButtons from "@/components/buttons/navigation-button";

export default function NextDocs() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-4xl ml-24 p-6">
                <h1 className="text-4xl font-bold mb-2">Vite</h1>
                <p className="text-zinc-400 mb-12 text-lg">
                    Install and configure curv-ui for Vite.
                </p>

                <h2 className="text-lg font-semibold mb-2">Create project</h2>
                <p className="text-zinc-400 mb-6 text-md">
                    Start by creating a new React project using{" "}
                    <span className="bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300">
                        init
                    </span>
                    . Select the React + TypeScript template:
                </p>

                <section className="mb-16">
                    <CodeBlock code="npm create vite@latest" language="npm" />
                </section>

                <h2 className="text-lg font-semibold mb-2">Add tailwind CSS</h2>

                <section className="mb-6">
                    <CodeBlock
                        code="npm install tailwindcss @tailwindcss/vite"
                        language="npm"
                    />
                </section>

                <p className="text-zinc-400 mb-6 text-md">
                    Replace everything in{" "}
                    <span className="bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300">
                        src/index.css
                    </span>{" "}
                    with the following:
                </p>

                <CodeBlock
                    code={`@import "tailwindcss";`}
                    language="css"
                    filename={"src/index.css"}
                />

                <section className="mb-16 mt-16">
                    <h2 className="text-lg font-bold mb-2">
                        Edit tsconfig.json file
                    </h2>
                    <p className="text-zinc-400 mb-6">
                        The current version of Vite splits TypeScript
                        configuration into three files, two of which need to be
                        edited. Add the{" "}
                        <span className="bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300">
                            baseURl
                        </span>{" "}
                        and{" "}
                        <span className="bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300">
                            paths
                        </span>{" "}
                        properties to the{" "}
                        <span className="bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300">
                            compilerOptions
                        </span>{" "}
                        section of the{" "}
                        <span className="bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300">
                            tsconfig.json
                        </span>{" "}
                        and{" "}
                        <span className="bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300">
                            tsconfig.app.json
                        </span>{" "}
                        files:
                    </p>

                    <CodeBlock
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
                        filename={"tsconfig.json"}
                    />
                </section>

                <section className="mb-16 mt-16">
                    <h2 className="text-lg font-bold mb-2">
                        Edit tsconfig.app.json file
                    </h2>
                    <p className="text-zinc-400 mb-6">
                        Add the following code to the{" "}
                        <span className="bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300">
                            tsconfig.app.json
                        </span>{" "}
                        file to resolve paths, for your IDE:
                    </p>

                    <CodeBlock
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
                        filename={"tsconfig.app.json"}
                    />
                </section>

                <section className="mb-16 mt-16">
                    <h2 className="text-lg font-bold mb-2">
                        Update vite.config.ts
                    </h2>
                    <p className="text-zinc-400 mb-6">
                        Add the following code to the vite.config.ts so your app
                        can resolve paths without error:
                    </p>

                    <CodeBlock
                        code="npm install -D @types/node"
                        language="npm"
                    />

                    <p className="text-zinc-400 mb-6"></p>

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
                        filename={"vite.config.ts"}
                    />
                </section>

                <section className="mb-16 mt-16">
                    <h2 className="text-lg font-bold mb-2">Run the CLI</h2>
                    <p className="text-zinc-400 mb-6">
                        Run the curv-ui init command to setup your project:
                    </p>

                    <CodeBlock code={`npx curv-ui init`} language="npm" />
                </section>

                <section className="mb-6 mt-16">
                    <h2 className="text-lg font-bold mb-2">Add Components</h2>
                    <p className="text-zinc-400 mb-6">
                        You can now start adding components to your project.
                    </p>

                    <CodeBlock code={`npx curv-ui add button`} language="npm" />
                </section>

                <section className="mb-16 mt-6">
                    <p className="text-zinc-400 mb-6">
                        The command above will add the{" "}
                        <span className="bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300">
                            Button
                        </span>{" "}
                        component to your project. You can then import it like
                        this:
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
                        filename={"src/App.tsx"}
                    />
                </section>

                <NavigationButtons
                    previousHref="/docs/installation/next"
                    previousLabel="Next.js"
                    nextHref="/docs/installation/vite"
                    nextLabel="Vite"
                />
            </div>
        </div>
    );
}
