import { ChainId } from "@xxdex/chains";
import { WETH9 } from "@xxdex/sdk";
import { USDC } from "./common";

export const baseSepoliaTokens = {
    weth: WETH9[ChainId.BASE_SEPOLIA],
    usdc: USDC[ChainId.BASE_SEPOLIA],
};
