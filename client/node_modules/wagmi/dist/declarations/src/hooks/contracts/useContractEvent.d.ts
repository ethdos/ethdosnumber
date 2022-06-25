import { ethers } from 'ethers';
import { UseContractConfig } from './useContract';
export declare type UseContractEventConfig = {
    /** Chain id to use for provider */
    chainId?: number;
    /** Receive only a single event */
    once?: boolean;
};
export declare const useContractEvent: <Contract extends ethers.Contract = ethers.Contract>(contractConfig: UseContractConfig, eventName: Parameters<Contract["on"]>[0], listener: Parameters<Contract["on"]>[1], { chainId, once }?: UseContractEventConfig) => void;
