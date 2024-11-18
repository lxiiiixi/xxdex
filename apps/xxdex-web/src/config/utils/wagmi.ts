import { injected } from "@wagmi/core";
import { CHAINS } from "../constants/chains";
import { fallback, http, Transport } from "viem";
import { mainnet } from "viem/chains";
import { PUBLIC_NODES } from "./nodes";
import { createConfig } from "wagmi";
import { CLIENT_CONFIG, publicClient } from "./viem";

export const chains = CHAINS;

export const metaMaskConnector = injected({ target: "metaMask", shimDisconnect: false });

export const noopStorage = {
    getItem: (_key: any) => "",
    setItem: (_key: any, _value: any) => {},
    removeItem: (_key: any) => {},
};

const PUBLIC_MAINNET = "https://ethereum.publicnode.com";

export const transports = chains.reduce((ts, chain) => {
    let httpStrings: string[] | readonly string[] = [];

    if (process.env.NODE_ENV === "test" && chain.id === mainnet.id) {
        httpStrings = [PUBLIC_MAINNET];
    } else {
        httpStrings = PUBLIC_NODES[chain.id] ? PUBLIC_NODES[chain.id] : [];
    }

    if (ts) {
        return {
            ...ts,
            [chain.id]: fallback(httpStrings.map((t: any) => http(t))),
        };
    }

    return {
        [chain.id]: fallback(httpStrings.map((t: any) => http(t))),
    };
}, {} as Record<number, Transport>);

export function createWagmiConfig() {
    return createConfig({
        chains,
        ssr: true,
        syncConnectedChain: true,
        transports,
        ...CLIENT_CONFIG,

        connectors: [metaMaskConnector],
    });
}

export const CHAIN_IDS = chains.map(c => c.id);

export const isChainSupported = (chainId: number) => (CHAIN_IDS as number[]).includes(chainId);
export const isChainTestnet = (chainId: number) => {
    const found = chains.find(c => c.id === chainId);
    return found ? "testnet" in found : false;
};

export { publicClient };
