export interface CustomInspectorType {
    id: string;
    label: string;
    logo: string;
    icon: string;
    packageName: string | undefined;
    homepage: string | undefined;
    pluginId: string;
}
export declare function useCustomInspector(): {
    registeredInspector: import('vue').Ref<{
        id: string;
        label: string;
        logo: string;
        icon: string;
        packageName: string | undefined;
        homepage: string | undefined;
        pluginId: string;
    }[], CustomInspectorType[] | {
        id: string;
        label: string;
        logo: string;
        icon: string;
        packageName: string | undefined;
        homepage: string | undefined;
        pluginId: string;
    }[]>;
    register: (inspector: CustomInspectorType) => void;
};
