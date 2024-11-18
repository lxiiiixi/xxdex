import { ChainId } from "@xxdex/chains";
import { sepolia } from "wagmi/chains";

export const SERVER_NODES = {
    [ChainId.SEPOLIA]: sepolia.rpcUrls.default.http,
};
// satisfies Record<ChainId, readonly string[]>;

export const PUBLIC_NODES: Record<string, string[] | readonly string[]> = {
    [ChainId.SEPOLIA]: sepolia.rpcUrls.default.http,
};
