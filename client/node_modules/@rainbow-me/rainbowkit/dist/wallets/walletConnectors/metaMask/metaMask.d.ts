import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface MetaMaskOptions {
    chains: Chain[];
    shimDisconnect?: boolean;
}
export declare function isMetaMask(ethereum: NonNullable<typeof window['ethereum']>): boolean;
export declare const metaMask: ({ chains, shimDisconnect, }: MetaMaskOptions) => Wallet;
