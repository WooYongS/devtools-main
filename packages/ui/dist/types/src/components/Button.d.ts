export interface ButtonProps {
    type?: ButtonType;
    round?: 'full' | 'normal' | false;
    loading?: boolean;
    disabled?: boolean;
    size?: 'normal' | 'mini';
    flat?: boolean;
    outlined?: boolean;
}
export type ButtonType = 'default' | 'primary' | 'accent' | 'danger' | 'warning' | 'info' | 'success';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {
            class: string;
        }): any;
        default?(_: {}): any;
        'icon-right'?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (e: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<ButtonProps> & Readonly<{
    onClick?: ((e: MouseEvent) => any) | undefined;
}>, {
    flat: boolean;
    type: ButtonType;
    round: "full" | "normal" | false;
    loading: boolean;
    disabled: boolean;
    size: "normal" | "mini";
    outlined: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
