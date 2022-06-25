import React from 'react';
import { BoxProps } from '../Box/Box';
export declare type TextProps = {
    id?: string;
    as?: 'code' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p' | 'span';
    children?: React.ReactNode;
    color: BoxProps['color'];
    font?: BoxProps['fontFamily'];
    size?: BoxProps['fontSize'];
    weight?: BoxProps['fontWeight'];
    className?: string;
    tabIndex?: number;
    textAlign?: BoxProps['textAlign'];
    display?: BoxProps['display'];
};
export declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLElement>>;
