/// <reference types="react" />
import { BoxProps } from '../Box/Box';
import { AsyncImageSrc } from './useAsyncImage';
declare type CustomBorderColor = {
    custom: string;
};
interface AsyncImageProps {
    alt?: string;
    src: string | AsyncImageSrc | undefined;
    width: BoxProps['width'] | number;
    height: BoxProps['height'] | number;
    background?: string;
    borderRadius?: BoxProps['borderRadius'];
    borderColor?: BoxProps['borderColor'] | CustomBorderColor;
    boxShadow?: BoxProps['boxShadow'];
}
export declare function AsyncImage({ alt, background, borderColor, borderRadius, boxShadow, height, src: srcProp, width, }: AsyncImageProps): JSX.Element;
export {};
