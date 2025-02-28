import { CustomInspectorState } from '@vue/devtools-kit';
/**
 * Searches a key or value in the object, with a maximum deepness
 * @param {*} obj Search target
 * @param {string} searchTerm Search string
 * @returns {boolean} Search match
 */
export declare function searchDeepInObject(obj: any, searchTerm: any): any;
export declare function specialTokenToString(value: any): false | "null" | "undefined" | "NaN" | "Infinity" | "-Infinity";
export declare function filterInspectorState<T extends CustomInspectorState>(params: {
    state: Record<string, T[]>;
    filterKey?: string | null | undefined;
    processGroup?: (item: T[]) => T[];
}): {};
