import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";

const geistSans = localFont({
    src: "../assets/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../assets/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "XXdex",
    description: "XXdex",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col h-full min-h-screen">
            <nav className="flex justify-center gap-4 p-4 shadow-sm">
                <Link
                    href="/"
                    className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100"
                >
                    XXdex
                </Link>
                <Link
                    href="/swap"
                    className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100"
                >
                    Swap
                </Link>
                <Link
                    href="/add"
                    className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100"
                >
                    Add Liquidity
                </Link>
                <Link
                    href="/remove"
                    className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100"
                >
                    Remove Liquidity
                </Link>
            </nav>
            <div className="p-10 h-full flex-1 text-center">{children}</div>
        </div>
    );
}
