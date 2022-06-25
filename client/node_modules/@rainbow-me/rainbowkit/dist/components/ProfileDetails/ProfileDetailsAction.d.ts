/// <reference types="react" />
interface ProfileDetailsActionProps {
    label: string;
    action?: () => void;
    icon: JSX.Element;
    url?: string;
}
export declare function ProfileDetailsAction({ action, icon, label, url, }: ProfileDetailsActionProps): JSX.Element;
export {};
