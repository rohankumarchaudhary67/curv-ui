"use client";

import { useState, useEffect } from "react";
import { Layers, Zap, Code2, Palette, Rocket } from "lucide-react";

export function Features() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            icon: Layers,
            title: "Modern Components",
            desc: "Beautiful, accessible, and production-ready UI primitives.",
        },
        {
            icon: Zap,
            title: "Lightning Fast",
            desc: "Optimized for performance with minimal bundle size.",
        },
        {
            icon: Code2,
            title: "Developer First",
            desc: "Intuitive APIs and extensible theming system.",
        },
        {
            icon: Palette,
            title: "Customizable Themes",
            desc: "Switch between light/dark or add your own brand themes.",
        },
        {
            icon: Rocket,
            title: "Ready for Production",
            desc: "Battle-tested components used by modern startups.",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [features.length]);

    return (
        <section className="py-20 bg-black text-white">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
                    Why Developers{" "}
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                        Love Curv UI
                    </span>
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        const isActive = activeFeature === i;
                        return (
                            <div
                                key={i}
                                className={`group p-6 rounded-2xl transition-all duration-500 cursor-pointer border backdrop-blur-sm
                  ${
                      isActive
                          ? "bg-gradient-to-br from-purple-900/40 to-pink-900/20 border-purple-500/50 shadow-lg shadow-purple-500/20 scale-[1.02]"
                          : "bg-slate-900/40 border-slate-800 hover:border-purple-500/30 hover:scale-[1.01]"
                  }
                `}
                                onMouseEnter={() => setActiveFeature(i)}
                            >
                                <div
                                    className={`p-3 rounded-xl inline-flex mb-4 transition-colors
                  ${isActive ? "bg-purple-500/20 text-purple-400" : "bg-slate-800 text-slate-400 group-hover:text-purple-400 group-hover:bg-purple-500/10"}
                `}
                                >
                                    <Icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-lg font-semibold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
