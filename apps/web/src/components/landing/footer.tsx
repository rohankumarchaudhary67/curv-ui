import Link from "next/link";
import { Github, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-neutral-800 bg-black py-10 text-center text-sm text-slate-400">
            <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 px-6">
                {/* Gradient accent bar */}
                <div className="h-[1px] w-24 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mb-4" />

                {/* Message */}
                <p className="text-slate-400">
                    Crafted with <span className="text-pink-500">♥</span> for
                    developers everywhere · © {new Date().getFullYear()}{" "}
                    <Link
                        href={"https://rohanchaudhary.in"}
                        target="_blank"
                        className="text-white font-mono tracking-tight"
                    >
                        Rohan Kumar Chaudhary
                    </Link>
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4 mt-2">
                    <Link
                        href="https://github.com/rohankumarchaudhary67/curv-ui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors duration-300"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://www.instagram.com/curv.ui/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors duration-300"
                    >
                        <Instagram className="w-5 h-5" />
                    </Link>
                </div>

                {/* Tagline */}
                <p className="text-xs text-slate-600 mt-3">
                    Designed for modern web applications · Built with Next.js &
                    Tailwind CSS
                </p>
            </div>
        </footer>
    );
}
