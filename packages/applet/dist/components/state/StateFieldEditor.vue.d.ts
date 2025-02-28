import { CustomInspectorState } from '@vue/devtools-kit';
import { EditorAddNewPropType, EditorInputValidType } from '../../composables/state-editor';
type __VLS_Props = {
    data: CustomInspectorState & {
        key?: string;
    };
    hovering: boolean;
    depth: number;
    showAddIfNeeded?: boolean;
    disableEdit?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    enableEditInput: (type: EditorInputValidType) => any;
    addNewProp: (type: EditorAddNewPropType) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEnableEditInput?: ((type: EditorInputValidType) => any) | undefined;
    onAddNewProp?: ((type: EditorAddNewPropType) => any) | undefined;
}>, {
    showAddIfNeeded: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
