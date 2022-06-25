import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { Chain } from '../components/RainbowKitProvider/RainbowKitChainContext';
export declare function getWalletConnectConnector({ chains, qrcode, }: {
    chains: Chain[];
    qrcode?: boolean;
}): WalletConnectConnector;
