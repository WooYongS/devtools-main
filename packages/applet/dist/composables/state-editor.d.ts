import { Ref } from 'vue';
interface StateEditorContext {
    nodeId: string;
    inspectorId: string;
    disableEdit: boolean;
}
export declare function createStateEditorContext(initial: StateEditorContext): {
    context: Ref<{
        nodeId: string;
        inspectorId: string;
        disableEdit: boolean;
    }, StateEditorContext | {
        nodeId: string;
        inspectorId: string;
        disableEdit: boolean;
    }>;
};
export declare function useStateEditorContext(): Ref<StateEditorContext, StateEditorContext>;
export type EditorInputValidType = 'number' | 'string' | 'object' | 'null';
export type EditorAddNewPropType = 'object' | 'array';
export declare function useStateEditor(): {
    editingText: Ref<string, string>;
    editing: Ref<boolean, boolean>;
    toggleEditing(t?: EditorInputValidType): void;
    editingType: Ref<EditorInputValidType, EditorInputValidType>;
    nodeId: import('vue').ComputedRef<string>;
};
export declare function useStateEditorDrafting(): {
    addNewProp: (type: EditorAddNewPropType, data: any) => void;
    resetDrafting: () => void;
    draftingNewProp: Ref<{
        enable: boolean;
        key: string;
        value: string;
    }, {
        enable: boolean;
        key: string;
        value: string;
    } | {
        enable: boolean;
        key: string;
        value: string;
    }>;
};
export {};
