import { AccentColor, AccentColorPreset, ThemeOptions } from './baseTheme';
export declare const lightTheme: {
    ({ accentColor, accentColorForeground, ...baseThemeOptions }?: ThemeOptions): {
        colors: {
            accentColor: string;
            accentColorForeground: string;
            actionButtonBorder: string;
            actionButtonBorderMobile: string;
            actionButtonSecondaryBackground: string;
            closeButton: string;
            closeButtonBackground: string;
            connectButtonBackground: string;
            connectButtonBackgroundError: string;
            connectButtonInnerBackground: string;
            connectButtonText: string;
            connectButtonTextError: string;
            connectionIndicator: string;
            error: string;
            generalBorder: string;
            generalBorderDim: string;
            menuItemBackground: string;
            modalBackdrop: string;
            modalBackground: string;
            modalBorder: string;
            modalText: string;
            modalTextDim: string;
            modalTextSecondary: string;
            profileAction: string;
            profileActionHover: string;
            profileForeground: string;
            selectedOptionBorder: string;
            standby: string;
        };
        shadows: {
            connectButton: string;
            dialog: string;
            profileDetailsAction: string;
            selectedOption: string;
            selectedWallet: string;
            walletLogo: string;
        };
        fonts: {
            body: string;
        };
        radii: {
            actionButton: string;
            connectButton: string;
            menuButton: string;
            modal: string;
            modalMobile: string;
        };
        blurs: {
            modalOverlay: string;
        };
    };
    accentColors: Record<AccentColorPreset, AccentColor>;
};
