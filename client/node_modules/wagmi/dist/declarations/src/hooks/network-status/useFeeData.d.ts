import { FetchFeeDataArgs, FetchFeeDataResult } from '@wagmi/core';
import { QueryConfig } from '../../types';
declare type UseFeeDataArgs = Partial<FetchFeeDataArgs> & {
    /** Subscribe to changes */
    watch?: boolean;
};
export declare type UseFeedDataConfig = QueryConfig<FetchFeeDataResult, Error>;
export declare const queryKey: ({ chainId, formatUnits, }: Partial<FetchFeeDataArgs> & {
    chainId?: number | undefined;
}) => readonly [{
    readonly entity: "feeData";
    readonly chainId: number | undefined;
    readonly formatUnits: number | "wei" | "kwei" | "mwei" | "gwei" | "szabo" | "finney" | "ether" | undefined;
}];
export declare function useFeeData({ cacheTime, chainId: chainId_, enabled, formatUnits, staleTime, suspense, watch, onError, onSettled, onSuccess, }?: UseFeeDataArgs & UseFeedDataConfig): Pick<import("react-query").QueryObserverResult<FetchFeeDataResult, Error>, "data" | "error" | "isError" | "isLoading" | "isSuccess" | "isFetched" | "isFetching" | "isRefetching" | "refetch" | "fetchStatus"> & {
    isIdle: boolean;
    status: "error" | "loading" | "success" | "idle";
    internal: Pick<import("react-query").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isFetchedAfterMount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
export {};
