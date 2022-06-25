import { providers } from 'ethers';
import { GetWebSocketProviderArgs } from '@wagmi/core';
export declare type UseWebSocketProviderArgs = Partial<GetWebSocketProviderArgs>;
export declare function useWebSocketProvider<TWebSocketProvider extends providers.WebSocketProvider>({ chainId }?: UseWebSocketProviderArgs): import("@wagmi/core").GetWebSocketProviderResult<TWebSocketProvider>;
