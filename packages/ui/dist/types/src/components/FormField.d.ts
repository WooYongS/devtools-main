type __VLS_Props = {
    modelValue: string;
    status?: 'normal' | 'danger' | 'success' | 'warning';
    showMessage?: boolean;
    message?: string;
    placeholder?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    message: string;
    status: "normal" | "danger" | "success" | "warning";
    showMessage: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
