/// <reference types="react" />
export declare enum WalletStep {
    None = "NONE",
    Get = "GET",
    Connect = "CONNECT",
    Download = "DOWNLOAD",
    Instructions = "INSTRUCTIONS"
}
export declare function DesktopOptions({ onClose }: {
    onClose: () => void;
}): JSX.Element;
