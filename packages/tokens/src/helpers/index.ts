import { Currency, Native, Token, WNATIVE } from "@xxdex/sdk";
import { ChainId } from "@xxdex/chains";
import { enumValues } from "@xxdex/utils/enumValues";
import { TokenAddressMap } from "@xxdex/token-lists";

export * from "./getTokensByChain";

const createEmptyList = () => {
    const list = {} as Record<ChainId, TokenAddressMap<ChainId>[ChainId]>;
    for (const chainId of enumValues(ChainId)) {
        list[chainId] = {};
    }
    return list as TokenAddressMap<ChainId>;
};

/**
 * An empty result, useful as a default.
 */
export const EMPTY_LIST: TokenAddressMap<ChainId> = createEmptyList();

export function serializeTokens(unserializedTokens: any) {
    const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
        return { ...accum, [key]: unserializedTokens[key].serialize };
    }, {} as any);

    return serializedTokens;
}

export function unwrappedToken(token?: Token): Currency | undefined {
    if (token && token.equals(WNATIVE[token.chainId as keyof typeof WNATIVE]))
        return Native.onChain(token.chainId);
    return token;
}
