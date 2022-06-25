import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface ArgentOptions {
    chains: Chain[];
}
export declare const argent: ({ chains }: ArgentOptions) => Wallet;
