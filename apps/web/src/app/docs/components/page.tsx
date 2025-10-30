import NavigationButtons from "@/components/buttons/navigation-button";
import Link from "next/link";

const frameworks = [
    { name: "Alert", href: "/docs/components/alert" },
    { name: "Button", href: "/docs/components/button" },
    { name: "Checkbox", href: "/docs/components/checkbox" },
    { name: "Input", href: "/docs/components/input" },
    { name: "Spinner", href: "/docs/components/spinner" },
];

export default function ComponentsDocs() {
    return (
        <div className="py-6 min-h-screen bg-black text-white max-w-3xl pt-12 md:pt-6 md:ml-24 px-6">
            {/* Page Heading */}
            <div>
                <h1 className="text-4xl font-bold mb-3">Components</h1>
                <p className="text-neutral-400 mb-12">
                    Here you can find all the components available in the
                    library. We are working on adding more components.Here you
                    can find all the components available in the library. We are
                    working on adding more components.
                </p>

                {/* Framework Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 mb-12">
                    {frameworks.map((fw) => {
                        return (
                            <div key={fw.name}>
                                <Link
                                    href={fw.href}
                                    className="group bg-[#0d0d0d] border border-neutral-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 hover:border-neutral-700 hover:bg-gradient-to-b hover:from-[#151515] hover:to-[#0d0d0d] hover:shadow-lg hover:shadow-purple-500/10 block"
                                >
                                    <span className="text-lg group-hover:text-purple-500">
                                        {fw.name}
                                    </span>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                <NavigationButtons
                    previousHref="/docs/installation"
                    previousLabel="Installation"
                    nextHref="/docs/components/button"
                    nextLabel="Button"
                />
            </div>
        </div>
    );
}
