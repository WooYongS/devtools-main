import { Ref } from 'vue';
export declare function createSelectedContext(): {
    selected: Ref<string, string>;
};
export declare function useSelect(): {
    selected: Ref<string, string>;
    select: (value: string) => void;
};
