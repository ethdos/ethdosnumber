import { ReactNode } from 'react';
import { BoxProps } from '../Box/Box';
interface DialogContentProps {
    children: ReactNode;
    bottomSheetOnMobile?: boolean;
    padding?: BoxProps['padding'];
    marginTop?: BoxProps['marginTop'];
    wide?: boolean;
}
export declare function DialogContent({ bottomSheetOnMobile, children, marginTop, padding, wide, }: DialogContentProps): JSX.Element;
export {};
