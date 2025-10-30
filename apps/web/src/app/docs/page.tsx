import NavigationButtons from "@/components/buttons/navigation-button";

export default function DocsPage() {
    return (
        <>
            <div className="py-6 min-h-screen bg-black text-white max-w-3xl pt-12 md:pt-6 md:ml-24 px-6">
                <h1 className="text-4xl font-bold mb-2">Introduction</h1>
                <p className="text-zinc-400 mb-12 text-md text-justify md:text-lg">
                    Curv/ui is a set of beautifully-designed, accessible
                    components and a code distribution platform. Works with your
                    favorite frameworks and AI models. Open Source. Open Code.
                </p>

                <p className="text-zinc-200 mb-4 text-md text-justify md:text-lg">
                    This is not a component library. It is how you build your
                    component library.
                </p>

                <p className="text-zinc-200 mb-4 text-md text-justify md:text-lg">
                    You know how most traditional component libraries work: you
                    install a package from NPM, import the components, and use
                    them in your app.
                </p>

                <p className="text-zinc-200 mb-12 text-md text-justify md:text-lg">
                    This approach works well until you need to customize a
                    component to fit your design system or require one that
                    isn&apos;t included in the library. Often, you end up
                    wrapping library components, writing workarounds to override
                    styles, or mixing components from different libraries with
                    incompatible APIs.
                </p>

                <NavigationButtons
                    previousHref="/"
                    previousLabel="Home"
                    nextHref="/docs/installation"
                    nextLabel="Installation"
                />
            </div>
        </>
    );
}
