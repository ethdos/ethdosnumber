import { FetchEnsNameArgs, FetchEnsNameResult } from '@wagmi/core';
import { QueryConfig } from '../../types';
export declare type UseEnsNameArgs = Partial<FetchEnsNameArgs>;
export declare type UseEnsNameConfig = QueryConfig<FetchEnsNameResult, Error>;
export declare const queryKey: ({ address, chainId, }: {
    address?: string | undefined;
    chainId?: number | undefined;
}) => readonly [{
    readonly entity: "ensName";
    readonly address: string | undefined;
    readonly chainId: number | undefined;
}];
export declare function useEnsName({ address, cacheTime, chainId: chainId_, enabled, staleTime, // 24 hours
suspense, onError, onSettled, onSuccess, }?: UseEnsNameArgs & UseEnsNameConfig): Pick<import("react-query").QueryObserverResult<FetchEnsNameResult, Error>, "data" | "error" | "isError" | "isLoading" | "isSuccess" | "isFetched" | "isFetching" | "isRefetching" | "refetch" | "fetchStatus"> & {
    isIdle: boolean;
    status: "error" | "loading" | "success" | "idle";
    internal: Pick<import("react-query").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isFetchedAfterMount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
