import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationButtonsProps {
    previousHref: string;
    nextHref: string;
    previousLabel: string;
    nextLabel: string;
}

export default function NavigationButtons({
    previousHref,
    nextHref,
    previousLabel,
    nextLabel,
}: NavigationButtonsProps) {
    return (
        <>
            {/* Bottom Navigation Buttons */}
            <div className="flex justify-between items-center">
                <Link
                    href={previousHref}
                    className="flex items-center gap-2 md:px-6 md:py-3 rounded-xl text-white text-sm font-mono hover:bg-gray-900/50 hover:text-purple-400 transition-all duration-300"
                >
                    <ArrowLeft className="w-4 h-4" />
                    {previousLabel}
                </Link>

                <Link
                    href={nextHref}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-mono hover:bg-gray-900/50 hover:text-purple-400 transition-all duration-300"
                >
                    {nextLabel}
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </>
    );
}
