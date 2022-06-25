/// <reference types="react" />
import { Chain as WagmiChain } from 'wagmi';
export interface RainbowKitChain {
    id: number;
    iconUrl?: string | (() => Promise<string>) | null;
    iconBackground?: string;
}
export declare type Chain = WagmiChain & RainbowKitChain;
export declare const RainbowKitChainContext: import("react").Context<RainbowKitChain[]>;
export declare const useRainbowKitChains: () => RainbowKitChain[];
export declare const useRainbowKitChainsById: () => Record<number, RainbowKitChain>;
