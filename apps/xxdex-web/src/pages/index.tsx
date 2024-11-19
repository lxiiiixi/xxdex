import RootLayout from "@/components/RootLayout";
import { useTokensByChainIds } from "@/hooks/Tokens";

export default function Home() {
    return (
        <RootLayout>
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl font-bold mb-8">Welcome to XXdex</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Decentralized exchange, providing secure and fast digital asset trading services
                </p>
                <div className="grid grid-cols-1 gap-6">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Token Swap</h2>
                        <p className="text-gray-600">
                            Quickly and securely swap your tokens, supporting multi-chain
                            transactions
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Pools</h2>
                        <p className="text-gray-600">
                            Provide liquidity for trading pairs, earn fees
                        </p>
                    </div>
                </div>
            </div>
        </RootLayout>
    );
}
