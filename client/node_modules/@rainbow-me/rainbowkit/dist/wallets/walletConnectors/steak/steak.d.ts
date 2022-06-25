import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface SteakOptions {
    chains: Chain[];
}
export declare const steak: ({ chains }: SteakOptions) => Wallet;
