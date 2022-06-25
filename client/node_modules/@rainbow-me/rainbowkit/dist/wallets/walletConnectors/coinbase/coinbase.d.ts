import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface CoinbaseOptions {
    appName: string;
    chains: Chain[];
}
export declare const coinbase: ({ appName, chains }: CoinbaseOptions) => Wallet;
