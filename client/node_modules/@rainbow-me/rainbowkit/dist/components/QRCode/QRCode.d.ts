/// <reference types="react" />
import QRCodeUtil from 'qrcode';
declare type Props = {
    ecl?: QRCodeUtil.QRCodeErrorCorrectionLevel;
    logoBackground?: string;
    logoUrl?: string | (() => Promise<string>);
    logoMargin?: number;
    logoSize?: number;
    size?: number;
    uri: string;
};
export declare function QRCode({ ecl, logoBackground, logoMargin, logoSize, logoUrl, size: sizeProp, uri, }: Props): JSX.Element;
export {};
