"use client";

export function CodePreview() {
    return (
        <section className="bg-black py-16 text-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-gradient-to-br from-slate-900/70 to-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-slate-800 shadow-[0_0_25px_-10px_rgba(168,85,247,0.3)] transition-transform hover:scale-[1.01] duration-300">
                    {/* Window header dots */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-red-500/90" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/90" />
                        <div className="w-3 h-3 rounded-full bg-green-500/90" />
                    </div>

                    {/* Code block */}
                    <pre className="text-sm text-slate-300 font-mono overflow-x-auto leading-relaxed">
                        <code>
                            {`import { Button, Card, Input } from '@curv-ui/react'

export default function App() {
  return (
    <Card className="max-w-sm mx-auto mt-10 p-6">
      <Input placeholder="Enter your name" />
      <Button variant="gradient" className="mt-4">
        Submit
      </Button>
    </Card>
  )
}`}
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    );
}
