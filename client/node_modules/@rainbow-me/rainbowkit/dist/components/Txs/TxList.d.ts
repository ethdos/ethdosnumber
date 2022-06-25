/// <reference types="react" />
import { useAccount } from 'wagmi';
interface TxListProps {
    accountData: ReturnType<typeof useAccount>['data'];
}
export declare function TxList({ accountData }: TxListProps): JSX.Element;
export {};
