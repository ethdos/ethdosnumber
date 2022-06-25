import { FetchEnsResolverArgs, FetchEnsResolverResult } from '@wagmi/core';
import { QueryConfig } from '../../types';
export declare type UseEnsResolverArgs = Partial<FetchEnsResolverArgs>;
export declare type UseEnsResolverConfig = QueryConfig<FetchEnsResolverResult, Error>;
export declare const queryKey: ({ chainId, name, }: {
    chainId?: number | undefined;
    name?: string | undefined;
}) => readonly [{
    readonly entity: "ensResolver";
    readonly chainId: number | undefined;
    readonly name: string | undefined;
}];
export declare function useEnsResolver({ cacheTime, chainId: chainId_, enabled, name, staleTime, // 24 hours
suspense, onError, onSettled, onSuccess, }?: UseEnsResolverArgs & UseEnsResolverConfig): Pick<import("react-query").QueryObserverResult<FetchEnsResolverResult, Error>, "data" | "error" | "isError" | "isLoading" | "isSuccess" | "isFetched" | "isFetching" | "isRefetching" | "refetch" | "fetchStatus"> & {
    isIdle: boolean;
    status: "error" | "loading" | "success" | "idle";
    internal: Pick<import("react-query").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isFetchedAfterMount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
