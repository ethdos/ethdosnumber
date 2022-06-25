import { ThemeVars } from '../css/sprinkles.css';
declare const fontStacks: {
    readonly rounded: "SFRounded, ui-rounded, \"SF Pro Rounded\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"";
    readonly system: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"";
};
declare type FontStack = keyof typeof fontStacks;
declare type RadiusScale = 'large' | 'medium' | 'small' | 'none';
declare type Blurs = 'large' | 'small' | 'none';
interface BaseThemeOptions {
    borderRadius?: RadiusScale;
    fontStack?: FontStack;
    overlayBlur?: Blurs;
}
export declare const baseTheme: ({ borderRadius, fontStack, overlayBlur, }: BaseThemeOptions) => Pick<ThemeVars, 'radii' | 'fonts' | 'blurs'>;
export interface AccentColor {
    accentColor: string;
    accentColorForeground: string;
}
export declare type AccentColorPreset = 'blue' | 'green' | 'red' | 'purple' | 'pink' | 'orange';
export interface ThemeOptions extends BaseThemeOptions {
    accentColor?: string;
    accentColorForeground?: string;
}
export {};
