/// <reference types="react" />
export interface ConnectModalProps {
    open: boolean;
    onClose: () => void;
}
export declare function ConnectModal({ onClose, open }: ConnectModalProps): JSX.Element | null;
