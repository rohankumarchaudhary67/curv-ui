import CodeBlock from "@/components/code-block";

interface InstallationSectionProps {
    title: string;
    description?: string;
    code?: string;
    language?: string;
    filename?: string;
    children?: React.ReactNode;
    className?: string;
}

export default function InstallationSection({
    title,
    description,
    code,
    language = "npm",
    filename,
    children,
    className = "mb-16 mt-16",
}: InstallationSectionProps) {
    return (
        <section className={className}>
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            {description && (
                <p
                    className="text-zinc-400 mb-6"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            )}
            {code && (
                <CodeBlock
                    code={code}
                    language={language}
                    filename={filename}
                />
            )}
            {children}
        </section>
    );
}

export function InlineCode({ children }: { children: React.ReactNode }) {
    return (
        <span className="bg-zinc-800 rounded px-2 py-1 text-sm font-mono text-zinc-300">
            {children}
        </span>
    );
}
