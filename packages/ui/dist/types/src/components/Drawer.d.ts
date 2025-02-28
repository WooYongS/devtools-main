import { OverlayProps } from './Overlay';
type __VLS_Props = {
    modelValue: boolean;
    mountTo?: string | HTMLElement;
    placement?: 'left' | 'right' | 'top' | 'bottom';
    closeOutside?: boolean;
    closable?: boolean;
    contentClass?: string;
    permanent?: boolean;
    contentBlur?: boolean;
    top?: string | HTMLElement;
} & OverlayProps;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (modelValue: boolean) => any;
    close: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    closable: boolean;
    mountTo: string | HTMLElement;
    placement: "left" | "right" | "top" | "bottom";
    closeOutside: boolean;
    permanent: boolean;
    contentBlur: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
