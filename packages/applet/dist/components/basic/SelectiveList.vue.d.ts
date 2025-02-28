import { CustomInspectorNode } from '@vue/devtools-kit';
type __VLS_Props = {
    data: CustomInspectorNode[];
};
type __VLS_PublicProps = {
    modelValue?: any;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (...args: any[]) => void;
    "update:modelValue": (value: any) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLUListElement>;
export default _default;
