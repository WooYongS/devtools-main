import { ButtonProps } from './Button';
declare const _default: <Value extends number | string, Label, M extends boolean>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:modelValue"?: ((value: M extends true ? Value[] : Value) => any) | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>, "onUpdate:modelValue"> & {
        modelValue: M extends true ? Value[] : Value;
        multiple?: M;
        options: {
            label: Label;
            value: Value;
        }[];
        placeholder?: string;
        autoClose?: boolean;
        disabled?: boolean;
        labelRenderer?: (label: Label) => string;
        buttonProps?: ButtonProps;
    } & any> & import('vue').PublicProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: any;
    emit: (evt: "update:modelValue", value: M extends true ? Value[] : Value) => void;
}>) => import('vue').VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
