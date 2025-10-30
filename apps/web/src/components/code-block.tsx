"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Highlight } from "prism-react-renderer";

type CodeBlockProps = {
    code: string;
    language?: string;
    filename?: string | null;
};

const CodeBlock = ({
    code,
    language = "tsx",
    filename = null,
}: CodeBlockProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative rounded-lg border border-zinc-800 overflow-hidden bg-[#1a1a1a]">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-[#111111]">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                    {language && (
                        <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-medium">
                            {language}
                        </span>
                    )}
                    {filename && (
                        <span className="text-zinc-500">{filename}</span>
                    )}
                </div>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                    {copied ? (
                        <>
                            <Check size={14} /> Copied
                        </>
                    ) : (
                        <>
                            <Copy size={14} /> Copy
                        </>
                    )}
                </button>
            </div>

            {/* Code with syntax highlighting */}
            <Highlight code={code.trim()} language={language as string}>
                {({ style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                        style={style}
                        className="text-sm px-4 py-3 overflow-x-auto font-mono leading-relaxed bg-black"
                    >
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                                {line.map((token, key) => (
                                    <span
                                        key={key}
                                        {...getTokenProps({ token })}
                                    />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </div>
    );
};

export default CodeBlock;
