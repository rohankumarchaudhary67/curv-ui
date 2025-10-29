"use client";

import React, { useState } from "react";
import {
    Search,
    Menu,
    X,
    Copy,
    Check,
    ChevronRight,
    Code2,
    Sparkles,
} from "lucide-react";

export default function DocsPageDesign() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [activeSection, setActiveSection] = useState("installation");

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const sidebarSections = [
        {
            title: "Getting Started",
            items: [
                { id: "introduction", label: "Introduction" },
                { id: "installation", label: "Installation" },
                { id: "typography", label: "Typography" },
                { id: "theming", label: "Theming" },
            ],
        },
        {
            title: "Components",
            items: [
                { id: "button", label: "Button" },
                { id: "card", label: "Card" },
                { id: "input", label: "Input" },
                { id: "dialog", label: "Dialog" },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/70 backdrop-blur-md">
                <div className="container flex h-14 items-center px-4">
                    <button
                        className="mr-4 md:hidden text-slate-300"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>

                    <div className="flex items-center gap-2 font-semibold">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Lumina UI
                        </span>
                    </div>

                    <div className="flex-1 flex items-center justify-end gap-4">
                        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm border border-slate-800 rounded-md bg-slate-900/50 w-64">
                            <Search className="w-4 h-4 text-slate-500" />
                            <span className="text-slate-500">
                                Search docs...
                            </span>
                            <kbd className="ml-auto px-1.5 py-0.5 text-xs border border-slate-700 rounded bg-slate-900">
                                ⌘K
                            </kbd>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container flex-1 md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)] gap-8 px-4">
                {/* Sidebar */}
                <aside
                    className={`fixed top-14 z-30 h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-slate-800 bg-slate-950/80 backdrop-blur-md md:sticky md:block ${
                        sidebarOpen ? "block" : "hidden"
                    }`}
                >
                    <div className="py-6 pr-6 lg:py-8">
                        {sidebarSections.map((section, i) => (
                            <div key={i} className="mb-6">
                                <h4 className="mb-2 px-2 text-sm font-semibold text-slate-300">
                                    {section.title}
                                </h4>
                                <div className="grid grid-flow-row auto-rows-max text-sm">
                                    {section.items.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                setActiveSection(item.id);
                                                setSidebarOpen(false);
                                            }}
                                            className={`group flex w-full items-center rounded-md px-2 py-1.5 transition-colors ${
                                                activeSection === item.id
                                                    ? "text-purple-400 font-medium bg-slate-900/60"
                                                    : "text-slate-400 hover:text-purple-300 hover:bg-slate-900/30"
                                            }`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Main Content */}
                <main className="relative py-10">
                    <div className="mx-auto w-full max-w-3xl">
                        {/* Breadcrumb */}
                        <div className="mb-4 flex items-center gap-2 text-sm text-slate-400">
                            <span>Docs</span>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-slate-200 capitalize">
                                {activeSection}
                            </span>
                        </div>

                        {/* Title */}
                        <div className="space-y-2 mb-8">
                            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Installation
                            </h1>
                            <p className="text-slate-400 text-lg">
                                Learn how to set up your Lumina UI environment
                                and start building stunning interfaces.
                            </p>
                        </div>

                        {/* Content */}
                        <div className="space-y-8">
                            <p className="text-slate-300 leading-7">
                                Lumina UI provides copy-paste ready React
                                components powered by Tailwind CSS. No
                                configurations — just instant design power.
                            </p>

                            <div className="my-6 flex items-center gap-2 rounded-lg border border-purple-700 bg-purple-950/40 px-4 py-3 text-sm text-purple-300">
                                <Sparkles className="w-4 h-4 text-purple-400" />
                                <span>
                                    Pick, copy, and paste. Build magical UIs
                                    effortlessly.
                                </span>
                            </div>

                            {/* Step 1 */}
                            <h2 className="text-2xl font-semibold text-purple-300">
                                1. Install Tailwind CSS
                            </h2>
                            <p className="text-slate-300">
                                Run the following command to install Tailwind
                                CSS and its peer dependencies:
                            </p>

                            <div className="relative mt-4">
                                <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-slate-800 bg-slate-900 px-4 py-2">
                                    <span className="text-xs text-slate-400">
                                        Terminal
                                    </span>
                                    <button
                                        onClick={() =>
                                            copyToClipboard(
                                                "npm install -D tailwindcss"
                                            )
                                        }
                                        className="text-slate-400 hover:text-white transition"
                                    >
                                        {copied ? (
                                            <Check className="w-4 h-4" />
                                        ) : (
                                            <Copy className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                                <pre className="rounded-b-lg border border-slate-800 bg-slate-950 p-4 overflow-x-auto">
                                    <code className="text-sm text-purple-300">
                                        npm install -D tailwindcss
                                    </code>
                                </pre>
                            </div>

                            {/* Step 2 */}
                            <h2 className="text-2xl font-semibold text-purple-300">
                                2. Configure your template paths
                            </h2>
                            <p className="text-slate-300">
                                Add the paths to your Tailwind configuration
                                file:
                            </p>

                            <div className="relative mt-4">
                                <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-slate-800 bg-slate-900 px-4 py-2">
                                    <span className="text-xs text-slate-400">
                                        tailwind.config.js
                                    </span>
                                    <button
                                        onClick={() =>
                                            copyToClipboard(
                                                'export default {\n  content: ["./src/**/*.{js,jsx,ts,tsx}"],\n}'
                                            )
                                        }
                                        className="text-slate-400 hover:text-white transition"
                                    >
                                        {copied ? (
                                            <Check className="w-4 h-4" />
                                        ) : (
                                            <Copy className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                                <pre className="rounded-b-lg border border-slate-800 bg-slate-950 p-4 overflow-x-auto">
                                    <code className="text-sm text-purple-300">{`export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}`}</code>
                                </pre>
                            </div>

                            <div className="mt-12 rounded-lg border border-purple-700 bg-purple-950/30 p-6">
                                <h3 className="flex items-center gap-2 text-lg font-semibold mb-2 text-purple-300">
                                    <Code2 className="w-5 h-5 text-purple-400" />
                                    That’s it!
                                </h3>
                                <p className="text-slate-300 text-sm">
                                    You’re ready to start building with Lumina
                                    UI. Explore the components section and make
                                    something beautiful.
                                </p>
                            </div>
                        </div>

                        {/* Footer Navigation */}
                        <div className="mt-12 flex items-center justify-between border-t border-slate-800 pt-6">
                            <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-purple-300 transition">
                                <ChevronRight className="w-4 h-4 rotate-180" />
                                <span>Introduction</span>
                            </button>
                            <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-purple-300 transition">
                                <span>Typography</span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
