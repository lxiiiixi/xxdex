import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { WagmiProvider } from "wagmi";
import { useMemo } from "react";
import { createWagmiConfig } from "@/config/utils/wagmi";
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    const wagmiConfig = useMemo(() => createWagmiConfig(), []);
    return (
        <WagmiProvider reconnectOnMount config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                {/* HydrationBoundary 主要适用于服务端渲染的场景 */}
                <HydrationBoundary state={pageProps.dehydratedState}>
                    <Component {...pageProps} />
                </HydrationBoundary>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
