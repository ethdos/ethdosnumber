import { ThemeVars } from './sprinkles.css';
export declare function cssStringFromTheme(theme: ThemeVars | (() => ThemeVars), options?: {
    extends?: ThemeVars | (() => ThemeVars);
}): string;
