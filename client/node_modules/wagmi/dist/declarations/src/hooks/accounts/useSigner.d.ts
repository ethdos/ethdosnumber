import { FetchSignerResult } from '@wagmi/core';
import { QueryConfig } from '../../types';
export declare type UseSignerConfig = Omit<QueryConfig<FetchSignerResult, Error>, 'cacheTime' | 'staleTime' | 'enabled'>;
export declare const queryKey: () => readonly [{
    readonly entity: "signer";
}];
export declare function useSigner({ suspense, onError, onSettled, onSuccess, }?: UseSignerConfig): Pick<import("react-query").QueryObserverResult<FetchSignerResult, Error>, "data" | "error" | "isError" | "isLoading" | "isSuccess" | "isFetched" | "isFetching" | "isRefetching" | "refetch" | "fetchStatus"> & {
    isIdle: boolean;
    status: "error" | "loading" | "success" | "idle";
    internal: Pick<import("react-query").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isFetchedAfterMount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
