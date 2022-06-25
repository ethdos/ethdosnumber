import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface ImTokenOptions {
    chains: Chain[];
}
export declare const imToken: ({ chains }: ImTokenOptions) => Wallet;
