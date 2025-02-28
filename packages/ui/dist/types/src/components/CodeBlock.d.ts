import { BuiltinLanguage } from 'shiki';
export interface VueCodeBlockProps {
    code: string;
    lang?: BuiltinLanguage | 'text';
    lines?: boolean;
    transformRendered?: (code: string) => string;
}
declare const _default: import('vue').DefineComponent<VueCodeBlockProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    loaded: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<VueCodeBlockProps> & Readonly<{
    onLoaded?: ((...args: any[]) => any) | undefined;
}>, {
    lines: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
