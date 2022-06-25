import { FetchEnsAvatarArgs, FetchEnsAvatarResult } from '@wagmi/core';
import { QueryConfig } from '../../types';
export declare type UseEnsAvatarArgs = Partial<FetchEnsAvatarArgs>;
export declare type UseEnsLookupConfig = QueryConfig<FetchEnsAvatarResult, Error>;
export declare const queryKey: ({ addressOrName, chainId, }: {
    addressOrName?: UseEnsAvatarArgs['addressOrName'];
    chainId?: number | undefined;
}) => readonly [{
    readonly entity: "ensAvatar";
    readonly addressOrName: string | undefined;
    readonly chainId: number | undefined;
}];
export declare function useEnsAvatar({ addressOrName, cacheTime, chainId: chainId_, enabled, staleTime, // 24 hours
suspense, onError, onSettled, onSuccess, }?: UseEnsAvatarArgs & UseEnsLookupConfig): Pick<import("react-query").QueryObserverResult<FetchEnsAvatarResult, Error>, "data" | "error" | "isError" | "isLoading" | "isSuccess" | "isFetched" | "isFetching" | "isRefetching" | "refetch" | "fetchStatus"> & {
    isIdle: boolean;
    status: "error" | "loading" | "success" | "idle";
    internal: Pick<import("react-query").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isFetchedAfterMount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
