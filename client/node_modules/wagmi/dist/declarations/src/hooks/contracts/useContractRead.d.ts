import { ReadContractArgs, ReadContractConfig, ReadContractResult } from '@wagmi/core';
import { QueryConfig } from '../../types';
declare type UseContractReadArgs = Partial<ReadContractConfig> & {
    /** If set to `true`, the cache will depend on the block number */
    cacheOnBlock?: boolean;
    /** Subscribe to changes */
    watch?: boolean;
};
export declare type UseContractReadConfig = QueryConfig<ReadContractResult, Error>;
export declare const queryKey: ([contractConfig, functionName, { args, chainId, overrides }, { blockNumber },]: [ReadContractArgs, string, Partial<ReadContractConfig>, {
    blockNumber?: number | undefined;
}]) => readonly [{
    readonly entity: "readContract";
    readonly args: any;
    readonly blockNumber: number | undefined;
    readonly chainId: number | undefined;
    readonly contractConfig: ReadContractArgs;
    readonly functionName: string;
    readonly overrides: import("ethers").CallOverrides | undefined;
}];
export declare function useContractRead(contractConfig: ReadContractArgs, functionName: string, { args, chainId: chainId_, overrides, cacheOnBlock, cacheTime, enabled: enabled_, staleTime, suspense, watch, onError, onSettled, onSuccess, }?: UseContractReadArgs & UseContractReadConfig): Pick<import("react-query").QueryObserverResult<import("ethers/lib/utils").Result, Error>, "data" | "error" | "isError" | "isLoading" | "isSuccess" | "isFetched" | "isFetching" | "isRefetching" | "refetch" | "fetchStatus"> & {
    isIdle: boolean;
    status: "error" | "loading" | "success" | "idle";
    internal: Pick<import("react-query").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isFetchedAfterMount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
export {};
