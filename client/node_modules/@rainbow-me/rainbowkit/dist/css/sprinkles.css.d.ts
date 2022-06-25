import { RequiredConditionalValue } from '@vanilla-extract/sprinkles';
import './reset.css';
declare const themeContractValues: {
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
    shadows: {
        connectButton: string;
        dialog: string;
        profileDetailsAction: string;
        selectedOption: string;
        selectedWallet: string;
        walletLogo: string;
    };
    blurs: {
        modalOverlay: string;
    };
};
export declare type ThemeVars = typeof themeContractValues;
export declare const themeVars: import("@vanilla-extract/private").MapLeafNodes<{
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
    shadows: {
        connectButton: string;
        dialog: string;
        profileDetailsAction: string;
        selectedOption: string;
        selectedWallet: string;
        walletLogo: string;
    };
    blurs: {
        modalOverlay: string;
    };
}, import("@vanilla-extract/private").CSSVarFunction>;
export declare const largeScreenMinWidth = 768;
declare const responsiveProperties: {
    conditions: {
        defaultCondition: "smallScreen";
        conditionNames: ("smallScreen" | "largeScreen")[];
    };
    styles: {
        alignItems: {
            values: {
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
            };
        };
        display: {
            values: {
                [x: string]: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
            };
        };
    };
};
export declare type ResponsiveValue<Value extends string | number | boolean> = RequiredConditionalValue<typeof responsiveProperties, Value>;
export declare const mapResponsiveValue: <OutputValue extends string | number | boolean | null | undefined, Value extends import("@vanilla-extract/sprinkles").ConditionalValue<{
    conditions: {
        defaultCondition: "smallScreen";
        conditionNames: ("smallScreen" | "largeScreen")[];
    };
    styles: {
        alignItems: {
            values: {
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
            };
        };
        display: {
            values: {
                [x: string]: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
            };
        };
    };
}, string | number | boolean>>(value: Value, fn: (inputValue: Value extends import("@vanilla-extract/sprinkles/dist/declarations/src/types").ResponsiveArray<1, string | number | boolean | null> | import("@vanilla-extract/sprinkles/dist/declarations/src/types").ResponsiveArray<1 | 2, string | number | boolean | null> | import("@vanilla-extract/sprinkles/dist/declarations/src/types").ResponsiveArray<1 | 3 | 2, string | number | boolean | null> | import("@vanilla-extract/sprinkles/dist/declarations/src/types").ResponsiveArray<1 | 3 | 2 | 4, string | number | boolean | null> | import("@vanilla-extract/sprinkles/dist/declarations/src/types").ResponsiveArray<1 | 3 | 2 | 5 | 4, string | number | boolean | null> | import("@vanilla-extract/sprinkles/dist/declarations/src/types").ResponsiveArray<1 | 3 | 2 | 5 | 4 | 6, string | number | boolean | null> | import("@vanilla-extract/sprinkles/dist/declarations/src/types").ResponsiveArray<1 | 3 | 2 | 5 | 4 | 6 | 7, string | number | boolean | null> | import("@vanilla-extract/sprinkles/dist/declarations/src/types").ResponsiveArray<1 | 3 | 2 | 5 | 4 | 6 | 7 | 8, string | number | boolean | null> ? NonNullable<Value[number]> : Value extends Partial<Record<string, string | number | boolean>> ? NonNullable<Value[keyof Value]> : Value, key: "smallScreen" | "largeScreen") => OutputValue) => Value extends string | number | boolean ? OutputValue : Partial<Record<"smallScreen" | "largeScreen", OutputValue>>;
export declare const normalizeResponsiveValue: <Value extends string | number | boolean>(value: import("@vanilla-extract/sprinkles").ConditionalValue<{
    conditions: {
        defaultCondition: "smallScreen";
        conditionNames: ("smallScreen" | "largeScreen")[];
    };
    styles: {
        alignItems: {
            values: {
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
            };
        };
        display: {
            values: {
                [x: string]: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
            };
        };
    };
}, Value>) => Partial<Record<"smallScreen" | "largeScreen", Value>>;
export declare const sprinkles: import("@vanilla-extract/sprinkles/dist/declarations/src/createSprinkles").SprinklesFn<[{
    conditions: {
        defaultCondition: "base";
        conditionNames: ("base" | "hover" | "active")[];
    };
    styles: {
        background: {
            values: {
                accentColor: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                accentColorForeground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                actionButtonBorder: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                actionButtonBorderMobile: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                actionButtonSecondaryBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                closeButton: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                closeButtonBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectButtonBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectButtonBackgroundError: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectButtonInnerBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectButtonText: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectButtonTextError: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectionIndicator: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                error: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                generalBorder: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                generalBorderDim: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                menuItemBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalBackdrop: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalBorder: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalText: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalTextDim: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalTextSecondary: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                profileAction: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                profileActionHover: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                profileForeground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                selectedOptionBorder: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                standby: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
            };
        };
        borderColor: {
            values: {
                accentColor: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                accentColorForeground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                actionButtonBorder: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                actionButtonBorderMobile: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                actionButtonSecondaryBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                closeButton: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                closeButtonBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectButtonBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectButtonBackgroundError: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectButtonInnerBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectButtonText: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectButtonTextError: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectionIndicator: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                error: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                generalBorder: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                generalBorderDim: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                menuItemBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalBackdrop: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalBorder: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalText: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalTextDim: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalTextSecondary: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                profileAction: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                profileActionHover: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                profileForeground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                selectedOptionBorder: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                standby: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
            };
        };
        boxShadow: {
            values: {
                connectButton: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                dialog: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                profileDetailsAction: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                selectedOption: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                selectedWallet: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                walletLogo: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
            };
        };
        color: {
            values: {
                accentColor: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                accentColorForeground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                actionButtonBorder: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                actionButtonBorderMobile: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                actionButtonSecondaryBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                closeButton: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                closeButtonBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectButtonBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectButtonBackgroundError: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectButtonInnerBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectButtonText: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectButtonTextError: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                connectionIndicator: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                error: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                generalBorder: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                generalBorderDim: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                menuItemBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalBackdrop: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalBackground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalBorder: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalText: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalTextDim: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                modalTextSecondary: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                profileAction: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                profileActionHover: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                profileForeground: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                selectedOptionBorder: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
                standby: {
                    defaultClass: string;
                    conditions: {
                        base: string;
                        hover: string;
                        active: string;
                    };
                };
            };
        };
    };
}, {
    conditions: {
        defaultCondition: "smallScreen";
        conditionNames: ("smallScreen" | "largeScreen")[];
    };
    styles: {
        alignItems: {
            values: {
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
            };
        };
        display: {
            values: {
                [x: string]: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
            };
        };
    };
}, {
    conditions: never;
    styles: {
        readonly alignSelf: {
            values: {
                "flex-start": {
                    defaultClass: string;
                };
                "flex-end": {
                    defaultClass: string;
                };
                center: {
                    defaultClass: string;
                };
            };
        };
        readonly backgroundSize: {
            values: {
                cover: {
                    defaultClass: string;
                };
            };
        };
        readonly borderRadius: {
            values: {
                1: {
                    defaultClass: string;
                };
                actionButton: {
                    defaultClass: string;
                };
                connectButton: {
                    defaultClass: string;
                };
                menuButton: {
                    defaultClass: string;
                };
                modal: {
                    defaultClass: string;
                };
                modalMobile: {
                    defaultClass: string;
                };
                6: {
                    defaultClass: string;
                };
                10: {
                    defaultClass: string;
                };
                13: {
                    defaultClass: string;
                };
                "25%": {
                    defaultClass: string;
                };
                full: {
                    defaultClass: string;
                };
            };
        };
        readonly borderStyle: {
            values: {
                solid: {
                    defaultClass: string;
                };
            };
        };
        readonly borderWidth: {
            values: {
                0: {
                    defaultClass: string;
                };
                1: {
                    defaultClass: string;
                };
                2: {
                    defaultClass: string;
                };
                4: {
                    defaultClass: string;
                };
            };
        };
        readonly cursor: {
            values: {
                pointer: {
                    defaultClass: string;
                };
            };
        };
        readonly flexDirection: {
            values: {
                row: {
                    defaultClass: string;
                };
                column: {
                    defaultClass: string;
                };
            };
        };
        readonly fontFamily: {
            values: {
                body: {
                    defaultClass: string;
                };
            };
        };
        readonly fontSize: {
            values: {
                13: {
                    defaultClass: string;
                };
                12: {
                    defaultClass: string;
                };
                14: {
                    defaultClass: string;
                };
                16: {
                    defaultClass: string;
                };
                18: {
                    defaultClass: string;
                };
                20: {
                    defaultClass: string;
                };
                23: {
                    defaultClass: string;
                };
            };
        };
        readonly fontWeight: {
            values: {
                regular: {
                    defaultClass: string;
                };
                medium: {
                    defaultClass: string;
                };
                semibold: {
                    defaultClass: string;
                };
                bold: {
                    defaultClass: string;
                };
                heavy: {
                    defaultClass: string;
                };
            };
        };
        readonly gap: {
            values: {
                0: {
                    defaultClass: string;
                };
                1: {
                    defaultClass: string;
                };
                2: {
                    defaultClass: string;
                };
                3: {
                    defaultClass: string;
                };
                6: {
                    defaultClass: string;
                };
                10: {
                    defaultClass: string;
                };
                4: {
                    defaultClass: string;
                };
                12: {
                    defaultClass: string;
                };
                14: {
                    defaultClass: string;
                };
                16: {
                    defaultClass: string;
                };
                18: {
                    defaultClass: string;
                };
                20: {
                    defaultClass: string;
                };
                [-1]: {
                    defaultClass: string;
                };
                5: {
                    defaultClass: string;
                };
                8: {
                    defaultClass: string;
                };
                24: {
                    defaultClass: string;
                };
                28: {
                    defaultClass: string;
                };
                32: {
                    defaultClass: string;
                };
                36: {
                    defaultClass: string;
                };
                44: {
                    defaultClass: string;
                };
                64: {
                    defaultClass: string;
                };
            };
        };
        readonly height: {
            values: {
                1: {
                    defaultClass: string;
                };
                2: {
                    defaultClass: string;
                };
                full: {
                    defaultClass: string;
                };
                4: {
                    defaultClass: string;
                };
                12: {
                    defaultClass: string;
                };
                20: {
                    defaultClass: string;
                };
                8: {
                    defaultClass: string;
                };
                24: {
                    defaultClass: string;
                };
                28: {
                    defaultClass: string;
                };
                32: {
                    defaultClass: string;
                };
                36: {
                    defaultClass: string;
                };
                30: {
                    defaultClass: string;
                };
                34: {
                    defaultClass: string;
                };
                40: {
                    defaultClass: string;
                };
                48: {
                    defaultClass: string;
                };
                54: {
                    defaultClass: string;
                };
                60: {
                    defaultClass: string;
                };
                max: {
                    defaultClass: string;
                };
            };
        };
        readonly justifyContent: {
            values: {
                "flex-start": {
                    defaultClass: string;
                };
                "flex-end": {
                    defaultClass: string;
                };
                center: {
                    defaultClass: string;
                };
                "space-between": {
                    defaultClass: string;
                };
                "space-around": {
                    defaultClass: string;
                };
            };
        };
        readonly textAlign: {
            values: {
                left: {
                    defaultClass: string;
                };
                inherit: {
                    defaultClass: string;
                };
                center: {
                    defaultClass: string;
                };
            };
        };
        readonly marginBottom: {
            values: {
                0: {
                    defaultClass: string;
                };
                1: {
                    defaultClass: string;
                };
                2: {
                    defaultClass: string;
                };
                3: {
                    defaultClass: string;
                };
                6: {
                    defaultClass: string;
                };
                10: {
                    defaultClass: string;
                };
                4: {
                    defaultClass: string;
                };
                12: {
                    defaultClass: string;
                };
                14: {
                    defaultClass: string;
                };
                16: {
                    defaultClass: string;
                };
                18: {
                    defaultClass: string;
                };
                20: {
                    defaultClass: string;
                };
                [-1]: {
                    defaultClass: string;
                };
                5: {
                    defaultClass: string;
                };
                8: {
                    defaultClass: string;
                };
                24: {
                    defaultClass: string;
                };
                28: {
                    defaultClass: string;
                };
                32: {
                    defaultClass: string;
                };
                36: {
                    defaultClass: string;
                };
                44: {
                    defaultClass: string;
                };
                64: {
                    defaultClass: string;
                };
            };
        };
        readonly marginLeft: {
            values: {
                0: {
                    defaultClass: string;
                };
                1: {
                    defaultClass: string;
                };
                2: {
                    defaultClass: string;
                };
                3: {
                    defaultClass: string;
                };
                6: {
                    defaultClass: string;
                };
                10: {
                    defaultClass: string;
                };
                4: {
                    defaultClass: string;
                };
                12: {
                    defaultClass: string;
                };
                14: {
                    defaultClass: string;
                };
                16: {
                    defaultClass: string;
                };
                18: {
                    defaultClass: string;
                };
                20: {
                    defaultClass: string;
                };
                [-1]: {
                    defaultClass: string;
                };
                5: {
                    defaultClass: string;
                };
                8: {
                    defaultClass: string;
                };
                24: {
                    defaultClass: string;
                };
                28: {
                    defaultClass: string;
                };
                32: {
                    defaultClass: string;
                };
                36: {
                    defaultClass: string;
                };
                44: {
                    defaultClass: string;
                };
                64: {
                    defaultClass: string;
                };
            };
        };
        readonly marginRight: {
            values: {
                0: {
                    defaultClass: string;
                };
                1: {
                    defaultClass: string;
                };
                2: {
                    defaultClass: string;
                };
                3: {
                    defaultClass: string;
                };
                6: {
                    defaultClass: string;
                };
                10: {
                    defaultClass: string;
                };
                4: {
                    defaultClass: string;
                };
                12: {
                    defaultClass: string;
                };
                14: {
                    defaultClass: string;
                };
                16: {
                    defaultClass: string;
                };
                18: {
                    defaultClass: string;
                };
                20: {
                    defaultClass: string;
                };
                [-1]: {
                    defaultClass: string;
                };
                5: {
                    defaultClass: string;
                };
                8: {
                    defaultClass: string;
                };
                24: {
                    defaultClass: string;
                };
                28: {
                    defaultClass: string;
                };
                32: {
                    defaultClass: string;
                };
                36: {
                    defaultClass: string;
                };
                44: {
                    defaultClass: string;
                };
                64: {
                    defaultClass: string;
                };
            };
        };
        readonly marginTop: {
            values: {
                0: {
                    defaultClass: string;
                };
                1: {
                    defaultClass: string;
                };
                2: {
                    defaultClass: string;
                };
                3: {
                    defaultClass: string;
                };
                6: {
                    defaultClass: string;
                };
                10: {
                    defaultClass: string;
                };
                4: {
                    defaultClass: string;
                };
                12: {
                    defaultClass: string;
                };
                14: {
                    defaultClass: string;
                };
                16: {
                    defaultClass: string;
                };
                18: {
                    defaultClass: string;
                };
                20: {
                    defaultClass: string;
                };
                [-1]: {
                    defaultClass: string;
                };
                5: {
                    defaultClass: string;
                };
                8: {
                    defaultClass: string;
                };
                24: {
                    defaultClass: string;
                };
                28: {
                    defaultClass: string;
                };
                32: {
                    defaultClass: string;
                };
                36: {
                    defaultClass: string;
                };
                44: {
                    defaultClass: string;
                };
                64: {
                    defaultClass: string;
                };
            };
        };
        readonly maxWidth: {
            values: {
                1: {
                    defaultClass: string;
                };
                2: {
                    defaultClass: string;
                };
                full: {
                    defaultClass: string;
                };
                4: {
                    defaultClass: string;
                };
                12: {
                    defaultClass: string;
                };
                20: {
                    defaultClass: string;
                };
                8: {
                    defaultClass: string;
                };
                24: {
                    defaultClass: string;
                };
                28: {
                    defaultClass: string;
                };
                32: {
                    defaultClass: string;
                };
                36: {
                    defaultClass: string;
                };
                30: {
                    defaultClass: string;
                };
                34: {
                    defaultClass: string;
                };
                40: {
                    defaultClass: string;
                };
                48: {
                    defaultClass: string;
                };
                54: {
                    defaultClass: string;
                };
                60: {
                    defaultClass: string;
                };
                max: {
                    defaultClass: string;
                };
            };
        };
        readonly minWidth: {
            values: {
                1: {
                    defaultClass: string;
                };
                2: {
                    defaultClass: string;
                };
                full: {
                    defaultClass: string;
                };
                4: {
                    defaultClass: string;
                };
                12: {
                    defaultClass: string;
                };
                20: {
                    defaultClass: string;
                };
                8: {
                    defaultClass: string;
                };
                24: {
                    defaultClass: string;
                };
                28: {
                    defaultClass: string;
                };
                32: {
                    defaultClass: string;
                };
                36: {
                    defaultClass: string;
                };
                30: {
                    defaultClass: string;
                };
                34: {
                    defaultClass: string;
                };
                40: {
                    defaultClass: string;
                };
                48: {
                    defaultClass: string;
                };
                54: {
                    defaultClass: string;
                };
                60: {
                    defaultClass: string;
                };
                max: {
                    defaultClass: string;
                };
            };
        };
        readonly overflow: {
            values: {
                hidden: {
                    defaultClass: string;
                };
            };
        };
        readonly paddingBottom: {
            values: {
                0: {
                    defaultClass: string;
                };
                1: {
                    defaultClass: string;
                };
                2: {
                    defaultClass: string;
                };
                3: {
                    defaultClass: string;
                };
                6: {
                    defaultClass: string;
                };
                10: {
                    defaultClass: string;
                };
                4: {
                    defaultClass: string;
                };
                12: {
                    defaultClass: string;
                };
                14: {
                    defaultClass: string;
                };
                16: {
                    defaultClass: string;
                };
                18: {
                    defaultClass: string;
                };
                20: {
                    defaultClass: string;
                };
                [-1]: {
                    defaultClass: string;
                };
                5: {
                    defaultClass: string;
                };
                8: {
                    defaultClass: string;
                };
                24: {
                    defaultClass: string;
                };
                28: {
                    defaultClass: string;
                };
                32: {
                    defaultClass: string;
                };
                36: {
                    defaultClass: string;
                };
                44: {
                    defaultClass: string;
                };
                64: {
                    defaultClass: string;
                };
            };
        };
        readonly paddingLeft: {
            values: {
                0: {
                    defaultClass: string;
                };
                1: {
                    defaultClass: string;
                };
                2: {
                    defaultClass: string;
                };
                3: {
                    defaultClass: string;
                };
                6: {
                    defaultClass: string;
                };
                10: {
                    defaultClass: string;
                };
                4: {
                    defaultClass: string;
                };
                12: {
                    defaultClass: string;
                };
                14: {
                    defaultClass: string;
                };
                16: {
                    defaultClass: string;
                };
                18: {
                    defaultClass: string;
                };
                20: {
                    defaultClass: string;
                };
                [-1]: {
                    defaultClass: string;
                };
                5: {
                    defaultClass: string;
                };
                8: {
                    defaultClass: string;
                };
                24: {
                    defaultClass: string;
                };
                28: {
                    defaultClass: string;
                };
                32: {
                    defaultClass: string;
                };
                36: {
                    defaultClass: string;
                };
                44: {
                    defaultClass: string;
                };
                64: {
                    defaultClass: string;
                };
            };
        };
        readonly paddingRight: {
            values: {
                0: {
                    defaultClass: string;
                };
                1: {
                    defaultClass: string;
                };
                2: {
                    defaultClass: string;
                };
                3: {
                    defaultClass: string;
                };
                6: {
                    defaultClass: string;
                };
                10: {
                    defaultClass: string;
                };
                4: {
                    defaultClass: string;
                };
                12: {
                    defaultClass: string;
                };
                14: {
                    defaultClass: string;
                };
                16: {
                    defaultClass: string;
                };
                18: {
                    defaultClass: string;
                };
                20: {
                    defaultClass: string;
                };
                [-1]: {
                    defaultClass: string;
                };
                5: {
                    defaultClass: string;
                };
                8: {
                    defaultClass: string;
                };
                24: {
                    defaultClass: string;
                };
                28: {
                    defaultClass: string;
                };
                32: {
                    defaultClass: string;
                };
                36: {
                    defaultClass: string;
                };
                44: {
                    defaultClass: string;
                };
                64: {
                    defaultClass: string;
                };
            };
        };
        readonly paddingTop: {
            values: {
                0: {
                    defaultClass: string;
                };
                1: {
                    defaultClass: string;
                };
                2: {
                    defaultClass: string;
                };
                3: {
                    defaultClass: string;
                };
                6: {
                    defaultClass: string;
                };
                10: {
                    defaultClass: string;
                };
                4: {
                    defaultClass: string;
                };
                12: {
                    defaultClass: string;
                };
                14: {
                    defaultClass: string;
                };
                16: {
                    defaultClass: string;
                };
                18: {
                    defaultClass: string;
                };
                20: {
                    defaultClass: string;
                };
                [-1]: {
                    defaultClass: string;
                };
                5: {
                    defaultClass: string;
                };
                8: {
                    defaultClass: string;
                };
                24: {
                    defaultClass: string;
                };
                28: {
                    defaultClass: string;
                };
                32: {
                    defaultClass: string;
                };
                36: {
                    defaultClass: string;
                };
                44: {
                    defaultClass: string;
                };
                64: {
                    defaultClass: string;
                };
            };
        };
        readonly position: {
            values: {
                absolute: {
                    defaultClass: string;
                };
                fixed: {
                    defaultClass: string;
                };
                relative: {
                    defaultClass: string;
                };
            };
        };
        readonly right: {
            values: {
                0: {
                    defaultClass: string;
                };
            };
        };
        readonly transition: {
            values: {
                default: {
                    defaultClass: string;
                };
            };
        };
        readonly userSelect: {
            values: {
                none: {
                    defaultClass: string;
                };
            };
        };
        readonly width: {
            values: {
                1: {
                    defaultClass: string;
                };
                2: {
                    defaultClass: string;
                };
                full: {
                    defaultClass: string;
                };
                4: {
                    defaultClass: string;
                };
                12: {
                    defaultClass: string;
                };
                20: {
                    defaultClass: string;
                };
                8: {
                    defaultClass: string;
                };
                24: {
                    defaultClass: string;
                };
                28: {
                    defaultClass: string;
                };
                32: {
                    defaultClass: string;
                };
                36: {
                    defaultClass: string;
                };
                30: {
                    defaultClass: string;
                };
                34: {
                    defaultClass: string;
                };
                40: {
                    defaultClass: string;
                };
                48: {
                    defaultClass: string;
                };
                54: {
                    defaultClass: string;
                };
                60: {
                    defaultClass: string;
                };
                max: {
                    defaultClass: string;
                };
            };
        };
        readonly backdropFilter: {
            values: {
                modalOverlay: {
                    defaultClass: string;
                };
            };
        };
    };
} & {
    styles: {
        margin: {
            mappings: ("marginTop" | "marginBottom" | "marginLeft" | "marginRight")[];
        };
        marginX: {
            mappings: ("marginLeft" | "marginRight")[];
        };
        marginY: {
            mappings: ("marginTop" | "marginBottom")[];
        };
        padding: {
            mappings: ("paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight")[];
        };
        paddingX: {
            mappings: ("paddingLeft" | "paddingRight")[];
        };
        paddingY: {
            mappings: ("paddingTop" | "paddingBottom")[];
        };
    };
}]>;
export declare type Sprinkles = Parameters<typeof sprinkles>[0];
export {};
