import { TimelineEventOptions } from '@vue/devtools-kit';
type __VLS_Props = {
    data: Array<TimelineEventOptions['event'] & {
        color?: string;
        id?: number;
    }>;
};
type __VLS_PublicProps = {
    modelValue?: any;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: any) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    scrollerRef: any;
}, HTMLDivElement>;
export default _default;
