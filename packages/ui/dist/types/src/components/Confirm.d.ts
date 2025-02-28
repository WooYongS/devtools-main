type __VLS_Props = {
    modelValue: boolean;
    content: string;
    cancelText?: string;
    confirmText?: string;
    width?: string;
    height?: string;
    title?: string;
    loading?: boolean;
    autoClose?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            class: string;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
    close: () => any;
    confirm: () => any;
    cancel: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
    onConfirm?: (() => any) | undefined;
    onCancel?: (() => any) | undefined;
}>, {
    title: string;
    loading: boolean;
    autoClose: boolean;
    width: string;
    height: string;
    cancelText: string;
    confirmText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
