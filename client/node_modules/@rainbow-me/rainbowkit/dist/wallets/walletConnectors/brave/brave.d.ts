import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface BraveOptions {
    chains: Chain[];
    shimDisconnect?: boolean;
}
export declare const brave: ({ chains, shimDisconnect }: BraveOptions) => Wallet;
