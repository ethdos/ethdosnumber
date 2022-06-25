import { GetAccountResult } from '@wagmi/core';
import { QueryConfig } from '../../types';
export declare type UseAccountConfig = Pick<QueryConfig<GetAccountResult, Error>, 'suspense' | 'onError' | 'onSettled' | 'onSuccess'>;
export declare const queryKey: () => readonly [{
    readonly entity: "account";
}];
export declare function useAccount({ suspense, onError, onSettled, onSuccess, }?: UseAccountConfig): Pick<import("react-query").QueryObserverResult<GetAccountResult<import("@ethersproject/providers").BaseProvider>, Error>, "data" | "error" | "isError" | "isLoading" | "isSuccess" | "isFetched" | "isFetching" | "isRefetching" | "refetch" | "fetchStatus"> & {
    isIdle: boolean;
    status: "error" | "loading" | "success" | "idle";
    internal: Pick<import("react-query").QueryObserverResult<unknown, unknown>, "isLoadingError" | "isRefetchError" | "dataUpdatedAt" | "errorUpdatedAt" | "failureCount" | "isFetchedAfterMount" | "isPaused" | "isPlaceholderData" | "isPreviousData" | "isStale" | "remove">;
};
