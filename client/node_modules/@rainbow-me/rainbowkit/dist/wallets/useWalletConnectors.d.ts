import { useConnect } from 'wagmi';
import { WalletInstance } from './Wallet';
export interface WalletConnector extends WalletInstance {
    ready?: boolean;
    connect?: ReturnType<typeof useConnect>['connectAsync'];
    onConnecting?: (fn: () => void) => void;
    showWalletConnectModal?: () => void;
    recent: boolean;
}
export declare function useWalletConnectors(): WalletConnector[];
