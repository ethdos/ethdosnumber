import React, { ReactNode } from 'react';
export declare type DisclaimerComponent = React.FunctionComponent<{
    Text: React.FunctionComponent<{
        children: ReactNode;
    }>;
    Link: React.FunctionComponent<{
        children: ReactNode;
        href: string;
    }>;
}>;
export declare const defaultAppInfo: {
    appName: undefined;
    disclaimer: undefined;
    learnMoreUrl: string;
};
export declare const AppContext: React.Context<{
    appName?: string | undefined;
    learnMoreUrl?: string | undefined;
    disclaimer?: DisclaimerComponent | undefined;
}>;
