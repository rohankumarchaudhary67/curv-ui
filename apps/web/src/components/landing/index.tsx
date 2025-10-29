import { Navbar } from "./navigation/navbar";
import { Hero } from "./hero";
import { Features } from "./features";
import { CodePreview } from "./code-preview";
import { Footer } from "./footer";

export default function UILibraryLanding() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden relative">
            {/* Animated gradient orb */}
            <div className="absolute w-96 h-96 rounded-full bg-purple-600/30 blur-3xl transition-all duration-1000 ease-out pointer-events-none" />

            <div className="relative z-10">
                <Navbar />
                <Hero />
                <CodePreview />
                <Features />
                <Footer />
            </div>
        </div>
    );
}
