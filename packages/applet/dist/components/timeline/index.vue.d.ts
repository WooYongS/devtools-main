type __VLS_Props = {
    layerIds: string[];
    pluginId: string;
    docLink: string;
    githubRepoLink?: string;
    headerVisible?: boolean;
    switcherVisible?: boolean;
};
declare function clear(): void;
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    clear: typeof clear;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    headerVisible: boolean;
    switcherVisible: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
