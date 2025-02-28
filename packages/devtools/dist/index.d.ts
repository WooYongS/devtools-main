import * as _vue_devtools_kit from '@vue/devtools-kit';
export * from '@vue/devtools-kit';
export { addCustomCommand, addCustomTab, onDevToolsClientConnected, onDevToolsConnected, removeCustomCommand } from '@vue/devtools-kit';
import { connect } from '@vue/devtools-electron';

declare const devtools: {
    connect: typeof connect;
    hook: _vue_devtools_kit.VueHooks;
    init: () => void;
    ctx: _vue_devtools_kit.DevtoolsContext;
    api: {
        getInspectorTree(payload: Pick<_vue_devtools_kit.DevToolsV6PluginAPIHookPayloads[_vue_devtools_kit.DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_TREE], "inspectorId" | "filter">): Promise<never[]>;
        getInspectorState(payload: Pick<_vue_devtools_kit.DevToolsV6PluginAPIHookPayloads[_vue_devtools_kit.DevToolsV6PluginAPIHookKeys.GET_INSPECTOR_STATE], "inspectorId" | "nodeId">): Promise<_vue_devtools_kit.CustomInspectorState>;
        editInspectorState(payload: _vue_devtools_kit.DevToolsV6PluginAPIHookPayloads[_vue_devtools_kit.DevToolsV6PluginAPIHookKeys.EDIT_INSPECTOR_STATE]): void;
        sendInspectorState(inspectorId: string): void;
        inspectComponentInspector(): Promise<string>;
        cancelInspectComponentInspector(): void;
        getComponentRenderCode(id: string): any;
        scrollToComponent(id: string): void;
        openInEditor: typeof _vue_devtools_kit.openInEditor;
        getVueInspector: typeof _vue_devtools_kit.getComponentInspector;
        toggleApp(id: string, options?: {
            inspectingComponent?: boolean;
        }): void;
        inspectDOM(instanceId: string): void;
        updatePluginSettings(pluginId: string, key: string, value: string): void;
        getPluginSettings(pluginId: string): {
            options: Record<string, {
                label: string;
                description?: string;
            } & ({
                type: "boolean";
                defaultValue: boolean;
            } | {
                type: "choice";
                defaultValue: string | number;
                options: {
                    value: string | number;
                    label: string;
                }[];
                component?: "select" | "button-group";
            } | {
                type: "text";
                defaultValue: string;
            })> | null;
            values: any;
        };
    };
};

export { devtools };
