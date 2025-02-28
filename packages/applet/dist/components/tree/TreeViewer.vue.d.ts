import { ComponentTreeNode, InspectorTree } from '@vue/devtools-kit';
type __VLS_Props = {
    data: ComponentTreeNode[] | InspectorTree[];
    depth: number;
    withTag: boolean;
};
type __VLS_PublicProps = {
    modelValue?: any;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    leave: (...args: any[]) => void;
    hover: (...args: any[]) => void;
    "update:modelValue": (value: any) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    onLeave?: ((...args: any[]) => any) | undefined;
    onHover?: ((...args: any[]) => any) | undefined;
}>, {
    depth: number;
    withTag: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
