/// <reference types="react" />
declare type Size = 'small' | 'medium' | 'large';
export declare function ActionButton({ href, label, onClick, rel, size, target, type, }: {
    href?: string;
    label: string;
    onClick?: () => void;
    rel?: string;
    size?: Size;
    target?: string;
    type?: 'primary' | 'secondary';
}): JSX.Element;
export {};
