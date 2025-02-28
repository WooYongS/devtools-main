type __VLS_Props = {
    modelValue: string;
    placeholder?: string;
    variant?: 'normal' | 'accent' | 'flat' | 'warning';
    disabled?: boolean;
    leftIcon?: string;
    rightIcon?: string;
    loading?: boolean;
    autoFocus?: boolean;
    loadingDebounceTime?: number;
    readonly?: boolean;
    type?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    updateFocused: (value: boolean) => any;
    keyTab: (e: KeyboardEvent) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onUpdateFocused?: ((value: boolean) => any) | undefined;
    onKeyTab?: ((e: KeyboardEvent) => any) | undefined;
}>, {
    type: string;
    loading: boolean;
    disabled: boolean;
    variant: "normal" | "accent" | "flat" | "warning";
    placeholder: string;
    autoFocus: boolean;
    loadingDebounceTime: number;
    readonly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
