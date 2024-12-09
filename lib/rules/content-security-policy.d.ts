import type { ResponseHeader } from "../shared";
type DirectiveSource = string | string[];
type PluginTypes = string | string[];
type Sandbox = true | "allow-downloads-without-user-activation" | "allow-forms" | "allow-modals" | "allow-orientation-lock" | "allow-pointer-lock" | "allow-popups" | "allow-popups-to-escape-sandbox" | "allow-presentation" | "allow-same-origin" | "allow-scripts" | "allow-storage-access-by-user-activation" | "allow-top-navigation" | "allow-top-navigation-by-user-activation";
type FetchDirective = {
    childSrc: DirectiveSource;
    "child-src": DirectiveSource;
    connectSrc: DirectiveSource;
    "connect-src": DirectiveSource;
    defaultSrc: DirectiveSource;
    "default-src": DirectiveSource;
    fontSrc: DirectiveSource;
    "font-src": DirectiveSource;
    frameSrc: DirectiveSource;
    "frame-src": DirectiveSource;
    imgSrc: DirectiveSource;
    "img-src": DirectiveSource;
    manifestSrc: DirectiveSource;
    "manifest-src": DirectiveSource;
    mediaSrc: DirectiveSource;
    "media-src": DirectiveSource;
    prefetchSrc: DirectiveSource;
    "prefetch-src": DirectiveSource;
    objectSrc: DirectiveSource;
    "object-src": DirectiveSource;
    scriptSrc: DirectiveSource;
    "script-src": DirectiveSource;
    scriptSrcElem: DirectiveSource;
    "script-src-elem": DirectiveSource;
    scriptSrcAttr: DirectiveSource;
    "script-src-attr": DirectiveSource;
    styleSrc: DirectiveSource;
    "style-src": DirectiveSource;
    styleSrcElem: DirectiveSource;
    "style-src-elem": DirectiveSource;
    styleSrcAttr: DirectiveSource;
    "style-src-attr": DirectiveSource;
    workerSrc: DirectiveSource;
    "worker-src": DirectiveSource;
};
type DocumentDirective = {
    baseURI: DirectiveSource;
    "base-uri": DirectiveSource;
    pluginTypes: PluginTypes;
    "plugin-types": PluginTypes;
    sandbox: Sandbox;
};
type NavigationDirective = {
    formAction: DirectiveSource;
    "form-action": DirectiveSource;
    frameAncestors: DirectiveSource;
    "frame-ancestors": DirectiveSource;
    navigateTo: DirectiveSource;
    "navigate-to": DirectiveSource;
};
type ReportingDirective = {
    reportURI: string | URL | (string | URL)[];
    "report-uri": string | URL | (string | URL)[];
    reportTo: string;
    "report-to": string;
};
export type ContentSecurityPolicyOption = false | {
    directives: Partial<FetchDirective> & Partial<DocumentDirective> & Partial<NavigationDirective> & Partial<ReportingDirective>;
    reportOnly?: boolean;
};
export declare const getProperHeaderName: (reportOnly?: boolean) => "Content-Security-Policy" | "Content-Security-Policy-Report-Only";
export declare const createDirectiveValue: <T>(directiveName: string, value: T | T[], arrayWrapper?: <T_1>(value: T_1 | T_1[]) => T_1[]) => string;
export declare const convertFetchDirectiveToString: (directive?: Partial<FetchDirective>) => string;
export declare const convertDocumentDirectiveToString: (directive?: Partial<DocumentDirective>) => string;
export declare const convertNavigationDirectiveToString: (directive?: Partial<NavigationDirective>) => string;
export declare const convertReportingDirectiveToString: (directive?: Partial<ReportingDirective>) => string;
export declare const createContentSecurityPolicyOptionHeaderValue: (option?: ContentSecurityPolicyOption, fetchDirectiveToStringConverter?: (directive?: Partial<FetchDirective>) => string, documentDirectiveToStringConverter?: (directive?: Partial<DocumentDirective>) => string, navigationDirectiveToStringConverter?: (directive?: Partial<NavigationDirective>) => string, reportingDirectiveToStringConverter?: (directive?: Partial<ReportingDirective>) => string) => string | undefined;
export declare const createContentSecurityPolicyHeader: (option?: ContentSecurityPolicyOption, properHeaderNameGetter?: (reportOnly?: boolean) => "Content-Security-Policy" | "Content-Security-Policy-Report-Only", headerValueCreator?: (option?: ContentSecurityPolicyOption, fetchDirectiveToStringConverter?: (directive?: Partial<FetchDirective>) => string, documentDirectiveToStringConverter?: (directive?: Partial<DocumentDirective>) => string, navigationDirectiveToStringConverter?: (directive?: Partial<NavigationDirective>) => string, reportingDirectiveToStringConverter?: (directive?: Partial<ReportingDirective>) => string) => string | undefined) => ResponseHeader | undefined;
export {};