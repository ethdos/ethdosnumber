import * as styles from './touchableStyles.css';
interface TouchableStylesOptions {
    hover?: keyof typeof styles.hover;
    active: keyof typeof styles.active;
}
export declare function touchableStyles({ active, hover }: TouchableStylesOptions): (string | undefined)[];
export {};
