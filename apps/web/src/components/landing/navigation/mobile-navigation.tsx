"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu, Github, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const links = [
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/installation" },
        { label: "Components", href: "/docs/components" },
        { label: "CLI", href: "/docs/cli" },
        { label: "Colors", href: "/colors" },
        { label: "Figma", href: "/figma" },
    ];

    const getStarted = [
        { label: "Introduction", href: "/docs" },
        { label: "Installation", href: "/docs/installation" },
    ];

    const components = [{ label: "Button", href: "/docs/components/button" }];

    return (
        <>
            {/* Top bar */}
            <div className="flex md:hidden items-center justify-between px-4 py-3 bg-black text-white fixed top-0 left-0 w-full z-50">
                <div className="text-lg font-semibold">Menu</div>

                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/rohankumarchaudhary67/curv-ui"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Instagram className="w-5 h-5" />
                    </Link>

                    <button onClick={toggleMenu} aria-label="Menu">
                        {isOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div className="sticky inset-0 z-40 bg-black text-white overflow-y-auto pt-14 min-h-screen">
                    <div className="flex flex-col px-6 py-4 space-y-8 mt-4">
                        {/* Menu */}
                        <div>
                            <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider">
                                Menu
                            </p>
                            <ul className="space-y-3 text-lg font-medium">
                                {links.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Separator className="bg-neutral-800" />

                        {/* Get Started */}
                        <div>
                            <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider">
                                Get Started
                            </p>
                            <ul className="space-y-3 text-lg font-medium">
                                {getStarted.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Separator className="bg-neutral-800" />

                        {/* Sections */}
                        <div>
                            <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider">
                                Components
                            </p>
                            <ul className="space-y-3 text-lg font-medium">
                                {components.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
