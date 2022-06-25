export declare type AsyncImageSrc = () => Promise<string>;
export declare function loadImages(...urls: (string | AsyncImageSrc)[]): Promise<(string | void)[]>;
export declare function useAsyncImage(url?: string | AsyncImageSrc): string | undefined;
