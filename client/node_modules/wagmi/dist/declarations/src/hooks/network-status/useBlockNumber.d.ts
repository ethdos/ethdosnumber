import { FetchBlockNumberArgs, FetchBlockNumberResult } from '@wagmi/core';
import { QueryConfig } from '../../types';
declare type UseBlockNumberArgs = Partial<FetchBlockNumberArgs> & {
    /** Subscribe to changes */
    watch?: boolean;
};
export declare type UseBlockNumberConfig = QueryConfig<FetchBlockNumberResult, Error>;
export declare const queryKey: ({ chainId }: {
    chainId?: number | undefined;
}) => readonly [{
    readonly entity: "blockNumber";
    readonly chainId: number | undefined;
}];
export declare function useBlockNumber({ cacheTime, chainId: chainId_, enabled, staleTime, suspense, watch, onError, onSettled, onSuccess, }?: UseBlockNumberArgs & UseBlockNumberConfig): Pick<import("react-query").QueryObserverResult<number, Error>, "data" | "error" | "isError" | "isLoading" | "isSuccess" | "isFetched" | "isFetching" | "isRefetching" | "refetch" | "fetchStatus"> & {
    isIdle: boolean;
    status: "error" | "loading" | "success" | "idle";
    internal: Pick<import("react-query").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isFetchedAfterMount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
export {};
