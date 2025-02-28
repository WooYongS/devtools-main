type __VLS_Props = {
    isDark?: boolean;
    animation?: boolean;
    animationDuration?: number;
};
/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 */
declare function toggle(event?: MouseEvent): void;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            mode: "dark" | "light" | "auto";
            isDark: boolean;
            toggle: typeof toggle;
        }): any;
    };
    refs: {};
    rootEl: HTMLSpanElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    animation: boolean;
    isDark: boolean;
    animationDuration: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLSpanElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
