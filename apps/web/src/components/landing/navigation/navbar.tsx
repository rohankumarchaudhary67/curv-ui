import DesktopNavigation from "./desktop-navigation";
import MobileNavigation from "./mobile-navigation";

export function Navbar() {
    return (
        <>
            <div className="sticky top-0 z-50 backdrop-blur-xl bg-transparent w-full">
                {/* Desktop Navigation */}
                <DesktopNavigation />

                {/* Mobile Navigation */}
                <MobileNavigation />
            </div>
        </>
    );
}
