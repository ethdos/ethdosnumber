import React from 'react';
declare type Props = {
    onClick?: React.MouseEventHandler<HTMLElement> | undefined;
    as?: React.ElementType<any>;
    currentlySelected?: boolean;
    ready?: boolean;
    name: string;
    iconUrl: string | (() => Promise<string>);
    iconBackground?: string;
};
export declare const ModalSelection: {
    ({ as, currentlySelected, iconBackground, iconUrl, name, onClick, ready, ...urlProps }: Props): JSX.Element;
    displayName: string;
};
export {};
