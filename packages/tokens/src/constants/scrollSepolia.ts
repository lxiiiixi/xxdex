import { WETH9 } from "@xxdex/sdk";
import { ChainId } from "@xxdex/chains";
import { USDC } from "./common";

export const scrollSepoliaTokens = {
    weth: WETH9[ChainId.SCROLL_SEPOLIA],
    usdc: USDC[ChainId.SCROLL_SEPOLIA],
};
