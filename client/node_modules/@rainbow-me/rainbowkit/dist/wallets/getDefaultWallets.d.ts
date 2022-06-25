import { Chain } from '../components/RainbowKitProvider/RainbowKitChainContext';
import { WalletList } from './Wallet';
import { connectorsForWallets } from './connectorsForWallets';
export declare const getDefaultWallets: ({ appName, chains, }: {
    appName: string;
    chains: Chain[];
}) => {
    connectors: ReturnType<typeof connectorsForWallets>;
    wallets: WalletList;
};
