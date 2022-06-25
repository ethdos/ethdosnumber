import { FetchTokenArgs, FetchTokenResult } from '@wagmi/core';
import { QueryConfig } from '../../types';
export declare type UseTokenArgs = Partial<FetchTokenArgs>;
export declare type UseTokenConfig = QueryConfig<FetchTokenResult, Error>;
export declare const queryKey: ({ address, chainId, formatUnits, }: Partial<FetchTokenArgs> & {
    chainId?: number | undefined;
}) => readonly [{
    readonly entity: "token";
    readonly address: string | undefined;
    readonly chainId: number | undefined;
    readonly formatUnits: number | "wei" | "kwei" | "mwei" | "gwei" | "szabo" | "finney" | "ether" | undefined;
}];
export declare function useToken({ address, chainId: chainId_, formatUnits, cacheTime, enabled, staleTime, // 24 hours
suspense, onError, onSettled, onSuccess, }?: UseTokenArgs & UseTokenConfig): Pick<import("react-query").QueryObserverResult<FetchTokenResult, Error>, "data" | "error" | "isError" | "isLoading" | "isSuccess" | "isFetched" | "isFetching" | "isRefetching" | "refetch" | "fetchStatus"> & {
    isIdle: boolean;
    status: "error" | "loading" | "success" | "idle";
    internal: Pick<import("react-query").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isFetchedAfterMount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
