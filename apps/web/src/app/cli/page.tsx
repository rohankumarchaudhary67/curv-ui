"use client";

import { TerminalSquare, Copy, Check } from "lucide-react";
import { useState } from "react";

const commands = [
    {
        title: "Install CLI",
        description: "Install the Curv UI CLI on your project.",
        command: "npm install curv-ui",
    },
    {
        title: "Initialize Project",
        description:
            "Set up a new Curv UI project with default templates and structure.",
        command: "npx curv-ui init",
    },
    {
        title: "Add Component",
        description:
            "Set up a new Curv UI project with default templates and structure.",
        command: `npx curv-ui add <componet>`,
    },
];

const CommandBlock = ({
    title,
    description,
    command,
}: {
    title: string;
    description: string;
    command: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
    };

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 hover:border-neutral-700 transition-colors">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <button
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer"
                >
                    {copied ? (
                        <Check className="w-4 h-4 text-green-400" />
                    ) : (
                        <Copy className="w-4 h-4 text-neutral-300" />
                    )}
                </button>
            </div>
            <p className="text-sm text-neutral-400 mb-3">{description}</p>
            <div className="flex items-center space-x-2 bg-black border border-neutral-800 rounded-lg px-3 py-2">
                <TerminalSquare className="w-4 h-4 text-neutral-500" />
                <code className="text-sm text-neutral-300">{command}</code>
            </div>
        </div>
    );
};

export default function CLIPage() {
    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center py-16 pt-24 px-4">
            <div className="max-w-5xl w-full">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-3">Curv UI CLI</h1>
                    <p className="text-neutral-400 text-sm sm:text-base">
                        A powerful command-line tool to manage and integrate
                        Curv UI components seamlessly into your projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {commands.map((cmd) => (
                        <CommandBlock
                            key={cmd.title}
                            title={cmd.title}
                            description={cmd.description}
                            command={cmd.command}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
