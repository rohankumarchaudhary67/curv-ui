"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sections = [
    {
        title: "Get Started",
        links: [
            { name: "Introduction", href: "/docs" },
            { name: "Installation", href: "/docs/installation" },
            { name: "Components", href: "/docs/components" },
        ],
    },
    {
        title: "Components",
        links: [
            { name: "Alert", href: "/docs/components/alert" },
            { name: "Button", href: "/docs/components/button" },
            { name: "Checkbox", href: "/docs/components/checkbox" },
            { name: "Skeleton", href: "/docs/components/skeleton" },
        ],
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-black overflow-y-auto py-6 px-4">
            <nav className="space-y-8 pl-6">
                {sections.map((section) => (
                    <div key={section.title}>
                        <h2 className="text-xs uppercase tracking-wider text-neutral-500 mb-3 font-semibold">
                            {section.title}
                        </h2>
                        <div className="space-y-1">
                            {section.links.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "block px-3 py-2 rounded-md text-sm transition-colors duration-200",
                                            isActive
                                                ? "bg-neutral-800 text-white"
                                                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>
        </aside>
    );
}
