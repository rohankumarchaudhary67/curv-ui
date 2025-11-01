"use client";

import CodeBlock from "@/components/code-block";
import NavigationButtons from "@/components/buttons/navigation-button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";

export default function AlertDocs() {
    const alertVariants = [
        { name: "Default", value: "default" as const },
        { name: "Warning", value: "warning" as const },
        { name: "Error", value: "error" as const },
        { name: "Success", value: "success" as const },
    ];

    const [showAlert, setShowAlert] = useState(true);
    const [activeVariant, setActiveVariant] = useState(alertVariants[0]);

    return (
        <div className="max-w-3xl ml-0 md:ml-24 p-4 pt-12 md:p-8 text-white bg-black min-h-screen">
            <h1 className="text-4xl font-bold mb-3">Alert</h1>
            <p className="text-neutral-400 mb-6">
                Displays a callout for user attention.
            </p>

            {/* Preview Section */}
            <section className="mb-6">
                <div className="border border-gray-700/50 rounded-lg md:py-48 py-24 px-6 md:px-12 flex justify-center items-center">
                    <Alert variant="warning" onClose={() => alert("Closed!")}>
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            You can add components and dependencies to your app
                            using the CLI.
                        </AlertDescription>
                    </Alert>
                </div>
            </section>

            {/* Installation */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Installation</h2>
                <CodeBlock code="npx curv-ui add alert" language="npm" />
            </section>

            {/* Usage */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Usage</h2>

                <CodeBlock
                    code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

<Alert variant="default | warning | error | success" onClose={handleClose}>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>`}
                    language="tsx"
                />
            </section>

            {/* Variants Tabs */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Variants</h2>

                <div className="flex flex-wrap gap-2 mb-6">
                    {alertVariants.map((variant) => (
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

                {/* Preview */}
                <div className="p-8 border bg-neutral-950 border-neutral-800 rounded-2xl flex items-center justify-center mb-4 w-full">
                    <Alert variant={activeVariant.value}>
                        <AlertTitle>{activeVariant.name} Alert</AlertTitle>
                        <AlertDescription>
                            This is a {activeVariant.value} alert example inside
                            the preview.
                        </AlertDescription>
                    </Alert>
                </div>

                {/* Code Output */}
                <CodeBlock
                    code={`<Alert variant="${activeVariant.value}">
  <AlertTitle>${activeVariant.name} Alert</AlertTitle>
  <AlertDescription>This is a ${activeVariant.value} alert example.</AlertDescription>
</Alert>`}
                    language="tsx"
                />
            </section>

            {/* Usage */}
            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">OnClose Callback</h2>

                <div className="border border-gray-700/50 rounded-lg md:py-24 py-12 px-6 md:px-12 mb-2 flex justify-center items-center">
                    {showAlert && (
                        <Alert
                            variant={"default"}
                            onClose={() => setShowAlert(false)}
                        >
                            <AlertTitle>This is an alert title</AlertTitle>
                            <AlertDescription>
                                This is an alert description. This is an alert
                                description. This is an alert description.
                            </AlertDescription>
                        </Alert>
                    )}
                </div>

                <CodeBlock
                    code={`'use client';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";

export default function Test(){
    const [ showAlert, setShowAlert ] = useState(true);
    return(
        <>
            {showAlert && <Alert variant={"default"} onClose={() => setShowAlert(false)}>
                    <AlertTitle>This is an alert title</AlertTitle>
                    <AlertDescription>
                        This is an alert description. This is an alert description. This is
                        an alert description.
                    </AlertDescription>
                </Alert>}
        </>
    )
}`}
                    language="tsx"
                />
            </section>

            <NavigationButtons
                previousHref="/docs/installation"
                previousLabel="Installation"
                nextHref="/docs/components/button"
                nextLabel="Button"
            />
        </div>
    );
}
