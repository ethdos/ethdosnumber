import { SwitchNetworkArgs, SwitchNetworkResult } from '@wagmi/core';
import { MutationConfig } from '../../types';
export declare type UseNetworkArgs = Partial<SwitchNetworkArgs>;
export declare type UseNetworkConfig = MutationConfig<SwitchNetworkResult, Error, SwitchNetworkArgs>;
export declare const mutationKey: (args: UseNetworkArgs) => {
    chainId?: number | undefined;
    entity: string;
}[];
export declare function useNetwork({ chainId, onError, onMutate, onSettled, onSuccess, }?: UseNetworkArgs & UseNetworkConfig): {
    readonly activeChain: (import("@wagmi/core").Chain & {
        id: number;
        unsupported?: boolean | undefined;
    }) | undefined;
    readonly chains: import("@wagmi/core").Chain[];
    readonly data: import("@wagmi/core").Chain | undefined;
    readonly error: Error | null;
    readonly isError: boolean;
    readonly isIdle: boolean;
    readonly isLoading: boolean;
    readonly isSuccess: boolean;
    readonly pendingChainId: number | undefined;
    readonly reset: () => void;
    readonly status: "error" | "loading" | "success" | "idle";
    readonly switchNetwork: ((chainId_?: number | undefined) => void) | undefined;
    readonly switchNetworkAsync: ((chainId_?: number | undefined) => Promise<import("@wagmi/core").Chain>) | undefined;
    readonly variables: SwitchNetworkArgs | undefined;
};
