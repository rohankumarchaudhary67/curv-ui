"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative text-center py-20 md:pt-32 bg-black text-white">
            <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
                {/* Logo Section */}
                <Link
                    href="/"
                    className="flex md:hidden items-center gap-2.5 group pb-4"
                >
                    <div className="flex justify-center items-center transition-transform duration-300 group-hover:rotate-12">
                        <Image
                            src="/logos/logo.png"
                            alt="Curv UI"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                    </div>
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-mono tracking-tight text-4xl font-bold">
                        Curv UI
                    </span>
                </Link>
                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                    Build interfaces that
                    <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                        feel magical
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg text-slate-400 mb-10 leading-relaxed tracking-wide">
                    A thoughtfully crafted component library designed for modern
                    web applications. Elegant, accessible, and effortlessly
                    customizable.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    <button className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 flex items-center cursor-pointer">
                        Explore Components
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button className="px-6 py-3 border border-slate-700 rounded-lg font-medium cursor-pointer text-slate-300 hover:border-purple-500 hover:text-white transition-colors duration-300">
                        View on GitHub
                    </button>
                </div>
            </div>
        </section>
    );
}
