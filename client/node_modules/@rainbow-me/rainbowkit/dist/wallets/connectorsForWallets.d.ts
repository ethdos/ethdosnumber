import { Connector } from 'wagmi';
import { WalletList } from './Wallet';
export declare const connectorsForWallets: (walletList: WalletList) => () => Connector<any, any>[];
