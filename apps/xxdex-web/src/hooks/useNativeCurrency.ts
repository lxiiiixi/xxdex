import { ChainId } from "@xxdex/chains";
import { Native, NativeCurrency } from "@xxdex/sdk";
import { useMemo } from "react";
import { useActiveChainId } from "./useActiveChainId";

export default function useNativeCurrency(overrideChainId?: ChainId): NativeCurrency {
    const { chainId } = useActiveChainId();
    return useMemo(() => {
        // try {
        //     return Native.onChain(overrideChainId ?? chainId ?? ChainId.BSC);
        // } catch (e) {
        //     return Native.onChain(ChainId.BSC);
        // }
        return Native.onChain(overrideChainId ?? chainId ?? ChainId.SEPOLIA);
    }, [overrideChainId, chainId]);
}
