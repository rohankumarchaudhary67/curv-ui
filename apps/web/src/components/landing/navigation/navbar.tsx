import DesktopNavigation from "./desktop-navigation";
import MobileNavigation from "./mobile-navigation";

export function Navbar() {
    return (
        <>
            {/* Desktop Navigation */}
            <DesktopNavigation />

            {/* Mobile Navigation */}
            <MobileNavigation />
        </>
    );
}
