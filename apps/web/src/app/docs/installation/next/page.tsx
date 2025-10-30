import CodeBlock from "@/components/code-block";
import NavigationButtons from "@/components/buttons/navigation-button";
import InstallationSection, {
    InlineCode,
} from "@/components/installation-section";

export default function NextDocs() {
    return (
        <div className="py-6 min-h-screen bg-black text-white max-w-3xl pt-12 md:pt-6 md:ml-24 px-6">
            <div>
                <h1 className="text-4xl font-bold mb-2">Next.js</h1>
                <p className="text-zinc-400 mb-6 md:mb-12 text-lg">
                    Install and configure curv-ui for Next.
                </p>

                <InstallationSection
                    title="Create project"
                    description="Run the <span class='bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300'>init</span> command to create a new Next.js project or to setup an existing one:"
                    className="mb-16"
                >
                    <CodeBlock code="npx curv-ui init" language="npm" />
                    <p className="text-sm text-zinc-500 mt-4">
                        Choose between a Next.js project or a Monorepo.
                    </p>
                </InstallationSection>

                <InstallationSection
                    title="Add Components"
                    description="You can now start adding components to your project."
                    className="mb-12"
                >
                    <CodeBlock code="npx curv-ui add button" language="npm" />
                    <p className="text-zinc-400 mt-6 mb-4">
                        The command above will add the{" "}
                        <InlineCode>Button</InlineCode> component to your
                        project. You can then import it like this:
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
                </InstallationSection>

                <NavigationButtons
                    previousHref="/docs"
                    previousLabel="introduction"
                    nextHref="/docs/installation/vite"
                    nextLabel="Vite"
                />
            </div>
        </div>
    );
}
