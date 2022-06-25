import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface InjectedOptions {
    chains: Chain[];
    shimDisconnect?: boolean;
}
export declare const injected: ({ chains, shimDisconnect, }: InjectedOptions) => Wallet;
