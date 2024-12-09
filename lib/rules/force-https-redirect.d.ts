import type { ResponseHeader } from "../shared";
export type ForceHTTPSRedirectOption = boolean | [true, Partial<{
    maxAge: number;
    includeSubDomains: boolean;
    preload: boolean;
}>];
export declare const createHSTSHeaderValue: (option?: ForceHTTPSRedirectOption) => string | undefined;
export declare const createForceHTTPSRedirectHeader: (option?: ForceHTTPSRedirectOption, headerValueCreator?: (option?: ForceHTTPSRedirectOption) => string | undefined) => ResponseHeader;
