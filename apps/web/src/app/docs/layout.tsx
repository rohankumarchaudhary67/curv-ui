import { Sidebar } from "@/components/sidebar/sidebar";

export default function Docslayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="flex min-h-screen bg-black text-white">
                <Sidebar />
                <main className="flex-1 overflow-y-auto px-8 py-10">
                    {children}
                </main>
            </div>
        </>
    );
}
