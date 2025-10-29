"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu, Github, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Top bar with menu icon */}
            <div className="flex md:hidden items-center justify-between px-4 py-3 bg-black text-white">
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

            {/* Full-screen overlay menu */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black text-white overflow-y-auto">
                    <div className="flex justify-between items-center px-4 py-4 border-b border-neutral-800">
                        <span className="text-lg font-semibold">Menu</span>
                        <button onClick={toggleMenu}>
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex flex-col px-6 py-4 space-y-8">
                        {/* Menu Section */}
                        <div>
                            <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider">
                                Menu
                            </p>
                            <ul className="space-y-3 text-lg font-medium">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/docs">Docs</Link>
                                </li>
                                <li>
                                    <Link href="/components">Components</Link>
                                </li>
                                <li>
                                    <Link href="/blocks">Blocks</Link>
                                </li>
                                <li>
                                    <Link href="/charts">Charts</Link>
                                </li>
                                <li>
                                    <Link href="/directory">Directory</Link>
                                </li>
                                <li>
                                    <Link href="/themes">Themes</Link>
                                </li>
                                <li>
                                    <Link href="/colors">Colors</Link>
                                </li>
                            </ul>
                        </div>

                        <Separator className="bg-neutral-800" />

                        {/* Sections */}
                        <div>
                            <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider">
                                Sections
                            </p>
                            <ul className="space-y-3 text-lg font-medium">
                                <li>
                                    <Link href="/get-started">Get Started</Link>
                                </li>
                                <li>
                                    <Link href="/components">Components</Link>
                                </li>
                                <li>
                                    <Link href="/directory">Directory</Link>
                                </li>
                                <li>
                                    <Link href="/mcp-server">MCP Server</Link>
                                </li>
                                <li>
                                    <Link href="/forms">Forms</Link>
                                </li>
                                <li>
                                    <Link href="/changelog">Changelog</Link>
                                </li>
                            </ul>
                        </div>

                        <Separator className="bg-neutral-800" />

                        {/* Get Started */}
                        <div>
                            <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider">
                                Get Started
                            </p>
                            <ul className="space-y-3 text-lg font-medium">
                                <li>
                                    <Link href="/introduction">
                                        Introduction
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/installation">
                                        Installation
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
