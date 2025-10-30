"use client";

import NavigationButtons from "@/components/buttons/navigation-button";
import Link from "next/link";
import { SiNextdotjs, SiVite, SiReact } from "react-icons/si";

const frameworks = [
    { name: "Next.js", icon: SiNextdotjs, href: "/docs/installation/next" },
    { name: "Vite", icon: SiVite, href: "/docs/installation/vite" },
    { name: "Manual", icon: SiReact, href: "/docs/installation/manual" },
];

export default function InstallationPage() {
    return (
        <div className="max-w-4xl ml-24 text-white">
            {/* Page Heading */}
            <div>
                <h1 className="text-4xl font-bold mb-3">Installation</h1>
                <p className="text-neutral-400 mb-12">
                    How to install dependencies and structure your app.
                </p>

                <h2 className="text-xl font-semibold mb-3">
                    Pick Your Framework
                </h2>
                <p className="text-neutral-400 mb-10">
                    Start by selecting your framework of choice. Then follow the
                    instructions to install dependencies and structure your app.
                    Lumina UI is built to work with all React frameworks.
                </p>

                {/* Framework Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-16">
                    {frameworks.map((fw) => {
                        const Icon = fw.icon;
                        return (
                            <div key={fw.name}>
                                <Link
                                    href={fw.href}
                                    className="group bg-[#0d0d0d] border border-neutral-800 rounded-2xl p-12 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 hover:border-neutral-700 hover:bg-gradient-to-b hover:from-[#151515] hover:to-[#0d0d0d] hover:shadow-lg hover:shadow-purple-500/10 block"
                                >
                                    <Icon className="w-12 h-12 text-neutral-400 group-hover:text-purple-400 transition-colors duration-300 mb-4" />
                                    <span className="text-lg group-hover:text-white">
                                        {fw.name}
                                    </span>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                <NavigationButtons
                    previousHref="/docs"
                    previousLabel="Introduction"
                    nextHref="/docs/components-json"
                    nextLabel="components.json"
                />
            </div>
        </div>
    );
}
