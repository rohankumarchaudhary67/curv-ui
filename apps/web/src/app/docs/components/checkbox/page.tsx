import { Checkbox } from "@/components/ui/checkbox";
import CodeBlock from "@/components/code-block";
import NavigationButtons from "@/components/buttons/navigation-button";

export default function CheckboxDocs() {
    return (
        <div className="max-w-3xl ml-0 md:ml-24 p-4 pt-12 md:p-8 text-white bg-black min-h-screen">
            <h1 className="text-4xl font-bold mb-3">Checkbox</h1>
            <p className="text-neutral-400 mb-6">
                A control that allows the user to toggle between checked and not
                checked.
            </p>

            <section className="mb-6">
                <div className="border border-gray-700/50 rounded-lg md:py-48 py-24 flex justify-center items-center flex-col space-y-4">
                    <div>
                        <Checkbox />{" "}
                        <span className="pl-2">
                            Accept terms and conditions
                        </span>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Installation</h2>
                <CodeBlock code="npx curv-ui add checkbox" language="npm" />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Usage</h2>
                <CodeBlock
                    code={`import { Checkbox } from "@/components/ui/checkbox";`}
                    language="ts"
                />
                <div className="h-4" />
                <CodeBlock
                    code={`<Checkbox /> <span className="pl-2">Accept terms and conditions</span>`}
                    language="tsx"
                />
            </section>

            <NavigationButtons
                previousHref="/docs/components/button"
                previousLabel="Button"
                nextHref="/docs/components/skeleton"
                nextLabel="Skeleton"
            />
        </div>
    );
}
