import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface LedgerOptions {
    chains: Chain[];
}
export declare const ledger: ({ chains }: LedgerOptions) => Wallet;
