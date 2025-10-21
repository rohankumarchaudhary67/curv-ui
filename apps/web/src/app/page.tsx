import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="flex justify-center items-center space-x-4">
                    <Image
                        src="/logos/white-logo.png"
                        width={50}
                        height={50}
                        alt="Curv UI"
                    />
                    <h1 className="text-5xl font-mono font-bold">Curv UI</h1>
                </div>
                <h2 className="mt-4 text-xl text-gray-300 font-mono">
                    Modern Component Library for React and Next.js
                </h2>
            </div>
        </>
    );
}
