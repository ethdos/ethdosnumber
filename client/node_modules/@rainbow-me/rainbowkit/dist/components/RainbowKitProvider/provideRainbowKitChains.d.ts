import type { RainbowKitChain } from './RainbowKitChainContext';
/** @description Decorates an array of wagmi `Chain` objects with RainbowKitChain properties if not already provided */
export declare const provideRainbowKitChains: <Chain extends RainbowKitChain>(chains: Chain[]) => Chain[];
