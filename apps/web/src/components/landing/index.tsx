import { Hero } from "./hero";
import { Features } from "./features";
import { CodePreview } from "./code-preview";
import { Footer } from "./footer";

export default function UILibraryLanding() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">
            <div className="relative">
                <Hero />
                <CodePreview />
                <Features />
                <Footer />
            </div>
        </div>
    );
}
