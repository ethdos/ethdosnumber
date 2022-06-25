export declare const wallet: {
    argent: ({ chains }: import("./argent/argent").ArgentOptions) => import("../Wallet").Wallet<import("wagmi").Connector<any, any>>;
    brave: ({ chains, shimDisconnect }: import("./brave/brave").BraveOptions) => import("../Wallet").Wallet<import("wagmi").Connector<any, any>>;
    coinbase: ({ appName, chains }: import("./coinbase/coinbase").CoinbaseOptions) => import("../Wallet").Wallet<import("wagmi").Connector<any, any>>;
    imToken: ({ chains }: import("./imToken/imToken").ImTokenOptions) => import("../Wallet").Wallet<import("wagmi").Connector<any, any>>;
    injected: ({ chains, shimDisconnect, }: import("./injected/injected").InjectedOptions) => import("../Wallet").Wallet<import("wagmi").Connector<any, any>>;
    ledger: ({ chains }: import("./ledger/ledger").LedgerOptions) => import("../Wallet").Wallet<import("wagmi").Connector<any, any>>;
    metaMask: ({ chains, shimDisconnect, }: import("./metaMask/metaMask").MetaMaskOptions) => import("../Wallet").Wallet<import("wagmi").Connector<any, any>>;
    rainbow: ({ chains }: import("./rainbow/rainbow").RainbowOptions) => import("../Wallet").Wallet<import("wagmi").Connector<any, any>>;
    steak: ({ chains }: import("./steak/steak").SteakOptions) => import("../Wallet").Wallet<import("wagmi").Connector<any, any>>;
    trust: ({ chains, shimDisconnect }: import("./trust/trust").TrustOptions) => import("../Wallet").Wallet<import("wagmi").Connector<any, any>>;
    walletConnect: ({ chains }: import("./walletConnect/walletConnect").WalletConnectOptions) => import("../Wallet").Wallet<import("wagmi").Connector<any, any>>;
};
