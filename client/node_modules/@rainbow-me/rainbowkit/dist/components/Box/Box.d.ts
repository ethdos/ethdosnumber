import { ClassValue } from 'clsx';
import * as React from 'react';
declare type HTMLProperties<T = HTMLElement> = Omit<React.AllHTMLAttributes<T>, 'as' | 'className' | 'color' | 'height' | 'width'>;
export declare const Box: React.ForwardRefExoticComponent<{
    background?: ("accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | {
        base?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        hover?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        active?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
    }) | undefined;
    borderColor?: ("accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | {
        base?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        hover?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        active?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
    }) | undefined;
    boxShadow?: ("connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | {
        base?: "connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | undefined;
        hover?: "connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | undefined;
        active?: "connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | undefined;
    }) | undefined;
    color?: ("accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | {
        base?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        hover?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        active?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
    }) | undefined;
} & {
    alignItems?: ("flex-start" | "flex-end" | "center" | {
        smallScreen?: "flex-start" | "flex-end" | "center" | undefined;
        largeScreen?: "flex-start" | "flex-end" | "center" | undefined;
    }) | undefined;
    display?: (string | {
        smallScreen?: string | undefined;
        largeScreen?: string | undefined;
    }) | undefined;
} & {
    readonly alignSelf?: "flex-start" | "flex-end" | "center" | undefined;
    readonly backgroundSize?: "cover" | undefined;
    readonly borderRadius?: "1" | "actionButton" | "connectButton" | "menuButton" | "modal" | "modalMobile" | "6" | "10" | "13" | "25%" | "full" | undefined;
    readonly borderStyle?: "solid" | undefined;
    readonly borderWidth?: "0" | "1" | "2" | "4" | undefined;
    readonly cursor?: "pointer" | undefined;
    readonly flexDirection?: "row" | "column" | undefined;
    readonly fontFamily?: "body" | undefined;
    readonly fontSize?: "13" | "12" | "14" | "16" | "18" | "20" | "23" | undefined;
    readonly fontWeight?: "regular" | "medium" | "semibold" | "bold" | "heavy" | undefined;
    readonly gap?: "0" | "1" | "2" | "3" | "6" | "10" | "4" | "12" | "14" | "16" | "18" | "20" | "-1" | "5" | "8" | "24" | "28" | "32" | "36" | "44" | "64" | undefined;
    readonly height?: "1" | "2" | "full" | "4" | "12" | "20" | "8" | "24" | "28" | "32" | "36" | "30" | "34" | "40" | "48" | "54" | "60" | "max" | undefined;
    readonly justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | undefined;
    readonly textAlign?: "left" | "inherit" | "center" | undefined;
    readonly marginBottom?: "0" | "1" | "2" | "3" | "6" | "10" | "4" | "12" | "14" | "16" | "18" | "20" | "-1" | "5" | "8" | "24" | "28" | "32" | "36" | "44" | "64" | undefined;
    readonly marginLeft?: "0" | "1" | "2" | "3" | "6" | "10" | "4" | "12" | "14" | "16" | "18" | "20" | "-1" | "5" | "8" | "24" | "28" | "32" | "36" | "44" | "64" | undefined;
    readonly marginRight?: "0" | "1" | "2" | "3" | "6" | "10" | "4" | "12" | "14" | "16" | "18" | "20" | "-1" | "5" | "8" | "24" | "28" | "32" | "36" | "44" | "64" | undefined;
    readonly marginTop?: "0" | "1" | "2" | "3" | "6" | "10" | "4" | "12" | "14" | "16" | "18" | "20" | "-1" | "5" | "8" | "24" | "28" | "32" | "36" | "44" | "64" | undefined;
    readonly maxWidth?: "1" | "2" | "full" | "4" | "12" | "20" | "8" | "24" | "28" | "32" | "36" | "30" | "34" | "40" | "48" | "54" | "60" | "max" | undefined;
    readonly minWidth?: "1" | "2" | "full" | "4" | "12" | "20" | "8" | "24" | "28" | "32" | "36" | "30" | "34" | "40" | "48" | "54" | "60" | "max" | undefined;
    readonly overflow?: "hidden" | undefined;
    readonly paddingBottom?: "0" | "1" | "2" | "3" | "6" | "10" | "4" | "12" | "14" | "16" | "18" | "20" | "-1" | "5" | "8" | "24" | "28" | "32" | "36" | "44" | "64" | undefined;
    readonly paddingLeft?: "0" | "1" | "2" | "3" | "6" | "10" | "4" | "12" | "14" | "16" | "18" | "20" | "-1" | "5" | "8" | "24" | "28" | "32" | "36" | "44" | "64" | undefined;
    readonly paddingRight?: "0" | "1" | "2" | "3" | "6" | "10" | "4" | "12" | "14" | "16" | "18" | "20" | "-1" | "5" | "8" | "24" | "28" | "32" | "36" | "44" | "64" | undefined;
    readonly paddingTop?: "0" | "1" | "2" | "3" | "6" | "10" | "4" | "12" | "14" | "16" | "18" | "20" | "-1" | "5" | "8" | "24" | "28" | "32" | "36" | "44" | "64" | undefined;
    readonly position?: "absolute" | "fixed" | "relative" | undefined;
    readonly right?: "0" | undefined;
    readonly transition?: "default" | undefined;
    readonly userSelect?: "none" | undefined;
    readonly width?: "1" | "2" | "full" | "4" | "12" | "20" | "8" | "24" | "28" | "32" | "36" | "30" | "34" | "40" | "48" | "54" | "60" | "max" | undefined;
    readonly backdropFilter?: "modalOverlay" | undefined;
    margin?: "0" | "1" | "2" | "3" | "6" | "10" | "4" | "12" | "14" | "16" | "18" | "20" | "-1" | "5" | "8" | "24" | "28" | "32" | "36" | "44" | "64" | undefined;
    marginX?: "0" | "1" | "2" | "3" | "6" | "10" | "4" | "12" | "14" | "16" | "18" | "20" | "-1" | "5" | "8" | "24" | "28" | "32" | "36" | "44" | "64" | undefined;
    marginY?: "0" | "1" | "2" | "3" | "6" | "10" | "4" | "12" | "14" | "16" | "18" | "20" | "-1" | "5" | "8" | "24" | "28" | "32" | "36" | "44" | "64" | undefined;
    padding?: "0" | "1" | "2" | "3" | "6" | "10" | "4" | "12" | "14" | "16" | "18" | "20" | "-1" | "5" | "8" | "24" | "28" | "32" | "36" | "44" | "64" | undefined;
    paddingX?: "0" | "1" | "2" | "3" | "6" | "10" | "4" | "12" | "14" | "16" | "18" | "20" | "-1" | "5" | "8" | "24" | "28" | "32" | "36" | "44" | "64" | undefined;
    paddingY?: "0" | "1" | "2" | "3" | "6" | "10" | "4" | "12" | "14" | "16" | "18" | "20" | "-1" | "5" | "8" | "24" | "28" | "32" | "36" | "44" | "64" | undefined;
} & {
    reset?: keyof JSX.IntrinsicElements | undefined;
} & HTMLProperties<HTMLElement> & {
    as?: React.ElementType<any> | undefined;
    className?: ClassValue;
} & React.RefAttributes<HTMLElement>>;
export declare type BoxProps = Parameters<typeof Box>[0];
export {};
