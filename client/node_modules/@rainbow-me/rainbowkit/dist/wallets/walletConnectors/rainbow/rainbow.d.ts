import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface RainbowOptions {
    chains: Chain[];
}
export declare const rainbow: ({ chains }: RainbowOptions) => Wallet;
