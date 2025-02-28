import { CustomInspectorState } from '@vue/devtools-kit';
type __VLS_Props = {
    data: Record<string, CustomInspectorState[]>;
    nodeId: string;
    inspectorId: string;
    disableEdit?: boolean;
    expandedStateId?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    disableEdit: boolean;
    expandedStateId: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
