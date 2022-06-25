import { QueryFunction, QueryKey, QueryObserverResult, UseQueryOptions } from 'react-query';
declare type QueryResult<TData, TError> = Pick<QueryObserverResult<TData, TError>, 'data' | 'error' | 'fetchStatus' | 'isError' | 'isFetched' | 'isFetching' | 'isLoading' | 'isRefetching' | 'isSuccess' | 'refetch'> & {
    isIdle: boolean;
    status: 'idle' | 'loading' | 'success' | 'error';
    internal: Pick<QueryObserverResult, 'dataUpdatedAt' | 'errorUpdatedAt' | 'failureCount' | 'isFetchedAfterMount' | 'isLoadingError' | 'isPaused' | 'isPlaceholderData' | 'isPreviousData' | 'isRefetchError' | 'isStale' | 'remove'>;
};
export declare function useQuery<TQueryFnData, TError, TData, TQueryData, TQueryKey extends QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options_?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>): QueryResult<TData, TError>;
export {};
