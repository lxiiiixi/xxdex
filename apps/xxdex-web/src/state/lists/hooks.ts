import { atom } from "jotai";
import { listsAtom } from "./lists";

/**
 * Selector for the token maps by urls
 */
export const selectorByUrlsAtom = atom(get => get(listsAtom)?.byUrl ?? {});

export const combinedTokenMapFromActiveUrlsAtom = atom(get => {
    const [selectorByUrls, selectorActiveUrls] = [
        get(selectorByUrlsAtom),
        get(selectorActiveUrlsAtom),
    ];
    return combineTokenMapsWithDefault(selectorByUrls, selectorActiveUrls);
});
