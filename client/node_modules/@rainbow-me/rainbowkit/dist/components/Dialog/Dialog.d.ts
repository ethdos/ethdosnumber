import { ReactNode } from 'react';
interface DialogProps {
    open: boolean;
    onClose: () => void;
    titleId: string;
    onMountAutoFocus?: (event: Event) => void;
    children: ReactNode;
}
export declare function Dialog({ children, onClose, open, titleId }: DialogProps): JSX.Element;
export {};
