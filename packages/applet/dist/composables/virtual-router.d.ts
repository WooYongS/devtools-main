import { MaybeRef } from '@vueuse/core';
import { Component, ComputedRef, Ref } from 'vue';
export interface VirtualRoute {
    path: string;
    component: Component;
    icon?: string;
    name?: string;
}
export declare function registerVirtualRouter<const Routes extends VirtualRoute[], RoutePaths extends Routes[number]['path'] = Routes[number]['path']>(routes: MaybeRef<Routes>, props?: {
    defaultRoutePath?: RoutePaths;
}): {
    VirtualRouterView: import('vue').DefineComponent<{}, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | null, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    restoreRouter: () => void;
};
export declare function useVirtualRouter(): {
    push(path: string): void;
};
export declare function useVirtualRoute(): {
    routes: ComputedRef<VirtualRoute[]>;
    currentRoute: Ref<{
        path: string;
    }, {
        path: string;
    }>;
};
