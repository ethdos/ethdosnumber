import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface TrustOptions {
    chains: Chain[];
    shimDisconnect?: boolean;
}
export declare const trust: ({ chains, shimDisconnect }: TrustOptions) => Wallet;
