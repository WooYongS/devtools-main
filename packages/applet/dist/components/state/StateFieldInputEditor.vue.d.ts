import { customTypeEnums } from '@vue/devtools-kit';
type __VLS_Props = {
    modelValue: string;
    customType?: customTypeEnums;
    showActions?: boolean;
    autoFocus?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    cancel: () => any;
    submit: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onCancel?: (() => any) | undefined;
    onSubmit?: (() => any) | undefined;
}>, {
    showActions: boolean;
    autoFocus: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLSpanElement>;
export default _default;
