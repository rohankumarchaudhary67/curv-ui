import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Github, Instagram } from "lucide-react";

export default function DesktopNavigation() {
    const navLinks = [
        { href: "/docs", label: "Docs" },
        { href: "/components", label: "Components" },
        { href: "/colors", label: "Colors" },
    ];

    return (
        <div className="hidden md:flex items-center justify-between px-10 py-3 bg-black text-white shadow-lg ">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2.5 group">
                <div className="flex justify-center items-center w-9 h-9 transition-transform duration-300 group-hover:rotate-12">
                    <Image
                        src="/logos/logo.png"
                        alt="Curv UI"
                        width={30}
                        height={30}
                        className="object-contain"
                    />
                </div>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-mono tracking-tight text-xl font-bold">
                    Curv UI
                </span>
            </Link>

            {/* Center Navigation Links */}
            <div className="flex items-center gap-10">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="relative text-gray-300 hover:text-white text-md font-mono font-medium transition-colors duration-200 group"
                    >
                        {link.label}
                        <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
                <Separator
                    orientation="vertical"
                    className="h-6 bg-neutral-700"
                />

                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/rohankumarchaudhary67/curv-ui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        <Instagram className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
