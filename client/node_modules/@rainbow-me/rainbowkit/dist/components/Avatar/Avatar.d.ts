/// <reference types="react" />
interface AvatarProps {
    address: string;
    loading?: boolean;
    imageUrl?: string | null;
    size: number;
}
export declare function Avatar({ address, imageUrl, loading, size }: AvatarProps): JSX.Element;
export {};
