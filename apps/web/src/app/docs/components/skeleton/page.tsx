import CodeBlock from "@/components/code-block";
import NavigationButtons from "@/components/buttons/navigation-button";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDocs() {
    return (
        <div className="max-w-3xl ml-0 md:ml-24 p-4 pt-12 md:p-8 text-white bg-black min-h-screen">
            <h1 className="text-4xl font-bold mb-3">Skeleton</h1>
            <p className="text-neutral-400 mb-6">
                Use to show a placeholder while content is loading.
            </p>

            <section className="mb-6">
                <div className="border border-gray-700/50 rounded-lg md:py-48 py-24 flex justify-center items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="h-12 flex flex-col justify-center">
                        <Skeleton className="h-4 w-60 mb-2" />
                        <Skeleton className="h-4 w-40" />
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Installation</h2>
                <CodeBlock code="npx curv-ui add skeleton" language="npm" />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Usage</h2>
                <CodeBlock
                    code={`import { Skeleton } from "@/components/ui/skeleton";`}
                    language="ts"
                />
                <div className="h-4" />
                <CodeBlock
                    code={`<Skeleton className="h-12 w-12 rounded/>`}
                    language="tsx"
                />
            </section>

            <NavigationButtons
                previousHref="/docs/components/checkbox"
                previousLabel="Checkbox"
                nextHref="/docs/components"
                nextLabel="Components"
            />
        </div>
    );
}
