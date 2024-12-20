import { ChainId, chainNames } from "@xxdex/chains";
import { Chain, defineChain } from "viem";
import { sepolia } from "viem/chains";

export const CHAIN_QUERY_NAME = chainNames;

const CHAIN_QUERY_NAME_TO_ID = Object.entries(CHAIN_QUERY_NAME).reduce(
    (acc, [chainId, chainName]) => {
        return {
            [chainName.toLowerCase()]: chainId as unknown as ChainId,
            ...acc,
        };
    },
    {} as Record<string, ChainId>
);

export const getChainId = (chainName: string) => {
    if (!chainName) return undefined;
    return CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()]
        ? +CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()]
        : undefined;
};

// const sepolia = /*#__PURE__*/ defineChain({
//     id: 11_155_111,
//     name: "Sepolia",
//     nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
//     rpcUrls: {
//         default: {
//             http: ["https://rpc2.sepolia.org"],
//         },
//     },
//     blockExplorers: {
//         default: {
//             name: "Etherscan",
//             url: "https://sepolia.etherscan.io",
//             apiUrl: "https://api-sepolia.etherscan.io/api",
//         },
//     },
//     contracts: {
//         multicall3: {
//             address: "0xca11bde05977b3631167028862be2a173976ca11",
//             blockCreated: 751532,
//         },
//         ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
//         ensUniversalResolver: {
//             address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
//             blockCreated: 5_317_080,
//         },
//     },
//     testnet: true,
// });

export const CHAINS: [Chain] = [sepolia];
export const DEFAULT_CHAIN_ID = sepolia.id;
