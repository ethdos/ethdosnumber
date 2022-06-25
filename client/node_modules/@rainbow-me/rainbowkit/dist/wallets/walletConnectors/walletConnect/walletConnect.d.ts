import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface WalletConnectOptions {
    chains: Chain[];
}
export declare const walletConnect: ({ chains }: WalletConnectOptions) => Wallet;
