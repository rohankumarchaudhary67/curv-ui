import CodeBlock from "@/components/code-block";
import NavigationButtons from "@/components/buttons/navigation-button";

export default function NextDocs() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-4xl ml-24 p-6">
                <h1 className="text-4xl font-bold mb-12">Next.js</h1>
                <p className="text-zinc-400 mb-12 text-lg">
                    Install and configure curv-ui for Next.
                </p>

                <h2 className="text-xl font-semibold mb-2">Create project</h2>
                <p className="text-zinc-400 mb-6 text-md">
                    Run the{" "}
                    <span className="bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300">
                        init
                    </span>{" "}
                    command to create a new Next.js project or to setup an
                    existing one:
                </p>

                <section className="mb-16">
                    <CodeBlock code="npx curv-ui init" language="npm" />

                    <p className="text-sm text-zinc-500 mt-4">
                        Choose between a Next.js project or a Monorepo.
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-xl font-bold mb-2">Add Components</h2>
                    <p className="text-zinc-400 mb-6">
                        You can now start adding components to your project.
                    </p>

                    <CodeBlock code="npx curv-ui add button" />

                    <p className="text-zinc-400 mt-6 mb-4">
                        The command above will add the{" "}
                        <code className="bg-zinc-800 px-2 py-1 rounded text-sm font-mono text-zinc-300">
                            Button
                        </code>{" "}
                        component to your project. You can then import it like
                        this:
                    </p>

                    <CodeBlock
                        language="tsx"
                        filename="app/page.tsx"
                        code={`import { Button } from "@/components/ui/button"
 
export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}`}
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
