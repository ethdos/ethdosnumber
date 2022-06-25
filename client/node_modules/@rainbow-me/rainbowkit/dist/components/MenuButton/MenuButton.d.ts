import React from 'react';
declare type Props = {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement> | undefined;
    currentlySelected?: boolean;
};
export declare const MenuButton: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
export {};
