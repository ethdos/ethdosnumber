import { FetchBalanceArgs, FetchBalanceResult } from '@wagmi/core';
import { QueryConfig } from '../../types';
export declare type UseBalanceArgs = Partial<FetchBalanceArgs> & {
    /** Subscribe to changes */
    watch?: boolean;
};
export declare type UseBalanceConfig = QueryConfig<FetchBalanceResult, Error>;
export declare const queryKey: ({ addressOrName, chainId, formatUnits, token, }: Partial<FetchBalanceArgs> & {
    chainId?: number | undefined;
}) => readonly [{
    readonly entity: "balance";
    readonly addressOrName: string | undefined;
    readonly chainId: number | undefined;
    readonly formatUnits: number | "wei" | "kwei" | "mwei" | "gwei" | "szabo" | "finney" | "ether" | undefined;
    readonly token: string | undefined;
}];
export declare function useBalance({ addressOrName, cacheTime, chainId: chainId_, enabled, formatUnits, staleTime, suspense, token, watch, onError, onSettled, onSuccess, }?: UseBalanceArgs & UseBalanceConfig): Pick<import("react-query").QueryObserverResult<FetchBalanceResult, Error>, "data" | "error" | "isError" | "isLoading" | "isSuccess" | "isFetched" | "isFetching" | "isRefetching" | "refetch" | "fetchStatus"> & {
    isIdle: boolean;
    status: "error" | "loading" | "success" | "idle";
    internal: Pick<import("react-query").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isFetchedAfterMount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
