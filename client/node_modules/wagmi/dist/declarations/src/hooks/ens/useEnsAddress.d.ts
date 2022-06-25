import { FetchEnsAddressArgs, FetchEnsAddressResult } from '@wagmi/core';
import { QueryConfig } from '../../types';
export declare type UseEnsAddressArgs = Partial<FetchEnsAddressArgs>;
export declare type UseEnsAddressConfig = QueryConfig<FetchEnsAddressResult, Error>;
export declare const queryKey: ({ chainId, name, }: {
    chainId?: number | undefined;
    name?: string | undefined;
}) => readonly [{
    readonly entity: "ensAddress";
    readonly chainId: number | undefined;
    readonly name: string | undefined;
}];
export declare function useEnsAddress({ cacheTime, chainId: chainId_, enabled, name, staleTime, // 24 hours
suspense, onError, onSettled, onSuccess, }?: UseEnsAddressArgs & UseEnsAddressConfig): Pick<import("react-query").QueryObserverResult<FetchEnsAddressResult, Error>, "data" | "error" | "isError" | "isLoading" | "isSuccess" | "isFetched" | "isFetching" | "isRefetching" | "refetch" | "fetchStatus"> & {
    isIdle: boolean;
    status: "error" | "loading" | "success" | "idle";
    internal: Pick<import("react-query").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isFetchedAfterMount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
