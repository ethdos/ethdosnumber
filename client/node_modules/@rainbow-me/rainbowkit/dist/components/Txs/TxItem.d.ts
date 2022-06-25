/// <reference types="react" />
import { Transaction } from '../../transactions/transactionStore';
interface TxProps {
    tx: Transaction;
}
export declare function TxItem({ tx }: TxProps): JSX.Element;
export {};
